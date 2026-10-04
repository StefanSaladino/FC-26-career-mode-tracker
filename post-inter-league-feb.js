(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const story={id:'inter-league-draw-feb-2028',category:'Match Report',label:'Serie A · FT',date:'Inter 1–1 Napoli · February 27, 2028',tone:'draw',reaction:'draw',visitorClub:'Inter',headline:'Inter Get Their Rematch. Napoli Keep Their Eight Points.',dek:'Beier strikes early from a Geertruida assist, De Arrascaeta answers again, and Napoli leave the San Siro unbeaten with the title gap untouched.',body:[
  'Four days after eliminating Inter from the Champions League, Napoli returned to the San Siro with a different objective. This time there was no aggregate deficit to chase. Inter needed to cut an eight-point Serie A gap. Napoli needed to make sure they did not.',
  'Napoli struck first in the 17th minute. Lutsharel Geertruida supplied Maximilian Beier, who finished to put the league leaders ahead and briefly push the live title gap to eleven points.',
  'Inter found their equalizer in the 41st minute through the increasingly familiar Giorgian De Arrascaeta. After scoring twice in the Champions League first leg, he again found a way through Napoli and sent the sides into halftime level.',
  'Napoli waited until the 70th minute before opening the cabinet: Endrick, Kevin De Bruyne and Alphonso Davies entered together. The late push did not produce a winner, but strategically Napoli had already achieved the essential objective.',
  'The 1–1 draw moves Napoli to 65 points from 27 matches and preserves an unbeaten 19W–8D–0L Serie A record. Inter move to 57 from 27. The gap remains eight points.',
  'Napoli therefore leave Milan after two matches in four days having eliminated Inter from Europe and denied them any ground in the title race. The rivalry week belongs to Napoli even without a second victory.'
 ],commentHeat:18,comments:[
  ['SempreNapoli','Two trips to the San Siro in four days: knock them out of Europe, then refuse to give them a single point of ground in the title race. I will take that.'],
  ['NoTacticsJustVibes','Inter finally scored at home against us and STILL gained nothing in the table 😭'],
  ['BeierHive','Beier 12 goals now. Quietly having a massive season.'],
  ['GeertruidaGang','First recorded assist for Geertruida and it comes at San Siro. Utility man paying rent.'],
  ['DeArrascaetaTrauma','Can somebody PLEASE make De Arrascaeta play literally anybody else.'],
  ['PartenopeiProfessor','This was not the UCL tie. A draw here is strategically excellent: eight-point lead preserved, unbeaten run preserved.'],
  ['CurvaB','19 wins. 8 draws. ZERO losses. Ventisette partite.'],
  ['InteristaInPain','We got the rematch and the gap is still eight. Fantastic week.'],
  ['CurvaNordNapoli','First we took Europe. Then we protected the Scudetto lead. Milano trip complete.'],
  ['MarchMadnessNapoli','Cool. Now Torino, Madrid twice and the rest of that March schedule. Nobody sleep.'],
  ['Pazienza','The 70th-minute Endrick/KDB/Davies triple sub was pure menace even if it did not find the winner.'],
  ['ScudettoWatch','Napoli 65, Inter 57. Inter needed a win much more than Napoli did. That is the whole story.']
 ]};
 D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
 if(Array.isArray(D.results)){D.results=D.results.filter(r=>!(String(r[0]).includes('Inter')&&String(r[1]).includes('Napoli')&&String(r[2])==='Serie A'));D.results.push(['Inter','Napoli','Serie A',1,1,'D',"Beier 17'",'Geertruida assist · De Arrascaeta 41’ · Napoli remain unbeaten']);}
 D.upcoming=[['Torino','Coppa Italia','Mar 1 · Away'],['Cagliari','Serie A','Mar 4 · Home'],['Real Madrid','Champions League · Round of 16 · 1st leg','Mar 7 · Home'],['Parma','Serie A','Mar 12 · Away'],['Real Madrid','Champions League · Round of 16 · 2nd leg','Mar 15 · Away'],['Genoa','Serie A','Mar 18 · Home'],['Egypt','International Friendly','Mar 22 · Home · Italy'],['New Zealand','International Friendly','Mar 25 · Home · Italy'],['Lazio','Serie A','Mar 31 · Away']];
 D.hero={...(D.hero||{}),articleId:story.id,strap:'SERIE A · 19W 8D 0L · EIGHT CLEAR'};
 D.ticker=['FT · INTER 1–1 NAPOLI','BEIER 17’ · GEERTRUIDA ASSIST','NAPOLI · 27 PLAYED · 19W 8D 0L · 65 PTS','INTER · 57 PTS · GAP REMAINS EIGHT','NEXT · TORINO AWAY · COPPA ITALIA','UCL R16 · REAL MADRID · MAR 7 / MAR 15',...(D.ticker||[]).filter(x=>!String(x).includes('INTER 0–2')&&!String(x).includes('ADVANCE 3–2'))].slice(0,10);
})();