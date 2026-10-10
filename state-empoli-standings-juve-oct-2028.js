/* Confirmed Napoli 2-0 Empoli FT 21 Oct 2028 and manager-supplied screenshots of table immediately ahead of Juventus 25 Oct. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const empoli=['Napoli','Empoli','Serie A',2,0,'W','21 Oct 2028 · Home','Davies 12′ header (Michael Olise cross/assist), Olise apparent 23′ goal ruled offside (no goal), halftime Napoli 1–0 Empoli; Nico Paz 80′ (Scott McTominay assist); Paz hits post at 90+3′. FT Napoli 2–0 Empoli, fifth Serie A clean sheet.'];
for(const key of ['results','results2028']){
 D[key]=D[key]||[];
 const ix=D[key].findIndex(r=>r[0]==='Napoli'&&r[1]==='Empoli'&&r[2]==='Serie A'&&String(r[6]).includes('21 Oct 2028'));
 if(ix>=0)D[key][ix]=empoli;else D[key].push(empoli);
}
const f=D.fixtures2028?.find(f=>f.team==='Napoli'&&f.opponent==='Empoli'&&f.date==='2028-10-21');
if(f){f.venue='Home';f.played=true;f.result='Napoli 2–0 Empoli';}
if(Array.isArray(D.fixtures2028))D.upcoming=D.fixtures2028.filter(f=>f.team==='Napoli'&&!f.played).map(f=>[f.opponent,f.competition,f.date+' · '+f.venue+(f.verified?'':' · Opponent unconfirmed')]);
D.latestResult=['NAP','2–0','EMP','21 OCT · SERIE A · FT · Davies 12′ (Olise), Paz 80′ (McTominay)'];
D.seasonState={...(D.seasonState||{}),league:{...(D.seasonState?.league||{}),w:6,d:1,l:1,played:8,remaining:30,points:19,gf:11,ga:3,status:'2028–29 · defending champions · second place at pre-Juventus screenshot · five Serie A clean sheets'}};
// Standings supplied by manager as 2 FC26 in-game screenshots. These are actual confirmed positions,
// not a reconstructed table for non-Napoli clubs. Names normalized for editorial display.
D.serieAStandings={updated:'2028–29 · pre-Juventus match, after Bergamo first loss · manager screenshot',source:'FC26 manager-provided standings screenshots',rows:[
 ['Atalanta',9,6,2,1,21,10,11,20],
 ['Napoli',8,6,1,1,11,3,8,19],
 ['Roma',8,5,3,0,18,7,11,18],
 ['Juventus',8,5,2,1,16,8,8,17],
 ['Lazio',9,4,3,2,16,14,2,15],
 ['Fiorentina',8,4,2,2,12,8,4,14],
 ['AC Milan',8,3,4,1,12,8,4,13],
 ['Parma',9,4,1,4,16,13,3,13],
 ['Inter',8,2,4,2,14,13,1,10],
 ['Sampdoria',8,3,1,4,9,14,-5,10],
 ['Genoa',8,2,4,2,10,12,-2,10],
 ['Torino',9,2,4,3,10,13,-3,10],
 ['Como',8,2,3,3,9,11,-2,9]
]};
D.tableContext='Actual photographed manager FC26 Serie A 2028–29 table before Juventus v Napoli on 25 October. In-game aliases: Bergamo Calcio = Atalanta; Latium = Lazio; Milano FC = AC Milan; Lombardia FC = Inter. Visible top 13 only, other seven teams unknown. Atalanta first loss established, 9 played/20 pts; Napoli 8 played/19, Roma unbeaten 8 played/18, Juventus 8 played/17. Non-Napoli club match scorers/opponents unconfirmed; do not invent Atalanta defeat opponent/score.';
D.titleRaceSnapshot2028={date:'Pre Juventus away, 25 October 2028',confirmed:true,atarank:1,napolirank:2,atapoints:20,napolipoints:19,romapoints:18,juvepoints:17,table:D.serieAStandings.rows,notes:'If Napoli win vs Juventus, Napoli 22 pts, top ahead of Atalanta 20 at snapshot. Juventus if win 20 pts, Napoli 19. Others may play simultaneously; only use pictured snapshot.'};
D.ticker=[
 'TITLE RACE · ATALANTA LOSE FIRST · 20 POINTS FROM NINE',
 'NAPOLI 19 PTS · ONE OFF TOP BEFORE JUVENTUS AWAY',
 'FT · NAPOLI 2–0 EMPOLI · DAVIES 12′ · PAZ 80′',
 'DAVIES HEADER · OLISE ASSIST · FIFTH SERIE A CLEAN SHEET',
 'McTOMINAY SIX CLUB ASSISTS · FIRST PAZ GOAL OF SEASON',
 'ROMA UNBEATEN · 18 PTS · JUVENTUS 17 PTS',
 'AC MILAN SEVENTH · 13 PTS · INTER NINTH · 10 PTS',
 'NEXT · JUVENTUS AWAY · 25 OCT · TITLE RACE SHOWDOWN'];
D.whispers=[
 ['ATALANTA FINALLY BEATEN','The leaders fall for the first time: 6W, 2D, 1L and 20 points from nine. Napoli are one behind with a game in hand.'],
 ['JUVENTUS AWAY · TITLE RACE','Napoli on 19, Juve on 17. A win sends Napoli to 22, above Atalanta’s last confirmed 20.'],
 ['ROMA REFUSE TO LOSE','Roma remain unbeaten at 5W 3D and 18 points after eight matches, having ended Napoli’s long streak.'],
 ['TWO MILAN GIANTS OUTSIDE TOP SIX','AC Milan seventh on 13; Inter ninth on 10. Both have already lost to Napoli.'],
 ['A CALMER CLEAN SHEET','Napoli 2–0 Empoli: Davies from Olise 12′, Paz from McTominay 80′. Fifth league shutout.'],
 ['THE SIXTH ASSIST','Scott McTominay creates Paz’s first goal of the season and now has six confirmed club assists.']
];
const rows=D.statsBySeason?.['2028–29'];
if(Array.isArray(rows)){
 const updates=[
  ['Alphonso Davies',2,0,'2028–29 Napoli club: Serie A goals vs Inter 8′ and Empoli 12′ header from Olise.'],
  ['Michael Olise',0,2,'2028–29 Napoli club: Champions League assist to João Neves vs Galatasaray; Serie A 12′ cross assist to Davies vs Empoli. Offside 23′ apparent goal vs Empoli not counted.'],
  ['Nico Paz',1,1,'2028–29 Napoli club: first goal of season vs Empoli 80′ (McTominay); UCL assist to Beier vs Leverkusen; 90+3′ strike hit Empoli post.'],
  ['Scott McTominay',0,6,'2028–29 Napoli club: 5 Serie A assists (Lecce, Como, twice Milan, Empoli); 1 Champions League assist vs Leverkusen.']
 ];
 for(const upd of updates){const i=rows.findIndex(x=>x[0]===upd[0]);if(i>=0)rows[i]=upd;else rows.push(upd);}
 D.stats=rows;
 const names=new Set(Object.values(D.statsBySeason).flat().map(r=>r[0]));
 D.careerStats=[...names].map(name=>{let g=0,a=0,years=[];for(const [year,season] of Object.entries(D.statsBySeason)){const r=season.find(x=>x[0]===name);if(r){g+=Number(r[1])||0;a+=Number(r[2])||0;years.push(year)}}return [name,g,a,years.join(', ')];}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='2028–29 official Napoli club goals/assists through Napoli 2–0 Empoli, 21 Oct 2028. Italy friendlies excluded; prior Napoli seasons preserved.';
}
// UCL remains 3 played, 2 wins, 1 draw, seven points, 8 scored, 6 conceded. Juventus match has NOT happened.
})();