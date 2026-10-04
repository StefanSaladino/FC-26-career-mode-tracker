(()=>{
  const D=window.NAPOLI_DATA;if(!D)return;
  const story={
    id:'bologna-away-serie-a-2028',category:'Match Report',label:'Serie A',date:'Bologna 0–1 Napoli · FT',tone:'win',
    headline:'Beier Off the Bench to Deliver Napoli in Bologna',
    dek:'A rotated Napoli side grinds out a 1–0 league win as substitute Maximilian Beier breaks the deadlock in the 53rd minute.',
    body:[
      'Napoli left Bologna with three points after a tight 1–0 victory, finding the decisive moment through the bench rather than the starting XI.',
      'With the schedule beginning to tighten, Napoli rotated the side but kept enough senior quality on the pitch to stay in the contest. The match remained goalless through halftime before Maximilian Beier was introduced as a substitute.',
      'The change paid off in the 53rd minute. Beier broke the deadlock to put Napoli 1–0 ahead, providing the only goal of the match and another important contribution in a season where Napoli’s attacking depth continues to matter.',
      'There was no second goal, but there did not need to be. Napoli protected the advantage through full time and took a valuable Serie A win from a match that demanded patience rather than spectacle.',
      'The result is especially useful with February bringing Coppa Italia, league fixtures and the looming Champions League knockout playoff against Inter. Napoli were able to rotate, win, and move forward without turning the afternoon into a draining chase for points.',
      'Beier’s intervention was the difference: summoned from the bench, on the scoresheet, and responsible for all three points.'
    ],
    commentHeat:6,reaction:'win',visitorClub:'Bologna',
    comments:[
      ['PartenopeiProfessor','Rotated team, away match, clean sheet, three points. That is exactly the kind of win title teams need.'],
      ['BeierBeliever','Comes off the bench and just solves the problem. Massive contribution.'],
      ['AzzurroSempre','Non bella, ma pesantissima. Tre punti e si va avanti.'],
      ['CurvaCalculator','The February schedule is brutal. Winning while rotating is almost as important as the performance itself.'],
      ['NapoliSinceBirth','One-nil away and nobody needs to apologize for it. Take the points.'],
      ['NoTacticsJustVibes','Beier entered the chat, scored, refused to elaborate 😭'],
      ['ScudettoWatch','These are the games you remember if you are holding the trophy in May.']
    ]
  };
  D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
  if(Array.isArray(D.results)){
    D.results=D.results.filter(r=>!(r[2]==='Serie A'&&((r[0]==='Napoli'&&String(r[1]).includes('Bologna'))||(String(r[0]).includes('Bologna')&&r[1]==='Napoli'))));
    D.results.push(['Napoli','Bologna FC','Serie A',1,0,'W',"Maximilian Beier 53'",'Beier scored as a substitute · clean sheet']);
  }
  D.upcoming=[
    ['Sassuolo','Coppa Italia','Feb 2'],['Fiorentina','Serie A','Feb 6'],['Udinese','Serie A','Feb 12'],['Inter','Champions League · Knockout Playoff · 1st leg','Feb 15 · Home'],['Lecce','Serie A','Feb 20'],['Inter','Champions League · Knockout Playoff · 2nd leg','Feb 23 · Away'],['Inter','Serie A','Feb 27 · Away']
  ];
  D.hero={...(D.hero||{}),articleId:story.id,strap:'SERIE A · BEIER MAKES THE DIFFERENCE'};
  D.ticker=['FT · BOLOGNA 0–1 NAPOLI',"BEIER 53' · WINNER OFF THE BENCH",'NEXT · SASSUOLO · COPPA ITALIA','UCL PLAYOFF · INTER AWAIT OVER TWO LEGS',...(D.ticker||[]).filter(x=>!String(x).includes('BODØ')&&!String(x).includes('BOLOGNA'))].slice(0,8);
})();