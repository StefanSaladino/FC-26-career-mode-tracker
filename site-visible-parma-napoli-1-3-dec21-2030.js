/* Parma 1–3 Napoli, Serie A 21 Dec 2030; 2.6–0.1 xG and Pio double. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31',match={date:'2030-12-21',team:'Napoli',opponent:'Parma',venue:'Away',competition:'Serie A',status:'completed',score:'3–1',halfTime:null,teamCleanSheet:false,xGFor:2.6,xGAgainst:0.1,expectedGoals:{Napoli:2.6,Parma:0.1},
events:[{minute:null,period:'before 31′',team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',assistOfficial:true,detail:'Opening goal: Beier plays Pio, shot off crossbar, ball rebounds up and Pio heads his own rebound in'},{minute:31,team:'Parma',scorer:'Frigan',assist:null,detail:'Parma equalise 1–1'},
{minute:64,team:'Napoli',scorer:'Warren Zaïre-Emery',assist:'Nico Paz',assistOfficial:true,detail:'Brilliant team buildup, Paz assists Warren for 2–1'},{minute:null,period:'after 64′',team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',assistOfficial:true,detail:'Flowing counter, ball moves continuously, Beier final pass to Pio for 3–1'}],
notes:'Parma 1–3 Napoli; Pio scored twice, both Beier assists (including own shot off bar then headed rebound); Frigan equalised 31′; Zaïre-Emery 64′ from Paz; final Pio counter goal minute unconfirmed. FT xG Napoli 2.6 Parma 0.1. No individual shot xG or halftime result established.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const existing=schedule.find(x=>x.team==='Napoli'&&x.opponent==='Parma'&&x.date===match.date);
if(existing)Object.assign(existing,match);else schedule.push(match);
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((x,y)=>String(x.date).localeCompare(String(y.date))).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Parma'&&x[2]==='Serie A'&&String(x[6]).includes('21 Dec 2030')))D.results.push(['Napoli','Parma','Serie A',3,1,'W','21 Dec 2030 · Away','Parma 1–3 Napoli. Pio brace both assisted by Beier; Frigan 31′; Zaïre-Emery 64′ from Paz. Final xG Napoli 2.6 Parma 0.1.']);
D.latestResult=['PARMA','1–3','NAPOLI','Serie A · 21 December 2030 · Pio brace, Beier two assists, xG 2.6–0.1'];
D.season203031={...(D.season203031||{}),updated:'21 December 2030 · Parma 1–3 Napoli · full time',competitiveGamesConfirmed:24,competitiveWins:20,competitiveDraws:3,competitiveLosses:1,competitiveGoalsFor:57,competitiveGoalsAgainst:18,statsVerifiedThrough:'Parma 1–3 Napoli · Serie A · 21 December 2030',serieA:{played:16,wins:14,draws:1,losses:1,points:43,goalsFor:37,goalsAgainst:11,goalDifference:26},championsLeague:{played:6,wins:4,draws:2,losses:0,points:14,goalsFor:14,goalsAgainst:5,goalDifference:9,position:2},nextClubOpponent:'Udinese',nextClubCompetition:'Serie A',nextClubDate:'2030-12-28'};
D.seasonState={...(D.seasonState||{}),league:{played:16,w:14,d:1,l:1,points:43,goalsFor:37,goalsAgainst:11,goalDifference:26,remaining:22,status:'Napoli 43 points in 16 Serie A games, GF37 GA11; Parma xG 0.1, Napoli 2.6.'}};
D.nextClubFixture={date:'2030-12-28',opponent:'Udinese',competition:'Serie A',venue:'Home'};
D.parmaDec2030={date:'2030-12-21',result:'Parma 1–3 Napoli',xG:{Napoli:2.6,Parma:0.1},scorers:{'Pio Esposito':2,'Warren Zaïre-Emery':1,Frigan:1},assists:{'Maximilian Beier':2,'Nico Paz':1},goalEvents:match.events,serieAPointsAfter:43};
D.statsScope='After Parma: Pio Esposito 21G9A, Beier 16G15A, Zaïre-Emery 4G3A, Nico Paz 0G3A. xG Napoli 2.6 Parma 0.1. Italy excluded.';
const rows=D.statsBySeason?.[season];
if(rows){
for(const [name,g,a,note] of [
['Pio Esposito',2,0,'Parma 21 Dec: brace; heads rebound after own shot hits bar, then finishes flowing counter, both from Beier'],
['Maximilian Beier',0,2,'Parma 21 Dec: both Pio goals officially assisted, including opening rebound header'],
['Warren Zaïre-Emery',1,0,'Parma 21 Dec: 64′ goal after fantastic buildup from Nico Paz assist'],
['Nico Paz',0,1,'Parma 21 Dec: official assist for Zaïre-Emery 64′']
]){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
D.stats=rows;D.statsCurrentSeason=season;
const sums=new Map();for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p)}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;}
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
if(desc)desc.textContent=view===season?'Napoli club after Parma: Pio 21G9A, Beier 16G15A, Zaïre-Emery 4G3A, Paz 0G3A. Italy excluded.':'Napoli club stats for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'Parma 1–3 Napoli: Pio brace, Beier two credited assists, Zaïre-Emery 64′ from Paz; xG 2.6–0.1.':'Napoli club records only.';};controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=["parma-one-napoli-three-pio-brace-beier-zaire-dec2030","parma-napoli-xg-26-to-01-dec2030-tactical-analysis","pio-beier-two-assists-parma-brace-dec2030-player-focus"],pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Missing Parma newsroom articles');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='SERIE A · PARMA 1–3 NAPOLI';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['PARMA 1–3 NAPOLI · PIO BRACE, BEIER TWO ASSISTS','ZAÏRE-EMERY 64′ FROM PAZ · FRIGAN 31′','XG · NAPOLI 2.6 · PARMA 0.1','SERIE A · 43 POINTS FROM 16','NEXT · UDINESE HOME 28 DEC'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['PIO TWO WAYS','Esposito heads his own rebound after hitting the bar; later finishes a rapid counter, Beier assists both.'],['WARREN RESTORES THE LEAD','Zaïre-Emery scores at 64 minutes following a great team move assisted by Nico Paz.'],['XG · 2.6 TO 0.1','Napoli’s chance quality far exceeds Parma’s, even though Frigan equalises at 31 minutes.'],['BEIER THE CREATOR','Two credited assists take the forward to fifteen for the season.'],['FORTY-THREE POINTS','Napoli take the three points from Parma and next host Udinese.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>PARMA 1–3 NAPOLI · PIO BRACE</strong><span>Two Beier assists · Zaïre-Emery 64′ (Paz)</span></div><div><strong>EXPECTED GOALS · NAPOLI 2.6 / PARMA 0.1</strong><span>SERIE A · 43 points in 16 matches · GF37 / GA11</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>PAR</span><strong>1–3</strong><span>NAP</span></div><p>SERIE A · 21 DEC 2030 · PIO TWO GOALS · XG 2.6 TO 0.1</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='PARMA 1–3 NAPOLI · PIO DOUBLE · 43 POINTS · UDINESE NEXT';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli beat Parma 3–1 on 21 December 2030 with a Pio Esposito brace, two credited Beier assists, Zaïre-Emery 64′ from Nico Paz and expected goals 2.6–0.1.');



})();
