(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const awardStory = {
    id:'saladino-december-manager-month', category:'News', label:'Manager of the Month', date:'December 2027', tone:'feature',
    headline:'Saladino Named Manager of the Month After Napoli’s December Surge',
    dek:'Napoli’s December performances have earned manager Stefan Saladino the Manager of the Month award as the club carries its momentum into a Supercoppa final against Inter.',
    body:[
      'Stefan Saladino has been named Manager of the Month for December after a run of performances that kept Napoli firmly in the title fight and pushed the club into the Supercoppa final.',
      'The award arrives at the start of a punishing January. Napoli’s next match is now the Supercoppa final against Inter on January 3, after the original January 2 league fixture against Monza was moved.',
      'Monza will instead visit on January 12. The revised calendar leaves Napoli facing Inter for silverware, Milan away, Empoli away, Monza at home and Juventus at home in a 13-day stretch before two Champions League away dates later in the month.',
      'The recognition belongs to December. The challenge now is carrying that form through the most congested stretch of the season.'
    ]
  };
  D.articles = [awardStory, ...(D.articles||[]).filter(a=>a.id!==awardStory.id)];
  D.hero = {
    ...(D.hero||{}),
    articleId: awardStory.id,
    strap: 'DECEMBER MANAGER OF THE MONTH · SALADINO'
  };

  D.upcoming = [
    ['Inter','Supercoppa Italiana Final','Jan 3'],
    ['AC Milan','Serie A · Away','Jan 5'],
    ['Empoli','Serie A · Away','Jan 8'],
    ['Monza','Serie A · Home','Jan 12'],
    ['Juventus','Serie A · Home','Jan 15'],
    ['Marseille','Champions League · Away','Jan 18'],
    ['Como','Serie A · Home','Jan 23'],
    ['Bodø/Glimt','Champions League · Away','Jan 26'],
    ['Bologna','Serie A · Away','Jan 29']
  ];

  D.ticker = [
    'SUPERCOPPA FINAL · NAPOLI v INTER · JAN 3',
    'SALADINO · DECEMBER MANAGER OF THE MONTH',
    'JAN 5 · AC MILAN AWAY · SERIE A',
    'MONZA RESCHEDULED · JAN 12'
  ];

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => !['January Gauntlet','Silverware Next','December Recognition'].includes(item[0]));
    D.whispers.unshift(
      ['Silverware Next','Inter await Napoli in the Supercoppa final on Jan 3. One match now stands between Napoli and the first trophy of the project.'],
      ['January Gauntlet','Inter, Milan, Empoli, Monza and Juventus arrive in a 13-day opening stretch before Champions League trips to Marseille and Bodø/Glimt.'],
      ['December Recognition','Saladino enters January as December Manager of the Month after Napoli’s strong run of results.']
    );
  }
})();