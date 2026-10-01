(() => {
  const articleId = 'arsenal-pio-91';
  const clipUrl = 'assets/pio-arsenal-equalizer.mp4?v=1';
  const posterUrl = 'assets/pio-napoli.jpg';
  const title = "Pio 90+1': The Drought Breaker";
  const caption = "Beier assist. Pio Esposito equalizer. 90+1'. Napoli 1–1 Arsenal.";

  const style = document.createElement('style');
  style.textContent = `
    .season-video-wrap{position:relative;background:#02070c;overflow:hidden;aspect-ratio:16/9;max-width:910px;margin:0 auto}
    .season-video{display:block;width:100%;height:100%;object-fit:contain;background:#02070c}
    .season-video-unavailable{position:absolute;inset:0;display:none;align-items:flex-end;padding:18px;background:linear-gradient(0deg,rgba(2,7,12,.84),rgba(2,7,12,.08)),url('${posterUrl}') center 38%/cover no-repeat;color:#fff;font-size:.75rem;font-weight:850;letter-spacing:.06em;text-transform:uppercase}
    .season-video-wrap.video-error .season-video{display:none}
    .season-video-wrap.video-error .season-video-unavailable{display:flex}
    .reader-gameplay{background:#06111f;border-top:1px solid rgba(255,255,255,.08);max-width:910px;margin:0 auto}
    .reader-gameplay-copy{padding:10px 16px 12px;background:#fff;color:#66758a;font-size:.75rem;line-height:1.4}
    .reader-gameplay-copy strong{display:block;color:#081a2d;font-size:.82rem;margin-bottom:2px}
    .gameplay-media-card{max-width:910px;width:100%;justify-self:start}
    .gameplay-media-card figcaption{display:flex;flex-direction:column;gap:6px}
    .gameplay-media-card .read-link{align-self:flex-start;border:0;background:none;padding:0;color:var(--sky);font:inherit;font-weight:800;cursor:pointer}
    @media(max-width:760px){
      .reader-gameplay-copy{padding:9px 12px 11px}
      .season-video-wrap,.reader-gameplay,.gameplay-media-card{max-width:100%}
    }
  `;
  document.head.appendChild(style);

  function makeVideoBlock() {
    const wrap = document.createElement('div');
    wrap.className = 'season-video-wrap';

    const video = document.createElement('video');
    video.className = 'season-video';
    video.src = clipUrl;
    video.poster = posterUrl;
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', "Pio Esposito's 90+1 equalizer against Arsenal");
    video.addEventListener('error', () => wrap.classList.add('video-error'));

    const unavailable = document.createElement('div');
    unavailable.className = 'season-video-unavailable';
    unavailable.textContent = 'Full-quality match clip unavailable';

    wrap.append(video, unavailable);
    return wrap;
  }

  function injectArticleVideo() {
    const reader = document.getElementById('readerContent');
    if (!reader || reader.querySelector('.reader-gameplay')) return;
    const headline = reader.querySelector('#readerHeadline')?.textContent || '';
    if (!headline.includes('Pio at 90+1')) return;

    const block = document.createElement('div');
    block.className = 'reader-gameplay';
    block.appendChild(makeVideoBlock());
    const copy = document.createElement('div');
    copy.className = 'reader-gameplay-copy';
    copy.innerHTML = `<strong>${title}</strong>${caption}`;
    block.appendChild(copy);

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
    figure.appendChild(makeVideoBlock());

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
    figure.appendChild(figcaption);
    wall.prepend(figure);
  }

  injectMediaVideo();
  const reader = document.getElementById('readerContent');
  if (reader) new MutationObserver(injectArticleVideo).observe(reader, { childList: true, subtree: true });
  injectArticleVideo();
})();
