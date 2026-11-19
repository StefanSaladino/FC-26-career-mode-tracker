/* Final current state after 9 Sep 2031: Napoli v Sampdoria; Italy v Norway; group table; Ruud Nijstad signing. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const E=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const ids=['italy-norway-2-1-pio-kean-gigio-sep9-2031','gigio-donnarumma-norway-italy-sep9-2031','italy-euro-qualifying-group-unbeaten-20-points-2031','napoli-sampdoria-two-nil-neves-pio-aug30-2031','napoli-nijstad-manchester-united-arrival-2031'];
const source=D.articles||[],front=ids.map(id=>source.find(x=>x.id===id));if(front.some(x=>!x))throw Error('Italy/Napoli editorial stories missing');
const set=new Set(ids);D.articles=[...front,...source.filter(x=>!set.has(x.id))];
const samp={date:'2031-08-30',season:'2031–32',team:'Napoli',opponent:'Sampdoria',competition:'Serie A',venue:'Home',status:'completed',score:'2–0',resultText:'Napoli 2–0 Sampdoria',goalsFor:2,goalsAgainst:0,
 xG:{Napoli:4.2,Sampdoria:0.7},shots:{Napoli:10,Sampdoria:2},shotsOnTarget:{Napoli:8,Sampdoria:0},opponentGoalkeeper:{name:'Olschowsky',saves:6},
 events:[{minute:'58',team:'Napoli',scorer:'Pio Esposito',assist:'Mikey Moore',officialAssist:true},{minute:'67',team:'Napoli',scorer:'João Neves',assist:'Nico Paz',officialAssist:true,notes:'Powerful strike from well outside the penalty area'}],notes:'Olschowsky made six saves. No Napoli goalkeeper name established for this match.'};
const norway={date:'2031-09-09',season:'2030/31 EURO qualifying group',team:'Italy',opponent:'Norway',competition:'EC Qualifier',venue:'Away',status:'completed',score:'2–1',resultText:'Norway 1–2 Italy',goalsFor:2,goalsAgainst:1,
 events:[{minute:'20',team:'Norway',scorer:'Erling Haaland'},{minute:'53',team:'Italy',scorer:'Moise Kean',assist:'Nicolò Barella',officialAssist:true},{minute:'58',team:'Italy',scorer:'Pio Esposito',type:'goal',notes:'Strikes into the top corner; assist unreported'}],notes:'Gianluigi Donnarumma excellent in goal. No save count confirmed.'};
D.sampdoriaAug30_2031=samp;D.norwayItalySep9_2031=norway;D.currentCalendarDate2031='2031-09-09';
for(const key of ['latestMatch','latestCompletedFixture','lastCompletedFixture'])D[key]=norway;
for(const key of ['latestClubMatch','latestClubResult','latestClubLeagueResult','latestLeagueMatch','lastCompletedLeagueFixture'])D[key]=samp;
D.latestInternationalResult=['Italy','2–1','Norway','EURO qualifier · 9 Sep 2031 · Haaland 20′; Kean 53′ (Barella); Pio 58′ top corner; Donnarumma outstanding.'];
D.latestResult=['Norway','1–2','Italy','EURO qualifier · 9 September 2031'];
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Sampdoria'&&x[2]==='Serie A'&&String(x[6]).includes('30 Aug 2031')))
 D.results.unshift(['Napoli','Sampdoria','Serie A',2,0,'W','30 Aug 2031 · Home','Pio 58′ (Mikey Moore), João Neves 67′ from outside box (Nico Paz). 4.2–0.7 xG; 10–2 shots; 8–0 on target; Olschowsky six saves.']);
if(!D.results.some(x=>x[0]==='Italy'&&x[1]==='Norway'&&x[2]==='EC Qualifier'&&String(x[6]).includes('9 Sep 2031')))
 D.results.unshift(['Italy','Norway','EC Qualifier',2,1,'W','9 Sep 2031 · Away','Haaland 20′ Norway; Kean 53′ (Barella); Pio 58′ top-corner winner; Donnarumma brilliant.']);
D.seasonState={...(D.seasonState||{}),currentSeason:'2031–32',phase:'league season',league203132:{season:'2031–32',played:2,won:1,drawn:1,lost:0,goalsFor:4,goalsAgainst:2,goalDifference:2,points:4,position:null,asOf:'2031-08-30'}};
D.serieAStandingsAfterSampdoriaNapoliOnly={season:'2031–32',played:2,wins:1,draws:1,losses:0,goalsFor:4,goalsAgainst:2,goalDifference:2,points:4,position:null,date:'2031-08-30'};
D.statsBySeason=D.statsBySeason||{};
D.statsBySeason['2031–32']=[
 ['Pio Esposito',4,0,'Inter Supercoppa 39′; Palermo 15′ and 49′; Sampdoria 58′ (Moore). No Italy appearances included; shootout excluded.'],
 ['Estêvão',0,2,'Official assists: Pio header against Inter; Pio second equalizer at Palermo.'],
 ['Warren Zaïre-Emery',0,1,'Official assist: Pio first equalizer at Palermo.'],
 ['Mikey Moore',0,1,'Official assist for Pio at 58′ against Sampdoria on 30 August.'],
 ['João Neves',1,0,'Long-range goal against Sampdoria 67′ on 30 August.'],
 ['Nico Paz',0,1,'Official assist for João Neves long-range goal at 67′ against Sampdoria.']
];
D.statsCurrentSeason='2031–32';D.stats=D.statsBySeason['2031–32'];
for(const [name,oldG,oldA,newG,newA] of [['Pio Esposito',147,74,148,74],['Mikey Moore',17,28,17,29],['João Neves',7,9,8,9],['Nico Paz',20,25,20,26]]){
 const row=(D.careerStats||[]).find(r=>r[0]===name);if(!row)throw Error('Career record missing for '+name);
 if(Number(row[1])===oldG&&Number(row[2])===oldA){row[1]=newG;row[2]=newA;}
 else if(Number(row[1])!==newG||Number(row[2])!==newA)throw Error('Club career reconciliation failed for '+name);
}
if(D.statsRoomAudit){D.statsRoomAudit.pioCareerGoals=148;D.statsRoomAudit.pioCareerAssists=74;}
D.statsRoomAsOf='30 August 2031 · Napoli 2–0 Sampdoria';
D.statsScope='2031–32 Napoli club goals/assists through Sampdoria 30 Aug. Pio 4 goals, Estêvão 2 assists, Zaïre-Emery 1 assist, Moore 1 assist, Neves 1 goal, Paz 1 assist. Italy goal against Norway is not a Napoli club goal. Shootout excluded.';
D.italyQualifyingFinal2031={
 competition:'European Championship Qualifiers',displaySeason:'2030/31',completed:'2031-09-09',groupComplete:true,
 groupTable:[
 {position:1,team:'Italy',played:8,won:6,drawn:2,lost:0,goalsFor:15,goalsAgainst:5,goalDifference:10,points:20},
 {position:2,team:'Denmark',played:8,won:4,drawn:1,lost:3,goalsFor:13,goalsAgainst:11,goalDifference:2,points:13},
 {position:3,team:'Norway',played:8,won:3,drawn:1,lost:4,goalsFor:8,goalsAgainst:11,goalDifference:-3,points:10},
 {position:4,team:'Ukraine',played:8,won:2,drawn:1,lost:5,goalsFor:7,goalsAgainst:13,goalDifference:-6,points:7},
 {position:5,team:'Hungary',played:8,won:1,drawn:3,lost:4,goalsFor:9,goalsAgainst:12,goalDifference:-3,points:6}
 ],italy:{played:8,wins:6,draws:2,losses:0,goalsFor:15,goalsAgainst:5,goalDifference:10,points:20,position:1},latest:norway,
 italyLatestContributions:[{player:'Moise Kean',goals:1,assists:0},{player:'Pio Esposito',goals:1,assists:0},{player:'Nicolò Barella',goals:0,assists:1}],
 goalkeeper:'Gianluigi Donnarumma — brilliant performance, no individual save tally reported'
};
D.italyGroupStandingLatest=D.italyQualifyingFinal2031.groupTable;
D.italyQualifiersLatest=D.italyQualifyingFinal2031.italy;
D.upcoming=[['Roma','Serie A','12 Sep 2031 · Away'],['Arsenal','Champions League','16 Sep 2031 · Away'],['Opponent not named','Serie A','21 Sep 2031 · Home'],['Sassuolo','Serie A','27 Sep 2031 · Away']];
D.fixtures203132=(D.fixtures203132||[]).map(x=>x.date==='2031-08-30'?samp:x.date==='2031-09-09'?norway:x);
D.nextClubFixture=D.fixtures203132.find(x=>x.date==='2031-09-12'&&x.opponent==='Roma');
D.nextEuropeanFixture=D.fixtures203132.find(x=>x.date==='2031-09-16'&&x.opponent==='Arsenal');
D.nextSerieAFixture=D.nextClubFixture;
D.nextMatch=D.nextClubFixture;
if(!D.nextClubFixture||!D.nextEuropeanFixture)throw Error('Next Roma or Arsenal fixture missing');
D.nijstadSummer2031={name:'Ruud Nijstad',nationality:'Netherlands',from:'Manchester United',to:'Napoli',type:'Permanent signing',fee:27500000,marketValueAtNegotiation:24000000,position:'CB',age:23,overall:78,potential:88,height:'6ft 4in',preferredFoot:'Left',contractYears:3,role:'Prospect',weeklyWage:84000,signingBonus:700000,status:'completed'};
const squad=D.squadSnapshot;if(!squad?.players||squad.playerCount!==37||squad.loanCount!==16)throw Error('Pre-Nijstad summer roster not as expected');
if(!squad.players['Ruud Nijstad']){
 squad.players['Ruud Nijstad']={age:23,overall:78,potential:88,position:'CB',onLoan:false,verified:true,source:'Manager-confirmed 2031 transfer and player rating'};
 squad.arrivals=[...squad.arrivals,D.nijstadSummer2031];
 squad.playerCount++;squad.knownNotLoanedCount++;
}
squad.updated='Summer 2031 · through Nijstad arrival';squad.notes='38 players under Napoli contract, 16 on loan, 22 not marked on loan. Nijstad joins from Manchester United for $27.5m, 23 years, 78 OVR, 88 potential; three-year prospect deal.';
D.squadPublic.Defenders.push(['Ruud Nijstad','CB',78,'Age 23']);
D.playerRatingsCurrent['Ruud Nijstad']=78;D.playerAges['Ruud Nijstad']=23;
D.squadCurrentSeason='2031–32';D.developmentNote='2031–32: 38 players contracted, 16 on loan. Ruud Nijstad 23, 78 OVR/88 potential, joins defence from Manchester United for $27.5m.';
const mk=(tag,cls,value)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(value!==undefined)el.textContent=String(value);return el};
const groups=$('squadGroups');
if(groups){
 const all=[...groups.querySelectorAll('.squad-group')];const defence=all.find(x=>x.querySelector('.squad-group-head h3')?.textContent==='Defenders');
 const arrivals=all.find(x=>x.querySelector('.squad-group-head h3')?.textContent==='Summer arrivals');
 if(!defence||!arrivals)throw Error('Cannot locate current squad sections');
 const put=(section,title,detailText,rating)=>{const row=mk('div','player-row'),detail=mk('div');detail.append(mk('strong','',title),mk('span','',detailText));row.append(detail,mk('b','',rating));section.append(row);const count=section.querySelector('.squad-group-head span');if(count)count.textContent=String(Number(count.textContent)+1)};
 if(![...defence.querySelectorAll('.player-row strong')].some(x=>x.textContent==='Ruud Nijstad'))put(defence,'Ruud Nijstad','CB · Age 23',78);
 if(![...arrivals.querySelectorAll('.player-row strong')].some(x=>x.textContent==='Ruud Nijstad'))put(arrivals,'Ruud Nijstad','Permanent signing · $27.5m fee · CB · Age 23',78);
 const intro=groups.querySelector('.development-roster-head p');if(intro)intro.textContent='38 contracted players · 16 on loan · 22 others not marked on loan. Ruud Nijstad signed for $27.5m; Sebastiano Esposito for $36m.';
}
const summary=document.querySelector('#squad .section-head>div>p');if(summary)summary.textContent='2031–32: 38 Napoli players contracted, including 16 on loan; defender Ruud Nijstad joins from Manchester United.';
D.meta={...(D.meta||{}),season:'2031–32 · NAPOLI SUPERCOPPA HOLDERS · ITALY TOP EURO QUALIFYING'};
D.hero={...(D.hero||{}),articleId:ids[0],strap:'EURO QUALIFIER · NORWAY 1–2 ITALY · 9 SEPTEMBER 2031'};
D.ticker=['ITALY TOP THE EURO QUALIFYING GROUP · 20 POINTS FROM EIGHT · UNBEATEN','NORWAY 1–2 ITALY · KEAN 53′ · PIO 58′','GIGIO DONNARUMMA BRILLIANT IN NORWAY · HAALAND 20′','ITALY FINISH SEVEN POINTS CLEAR OF DENMARK · +10 GOAL DIFFERENCE','NAPOLI 2–0 SAMPDORIA · PIO 58′ · NEVES 67′ SCREAMER','4.2–0.7 xG · EIGHT SHOTS ON TARGET TO NONE · OLSCHOWSKY SIX SAVES','NIJSTAD, 23, ARRIVES FROM MANCHESTER UNITED · $27.5M','NEXT NAPOLI: ROMA AWAY 12 SEPTEMBER · ARSENAL AWAY 16 SEPTEMBER'];
D.whispers=[
 ['AZZURRI UNBEATEN','Italy complete eight European Championship qualifiers with six wins, two draws, 20 points and a +10 goal difference.'],
 ['FIVE MINUTES CHANGE NORWAY','Kean scores at 53′ from Barella; Pio strikes the top corner at 58′. Haaland put Norway ahead at 20′.'],
 ['GIGIO PROTECTS THE LEAD','Donnarumma is outstanding as Italy win 2–1 away in Norway.'],
 ['NAPOLI CONTROL SAMPDORIA','2–0, 4.2 expected goals to 0.7, and eight shots on target to none; Olschowsky makes six saves.'],
 ['NEVES FROM DISTANCE','João Neves scores from far outside the box at 67′, assisted by Nico Paz.'],
 ['NIJSTAD JOINS','23-year-old left-footed CB Ruud Nijstad joins from Manchester United for $27.5m.'],
 ['ROMA THEN ARSENAL','Napoli face Roma away on 12 September and Arsenal away in Europe on 16 September.']
];
const card=(a,variant)=>'<article class="article-card '+E(variant)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy"></div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story</span></div></article>';
const lead=front[0];
if($('heroStory'))$('heroStory').innerHTML='<div class="hero-media"><img src="'+E(lead.image)+'" alt="Archival editorial illustration accompanying Italy European qualifier win in Norway" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(lead.category)+'</span><span>'+E(lead.date)+'</span></div><h2>'+E(lead.headline)+'</h2><p>'+E(lead.dek)+'</p><span class="hero-read">Read story</span></div>';
if($('topStories'))$('topStories').innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+E(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(a.category)+'</small><strong>'+E(a.headline)+'</strong></div></button>').join('');
if($('latestNews'))$('latestNews').innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i?'compact':'wide')).join('');
if($('newsGrid'))$('newsGrid').innerHTML=D.articles.map((a,i)=>card(a,i?'standard':'lead-grid')).join('');
if($('articleFilters'))$('articleFilters').innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((a,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(a)+'">'+E(a)+'</button>').join('');
if($('tickerTrack'))$('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
if($('whisperList'))$('whisperList').innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
if($('latestResult'))$('latestResult').innerHTML='<div class="latest-score"><span>NOR</span><strong>1–2</strong><span>ITA</span></div><p>EURO QUALIFIER · HAALAND 20′ · KEAN 53′ (BARELLA) · PIO 58′ · DONNARUMMA SHINES</p>';
if($('formLine'))$('formLine').innerHTML='<div><strong>ITALY · TOP OF EURO QUALIFYING GROUP</strong><span>8 played · 6 wins · 2 draws · 0 defeats · 20 points · +10</span></div><div><strong>NAPOLI 2–0 SAMPDORIA</strong><span>Pio 58′ (Moore) · Neves 67′ (Paz) · 4.2–0.7 xG · zero shots on target against</span></div><div><strong>NAPOLI LEAGUE FORM · 4 POINTS FROM TWO</strong><span>Palermo 2–2 away · Sampdoria 2–0 home · Roma away next</span></div>';
if($('upcomingStrip'))$('upcomingStrip').innerHTML=D.upcoming.map(([team,competition,when])=>'<div class="fixture"><span>'+E(competition)+'</span><strong>'+E(team)+'</strong><small>'+E(when)+'</small></div>').join('');
if($('nextTwo'))$('nextTwo').innerHTML=D.upcoming.slice(0,2).map(([team,competition,when])=>'<div class="next-row"><strong>'+E(team)+'</strong><span>'+E(competition)+' · '+E(when)+'</span></div>').join('');
if($('matchesList')&&!$('matchesList').querySelector('[data-italy-norway-sep9-2031]'))$('matchesList').innerHTML='<div class="match-card" data-italy-norway-sep9-2031="true"><div class="result-badge W">W</div><div class="match-main"><span>EURO qualifier · Away · 9 Sep 2031</span><strong>Norway <b>1–2</b> Italy</strong><p>Haaland 20′ · Kean 53′ (Barella) · Pio 58′ top-corner winner · Donnarumma excellent</p></div></div>'+$('matchesList').innerHTML;
if($('matchesList')&&!$('matchesList').querySelector('[data-napoli-samp-aug30-2031]'))$('matchesList').innerHTML='<div class="match-card" data-napoli-samp-aug30-2031="true"><div class="result-badge W">W</div><div class="match-main"><span>Serie A · Home · 30 Aug 2031</span><strong>Napoli <b>2–0</b> Sampdoria</strong><p>Pio 58′ (Moore) · Neves 67′ (Paz) · 4.2–0.7 xG · 10–2 shots · 8–0 on target · Olschowsky 6 saves</p></div></div>'+$('matchesList').innerHTML;
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='ITALY 20 POINTS · UNBEATEN IN EURO QUALIFYING';
const eyebrow=document.querySelector('.brand-copy .eyebrow');if(eyebrow)eyebrow.textContent='NAPOLI & ITALIA · SEASON 2031–32';
document.title='Italy unbeaten in EURO qualifying · Napoli Season Room 2031–32';
const description=document.querySelector('meta[name="description"]');if(description)description.content='Italy beat Norway 2–1 with Kean and Pio goals and Donnarumma brilliance, finish European qualifying undefeated on 20 points; Napoli beat Sampdoria 2–0.';
window.SEASONROOM_STATS?.render?.('2031–32');
})();
