(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const ids=[
 'italy-france-semifinal-1202-etikite-worldcup-exit-2030',
 'italy-donnarumma-worldcup-france-last-line-feature-2030',
 'italy-france-stoppage-time-1202-officiating-debate-2030',
 'italy-denmark-third-place-worldcup-2030-preview',
 'italy-england-two-two-pens-retegui-donnarumma-semifinal-2030',
 'italy-france-world-cup-semifinal-defence-preview-2030',
 'italy-england-donnarumma-three-saves-rice-penalty-keeper-2030',
 'italy-kean-seven-goals-single-world-cup-record-2030'
];
const all=Array.isArray(d.articles)?d.articles:[];
const priority=ids.map(id=>all.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('France semifinal edition missing articles:',ids.filter(id=>!priority.some(a=>a.id===id)));return}
const featured=new Set(ids);d.articles=[...priority,...all.filter(a=>!featured.has(a.id))];
const lead=priority[0];const strap='WORLD CUP 2030 · SEMIFINAL · FRANCE 2–1 ITALY AET';
d.hero={...(d.hero||{}),articleId:lead.id,strap};
d.latestResult=['Italy','1–2','France','World Cup 2030 · Semifinal · 1–2 AET'];
d.upcoming=[{competition:'World Cup',round:'Third-place playoff',home:'Italy',away:'Denmark',date:null,kickoff:null}];
const result=$('latestResult');
if(result)result.innerHTML='<div class="latest-score"><span>ITA</span><strong>1–2</strong><span>FRA</span></div><p>PIO ESPOSITO 25\' (KEAN) · MBAPPÉ 67\' · DONNARUMMA SAVE 89\' · ETIKITE 120+2\' · FRANCE ADVANCE</p>';
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full report →</span></div>';
const top=$('topStories');
if(top)top.innerHTML=priority.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const latest=$('latestNews');
if(latest)latest.innerHTML=[...priority.slice(1,7),...d.articles.filter(a=>!featured.has(a.id)).slice(0,1)].map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');
if(grid)grid.innerHTML=d.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');
if(filters){const cats=['All',...new Set(d.articles.map(a=>a.category))];filters.innerHTML=cats.map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('')}
for(const id of ['nextTwo','upcomingStrip']){const e=$(id);if(!e)continue;e.innerHTML=id==='nextTwo'
 ?'<div class="next-row"><strong>WORLD CUP · THIRD PLACE</strong><span>ITALY vs DENMARK · date and kickoff to be confirmed</span></div><div class="next-row"><strong>WORLD CUP FINAL</strong><span>FRANCE vs BELGIUM</span></div>'
 :'<div class="fixture"><span>WORLD CUP · THIRD PLACE</span><strong>ITALY vs DENMARK</strong><small>Next fixture · date and kickoff to be confirmed</small></div><div class="fixture"><span>WORLD CUP · FINAL</span><strong>FRANCE vs BELGIUM</strong><small>Championship fixture</small></div>'}
const form=$('formLine');
if(form)form.innerHTML='<div><strong>WORLD CUP · THIRD PLACE NEXT</strong><span>Italy 1–2 France after extra time · Denmark next</span></div><div><strong>7 MATCHES · 2W 4D 1L</strong><span>14 goals for · 13 against · shootout advances are draws after play</span></div>';
const headlines=[
 'FRANCE 2–1 ITALY AET · ETIKITE WINNER AT 120+2 · AZZURRI OUT OF FINAL',
 'PIO ESPOSITO 25\' (KEAN ASSIST) · MBAPPÉ LEVELS AT 67\'',
 'GIGIO SAVES ITALY AGAIN AT 89\' · FRANCE WIN LATE',
 'ONE MINUTE INDICATED · WINNER RECORDED AT 120+2 · ADDED TIME IS A MINIMUM',
 'ITALY vs DENMARK · WORLD CUP THIRD-PLACE PLAYOFF NEXT',
 'FRANCE vs BELGIUM · WORLD CUP FINAL',
 'PIO: 4 GOALS / 6 ASSISTS · KEAN: 7 GOALS / 3 ASSISTS IN 2030 WORLD CUP'
];
d.ticker=headlines;const ticker=$('tickerTrack');
if(ticker)ticker.innerHTML=[...headlines,...headlines].map(x=>'<span>'+esc(x)+'</span>').join('');
d.whispers=[
 ['A LAST-SECOND EXIT','Etikite scored at 120+2 after France and Italy finished regulation level at 1–1; France advanced 2–1 after extra time.'],
 ['GIGIO AT 89','Donnarumma delivered another extraordinary save to keep the semifinal alive before extra time.'],
 ['THE CLOCK QUESTION','One minute was displayed at the end of extra time; France\'s winner was recorded at 120+2. Added time is a minimum; the board alone does not establish an officiating error.'],
 ['PIO AND KEAN','Kean assisted Pio\'s 25th-minute goal. Pio has four goals and six assists; Kean seven goals and three assists at this World Cup.'],
 ['THE BRONZE TEST','Italy face Denmark in the third-place playoff. France face Belgium for the title. Neither fixture has been played.'],
 ['THE DEFENSIVE LESSON','England generated 5.2 xG in the quarterfinal; Italy needed another crucial Donnarumma rescue against France.'],
 ['THE RETURN','Italy reached a World Cup semifinal for the first time since 2006 after missing the 2018, 2022 and 2026 tournaments.']
];
const w=$('whisperList');if(w)w.innerHTML=d.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const matches=$('matchesList');
if(matches){
 const id='italy-france-semi-worldcup2030';matches.querySelector('[data-match-id="'+id+'"]')?.remove();
 const e=document.createElement('div');e.className='match-card';e.dataset.matchId=id;
 e.innerHTML='<div class="result-badge L">L</div><div class="match-main"><span>FIFA World Cup · Semifinal · After extra time</span><strong>Italy <b>1–2</b> France</strong><p>Pio Esposito 25\' (Kean) · Mbappé 67\' · Donnarumma save 89\' · Etikite 120+2\'</p></div>';
 matches.prepend(e)
}
const status=document.querySelector('.header-status span:last-child');
if(status)status.textContent='2030 · ITALY WORLD CUP THIRD-PLACE PLAYOFF';
const eyebrow=document.querySelector('.brand-copy .eyebrow');
if(eyebrow)eyebrow.textContent='FC 26 CAREER MODE · 2030 WORLD CUP';
})();
