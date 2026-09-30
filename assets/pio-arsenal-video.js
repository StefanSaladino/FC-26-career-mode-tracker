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
    .season-video-wrap{position:relative;background:#02070c;overflow:hidden;aspect-ratio:16/9;max-width:760px;margin:0 auto}
    .season-video{display:block;width:100%;height:100%;object-fit:contain;background:#02070c;opacity:0;transition:opacity .18s ease}
    .season-video.is-playing{opacity:1}
    .season-video-cover{position:absolute;inset:0;z-index:3;width:100%;height:100%;border:0;padding:0;background:#081a2d;color:#fff;text-align:left;overflow:hidden;cursor:pointer}
    .season-video-cover:before{content:"";position:absolute;inset:0;background:linear-gradient(115deg,#071423 0%,#0b2744 54%,#0d72b9 100%)}
    .season-video-cover:after{content:"";position:absolute;right:-9%;top:-42%;width:58%;aspect-ratio:1;border:1px solid rgba(143,211,244,.25);border-radius:50%;box-shadow:0 0 0 46px rgba(143,211,244,.035),0 0 0 92px rgba(143,211,244,.025)}
    .season-video-cover-inner{position:relative;z-index:1;height:100%;display:flex;flex-direction:column;justify-content:flex-end;padding:clamp(18px,4vw,34px)}
    .season-video-kicker{font-size:.68rem;font-weight:950;letter-spacing:.15em;text-transform:uppercase;color:#8fd3f4;margin-bottom:auto}
    .season-video-minute{font-size:clamp(3.2rem,10vw,6.9rem);line-height:.78;letter-spacing:-.08em;font-weight:950;color:#fff;margin-bottom:12px}
    .season-video-player{font-size:clamp(1.25rem,3.6vw,2.2rem);line-height:.95;font-weight:950;letter-spacing:-.04em;text-transform:uppercase}
    .season-video-score{display:flex;align-items:center;gap:10px;margin-top:10px;font-size:.78rem;font-weight:900;letter-spacing:.11em;text-transform:uppercase;color:#cfe8f7}
    .season-video-play{position:absolute;right:clamp(18px,4vw,34px);bottom:clamp(18px,4vw,34px);width:54px;height:54px;border-radius:50%;display:grid;place-items:center;background:#fff;color:#081a2d;font-size:1.25rem;box-shadow:0 8px 30px rgba(0,0,0,.28)}
    .season-video-cover:hover .season-video-play,.season-video-cover:focus-visible .season-video-play{transform:scale(1.04)}
    .season-video-cover:focus-visible{outline:3px solid #8fd3f4;outline-offset:-3px}
    .reader-gameplay{background:#06111f;border-top:1px solid rgba(255,255,255,.08);max-width:760px;margin:0 auto}
    .reader-gameplay-copy{padding:10px 16px 12px;background:#fff;color:#66758a;font-size:.75rem;line-height:1.4}
    .reader-gameplay-copy strong{display:block;color:#081a2d;font-size:.82rem;margin-bottom:2px}
    .gameplay-media-card{max-width:760px;width:100%;justify-self:start}
    .gameplay-media-card figcaption{display:flex;flex-direction:column;gap:6px}
    .gameplay-media-card .read-link{align-self:flex-start;border:0;background:none;padding:0;color:var(--sky);font:inherit;font-weight:800;cursor:pointer}
    @media(max-width:760px){
      .reader-gameplay-copy{padding:9px 12px 11px}
      .season-video-wrap,.reader-gameplay,.gameplay-media-card{max-width:100%}
      .season-video-play{width:46px;height:46px;font-size:1rem}
      .season-video-minute{font-size:clamp(3rem,17vw,5rem)}
    }
  `;
  document.head.appendChild(style);

  function makeCover(video) {
    const cover = document.createElement('button');
    cover.type = 'button';
    cover.className = 'season-video-cover';
    cover.setAttribute('aria-label', "Play Pio Esposito's 90+1 equalizer against Arsenal");
    cover.innerHTML = `
      <span class="season-video-cover-inner">
        <span class="season-video-kicker">Champions League · Goal Clip</span>
        <span class="season-video-minute">90+1'</span>
        <span class="season-video-player">Pio Esposito</span>
        <span class="season-video-score">Napoli 1–1 Arsenal</span>
        <span class="season-video-play" aria-hidden="true">▶</span>
      </span>`;

    cover.addEventListener('click', () => {
      cover.hidden = true;
      video.classList.add('is-playing');
      video.play().catch(() => {
        cover.hidden = false;
        video.classList.remove('is-playing');
      });
    });

    video.addEventListener('play', () => {
      cover.hidden = true;
      video.classList.add('is-playing');
    });
    video.addEventListener('ended', () => {
      video.classList.remove('is-playing');
      cover.hidden = false;
      video.currentTime = 0;
    });

    return cover;
  }

  function makeVideoBlock() {
    const wrap = document.createElement('div');
    wrap.className = 'season-video-wrap';

    const video = document.createElement('video');
    video.className = 'season-video';
    video.src = clipUrl;
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', "Pio Esposito's 90+1 equalizer against Arsenal");

    wrap.append(video, makeCover(video));
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
