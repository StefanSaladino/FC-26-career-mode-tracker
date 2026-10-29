(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const $=id=>document.getElementById(id),esc=x=>String(x??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const ids=[
'napoli-porto-treble-final-2030',
'napoli-treble-italian-dynasties-verdict-2030',
'napoli-meret-peacock-two-keepers-treble-2030',
'napoli-pio-zaire-51st-minute-history-2030',
'napoli-porto-final-tactical-crossroads-2030',
'napoli-madrid-naples-treble-celebration-2030',
'napoli-treble-world-cup-handover-2030'
];
const all=Array.isArray(d.articles)?d.articles:[];
const focus=ids.map(id=>all.find(a=>a.id===id)).filter(Boolean);
if(focus.length!==ids.length){console.error('Treble newsroom articles missing',ids.filter(id=>!focus.some(a=>a.id===id)));return}
const seen=new Set(ids);
d.articles=[...focus,...all.filter(a=>!seen.has(a.id))];
const lead=focus[0];
d.hero={...(d.hero||{}),articleId:lead.id,strap:'CHAMPIONS OF EUROPE · TREBLE WINNERS · 1 JUNE 2030'};
d.latestResult=['Porto','0–1','Napoli','UCL final · 1 June 2030 · Pio 51\' (Zaïre-Emery) · Champions'];
if(d.meta)d.meta.season='2029–30 · Treble winners';
const lr=$('latestResult');if(lr)lr.innerHTML='<div class="latest-score"><span>POR</span><strong>0–1</strong><span>NAP</span></div><p>CHAMPIONS LEAGUE FINAL · PIO 51\' (ZAÏRE-EMERY) · NAPOLI WIN THE TREBLE</p>';
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">CHAMPIONS LEAGUE · TREBLE WINNERS · BACK-TO-BACK EUROPEAN CHAMPIONS</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the final report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=focus.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const latest=$('latestNews');if(latest)latest.innerHTML=focus.slice(1).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const news=$('newsGrid');if(news)news.innerHTML=d.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters){const cats=['All',...new Set(d.articles.map(a=>a.category))];filters.innerHTML=cats.map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('')}
d.upcoming=[['Tunisia','Italy · World Cup group','9 June 2030'],['Japan','Italy · World Cup group','15 June 2030'],['Paraguay','Italy · World Cup group','20 June 2030']];
for(const id of ['nextTwo','upcomingStrip']){const el=$(id);if(!el)continue;const fixtures=id==='nextTwo'?d.upcoming.slice(0,2):d.upcoming;el.innerHTML=fixtures.map(x=>id==='nextTwo'?'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>':'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('')}
const form=$('formLine');if(form)form.innerHTML='<div><strong>3 STRAIGHT</strong><span>Serie A champions</span></div><div><strong>2 STRAIGHT</strong><span>Champions League winners · treble completed</span></div>';
const headlines=[
'PORTO 0–1 NAPOLI · PIO ESPOSITO 51\' · ZAÏRE-EMERY ASSIST',
'CHAMPIONS OF EUROPE · NAPOLI DEFEND THEIR CROWN',
'THE TREBLE · 2029–30 SERIE A + COPPA ITALIA + CHAMPIONS LEAGUE',
'MERET MASTERCLASS · TWO BRILLIANT FIRST-HALF SAVES · CLEAN SHEET',
'ITALIAN GIANTS DEBATE · NAPOLI, SACCHI\'S MILAN, GRANDE INTER, INTER 2010',
'NEXT · ITALY vs TUNISIA · WORLD CUP · 9 JUNE'
];
d.ticker=headlines;
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...headlines,...headlines].map(t=>'<span>'+esc(t)+'</span>').join('');
d.whispers=[['THE TREBLE','Napoli complete the 2029–30 treble, winning Serie A, Coppa Italia and the Champions League.'],['THE FINAL','Pio Esposito 51\' from Warren Zaïre-Emery. Meret clean sheet; Porto defeated 1–0.'],['THE DYNASTY QUESTION','A full opinion feature weighs Napoli against Inter 2010, Sacchi\'s Milan, Grande Inter, Juventus, Torino and Maradona\'s Napoli.'],['AZZURRI NEXT','Italy face Tunisia on 9 June, Japan on 15 June and Paraguay on 20 June.']];
const w=$('whisperList');if(w)w.innerHTML=d.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const matches=$('matchesList');if(matches){const existing=matches.querySelector('[data-match-id="porto-final-2030"]');if(existing)existing.remove();const m=document.createElement('div');m.className='match-card';m.dataset.matchId='porto-final-2030';m.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>UEFA Champions League · Final · 1 June 2030</span><strong>Porto <b>0–1</b> Napoli</strong><p>Pio Esposito 51\' · Zaïre-Emery assist · Santiago Bernabéu · Treble winners</p></div>';matches.prepend(m)}
})();