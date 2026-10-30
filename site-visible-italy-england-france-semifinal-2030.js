(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const ids=[
 'italy-england-two-two-pens-retegui-donnarumma-semifinal-2030',
 'italy-england-donnarumma-three-saves-rice-penalty-keeper-2030',
 'italy-england-retegui-toe-120th-minute-miracle-feature-2030',
 'italy-england-five-point-two-xg-defensive-warning-semifinal-2030',
 'italy-france-world-cup-semifinal-defence-preview-2030',
 'italy-england-pio-locatelli-four-perfect-penalties-feature-2030',
 'italy-england-semifinal-after-24-years-opinion-2030',
 'italy-kean-seven-goals-single-world-cup-record-2030',
 'italy-turkiye-two-one-kean-locatelli-quarterfinal-2030',
 'italy-turkiye-kean-seven-goals-pio-barella-feature-2030',
 'italy-turkiye-locatelli-donnarumma-last-line-feature-2030',
 'italy-turkiye-five-times-behind-tactical-analysis-2030',
 'italy-england-quarterfinal-resurrection-preview-2030'
];
const all=Array.isArray(d.articles)?d.articles:[];
const priority=ids.map(id=>all.find(a=>a.id===id)).filter(Boolean);
const needed=ids.slice(0,7);
if(needed.some(id=>!priority.some(a=>a.id===id))){console.error('England/France edition missing articles:',needed.filter(id=>!priority.some(a=>a.id===id)));return}
const featured=new Set(ids);
d.articles=[...priority,...all.filter(a=>!featured.has(a.id))];
const lead=priority[0],strap='WORLD CUP 2030 · ITALY 2–2 ENGLAND · 4–3 ON PENALTIES · SEMIFINALISTS';
d.hero={...(d.hero||{}),articleId:lead.id,strap};
d.latestResult=['Italy','2–2','England','World Cup Quarterfinal · 2–2 AET · Italy win 4–3 penalties'];
d.upcoming=[{competition:'FIFA World Cup',round:'Semifinal',home:'Italy',away:'France',date:null,kickoff:null,status:'scheduled'}];
const latest=$('latestResult');
if(latest)latest.innerHTML='<div class="latest-score"><span>ITA</span><strong>2–2</strong><span>ENG</span></div><p>WORLD CUP QUARTERFINAL · ITALY WIN 4–3 ON PENALTIES · LOCATELLI 50\' (PIO) · RETEGUI 120+1\' · DONNARUMMA SAVES RICE</p>';
const hero=$('heroStory');
if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full quarterfinal report →</span></div>';
const top=$('topStories');
if(top)top.innerHTML=priority.slice(1,6).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const latestNews=$('latestNews');
if(latestNews)latestNews.innerHTML=priority.slice(1,9).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');
if(grid)grid.innerHTML=d.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');
if(filters){const cats=['All',...new Set(d.articles.map(a=>a.category))];filters.innerHTML=cats.map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('')}
for(const id of ['nextTwo','upcomingStrip']){
 const e=$(id);if(!e)continue;
 e.innerHTML=id==='nextTwo'
 ?'<div class="next-row"><strong>WORLD CUP SEMIFINAL</strong><span>ITALY vs FRANCE · kickoff to be confirmed</span></div>'
 :'<div class="fixture"><span>WORLD CUP · SEMIFINAL</span><strong>ITALY vs FRANCE</strong><small>Next fixture · date and time to be confirmed</small></div>';
}
const form=$('formLine');
if(form)form.innerHTML='<div><strong>WORLD CUP LAST FOUR</strong><span>Italy 2–2 England · won 4–3 on penalties · France next</span></div><div><strong>6 MATCHES · 2W 4D 0L</strong><span>13 goals scored · 11 conceded · two knockout shootouts won</span></div>';
const news=[
 'ITALY INTO WORLD CUP SEMIFINAL · ENGLAND 2–2 · 4–3 ON PENALTIES',
 'RETEGUI EQUALISES AT 120+1 · DONNARUMMA SAVES RICE',
 'FRANCE NEXT · FIFA WORLD CUP 2030 SEMIFINAL',
 'ENGLAND OUTPLAY ITALY · 5.2–1.4 EXPECTED GOALS',
 'ENGLAND 15–7 SHOTS · 12–5 ON TARGET',
 'DONNARUMMA TWO HUGE STOPPAGE-TIME SAVES AND ANOTHER AT 116',
 'LOCATELLI 50\' (PIO ASSIST) · GORDON 77\' · BELLINGHAM 104\' · RETEGUI 120+1\'',
 'SAKA HITS POST · ALL FOUR ITALIAN PENALTIES SCORED · RICE DENIED',
 'PIO ESPOSITO SIX WORLD CUP ASSISTS · KEAN SEVEN WORLD CUP GOALS',
 'ITALY REACH WORLD CUP SEMIFINAL FOR FIRST TIME SINCE 2006'
];
d.ticker=news;const ticker=$('tickerTrack');
if(ticker)ticker.innerHTML=[...news,...news].map(s=>'<span>'+esc(s)+'</span>').join('');
d.whispers=[
 ['A NATION RESCUED','Italy 2–2 England after extra time; Retegui equalised at 120+1 before the Azzurri won 4–3 in the shootout.'],
 ['GIGIO SAVES THE NIGHT','Donnarumma produced two major saves in regulation stoppage time, another in the 116th and denied Rice in the shootout.'],
 ['THE COST OF SURVIVAL','England generated 5.2 expected goals to Italy\'s 1.4, leading shots 15–7 and on-target attempts 12–5. England dominated the chance quality.'],
 ['FOUR PERFECT PENALTIES','Retegui, Locatelli, Pio Esposito and Dimarco scored. Saka hit the post; Rice was saved. Rovella was not required for Italy\'s fifth.'],
 ['A NEW SCORING RECORD','Kean retains the Italian single-World-Cup record with seven goals. Pio has three goals and six assists for Italy at this World Cup.'],
 ['FRANCE AWAIT','Italy face France in the World Cup semifinal, with a place in the final at stake.'],
 ['THE DEFENSIVE TASK','Celebrate the comeback now; address the 5.2 xG conceded and the threat of second balls before the semifinal.']
];
const w=$('whisperList');if(w)w.innerHTML=d.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const matches=$('matchesList');
if(matches){
 const id='italy-england-quarterfinal-worldcup2030';
 matches.querySelector('[data-match-id="'+id+'"]')?.remove();
 const e=document.createElement('div');e.className='match-card';e.dataset.matchId=id;
 e.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>FIFA World Cup · Quarterfinal</span><strong>Italy <b>2–2</b> England · won 4–3 on penalties</strong><p>Locatelli 50\' (Pio), Gordon 77\', Bellingham 104\', Retegui 120+1\' · Donnarumma saves Rice · France semifinal next</p></div>';
 matches.prepend(e);
}
const status=document.querySelector('.header-status span:last-child');
if(status)status.textContent='2030 · ITALY WORLD CUP SEMIFINALISTS';
const eyebrow=document.querySelector('.brand-copy .eyebrow');
if(eyebrow)eyebrow.textContent='FC 26 CAREER MODE · 2030 WORLD CUP';
})();
