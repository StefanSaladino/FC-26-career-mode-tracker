/* Manager confirmed: Napoli 3–2 Slavia Prague, 17 October 2028 (UCL). Beier hat-trick (36,64,71) assisted by Pio on all 3. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const record=['Napoli','Slavia Prague','Champions League',3,2,'W','17 Oct 2028 · Home','Chytil 17′ (Slavia), Moses 22′ (Slavia); Beier 36′, 64′, 71′ (all assisted by Pio Esposito). Slavia hit the post in late scramble, time/shooter unconfirmed. FT Napoli 3–2 Slavia Prague. Heavy rotation intended; XI and changes not confirmed.'];
for(const key of ['results','results2028']){D[key]=D[key]||[];
 const i=D[key].findIndex(r=>r[0]==='Napoli'&&r[1]==='Slavia Prague'&&r[2]==='Champions League'&&String(r[6]).includes('17 Oct 2028'));
 if(i>=0)D[key][i]=record;else D[key].push(record);}
const f=D.fixtures2028?.find(f=>f.team==='Napoli'&&f.opponent==='Slavia Prague'&&f.date==='2028-10-17');
if(f){f.venue='Home';f.played=true;f.result='Napoli 3–2 Slavia Prague';}
if(Array.isArray(D.fixtures2028))D.upcoming=D.fixtures2028.filter(f=>f.team==='Napoli'&&!f.played).map(f=>[f.opponent,f.competition,f.date+' · '+f.venue+(f.verified?'':' · Opponent unconfirmed')]);
D.latestResult=['NAP','3–2','SLA','17 OCT · UCL · FT · Beier hat-trick 36′, 64′, 71′ (Pio assists ×3)'];
D.seasonState={...(D.seasonState||{}),ucl:{...(D.seasonState?.ucl||{}),stage:'League phase',played:3,w:2,d:1,l:0,points:7,gf:8,ga:6,status:'Seven points in three UCL matches, eight scored and six conceded; home wins over Galatasaray and Slavia, draw against Leverkusen.'}};
D.ticker=[
 'FT · NAPOLI 3–2 SLAVIA PRAGUE · FROM 0–2 TO 3–2',
 'BEIER HAT-TRICK · 36′ 64′ 71′',
 'PIO ESPOSITO · THREE ASSISTS IN ONE MATCH',
 'SLAVIA · CHYTIL 17′ AND MOSES 22′',
 'LATE SLAVIA SHOT HITS THE POST · NAPOLI SURVIVE',
 'UCL · 2W 1D · SEVEN POINTS · EIGHT FOR / SIX AGAINST',
 'DOUBTERS QUESTION HEAVY ROTATION AFTER ROMA DEFEAT',
 'NEXT · EMPOLI HOME · 21 OCT'];
D.whispers=[
 ['A HAT-TRICK OF ANSWERS','Beier hits three against Slavia in a 3–2 comeback win. Pio assists every single goal.'],
 ['TWO DOWN INSIDE 22 MINUTES','Chytil 17′ and Moses 22′ put Slavia Prague 2–0 up. Hard rotation is now under scrutiny.'],
 ['THE WOODWORK WARNING','Slavia hit the post after a late scramble and nearly erased Napoli’s comeback.'],
 ['DOUBTERS HAVE A POINT','Napoli have six goals conceded in three Champions League games, including five in the past two.'],
 ['SEVEN POINTS IN EUROPE','Napoli remain unbeaten in the UCL league phase after three fixtures, despite two turbulent home matches.'],
 ['NEXT · EMPOLI','Napoli host Empoli 21 October; the next tough league visit is Juventus away on 25 October.']
];
const rows=D.statsBySeason?.['2028–29'];
if(Array.isArray(rows)){
 const updates=[
  ['Maximilian Beier',9,2,'2028–29 Napoli club totals: Serie A 4G/1A, Champions League 5G/1A. Slavia 36′, 64′, 71′ hat-trick, Pio assisted all three.'],
  ['Pio Esposito',4,4,'2028–29 Napoli club totals: Serie A 3G/1A, Champions League 1G/3A. Three assists to Beier in Slavia comeback; Italy international-friendly goals/assists separate.'],
  ['Scott McTominay',0,5,'2028–29 Napoli club totals unchanged: Serie A four assists, UCL one vs Leverkusen.']
 ];
 for(const row of updates){const i=rows.findIndex(x=>x[0]===row[0]);if(i<0)rows.push(row);else rows[i]=row;}
 D.stats=rows;
 const names=new Set(Object.values(D.statsBySeason).flat().map(r=>r[0]));
 D.careerStats=[...names].map(name=>{let g=0,a=0,years=[];for(const [year,season] of Object.entries(D.statsBySeason)){const r=season.find(x=>x[0]===name);if(r){g+=Number(r[1])||0;a+=Number(r[2])||0;years.push(year);}}return [name,g,a,years.join(', ')];}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='2028–29 official club contributions through Napoli 3–2 Slavia Prague, 17 October 2028. International friendlies excluded; historical Napoli seasons preserved.';
}
// Serie A Napoli record remains 5W 1D 1L, 16 pts, 9 GF and 3 GA; Italy friendly results remain independent.
})();