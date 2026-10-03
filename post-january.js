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
    ],
    commentHeat:3,
    reaction:'story',
    visitorClub:'NONE',
    comments:[
      ['ScudettoOrBust','Manager of the Month in December, Supercoppa final in January. Keep the standards exactly where they are.'],
      ['NapoliSinceBirth','Deserved. December felt like the month this team stopped looking like a project and started looking like a contender.'],
      ['RotationPolice','The award is nice. Now the real test is managing Inter, Milan, Empoli, Monza and Juventus without running the squad into the ground.'],
      ['SaladinoOutNow','I would like the record to show that I have temporarily suspended my agenda. Congratulations, mister.'],
      ['CurvaCalculator','Manager of the Month and immediately handed this January schedule. Football has a sense of humour.'],
      ['PartenopeiProfessor','The biggest improvement has been control. Napoli are finding different ways to win instead of needing the same game every week.'],
      ['EuropeanNights','Recognition earned in December. Now go turn it into silverware against Inter.'],
      ['SquadDepthDept','This is where the full squad has to justify itself. The manager got the award; January is going to test every rotation decision.'],
      ['NoTacticsJustVibes','Frame the award, then hide it until after the Supercoppa final. We have business to do.'],
      ['BlueSideNaples','Whatever happens next, December was excellent. The team looks confident and the manager deserves credit for it.'],
      ['CalendarVictim','Imagine winning Manager of the Month and your prize is this January fixture list.'],
      ['VesuviusPress','The award matters because it reflects a run, not one result. Napoli have built real momentum going into the final.']
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