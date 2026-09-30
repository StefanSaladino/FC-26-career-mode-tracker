(() => {
  const parts = window.PIO_ARSENAL_CLIP_PARTS || [];
  if (parts.length < 6 || parts.some(part => !part)) return;

  try {
    const binary = atob(parts.join(''));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    window.PIO_ARSENAL_CLIP_URL = URL.createObjectURL(new Blob([bytes], { type: 'video/mp4' }));
  } catch (error) {
    console.warn('Could not prepare Arsenal gameplay clip.', error);
    return;
  }

  const clipUrl = window.PIO_ARSENAL_CLIP_URL;
  const articleId = 'arsenal-pio-91';
  const title = "Pio 90+1': The Drought Breaker";
  const caption = "Beier assist. Pio Esposito equalizer. 90+1'. Napoli 1–1 Arsenal.";

  const style = document.createElement('style');
  style.textContent = `
    .season-video-wrap{background:#02070c;overflow:hidden;aspect-ratio:16/9;max-width:760px;margin:0 auto}
    .season-video{display:block;width:100%;height:100%;object-fit:contain;background:#02070c}
    .reader-gameplay{background:#06111f;border-top:1px solid rgba(255,255,255,.08);max-width:760px;margin:0 auto}
    .reader-gameplay-copy{padding:10px 16px 12px;background:#fff;color:#66758a;font-size:.75rem;line-height:1.4}
    .reader-gameplay-copy strong{display:block;color:#081a2d;font-size:.82rem;margin-bottom:2px}
    .gameplay-media-card{max-width:760px;width:100%;justify-self:start}
    .gameplay-media-card figcaption{display:flex;flex-direction:column;gap:6px}
    .gameplay-media-card .read-link{align-self:flex-start;border:0;background:none;padding:0;color:var(--sky);font:inherit;font-weight:800;cursor:pointer}
    @media(max-width:760px){.reader-gameplay-copy{padding:9px 12px 11px}.season-video-wrap,.reader-gameplay,.gameplay-media-card{max-width:100%}}
  `;
  document.head.appendChild(style);

  function makeVideo(className) {
    const video = document.createElement('video');
    video.className = className;
    video.src = clipUrl;
    video.poster = 'assets/pio-napoli.jpg';
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', "Pio Esposito's 90+1 equalizer against Arsenal");
    return video;
  }

  function injectArticleVideo() {
    const reader = document.getElementById('readerContent');
    if (!reader || reader.querySelector('.reader-gameplay')) return;
    const headline = reader.querySelector('#readerHeadline')?.textContent || '';
    if (!headline.includes('Pio at 90+1')) return;

    const block = document.createElement('div');
    block.className = 'reader-gameplay';
    const wrap = document.createElement('div');
    wrap.className = 'season-video-wrap';
    wrap.appendChild(makeVideo('season-video'));
    const copy = document.createElement('div');
    copy.className = 'reader-gameplay-copy';
    copy.innerHTML = `<strong>${title}</strong>${caption}`;
    block.append(wrap, copy);

    const body = reader.querySelector('.reader-body');
    if (body) reader.insertBefore(block, body);
    else reader.appendChild(block);
  }

  function injectMediaVideo() {
    const wall = document.getElementById('mediaWall');
    if (!wall || wall.querySelector('.gameplay-media-card')) return;

    wall.querySelectorAll(`[data-article="${articleId}"]`).forEach(node => {
      if (node.classList.contains('media-item')) node.remove();
    });

    const figure = document.createElement('figure');
    figure.className = 'media-item gameplay-media-card';
    const wrap = document.createElement('div');
    wrap.className = 'season-video-wrap';
    wrap.appendChild(makeVideo('season-video'));

    const figcaption = document.createElement('figcaption');
    const tag = document.createElement('span');
    tag.textContent = 'Gameplay · Goal Clip';
    const strong = document.createElement('strong');
    strong.textContent = title;
    const note = document.createElement('p');
    note.textContent = caption;
    const read = document.createElement('button');
    read.type = 'button';
    read.className = 'read-link';
    read.dataset.article = articleId;
    read.textContent = 'Read story →';
    figcaption.append(tag, strong, note, read);
    figure.append(wrap, figcaption);
    wall.prepend(figure);
  }

  injectMediaVideo();
  const reader = document.getElementById('readerContent');
  if (reader) new MutationObserver(injectArticleVideo).observe(reader, { childList: true, subtree: true });
  injectArticleVideo();
})();
