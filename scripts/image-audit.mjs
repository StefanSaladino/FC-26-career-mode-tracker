import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const context = { window: {}, console };
vm.createContext(context);
vm.runInContext(read('data.js'), context, { filename: 'data.js' });
vm.runInContext(read('site-overrides.js'), context, { filename: 'site-overrides.js' });

const data = context.window.NAPOLI_DATA;
if (!data || !Array.isArray(data.articles)) throw new Error('Article data did not load.');

const expectedIds = [
  'bayern-test',
  'chiesa-pisa',
  'pio-shirt',
  'three-nos',
  'paz-kdb',
  'peacock-problem',
  'italy-pipeline',
  'captain-future',
  'stach-insurance'
];

const actualIds = data.articles.map(article => article.id);
for (const id of expectedIds) {
  if (!actualIds.includes(id)) throw new Error(`Expected article missing: ${id}`);
}

function cleanLocalSrc(src) {
  return String(src || '').split('?')[0].split('#')[0];
}

function jpegDimensions(buffer) {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buffer[offset + 1];
    offset += 2;
    if (marker === 0xd8 || marker === 0xd9) continue;
    if (offset + 1 >= buffer.length) break;
    const length = buffer.readUInt16BE(offset);
    const sof = [0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf];
    if (sof.includes(marker) && offset + 7 < buffer.length) {
      return {
        height: buffer.readUInt16BE(offset + 3),
        width: buffer.readUInt16BE(offset + 5)
      };
    }
    if (length < 2) break;
    offset += length;
  }
  return null;
}

async function fetchRemoteImage(url) {
  let lastResponse = null;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        Range: 'bytes=0-2047',
        'User-Agent': 'Napoli-Season-Room-image-audit/1.0 (+https://github.com/StefanSaladino/FC-26-career-mode-tracker)'
      }
    });
    lastResponse = response;

    if (![429, 503].includes(response.status)) return response;
    await sleep(1000 * attempt);
  }
  return lastResponse;
}

async function checkRemote(article) {
  const response = await fetchRemoteImage(article.image);
  if (!response || (!response.ok && response.status !== 206)) {
    throw new Error(`${article.id}: remote image returned HTTP ${response?.status ?? 'unknown'}`);
  }
  const type = response.headers.get('content-type') || '';
  if (!type.startsWith('image/')) {
    throw new Error(`${article.id}: remote source is not an image (${type || 'unknown content type'})`);
  }
  if (!article.imageCredit || !article.imageSource) {
    throw new Error(`${article.id}: external image is missing credit/source metadata`);
  }
  await sleep(750);
}

function checkLocal(article) {
  const rel = cleanLocalSrc(article.image);
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) throw new Error(`${article.id}: local image missing: ${rel}`);
  const stat = fs.statSync(full);
  if (!stat.isFile() || stat.size < 1024) throw new Error(`${article.id}: local image is empty or suspiciously small: ${rel}`);

  if (/\.jpe?g$/i.test(rel)) {
    const dimensions = jpegDimensions(fs.readFileSync(full));
    if (!dimensions) throw new Error(`${article.id}: could not read JPEG dimensions: ${rel}`);
    if (dimensions.width < 600 || dimensions.height < 300) {
      throw new Error(`${article.id}: JPEG is too small (${dimensions.width}x${dimensions.height}): ${rel}`);
    }
    const ratio = dimensions.width / dimensions.height;
    if (ratio < 1.55 || ratio > 2.05) {
      throw new Error(`${article.id}: JPEG aspect ratio is risky for article cards (${ratio.toFixed(2)}): ${rel}`);
    }
  }
}

const positionPattern = /^\d{1,3}%\s+\d{1,3}%$/;

for (const article of data.articles) {
  if (!article.image) throw new Error(`${article.id}: article has no image after overrides`);
  if (!positionPattern.test(String(article.objectPosition || ''))) {
    throw new Error(`${article.id}: invalid objectPosition: ${article.objectPosition}`);
  }
  if (!['cover', 'contain'].includes(article.objectFit)) {
    throw new Error(`${article.id}: invalid objectFit: ${article.objectFit}`);
  }
}

for (const article of data.articles) {
  if (/^https?:\/\//i.test(article.image)) await checkRemote(article);
  else checkLocal(article);
  console.log(`✓ ${article.id} -> ${article.image}`);
}

const fallback = cleanLocalSrc(context.window.NAPOLI_IMAGE_FALLBACK);
if (!fallback || !fs.existsSync(path.join(root, fallback))) {
  throw new Error(`Fallback image missing: ${fallback || '(unset)'}`);
}

console.log(`\nImage audit passed for ${data.articles.length} articles.`);
