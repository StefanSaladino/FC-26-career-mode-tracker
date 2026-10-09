/* 2028–29 canonical FT: AC Milan 1–2 Napoli, 1 Oct, away, rainy San Siro. */
(()=>{
const D=window.NAPOLI_DATA;if(!D)return;
const result=['Napoli','Milan','Serie A',2,1,'W','1 Oct 2028 · Away · San Siro','AC Milan: Rabiot 55′. Napoli: Pio Esposito 68′ (Scott McTominay); Maximilian Beier 90+1′ (Scott McTominay). HT 0–0; Pio 14′ offside (Olise play), Maignan denied Paz 30′ and Pio 40′.'];
for(const key of ['results','results2028']){
 D[key]=D[key]||[];
 const matches=x=>x[0]==='Napoli'&&x[1]==='Milan'&&x[2]==='Serie A'&&String(x[6]).includes('1 Oct 2028');
 const i=D[key].findIndex(matches);
 if(i>=0)D[key][i]=result;else D[key].push(result);
}
if(Array.isArray(D.fixtures2028)){
 const f=D.fixtures2028.find(f=>f.team==='Napoli'&&f.opponent==='Milan'&&f.date==='2028-10-01');
 if(f){f.venue='Away';f.played=true;f.result='Milan 1–2 Napoli';}
 D.upcoming=D.fixtures2028.filter(f=>f.team==='Napoli'&&!f.played).map(f=>[f.opponent,f.competition,f.date+' · '+f.venue+(f.verified?'':' · Opponent unconfirmed')]);
}
D.latestResult=['MIL','1–2','NAP','1 OCT · SERIE A · FT · Pio 68′, Beier 90+1′ · McTominay 2 assists'];
D.seasonState={...(D.seasonState||{}),league:{...(D.seasonState?.league||{}),w:5,d:1,l:0,points:16,played:6,remaining:32,gf:9,ga:2,status:'2028–29 · defending champions · unbeaten after six'}};
D.serieAStandings={updated:'2028–29 · after Milan away · Napoli-only record',rows:[['Napoli',6,5,1,0,9,2,7,16]]};
D.tableContext='2028–29 Napoli-only Serie A record: Lecce 0–2 Napoli, Napoli 2–0 Inter, Venezia 1–1 Napoli, Como 0–1 Napoli, Torino 0–1 Napoli, Milan 1–2 Napoli. 5W 1D 0L, 16 pts, nine GF, two GA, four clean sheets. Opposing teams’ standings have not been confirmed.';
D.ticker=['FT · MILAN 1–2 NAPOLI · SAN SIRO','BEIER 90+1′ WINNER · McTOMINAY ASSIST','PIO ESPOSITO 68′ · McTOMINAY ASSIST','RABIOT 55′ · MILAN LEAD ERASED','MCTOMINAY TWO ASSISTS · FIVE IN ALL COMPETITIONS','SERIE A · 5W 1D · 16 PTS · UNBEATEN','NEXT NAPOLI · ROMA AWAY · 13 OCT'];
D.whispers=[['THE SAN SIRO HEIST','Beier scores at 90+1 to seal a 2–1 Napoli win over AC Milan on a rainy night.'],['SCOTT DELIVERS TWICE','McTominay assists Pio 68′ and Beier 90+1′. Five season assists in all competitions.'],['MAIGNAN HELD FIRM','Maignan denied Paz at 30′ and Pio at 40′; Pio had an earlier goal disallowed for offside.'],['16 POINTS · STILL UNBEATEN','Napoli have five wins, one draw, nine scored and two conceded in Serie A.'],['NEXT: ROMA AWAY','Napoli visit Roma in Serie A on 13 October, following the Italy international fixtures.']];
const season=D.statsBySeason?.['2028–29'];
if(Array.isArray(season)){
 const updates=[
 ['Maximilian Beier',6,2,'2028–29: Serie A 4G/1A, UCL 2G/1A. Milan away: winning goal at 90+1′ (McTominay)'],
 ['Pio Esposito',4,1,'2028–29: Serie A 3G/1A, UCL 1G. Milan away: equaliser at 68′ (McTominay); 14′ disallowed'],
 ['Scott McTominay',0,5,'2028–29: Serie A 4 assists (Lecce, Como, two at Milan), UCL 1 (Leverkusen)'],
 ['Nico Paz',0,1,'2028–29: UCL assist vs Leverkusen; Maignan saved his chance at San Siro 30′']
 ];
 for(const r of updates){const i=season.findIndex(x=>x[0]===r[0]);if(i>=0)season[i]=r;else season.push(r);}
 D.stats=season;
 const names=new Set(Object.values(D.statsBySeason).flat().map(r=>r[0]));
 D.careerStats=[...names].map(name=>{let goals=0,assists=0,years=[];Object.entries(D.statsBySeason).forEach(([year,rows])=>{const r=rows.find(x=>x[0]===name);if(r){goals+=Number(r[1])||0;assists+=Number(r[2])||0;years.push(year);}});return [name,goals,assists,years.join(', ')];}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='2028–29 official Napoli all-competition contribution totals through AC Milan 1–2 Napoli at San Siro, 1 Oct 2028. Archive 2027–28 preserved; 2025–27 unavailable.';
}
})();