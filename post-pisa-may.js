(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const stories=[
 {id:'pisa-rotation-win-may',category:'Serie A',label:'Match Report',date:'May 2028',tone:'match',headline:'ROTATE. WIN. MOVE ON: Chiesa Keeps Invincibles Run Alive',dek:'A heavily rotated Napoli beat Pisa 1–0, protected the core for Barcelona and moved another match closer to an unbeaten Serie A season.',image:'assets/chiesa-napoli.jpg',body:[
 'With the Scudetto already secured and Barcelona waiting, Napoli made the sensible choice: rotate heavily, protect the core and ask the depth players to preserve the unbeaten league season.',
 'The breakthrough came in the 11th minute. Endrick created it and Federico Chiesa finished, giving Napoli the early 1–0 lead they would never surrender.',
 'The match never became a spectacle. That was almost the point. Napoli controlled the risk, protected legs and carried the clean sheet deep into the second half.',
 'Endrick had the chance to double the lead from the penalty spot in the 73rd minute, but the attempt was saved. Napoli did not allow the miss to turn the match chaotic.',
 'At full time it remained 1–0. Three points, a clean sheet, the Invincibles chase intact and the first-choice core preserved for the biggest match left on the calendar.',
 'Chiesa’s goal takes him to five for the season. Endrick’s assist takes him to nine.'
 ],commentContext:'pisa-heavy-rotation-invincibles',commentHeat:4},
 {id:'barcelona-second-leg-maradona-may',category:'Champions League',label:'Semifinal · Second Leg',date:'May 2',tone:'breaking',headline:'NOW FOR BARCELONA: One Night at the Maradona for a Place in the Final',dek:'The league is won. The unbeaten run survived Pisa. The semifinal is 1–1. Napoli and Barcelona now have ninety minutes to decide who reaches the Champions League final.',body:[
 'Everything has narrowed to one night. Napoli returned from Barcelona with a 1–1 draw, then rotated heavily against Pisa and still won. The legs that matter have been protected. The Maradona gets the deciding match.',
 'The first leg showed both sides of this Napoli team. Barcelona hurt them early through Fermín, but Scott McTominay answered from distance and Alex Meret produced a defining second half under pressure.',
 'Napoli do not enter the return leg as tourists or underdogs grateful to be here. They are champions of Italy, unbeaten in Serie A and have already eliminated Real Madrid and Atlético Madrid on the road to this semifinal.',
 'Barcelona remain dangerous everywhere: Lamine Yamal can change a match in one action, Pedri can control its rhythm, and their second-half pressure in the first leg showed how quickly the field can tilt.',
 'But Napoli have earned the right to make Barcelona deal with the Maradona too. One match. Level aggregate. A Champions League final on the other side.'
 ],commentContext:'barcelona-semifinal-second-leg-maradona',commentHeat:5}
 ];
 const ids=new Set(stories.map(a=>a.id));
 D.articles=[...stories,...(D.articles||[]).filter(a=>!ids.has(a.id))];
 D.hero={articleId:'barcelona-second-leg-maradona-may',strap:'ONE NIGHT FOR A PLACE IN THE FINAL'};
 D.whispers=[['FINAL WITHIN REACH','Napoli and Barcelona are level 1–1. The deciding leg is at the Maradona.'],['ROTATION WORKED','Heavy changes, a 1–0 win over Pisa and the core protected for Europe.'],['INVICTIBLES ALIVE','The Scudetto is secured and Napoli remain unbeaten in Serie A.'],['ENDRICK IMPACT','Assist for Chiesa against Pisa; the penalty miss did not change the result.']];
})();