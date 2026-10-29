(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const ids=[
'italy-tunisia-three-three-worldcup-opener-2030',
'italy-napotalia-tunisia-skeptics-2030',
'italy-pio-kean-hannibal-six-goal-worldcup-2030',
'italy-world-cup-2030-return-preview'
];
const current=Array.isArray(d.articles)?d.articles:[];
const priority=ids.map(id=>current.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Italy World Cup release incomplete',ids.filter(id=>!priority.some(a=>a.id===id)));return}
const featured=new Set(ids);
d.articles=[...priority,...current.filter(a=>!featured.has(a.id))];
const lead=priority[0];
d.hero={...(d.hero||{}),articleId:lead.id,strap:'WORLD CUP 2030 · ITALY 3–3 TUNISIA · HANNIBAL HAT-TRICK'};
d.latestResult=['Italy','3–3','Tunisia','World Cup · 9 June 2030 · FT'];
d.upcoming=[['Japan','Italy · World Cup group','15 June 2030'],['Paraguay','Italy · World Cup group','20 June 2030']];
const latest=$('latestResult');
if(latest)latest.innerHTML='<div class="latest-score"><span>ITA</span><strong>3–3</strong><span>TUN</span></div><p>WORLD CUP · PIO 48\', 78\' · KEAN 61\' · HANNIBAL 7\', 14\', 86\'</p>';
const hero=$('heroStory');
if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">WORLD CUP 2030 · ITALY 3–3 TUNISIA · GROUP OPENER</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=[...priority.slice(1),...d.articles.filter(a=>!featured.has(a.id)).slice(0,1)].map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const latestNews=$('latestNews');if(latestNews)latestNews.innerHTML=[...priority.slice(1),...d.articles.filter(a=>!featured.has(a.id)).slice(0,2)].map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const newsGrid=$('newsGrid');if(newsGrid)newsGrid.innerHTML=d.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters){const cats=['All',...new Set(d.articles.map(a=>a.category))];filters.innerHTML=cats.map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('')}
for(const id of ['nextTwo','upcomingStrip']){const e=$(id);if(!e)continue;e.innerHTML=d.upcoming.map(x=>id==='nextTwo'?'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>':'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('')}
const form=$('formLine');if(form)form.innerHTML='<div><strong>1 POINT EACH</strong><span>Italy · Tunisia · Japan · Paraguay</span></div><div><strong>JAPAN · 15 JUN</strong><span>Italy\'s next World Cup match</span></div>';
const news=['ITALY 3–3 TUNISIA · PIO BRACE · KEAN GOAL · HANNIBAL HAT-TRICK','HANNIBAL · 7\', 14\', 86\' · TUNISIA EARN GROUP POINT','PIO 48\' (BASTONI), KEAN 61\' (PIO), PIO 78\' (KEAN)','JAPAN AND PARAGUAY DRAW · ALL FOUR GROUP SIDES ON ONE POINT','NAPOTALIA ON TRIAL · ITALY CONCEDE THREE IN WORLD CUP RETURN','NEXT · ITALY vs JAPAN · WORLD CUP · 15 JUNE 2030'];
d.ticker=news;const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...news,...news].map(x=>'<span>'+esc(x)+'</span>').join('');
d.whispers=[
['WORLD CUP GROUP · ALL LEVEL','Italy, Tunisia, Japan and Paraguay have played one, drawn one and earned one point each. Japan–Paraguay exact score not confirmed.'],
['HANNIBAL HAT-TRICK','Tunisia\'s Hannibal scores at 7, 14 and 86 minutes; the last denies Italy a comeback win.'],
['PIO + KEAN','Pio Esposito 2 goals + 1 assist; Kean 1 goal + 1 assist; Bastoni supplies the 48th-minute header. These are Italy totals only.'],
['NAPOTALIA DEBATE','The comeback proves attacking cohesion; three conceded goals invite scrutiny of defensive organisation.'],
['NEXT UP','Italy face Japan on 15 June, with Paraguay to follow on 20 June. Both opponents are still level with Italy on points.']
];
const w=$('whisperList');if(w)w.innerHTML=d.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const matches=$('matchesList');if(matches){const old=matches.querySelector?.('[data-match-id="italy-tunisia-june2030"]');if(old)old.remove();const m=document.createElement('div');m.className='match-card';m.dataset.matchId='italy-tunisia-june2030';m.innerHTML='<div class="result-badge D">D</div><div class="match-main"><span>FIFA World Cup · Group stage · 9 June 2030</span><strong>Italy <b>3–3</b> Tunisia</strong><p>Pio Esposito 48\', 78\'; Kean 61\' / Hannibal 7\', 14\', 86\' · All four group teams 1 point</p></div>';matches.prepend(m)}
// The latest World Cup result supersedes the club result on the homepage,
// without erasing Napoli's European Cup or changing Napoli club scoring tables.
})();