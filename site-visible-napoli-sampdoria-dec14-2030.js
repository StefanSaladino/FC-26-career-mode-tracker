/* Serie A MD15: Napoli 2–0 Sampdoria · 14 December 2030; Olise two assists. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31',match={date:'2030-12-14',team:'Napoli',opponent:'Sampdoria',venue:'Home',competition:'Serie A',status:'completed',score:'2–0',halfTime:'2–0',teamCleanSheet:true,
events:[{minute:37,team:'Napoli',scorer:'Pio Esposito',assist:'Michael Olise',assistOfficial:true,finish:'Top-corner strike',detail:'Olise through ball'},{minute:43,team:'Napoli',scorer:'Maximilian Beier',assist:'Michael Olise',assistOfficial:true,finish:'Header',detail:'Olise cross; Beier unmarked in centre of box'}],
notes:'Napoli beat Sampdoria 2–0, halftime 2–0, clean sheet. Pio scores from Olise through ball at 37, Beier heads Olise cross at 43. Two credited assists to Olise. Selective rotation but actual lineup, substitutions and goalkeeper unconfirmed.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const found=schedule.find(x=>x.team==='Napoli'&&x.opponent==='Sampdoria'&&x.date===match.date);
if(found)Object.assign(found,match);else schedule.push(match);
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[
x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Sampdoria'&&x[2]==='Serie A'&&String(x[6]).includes('14 Dec 2030')))D.results.push(['Napoli','Sampdoria','Serie A',2,0,'W','14 Dec 2030 · Home','Pio 37′ top corner (Olise), Beier 43′ header (Olise). Two Olise assists; clean sheet.']);
D.latestResult=['NAPOLI','2–0','SAMPDORIA','Serie A · 14 December 2030 · Olise 2 assists'];
D.season203031={...(D.season203031||{}),updated:'14 December 2030 · Napoli 2–0 Sampdoria · full time',competitiveGamesConfirmed:22,competitiveWins:18,competitiveDraws:3,competitiveLosses:1,competitiveGoalsFor:50,competitiveGoalsAgainst:16,statsVerifiedThrough:'Napoli 2–0 Sampdoria · Serie A · 14 December 2030',
serieA:{played:15,wins:13,draws:1,losses:1,points:40,goalsFor:34,goalsAgainst:10,goalDifference:24},
championsLeague:{played:6,wins:4,draws:2,losses:0,points:14,goalsFor:14,goalsAgainst:5,goalDifference:9,position:2},
nextClubOpponent:'Pescara',nextClubCompetition:'Coppa Italia',nextClubDate:'2030-12-18'};
D.seasonState={...(D.seasonState||{}),league:{played:15,w:13,d:1,l:1,points:40,goalsFor:34,goalsAgainst:10,goalDifference:24,remaining:23,status:'Napoli 40 points from fifteen matches, 34 scored and ten conceded.'}};
D.nextClubFixture={date:'2030-12-18',opponent:'Pescara',competition:'Coppa Italia',venue:'Home'};
D.sampdoriaDec2030={date:'2030-12-14',result:'Napoli 2–0 Sampdoria',halfTime:'2–0',goals:match.events,cleanSheet:true,oliseMatchAssists:2,rotation:'selective; exact XI not established'};
D.statsScope='Napoli club after Sampdoria: Pio 18G9A, Beier 16G13A, Michael Olise 0G5A with two officially credited assists on 14 December. Italy excluded.';
const rows=D.statsBySeason?.[season];
if(rows){
for(const [name,g,a,note] of [['Pio Esposito',1,0,'Sampdoria 14 Dec: 37′ powerful top-corner finish from Olise through ball'],['Maximilian Beier',1,0,'Sampdoria 14 Dec: 43′ headed goal from Olise cross'],['Michael Olise',0,2,'Sampdoria 14 Dec: two credited assists to Pio at 37′ and Beier at 43′']]){
let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
D.stats=rows;D.statsCurrentSeason=season;
const sums=new Map();for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p)}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;}
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
if(desc)desc.textContent=view===season?'Napoli after Sampdoria: Pio 18G9A, Beier 16G13A, Olise 0G5A. Italy excluded.':'Napoli club stats for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'Napoli 2–0 Sampdoria. Olise assisted Pio 37′ and Beier 43′. 40 Serie A points.':'Napoli club records only; Italy excluded.';};
controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=["napoli-sampdoria-2-0-pio-beier-olise-report-dec2030","olise-two-assists-pio-beier-sampdoria-player-focus-dec2030","napoli-sampdoria-control-clean-sheet-after-leipzig-dec2030"],pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Missing Leipzig newsroom articles');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='SERIE A · NAPOLI 2–0 SAMPDORIA';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['NAPOLI 2–0 SAMPDORIA · PIO 37′ · BEIER 43′','OLISE CREATES BOTH GOALS · TWO ASSISTS','NAPOLI 40 SERIE A POINTS FROM 15','CLEAN SHEET · LEAGUE 34 GF / 10 GA','NEXT · PESCARA CUP 18 DEC · PARMA AWAY 21 DEC'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['TWO ASSISTS','Olise sets up Pio with a through ball and Beier with a cross, six minutes apart.'],['CLEAN SHEET','A 2–0 halftime lead survives intact to the full-time whistle.'],['FORTY POINTS','Napoli have 13 league wins, one draw and one loss in fifteen matches.'],['PIO AND BEIER','Pio reaches 18 club goals, Beier 16.'],['CUP NEXT','Pescara visit on 18 December, then Napoli travel to Parma.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI 2–0 SAMPDORIA · OLISE CREATES BOTH</strong><span>Pio 37′ · Beier 43′ · Olise two assists</span></div><div><strong>SERIE A · 40 POINTS FROM 15</strong><span>13 wins · one draw · one defeat · 34 scored / 10 conceded</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>2–0</strong><span>SAM</span></div><p>SERIE A · 14 DEC 2030 · PIO 37′ · BEIER 43′ · OLISE TWO ASSISTS</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='NAPOLI 2–0 SAMPDORIA · 40 POINTS · PESCARA NEXT';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli beat Sampdoria 2–0 on 14 December 2030, with two Michael Olise assists for Pio Esposito and Maximilian Beier, taking the club to 40 Serie A points.');

})();
