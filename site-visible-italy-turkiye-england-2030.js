(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const ids=[
 'italy-turkiye-two-one-kean-locatelli-quarterfinal-2030',
 'italy-turkiye-locatelli-donnarumma-last-line-feature-2030',
 'italy-turkiye-kean-seven-goals-pio-barella-feature-2030',
 'italy-turkiye-five-times-behind-tactical-analysis-2030',
 'italy-england-quarterfinal-resurrection-preview-2030',
 'italy-romania-penalties-rovella-worldcup-r32-2030'
];
const all=Array.isArray(d.articles)?d.articles:[];
const priority=ids.map(id=>all.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Türkiye quarterfinal release missing article(s):',ids.filter(id=>!priority.some(a=>a.id===id)));return}
const featured=new Set(ids);d.articles=[...priority,...all.filter(a=>!featured.has(a.id))];
const lead=priority[0],strap='WORLD CUP 2030 · ITALY 2–1 TÜRKIYE · QUARTERFINALS';
d.hero={...(d.hero||{}),articleId:lead.id,strap};
d.latestResult=['Italy','2–1','Türkiye','2030 World Cup · Round of 16 · Full time'];
d.upcoming=[{competition:'World Cup',round:'Quarterfinal',home:'Italy',away:'England',date:null,kickoff:null}];
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>ITA</span><strong>2–1</strong><span>TUR</span></div><p>WORLD CUP · GÜLER 12\' · KEAN 38\' (PIO), 52\' (BARELLA) · DONNARUMMA SAVE 90\' · LOCATELLI GOAL-LINE CLEARANCE</p>';
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=priority.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const latestNews=$('latestNews');if(latestNews)latestNews.innerHTML=[...priority.slice(1),...d.articles.filter(a=>!featured.has(a.id)).slice(0,1)].map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const newsGrid=$('newsGrid');if(newsGrid)newsGrid.innerHTML=d.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters){const categories=['All',...new Set(d.articles.map(a=>a.category))];filters.innerHTML=categories.map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('')}
for(const id of ['nextTwo','upcomingStrip']){const e=$(id);if(!e)continue;e.innerHTML=id==='nextTwo'?'<div class="next-row"><strong>WORLD CUP QUARTERFINAL</strong><span>ITALY vs ENGLAND · kickoff to be confirmed</span></div>':'<div class="fixture"><span>WORLD CUP · QUARTERFINAL</span><strong>ITALY vs ENGLAND</strong><small>Next fixture · date and time to be confirmed</small></div>'}
const form=$('formLine');if(form)form.innerHTML='<div><strong>WORLD CUP LAST EIGHT</strong><span>Italy 2–1 Türkiye · England await in quarterfinal</span></div><div><strong>5 MATCHES · 2W 3D 0L</strong><span>11 scored · 9 conceded · opponents have scored first five times</span></div>';
const news=[
 'ITALY 2–1 TÜRKIYE · KEAN 38\' & 52\' · QUARTERFINALS',
 'LOCATELLI CLEARS TURKISH HEADER OFF THE LINE BEFORE FULL TIME',
 'DONNARUMMA FULL-STRETCH SAVE AT 90 MINUTES',
 'ENGLAND NEXT · 2030 WORLD CUP QUARTERFINAL',
 'KEAN SEVEN WORLD CUP GOALS · PIO FIVE ASSISTS',
 'GÜLER 12\' · PIO ASSISTS KEAN 38\' · BARELLA ASSISTS KEAN 52\'',
 'FIVE MATCHES · FIVE TIMES ITALY HAVE CONCEDED FIRST',
 'ITALY REACH LAST EIGHT AFTER THREE MISSED WORLD CUPS'
];
d.ticker=news;const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...news,...news].map(x=>'<span>'+esc(x)+'</span>').join('');
d.whispers=[
 ['QUARTERFINALS','Italy 2–1 Türkiye, Kean twice after Güler scored first. England are next in the last eight.'],
 ['THE FINAL SEQUENCE','Donnarumma saved at full stretch on 90 minutes; Türkiye won a corner; Locatelli cleared its headed attempt off the line immediately before the whistle.'],
 ['SEVEN FOR MOISE','Kean scored five in the World Cup group and two against Türkiye. All seven are Italy goals, not Napoli club statistics.'],
 ['PIO AND BARELLA','Pio provided the first Türkiye assist, taking his World Cup total to five; Barella assisted Kean\'s winner.'],
 ['FIVE OPENING DEFICITS','Tunisia, Japan, Paraguay, Romania and Türkiye have all scored first against Italy. The team has survived each match.'],
 ['ENGLAND AWAIT','World Cup quarterfinal against England. Opponent confirmed by the manager; kickoff date and time have not been supplied.']
];
const w=$('whisperList');if(w)w.innerHTML=d.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const matches=$('matchesList');if(matches){
 const id='italy-turkiye-r16-worldcup2030';matches.querySelector('[data-match-id="'+id+'"]')?.remove();
 const e=document.createElement('div');e.className='match-card';e.dataset.matchId=id;
 e.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>FIFA World Cup · Round of 16</span><strong>Italy <b>2–1</b> Türkiye</strong><p>Güler 12\' / Kean 38\' (Pio), 52\' (Barella) · Donnarumma and Locatelli deny late equaliser · England next</p></div>';
 matches.prepend(e)
}
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='2030 · ITALY WORLD CUP QUARTERFINALISTS';
const eyebrow=document.querySelector('.brand-copy .eyebrow');if(eyebrow)eyebrow.textContent='FC 26 CAREER MODE · 2030 WORLD CUP';
})();
