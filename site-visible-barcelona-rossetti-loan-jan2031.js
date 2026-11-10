/* Napoli 2–0 Barcelona Champions League, 22 January 2031, and Rossetti short-term loan. Last authoring overlay. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ids=['napoli-barcelona-two-nil-beier-pio-ucl-jan2031','bellandi-barcelona-xg-shots-precision-jan2031','pio-beier-barcelona-reciprocal-partnership-jan2031','edoardo-rossetti-short-term-loan-after-sassuolo-brace-jan2031'];
const stories=ids.map(id=>(D.articles||[]).find(x=>x.id===id));
if(stories.some(x=>!x)){console.error('Barcelona/Rossetti newsroom stories were not loaded');return;}
const used=new Set(ids);D.articles=[...stories,...D.articles.filter(x=>!used.has(x.id))];
const events=[
 {minute:13,team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito',assistOfficial:true},
 {minute:36,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',assistOfficial:true}
];
D.barcelonaJanuary2031={date:'2031-01-22',competition:'Champions League',phase:'League phase',venue:'Home',opponent:'Barcelona',score:'2–0',halfTime:'2–0',events,statistics:{xg:{napoli:1.6,barcelona:1.7},shots:{napoli:6,barcelona:6},shotsOnTarget:{napoli:5,barcelona:2}}};
D.rossettiShortLoanJan2031={confirmed:'short-term loan',player:'Edoardo Rossetti',age:19,loanType:'temporary',state:'away on loan',following:'First Napoli goals against Sassuolo on 15 January 2031',destination:null,exactReturnDate:null};
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Barcelona'&&x[3]===2&&x[4]===0&&String(x[6]).includes('2031')))
D.results.push(['Napoli','Barcelona','Champions League',2,0,'W','22 Jan 2031 · Home','Beier 13′ (Pio assist); Pio 36′ (Beier assist). Napoli xG 1.6 Barcelona 1.7; six shots each, shots on target Napoli 5 Barcelona 2. FT 2–0 Napoli.']);
const calendar=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
let fixture=calendar.find(x=>x.date==='2031-01-22'&&x.team==='Napoli'&&x.opponent==='Barcelona');
if(!fixture){fixture={date:'2031-01-22',team:'Napoli',opponent:'Barcelona',venue:'Home',competition:'Champions League'};calendar.push(fixture)}
Object.assign(fixture,{status:'completed',score:'2–0',halfTime:'2–0',events,matchStatistics:{napoliXG:1.6,barcelonaXG:1.7,napoliShots:6,barcelonaShots:6,napoliOnTarget:5,barcelonaOnTarget:2},notes:'Beier 13′ from Pio, Pio 36′ from Beier; Champions League 2–0 home victory and clean sheet. Napoli 2–0 Barcelona in the Champions League league phase; clean sheet and strong finishing accuracy.'});
D.latestResult=['Napoli','2–0','Barcelona','Champions League · 22 January 2031 · Beier 13′ (Pio), Pio 36′ (Beier)'];
D.upcoming=(D.upcoming||[]).filter(x=>x[0]!=='Barcelona');
D.nextClubFixture={date:'2031-01-26',opponent:'Bologna',competition:'Serie A',venue:'Home',status:'scheduled'};
const current=D.season203031||(D.season203031={});
Object.assign(current,{
 updated:'22 January 2031 · Napoli 2–0 Barcelona, UCL 17 points in 7; Rossetti away on short-term loan',
 competitiveGamesConfirmed:32,competitiveWins:26,competitiveDraws:5,competitiveLosses:1,competitiveGoalsFor:78,competitiveGoalsAgainst:25,
 statsVerifiedThrough:'Napoli 2–0 Barcelona · Champions League · 22 January 2031',
 championsLeague:{played:7,wins:5,draws:2,losses:0,points:17,goalsFor:16,goalsAgainst:5,goalDifference:11,position:null,positionReason:'Final league-phase standings yet to be determined'},
 nextClubOpponent:'Bologna',nextClubCompetition:'Serie A',nextClubDate:'2031-01-26',nextClubFixture:D.nextClubFixture,
 latestTransfer:'Edoardo Rossetti, 19, moved out on short-term loan after scoring his first two Napoli goals against Sassuolo; Geertruida previously joined Real Madrid and Hermansen signed.',
 latestSquadNews:'Napoli 2–0 Barcelona: Beier 13′ from Pio, Pio 36′ from Beier; xG 1.6 Napoli and 1.7 Barcelona, shots 6–6, on target 5–2 Napoli. Rossetti, 19, has moved out on a short-term loan after scoring two against Sassuolo.'
});
D.seasonState={...(D.seasonState||{}),ucl:{stage:'League phase',played:7,w:5,d:2,l:0,points:17,gf:16,ga:5,gd:11,status:'2030–31 Champions League: seven played, 17 points, unbeaten, Dynamo Kyiv away on 29 January; current league-phase ranking unverified.'}};
D.latestClubEuropeanMatch={competition:'Champions League',date:'2031-01-22',opponent:'Barcelona',score:'2–0',pointsAfter:17,playedAfter:7,goalsForAfter:16,goalsAgainstAfter:5};
D.statsScope='Napoli club 2030–31 after Barcelona 2–0: Pio 32G11A, Beier 21G24A, Neves 0G3A, Rossetti 2G0A (now on short-term loan). All Napoli club 32P26W5D1L GF78GA25; Serie A 21P17W3D1L 54pts unchanged; Italy separate.';
const rows=D.statsBySeason?.['2030–31'];
if(rows){
 for(const [name,g,a,note] of [
 ['Maximilian Beier',1,1,'Barcelona 22 Jan 2031 UCL: goal 13′ from Pio and official assist Pio goal 36′'],
 ['Pio Esposito',1,1,'Barcelona 22 Jan 2031 UCL: official assist for Beier 13′; goal 36′ from Beier']
 ]){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]?row[3]+' | ':'')+note}
 rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));D.stats=rows;D.statsCurrentSeason='2030–31';
 const sum=new Map();for(const [year,items]of Object.entries(D.statsBySeason))for(const [raw,g,a]of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sum.get(name)||{g:0,a:0,seasons:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.seasons.add(year);sum.set(name,p)}
 const career=[...sum].map(([n,v])=>[n,v.g,v.a,[...v.seasons].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);
}
const ros=(D.squadPublic?.Midfielders||[]).find(x=>x[0]==='E. Rossetti'||x[0]==='Edoardo Rossetti');
if(ros)ros[3]='On short-term loan. Age 19, last known 80 OVR; first Napoli brace vs Sassuolo on 15 January 2031 (48′ from Beier, 63′ from Neves). Club totals remain 2 goals, 0 assists.';
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="2030–31"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const refresh=()=>{if((controls.querySelector('.filter-pill.active')?.dataset.statsView||'2030–31')==='2030–31'){
if(desc)desc.textContent='Napoli club 2030–31: Pio 32G11A, Beier 21G24A, Neves 0G3A, Rossetti 2G0A (loan).';
if(notice)notice.textContent='Latest Napoli 2–0 Barcelona (UCL); Napoli UCL 17 points / 7, Serie A 54 points / 21. Italy separate.';}};controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const lead=stories[0],strap='CHAMPIONS LEAGUE · NAPOLI 2–0 BARCELONA · BEIER AND PIO EXCHANGE GOALS';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['NAPOLI 2–0 BARCELONA · BEIER 13′ FROM PIO · PIO 36′ FROM BEIER','UCL: 17 POINTS / 7 · UNBEATEN · 16 GF 5 GA','NAPOLI 5 OF 6 SHOTS ON TARGET · BARCELONA 2 OF 6','ROSSETTI, 19, MOVES OUT ON SHORT-TERM LOAN','NEXT BOLOGNA HOME · THEN DYNAMO KYIV AWAY'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['EUROPEAN NIGHT','Napoli beat Barcelona 2–0 at home; Beier 13′ from Pio, Pio 36′ from Beier, clean sheet.'],['PRECISION OVER VOLUME','Six shots each, 5–2 Napoli advantage on target; Barça edged xG 1.7–1.6.'],['TWENTY-ONE AND TWENTY-FOUR','Beier has 21 Napoli goals and 24 assists; Pio 32 goals and 11 assists in 2030–31 club games.'],['ROSSETTI GOES ON LOAN','The 19-year-old is away on a short-term loan after scoring his first two Napoli goals against Sassuolo.'],['WHAT COMES NEXT','Napoli unbeaten with 17 points from seven Champions League matches; Bologna at home next, then Dynamo Kyiv.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI · SERIE A 54 POINTS / 21</strong><span>17 W · 3 D · 1 L · 48 GF · 16 GA · +32</span></div><div><strong>UCL: 17 POINTS / 7 · UNBEATEN</strong><span>5 W · 2 D · 0 L · 16 GF · 5 GA · +11</span></div>';
const last=$('latestResult');if(last)last.innerHTML='<div class="latest-score"><span>NAP</span><strong>2–0</strong><span>BAR</span></div><p>CHAMPIONS LEAGUE · BEIER 13′ (PIO) · PIO 36′ (BEIER) · SHOTS 6–6 · ON TARGET 5–2 · xG 1.6–1.7</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='CHAMPIONS LEAGUE · NAPOLI 2–0 BARCELONA · 17 POINTS / 7';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli 2–0 Barcelona in the Champions League: Beier and Pio trade goals and assists; shots 6–6, on target 5–2. Rossetti goes out on short-term loan.');
})();
