(()=>{
  const D=window.NAPOLI_DATA;if(!D)return;
  const story={
    id:'bodo-away-ucl-2028',category:'Match Report',label:'Champions League',date:'January 2028',tone:'loss',
    headline:'Defeat in Bodø, but Napoli Secure Knockout Playoff Place',
    dek:'Evjen scores twice as Bodø/Glimt beat Napoli 2–1, but the night still ends with confirmation that Napoli have qualified for a place in the Champions League knockout playoffs.',
    body:[
      'Napoli left Bodø with a 2–1 defeat, but also with their European season guaranteed to continue after securing a place in the Champions League knockout playoffs.',
      'Bodø/Glimt struck first in the 15th minute through Evjen. Napoli nearly produced an immediate response three minutes later when Pio Esposito was denied by the goalkeeper.',
      'The equaliser arrived in the 38th minute. Maximilian Beier supplied Pio, who finished to make it 1–1 and continue his run of important contributions for Napoli. Beier then had a chance to turn the match completely before halftime, breaking through on the counter in the 44th minute only to be denied from close range.',
      'Napoli went into the interval level and with reason to believe the match had shifted in their direction, but Evjen struck again in the 57th minute to restore Bodø/Glimt’s lead. Napoli could not find another reply and the match finished 2–1.',
      'The performance and result will frustrate a Napoli side that created enough opportunities to take more from the night. It also follows the difficult defeat in Marseille, leaving questions about Napoli’s recent European form even as their domestic campaign remains strong.',
      'There was, however, one significant piece of good news: Napoli have officially secured a place in the Champions League knockout playoffs. The route through Europe has become harder than the club would have wanted, but it remains open.',
      'For Napoli, that distinction matters. This was a defeat, not an elimination. The next European assignment will carry knockout consequences.'
    ],
    commentHeat:7,reaction:'loss',visitorClub:'Bodø/Glimt',
    comments:[
      ['PartenopeiProfessor','Qualification matters, but we cannot pretend the performance does not matter. Europe has been much less convincing than Serie A.'],
      ['CurvaNordNapoli','At least we are through to the playoff. Reset and be much better when the knockout football starts.'],
      ['PioHive','Another Champions League goal for Pio. He keeps answering every question we ask of him.'],
      ['TacticsAndTaralli','We had chances at 1–1. Beier scores before halftime and this could be a completely different match.'],
      ['AzzurroSempre','Sconfitta brutta, ma siamo ai playoff. In Europa adesso non ci sono più margini per regalare partite.'],
      ['NapoliSinceBirth','Marseille and now Bodø is not the European run we expected. The good news is we still get the chance to fix it.'],
      ['VesuvioVoice','Evjen killed us tonight. Simple as that.'],
      ['NoTacticsJustVibes','Qualified while losing 2–1 in Norway. I will take the ticket and delete the rest of the evening 😭'],
      ['ChampionsLeagueNights','The playoff is secured. Now Napoli have to prove they belong deeper in this competition.']
    ]
  };
  D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
  D.hero={...(D.hero||{}),articleId:story.id,strap:'CHAMPIONS LEAGUE · PLAYOFF PLACE SECURED'};
  D.ticker=['UCL · NAPOLI SECURE KNOCKOUT PLAYOFF PLACE','BODØ/GLIMT 2–1 NAPOLI · EVJEN DOUBLE','PIO SCORES FROM BEIER IN BODØ',...(D.ticker||[]).filter(x=>!String(x).includes('BODØ')&&!String(x).includes('PLAYOFF'))].slice(0,7);
})();