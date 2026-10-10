/* Manager-confirmed Napoli 3–0 Sampdoria FT 28 October 2028. 
   Arsenal UCL away 31 Oct NOT yet played. Prior season 1–1 archive in post-arsenal.js: Ødegaard 24′, Pio 90+1′ from Beier.
   Other clubs have no new table snapshot since 25 Oct; do not claim updated rivals. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const record=['Napoli','Sampdoria','Serie A',3,0,'W','28 Oct 2028 · Home',
 'FT Napoli 3–0 Sampdoria. Heavy rotation intended before Arsenal on 31 Oct; full XI and all substitutions unconfirmed. De Bruyne 27′ strange finish just inside post (Nico Paz assist), HT 1–0. Beier entered at halftime. Beier 52′ (Pio Esposito assist). Pio Esposito 70′ (Beier assist). Seventh Serie A clean sheet.'];
for(const key of ['results','results2028']){
 D[key]=D[key]||[];
 const ix=D[key].findIndex(r=>r[0]==='Napoli'&&r[1]==='Sampdoria'&&r[2]==='Serie A'&&String(r[6]).includes('28 Oct 2028'));
 if(ix>=0)D[key][ix]=record;else D[key].push(record);
}
const samp=D.fixtures2028?.find(f=>f.team==='Napoli'&&f.opponent==='Sampdoria'&&f.date==='2028-10-28');
if(samp){samp.venue='Home';samp.played=true;samp.result='Napoli 3–0 Sampdoria';}
const arsenal=D.fixtures2028?.find(f=>f.team==='Napoli'&&f.opponent==='Arsenal'&&f.date==='2028-10-31');
if(arsenal){arsenal.venue='Away';arsenal.competition='Champions League';arsenal.verified=true;arsenal.played=false;delete arsenal.result;}
if(Array.isArray(D.fixtures2028))D.upcoming=D.fixtures2028.filter(f=>f.team==='Napoli'&&!f.played).map(f=>[f.opponent,f.competition,f.date+' · '+f.venue+(f.verified?'':' · Opponent unconfirmed')]);
D.latestResult=['NAP','3–0','SAM','28 OCT · SERIE A · FT · De Bruyne 27′ (Paz), Beier 52′ (Pio), Pio 70′ (Beier)'];
D.seasonState={...(D.seasonState||{}),league:{...(D.seasonState?.league||{}),w:8,d:1,l:1,played:10,remaining:28,points:25,gf:16,ga:3,status:'2028–29 · defending champions · 25 points through 10 Serie A fixtures, 7 clean sheets; rival positions last photographed after Juventus.'}};
// Update only confirmed Napoli row; the opponent table has not been refreshed after this fixture.
if(D.serieAStandings&&Array.isArray(D.serieAStandings.rows)){
 const row=D.serieAStandings.rows.find(r=>r[0]==='Napoli');
 if(row){row[1]=10;row[2]=8;row[3]=1;row[4]=1;row[5]=16;row[6]=3;row[7]=13;row[8]=25;}
 D.serieAStandings.updated='28 Oct 2028 · Napoli updated after Sampdoria; other clubs last photographed after 25 Oct Juventus';
 D.serieAStandings.source='Napoli manager-confirmed FT vs Sampdoria, plus historical screenshots dated 25 Oct for other clubs';
}
D.tableContext='Napoli ACTUAL club record after 3–0 Sampdoria: 10 played 8W 1D 1L 25 points, 16GF 3GA +13 and seven Serie A clean sheets. LAST verified rival table was after Juventus 25 October: Roma 21 pts unbeaten (9P), Atalanta 20 (9P), Juventus 17 (9P), Milan 16 (9P), Lazio 15 (9P). NO updated post-Sampdoria rival table supplied, so do NOT state a confirmed new point gap or that other clubs have not played. Current first place is conditional on rival fixtures; last photographed table had Napoli first.';
D.titleRaceSnapshot2028={...(D.titleRaceSnapshot2028||{}),date:'Napoli after Sampdoria 28 Oct; others last photographed after Juventus 25 Oct',napolipoints:25,napolirank:null,confirmed:false,notes:'Napoli 25 through ten games is confirmed; standings for Roma, Atalanta and all other clubs NOT refreshed. Do not claim 4-point lead or latest full table after Sampdoria.'};
D.arsenalRematch={upcoming:'2028-10-31',opponent:'Arsenal',venue:'Away',competition:'Champions League',played:false,previous:{season:'2027–28',result:'Napoli 1–1 Arsenal',arsenalScorer:'Martin Ødegaard 24′',napoliScorer:'Pio Esposito 90+1′',napoliAssist:'Maximilian Beier',notes:'Raya significant saves, Meret key saves, 90+1 Pio equalizer ends scoring drought; archived story post-arsenal.js, gameplay video assets/pio-arsenal-equalizer.mp4',source:'post-arsenal.js'}};
D.ticker=[
 'FT · NAPOLI 3–0 SAMPDORIA · KDB 27′ · BEIER 52′ · PIO 70′',
 'NAPOLI · 25 POINTS FROM TEN SERIE A MATCHES · SEVEN CLEAN SHEETS',
 'PIO TO BEIER 52′ · BEIER TO PIO 70′',
 'BEIER · TEN CLUB GOALS / THREE ASSISTS',
 'PIO · SEVEN CLUB GOALS / FIVE ASSISTS',
 'PAZ THIRD CLUB ASSIST · SETS UP DE BRUYNE',
 'NEXT · ARSENAL AWAY · 31 OCT · CHAMPIONS LEAGUE',
 'LAST YEAR · ARSENAL 1–1 NAPOLI · PIO 90+1′ FROM BEIER'];
D.whispers=[
 ['90+1: THE MEMORY','Last season Arsenal led through Ødegaard 24′ until Beier assisted Pio Esposito at 90+1′ in a 1–1 Champions League draw.'],
 ['THE ARSENAL REMATCH','Napoli travel to Arsenal on 31 October. Upcoming fixture only, no 2028 result or lineup confirmed.'],
 ['ROTATION WORKED THIS TIME','Heavy rotation before London preceded a 3–0 Sampdoria win. Beier entered at halftime and contributed 1 goal, 1 assist.'],
 ['ONE SETS UP THE OTHER','Against Sampdoria, Pio assisted Beier 52′; Beier assisted Pio 70′. The duo reach 25 combined club goal involvements.'],
 ['SEVEN LEAGUE CLEAN SHEETS','After ten fixtures Napoli have 25 points, 16 league goals and only three conceded. Rival table not updated beyond last screenshot.'],
 ['PAZ ADDS ANOTHER','Nico Paz sets up De Bruyne 27′ against Sampdoria and now has one club goal and three assists.'],
 ['EUROPEAN QUESTION','Napoli are unbeaten with seven points from three Champions League games but have conceded six goals in those three.']
];
const rows=D.statsBySeason?.['2028–29'];
if(Array.isArray(rows)){
 const updates=[
 ['Maximilian Beier',10,3,'2028–29 Napoli club: now 10 goals, 3 assists after halftime substitution vs Sampdoria 28 Oct; goal 52′ (Pio assist), assist on Pio 70′. Arsenal away not yet played.'],
 ['Pio Esposito',7,5,'2028–29 Napoli club: now 7 goals, 5 assists; assist to Beier 52′ and goal 70′ assisted by Beier against Sampdoria; last-season 90+1 Arsenal equalizer is historical and not counted this season.'],
 ['Nico Paz',1,3,'2028–29 Napoli club: goal Empoli 80′; assists Leverkusen, Juventus officially credited 89′, De Bruyne 27′ vs Sampdoria.'],
 ['Kevin De Bruyne',2,1,'2028–29 Napoli club: goals against Venezia 40′ and Sampdoria 27′ (from Nico Paz assist), assist on Beier vs Lecce 87′.']
 ];
 for(const upd of updates){const i=rows.findIndex(r=>r[0]===upd[0]);if(i>=0)rows[i]=upd;else rows.push(upd);}
 D.stats=rows;
 const names=new Set(Object.values(D.statsBySeason).flat().map(r=>r[0]));
 D.careerStats=[...names].map(name=>{let g=0,a=0,years=[];for(const [year,season] of Object.entries(D.statsBySeason)){const r=season.find(x=>x[0]===name);if(r){g+=Number(r[1])||0;a+=Number(r[2])||0;years.push(year)}}return [name,g,a,years.join(', ')];}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='Official 2028–29 Napoli club goals and assists through Napoli 3–0 Sampdoria, 28 Oct 2028. Italy national-team friendlies and archived 2027–28 Arsenal 1–1 not counted in this season; historical seasons preserved.';
}
// UCL unchanged: 3 played, 2W 1D 0L, 7 pts, 8GF 6GA.
})();
