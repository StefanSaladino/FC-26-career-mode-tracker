(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const w=d.worldCup2030||(d.worldCup2030={});
const match={
 competition:'FIFA World Cup 2030',round:'Quarterfinal',home:'Italy',away:'England',
 homeGoals:2,awayGoals:2,halfTime:{home:0,away:0},status:'AET',extraTime:true,
 winner:'Italy',decidedBy:'penalties',penaltyScore:{italy:4,england:3},reached:'Semifinal',
 date:null,verified:true,managerConfirmed:true,
 goals:[
  {team:'Italy',player:'Manuel Locatelli',minute:50,assist:'Francesco Pio Esposito',detail:'beat two defenders, shot to far side'},
  {team:'England',player:'Anthony Gordon',minute:77},
  {team:'England',player:'Jude Bellingham',minute:104,detail:'converted rebound from his own shot'},
  {team:'Italy',player:'Mateo Retegui',minute:120,stoppage:1,minuteDisplay:'120+1',detail:'toe touch of loose ball after blocked shot; Trafford had reacted to first shot'}
 ],
 goalkeeper:'Gianluigi Donnarumma',
 goalkeeperInterventions:[
  {period:'second-half stoppage time',count:2,kind:'major saves',exactMinutes:null},
  {minute:116,count:1,kind:'miracle save'},
  {period:'shootout',attempt:5,player:'Declan Rice',kind:'penalty saved',detail:'Rice aimed down centre, Donnarumma knocked away'}
 ],
 shootout:{
  italy:[
   {order:1,player:'Mateo Retegui',outcome:'goal'},
   {order:2,player:'Manuel Locatelli',outcome:'goal'},
   {order:3,player:'Francesco Pio Esposito',outcome:'goal',detail:'bottom corner; Trafford dived correct way'},
   {order:4,player:'Federico Dimarco',outcome:'goal'}
  ],
  england:[
   {order:1,player:'Bukayo Saka',outcome:'miss',detail:'post'},
   {order:2,player:'Anthony Gordon',outcome:'goal'},
   {order:3,player:'Jude Bellingham',outcome:'goal'},
   {order:4,player:'Liam Delap',outcome:'goal'},
   {order:5,player:'Declan Rice',outcome:'saved',goalkeeper:'Gianluigi Donnarumma',detail:'down the middle'}
  ],
  unusedItalyFifth:{player:'Nicolò Rovella',outcome:'not_taken'}
 },
 stats:{
  italy:{xG:1.4,shots:7,shotsOnTarget:5},
  england:{xG:5.2,shots:15,shotsOnTarget:12},
  source:'Match stats reported by manager after England quarterfinal'
 },
 tournamentScope:'Italy national team only; shootout conversions do not add to goals for or player goals.'
};
w.knockoutMatches=(w.knockoutMatches||[]).filter(m=>!(m.home==='Italy'&&m.away==='England'&&m.round==='Quarterfinal'));
w.knockoutMatches.push(match);
w.lastConfirmedRound='Quarterfinal';
w.knockoutQualification={...(w.knockoutQualification||{}),
 qualified:true,firstPlace:true,reachedQuarterfinals:true,quarterfinalOpponent:'England',quarterfinalWinner:'Italy',
 reachedSemifinals:true,semifinalOpponent:'France',semifinalFixtureDate:null,semifinalFixtureTime:null,
 nextRound:'Semifinal',opponent:'France',fixtureDate:null,fixtureTime:null};
w.nextItalyFixtures=[{competition:'FIFA World Cup',round:'Semifinal',home:'Italy',away:'France',date:null,kickoff:null,status:'scheduled',verified:true}];
w.italyWorldCupMatchesCompleted=6;
w.italyWorldCupMatchesConcededFirst=5;
w.italyWorldCupRecord={played:6,won:2,drawn:4,lost:0,goalsFor:13,goalsAgainst:11,goalDifference:2,
 romaniaAdvancedOnPenalties:true,englandAdvancedOnPenalties:true};
w.italyKnockoutContributions={
 'Sandro Tonali':{goals:1,assists:0,source:'Romania 42′'},
 'Nicolò Barella':{goals:0,assists:2,source:'Romania and Türkiye'},
 'Moise Kean':{goals:2,assists:0,source:'Türkiye 38′ and 52′'},
 'Francesco Pio Esposito':{goals:0,assists:2,source:'Türkiye: Kean 38′; England: Locatelli 50′'},
 'Manuel Locatelli':{goals:1,assists:0,source:'England 50′'},
 'Mateo Retegui':{goals:1,assists:0,source:'England 120+1′'}
};
w.italyTournamentContributions={
 ...(w.italyTournamentContributions||{}),
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
 d.results.push(['Italy','England','World Cup',2,2,'W (pens)',"Locatelli 50' (Pio); Retegui 120+1'","Gordon 77'; Bellingham 104' · 2–2 AET · Italy 4–3 pens · Donnarumma saves Rice"]);
}
d.latestInternationalResult=['Italy','2–2','England','World Cup Quarterfinal · 2–2 AET · Italy win 4–3 on penalties · Semifinalists'];
// Keep Napoli club appearances and goal / assist totals completely unchanged. France is confirmed as semifinal opponent; match date, time and venue remain unconfirmed.
})();
