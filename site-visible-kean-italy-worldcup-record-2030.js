(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const ids=[
 'italy-kean-seven-goals-single-world-cup-record-2030',
 'italy-turkiye-two-one-kean-locatelli-quarterfinal-2030',
 'italy-turkiye-kean-seven-goals-pio-barella-feature-2030',
 'italy-turkiye-locatelli-donnarumma-last-line-feature-2030',
 'italy-turkiye-five-times-behind-tactical-analysis-2030',
 'italy-england-quarterfinal-resurrection-preview-2030',
 'italy-romania-penalties-rovella-worldcup-r32-2030'
];
const all=Array.isArray(d.articles)?d.articles:[];
const priority=ids.map(id=>all.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Historic Kean record release missing stories:',ids.filter(id=>!priority.some(a=>a.id===id)));return}
const featured=new Set(ids);
d.articles=[...priority,...all.filter(a=>!featured.has(a.id))];
const lead=priority[0];
const strap='ITALY HISTORY · SEVEN GOALS · KEAN BREAKS SINGLE-WORLD-CUP RECORD';
d.hero={...(d.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');
if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full feature →</span></div>';
const top=$('topStories');
if(top)top.innerHTML=priority.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const latest=$('latestNews');
if(latest)latest.innerHTML=[...priority.slice(1),...d.articles.filter(a=>!featured.has(a.id)).slice(0,1)].map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');
if(grid)grid.innerHTML=d.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');
if(filters){const cats=['All',...new Set(d.articles.map(a=>a.category))];filters.innerHTML=cats.map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('')}
const news=[
 'HISTORY: KEAN SCORES SEVEN AT ONE WORLD CUP · ITALIAN RECORD',
 'ROSSI SIX IN 1982 · SCHILLACI SIX IN 1990 · KEAN SEVEN IN 2030',
 'KEAN RECORD DOUBLE AGAINST TÜRKIYE · ITALY 2–1 AND THROUGH',
 'ITALY vs ENGLAND · WORLD CUP QUARTERFINAL NEXT',
 'PIO FIVE WORLD CUP ASSISTS · KEAN SEVEN GOALS',
 'LOCATELLI CLEARS GOAL-BOUND HEADER OFF LINE · DONNARUMMA SAVES AT 90',
 'FIVE MATCHES · FIVE OPENING DEFICITS · AZZURRI STILL ALIVE'
];
d.ticker=news;const ticker=$('tickerTrack');
if(ticker)ticker.innerHTML=[...news,...news].map(s=>'<span>'+esc(s)+'</span>').join('');
const prior=Array.isArray(d.whispers)?d.whispers:[];
d.whispers=[['KEAN MAKES HISTORY','Seven goals across five matches at this World Cup: Moise Kean overtakes the six-goal single-tournament Italian record shared by Paolo Rossi (1982) and Salvatore Schillaci (1990).'],...prior.filter(x=>x[0]!=='SEVEN FOR MOISE')];
const whispers=$('whisperList');
if(whispers)whispers.innerHTML=d.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
// This editorial release does not alter the verified Türkiye result, England quarterfinal fixture or Napoli club statistics.
})();
