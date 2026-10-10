/* CANON · NAPOLI 6–2 ATALANTA (Bergamo Calcio alias) SERIE A FT AFTER NOVEMBER 2028 ITALY FRIENDLIES.
   Exact calendar date, venue, starting XI, full substitutions and defensive-error attribution are NOT verified.
   18 Pio (João Neves assist), 27 Paz (Pio), 33 Mario Pašalić Atalanta,
   36 Beier (Pio), 44 Pio (Beier), HT 4–1,
   55 Beier (Pio), 61 Pio (Beier), 89 Pašalić Atalanta. FT 6–2.
   Pio 3G/3A, Beier 2G/2A; Pio participates in every Napoli goal. 
   Napoli league after: 12P 10W 1D 1L 31pts 23GF 5GA +18; 8 clean sheets.
   All Napoli club totals updated; Italy national stats and old rival standings remain separated and untouched. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const row=['Napoli','Atalanta','Serie A',6,2,'W',
 'November 2028 · after Italy Senegal and Turkey friendlies · exact date and venue unconfirmed',
 'Napoli 6–2 Atalanta FT: 18′ Pio Esposito (João Neves assist; powers past defender, top-corner finish), 27′ Nico Paz (Pio assist), 33′ Mario Pašalić (Atalanta), 36′ Maximilian Beier (Pio assist), 44′ Pio (Beier assist), HT 4–1, 55′ Beier (Pio assist), 61′ Pio (Beier assist), 89′ Pašalić (Atalanta). Pio 3 goals 3 assists, all 6 Napoli goals involved. Beier 2 goals 2 assists. Manager planned to rotate midfield/defence while keeping Pio/Beier on; actual subs and minutes unconfirmed.'];
for(const key of ['results','results2028']){
 D[key]=D[key]||[];
 const i=D[key].findIndex(r=>r[0]==='Napoli'&&['Atalanta','Bergamo Calcio'].includes(r[1])&&r[2]==='Serie A'&&String(r[6]).includes('2028'));
 if(i>=0)D[key][i]=row;else D[key].push(row);
}
D.atalantaMatch={played:true,competition:'Serie A',opponent:'Atalanta',gameAlias:'Bergamo Calcio',result:'Napoli 6–2 Atalanta',year:2028,month:'November',exactDate:null,venue:null,halftime:'4–1',goals:[
 {minute:18,team:'Napoli',scorer:'Pio Esposito',assist:'João Neves',description:'Powers past defender and finishes into top corner'},
 {minute:27,team:'Napoli',scorer:'Nico Paz',assist:'Pio Esposito'},
 {minute:33,team:'Atalanta',scorer:'Mario Pašalić',assist:null,assistStatus:'not provided'},
 {minute:36,team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito'},
 {minute:44,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier'},
 {minute:55,team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito'},
 {minute:61,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier'},
 {minute:89,team:'Atalanta',scorer:'Mario Pašalić',assist:null,assistStatus:'not provided'}
],confirmedContributions:{'Pio Esposito':{goals:3,assists:3},'Maximilian Beier':{goals:2,assists:2},'Nico Paz':{goals:1,assists:0},'João Neves':{goals:0,assists:1},'Mario Pašalić':{goals:2,assists:null}},
 managerInstruction:'Keep Pio Esposito and Maximilian Beier on, choose their runs; manager plans midfield and defensive substitutions after 55th minute.',
 substitutionsConfirmed:false,confirmedSubstitutions:[],note:'Player changes were discussed but not reported as completed; do not invent names, minutes, opponents or home/away designation.'};
D.latestResult=['NAP','6–2','ATA','SERIE A · FT · PIO ESPOSITO 18′ 44′ 61′ (3G/3A) · BEIER 36′ 55′ (2G/2A) · PAŠALIĆ 33′ 89′'];
D.seasonState={...(D.seasonState||{}),league:{...(D.seasonState?.league||{}),played:12,w:10,d:1,l:1,remaining:26,points:31,gf:23,ga:5,status:'2028–29 defending champions · 31 points from 12 Serie A fixtures · 8 clean sheets after Atalanta 6–2 · other clubs not freshly verified'}};
if(D.serieAStandings?.rows){
 const n=D.serieAStandings.rows.find(r=>r[0]==='Napoli');if(n){n[1]=12;n[2]=10;n[3]=1;n[4]=1;n[5]=23;n[6]=5;n[7]=18;n[8]=31;}
 D.serieAStandings.updated='Napoli updated to 31 points after Atalanta FT; EVERY OTHER club row is still the last 25 October screenshot and is NOT current';
 D.serieAStandings.source='Manager-confirmed Napoli 6–2 Atalanta; rival rows stale from 25 October screenshot, prior to later league fixtures';
}
D.titleRaceSnapshot2028={...(D.titleRaceSnapshot2028||{}),confirmed:false,date:'Napoli 31 points from 12 after Atalanta; other teams last verified 25 Oct on 9 games',napolipoints:31,napolirank:null,notes:'The old screenshot included Roma 21pts/9, Atalanta 20pts/9. Exact new records for rivals cannot be inferred from this Napoli game; do not fabricate an eleven-point Atalanta gap or ten-point Roma gap.'};
D.tableContext='Napoli AFTER Atalanta 6–2 FT: 12 Serie A matches 10W 1D 1L 31pts, 23GF 5GA +18, 8 clean sheets. Atalanta Pašalić scored twice (33′ and 89′); Napoli alone is refreshed. Other clubs from LAST 25 Oct photo only (Atalanta then 20pts/9, Roma then 21pts/9) — those point totals DO NOT represent current rivals. The league matchup adds an Atalanta loss and 6 goals conceded but other subsequent fixtures are unknown, so Atalanta totals remain unconfirmed. Napoli UCL 4P 7pts (8GF,8GA) unchanged.';
D.nextClubMatch={opponent:'Atalanta',gameAlias:'Bergamo Calcio',competition:'Serie A',played:true,result:'Napoli 6–2 Atalanta',date:null,venue:null,confirmedNext:false,details:'Completed fixture; next opponent, fixture date and venue are not yet manager-confirmed.'};
D.upcoming=[['Next opponent TBC','Fixture unconfirmed','Awaiting manager-confirmed schedule after Napoli 6–2 Atalanta']];
D.nextInternationalWindow={...(D.nextInternationalWindow||{}),stage:'Completed',details:'Italy 1–1 Senegal and Italy 2–1 Turkey already completed before Napoli 6–2 Atalanta. The next Napoli opponent is not yet confirmed.'};
D.ticker=[
 'FULL TIME · NAPOLI 6–2 ATALANTA · SCUDETTO STATEMENT',
 'PIO ESPOSITO HAT TRICK · 18′ 44′ 61′ · THREE ASSISTS AS WELL',
 'PIO CONTRIBUTES TO ALL SIX NAPOLI GOALS · 3G + 3A',
 'MAXIMILIAN BEIER · TWO GOALS + TWO ASSISTS',
 'NICO PAZ 27′ · ASSIST BY PIO · JOÃO NEVES ASSIST 18′',
 'MARIO PAŠALIĆ 33′, 89′ · ATALANTA BRACE',
 'NAPOLI · 31PTS IN 12 · 23GF 5GA · +18 · EIGHT CLEAN SHEETS',
 'PIO 10G/8A · BEIER 12G/5A · NICO PAZ 2G/3A · NAPOLI CLUB ONLY',
 'SALADINO KEEPS PIO AND BEIER ON · PIO HAT TRICK COMPLETED AT 61′',
 'NEXT OPPONENT NOT YET CONFIRMED · RIVALS’ CURRENT TABLE UNKNOWN'
];
D.whispers=[
 ['PIO SIX OF SIX','Pio scored at 18′, 44′ and 61′ and assisted Paz 27′ and Beier 36′/55′: three goals and three assists, all six Napoli goals.'],
 ['TWO-MAN ATTACK','Beier assisted Pio at 44′ and 61′; Pio assisted Beier at 36′ and 55′. Beier finishes with two goals and two assists.'],
 ['NICO AND JOÃO JOIN IN','Nico Paz scored at 27′ from Pio, João Neves supplied Pio at 18′. Six team goals, six credited assists.'],
 ['A 6–2 WARNING','Pašalić scored twice for Atalanta (33′ and 89′). League conceded rises from three to five; eight clean sheets still.'],
 ['KEEP THE STRIKERS ON','The manager rejected immediate Pio/Beier removal at 55′ and planned midfield and defensive rotation. Pio scored again at 61′; exact substitutions were never supplied.'],
 ['31 POINTS FROM 12','Napoli now stand 10W 1D 1L, 23GF 5GA, +18. No independent current Roma/Atalanta league table.'],
 ['CHRIS PAUL MOMENT','Pašalić scored at 89′ to cut the lead to four, inspiring the manager’s basketball meme. It was 6–2, not a close finish.'],
 ['EUROPE UNCHANGED','The Champions League remains 4 played, 7 points, eight scored and eight conceded after Arsenal 2–0 Napoli.'],
 ['NEXT DATE UNCONFIRMED','The next Napoli opponent, kickoff date and venue have not been reported. The Atalanta match is FINISHED, not upcoming.']
];
const season=D.statsBySeason?.['2028–29'];
if(Array.isArray(season)){
 const updates=[
  ['Pio Esposito',10,8,'2028–29 Napoli club all comps after Atalanta 6–2: previous 7G 5A + Atalanta 3G 3A; Italy friendly statistics excluded.'],
  ['Maximilian Beier',12,5,'2028–29 Napoli club all comps: previous 10G 3A + Atalanta 2G 2A (36′,55′ goals,44′,61′ assists).'],
  ['Nico Paz',2,3,'2028–29 Napoli club all comps: previous 1G 3A + Atalanta 27′ goal (Pio assist).'],
  ['João Neves',1,1,'2028–29 Napoli club all comps: first goal vs Galatasaray 41′ and verified assist to Pio 18′ vs Atalanta.']
 ];
 for(const v of updates){const i=season.findIndex(r=>r[0]===v[0]);if(i>=0)season[i]=v;else season.push(v);}
 D.stats=season;
 const names=new Set(Object.values(D.statsBySeason).flat().map(r=>r[0]));
 D.careerStats=[...names].map(name=>{let g=0,a=0,years=[];for(const [year,rows] of Object.entries(D.statsBySeason)){const r=rows.find(x=>x[0]===name);if(r){g+=Number(r[1])||0;a+=Number(r[2])||0;years.push(year);}}return [name,g,a,years.join(', ')];}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='Verified 2028–29 NAPOLI CLUB goal/assist totals after Atalanta 6–2. Pio 10G 8A, Beier 12G 5A, Paz 2G 3A, João Neves 1G 1A. Italy national friendlies separate. Prior seasons unchanged.';
}
})();
