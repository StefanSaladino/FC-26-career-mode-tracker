(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 const stories=[
 {id:'joao-neves-napoli-record-signing-july-2028',category:'Mercato',label:'BREAKING · NAPOLI',date:'July 2028',headline:'NAPOLI LAND JOÃO NEVES IN $250M BLOCKBUSTER.',dek:'The 23-year-old, 93-rated midfielder who scored against Napoli in the Champions League final is now a Napoli player. PSG receive $250M plus a 5% sell-on.',commentContext:'joao-neves-signing',commentHeat:100,body:[
 'Napoli have completed the signing of João Neves from Paris Saint-Germain for $250 million plus a 5% sell-on clause.',
 'Neves arrives at 23 years old and 93 overall, immediately becoming one of the defining pieces of Stefan Saladino’s next Napoli side.',
 'The deal comes only months after Neves scored PSG’s 38th-minute equalizer against Napoli in the Champions League final at Old Trafford, a match PSG eventually won 3–2 after extra time.',
 'Neves has agreed a Crucial squad role and a five-year contract worth $470,000 per week, with a $5 million signing bonus and a further $1.4 million after five appearances.',
 'Napoli had pursued Jude Bellingham before ending talks with Real Madrid after Madrid demanded $350 million. Napoli instead moved for Neves and closed the deal at $250 million plus the sell-on clause.',
 'The tactical picture is immediate: Nico Paz remains the creative centerpiece, while Neves brings elite ball-winning, pressure resistance and relentless midfield energy beside him. Scott McTominay remains another 88-rated option in what has become an extraordinary midfield group.'
 ],comments:[
 {user:'PazEnjoyer',lang:'en',text:'Paz has the keys and now he has a 93-rated engine beside him. This is disgusting.'},
 {user:'TacticalNonno',lang:'it',text:'Ventitré anni. Novantatré di overall. Paz e Neves possono essere il centrocampo del futuro.'},
 {user:'CurvaCalculator',lang:'en',text:'$250M plus 5% is enormous. So is signing a 23-year-old 93 OVR midfielder. This is what the war chest was for.'},
 {user:'NapoliDoomer',lang:'en',text:'We bought one of the men who scored against us in the final. I have decided this is either healing or deeply unhealthy.'},
 {user:'SaladinoOutNow',lang:'en',text:'F grade from the negotiators. 93 overall from the footballer. Unfortunately I must remain consistent. SALADINO OUT.'}
 ]},
 {id:'neves-from-final-opponent-to-napoli-july-2028',category:'Feature',label:'THE REVERSAL',date:'July 2028',headline:'HE BROKE NAPOLI’S HEART IN MANCHESTER. NOW JOÃO NEVES WEARS BLUE.',dek:'Neves scored against Napoli on the biggest night in club history. Saladino’s response was not to avoid the memory — it was to sign the midfielder at the center of it.',commentContext:'neves-reversal',commentHeat:98,body:[
 'The image is still fresh: Old Trafford, a Champions League final, Napoli leading through Pio Esposito and João Neves arriving with PSG’s equalizer in the 38th minute.',
 'PSG eventually won 3–2 after extra time. Napoli returned home with a historic season and a wound that shaped the summer.',
 'Now one of the players on the other side of that final has crossed over. Neves is a Napoli player.',
 'This is not a rebuild. Napoli went unbeaten in Serie A, won the Coppa Italia and reached the first European Cup final in club history. The signing is an attempt to add an elite piece to a team already operating at championship level.',
 'At 23, Neves also matches the timeline of Nico Paz and Pio Esposito. Napoli are not buying a short-term response to one painful night. They are trying to build the midfield of the next era.'
 ],comments:[
 {user:'PioNation',lang:'en',text:'Pio up front. Paz creating. Neves hunting everything behind them. Run it back.'},
 {user:'MeretUnion',lang:'en',text:'If you cannot erase Manchester, apparently you purchase part of PSG.'},
 {user:'AzzurriSempre',lang:'it',text:'Questo Napoli non sta ricostruendo. Sta aggiungendo campioni a una squadra già fortissima.'}
 ]}
 ];
 const ids=new Set(stories.map(a=>a.id)); D.articles=stories.concat((D.articles||[]).filter(a=>!ids.has(a.id)));
 D.hero={articleId:'joao-neves-napoli-record-signing-july-2028',strap:'BREAKING · MERCATO'};
 D.whispers=[['JOÃO NEVES · NAPOLI','$250M + 5% sell-on · 23 years old · 93 OVR.'],['F GRADE?','Napoli accept the negotiation grade and keep the 93-rated midfielder.'],['PAZ + NEVES','The next-era midfield takes shape.'],...(D.whispers||[]).filter(w=>!['JOÃO NEVES · NAPOLI','F GRADE?','PAZ + NEVES'].includes(w?.[0]))].slice(0,10);
 D.ticker=['BREAKING · JOÃO NEVES SIGNS FOR NAPOLI · $250M + 5% SELL-ON','NEVES · 23 YEARS OLD · 93 OVR · FIVE-YEAR DEAL','PAZ + NEVES · NAPOLI BUILD THE NEXT-ERA MIDFIELD',...(D.ticker||[]).filter(x=>!String(x).includes('JOÃO NEVES'))];
})();
