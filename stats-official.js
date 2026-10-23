(() => {
 const D=window.NAPOLI_DATA;if(!D)return;
 // Permanent Napoli statistical archive. A transfer changes current-squad status, never historical production.
 D.statsBySeason={
  '2029–30':[["Maximilian Beier",4,1,"Inter winner; Bologna brace; Porto goal. Assisted Pio vs Sassuolo; created Porto penalty (not official assist). · Confirmed match-event minimum; not a complete season stat export"],["Pio Esposito",2,2,"Sassuolo goal; Porto goal; assists vs Udinese and Bologna. Porto penalty missed. · Confirmed match-event minimum; not a complete season stat export"],["Mikey Moore",1,0,"Sassuolo goal 88′ · Confirmed match-event minimum; not a complete season stat export"],["João Neves",1,0,"Parma equaliser · Confirmed match-event minimum; not a complete season stat export"],["Scott McTominay",1,2,"Udinese goal; assisted Parma equaliser and Pio vs Porto · Confirmed match-event minimum; not a complete season stat export"],["Warren Zaïre-Emery",1,1,"Udinese winner and McTominay equaliser assist · Confirmed match-event minimum; not a complete season stat export"],["Lirim Hasa",0,1,"Assisted Beier vs Bologna · Confirmed match-event minimum; not a complete season stat export"],["Michael Olise",0,1,"Assisted Beier vs Porto · Confirmed match-event minimum; not a complete season stat export"],["Giacomo Raspadori",0,1,"Assisted Moore vs Sassuolo · Confirmed match-event minimum; not a complete season stat export"]],
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
 // Reconcile confirmed October contributions. These remain verified minimums, not full exports.
 const october=[
 ["Maximilian Beier",3,2,"Fiorentina: two assists to Paz; Juventus: hat-trick (26, 41, 55)."],
 ["Pio Esposito",0,5,"Fiorentina: no recorded contribution; Dinamo: three assists; Juventus: two assists; earlier documented assist totals preserved."],
 ["Nico Paz",2,0,"Fiorentina brace."],
 ["Giacomo Raspadori",2,0,"Fiorentina 90+1; Dinamo 87."],
 ["Scott McTominay",1,1,"Dinamo: goal and corner assist."],
 ["Mikey Moore",1,0,"Dinamo: goal."],
 ["Sam Beukema",1,0,"Dinamo: headed goal."],
 ["Warren Zaïre-Emery",0,1,"Juventus: assisted Beier third; Fiorentina: assisted Raspadori, also counted below."],
 ];
 const rows=D.statsBySeason['2029–30'];
 for(const [name,g,a,note] of october){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,""];rows.push(row);}row[1]+=g;row[2]+=a;row[3]=(row[3]?row[3]+" | ":"")+note;}
 const w=rows.find(x=>x[0]==="Warren Zaïre-Emery");if(w){w[2]+=1;w[3]+=" Fiorentina: assisted Raspadori.";}
 // Manager-confirmed results since the October snapshot. These are additive match-event minimums, not a full FC26 statistics export.
 const confirmed=[
 ["Maximilian Beier",3,0,"Juventus hat-trick: 26′, 41′, 55′."],
 ["Maximilian Beier",1,0,"Sampdoria equaliser 90+1′."],
 ["Maximilian Beier",2,0,"Monza brace 71′, 81′."],
 ["Pio Esposito",0,1,"Sampdoria: assisted Beier 90+1′."],
 ["Pio Esposito",2,0,"Raków: brace 15′ and 45+1′."],
 ["Giacomo Raspadori",0,2,"Raków: assisted both Esposito goals."],
 ["Scott McTominay",0,1,"Monza: assisted Beier 71′."],
 ["Warren Zaïre-Emery",0,1,"Monza: assisted Beier 81′."]
 ];
 for(const [name,g,a,note] of confirmed){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,""];rows.push(row);}row[1]+=g;row[2]+=a;row[3]=(row[3]?row[3]+" | ":"")+note;}
 // Historical 2028–29 archive is partial. Remove objectively false 'season not started' labels.
 for(const row of D.statsBySeason['2028–29']){if(/season not started|Current Napoli player · season not started/i.test(row[3]))row[3]="Historical archive incomplete — not a verified season total"; }
 D.statsSeasonOrder=['2029–30','2028–29','2027–28'];
 D.statsCurrentSeason='2029–30';
 D.statsUnavailableSeasons=['2025–26','2026–27'];
 const archiveNames=new Set(Object.values(D.statsBySeason).flat().map(r=>r[0]));
 D.careerStats=[...archiveNames].map(name=>{
   let goals=0,assists=0,seasons=[];
   Object.entries(D.statsBySeason).forEach(([season,rows])=>{const r=rows.find(x=>x[0]===name);if(r){goals+=Number(r[1])||0;assists+=Number(r[2])||0;seasons.push(season);}});
   return [name,goals,assists,seasons.join(', ')];
 }).sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
 D.stats=D.statsBySeason['2029–30'];
 D.statsScope='Confirmed event minimums, not complete EA FC 26 totals. 2028–29 historical archive is incomplete; Napoli Career totals reflect recorded events only, not complete career production';
})();