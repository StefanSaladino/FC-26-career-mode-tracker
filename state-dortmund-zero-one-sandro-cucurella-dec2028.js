/* VERIFIED: Dortmund 0–1 Napoli FT 5 Dec 2028, Pio 27′ (Beier); Meret one save;
starting back four Cucurella/Bastoni/Buongiorno/Calafiori; Kayode substitute.
Napoli 10 UCL points/6 matches, 9GF 10GA. Cucurella two-year extension.
Public site state does not include staff-room debate, manager assessments or private pay terms. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const game={played:true,fullTime:true,date:'2028-12-05',venue:'Away',competition:'Champions League',
 home:'Borussia Dortmund',away:'Napoli',score:'Borussia Dortmund 0–1 Napoli',
 halftime:'Borussia Dortmund 0–1 Napoli',goals:[{minute:27,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier'}],
 notedEvents:[{description:'João Neves won an early Napoli corner',minute:null},{description:'Beier attempt saved by Gregor Kobel just before halftime',minute:null}],
 startingGoalkeeper:'Alex Meret',meretSaves:1,meretCleanSheet:true,
 startingDefenders:['Marc Cucurella','Alessandro Bastoni','Alessandro Buongiorno','Riccardo Calafiori'],
 substitutesConfirmed:[{player:'Michael Kayode',action:'entered to help close out the lead',minute:null,playerOut:null}],
 fullStartingXIConfirmed:false,allSubstitutionsConfirmed:false,
 note:'Reporter-observable match details only. No unconfirmed scoring chances, timings or backstage staff discussion.'};
D.dortmundDecember2028=game;
const row=['Napoli','Borussia Dortmund','Champions League',1,0,'W','5 Dec 2028 · Away',
 'DORTMUND 0–1 NAPOLI FT · Pio Esposito 27′ (Beier assist); João Neves won early corner; Kobel saved Beier late first half; Meret started and made ONE save; back four Cucurella-Bastoni-Buongiorno-Calafiori; Kayode substitute to close win'];
for(const key of ['results','results2028']){
 D[key]=D[key]||[];
 const i=D[key].findIndex(x=>x[0]==='Napoli'&&x[1]==='Borussia Dortmund'&&x[2]==='Champions League'&&String(x[6]).includes('5 Dec 2028'));
 if(i>=0)D[key][i]=row;else D[key].push(row);
}
D.latestResult=['BVB','0–1','NAP','CHAMPIONS LEAGUE · 5 DEC 2028 FT · PIO 27′ (BEIER) · MERET CLEAN SHEET'];
D.seasonState={...(D.seasonState||{}),ucl:{...(D.seasonState?.ucl||{}),stage:'League phase',played:6,w:3,d:1,l:2,points:10,gf:9,ga:10,gd:-1,
 status:'2028–29 UCL · 10 points / 6 · away win 0–1 at Borussia Dortmund · Pio 27′ (Beier) · first victory after Arsenal and PSG defeats'}};
D.assistantManager={name:'Alessandro Vitale',shortName:'Sandro Vitale',role:'Assistant Manager',atNapoliSince:'Beginning of Stefan Saladino project',origin:'Naples',publicQuote:'My job is to give the manager the clearest picture I can. He makes the decision. We live with the result together.',publicProfilePublished:true,profileArticleId:'sandro-vitale-assistant-manager-profile-dec2028'};
D.cucurellaContract2028Public={player:'Marc Cucurella',age:30,agreed:true,additionalYears:2,remainingYears:3.5,
 publiclyPublishedArticleId:'cucurella-napoli-two-year-extension-dec2028',
 note:'Financial terms and internal squad role are not provided to the public newsroom state.'};
const season=D.statsBySeason?.['2028–29'];
if(Array.isArray(season)){
 const changes=[['Pio Esposito',12,10,'Napoli all competitions 2028–29 through Dortmund 0–1 Napoli 5 December; 11G/10A after Monza and Udinese, +Pio winner 27′ Dortmund.'],['Maximilian Beier',15,7,'Napoli all competitions 2028–29 through Dortmund 0–1 Napoli 5 December; 15G/6A after Udinese, +Beier assist to Pio 27′ Dortmund.']];
 for(const r of changes){const i=season.findIndex(z=>z[0]===r[0]);if(i>=0)season[i]=r;else season.push(r);}
 D.stats=season;
 const names=new Set(Object.values(D.statsBySeason).flat().map(x=>x[0]));
 D.careerStats=[...names].map(name=>{let g=0,a=0,years=[];for(const [yr,rows] of Object.entries(D.statsBySeason)){
  const e=rows.find(x=>x[0]===name);if(e){g+=Number(e[1])||0;a+=Number(e[2])||0;years.push(yr);}}
 return[name,g,a,years.join(', ')]}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));
 D.statsScope='Verified Napoli club all competitions through Dortmund 0–1 Napoli 5 December 2028: Pio Esposito 12G/10A; Maximilian Beier 15G/7A; Italy separate.';
}
D.fixtures2028=D.fixtures2028||[];
const played=D.fixtures2028.find(x=>x.team==='Napoli'&&x.date==='2028-12-05'&&x.opponent==='Borussia Dortmund');
if(played){played.played=true;played.result='Borussia Dortmund 0–1 Napoli';played.homeGoals=0;played.awayGoals=1;}
if(D.scheduleSnapshot?.fixtures){
 const f=D.scheduleSnapshot.fixtures.find(x=>x.date==='2028-12-05'&&x.opponent==='Borussia Dortmund');
 if(f){f.played=true;f.result='Borussia Dortmund 0–1 Napoli';}
}
D.verifiedUpcoming2028=(D.verifiedUpcoming2028||[]).filter(f=>f.date>'2028-12-05');
D.nextClubMatch={opponent:'Lazio',gameAlias:'Latium',competition:'Serie A',date:'2028-12-09',
 venue:'Away',played:false,confirmedNext:true,kickoffTime:null,details:'Lazio away on 9 December in Serie A; not played.'};
D.upcoming=D.verifiedUpcoming2028.map(f=>[f.shortName||f.gameAlias||f.opponent,f.competition,f.date+' · '+f.venue+(f.competition==='Supercoppa'?' designation':'')]);
D.goalkeeperReview2028={...(D.goalkeeperReview2028||{}),publicFactsOnly:true,latestVerified:'Meret started Dortmund 0–1 Napoli 5 Dec 2028, made one save and kept a clean sheet; Cucurella, Bastoni, Buongiorno, Calafiori started across the back, Kayode entered as substitute.',nextGoalkeeperSelection:'Lazio 9 December starting goalkeeper not announced'};
D.ticker=[
 'FULL TIME · BORUSSIA DORTMUND 0–1 NAPOLI · PIO ESPOSITO 27′',
 'BEIER ASSISTS PIO · ONE GOAL SECURES CHAMPIONS LEAGUE AWAY WIN',
 'CUCURELLA · BASTONI · BUONGIORNO · CALAFIORI · MERET CLEAN SHEET',
 'MERET · ONE SAVE · NAPOLI DEFENCE HOLDS FIRM IN DORTMUND',
 'NAPOLI · 10 UEFA CHAMPIONS LEAGUE POINTS FROM SIX',
 'MEET SANDRO VITALE · SALADINO’S LONG-SERVING ASSISTANT MANAGER',
 'MARC CUCURELLA AGREES TWO-YEAR NAPOLI CONTRACT EXTENSION',
 'NAPOLI LEAD SERIE A · 35 PTS / 14 · ROMA 33 / 14',
 'NEXT · 09 DEC · LAZIO AWAY · SERIE A',
 ...(D.ticker||[]).filter(s=>!/NEXT · 05 DEC|DORTMUND AWAY|DORTMUND AWAITS|SEVEN POINTS FROM FIVE|UDINESE HOME|34 POINTS/.test(String(s))).slice(0,2)
];
D.whispers=[
 ['VITALE IN FOCUS','Alessandro “Sandro” Vitale, Saladino’s long-time number two, steps into the spotlight. His profile focuses on the coach, not confidential dressing-room discussions.'],
 ['THE DORTMUND DEFENCE','One save for Meret, a 1–0 win for Napoli. Cucurella, Bastoni, Buongiorno and Calafiori started in defence; Kayode helped close it out.'],
 ['PIO BREAKS THE EUROPEAN DROUGHT','Pio Esposito scores at 27 minutes from a Beier assist in Borussia Dortmund 0–1 Napoli. The club moves to 10 points from six UCL games.'],
 ['CUCURELLA AGREES EXTENSION','Marc Cucurella, age 30, agrees another two years at Napoli. The established full-back remains part of Saladino’s defensive options.'],
 ['ROMA STILL CLOSE','Napoli lead Roma 35 to 33 after 14 Serie A games each. Next for Napoli: Lazio away on 9 December.'],
 ...(D.whispers||[]).filter(x=>!String(x[0]).includes('DORTMUND AWAITS')&&!String(x[0]).includes('NEXT LINE-UP')).slice(0,3)
];
})();
