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

  const upsertResult = row => {
    if (!Array.isArray(D.results)) return;
    const i = D.results.findIndex(r => r[0] === row[0] && r[1] === row[1] && r[2] === row[2]);
    if (i >= 0) D.results[i] = row; else D.results.push(row);
  };

  upsertResult(['Italy','South Africa','Friendly',1,0,'W','Pio Esposito','Pio scores as Italy edge South Africa']);
  upsertResult(['Italy','Scotland','Friendly',3,0,'W','Sebastiano Esposito x2; Tonali','Second straight clean sheet; Esposito brace']);
  upsertResult(['Napoli','Fiorentina','Serie A',1,0,'W',"Kevin De Bruyne 29'",'Chiesa assist; Meret huge save; Stach goal-line clearance; rotated XI protects three points before Chelsea']);
  upsertResult(['Napoli','Chelsea','Champions League',1,0,'W',"Pio Esposito 43'",'Davies assist; Trubin denied Endrick; Meret huge 90+1 save; Napoli move to 3-1-1 in Europe']);

  D.upcoming = [
    ['Inter','Serie A','Oct 28'],
    ['Lecce','Serie A','Nov 5'],
    ['RB Salzburg','Champions League','Nov 8'],
    ['Juventus','Serie A','Nov 12'],
    ['Cagliari','Coppa Italia','Nov 15'],
    ['Empoli','Serie A','Nov 19'],
    ['Roma','Serie A','Nov 25'],
    ['Juventus','Supercoppa Italiana','Nov 30']
  ];

  D.ticker = [
    'CORE LOCKED · BUONGIORNO + DAVIES EXTEND',
    'NEXT · INTER · OCT 28 · SERIE A · FOUR-POINT GAP',
    "FT · NAPOLI 1–0 CHELSEA · PIO 43'",
    'JUVENTUS · ONE POINT BEHIND NAPOLI',
    'RB SALZBURG · CHAMPIONS LEAGUE · NOV 8',
    'SUPERCOPPA · JUVENTUS · NOV 30'
  ];

  const inter = Array.isArray(D.articles) ? D.articles.find(a => a.id === 'inter-title-race-preview') : null;
  if (inter) Object.assign(inter, {
    image:stadium.src,
    imageCredit:stadium.credit,
    imageSource:stadium.source,
    objectPosition:stadium.objectPosition,
    objectFit:stadium.objectFit,
    commentHeat:5,
    reaction:'rivalry',
    visitorClub:'INTER',
    commentContext:'league-title-race'
  });

  const extensionArticle = {
    id:'buongiorno-davies-extensions',
    category:'Club',
    label:'Contract News',
    date:'Ahead of Inter · Oct 28',
    headline:'Core Locked Down: Buongiorno and Davies Sign New Napoli Deals',
    dek:'Napoli secure two cornerstones of the project before the title-race showdown with Inter, extending Alessandro Buongiorno and Alphonso Davies on new terms.',
    image:stadium.src,
    imageCredit:stadium.credit,
    imageSource:stadium.source,
    objectPosition:stadium.objectPosition,
    objectFit:stadium.objectFit,
    tone:'breaking',
    commentHeat:4,
    reaction:'club-news',
    visitorClub:'NONE',
    body:[
      'Napoli have moved decisively to secure two of the cornerstones of the project, with Alessandro Buongiorno and Alphonso Davies both agreeing new contracts.',
      'Buongiorno, now 28 and rated 87 OVR, has agreed a two-year extension to his existing deal. The centre-back remains on Crucial status at $160K per week, with a $1.65M signing bonus and a further $2.5M after 20 appearances.',
      'The renewal keeps one half of Napoli’s elite central-defensive partnership firmly in place through his prime years.',
      'Alphonso Davies has also agreed a three-year contract extension worth $190K per week, ensuring the 90-rated Canadian remains in Naples as one of the central pieces of the squad.',
      'Davies has become far more than simply a left-sided defender in this Napoli side. His ability to break games open in transition was on full display against Chelsea, when his spectacular run created Pio Esposito’s winning goal in Napoli’s 1–0 European victory.',
      'With both deals complete, Napoli have removed two potentially significant contract questions from the dressing room at a crucial point in the season.',
      'The message from the club is clear: the core is staying together. With Buongiorno anchoring the defence and Davies providing one of the most dangerous weapons anywhere on the left side of the pitch, Napoli can turn their complete attention toward the title race, beginning with the upcoming showdown against Serie A leaders Inter.'
    ]
  };

  const scheduleArticle = {
    id:'fixture-run-november',
    category:'Schedule',
    label:'Fixture Run',
    date:'The run ahead',
    headline:'Inter Opens the Door to a Defining Run — Then Come Salzburg, Juve Twice and Roma',
    dek:'Napoli leave the Chelsea win behind and enter a stretch that touches every front: the Serie A lead, Europe, the Coppa Italia and a Supercoppa showdown with Juventus.',
    image:stadium.src,
    imageCredit:stadium.credit,
    imageSource:stadium.source,
    objectPosition:stadium.objectPosition,
    objectFit:stadium.objectFit,
    tone:'feature',
    commentHeat:4,
    reaction:'title-race',
    visitorClub:'NONE',
    body:[
      'Inter are first on Oct 28, four points ahead of Napoli at the top of Serie A. A win cuts the gap to one and immediately changes the pressure at the summit.',
      'After that, the sequence is relentless: Lecce in the league on Nov 5, RB Salzburg in the Champions League on Nov 8 and Juventus in Serie A on Nov 12. Juve enter that league meeting only one point behind Napoli.',
      'Cagliari follow in the Coppa Italia on Nov 15 before league matches against Empoli on Nov 19 and Roma on Nov 25.',
      'The run closes with another Juventus meeting on Nov 30, this time with silverware attached in the Supercoppa Italiana.',
      'Napoli therefore move from one heavyweight European win into a stretch where rotation, depth and result management will all matter. The season is no longer separating competitions cleanly; every few days brings a different kind of pressure.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => ![extensionArticle.id,scheduleArticle.id].includes(a.id));
    const interIndex = D.articles.findIndex(a => a.id === 'inter-title-race-preview');
    if (interIndex >= 0) {
      D.articles.splice(interIndex + 1, 0, extensionArticle);
      D.articles.splice(interIndex + 2, 0, scheduleArticle);
    } else {
      D.articles.unshift(extensionArticle, scheduleArticle);
    }

    const matchContexts = {
      'bayern-test':'ucl-league-stage',
      'arsenal-pio-91':'ucl-league-stage',
      'chelsea-pio-1-0':'ucl-league-stage',
      'inter-title-race-preview':'league-title-race',
      'fiorentina-kdb-1-0':'league-regular',
      'udinese-pio-clean-sheet':'league-regular',
      'genoa-drought':'league-regular',
      'lazio-control':'league-regular',
      'sassuolo-response':'league-regular',
      'chiesa-pisa':'league-regular',
      'torino-control':'league-regular'
    };
    D.articles.forEach(article => {
      if (matchContexts[article.id]) article.commentContext = matchContexts[article.id];
    });
  }

  D.hero = {articleId:'chelsea-pio-1-0',strap:'PIO STRIKES. MERET SAVES. CHELSEA FALL.'};

  if (Array.isArray(D.firstXI)) {
    D.firstXI = D.firstXI.map(row => {
      if (row[1] === 'Alessandro Bastoni') return [row[0],row[1],90];
      if (row[1] === 'Alessandro Buongiorno') return [row[0],row[1],87];
      return row;
    });
  }
  if (D.squadPublic && Array.isArray(D.squadPublic.Defenders)) {
    D.squadPublic.Defenders = D.squadPublic.Defenders.map(row => {
      if (row[0] === 'Alessandro Bastoni') return [row[0],row[1],90,row[3]];
      if (row[0] === 'Alessandro Buongiorno') return [row[0],row[1],87,row[3]];
      return row;
    });
  }

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => {
      if (row[0] === 'Pio Esposito') return ['Pio Esposito',8,1,'Eight logged Napoli goals; decisive against Arsenal, Udinese and Chelsea.'];
      if (row[0] === 'Kevin De Bruyne') return ['Kevin De Bruyne',2,1,'Goals vs Como and Fiorentina; assist on Paz winner.'];
      if (row[0] === 'Federico Chiesa') return ['Federico Chiesa',1,1,'Winner vs Pisa; assist on De Bruyne winner vs Fiorentina.'];
      if (row[0] === 'Alphonso Davies') return ['Alphonso Davies',1,1,"UCL goal vs Brugge; spectacular assist for Pio's Chelsea winner."];
      if (row[0] === 'Alex Meret') return ['Alex Meret',0,0,'Huge saves vs Brugge, Udinese, Fiorentina and Chelsea; elite late-game form.'];
      return row;
    });
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  D.whispers = [
    ['Contract Core Secured','Buongiorno has extended for two years at $160K per week and Davies for three years at $190K per week.'],
    ['Title Race Pressure','Inter are four points clear. Napoli can cut the gap to one on Oct 28; defeat would stretch it to seven.'],
    ['Juve Double','Juventus sit one point behind Napoli ahead of the Nov 12 league meeting, with a Supercoppa showdown also listed for Nov 30.'],
    ['Fixture Compression','The run includes Inter on Oct 28, then Lecce, Salzburg, Juventus, Cagliari, Empoli, Roma and Juventus again across league, Europe and cups.'],
    ['Pio Keeps Rising','Eight logged Napoli goals, plus his Italy strike against South Africa. The big-game pattern is becoming impossible to ignore.'],
    ['Meret in the Clutch','The 90+1 save against Chelsea preserved another one-goal win and extended his run of decisive late interventions.']
  ];

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => !['inter-title-race-preview','buongiorno-davies-extensions','fixture-run-november'].includes(item.articleId));
    D.media.unshift(
      {type:'image',title:'Inter: Four-Point Title Gap',src:stadium.src,credit:stadium.credit,source:stadium.source,tag:'Serie A Preview',objectPosition:stadium.objectPosition,objectFit:stadium.objectFit,articleId:'inter-title-race-preview'},
      {type:'image',title:'Core Locked Down',src:stadium.src,credit:stadium.credit,source:stadium.source,tag:'Contract News',objectPosition:stadium.objectPosition,objectFit:stadium.objectFit,articleId:'buongiorno-davies-extensions'},
      {type:'image',title:'The Run Ahead',src:stadium.src,credit:stadium.credit,source:stadium.source,tag:'Schedule',objectPosition:stadium.objectPosition,objectFit:stadium.objectFit,articleId:'fixture-run-november'}
    );
  }
})();