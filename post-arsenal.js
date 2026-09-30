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

  if (Array.isArray(D.results)) {
    const i = D.results.findIndex(r => r[0] === 'Napoli' && r[1] === 'Arsenal' && r[2] === 'Champions League');
    const row = ['Napoli','Arsenal','Champions League',1,1,'D',"Ødegaard 24'; Pio Esposito 90+1'",'Beier assist on Pio equalizer; Meret key saves; stoppage-time goal ended the scoring drought'];
    if (i >= 0) D.results[i] = row; else D.results.push(row);
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
    "FT · NAPOLI 1–1 ARSENAL · PIO 90+1'",
    'EUROPE · NAPOLI 2–1–1 · 7 PTS',
    'ATTACK · GOALLESS DROUGHT ENDS IN STOPPAGE TIME',
    'BEIER · ASSIST ON THE EQUALIZER',
    'NEXT · UDINESE · SERIE A'
  ];

  const article = {
    id:'arsenal-pio-91',
    category:'Champions League',
    label:'Stoppage-Time Equalizer',
    date:'After Napoli 1–1 Arsenal',
    headline:'Pio at 90+1: Napoli Finally Break the Drought and Rescue a Point',
    dek:'Ødegaard put Arsenal ahead in the 24th, but after 180 scoreless league minutes Beier found Pio Esposito in stoppage time and Pio smashed the equalizer into the top-left corner.',
    image:stadium.src,
    imageCredit:stadium.credit,
    imageSource:stadium.source,
    objectPosition:stadium.objectPosition,
    objectFit:stadium.objectFit,
    tone:'breaking',
    body:[
      'For most of the night, Napoli ran into the same problem that defined the previous two league matches: chances without a finish.',
      'Arsenal took the lead in the 24th minute through Ødegaard and then applied heavy pressure through long spells, but Meret and the Napoli back line kept the match within reach.',
      'Napoli still found openings through Davies, Paz, McTominay and Beier, but Raya repeatedly shut the door as the match moved into stoppage time.',
      'Then, in the 90+1st minute, Maximilian Beier supplied the pass and Pio Esposito finished into the top-left corner for the equalizer.',
      'The match finished 1–1. Napoli did not get the win, but the goalless drought is over, Pio has six logged goals, and the team moves to seven points from four Champions League matches.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  D.hero = {articleId:'arsenal-pio-91',strap:'90+1. PIO. DROUGHT OVER.'};

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => {
      if (row[0] === 'Pio Esposito') return ['Pio Esposito',6,1,"Six logged goals; 90+1' equalizer vs Arsenal ended the drought."];
      if (row[0] === 'Maximilian Beier') return ['Maximilian Beier',3,1,'Three logged goals; assisted Pio’s Arsenal equalizer.'];
      if (row[0] === 'Alex Meret') return ['Alex Meret',0,0,'Key saves vs Arsenal kept Napoli alive long enough for the late equalizer.'];
      return row;
    });
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  D.whispers = [
    ['Drought Broken',"Pio's 90+1' equalizer ended Napoli's goalless run."],
    ['Pio Moment','Six logged goals now, with the latest rescuing a point against Arsenal.'],
    ['Beier Contribution','Beier supplied the assist on the stoppage-time equalizer.'],
    ['Still Searching','The drought is over, but Napoli still have just one goal across their last three matches.']
  ];

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => item.articleId !== article.id);
    D.media.unshift({type:'image',title:'Arsenal: Pio at 90+1',src:stadium.src,tag:'Champions League',credit:stadium.credit,source:stadium.source,objectPosition:stadium.objectPosition,objectFit:stadium.objectFit,articleId:article.id});
  }
})();