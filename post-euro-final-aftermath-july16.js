(()=>{
 const D=window.NAPOLI_DATA;if(!D)return;
 D.results=D.results||[];
 const row=['Germany','Italy','EURO 2028 · Final · July 16',3,2,'L','Kean 20′; Sebastiano Esposito 117′','AET · Germany champions · Italy runners-up'];
 const i=D.results.findIndex(r=>r[0]==='Germany'&&r[1]==='Italy'&&String(r[2]).includes('EURO 2028'));
 if(i>=0)D.results[i]=row;else D.results.push(row);
 const stories=[
 {id:'germany-italy-euro-final-july16-2028',category:'Italy',label:'EURO 2028 · FINAL',date:'July 16, 2028',headline:'HEARTBREAK AGAIN. GERMANY BEAT ITALY 3–2 AFTER EXTRA TIME.',dek:'Kean gave Italy the lead, Woltemade equalized, Germany struck twice in the second half of extra time and Sebastiano Esposito’s 117th-minute reply came too late.',commentContext:'italy-germany-final',commentHeat:100,body:[
 'For the second time in less than two months, Stefan Saladino has lost a European final 3–2 after extra time.',
 'Moise Kean put Italy ahead in the 20th minute with an unassisted goal. Gianluigi Donnarumma made three confirmed saves before halftime as Germany pushed for a response.',
 'Woltemade equalized in the 76th minute. No assist was reported on the goal.',
 'The match reached 90 minutes at 1–1 and remained level through the first half of extra time, with Donnarumma and Germany goalkeeper Noah Atubolu both making saves.',
 'Germany then scored twice in the second half of extra time. The scorers, minutes and assists on those two goals were not reported.',
 'Sebastiano Esposito pulled one back in the 117th minute, but Italy could not find another. Germany won 3–2 after extra time and became European champions.',
 'Italy leave as runners-up after winning six consecutive matches to reach the final.'
 ],comments:[
 {user:'AzzurriSempre',lang:'it',text:'Fa malissimo. Ma questa squadra ci ha fatto credere di nuovo. Non dimenticatelo.'},
 {user:'NapoliDoomer',lang:'en',text:'ANOTHER 3-2 EXTRA-TIME EUROPEAN FINAL LOSS. I am filing a complaint with the concept of time.'},
 {user:'MeretUnion',lang:'en',text:'Gigio was massive. Three saves before halftime and more later. He gave them every chance.'},
 {user:'SaladinoOutNow',lang:'en',text:'Two European finals lost 3-2 after extra time in seven weeks. Suspiciously specific. SALADINO OUT.'}
 ]},
 {id:'napotalia-signs-of-something-july-2028',category:'Italy',label:'AZZURRI · THE MORNING AFTER',date:'After the EURO 2028 final',headline:'NO TROPHY. BUT NAPOTALIA IS SHOWING SIGNS OF SOMETHING.',dek:'A national team that had missed three straight World Cups just came within extra time of becoming European champions. Napoli and Italy see progress — and unfinished work.',commentContext:'napotalia-after-euro',commentHeat:99,body:[
 'Germany have the trophy. Italy do not. Nobody inside the project is interested in pretending otherwise.',
 'But the context matters. This is an Italian side emerging from three consecutive missed World Cups in this save. At EURO 2028 it won six straight matches, opened the tournament with five consecutive clean sheets and reached the final before losing 3–2 after extra time.',
 'The foundations are becoming visible. Pio Esposito. Alessandro Buongiorno. Alessandro Bastoni. Riccardo Calafiori. Gianluigi Donnarumma. Around them are Barella, Tonali, Kayode, Kean, Retegui and Sebastiano Esposito.',
 'Project Napotalia began with club and country increasingly sharing players, habits and expectations. It is no longer merely an idea. Napoli players produced decisive moments throughout Italy’s run, while the national-team environment has also highlighted players outside the club who fit the broader direction.',
 'The Napoli board and the Italy hierarchy are thrilled with the results of the work so far. They also believe there is work left to do.',
 'There is no victory lap. Germany are champions. Italy go back to work.'
 ],comments:[
 {user:'TacticalNonno',lang:'it',text:'Tre Mondiali mancati di fila. Ora una finale europea persa ai supplementari. Non è un trofeo, ma è una direzione.'},
 {user:'AzzurriSempre',lang:'it',text:'Finalmente c’è una base. Donnarumma, Bastoni, Buongiorno, Calafiori, Pio. Adesso bisogna continuare.'},
 {user:'NapoliDoomer',lang:'en',text:'I hate hope. Unfortunately this team has given me quite a lot of it.'},
 {user:'SaladinoOutNow',lang:'en',text:'Board thrilled. Italy thrilled. Me? Unmoved. SALADINO OUT.'}
 ]},
 {id:'pio-arc-begins-july-2028',category:'Italy',label:'PLAYER FEATURE',date:'After EURO 2028',headline:'THIS IS NOT THE END OF PIO’S EURO STORY. IT IS THE START OF HIS ARC.',dek:'Four EURO goals after a 29-goal Napoli season. Two brutal European-final defeats. The evidence is no longer about potential: big moments do not scare Pio Esposito.',commentContext:'pio-arc-after-euro',commentHeat:100,body:[
 'Pio Esposito leaves EURO 2028 without the medal he wanted and with more evidence that the biggest occasions do not shrink him.',
 'He scored four times at the tournament: against Bosnia, Norway, Turkey and Poland. He finished as Italy’s leading scorer.',
 'That followed a Napoli season of 29 goals and 12 assists. His year included the winner against Atlético after 134 scoreless minutes in the tie, the 90+2 equalizer at Torino that preserved Napoli’s unbeaten Serie A season, and two goals in the Champions League final against Paris Saint-Germain.',
 'Napoli lost that final 3–2 after extra time. Italy have now lost the EURO final by the same score after extra time.',
 'That pain becomes part of the story now. Pio has already demonstrated that pressure does not make him disappear. The next question is what a player with that record does after experiencing this level of heartbreak twice.',
 'Napoli do not need to wonder whether Pio can become a central figure. He already is one. The next phase is about how much bigger he can become.'
 ],comments:[
 {user:'PioNation',lang:'en',text:'29 club goals. Four EURO goals. Big-game receipts everywhere. This is chapter one.'},
 {user:'PioHaterForNoReason',lang:'en',text:'Zero goals in the final. I will be ignoring every piece of context listed above.'},
 {user:'PioShirtOwner',lang:'en',text:'He is coming back to Napoli angry. I would like to apologize in advance to Serie A.'},
 {user:'AzzurriSempre',lang:'it',text:'Pio deve ricordare questo dolore. E poi tornare più forte.'}
 ]},
 {id:'napoli-window-open-lang-gilmour-out-july-2028',category:'Mercato',label:'MERCATO · WINDOW OPEN',date:'July 2028',headline:'BACK TO NAPLES. THE WINDOW IS OPEN — LANG AND GILMOUR ARE OUT.',dek:'The international run is over. Napoli turn immediately toward 2028–29 with major decisions ahead and two confirmed departures already on the books.',commentContext:'napoli-window-open-july',commentHeat:96,body:[
 'The EURO run is over. Napoli business resumes immediately.',
 'The transfer window is open, and Napoli’s recruitment department is assessing the next moves after an extraordinary season.',
 'Noa Lang has completed his $47 million move to Bournemouth. Billy Gilmour is also out, having already been sold.',
 'Federico Chiesa remains a Napoli player after Bournemouth’s $36.7 million offer was rejected. Real Madrid’s $158.6 million approach for Alessandro Bastoni was also rejected.',
 'The message from the Napoli board mirrors the mood around the Italy project: satisfaction with how far the team has come, but no sense that the work is finished.',
 'Napoli return from an unbeaten Serie A title, a Coppa Italia triumph and a first Champions League final. The squad does not require a rebuild. With $353 million available, the summer is about deciding which roles can turn last season’s near-miss in Europe into the next step.'
 ],comments:[
 {user:'CurvaCalculator',lang:'en',text:'Lang out. Gilmour out. Do not buy a name simply because we can. Buy the missing piece.'},
 {user:'SquadDepthDept',lang:'en',text:'This is the fun kind of window. Champion squad, huge budget, targeted surgery.'},
 {user:'ChiesaHive',lang:'en',text:'And Chiesa is STILL HERE after that Bournemouth bid. I am watching every notification.'},
 {user:'SaladinoOutNow',lang:'en',text:'Financial ambition is no excuse for failing to sign eleven Ballon d’Or winners. SALADINO OUT.'}
 ]}
 ];
 const ids=new Set(stories.map(a=>a.id));
 D.articles=stories.concat((D.articles||[]).filter(a=>!ids.has(a.id)));
 D.hero={articleId:'napotalia-signs-of-something-july-2028',strap:'ITALY · EURO 2028 RUNNERS-UP'};
 D.whispers=[
 ['GERMANY 3–2 ITALY · AET','Italy fall in the EURO 2028 final after six straight wins.'],
 ['NAPOTALIA','No trophy. Clear signs of a national-team foundation.'],
 ['PIO · THE NEXT ARC','Four EURO goals after a 29-goal Napoli season.'],
 ['BOARDS BACK THE PROJECT','Napoli and Italy are thrilled with the results so far — and expect more work.'],
 ['SUMMER REBUILD','The Napoli transfer window is open and the club faces major decisions.'],
 ['LANG OUT','Official: Bournemouth · $47M.'],
 ['GILMOUR OUT','Billy Gilmour has been sold.'],
 ['CHIESA STILL HERE','Bournemouth’s $36.7M offer was rejected.'],
 ...(D.whispers||[]).filter(w=>!['GERMANY 3–2 ITALY · AET','NAPOTALIA','PIO · THE NEXT ARC','BOARDS BACK THE PROJECT','SUMMER REBUILD','LANG OUT','GILMOUR OUT','CHIESA STILL HERE'].includes(w?.[0]))
 ].slice(0,10);
 D.ticker=['EURO 2028 FINAL · GERMANY 3–2 ITALY · AET','ITALY · RUNNERS-UP · SIX STRAIGHT WINS BEFORE THE FINAL','NAPOTALIA · NO TROPHY · SOMETHING IS BUILDING','PIO · 4 EURO GOALS · 29 NAPOLI GOALS LAST SEASON','NAPOLI TRANSFER WINDOW OPEN · RECRUITMENT PLANS UNDER WAY','OUT · NOA LANG · BILLY GILMOUR'];
})();