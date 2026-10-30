(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});const w=d.worldCup2030||(d.worldCup2030={});
const match={
 competition:'FIFA World Cup 2030',round:'Semifinal',home:'Italy',away:'France',
 homeGoals:1,awayGoals:2,halfTime:{home:1,away:0},scoreAt90:{home:1,away:1},
 status:'AET',extraTime:true,winner:'France',decidedBy:'extra_time',
 date:null,verified:true,managerConfirmed:true,
 goals:[
 {team:'Italy',player:'Francesco Pio Esposito',minute:25,assist:'Moise Kean'},
 {team:'France',player:'Kylian Mbappé',minute:67},
 {team:'France',player:'Etikite',minute:120,stoppage:2,minuteDisplay:'120+2'}
 ],
 goalkeeper:'Gianluigi Donnarumma',
 goalkeeperInterventions:[{minute:89,kind:'miracle save preserving 1–1'}],
 addedTimeNote:{period:'second extra-time half',boardMinimumMinutes:1,winningGoalMinute:'120+2',detail:'Manager reports one minute indicated; extended play is not by itself proof of an officiating error.'},
 tournamentScope:'Italy national team only; never update Napoli club statistics.'
};
w.knockoutMatches=(w.knockoutMatches||[]).filter(m=>!(m.home==='Italy'&&m.away==='France'&&m.round==='Semifinal'));
w.knockoutMatches.push(match);
w.lastConfirmedRound='Semifinal';
w.knockoutQualification={...(w.knockoutQualification||{}),qualified:true,firstPlace:true,
 reachedQuarterfinals:true,quarterfinalOpponent:'England',quarterfinalWinner:'Italy',
 reachedSemifinals:true,semifinalOpponent:'France',semifinalWinner:'France',
 reachedFinal:false,reachedThirdPlacePlayoff:true,
 nextRound:'Third-place playoff',opponent:'Denmark',fixtureDate:null,fixtureTime:null};
w.nextItalyFixtures=[{competition:'FIFA World Cup 2030',round:'Third-place playoff',home:'Italy',away:'Denmark',date:null,kickoff:null,status:'scheduled',verified:true}];
w.worldCupFinal={competition:'FIFA World Cup 2030',round:'Final',home:'France',away:'Belgium',date:null,kickoff:null,status:'scheduled',verified:true};
w.italyWorldCupMatchesCompleted=7;
w.italyWorldCupMatchesConcededFirst=5;
w.italyWorldCupRecord={played:7,won:2,drawn:4,lost:1,goalsFor:14,goalsAgainst:13,goalDifference:1,
 romaniaAdvancedOnPenalties:true,englandAdvancedOnPenalties:true};
w.italyKnockoutContributions={...(w.italyKnockoutContributions||{}),
 'Moise Kean':{goals:2,assists:1,source:'Türkiye brace; France Pio 25′ assist'},
 'Francesco Pio Esposito':{goals:1,assists:2,source:'Türkiye Kean 38′ assist; England Locatelli 50′ assist; France goal 25′'}
};
w.italyTournamentContributions={...(w.italyTournamentContributions||{}),
 'Moise Kean':{goals:7,assists:3},
 'Francesco Pio Esposito':{goals:4,assists:6}};
w.italySingleTournamentGoalsRecord={...(w.italySingleTournamentGoalsRecord||{}),
 player:'Moise Kean',goals:7,worldCup:2030,through:'Semifinal vs France',englandQuarterfinalStillPending:false};
if(Array.isArray(d.results)&&!d.results.some(r=>r[0]==='Italy'&&r[1]==='France'&&r[2]==='World Cup'&&Number(r[3])===1&&Number(r[4])===2)){
 d.results.push(['Italy','France','World Cup',1,2,'L (AET)',"Pio Esposito 25' (Kean)","Mbappé 67'; Etikite 120+2' · Donnarumma save 89'"])}
d.latestInternationalResult=['Italy','1–2','France','FIFA World Cup 2030 · Semifinal · After extra time · Denmark third-place playoff next'];
})();
