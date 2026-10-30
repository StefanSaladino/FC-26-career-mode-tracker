(()=>{'use strict';
const d=window.NAPOLI_DATA||(window.NAPOLI_DATA={});const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const ids=[
 'italy-denmark-one-nil-bronze-pio-gigio-worldcup-2030',
 'italy-bronze-rebirth-not-fifth-star-2030-opinion',
 'italy-donnarumma-worldcup-eleven-lammens-2030-opinion',
 'italy-kean-pio-2030-worldcup-forward-future-opinion',
 'italy-defence-2030-worldcup-inquest-opinion',
 'worldcup-2030-final-france-belgium-team-eleven-italy-analysis',
 'italy-france-semifinal-1202-etikite-worldcup-exit-2030',
 'italy-donnarumma-worldcup-france-last-line-feature-2030',
 'italy-france-stoppage-time-1202-officiating-debate-2030'
];
const all=Array.isArray(d.articles)?d.articles:[];
const priority=ids.map(id=>all.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('World Cup closing edition missing articles:',ids.filter(id=>!priority.some(a=>a.id===id)));return;}
const selected=new Set(ids);d.articles=[...priority,...all.filter(a=>!selected.has(a.id))];
const lead=priority[0],strap='WORLD CUP 2030 · ITALY WIN BRONZE · 1–0 DENMARK';
d.hero={...(d.hero||{}),articleId:lead.id,strap};
d.latestResult=['Italy','1–0','Denmark','World Cup 2030 · Third place · Bronze medal'];
d.upcoming=[];
const result=$('latestResult');if(result)result.innerHTML='<div class="latest-score"><span>ITA</span><strong>1–0</strong><span>DEN</span></div><p>PIO ESPOSITO 54\' · DONNARUMMA PENALTY SAVE 22\' · ITALY CLAIM BRONZE</p>';
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=priority.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const latest=$('latestNews');if(latest)latest.innerHTML=[...priority.slice(1,7),...d.articles.filter(a=>!selected.has(a.id)).slice(0,1)].map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=d.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters){const cats=['All',...new Set(d.articles.map(a=>a.category))];filters.innerHTML=cats.map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');}
for(const id of ['nextTwo','upcomingStrip']){const e=$(id);if(!e)continue;e.innerHTML=id==='nextTwo'
 ?'<div class="next-row"><strong>WORLD CUP 2030 · COMPLETED</strong><span>FRANCE CHAMPIONS · ITALY BRONZE</span></div><div class="next-row"><strong>WORLD CUP FINAL</strong><span>FRANCE 2–0 BELGIUM</span></div>'
 :'<div class="fixture"><span>WORLD CUP · FINAL</span><strong>FRANCE 2–0 BELGIUM</strong><small>France are world champions</small></div><div class="fixture"><span>WORLD CUP · THIRD PLACE</span><strong>ITALY 1–0 DENMARK</strong><small>Italy win bronze · Tournament complete</small></div>';}
const form=$('formLine');if(form)form.innerHTML='<div><strong>WORLD CUP BRONZE MEDALLISTS</strong><span>Italy 1–0 Denmark · Donnarumma saves penalty · Pio winner</span></div><div><strong>8 MATCHES · 3W 4D 1L</strong><span>15 goals for · 13 against · five players in tournament XI</span></div>';
const lines=[
 'ITALY 1–0 DENMARK · PIO 54\' · WORLD CUP BRONZE MEDALS',
 'DONNARUMMA SAVES A PENALTY AT 22\' · ITALY FINISH WITH CLEAN SHEET',
 'FRANCE 2–0 BELGIUM · WORLD CUP 2030 CHAMPIONS',
 'KEAN 7 GOALS / 3 ASSISTS · PIO 5 GOALS / 6 ASSISTS',
 'FIVE AZZURRI IN TEAM OF TOURNAMENT · KEAN, BARELLA, CALAFIORI, BASTONI, KAYODE',
 'FINAL RECORD · 8 PLAYED · 3W 4D 1L · 15 FOR · 13 AGAINST',
 'DONNARUMMA AND PIO OMITTED FROM OFFICIAL XI · DEBATE CONTINUES',
 'ITALY RETURN TO WORLD CUP PODIUM AFTER THREE MISSED TOURNAMENTS'
];d.ticker=lines;
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...lines,...lines].map(x=>'<span>'+esc(x)+'</span>').join('');
d.whispers=[
 ['BRONZE FOR ITALY','Pio Esposito\'s 54th-minute winner beats Denmark 1–0; Donnarumma saves a penalty in the 22nd minute.'],
 ['FRANCE ARE CHAMPIONS','France beat Belgium 2–0 in the final. Italy finish third and Denmark fourth.'],
 ['FIVE AZZURRI IN THE XI','Kean, Barella, Calafiori, Bastoni and Kayode make the Team of the Tournament.'],
 ['THE FORWARD NUMBERS','Kean: 7 goals and 3 assists; Pio Esposito: 5 goals and 6 assists. Italy World Cup totals only.'],
 ['GIGIO LEFT OUT','Senne Lammens is selected goalkeeper. Donnarumma\'s decisive saves against England, France and Denmark fuel a serious debate.'],
 ['THE DEFENSIVE QUESTION','England produced 5.2 xG in the quarterfinal. Italy reached the podium but still have tactical issues to address.'],
 ['THE FINAL RECORD','Eight games; three wins, four drawn matches, one defeat; 15 scored, 13 conceded. Shootout advances counted as draws.']
];const w=$('whisperList');if(w)w.innerHTML=d.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const matches=$('matchesList');
if(matches){
 const entries=[
  {id:'italy-denmark-bronze-worldcup2030',score:'Italy <b>1–0</b> Denmark',title:'FIFA World Cup · Third-place playoff · Final',detail:'Pio Esposito 54\' · Donnarumma saved Denmark penalty 22\' · Italy win bronze',badge:'W'},
  {id:'france-belgium-final-worldcup2030',score:'France <b>2–0</b> Belgium',title:'FIFA World Cup · Final',detail:'France crowned world champions · Belgium runners-up',badge:'W'}];
 for(let i=entries.length-1;i>=0;i--){const m=entries[i];matches.querySelector('[data-match-id="'+m.id+'"]')?.remove();const el=document.createElement('div');el.className='match-card';el.dataset.matchId=m.id;el.innerHTML='<div class="result-badge '+m.badge+'">'+m.badge+'</div><div class="match-main"><span>'+m.title+'</span><strong>'+m.score+'</strong><p>'+m.detail+'</p></div>';matches.prepend(el);}
}
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='2030 WORLD CUP · ITALY BRONZE MEDALLISTS';
const eyebrow=document.querySelector('.brand-copy .eyebrow');if(eyebrow)eyebrow.textContent='FC 26 CAREER MODE · WORLD CUP 2030 WRAP';
})();
