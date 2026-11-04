/* Serie A MD12 · 23 November 2030 · Cagliari 1–3 Napoli · selective rotation. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31',match={
date:'2030-11-23',team:'Napoli',opponent:'Cagliari',venue:'Away',competition:'Serie A',status:'completed',score:'3–1',teamCleanSheet:false,selectiveRotation:true,
events:[
{minute:21,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier'},
{minute:32,team:'Napoli',scorer:'Lutsharel Geertruida',assist:'Maximilian Beier'},
{minute:63,team:'Napoli',scorer:'Scott McTominay',assist:'Maximilian Beier'},
{minute:90,team:'Cagliari',scorer:'Araujo',assist:null}
],notes:'Cagliari 1–3 Napoli, 23 Nov 2030. Selective squad rotation. Pio 21′ (Beier), Geertruida 32′ (Beier), McTominay 63′ (Beier), Araujo 90′. No confirmed lineup, halftime substitutions, extra shots, cards or goalkeeper errors.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const prev=schedule.find(x=>x.team==='Napoli'&&x.opponent==='Cagliari'&&x.date===match.date);
if(prev)Object.assign(prev,match);else schedule.push(match);
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[
 x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue
]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Cagliari'&&x[2]==='Serie A'&&String(x[6]).includes('23 Nov 2030')))
D.results.push(['Napoli','Cagliari','Serie A',3,1,'W','23 Nov 2030 · Away','Pio 21′ (Beier), Geertruida 32′ (Beier), McTominay 63′ (Beier); Araujo 90′ (Cagliari). Selective rotation, 3 Beier assists.']);
D.latestResult=['CAGLIARI','1–3','NAPOLI','Serie A · 23 November 2030 · Pio 21′ · Geertruida 32′ · McTominay 63′ · Araujo 90′'];
D.season203031={...(D.season203031||{}),updated:'23 November 2030 · Cagliari 1–3 Napoli · full time',competitiveGamesConfirmed:17,competitiveWins:14,competitiveDraws:2,competitiveLosses:1,competitiveGoalsFor:40,competitiveGoalsAgainst:11,
statsVerifiedThrough:'Cagliari 1–3 Napoli · Serie A · 23 November 2030',
serieA:{played:12,wins:10,draws:1,losses:1,points:31,goalsFor:27,goalsAgainst:7,goalDifference:20},
championsLeague:{played:4,wins:3,draws:1,losses:0,points:10,goalsFor:11,goalsAgainst:3,goalDifference:8},
nextClubOpponent:'Manchester City',nextClubCompetition:'Champions League',nextClubDate:'2030-11-26'};
D.seasonState={...(D.seasonState||{}),league:{played:12,w:10,d:1,l:1,points:31,goalsFor:27,goalsAgainst:7,goalDifference:20,remaining:26,status:'Napoli 31 Serie A points after twelve matches: ten wins, one draw, one loss; 27 scored, seven conceded.'}};
D.nextClubFixture={date:'2030-11-26',opponent:'Manchester City',competition:'Champions League',venue:'Away'};
D.cagliari2030={date:'2030-11-23',result:'Cagliari 1–3 Napoli',rotation:'Selective',beierMatchAssists:3,leaguePoints:31,nextClubFixture:'Manchester City away, 26 Nov'};
D.statsScope='Napoli club competitive matches only through Cagliari 23 November 2030: Pio 16G7A; Beier 13G12A; Moore 5G4A; Geertruida 2G; McTominay 1G2A; Stach 1G3A; Raspadori 2G1A; Zaïre-Emery 0G2A. International contributions separate.';
const rows=D.statsBySeason?.[season];
if(rows){
const entries=[
['Pio Esposito',1,0,'Cagliari 23 Nov: scores 21′ assisted by Beier'],
['Lutsharel Geertruida',1,0,'Cagliari 23 Nov: scores 32′ assisted by Beier'],
['Scott McTominay',1,0,'Cagliari 23 Nov: scores 63′ assisted by Beier'],
['Maximilian Beier',0,3,'Cagliari 23 Nov: assists Pio 21′, Geertruida 32′, McTominay 63′']
];
for(const [name,g,a,note] of entries){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}
row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;
row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
D.stats=rows;D.statsCurrentSeason=season;
const sums=new Map();
for(const [year,items] of Object.entries(D.statsBySeason)){
for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p)}}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
if(desc)desc.textContent=view===season?'Napoli club through Cagliari: Pio 16G7A, Beier 13G12A, Moore 5G4A, McTominay 1G2A. Italy excluded.':'Napoli club stats for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'Cagliari 1–3 Napoli: Beier assists all three; first club goal this season for McTominay. Italy excluded.':'Napoli club record only; Italy excluded.';};
controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=['cagliari-napoli-three-one-beier-three-assists-nov23-2030','beier-twelve-assists-celtic-cagliari-creative-forward-nov2030','cagliari-rotation-mctominay-geertruida-city-nov2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Cagliari 2030 newsroom stories missing');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='SERIE A · CAGLIARI 1–3 NAPOLI';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['CAGLIARI 1–3 NAPOLI · PIO 21′ · GEERTRUIDA 32′ · McTOMINAY 63′','BEIER MAKES ALL THREE GOALS · 13 CLUB GOALS + 12 ASSISTS','ARAUJO 90′ · CAGLIARI LATE REPLY','SERIE A · 31 POINTS FROM 12 · 10W 1D 1L','GEERTRUIDA SECOND CLUB GOAL · McTOMINAY FIRST THIS SEASON','CHAMPIONS LEAGUE NEXT · MAN CITY AWAY 26 NOV','JUVENTUS HOME · 1 DECEMBER · SERIE A'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['BEIER THE PROVIDER','Three Cagliari goals, three assists for Beier — his second three-assist Napoli match this season.'],['PIO SCORES','Pio's 21′ opener takes him to 16 club goals in 2030–31.'],['DEPTH DELIVERS','Geertruida and McTominay score as selective rotation returns three away points.'],['LATE REPLY','Araujo scores at 90′; Cagliari 1–3 Napoli at full time.'],['CITY NEXT','Napoli travel to Manchester City on 26 November, then host Juventus on 1 December.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>CAGLIARI 1–3 NAPOLI · THREE BEIER ASSISTS</strong><span>Pio 21′ · Geertruida 32′ · McTominay 63′ · Araujo 90′</span></div><div><strong>SERIE A · 31 POINTS</strong><span>12 played · 10 wins, one draw, one defeat · 27 scored, seven conceded</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>CAG</span><strong>1–3</strong><span>NAP</span></div><p>SERIE A · 23 NOV 2030 · PIO 21′ · GEERTRUIDA 32′ · McTOMINAY 63′ · ARAUJO 90′</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='CAGLIARI 1–3 NAPOLI · 31 SERIE A POINTS · MAN CITY NEXT';
})();
