(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  if (Array.isArray(D.results)) {
    const i = D.results.findIndex(r => r[0] === 'Napoli' && r[1] === 'Udinese' && r[2] === 'Serie A');
    const row = ['Napoli','Udinese','Serie A',1,0,'W',"Pio Esposito 43'",'Beier assist; Meret key save; Bastoni and Buongiorno led a clean-sheet defensive display'];
    if (i >= 0) D.results[i] = row; else D.results.push(row);
  }

  D.upcoming = [
    ['South Africa','International','Nov 13'],
    ['Scotland','International','Nov 16'],
    ['Fiorentina','Serie A','Nov 20'],
    ['Chelsea','Champions League','Nov 23'],
    ['Inter','Serie A','Nov 28']
  ];

  D.ticker = [
    "FT · NAPOLI 1–0 UDINESE · PIO 43'",
    'SERIE A · CLEAN SHEET · THREE POINTS',
    'PIO · SEVEN LOGGED GOALS',
    'BEIER · ASSIST ON THE WINNER',
    'NEXT · INTERNATIONAL WINDOW'
  ];

  const article = {
    id:'udinese-pio-clean-sheet',
    category:'Serie A',
    label:'Match Report',
    date:'After Napoli 1–0 Udinese',
    headline:'Pio Delivers Again as Napoli Grind Udinese Down and Shut the Door',
    dek:'A 43rd-minute Pio Esposito finish from Beier’s pass was enough as Napoli paired patience in attack with one of their strongest defensive performances of the season.',
    image:'assets/pio-napoli.webp',
    objectPosition:'50% 30%',
    objectFit:'cover',
    tone:'feature',
    body:[
      'Napoli wanted goals before the international break. What they got instead was something almost as valuable: control.',
      'Udinese stayed compact for long stretches and forced Napoli to work through patient possession, but the breakthrough finally arrived in the 43rd minute. Maximilian Beier found Pio Esposito, and Napoli’s most clinical striker finished the chance for 1–0.',
      'The second half never became the rout Napoli were chasing. Nico Paz, Alphonso Davies, Scott McTominay and Anton Stach all helped keep Udinese pinned back, while Chiesa and Endrick added fresh running late.',
      'At the other end, the back four were outstanding. Bastoni and Buongiorno repeatedly killed attacks before they developed, Kayode kept winning the ball back on the right, and Cucurella cleared after Meret produced the biggest save of the match.',
      'Chiesa hit the post late and Napoli had chances to add a second, but there was no late drama this time. One goal, one clean sheet, three points — and another decisive Pio moment before the two-week club break.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  D.hero = {articleId:'udinese-pio-clean-sheet',strap:'PIO AGAIN. CLEAN SHEET. THREE POINTS.'};

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => {
      if (row[0] === 'Pio Esposito') return ['Pio Esposito',7,1,"Seven logged goals; match-winner vs Udinese after the 90+1' Arsenal equalizer."];
      if (row[0] === 'Maximilian Beier') return ['Maximilian Beier',3,2,'Three logged goals; assists on Pio goals vs Arsenal and Udinese.'];
      if (row[0] === 'Alex Meret') return ['Alex Meret',0,0,'Key second-half save vs Udinese protected the 1–0 clean sheet.'];
      return row;
    });
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  D.whispers = [
    ['Pio Keeps Answering','Seven logged goals now, with back-to-back decisive moments against Arsenal and Udinese.'],
    ['Defensive Wall','Bastoni, Buongiorno, Kayode and Cucurella gave Udinese almost nothing, with Meret making the one huge save when needed.'],
    ['Beier the Connector','Beier supplied the winning assist after also creating Pio’s 90+1 equalizer against Arsenal.'],
    ['Break Arrives','Napoli enter the international window with a win and a two-week gap before the next club match.']
  ];

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => item.articleId !== article.id);
    D.media.unshift({type:'image',title:'Udinese: Pio Wins It',src:'assets/pio-napoli.webp',tag:'Serie A',objectPosition:'50% 30%',objectFit:'cover',articleId:article.id});
  }
})();