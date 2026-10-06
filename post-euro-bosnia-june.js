(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.results=D.results||[];
 const row=['Italy','Bosnia','EURO 2028',2,0,'W','Pio Esposito 19′ pen; Nicolò Barella 75′ pen','June 16, 2028 · EURO group stage opener · clean sheet'];
 const i=D.results.findIndex(r=>r[0]==='Italy'&&r[1]==='Bosnia'&&r[2]==='EURO 2028');
 if(i>=0)D.results[i]=row;else D.results.push(row);

 const stories=[
  {id:'italy-bosnia-euro-june16-2028',category:'Italy',label:'EURO 2028 · MATCH REPORT',date:'June 16, 2028',headline:'NO HANGOVER. ITALY OPEN THE EUROS WITH A CLEAN 2–0.',dek:'Pio Esposito scored from the spot in the 19th minute, Nicolò Barella took the second penalty in the 75th, and Italy opened EURO 2028 with three points and a clean sheet.',commentContext:'italy-bosnia-euro',commentHeat:92,body:[
   `Italy's tournament began without drama: two goals, a clean sheet and three points.`,
   `Pio Esposito opened the scoring from the penalty spot in the 19th minute, carrying his extraordinary club-season scoring form directly into EURO 2028. Nicolò Barella then converted another penalty in the 75th to make it 2–0.`,
   `The identity of the second taker was notable. Saladino has made clear that a tournament cannot be built around keeping one player hot. Italy need confidence and responsibility spread across the squad. Pio took the first; Barella took the second.`,
   `Bosnia never found a goal back. Italy leave the opener 1–0–0 with two goals scored, none conceded and an immediate platform for the group.`,
   `There is little recovery time. Norway await on June 20.`
  ],comments:[
   {user:'AzzurriSempre',lang:'it',text:'Tre punti, porta inviolata, nessun dramma. Iniziare così va benissimo.'},
   {user:'PioNation',lang:'it',text:'Finale Champions: due gol. Prima partita agli Europei: gol. OUR GUY NON SI FERMA.'},
   {user:'TacticalNonno',lang:'it',text:'Bene anche Barella sul secondo rigore. In un torneo servono tanti giocatori dentro mentalmente.'},
   {user:'NapoliDoomer',lang:'en',text:'I have transferred my anxiety from Napoli to Italy with zero recovery days.'}
  ]},
  {id:'italy-share-the-load-euro-june-2028',category:'Italy',label:'TOURNAMENT NOTE',date:'June 16, 2028',headline:'PIO SCORES. BARELLA TAKES THE NEXT ONE. THAT IS NOT AN ACCIDENT.',dek:'Italy’s opening win offered a small glimpse of Saladino’s tournament philosophy: build form across the squad, not around one protagonist.',commentContext:'italy-euro-rotation',commentHeat:68,body:[
   `Pio Esposito had already scored once from the spot when Italy were awarded another penalty against Bosnia. The second did not go to Pio. Nicolò Barella took it and scored.`,
   `The logic is broader than penalties. Saladino wants multiple players in form during the tournament. Italy cannot ask one forward to carry every decisive action across an entire European Championship.`,
   `That philosophy should shape the coming matches: opportunities distributed where possible, responsibility shared and a squad kept emotionally involved rather than a fixed group asked to carry every minute.`,
   `The first return was ideal. Pio has his tournament goal. Barella has his. Italy have their first win.`
  ],comments:[
   {user:'RotationPolice',lang:'en',text:'Tournament football. Use the squad before you NEED the squad.'},
   {user:'PioNation',lang:'en',text:'Golden Boot agenda paused for squad harmony. I will allow it.'},
   {user:'AzzurriSempre',lang:'it',text:'Pio caldo, Barella coinvolto, vittoria. Perfetto.'}
  ]},
  {id:'italy-norway-preview-june20-2028',category:'Italy',label:'NEXT · JUNE 20',date:'June 17, 2028',headline:'NORWAY NEXT. ITALY HAVE THEIR START — NOW BUILD ON IT.',dek:'The Azzurri move from a 2–0 opening win over Bosnia to their second EURO 2028 group match against Norway on June 20.',commentContext:'italy-norway-euro-preview',commentHeat:75,body:[
   `Three points are on the board. The tournament immediately moves on.`,
   `Italy face Norway on June 20 in their second EURO 2028 group match after opening with a 2–0 victory over Bosnia.`,
   `The Bosnia match established the baseline: Pio Esposito and Nicolò Barella on the scoresheet, a clean sheet behind them and no need for a frantic finish.`,
   `Now comes the next selection decision. Saladino wants multiple players in rhythm during the tournament, and the short turnaround gives him an early opportunity to manage minutes without surrendering momentum.`,
   `No assumptions are being made about Norway's XI or Italy's selection before the teams are known. The only certainty is the date and the stakes: June 20, match two.`
  ],comments:[
   {user:'TacticalNonno',lang:'it',text:'Tre punti presi. Adesso niente calcoli strani: battere la Norvegia e prendere il controllo del gruppo.'},
   {user:'AzzurriSempre',lang:'en',text:'Good start. Reset. Norway.'},
   {user:'NapoliDoomer',lang:'it',text:'Quattro giorni tra le partite. Fantastico. Non avevo bisogno di dormire comunque.'}
  ]}
 ];
 const ids=new Set(stories.map(a=>a.id));
 D.articles=stories.concat((D.articles||[]).filter(a=>!ids.has(a.id)));
 D.hero={articleId:'italy-bosnia-euro-june16-2028',strap:'EURO 2028 · ITALY 2–0 BOSNIA'};
 D.whispers=[
  ['EURO OPENER','Italy 2–0 Bosnia · Pio 19′ pen · Barella 75′ pen.'],
  ['PIO AGAIN','Two goals in the Champions League final. Now a goal in Italy’s EURO opener.'],
  ['SHARE THE LOAD','Barella took Italy’s second penalty as Saladino looks to build form throughout the squad.'],
  ['NEXT: NORWAY','June 20 · EURO 2028 group stage · Italy’s second match.'],
  ...(D.whispers||[]).filter(w=>!['EURO OPENER','PIO AGAIN','SHARE THE LOAD','NEXT: NORWAY'].includes(w?.[0]))
 ].slice(0,8);
 D.ticker=[
  'EURO 2028 · ITALY 2–0 BOSNIA · JUNE 16',
  'PIO ESPOSITO 19′ PEN · BARELLA 75′ PEN',
  'ITALY · 1–0–0 · 2 GF · 0 GA',
  'NEXT · ITALY vs NORWAY · JUNE 20',
  'SALADINO · MULTIPLE PLAYERS · MULTIPLE THREATS'
 ];
})();