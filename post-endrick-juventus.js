(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const story={
  id:'endrick-juventus-188m-rejected-2028',category:'Transfer News',label:'Window Closed',date:'February 2028 · Transfer Window Closed',tone:'transfer',
  headline:'Napoli Slam the Door: Stars Stay as Deadline Window Closes',
  dek:'Endrick stays. Beier stays. Chiesa stays. Napoli reject a barrage of enormous late bids and finish the window without a senior departure, while three promoted prospects leave on development loans.',
  body:[
   'Napoli have closed the transfer window with the senior squad intact, refusing a remarkable series of deadline-day approaches as the club prepares for a Scudetto race and Champions League knockout campaign.',
   'Endrick attracted three enormous bids. Juventus offered $188 million, RB Leipzig matched that $188 million figure, and Bergamo Calcio then raised the stakes to $193.4 million. Napoli rejected all three approaches.',
   'Juventus also returned with a separate $188.9 million offer for Maximilian Beier. That proposal was rejected as well. Napoli were unwilling to strengthen a domestic rival and equally unwilling to lose a major attacking piece with the window closing.',
   'Federico Chiesa also remains a Napoli player. Despite his desire to leave and Fiorentina’s earlier $36.2 million approach, no senior transfer was completed before the deadline.',
   'The only outgoing business involved development loans. Goalkeeper O. Burnett left on a two-year loan, while centre-back G. Ricci and right midfielder C. Brun secured six-month loans after their academy promotions.',
   'The final message from the window is unmistakable: Napoli chose continuity. With a five-point Serie A lead, an unbeaten domestic record and a Champions League knockout playoff against Inter ahead, the club resisted extraordinary money rather than break apart the squad for the decisive months of the season.'
  ],
  commentHeat:11,reaction:'transfer',visitorClub:'Deadline Day',
  comments:[
   ['PartenopeiProfessor','Three bids for Endrick, another monster bid for Beier, and nobody leaves. Napoli chose the season over the balance sheet.'],
   ['CurvaNordNapoli','Mercato chiuso. Endrick resta. Beier resta. Chiesa resta. Adesso andiamo a vincere.'],
   ['ScudettoWatch','The important part is not just the money rejected. It is that Napoli enter February with the senior squad intact.'],
   ['NoTacticsJustVibes','Napoli spent deadline day rejecting GDP-sized offers and then closed the fax machine 😭'],
   ['AzzurroSempre','La società ha mandato un messaggio chiarissimo: questa squadra non si smonta a febbraio.'],
   ['NapoliSinceBirth','Burnett, Ricci and Brun get development moves. Everyone we need for the run-in stays. Perfect window ending.'],
   ['TransferDeskItalia','Endrick drew $188m from Juventus, $188m from Leipzig and $193.4m from Bergamo. Napoli declined every bid.'],
   ['VesuvioVoice','Juventus tried Endrick, then Beier. The answer never changed.'],
   ['MercatoMadness','Chiesa staying after all that is another subplot. Now everyone has to lock in until summer.'],
   ['PartenopeoCanada','Five points clear, Inter waiting in Europe, and the squad survives deadline day untouched. Exactly what was needed.']
  ]
 };
 D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
 D.hero={...(D.hero||{}),articleId:story.id,strap:'WINDOW CLOSED · SENIOR SQUAD INTACT'};
 D.ticker=['WINDOW CLOSED · NO SENIOR NAPOLI DEPARTURES','ENDRICK STAYS · BEIER STAYS · CHIESA STAYS','ENDRICK · $188M JUVE, $188M LEIPZIG, $193.4M BERGAMO · ALL REJECTED','BEIER · $188.9M JUVENTUS BID REJECTED','BURNETT, RICCI & BRUN · DEVELOPMENT LOANS COMPLETED',...(D.ticker||[]).filter(x=>!String(x).includes('188M')&&!String(x).includes('ENDRICK STAYS')&&!String(x).includes('BREAKING'))].slice(0,9);
})();