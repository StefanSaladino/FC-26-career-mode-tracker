/* UCL MD6: RB Leipzig 2–2 Napoli, 11 December 2030 — verified comeback, UCL second after six. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31',match={date:'2030-12-11',team:'Napoli',opponent:'RB Leipzig',venue:'Away',competition:'Champions League',status:'completed',score:'2–2',halfTime:'0–1',teamCleanSheet:false,
 events:[{minute:45,team:'RB Leipzig',scorer:'Ouedraogo',assist:null},{minute:72,team:'RB Leipzig',scorer:'Bakayoko',assist:null,detail:'Epolo misplaced throw attempting to distribute possession; Bakayoko scores'},
 {minute:81,team:'Napoli',scorer:'Warren Zaïre-Emery',assist:'Scott McTominay',detail:'McTominay plays Warren through; he beats Svilar'},
 {minute:null,period:'stoppage time',team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito',detail:'Pio passes to Beier; Beier breaks through alone and equalises against Svilar'}],
 notes:'RB Leipzig 2–2 Napoli: Ouedraogo 45′, Bakayoko 72′ after Epolo throwing error, Zaïre-Emery 81′ from McTominay, Beier stoppage-time equaliser from Pio pass; Svilar in goal for Leipzig. Napoli second in Champions League after six, 14 points; City and Liverpool currently outside playoff qualifying places. Beier exact stoppage minute and formal assist credit for McT/Pio not established.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const existing=schedule.find(x=>x.team==='Napoli'&&x.opponent==='RB Leipzig'&&x.date===match.date);
if(existing)Object.assign(existing,match);else schedule.push(match);
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[
x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='RB Leipzig'&&x[2]==='Champions League'&&String(x[6]).includes('11 Dec 2030')))
D.results.push(['Napoli','RB Leipzig','Champions League',2,2,'D','11 Dec 2030 · Away','RB Leipzig 2–2 Napoli; Ouedraogo 45′, Bakayoko 72′, Zaïre-Emery 81′, Beier in stoppage time. Napoli second in UCL after six.']);
D.latestResult=['RB LEIPZIG','2–2','NAPOLI','Champions League · 11 December 2030 · Beier stoppage-time equaliser'];
D.season203031={...(D.season203031||{}),updated:'11 December 2030 · Leipzig 2–2 Napoli · full time',
competitiveGamesConfirmed:21,competitiveWins:17,competitiveDraws:3,competitiveLosses:1,competitiveGoalsFor:48,competitiveGoalsAgainst:16,
statsVerifiedThrough:'RB Leipzig 2–2 Napoli · Champions League · 11 December 2030',
serieA:{played:14,wins:12,draws:1,losses:1,points:37,goalsFor:32,goalsAgainst:10,goalDifference:22},
championsLeague:{played:6,wins:4,draws:2,losses:0,points:14,goalsFor:14,goalsAgainst:5,goalDifference:9,position:2,positionScope:'Manager-confirmed table after six matches'},
nextClubOpponent:'Sampdoria',nextClubCompetition:'Serie A',nextClubDate:'2030-12-14'};
D.seasonState={...(D.seasonState||{}),league:{played:14,w:12,d:1,l:1,points:37,goalsFor:32,goalsAgainst:10,goalDifference:22,remaining:24,status:'Napoli have 37 Serie A points after fourteen; second in the Champions League after six matches with 14 points.'}};
D.nextClubFixture={date:'2030-12-14',opponent:'Sampdoria',competition:'Serie A',venue:'Home'};
D.leipzigDec2030={date:'2030-12-11',result:'RB Leipzig 2–2 Napoli',goals:match.events,keeper:'Epolo',uclPosition:2,uclPoints:14,
belowPlayoffPositions:['Manchester City','Liverpool'],qualificationNotDecided:true};
D.statsScope='Napoli club after Leipzig 11 Dec: Beier 15G13A, Zaïre-Emery 3G3A, Pio 17G9A and McTominay 1G3A including goal-creating final passes not separately confirmed as officially credited assists; Stach 1G4A after Pisa. Italy excluded.';
const rows=D.statsBySeason?.[season];
if(rows){
for(const [name,g,a,note] of [
['Maximilian Beier',1,0,'Leipzig 11 Dec: stoppage-time equaliser from Pio pass, exact minute not established'],
['Warren Zaïre-Emery',1,0,'Leipzig 11 Dec: 81′ goal from McTominay against Svilar; third club goal in two matches'],
['Pio Esposito',0,1,'Leipzig 11 Dec: goal-creating pass to Beier in stoppage time, separate official in-game assist not confirmed'],
['Scott McTominay',0,1,'Leipzig 11 Dec: final pass for Zaïre-Emery 81′, separate official in-game assist not confirmed']
]){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
D.stats=rows;D.statsCurrentSeason=season;
const sums=new Map();for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p)}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
if(desc)desc.textContent=view===season?'Napoli club after Leipzig: Beier 15 goals, Zaïre-Emery 3, Pio and McTominay with goal-creating passes; Italy excluded.':'Napoli club stats for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'RB Leipzig 2–2 Napoli · 14 UCL points, second after six. Pio/McT final passes recorded; formal assist credit pending.':'Napoli club records only; Italy excluded.';};
controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=["leipzig-two-two-beier-stoppage-zaire-rescue-dec2030","epolo-throw-bakayoko-leipzig-selection-scrutiny-dec2030","beier-pio-zaire-late-rescue-leipzig-partnerships-dec2030","bellandi-napoli-second-city-liverpool-below-cutline-dec2030"],pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Missing Leipzig newsroom articles');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='CHAMPIONS LEAGUE · RB LEIPZIG 2–2 NAPOLI';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['RB LEIPZIG 2–2 NAPOLI · BEIER STOPPAGE-TIME EQUALISER','OUEDRAOGO 45′ · BAKAYOKO 72′ AFTER EPOLO ERROR','ZAÏRE-EMERY 81′ FROM McTOMINAY · PIO TO BEIER','NAPOLI SECOND IN EUROPE · 14 POINTS AFTER SIX','CITY AND LIVERPOOL CURRENTLY BELOW PLAYOFF POSITIONS','NEXT · SAMPDORIA HOME 14 DEC · PESCARA CUP 18 DEC'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['THE GREAT ESCAPE','Pio sends Beier through for a stoppage-time equaliser as Napoli recover from 2–0 in Leipzig.'],
['EPOLO UNDER PRESSURE','The goalkeeper lost possession trying to throw out; Bakayoko punished the mistake on 72 minutes.'],
["WARREN'S RUN",'Three club goals in the last two matches: a brace at Pisa and a European reply at Leipzig.'],
['SECOND IN EUROPE','Napoli take 14 points from six UCL matches and remain unbeaten in the competition.'],
['ENGLISH GIANTS CHASING','Manchester City and Liverpool are below the playoff qualification line at the six-game checkpoint; neither is eliminated.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>LEIPZIG 2–2 NAPOLI · TWO-GOAL COMEBACK</strong><span>Zaïre-Emery 81′ from McTominay · Beier in stoppage time from Pio</span></div><div><strong>UCL · SECOND AFTER SIX · 14 POINTS</strong><span>Four wins, two draws, zero defeats · 14 goals for / five conceded</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>RBL</span><strong>2–2</strong><span>NAP</span></div><p>CHAMPIONS LEAGUE · 11 DEC 2030 · ZAÏRE-EMERY 81′ · BEIER STOPPAGE TIME</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='LEIPZIG 2–2 NAPOLI · SECOND IN EUROPE · SAMPDORIA NEXT';
})();
