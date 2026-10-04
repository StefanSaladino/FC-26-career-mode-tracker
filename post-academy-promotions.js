(()=>{
  const D=window.NAPOLI_DATA;if(!D)return;
  const story={
    id:'academy-triple-promotion-january-2028',category:'News',label:'Academy',date:'January 2028',tone:'feature',
    headline:'Three Get the Call: Napoli Promote Burnett, Ricci and Brun',
    dek:'With the January window entering its final seven days, Napoli have moved three 18-year-olds into the senior ranks as the club turns academy progress into the next stage of development.',
    body:[
      'Napoli have promoted goalkeeper O. Burnett, centre-back G. Ricci and right midfielder C. Brun from the youth academy, giving three 18-year-old prospects their first place in the senior setup during the closing week of the January transfer window.',
      'The promotions are developmental rather than a sudden reshaping of the first team. Burnett arrives at 64 OVR with an 81–87 potential range, Ricci at 65 OVR with a 75–81 range, and Brun at 61 OVR with a 79–85 range. Napoli’s next task is to find the right senior minutes for each player, with loan moves a natural possibility while the window remains open.',
      'Burnett joins an unusually deep young goalkeeping pipeline already containing 19-year-old Peacock and 17-year-old Lawton, who is developing on loan. His promotion gives Napoli another prospect to manage carefully behind established starter Alex Meret.',
      'Ricci is the most senior-ready of the three by current rating, although Napoli’s elite centre-back depth means his route to immediate first-team football is narrow. A productive loan could establish whether he develops into a future squad option or a valuable academy-produced asset.',
      'Brun represents the higher-upside attacking bet. The 18-year-old right midfielder is still some distance from Napoli’s senior attacking level, but promotion allows the club to test his development against professional opposition rather than leaving him exclusively in academy football.',
      'The decision also underlines a broader shift in Napoli’s project. The senior side is fighting at the top of Serie A while a second layer of talent is emerging beneath it: players already developing on loan, three new graduates entering the senior system, and high-ceiling academy prospects such as E. Rossetti, S. Vitale, Y. Tran and F. Freitas still being allowed to develop without being rushed.',
      'For Burnett, Ricci and Brun, promotion is not the finish line. It is the point at which academy promise becomes a professional development decision.'
    ],
    commentHeat:4,reaction:'story',visitorClub:'NONE',
    comments:[
      ['PrimaveraWatch','This is exactly what I want to see. Do not just collect academy prospects — give them a pathway.'],
      ['PartenopeiProfessor','The important part now is minutes. Promotion followed by six months on the bench would defeat the purpose.'],
      ['PortieriUnion','Burnett, Peacock and Lawton all developing at once. The goalkeeper succession battle could get very interesting.'],
      ['NapoliSinceBirth','Three academy kids getting the call while we are fighting for the title. That says a lot about how healthy the project is.'],
      ['LoanDepartment','Find Brun a club that will actually play him every week and let us see what we have.'],
      ['CurvaCalculator','Ricci at 65 is already useful as an asset even if the first-team CB room is basically impossible to crack right now.'],
      ['VivaioAzzurro','Burnett, Ricci e Brun promossi. Il vivaio deve avere una strada vera verso il calcio dei grandi.'],
      ['NoTacticsJustVibes','Imagine getting the call and then looking at Bastoni and Buongiorno ahead of you. Welcome to senior football, Ricci 😭'],
      ['FutureNapoli','Rossetti and the other high-potential kids staying in the academy is just as important. Promote when it makes sense, not because we can.']
    ]
  };
  D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
  D.hero={...(D.hero||{}),articleId:story.id,strap:'ACADEMY · THREE GET THE CALL'};
  D.ticker=['ACADEMY · BURNETT, RICCI + BRUN PROMOTED',...(D.ticker||[]).filter(x=>!String(x).includes('BURNETT'))].slice(0,6);
  if(Array.isArray(D.whispers)){
    D.whispers=D.whispers.filter(x=>x[0]!=='Three Get the Call');
    D.whispers.unshift(['Three Get the Call','Burnett, Ricci and Brun have graduated from the academy with seven days left in the January window. Their next development step is now a senior-football decision.']);
  }
})();