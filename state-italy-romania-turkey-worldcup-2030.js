(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const w=d.worldCup2030||(d.worldCup2030={});
const romania={
 round:'Round of 32',home:'Italy',away:'Romania',homeGoals:1,awayGoals:1,status:'AET',date:null,verified:true,
 goals:[{team:'Romania',player:'Andrei Rațiu',minute:34},{team:'Italy',player:'Sandro Tonali',minute:42,assist:'Nicolò Barella'}],
 extraTime:true,decidedBy:'penalties',winner:'Italy',penaltyScore:null,
 italyPenaltyOrder:[
  {order:1,player:'Manuel Locatelli',outcome:'goal'},
  {order:2,player:'Francesco Pio Esposito',outcome:'miss',detail:'post'},
  {order:3,player:'Federico Dimarco',outcome:'goal'},
  {order:4,player:'Sebastiano Esposito',outcome:'goal'},
  {order:5,player:'Nicolò Rovella',outcome:'goal',decisive:true}
 ],
 romaniaVerifiedPenalties:[
  {order:1,player:'Cîrjan',outcome:'saved',goalkeeper:'Gianluigi Donnarumma'},
  {order:2,player:'Stoian',outcome:'goal'},
  {order:3,player:'Rădulescu',outcome:'miss',detail:'wide'}
 ],
 unreportedRomaniaPenaltySequence:'Other Romanian attempts not supplied by manager; no final shootout aggregate asserted.'
};
w.knockoutMatches=(w.knockoutMatches||[]).filter(m=>!(m.home==='Italy'&&m.away==='Romania'));w.knockoutMatches.push(romania);
w.lastConfirmedRound='Round of 32';
w.knockoutQualification={qualified:true,firstPlace:true,roundOf32Opponent:'Romania',roundOf32Winner:'Italy',reachedRoundOf16:true,opponent:'Turkey',fixtureDate:null};
w.nextItalyFixtures=[{competition:'FIFA World Cup',round:'Round of 16',home:'Italy',away:'Turkey',date:null,status:'scheduled',verified:true}];
w.italyKnockoutContributions={'Sandro Tonali':{goals:1,assists:0},'Nicolò Barella':{goals:0,assists:1}};
w.italyWorldCupMatchesCompleted=4;w.italyWorldCupMatchesConcededFirst=4;
if(Array.isArray(d.results)&&!d.results.some(r=>r[0]==='Italy'&&r[1]==='Romania'&&r[2]==='World Cup'&&Number(r[3])===1&&Number(r[4])===1))d.results.push(['Italy','Romania','World Cup',1,1,'W (pens)',"Tonali 42' (Barella assist)","Rațiu 34' · 1–1 AET · Italy advance on penalties"]);
d.latestInternationalResult=['Italy','1–1','Romania','World Cup Round of 32 · Italy advance on penalties · Rovella decisive'];
// International knockout contributions separate from June World Cup group totals and all Napoli club statistics.
// Final aggregate penalty score is not inferred; manager has not supplied Romania's entire attempt sequence.
})();
