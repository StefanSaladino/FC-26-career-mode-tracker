(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.seasonState={...(D.seasonState||{}),league:{w:25,d:9,l:0,points:84,played:34,remaining:4,status:'Serie A champions'},ucl:{stage:'Semifinal',opponent:'Barcelona',firstLeg:'Away · Apr 26',secondLeg:'Home · May 2'}};
 const stories=[
  {id:'kdb-interview-barcelona-2028',category:'Interview',label:'Kevin De Bruyne',date:'After the Scudetto',tone:'feature',headline:'De Bruyne: “Winning Should Make You Want the Next One”',dek:'Napoli are champions of Italy. Kevin De Bruyne has already turned his attention to Barcelona, Pio’s rise and the possibility that this season can become much bigger.',image:'assets/IMG_4039.png',body:[
   'Kevin De Bruyne has been around long enough to know the danger of the morning after a trophy. Napoli have earned the right to celebrate the Scudetto. They have not earned the right to switch off.',
   '“You should enjoy winning,” De Bruyne said. “If you cannot enjoy becoming champions, then what are you playing for? But the important thing is what happens after. Winning should make you want the next one.”',
   'The next one is Barcelona. Napoli arrive in the Champions League semifinal after eliminating Real Madrid in the Round of 16 and Atlético Madrid in the quarter-final, where Pio Esposito scored the only goal of the tie.',
   '“Madrid and Atlético were different tests,” De Bruyne said. “One asks you to survive moments of quality. The other asks you to stay patient when the game becomes uncomfortable. We showed we can do both. Barcelona will ask different questions again.”',
   'Asked about Pio’s transformation from young striker to the player increasingly treated as the face of Napoli, De Bruyne smiled. “He scores, he works, and the big moments do not scare him. That last part matters. You can see why the supporters connect with him. But he is still young. The best thing we can do is let him keep becoming himself.”',
   'De Bruyne also pointed to the competition around Pio. Beier has reached 20 goals, Endrick has 12, and Nico Paz has grown into an increasingly important creative role. “When you have good players pushing each other, training changes. Nobody can relax. That is healthy as long as everybody remembers the team is the point.”',
   'And the unbeaten league season? “Of course 25 wins, nine draws and no losses is special. Four games is close enough that everybody knows about it. But nobody in our dressing room would trade another trophy just to protect a zero in the loss column.”',
   'His final message was aimed squarely at the semifinal. “Barcelona are Barcelona. We respect them. But we did not eliminate Madrid and Atlético to arrive in the semifinal and admire somebody else. We are going there to reach the final.”'
  ]},
  {id:'barcelona-semifinal-2028',category:'Champions League',label:'Semifinal Preview',date:'Apr 26 · First leg',tone:'analysis',headline:'NAPOLI vs BARCELONA: Two Games From the Champions League Final',dek:'Real Madrid are gone. Atlético are gone. Napoli are champions of Italy and unbeaten in Serie A. Barcelona are the next obstacle — and this is no underdog field trip.',image:'assets/IMG_4040.png',body:[
   'Two matches separate Napoli from the Champions League final. The first is away to Barcelona on April 26. The return comes at the Maradona on May 2.',
   'The route here has stripped away any reason to describe Napoli as tourists at this stage. Real Madrid were eliminated in the Round of 16. Atlético Madrid followed in the quarter-final, 1–0 on aggregate, after Pio Esposito’s 44th-minute winner and a second-half defensive stand built around Alex Meret.',
   'Now comes Barcelona. The challenge changes again. Napoli will need the defensive concentration that carried them through Atlético without surrendering the attacking ambition that made them champions of Italy.',
   '“If we only defend, eventually a team like Barcelona finds something,” Alessandro Bastoni said. “We have to be brave enough to make them defend us too.”',
   'That attacking threat is no longer concentrated in one player. Pio enters the semifinal with 22 goals and 10 assists. Maximilian Beier has 20 goals and nine assists. Endrick has 12 goals. Nico Paz has become a primary creator, while De Bruyne and Chiesa provide another layer of experience behind them.',
   'Meret’s form is equally central to the tie. After the difficult earlier European night that threatened to define his campaign, he has answered with a run of performances that helped Napoli survive Madrid and Atlético. The quarter-final second leg was his loudest statement yet.',
   '“We know what the stadium will be like in Barcelona,” Meret said. “That cannot change how we play. We have already been in matches where one mistake can change the whole tie. You stay calm and play the next action.”',
   'Napoli also arrive with an unusual psychological advantage: the domestic title is already secured. There is no league chase demanding emotional attention. There is an unbeaten record to protect and a Coppa Italia final still ahead, but the Champions League semifinal can now receive the full weight of the squad’s focus.',
   'Barcelona have the name, the history and the threat. Napoli have 25 league wins, zero league defeats, a Scudetto, and a European knockout trail containing Real Madrid and Atlético Madrid. This is not a reward for getting this far. It is an opportunity to go one round further.'
  ]}
 ];
 const ids=new Set(stories.map(x=>x.id));
 D.articles=[...stories,...(D.articles||[]).filter(x=>!ids.has(x.id))];
 D.whispers=[
  ['SEMIFINAL','Barcelona away on Apr 26. The return at the Maradona follows on May 2.'],
  ['CHAMPIONS','Napoli enter Europe as Serie A champions: 25–9–0, 84 points, four league matches remaining.'],
  ['EUROPEAN WALL','Meret has conceded just once across Napoli’s last four Champions League fixtures.'],
  ['PIO MOMENT','The 44th-minute winner against Atlético sends Napoli into the semi-finals.'],
  ['NO TOURISTS','Real Madrid and Atlético are already out. Napoli go to Barcelona trying to reach the final.']
 ];
})();