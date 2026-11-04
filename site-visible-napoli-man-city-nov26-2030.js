/* Manchester City 0–1 Napoli · 26 Nov 2030 · Champions League MD5. Public confirmed football facts only. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31',match={date:'2030-11-26',team:'Napoli',opponent:'Manchester City',venue:'Away',competition:'Champions League',status:'completed',score:'1–0',teamCleanSheet:true,
halfTime:'0–0',events:[{minute:58,team:'Napoli',scorer:'Pio Esposito',assist:'Michael Olise',finish:'Header',delivery:'Cross from Olise'}],
notes:'Manchester City 0–1 Napoli, HT 0–0, Pio Esposito scores 58′ header assisted by Michael Olise cross. Other pitch events not established.'};
const sched=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const previous=sched.find(x=>x.team==='Napoli'&&x.opponent==='Manchester City'&&x.date===match.date);
if(previous)Object.assign(previous,match);else sched.push(match);
D.upcoming=sched.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[
x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue
]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Manchester City'&&x[2]==='Champions League'&&String(x[6]).includes('26 Nov 2030')))
D.results.push(['Napoli','Manchester City','Champions League',1,0,'W','26 Nov 2030 · Away','Manchester City 0–1 Napoli. Pio Esposito 58′ header from Michael Olise cross; 0–0 halftime, team clean sheet.']);
D.latestResult=['MANCHESTER CITY','0–1','NAPOLI','Champions League · 26 November 2030 · Pio Esposito 58′ (Olise cross and assist)'];
D.season203031={...(D.season203031||{}),updated:'26 November 2030 · Manchester City 0–1 Napoli · full time',
competitiveGamesConfirmed:18,competitiveWins:15,competitiveDraws:2,competitiveLosses:1,competitiveGoalsFor:41,competitiveGoalsAgainst:11,
statsVerifiedThrough:'Manchester City 0–1 Napoli · Champions League · 26 November 2030',
serieA:{played:12,wins:10,draws:1,losses:1,points:31,goalsFor:27,goalsAgainst:7,goalDifference:20},
championsLeague:{played:5,wins:4,draws:1,losses:0,points:13,goalsFor:12,goalsAgainst:3,goalDifference:9},
nextClubOpponent:'Juventus',nextClubCompetition:'Serie A',nextClubDate:'2030-12-01'};
D.seasonState={...(D.seasonState||{}),league:{played:12,w:10,d:1,l:1,points:31,goalsFor:27,goalsAgainst:7,goalDifference:20,remaining:26,status:'Napoli have 31 Serie A points after twelve games: ten wins, one draw and one loss. League record unchanged by City Champions League win.'}};
D.nextClubFixture={date:'2030-12-01',opponent:'Juventus',competition:'Serie A',venue:'Home'};
D.cityUclNov2030={date:'2030-11-26',score:'Manchester City 0–1 Napoli',halfTime:'0–0',winner:{minute:58,player:'Pio Esposito',finish:'Header',assistedBy:'Michael Olise',assistType:'Cross'},teamCleanSheet:true,pointsAfterFive:13,record:'5P4W1D0L',goalsFor:12,goalsAgainst:3};
D.statsScope='Napoli competitive club games through Manchester City on 26 November 2030: Pio 17G7A; Beier 13G12A; Olise 0G3A; Moore 5G4A; Geertruida 2G; McTominay 1G2A; Stach 1G3A; Zaïre-Emery 0G2A; Raspadori 2G1A. Italy contributions excluded.';
const rows=D.statsBySeason?.[season];
if(rows){
for(const [name,g,a,note] of [
['Pio Esposito',1,0,'Manchester City 26 Nov: scores 58′ winning header from Olise cross'],
['Michael Olise',0,1,'Manchester City 26 Nov: official assist with cross for Pio headed winner at 58′']
]){
let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}
row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;
row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;
}
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
if(desc)desc.textContent=view===season?'Napoli club after City: Pio 17G7A, Beier 13G12A, Olise 0G3A, Moore 5G4A. Italy excluded.':'Napoli club statistics for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'Manchester City 0–1 Napoli: Pio 58′ header assisted by Olise. Napoli UCL 13 points from five; league remains 31 points.':'Napoli club records only; Italy excluded.';};
controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=['manchester-city-napoli-zero-one-pio-olise-nov26-2030','olise-esposito-headed-winner-manchester-city-nov2030','napoli-thirteen-ucl-points-city-clean-sheet-juventus-nov2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Missing City newsroom stories');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(x=>!used.has(x.id))];
const lead=priority[0],strap='CHAMPIONS LEAGUE · CITY 0–1 NAPOLI';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['MANCHESTER CITY 0–1 NAPOLI · PIO 58′ HEADER FROM OLISE CROSS','NAPOLI UNBEATEN IN UCL · 13 POINTS FROM FIVE','OLISE DELIVERS · PIO HEADS WINNER','CHAMPIONS LEAGUE · NAPOLI 12 GOALS FOR / 3 AGAINST','NAPOLI SERIE A · 31 POINTS FROM 12 · UNCHANGED','NEXT · JUVENTUS HOME · 1 DECEMBER','RB LEIPZIG AWAY · 11 DECEMBER · CHAMPIONS LEAGUE'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['PIO AGAIN','Esposito heads Napoli ahead at 58′ from an Olise cross in Manchester.'],['OLISE ASSISTS','The winger supplies the winning goal at City; three Napoli club assists this season.'],['EUROPEAN RECORD','Five UCL games unbeaten: four wins and a draw, thirteen points.'],['CLEAN SHEET','Napoli beat Manchester City 1–0 away.'],['JUVENTUS NEXT','Napoli host Juventus in Serie A on 1 December.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>MAN CITY 0–1 NAPOLI · PIO HEADED WINNER</strong><span>58′ Pio Esposito · Michael Olise cross / assist · Napoli clean sheet</span></div><div><strong>UCL · 13 POINTS FROM FIVE</strong><span>4 wins · one draw · 12 scored · 3 conceded</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>MCI</span><strong>0–1</strong><span>NAP</span></div><p>CHAMPIONS LEAGUE · 26 NOV 2030 · PIO ESPOSITO 58′ HEADER · ASSIST OLISE</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='MAN CITY 0–1 NAPOLI · 13 UCL POINTS · JUVENTUS NEXT';
})();
