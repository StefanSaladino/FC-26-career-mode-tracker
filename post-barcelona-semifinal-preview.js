(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.seasonState={...(D.seasonState||{}),league:{w:25,d:9,l:0,points:84,played:34,remaining:4,status:'Serie A champions'},ucl:{stage:'Semifinal',opponent:'Barcelona',firstLeg:'Barcelona 1–1 Napoli · Apr 26',secondLeg:'Home · May 2 · 1–1 aggregate'}};
 const stories=[
  {id:'barcelona-leg1-draw-2028',category:'Champions League',label:'Semifinal · First Leg',date:'Apr 26',tone:'match',headline:'NAPOLI TAKE IT HOME: 1–1 IN BARCELONA',dek:'Fermín struck early. McTominay answered from distance. Meret stood enormous after halftime. The semifinal now comes to Naples level.',image:'assets/IMG_4040.png',body:[
   'Barcelona landed first in the eighth minute through Fermín López, and for a spell Napoli looked unlike themselves. Their response was exactly the kind this season has taught people to expect.',
   'In the 22nd minute Kevin De Bruyne found Scott McTominay outside the box. McTominay hit it with conviction and dragged Napoli level, 1–1.',
   'From there Napoli found their game. Alphonso Davies repeatedly attacked Barcelona’s high line with pace, forcing the hosts to turn and run toward their own goal. Napoli had arrived in the semifinal rather than merely surviving it.',
   'The second half demanded something different. Barcelona pushed through Lamine Yamal, Raphinha, Pedri and Marcos Leonardo, and Alex Meret answered with a sequence of outstanding saves. Alessandro Buongiorno and Alessandro Bastoni supplied critical interventions around him.',
   'The final minutes became a siege. Napoli bent, cleared, recovered and survived. At the whistle it was Barcelona 1–1 Napoli.',
   '“We took their first punch and answered,” McTominay said. “Now it is one game in Naples.”',
   'De Bruyne was equally direct. “At this stage you do not need perfection. You need personality. We showed it after going behind.”',
   'One match at the Maradona now decides who reaches the Champions League final.'
  ],commentContext:'barcelona-semifinal-leg1',commentHeat:5},
  {id:'meret-barcelona-wall-2028',category:'Player Focus',label:'Alex Meret',date:'Apr 26',tone:'feature',headline:'MERET THE WALL: Napoli’s European Keeper Does It Again',dek:'The Atlético hero delivered another defining Champions League night when Barcelona turned the pressure up.',image:'assets/IMG_4039.png',body:[
   'Napoli’s European run increasingly carries Alex Meret’s fingerprints. Against Atlético he protected a one-goal aggregate lead under siege. In Barcelona, with the semifinal level, he did it again.',
   'Lamine Yamal forced a major stop. Marcos Leonardo was denied. Another Barcelona surge ended with Meret producing a third outstanding save. Each one preserved the 1–1 that Napoli will carry home.',
   '“These are the nights you want as a goalkeeper,” Meret said. “But the tie is only halfway finished.”',
   'Buongiorno put it simply: “When they got through us, Alex was there. That gives every defender confidence.”',
   'The result belongs to the whole defensive unit. Meret was its defining figure.'
  ],commentContext:'meret-barcelona-semifinal',commentHeat:5},
  {id:'kdb-interview-barcelona-2028',category:'Interview',label:'Kevin De Bruyne',date:'After the Scudetto',tone:'feature',headline:'De Bruyne: “Winning Should Make You Want the Next One”',dek:'Napoli are champions of Italy. Kevin De Bruyne has already turned his attention to Europe, Pio’s rise and how much larger this season can become.',image:'assets/IMG_4039.png',body:['Kevin De Bruyne has been around long enough to know the danger of the morning after a trophy. Napoli earned the right to celebrate the Scudetto. They did not earn the right to switch off.','“You should enjoy winning,” De Bruyne said. “But the important thing is what happens after. Winning should make you want the next one.”','Napoli arrived at the semifinal after eliminating Real Madrid and Atlético Madrid. That run has changed the way the squad sees itself.','“We did not eliminate Madrid and Atlético to arrive in the semifinal and admire somebody else,” De Bruyne said. “We are here to reach the final.”']}
 ];
 const ids=new Set(stories.map(x=>x.id));
 D.articles=[...stories,...(D.articles||[]).filter(x=>!ids.has(x.id))];
 D.matches=D.matches||[];
 if(!D.matches.some(m=>JSON.stringify(m).includes('Barcelona')&&JSON.stringify(m).includes('1–1'))) D.matches.unshift(['Apr 26','Napoli','Barcelona','1–1','Champions League · Semifinal first leg','Away']);
 D.whispers=[['ALL SQUARE','Barcelona 1–1 Napoli. The semifinal now comes to the Maradona.'],['MERET WALL','Another enormous European night from Alex Meret kept Napoli level.'],['MIDFIELD MOMENT','McTominay’s 22nd-minute strike, assisted by De Bruyne, answered Barcelona’s early opener.'],['ONE GAME','Ninety minutes in Naples separate Napoli from a Champions League final.']];
})();