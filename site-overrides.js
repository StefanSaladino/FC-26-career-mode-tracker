(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const VERSION = '20260930-17';
  const local = file => `assets/${file}?v=${VERSION}`;

  const media = {
    bayern: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Allianz_Arena_at_Night_%28168589194%29.jpg',
      credit: 'Ralph / Wikimedia Commons · CC BY 2.0',
      source: 'https://commons.wikimedia.org/wiki/File:Allianz_Arena_at_Night_(168589194).jpg',
      objectPosition: '50% 55%',
      objectFit: 'cover'
    },
    chiesa: {
      src: local('chiesa-napoli.jpg'),
      credit: 'Season Room generated composite — Federico Chiesa visualized in Napoli colours for this FC 26 save.',
      source: null,
      objectPosition: '50% 42%',
      objectFit: 'cover'
    },
    pio: {
      src: local('pio-napoli.jpg'),
      credit: 'Season Room generated composite — Pio Esposito visualized in Napoli colours for this FC 26 save.',
      source: null,
      objectPosition: '50% 38%',
      objectFit: 'cover'
    },
    market: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Stadio_San_Paolo_%28Napoli_vs_Club_Brugge%29_-_panoramio_%281%29.jpg',
      credit: 'Mister No / Wikimedia Commons · CC BY 3.0',
      source: 'https://commons.wikimedia.org/wiki/File:Stadio_San_Paolo_(Napoli_vs_Club_Brugge)_-_panoramio_(1).jpg',
      objectPosition: '50% 57%',
      objectFit: 'cover'
    },
    paz: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Stadio_San_Paolo_%28Napoli_vs_Club_Brugge%29_-_panoramio_%284%29.jpg',
      credit: 'Mister No / Wikimedia Commons · CC BY 3.0',
      source: 'https://commons.wikimedia.org/wiki/File:Stadio_San_Paolo_(Napoli_vs_Club_Brugge)_-_panoramio_(4).jpg',
      objectPosition: '50% 52%',
      objectFit: 'cover'
    },
    peacock: {
      src: local('peacock-napoli.jpg'),
      credit: 'Season Room generated composite — Peacock visualized from the FC 26 player model supplied from this save.',
      source: null,
      objectPosition: '50% 36%',
      objectFit: 'cover'
    },
    italy: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Coverciano%2C_Firenze%2C_Italia.jpg',
      credit: 'Wikimedia Commons · CC0',
      source: 'https://commons.wikimedia.org/wiki/File:Coverciano,_Firenze,_Italia.jpg',
      objectPosition: '50% 54%',
      objectFit: 'cover'
    },
    captain: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/87/SSC_Napoli_logo_on_the_pitch_of_the_Stadium_San_Paolo.jpg',
      credit: 'Tanzen80 / Wikimedia Commons · CC BY-SA 2.0',
      source: 'https://commons.wikimedia.org/wiki/File:SSC_Napoli_logo_on_the_pitch_of_the_Stadium_San_Paolo.jpg',
      objectPosition: '50% 52%',
      objectFit: 'cover'
    },
    stach: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Stadio_San_Paolo_Napoli_2019.jpg',
      credit: 'Tarkus42 / Wikimedia Commons · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Stadio_San_Paolo_Napoli_2019.jpg',
      objectPosition: '50% 52%',
      objectFit: 'cover'
    }
  };

  const articleMap = {
    'bayern-test': media.bayern,
    'chiesa-pisa': media.chiesa,
    'pio-shirt': media.pio,
    'three-nos': media.market,
    'paz-kdb': media.paz,
    'peacock-problem': media.peacock,
    'italy-pipeline': media.italy,
    'captain-future': media.captain,
    'stach-insurance': media.stach
  };

  if (Array.isArray(D.articles)) {
    D.articles.forEach(article => {
      const image = articleMap[article.id];
      if (!image || !image.src) return;
      article.image = image.src;
      article.imageCredit = image.credit;
      article.imageSource = image.source;
      article.objectPosition = image.objectPosition;
      article.objectFit = image.objectFit;
    });
  }

  window.NAPOLI_IMAGE_FALLBACK = local('editorial-bayern.svg');

  D.media = [
    { type: 'image', title: 'Bayern: The First Real Test', src: media.bayern.src, tag: 'Matchweek', credit: media.bayern.credit, source: media.bayern.source, objectPosition: media.bayern.objectPosition, objectFit: media.bayern.objectFit },
    { type: 'image', title: "Chiesa: 80' and Chaos Over", src: media.chiesa.src, tag: 'Player Focus', credit: media.chiesa.credit, source: null, objectPosition: media.chiesa.objectPosition, objectFit: media.chiesa.objectFit },
    { type: 'image', title: 'Pio: The Shirt Is His For Now', src: media.pio.src, tag: 'No. 9 Watch', credit: media.pio.credit, source: null, objectPosition: media.pio.objectPosition, objectFit: media.pio.objectFit },
    { type: 'image', title: 'Three Calls, Three Nos', src: media.market.src, tag: 'Mercato', credit: media.market.credit, source: media.market.source, objectPosition: media.market.objectPosition, objectFit: media.market.objectFit },
    { type: 'image', title: 'Paz: The Heir Is Already Playing', src: media.paz.src, tag: 'Succession', credit: media.paz.credit, source: media.paz.source, objectPosition: media.paz.objectPosition, objectFit: media.paz.objectFit },
    { type: 'image', title: 'Peacock: The Development Gamble', src: media.peacock.src, tag: 'Development', credit: media.peacock.credit, source: null, objectPosition: media.peacock.objectPosition, objectFit: media.peacock.objectFit },
    { type: 'image', title: 'Club and Country', src: media.italy.src, tag: 'Italy', credit: media.italy.credit, source: media.italy.source, objectPosition: media.italy.objectPosition, objectFit: media.italy.objectFit },
    { type: 'image', title: 'The Captaincy Transition', src: media.captain.src, tag: 'Dressing Room', credit: media.captain.credit, source: media.captain.source, objectPosition: media.captain.objectPosition, objectFit: media.captain.objectFit },
    { type: 'image', title: 'The Insurance Policy', src: media.stach.src, tag: 'Squad Depth', credit: media.stach.credit, source: media.stach.source, objectPosition: media.stach.objectPosition, objectFit: media.stach.objectFit },
    { type: 'video-placeholder', title: 'Gameplay Archive', tag: 'Video', note: 'Gameplay clips, goals and hype videos will live here once footage is added.' }
  ];
})();
