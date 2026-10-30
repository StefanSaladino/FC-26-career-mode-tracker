(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const w=d.worldCup2030||(d.worldCup2030={});
const england={
 competition:'FIFA World Cup 2030',round:'Quarterfinal',home:'Italy',away:'England',
 homeGoals:2,awayGoals:2,halfTime:{home:0,away:0},fullTime90:{home:1,away:1},
 status:'AET',date:null,verified:true,decidedBy:'penalties',winner:'Italy',
 penaltyScore:{Italy:4,England:3},advancedTo:'Semifinal',semifinalOpponent:'France',
 goals:[
  {team:'Italy',player:'Manuel Locatelli',minute:50,assist:'Francesco Pio Esposito',detail:'Took pass outside the box, beat two defenders, finished far side'},
  {team:'England',player:'Anthony Gordon',minute:77},
  {team:'England',player:'Jude Bellingham',minute:104,detail:'Buried rebound of own shot in extra time'},
  {team:'Italy',player:'Mateo Retegui',minute:'120+1',detail:'Toe touch on loose ball after blocked shot; Trafford had reacted to initial attempt and could not recover'}
 ],
 goalkeeper:'Gianluigi Donnarumma',
 goalkeeperHighlights:[
  {period:'Second-half stoppage time',type:'save',count:2,detail:'Two major saves prevented England taking the lead before extra time'},
  {minute:116,type:'save',detail:'Miracle save during extra time when Italy trailed 1–2'},
  {type:'penalty_save',taker:'Declan Rice',detail:'Rice attempted down the middle; Donnarumma knocked the fifth England penalty away to win shootout'}
 ],
 matchStats:{
  Italy:{xG:1.4,shots:7,shotsOnTarget:5},
  England:{xG:5.2,shots:15,shotsOnTarget:12},
  source:'Manager-confirmed post-match statistics'
 },
 italianPenaltyOrder:[
  {order:1,player:'Mateo Retegui',outcome:'goal'},
  {order:2,player:'Manuel Locatelli',outcome:'goal'},
  {order:3,player:'Francesco Pio Esposito',outcome:'goal',detail:'Bottom corner; Trafford went right way but could not reach'},
  {order:4,player:'Federico Dimarco',outcome:'goal'}
 ],
 englandPenaltyOrder:[
  {order:1,player:'Bukayo Saka',outcome:'miss',detail:'Hit post'},
  {order:2,player:'Anthony Gordon',outcome:'goal'},
  {order:3,player:'Jude Bellingham',outcome:'goal'},
  {order:4,player:'Liam Delap',outcome:'goal'},
  {order:5,player:'Declan Rice',outcome:'saved',goalkeeper:'Gianluigi Donnarumma',detail:'Down the middle'}
 ],
 italyUnusedFifthTaker:'Nicolò Rovella',
 managerAssessment:'Italy were outplayed by England; Donnarumma saved the campaign. Celebrate now, but defence must be tougher in semifinal.',
 extraTime:true,managerConfirmed:true
};
w.knockoutMatches=(w.knockoutMatches||[]).filter(m=>!(m.home==='Italy'&&m.away==='England'));
w.knockoutMatches.push(england);
w.lastConfirmedRound='Quarterfinal';
w.knockoutQualification={
 qualified:true,firstPlace:true,roundOf32Opponent:'Romania',roundOf32Winner:'Italy',
 reachedRoundOf16:true,roundOf16Opponent:'Türkiye',roundOf16Winner:'Italy',
 reachedQuarterfinals:true,quarterfinalOpponent:'England',quarterfinalWinner:'Italy',
 reachedSemifinals:true,semifinalOpponent:'France',opponent:'France',
 fixtureDate:null,fixtureTime:null
};
w.nextItalyFixtures=[{competition:'FIFA World Cup',round:'Semifinal',home:'Italy',away:'France',date:null,kickoff:null,status:'scheduled',verified:true}];
w.italyWorldCupMatchesCompleted=6;w.italyWorldCupMatchesConcededFirst=5;
w.italyWorldCupRecord={played:6,won:2,drawn:4,lost:0,goalsFor:13,goalsAgainst:11,goalDifference:2,romaniaAdvancedOnPenalties:true,englandAdvancedOnPenalties:true};
w.italyKnockoutContributions={
 'Sandro Tonali':{goals:1,assists:0,source:'Romania 42′'},
 'Nicolò Barella':{goals:0,assists:2,source:'Romania and Türkiye'},
 'Moise Kean':{goals:2,assists:0,source:'Two goals vs Türkiye'},
 'Francesco Pio Esposito':{goals:0,assists:2,source:'Türkiye 38′ and England 50′ assists'},
 'Manuel Locatelli':{goals:1,assists:0,source:'England 50′'},
 'Mateo Retegui':{goals:1,assists:0,source:'England 120+1′'}
};
w.italyTournamentContributions={
 'Moise Kean':{goals:7,assists:2},
 'Francesco Pio Esposito':{goals:3,assists:6},
 'Nicolò Barella':{goals:0,assists:3},
 'Sandro Tonali':{goals:1,assists:0},
 'Alessandro Bastoni':{goals:0,assists:1},
 'Manuel Locatelli':{goals:1,assists:0},
 'Mateo Retegui':{goals:1,assists:0}
};
w.italySingleTournamentGoalsRecord={...(w.italySingleTournamentGoalsRecord||{}),player:'Moise Kean',goals:7,worldCup:2030,through:'Quarterfinal vs England',englandQuarterfinalStillPending:false};
if(Array.isArray(d.results)&&!d.results.some(r=>r[0]==='Italy'&&r[1]==='England'&&r[2]==='World Cup'&&Number(r[3])===2&&Number(r[4])===2)){
 d.results.push(['Italy','England','World Cup',2,2,'W (pens 4–3)',"Locatelli 50' (Pio), Retegui 120+1'","Gordon 77' · Bellingham 104' · 2–2 AET · Italy win penalties 4–3 · Donnarumma saves Rice"]);
}
d.latestInternationalResult=['Italy','2–2','England','World Cup Quarterfinal · Italy win 4–3 on penalties · France semifinal next'];
// Italy match and shootout statistics ONLY; no Napoli club competitions, club player totals or club career statistics altered.
// England and France fixture dates, the venue, full lineups and France's previous results are not supplied.
})();
