(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const article = {
    id:'empoli-2-1-offense-response',
    category:'Match Report',
    label:'Serie A',
    date:'Napoli 2–1 Empoli · FT',
    headline:'Beier and Pio Answer the Noise: Napoli Beat Empoli 2–1 and Stay in the Title Fight',
    dek:'Maximilian Beier struck in the fifth minute from Pio Esposito’s pass, Pio doubled the lead from Nico Paz in the 22nd, and Napoli held on after Yepes pulled one back late.',
    image:'assets/beier-napoli.jpg',
    objectPosition:'50% 24%',
    objectFit:'cover',
    tone:'news',
    commentHeat:5,
    reaction:'win',
    visitorClub:'EMPOLI',
    commentContext:'serie-a-title-race',
    body:[
      'Napoli needed an attacking response after the recent questions around their production. They got it almost immediately, beating Empoli 2–1 and keeping themselves right in the middle of the Serie A title race.',
      'The opener arrived in the fifth minute. Pio Esposito released Maximilian Beier with a lovely ball, Beier went through on goal and finished cleanly for 1–0.',
      'Napoli kept the pressure on rather than retreating. Peacock dealt with Empoli’s early effort, Parison denied Pio at the other end, and the second goal arrived in the 22nd minute when Nico Paz found Pio and the striker finished to make it 2–0.',
      'The chances kept coming before halftime. Beier was denied by Parison, Davies repeatedly drove at the left side, and Napoli went into the break two goals up with the attack looking sharper and more fluid than it had in recent matches.',
      'With Roma and the Supercoppa against Juventus looming, the second half became partly about managing the squad. Rafa Marín replaced Buongiorno and Kevin De Bruyne came on for Paz at halftime. Billy Gilmour, Mikey Moore and Sam Beukema also received minutes as Napoli tried to protect legs and restore sharpness across the squad.',
      'Empoli refused to disappear. Yepes pulled one back in the 75th minute to make it 2–1 and force Napoli to manage a tense final quarter-hour, but the hosts saw it out and won a corner in stoppage time that effectively killed the game.',
      'The bigger story is the front two. Beier scored, Pio scored and assisted, and Paz created the second. For a side that had been hearing questions about whether the offense was beginning to stall, this was a useful answer.',
      'The title race remains compressed. Inter are two points ahead of Napoli, Milan are one point ahead, and Roma sit six points behind. Roma are next on Dec 25 before Napoli face Juventus in the Supercoppa five days later.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  if (Array.isArray(D.results)) {
    const row = ['Napoli','Empoli','Serie A',2,1,'W',"Beier 5'; Pio Esposito 22'",'Pio assisted Beier; Paz assisted Pio; Yepes pulled one back in the 75th'];
    const existing = D.results.findIndex(r => r[0] === 'Napoli' && r[1] === 'Empoli' && r[2] === 'Serie A');
    if (existing >= 0) D.results[existing] = row; else D.results.push(row);
  }

  if (Array.isArray(D.upcoming)) D.upcoming = D.upcoming.filter(row => !(row[0] === 'Empoli' && row[1] === 'Serie A'));

  D.hero = {articleId:article.id,strap:'TWO GOALS. THREE POINTS. TITLE RACE ON.'};
  D.ticker = [
    'FT · NAPOLI 2–1 EMPOLI · SERIE A',
    "BEIER 5' · PIO 22'",
    'PIO · GOAL + ASSIST',
    'TITLE RACE · INTER +2 · MILAN +1',
    'NEXT · ROMA · DEC 25 · SERIE A'
  ];

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => {
      if (row[0] === 'Maximilian Beier') return [row[0], Number(row[1] || 0) + 1, row[2], 'Scored the fifth-minute opener against Empoli from Pio Esposito’s through ball.'];
      if (row[0] === 'Pio Esposito') return [row[0], Number(row[1] || 0) + 1, Number(row[2] || 0) + 1, 'Goal and assist in the 2–1 win over Empoli: created Beier’s opener and scored from Paz in the 22nd.'];
      if (row[0] === 'Nico Paz') return [row[0], row[1], Number(row[2] || 0) + 1, 'Assisted Pio Esposito’s 22nd-minute goal against Empoli.'];
      if (row[0] === 'Peacock') return [row[0], row[1], row[2], 'Started against Empoli to restore sharpness and made an important first-half save in the 2–1 win.'];
      return row;
    });
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => !['Empoli Response','Title Race','Roma Next','Cup Survival'].includes(item[0]));
    D.whispers.unshift(
      ['Empoli Response','Beier scored in the fifth minute, Pio added a goal and an assist, and Napoli held on for a 2–1 league win.'],
      ['Title Race','Inter are two points ahead of Napoli, Milan one point ahead, while Roma sit six points behind Napoli.'],
      ['Roma Next','Roma arrive on Dec 25 with Napoli protecting a six-point cushion over them; Juventus follow five days later in the Supercoppa.']
    );
  }

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => item.articleId !== article.id);
    D.media.unshift({type:'image',title:'Beier Strikes Early Against Empoli',src:'assets/beier-napoli.jpg',tag:'FT · Napoli 2–1 Empoli',objectPosition:'50% 24%',objectFit:'cover',articleId:article.id});
  }
})();