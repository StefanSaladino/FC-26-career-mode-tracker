(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const story={id:'fiorentina-home-feb-2028',category:'Match Report',label:'Serie A · FT',date:'Napoli 3–2 Fiorentina · February 2028',tone:'win',headline:'Pio Misses, Steps Up Again, and Napoli Hold Off Fiorentina',dek:'Nico Paz opens the scoring, Pio Esposito produces a Goal of the Year candidate and then answers his own penalty miss as unbeaten Napoli move to 60 points.',body:[
  'Napoli preserved their unbeaten Serie A season with a dramatic 3–2 home victory over Fiorentina, moving to 60 points from 24 matches and stretching their lead over Inter to seven points after the latest round.',
  'Nico Paz opened the scoring in the 15th minute. Scott McTominay played him in, Paz saw his first effort stopped and then followed his own rebound to make it 1–0. Albert Guðmundsson answered for Fiorentina in the 23rd minute.',
  'The moment of the night arrived in the 58th minute. Michael Kayode delivered an extraordinary cross from around the halfway line and Pio Esposito ran onto it before striking first time. The finish put Napoli 2–1 ahead and stands as an immediate Goal of the Year candidate.',
  'Pio then had the chance to settle the match from the penalty spot in the 70th minute but missed. When Napoli won another penalty in the 87th, he took responsibility again. This time he scored, completing his brace and reaching 21 goals in Napoli’s running season totals.',
  'Guðmundsson converted a Fiorentina penalty one minute later to make it 3–2, but the final whistle arrived before the visitors could complete the comeback. Napoli leave the night 18W–6D–0L in Serie A.',
  'Attention now turns to squad management. Udinese is next on February 12, with Napoli planning rotation to preserve the first-choice core for the Champions League knockout playoff first leg against Inter on February 15.'
 ],commentHeat:12,reaction:'win',visitorClub:'Fiorentina',comments:[
  ['PartenopeiProfessor','Pio missing one penalty and demanding the second is striker mentality. The halfway-line delivery from Kayode was outrageous too.'],
  ['CurvaNordNapoli','VENTUNO GOL. Sbaglia il rigore e si ripresenta dal dischetto. Questo ragazzo non ha paura.'],
  ['NoTacticsJustVibes','Kayode crossed that thing from another postal code and Pio hit it first time 😭'],
  ['AzzurroSempre','18 vittorie, 6 pareggi, ZERO sconfitte. Sessanta punti. Sempre Napoli.'],
  ['ScudettoWatch','Inter are now seven points back after 24 matches. The February pressure has shifted heavily onto them.'],
  ['VesuvioVoice','That 58th-minute goal needs to be in every end-of-season montage.'],
  ['NapoliSinceBirth','Paz keeps producing. McTominay with the pass, rebound, goal. Then Pio takes over.'],
  ['KayodeHive','Assist of the season candidate. From the centre line. Perfect weight. Perfect run.'],
  ['PioEra','Miss at 70. Ball back in his hands at 87. Goal. That tells you everything.'],
  ['PartenopeoCanada','Now rotate at Udinese. Inter is three days later and that UCL tie is the priority.']
 ]};
 D.articles=[story,...(D.articles||[]).filter(a=>a.id!==story.id)];
 if(Array.isArray(D.results)){D.results=D.results.filter(r=>!(String(r[0]).includes('Napoli')&&String(r[1]).includes('Fiorentina')&&String(r[2]).includes('Serie A')));D.results.push(['Napoli','Fiorentina','Serie A',3,2,'W',"Nico Paz 15' · Pio Esposito 58', 87' (pen)","McTominay assist · Kayode assist · Pio missed pen 70' · Guðmundsson 23', 88' (pen)"]);}
 D.upcoming=[['Udinese','Serie A','Feb 12 · Away'],['Inter','Champions League · Knockout Playoff · 1st leg','Feb 15 · Home'],['Lecce','Serie A','Feb 20 · Away'],['Inter','Champions League · Knockout Playoff · 2nd leg','Feb 23 · Away'],['Inter','Serie A','Feb 27 · Away']];
 D.hero={...(D.hero||{}),articleId:story.id,strap:'SERIE A · 18W 6D 0L · 60 POINTS'};
 D.ticker=['FT · NAPOLI 3–2 FIORENTINA','PIO ESPOSITO · 58’ & 87’ · 21 GOALS','KAYODE → PIO · GOAL OF THE YEAR CANDIDATE','SERIE A · NAPOLI 60 · INTER 53 · SEVEN-POINT LEAD','NAPOLI · 18W 6D 0L · STILL UNBEATEN',...(D.ticker||[]).filter(x=>!String(x).includes('FIORENTINA')&&!String(x).includes('57 PTS')&&!String(x).includes('17W'))].slice(0,9);
})();