(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
d.worldCup2030=d.worldCup2030||{};
d.worldCup2030.groupMatches=[
 {date:'2030-06-09',home:'Italy',away:'Tunisia',homeGoals:3,awayGoals:3,status:'FT',verified:true,goals:[
 {team:'Tunisia',player:'Hannibal',minute:7},
 {team:'Tunisia',player:'Hannibal',minute:14},
 {team:'Italy',player:'Francesco Pio Esposito',minute:48,assist:'Alessandro Bastoni',finish:'header'},
 {team:'Italy',player:'Moise Kean',minute:61,assist:'Francesco Pio Esposito'},
 {team:'Italy',player:'Francesco Pio Esposito',minute:78,assist:'Moise Kean'},
 {team:'Tunisia',player:'Hannibal',minute:86}
 ]},
 {date:null,round:1,home:'Japan',away:'Paraguay',result:'draw',score:'unconfirmed',verified:true}
];
d.worldCup2030.groupStandings=[
 {team:'Italy',played:1,won:0,drawn:1,lost:0,points:1,goalDifference:0,goalsFor:3,goalsAgainst:3},
 {team:'Tunisia',played:1,won:0,drawn:1,lost:0,points:1,goalDifference:0,goalsFor:3,goalsAgainst:3},
 {team:'Japan',played:1,won:0,drawn:1,lost:0,points:1,goalDifference:0,goalsFor:null,goalsAgainst:null},
 {team:'Paraguay',played:1,won:0,drawn:1,lost:0,points:1,goalDifference:0,goalsFor:null,goalsAgainst:null}
];
d.worldCup2030.groupRankingVerified=false;
d.worldCup2030.italyContributions={
 'Francesco Pio Esposito':{goals:2,assists:1,source:'Italy 3–3 Tunisia, 9 June'},
 'Moise Kean':{goals:1,assists:1,source:'Italy 3–3 Tunisia, 9 June'},
 'Alessandro Bastoni':{goals:0,assists:1,source:'Italy 3–3 Tunisia, 9 June'}
};
d.worldCup2030.nextItalyFixtures=[['Japan','World Cup · Italy group','15 June 2030'],['Paraguay','World Cup · Italy group','20 June 2030']];
if(Array.isArray(d.results)&&!d.results.some(r=>r[0]==='Italy'&&r[1]==='Tunisia'&&r[2]==='World Cup'&&Number(r[3])===3&&Number(r[4])===3)){
 d.results.push(['Italy','Tunisia','World Cup',3,3,'D','Pio Esposito 48\', 78\'; Kean 61\'','Hannibal 7\', 14\', 86\'; Bastoni, Pio, Kean assists · 9 June 2030'])
}
d.latestInternationalResult=['Italy','3–3','Tunisia','World Cup group · 9 June 2030'];
// Deliberately leave Napoli club statistics, club results and career totals untouched.
})();