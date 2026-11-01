/* Napoli 17 Sep 2030 UEFA Champions League 3–0 Liverpool, post-match official state. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const season='2030–31',date='2030-09-17';
const events=[{minute:11,scorer:'Pio Esposito',assist:'João Neves',detail:'Inside-box shot; Mamardashvili gets a touch, ball loops over into net'},{minute:33,scorer:'Pio Esposito',assist:'Maximilian Beier',detail:'Beier plays Pio for second'},{minute:43,scorer:'Maximilian Beier',assist:'Pio Esposito',detail:'Pio through ball; Beier finishes alone'}];
const match={date,team:'Napoli',opponent:'Liverpool',venue:'Unconfirmed',competition:'Champions League',status:'completed',score:'3–0',events,notes:'Napoli 3–0 at halftime and full time. Napoli team clean sheet. HT shots: Napoli 3 shots and 3 goals, Liverpool 2 shots, 1 on target. No full-time shot totals, venue or goalkeeper provided.'};
D.season203031={...(D.season203031||{}),updated:'17 September 2030 · Napoli 3–0 Liverpool',competitiveGamesConfirmed:5,competitiveWins:4,competitiveDraws:1,competitiveGoalsFor:14,competitiveGoalsAgainst:3,statsVerifiedThrough:'Napoli 3–0 Liverpool · Champions League · 17 September 2030',serieA:{played:3,wins:2,draws:1,losses:0,points:7,goalsFor:9,goalsAgainst:2,goalDifference:7},championsLeague:{played:1,wins:1,draws:0,losses:0,goalsFor:3,goalsAgainst:0},nextClubOpponent:'Bologna',nextClubCompetition:'Serie A'};
D.seasonState={...(D.seasonState||{}),league:{played:3,w:2,d:1,l:0,points:7,goalsFor:9,goalsAgainst:2,goalDifference:7,remaining:35,status:'2030–31 Serie A: Napoli 7 points through three matches. Latest club result: Napoli 3–0 Liverpool · Champions League 17 September.'}};
const sched=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const matchFound=sched.find(x=>x.team==='Napoli'&&x.opponent==='Liverpool'&&x.date===date);
if(matchFound)Object.assign(matchFound,match);else sched.push(match);
D.nextEuropeanFixture=null;
D.upcoming=sched.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+(x.date.slice(5,7)==='08'?'Aug':'Sep')+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Liverpool'&&x[2]==='Champions League'&&String(x[6]).includes('17 Sep 2030')))D.results.push(['Napoli','Liverpool','Champions League',3,0,'W','17 Sep 2030','Pio 11′ (Neves), 33′ (Beier); Beier 43′ (Pio). Team clean sheet. HT 3 Napoli shots/3 goals; Liverpool 2 shots/1 on target.']);
D.latestResult=['Napoli','3–0','Liverpool','17 September 2030 · Pio 11′, 33′; Beier 43′ · Champions League'];
const rows=D.statsBySeason?.[season];
if(rows){
 for(const [name,g,a,note] of [['Pio Esposito',2,1,'Liverpool 17 September: scored 11′ and 33′; assisted Beier 43′'],['Maximilian Beier',1,1,'Liverpool 17 September: assisted Pio 33′; scored 43′'],['João Neves',0,1,'Liverpool 17 September: assisted Pio 11′']]){
 let r=rows.find(x=>x[0]===name);if(!r){r=[name,0,0,''];rows.push(r)}
 r[1]=(Number(r[1])||0)+g;r[2]=(Number(r[2])||0)+a;
 r[3]=(r[3]&&!r[3].startsWith('0 confirmed')?r[3]+' | ':'')+note;
 }
 rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
 D.stats=rows;D.statsCurrentSeason=season;
 const sums=new Map();
 for(const [year,list] of Object.entries(D.statsBySeason))for(const [raw,g,a] of list){
 const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw;
 const v=sums.get(name)||{g:0,a:0,years:new Set()};v.g+=Number(g)||0;v.a+=Number(a)||0;v.years.add(year);sums.set(name,v);
 }
 const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
 if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
D.statsScope='Napoli 2030–31 competitive club totals through 17 September: Beier 7G1A; Pio 6G3A; Moore 1G2A; Neves, Raspadori, Olise, Nico Paz, Warren Zaïre-Emery each 1A. Italy international matches excluded.';
const stats=$('stats'),controls=stats?.querySelector('.stats-filters');
if(controls){
 const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=stats.querySelector('.section-head p'),notice=$('statsVerificationNotice');
 const update=()=>{
 const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
 if(desc)desc.textContent=view===season?'Napoli 2030–31 through Liverpool (17 September): Beier 7 goals/1 assist; Pio 6 goals/3 assists; Moore 1 goal/2 assists; Neves 1 assist.':'Napoli historical club statistics, '+(view==='career'?'all seasons':view)+'.';
 if(notice)notice.textContent=view===season?'Liverpool 3–0: Pio 11′ (Neves), Pio 33′ (Beier), Beier 43′ (Pio). Half-time shots Napoli 3/3 goals, Liverpool 2 shots/1 on target.':'Historical Napoli club totals retained. Italy excluded.';
 };
 controls.addEventListener('click',update);if(tab)tab.click();update();
}
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>3–0</strong><span>LIV</span></div><p>CHAMPIONS LEAGUE · 17 SEP 2030 · PIO 11′, 33′ · BEIER 43′ · CLEAN SHEET</p>';
const matches=$('matchesList');if(matches){const id='napoli-liverpool-sep17-2030';matches.querySelector('[data-match-id="'+id+'"]')?.remove();const el=document.createElement('div');el.className='match-card';el.dataset.matchId=id;el.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>CHAMPIONS LEAGUE · 17 SEPTEMBER 2030 · FULL TIME</span><strong>Napoli <b>3–0</b> Liverpool</strong><p>Pio 11′ (Neves), Pio 33′ (Beier), Beier 43′ (Pio) · Team clean sheet</p></div>';matches.prepend(el)}
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const ids=['pio-liverpool-three-nil-ucl-sep17-2030','liverpool-seven-without-reply-napoli-sep2030','neves-through-ball-pio-beier-liverpool-sep2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Liverpool article missing',ids.filter(id=>!priority.some(a=>a.id===id)));return}
const excluded=new Set(ids);D.articles=[...priority,...pool.filter(a=>!excluded.has(a.id))];
const lead=priority[0],strap='CHAMPIONS LEAGUE · NAPOLI 3–0 LIVERPOOL · PIO DOUBLE';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
const lines=['NAPOLI 3–0 LIVERPOOL · PIO DOUBLE · BEIER SCORES · CHAMPIONS LEAGUE','THREE SHOTS, THREE GOALS · NAPOLI AT HALF-TIME AGAINST LIVERPOOL','LIVERPOOL GOALLESS AGAIN · NAPOLI WIN LAST THREE MEETINGS 7–0','PIO SIX CLUB GOALS, THREE ASSISTS · BEIER SEVEN GOALS, ONE ASSIST','NAPOLI · FOUR WINS AND ONE DRAW FROM FIVE COMPETITIVE MATCHES','NEXT · BOLOGNA AWAY · SERIE A · 21 SEPTEMBER','SERIE A · NAPOLI SEVEN POINTS AFTER THREE MATCHES'];
D.ticker=lines;const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...lines,...lines].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['LIVERPOOL, AGAIN','Napoli beat Liverpool 3–0 on September 17. Esposito scored twice then assisted Beier for the third.'],['THREE FOR THREE','Napoli scored from all three halftime shots; Liverpool had two halftime attempts, one on target.'],['SEVEN UNANSWERED','Napoli have beaten Liverpool 7–0 over their last three meetings, with three clean sheets.'],['NEVES OPENS IT','João Neves found Esposito for the opener, touched by Mamardashvili before looping in.'],['BOLOGNA AHEAD','Napoli travel to Bologna in Serie A on 21 September.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>EUROPE · NAPOLI 3–0 LIVERPOOL</strong><span>Pio 2G1A · Beier 1G1A · Neves 1A · clean sheet</span></div><div><strong>SERIE A · NAPOLI UNBEATEN</strong><span>3 played · 2W 1D 0L · seven points · Bologna away next</span></div>';
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='NAPOLI 3–0 LIVERPOOL · PIO DOUBLE · UCL';
})();