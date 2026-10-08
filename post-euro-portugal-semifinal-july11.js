(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.results=D.results||[];
 const row=['Italy','Portugal','EURO 2028 · Semifinal · July 11',2,1,'W','Barella 16′ (Buongiorno); Barella 103′','AET · Italy reach EURO 2028 final'];
 const i=D.results.findIndex(r=>r[0]==='Italy'&&r[1]==='Portugal'&&String(r[2]).includes('EURO 2028'));
 if(i>=0)D.results[i]=row;else D.results.push(row);
 const stories=[
 {id:'italy-portugal-euro-semifinal-july11-2028',category:'Italy',label:'EURO 2028 · SEMIFINAL',date:'July 11, 2028',headline:'BARELLA TWICE. ITALY ARE IN THE EURO FINAL.',dek:'Italy trailed for the first time all tournament. Nicolò Barella answered twice — first from Buongiorno, then in extra time — to beat Portugal 2–1 and send the Azzurri to the final.',commentContext:'italy-portugal-semi',commentHeat:100,body:[
 'Italy are in the EURO 2028 final.',
 'Portugal struck first through Fábio Silva in the fourth minute, ending Italy’s extraordinary run without conceding and putting Stefan Saladino’s side behind for the first time at this tournament.',
 'The response took twelve minutes. Alessandro Buongiorno supplied Nicolò Barella, who made it 1–1 in the 16th minute.',
 'The semifinal went to extra time. In the 103rd minute, Barella struck again. No assist was reported on the winner.',
 'Italy held on for a 2–1 victory after extra time. Six matches. Six wins. Nine goals scored. One conceded.',
 'For a team whose tournament began with Pio Esposito scoring, whose quarterfinal was won by Retegui from Kean, the semifinal belonged completely to Barella.',
 'One match remains.'
 ],comments:[
 {user:'AzzurriSempre',lang:'it',text:'SIAMO IN FINALE. BARELLA DUE VOLTE. NON CI CREDO. AVANTI ITALIA.'},
 {user:'TacticalNonno',lang:'it',text:'Prima volta sotto nel torneo. Nessun panico. Pareggio dopo dodici minuti e vittoria ai supplementari. Questa è una squadra vera.'},
 {user:'NapoliDoomer',lang:'en',text:'We conceded ONE goal and I briefly forgot how to function. Anyway WE ARE IN THE FINAL.'},
 {user:'PioNation',lang:'en',text:'Pio carried the scoring early. Retegui got England. Barella got Portugal. This is exactly how tournament teams become champions.'},
 {user:'SaladinoOutNow',lang:'en',text:'Six wins from six and a final. Clearly he has peaked. SALADINO OUT.'}
 ]},
 {id:'barella-portugal-brace-euro-2028',category:'Italy',label:'AZZURRI HERO',date:'July 11, 2028',headline:'THE SEMIFINAL BELONGED TO BARELLA.',dek:'Down 1–0 after four minutes, Italy needed an answer. Barella gave them two.',commentContext:'barella-portugal-brace',commentHeat:98,body:[
 'Nicolò Barella had already scored at EURO 2028 before the semifinal. Against Portugal, he produced the defining performance of Italy’s tournament so far.',
 'Fábio Silva’s fourth-minute opener created a situation Italy had not experienced in five previous matches: they were losing.',
 'Barella erased it in the 16th minute after Buongiorno created the goal. Then, with the match in extra time, Barella scored the winner in the 103rd.',
 'His tournament total rises to three goals.',
 'There was a small decision back in the opening match against Bosnia that now feels illustrative. With Italy already leading through Pio Esposito, Barella took the second penalty. Saladino’s reasoning was simple: give everyone a chance and keep multiple players in form.',
 'Twenty-five days later, Barella scored twice to put Italy in the European Championship final.'
 ],comments:[
 {user:'AzzurriSempre',lang:'it',text:'BARELLA. PARTITA DA LEADER.'},
 {user:'RotationPolice',lang:'en',text:'Remember the Bosnia penalty? Multiple guys in form. Here is the payoff.'},
 {user:'PioHaterForNoReason',lang:'en',text:'Pio zero semifinal goals. Barella two. I have prepared a 47-page document.'}
 ]},
 {id:'italy-first-blow-portugal-response-2028',category:'Italy',label:'TACTICAL NOTE',date:'July 11, 2028',headline:'THE WALL FINALLY BROKE. ITALY DIDN’T.',dek:'After five clean sheets, Fábio Silva ended Italy’s shutout streak in the fourth minute. The Azzurri responded with their first comeback of the tournament.',commentContext:'italy-first-concession',commentHeat:94,body:[
 'For five matches, Italy never had to answer this question.',
 'Fábio Silva scored four minutes into the semifinal. The run of five consecutive clean sheets was over, and Italy were behind for the first time at EURO 2028.',
 'What followed may matter more than the streak itself. Barella equalized twelve minutes later and Italy remained composed long enough to win in extra time.',
 'The defensive record is no longer perfect: Italy have now scored nine and conceded one across six victories.',
 'The tournament record, however, remains perfect.'
 ],comments:[
 {user:'MeretUnion',lang:'en',text:'Sorry Gigio. The clean-sheet streak was absurd. The response was better.'},
 {user:'TacticalNonno',lang:'it',text:'La porta inviolata finisce. La maturità della squadra no.'}
 ]},
 {id:'noa-lang-bournemouth-transfer-july-2028',category:'Mercato',label:'OFFICIAL · TRANSFER',date:'July 2028',headline:'OFFICIAL: NOA LANG LEAVES NAPOLI FOR BOURNEMOUTH IN $47M DEAL.',dek:'Bournemouth opened at $41.4 million. Napoli held out, reached agreement at $47 million, and the transfer is now complete.',commentContext:'lang-bournemouth-official',commentHeat:92,body:[
 'Noa Lang is officially a Bournemouth player.',
 'Bournemouth initially approached Napoli with a $41.4 million offer. Negotiations continued and the clubs ultimately agreed a $47 million fee.',
 'Lang leaves after contributing one assist during Napoli’s 2027–28 campaign.',
 'The deal is the first confirmed major outgoing of Napoli’s new summer window. The club is entering 2028–29 with major ambitions, but its precise spending allocation remains an internal matter.',
 'Napoli have not treated every offer the same way. Real Madrid’s $158.6 million approach for Alessandro Bastoni was rejected, while Bournemouth’s separate pursuit of Federico Chiesa has also failed to produce an agreement after Napoli turned down $36.7 million.',
 'Lang, however, is gone. Napoli have converted a depth attacker into a $47 million sale while preserving the core of the squad.'
 ],comments:[
 {user:'SquadDepthDept',lang:'en',text:'$47M for a depth piece is strong business. Now replace the role, not the name.'},
 {user:'CurvaCalculator',lang:'en',text:'They opened at $41.4M and paid $47M. Thank you for your contribution, Bournemouth.'},
 {user:'ChiesaHive',lang:'en',text:'Lang gone and the Chiesa offer rejected. The winger board is officially interesting.'},
 {user:'SaladinoOutNow',lang:'en',text:'Sold a player for more than the opening bid. Financial competence is dangerous. SALADINO OUT.'}
 ]}
 ];
 const ids=new Set(stories.map(a=>a.id));
 D.articles=stories.concat((D.articles||[]).filter(a=>!ids.has(a.id)));
 D.hero={articleId:'italy-portugal-euro-semifinal-july11-2028',strap:'EURO 2028 · FINALISTS'};
 D.whispers=[
 ['ITALY ARE IN THE FINAL','Barella scores twice as Portugal fall 2–1 after extra time.'],
 ['BARELLA BRACE','16′ from Buongiorno · 103′ winner.'],
 ['FIRST GOAL CONCEDED','Fábio Silva ended Italy’s five-match clean-sheet run in the 4th minute.'],
 ['PERFECT RECORD LIVES','Italy are 6–0–0 · 9 GF · 1 GA.'],
 ['LANG TO BOURNEMOUTH','Official: Noa Lang leaves Napoli in a $47M deal.'],
 ['CHIESA OFFER REJECTED','Bournemouth stopped at $36.7M. Napoli said no.'],
 ['EURO FINAL NEXT','Opponent not yet reported.'],
 ...(D.whispers||[]).filter(w=>!['ITALY INTO THE SEMIS','450 MINUTES · ZERO CONCEDED','DEPTH DELIVERS','SUMMER FINANCES','MADRID REBUFFED','SEMIFINAL NEXT','ITALY ARE IN THE FINAL','BARELLA BRACE','FIRST GOAL CONCEDED','PERFECT RECORD LIVES','LANG TO BOURNEMOUTH','CHIESA OFFER REJECTED','EURO FINAL NEXT'].includes(w?.[0]))
 ].slice(0,10);
 D.ticker=['EURO 2028 · ITALY 2–1 PORTUGAL · AET','BARELLA 16′, 103′ · ITALY ARE FINALISTS','BUONGIORNO ASSISTS THE EQUALIZER','ITALY · 6 WINS · 9 GF · 1 GA','OFFICIAL · NOA LANG TO BOURNEMOUTH · $47M'];
})();