(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const stadium = {
    src:'https://upload.wikimedia.org/wikipedia/commons/4/41/Stadio_San_Paolo_%28Napoli_vs_Club_Brugge%29_-_panoramio_%281%29.jpg',
    credit:'Mister No / Wikimedia Commons · CC BY 3.0',
    source:'https://commons.wikimedia.org/wiki/File:Stadio_San_Paolo_(Napoli_vs_Club_Brugge)_-_panoramio_(1).jpg',
    objectPosition:'50% 57%',
    objectFit:'cover'
  };

  if (Array.isArray(D.results) && !D.results.some(r => r[0] === 'Napoli' && r[1] === 'Arsenal' && r[2] === 'Champions League')) {
    D.results.push(['Napoli','Arsenal','Champions League',1,0,'W',"Pio Esposito 90+1'",'Beier assist; Meret key saves; late winner ended the scoring drought']);
  }

  D.upcoming = [
    ['Udinese','Serie A','Next · Nov 6'],
    ['South Africa','International','Nov 13'],
    ['Scotland','International','Nov 16'],
    ['Fiorentina','Serie A','Nov 20'],
    ['Chelsea','Champions League','Nov 23'],
    ['Inter','Serie A','Nov 28']
  ];

  D.ticker = [
    "FT · NAPOLI 1–0 ARSENAL · PIO 90+1'",
    'EUROPE · NAPOLI 3–0–1 · 9 PTS',
    'PIO ESPOSITO · STOPPAGE-TIME WINNER',
    'BEIER · ASSIST ON THE WINNER',
    'NEXT · UDINESE · SERIE A'
  ];

  const article = {
    id:'arsenal-pio-91',
    category:'Champions League',
    label:'Stoppage-Time Winner',
    date:'After Napoli 1–0 Arsenal',
    headline:'Pio at 90+1: Napoli Break the Drought in the Loudest Possible Way',
    dek:'After 180 scoreless league minutes, Beier found Pio Esposito in stoppage time and Pio finished the winner into the top-left corner.',
    image:stadium.src,
    imageCredit:stadium.credit,
    imageSource:stadium.source,
    objectPosition:stadium.objectPosition,
    objectFit:stadium.objectFit,
    tone:'breaking',
    body:[
      'For most of the night, Napoli ran into the same problem that defined the previous two league matches: chances without a finish.',
      'Arsenal applied heavy pressure through long spells, but Meret and the Napoli back line kept the match alive with key saves, tackles and interceptions.',
      'Napoli also had openings through Davies, Paz, McTominay and Beier, but Raya kept Arsenal level as the match moved into stoppage time.',
      'Then, in the 90+1st minute, Maximilian Beier supplied the pass and Pio Esposito finished into the top-left corner for the winner.',
      'The scoring drought is over, Napoli have three Champions League wins from four, and Udinese is next.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  D.hero = {articleId:'arsenal-pio-91',strap:'90+1. PIO. DROUGHT OVER.'};

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => {
      if (row[0] === 'Pio Esposito') return ['Pio Esposito',6,1,"Six logged goals; 90+1' winner vs Arsenal."];
      if (row[0] === 'Maximilian Beier') return ['Maximilian Beier',3,1,'Three logged goals; assisted the Arsenal winner.'];
      if (row[0] === 'Alex Meret') return ['Alex Meret',0,0,'Key saves vs Arsenal; part of three straight clean sheets.'];
      return row;
    });
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  D.whispers = [
    ['Drought Broken',"Pio's 90+1' winner ended the scoreless run."],
    ['Pio Moment','Six logged goals now, with the latest coming against Arsenal.'],
    ['Beier Contribution','Beier supplied the assist on the decisive goal.'],
    ['Defensive Run','Napoli have three straight clean sheets across Lazio, Genoa and Arsenal.']
  ];

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => item.articleId !== article.id);
    D.media.unshift({type:'image',title:'Arsenal: Pio at 90+1',src:stadium.src,tag:'Champions League',credit:stadium.credit,source:stadium.source,objectPosition:stadium.objectPosition,objectFit:stadium.objectFit,articleId:article.id});
  }
})();