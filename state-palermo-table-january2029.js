/* Manager-verified after Palermo 2-2 on 17 Dec 2028; league standings screenshot at 16 matches; January 2029 calendar screenshot.
Palermo Diakité 29/75, McTominay 60 (Olise), Beier 86 (Stach); Peacock six saves FIRST HALF; Olise and Davies half-time subs; Pio stoppage shot saved.
Standings Napoli 39 Roma 36 Bergamo 32 Juventus 31 Parma 26 Milano 25 through 16.
January 3 Parma H, 6 Palermo H, 10 Fiorentina A, 13 Lazio (Latium crest) H, 16 Real Sociedad UCL A,
21 Sampdoria A, 24 KS Cracovia UCL A (red/white waving flag crest), 27 Juventus H.
Do NOT guess any unreported Bologna Dec 24 or Supercoppa Dec 29 result or Jan results. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
D.palermoDecember2028={
 played:true,fullTime:true,date:'2028-12-17',competition:'Serie A',venue:'Away',opponent:'Palermo',
 score:'Palermo 2–2 Napoli',halftime:'Palermo 1–0 Napoli',
 goals:[{minute:29,team:'Palermo',scorer:'Diakité',assist:null},{minute:60,team:'Napoli',scorer:'Scott McTominay',assist:'Michael Olise'},{minute:75,team:'Palermo',scorer:'Diakité',assist:null,description:'Goal on counterattack'},{minute:86,team:'Napoli',scorer:'Maximilian Beier',assist:'Anton Stach'}],
 startingGoalkeeper:'Peacock',peacockFirstHalfSaves:6,peacockFullMatchSaves:null,
 halftimeSubstitutes:[{player:'Michael Olise',minute:46,playerOut:null},{player:'Alphonso Davies',minute:46,playerOut:null}],
 napoliSecondHalfPerformance:'Napoli considerably improved in second half, several chances created',
 stoppageTimeChance:{player:'Pio Esposito',result:'Palermo goalkeeper made a major save',minute:null},
 fullStartingXIConfirmed:false,palermoBottomOfTable:true,
 notes:'Do not say Olise or Davies started. Six Peacock saves was FIRST HALF only; full game tally unavailable. No specific Peacock goalkeeping error established.'};
const row=['Napoli','Palermo','Serie A',2,2,'D','17 Dec 2028 · Away','PALERMO 2–2 NAPOLI FT · Diakité 29′ & 75′ (counter) · McTominay 60′ (Olise) · Beier 86′ (Stach) · Peacock SIX first-half saves · Olise/Davies half-time subs · Pio stoppage shot saved'];
for(const key of ['results','results2028']){
 D[key]=D[key]||[];const i=D[key].findIndex(x=>x[0]==='Napoli'&&x[1]==='Palermo'&&x[2]==='Serie A'&&String(x[6]).includes('17 Dec 2028'));if(i>=0)D[key][i]=row;else D[key].push(row);
}
D.latestResult=['PAL','2–2','NAP','SERIE A · 17 DEC 2028 · DIAKITÉ 29′,75′ · MCTOMINAY 60′ (OLISE) · BEIER 86′ (STACH)'];
D.seasonState={...(D.seasonState||{}),
 league:{...(D.seasonState?.league||{}),played:16,w:12,d:3,l:1,points:39,gf:31,ga:9,gd:22,remaining:22,status:'2028–29 Serie A · Napoli 39/16 (12W3D1L) after Palermo 2–2, three points clear of Roma 36/16. Current standings confirmed from manager-provided image.'},
 ucl:{...(D.seasonState?.ucl||{}),stage:'League phase',played:6,w:3,d:1,l:2,points:10,gf:9,ga:10,gd:-1,status:'2028–29 UCL 10 points from six games; last confirmed match 0–1 away win at Dortmund, Jan Real Sociedad and Cracovia away dates upcoming.'}
};
const table=[
['Napoli',16,12,3,1,31,9,22,39],
['Roma',16,11,3,2,35,16,19,36],
['Atalanta',16,9,5,2,34,20,14,32],
['Juventus',16,9,4,3,30,18,12,31],
['Parma',16,8,2,6,25,19,6,26],
['AC Milan',16,6,7,3,26,19,7,25]
];
D.serieAStandings={updated:'17 December 2028 · screenshot confirmed all six clubs after 16 matches',verified:true,source:'Manager-provided image of 2028–29 Serie A league table, Napoli 39, Roma 36, Bergamo Calcio 32, Juventus 31, Parma 26, Milano FC 25, all 16 played',
 rows:table,aliases:{Atalanta:'Bergamo Calcio','AC Milan':'Milano FC'}};
D.serieAStandingsSnapshot2028={verified:true,after:'Palermo 2–2 Napoli',playedEach:16,rows:table.map(r=>[...r]),aliases:{Atalanta:'Bergamo Calcio','AC Milan':'Milano FC'}};
D.titleRaceSnapshot2028={confirmed:true,date:'17 December 2028 (all top six have 16 played)',napolirank:1,napolipoints:39,romarank:2,romapoints:36,atarank:3,atapoints:32,juverank:4,juvepoints:31,parmrank:5,parmapoints:26,acmilanrank:6,acmilanpoints:25,table,confirmedRivalCurrent:true,pointsGapToRoma:3,
notes:'Snapshot manager verified, all 16 matches. Previous after Udinese on 2 Dec Napoli 35/14 Roma 33/14. Napoli took 4pts (Lazio win, Palermo draw), Roma took 3pts (one win one loss) to reach 36. Opponents for Roma results NOT established.'};
D.tableContext='VERIFIED SERIE A AFTER 16 MATCHES EACH · Napoli 39 PTS 12W3D1L 31GF/9GA +22, Roma 36 11W3D2L 35/16 +19, Atalanta/Bergamo 32 9W5D2L +14, Juventus 31 9W4D3L +12, Parma 26 8W2D6L +6, Milan/Milano FC 25 6W7D3L +7. Napoli +3 Roma, last confirmed 17 Dec 2028.';
const f=D.fixtures2028?.find(x=>x.team==='Napoli'&&x.date==='2028-12-17'&&x.opponent==='Palermo');
if(f){f.played=true;f.result='Palermo 2–2 Napoli';f.homeGoals=2;f.awayGoals=2;}
const sDec=D.scheduleSnapshot?.fixtures?.find(x=>x.date==='2028-12-17'&&x.opponent==='Palermo');
if(sDec){sDec.played=true;sDec.result='Palermo 2–2 Napoli';}
const season=D.statsBySeason?.['2028–29'];if(Array.isArray(season)){
const changes=[
['Maximilian Beier',18,7,'Napoli club 2028–29 ALL competitions through Palermo 2–2 away 17 December: 17G/7A before Palermo, 86′ equaliser from Stach adds one goal.'],
['Pio Esposito',13,11,'Napoli club 2028–29 ALL competitions through Palermo 2–2 away 17 December: unchanged 13G/11A, stoppage shot saved, no goal contribution.']
];
for(const u of changes){const i=season.findIndex(x=>x[0]===u[0]);if(i>=0)season[i]=u;else season.push(u);}D.stats=season;
const names=new Set(Object.values(D.statsBySeason).flat().map(x=>x[0]));D.careerStats=[...names].map(name=>{let g=0,a=0,years=[];for(const [yr,rows] of Object.entries(D.statsBySeason)){const x=rows.find(z=>z[0]===name);if(x){g+=Number(x[1])||0;a+=Number(x[2])||0;years.push(yr);}}return[name,g,a,years.join(', ')]}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));
D.statsScope='Napoli club all competitions confirmed through 17 Dec 2028 Palermo 2–2: Beier 18 goals / 7 assists; Pio Esposito 13 goals / 11 assists. Nico Paz full-season assist total unverified.';
}
D.goalkeeperReview2028={...(D.goalkeeperReview2028||{}),publicFactsOnly:true,latestVerified:'Peacock made SIX saves in the FIRST HALF at Palermo away 17 Dec 2028 and started game; Palermo scored twice; specific keeper error not demonstrated. Meret had one-save clean sheet at Dortmund.',peacockPalermoFirstHalfSaves:6,peacockPalermoFullMatchSaves:null,nextGoalkeeperSelection:'Not verified for next Napoli league match.'};
const jan=[
{date:'2029-01-03',opponent:'Parma',venue:'Home',competition:'Serie A'},
{date:'2029-01-06',opponent:'Palermo',venue:'Home',competition:'Serie A'},
{date:'2029-01-10',opponent:'Fiorentina',venue:'Away',competition:'Serie A'},
{date:'2029-01-13',opponent:'Lazio',gameAlias:'Latium',venue:'Home',competition:'Serie A'},
{date:'2029-01-16',opponent:'Real Sociedad',venue:'Away',competition:'Champions League'},
{date:'2029-01-21',opponent:'Sampdoria',venue:'Away',competition:'Serie A'},
{date:'2029-01-24',opponent:'KS Cracovia',shortName:'Cracovia',venue:'Away',competition:'Champions League'},
{date:'2029-01-27',opponent:'Juventus',venue:'Home',competition:'Serie A'}].map(x=>({...x,team:'Napoli',verified:true,played:false,fixtureResultKnown:false,kickoffTime:null,source:'Manager-provided January 2029 FC26 calendar image'}));
D.scheduleJanuary2029={verified:true,year:2029,month:'January',kickoffTimesKnown:false,matchOutcomesKnown:false,fixtures:jan.map(x=>({...x})),note:'Jan 13 blue L game crest is Latium/Lazio; Jan 24 red-and-white flag matches Polish club KS Cracovia. No result inferred.'};
D.fixtures2028=D.fixtures2028||[];for(const x of jan){const i=D.fixtures2028.findIndex(f=>f.team==='Napoli'&&f.date===x.date&&f.competition===x.competition);if(i>=0)D.fixtures2028[i]={...D.fixtures2028[i],...x};else D.fixtures2028.push({...x});}
D.fixtures2028.sort((a,b)=>(a.date||'').localeCompare(b.date||''));
D.verifiedUpcoming2028=[...(D.verifiedUpcoming2028||[]).filter(x=>x.date>'2028-12-17'&&x.date<'2029-01-01'),...jan].sort((a,b)=>a.date.localeCompare(b.date));
D.upcoming=D.verifiedUpcoming2028.map(x=>[x.shortName||x.gameAlias||x.opponent,x.competition,x.date+' · '+x.venue+(x.competition==='Supercoppa'?' designation':'')]);
const next=D.verifiedUpcoming2028[0];
D.nextClubMatch={opponent:next?.opponent||'Bologna',competition:next?.competition||'Serie A',date:next?.date||'2028-12-24',venue:next?.venue||'Home',played:false,confirmedNext:true,kickoffTime:null,details:'Latest reported match is Palermo 2–2 on 17 December. December 24 Bologna and December 29 Supercoppa outcomes have not been supplied; do not assert they were played, postponed or won. January 2029 calendar confirmed separately.'};
D.verifiedUpcoming2029=jan;
D.ticker=[
 'PALERMO 2–2 NAPOLI · FULL TIME · BEIER 86′ SAVES POINT',
 'PEACOCK · SIX SAVES BEFORE HALF-TIME IN PALERMO',
 'OLISE ASSISTS MCTOMINAY 60′ · STACH SETS UP BEIER 86′',
 'NAPOLI 39 PTS / 16 · ROMA 36 PTS / 16 · THREE CLEAR',
 'ATALANTA 32 · JUVENTUS 31 · SERIE A AFTER 16',
 'JAN 2029 · EIGHT FIXTURES · SIX SERIE A · TWO UCL',
 'EUROPE JAN 16 · REAL SOCIEDAD AWAY',
 'EUROPE JAN 24 · KS CRACOVIA AWAY',
 'JAN 27 · JUVENTUS AT THE MARADONA',
 'NEXT UNREPORTED DEC FIXTURE · BOLOGNA HOME · 24 DEC'
];
D.whispers=[
 ['PALERMO LET-OFF','Six first-half saves from Peacock, two Diakité goals conceded, and an 86th-minute Beier equaliser salvage Napoli a 2–2 draw away.'],
 ['THE THREE-POINT GIFT','Roma take three points from two fixtures while Napoli take four. Both have 16 matches played: Napoli 39, Roma 36.'],
 ['OLISE CHANGES THE DIRECTION','Michael Olise and Alphonso Davies arrived at halftime in Palermo. Olise assisted McTominay’s 60′ equaliser.'],
 ['ANOTHER STACH ASSIST','Anton Stach, who assisted Pio against Como, also served Beier for the 86′ equaliser at Palermo.'],
 ['JANUARY EUROPEAN TRAVELS','Napoli visit Real Sociedad January 16 and KS Cracovia January 24 in the Champions League.'],
 ['THE JUVENTUS DATE','Juventus arrive in Naples on January 27, with a heavy run of January fixtures beforehand.']
];
})();