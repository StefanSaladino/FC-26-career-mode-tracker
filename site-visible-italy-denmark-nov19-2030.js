/* Italy 2–0 Denmark, 19 November 2030: international only, Rossetti senior debut. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const match={date:'2030-11-19',team:'Italy',opponent:'Denmark',venue:'Home',competition:'International',competitionSubtype:null,competitionVerified:false,status:'completed',score:'2–0',italyGoals:2,opponentGoals:0,teamCleanSheet:true,
 events:[{minute:6,team:'Italy',scorer:'Moise Kean',assist:'Francesco Pio Esposito'},
 {minute:43,team:'Italy',scorer:'Riccardo Calafiori',assist:'Francesco Pio Esposito',detail:'Scores from his own rebound'}],
 substitutions:[{period:'Half-time',playerIn:'E. Rossetti',playerOut:null,confirmed:true,seniorItalyDebut:true}],
 playerPerformances:[{player:'E. Rossetti',age:18,overall:79,matchRating:7.3,shotsOnTarget:2,goalkeeper:'Jorgensen',shotsSavedByGoalkeeper:2}],
 notes:'Italy 2–0 Denmark FT. Kean 6′ (Pio), Calafiori own rebound 43′ (Pio official assist). Rossetti entered at half-time and made his senior debut; 7.3 match rating, 2 shots on target, both saved well by Denmark goalkeeper Jorgensen. Specific international competition subtype, full XI, other Denmark chances and Jorgensen total saves not established.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const prev=schedule.find(x=>x.team==='Italy'&&x.opponent==='Denmark'&&x.date===match.date);
if(prev)Object.assign(prev,match);else schedule.push(match);
D.italyDenmarkNov2030={date:'2030-11-19',competition:'International (subtype unspecified)',result:'Italy 2–0 Denmark',teamCleanSheet:true,
 goals:[{player:'Moise Kean',minute:6,assist:'Francesco Pio Esposito'},{player:'Riccardo Calafiori',minute:43,assist:'Francesco Pio Esposito',finish:'Own rebound'}],
 verifiedMatchContributions:{'Francesco Pio Esposito':{goals:0,assists:2},'Moise Kean':{goals:1,assists:0},'Riccardo Calafiori':{goals:1,assists:0}},
 rossetti:{player:'E. Rossetti',age:18,overall:79,seniorItalyDebut:true,entry:'Half-time',matchRating:7.3,shotsOnTarget:2,jorgensenSavesAgainstShots:2,goals:0},
 note:'Italy national-team scope only; never alter Napoli club-season or career stats. No automatic change to EURO qualifying table or totals.'};
D.italyRossetti2030={...(D.italyRossetti2030||{}),player:'E. Rossetti',age:18,position:'RM',overall:79,clubStatus:'Napoli-owned; on loan',seniorItalyDebutConfirmed:true,firstSeniorItalyMatch:'2030-11-19 · Denmark home',confirmedSeniorItalyAppearances:1,entry:'Half-time',lastMatchRating:7.3,lastMatchShotsOnTarget:2,lastMatchShotsSavedByJorgensen:2,selection:'Italy senior international debut completed'};
D.latestInternationalResult=['Italy','2–0','Denmark','International · 19 November 2030 · Kean 6′ (Pio), Calafiori 43′ (Pio); Rossetti debuts at half-time'];
D.latestResult=['ITALY','2–0','DENMARK','International · 19 November 2030 · Kean 6′, Calafiori 43′; Pio two assists; Rossetti debut'];
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Italy'&&x[1]==='Denmark'&&String(x[6]).includes('19 Nov 2030')))
 D.results.push(['Italy','Denmark','International',2,0,'W','19 Nov 2030 · Home','Kean 6′ (Pio Esposito), Calafiori 43′ own rebound (Pio Esposito), Rossetti senior debut at halftime: 7.3 rating, two shots on target, both saved by Jorgensen. Team clean sheet.']);
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[
 x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
const competition=$('compFilter');if(competition&&!Array.from(competition.options).some(x=>x.value==='International')){const o=document.createElement('option');o.value='International';o.textContent='International';competition.appendChild(o)}
const ids=['italy-denmark-two-zero-kean-calafiori-pio-nov19-2030','rossetti-italy-debut-jorgensen-two-saves-interview-nov2030','pio-two-assists-kean-calafiori-italy-denmark-feature-nov2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Italy–Denmark newsroom stories missing');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='ITALY · INTERNATIONAL · 2–0 DENMARK';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['ITALY 2–0 DENMARK · KEAN 6′ · CALAFIORI 43′','PIO ESPOSITO · TWO OFFICIAL ITALY ASSISTS','ROSSETTI, 18 · SENIOR ITALY DEBUT AT HALF-TIME','ROSSETTI · 7.3 RATING · TWO SHOTS SAVED BY JORGENSEN','ITALY TEAM CLEAN SHEET · SECOND GOAL CALAFIORI OWN REBOUND','NAPOLI SERIE A UNCHANGED · 28 POINTS FROM ELEVEN','NEXT NAPOLI · CAGLIARI AWAY NOV 23 · MAN CITY AWAY NOV 26'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['ROSSETTI DEBUT','Napoli-owned midfielder makes his senior Italy debut at eighteen, earning a 7.3 and forcing two saves from Jorgensen.'],['PIO CREATES','Esposito assists Kean at 6′ and Calafiori at 43′ in Italy’s 2–0 victory.'],['CALAFIORI FOLLOWS IN','The defender scores his own rebound before halftime.'],['CLEAN SHEET','Italy hold Denmark scoreless as the match finishes 2–0.'],['NAPOLI RESTART','League returns away at Cagliari on 23 November, with Manchester City to follow in Europe.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>ITALY 2–0 DENMARK · ROSSETTI SENIOR DEBUT</strong><span>Kean 6′ (Pio) · Calafiori 43′ (Pio) · Rossetti 7.3 after half-time entry</span></div><div><strong>NAPOLI SERIE A · 28 POINTS</strong><span>Club record unchanged: 11 played · 9 wins · 1 draw · 1 defeat</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>ITA</span><strong>2–0</strong><span>DEN</span></div><p>INTERNATIONAL · 19 NOV 2030 · KEAN 6′ · CALAFIORI 43′ · PIO 2 ASSISTS · ROSSETTI DEBUT</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='ITALY 2–0 DENMARK · ROSSETTI DEBUT · NAPOLI AT CAGLIARI NEXT';
})();
