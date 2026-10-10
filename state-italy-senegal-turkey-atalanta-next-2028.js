/* Manager-confirmed Italy November 2028 friendlies; exact dates/venues/goals minutes unconfirmed.
Italy 1–1 Senegal: Pio Esposito goal assisted by Moise Kean. Donnarumma penalty SAVE.
Italy 2–1 Turkey: Pio Esposito goal from Kean; Pio Esposito rebound goal UNASSISTED, as manager corrected.
These are Italy NT appearances; NEVER add to Napoli club G/A. Next Napoli opponent Atalanta, UNPLAYED, exact match date and venue unconfirmed. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const games=[
 ['Italy','Senegal','International Friendly',1,1,'D','November 2028 · exact match date and venue unconfirmed',
  'Italy 1–1 Senegal FT. Pio Esposito goal from Moise Kean assist. Gianluigi Donnarumma saved a penalty. Goal minutes, other scorers, penalty taker/minute, venue and exact calendar date unconfirmed.'],
 ['Italy','Turkey','International Friendly',2,1,'W','November 2028 · exact match date and venue unconfirmed',
  'Italy 2–1 Turkey FT. Pio Esposito scored twice: first from Moise Kean ASSIST; second on rebound was UNASSISTED (manager expressly confirmed). Goal minutes, other scorer, venue and exact calendar date unconfirmed.']
];
for(const key of ['results','results2028']){
 D[key]=D[key]||[];
 for(const row of games){
  const i=D[key].findIndex(r=>r[0]==='Italy'&&r[1]===row[1]&&r[2]==='International Friendly'&&String(r[6]).includes('November 2028'));
  if(i>=0)D[key][i]=row;else D[key].push(row);
 }
}
D.italyNovember2028={competition:'International Friendlies',period:'November 2028 (exact dates unconfirmed)',played:2,wins:1,draws:1,losses:0,gf:3,ga:2,results:[
 {opponent:'Senegal',result:'Italy 1–1 Senegal',pioGoals:1,pioAssists:0,keanAssists:1,donnarummaPenaltySaves:1},
 {opponent:'Turkey',result:'Italy 2–1 Turkey',pioGoals:2,pioAssists:0,keanAssists:1,pioSecondGoalUnassisted:true}
],players:[{name:'Pio Esposito',goals:3,assists:0},{name:'Moise Kean',goals:0,assists:2}],donnarummaPenaltySaves:1,exactDatesVerified:false,venuesVerified:false,otherScorersVerified:false};
D.italy2028FriendlySummary={confirmedGames:[
 'Italy 2–0 Côte d’Ivoire (6 Oct, Pio 2G)',
 'Italy 2–0 Tunisia (10 Oct, Kean 2G, Pio 2A)',
 'Italy 1–1 Senegal (November, Pio 1G Kean 1A; Donnarumma penalty save)',
 'Italy 2–1 Turkey (November, Pio 2G; Kean assist first; Pio rebound second UNASSISTED)'
],played:4,wins:3,draws:1,losses:0,gf:7,ga:2,pioGoals:5,pioAssists:2,keanGoals:2,keanAssists:2,team:'Italy',scope:'International friendlies only. Do NOT add to Napoli club G/A.'};
D.nextInternationalWindow={stage:'Completed',type:'International Friendlies',team:'Italy',manager:'Saladino',opponentsVerified:true,datesVerified:false,opponents:['Senegal','Turkey'],results:['Italy 1–1 Senegal','Italy 2–1 Turkey'],details:'Both reported friendlies completed, next Napoli match is Atalanta. Dates and venues remain unconfirmed.'};
D.nextClubMatch={opponent:'Atalanta',gameAlias:'Bergamo Calcio',competition:'Serie A',played:false,date:null,venue:null,confirmedNext:true,details:'Manager-confirmed next match after Italy Senegal/Turkey friendlies; match date and home/away location not supplied.'};
D.upcoming=[['Atalanta','Serie A','Next after Italy friendlies · date and venue unconfirmed']];
D.ticker=[
 'NEXT · NAPOLI FACE ATALANTA · SERIE A · SCUDETTO SHOWDOWN',
 'ITALY 1–1 SENEGAL · PIO GOAL (KEAN) · DONNARUMMA SAVES PENALTY',
 'ITALY 2–1 TURKEY · PIO BRACE · KEAN ASSIST ON FIRST',
 'PIO TURKEY REBOUND GOAL · NO ASSIST CREDITED',
 'PIO · FIVE GOALS / TWO ASSISTS IN FOUR REPORTED 2028 ITALY FRIENDLIES',
 'NAPOLI · 28 POINTS FROM ELEVEN SERIE A GAMES · EIGHT CLEAN SHEETS',
 'ATALANTA · LAST VERIFIED 20PTS FROM 9 MATCHES ON 25 OCT · CURRENT GAP UNKNOWN',
 'NAPOLI CLUB STATS UNCHANGED · PIO 7G / 5A'];
D.whispers=[
 ['ATALANTA NEXT','International friendlies complete. Napoli next face Atalanta (Bergamo Calcio) in Serie A; date, venue and actual lineup unconfirmed.'],
 ['PIO DOUBLE AGAINST TURKEY','Pio scored twice in Italy 2–1 Turkey; Kean assisted the first, the rebound goal was officially UNASSISTED.'],
 ['SENEGAL HELD, DONNARUMMA SAVES','Italy drew Senegal 1–1, Pio scored from Kean assist and Donnarumma stopped a penalty.'],
 ['A PRODUCTIVE AZZURRI WINDOW','Italy go 1W 1D against Turkey/Senegal, Pio 3 goals, Kean 2 assists, and one Donnarumma penalty save.'],
 ['ITALY AND NAPOLI ARE SEPARATE','Pio club stats remain 7 goals, 5 assists. The five Italy goals in four reported 2028 friendlies do not change club totals.'],
 ['28-POINT TITLE FIGHT','Napoli hold 28 points from 11 matches. Atalanta were on 20 from nine on 25 October; their newer results are unknown.'],
 ['DEFENCE VS ATTACK','Napoli just three conceded in eleven Serie A games; Atalanta had scored 21 in nine at the last verified October screenshot. This is historical form, not updated statistics.']];
D.tableContext=(D.tableContext||'')+' Next after Italy friendlies is Atalanta, NOT a played game. Atalanta latest verified table: 20 pts from 9 played as of 25 Oct. Napoli have 28 pts from 11. Never describe their difference as current lead because matchdays differ.';
// Deliberately preserve D.latestResult (Napoli 1–0 Genoa) as latest CLUB result.
// Deliberately preserve Serie A and UCL results, goal stats and past-season player statistics.
})();
