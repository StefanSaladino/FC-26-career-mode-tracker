(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const w=d.worldCup2030||(d.worldCup2030={});
const match={
 competition:'FIFA World Cup 2030',round:'Round of 16',home:'Italy',away:'Türkiye',homeGoals:2,awayGoals:1,
 status:'FT',date:null,verified:true,winner:'Italy',advancedTo:'Quarterfinal',
 halfTime:{home:1,away:1},
 goals:[
  {team:'Türkiye',player:'Arda Güler',minute:12},
  {team:'Italy',player:'Moise Kean',minute:38,assist:'Francesco Pio Esposito'},
  {team:'Italy',player:'Moise Kean',minute:52,assist:'Nicolò Barella'}
 ],
 verifiedLateEvents:[
  {minute:90,type:'save',player:'Gianluigi Donnarumma',detail:'full-stretch stop'},
  {minute:null,type:'corner',team:'Türkiye',detail:'late corner after Donnarumma save'},
  {minute:null,type:'goal_line_clearance',player:'Manuel Locatelli',detail:'cleared header aimed toward goal corner immediately before full-time whistle'}
 ],
 managerConfirmed:true
};
w.knockoutMatches=(w.knockoutMatches||[]).filter(x=>!(x.home==='Italy'&&(x.away==='Türkiye'||x.away==='Turkey')));
w.knockoutMatches.push(match);
w.lastConfirmedRound='Round of 16';
w.knockoutQualification={
 qualified:true,firstPlace:true,roundOf32Opponent:'Romania',roundOf32Winner:'Italy',
 reachedRoundOf16:true,roundOf16Opponent:'Türkiye',roundOf16Winner:'Italy',
 reachedQuarterfinals:true,quarterfinalOpponent:'England',opponent:'England',
 fixtureDate:null,fixtureTime:null
};
w.nextItalyFixtures=[{competition:'FIFA World Cup',round:'Quarterfinal',home:'Italy',away:'England',date:null,kickoff:null,status:'scheduled',verified:true}];
w.italyWorldCupMatchesCompleted=5;w.italyWorldCupMatchesConcededFirst=5;
w.italyWorldCupRecord={played:5,won:2,drawn:3,lost:0,goalsFor:11,goalsAgainst:9,goalDifference:2,romaniaAdvancedOnPenalties:true};
w.italyKnockoutContributions={
 'Sandro Tonali':{goals:1,assists:0,source:'Romania 1–1 Italy · 42′'},
 'Nicolò Barella':{goals:0,assists:2,source:'Assists Tonali vs Romania and Kean vs Türkiye'},
 'Moise Kean':{goals:2,assists:0,source:'Two goals vs Türkiye (38′ and 52′)'},
 'Francesco Pio Esposito':{goals:0,assists:1,source:'Assist Kean 38′ vs Türkiye'}
};
w.italyTournamentContributions={
 'Moise Kean':{goals:7,assists:2},
 'Francesco Pio Esposito':{goals:3,assists:5},
 'Nicolò Barella':{goals:0,assists:3},
 'Sandro Tonali':{goals:1,assists:0},
 'Alessandro Bastoni':{goals:0,assists:1}
};
// Italian men's single-World-Cup goals record; not the all-time multi-tournament Italian goals record.
w.italySingleTournamentGoalsRecord={
 player:'Moise Kean',goals:7,worldCup:2030,through:'Round of 16 vs Türkiye',
 priorJointRecord:[{player:'Paolo Rossi',year:1982,goals:6},{player:'Salvatore Schillaci',year:1990,goals:6}],
 globalSingleTournamentRecord:{player:'Just Fontaine',country:'France',year:1958,goals:13},
 englandQuarterfinalStillPending:true
};
if(Array.isArray(d.results)&&!d.results.some(r=>r[0]==='Italy'&&(r[1]==='Türkiye'||r[1]==='Turkey')&&r[2]==='World Cup'&&Number(r[3])===2&&Number(r[4])===1)){
 d.results.push(['Italy','Türkiye','World Cup',2,1,'W',"Kean 38' (Pio), 52' (Barella)","Güler 12' · Donnarumma full-stretch save 90' · Locatelli late goal-line clearance"]);
}
d.latestInternationalResult=['Italy','2–1','Türkiye','World Cup Round of 16 · Kean brace · Donnarumma save · Locatelli line clearance · England QF'];
// World Cup contributions are NATIONAL TEAM ONLY. No Napoli club tables, club career totals, or seasons are updated.
// Exact round-of-16 date, kickoff, Türkiye header taker and later clearance minute are not supplied.
})();
