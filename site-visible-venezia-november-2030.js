/* 2–3 November 2030: Venezia 1–0 Napoli; Fila 75′. Updated confirmed injury and national selection, contract news and approved-gallery newsroom. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31',match={date:'2030-11-02',team:'Napoli',opponent:'Venezia',venue:'Away',competition:'Serie A',status:'completed',score:'0–1',teamCleanSheet:false,events:[{minute:75,team:'Venezia',scorer:'Fila',assist:null}],notes:'Venezia 1–0 Napoli, full time. Fila 75′. Napoli first defeat of 2030–31; no Venezia assist, goalkeeper or additional match events established.'};
const sched=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const prev=sched.find(x=>x.team==='Napoli'&&x.opponent==='Venezia'&&x.date==='2030-11-02');
if(prev)Object.assign(prev,match);else sched.push(match);
D.upcoming=sched.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Venezia'&&x[2]==='Serie A'&&String(x[6]).includes('02 Nov 2030')))
D.results.push(['Napoli','Venezia','Serie A',0,1,'L','02 Nov 2030 · Away','Fila 75′ Venezia winner. First Napoli competitive defeat of 2030–31.']);
D.latestResult=['VENEZIA','1–0','NAPOLI','Serie A · 2 November 2030 · Fila 75′'];
D.season203031={...(D.season203031||{}),updated:'2 November 2030 · Venezia 1–0 Napoli · full time',competitiveGamesConfirmed:14,competitiveWins:11,competitiveDraws:2,competitiveLosses:1,competitiveGoalsFor:30,competitiveGoalsAgainst:8,statsVerifiedThrough:'Venezia 1–0 Napoli · Serie A · 2 November 2030',serieA:{played:10,wins:8,draws:1,losses:1,points:25,goalsFor:21,goalsAgainst:5,goalDifference:16},nextClubOpponent:'Real Betis',nextClubCompetition:'Champions League',nextClubDate:'2030-11-05'};
D.seasonState={...(D.seasonState||{}),league:{played:10,w:8,d:1,l:1,points:25,goalsFor:21,goalsAgainst:5,goalDifference:16,remaining:28,status:'Napoli have 25 points after ten Serie A matches, eight wins, one draw and their first defeat at Venezia.'}};
D.nextClubFixture={date:'2030-11-05',opponent:'Real Betis',competition:'Champions League',venue:'Home'};
D.nevesRomaInjury2030={date:'2030-10-30',player:'João Neves',incident:'First-half injury and withdrawal against Roma',substitutionMinute:null,diagnosis:'Broken toe',absenceDuration:'Three months (expected)',returnDate:null,availability:'Unavailable for approximately three months; projected late January 2031, exact return unconfirmed'};
D.goalkeeperAvailability2030={player:'Epolo',status:'Unavailable',expectedAbsenceDays:11,returnDate:null,replacements:['Burnett','Peacock'],rotation:'Both will share goalkeeping time; no fixed match assignments confirmed'};
D.italyRossetti2030={player:'E. Rossetti',age:18,position:'RM',overall:79,clubStatus:'Napoli-owned; on loan',selection:'Italy senior squad',nextFixture:'Denmark, home, 19 November 2030',role:'Available substitute',seniorCapsFromSelection:0};
D.daviesRenewal2030={player:'Alphonso Davies',age:30,overall:91,agreed:true,extension:'One year',role:'Crucial',releaseClause:false};
D.statsScope='Napoli competitive club matches ONLY through Venezia 2 November 2030: Pio Esposito 14G4A, Maximilian Beier 9G9A, Mikey Moore 3G3A, Anton Stach 1G3A, Giacomo Raspadori 2G1A. Napoli scoreless at Venezia, no player goals or assists added. Italy excluded.';
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){
 const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
 const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
 if(desc)desc.textContent=view===season?'Napoli club totals through Venezia 2 November: Pio 14G4A, Beier 9G9A, Moore 3G3A, Stach 1G3A, Raspadori 2G1A. Italy excluded.':'Napoli club statistics for '+(view==='career'?'recorded career':view)+'.';
 if(notice)notice.textContent=view===season?'Venezia 1–0 Napoli: Fila 75′. Napoli club statistics unchanged from Roma; Italy excluded.':'Napoli club records only; Italy excluded.';};
 controls.addEventListener('click',refresh);if(tab)tab.click();refresh();
}
const ids=['venezia-napoli-fila-first-defeat-nov2-2030','neves-broken-toe-three-months-napoli-nov2030','epolo-eleven-day-absence-burnett-peacock-betis-nov2030','alphonso-davies-napoli-extension-agreement-nov2030','rossetti-italy-selection-denmark-bench-nov2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('November 2030 articles missing');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='SERIE A · VENEZIA 1–0 NAPOLI';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['VENEZIA 1–0 NAPOLI · FILA 75′ · FIRST DEFEAT OF 2030–31','NAPOLI · 25 SERIE A POINTS FROM TEN · 8W 1D 1L','JOÃO NEVES · BROKEN TOE · EXPECTED THREE MONTHS OUT','EPOLO · ELEVEN DAYS OUT · BURNETT AND PEACOCK TO SHARE TIME','ALPHONSO DAVIES · ONE-YEAR EXTENSION AGREED','ROSSETTI, 18 · ITALY SENIOR SQUAD · DENMARK BENCH OPTION','NEXT · REAL BETIS AT NAPOLI · 5 NOV UCL · TORINO 9 NOV'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['STREAK ENDS','Fila scores at 75′ as Venezia beat Napoli 1–0. First loss in fourteen competitive club fixtures.'],['NEVES OUT','Broken toe means an expected three-month absence for João Neves. Midfield must adapt.'],['KEEPER DEPTH','Epolo misses around eleven days; Burnett and Peacock will share time.'],['DAVIES STAYS','One-year extension agreed with the elite left-back.'],['AZZURRI FUTURE','E. Rossetti, 18, selected for Italy and available as substitute against Denmark.'],['NEXT: REAL BETIS','Champions League on 5 November at the Maradona. Torino follow on 9 November.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>VENEZIA 1–0 NAPOLI · FIRST DEFEAT</strong><span>Fila 75′ · Napoli scoreless · 14th competitive fixture</span></div><div><strong>SERIE A · 25 POINTS FROM TEN</strong><span>8 wins · one draw · one defeat · 21 scored, five conceded</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>VEN</span><strong>1–0</strong><span>NAP</span></div><p>SERIE A · 02 NOV 2030 · FILA 75′</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='VENEZIA 1–0 NAPOLI · FIRST DEFEAT · REAL BETIS NEXT';
})();

/* Preserve apostrophes in November headline and article previews; recompile against current branch after newsroom ledger update. */
