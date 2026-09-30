(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const VERSION = '20260930-22';
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
      src: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Association_football_goal_in_training_football_field_cropped.jpg',
      credit: 'Santeri Viinamäki / Wikimedia Commons · CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Association_football_goal_in_training_football_field_cropped.jpg',
      objectPosition: '50% 51%',
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
    'sassuolo-response': media.chiesa,
    'napoli-still-top': media.market,
    'chiesa-pisa': media.chiesa,
    'pio-shirt': media.pio,
    'three-nos': media.market,
    'paz-kdb': media.paz,
    'peacock-problem': media.peacock,
    'italy-pipeline': media.italy,
    'captain-future': media.captain,
    'stach-insurance': media.stach
  };

  // Post-Sassuolo season state.
  const hasSassuolo = Array.isArray(D.results) && D.results.some(r => r[0] === 'Napoli' && r[1] === 'Sassuolo');
  if (Array.isArray(D.results) && !hasSassuolo) {
    D.results.push(['Napoli','Sassuolo','Serie A',2,1,'W',"Chiesa 40'; Beier 85'","Paz assist on Beier winner; Meret made multiple key second-half saves"]);
  }

  D.upcoming = [
    ['Lazio','Serie A','Next'],
    ['Genoa','Serie A','Closes October']
  ];

  D.ticker = [
    "FT · NAPOLI 2–1 SASSUOLO · BEIER 85'",
    'TABLE · NAPOLI 1ST · 20 PTS · UNBEATEN',
    'NEXT · NAPOLI vs LAZIO · SERIE A',
    "CHIESA 40' · BEIER 85' · PAZ ASSIST",
    'SERIE A · NAPOLI 6–2–0'
  ];

  const sassuoloArticle = {
    id: 'sassuolo-response',
    category: 'Match Report',
    label: 'Response Delivered',
    date: 'After Napoli 2–1 Sassuolo',
    headline: 'Beier Finishes the Comeback as Napoli Answer Bayern the Right Way',
    dek: 'Pinamonti struck first, Chiesa levelled before halftime and Nico Paz created Beier’s 85th-minute winner in the response Napoli needed after Bayern.',
    image: media.chiesa.src,
    imageCredit: media.chiesa.credit,
    imageSource: null,
    objectPosition: media.chiesa.objectPosition,
    objectFit: media.chiesa.objectFit,
    tone: 'breaking',
    body: [
      'Napoli needed a response after the Champions League defeat to Bayern, and Sassuolo made them earn every part of it. Pinamonti put the visitors ahead in the 27th minute after Napoli had controlled long spells without turning that possession into a goal.',
      'Federico Chiesa changed the mood in the 40th minute. After a patient sequence through midfield, he found the opening and finished to make it 1–1 before halftime.',
      'Alex Meret then became the platform for the comeback. Sassuolo created dangerous second-half moments and Meret produced multiple important saves to keep Napoli level while the bench began to change the game.',
      'Davies and Paz arrived to add pace and invention. In the 85th minute Paz found Maximilian Beier, and the striker finished the move that turned a difficult afternoon into a 2–1 win.',
      'The significance goes beyond the three points. Napoli responded immediately to the Bayern loss, stayed unbeaten in Serie A and protected first place heading into the final two league matches of October.'
    ]
  };

  const tableStory = {
    id: 'napoli-still-top',
    category: 'Serie A',
    label: 'Title Race',
    date: 'After eight matches',
    headline: 'Still Top, Still Unbeaten: Napoli Keep Their Grip on Serie A',
    dek: 'Eight matches, no defeats and 20 points. The Sassuolo comeback keeps Napoli two points clear at the top while Milan, Juventus and Inter remain close behind.',
    image: media.market.src,
    imageCredit: media.market.credit,
    imageSource: media.market.source,
    objectPosition: media.market.objectPosition,
    objectFit: media.market.objectFit,
    tone: 'feature',
    body: [
      'The European loss to Bayern created noise. The Serie A table tells a calmer story: Napoli are still first.',
      'After eight league matches, Napoli sit on 20 points from six wins and two draws. They have scored 13, conceded seven and carry a +6 goal difference. Most importantly, they remain the only side in the leading group without a defeat.',
      'Milan are closest on 18 points. Juventus and Inter sit on 17, with Lazio on 16. The margin is small enough that every domestic slip matters, which is why the 2–1 comeback against Sassuolo carried more weight than a routine October win.',
      'Napoli were behind, had just come off a difficult European night and still found a way through Chiesa, Meret, Paz and Beier. That is the kind of result that keeps a title race under control before it starts controlling you.',
      'Lazio are next. The cushion is only two points, but for now Napoli still own the view from the top.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => !['sassuolo-response','napoli-still-top'].includes(a.id));
    D.articles.splice(0, 0, sassuoloArticle, tableStory);
    D.articles.forEach(article => {
      const image = articleMap[article.id];
      if (!image || !image.src || article.image) return;
      article.image = image.src;
      article.imageCredit = image.credit;
      article.imageSource = image.source;
      article.objectPosition = image.objectPosition;
      article.objectFit = image.objectFit;
    });
  }

  D.hero = {
    articleId: 'sassuolo-response',
    strap: 'THE RESPONSE CAME LATE — BUT IT CAME'
  };

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => {
      if (row[0] === 'Maximilian Beier') return ['Maximilian Beier',3,0,'Three goals logged; winner vs Sassuolo in the 85th minute.'];
      if (row[0] === 'Federico Chiesa') return ['Federico Chiesa',2,0,'Goals vs Pisa and Sassuolo; twice delivered in pressure moments.'];
      if (row[0] === 'Nico Paz') return ['Nico Paz',1,1,'Late winner on debut; assisted Beier’s 85th-minute winner vs Sassuolo.'];
      if (row[0] === 'Alex Meret') return ['Alex Meret',0,0,'Multiple key second-half saves preserved the Sassuolo comeback.'];
      return row;
    });
    D.stats.sort((a,b) => (b[1]-a[1]) || (b[2]-a[2]) || String(a[0]).localeCompare(String(b[0])));
  }

  D.whispers = [
    ['Title Race', 'Napoli remain first in Serie A on 20 points, two clear of Milan and three ahead of Juventus and Inter.'],
    ['Beier Moment', 'Beier’s 85th-minute winner was his third logged goal of the season and his latest answer to the No. 9 debate.'],
    ['Paz Impact', 'Paz came off the bench and created the winner, another meaningful contribution in the succession story.'],
    ['Meret Reminder', 'Meret made multiple big saves against Sassuolo and gave Napoli the platform to complete the comeback.']
  ];

  window.NAPOLI_IMAGE_FALLBACK = local('editorial-bayern.svg');

  D.media = [
    { type: 'image', title: 'Sassuolo: The Response', src: media.chiesa.src, tag: 'Match Report', credit: media.chiesa.credit, source: null, objectPosition: media.chiesa.objectPosition, objectFit: media.chiesa.objectFit, articleId: 'sassuolo-response' },
    { type: 'image', title: 'Still Top, Still Unbeaten', src: media.market.src, tag: 'Title Race', credit: media.market.credit, source: media.market.source, objectPosition: media.market.objectPosition, objectFit: media.market.objectFit, articleId: 'napoli-still-top' },
    { type: 'image', title: 'Bayern: The First Real Test', src: media.bayern.src, tag: 'Matchweek', credit: media.bayern.credit, source: media.bayern.source, objectPosition: media.bayern.objectPosition, objectFit: media.bayern.objectFit, articleId: 'bayern-test' },
    { type: 'image', title: "Chiesa: 80' and Chaos Over", src: media.chiesa.src, tag: 'Player Focus', credit: media.chiesa.credit, source: null, objectPosition: media.chiesa.objectPosition, objectFit: media.chiesa.objectFit, articleId: 'chiesa-pisa' },
    { type: 'image', title: 'Pio: The Shirt Is His For Now', src: media.pio.src, tag: 'No. 9 Watch', credit: media.pio.credit, source: null, objectPosition: media.pio.objectPosition, objectFit: media.pio.objectFit, articleId: 'pio-shirt' },
    { type: 'image', title: 'Three Calls, Three Nos', src: media.market.src, tag: 'Mercato', credit: media.market.credit, source: media.market.source, objectPosition: media.market.objectPosition, objectFit: media.market.objectFit, articleId: 'three-nos' },
    { type: 'image', title: 'Paz: The Heir Is Already Playing', src: media.paz.src, tag: 'Succession', credit: media.paz.credit, source: media.paz.source, objectPosition: media.paz.objectPosition, objectFit: media.paz.objectFit, articleId: 'paz-kdb' },
    { type: 'image', title: 'Peacock: The Development Gamble', src: media.peacock.src, tag: 'Development', credit: media.peacock.credit, source: media.peacock.source, objectPosition: media.peacock.objectPosition, objectFit: media.peacock.objectFit, articleId: 'peacock-problem' },
    { type: 'image', title: 'Club and Country', src: media.italy.src, tag: 'Italy', credit: media.italy.credit, source: media.italy.source, objectPosition: media.italy.objectPosition, objectFit: media.italy.objectFit, articleId: 'italy-pipeline' },
    { type: 'image', title: 'The Captaincy Transition', src: media.captain.src, tag: 'Dressing Room', credit: media.captain.credit, source: media.captain.source, objectPosition: media.captain.objectPosition, objectFit: media.captain.objectFit, articleId: 'captain-future' },
    { type: 'image', title: 'The Insurance Policy', src: media.stach.src, tag: 'Squad Depth', credit: media.stach.credit, source: media.stach.source, objectPosition: media.stach.objectPosition, objectFit: media.stach.objectFit, articleId: 'stach-insurance' },
    { type: 'video-placeholder', title: 'Gameplay Archive', tag: 'Video', note: 'Gameplay clips, goals and hype videos will live here once footage is added.' }
  ];
})();