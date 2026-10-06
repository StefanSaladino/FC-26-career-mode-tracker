(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.results=D.results||[];
 const row=['Italy','Norway','EURO 2028',1,0,'W','Pio Esposito 45′ (Tonali)','June 20, 2028 · EURO group stage · clean sheet'];
 const i=D.results.findIndex(r=>r[0]==='Italy'&&r[1]==='Norway'&&r[2]==='EURO 2028');
 if(i>=0)D.results[i]=row;else D.results.push(row);
 const stories=[
  {id:'italy-norway-euro-june20-2028',category:'Italy',label:'EURO 2028 · MATCH REPORT',date:'June 20, 2028',headline:'HAALAND STYMIED. PIO STRIKES. ITALY STILL HAVEN’T CONCEDED.',dek:'Tonali’s free kick found Pio Esposito on 45 minutes and Italy made the goal stand, beating Norway 1–0 for a second straight win and clean sheet.',commentContext:'italy-norway-euro',commentHeat:96,body:[
   'Italy have played twice at EURO 2028. They have won twice. They have conceded zero.',
   'The decisive moment against Norway arrived on 45 minutes. Sandro Tonali whipped in a free kick and Pio Esposito finished it, sending Italy into halftime 1–0 ahead.',
   'That was enough. Norway had Erling Haaland, but not a goal. Italy’s defensive work and Gianluigi Donnarumma kept one of world football’s most dangerous strikers off the scoresheet and preserved a second consecutive clean sheet.',
   'Pio, meanwhile, has now scored in both matches of the tournament: a penalty against Bosnia and a finish from Tonali’s delivery against Norway. The Napoli striker’s extraordinary run has followed him straight into the national team.',
   'The larger picture is exactly what Saladino wanted. Pio is producing, Barella has already scored, Tonali now has an assist, Donnarumma is making saves and Italy’s defensive unit has yet to crack.',
   'Six points. Three goals scored. None conceded. Italy’s EURO campaign is beginning to acquire an identity.'
  ],comments:[
   {user:'AzzurriSempre',lang:'it',text:'HAALAND A ZERO. DUE PARTITE, DUE VITTORIE, ZERO GOL SUBITI. AVANTI.'},
   {user:'PioNation',lang:'en',text:'Two EURO matches. Two Pio goals. I have no further questions.'},
   {user:'TacticalNonno',lang:'it',text:'Tonali sulla punizione, Pio ad attaccare l’area. Gol da squadra vera.'},
   {user:'MeretUnion',lang:'en',text:'I love Meret with my entire heart but Donnarumma is doing Donnarumma things.'},
   {user:'NapoliDoomer',lang:'en',text:'Haaland did not score and somehow I was still terrified until the whistle.'}
  ]},
  {id:'italy-defensive-wall-euro-june20-2028',category:'Italy',label:'AZZURRI ANALYSIS',date:'June 20, 2028',headline:'180 MINUTES. ZERO CONCEDED. ITALY’S WALL IS BECOMING THE STORY.',dek:'Bosnia could not score. Neither could Haaland and Norway. Donnarumma and the Italian defensive unit have opened EURO 2028 with back-to-back shutouts.',commentContext:'italy-defense-euro',commentHeat:84,body:[
   'Tournament football rarely gives medals for aesthetics. It rewards teams that survive difficult minutes without losing control of the scoreline.',
   'Italy have now done that for 180 minutes. Bosnia were beaten 2–0. Norway, with Erling Haaland leading the threat, were beaten 1–0. Neither opponent scored.',
   'Gianluigi Donnarumma made several important saves against Norway and reminded everyone what his presence can mean in a short tournament. When Italy’s structure is breached, there is still an enormous final obstacle behind it.',
   'For Saladino, whose Napoli side leaned heavily on Alex Meret during its run to the Champions League final, elite goalkeeping is familiar currency. With Italy, Donnarumma is providing another version of the same security.',
   'The sample is only two matches. The warning signs will come eventually. But six points without conceding is not a theory. It is the foundation Italy have already built.'
  ],comments:[
   {user:'TacticalNonno',lang:'it',text:'Le grandi squadre nei tornei imparano prima a non perdere. Questa Italia sembra capirlo.'},
   {user:'AzzurriSempre',lang:'en',text:'Donnarumma behind an Italian defence in tournament football. Good luck.'},
   {user:'NapoliDoomer',lang:'it',text:'Zero subiti significa solo che il primo farà ancora più male. Sì, ho un problema.'}
  ]}
 ];
 const ids=new Set(stories.map(a=>a.id));
 D.articles=stories.concat((D.articles||[]).filter(a=>!ids.has(a.id)));
 D.hero={articleId:'italy-norway-euro-june20-2028',strap:'EURO 2028 · ITALY 1–0 NORWAY'};
 D.whispers=[
   ['HAALAND STYMIED','Norway’s star striker held scoreless as Italy record a second straight clean sheet.'],
   ['PIO: TWO IN TWO','Pio Esposito has scored in both EURO 2028 matches.'],
   ['TONALI DELIVERY','Tonali’s 45′ free kick supplied the winning goal against Norway.'],
   ['THE WALL','Italy · 2 wins · 3 GF · 0 GA through 180 minutes.'],
   ...(D.whispers||[]).filter(w=>!['HAALAND STYMIED','PIO: TWO IN TWO','TONALI DELIVERY','THE WALL','EURO OPENER','PIO AGAIN','SHARE THE LOAD','NEXT: NORWAY'].includes(w?.[0]))
 ].slice(0,8);
 D.ticker=['EURO 2028 · ITALY 1–0 NORWAY · JUNE 20','PIO ESPOSITO 45′ · ASSIST TONALI','HAALAND STYMIED · NORWAY HELD SCORELESS','ITALY · 2–0–0 · 6 POINTS · 0 GOALS CONCEDED','PIO · TWO EURO MATCHES · TWO GOALS'];
})();