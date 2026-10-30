(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const ids=[
 'italy-england-two-two-pens-retegui-donnarumma-semifinal-2030',
 'italy-england-donnarumma-three-saves-rice-penalty-keeper-2030',
 'italy-england-five-point-two-xg-defensive-warning-semifinal-2030',
 'italy-england-retegui-toe-120th-minute-miracle-feature-2030',
 'italy-france-world-cup-semifinal-defence-preview-2030',
 'italy-england-pio-locatelli-four-perfect-penalties-feature-2030',
 'italy-england-semifinal-after-24-years-opinion-2030',
 'italy-kean-seven-goals-single-world-cup-record-2030',
 'italy-turkiye-two-one-kean-locatelli-quarterfinal-2030'
];
const all=Array.isArray(d.articles)?d.articles:[];
const priority=ids.map(id=>all.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('England semifinal package missing articles:',ids.filter(id=>!priority.some(a=>a.id===id)));return}
const featured=new Set(ids);d.articles=[...priority,...all.filter(a=>!featured.has(a.id))];
const lead=priority[0];const strap='WORLD CUP 2030 · ITALY WIN 4–3 ON PENS · SEMIFINALISTS';
d.hero={...(d.hero||{}),articleId:lead.id,strap};
d.latestResult=['Italy','2–2','England','World Cup 2030 · Quarterfinal · 2–2 AET · Italy win 4–3 on penalties'];
d.upcoming=[{competition:'World Cup',round:'Semifinal',home:'Italy',away:'France',date:null,kickoff:null}];
const result=$('latestResult');
if(result)result.innerHTML='<div class="latest-score"><span>ITA</span><strong>2–2</strong><span>ENG</span></div><p>ITALY WIN 4–3 ON PENALTIES · LOCATELLI 50\' (PIO) · GORDON 77\' · BELLINGHAM 104\' · RETEGUI 120+1\' · DONNARUMMA SAVES RICE</p>';
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full report →</span></div>';
const top=$('topStories');
if(top)top.innerHTML=priority.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const latest=$('latestNews');
if(latest)latest.innerHTML=[...priority.slice(1,7),...d.articles.filter(a=>!featured.has(a.id)).slice(0,1)].map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const newsGrid=$('newsGrid');
if(newsGrid)newsGrid.innerHTML=d.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');
if(filters){const cats=['All',...new Set(d.articles.map(a=>a.category))];filters.innerHTML=cats.map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('')}
for(const id of ['nextTwo','upcomingStrip']){const e=$(id);if(!e)continue;e.innerHTML=id==='nextTwo'
 ?'<div class="next-row"><strong>WORLD CUP SEMIFINAL</strong><span>ITALY vs FRANCE · date and kickoff to be confirmed</span></div>'
 :'<div class="fixture"><span>WORLD CUP · SEMIFINAL</span><strong>ITALY vs FRANCE</strong><small>Next fixture · date and kickoff to be confirmed</small></div>'}
const form=$('formLine');
if(form)form.innerHTML='<div><strong>WORLD CUP SEMIFINALISTS</strong><span>Italy 2–2 England AET · Italy win shootout 4–3</span></div><div><strong>6 MATCHES · 2W 4D 0L</strong><span>13 for · 11 against · first goals conceded in 5 of 6 matches</span></div>';
const headlines=[
 'ITALY INTO WORLD CUP SEMIFINAL · ENGLAND BEATEN 4–3 ON PENS AFTER 2–2 AET',
 'RETEGUI EQUALISES AT 120+1 · TOE POKE BEATS TRAFFORD',
 'DONNARUMMA DENIES RICE · TWO LATE SAVES AND ONE MORE IN 116TH MINUTE',
 'ENGLAND 5.2 xG TO ITALY 1.4 · 15–7 SHOTS · 12–5 ON TARGET',
 'LOCATELLI 50\' (PIO) · GORDON 77\' · BELLINGHAM 104\' · RETEGUI 120+1\'',
 'SAKA HITS POST · RETEGUI, LOCATELLI, PIO, DIMARCO ALL SCORE',
 'PIO ESPOSITO 3 WORLD CUP GOALS AND 6 ASSISTS · KEAN 7 GOALS',
 'ITALY REACH FIRST WORLD CUP SEMIFINAL SINCE 2006 · FRANCE'
];
d.ticker=headlines;const ticker=$('tickerTrack');
if(ticker)ticker.innerHTML=[...headlines,...headlines].map(x=>'<span>'+esc(x)+'</span>').join('');
d.whispers=[
 ['THE 121ST-MINUTE LIFELINE','Retegui poked in the loose ball after a blocked shot. Trafford reacted to the initial strike and could not recover. Italy levelled at 120+1.'],
 ['GIGIO MADE IT POSSIBLE','Donnarumma made two major second-half stoppage-time saves, another miracle in minute 116, then denied Rice down the middle to win the shootout.'],
 ['THE UNCOMFORTABLE NUMBERS','England 5.2 xG, 15 shots, 12 on target; Italy 1.4 xG, seven shots, five on target. The manager acknowledges Italy were outplayed.'],
 ['FOUR FROM FOUR','Retegui, Locatelli, Pio Esposito and Dimarco converted. Saka hit the post; England then scored three before Rice was saved. Rovella did not take a fifth.'],
 ['PIO AND MOISE','Pio assisted Locatelli and now has three goals and six assists in this World Cup. Kean remains the Italian single-tournament record scorer with seven goals.'],
 ['A GENERATION RETURNS','Italy reach their first World Cup semifinal since 2006, following the missed tournaments of 2018, 2022 and 2026.'],
 ['NEXT TEST','France are the confirmed semifinal opponents. The kickoff has not yet been confirmed. Defensive tightening is the priority after the celebration.']
];
const w=$('whisperList');if(w)w.innerHTML=d.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const matches=$('matchesList');
if(matches){
 const id='italy-england-qf-worldcup2030';matches.querySelector('[data-match-id="'+id+'"]')?.remove();
 const e=document.createElement('div');e.className='match-card';e.dataset.matchId=id;
 e.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>FIFA World Cup · Quarterfinal</span><strong>Italy <b>2–2</b> England · won 4–3 on penalties</strong><p>Locatelli 50\' (Pio), Retegui 120+1\'; Gordon 77\', Bellingham 104\' · Donnarumma saves Rice · England 5.2 xG</p></div>';
 matches.prepend(e)
}
const status=document.querySelector('.header-status span:last-child');
if(status)status.textContent='2030 · ITALY WORLD CUP SEMIFINALISTS';
const eyebrow=document.querySelector('.brand-copy .eyebrow');
if(eyebrow)eyebrow.textContent='FC 26 CAREER MODE · 2030 WORLD CUP';
})();
