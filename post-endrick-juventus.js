(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const story={
  id:'endrick-juventus-188m-rejected-2028',category:'Transfer News',label:'Deadline Day',date:'February 2028 · Deadline Day',tone:'transfer',
  headline:'Napoli Reject Juventus’ $188M Deadline-Day Bid for Endrick',
  dek:'Juventus launch an extraordinary late move for Endrick, but Napoli refuse to strengthen a domestic rival with the Scudetto race and Champions League knockouts approaching.',
  body:[
   'Napoli have rejected a stunning $188 million deadline-day offer from Juventus for Endrick, shutting down one of the biggest approaches of the winter window.',
   'The size of the bid forced attention across Italian football, but the circumstances made Napoli’s position clear. The club are five points clear of Inter, unbeaten in Serie A and preparing for a Champions League knockout playoff against Inter. Selling a major young attacker at the eleventh hour — particularly to another Serie A power — was judged incompatible with the club’s sporting ambitions.',
   'Endrick has recorded seven goals and six assists in Napoli’s tracked season production and remains an important part of an attack that also includes Pio Esposito and Maximilian Beier.',
   'The identity of the bidder mattered as much as the number. A $188 million approach from abroad might have created a different discussion, particularly with time to plan a replacement. Juventus arriving at the deadline offered Napoli enormous money but almost no time to reshape the squad while simultaneously strengthening a domestic rival.',
   'Napoli’s answer was rejection. Endrick stays for the title race and for Europe.',
   'The decision also sends a message about the club’s priorities. Napoli are not treating their position at the top of Serie A as an opportunity to cash out. With the season entering its decisive phase, sporting continuity has won over a massive transfer fee.'
  ],
  commentHeat:9,reaction:'transfer',visitorClub:'Juventus',
  comments:[
   ['PartenopeiProfessor','$188m is absurd money, but selling him to Juventus on deadline day would be even more absurd. Correct decision.'],
   ['CurvaNordNapoli','Alla Juve? Centottantotto milioni e comunque no. Endrick resta a Napoli.'],
   ['ScudettoWatch','This is a sporting decision, not a valuation decision. Napoli cannot strengthen a domestic rival at this point of the season.'],
   ['NoTacticsJustVibes','Juve really put 188 million on the table and Napoli hit DECLINE 😭'],
   ['AzzurroSempre','Cinque punti avanti, Champions da giocare, mercato quasi chiuso. Non si vende.'],
   ['NapoliSinceBirth','Come back in the summer if you want to talk numbers. Deadline day to Juventus? Absolutely not.'],
   ['TransferDeskItalia','The fee is the headline. The rejection is the statement. Napoli are prioritising the season in front of them.'],
   ['VesuvioVoice','Keep the player. Keep the depth. Go chase trophies.']
  ]
 };
 D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
 D.hero={...(D.hero||{}),articleId:story.id,strap:'DEADLINE DAY · $188M JUVENTUS BID REJECTED'};
 D.ticker=['BREAKING · NAPOLI REJECT $188M JUVENTUS BID FOR ENDRICK','ENDRICK STAYS · DEADLINE-DAY APPROACH REFUSED','NAPOLI FIVE POINTS CLEAR · NO SALE TO DOMESTIC RIVAL',...(D.ticker||[]).filter(x=>!String(x).includes('188M')&&!String(x).includes('ENDRICK STAYS'))].slice(0,8);
})();