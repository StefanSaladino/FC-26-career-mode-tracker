(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;
  const VERSION = '20260930-11';
  const local = file => `assets/${file}?v=${VERSION}`;
  const media = {
    bayernHero: { src: local('editorial-bayern-hero.svg'), credit: 'Season Room editorial graphic.', source: null, objectPosition: '50% 50%', objectFit: 'cover' },
    bayernPoster: { src: local('editorial-bayern.svg'), credit: 'Season Room editorial graphic.', source: null, objectPosition: '50% 50%', objectFit: 'contain' },
    chiesa: { src: local('chiesa-napoli.jpg'), credit: 'Season Room composite — Federico Chiesa visualized in Napoli colours for this FC 26 save.', source: null, objectPosition: '50% 50%', objectFit: 'cover' },
    pio: { src: local('pio-napoli.jpg'), credit: 'Season Room composite — Pio Esposito visualized in Napoli colours for this FC 26 save.', source: null, objectPosition: '50% 50%', objectFit: 'cover' },
    paz: { src: local('paz-napoli.jpg'), credit: 'Season Room composite — Nico Paz visualized in Napoli colours for this FC 26 save.', source: null, objectPosition: '50% 42%', objectFit: 'cover' },
    peacock: { src: local('peacock-napoli.jpg'), credit: 'Season Room composite — Peacock visualized from the FC 26 player model supplied from this save.', source: null, objectPosition: '50% 40%', objectFit: 'cover' },
    market: { src: local('editorial-market.svg'), credit: 'Season Room transfer-window graphic.', source: null, objectPosition: '50% 50%', objectFit: 'contain' }
  };
  const articleMap = { 'bayern-test': media.bayernHero, 'chiesa-pisa': media.chiesa, 'pio-shirt': media.pio, 'three-nos': media.market, 'paz-kdb': media.paz, 'peacock-problem': media.peacock };
  if (Array.isArray(D.articles)) D.articles.forEach(article => {
    const image = articleMap[article.id];
    if (!image) return;
    article.image = image.src;
    article.imageCredit = image.credit;
    article.imageSource = image.source;
    article.objectPosition = image.objectPosition;
    article.objectFit = image.objectFit;
  });
  D.media = [
    { type: 'image', title: 'Bayern: The First Real Test', src: media.bayernPoster.src, tag: 'Matchweek', credit: media.bayernPoster.credit, source: null, objectPosition: media.bayernPoster.objectPosition, objectFit: media.bayernPoster.objectFit },
    { type: 'image', title: "Chiesa: 80' and Chaos Over", src: media.chiesa.src, tag: 'Player Focus', credit: media.chiesa.credit, source: null, objectPosition: media.chiesa.objectPosition, objectFit: media.chiesa.objectFit },
    { type: 'image', title: 'Pio: The Shirt Is His For Now', src: media.pio.src, tag: 'No. 9 Watch', credit: media.pio.credit, source: null, objectPosition: media.pio.objectPosition, objectFit: media.pio.objectFit },
    { type: 'image', title: 'Paz: The Heir Is Already Playing', src: media.paz.src, tag: 'Succession', credit: media.paz.credit, source: null, objectPosition: media.paz.objectPosition, objectFit: media.paz.objectFit },
    { type: 'image', title: 'Peacock: The Development Gamble', src: media.peacock.src, tag: 'Development', credit: media.peacock.credit, source: null, objectPosition: media.peacock.objectPosition, objectFit: media.peacock.objectFit },
    { type: 'image', title: 'Three Calls, Three Nos', src: media.market.src, tag: 'Mercato', credit: media.market.credit, source: null, objectPosition: media.market.objectPosition, objectFit: media.market.objectFit },
    { type: 'video-placeholder', title: 'Gameplay Archive', tag: 'Video', note: 'Gameplay clips, goals and hype videos will live here once footage is added.' }
  ];
})();
