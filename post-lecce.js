(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const article = {
    id:'lecce-endrick-pio-2-0',
    category:'Match Report',
    label:'Serie A',
    date:'Napoli 2–0 Lecce · FT',
    headline:'Endrick Breaks It Open, Pio Finishes It: Napoli Beat Lecce 2–0',
    dek:'A tense scoreless first half gave way to the breakthrough Napoli needed: Endrick struck in the 76th minute from Pio Esposito’s pass, then returned the favour for Pio’s 86th-minute clincher.',
    image:'assets/endrick-napoli.jpg',
    objectPosition:'50% 28%',
    objectFit:'cover',
    tone:'news',
    commentHeat:4,
    reaction:'league-win',
    visitorClub:'LECCE',
    commentContext:'league-regular',
    body:[
      'Napoli got the three points they needed, beating Lecce 2–0 after a match that stayed uncomfortable deep into the second half.',
      'The first half ended 0–0 despite Napoli controlling most of the territory. McTominay tested the goalkeeper from distance, Davies found space repeatedly on the left, and Lecce defended their box well enough to keep the game level.',
      'The bench helped change the rhythm. Mikey Moore replaced Federico Chiesa at halftime, Kevin De Bruyne came on for Nico Paz, and Maximilian Beier was introduced as Napoli pushed for a breakthrough.',
      'It finally arrived in the 76th minute. Pio Esposito released Endrick on the counter and the Brazilian finished left-footed to make it 1–0.',
      'Ten minutes later the two forwards swapped roles. Endrick supplied the pass and Pio buried the chance in the 86th minute to kill the game at 2–0.',
      'Buongiorno also produced a crucial block while the match was still scoreless, helping preserve the platform for the late attacking surge.',
      'The result moves Napoli to 32 points from 14 league matches. Based on the table entering the round, that puts Napoli three points behind Inter’s 36 from 14 and temporarily ahead of AC Milan’s 30 from 13, pending Milan’s game in hand.',
      'Next comes RB Salzburg in the Champions League on Dec 8, followed by Juventus in Serie A on Dec 12.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  if (Array.isArray(D.results)) {
    const row = ['Napoli','Lecce','Serie A',2,0,'W',"Endrick 76'; Pio Esposito 86'",'Pio assist on Endrick; Endrick assist on Pio; clean sheet'];
    const existing = D.results.findIndex(r => r[0] === 'Napoli' && r[1] === 'Lecce' && r[2] === 'Serie A');
    if (existing >= 0) D.results[existing] = row; else D.results.push(row);
  }

  if (Array.isArray(D.upcoming)) D.upcoming = D.upcoming.filter(row => row[0] !== 'Lecce');

  D.hero = {articleId:article.id,strap:'ENDRICK OPENS IT. PIO CLOSES IT. THREE POINTS.'};
  D.ticker = [
    'FT · NAPOLI 2–0 LECCE',
    "ENDRICK 76' · PIO ASSIST",
    "PIO 86' · ENDRICK ASSIST",
    'SERIE A · NAPOLI MOVE TO 32 POINTS',
    'NEXT · RB SALZBURG · DEC 8 · CHAMPIONS LEAGUE'
  ];

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => {
      if (row[0] === 'Pio Esposito') return ['Pio Esposito',9,2,'Nine logged Napoli goals; scored and assisted in the 2–0 win over Lecce.'];
      if (row[0] === 'Endrick') return ['Endrick',3,3,'Goal and assist vs Lecce; also scored vs Pisa and Torino.'];
      return row;
    });
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => !['Lecce Job Done','Title Race Pressure'].includes(item[0]));
    D.whispers.unshift(
      ['Lecce Job Done','Endrick and Pio assisted each other in the 2–0 win. Napoli move to 32 points from 14 league matches.'],
      ['Title Race Pressure','Inter sit on 36 points from 14. Napoli are on 32 from 14; Milan entered the round on 30 from 13.']
    );
  }

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => item.articleId !== article.id);
    D.media.unshift({type:'image',title:'Endrick Breaks Lecce',src:'assets/endrick-napoli.jpg',tag:'FT · Napoli 2–0 Lecce',objectPosition:'50% 28%',objectFit:'cover',articleId:article.id});
  }
})();