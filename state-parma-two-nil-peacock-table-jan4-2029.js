/* JAN 4 2029 VERIFIED FULL TIME: Napoli 2-0 Parma HOME in Serie A match 18.
27' Kevin De Bruyne unassisted: Pio Esposito extremely sharp-angle shot nearly trickles inside near post, stopped on line; KDB crashes in and pokes ball over line. NO ASSIST credited to Pio.
75' Pio Esposito unassisted rebound from Scott McTominay SAVED SHOT. McTominay NOT credited assist.
GK Peacock confirmed clean sheet; do NOT invent saves, shots, substitutions, half-time score or starting XI.
League table screenshot after match: Napoli 18P 14W3D1L GF35 GA10 GD+25 Pts45;
Bergamo Calcio/Atalanta 19P 12W5D2L GF41 GA21 GD+20 Pts41;
Roma 18P 12W4D2L GF37 GA16 GD+21 Pts40;
Juventus 19P 11W5D3L GF38 GA22 GD+16 Pts38;
Lombardia FC 20P 10W4D6L GF36 GA28 GD+8 Pts34;
Parma 19P 9W3D7L GF27 GA22 GD+5 Pts30.
Rivals at different P totals: Napoli 5 ahead Roma on EQUAL games, 4 ahead Bergamo with a game in hand. Napoli league next Palermo home Jan 7. Beier season 19G7A unchanged, Pio now 14G12A. KDB goal added, prior KDB season tallies incomplete: mark minimum rather than claim fully audited total. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const game={date:'2029-01-04',competition:'Serie A',matchday:18,opponent:'Parma',team:'Napoli',venue:'Home',played:true,fullTime:true,verified:true,score:'Napoli 2–0 Parma',result:'W',halftime:null,halfTimeKnown:false,goalkeeper:'Peacock',cleanSheet:true,goals:[
{minute:27,team:'Napoli',scorer:'Kevin De Bruyne',assist:null,creditedAssist:false,description:'Pio Esposito shot from very sharp angle nearly sneaked in short side and sat on the goal line; De Bruyne crashed in to push over the line',preShotBy:'Pio Esposito',shotSituation:'Goal-line loose ball',pioAssistCredited:false},
{minute:75,team:'Napoli',scorer:'Pio Esposito',assist:null,creditedAssist:false,description:'Scott McTominay shot stopped by Parma goalkeeper, Pio Esposito converts rebound',priorShotBy:'Scott McTominay',priorShotResult:'Saved',mctominayAssistCredited:false}
],notes:'Two unassisted Napoli goals, including goal-line finish and rebound. Peacock clean sheet. Other match details including opposing shot count, substitutions, HT score and official xG unknown.'};
D.parmaJanuary2029=game;
const row=['Napoli','Parma','Serie A',2,0,'W','4 Jan 2029 · Home','NAPOLI 2–0 PARMA FT · 27′ DE BRUYNE unassisted goal-line finish after Pio sharp-angle near-post shot sat on line · 75′ PIO ESPOSITO unassisted rebound from SAVED McTominay shot · PEACOCK CLEAN SHEET'];
for(const k of ['results','results2028']){D[k]=D[k]||[];const i=D[k].findIndex(x=>x[0]==='Napoli'&&x[1]==='Parma'&&x[2]==='Serie A'&&String(x[6]).includes('4 Jan 2029'));if(i>=0)D[k][i]=row;else D[k].push([...row]);}
for(const k of ['fixtures2028','verifiedUpcoming2028','verifiedUpcoming2029']){if(!Array.isArray(D[k]))continue;for(const f of D[k])if(f.date==='2029-01-04'&&f.team==='Napoli'&&f.opponent==='Parma'&&f.competition==='Serie A')Object.assign(f,{played:true,fullTime:true,score:'2–0',result:'Napoli 2–0 Parma',winner:'Napoli',homeGoals:2,awayGoals:0,fixtureResultKnown:true});}
if(Array.isArray(D.scheduleJanuary2029?.fixtures)){const f=D.scheduleJanuary2029.fixtures.find(x=>x.date==='2029-01-04'&&x.opponent==='Parma');if(f)Object.assign(f,{played:true,fullTime:true,result:'Napoli 2–0 Parma',score:'2–0',homeGoals:2,awayGoals:0,fixtureResultKnown:true});D.scheduleJanuary2029.completedMatches=2;D.scheduleJanuary2029.upcomingMatches=8;D.scheduleJanuary2029.notes='Two completed January fixtures: Jan1 Supercoppa final Roma win 4-3 on pens after 0-0, Jan4 Serie A Napoli 2-0 Parma. Next Palermo Jan7; other eight January games unplayed.';}
if(Array.isArray(D.scheduleSnapshot?.fixtures)){const f=D.scheduleSnapshot.fixtures.find(x=>x.date==='2029-01-04'&&x.opponent==='Parma'&&x.team==='Napoli');if(f)Object.assign(f,{played:true,fullTime:true,result:'Napoli 2–0 Parma',score:'2–0',fixtureResultKnown:true});}
D.latestResult=['NAP','2–0','PAR','SERIE A · 4 JAN 2029 · DE BRUYNE 27′ (UNASSISTED GOAL-LINE FINISH) · PIO 75′ (UNASSISTED REBOUND) · PEACOCK CLEAN SHEET'];
D.seasonState={...(D.seasonState||{}),league:{...(D.seasonState?.league||{}),played:18,w:14,d:3,l:1,points:45,remaining:20,gf:35,ga:10,gd:25,position:1,status:'Manager-verified 4 Jan 2029 table: Napoli 45 points from 18 games after 2-0 Parma; Roma 40/18 (five behind same games), Bergamo 41/19 (four behind with extra game played).'}};
D.leagueSnapshot={...(D.leagueSnapshot||{}),played:18,wins:14,draws:3,losses:1,points:45,remaining:20,position:1,gf:35,ga:10,gd:25,status:'Napoli 45pts/18, 14W3D1L, GF35 GA10 GD+25. Screenshot verified top-six after Parma.'};
const t=[
['Napoli',18,14,3,1,35,10,25,45],
['Atalanta',19,12,5,2,41,21,20,41],
['Roma',18,12,4,2,37,16,21,40],
['Juventus',19,11,5,3,38,22,16,38],
['Lombardia FC',20,10,4,6,36,28,8,34],
['Parma',19,9,3,7,27,22,5,30]
];
D.serieAStandings={updated:'4 January 2029 · immediately following Napoli 2–0 Parma, manager screenshot',verified:true,partial:false,source:'Manager-provided in-game Serie A Enilive league table after Napoli league match 18, top 6. Other clubs have differing played totals, not a common 18-match snapshot.',rows:t.map(x=>[...x]),aliases:{Atalanta:'Bergamo Calcio',Roma:'AS Roma'},topSixOnly:true};
D.serieAStandingsSnapshotJan2029={verified:true,date:'2029-01-04',source:'Manager screenshot after Napoli vs Parma',rows:t.map(x=>[...x]),topSixOnly:true};
D.titleRaceSnapshot2028={...(D.titleRaceSnapshot2028||{}),confirmed:true,date:'2029-01-04',napolirank:1,napolipoints:45,napoliPlayed:18,romarank:3,romapoints:40,romaPlayed:18,atarank:2,atapoints:41,ataPlayed:19,juverank:4,juvepoints:38,juvePlayed:19,lombardiarank:5,lombardiapoints:34,lombardiaPlayed:20,parmarank:6,parmapoints:30,parmaPlayed:19,confirmedRivalCurrent:true,pointsGapToRoma:5,pointsGapToBergamo:4,table:t.map(x=>[...x]),notes:'Snapshot top six from Jan4 after Napoli Parma. Napoli +5 on Roma after 18 games EACH, +4 Bergamo despite Bergamo one game more. These rankings reflect different games played for some opponents. Parma 30/19.'};
D.tableContext='SCREENSHOT VERIFIED POST PARMA 4 JAN 2029: Napoli 45pts/18 14W3D1L GF35 GA10 +25; Bergamo Calcio 41pts/19 GF41 GA21 +20; Roma 40pts/18 GF37 GA16 +21; Juventus 38pts/19; Lombardia FC 34pts/20; Parma 30pts/19. Napoli +5 Roma same games, +4 Bergamo with Bergamo one extra played. Remaining rankings beyond sixth unknown.';
const stats=D.statsBySeason?.['2028–29'];if(Array.isArray(stats)){
const p=stats.find(x=>x[0]==='Pio Esposito');if(p){p[1]=14;p[2]=12;p[3]='2028–29 Napoli all club competitions through Serie A win vs Parma Jan 4: 14 goals, 12 assists. Scored 75′ unassisted rebound of saved McTominay effort. Did not receive assist on KDB goal at 27′.';}else stats.push(['Pio Esposito',14,12,'Manager verified total through Jan 4 Parma; 75′ goal unassisted.']);
const k=stats.find(x=>x[0]==='Kevin De Bruyne');if(k){k[1]=Math.max(2,Number(k[1])||0);k[3]='At least two confirmed 2028–29 Napoli club goals: Venezia 40′, Parma 27′ (unassisted), with Parma finish after Pio sharp-angle shot sat on line. Prior KDB season row not thoroughly backfilled; exact all-comps season total not verified.';}
D.stats=stats;
const names=new Set(Object.values(D.statsBySeason).flat().map(x=>x[0]));D.careerStats=[...names].map(n=>{let g=0,a=0,yrs=[];for(const [yr,rows] of Object.entries(D.statsBySeason)){const x=rows.find(z=>z[0]===n);if(x){g+=Number(x[1])||0;a+=Number(x[2])||0;yrs.push(yr);}}return[n,g,a,yrs.join(', ')]}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));
D.statsScope='Napoli club all competitions through Parma 2-0 Jan4 2029. Pio 14G/12A, Beier last verified 19G/7A. De Bruyne confirmed minimum 2 season goals (Venezia + Parma); full total not audited. Shootout penalties excluded.';
}
D.verifiedPlayerMilestones2028={...(D.verifiedPlayerMilestones2028||{}),through:'2029-01-04',pio:{goals:14,assists:12,goalVsParmaMinute:75,creditedAssistOnDeBruyne:false},beier:{goals:19,assists:7,lastVerified:'2028-12-24'},deBruyne:{confirmedSeasonGoalsMinimum:2,goalVsParmaMinute:27,assist:null},peacock:{cleanSheetVsParma:true,date:'2029-01-04'}};
D.verifiedUpcoming2028=(D.verifiedUpcoming2028||[]).filter(x=>x.date>'2029-01-04');
D.verifiedUpcoming2029=(D.verifiedUpcoming2029||[]).filter(x=>x.date>'2029-01-04');
D.upcoming=(D.verifiedUpcoming2028||[]).map(x=>[x.gameAlias||x.opponent,x.competition,x.date+' · '+x.venue+(x.date==='2029-01-31'?' · Cup round TBC':'')]);
D.nextClubMatch={opponent:'Palermo',competition:'Serie A',date:'2029-01-07',venue:'Home',played:false,confirmedNext:true,confirmedOpponent:true,kickoffTime:null,details:'Napoli 2–0 Parma Jan 4 confirmed FT, Peacock clean sheet. Next Palermo home Jan 7. Previous Palermo away Dec17 2–2; no Jan7 result known.'};
D.ticker=[
'NAPOLI 2–0 PARMA FT · DE BRUYNE 27′ · PIO 75′ · PEACOCK CLEAN SHEET',
'PIO ESPOSITO GOAL NO. 14 · UNASSISTED REBOUND OF SAVED MCTOMINAY SHOT',
'DE BRUYNE GOAL-LINE FINISH AFTER PIO SHARP-ANGLE EFFORT · NO ASSIST',
'NAPOLI TOP SERIE A · 45 POINTS FROM 18 MATCHES · 14W 3D 1L',
'ROMA 40 POINTS FROM 18 · NAPOLI FIVE POINTS CLEAR ON EQUAL GAMES',
'BERGAMO CALCIO 41 FROM 19 · NAPOLI LEAD BY FOUR WITH GAME IN HAND',
'PEACOCK CLEAN SHEET · TEN LEAGUE GOALS CONCEDED IN EIGHTEEN',
'NEXT · PALERMO AT HOME · JANUARY 7',
'BEIER UEFA TEAM OF THE YEAR FORWARD SHORTLIST · EVERTON APPROACH DI LORENZO'
];
D.whispers=[
['THAT GOAL-LINE SCRAMBLE','Pio hit a near-impossible angled shot that came to rest on the goal line. De Bruyne crashed in to finish in the 27th minute. KDB credited, no assist.'],
['PIO ANSWERS','Pio Esposito scored his 14th club goal of the season at 75 minutes, reacting to a saved Scott McTominay shot. Unassisted rebound.'],
['PEACOCK TAKES HIS TURN','Peacock kept a clean sheet at home against Parma. Meret starred in the Roma final, leaving a genuine goalkeeper selection discussion. Do not invent saves or appointment of first choice.'],
['THE TOP-SIX SNAPSHOT','Napoli 45/18, Bergamo 41/19, Roma 40/18, Juventus 38/19, Lombardia FC 34/20, Parma 30/19. Screenshot verified.'],
['FIVE CLEAR OF ROMA','Napoli lead Roma by five points after both have played eighteen Serie A fixtures. Bergamo sit four points back despite playing nineteen.'],
['PALERMO REMATCH','Napoli host Palermo January 7, after the 2–2 away draw on December 17. The January fixture is not yet played.'],
['DI LORENZO WATCH','Everton approach remains unconfirmed as a transfer. Giovanni Di Lorenzo has an expiring deal and does not currently want to renew.'],
['BEIER EUROPEAN HONOUR','Beier remains on reported 2029 UEFA Team of the Year forward shortlist; no final award announced.']
];
})();