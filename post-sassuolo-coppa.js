(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const story={id:'sassuolo-coppa-qf-2028',category:'Match Report',label:'Coppa Italia · Quarterfinal',date:'Napoli 2–0 Sassuolo · FT',tone:'win',headline:'Juan Jesus Gets His Redemption as Napoli Reach Coppa Semifinal',dek:'Chiesa scores early, Beier creates both goals and Nico Paz finishes the counter after a crucial Juan Jesus tackle as Napoli beat Sassuolo 2–0.',body:[
 'Napoli are through to the Coppa Italia semifinal after a 2–0 quarterfinal victory over Sassuolo, with a heavily rotated side producing one of the season’s more unlikely redemption stories.',
 'Federico Chiesa opened the scoring in the eighth minute, finishing a move created by Maximilian Beier. After a transfer window in which Chiesa wanted a move but ultimately stayed, his response was immediate: a goal in his first knockout assignment after the deadline.',
 'Napoli led 1–0 at halftime. Juan Jesus, handed a rare start, survived Sassuolo pressure and then produced the defining defensive intervention of the second half. In the 70th minute he made a crucial tackle inside the Napoli box following a Sassuolo corner. Napoli broke immediately from the recovery.',
 'At the other end, Beier supplied his second assist of the night and Nico Paz blasted home the counterattack to make it 2–0. The sequence turned a dangerous Sassuolo set piece into the goal that effectively killed the quarterfinal.',
 'Juan Jesus, exhausted after his rare outing, was replaced by Alessandro Buongiorno in the 78th minute with the clean sheet intact. Napoli saw out the remainder without conceding.',
 'Beier finished with two assists, Chiesa and Paz supplied the goals, and Napoli advanced to the Coppa Italia semifinal. For Juan Jesus, the night became something more: given one start in a rotated side, he delivered a match-defining tackle when Napoli needed it.'
 ],commentHeat:12,reaction:'win',visitorClub:'Sassuolo',comments:[
 ['PartenopeiProfessor','Juan Jesus deserves the headline tonight. That tackle at 1–0 prevents a real chance and Napoli score on the counter seconds later. Match-defining sequence.'],
 ['CurvaNordNapoli','JUAN JESUS REDENZIONE. Gli abbiamo dato una partita e ci ha portato in semifinale 😂'],
 ['NoTacticsJustVibes','Juan Jesus asked for ONE start and somehow turned it into a redemption movie 😭'],
 ['AzzurroSempre','Quel tackle al 70’ vale quasi come un gol. Recupero di Juan Jesus, contropiede, Paz, 2-0.'],
 ['VesuvioVoice','The funniest part is him coming off at 78 completely out of gas after saving the day. He emptied the tank.'],
 ['NapoliSinceBirth','I was terrified seeing Juan Jesus on the quarterfinal team sheet. Fair play. Clean sheet intact when he left and a huge tackle.'],
 ['ScudettoWatch','This is why squad players matter. Juan Jesus barely plays, gets called, and produces the defensive moment that settles a knockout game.'],
 ['PartenopeoCanada','Give the man his flowers. No irony. He did exactly what was asked of him tonight.'],
 ['NoTacticsJustVibes','From “one start” to Napoli cult hero for 78 minutes. Football makes absolutely no sense 😂'],
 ['CurvaNordNapoli','Al 78’ non aveva più benzina. Esce Juan Jesus, entra Buongiorno, stadio in piedi. Bellissimo.'],
 ['VesuvioVoice','I need the clip of that tackle framed. The Juan Jesus Game is canon now.'],
 ['PartenopeiProfessor','Beier gets the assist and Paz gets the goal, but the second goal begins with Juan Jesus reading the corner perfectly. Do not lose that detail.']
 ]};
 D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
 if(Array.isArray(D.results)){D.results=D.results.filter(r=>!(String(r[1]).includes('Sassuolo')&&String(r[2]).includes('Coppa')));D.results.push(['Napoli','Sassuolo','Coppa Italia · Quarterfinal',2,0,'W',"Federico Chiesa 8' · Nico Paz 70'",'Beier 2 assists · Juan Jesus crucial tackle before second goal']);}
 D.upcoming=[['Fiorentina','Serie A','Feb 6'],['Udinese','Serie A','Feb 12'],['Inter','Champions League · Knockout Playoff · 1st leg','Feb 15 · Home'],['Lecce','Serie A','Feb 20'],['Inter','Champions League · Knockout Playoff · 2nd leg','Feb 23 · Away'],['Inter','Serie A','Feb 27 · Away']];
 D.hero={...(D.hero||{}),articleId:story.id,strap:'COPPA ITALIA · SEMIFINAL BOUND'};
 D.ticker=['FT · NAPOLI 2–0 SASSUOLO · COPPA QF','CHIESA 8’ · PAZ 70’ · BEIER TWO ASSISTS','JUAN JESUS · CRUCIAL TACKLE SPARKS SECOND GOAL','NAPOLI ADVANCE TO COPPA ITALIA SEMIFINAL',...(D.ticker||[]).filter(x=>!String(x).includes('SASSUOLO'))].slice(0,9);
})();