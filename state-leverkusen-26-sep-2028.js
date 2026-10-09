/* Official 2028–29 live state, 26 Sep: Napoli 3–3 Bayer Leverkusen. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const row=['Napoli','Bayer Leverkusen','Champions League',3,3,'D','26 Sep 2028 · Home','Palacios headed opener (minute unconfirmed), Mateta 53′, Leverkusen third headed goal (scorer/minute unconfirmed); Beier 39′ (Paz), Pio 86′ (Beier), Beier 90+2′ (McTominay). HT 1–1'];
for(const key of ['results','results2028']){D[key]=D[key]||[];const i=D[key].findIndex(x=>x[0]==='Napoli'&&x[1]==='Bayer Leverkusen'&&x[2]==='Champions League'&&String(x[6]).includes('26 Sep 2028'));if(i>=0)D[key][i]=row;else D[key].push(row);}
if(Array.isArray(D.fixtures2028)){const f=D.fixtures2028.find(x=>x.team==='Napoli'&&x.opponent==='Bayer Leverkusen'&&x.date==='2028-09-26');if(f){f.played=true;f.result='Napoli 3–3 Bayer Leverkusen';}D.upcoming=D.fixtures2028.filter(f=>f.team==='Napoli'&&!f.played).map(f=>[f.opponent,f.competition,f.date+' · '+f.venue+(f.verified?'':' · Opponent unconfirmed')]);}
D.latestResult=['NAP','3–3','LEV','26 SEP · UCL · FT · Beier 39′, 90+2′ · Pio 86′'];
D.seasonState={...(D.seasonState||{}),ucl:{stage:'League phase',played:2,w:1,d:1,l:0,points:4,gf:5,ga:4,status:'Four points after two Champions League fixtures'}};
D.ticker=['FT · NAPOLI 3–3 BAYER LEVERKUSEN','BEIER BRACE · 39′ AND 90+2′','PIO 86′ · BEIER ASSIST','FROM 3–1 TO 3–3 · UCL COMEBACK','UCL · 1W 1D · 4 POINTS','MERET ERROR · DEFENSIVE QUESTIONS','NEXT · MILAN HOME · 1 OCT'];
D.whispers=[['BEIER AT THE DEATH','A second Beier goal at 90+2 rescues a 3–3 draw against Leverkusen.'],['PIO CHANGES THE NIGHT','Beier assists Pio Esposito in the 86th minute to spark Napoli’s comeback.'],['THREE AT HOME','Leverkusen score three, including a Palacios header after Meret’s poor punch.'],['FOUR POINTS IN EUROPE','Napoli have one win and one draw from two UCL fixtures.'],['NEXT · MILAN','Napoli host Milan on 1 October in Serie A.']];
const season=D.statsBySeason?.['2028–29'];if(Array.isArray(season)){const changes=[
['Maximilian Beier',5,2,'3 Serie A goals, 1 league assist; brace and assist vs Leverkusen UCL'],
['Pio Esposito',3,1,'2 Serie A goals and 1 league assist; Leverkusen UCL goal at 86′'],
['Nico Paz',0,1,'Assisted Beier 39′ vs Leverkusen'],
['Scott McTominay',0,3,'2 league assists; assisted Beier at 90+2′ vs Leverkusen']
];for(const r of changes){const i=season.findIndex(x=>x[0]===r[0]);if(i>=0)season[i]=r;else season.push(r);}D.stats=season;
const names=new Set(Object.values(D.statsBySeason).flat().map(x=>x[0]));D.careerStats=[...names].map(name=>{let goals=0,assists=0,years=[];Object.entries(D.statsBySeason).forEach(([year,rows])=>{const r=rows.find(x=>x[0]===name);if(r){goals+=Number(r[1])||0;assists+=Number(r[2])||0;years.push(year);}});return [name,goals,assists,years.join(', ')];}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));D.statsScope='2028–29 official contributions through Napoli 3–3 Leverkusen · 26 September 2028';}
})();