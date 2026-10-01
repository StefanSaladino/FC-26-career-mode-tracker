(() => {
  const articleId = 'inter-live-bastoni-header';
  const VERSION = '20261001-50';
  const clipUrl = `assets/a78fbe88-e1a3-4363-9d38-9cd973ea231e.mov?v=${VERSION}`;
  const posterUrl = `assets/bastoni-napoli.jpg?v=${VERSION}`;
  const title = 'Inter Title-Race Clip';
  const caption = 'Napoli lead Inter 1–0 in the live title-race showdown, with Buongiorno producing a goal-saving tackle to protect the advantage.';

  function makeVideoBlock() {
    const wrap = document.createElement('div');
    wrap.className = 'season-video-wrap';
    wrap.dataset.interLiveVideo = 'true';

    const video = document.createElement('video');
    video.className = 'season-video';
    video.poster = posterUrl;
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', 'Gameplay clip from Napoli against Inter');

    const source = document.createElement('source');
    source.src = clipUrl;
    source.type = 'video/quicktime';
    video.appendChild(source);

    wrap.appendChild(video);
    return wrap;
  }

  function injectArticleVideo() {
    const reader = document.getElementById('readerContent');
    if (!reader || reader.querySelector('[data-inter-live-video]')) return;
    const headline = reader.querySelector('#readerHeadline')?.textContent || '';
    if (!headline.includes('Bastoni Rises')) return;

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
    if (!wall || wall.querySelector('[data-inter-live-card]')) return;

    const figure = document.createElement('figure');
    figure.className = 'media-item gameplay-media-card';
    figure.dataset.interLiveCard = 'true';
    figure.appendChild(makeVideoBlock());

    const figcaption = document.createElement('figcaption');
    const tag = document.createElement('span');
    tag.textContent = 'Gameplay · Inter Live';
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