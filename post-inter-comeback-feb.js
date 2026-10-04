(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const report={id:'inter-ucl-comeback-2028',category:'Match Report',label:'Champions League · FT',date:'Inter 0–2 Napoli · February 23, 2028',tone:'win',headline:'STAI ZITTO: Napoli Storm Milan and Throw Inter Out of Europe',dek:'Davies strikes after five minutes, Meret produces a Man-of-the-Match masterclass, and Nico Paz completes a 3–2 aggregate comeback.',body:[
  'Napoli asked for a European answer. They delivered one in the loudest possible way: a 2–0 win away to Inter, overturning a first-leg deficit and sending Napoli through 3–2 on aggregate.',
  'Alphonso Davies erased Inter’s advantage after only five minutes. Starting from the wing, he drove inside the box and buried the finish after Pio Esposito supplied him. The tie was level almost immediately.',
  'Then came the siege. Inter hit the bar, Scott McTominay cleared an effort off the line and Alex Meret produced three enormous first-half saves. Napoli reached halftime 1–0 ahead on the night and 2–2 on aggregate largely because their goalkeeper refused to let Inter back in.',
  'The decisive moment arrived in the 76th minute. Endrick found Nico Paz and the $125 million playmaker scored the goal that flipped the tie completely: Napoli 3–2 ahead on aggregate.',
  'Pio nearly added a third on a 90th-minute counter, striking the post, but nothing more was required. The whistle confirmed the comeback and one of Napoli’s defining performances of the season.',
  'Meret was named Man of the Match. The clean sheet belongs to the entire defensive effort, but his interventions during Inter’s first-half barrage kept the comeback alive long enough for Paz to finish it.',
  'The European criticism had become legitimate after defeats to Marseille, Bodø/Glimt and Inter in the first leg. Napoli did not answer it with an argument. They answered it by going to Inter and winning 2–0.'
 ],commentHeat:22,reaction:'win',visitorClub:'Inter',comments:[
  ['CurvaNordNapoli','STAI ZITTO CAZZO. Tutti quanti. Napoli avanti.'],
  ['NoTacticsJustVibes','WHERE IS THE DOMESTIC GIANT EUROPEAN QUESTION MARK ARTICLE NOW 😭😭😭'],
  ['MeretWall','Three massive saves while Inter were throwing the kitchen sink at us. MAN OF THE MATCH.'],
  ['PartenopeiProfessor','This is the answer. Not because the earlier criticism was unfair — because Napoli responded to it on the pitch.'],
  ['PioEra','Pio assist after five minutes and hits the post at 90. 21G 11A. Complete forward.'],
  ['EndrickEra','Endrick scores in leg one and assists the aggregate winner in leg two. Twenty-one years old.'],
  ['CanadaAzzurro','ALPHONSO DAVIES YOU BEAUTIFUL CANADIAN MAN 🇨🇦'],
  ['Pazienza','$125M NICO PAZ. THAT IS WHAT THE MONEY WAS FOR.'],
  ['ScudettoWatch','Eight clear in Serie A and now Inter eliminated from Europe. The entire rivalry shifted tonight.'],
  ['VesuvioVoice','I criticized the European performances. I was right to. Tonight I apologize. That was immense.']
 ]};
 const meret={id:'meret-milan-masterclass-2028',category:'Feature',label:'Man of the Match',date:'After Inter 0–2 Napoli',tone:'win',headline:'The Wall in Milan: Meret Kept the Comeback Alive',dek:'Three huge saves during Inter’s first-half barrage made Alex Meret the official Man of the Match in Napoli’s defining European win.',body:[
  'The goals will belong to Davies and Paz. The qualification might belong to Alex Meret.',
  'With Napoli 1–0 ahead on the night but only level on aggregate, Inter unleashed a barrage. They hit the bar. McTominay cleared one off the line. And three times, Meret produced the kind of save that changes a knockout tie.',
  'Napoli were not comfortable. They were surviving. Meret gave them the time required to turn survival into control and, eventually, into a famous qualification.',
  'His official Man-of-the-Match award is more than a footnote. With young goalkeeper Peacock recently secured on a long-term contract, Meret delivered a reminder on the biggest available stage: the present still belongs to him.'
 ],commentHeat:12,reaction:'win',visitorClub:'Inter',comments:[
  ['MeretWall','PUT THE MOTM TROPHY ON THE PLANE NEXT TO HIM.'],
  ['PartenopeiProfessor','Without Meret, Paz never gets the opportunity to score the winner. Simple as that.'],
  ['PeacockWatch','Peacock is the future. Meret just reminded everybody who owns the shirt right now.'],
  ['CurvaNordNapoli','MERET MERET MERET.']
 ]};
 const apology={id:'europe-critics-apology-thread-2028',category:'Social',label:'The Apology Thread',date:'After Napoli eliminate Inter',tone:'win',headline:'The Apology Thread: European Critics, Your Forms Are Ready',dek:'Receipts have been collected. The people have returned to the timeline. Some are apologizing. Others are being reminded.',body:[
  'One week ago the question was everywhere: can Napoli do it in Europe? After losing the first leg at home, the Marseille and Bodø defeats looked like evidence of a continental ceiling.',
  'Tonight Napoli went to Inter, overturned the tie and kept a clean sheet. This is the apology desk. Please take a number.'
 ],commentHeat:30,reaction:'win',visitorClub:'Inter',comments:[
  ['DomesticOnlyFC','I said Napoli were a domestic bully who would fold in Milan. I am here voluntarily. I was catastrophically wrong.'],
  ['VesuvioVoice','I wrote that three European defeats were a pattern. They were. Napoli just broke the pattern in the hardest possible way. Apology submitted.'],
  ['TacticalTano','I questioned the second rotation before Lecce. Napoli won 2-0 there and then 2-0 here. Manager got the sequence right.'],
  ['NoTacticsJustVibes','FORMALLY REQUESTING AN APOLOGY FROM EVERYONE WHO SAID THE UDINESE ROTATION KILLED THE SEASON 😭'],
  ['InteristaInPain','I would like to unsubscribe from this thread.'],
  ['CurvaNordNapoli','Richiesta respinta. Rimani qui.'],
  ['PazWasOverpriced','My username is creating administrative difficulties at this time.'],
  ['EndrickCashOut','I wanted the $193M. I no longer wish to discuss my previous position.'],
  ['CanadaAzzurro','Davies in the fifth minute. Put some respect on the maple leaf.'],
  ['MeretWall','Apologize to the goalkeeper first. Three saves. Clean sheet. MOTM.'],
  ['PioEra','21 goals and ELEVEN assists now. He did not score tonight and still changed the tie.'],
  ['PartenopeiProfessor','The correct take: criticism before tonight was earned. Credit tonight is earned too. This was a massive European performance.'],
  ['ScudettoWatch','Napoli: eight points clear, unbeaten in Serie A, Coppa semifinalist, Inter eliminated from Europe. That CV looks different this morning.'],
  ['SempreNapoli','STAI ZITTO CAZZO 💙']
 ]};
 D.articles=[apology,report,meret,...(D.articles||[]).filter(a=>![apology.id,report.id,meret.id].includes(a.id))];
 if(Array.isArray(D.results)){D.results=D.results.filter(r=>!(String(r[0]).includes('Inter')&&String(r[1]).includes('Napoli')&&String(r[2]).includes('Champions')));D.results.push(['Inter','Napoli','Champions League · Knockout Playoff · 2nd leg',0,2,'W',"Davies 5', Nico Paz 76'",'Pio assist · Endrick assist · Meret MOTM · Napoli advance 3–2 agg.']);}
 D.upcoming=[['Inter','Serie A','Feb 27 · Away']];
 D.hero={...(D.hero||{}),articleId:report.id,strap:'CHAMPIONS LEAGUE · NAPOLI ADVANCE 3–2 AGG.'};
 D.ticker=['FT · INTER 0–2 NAPOLI','NAPOLI ADVANCE 3–2 ON AGGREGATE','DAVIES 5’ · PAZ 76’','MERET · MAN OF THE MATCH','STAI ZITTO · NAPOLI ARE THROUGH','SERIE A · NAPOLI EIGHT CLEAR · INTER NEXT',...(D.ticker||[]).filter(x=>!String(x).includes('INTER LEAD 2–1'))].slice(0,10);
})();