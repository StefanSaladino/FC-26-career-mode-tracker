(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const story={id:'torino-coppa-beier-hat-trick-mar-2028',category:'Match Report',label:'Coppa Italia · Leg 1 · FT',date:'Torino 0–4 Napoli · March 1, 2028',tone:'win',reaction:'win',visitorClub:'Torino',headline:'Three Pens and a Funeral: Beier Buries Torino in Leg One',dek:'A scoreless first half turns completely absurd as Maximilian Beier converts three penalties in 16 minutes, then sets up Endrick to give Napoli a commanding 4–0 first-leg advantage.',body:[
  'For 49 minutes, almost nothing happened. Torino and Napoli reached halftime scoreless and the first leg looked destined to become a long, tense Coppa night.',
  'Then Torino completely lost control of their own penalty area.',
  'Napoli were awarded a penalty in the 50th minute. With Pio Esposito resting, Maximilian Beier stepped up and converted. Twelve minutes later Napoli won another penalty. Beier took that one too and made it 2–0.',
  'Four minutes after that came the absurdity: a third Napoli penalty. Beier stepped up for the third time and completed a penalty hat trick — three spot kicks converted between the 50th and 66th minutes.',
  'Beier was not finished. In the 86th minute, apparently tired of scoring himself, he supplied Endrick for Napoli’s fourth. The Brazilian made it 4–0 and closed a second half in which Beier had a direct hand in every goal.',
  'The final line is ridiculous: Beier, three goals and one assist. His season total rises to 15 goals and nine assists. Endrick moves to 11 goals and seven assists.',
  'Pio received the intended rest and Napoli leave Turin holding a massive 4–0 advantage after leg one. The tie is not over and qualification is not yet official, but Napoli could hardly have put themselves in a stronger position before the return leg.'
 ],commentHeat:22,comments:[
  ['NoTacticsJustVibes','BEIER HEAT MAP: ⚪ the penalty spot. That is the entire graphic.'],
  ['TorinoLegalDept','We have advised the defenders to stop committing crimes inside the penalty area.'],
  ['BeierHive','Three penalties, three goals, then an assist because apparently scoring got boring. 3G 1A.'],
  ['SempreNapoli','0-0 at halftime to 4-0 at full time is already stupid. THREE penalties in sixteen minutes makes it art.'],
  ['PioEra','Pio got the full rest and Beier handled the entire attack. Perfect night before Madrid week.'],
  ['EndrickEra','Beier finally gets tired of scoring and just hands Endrick number 11 😂'],
  ['PartenopeiProfessor','Jokes aside, converting the third penalty is not automatic. Same keeper, hat trick pressure, first-leg stakes. Beier was ice cold.'],
  ['CurvaB','PENALTY. BEIER. PENALTY. BEIER. PENALTY. BEIER.'],
  ['TorinoAwayEnd','Could our defenders perhaps consider defending OUTSIDE the box next time.'],
  ['ScudettoWatch','15G 9A for Beier. We need to stop calling him supporting cast.'],
  ['Pazienza','The best part is this leg was genuinely tense for fifty minutes and then Torino just self-destructed.'],
  ['MadridWatch','Pio rested. Endrick scores. Beier catches fire. And we take a four-goal cushion into leg two.'],
  ['NapoliTherapy','Torino conceded fewer goals once they stopped fouling people in the box. Tactical adjustment of the night.'],
  ['VesuvioVoice','Four goals, clean sheet, 4-0 aggregate lead. Not through yet — but that is a phenomenal first leg.']
 ]};
 D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
 if(Array.isArray(D.results)){D.results=D.results.filter(r=>!(String(r[0])==='Torino'&&String(r[1])==='Napoli'&&String(r[2]).includes('Coppa')));D.results.push(['Torino','Napoli','Coppa Italia · Leg 1',0,4,'W',"Beier 50’ pen, 62’ pen, 66’ pen; Endrick 86’",'Beier assist on Endrick · Beier 3G/1A · Napoli lead tie 4–0']);}
 D.hero={...(D.hero||{}),articleId:story.id,strap:'COPPA ITALIA · LEG 1 · NAPOLI LEAD 4–0'};
 D.ticker=['FT · TORINO 0–4 NAPOLI · LEG 1','BEIER · PEN 50’ · PEN 62’ · PEN 66’','BEIER · HAT TRICK + ASSIST','ENDRICK 86’ · BEIER ASSIST','NAPOLI TAKE A 4–0 LEAD INTO LEG 2','NEXT · CAGLIARI · THEN REAL MADRID',...(D.ticker||[]).filter(x=>!String(x).includes('NAPOLI ADVANCE IN THE COPPA'))].slice(0,10);
})();