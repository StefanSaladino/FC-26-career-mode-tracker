(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const $=id=>document.getElementById(id);
const esc=x=>String(x??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const ids=[
'napoli-porto-final-saladino-press-2030',
'napoli-raspadori-porto-media-interview-2030',
'napoli-beier-award-porto-interview-2030',
'napoli-pio-history-porto-interview-2030',
'napoli-meret-peacock-final-keeper-interview-2030',
'napoli-bastoni-captain-porto-interview-2030',
'napoli-porto-toronto-sandro-media-day-2030'
];
const all=Array.isArray(d.articles)?d.articles:[];
const priorities=ids.map(id=>all.find(a=>a.id===id)).filter(Boolean);
if(priorities.length!==ids.length){console.error('Porto media day incomplete:',ids.filter(id=>!priorities.some(a=>a.id===id)));return;}
const included=new Set(ids);
d.articles=[...priorities,...all.filter(a=>!included.has(a.id))];
const lead=priorities[0];
d.hero={...(d.hero||{}),articleId:lead.id,strap:'CHAMPIONS LEAGUE FINAL · PORTO · 1 JUNE 2030 · MEDIA DAY'};
const hero=$('heroStory');
if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">CHAMPIONS LEAGUE FINAL · PORTO · 1 JUNE 2030</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the press conference →</span></div>';
const top=$('topStories');
if(top)top.innerHTML=priorities.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const latest=$('latestNews');
if(latest)latest.innerHTML=priorities.slice(1).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');
if(grid)grid.innerHTML=d.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');
if(filters){const categories=['All',...new Set(d.articles.map(a=>a.category))];filters.innerHTML=categories.map((category,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(category)+'">'+esc(category)+'</button>').join('')}
d.upcoming=[['Porto','Champions League final','1 June 2030 · Neutral']];
for(const id of ['nextTwo','upcomingStrip']){const e=$(id);if(!e)continue;e.innerHTML=d.upcoming.map(x=>id==='nextTwo'?'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>':'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('')}
const notices=['PORTO FINAL · 1 JUNE · THE TREBLE IS STILL TO BE WON','SALADINO: NO PANIC. NO FEAR. RESPECT THE OPPONENT. PLAY OUR GAME.','RASPADORI · THREE GOALS IN FINAL TWO LEAGUE MATCHES','MERET AND PEACOCK · KEEPER DECISION STILL UNANNOUNCED','BEIER · 23 SERIE A GOALS · 17 ASSISTS · 7.79 AVERAGE RATING','TORONTO MEDIA DAY · ITALY WORLD CUP GROUP OPENS 9 JUNE'];
d.ticker=notices;
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...notices,...notices].map(t=>'<span>'+esc(t)+'</span>').join('');
d.whispers=[['PORTO · JUNE 1','The Champions League final is next. No result or starting XI has been confirmed.'],['KEEPER CHOICE','Meret and Peacock both made major contributions; the manager has not named the starter.'],['FINAL-WEEK FORM','Raspadori scored all three Napoli goals against Bergamo and Torino.'],['THE MANAGER','No panic. No fear. Respect the opponent. Play OUR game.']];
const w=$('whisperList');if(w)w.innerHTML=d.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
// Intentionally preserve Napoli 2–0 Torino as the last confirmed match.
// Do NOT change latestResult, scores, club stats or create an unplayed Porto result.
})();