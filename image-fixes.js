(() => {
  function collapseBrokenImage(img) {
    if (!(img instanceof HTMLImageElement) || img.dataset.failureHandled === 'true') return;
    img.dataset.failureHandled = 'true';

    const card = img.closest('.article-card');
    const item = img.closest('.media-item');
    const media = img.closest('.article-card-media, .media-photo, .reader-media, .hero-media');

    if (card) card.classList.add('no-media');
    if (item) item.classList.add('no-media');
    if (media) media.classList.add('image-failed');

    img.remove();
  }

  window.__napoliImageError = collapseBrokenImage;

  document.addEventListener('error', event => {
    if (event.target instanceof HTMLImageElement) collapseBrokenImage(event.target);
  }, true);

  function inspect(img) {
    if (!(img instanceof HTMLImageElement)) return;
    if (img.complete && img.naturalWidth === 0) collapseBrokenImage(img);
  }

  const observer = new MutationObserver(records => {
    records.forEach(record => {
      record.addedNodes.forEach(node => {
        if (!(node instanceof Element)) return;
        if (node.matches('img')) inspect(node);
        node.querySelectorAll?.('img').forEach(inspect);
      });
    });
  });

  document.querySelectorAll('img').forEach(inspect);
  observer.observe(document.body, { childList: true, subtree: true });
})();
