(() => {
  const VERSION = '20260930-6';
  const RAW = 'https://raw.githubusercontent.com/StefanSaladino/FC-26-career-mode-tracker/main/assets/';

  const replacements = [
    { match: 'chiesa-napoli.webp', src: `${RAW}chiesa-napoli.webp?rev=${VERSION}`, player: true },
    { match: 'pio-napoli.webp', src: `${RAW}pio-napoli.webp?rev=${VERSION}`, player: true }
  ];

  function ruleFor(img) {
    const attr = img.getAttribute('src') || '';
    return replacements.find(rule => attr.includes(rule.match)) || null;
  }

  function markFailure(img) {
    const card = img.closest('.article-card');
    if (card) card.classList.add('no-media');

    const media = img.closest('.article-card-media, .media-photo, .reader-media');
    if (media) media.classList.add('image-failed');

    const hero = img.closest('.hero-media');
    if (hero) hero.classList.add('image-failed');

    const item = img.closest('.media-item');
    if (item) item.classList.add('no-media');
  }

  function prepare(img) {
    if (!(img instanceof HTMLImageElement)) return;

    const rule = ruleFor(img);
    if (rule) {
      img.removeAttribute('onerror');
      img.dataset.seasonPlayer = 'true';
      img.loading = 'eager';
      img.fetchPriority = 'high';
      img.style.objectFit = 'contain';
      img.style.objectPosition = '50% 50%';

      if (img.getAttribute('src') !== rule.src) {
        img.setAttribute('src', rule.src);
      }
    }

    const src = img.getAttribute('src') || '';
    if (src.includes('Allianz_Arena_at_night')) {
      img.style.objectFit = 'cover';
      img.style.objectPosition = '50% 58%';
    }
    if (src.includes('Stadio_Diego_Armando_Maradona')) {
      img.style.objectFit = 'cover';
      img.style.objectPosition = '50% 55%';
    }
  }

  document.addEventListener('error', event => {
    if (!(event.target instanceof HTMLImageElement)) return;
    markFailure(event.target);
  }, true);

  const observer = new MutationObserver(records => {
    records.forEach(record => {
      record.addedNodes.forEach(node => {
        if (!(node instanceof Element)) return;
        if (node.matches('img')) prepare(node);
        node.querySelectorAll?.('img').forEach(prepare);
      });
    });
  });

  document.querySelectorAll('img').forEach(prepare);
  observer.observe(document.body, { childList: true, subtree: true });
})();
