/* Year-end 2030: Real Madrid sign Geertruida, Napoli sign Victor Hermansen, Udinese 1–1. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31',match={date:'2030-12-28',team:'Napoli',opponent:'Udinese',venue:'Home',competition:'Serie A',status:'completed',score:'1–1',halfTime:null,teamCleanSheet:false,
events:[{minute:5,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',assistOfficial:true,detail:'Pio outmuscles defender to score from Beier pass'},{minute:66,team:'Udinese',scorer:'Garcia',assist:null,detail:'Udinese equalise 1–1'}],
notes:'Full-strength Napoli played poorly in home draw. Accumulated fixtures may have contributed, unproven. Epolo saved a point with excellent goalkeeping. No specific save count or shot metrics reported.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const found=schedule.find(x=>x.team==='Napoli'&&x.opponent==='Udinese'&&x.date===match.date);
if(found)Object.assign(found,match);else schedule.push(match);
const announced=[
{date:'2031-01-03',team:'Napoli',opponent:'Supercup opponent TBC',venue:'Home',competition:'Supercup',status:'scheduled'},
{date:'2031-01-12',team:'Napoli',opponent:'Lecce',venue:'Home',competition:'Serie A',status:'scheduled'},
{date:'2031-01-15',team:'Napoli',opponent:'Sassuolo',venue:'Home',competition:'Serie A',status:'scheduled'},
{date:'2031-01-18',team:'Napoli',opponent:'Hellas Verona',venue:'Away',competition:'Serie A',status:'scheduled'},
{date:'2031-01-22',team:'Napoli',opponent:'Barcelona',venue:'Home',competition:'Champions League',status:'scheduled'},
{date:'2031-01-26',team:'Napoli',opponent:'Bologna',venue:'Home',competition:'Serie A',status:'scheduled'},
{date:'2031-01-29',team:'Napoli',opponent:'Dynamo Kyiv',venue:'Away',competition:'Champions League',status:'scheduled'}];
for(const fixture of announced){if(!schedule.some(x=>x.team===fixture.team&&x.date===fixture.date&&x.opponent===fixture.opponent))schedule.push(fixture)}
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((x,y)=>String(x.date).localeCompare(String(y.date))).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'May','06':'Jun','07':'Jul','08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' '+x.date.slice(0,4)+' · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Udinese'&&x[2]==='Serie A'&&String(x[6]).includes('28 Dec 2030')))D.results.push(['Napoli','Udinese','Serie A',1,1,'D','28 Dec 2030 · Home','Pio 5′ (Beier assist); Garcia 66′. Epolo decisive in a poor performance.']);
D.latestResult=['NAPOLI','1–1','UDINESE','Serie A · 28 December 2030 · Pio 5′ (Beier), Garcia 66′'];
D.season203031={...(D.season203031||{}),updated:'Year-end 2030 · Udinese 1–1; Geertruida to Real Madrid, Hermansen from Fulham',competitiveGamesConfirmed:25,competitiveWins:20,competitiveDraws:4,competitiveLosses:1,competitiveGoalsFor:58,competitiveGoalsAgainst:19,statsVerifiedThrough:'Napoli 1–1 Udinese · Serie A · 28 December 2030',
serieA:{played:17,wins:14,draws:2,losses:1,points:44,goalsFor:38,goalsAgainst:12,goalDifference:26},
championsLeague:{played:6,wins:4,draws:2,losses:0,points:14,goalsFor:14,goalsAgainst:5,goalDifference:9,position:2},
nextClubOpponent:'Supercup opponent TBC',nextClubCompetition:'Supercup',nextClubDate:'2031-01-03',latestTransfer:'Geertruida sold to Real Madrid for $46.5m; Hermansen signed from Fulham'};
D.seasonState={...(D.seasonState||{}),league:{played:17,w:14,d:2,l:1,points:44,goalsFor:38,goalsAgainst:12,goalDifference:26,remaining:21,status:'Napoli 44 points in 17 Serie A matches: 14 wins, two draws, one defeat; 38 scored, 12 conceded.'}};
D.nextClubFixture={date:'2031-01-03',opponent:'Supercup opponent TBC',competition:'Supercup',venue:'Home',opponentConfirmed:false};
D.udineseDec2030={date:'2030-12-28',result:'Napoli 1–1 Udinese',goals:match.events,teamSelection:'full strength',performance:'poor',fatigue:'possible contributory factor, not confirmed',goalkeeper:'Epolo — saved a point; save count unknown',pointsAfter:44};
D.transferGeertruidaRealMadrid2030={player:'Lutsharel Geertruida',status:'Sold',destination:'Real Madrid',fee:46500000,currency:'$',negotiations:'Renewal talks broke down',requestedWeeklyWage:150000,requestedBonusesGreaterThan:2000000,date:'Turn of 2030–31 year; exact transfer date not given'};
D.transferVictorHermansenFulham2030={player:'Victor Hermansen',status:'Signed',origin:'Fulham',positionOptions:['LB','RB','LM'],age:21,overall:80,potentialCap:87,role:'Sporadic',contractYears:3,releaseClause:null,weeklyWage:100000,signingBonus:500000,transferFee:null,currency:'$',date:'Turn of 2030–31 year; exact transfer date not given',replacementFor:'Lutsharel Geertruida'};
D.departures={...(D.departures||{}),'Lutsharel Geertruida':{type:'Sold',destination:'Real Madrid',fee:46500000,note:'Contract extension talks broke down; requested $150k/week plus over $2m bonuses'}};
D.arrivals={...(D.arrivals||{}),'Victor Hermansen':{type:'Signed',from:'Fulham',fee:null,age:21,overall:80,potential:87,positions:['LB','RB','LM'],role:'Sporadic',contractYears:3,wage:100000,signingBonus:500000,releaseClause:null,note:'Signed to replace Geertruida; fee unconfirmed'}};
if(D.squadPublic?.Defenders){
D.squadPublic.Defenders=D.squadPublic.Defenders.filter(x=>x[0]!=='Lutsharel Geertruida'&&x[0]!=='Victor Hermansen');
D.squadPublic.Defenders.push(['Victor Hermansen','LB / RB / LM',80,'New signing · sporadic · POT 87 · Fulham']);}
D.playerAges={...(D.playerAges||{}),'Victor Hermansen':21};
D.currentSquadTransferUpdates=[
{player:'Lutsharel Geertruida',status:'Sold to Real Madrid',fee:46500000,previousClubGoals:2,previousClubAssists:1},
{player:'Victor Hermansen',status:'Joined Napoli from Fulham',age:21,overall:80,potentialCap:87,positions:['LB','RB','LM'],contractYears:3,role:'Sporadic'}];
D.statsScope='Napoli club after Udinese: Pio 22G9A, Beier 16G16A; Geertruida departed with 2G1A historically preserved; Victor Hermansen arrives from Fulham 80 OVR, POT 87, LB/RB/LM. Italy excluded.';
const rows=D.statsBySeason?.[season];
if(rows){for(const [name,g,a,note] of [
['Pio Esposito',1,0,'Udinese home 28 Dec: 5′ physical finish from Beier assist'],
['Maximilian Beier',0,1,'Udinese home 28 Dec: officially credited assist on Pio goal 5′']
]){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));D.stats=rows;D.statsCurrentSeason=season;
const sums=new Map();for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p)}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((x,y)=>y[1]-x[1]||y[2]-x[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);}
const controls=$('stats')?.querySelector('.stats-filters');if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
if(desc)desc.textContent=view===season?'Napoli club: Pio 22G9A, Beier 16G16A. Geertruida departed with 2G1A; historical totals preserved. Italy excluded.':'Napoli club records for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'Udinese 1–1: Pio 5′ (Beier), Garcia 66′. 44 points. Geertruida to Real Madrid; Hermansen from Fulham.':'Napoli club records only.';};controls.addEventListener('click',refresh);if(tab)tab.click();}const ids=["geertruida-real-madrid-46-5-million-sale-2030","victor-hermansen-fulham-napoli-replacement-dec2030","napoli-udinese-one-one-epolo-garcia-pio-dec2030","epolo-rescues-napoli-udinese-draw-dec2030","bellandi-geertruida-sale-january-defence-debate-2030"],pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Missing year-end newsroom articles');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='TRANSFERS · REAL MADRID / FULHAM';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['REAL MADRID BUY GEERTRUIDA · $46.5M','NAPOLI SIGN VICTOR HERMANSEN FROM FULHAM · 21 YEARS · 80 OVR','HERMANSEN · LB / RB / LM · POTENTIAL 87','NAPOLI 1–1 UDINESE · PIO 5′ · GARCIA 66′ · EPOLO KEY','44 SERIE A POINTS · JANUARY SUPERCUP NEXT'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['GEERTRUIDA TO MADRID','The versatile defender leaves for $46.5m after extension demands of $150k/week and over $2m in bonuses.'],['HERMANSEN ARRIVES','Fulham’s 21-year-old LB/RB/LM joins Napoli rated 80, potential ceiling 87.'],['THREE-YEAR DEAL','Hermansen signs a sporadic contract at $100k/week with a $500k signing bonus and no release clause.'],['EPOLO SAVES A POINT','Pio scores early but Garcia equalises on 66 minutes; Napoli draw 1–1 with Udinese.'],['THE JANUARY TEST','January begins with the Supercup; Barcelona and Dynamo Kyiv await in Europe.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>REAL MADRID SIGN GEERTRUIDA · $46.5M</strong><span>Extension talks collapse · Victor Hermansen arrives from Fulham as replacement</span></div><div><strong>NAPOLI 1–1 UDINESE · EPOLO KEEPS A POINT</strong><span>Pio 5′ (Beier) · Garcia 66′ · Serie A 44 points in 17 games</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>1–1</strong><span>UDI</span></div><p>SERIE A · 28 DEC 2030 · PIO 5′ · GARCIA 66′ · EPOLO KEY</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='GEERTRUIDA TO REAL MADRID · HERMANSEN SIGNS · SUPERCUP NEXT';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli sell Geertruida to Real Madrid for $46.5m and sign Victor Hermansen from Fulham. Udinese draw 1–1 at Napoli as Epolo preserves a point.');




})();
