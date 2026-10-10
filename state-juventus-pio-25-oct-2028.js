/* Confirmed Juventus 0–2 Napoli FT 25 Oct 2028, Pio 37′/89′, Paz credited assist 89′. 
   Post-match manager screenshot: Napoli 22 first, Roma 21 second, Atalanta 20 third. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const juve=['Napoli','Juventus','Serie A',2,0,'W','25 Oct 2028 · Away',
 'Juventus 0–2 Napoli FT. Di Gregorio big save on Beier 20′. Davies shot saved 37′; Pio Esposito scores rebound 37′. Di Gregorio denies Pio again 43′. HT Juventus 0–1 Napoli. 89′ Nico Paz plays Pio through; Di Gregorio stops original shot; Pio converts rebound (Nico Paz officially credited with assist). No confirmed assist on 37′. Sixth Serie A clean sheet.'];
for(const key of ['results','results2028']){
 D[key]=D[key]||[];
 const ix=D[key].findIndex(r=>r[0]==='Napoli'&&r[1]==='Juventus'&&r[2]==='Serie A'&&String(r[6]).includes('25 Oct 2028'));
 if(ix>=0)D[key][ix]=juve;else D[key].push(juve);
}
const f=D.fixtures2028?.find(f=>f.team==='Napoli'&&f.opponent==='Juventus'&&f.date==='2028-10-25');
if(f){f.venue='Away';f.played=true;f.result='Juventus 0–2 Napoli';}
if(Array.isArray(D.fixtures2028))D.upcoming=D.fixtures2028.filter(f=>f.team==='Napoli'&&!f.played).map(f=>[f.opponent,f.competition,f.date+' · '+f.venue+(f.verified?'':' · Opponent unconfirmed')]);
D.latestResult=['JUV','0–2','NAP','25 OCT · SERIE A · FT · Pio Esposito 37′ & 89′ · Paz assist 89′'];
D.seasonState={...(D.seasonState||{}),league:{...(D.seasonState?.league||{}),w:7,d:1,l:1,played:9,remaining:29,points:22,gf:13,ga:3,status:'2028–29 · defending champions · first in latest photographed Serie A table · six clean sheets in nine league games'}};
// FC26 standings top six exactly as manager-provided 25 October screenshot, after Juventus 0–2 Napoli.
// Names normalized: Bergamo Calcio -> Atalanta; Milano FC -> AC Milan; Latium -> Lazio.
D.serieAStandings={updated:'2028–29 · after Juventus 0–2 Napoli · manager screenshot (top six only)',source:'FC26 25 October 2028 manager-provided in-game screenshot',rows:[
 ['Napoli',9,7,1,1,13,3,10,22],
 ['Roma',9,6,3,0,22,7,15,21],
 ['Atalanta',9,6,2,1,21,10,11,20],
 ['Juventus',9,5,2,2,16,10,6,17],
 ['AC Milan',9,4,4,1,15,9,6,16],
 ['Lazio',9,4,3,2,16,14,2,15]
]};
D.tableContext='Confirmed 2028–29 FC26 Serie A top six after Juventus 0–2 Napoli on 25 October, as shown in manager-provided screenshot. Napoli first 22 points (9 matches), Roma unbeaten 21 second, Atalanta 20 third, Juventus 17 fourth, Milan 16 fifth, Lazio 15 sixth. Roma advanced from 18 points and 18-7 goals to 21 and 22-7, but opponent/scorers unknown — DO NOT INVENT. AC Milan advanced from 13 and 12-8 to 16 and 15-9, but opponent/scorers unknown. Current Inter position not shown in new screenshot; last confirmed ninth and ten points from PRE-MATCH prior snapshot. Table is only confirmed top six, do not treat lower positions as updated.';
D.titleRaceSnapshot2028={date:'After Juventus 0–2 Napoli FT, 25 October 2028',confirmed:true,napolirank:1,napolipoints:22,romarank:2,romapoints:21,atarank:3,atapoints:20,juverank:4,juvepoints:17,table:D.serieAStandings.rows,notes:'Official in-game photographed top six. Do not extrapolate other teams standings. Roma unbeaten nine played, six wins three draws; Juventus second defeat. AC Milan climbed to fifth; Inter updated spot not confirmed.'};
D.ticker=[
 'FULL TIME · JUVENTUS 0–2 NAPOLI · PIO 37′ AND 89′',
 'NAPOLI TOP OF SERIE A · 22 PTS AFTER NINE GAMES',
 'ROMA SECOND · 21 PTS · STILL UNBEATEN',
 'ATALANTA THIRD · 20 PTS · JUVENTUS FOURTH · 17 PTS',
 'PIO ESPOSITO · SIX CLUB GOALS · FOUR CLUB ASSISTS',
 'NICO PAZ · OFFICIAL ASSIST ON PIO 89′ · 1G 2A',
 'SIX CLEAN SHEETS IN NINE SERIE A MATCHES · THREE GOALS CONCEDED',
 'AC MILAN FIFTH · 16 PTS · NEXT SAMPDORIA 28 OCT'];
D.whispers=[
 ['TURIN IS BLUE','Pio Esposito scored 37′ and 89′ to beat Juventus 2–0. Di Gregorio denied Beier 20′ and Pio 43′.'],
 ['ROMA ONLY ONE BACK','Unbeaten Roma move second on 21 points, +15 goal difference. They ended Napoli’s 44-game league streak earlier this month.'],
 ['ATALANTA DOWN TO THIRD','Atalanta’s first defeat leaves them on 20 after nine. Napoli 22 and Roma 21 now lead the table.'],
 ['PIO SIXTH GOAL','Two rebounds, two goals in Turin. Pio now has six confirmed Napoli club goals and four assists in 2028–29.'],
 ['PAZ OFFICIAL ASSIST','Nico Paz played Pio through for the 89′ second goal and the game awarded him the assist despite the save and rebound.'],
 ['MILAN CLIMB','AC Milan are up to fifth with 16 points; their opponent and scorers in the latest win are unconfirmed.'],
 ['NEXT · SAMPDORIA / ARSENAL','Sampdoria visit Napoli 28 October in Serie A before the Champions League trip to Arsenal 31 October.']
];
const rows=D.statsBySeason?.['2028–29'];
if(Array.isArray(rows)){
 const updates=[
  ['Pio Esposito',6,4,'2028–29 Napoli club only: 5 Serie A goals, 1 UCL goal; 4 club assists. Juventus away brace 37′ rebound from Davies saved shot, 89′ rebound after Paz through-ball; Paz officially assisted 89′. Italy friendlies excluded.'],
  ['Nico Paz',1,2,'2028–29 Napoli club: goal vs Empoli 80′; assists to Beier vs Leverkusen and Pio vs Juventus 89′ (official in-game credit despite goalkeeper save/rebound).']
 ];
 for(const upd of updates){const i=rows.findIndex(x=>x[0]===upd[0]);if(i>=0)rows[i]=upd;else rows.push(upd);}
 D.stats=rows;
 const names=new Set(Object.values(D.statsBySeason).flat().map(r=>r[0]));
 D.careerStats=[...names].map(name=>{let g=0,a=0,years=[];for(const [year,season] of Object.entries(D.statsBySeason)){const r=season.find(x=>x[0]===name);if(r){g+=Number(r[1])||0;a+=Number(r[2])||0;years.push(year)}}return [name,g,a,years.join(', ')];}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='2028–29 official Napoli club goals/assists through Juventus 0–2 Napoli, 25 October 2028. International friendlies excluded; previous Napoli seasons preserved.';
}
// UCL remains 3 played, 2 wins, 1 draw, 7 points, 8 GF, 6 GA.
})();