/* MANAGER-CONFIRMED NAPOLI 2028-29 · 26 NOVEMBER 2028 · MONZA 0–3 NAPOLI FT.
 43′ Maximilian Beier (Pio Esposito assist), 48′ Pio Esposito (Maximilian Beier assist),
 53′ Maximilian Beier (Pio Esposito assist). No later goals, FT 3–0.
 PEACOCK STARTED IN GOAL: manager reported breakaway save during game, keeper finished
 with clean sheet and was named SERIE A TEAM OF THE WEEK (manager confirmed afterward).
 Other keeper saves, rating, exact breakaway minute, full XI and outfield substitutions UNKNOWN.
 Pio manager-confirmed JOINT LEADER Serie A goal scorer and OUTRIGHT ASSISTS LEADER after Monza.
 Exact Serie A goal/assist counts and identity of tied scorer unconfirmed.
 All-comps Pio 11G/10A, Beier 14G/6A; team Serie A 13P 11W1D1L 34pts 26GF5GA +21
 9 clean sheets. Roma last confirmed 30pts/12 from pre-Monza screenshot; no fresh result.
 UCL remains 5P 7pts, 8GF10GA; Italy NT unchanged. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const row=['Napoli','Monza','Serie A',3,0,'W','26 Nov 2028 · Away',
 'MONZA 0–3 NAPOLI FT · 43′ Beier (Pio assist), 48′ Pio (Beier assist), 53′ Beier (Pio assist) · Halftime 0–1 based on reported 43′ opener and next goal 48′ · Peacock starts, makes breakaway save (minute unknown), earns clean sheet, named Serie A Team of the Week · other match events and substitutions not supplied.'];
for(const key of ['results','results2028']){
 D[key]=D[key]||[];
 const i=D[key].findIndex(x=>x[0]==='Napoli'&&x[1]==='Monza'&&x[2]==='Serie A'&&String(x[6]).includes('26 Nov 2028'));
 if(i>=0)D[key][i]=row;else D[key].push(row);
}
D.monzaNovember2028={played:true,fullTime:true,date:'2028-11-26',venue:'Away',competition:'Serie A',
 score:'Monza 0–3 Napoli',halftime:'Monza 0–1 Napoli',goals:[
 {minute:43,team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito'},
 {minute:48,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier'},
 {minute:53,team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito'}],
 startingGoalkeeper:'Peacock',startingGoalkeeperConfirmed:true,fullStartingXIConfirmed:false,
 peacock:{started:true,cleanSheet:true,teamOfWeek:true,breakawaySave:true,breakawaySaveMinute:null,
 totalSaves:null,rating:null,teamOfWeekSource:'Manager confirmed after Monza 0–3 Napoli FT'},
 outfieldSubstitutionsConfirmed:false,disciplinaryEventsConfirmed:false,
 note:'Manager announced three goals, Peacock breakaway save, FT and then Peacock Team of the Week. Do not invent full XI, shot count, assist extras or ratings.'
};
D.latestResult=['MON','0–3','NAP','SERIE A · 26 NOV 2028 · FT · BEIER 43′,53′ (PIO BOTH) · PIO 48′ (BEIER) · PEACOCK CLEAN SHEET / TEAM OF THE WEEK'];
D.seasonState={...(D.seasonState||{}),league:{...(D.seasonState?.league||{}),
 played:13,w:11,d:1,l:1,points:34,remaining:25,gf:26,ga:5,gd:21,cleanSheets:9,
 status:'2028–29 Scudetto defence · 34 points from 13 · Monza 0–3 Napoli away · 9 clean sheets; other clubs last verified at 12 games.'}};
D.serieAGoalAssistLeaders2028={asOf:'After Monza 0–3 Napoli on 26 Nov 2028',player:'Pio Esposito',
 goalsRank:'joint-first',assistsRank:'first-alone',goalsTied:true,assistsLeading:true,
 preciseLeagueGoals:null,preciseLeagueAssists:null,tiedScorer:null,
 managerVerified:true,note:'User expressly confirmed Pio tied for the SERIE A GOALS LEAD and leads Serie A ASSISTS. These are league-only relative ranks; do not confuse with Napoli club all-competitions 11G/10A.'};
if(D.serieAStandings?.rows){
 // Clone the current mixed-date table before updating Napoli; the 12-game photographed snapshot must remain immutable.
 D.serieAStandings={...D.serieAStandings,rows:D.serieAStandings.rows.map(r=>[...r])};
 const r=D.serieAStandings.rows.find(x=>x[0]==='Napoli');
 if(r){r[1]=13;r[2]=11;r[3]=1;r[4]=1;r[5]=26;r[6]=5;r[7]=21;r[8]=34;}
 D.serieAStandings.updated='After Napoli 0–3 Monza away 26 Nov 2028 · Napoli 13 games; all other clubs still 12 games from prior manager screenshot';
 D.serieAStandings.source='Napoli result manager-confirmed 26 Nov; all rival rows manager-photo verified after Atalanta but NOT updated to 13th game';
}
D.titleRaceSnapshot2028={...(D.titleRaceSnapshot2028||{}),
 confirmed:false,date:'26 November 2028 · Napoli after Monza; Roma and rivals still photographed after 12 matches',
 napolirank:1,napolipoints:34,romapoints:30,
 table:D.serieAStandings?.rows||[],confirmedRivalCurrent:false,
 notes:'Napoli 34 points after 13 games. Last CONFIRMED Roma: 30pts after 12, unbeaten 9W3D; whether they have played game 13 is unknown. Do not assert a four-point current gap or record a Roma result.'};
D.tableContext='AFTER MONZA 0–3 NAPOLI 26 NOV 2028: Napoli have 13 Serie A games, 11W1D1L, 34pts, 26GF 5GA +21, nine clean sheets. Pio tied league goals lead and leads league assists (counts/rival name unknown). Other top-five rivals from previous screenshot AFTER ATALANTA: Roma 30pts/12 unbeaten, Atalanta 24pts/12, Juventus 22pts/12, Milan 22pts/12, Lazio 20pts/12. Other clubs have not been refreshed to matchday 13; gap to Roma currently cannot be asserted. Last UCL Napoli 0–2 PSG, 5P 7pts, 8GF 10GA.';
D.goalkeeperReview2028={...(D.goalkeeperReview2028||{}),
 latestVerified:'Monza 0–3 Napoli away 26 Nov 2028: Peacock started, made a breakaway save, kept clean sheet, and was selected for Serie A Team of the Week.',
 proposedNextStart:{opponent:'Monza',date:'2028-11-26',venue:'Away',competition:'Serie A',status:'COMPLETED; Peacock actually started and saved breakaway'},
 peacockSelectedConfirmed:true,peacockMonzaStartedConfirmed:true,peacockCleanSheetConfirmed:true,peacockTeamOfWeekConfirmed:true,
 meretDroppedConfirmed:false,permanentChangeConfirmed:false,
 futureGoalkeeperDecisions:'Not confirmed: selection for Udinese 2 Dec or Borussia Dortmund 5 Dec.'};
const season=D.statsBySeason?.['2028–29'];
if(Array.isArray(season)){
 const totals=[
 ['Pio Esposito',11,10,'Napoli club 2028–29 ALL COMPETITIONS: 10G/8A before Monza + goal 48′ and assists 43′,53′. Separate league ranking: joint top Serie A scorer, sole assists leader; exact league G/A counts unknown.'],
 ['Maximilian Beier',14,6,'Napoli club 2028–29 ALL COMPETITIONS: 12G/5A before Monza + two goals 43′,53′ and Pio assist 48′.'],
 ];
 for(const entry of totals){const i=season.findIndex(x=>x[0]===entry[0]);if(i>=0)season[i]=entry;else season.push(entry);}
 D.stats=season;
 if(D.statsBySeason){const names=new Set(Object.values(D.statsBySeason).flat().map(x=>x[0]));D.careerStats=[...names].map(name=>{let g=0,a=0,yrs=[];for(const [year,rows] of Object.entries(D.statsBySeason)){const r=rows.find(x=>x[0]===name);if(r){g+=Number(r[1])||0;a+=Number(r[2])||0;yrs.push(year);}}return[name,g,a,yrs.join(', ')];}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));}
 D.statsScope='Verified Napoli club all-comps 2028–29 after Monza 0–3 Napoli 26 November: Pio 11G/10A, Beier 14G/6A; league scorer/assists rankings confirmed but numeric Serie A-only totals unknown; Italy friendlies separate.';
}
D.fixtures2028=D.fixtures2028||[];
const game=D.fixtures2028.find(x=>x.team==='Napoli'&&x.date==='2028-11-26'&&x.competition==='Serie A'&&x.opponent==='Monza');
if(game){game.played=true;game.result='Monza 0–3 Napoli';game.homeGoals=0;game.awayGoals=3;}
D.verifiedUpcoming2028=(D.verifiedUpcoming2028||[]).filter(x=>x.date!=='2028-11-26');
if(D.scheduleSnapshot?.fixtures){const fixture=D.scheduleSnapshot.fixtures.find(x=>x.date==='2028-11-26'&&x.opponent==='Monza');if(fixture){fixture.played=true;fixture.result='Monza 0–3 Napoli';}}
D.nextClubMatch={opponent:'Udinese',competition:'Serie A',date:'2028-12-02',venue:'Home',played:false,confirmedNext:true,kickoffTime:null,
 details:'First club game after 26 November 3–0 Monza win, Udinese home on 2 December. Peacock continued selection NOT confirmed.'};
D.upcoming=D.verifiedUpcoming2028.map(x=>[x.shortName||x.gameAlias||x.opponent,x.competition,x.date+' · '+x.venue+(x.competition==='Supercoppa'?' designation':'')]);
D.ticker=[
 'FT · MONZA 0–3 NAPOLI · 26 NOV · BEIER 43′,53′ · PIO 48′',
 'PEACOCK STARTS · BREAKAWAY SAVE · CLEAN SHEET · SERIE A TEAM OF THE WEEK',
 'PIO JOINT TOP SERIE A GOALSCORER · OUTRIGHT SERIE A ASSISTS LEADER',
 'BEIER 2 GOALS + 1 ASSIST · PIO 1 GOAL + 2 ASSISTS · MONZA',
 'NAPOLI · 13 SERIE A GAMES · 34 POINTS · 26GF 5GA · NINE SHUTOUTS',
 'PIO NAPOLI CLUB TOTAL 11G/10A · BEIER 14G/6A',
 'NEXT · 02 DEC · UDINESE HOME · SERIE A',
 'NEXT CHAMPIONS LEAGUE · 05 DEC · DORTMUND AWAY · SEVEN UCL POINTS',
 'ROMA LAST VERIFIED 30 POINTS AFTER 12 · POST-MONZA GAP NOT CONFIRMED',
 ...(D.ticker||[]).filter(x=>!x.includes('NEXT · 26 NOV')&&!x.includes('MERET UNDER SCRUTINY')&&!x.includes('PEACOCK PROPOSED')).slice(0,7)
];
D.whispers=[
 ['PEACOCK MAKES TEAM OF THE WEEK','After starting at Monza on 26 November, Peacock saves a Monza breakaway, keeps a clean sheet in a 3–0 Napoli win, and is named in Serie A Team of the Week. No save count or rating supplied.'],
 ['PIO AT THE TOP OF BOTH RACES','Manager confirms Pio Esposito is tied for the Serie A scoring lead and leads Serie A outright for assists after Monza. Exact league-only counts and his co-leader remain unconfirmed.'],
 ['THE PARTNERSHIP STRIKES AGAIN','Beier 43′ (Pio), Pio 48′ (Beier), Beier 53′ (Pio): three straight goals, all direct Pio-Beier combinations, in the 3–0 away victory.'],
 ['SCUDETTO · 34 POINTS','Napoli have 34 points from 13, 26 scored and five conceded with nine clean sheets. Roma last pictured on 30 from 12; current title-race gap unverified.'],
 ['PEACOCK OR MERET NEXT?','Peacock started and made Team of the Week vs Monza; no confirmed goalkeeper selection yet for Udinese or Dortmund.'],
 ['EUROPE NEXT WEEK','Udinese home on 2 Dec; Borussia Dortmund away in UCL 5 Dec. PSG and Arsenal previously blanked Napoli 2–0 each.'],
 ...(D.whispers||[]).filter(x=>!x[0].includes('NEXT · 26 NOV')&&!x[0].includes('PEACOCK IN CONTENTION')).slice(0,4)
];
// The historic May PSG final, November PSG defeat, Italy friendly records, unreported Roma game 13 and all future results stay untouched.
})();
