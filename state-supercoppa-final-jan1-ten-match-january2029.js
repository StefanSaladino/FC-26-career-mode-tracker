/* Confirmed from manager-provided JANUARY 2029 calendar screenshot, after Supercoppa semifinal:
JAN 1 Napoli–Roma Supercoppa FINAL NEUTRAL, title undecided.
JAN 4 Parma H Serie A (previous screenshot 3 Jan); JAN 7 Palermo H Serie A (previous 6 Jan);
JAN 10 Fiorentina A Serie A; JAN 13 Lazio/Latium H Serie A;
JAN 16 Real Sociedad A UCL; JAN 21 Sampdoria A Serie A; JAN 24 KS Cracovia A UCL;
JAN 27 Juventus H Serie A; JAN 31 Roma A CUP (round unspecified).
10 matches, 6 Serie A, 2 UCL, 2 cup (Supercoppa final and other domestic cup).
All matches upcoming, no results. Roma 3-2 Inter semifinal still ONLY cup result, not Serie A. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const jan=[
['2029-01-01','Roma','Neutral','Supercoppa','Final'],
['2029-01-04','Parma','Home','Serie A',null],
['2029-01-07','Palermo','Home','Serie A',null],
['2029-01-10','Fiorentina','Away','Serie A',null],
['2029-01-13','Lazio','Home','Serie A',null],
['2029-01-16','Real Sociedad','Away','Champions League',null],
['2029-01-21','Sampdoria','Away','Serie A',null],
['2029-01-24','KS Cracovia','Away','Champions League',null],
['2029-01-27','Juventus','Home','Serie A',null],
['2029-01-31','Roma','Away','Domestic Cup',null]
].map(([date,opponent,venue,competition,stage])=>({date,team:'Napoli',opponent,gameAlias:opponent==='Lazio'?'Latium':opponent==='KS Cracovia'?'Cracovia':null,venue,competition,stage,verified:true,played:false,fixtureResultKnown:false,kickoffTime:null,source:'Manager-provided updated January 2029 FC26 calendar photo',notes:date==='2029-01-01'?'Supercoppa FINAL, neutral venue, Napoli vs Roma, trophy undecided':date==='2029-01-31'?'Domestic CUP vs Roma away, round not confirmed':null}));
D.scheduleJanuary2029={verified:true,year:2029,month:'January',updatedFrom:'Manager-provided January 2029 post-semifinal screenshot',kickoffTimesKnown:false,matchOutcomesKnown:false,count:10,fixtures:jan.map(x=>({...x})),notes:'Updated photo adjusts Parma to Jan 4, Palermo to Jan 7, adds Supercoppa final Jan 1 neutral v Roma and domestic cup away to Roma Jan 31. Cup Jan 31 round unconfirmed. All unplayed.'};
D.verifiedUpcoming2029=jan.map(x=>({...x}));
D.verifiedUpcoming2028=jan.map(x=>({...x}));
D.fixtures2028=D.fixtures2028||[];
D.fixtures2028=D.fixtures2028.filter(f=>!(f.team==='Napoli'&&['2029-01-03','2029-01-06'].includes(f.date)&&['Parma','Palermo'].includes(f.opponent)));
for(const x of jan){const i=D.fixtures2028.findIndex(f=>f.team==='Napoli'&&f.date===x.date&&f.opponent===x.opponent&&f.competition===x.competition);if(i>=0)D.fixtures2028[i]={...D.fixtures2028[i],...x};else D.fixtures2028.push({...x});}
D.fixtures2028.sort((a,b)=>(a.date||'').localeCompare(b.date||''));
if(Array.isArray(D.scheduleSnapshot?.fixtures)){
D.scheduleSnapshot.fixtures=D.scheduleSnapshot.fixtures.filter(f=>!(f.team==='Napoli'&&['2029-01-03','2029-01-06'].includes(f.date)&&['Parma','Palermo'].includes(f.opponent)));
for(const x of jan){const i=D.scheduleSnapshot.fixtures.findIndex(f=>f.date===x.date&&f.team==='Napoli'&&f.opponent===x.opponent);if(i>=0)D.scheduleSnapshot.fixtures[i]={...D.scheduleSnapshot.fixtures[i],...x};else D.scheduleSnapshot.fixtures.push({...x});}
D.scheduleSnapshot.fixtures.sort((a,b)=>(a.date||'').localeCompare(b.date||''));}
D.supercoppaFinal2028={...(D.supercoppaFinal2028||{}),competition:'Supercoppa Italiana',stage:'Final',round:'Final',verified:true,played:false,opponent:'Roma',date:'2029-01-01',venue:'Neutral',homeTeam:null,awayTeam:null,kickoffTime:null,score:null,notes:'Neutral venue confirmed on January 2029 calendar. Actual stadium and kickoff unconfirmed. Final NOT played and trophy NOT won.'};
D.supercoppa2028={...(D.supercoppa2028||{}),stage:'Finalist',finalOpponent:'Roma',finalDate:'2029-01-01',finalVenue:'Neutral',trophyWon:false,champion:null};
D.seasonState={...(D.seasonState||{}),supercoppa:{...(D.seasonState?.supercoppa||{}),stage:'Final',finalDate:'2029-01-01',finalVenue:'Neutral',nextOpponent:'Roma',finalPlayed:false,trophyWon:false,status:'Napoli vs Roma Supercoppa Italiana FINAL scheduled 1 January 2029 at neutral venue; match unplayed; Roma beat Inter 3–2 in other semifinal and Napoli beat Milano FC 4–2 on penalties in semifinal.'}};
D.nextClubMatch={opponent:'Roma',competition:'Supercoppa Italiana · Final',stage:'Final',date:'2029-01-01',venue:'Neutral',played:false,confirmedNext:true,confirmedOpponent:true,dateUnknown:false,kickoffTime:null,details:'Napoli vs Roma neutral-venue Supercoppa FINAL Jan 1 2029 confirmed; no kickoff or result. January calendar includes 9 further fixtures including Roma away domestic cup Jan 31.'};
D.upcoming=jan.map(x=>[x.shortName||x.gameAlias||x.opponent,x.competition+(x.stage==='Final'?' · Final':''),x.date+' · '+x.venue+(x.date==='2029-01-31'?' · Cup round TBC':'')]);
D.ticker=[
 'JANUARY 1 2029 · NAPOLI VS ROMA · SUPERCOPPA FINAL · NEUTRAL',
 'NAPOLI INTO THE FINAL · MOORE SENDS MILAN OUT 4–2 ON PENALTIES',
 'ROMA BEAT INTER 3–2 IN THE OTHER SUPERCOPPA SEMIFINAL',
 'JANUARY 2029 · TEN FIXTURES IN 31 DAYS',
 'PARMA AT HOME JAN 4 · PALERMO AT HOME JAN 7',
 'JAN 16 REAL SOCIEDAD AWAY · JAN 24 CRACOVIA AWAY · CHAMPIONS LEAGUE',
 'JANUARY 27 JUVENTUS HOME · SERIE A',
 'JANUARY 31 ROMA AWAY · DOMESTIC CUP · ROUND UNKNOWN',
 'NAPOLI SERIE A · 42 POINTS FROM 17 · ROMA LAST VERIFIED 36 FROM 16'
];
D.whispers=[
 ['NEW YEAR FINAL','Napoli meet Roma on January 1 at a neutral venue in the Supercoppa Italiana final. Neither kickoff time nor stadium has been specified.'],
 ['TEN-GAME JANUARY','New calendar: ten January matches; six Serie A, two Champions League and two cup matches.'],
 ['A SECOND ROMA ENCOUNTER','The updated January calendar also lists Roma away on January 31 in the domestic cup, separate from the neutral Supercoppa final. Round not yet confirmed.'],
 ['TWO DATES SHIFT','Parma home is now January 4 and Palermo home January 7, rather than January 3 and January 6 in the earlier calendar.'],
 ['EUROPEAN ROAD TRIPS','Real Sociedad January 16 and KS Cracovia January 24 are still Champions League away matches.'],
 ['NO RESULT YET','The Supercoppa final against Roma is scheduled but not played; the domestic cup visit January 31 is also a future fixture.'],
 ['SCUDETTO SEPARATE','Roma 3–2 Inter was a Supercoppa semifinal, not a Serie A fixture. Napoli 42/17, Roma last verified 36/16.']
];
})();