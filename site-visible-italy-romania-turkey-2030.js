(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const ids=['italy-romania-penalties-rovella-worldcup-r32-2030','italy-romania-donnarumma-esposito-shootout-feature-2030','italy-romania-four-games-four-deficits-analysis-2030','italy-turkey-round16-preview-worldcup-2030','italy-paraguay-two-one-kean-four-minute-double-jun2030'];
const all=Array.isArray(d.articles)?d.articles:[];const priority=ids.map(id=>all.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Italy Romania newsroom release incomplete',ids.filter(id=>!priority.some(a=>a.id===id)));return}
const featured=new Set(ids);d.articles=[...priority,...all.filter(a=>!featured.has(a.id))];
const lead=priority[0],strap='WORLD CUP 2030 · ITALY THROUGH ON PENALTIES · TURKEY NEXT';
d.hero={...(d.hero||{}),articleId:lead.id,strap};
d.latestResult=['Italy','1–1','Romania','World Cup · Round of 32 · Italy advance on penalties'];
d.upcoming=[{competition:'World Cup',round:'Round of 16',home:'Italy',away:'Turkey',date:null}];
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>ITA</span><strong>1–1</strong><span>ROU</span></div><p>WORLD CUP · AET · ITALY ADVANCE ON PENALTIES · TONALI 42\' (BARELLA) · RAȚIU 34\' · ROVELLA DECISIVE</p>';
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=priority.slice(1).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const latestNews=$('latestNews');if(latestNews)latestNews.innerHTML=[...priority.slice(1),...d.articles.filter(a=>!featured.has(a.id)).slice(0,1)].map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=d.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters){const cats=['All',...new Set(d.articles.map(a=>a.category))];filters.innerHTML=cats.map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('')}
for(const id of ['nextTwo','upcomingStrip']){const e=$(id);if(!e)continue;e.innerHTML=id==='nextTwo'?'<div class="next-row"><strong>WORLD CUP · ROUND OF 16</strong><span>ITALY vs TURKEY · kickoff to be confirmed</span></div>':'<div class="fixture"><span>WORLD CUP · ROUND OF 16</span><strong>ITALY vs TURKEY</strong><small>Next knockout fixture · date to be confirmed</small></div>'}
const form=$('formLine');if(form)form.innerHTML='<div><strong>WORLD CUP LAST SIXTEEN</strong><span>Romania 1–1 AET · Italy advance on penalties</span></div><div><strong>4 MATCHES · 1 WIN + 3 DRAWS</strong><span>Italy conceded first in all four · Turkey next</span></div>';
const news=['ITALY WIN ROMANIA SHOOTOUT · ROVELLA SENDS AZZURRI THROUGH','ROUND OF 16: ITALY vs TURKEY','ROMANIA 1–1 ITALY AET · RAȚIU 34\' · TONALI 42\'','BARELLA ASSISTS TONALI · FIRST ITALIAN KNOCKOUT GOAL SINCE 2006','DONNARUMMA SAVES CÎRJAN · RĂDULESCU MISSES TARGET','LOCATELLI, DIMARCO, SEBASTIANO AND ROVELLA SCORE','PIO ESPOSITO HITS POST · ITALY PROGRESS AS A TEAM','FOUR MATCHES · FOUR TIMES ITALY HAVE CONCEDED FIRST'];
d.ticker=news;const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...news,...news].map(x=>'<span>'+esc(x)+'</span>').join('');
d.whispers=[
['THROUGH TO THE LAST SIXTEEN','Italy 1–1 Romania after 120 minutes; Italy advance on penalties with Rovella scoring the decisive kick.'],
['MIDFIELD RESPONSE','Rațiu put Romania ahead at 34 minutes; Barella assisted Tonali at 42 to make it 1–1.'],
['PENALTY NERVES','Locatelli, Dimarco, Sebastiano Esposito and Rovella converted; Pio hit the post. Donnarumma saved Cîrjan, Rădulescu missed the target.'],
['FOUR OPENING DEFICITS','Italy have conceded first against Tunisia, Japan, Paraguay and Romania. They remain alive but must find better starts.'],
['FORWARDS AND THE TEAM','Group only: Kean 5 goals + 2 assists; Pio 3 goals + 4 assists. Italy totals are separate from all Napoli club statistics.'],
['NEXT OPPONENT','Turkey await in the World Cup round of sixteen. The fixture date and kickoff are not yet confirmed.']
];const w=$('whisperList');if(w)w.innerHTML=d.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const matches=$('matchesList');if(matches){const id='italy-romania-r32-worldcup2030';matches.querySelector('[data-match-id="'+id+'"]')?.remove();const e=document.createElement('div');e.className='match-card';e.dataset.matchId=id;e.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>FIFA World Cup · Round of 32</span><strong>Italy <b>1–1</b> Romania · won on penalties</strong><p>Rațiu 34\'; Tonali 42\' (Barella) · Rovella decisive in shootout</p></div>';matches.prepend(e)}
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='2030 · WORLD CUP LAST SIXTEEN';
const eyebrow=document.querySelector('.brand-copy .eyebrow');if(eyebrow)eyebrow.textContent='FC 26 CAREER MODE · 2030 WORLD CUP';
})();
