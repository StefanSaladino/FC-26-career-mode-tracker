/* Year-end 2030: Napoli 1-1 Udinese, Epolo performance and Geertruida $46.5m sale to Real Madrid. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31',match={date:'2030-12-28',team:'Napoli',opponent:'Udinese',venue:'Home',competition:'Serie A',status:'completed',score:'1–1',halfTime:null,teamCleanSheet:false,
events:[{minute:5,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',assistOfficial:true,detail:'Beier plays Pio, who outmuscles defender and scores, 1–0'},{minute:66,team:'Udinese',scorer:'Garcia',assist:null,detail:'Udinese equalise, 1–1; other details not established'}],
notes:'Home 1–1 draw 28 Dec 2030; full-strength Napoli team performed poorly, fatigue from fixtures possible but unproven; Epolo played strongly and saved a point, exact save count unknown. 5′ Pio Esposito from Beier assist; 66′ Garcia equalises. No unverified shots, xG or substitutions.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const existing=schedule.find(x=>x.team==='Napoli'&&x.opponent==='Udinese'&&x.date===match.date);
if(existing)Object.assign(existing,match);else schedule.push(match);
const upcomingConfirmed=[
{date:'2031-01-03',team:'Napoli',opponent:'Supercup opponent TBC',venue:'Home',competition:'Supercup',status:'scheduled'},
{date:'2031-01-12',team:'Napoli',opponent:'Lecce',venue:'Home',competition:'Serie A',status:'scheduled'},
{date:'2031-01-15',team:'Napoli',opponent:'Sassuolo',venue:'Home',competition:'Serie A',status:'scheduled'},
{date:'2031-01-18',team:'Napoli',opponent:'Hellas Verona',venue:'Away',competition:'Serie A',status:'scheduled'},
{date:'2031-01-22',team:'Napoli',opponent:'Barcelona',venue:'Home',competition:'Champions League',status:'scheduled'},
{date:'2031-01-26',team:'Napoli',opponent:'Bologna',venue:'Home',competition:'Serie A',status:'scheduled'},
{date:'2031-01-29',team:'Napoli',opponent:'Dynamo Kyiv',venue:'Away',competition:'Champions League',status:'scheduled'}];
for(const fix of upcomingConfirmed)if(!schedule.some(x=>x.date===fix.date&&x.team==='Napoli'&&x.opponent===fix.opponent))schedule.push(fix);
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'May','06':'Jun','07':'Jul','08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' '+x.date.slice(0,4)+' · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Udinese'&&x[2]==='Serie A'&&String(x[6]).includes('28 Dec 2030')))D.results.push(['Napoli','Udinese','Serie A',1,1,'D','28 Dec 2030 · Home','Pio 5′ from Beier, Garcia 66′ for Udinese. Epolo made decisive saves in an otherwise poor full-strength display.']);
D.latestResult=['NAPOLI','1–1','UDINESE','Serie A · 28 December 2030 · Pio 5′ (Beier), Garcia 66′'];
D.season203031={...(D.season203031||{}),updated:'Year-end 2030 · Napoli 1–1 Udinese and Geertruida $46.5m sale to Real Madrid',competitiveGamesConfirmed:25,competitiveWins:20,competitiveDraws:4,competitiveLosses:1,competitiveGoalsFor:58,competitiveGoalsAgainst:19,statsVerifiedThrough:'Napoli 1–1 Udinese · Serie A · 28 December 2030',
serieA:{played:17,wins:14,draws:2,losses:1,points:44,goalsFor:38,goalsAgainst:12,goalDifference:26},
championsLeague:{played:6,wins:4,draws:2,losses:0,points:14,goalsFor:14,goalsAgainst:5,goalDifference:9,position:2},nextClubOpponent:'Supercup opponent TBC',nextClubCompetition:'Supercup',nextClubDate:'2031-01-03',latestTransfer:'Lutsharel Geertruida sold to Real Madrid for $46.5m following failed renewal talks'};
D.seasonState={...(D.seasonState||{}),league:{played:17,w:14,d:2,l:1,points:44,goalsFor:38,goalsAgainst:12,goalDifference:26,remaining:21,status:'Napoli 44 points from 17 Serie A matches, 38 goals for and 12 against.'}};
D.nextClubFixture={date:'2031-01-03',opponent:'Supercup opponent TBC',competition:'Supercup',venue:'Home',opponentConfirmed:false};
D.udineseDec2030={date:'2030-12-28',result:'Napoli 1–1 Udinese',goals:match.events,teamSelection:'full strength',performance:'poor',fatigue:'possible contributing factor, not established fact',goalkeeper:'Epolo — key performance, rescued a point; save total unconfirmed',leaguePointsAfter:44};
D.transferGeertruidaRealMadrid2030={player:'Lutsharel Geertruida',destination:'Real Madrid',fee:46500000,currency:'$',status:'Sold — completed',timing:'After 28 Dec 2030 Udinese fixture, at the turn of year; exact date not reported',contractRenewal:'Talks broke down',requestedWagePerWeek:150000,requestedBonusesGreaterThan:2000000,compromiseReached:false,replacement:'Not yet confirmed',recordedClubStatsThisSeason:{goals:2,assists:1}};
D.departures={...(D.departures||{}),'Lutsharel Geertruida':{type:'Sold',destination:'Real Madrid',fee:46500000,note:'Napoli renewal talks broke down over $150,000/week plus more than $2m bonuses, player unwilling to budge; departure reported year-end 2030',timing:'Year-end 2030'}};
if(D.squadPublic?.Defenders)D.squadPublic.Defenders=D.squadPublic.Defenders.filter(x=>x[0]!=='Lutsharel Geertruida');
D.currentSquadUpdates=[...(D.currentSquadUpdates||[]).filter(x=>x.player!=='Lutsharel Geertruida'),{player:'Lutsharel Geertruida',status:'Departed',destination:'Real Madrid',fee:46500000,currency:'$',since:'Year-end 2030'}];
D.statsScope='Napoli 2030–31 club contributions after Udinese: Pio 22G9A, Beier 16G16A; Geertruida leaves with 2G1A, preserved historically but no longer in current squad. Italy remains separate.';
const rows=D.statsBySeason?.[season];
if(rows){
for(const [name,g,a,note] of [
['Pio Esposito',1,0,'Udinese 28 Dec: 5′, outmuscles defender, scored from Maximilian Beier assist'],
['Maximilian Beier',0,1,'Udinese 28 Dec: official assist on Pio 5′ goal']
]){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
D.stats=rows;D.statsCurrentSeason=season;
const sums=new Map();for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p)}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);}
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
if(desc)desc.textContent=view===season?'Napoli club: Pio 22G9A and Beier 16G16A; Geertruida 2G1A before transfer to Real Madrid. Italy excluded.':'Napoli club records for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'Napoli 1–1 Udinese: Pio 5′ from Beier, Garcia 66′; 44 Serie A points. Geertruida sold to Real Madrid for $46.5m.':'Napoli club only; Italy excluded.';};controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=["geertruida-real-madrid-46-5-million-sale-2030","napoli-udinese-one-one-epolo-garcia-pio-dec2030","epolo-rescues-napoli-udinese-draw-dec2030","bellandi-geertruida-sale-january-defence-debate-2030"],pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Missing Udinese and Geertruida newsroom articles');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='TRANSFER · GEERTRUIDA TO REAL MADRID';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['REAL MADRID SIGN GEERTRUIDA · $46.5M NAPOLI SALE','EXTENSION COLLAPSES · $150K/WK PLUS OVER $2M BONUSES','NAPOLI 1–1 UDINESE · PIO 5′ · GARCIA 66′','EPOLO RESCUES A POINT · SERIE A 44 FROM 17','NEXT · SUPERCUP 3 JAN · BARCELONA 22 JAN'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['MADRID SIGN GEERTRUIDA','The defender leaves Napoli for $46.5m after a wage-and-bonus impasse.'],['CONTRACT DEADLOCK','Geertruida sought $150k weekly and over $2m in bonuses; no deal was reached.'],['UDINESE TAKE A POINT','Pio scores in the fifth minute, Garcia equalises in the 66th; Napoli draw 1–1.'],['EPOLO STEPS UP','The goalkeeper keeps a poor full-strength Napoli showing from ending in defeat.'],['JANUARY TEST','A Supercup match comes first, with Barcelona and Kyiv later in the month.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>REAL MADRID BUY GEERTRUIDA FOR $46.5M</strong><span>Extension talks collapse · $150k weekly demand and over $2m bonuses</span></div><div><strong>NAPOLI 1–1 UDINESE · EPOLO SAVES A POINT</strong><span>5′ Pio from Beier · 66′ Garcia · 44 Serie A points from seventeen</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>1–1</strong><span>UDI</span></div><p>SERIE A · 28 DEC 2030 · PIO 5′ · GARCIA 66′ · EPOLO KEY SAVES</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='GEERTRUIDA TO REAL MADRID · UDINESE 1–1 · SUPERCUP NEXT';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Real Madrid sign Lutsharel Geertruida from Napoli for $46.5 million following failed renewal talks. Napoli draw 1–1 with Udinese despite an early Pio goal, with Epolo key.');




})();
