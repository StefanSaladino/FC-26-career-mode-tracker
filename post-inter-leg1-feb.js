(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const lead={id:'inter-ucl-leg1-loss-2028',category:'Match Report',label:'Champions League · FT',date:'Napoli 1–2 Inter · February 15, 2028',tone:'loss',headline:'The Noise Is Real Now: Inter Win at the Maradona',dek:'Napoli rested for this night, answered an early blow through Endrick, then fell to a De Arrascaeta brace. The European questions are no longer background noise.',body:[
  'This was supposed to be the night Napoli answered Europe. Instead, Inter left the Maradona with a 2–1 first-leg advantage and the loudest criticism of the season now has evidence behind it.',
  'Giorgian De Arrascaeta struck after only three minutes, immediately dragging Marseille and Bodø/Glimt back into the conversation. Napoli did respond. In the 31st minute Maximilian Beier found Endrick, who blasted his finish into the top-left corner for 1–1 and briefly changed the temperature inside the stadium.',
  'But Napoli never found the second breakthrough. De Arrascaeta scored again in the 63rd minute and Inter protected the lead through the final whistle.',
  'The context makes the defeat sting more. Napoli deliberately rotated in the 0–0 league draw at Udinese three days earlier, accepting dropped points to preserve the first-choice core for this match. Inter won 2–0 in their league fixture, cut Napoli’s Serie A lead from seven points to five, and then beat the rested Napoli side in Naples.',
  'The tie is not close to finished. Napoli travel to Inter on February 23 needing only one goal to erase the aggregate deficit. But the burden has shifted. Napoli remain unbeaten and first in Serie A; in Europe, they have now lost to Marseille, Bodø/Glimt and Inter in their recent continental run.',
  'Endrick’s goal is the positive. The 21-year-old delivered under genuine pressure and moves to eight goals in Napoli’s running totals. Beier’s assist takes him to eight. The rest of the squad now has eight days, with Lecce in between, to decide whether this first leg becomes another European warning or the setup for a comeback.'
 ],commentHeat:18,reaction:'loss',visitorClub:'Inter',comments:[
  ['CurvaNordNapoli','Abbiamo riposato a Udine PER QUESTA PARTITA. E perdiamo in casa. Le critiche sono meritate.'],
  ['PartenopeiProfessor','The tie is 2-1, not 5-0. But three recent European defeats is officially a pattern worth discussing.'],
  ['NoTacticsJustVibes','Dropped points at Udinese to save the legs and De Arrascaeta still walked into our house and scored TWICE 😭'],
  ['AzzurroSempre','Calma. Un gol a Milano pareggia tutto. Non è finita.'],
  ['ScudettoWatch','Inter gained two league points on Napoli and then won the first leg in Naples. That is a brutal four-day swing.'],
  ['EndrickEra','Everybody can argue about Europe tomorrow. Tonight give Endrick his credit. That finish was enormous.'],
  ['PioEra','Need Pio in the second leg. Twenty-one goals this season and this is exactly the stage where the number nine has to appear.'],
  ['VesuvioVoice','Marseille 3-0. Bodø 2-1. Inter 2-1. You cannot keep calling every European loss an exception.'],
  ['PartenopeoCanada','Still five clear. Still unbeaten in Serie A. Still only one down on aggregate. Season is alive everywhere.'],
  ['SanPaoloGhost','The manager asked us to trust the Udinese rotation. Fine. Now the second leg has become the receipt.'],
  ['SempreNapoli','Non mollare. A Milano andiamo per vincere.'],
  ['TacticalTano','Beier keeps creating in big moments. 11 goals and 8 assists now. He has earned his place in the return leg.']
 ]};
 const column={id:'europe-question-napoli-2028',category:'Opinion',label:'Pressure',date:'After Napoli 1–2 Inter',tone:'pressure',headline:'Domestic Giant, European Question Mark',dek:'Napoli’s league season remains extraordinary. That is exactly why the continental record is becoming impossible to ignore.',body:[
  'There are two Napoli teams living inside the same season. One is 18–7–0 in Serie A, five points clear of Inter and still unbeaten after 25 matches. The other has recently lost European matches to Marseille, Bodø/Glimt and now Inter at home.',
  'Both things can be true. The manager deserves enormous credit for the domestic campaign, squad development and the emergence of Pio Esposito, Beier, Endrick and Paz. He also deserves scrutiny for a European side that has repeatedly failed to reproduce its league authority.',
  'The Udinese decision raises the stakes rather than settling the argument. Napoli consciously rotated and drew 0–0 to arrive fresh for Inter. That is a defensible strategic choice. But once Inter won the first leg, the cost became part of the evaluation.',
  'Nothing is decided. A one-goal deficit is entirely recoverable and a comeback in Milan would reverse the mood instantly. That is what makes February 23 so significant: it is no longer simply a knockout match. It is a referendum on the one unresolved weakness of an otherwise exceptional season.'
 ],commentHeat:14,reaction:'pressure',visitorClub:'Inter',comments:[
  ['ScudettoWatch','This is the fair framing. Nobody should pretend 18-7-0 is bad management, but nobody should ignore Europe either.'],
  ['CurvaNordNapoli','Vinci a Milano e questa discussione sparisce in novanta minuti.'],
  ['NoTacticsJustVibes','The hot seat is not hot. The European seat, however, is currently on fire 😂'],
  ['AzzurroSempre','Judge the tie after the second leg. One goal is nothing.'],
  ['VesuvioVoice','The concern is not one Inter loss. It is Marseille plus Bodø plus Inter. That is the whole point.']
 ]};
 D.articles=[lead,column,...(D.articles||[]).filter(a=>a.id!==lead.id&&a.id!==column.id)];
 if(Array.isArray(D.results)){D.results=D.results.filter(r=>!(String(r[0]).includes('Napoli')&&String(r[1]).includes('Inter')&&String(r[2]).includes('Champions')));D.results.push(['Napoli','Inter','Champions League · Knockout Playoff · 1st leg',1,2,'L',"Endrick 31'","Beier assist · De Arrascaeta 3', 63'"]);}
 D.upcoming=[['Lecce','Serie A','Feb 20 · Away'],['Inter','Champions League · Knockout Playoff · 2nd leg','Feb 23 · Away · Inter lead 2–1 agg.'],['Inter','Serie A','Feb 27 · Away']];
 D.hero={...(D.hero||{}),articleId:lead.id,strap:'CHAMPIONS LEAGUE · INTER LEAD 2–1 ON AGGREGATE'};
 D.ticker=['FT · NAPOLI 1–2 INTER · UCL LEG 1','DE ARRASCAETA 3’ 63’ · ENDRICK 31’','INTER LEAD 2–1 ON AGGREGATE','SERIE A · NAPOLI 61 · INTER 56 · FIVE-POINT LEAD','NEXT · LECCE · THEN INTER AWAY',...(D.ticker||[]).filter(x=>!String(x).includes('UDINESE')&&!String(x).includes('NEXT · INTER AT THE MARADONA'))].slice(0,10);
})();