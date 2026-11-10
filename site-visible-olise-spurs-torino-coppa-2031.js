/* Live state overlay after agreed $197.9m summer Olise-to-Spurs transfer and Torino 2–5 Napoli Coppa Italia AET. Source only; index.html is generated. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const ids=['olise-spurs-1979m-summer-sale-agreed-2031','torino-napoli-five-two-aet-beier-hat-trick-coppa2031','beier-torino-three-goals-one-assist-2031','olise-final-napoli-stretch-estevao-2031','bellandi-torino-defence-while-beier-runs-riot-2031'],head=ids.map(x=>(D.articles||[]).find(a=>a.id===x));
if(head.some(x=>!x)){console.error('Olise/Torino newsroom article not loaded; refusing current state overlay');return;}
D.articles=[...head,...(D.articles||[]).filter(a=>!ids.includes(a.id))];
const lead=head[0];
D.oliseTottenhamAgreement={player:'Michael Olise',buyer:'Tottenham Hotspur',fee:197900000,currency:'$',status:'Sold / transfer agreement completed',effective:'Opening of summer 2031 transfer window',currentClub:'Napoli until summer',eligibleForNapoli:true,saleDateExact:null,contractTermsAtSpurs:null,managerPressQuotes:null};
D.agreedFutureDepartures={...(D.agreedFutureDepartures||{}),'Michael Olise':{destination:'Tottenham Hotspur',status:'Agreed; future effective date',transferFee:197900000,currency:'$',window:'Summer 2031',remainsCurrentNapoliPlayer:true}};
const attackers=D.squadPublic?.Attackers;
if(Array.isArray(attackers)){const o=attackers.find(x=>x[0]==='Michael Olise');if(o)o[3]='Summer transfer to Tottenham agreed for $197.9m · still at Napoli until window opens';}
D.torinoCoppa2031={competition:'Coppa Italia',opponent:'Torino',score:'Torino 2–5 Napoli',halfTime:'1–1',regulation:'2–2',final:'2–5 AET',date:null,venue:null,stage:null,events:[
{minute:24,team:'Torino',scorer:'Silva',assist:null},
{minute:'45+1',team:'Napoli',scorer:'Maximilian Beier',assist:'Estêvão',assistOfficial:true},
{minute:65,team:'Napoli',scorer:'Maximilian Beier',assist:'Mikey Moore',assistOfficial:true},
{minute:74,team:'Torino',scorer:'Ciammaglichella',assist:null},
{minute:96,team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito',assistOfficial:true},
{minute:101,team:'Napoli',scorer:'Pio Esposito',assist:'Michael Olise',assistOfficial:true},
{minute:120,team:'Napoli',scorer:'Nico Paz',assist:'Maximilian Beier',assistOfficial:true}
],napoliAdvanced:true,afterExtraTime:true};
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Torino'&&x[2]==='Coppa Italia'&&x[3]===5&&x[4]===2&&String(x[6]).includes('2031')))
 D.results.push(['Napoli','Torino','Coppa Italia',5,2,'W','2031 · After extra time','Torino 2–5 Napoli AET. Silva 24′; Beier 45+1′ (Estêvão), 65′ (Moore); Ciammaglichella 74′; Beier 96′ (Pio); Pio 101′ (Olise); Nico Paz 120′ (Beier). 2–2 after 90.']);
const calendar=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
if(!calendar.some(x=>x.team==='Napoli'&&x.opponent==='Torino'&&x.competition==='Coppa Italia'&&x.score==='5–2'))
 calendar.push({team:'Napoli',opponent:'Torino',date:null,venue:null,competition:'Coppa Italia',status:'completed',score:'5–2',afterExtraTime:true,events:D.torinoCoppa2031.events,notes:'Torino 2–5 Napoli after extra time; 2–2 after 90. Beier hat-trick and assist.'});
D.latestResult=['Torino','2–5','Napoli','Coppa Italia · After extra time · Beier hat-trick'];
D.nextClubFixture=null;D.upcoming=[];
const rows=D.statsBySeason?.['2030–31'];
if(rows){
 for(const [name,g,a,note] of [
 ['Maximilian Beier',3,1,'Torino Coppa Italia AET: 45+1′ (Estêvão), 65′ (Moore), 96′ (Pio), official assist Nico Paz 120′'],
 ['Pio Esposito',1,1,'Torino Coppa Italia AET: official assist Beier 96′; goal 101′ from Olise'],
 ['Nico Paz',1,0,'Torino Coppa Italia AET: goal 120′ from Beier'],
 ['Estêvão',0,1,'Torino Coppa Italia AET: official assist Beier 45+1′'],
 ['Mikey Moore',0,1,'Torino Coppa Italia AET: official assist Beier 65′'],
 ['Michael Olise',0,1,'Torino Coppa Italia AET: official assist Pio 101′; transfer agreement to Spurs takes effect summer']
 ]){let row=rows.find(x=>x[0]===name||(name==='Pio Esposito'&&x[0]==='Francesco Pio Esposito'));if(!row){row=[name,0,0,''];rows.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]?row[3]+' | ':'')+note;}
 rows.sort((a,b)=>(Number(b[1])||0)-(Number(a[1])||0)||(Number(b[2])||0)-(Number(a[2])||0)||a[0].localeCompare(b[0]));
 D.stats=rows;D.statsCurrentSeason='2030–31';
 const totals=new Map();for(const [yr,list]of Object.entries(D.statsBySeason))for(const [raw,g,a]of list){const n=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=totals.get(n)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(yr);totals.set(n,p)}
 const career=[...totals].map(([n,v])=>[n,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);
}
D.season203031={...(D.season203031||{}),updated:'2030–31 · Torino 2–5 Napoli AET Coppa Italia; $197.9m Olise sale agreed to Spurs for summer',competitiveGamesConfirmed:36,competitiveWins:30,competitiveDraws:5,competitiveLosses:1,competitiveGoalsFor:89,competitiveGoalsAgainst:27,reportedClubGamesThroughTorino:36,statsVerifiedThrough:'Torino 2–5 Napoli AET, Coppa Italia; Fiorentina competition unassigned',latestTransfer:'Olise sale to Tottenham agreed for $197.9m; he remains a Napoli player and will join Spurs when summer 2031 transfer window opens',latestContract:'Olise $197.9m summer transfer agreement with Tottenham confirmed; available for Napoli until move takes effect',latestSquadNews:'Napoli beat Torino 5–2 after extra time in Coppa Italia. Beier hat-trick and assist; Pio goal and assist; Paz goal; Olise assisted Pio. Olise transfer to Tottenham for $197.9m is agreed effective summer window; he remains at Napoli.',nextClubOpponent:null,nextClubCompetition:null,nextClubDate:null,nextClubFixture:null};
D.statsScope='Napoli 2030–31 club stats through Torino 5–2 AET: Beier 27G26A, Pio 33G14A, Moore 6G7A, Estêvão 1G1A, Olise 1G8A, Nico Paz 2G4A; international Italy matches excluded. Napoli reported competitive club totals through Torino: 36P30W5D1L 89GF27GA, Fiorentina competition classification pending. Serie A most recently classified 22P 57pts, UCL league phase final 8P20pts second unbeaten.';
D.seasonState={...(D.seasonState||{}),ucl:{stage:'League phase complete · direct round of 16',played:8,w:6,d:2,l:0,points:20,gf:18,ga:5,gd:13,position:2,status:'Second and undefeated'},league:{played:22,w:18,d:3,l:1,points:57,goalsFor:49,goalsAgainst:16,goalDifference:33,remaining:16,position:null,status:'Serie A latest classified through Bologna, Fiorentina match not yet assigned competition'}};
const controls=$('stats')?.querySelector('.stats-filters');if(controls){const refresh=()=>{if((controls.querySelector('.filter-pill.active')?.dataset.statsView||'2030–31')==='2030–31'){const desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');if(desc)desc.textContent='Napoli club 2030–31: Beier 27G26A, Pio 33G14A, Olise 1G8A, Estêvão 1G1A, Nico Paz 2G4A.';if(notice)notice.textContent='Torino 2–5 Napoli AET in Coppa Italia. Club stats through Torino; Italy excluded. UCL 20 points, second; Serie A last classified 57 points.'}};controls.addEventListener('click',refresh);const tab=controls.querySelector('[data-stats-view="2030–31"]');if(tab)tab.click();refresh()}
const strap='OLISE TO TOTTENHAM · $197.9M AGREED · SUMMER TRANSFER';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the story →</span></div>';
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['OLISE TO TOTTENHAM · $197.9M AGREED · SUMMER WINDOW','OLISE REMAINS WITH NAPOLI THROUGH THE CURRENT SEASON','TORINO 2–5 NAPOLI AET · BEIER HAT-TRICK · COPPA ITALIA','BEIER 27 GOALS & 26 ASSISTS · 53 NAPOLI GOAL CONTRIBUTIONS','NAPOLI SECOND AND UNBEATEN IN UCL LEAGUE PHASE · 20 POINTS'];const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['SUMMER DEAL AGREED','Michael Olise to Tottenham Hotspur for $197.9m when the summer window opens. Until then he stays with Napoli.'],['BEIER’S FOUR CONTRIBUTIONS','Three goals and one official assist against Torino take Beier to 27G26A this Napoli club season.'],['EXTRA-TIME TURNAROUND','Torino drew level twice; Napoli scored at 96′, 101′ and 120′ for a 5–2 Coppa Italia win after extra time.'],['ESTÊVÃO ON THE BOARD','The new $167.5m signing scored against Fiorentina and assisted Beier against Torino.'],['EUROPE WAITS','Napoli finish the Champions League league phase unbeaten and second, entering the round of 16 directly.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>LATEST: TORINO 2–5 NAPOLI AET</strong><span>Coppa Italia · 2–2 after 90 · Beier hat-trick, Pio and Paz</span></div><div><strong>CHAMPIONS LEAGUE · SECOND / UNBEATEN</strong><span>8 played · 6 wins · 2 draws · 20 points · 18 GF / 5 GA</span></div>';
const last=$('latestResult');if(last)last.innerHTML='<div class="latest-score"><span>TOR</span><strong>2–5</strong><span>NAP</span></div><p>COPPA ITALIA · AFTER EXTRA TIME · BEIER HAT-TRICK, PIO &amp; PAZ</p>';
const next=$('nextTwo');if(next)next.innerHTML='<div class="next-row"><strong>Next fixture</strong><span>Schedule to follow</span></div>';
const strip=$('upcomingStrip');if(strip)strip.innerHTML='<div class="fixture"><span>Upcoming</span><strong>Next fixture</strong><small>Schedule to follow</small></div>';
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='OLISE TO SPURS $197.9M · TORINO 2–5 NAPOLI AET';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Olise to Tottenham Hotspur: $197.9 million deal agreed for the summer window, while Napoli beat Torino 5–2 after extra time in Coppa Italia behind a Beier hat-trick.');
})();
