(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const VERSION = '20260930-24';
  const local = file => `assets/${file}?v=${VERSION}`;
  const stadium = {
    src:'https://upload.wikimedia.org/wikipedia/commons/4/41/Stadio_San_Paolo_%28Napoli_vs_Club_Brugge%29_-_panoramio_%281%29.jpg',
    credit:'Mister No / Wikimedia Commons · CC BY 3.0',
    source:'https://commons.wikimedia.org/wiki/File:Stadio_San_Paolo_(Napoli_vs_Club_Brugge)_-_panoramio_(1).jpg',
    objectPosition:'50% 57%',
    objectFit:'cover'
  };

  if (Array.isArray(D.results) && !D.results.some(r => r[0]==='Napoli' && r[1]==='Genoa' && r[2]==='Serie A')) {
    D.results.push(['Napoli','Genoa','Serie A',0,0,'D','—','Second straight 0–0; back four held firm; Jankowski denied several late Napoli chances']);
  }

  D.upcoming = [
    ['Arsenal','Champions League','Next · Nov 2'],
    ['Udinese','Serie A','Nov 6'],
    ['South Africa','International','Nov 13'],
    ['Scotland','International','Nov 16'],
    ['Fiorentina','Serie A','Nov 20'],
    ['Chelsea','Champions League','Nov 23'],
    ['Inter','Serie A','Nov 28']
  ];

  D.ticker = [
    'FT · NAPOLI 0–0 GENOA',
    'SERIE A · NAPOLI 6–4–0 · 22 PTS',
    'ATTACK · 180 LEAGUE MINUTES WITHOUT A GOAL',
    'DEFENCE · BACK-TO-BACK CLEAN SHEETS',
    'NEXT · ARSENAL · CHAMPIONS LEAGUE'
  ];

  const genoaArticle = {
    id:'genoa-drought',
    category:'Match Report',
    label:'Scoring Drought',
    date:'After Napoli 0–0 Genoa',
    headline:'Another Clean Sheet, Another Blank: Napoli’s Attack Has Gone Cold',
    dek:'Napoli held Genoa out with ease for long stretches but could not beat Jankowski, making it two straight 0–0 draws and 180 league minutes without a goal.',
    image:stadium.src,
    imageCredit:stadium.credit,
    imageSource:stadium.source,
    objectPosition:stadium.objectPosition,
    objectFit:stadium.objectFit,
    tone:'analysis',
    body:[
      'For the second league match in a row, Napoli left with the same contradiction: the defence looked almost impossible to break, and the attack could not finish the job at the other end.',
      'Genoa found very little space against a back four that repeatedly won first contact and shut down transitions. Meret dealt comfortably with the efforts that did come through, extending Napoli’s clean-sheet run.',
      'The frustration was entirely at the other end. Napoli created promising sequences through Davies, De Bruyne and Paz, while Beier, Lang and McTominay all found moments late in the match. Jankowski kept answering.',
      'The closing spell brought corner after corner and enough pressure to suggest the breakthrough was coming. It never did. The final whistle confirmed a second consecutive 0–0 and 180 league minutes without a Napoli goal.',
      'That is now the tension heading into Arsenal. Napoli remain difficult to beat and have not conceded in two straight matches, but Europe will punish a side that creates without finishing. The next step is obvious: somebody has to score.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== 'genoa-drought');
    D.articles.unshift(genoaArticle);
  }

  D.hero = {articleId:'genoa-drought',strap:'SOLID AT THE BACK. SILENT UP FRONT.'};

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => {
      if (row[0]==='Maximilian Beier') return ['Maximilian Beier',3,0,'Three goals logged; denied by Jankowski during the Genoa stalemate.'];
      if (row[0]==='Pio Esposito') return ['Pio Esposito',5,1,'Still leads Napoli with five logged goals; the attack has now gone scoreless in two straight league matches.'];
      if (row[0]==='Alex Meret') return ['Alex Meret',0,0,'Part of back-to-back clean sheets against Lazio and Genoa.'];
      return row;
    });
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  D.whispers = [
    ['Scoring Drought','Napoli have gone 180 league minutes without a goal after consecutive 0–0 draws with Lazio and Genoa.'],
    ['Defensive Wall','The other side of the story: back-to-back clean sheets and very little space conceded in either match.'],
    ['Arsenal Timing','The finishing problem arrives at the worst possible moment, with Arsenal next in the Champions League.'],
    ['Pressure Up Front','Pio still leads the scoring chart, Beier remains on three, and the next goal suddenly feels bigger than a normal November strike.']
  ];

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => item.articleId !== 'genoa-drought');
    D.media.unshift({
      type:'image', title:'Genoa: 180 Minutes Without a Goal', src:stadium.src, tag:'Match Report',
      credit:stadium.credit, source:stadium.source, objectPosition:stadium.objectPosition, objectFit:stadium.objectFit,
      articleId:'genoa-drought'
    });
  }

  window.NAPOLI_IMAGE_FALLBACK = window.NAPOLI_IMAGE_FALLBACK || local('editorial-bayern.svg');
})();