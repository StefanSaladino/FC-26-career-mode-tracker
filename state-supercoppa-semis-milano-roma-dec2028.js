/* SUPERCOPPA ITALIANA 2028-29 · confirmed semifinals from manager after 29 Dec 2028
Napoli 0-0 Milano FC/AC Milan; Napoli WIN 4-2 on penalties, SEMIFINAL. NEVER mark trophy won.
Napoli pens: 1 Pio Esposito goal, 2 Kevin De Bruyne goal, 3 João Neves saved by Mike Maignan,
4 Maximilian Beier goal, 5 Mikey Moore goal to qualify. Milan: 1 Giménez OVER, 2 Fofana goal,
3 Roony goal, 4 Bondo OFF POST; Milan FIFTH NOT TAKEN. Shootout is separate from goals/assists.
Maignan also saved Neves shot from distance and close-range Davies and Nico Paz opportunities during play.
Other SEMIFINAL Roma beat Inter 3-2, date and scorers unconfirmed; FINAL confirmed Napoli v Roma,
date, venue and result unknown. Do not affect Serie A totals or fabricate opponent stats. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const game={date:'2028-12-29',competition:'Supercoppa Italiana',stage:'Semifinal',round:'Semifinal',verified:true,played:true,fullTime:true,
homeDesignation:'Napoli',venue:'Home-designated; physical stadium unverified',team:'Napoli',opponent:'AC Milan',gameAlias:'Milano FC',
score:'Napoli 0–0 Milano FC',scoreline:'0–0',winOnPenalties:true,qualifiedFor:'Supercoppa Italiana final',penaltyScore:'4–2',
fullTime0_0:true,extraTimePlayed:null,normalTimeGoals:[],goalkeeperNapoli:null,
milanGoalkeeper:'Mike Maignan',
chances:[{team:'Napoli',player:'João Neves',description:'Saved by Maignan from distance during match',minute:null},
{team:'Napoli',player:'Alphonso Davies',description:'Saved by Maignan from close range during match',minute:null},
{team:'Napoli',player:'Nico Paz',description:'Saved by Maignan from close range during match',minute:null}],
shootout:{winner:'Napoli',score:'Napoli 4–2 Milano FC',
napoli:[{order:1,player:'Pio Esposito',result:'scored'},{order:2,player:'Kevin De Bruyne',result:'scored'},{order:3,player:'João Neves',result:'saved',savedBy:'Mike Maignan'},{order:4,player:'Maximilian Beier',result:'scored'},{order:5,player:'Mikey Moore',result:'scored',decisive:true}],
milano:[{order:1,player:'Giménez',result:'missed high',description:'Over the crossbar'},{order:2,player:'Fofana',result:'scored'},{order:3,player:'Roony',result:'scored'},{order:4,player:'Bondo',result:'missed post',description:'Off post'}],
milanoFifthKickNotTaken:true,endedAfterNapoliFifth:true},
notes:'No trophy awarded: this is the SEMIFINAL. No credited goals/assists for shootout conversions. No goalkeeper for Napoli established. Match ended 0-0 before penalties, extra-time details unknown; do not invent. The shootout finished 4-2. No extra goals or postmatch quotes confirmed.'};
D.supercoppaSemifinalDec2028=game;
D.romaInterSupercoppa2028={competition:'Supercoppa Italiana',stage:'Semifinal',played:true,fullTime:true,score:'Roma 3–2 Inter',qualified:'Roma',opponent:'Inter',scorers:null,date:null,venue:null,extraTimeDetails:null,verifiedBy:'Manager-provided save development',notes:'Cup result only; DOES NOT alter Serie A points or Roma league table.'};
D.supercoppaFinal2028={competition:'Supercoppa Italiana',stage:'Final',round:'Final',verified:true,played:false,opponent:'Roma',homeTeam:null,awayTeam:null,date:null,venue:null,kickoffTime:null,score:null,opponentDeterminedBy:'Roma 3–2 Inter semifinal',napoliDeterminedBy:'Napoli 0–0 Milano FC; won 4–2 on penalties',notes:'Napoli–Roma final is confirmed; date, venue, result, kickoffs and lineup have not been supplied. No winner yet.'};
D.supercoppa2028={stage:'Finalist',trophyWon:false,finalOpponent:'Roma',finalDate:null,finalVenue:null,semifinals:[game,D.romaInterSupercoppa2028],champion:null};
D.seasonState={...(D.seasonState||{}),supercoppa:{...(D.seasonState?.supercoppa||{}),stage:'Final',status:'Napoli qualified for Supercoppa final after 0–0 against Milano FC and 4–2 shootout win on 29 Dec 2028. Roma reached final with 3–2 semifinal win over Inter. Final date/result unknown.',nextOpponent:'Roma',finalDate:null,finalPlayed:false,trophyWon:false}};
for(const k of ['results','results2028']){D[k]=D[k]||[];
const row=['Napoli','AC Milan','Supercoppa',0,0,'W','29 Dec 2028 · Home-designated','SUPERCOPPA SEMIFINAL FT · Napoli 0–0 Milano FC/AC Milan · NAPOLI WIN 4–2 ON PENALTIES · Pio ✓ KDB ✓ Neves saved Beier ✓ Moore ✓ · Giménez high Fofana ✓ Roony ✓ Bondo post · MILAN FIFTH NOT TAKEN · NAPOLI ADVANCE TO FINAL VS ROMA'];
const i=D[k].findIndex(x=>x[0]==='Napoli'&&['AC Milan','Milano FC'].includes(x[1])&&String(x[2]).includes('Supercoppa')&&String(x[6]).includes('29 Dec 2028'));if(i>=0)D[k][i]=row;else D[k].push(row);}
const f=D.fixtures2028?.find(x=>x.team==='Napoli'&&x.date==='2028-12-29'&&x.competition==='Supercoppa');if(f)Object.assign(f,{played:true,fullTime:true,score:'0–0',result:'Napoli 0–0 Milano FC · Napoli win 4–2 on penalties (Supercoppa SEMIFINAL)',shootoutScore:'4–2',winner:'Napoli',stage:'Semifinal',homeGoals:0,awayGoals:0,fixtureResultKnown:true});
const sf=D.scheduleSnapshot?.fixtures?.find(x=>x.date==='2028-12-29'&&x.competition==='Supercoppa');if(sf)Object.assign(sf,{played:true,fullTime:true,result:'Napoli 0–0 Milano FC · Napoli win 4–2 on penalties',stage:'Semifinal',shootoutScore:'4–2'});
D.latestResult=['NAP','0–0','MIL','SUPERCOPPA SEMIFINAL · 29 DEC 2028 · NAPOLI WIN 4–2 ON PENALTIES · MOORE SCORES DECISIVE FIFTH KICK · FINAL VS ROMA'];
D.verifiedUpcoming2028=(D.verifiedUpcoming2028||[]).filter(x=>x.date>'2028-12-29');
D.upcoming=[['Roma','Supercoppa final','Date TBC · Venue TBC · Napoli–Roma FINAL'],...(D.verifiedUpcoming2028||[]).map(x=>[x.shortName||x.gameAlias||x.opponent,x.competition,x.date+' · '+x.venue])];
D.nextClubMatch={opponent:'Roma',competition:'Supercoppa Italiana · Final',stage:'Final',date:null,venue:null,played:false,confirmedNext:false,confirmedOpponent:true,dateUnknown:true,kickoffTime:null,details:'Napoli and Roma qualified for Supercoppa final after semifinal victories; final date/venue unconfirmed. January Serie A/UCL calendar remains confirmed but temporal placement of unscheduled final unknown.'};
D.ticker=[
 'MIKEY MOORE SENDS NAPOLI INTO SUPERCOPPA FINAL',
 'SUPERCOPPA SEMIFINAL · NAPOLI 0–0 MILANO FC · WIN 4–2 ON PENALTIES',
 'PIO ✓ · DE BRUYNE ✓ · NEVES SAVED · BEIER ✓ · MOORE ✓',
 'GIMÉNEZ OVER · FOFANA SCORES · ROONY SCORES · BONDO HITS POST',
 'ROMA BEAT INTER 3–2 IN OTHER SUPERCOPPA SEMIFINAL',
 'FINAL CONFIRMED · NAPOLI VS ROMA · DATE TO BE ANNOUNCED',
 'NAPOLI SERIE A · 42 POINTS / 17 · ROMA MOST RECENTLY VERIFIED 36 / 16',
 'JANUARY · EIGHT CONFIRMED FIXTURES INCLUDING TWO EUROPEAN TRIPS'
];
D.whispers=[
 ['THE FIFTH KICK','Mikey Moore scored Napoli’s fifth penalty, clinching a 4–2 shootout victory over Milano FC and a place in the Supercoppa final.'],
 ['MAIGNAN COULD NOT STOP THEM ALL','Mike Maignan denied shots from João Neves, Alphonso Davies and Nico Paz during play; he saved Neves’s third kick. Napoli prevailed on penalties.'],
 ['MILAN MISS TWICE','Giménez blazed the first kick over. Bondo struck the woodwork in round four. Milano FC never took a fifth penalty.'],
 ['ROMA AWAIT','Roma beat Inter 3–2 in the other Supercoppa semifinal. Napoli and Roma will contest the final, date unknown.'],
 ['THE LEAGUE TABLE IS SEPARATE','Roma’s 3–2 cup victory over Inter has no effect on the Serie A table. Napoli have 42 points from 17 games; Roma last verified 36 from 16.'],
 ['MOORE DELIVERS','After Pio, De Bruyne and Beier converted, Mikey Moore calmly finished the shootout.']
];
})();