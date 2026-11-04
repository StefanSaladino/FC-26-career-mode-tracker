/* Serie A MD14 · Pisa 2–3 Napoli 7 Dec 2030; Warren brace, Davies goal, Peacock starts. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31',match={date:'2030-12-07',team:'Napoli',opponent:'Pisa',venue:'Away',competition:'Serie A',status:'completed',score:'3–2',halfTime:'3–0',teamCleanSheet:false,
events:[{minute:12,team:'Napoli',scorer:'Warren Zaïre-Emery',assist:'Anton Stach',finish:'First-time into top corner',detail:'Stach through ball'},
{minute:null,team:'Napoli',scorer:'Warren Zaïre-Emery',assist:'Pio Esposito',detail:'Raspadori to Moore to Pio; Pio plays Zaïre-Emery through for brace'},
{minute:null,team:'Napoli',scorer:'Alphonso Davies',assist:null,detail:'Collects Pisa failed corner clearance and scores'},
{minute:62,team:'Pisa',scorer:'Durosinmi',assist:null},{minute:81,team:'Pisa',scorer:'Vural',assist:null}],
notes:'Pisa 2–3 Napoli, HT 0–3, Zaïre-Emery brace (12′ and unknown minute) and Davies (minute unknown); Durosinmi 62′ and Vural 81′. Stach final pass for opener; Pio final pass for second after Raspadori–Moore buildup. Peacock starts and concedes two; no individual errors described.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const previous=schedule.find(x=>x.team==='Napoli'&&x.opponent==='Pisa'&&x.date===match.date);
if(previous)Object.assign(previous,match);else schedule.push(match);
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[
x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue
]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Pisa'&&x[2]==='Serie A'&&String(x[6]).includes('07 Dec 2030')))
D.results.push(['Napoli','Pisa','Serie A',3,2,'W','07 Dec 2030 · Away','Pisa 2–3 Napoli, HT 0–3; Zaïre-Emery twice, Davies; Durosinmi 62′, Vural 81′. Peacock first start in a while, two conceded.']);
D.latestResult=['PISA','2–3','NAPOLI','Serie A · 7 December 2030 · Zaïre-Emery brace, Davies · Durosinmi 62′, Vural 81′'];
D.season203031={...(D.season203031||{}),updated:'7 December 2030 · Pisa 2–3 Napoli · full time',
competitiveGamesConfirmed:20,competitiveWins:17,competitiveDraws:2,competitiveLosses:1,competitiveGoalsFor:46,competitiveGoalsAgainst:14,statsVerifiedThrough:'Pisa 2–3 Napoli · Serie A · 7 December 2030',
serieA:{played:14,wins:12,draws:1,losses:1,points:37,goalsFor:32,goalsAgainst:10,goalDifference:22},
championsLeague:{played:5,wins:4,draws:1,losses:0,points:13,goalsFor:12,goalsAgainst:3,goalDifference:9},
nextClubOpponent:'RB Leipzig',nextClubCompetition:'Champions League',nextClubDate:'2030-12-11'};
D.seasonState={...(D.seasonState||{}),league:{played:14,w:12,d:1,l:1,points:37,goalsFor:32,goalsAgainst:10,goalDifference:22,remaining:24,status:'Napoli have 37 Serie A points after fourteen: twelve wins, one draw, one loss; 32 goals scored and ten conceded.'}};
D.nextClubFixture={date:'2030-12-11',opponent:'RB Leipzig',competition:'Champions League',venue:'Away'};
D.pisaDec2030={date:'2030-12-07',result:'Pisa 2–3 Napoli',halfTime:'0–3',goalkeeper:'C. Peacock',
goals:[{minute:12,scorer:'Warren Zaïre-Emery',assist:'Anton Stach'},{minute:null,scorer:'Warren Zaïre-Emery',assist:'Pio Esposito',buildup:['Raspadori','Mikey Moore','Pio Esposito']},{minute:null,scorer:'Alphonso Davies',detail:'Failed Pisa corner clearance'},{minute:62,scorer:'Durosinmi',team:'Pisa'},{minute:81,scorer:'Vural',team:'Pisa'}],serieAPointsAfter:37,teamCleanSheet:false};
D.statsScope='Napoli competitive club after Pisa 7 Dec: Zaïre-Emery 2G3A, Pio 17G8A, Stach 1G4A, Davies 1G0A, Beier 14G13A, Hasa 1G1A. Stach and Pio gave reported final passes; separate official in-game assist status not established. Italy excluded.';
const rows=D.statsBySeason?.[season];
if(rows){
for(const [name,g,a,note] of [
['Warren Zaïre-Emery',2,0,'Pisa 7 Dec: brace, including 12′ first-time top-corner from Stach and second from Pio final pass'],
['Anton Stach',0,1,'Pisa 7 Dec: decisive through ball for Zaïre-Emery 12′; last pass, official assist status unconfirmed'],
['Pio Esposito',0,1,'Pisa 7 Dec: final through ball for second Zaïre-Emery goal after Raspadori–Moore combination; official assist status unconfirmed'],
['Alphonso Davies',1,0,'Pisa 7 Dec: converts failed Pisa corner clearance']
]){
let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}
row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;
row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
D.stats=rows;D.statsCurrentSeason=season;
const sums=new Map();
for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p)}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
if(desc)desc.textContent=view===season?'Napoli club after Pisa: Zaïre-Emery 2G3A, Pio 17G8A, Stach 1G4A, Davies 1G0A. Italy excluded.':'Napoli club stats for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'Pisa 2–3: Warren brace, Davies goal, Stach and Pio last passes. Napoli 37 Serie A points from fourteen.':'Napoli club records only; Italy excluded.';};
controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=['pisa-napoli-three-two-zaire-davies-collapse-dec7-2030','zaire-emery-two-goals-pisa-midfield-dec2030','pisa-3-2-peacock-defensive-collapse-leipzig-dec2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Missing Pisa 2030 newsroom stories');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='SERIE A · PISA 2–3 NAPOLI';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['PISA 2–3 NAPOLI · ZAÏRE-EMERY BRACE · DAVIES','3–0 UP AT HALFTIME · NAPOLI SURVIVE 3–2','WARREN FIRST TWO CLUB GOALS THIS SEASON','DUROSINMI 62′ · VURAL 81′ FOR PISA','NAPOLI SERIE A · 37 POINTS FROM 14','PEACOCK RETURNS · TWO CONCEDED','NEXT · RB LEIPZIG AWAY 11 DEC · SAMPDORIA HOME 14 DEC'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['WARREN DOUBLE','Zaïre-Emery scores twice at Pisa, first at 12′ from Stach through ball.'],['PISA COME BACK','After 3–0 Napoli at halftime, Durosinmi and Vural score in second half.'],['DAVIES PUNISHES ERROR','Alphonso Davies strikes after Pisa fail to clear a Napoli corner.'],['PEACOCK RETURNS','Napoli keeper starts after a spell out and concedes twice; no individual mistakes established.'],['THREE POINTS','Napoli 37 Serie A points from fourteen matches; Leipzig away next.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>PISA 2–3 NAPOLI · WARREN DOUBLE AND DAVIES</strong><span>Zaïre-Emery brace (Stach, Pio last passes), Davies · Durosinmi 62′, Vural 81′</span></div><div><strong>SERIE A · 37 POINTS</strong><span>14 played · 12 wins · one draw · one defeat · 32 scored / 10 conceded</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>PIS</span><strong>2–3</strong><span>NAP</span></div><p>SERIE A · 7 DEC 2030 · WARREN (2), DAVIES · DUROSINMI 62′, VURAL 81′</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='PISA 2–3 NAPOLI · 37 SERIE A POINTS · LEIPZIG NEXT';
})();
