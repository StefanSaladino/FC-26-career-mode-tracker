(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const article = {
    id:'inter-live-bastoni-header',
    category:'Live',
    label:'Title Race',
    date:'Napoli 1–0 Inter · Live',
    headline:'Bastoni Rises: Chiesa Corner Puts Napoli Ahead in the Title-Race Six-Pointer',
    dek:'Federico Chiesa delivers from the corner and Alessandro Bastoni powers the header in. Napoli lead Inter 1–0 with the Serie A gap hanging over every touch.',
    image:'assets/bastoni-napoli.jpg',
    objectPosition:'50% 30%',
    objectFit:'cover',
    tone:'breaking',
    commentHeat:5,
    reaction:'rivalry',
    visitorClub:'INTER',
    commentContext:'league-title-race',
    body:[
      'The title-race match has its first major swing: Napoli lead Inter 1–0.',
      'The breakthrough came from a corner. Federico Chiesa whipped the delivery into the area and Alessandro Bastoni rose to meet it, powering the header beyond the goalkeeper.',
      'The scorer only adds to the theatre. Bastoni, now the 90-rated centrepiece of Napoli’s defence, has produced at the other end of the pitch in the biggest domestic match of the season so far.',
      'Chiesa adds another decisive contribution after assisting Kevin De Bruyne’s winner against Fiorentina. His set-piece delivery has now directly changed the title-race game.',
      'Inter arrived four points clear at the top of Serie A. If this score holds, Napoli cut that advantage to one. That arithmetic now sits behind every transition, every corner and every defensive clearance for the rest of the match.',
      'The match is still live. Nothing is being treated as settled — but Napoli have landed the first blow.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  // Inter is now live, so the upcoming list advances to the fixtures after this match.
  if (Array.isArray(D.upcoming)) D.upcoming = D.upcoming.filter(row => row[0] !== 'Inter');

  D.hero = {articleId:article.id,strap:'BASTONI RISES. NAPOLI LEAD INTER.'};

  D.ticker = [
    'LIVE · NAPOLI 1–0 INTER · BASTONI HEADER',
    'CHIESA CORNER · BASTONI FINISH',
    'TITLE RACE · INTER ENTERED FOUR POINTS CLEAR',
    'AS IT STANDS · NAPOLI WOULD CUT THE GAP TO ONE'
  ];

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => item[0] !== 'Live Title-Race Swing');
    D.whispers.unshift(['Live Title-Race Swing','Bastoni has headed Napoli 1–0 ahead from a Chiesa corner. If the score holds, Inter’s four-point Serie A lead is cut to one.']);
  }

  if (Array.isArray(D.stats)) {
    let hasBastoni = false;
    D.stats = D.stats.map(row => {
      if (row[0] === 'Alessandro Bastoni') {
        hasBastoni = true;
        return ['Alessandro Bastoni',Math.max(1,Number(row[1]||0)),Number(row[2]||0),'Header vs Inter in the live title-race showdown.'];
      }
      if (row[0] === 'Federico Chiesa') return ['Federico Chiesa',1,2,'Winner vs Pisa; assists on De Bruyne vs Fiorentina and Bastoni vs Inter.'];
      return row;
    });
    if (!hasBastoni) D.stats.push(['Alessandro Bastoni',1,0,'Header vs Inter in the live title-race showdown.']);
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => item.articleId !== article.id);
    D.media.unshift({type:'image',title:'Bastoni Breaks the Deadlock',src:'assets/bastoni-napoli.jpg',tag:'Live vs Inter',objectPosition:'50% 30%',objectFit:'cover',articleId:article.id});
  }
})();