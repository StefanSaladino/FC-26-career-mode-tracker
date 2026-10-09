(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 // Permanent Napoli statistical archive. A transfer changes current-squad status, never historical production.
 D.statsBySeason={
  '2027–28':[
   ['Pio Esposito',29,12,'FC26 canonical final total · two goals vs PSG in UCL final · 90′ equaliser'],
   ['Maximilian Beier',25,11,'FC26 canonical final total · brace vs Torino'],
   ['Endrick',14,11,'FC26 canonical final total'],
   ['Federico Chiesa',9,4,'FC26 canonical final total'],
   ['Nico Paz',6,8,'FC26 canonical final total'],
   ['Alphonso Davies',5,5,'FC26 canonical final total'],
   ['Kevin De Bruyne',3,4,'FC26 canonical final total'],
   ['Scott McTominay',2,7,'FC26 canonical final total'],
   ['Alessandro Bastoni',1,0,'FC26 canonical final total'],
   ['Alessandro Buongiorno',0,1,'Assist on Pio 90′ equaliser vs PSG'],
   ['Sam Beukema',1,0,'FC26 canonical final total'],
   ['Anton Stach',0,1,'FC26 canonical final total'],
   ['Lutsharel Geertruida',0,1,'FC26 canonical final total'],
   ['Noa Lang',0,1,'Historical 2027–28 contribution · sold summer 2028'],
   ['Mikey Moore',0,1,'FC26 canonical final total'],
   ['Michael Kayode',0,1,'FC26 canonical final total'],
   ['Billy Gilmour',0,1,'Historical 2027–28 contribution · sold summer 2028']
  ],
  '2028–29':[
   ['Alex Meret',0,0,'2028–29 · clean sheet at Lecce'],
   ['Alphonso Davies',1,0,'Goal vs Inter'],
   ['Marc Cucurella',0,0,'Current Napoli player · season not started'],
   ['Alessandro Bastoni',0,0,'Current Napoli player · season not started'],
   ['Lutsharel Geertruida',0,0,'Current Napoli player · season not started'],
   ['Alessandro Buongiorno',0,0,'Current Napoli player · season not started'],
   ['Sam Beukema',0,0,'Current Napoli player · season not started'],
   ['Rafa Marín',0,0,'Current Napoli player · season not started'],
   ['Giovanni Di Lorenzo',0,0,'Current Napoli player · season not started'],
   ['Michael Kayode',0,0,'Current Napoli player · season not started'],
   ['Kevin De Bruyne',1,1,'Assist at Lecce · goal 40′ at Venezia'],
   ['Scott McTominay',0,1,'Assist on Beier opener vs Lecce'],
   ['Anton Stach',0,0,'Current Napoli player · season not started'],
   ['Nico Paz',0,0,'Half-time substitute vs Inter'],
   ['João Neves',0,0,'Started at Lecce in advanced midfield'],
   ['Mikey Moore',0,1,'Assisted De Bruyne at Venezia'],
   ['Rao',0,0,'Current Napoli player · season not started'],
   ['Maximilian Beier',2,1,'Two goals vs Lecce, assist vs Inter'],
   ['Pio Esposito',1,1,'Goal and assist vs Inter'],
   ['Michael Olise',0,0,'Signed · appearance not yet confirmed'],
   ['Riccardo Calafiori',0,0,'Debut vs Inter']
  ]
 };
 D.statsSeasonOrder=['2028–29','2027–28'];
 D.statsCurrentSeason='2028–29';
 D.statsUnavailableSeasons=['2025–26','2026–27'];
 const archiveNames=new Set(Object.values(D.statsBySeason).flat().map(r=>r[0]));
 D.careerStats=[...archiveNames].map(name=>{
   let goals=0,assists=0,seasons=[];
   Object.entries(D.statsBySeason).forEach(([season,rows])=>{const r=rows.find(x=>x[0]===name);if(r){goals+=Number(r[1])||0;assists+=Number(r[2])||0;seasons.push(season);}});
   return [name,goals,assists,seasons.join(', ')];
 }).sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.stats=D.statsBySeason['2028–29'];
 D.statsScope='Permanent Napoli archive · 2027–28 verified · 2028–29 opening match recorded · 2025–26 and 2026–27 remain unavailable until canonical data is recovered';
})();