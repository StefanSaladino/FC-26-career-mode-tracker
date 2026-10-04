(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const story={id:'torino-coppa-beier-hat-trick-mar-2028',category:'Match Report',label:'Coppa Italia · FT',date:'Torino 0–4 Napoli · March 1, 2028',tone:'win',reaction:'win',visitorClub:'Torino',headline:'Three Pens and a Funeral: Beier Buries Torino',dek:'A scoreless first half turns completely absurd as Maximilian Beier converts three penalties in 16 minutes, then sets up Endrick to finish a 4–0 Coppa demolition.',body:[
  'For 49 minutes, almost nothing happened. Torino and Napoli reached halftime scoreless and the Coppa tie looked destined to become a long, tense knockout night.',
  'Then Torino completely lost control of their own penalty area.',
  'Napoli were awarded a penalty in the 50th minute. With Pio Esposito resting, Maximilian Beier stepped up and converted. Twelve minutes later Napoli won another penalty. Beier took that one too and made it 2–0.',
  'Four minutes after that came the absurdity: a third Napoli penalty. Beier stepped up for the third time and completed a penalty hat trick — three spot kicks converted between the 50th and 66th minutes.',
  'Beier was not finished. In the 86th minute, apparently tired of scoring himself, he supplied Endrick for Napoli’s fourth. The Brazilian made it 4–0 and closed a second half in which Beier had a direct hand in every goal.',
  'The final line is ridiculous: Beier, three goals and one assist. His season total rises to 15 goals and nine assists. Endrick moves to 11 goals and seven assists.',
  'Pio received the intended rest, Napoli avoided extra time, and the club advances in the Coppa with Real Madrid looming in the Champions League. A match that was dead at halftime became one of the strangest routs of the season.'
 ],commentHeat:22,comments:[
  ['NoTacticsJustVibes','BEIER HEAT MAP: ⚪ the penalty spot. That is the entire graphic.'],
  ['TorinoLegalDept','We have advised the defenders to stop committing crimes inside the penalty area.'],
  ['BeierHive','Three penalties, three goals, then an assist because apparently scoring got boring. 3G 1A.'],
  ['SempreNapoli','0-0 at halftime to 4-0 at full time is already stupid. THREE penalties in sixteen minutes makes it art.'],
  ['PioEra','Pio got the full rest and Beier handled the entire attack. Perfect night before Madrid week.'],
  ['EndrickEra','Beier finally gets tired of scoring and just hands Endrick number 11 😂'],
  ['PartenopeiProfessor','Jokes aside, converting the third penalty is not automatic. Same keeper, hat trick pressure, knockout match. Beier was ice cold.'],
  ['CurvaB','PENALTY. BEIER. PENALTY. BEIER. PENALTY. BEIER.'],
  ['TorinoAwayEnd','Could our defenders perhaps consider defending OUTSIDE the box next time.'],
  ['ScudettoWatch','15G 9A for Beier. We need to stop calling him supporting cast.'],
  ['Pazienza','The best part is this tie was genuinely tense for fifty minutes and then Torino just self-destructed.'],
  ['MadridWatch','Pio rested. No extra time. Endrick scores. Beier catches fire. Now get everyone home safely.'],
  ['NapoliTherapy','Torino conceded fewer goals once they stopped fouling people in the box. Tactical adjustment of the night.'],
  ['VesuvioVoice','Four goals, clean sheet, qualification. That is exactly how you want to begin this March schedule.']
 ]};
 D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
 if(Array.isArray(D.results)){D.results=D.results.filter(r=>!(String(r[0])==='Torino'&&String(r[1])==='Napoli'&&String(r[2]).includes('Coppa')));D.results.push(['Torino','Napoli','Coppa Italia',0,4,'W',"Beier 50’ pen, 62’ pen, 66’ pen; Endrick 86’",'Beier assist on Endrick · Beier 3G/1A · Napoli advance']);}
 D.upcoming=[['Cagliari','Serie A','Mar 4 · Home'],['Real Madrid','Champions League · Round of 16 · 1st leg','Mar 7 · Home'],['Parma','Serie A','Mar 12 · Away'],['Real Madrid','Champions League · Round of 16 · 2nd leg','Mar 15 · Away'],['Genoa','Serie A','Mar 18 · Home'],['Egypt','International Friendly','Mar 22 · Home · Italy'],['New Zealand','International Friendly','Mar 25 · Home · Italy'],['Lazio','Serie A','Mar 31 · Away']];
 D.hero={...(D.hero||{}),articleId:story.id,strap:'COPPA ITALIA · NAPOLI ADVANCE · BEIER 3G 1A'};
 D.ticker=['FT · TORINO 0–4 NAPOLI','BEIER · PEN 50’ · PEN 62’ · PEN 66’','BEIER · HAT TRICK + ASSIST','ENDRICK 86’ · BEIER ASSIST','NAPOLI ADVANCE IN THE COPPA','NEXT · CAGLIARI · THEN REAL MADRID',...(D.ticker||[]).filter(x=>!String(x).includes('NEXT · TORINO'))].slice(0,10);
})();