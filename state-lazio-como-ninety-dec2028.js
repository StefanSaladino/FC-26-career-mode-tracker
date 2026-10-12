/* Napoli 2028–29 latest verified state through 13 December Coppa Italia Napoli 2–1 Como FT.
Napoli Lazio 1–2 Serie A away 9 Dec: Beier 16′ (Paz), Hasa 26′, Beier 66′ (Pio).
Como 13 Dec: Pio 17′ (Stach), Braunöder 21′, Davies 90′ (Paz).
Paz and Davies were substitutes (not in confirmed starting XI), entry minutes/players off unknown.
League Napoli 38 points/15; rival's new records not verified. Cup round unknown.
Do not publish manager–assistant confidential coaching advice. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const lazio={
played:true,fullTime:true,date:'2028-12-09',competition:'Serie A',venue:'Away',
score:'Lazio 1–2 Napoli',halftime:'Lazio 1–1 Napoli',opponent:'Lazio',
goals:[{minute:16,team:'Napoli',scorer:'Maximilian Beier',assist:'Nico Paz'},
{minute:26,team:'Lazio',scorer:'Hasa',assist:null},
{minute:66,team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito'}],
firstHalf:{lazioShotsOnTarget:1,napoliAttackingAssessment:'Napoli threatening',fullTimeShootingUnknown:true},
hasaLoan:{parentClub:'Napoli',loanClub:'Lazio'},lineupNotConfirmed:true};
const como={
played:true,fullTime:true,date:'2028-12-13',competition:'Domestic Cup',venue:'Home',opponent:'Como',
score:'Napoli 2–1 Como',halftime:'Napoli 1–1 Como',cupRound:null,
goals:[{minute:17,team:'Napoli',scorer:'Pio Esposito',assist:'Anton Stach'},
{minute:21,team:'Como',scorer:'Braunöder',assist:null},
{minute:90,team:'Napoli',scorer:'Alphonso Davies',assist:'Nico Paz'}],
startingFormation:'4-2-3-1',
startingXI:[['GK','Peacock'],['LB','Riccardo Calafiori'],['CB','Alessandro Buongiorno'],['CB','Lutsharel Geertruida'],['RB','Michael Kayode'],['CDM','Anton Stach'],['CM','Scott McTominay'],['LW','Mikey Moore'],['CAM','Kevin De Bruyne'],['RW','Michael Olise'],['ST','Pio Esposito']],
substitutesConfirmed:[{player:'Nico Paz',entered:true,entryMinute:null,playerOut:null},{player:'Alphonso Davies',entered:true,entryMinute:null,playerOut:null}],
substitutesOtherUnknown:true,goalkeeperErrorAtEqualiser:'not established',
napoliWereSuperiorAtHalftime:true,
notes:'The manager approved Buongiorno for Bastoni to rest; final confirmed lineup is public, private reasons are not press quotations.'};
D.lazioDecember2028=lazio;
D.comoCoppaDecember2028=como;
const games=[
['Napoli','Lazio','Serie A',2,1,'W','9 Dec 2028 · Away','LAZIO 1–2 NAPOLI FT · 16′ Beier (Nico Paz) · 26′ Hasa (Napoli loanee at Lazio) · 66′ Beier (Pio Esposito). First half Lazio one shot on target.'],
['Napoli','Como','Domestic Cup',2,1,'W','13 Dec 2028 · Home','NAPOLI 2–1 COMO FT · 17′ Pio Esposito (Anton Stach) · 21′ Braunöder · 90′ Alphonso Davies (Nico Paz). Peacock starts, Geertruida and Buongiorno CB. Cup round unknown.']
];
for(const key of ['results','results2028']){
 D[key]=D[key]||[];
 for(const row of games){const idx=D[key].findIndex(x=>x[0]===row[0]&&x[1]===row[1]&&x[2]===row[2]&&String(x[6]).includes(row[6].split(' · ')[0]));
 if(idx>=0)D[key][idx]=row;else D[key].push(row);}
}
D.latestResult=['NAP','2–1','COM','COPPA ITALIA · 13 DEC 2028 FT · PIO 17′ (STACH) · BRAUNÖDER 21′ · DAVIES 90′ (PAZ)'];
D.seasonState={...(D.seasonState||{}),league:{...(D.seasonState?.league||{}),played:15,w:12,d:2,l:1,points:38,remaining:23,gf:29,ga:7,gd:22,status:'2028–29 Serie A · Napoli 38 points / 15 (12W 2D 1L) after 2–1 away at Lazio. Roma last verified 33pts/14; current gap unknown.'},
coppa:{...(D.seasonState?.coppa||{}),stage:'Cup fixture completed · round unspecified',status:'13 December 2028 Coppa Italia: Napoli 2–1 Como home, Davies 90′ winner from Nico Paz assist; competition round not confirmed',latestResult:'Napoli 2–1 Como'},
ucl:{...(D.seasonState?.ucl||{}),stage:'League phase',played:6,w:3,d:1,l:2,points:10,gf:9,ga:10,gd:-1,status:'2028–29 UCL · 10 points from 6 · most recent Dortmund 0–1 Napoli on 5 Dec'}};
D.serieAStandingsLatestNapoli={date:'2028-12-09',row:['Napoli',15,12,2,1,29,7,22,38],rivalsAsOf:'2028-12-02; Roma and others not refreshed'};
if(D.serieAStandings?.rows){
 const old=D.serieAStandings.rows.findIndex(x=>x[0]==='Napoli');
 if(old>=0)D.serieAStandings.rows[old]=['Napoli',15,12,2,1,29,7,22,38];
 D.serieAStandings.updated='Napoli verified through 9 December 2028 (15 matches). Rivals LAST VERIFIED 2 December 2028 (14 matches); rows are mixed-date and DO NOT establish the current title-race gap.';
 D.serieAStandings.source='Napoli verified Lazio 1–2 Napoli FT plus rivals screenshot as of 2 December; rivals unrefreshed.';
}
D.tableContext='NAPOLI CURRENT 9 DEC 2028: 15P 12W2D1L 29GF/7GA +22GD 38 pts. OTHER TEAMS LAST VERIFIED AS OF 2 DEC 2028: Roma 33pts/14, Atalanta 28/14, Juventus 25/14, Parma 23/14, Milan 23/14. Mixed-date standings; do not claim a live points gap after 9 Dec.';
D.titleRaceSnapshot2028={...(D.titleRaceSnapshot2028||{}),confirmedRivalCurrent:false,napolipoints:38,napolirank:null,date:'Napoli after Lazio 9 Dec; rival teams last verified 2 Dec',notes:'Rival league results after their 2 Dec/14-match snapshot not verified. Napoli have 38 from 15. Rankings/points gap not verified for 9 Dec.'};
const season=D.statsBySeason?.['2028–29'];if(Array.isArray(season)){
 for(const item of [
 ['Pio Esposito',13,11,'Napoli 2028–29 ALL competitions through Coppa Italia 13 Dec: after Dortmund 12G/10A, Pio assisted Beier at Lazio and scored from Stach against Como.'],
 ['Maximilian Beier',17,7,'Napoli 2028–29 ALL competitions through Coppa Italia 13 Dec: after Dortmund 15G/7A; scored twice against Lazio; did not start vs Como.']
 ]){const i=season.findIndex(x=>x[0]===item[0]);if(i>=0)season[i]=item;else season.push(item);}
 D.stats=season;
 const names=new Set(Object.values(D.statsBySeason).flat().map(x=>x[0]));
 D.careerStats=[...names].map(name=>{let g=0,a=0,years=[];for(const [yr,rows] of Object.entries(D.statsBySeason)){const r=rows.find(x=>x[0]===name);if(r){g+=Number(r[1])||0;a+=Number(r[2])||0;years.push(yr);}}return[name,g,a,years.join(', ')]}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='Napoli club 2028–29 through Como 2–1 cup win 13 December: Beier 17G/7A, Pio 13G/11A. Nico Paz has a confirmed assist against Lazio and against Como, but his complete season total has not been reverified.';
}
D.geertruidaRenewal2028Public={player:'Lutsharel Geertruida',age:28,overall:82,agreed:true,additionalYears:2,remainingYears:3.5,publiclyPublishedArticleId:'geertruida-two-year-renewal-roma-2028',note:'The squad role and private financial negotiation are not disclosed by this public state.'};
for(const [date,opponent,result,hg,ag] of [['2028-12-09','Lazio','Lazio 1–2 Napoli',1,2],['2028-12-13','Como','Napoli 2–1 Como',2,1]]){
 const f=D.fixtures2028?.find(x=>x.team==='Napoli'&&x.date===date&&x.opponent===opponent);
 if(f){f.played=true;f.result=result;f.homeGoals=hg;f.awayGoals=ag;}
 const z=D.scheduleSnapshot?.fixtures?.find(x=>x.date===date&&x.opponent===opponent);
 if(z){z.played=true;z.result=result;}
}
D.verifiedUpcoming2028=(D.verifiedUpcoming2028||[]).filter(f=>f.date>'2028-12-13');
D.upcoming=D.verifiedUpcoming2028.map(f=>[f.shortName||f.gameAlias||f.opponent,f.competition,f.date+' · '+f.venue+(f.competition==='Supercoppa'?' designation':'')]);
D.nextClubMatch={opponent:'Palermo',competition:'Serie A',date:'2028-12-17',venue:'Away',played:false,confirmedNext:true,kickoffTime:null,details:'Palermo away Serie A, 17 December 2028; no confirmed kickoff or starting XI.'};
D.goalkeeperReview2028={...(D.goalkeeperReview2028||{}),publicFactsOnly:true,latestVerified:'Peacock started Napoli 2–1 Como in the Coppa Italia on 13 December; no saves or individual error responsibility confirmed. Meret started Dortmund away 0–1 and made one save on 5 December.',nextGoalkeeperSelection:'Palermo away Dec 17 goalkeeper not announced'};
D.ticker=[
 'COPPA ITALIA · NAPOLI 2–1 COMO · ALPHONSO DAVIES 90′ WINNER',
 'NICO PAZ SERVES PHONZIE AT 90′ · MARADONA CELEBRATES',
 'PIO 17′ FROM STACH · BRAUNÖDER 21′ · DAVIES 90′',
 'SERIE A · LAZIO 1–2 NAPOLI · BEIER BRACE',
 'GEERTRUIDA AGREES TWO MORE YEARS AT NAPOLI',
 'NAPOLI · 38 POINTS AFTER 15 LEAGUE MATCHES',
 'CHAMPIONS LEAGUE · 10 POINTS / SIX GAMES',
 'NEXT · 17 DEC · PALERMO AWAY · SERIE A'
];
D.whispers=[
 ['PHONZIE AT THE DEATH','Davies scores in the 90th minute from a Nico Paz pass as Napoli beat Como 2–1 in the cup at home.'],
 ['VITAL INTERVENTIONS','Against Lazio, Paz set up Beier in the 16th; against Como, he assisted Davies at 90′. Playmaking from different roles and matches.'],
 ['A STRANGE RUN OF EQUALISERS','Udinese, Lazio and Como all cancelled out an early Napoli lead, but the champions fought back to win their last two domestic games.'],
 ['MORE DEPTH IN DEFENCE','Geertruida agrees a two-year extension and starts against Como alongside Buongiorno, with Bastoni rested.'],
 ['SCUDETTO CHECKPOINT','Napoli 38 points from 15 after beating Lazio. Roma last verified at 33 from 14, so the up-to-date title gap is not established.'],
 ['NEXT: PALERMO','Napoli travel to Palermo on 17 December for Serie A after their 90th-minute cup victory.']
];
})();
