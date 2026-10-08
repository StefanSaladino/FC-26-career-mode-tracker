(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.results=D.results||[];
 const row=['Italy','England','EURO 2028 · Quarterfinal',1,0,'W','Retegui 75′ (Kean)','EURO quarterfinal · fifth straight clean sheet · Donnarumma decisive'];
 const i=D.results.findIndex(r=>r[0]==='Italy'&&r[1]==='England'&&String(r[2]).includes('EURO 2028'));
 if(i>=0)D.results[i]=row;else D.results.push(row);
 const stories=[
 {id:'italy-england-euro-qf-2028',category:'Italy',label:'EURO 2028 · QUARTERFINAL',date:'EURO 2028',headline:'ENGLAND OUT. ITALY ARE IN THE SEMIFINALS.',dek:'Retegui finished Kean’s pass in the 75th minute and Donnarumma did the rest. Italy beat England 1–0 and still have not conceded at EURO 2028.',commentContext:'italy-england-qf',commentHeat:100,body:[
 'Italy are two wins from the trophy.',
 'Mateo Retegui scored from Moise Kean’s assist in the 75th minute and Italy defeated England 1–0 to reach the EURO 2028 semifinals.',
 'For the first time at this tournament, Pio Esposito did not score. Italy won anyway. That may be the most important development of the night.',
 'Stefan Saladino said during the group stage that he wanted multiple players in form. Against England, with Pio’s four-match scoring streak finally ending, Kean created the chance and Retegui finished it.',
 'At the other end, Gianluigi Donnarumma delivered again. England could not become the first side to score against Italy at this tournament.',
 'Five matches. Five wins. Seven goals scored. Zero conceded. Italy are in the semifinals.'
 ],comments:[
 {user:'AzzurriSempre',lang:'it',text:'INGHILTERRA FUORI. SEMIFINALE. CINQUE PARTITE E ZERO GOL SUBITI. AVANTI.'},
 {user:'TacticalNonno',lang:'it',text:'Pio non segna? Kean serve Retegui. Questo è esattamente perché serve tutta la rosa.'},
 {user:'PioNation',lang:'en',text:'Pio did not score and apparently Italy are still allowed to win. Huge development.'},
 {user:'MeretUnion',lang:'en',text:'Donnarumma doing Donnarumma things. Again.'},
 {user:'NapoliDoomer',lang:'en',text:'SEMIFINALS. ZERO CONCEDED. I refuse to experience hope responsibly.'}
 ]},
 {id:'donnarumma-450-euro-wall-2028',category:'Italy',label:'AZZURRI FEATURE',date:'After the England quarterfinal',headline:'450 MINUTES. ZERO CONCEDED. DONNARUMMA’S EURO IS BECOMING ABSURD.',dek:'Bosnia, Norway, Turkey, Poland and now England: five opponents have tried. None have scored.',commentContext:'donnarumma-450-wall',commentHeat:97,body:[
 'Five matches into EURO 2028, Italy’s goals-against column still reads zero.',
 'England became the latest side to run into an Italian defence that has refused to break, with Donnarumma again producing the kind of goalkeeping that turns a one-goal lead into a place in the next round.',
 'The streak now stands at 450 tournament minutes without conceding. Turkey even had a penalty during the group stage and Donnarumma saved it.',
 'The numbers are becoming difficult to ignore: five matches, five clean sheets, seven goals scored and a place in the semifinals.',
 'Knockout football rarely offers comfort. Italy have instead built the tournament’s most valuable kind of margin: score once, and so far it has been enough.'
 ],comments:[
 {user:'MeretUnion',lang:'en',text:'I remain Meret Union forever. But Gigio has been absolutely ridiculous.'},
 {user:'AzzurriSempre',lang:'it',text:'CINQUE PORTE INVIOLATE. Donnarumma enorme.'},
 {user:'TacticalNonno',lang:'it',text:'In un torneo così, il portiere può portarti fino alla fine. Gigio lo sta facendo.'}
 ]},
 {id:'italy-depth-retegui-kean-england-2028',category:'Italy',label:'TACTICAL NOTE',date:'After the England quarterfinal',headline:'PIO FINALLY GOES QUIET. RETEGUI AND KEAN ANSWER.',dek:'Italy’s leading scorer did not find the net against England. Saladino’s insistence on keeping the squad involved paid off anyway.',commentContext:'italy-depth-england',commentHeat:91,body:[
 'Pio Esposito entered the quarterfinal having scored in all four of Italy’s EURO matches. England finally stopped the streak.',
 'They did not stop Italy.',
 'In the 75th minute, Moise Kean supplied Mateo Retegui and the finish sent the Azzurri into the semifinals.',
 'It was a clean illustration of Saladino’s group-stage philosophy: tournament squads cannot depend on one player remaining hot forever. Pio’s four goals remain central to Italy’s run, but against England the decisive combination came from elsewhere.',
 'That matters now. Italy are in the final four with more than one route to a goal — and with a goalkeeper and defence that have yet to require a second one.'
 ],comments:[
 {user:'RotationPolice',lang:'en',text:'THIS is why you keep everybody involved. Quarterfinal goal comes from Kean to Retegui.'},
 {user:'PioHaterForNoReason',lang:'en',text:'Zero goals against England. Bench him immediately. I have been waiting weeks for this.'},
 {user:'PioNation',lang:'en',text:'Four goals got us here. Retegui gets us through tonight. That is a team.'}
 ]},
 {id:'bellingham-crossroads-england-napoli-2028',category:'Mercato',label:'MERCATO · THE TIMING',date:'After Italy vs England',headline:'BELLINGHAM GOES HOME. NAPOLI’S SUMMER QUESTION IS STILL WAITING.',dek:'The midfielder linked with Napoli has just been eliminated by Stefan Saladino’s Italy. Napoli’s growing ambitions make the summer question impossible to ignore — but there is still no bid or agreement.',commentContext:'bellingham-england-napoli',commentHeat:88,body:[
 'The timing could hardly be cleaner.',
 'Napoli enter the summer with formidable ambition and an appetite for elite additions. Jude Bellingham remains part of the speculation around what kind of midfield signing could push the Champions League runners-up forward.',
 'Now Bellingham’s England have been eliminated from EURO 2028 by the same manager who would be coaching him in Naples: Stefan Saladino.',
 'None of that constitutes a transfer. Napoli have made no confirmed bid, there is no agreement, and there is no confirmed indication that Real Madrid intend to sell.',
 'But after Madrid’s $158.6 million approach for Alessandro Bastoni and Italy’s quarterfinal victory over England, the Madrid-Naples storyline has acquired another layer. The Euros continue first. The mercato will still be there when Saladino gets home.'
 ],comments:[
 {user:'Pazienza',lang:'en',text:'Paz plus Bellingham discourse is going to consume my entire summer, isn’t it.'},
 {user:'CurvaCalculator',lang:'en',text:'Having financial power does not legally require spending all of it.'},
 {user:'SaladinoOutNow',lang:'en',text:'He eliminated Bellingham before signing Bellingham. Reckless asset management. SALADINO OUT.'}
 ]}
 ];
 const ids=new Set(stories.map(a=>a.id));
 D.articles=stories.concat((D.articles||[]).filter(a=>!ids.has(a.id)));
 D.hero={articleId:'italy-england-euro-qf-2028',strap:'EURO 2028 · SEMIFINALISTS'};
 D.whispers=[
 ['ITALY INTO THE SEMIS','Retegui 75′ from Kean sends England home, 1–0.'],
 ['450 MINUTES · ZERO CONCEDED','Five EURO matches. Five clean sheets.'],
 ['DEPTH DELIVERS','Pio’s scoring streak ends; Kean and Retegui provide the winner.'],
 ['SUMMER FINANCES','Napoli are weighing ambitious plans for the next transfer window.'],
 ['MADRID REBUFFED','Real Madrid’s $158.6M approach for Bastoni gets nowhere.'],
 ['SEMIFINAL NEXT','Opponent not yet reported.'],
 ...(D.whispers||[]).filter(w=>!['ITALY INTO THE QUARTERS','PIO: FOUR IN FOUR','360 MINUTES · ZERO CONCEDED','KAYODE ABSENT','QUARTERFINAL NEXT','ITALY INTO THE SEMIS','450 MINUTES · ZERO CONCEDED','DEPTH DELIVERS','SUMMER FINANCES','MADRID REBUFFED','SEMIFINAL NEXT'].includes(w?.[0]))
 ].slice(0,10);
 D.ticker=['EURO 2028 · ITALY 1–0 ENGLAND','RETEGUI 75′ · ASSIST KEAN','ITALY ARE INTO THE SEMIFINALS','450 MINUTES · ZERO GOALS CONCEDED','NAPOLI · BIG SUMMER QUESTIONS AHEAD'];
})();