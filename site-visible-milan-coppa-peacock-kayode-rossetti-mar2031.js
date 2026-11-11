/* Approved March 5, 2031 source-only public update: Milano FC 0-2 Napoli Coppa Italia semifinal FIRST leg, Peacock clean sheet, Kayode injured out four weeks, Rossetti 81 OVR at 19, Mancini stalled 77 OVR at 22. Keep second leg unplayed; last verified league standings unaffected. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const ids=['milan-napoli-coppa-semi-first-leg-two-nil-peacock-mar2031','peacock-milan-clean-sheet-keeper-feature-mar2031','kayode-injury-four-weeks-milan-barcelona-mar2031','rossetti-81-mancini-77-italy-napoli-development-mar2031','pio-beier-substitutes-milan-semi-impact-mar2031'];
const head=ids.map(id=>(D.articles||[]).find(a=>a.id===id));
if(head.some(a=>!a)){console.error('Milan semifinal and prospect stories unavailable; retaining previous live state');return;}
D.articles=[...head,...(D.articles||[]).filter(a=>!ids.includes(a.id))];
D.milanCoppaSemifinalLeg1March2031={
 date:'2031-03-05',competition:'Coppa Italia',round:'Semifinal',leg:1,status:'completed',
home:'Milano FC',away:'Napoli',score:'Milano FC 0–2 Napoli',result:'0–2',aggregate:{MilanoFC:0,Napoli:2},
events:[
{minute:27,team:'Napoli',scorer:'Giacomo Raspadori',assist:null,assistOfficial:false,notes:'Michael Olise shot blocked; rebound fell to Raspadori, who scored. NO credited assist.'},
{minute:79,team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito',assistOfficial:null,notes:'Both players came on as second-half substitutes. Pio played Beier through; Beier ran in and scored. Official stat-credit for Pio assist was not separately supplied.'}
],
goalkeeper:{player:'C. Peacock',team:'Napoli',cleanSheet:true,performance:'fantastic',saves:null},
injury:{player:'Michael Kayode',occurrence:'During the match, withdrawn by manager',expectedAbsenceWeeks:4,diagnosis:null,estimatedRecovery:'early April 2031',returnToPlayClearance:null},
secondLeg:{opponent:'Milano FC',date:null,venue:null,status:'not played',aggregateAtStart:'Napoli lead 2–0',format:'Two legs confirmed'},
notes:'First leg won 2–0 away. Second leg is still to be played, date not provided. Kayode out four weeks.'};
D.kayodeInjuryMarch2031={player:'Michael Kayode',position:'RB',date:'2031-03-05',opponent:'Milano FC',competition:'Coppa Italia semifinal first leg',removedFromMatch:true,diagnosis:null,outWeeks:4,estimatedReturn:'Early April 2031, subject to recovery',status:'Unavailable',missesScheduledBarcelonaLegs:true};
D.playerDevelopmentMarch2031={
 updated:'After Coppa Italia semifinal first leg vs Milano FC 5 Mar 2031',
 rossetti:{player:'Edoardo Rossetti',publicName:'E. Rossetti',age:19,overall:81,trend:'progressing',position:'RM',loanStatus:'not re-confirmed at this checkpoint',context:'Previously scored first Napoli brace vs Sassuolo on 15 Jan 2031 (48′ from Beier, 63′ from Neves); previous recorded 80 OVR.'},
 mancini:{player:'V. Mancini',publicName:'Mancini',age:22,overall:77,trend:'stalled',position:'RM',loanStatus:'last documented Fiorentina loan, current details not re-confirmed',context:'Previously considered prospect for future Italy midfield; the stalled rating warrants reassessment.'}
};
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Milano FC'&&x[1]==='Napoli'&&x[2]==='Coppa Italia'&&x[3]===0&&x[4]===2&&String(x[6]||'').includes('5 Mar 2031'))){
D.results.push(['Milano FC','Napoli','Coppa Italia',0,2,'W','5 Mar 2031 · Away · Semifinal first leg','Milan 0–2 Napoli · Raspadori 27′ rebound after Olise blocked shot, NO official assist; Beier 79′ scored after second-half substitute Pio played through (official credit status for Pio assist not separately established); both Pio and Beier came on in second half. Peacock fantastic, clean sheet. Kayode injury withdrawn, out four weeks. Napoli take a 2–0 lead into the UNPLAYED second leg.']);
}
const lists=[D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[],D.fixturesFebMar2031=Array.isArray(D.fixturesFebMar2031)?D.fixturesFebMar2031:[]];
for(const list of lists){let r=list.find(x=>x.team==='Napoli'&&x.date==='2031-03-05'&&x.opponent==='Milano FC'&&x.competition==='Coppa Italia');if(!r){r={team:'Napoli',date:'2031-03-05',opponent:'Milano FC',venue:'Away',competition:'Coppa Italia'};list.push(r)}
Object.assign(r,{gameAlias:'AC Milan',status:'completed',stage:'Semifinal',round:'Semifinal',leg:1,score:'0–2',resultText:'Milano FC 0–2 Napoli',events:D.milanCoppaSemifinalLeg1March2031.events,notes:'Semifinal FIRST leg won 2–0 away; Peacock clean sheet, Kayode four-week injury; Napoli lead aggregate 2–0, second leg UNPLAYED. Raspadori 27′ no assist, Beier 79′ from Pio pass.'});
list.sort((a,b)=>String(a.date||'9999').localeCompare(String(b.date||'9999')));}
D.coppaItalia203031={...(D.coppaItalia203031||{}),stage:'Semifinal',semifinal:{opponent:'Milano FC / AC Milan',firstLeg:D.milanCoppaSemifinalLeg1March2031,secondLeg:D.milanCoppaSemifinalLeg1March2031.secondLeg,aggregate:{Napoli:2,MilanoFC:0},qualifiedForFinal:false,status:'Second leg still to play'},lastCompleted:D.milanCoppaSemifinalLeg1March2031,next:'Semifinal second leg, date not supplied'};
D.latestResult=['Milano FC','0–2','Napoli','Coppa Italia · 5 Mar 2031 · Semifinal first leg · Raspadori 27′, Beier 79′ · Peacock clean sheet'];
D.nextClubFixture={date:'2031-03-08',team:'Napoli',opponent:'Venezia',competition:'Serie A',venue:'Home',status:'scheduled'};
D.nextClubMatch={...D.nextClubFixture,played:false};D.nextMatch={...D.nextClubFixture,played:false,confirmedNext:true,kickoffTime:null};
D.nextSerieAFixture={date:'2031-03-08',home:'Napoli',away:'Venezia',competition:'Serie A',status:'scheduled',matchday:null};
D.currentCalendarDate2031='2031-03-05';
D.upcoming=D.fixturesFebMar2031.filter(x=>x.team==='Napoli'&&x.date>'2031-03-05'&&x.status==='scheduled').map(x=>[x.opponent,x.competition,x.date.slice(5).replace('-','/')+' · '+x.venue]);
D.season203031={...(D.season203031||{}),
updated:'Milano FC 0–2 Napoli Coppa Italia semifinal first leg Mar 5: Raspadori 27′ unassisted rebound, second-half substitutes Pio played Beier 79′, Peacock clean sheet. Kayode out four weeks. Rossetti 81 OVR age19, Mancini 77 OVR age22 stalled. Second leg not played.',
latestResult:'Milano FC 0–2 Napoli · 5 Mar 2031 · Coppa Italia semifinal first leg',latestResultCompetition:'Coppa Italia',latestResultDate:'2031-03-05',
lastCompletedCupFixture:D.milanCoppaSemifinalLeg1March2031,
nextClubOpponent:'Venezia',nextClubCompetition:'Serie A',nextClubDate:'2031-03-08',nextClubFixture:D.nextClubFixture,nextClubMatch:D.nextClubFixture,
statsVerifiedThrough:'Reported Napoli matches through Milan Coppa Italia semifinal first leg Mar5; Pescara result March2 and Inter match date/competition remain absent. Raspadori and Beier goals added; Pio pass to Beier, official credited assist unconfirmed.',
latestSquadNews:'Kayode out four weeks after injury at Milan (early April projected); Peacock kept clean sheet at Milan; Rossetti 81 OVR age19 progressing, Mancini stalled at 77 OVR age22. Olise remains Napoli until summer Tottenham sale.',
leagueTableAsOf:'22 Feb 2031 after Atalanta — last verified Serie A top six',standingsAreLatestVerifiedNotPostInter:true,clubAllCompetitionAggregatesCurrent:false,
coppa:{...(D.season203031?.coppa||{}),stage:'Semifinal',leg1:D.milanCoppaSemifinalLeg1March2031,aggregate:{Napoli:2,MilanoFC:0},secondLegStatus:'not played',secondLegDate:null},
goalkeeper:{...(D.season203031?.goalkeeper||{}),peacockLastCupCleanSheet:'Milan 0–2 Napoli Mar5 semifinal first leg'},
injuries:{...(D.season203031?.injuries||{}),Kayode:D.kayodeInjuryMarch2031}
};
D.seasonState={...(D.seasonState||{}),nextFixture:D.nextClubFixture,
league:{...(D.seasonState?.league||{}),status:'Last verified league standings only: Napoli 67 points from 26 matches after Atalanta on Feb22; no newer Serie A table supplied.',lastVerifiedDate:'2031-02-22'},
coppa:{...(D.seasonState?.coppa||{}),stage:'Semifinal',status:'Napoli won first leg 2–0 away to Milan; second leg not yet played',lastResult:'Milano FC 0–2 Napoli',aggregate:{Napoli:2,MilanoFC:0},nextFixture:{opponent:'Milano FC',date:null,venue:null,stage:'Semifinal second leg',status:'not played'}}
};
D.squadPublic=D.squadPublic||{};
for(const [section,match,fn] of [
 ['Defenders',row=>/Kayode/i.test(row?.[0]||''),row=>{row[3]='Injured in Milan Coppa semifinal 5 Mar 2031 · out four weeks (approx early April)';}],
 ['Goalkeepers',row=>/Peacock/i.test(row?.[0]||''),row=>{row[3]='Senior squad · outstanding clean sheet vs AC Milan in Coppa semifinal first leg 5 Mar 2031';}],
 ['Midfielders',row=>/Rossetti/i.test(row?.[0]||''),row=>{row[2]=81;row[3]='Age 19 · improved to 81 OVR · scored first Napoli brace vs Sassuolo in January';}]
]){for(const row of D.squadPublic[section]||[])if(match(row))fn(row)}
if(Array.isArray(D.firstXI))for(const r of D.firstXI)if(r[0]==='RB'&&/Kayode/i.test(String(r[1]||''))){r[1]='RB selection pending · Kayode injured';r[2]='—';}
D.playerAges={...(D.playerAges||{}),'E. Rossetti':19,'Rossetti':19,'Mancini':22,'V. Mancini':22};
if(Array.isArray(D.loanedPlayers))for(const p of D.loanedPlayers){if(/Mancini/i.test(p[0]||'')){p[2]=22;p[3]=77;}}
if(Array.isArray(D.currentSquadTransferUpdates))for(const r of D.currentSquadTransferUpdates)if(/Rossetti/i.test(r.player||'')){r.overall=81;r.age=19;r.latestDevelopment='81 OVR at age 19';}
D.playerOverallLatest={...(D.playerOverallLatest||{}),'E. Rossetti':81,'V. Mancini':77,'Michael Kayode':88};
const keeper=D.keeperStats203031=D.keeperStats203031||{};
keeper.Peacock={...(keeper.Peacock||{}),lastConfirmedCleanSheet:'Milano FC 0–2 Napoli · 5 March 2031 Coppa Italia semifinal first leg',lastKnownPerformance:'Fantastic · clean sheet',lastMatch:'Milano FC 0–2 Napoli · 5 March 2031',saves:null,confirmedPerformanceOnly:true};
const stats=D.statsBySeason?.['2030–31'];
if(stats){for(const [name,g,a,note] of [
['Giacomo Raspadori',1,0,'Milan away Coppa Italia semifinal first leg 5 Mar: 27′ rebound after Olise blocked shot, no official assist'],
['Maximilian Beier',1,0,'Milan away Coppa Italia semifinal first leg 5 Mar: substitute goal 79′ from pass by fellow second-half sub Pio, official assist status not separately given']
]){let row=stats.find(r=>r[0]===name);if(!row){row=[name,0,0,''];stats.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]?row[3]+' | ':'')+note;}
const pio=stats.find(x=>x[0]==='Pio Esposito');if(pio)pio[3]=(pio[3]?pio[3]+' | ':'')+'Milan Coppa Mar5: fed Beier for 79′ goal as second-half substitute, official game-assist credit not separately confirmed, so not added to official season assist counter.';
stats.sort((a,b)=>(Number(b[1])||0)-(Number(a[1])||0)||(Number(b[2])||0)-(Number(a[2])||0)||String(a[0]).localeCompare(String(b[0])));
D.stats=stats;D.statsCurrentSeason='2030–31';const totals=new Map();
for(const [year,list] of Object.entries(D.statsBySeason))for(const [raw,g,a]of list){const n=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=totals.get(n)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);totals.set(n,p);}
const career=[...totals].map(([n,v])=>[n,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);}
D.statsScope='Reported Napoli club events through Milan Coppa semifinal FIRST leg Mar5: Beier30G29A, Pio35G16A (he played final pass to Beier 79′, but official credit unconfirmed and not added), Raspadori7G3A, Olise1G8A (NO assist on blocked shot), Moore7G8A, Estêvão2G1A, Nico Paz3G4A. Kayode out four weeks, Rossetti 81 OVR at age19 and Mancini 77 at age22. Last verified Serie A table Napoli67pts/26 after Atalanta Feb22; Pescara Mar2 result unreported; Inter match competition/date unknown, so no inferred new league totals. Milan 0–2 Napoli Coppa semifinal 1st leg, second leg unplayed. Barcelona UCL away Mar11/home Mar19.';
const lead=head[0],strap='COPPA ITALIA · SEMIFINAL FIRST LEG · MILAN 0–2 NAPOLI';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the story →</span></div>';
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['COPPA SEMIFINAL FIRST LEG · MILAN 0–2 NAPOLI · RASPADORI 27′, BEIER 79′','PEACOCK FANTASTIC · CLEAN SHEET AT MILAN','KAYODE INJURED IN MILAN · OUT FOUR WEEKS','ROSSETTI RISING · 81 OVR AT 19 · MANCINI STALLED AT 77 AT 22','NEXT VENEZIA HOME · MAR 8 · SERIE A','BARCELONA UCL R16 · AWAY MAR 11, HOME MAR 19 · ROMA AWAY MAR 16'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['TWO GOALS TO PROTECT','Milan 0–2 Napoli in the Coppa semifinal FIRST leg. Raspadori follows blocked Olise shot 27′, Beier scores 79′ after fellow substitute Pio plays him through. Return leg still ahead.'],['PEACOCK SETS THE STANDARD','The keeper was fantastic in the away clean sheet, an important response to the 2–2 Inter draw.'],['KAYODE OUT FOUR WEEKS','The fullback was withdrawn injured in Milan; projected absence overlaps Barcelona 11 and 19 March and Roma 16 March.'],['ROSSETTI / MANCINI DEVELOPMENT','Rossetti improves to 81 OVR at 19; Mancini has stalled at 77 OVR at 22. Two paths in Napoli and Italy planning.'],['EUROPE NEXT','Venezia home on 8 March, Barcelona away on 11 March, Roma away on 16 March, Barcelona home on 19 March.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>COPPA SEMIFINAL LEG 1 · MILAN 0–2 NAPOLI</strong><span>Raspadori 27′ · Beier 79′ · Peacock clean sheet · return leg to come</span></div><div><strong>NEXT: VENEZIA HOME · SERIE A · MAR 8</strong><span>Barcelona away 11 Mar · Kayode out four weeks · last verified league table 67 pts / 26</span></div>';
const last=$('latestResult');if(last)last.innerHTML='<div class="latest-score"><span>MIL</span><strong>0–2</strong><span>NAP</span></div><p>COPPA ITALIA · SEMIFINAL FIRST LEG · 5 MAR · RASPADORI 27′ · BEIER 79′</p>';
const next=$('nextTwo');if(next)next.innerHTML='<div class="next-row"><strong>Venezia</strong><span>Serie A · 8 Mar · Home</span></div><div class="next-row"><strong>FC Barcelona</strong><span>Champions League Round of 16 · 11 Mar · Away</span></div>';
const upcoming=D.fixturesFebMar2031.filter(x=>x.team==='Napoli'&&x.status==='scheduled'&&x.date>'2031-03-05');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=upcoming.slice(0,8).map(x=>'<div class="fixture"><span>'+esc(x.competition==='Champions League'?'UCL Last 16':x.competition)+' · '+esc(Number(x.date.slice(-2)))+' Mar</span><strong>'+esc(x.opponent)+'</strong><small>'+esc(x.venue)+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='MILAN 0–2 NAPOLI · COPPA SEMIFINAL LEG 1';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli beat Milan 2–0 away in the Coppa Italia semifinal first leg. Raspadori and Beier score, Peacock keeps a clean sheet, Kayode out four weeks; Rossetti rises to 81 OVR at 19.');
})();