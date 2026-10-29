(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const ids=['italy-paraguay-two-one-kean-four-minute-double-jun2030','italy-paraguay-four-stars-half-time-speech-jun2030','italy-kean-pio-2030-worldcup-partnership-feature','italy-japan-3-3-worldcup-jun2030','italy-japan-napotalia-scrutiny-jun2030'];
const all=Array.isArray(d.articles)?d.articles:[];
const priority=ids.map(id=>all.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Italy Paraguay release incomplete',ids.filter(id=>!priority.some(a=>a.id===id)));return}
const featured=new Set(ids);
d.articles=[...priority,...all.filter(a=>!featured.has(a.id))];
const lead=priority[0];
d.hero={...(d.hero||{}),articleId:lead.id,strap:'WORLD CUP 2030 · ITALY 2–1 PARAGUAY · GROUP WINNERS'};
d.latestResult=['Italy','2–1','Paraguay','World Cup · 20 June 2030 · FT'];
d.upcoming=[];
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>ITA</span><strong>2–1</strong><span>PAR</span></div><p>WORLD CUP · KEAN 66\', 70\' · PIO TWO ASSISTS · AGUAYO PEN 43\' · ITALY TOP GROUP</p>';
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">WORLD CUP 2030 · ITALY 2–1 PARAGUAY · GROUP WINNERS</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=[...priority.slice(1,5)].map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const latestNews=$('latestNews');if(latestNews)latestNews.innerHTML=[...priority.slice(1),...d.articles.filter(a=>!featured.has(a.id)).slice(0,1)].map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const newsGrid=$('newsGrid');if(newsGrid)newsGrid.innerHTML=d.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters){const cats=['All',...new Set(d.articles.map(a=>a.category))];filters.innerHTML=cats.map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('')}
for(const id of ['nextTwo','upcomingStrip']){const e=$(id);if(!e)continue;e.innerHTML=id==='nextTwo'?'<div class="next-row"><strong>WORLD CUP KNOCKOUTS</strong><span>Italy qualify as group winners · opponent not yet confirmed</span></div>':'<div class="fixture"><span>WORLD CUP · KNOCKOUTS</span><strong>ITALY ADVANCE</strong><small>Opponent and date to be announced</small></div>'}
const form=$('formLine');if(form)form.innerHTML='<div><strong>GROUP WINNERS · 5 PTS</strong><span>Italy 5 · Paraguay 4 · Tunisia 4 · Japan 2</span></div><div><strong>ITALY · W1 D2 L0</strong><span>8 scored · 7 conceded · GD +1</span></div>';
const news=['ITALY 2–1 PARAGUAY · KEAN 66\' & 70\' · PIO TWO ASSISTS','ITALY WIN 2030 WORLD CUP GROUP · FIVE POINTS','JAPAN LOSE TO TUNISIA · ITALY FINISH FIRST','FIRST ITALY WORLD CUP MATCH WIN SINCE 2014','HALFTIME: BUT NOT TODAY. NOT FUCKING TODAY.','JAPAN 3–3 ITALY · TWO LEADS LOST · KEAN BRACE','PIO 3 GOALS + 4 ASSISTS · KEAN 5 GOALS + 2 ASSISTS · NATIONAL TEAM ONLY','KNOCKOUT OPPONENT NOT YET CONFIRMED'];
d.ticker=news;const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...news,...news].map(x=>'<span>'+esc(x)+'</span>').join('');
d.whispers=[
['WORLD CUP GROUP WINNERS','Italy 5 points (1W 2D), Paraguay and Tunisia 4, Japan 2. Tunisia defeat Japan in the final round. Italy finish top.'],
['HALFTIME ADDRESS','The manager invoked four stars, Italy legends and future generations. His exact words: But not today. Not fucking today.'],
['KEAN + PIO','Kean: five group goals, two assists. Pio: three goals, four assists. Pio is Napoli; Kean is not. All figures are for Italy only.'],
['20 MINUTES OF CONTROL','The manager reports Paraguay did not touch the ball for the final 20 minutes after Italy went ahead.'],
['THE WARNING','Italy scored eight and conceded seven. The two 3–3 draws against Tunisia and Japan remain part of the story.'],
['NEXT','Italy advance to the World Cup knockout rounds; the opponent and kickoff date are not yet confirmed.']
];const w=$('whisperList');if(w)w.innerHTML=d.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const matches=$('matchesList');if(matches){const entries=[
 {id:'italy-paraguay-june2030',badge:'W',date:'20 June 2030',score:'Italy <b>2–1</b> Paraguay',copy:'Kean 66\', 70\' (Pio assists) · Aguayo 43\' pen. · Group winners'},
 {id:'italy-japan-june2030',badge:'D',date:'15 June 2030',score:'Japan <b>3–3</b> Italy',copy:'Kubo 5\', Shogai 45\', Calafiori OG 66\' / Kean 26\', 52\', Pio 33\''}
];for(const m of entries){matches.querySelector('[data-match-id="'+m.id+'"]')?.remove();const el=document.createElement('div');el.className='match-card';el.dataset.matchId=m.id;el.innerHTML='<div class="result-badge '+m.badge+'">'+m.badge+'</div><div class="match-main"><span>FIFA World Cup · Group stage · '+esc(m.date)+'</span><strong>'+m.score+'</strong><p>'+esc(m.copy)+'</p></div>';matches.prepend(el)}}
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='2030 · ITALY WORLD CUP GROUP WINNERS';
const eyebrow=document.querySelector('.brand-copy .eyebrow');if(eyebrow)eyebrow.textContent='FC 26 CAREER MODE · 2030 WORLD CUP';
})();