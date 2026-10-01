(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const article = {
    id:'cagliari-davies-winner-2-1',
    category:'Match Report',
    label:'Coppa Italia',
    date:'Napoli 2–1 Cagliari · FT',
    headline:'Davies Off the Bench Wins It: Napoli Survive Cagliari 2–1 in the Coppa',
    dek:'Maximilian Beier finally got on the board from Nico Paz’s pass, Peacock made multiple key saves, and Alphonso Davies came off the bench to bury the 82nd-minute winner.',
    image:'assets/davies-napoli.jpg',
    objectPosition:'50% 24%',
    objectFit:'cover',
    tone:'news',
    commentHeat:5,
    reaction:'cup-win',
    visitorClub:'CAGLIARI',
    commentContext:'coppa-knockout',
    body:[
      'Napoli are through after a 2–1 Coppa Italia win over Cagliari that demanded more from the rotated side than the opening half-hour suggested it would.',
      'The early pressure was almost constant. Pio Esposito went close in the fifth minute, Nico Paz had an effort blocked, and Cagliari goalkeeper Sherri made important saves from both Pio and Paz as Napoli camped in the attacking half.',
      'The breakthrough finally arrived in the 37th minute. Paz found the opening and slipped a superb ball through for Maximilian Beier, who finished to put Napoli 1–0 up and finally get himself back on the scoresheet.',
      'Peacock then produced a major save just before the interval, one of multiple key stops on the night. But Cagliari still found an unlikely equaliser from a corner moments before halftime, squeezing the ball in from a near-impossible angle to make it 1–1.',
      'Napoli stayed on top after the break. Beier had another big chance blocked and cleared, but the tie was still level when the bench changed the game. Alphonso Davies replaced Noa Lang and immediately flashed a chance just wide before Napoli forced another save through Paz.',
      'Federico Chiesa then replaced Anton Stach as Napoli went more aggressive on the right. The pressure finally broke Cagliari in the 82nd minute when Davies found space just inside the box and buried the finish for 2–1.',
      'The final minutes were managed without panic. Chiesa drew a hard foul on the counter, Napoli killed the remaining time, and the whistle confirmed passage through to the next round.',
      'The rotation delivered exactly what Napoli needed: Beier back among the goals, Paz creating the opener, Peacock making two or three key saves, and Davies providing the decisive quality from the bench.',
      'Napoli now return to Serie A against Empoli on Dec 19. The league table remains tight after 15 matches: Inter lead on 39 points, Milan have 36, Napoli 35, Roma 31, with Lazio and Juventus on 28.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  if (Array.isArray(D.results)) {
    const row = ['Napoli','Cagliari','Coppa Italia',2,1,'W',"Beier 37'; Davies 82'",'Paz assist on opener; Peacock multiple key saves; Davies winner off the bench'];
    const existing = D.results.findIndex(r => r[0] === 'Napoli' && r[1] === 'Cagliari' && r[2] === 'Coppa Italia');
    if (existing >= 0) D.results[existing] = row; else D.results.push(row);
  }

  if (Array.isArray(D.upcoming)) D.upcoming = D.upcoming.filter(row => !(row[0] === 'Cagliari' && row[1] === 'Coppa Italia'));

  D.hero = {articleId:article.id,strap:'DAVIES OFF THE BENCH. CUP TIE WON.'};
  D.ticker = [
    'FT · NAPOLI 2–1 CAGLIARI · COPPA ITALIA',
    "BEIER 37' · DAVIES 82'",
    'PEACOCK · MULTIPLE KEY SAVES',
    'NAPOLI ADVANCE',
    'NEXT · EMPOLI · DEC 19 · SERIE A'
  ];

  if (Array.isArray(D.stats)) {
    D.stats = D.stats.map(row => {
      if (row[0] === 'Maximilian Beier') return [row[0], Number(row[1] || 0) + 1, row[2], 'Back on the scoresheet with the 37th-minute opener against Cagliari in the Coppa Italia.'];
      if (row[0] === 'Alphonso Davies') return [row[0], Number(row[1] || 0) + 1, row[2], 'Scored the 82nd-minute Coppa Italia winner against Cagliari after coming off the bench.'];
      if (row[0] === 'Nico Paz') return [row[0], row[1], Number(row[2] || 0) + 1, 'Created Beier’s 37th-minute opener against Cagliari and repeatedly tested the goalkeeper.'];
      if (row[0] === 'Peacock') return [row[0], row[1], row[2], 'Made two or three key saves in the 2–1 Coppa Italia win over Cagliari.'];
      return row;
    });
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => !['Cup Survival','Title Race'].includes(item[0]));
    D.whispers.unshift(
      ['Cup Survival','Beier opened the scoring, Peacock made multiple key saves and Davies came off the bench to win the Cagliari tie 2–1 in the 82nd minute.'],
      ['Title Race','After 15 league matches: Inter 39, Milan 36, Napoli 35, Roma 31, Lazio 28 and Juventus 28. Empoli are next in Serie A on Dec 19.']
    );
  }

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => item.articleId !== article.id);
    D.media.unshift({type:'image',title:'Davies Wins the Coppa Tie',src:'assets/davies-napoli.jpg',tag:'FT · Napoli 2–1 Cagliari',objectPosition:'50% 24%',objectFit:'cover',articleId:article.id});
  }
})();