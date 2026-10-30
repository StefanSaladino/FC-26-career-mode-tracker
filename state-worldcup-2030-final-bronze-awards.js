(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const w=d.worldCup2030||(d.worldCup2030={});
const bronze={
 competition:'FIFA World Cup 2030',round:'Third-place playoff',home:'Italy',away:'Denmark',
 homeGoals:1,awayGoals:0,status:'FT',winner:'Italy',decidedBy:'regulation',managerConfirmed:true,verified:true,date:null,
 goals:[{team:'Italy',player:'Francesco Pio Esposito',minute:54}],
 goalkeeper:'Gianluigi Donnarumma',
 goalkeeperInterventions:[{minute:22,kind:'penalty saved',opponent:'Denmark',shooter:null}],
 tournamentScope:'Italy international contributions only. Pio goal has no verified assist.'
};
w.knockoutMatches=(w.knockoutMatches||[]).filter(m=>!(m.home==='Italy'&&m.away==='Denmark'&&m.round==='Third-place playoff'));
w.knockoutMatches.push(bronze);
w.thirdPlaceMatch=bronze;
w.worldCupFinal={
 competition:'FIFA World Cup 2030',round:'Final',home:'France',away:'Belgium',
 homeGoals:2,awayGoals:0,status:'FT',winner:'France',verified:true,managerConfirmed:true,date:null,
 goals:[],detail:'Scorers, goal minutes and assists not supplied; do not invent.'};
w.champion='France';w.runnerUp='Belgium';w.thirdPlace='Italy';w.fourthPlace='Denmark';
w.completed=true;w.lastConfirmedRound='Third-place playoff';
w.italyWorldCupMatchesCompleted=8;
w.italyWorldCupMatchesConcededFirst=5;
w.italyWorldCupRecord={
 played:8,won:3,drawn:4,lost:1,goalsFor:15,goalsAgainst:13,goalDifference:2,
 romaniaAdvancedOnPenalties:true,englandAdvancedOnPenalties:true,
 finish:'Third place',medal:'Bronze'
};
w.knockoutQualification={...(w.knockoutQualification||{}),
 reachedSemifinals:true,semifinalOpponent:'France',semifinalWinner:'France',
 reachedFinal:false,reachedThirdPlacePlayoff:true,thirdPlaceOpponent:'Denmark',
 thirdPlaceWinner:'Italy',nextRound:null,opponent:null,
 fixtureDate:null,fixtureTime:null,worldCupCompleted:true};
w.nextItalyFixtures=[];
w.italyKnockoutContributions={...(w.italyKnockoutContributions||{}),
 'Francesco Pio Esposito':{goals:2,assists:2,source:'Türkiye Kean 38′ assist, England Locatelli 50′ assist, France 25′ goal, Denmark 54′ goal'},
 'Moise Kean':{goals:2,assists:1,source:'Türkiye 38′ and 52′ goals; France Pio 25′ assist'}};
w.italyTournamentContributions={...(w.italyTournamentContributions||{}),
 'Francesco Pio Esposito':{goals:5,assists:6},
 'Moise Kean':{goals:7,assists:3}};
w.italySingleTournamentGoalsRecord={...(w.italySingleTournamentGoalsRecord||{}),
 player:'Moise Kean',goals:7,worldCup:2030,through:'Third-place match vs Denmark'};
w.teamOfTournament={
 formation:'4-4-2',source:'Manager-confirmed in-game World Cup 2030 XI',
 forwards:['Mbappé','Moise Kean'],
 midfield:['Gogorza','Nicolò Barella','Roméo Lavia','Désiré Doué'],
 defence:['Riccardo Calafiori','Alessandro Bastoni','Zeno Debast','Michael Kayode'],
 goalkeeper:'Senne Lammens',
 italySelections:['Moise Kean','Nicolò Barella','Riccardo Calafiori','Alessandro Bastoni','Michael Kayode'],
 otherSelectionCountriesNotEstablished:['Gogorza'],
 note:'Donnarumma and Pio Esposito are not among the 11 selected; do not add them or invent awards.'
};
if(Array.isArray(d.results)){
 if(!d.results.some(r=>r[0]==='Italy'&&r[1]==='Denmark'&&r[2]==='World Cup'&&Number(r[3])===1&&Number(r[4])===0))
 d.results.push(['Italy','Denmark','World Cup',1,0,'W',"Pio Esposito 54'","Bronze medal · Donnarumma saves Denmark penalty 22'"]);
 if(!d.results.some(r=>r[0]==='France'&&r[1]==='Belgium'&&r[2]==='World Cup'&&Number(r[3])===2&&Number(r[4])===0))
 d.results.push(['France','Belgium','World Cup',2,0,'W','Not specified','FIFA World Cup 2030 final · France champions']);
}
d.latestInternationalResult=['Italy','1–0','Denmark','FIFA World Cup 2030 · Third-place playoff · Bronze medal · Pio 54′ · Donnarumma penalty save 22′'];
// The Napoli club stats, squad, fixtures and 2029–30 club totals remain unchanged.
})();
