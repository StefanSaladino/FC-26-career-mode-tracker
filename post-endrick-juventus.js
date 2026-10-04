(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const story={
  id:'endrick-juventus-188m-rejected-2028',category:'Transfer News',label:'Deadline Day',date:'February 2028 · Deadline Day',tone:'transfer',
  headline:'Hands Off: Napoli Reject Matching $188M Bids for Endrick',
  dek:'Juventus came first. RB Leipzig followed with the same extraordinary $188 million offer. Napoli rejected both: Endrick is staying for the title race and Europe.',
  body:[
   'Napoli have now rejected two extraordinary $188 million deadline-day offers for Endrick, turning away Juventus and then RB Leipzig in rapid succession.',
   'Juventus made the first approach. Napoli immediately refused to hand a major young attacker to a domestic rival while sitting five points clear at the top of Serie A and preparing for the Champions League knockout playoffs.',
   'Then came RB Leipzig. The German club matched Juventus’ $188 million offer, removing the domestic-rival issue but not changing Napoli’s answer. The window is closing, the decisive phase of the season is beginning, and Napoli have no intention of dismantling their attack now.',
   'Endrick has recorded seven goals and six assists in Napoli’s tracked season production and remains an important part of an attack that also includes Pio Esposito and Maximilian Beier.',
   'The second rejection changes the meaning of the story. This is no longer simply Napoli refusing Juventus. Napoli have now been offered $188 million by two different clubs and have declined both approaches. The club has effectively placed sporting continuity above an enormous immediate return.',
   'Endrick stays. Napoli are choosing the Scudetto race, the Champions League campaign and their existing attacking depth over a deadline-day windfall.'
  ],
  commentHeat:10,reaction:'transfer',visitorClub:'Juventus / RB Leipzig',
  comments:[
   ['PartenopeiProfessor','Leipzig matching the number proves this was not just about refusing Juventus. Napoli simply are not selling Endrick now.'],
   ['CurvaNordNapoli','Prima la Juve, poi il Lipsia. Centottantotto milioni due volte. La risposta è sempre no.'],
   ['ScudettoWatch','The second rejection is the real statement. No domestic-rival excuse this time — Napoli have chosen the squad over the money.'],
   ['NoTacticsJustVibes','RB Leipzig saw Juve get rejected for 188m and said maybe he means us 😭'],
   ['AzzurroSempre','Due offerte folli, due no. Adesso basta: Endrick resta a Napoli.'],
   ['NapoliSinceBirth','If $188m from Leipzig does not move them either, the message is pretty clear. Hands off until summer at minimum.'],
   ['TransferDeskItalia','Two clubs. Same valuation. Same answer. Napoli have effectively taken Endrick off the deadline-day market.'],
   ['VesuvioVoice','We said kick rocks in Italian and German. Go win trophies.'],
   ['MercatoMadness','At this point another club can add another zero and Napoli might still just close the fax machine.']
  ]
 };
 D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
 D.hero={...(D.hero||{}),articleId:story.id,strap:'DEADLINE DAY · TWO $188M BIDS REJECTED'};
 D.ticker=['BREAKING · NAPOLI REJECT RB LEIPZIG $188M BID FOR ENDRICK','JUVENTUS $188M REJECTED · LEIPZIG $188M REJECTED','HANDS OFF · ENDRICK STAYS AT NAPOLI',...(D.ticker||[]).filter(x=>!String(x).includes('188M')&&!String(x).includes('ENDRICK STAYS'))].slice(0,8);
})();