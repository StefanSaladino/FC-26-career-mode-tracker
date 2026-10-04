(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const story={id:'sassuolo-coppa-qf-2028',category:'Match Report',label:'Coppa Italia · Quarterfinal',date:'Napoli 2–0 Sassuolo · FT',tone:'win',headline:'Juan Jesus Gets His Redemption as Napoli Reach Coppa Semifinal',dek:'Chiesa scores early, Beier creates both goals and Nico Paz finishes the counter after a crucial Juan Jesus tackle as Napoli beat Sassuolo 2–0.',body:[
 'Napoli are through to the Coppa Italia semifinal after a 2–0 quarterfinal victory over Sassuolo, with a heavily rotated side producing one of the season’s more unlikely redemption stories.',
 'Federico Chiesa opened the scoring in the eighth minute, finishing a move created by Maximilian Beier. After a transfer window in which Chiesa wanted a move but ultimately stayed, his response was immediate: a goal in his first knockout assignment after the deadline.',
 'Napoli led 1–0 at halftime. Juan Jesus, handed a rare start, survived Sassuolo pressure and then produced the defining defensive intervention of the second half. In the 70th minute he made a crucial tackle inside the Napoli box following a Sassuolo corner. Napoli broke immediately from the recovery.',
 'At the other end, Beier supplied his second assist of the night and Nico Paz blasted home the counterattack to make it 2–0. The sequence turned a dangerous Sassuolo set piece into the goal that effectively killed the quarterfinal.',
 'Juan Jesus, exhausted after his rare outing, was replaced by Alessandro Buongiorno in the 78th minute with the clean sheet intact. Napoli saw out the remainder without conceding.',
 'Beier finished with two assists, Chiesa and Paz supplied the goals, and Napoli advanced to the Coppa Italia semifinal. For Juan Jesus, the night became something more: given one start in a rotated side, he delivered a match-defining tackle when Napoli needed it.'
 ],commentHeat:9,reaction:'win',visitorClub:'Sassuolo',comments:[
 ['PartenopeiProfessor','Beier with two assists, Chiesa responds after the window, Paz finishes it — but that Juan Jesus tackle changes the whole second half.'],
 ['CurvaNordNapoli','JUAN JESUS REDENZIONE. Quel tackle e poi subito il contropiede per il 2-0.'],
 ['NoTacticsJustVibes','We gave Juan Jesus one game and the man produced LORE 😭'],
 ['AzzurroSempre','Chiesa è rimasto e segna subito. Beier due assist. Semifinale. Serata perfetta.'],
 ['NapoliSinceBirth','That is exactly how you use the squad in a cup tie. Rotate, survive, get through.'],
 ['VesuvioVoice','Juan Jesus walked off absolutely empty after 78 minutes and somehow as one of the heroes. Football.'],
 ['ScudettoWatch','Important too: key starters got managed and Napoli still reached the semifinal.'],
 ['BeierBeliever','Eleven goals and now seven assists. Two more tonight. What a season Beier is putting together.']
 ]};
 D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
 if(Array.isArray(D.results)){D.results=D.results.filter(r=>!(String(r[1]).includes('Sassuolo')&&String(r[2]).includes('Coppa')));D.results.push(['Napoli','Sassuolo','Coppa Italia · Quarterfinal',2,0,'W',"Federico Chiesa 8' · Nico Paz 70'",'Beier 2 assists · Juan Jesus crucial tackle before second goal']);}
 D.upcoming=[['Fiorentina','Serie A','Feb 6'],['Udinese','Serie A','Feb 12'],['Inter','Champions League · Knockout Playoff · 1st leg','Feb 15 · Home'],['Lecce','Serie A','Feb 20'],['Inter','Champions League · Knockout Playoff · 2nd leg','Feb 23 · Away'],['Inter','Serie A','Feb 27 · Away']];
 D.hero={...(D.hero||{}),articleId:story.id,strap:'COPPA ITALIA · SEMIFINAL BOUND'};
 D.ticker=['FT · NAPOLI 2–0 SASSUOLO · COPPA QF','CHIESA 8’ · PAZ 70’ · BEIER TWO ASSISTS','JUAN JESUS · CRUCIAL TACKLE SPARKS SECOND GOAL','NAPOLI ADVANCE TO COPPA ITALIA SEMIFINAL',...(D.ticker||[]).filter(x=>!String(x).includes('SASSUOLO'))].slice(0,9);
})();