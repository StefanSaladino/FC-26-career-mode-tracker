(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const w=d.worldCup2030||(d.worldCup2030={});
const japan={date:'2030-06-15',home:'Japan',away:'Italy',homeGoals:3,awayGoals:3,status:'FT',verified:true,replayedAfterGlitch:true,goals:[
 {team:'Japan',player:'Takefusa Kubo',minute:5},
 {team:'Italy',player:'Moise Kean',minute:26,assist:'Francesco Pio Esposito'},
 {team:'Italy',player:'Francesco Pio Esposito',minute:33,assist:'Moise Kean'},
 {team:'Japan',player:'Shogai',minute:45},
 {team:'Italy',player:'Moise Kean',minute:52,assist:'Nicolo Barella'},
 {team:'Japan',player:'Riccardo Calafiori',minute:66,ownGoal:true}
]};
const paraguay={date:'2030-06-20',home:'Italy',away:'Paraguay',homeGoals:2,awayGoals:1,status:'FT',verified:true,goals:[
 {team:'Paraguay',player:'Aguayo',minute:43,penalty:true},
 {team:'Italy',player:'Moise Kean',minute:66,assist:'Francesco Pio Esposito'},
 {team:'Italy',player:'Moise Kean',minute:70,assist:'Francesco Pio Esposito'}
],managerObservation:'Paraguay did not touch the ball for the final twenty minutes.',managerHalftimeAddressConfirmed:true};
w.groupMatches=(w.groupMatches||[]).filter(m=>!(m.home==='Japan'&&m.away==='Italy')&&!(m.home==='Italy'&&m.away==='Paraguay')&&!(m.home==='Japan'&&m.away==='Tunisia'&&m.round===3));
w.groupMatches.push(japan,paraguay,{round:3,date:null,home:'Japan',away:'Tunisia',result:'Tunisia victory',winner:'Tunisia',score:'unconfirmed',verified:true});
w.groupStandings=[
 {team:'Italy',played:3,won:1,drawn:2,lost:0,points:5,goalsFor:8,goalsAgainst:7,goalDifference:1,groupWinner:true},
 {team:'Paraguay',played:3,won:1,drawn:1,lost:1,points:4,goalsFor:null,goalsAgainst:null,goalDifference:null},
 {team:'Tunisia',played:3,won:1,drawn:1,lost:1,points:4,goalsFor:null,goalsAgainst:null,goalDifference:null},
 {team:'Japan',played:3,won:0,drawn:2,lost:1,points:2,goalsFor:null,goalsAgainst:null,goalDifference:null}
];
w.groupWinner='Italy';w.groupRankingVerified=false;
w.lastConfirmedRound=3;
w.groupCheckpoints=[
 {after:2,points:{Paraguay:4,Italy:2,Japan:2,Tunisia:1}},
 {after:3,points:{Italy:5,Paraguay:4,Tunisia:4,Japan:2},first:'Italy',japanFinal:'lost to Tunisia',japanTunisiaScore:null}
];
w.italyContributions={
 'Francesco Pio Esposito':{goals:3,assists:4,source:'World Cup group: Tunisia 2G 1A; Japan 1G 1A; Paraguay 0G 2A'},
 'Moise Kean':{goals:5,assists:2,source:'World Cup group: Tunisia 1G 1A; Japan 2G 1A; Paraguay 2G 0A'},
 'Alessandro Bastoni':{goals:0,assists:1,source:'Italy 3–3 Tunisia'},
 'Nicolo Barella':{goals:0,assists:1,source:'Japan 3–3 Italy'}
};
w.nextItalyFixtures=[];
w.knockoutQualification={qualified:true,firstPlace:true,opponent:null,fixtureDate:null};
if(Array.isArray(d.results)){
 if(!d.results.some(r=>r[0]==='Japan'&&r[1]==='Italy'&&r[2]==='World Cup'&&Number(r[3])===3&&Number(r[4])===3))
   d.results.push(['Japan','Italy','World Cup',3,3,'D',"Kubo 5'; Shogai 45'; Calafiori OG 66'","Kean 26', 52'; Pio 33' · 15 June 2030"]);
 if(!d.results.some(r=>r[0]==='Italy'&&r[1]==='Paraguay'&&r[2]==='World Cup'&&Number(r[3])===2&&Number(r[4])===1))
   d.results.push(['Italy','Paraguay','World Cup',2,1,'W',"Kean 66', 70' (Pio assists)","Aguayo pen. 43' · 20 June 2030"]);
}
d.latestInternationalResult=['Italy','2–1','Paraguay','World Cup group · 20 June 2030 · group winners'];
// All contributions above are national-team-only. Napoli club scoring tables are not changed.
// Abandoned glitched Japan game is excluded entirely.
})();