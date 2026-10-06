(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.results=D.results||[];
 const row=['Napoli','Paris Saint-Germain','Champions League',2,3,'L','Pio Esposito 17′ pen, 90′ | João Neves 38′; Kvaratskhelia 54′, 110′','FINAL · after extra time · Old Trafford · Buongiorno assist on Pio 90′ equaliser'];
 const i=D.results.findIndex(r=>r[0]==='Napoli'&&r[1]==='Paris Saint-Germain'&&r[2]==='Champions League');
 if(i>=0)D.results[i]=row;else D.results.push(row);

 // The all-time Italian single-season ranking was conditional on winning Europe. Napoli lost the final, so it remains unpublished.
 D.articles=(D.articles||[]).filter(a=>a.id!=='greatest-napoli-season-ever-may-2028');

 const stories=[
  {id:'psg-final-report-may-2028',category:'Match Report',label:'CHAMPIONS LEAGUE FINAL',date:'May 27, 2028',headline:'SO CLOSE. PSG BREAK NAPOLI HEARTS IN EXTRA TIME.',dek:'Pio Esposito scored twice and dragged Napoli level in the 90th minute, but former Napoli star Kvaratskhelia struck again in the 110th to give PSG a 3–2 extra-time victory at Old Trafford.',commentContext:'psg-final-result',commentHeat:100,body:[
   `Napoli's greatest European run ended ten minutes from penalties.`,
   `Pio Esposito put Napoli ahead from the penalty spot in the 17th minute after being taken down clean through. João Neves equalised in the 38th, and Kvaratskhelia — the former Napoli star at the centre of the final's cruelest subplot — put PSG ahead in the 54th.`,
   `At 90 minutes, with Napoli seconds from defeat, Alessandro Buongiorno released Pio in alone. Pio finished. 2–2. His second goal of the final, his 29th of the season, and another rescue at the edge of elimination.`,
   `Meret caught PSG's final header of regulation and the match went to extra time. Both sides traded chances. PSG hit the post before the extra-time interval. Napoli survived it, but not the next blow.`,
   `In the 110th minute Kvaratskhelia scored his second of the night. Napoli could not find another equaliser. Paris Saint-Germain won 3–2 after extra time.`,
   `There is no treble and no first European Cup. The season instead closes with the Scudetto, the Coppa Italia, a 28–10–0 unbeaten league campaign and the first Champions League final in Napoli history after a knockout route through Inter, Real Madrid, Atlético Madrid and Barcelona.`,
   `The loss hurts precisely because Napoli were close enough to touch the ending they wanted. It does not erase what they built.`
  ],comments:[
   {user:'PioNation',lang:'it',text:'Due gol in una finale di Champions. Il secondo al 90°. Pio ci ha portati fino all’ultimo respiro.'},
   {user:'KvaraMemories',lang:'it',text:'Doveva essere proprio lui. Due volte. Fa malissimo.'},
   {user:'MeretUnion',lang:'en',text:'Meret kept us alive all through Europe. Ten minutes from penalties. I am sick.'},
   {user:'NapoliDoomer',lang:'it',text:'Il palo in supplementari mi aveva convinto che il destino fosse con noi. Non sto bene.'},
   {user:'SaladinoOutNow',lang:'it',text:'Due trofei, imbattuti in campionato, finale Champions persa. Il finale conta. Saladino OUT.',replies:[{user:'CurvaCalculator',lang:'en',text:'You made it through an undefeated Scudetto and a Champions League final without breaking character. Respect the commitment.'}]}
  ]},
  {id:'pio-two-goals-final-may-2028',category:'Feature',label:'Our Guy',date:'May 27, 2028',headline:'PIO SCORED TWICE IN THE FINAL. SOME NIGHTS HURT AND STILL MAKE LEGENDS.',dek:'Goal 28 from the spot. Goal 29 in the 90th minute. Napoli did not lift the European Cup, but Pio Esposito refused to let the final die quietly.',commentContext:'pio-final-two',commentHeat:97,body:[
   `Pio Esposito entered the final with 27 goals and 12 assists. He leaves Old Trafford with 29 goals, 12 assists and 41 goal contributions.`,
   `His first came from the penalty spot in the 17th minute. His second came when Napoli needed a miracle: Buongiorno's release in the 90th, Pio through, Pio finishing, Napoli alive.`,
   `Weeks earlier he had scored at 90+2 in Turin to preserve the Invincibles season. Against Atlético Madrid he had delivered the goal that broke a 134-minute deadlock. On the largest stage of all, he scored twice.`,
   `The European Cup went to PSG. The final still became another chapter in Pio's emergence as the face of this Napoli era.`
  ],comments:[
   {user:'PioShirtOwner',lang:'it',text:'29 + 12. Ma quel gol al 90° lo ricorderò per sempre.'},
   {user:'PioHaterForNoReason',lang:'en',text:'Two goals but zero Champions League trophies. Agenda survives.',replies:[{user:'PioNation',lang:'en',text:'You watched him score TWICE in the final and somehow logged on stronger. Incredible.'}]},
   {user:'BeierHive',lang:'en',text:'He gave us the chance to keep fighting. That matters.'}
  ]},
  {id:'scudetto-parade-saladino-stays-may-2028',category:'Club',label:'SCUDETTO PARADE',date:'May 2028',headline:'“I’LL BE BACK. CAUSE I’M NOT FUCKING LEAVING.”',dek:'At Napoli’s Scudetto parade, Stefan Saladino ends the Real Madrid saga himself: he is staying.',commentContext:'saladino-stays-parade',commentHeat:100,body:[
   `The Champions League final ended in heartbreak. Napoli came home with something else to celebrate: an unbeaten Scudetto and the Coppa Italia.`,
   `Then, during the Scudetto parade, Stefan Saladino finally answered the question he had refused to answer before the final.`,
   `“Hell of a year. I’m proud of every single fucking person in this room. We’ll be back. And guess what? I’ll be back. Cause I’m not fucking leaving.”`,
   `That is the announcement. After Real Madrid's approach and weeks of refusing to discuss his future while Napoli were still competing, Saladino has publicly committed himself to Napoli for next season.`,
   `The timing matters. This was not a statement issued after a victory in Europe. It came after Napoli fell 3–2 to PSG in extra time — at the celebration of a season that still delivered an undefeated league championship and the Coppa Italia.`,
   `The message to the squad and the city is simple: the project does not end with the loss at Old Trafford. Napoli are coming back for Europe, and their manager intends to lead them there.`
  ],comments:[
   {user:'CurvaB',lang:'it',text:'NON SE NE VA. IL MISTER RESTA. ADESSO TORNIAMO A PRENDERCI QUELLA COPPA.'},
   {user:'TorontoAzzurri',lang:'en',text:'Went from the Kawhi deflection before the final to “I’m not fucking leaving” at the parade. Cinema.'},
   {user:'Madridista',lang:'en',text:'Well. That answers that.'},
   {user:'PioNation',lang:'it',text:'“WE’LL BE BACK.” Pio 22 anni. Paz. Kayode. Bastoni. Buongiorno. Andiamo di nuovo.'},
   {user:'NapoliDoomer',lang:'it',text:'Sono felice. Sono terrorizzato. Voglio già la prossima Champions.'},
   {user:'SaladinoOutNow',lang:'it',text:'Ha annunciato che resta con una parolaccia alla parata. Nessuna professionalità. Saladino OUT.',replies:[{user:'CurvaCalculator',lang:'en',text:'This may be your most difficult day.'}]}
  ]}
 ];
 const ids=new Set(stories.map(a=>a.id));
 D.articles=stories.concat(D.articles.filter(a=>!ids.has(a.id)));
 D.hero={articleId:'scudetto-parade-saladino-stays-may-2028',strap:'SCUDETTO PARADE · SALADINO STAYS'};
 D.whispers=[
  ['HE STAYS','Saladino at the Scudetto parade: “I’ll be back. Cause I’m not fucking leaving.”'],
  ['FINAL HEARTBREAK','PSG 3–2 Napoli after extra time at Old Trafford. Kvaratskhelia scored the 110′ winner.'],
  ['PIO: 29 + 12','Two goals in the Champions League final. 41 goal contributions for the season.'],
  ['INVINCIBILI','28 wins · 10 draws · 0 defeats · 94 points.'],
  ['DOMESTIC DOUBLE','Serie A and Coppa Italia champions.'],
  ['EUROPE','First Champions League final in club history. Inter → Madrid → Atlético → Barcelona → PSG.']
 ];
 D.ticker=[
  'SALADINO STAYS · “I’LL BE BACK. CAUSE I’M NOT FUCKING LEAVING.”',
  'SCUDETTO PARADE · NAPOLI CELEBRATE AN UNBEATEN CHAMPIONSHIP',
  'PSG 3–2 NAPOLI AET · CHAMPIONS LEAGUE FINAL · OLD TRAFFORD',
  'PIO ESPOSITO · TWO GOALS IN THE FINAL · 29 GOALS · 12 ASSISTS',
  'INVINCIBILI · 28–10–0 · 94 POINTS',
  '2027–28 · SERIE A CHAMPIONS · COPPA ITALIA CHAMPIONS · UCL FINALISTS'
 ];
 D.seasonState={...(D.seasonState||{}),ucl:{stage:'RUNNERS-UP',status:'Champions League finalists · lost 3–2 to PSG after extra time at Old Trafford',final:'Paris Saint-Germain 3–2 Napoli · AET'}};
})();
