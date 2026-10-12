/* 7 JAN 2029 AFTER PALERMO: public match + football honours CANON.
Napoli 1-0 Palermo HOME FT; Michael Olise 44' (Lutsharel Geertruida assist), HT 1-0.
Early Desplanches save first 3 mins, Nico Paz 27' denied, header onto crossbar from a corner (shooter unreported), melee without shot, second half Beier point-blank saved, João Neves arrived HALF-TIME, Alphonso Davies and Riccardo Calafiori arrived 65', Neves fed Mikey Moore in box but first touch let him down. Palermo scarcely threatened according to manager. Total shot/saves count unknown.
NO confirmed goalkeeper identity against Palermo; team clean sheet inferred by 1-0 score, do not award individual GK clean sheet. Olise goal 1, Geertruida assist 1. 19 league played: 15W3D1L, 36 GF,10 GA,+26 GD, 48 points. Rivals' CURRENT January7 results unavailable: last other-club photo Jan4 Bergamo41/19, Roma40/18.
Saladino MANAGER OF THE YEAR confirmed by manager after this match; awarding body, criteria, formal award year unknown.
2029 UEFA TOTY FINAL ELEVEN, MANAGER SCREENSHOT: FWD Endrick (Barcelona), Lamine Yamal (Barcelona);
MID Pedri (Barcelona), Michael Olise (NAPOLI), Jamal Musiala (Bayern), João Neves (NAPOLI);
DEF Alphonso Davies (NAPOLI), Alessandro Bastoni (NAPOLI), Nuno Mendes (PSG), Alessandro Buongiorno (NAPOLI);
GK Joan García (Barcelona). EXACTLY FIVE NAPOLI. Beier shortlist nominee but NOT selected; Endrick moved to Barcelona from Napoli for $310M last summer. Not UEFA CL trophy. */
(()=>{const D=window.NAPOLI_DATA;if(!D)return;
const goals=[{minute:44,team:'Napoli',scorer:'Michael Olise',assist:'Lutsharel Geertruida',creditedAssist:true}];
const game={date:'2029-01-07',competition:'Serie A',matchday:19,team:'Napoli',opponent:'Palermo',venue:'Home',verified:true,played:true,fullTime:true,score:'Napoli 1–0 Palermo',result:'W',halfTimeScore:'Napoli 1–0 Palermo',halfTimeVerified:true,goals,teamCleanSheet:true,goalkeeper:null,goalkeeperUnconfirmed:true,
events:[
{minute:3,approximate:true,type:'shot saved',team:'Napoli',goalkeeper:'Sebastiano Desplanches',shooter:null,notes:'Napoli chance early in opening three minutes, Desplanches excellent save'},
{minute:27,type:'shot saved',shooter:'Nico Paz',goalkeeper:'Sebastiano Desplanches'},
{minute:null,type:'woodwork',shotType:'header from corner',outcome:'crossbar',shooter:null,notes:'Napoli headed effort from corner hit crossbar; shooter unreported'},
{minute:null,type:'attacking scramble',notes:'Napoli threatened from loose ball but could not release a shot'},
{minute:44,type:'goal',scorer:'Michael Olise',assist:'Lutsharel Geertruida'},
{minute:45,period:'half time',type:'substitution on',playerOn:'João Neves',playerOff:null,notes:'93 overall Neves entered for second half; replaced player unconfirmed'},
{minute:65,type:'substitutions on',playersOn:['Alphonso Davies','Riccardo Calafiori'],playersOff:[],notes:'Both introduced on 65 minutes; no confirmed replaced players'},
{minute:null,period:'second half',type:'shot saved',shooter:'Maximilian Beier',goalkeeper:'Sebastiano Desplanches',notes:'Point-blank chance denied'},
{minute:null,period:'second half',type:'chance not converted',shooter:'Mikey Moore',creator:'João Neves',notes:'Neves passed into space in box; Moore heavy first touch prevented shot'},
{minute:90,period:'stoppage time',type:'full time',score:'Napoli 1–0 Palermo'}],
notes:'Controlled Napoli pressure, Desplanches multiple notable saves; corners/header bar; exact saves/shots and full XI unconfirmed. Club clean sheet, goalkeeper unidentified. Geertruida credited official assist.'};
D.palermoJanuary2029=game;
const row=['Napoli','Palermo','Serie A',1,0,'W','7 Jan 2029 · Home','NAPOLI 1–0 PALERMO FT · MICHAEL OLISE 44′ (LUTSHAREL GEERTRUIDA ASSIST) · HT 1–0 · Desplanches stops early Napoli chance and Nico Paz 27′, header off crossbar from corner · Joao Neves on at half; Davies & Calafiori on 65′ · Beier denied point-blank · Napoli TEAM clean sheet (goalkeeper unconfirmed)'];
for(const k of ['results','results2028']){D[k]=D[k]||[];const i=D[k].findIndex(x=>x[0]==='Napoli'&&x[1]==='Palermo'&&x[2]==='Serie A'&&String(x[6]).includes('7 Jan 2029'));if(i>=0)D[k][i]=row;else D[k].push([...row]);}
for(const k of ['fixtures2028','verifiedUpcoming2028','verifiedUpcoming2029'])if(Array.isArray(D[k]))for(const f of D[k])if(f.date==='2029-01-07'&&f.team==='Napoli'&&f.opponent==='Palermo'&&f.competition==='Serie A')Object.assign(f,{played:true,fullTime:true,score:'1–0',result:'Napoli 1–0 Palermo',homeGoals:1,awayGoals:0,winner:'Napoli',fixtureResultKnown:true});
if(Array.isArray(D.scheduleJanuary2029?.fixtures)){const f=D.scheduleJanuary2029.fixtures.find(x=>x.date==='2029-01-07'&&x.opponent==='Palermo');if(f)Object.assign(f,{played:true,fullTime:true,result:'Napoli 1–0 Palermo',score:'1–0',homeGoals:1,awayGoals:0,fixtureResultKnown:true});D.scheduleJanuary2029.completedMatches=3;D.scheduleJanuary2029.upcomingMatches=7;D.scheduleJanuary2029.notes='January 1 Roma Supercoppa loss on pens; January 4 Parma 2-0 W; January 7 Palermo 1-0 W; seven future matches beginning Jan10 Fiorentina away; no results invented.';}
if(Array.isArray(D.scheduleSnapshot?.fixtures)){const f=D.scheduleSnapshot.fixtures.find(x=>x.date==='2029-01-07'&&x.team==='Napoli'&&x.opponent==='Palermo');if(f)Object.assign(f,{played:true,fullTime:true,result:'Napoli 1–0 Palermo',score:'1–0',fixtureResultKnown:true});}
D.latestResult=['NAP','1–0','PAL','SERIE A · 7 JAN 2029 · OLISE 44′ (GEERTRUIDA ASSIST) · HT 1–0 · TEAM CLEAN SHEET'];
D.seasonState={...(D.seasonState||{}),league:{...(D.seasonState?.league||{}),played:19,w:15,d:3,l:1,points:48,remaining:19,gf:36,ga:10,gd:26,position:1,status:'Napoli confirmed 48/19 after 1-0 Palermo. Other club standings last verified Jan 4 and may since have changed; do not calculate contemporary rivals gap.'}};
D.leagueSnapshot={...(D.leagueSnapshot||{}),played:19,wins:15,draws:3,losses:1,points:48,remaining:19,position:1,gf:36,ga:10,gd:26,status:'Current Napoli after 7 Jan 2029 Palermo victory; rival latest rows as-of 4 Jan only, potentially stale.'};
D.serieAStandingsAfterPalermoNapoliOnly={verified:true,date:'2029-01-07',napoli:['Napoli',19,15,3,1,36,10,26,48],otherClubsUpdated:false,previousTopSixSnapshot:'4 January 2029 after Parma, rivals may have since played'};
if(Array.isArray(D.serieAStandings?.rows)){const nr=D.serieAStandings.rows.find(x=>x[0]==='Napoli');if(nr)nr.splice(0,nr.length,'Napoli',19,15,3,1,36,10,26,48);D.serieAStandings={...D.serieAStandings,verified:false,partial:true,topSixOnly:true,updated:'7 Jan 2029 Napoli verified at 48 points/19; rivals are last Jan4 snapshot, NOT freshly verified Jan7 standings',source:'Napoli post-Palermo score; other clubs Jan4 screenshot only. Mixed-date table, other positions/gaps cannot be guaranteed.',rivalsAsOf:'2029-01-04'};}
D.titleRaceSnapshot2028={...(D.titleRaceSnapshot2028||{}),currentNapoliPoints:48,currentNapoliPlayed:19,currentNapoliAsOf:'2029-01-07',otherClubsAsOf:'2029-01-04',confirmedRivalCurrent:false,notes:'Napoli 48/19 now; Roma last known 40/18 and Bergamo 41/19 FROM JAN 4 image. Do not claim these are updated as of Jan7 nor calculate current points gaps to either.'};
D.tableContext='NAPOLI 48PTS/19 15W3D1L GF36 GA10 +26 AFTER PALERMO JAN 7. LAST KNOWN RIVALS FROM JAN 4 IMAGE: Bergamo Calcio 41/19, Roma 40/18, Juventus 38/19, Lombardia FC 34/20, Parma 30/19; ALL rivals STALE relative to Jan7. Do not claim current +8 Roma or +7 Bergamo or contemporaneous latest top-six based on mixed dates.';
const yr='2028–29',stats=D.statsBySeason?.[yr];if(Array.isArray(stats)){for(const [n,g,a] of [['Michael Olise',1,0],['Lutsharel Geertruida',0,1]]){let p=stats.find(x=>x[0]===n);if(!p){p=[n,0,0,''];stats.push(p);}p[1]=(Number(p[1])||0)+g;p[2]=(Number(p[2])||0)+a;p[3]='Through Jan 7 2029 Napoli 1–0 Palermo: Olise 44′ goal, Geertruida credited assist. Prior season tally retains previously recorded goals/assists; complete pre-Palermo audit not asserted.';}D.stats=stats;const names=new Set(Object.values(D.statsBySeason).flat().map(r=>r[0]));D.careerStats=[...names].map(n=>{let g=0,a=0,yrs=[];for(const [y,rows] of Object.entries(D.statsBySeason)){const x=rows.find(z=>z[0]===n);if(x){g+=Number(x[1])||0;a+=Number(x[2])||0;yrs.push(y);}}return[n,g,a,yrs.join(', ')];}).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||String(a[0]).localeCompare(String(b[0])));}
D.statsScope='Napoli club all competitions through Palermo 1-0 Jan7 2029: Olise +1 goal, Geertruida +1 assist. Pio last verified 14G/12A, Beier 19G/7A. Shootout kicks NEVER count. Other legacy tallies may be incomplete.';
D.verifiedPlayerMilestones2028={...(D.verifiedPlayerMilestones2028||{}),through:'2029-01-07',olise:{goalVsPalermoMinute:44,assist:'Lutsharel Geertruida'},geertruida:{assistVsPalermoMinute:44},pio:{...(D.verifiedPlayerMilestones2028?.pio||{}),goals:14,assists:12},beier:{...(D.verifiedPlayerMilestones2028?.beier||{}),goals:19,assists:7}};
D.managerOfYear={award:'Manager of the Year',recipient:'Stefan Saladino',club:'SSC Napoli',announcedAfter:'2029-01-07 Palermo home league match',verified:true,awardingBody:null,awardYear:null,notes:'Manager expressly confirmed has been named Manager of the Year. Award name verified only, official organization and year of award not stated. Do not call UEFA manager award, Serie A manager award, or 2029 edition without further confirmation.'};
const selected=[
{name:'Endrick',club:'Barcelona',position:'Forward',napoli:false},
{name:'Lamine Yamal',club:'Barcelona',position:'Forward',napoli:false},
{name:'Pedri',club:'Barcelona',position:'Midfielder',napoli:false},
{name:'Michael Olise',club:'Napoli',position:'Midfielder',napoli:true},
{name:'Jamal Musiala',club:'Bayern',position:'Midfielder',napoli:false},
{name:'João Neves',club:'Napoli',position:'Midfielder',napoli:true},
{name:'Alphonso Davies',club:'Napoli',position:'Defender',napoli:true},
{name:'Alessandro Bastoni',club:'Napoli',position:'Defender',napoli:true},
{name:'Nuno Mendes',club:'PSG',position:'Defender',napoli:false},
{name:'Alessandro Buongiorno',club:'Napoli',position:'Defender',napoli:true},
{name:'Joan García',club:'Barcelona',position:'Goalkeeper',napoli:false}
];
D.uefaTOTY2029={...(D.uefaTOTY2029||{}),award:'UEFA Team of the Year',year:2029,verified:true,finalElevenAnnounced:true,selected,napoliCount:5,napoliSelections:selected.filter(x=>x.napoli).map(x=>x.name),backFourNapoliCount:3,midfieldNapoliCount:2,beierShortlisted:true,beierNominated:true,beierSelected:false,finalSelectedPlayers:selected.map(x=>x.name),goalkeeper:'Joan García',forwards:['Endrick','Lamine Yamal'],notes:'Screenshot unequivocally displays final UEFA TOTY XI; five Napoli players selected. Beier was shortlisted with Haaland, Endrick and Kvaratskhelia but not selected. Endrick wearing Barcelona shirt (already sold to Barcelona); league/tournament results unaffected.'};
D.uefaTeamOfYear2029=D.uefaTOTY2029;
D.honorsAndAwards={...(D.honorsAndAwards||{}),manager2029:D.managerOfYear,uefaToty2029:D.uefaTOTY2029};
D.verifiedUpcoming2028=(D.verifiedUpcoming2028||[]).filter(x=>x.date>'2029-01-07');
D.verifiedUpcoming2029=(D.verifiedUpcoming2029||[]).filter(x=>x.date>'2029-01-07');
D.upcoming=D.verifiedUpcoming2028.map(x=>[x.gameAlias||x.opponent,x.competition,x.date+' · '+x.venue+(x.date==='2029-01-31'?' · Cup round TBC':'')]);
D.nextClubMatch={opponent:'Fiorentina',competition:'Serie A',date:'2029-01-10',venue:'Away',played:false,confirmedNext:true,confirmedOpponent:true,kickoffTime:null,details:'Following Jan 7 Napoli 1-0 Palermo, next away at Fiorentina Jan10. Neither fixture result nor XI known.'};
D.ticker=[
'BREAKING · STEFAN SALADINO NAMED MANAGER OF THE YEAR',
'UEFA TEAM OF THE YEAR 2029 · FIVE NAPOLI PLAYERS SELECTED',
'OLISE · JOÃO NEVES · DAVIES · BASTONI · BUONGIORNO · UEFA TOTY',
'NAPOLI 1–0 PALERMO FT · OLISE 44′ (GEERTRUIDA ASSIST)',
'NAPOLI SERIE A · 48 POINTS FROM 19 · 15W 3D 1L · +26 GD',
'PALERMO HELD OUT UNTIL 44′ · DESPLANCHES MAKES KEY STOPS',
'BEIER SHORTLISTED BUT NOT CHOSEN · ENDRICK MAKES XI AT BARCELONA',
'NEXT · FIORENTINA AWAY · JANUARY 10 · SERIE A',
'ROMA 40/18 AND BERGAMO 41/19 LAST CONFIRMED JAN4 ONLY · UPDATED RESULTS UNKNOWN'
];
D.whispers=[
['SALADINO MANAGER OF THE YEAR','Napoli manager Stefan Saladino has been named Manager of the Year. Announcing body and award year not further specified. His unbeaten Scudetto and Coppa Italia last season, Champions League final, and current Serie A lead inform the conversation.'],
['FIVE AZZURRI AMONG ELEVEN','Olise, João Neves, Davies, Bastoni and Buongiorno make the UEFA TOTY 2029 final XI. Three of the back four are Napoli players.'],
['THE FIVE NAMES','Davies, Bastoni, Buongiorno, Olise and João Neves; not Meret, Peacock, Beier or Pio. Screenshot confirms exactly five selections.'],
['OLISE DELIVERS AGAINST PALERMO','Olise scored 44′ from Geertruida assist, Napoli won 1–0; Desplanches kept Palermo alive with saves and a Napoli header hit the bar.'],
['NEVES FROM THE BENCH','93-OVR João Neves entered at halftime, Davies (89) and Calafiori (87) in 65th minute. The depth is extraordinary.'],
['BEIER LEFT OUT','Beier was nominated among UEFA TOTY forwards alongside Endrick, Haaland and Kvaratskhelia but final selection includes Endrick and Lamine Yamal.'],
['A FAMILIAR FACE AT BARCELONA','Endrick, sold by Napoli to Barcelona last summer for $310M, is named in final UEFA TOTY forwards.'],
['SCUDETTO NUMBERS','Napoli 48 points after 19 matches, 15W3D1L 36GF 10GA +26. Roma and Bergamo last confirmed January 4, so present gap is unverified.'],
['FIORENTINA NEXT','Napoli visit Fiorentina January 10 in Serie A. The fixture has not been played.'],
['DI LORENZO CONTRACT WATCH','Everton contacted Di Lorenzo, renewal negotiations have broken down, and there is no confirmed transfer yet; Hasa returned from loan at 25 years/78 overall.']
];
})();