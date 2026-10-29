(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const $=id=>document.getElementById(id);
const all=Array.isArray(d.articles)?d.articles:[];
const victory=all.find(a=>a.id==='napoli-coppa-torino-2030');
const porto=all.find(a=>a.id==='napoli-coppa-double-porto-2030');
const priority=[victory,porto].filter(Boolean);
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
d.latestResult=['Napoli','1–1','Torino','Coppa Italia final · Napoli win 4–3 on penalties'];
const result=$('latestResult');
if(result)result.innerHTML='<div class="latest-score"><span>NAP</span><strong>1–1</strong><span>TOR</span></div><p>COPPA ITALIA FINAL · NAPOLI WIN 4–3 ON PENALTIES · MERET SAVES ADAMS</p>';
d.upcoming=[['Bergamo','Serie A','Before 26 May 2030'],['Torino','Serie A','26 May 2030 · Home'],['Porto','Champions League final','1 June 2030 · Neutral']];
for(const id of ['nextTwo','upcomingStrip']){const el=$(id);if(!el)continue;el.innerHTML=d.upcoming.slice(0,id==='nextTwo'?2:3).map(x=>id==='nextTwo'?'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>':'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('')}
const ticker=$('tickerTrack');
if(ticker){const lines=['COPPA ITALIA CHAMPIONS · NAPOLI BEAT TORINO 4–3 ON PENALTIES','DOMESTIC DOUBLE SECURED · THIRD STRAIGHT SCUDETTO','NEXT · BERGAMO · TORINO · PORTO UCL FINAL 1 JUNE'];ticker.innerHTML=[...lines,...lines].map(t=>'<span>'+esc(t)+'</span>').join('')}
if(!victory){console.error('Coppa lead article missing from NAPOLI_DATA.articles');return}
d.hero={...(d.hero||{}),articleId:victory.id,strap:'COPPA ITALIA · CHAMPIONS · DOMESTIC DOUBLE'};
const hero=$('heroStory');
if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(victory.image)+'" alt="'+esc(victory.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(victory.id)+'" tabindex="0" role="button"><div class="hero-strap">COPPA ITALIA · CHAMPIONS · DOMESTIC DOUBLE</div><h2>'+esc(victory.headline)+'</h2><p>'+esc(victory.dek)+'</p><span class="hero-read">Read the lead story →</span></div>';
const top=$('topStories');
if(top){const old=Array.from(top.querySelectorAll('[data-article]')).filter(el=>!priority.some(a=>a.id===el.dataset.article));top.innerHTML='';for(const [i,a] of [porto,...[]].filter(Boolean).entries()){const b=document.createElement('button');b.className='top-story';b.dataset.article=a.id;b.innerHTML='<span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div>';top.appendChild(b)}for(const el of old.slice(0,3))top.appendChild(el)}
const card=(a,variant)=>{const el=document.createElement('article');el.className='article-card '+variant;el.dataset.article=a.id;el.tabIndex=0;el.setAttribute('role','button');el.innerHTML='<div class="article-card-media"><img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy"></div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div>';return el};
for(const [id,variant] of [['newsGrid','standard'],['latestNews','compact']]){const grid=$(id);if(!grid)continue;for(const a of priority){for(const existing of grid.querySelectorAll('[data-article="'+a.id+'"]'))existing.remove()}for(const a of [...priority].reverse())grid.prepend(card(a,variant))}
})();