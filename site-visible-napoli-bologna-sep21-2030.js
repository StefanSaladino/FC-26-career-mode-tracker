/* 21 September 2030, Bologna 0-2 Napoli: Pio brace and O. Burnett first professional clean sheet. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const season='2030–31',date='2030-09-21';
const bologna={date,team:'Napoli',opponent:'Bologna',venue:'Away',competition:'Serie A',status:'completed',score:'2–0',events:[{minute:37,scorer:'Pio Esposito',assist:'Maximilian Beier'},{minute:79,scorer:'Pio Esposito',assist:'Lirim Hasa',type:'header',description:'Hasa crosses, Pio heads in'}],notes:'Away win 2-0, Pio 37 and 79; Burnett first professional clean sheet. No shot or save numbers recorded.'};
D.season203031={...(D.season203031||{}),updated:'21 September 2030 · Bologna 0–2 Napoli',competitiveGamesConfirmed:6,competitiveWins:5,competitiveDraws:1,competitiveGoalsFor:16,competitiveGoalsAgainst:3,statsVerifiedThrough:'Bologna 0–2 Napoli · Serie A · 21 September 2030',serieA:{played:4,wins:3,draws:1,losses:0,points:10,goalsFor:11,goalsAgainst:2,goalDifference:9},championsLeague:{played:1,wins:1,draws:0,losses:0,goalsFor:3,goalsAgainst:0},nextClubOpponent:'Opponent to confirm',nextClubCompetition:'Serie A'};
D.seasonState={...(D.seasonState||{}),league:{played:4,w:3,d:1,l:0,points:10,goalsFor:11,goalsAgainst:2,goalDifference:9,remaining:34,status:'Napoli 10 Serie A points after 4 matches (3W 1D 0L). Last result Bologna 0–2 Napoli (21 September).'}};
const sched=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const current=sched.find(x=>x.date===date&&x.team==='Napoli'&&x.opponent==='Bologna');
if(current)Object.assign(current,bologna);else sched.push(bologna);
D.upcoming=sched.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+(x.date.slice(5,7)==='08'?'Aug':'Sep')+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Bologna'&&x[2]==='Serie A'&&String(x[6]).includes('21 Sep 2030')))D.results.push(['Napoli','Bologna','Serie A',2,0,'W','21 Sep 2030 · Away','Pio Esposito 37′ (Beier assist), 79′ header (Hasa assist); Burnett first professional clean sheet.']);
D.latestResult=['BOLOGNA','0–2','NAPOLI','Serie A · 21 September 2030 · Pio 37′ (Beier) and 79′ header (Hasa); Burnett first professional clean sheet'];
const rows=D.statsBySeason?.[season];
if(rows){
 for(const [name,g,a,note] of [['Pio Esposito',2,0,'Bologna 21 September: goals 37′ (Beier), 79′ header (Hasa)'],['Maximilian Beier',0,1,'Bologna 21 September: assist Pio 37′'],['Lirim Hasa',0,1,'Bologna 21 September: assist via cross for Pio header 79′']]){
 let r=rows.find(x=>x[0]===name);if(!r){r=[name,0,0,''];rows.push(r)}
 r[1]=(Number(r[1])||0)+g;r[2]=(Number(r[2])||0)+a;r[3]=(r[3]&&!r[3].startsWith('0 confirmed')?r[3]+' | ':'')+note;
 }
 rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
 D.stats=rows;D.statsCurrentSeason=season;
 const sums=new Map();
 for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw;const v=sums.get(name)||{g:0,a:0,years:new Set()};v.g+=Number(g)||0;v.a+=Number(a)||0;v.years.add(year);sums.set(name,v)}
 const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
 if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
D.statsScope='Napoli competitive club matches only through Bologna 0–2 Napoli, 21 September 2030: Pio 8G3A; Beier 7G2A; Moore 1G2A; Hasa 1A; João Neves, Raspadori, Olise, Nico Paz, Warren Zaïre-Emery 1A each. Italy excluded. Burnett: first professional clean sheet, Bologna away 21 September 2030.';
D.goalkeeperMilestones={...(D.goalkeeperMilestones||{}),burnett:{player:'O. Burnett',milestone:'First professional clean sheet',date:'2030-09-21',match:'Bologna 0–2 Napoli',competition:'Serie A'}};
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
 const update=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
 if(desc)desc.textContent=view===season?'Napoli 2030–31 club contributions through Bologna 0–2: Pio 8 goals and 3 assists; Beier 7 goals and 2 assists; Hasa 1 assist.':'Napoli club records for '+(view==='career'?'all available seasons':view)+'.';
 if(notice)notice.textContent=view===season?'Bologna 0–2 Napoli, 21 September 2030: Pio 37′ from Beier; Pio headed Hasa cross 79′. Burnett first professional clean sheet.':'Older Napoli club history retained. Italy separate.';
 };controls.addEventListener('click',update);if(tab)tab.click();update();}
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>BOL</span><strong>0–2</strong><span>NAP</span></div><p>SERIE A · 21 SEP 2030 · PIO BRACE · BURNETT FIRST PROFESSIONAL CLEAN SHEET</p>';
const ids=['napoli-bologna-away-pio-brace-sep21-2030','burnett-first-professional-clean-sheet-bologna-sep2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Bologna newsroom articles missing',ids.filter(id=>!priority.some(a=>a.id===id)));return}
const included=new Set(ids);D.articles=[...priority,...pool.filter(a=>!included.has(a.id))];
const lead=priority[0],strap='SERIE A · BOLOGNA 0–2 NAPOLI · PIO BRACE';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
const lines=['BOLOGNA 0–2 NAPOLI · PIO ESPOSITO DOUBLE · SERIE A','37′ PIO FROM BEIER · 79′ PIO HEADER FROM HASA CROSS','O. BURNETT · FIRST PROFESSIONAL CLEAN SHEET · BOLOGNA 21 SEPTEMBER','NAPOLI SERIE A · TEN POINTS FROM FOUR MATCHES · UNBEATEN','PIO EIGHT NAPOLI CLUB GOALS · BEIER SEVEN · SIX COMPETITIVE MATCHES','NAPOLI SIX COMPETITIVE MATCHES · FIVE WINS · ONE DRAW','NEXT LEAGUE FIXTURE · 29 SEPTEMBER · NAPOLI HOME · OPPONENT TO CONFIRM'];
D.ticker=lines;const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...lines,...lines].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['PIO AGAIN','Two goals for Pio at Bologna: 37′ from Beier; 79′ header from Hasa cross. Eight in six competitive club matches.'],['BURNETT FIRST ZERO','O. Burnett, 20, kept the first professional clean sheet of his career in Napoli’s 2–0 win.'],['HASAS DELIVERY','Lirim Hasa provided the 79th-minute cross that Pio headed in to double Napoli’s lead.'],['TEN LEAGUE POINTS','Napoli have taken three Serie A wins and a draw from their first four matches.'],['NEXT LEAGUE DATE','Napoli have a home league fixture listed for 29 September; the opponent has not yet been identified.']];
const whisper=$('whisperList');if(whisper)whisper.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>SERIE A · BOLOGNA 0–2 NAPOLI</strong><span>Pio 37′ and 79′ · Beier and Hasa assists · Burnett first pro clean sheet</span></div><div><strong>LEAGUE · NAPOLI UNBEATEN</strong><span>4 played · 3W 1D 0L · 10 points · 11 goals for, 2 against</span></div>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='BOLOGNA 0–2 NAPOLI · PIO DOUBLE · BURNETT CLEAN SHEET';
})();