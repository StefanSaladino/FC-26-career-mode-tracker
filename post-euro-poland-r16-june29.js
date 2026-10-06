(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.results=D.results||[];
 const row=['Italy','Poland','EURO 2028 · Round of 16',1,0,'W','Pio Esposito 30′ (unassisted)','June 29, 2028 · Kayode suspended · fourth straight clean sheet'];
 const i=D.results.findIndex(r=>r[0]==='Italy'&&r[1]==='Poland'&&String(r[2]).includes('EURO 2028'));
 if(i>=0)D.results[i]=row;else D.results.push(row);
 const stories=[
 {id:'italy-poland-euro-r16-june29-2028',category:'Italy',label:'EURO 2028 · ROUND OF 16',date:'June 29, 2028',headline:'PIO. AGAIN. ITALY ARE IN THE QUARTERFINALS.',dek:'Pio Esposito struck unassisted in the 30th minute and Italy made it stand: 1–0 over Poland, four wins from four, and still no goals conceded.',commentContext:'italy-poland-r16',commentHeat:100,body:[
 'Knockout football changed the stakes. It did not change the scorer.',
 'Pio Esposito scored an unassisted goal in the 30th minute and Italy defeated Poland 1–0 on June 29 to advance to the EURO 2028 quarterfinals.',
 'Italy entered the Round of 16 without Michael Kayode, suspended following a red card. They leave it with the same defensive record they carried out of the group: untouched.',
 'Four matches have now produced four wins, six goals and zero conceded. Pio has scored in every one of them.',
 'The perfect group stage bought Italy passage into the knockouts. Nothing was guaranteed after that. One Pio goal and another clean sheet have bought them one more match.'
 ],comments:[
 {user:'AzzurriSempre',lang:'it',text:'QUARTI. QUATTRO PARTITE. ZERO GOL SUBITI. AVANTI ITALIA.'},
 {user:'PioNation',lang:'en',text:'FOUR MATCHES. FOUR GOALS. HE DOES NOT CARE WHAT ROUND IT IS.'},
 {user:'TacticalNonno',lang:'it',text:'Senza Kayode, partita da eliminazione diretta, 1–0 e porta chiusa. Squadra matura.'},
 {user:'NapoliDoomer',lang:'en',text:'We are in the quarters and have conceded zero goals. Naturally I am completely calm. This is a lie.'},
 {user:'PioHaterForNoReason',lang:'en',text:'Unassisted? Selfish. Pio agenda remains alive.'}
 ]},
 {id:'pio-four-in-four-euro-2028',category:'Italy',label:'PLAYER WATCH · PIO ESPOSITO',date:'June 29, 2028',headline:'FOUR MATCHES. FOUR GOALS. PIO’S STREAK SURVIVES THE KNOCKOUTS.',dek:'Bosnia. Norway. Turkey. Poland. Pio Esposito has scored in every Italy match at EURO 2028.',commentContext:'pio-four-in-four',commentHeat:98,body:[
 'At some point a scoring streak stops looking like form and starts defining a tournament.',
 'Pio scored against Bosnia. He scored the winner against Norway. He converted against Turkey. Against Poland, with Italy’s tournament now one mistake from ending, he scored again — unassisted in the 30th minute.',
 'That makes four goals in four EURO matches, with at least one in every match Italy have played.',
 'His run also follows directly from a two-goal performance for Napoli in the Champions League final. Club season into international tournament, the goals have simply continued.',
 'Italy are in the quarterfinals. Their number nine arrives there having answered every match so far.'
 ],comments:[
 {user:'PioNation',lang:'en',text:'Bosnia. Norway. Turkey. Poland. Cross them off one by one.'},
 {user:'PioEra',lang:'it',text:'Non è più una sorpresa. È Pio.'},
 {user:'MeretUnion',lang:'en',text:'Somebody please preserve this man in bubble wrap between matches.'}
 ]},
 {id:'italy-360-zero-conceded-euro-2028',category:'Italy',label:'AZZURRI FEATURE',date:'June 29, 2028',headline:'360 MINUTES. ZERO CONCEDED. ITALY’S WALL REACHES THE QUARTERFINALS.',dek:'The group-stage clean-sheet streak survived its first knockout test as Italy shut out Poland 1–0.',commentContext:'italy-360-wall',commentHeat:92,body:[
 'Bosnia could not score. Norway could not score. Turkey could not score, even from the penalty spot. Poland could not score with Italy’s tournament on the line.',
 'Italy have now played 360 minutes at EURO 2028 without conceding a goal.',
 'The fourth clean sheet came with Michael Kayode unavailable through suspension, adding another test of the depth behind Saladino’s defensive structure.',
 'Donnarumma’s penalty save against Turkey remains the most dramatic single moment of the run, but the larger story is repetition: four matches, four shutouts.',
 'Italy enter the quarterfinals with a perfect record and a defence no opponent at this tournament has yet solved.'
 ],comments:[
 {user:'AzzurriSempre',lang:'it',text:'360 MINUTI. ZERO. Questa difesa è seria.'},
 {user:'MeretUnion',lang:'en',text:'Four straight clean sheets. Gigio and this back line are cooking.'},
 {user:'TacticalNonno',lang:'it',text:'Le partite a eliminazione diretta si vincono anche così. Un gol. Nessun regalo.'}
 ]}
 ];
 const ids=new Set(stories.map(a=>a.id));
 D.articles=stories.concat((D.articles||[]).filter(a=>!ids.has(a.id)));
 D.hero={articleId:'italy-poland-euro-r16-june29-2028',strap:'EURO 2028 · QUARTERFINALISTS'};
 D.whispers=[
 ['ITALY INTO THE QUARTERS','Pio’s 30′ goal beats Poland 1–0 on June 29.'],
 ['PIO: FOUR IN FOUR','Esposito has scored in every Italy match at EURO 2028.'],
 ['360 MINUTES · ZERO CONCEDED','Four matches. Four clean sheets.'],
 ['KAYODE ABSENT','Italy advanced despite Michael Kayode’s red-card suspension.'],
 ['QUARTERFINAL NEXT','Opponent not yet reported.'],
 ...(D.whispers||[]).filter(w=>!['PERFECT NINE','PIO: THREE IN THREE','GIGIO SAYS NO','BUONGIORNO RISES','KNOCKOUTS NEXT','ITALY INTO THE QUARTERS','PIO: FOUR IN FOUR','360 MINUTES · ZERO CONCEDED','KAYODE ABSENT','QUARTERFINAL NEXT'].includes(w?.[0]))
 ].slice(0,9);
 D.ticker=['EURO 2028 · ITALY 1–0 POLAND · JUNE 29','PIO 30′ · UNASSISTED · FOUR GOALS IN FOUR','ITALY ARE INTO THE QUARTERFINALS','360 MINUTES · ZERO GOALS CONCEDED','KAYODE SUSPENDED · ITALY ADVANCE ANYWAY'];
})();