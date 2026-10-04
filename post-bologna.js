(()=>{
  const D=window.NAPOLI_DATA;if(!D)return;
  const story={
    id:'bologna-away-serie-a-2028',category:'Match Report',label:'Serie A',date:'Bologna 0–1 Napoli · FT',tone:'win',
    headline:'Beier Off the Bench to Deliver Napoli in Bologna',
    dek:'A rotated Napoli side grinds out a 1–0 league win through substitute Maximilian Beier — then sees title rival Inter drop points in a 1–1 draw with Como.',
    body:[
      'Napoli left Bologna with three points after a tight 1–0 victory, finding the decisive moment through the bench rather than the starting XI.',
      'With the schedule beginning to tighten, Napoli rotated the side but kept enough senior quality on the pitch to stay in the contest. The match remained goalless through halftime before Maximilian Beier was introduced as a substitute.',
      'The change paid off in the 53rd minute. Beier broke the deadlock to put Napoli 1–0 ahead, providing the only goal of the match and another important contribution in a season where Napoli’s attacking depth continues to matter.',
      'There was no second goal, but there did not need to be. Napoli protected the advantage through full time and took a valuable Serie A win from a match that demanded patience rather than spectacle.',
      'Then came another result of immediate importance to the title race: Inter were held 1–1 by Como. Napoli took all three points in Bologna while their principal Scudetto rival dropped two, increasing the value of an otherwise narrow victory.',
      'That swing arrives with February bringing the rivalry directly onto the pitch. Napoli and Inter are scheduled to meet three times in 13 days — twice in the Champions League knockout playoff and then again in Serie A. Every point banked before that stretch matters.',
      'Beier’s intervention was the difference in Bologna: summoned from the bench, on the scoresheet, and responsible for all three points.'
    ],
    commentHeat:7,reaction:'win',visitorClub:'Bologna',
    comments:[
      ['PartenopeiProfessor','Rotated team, away match, clean sheet, three points — and Inter drop two. That is an excellent league day.'],
      ['BeierBeliever','Comes off the bench and just solves the problem. Massive contribution.'],
      ['AzzurroSempre','Non bella, ma pesantissima. Noi vinciamo e l’Inter pareggia: giornata enorme.'],
      ['CurvaCalculator','The February schedule is brutal. Winning while rotating and seeing Inter draw is exactly what Napoli needed.'],
      ['NapoliSinceBirth','One-nil away and Inter held by Como. Take that all day.'],
      ['NoTacticsJustVibes','Beier entered the chat, scored, refused to elaborate, then Como did us a favour 😭'],
      ['ScudettoWatch','These are the weekends that can quietly decide a title race.']
    ]
  };
  D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
  if(Array.isArray(D.results)){
    D.results=D.results.filter(r=>!(r[2]==='Serie A'&&((r[0]==='Napoli'&&String(r[1]).includes('Bologna'))||(String(r[0]).includes('Bologna')&&r[1]==='Napoli'))));
    D.results.push(['Napoli','Bologna FC','Serie A',1,0,'W',"Maximilian Beier 53'",'Beier scored as a substitute · clean sheet']);
  }
  D.upcoming=[['Sassuolo','Coppa Italia','Feb 2'],['Fiorentina','Serie A','Feb 6'],['Udinese','Serie A','Feb 12'],['Inter','Champions League · Knockout Playoff · 1st leg','Feb 15 · Home'],['Lecce','Serie A','Feb 20'],['Inter','Champions League · Knockout Playoff · 2nd leg','Feb 23 · Away'],['Inter','Serie A','Feb 27 · Away']];
  D.hero={...(D.hero||{}),articleId:story.id,strap:'SERIE A · THREE POINTS, INTER DROP TWO'};
  D.ticker=['FT · BOLOGNA 0–1 NAPOLI',"BEIER 53' · WINNER OFF THE BENCH",'INTER 1–1 COMO · TITLE RIVALS DROP POINTS','NEXT · SASSUOLO · COPPA ITALIA','UCL PLAYOFF · INTER AWAIT OVER TWO LEGS',...(D.ticker||[]).filter(x=>!String(x).includes('BODØ')&&!String(x).includes('BOLOGNA')&&!String(x).includes('INTER 1–1 COMO'))].slice(0,8);
})();