/* Napoli 1–0 Bologna · Serie A home · 26 January 2031 · Raspadori 83′ (Beier assist). */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const leadId='napoli-bologna-one-nil-raspadori-beier-83-jan2031';
const lead=(D.articles||[]).find(s=>s.id===leadId);
if(!lead){console.error('Bologna match report missing; no current-state overlay applied');return;}
D.articles=[lead,...(D.articles||[]).filter(s=>s.id!==leadId)];
const events=[{minute:83,team:'Napoli',scorer:'Giacomo Raspadori',assist:'Maximilian Beier',assistOfficial:true}];
D.bolognaJanuary2031={date:'2031-01-26',competition:'Serie A',venue:'Home',home:'Napoli',away:'Bologna',score:'1–0',events,cleanSheet:true};
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Bologna'&&x[2]==='Serie A'&&x[3]===1&&x[4]===0&&String(x[6]).includes('2031')))
D.results.push(['Napoli','Bologna','Serie A',1,0,'W','26 Jan 2031 · Home','Giacomo Raspadori 83′, official assist Maximilian Beier; 1–0 full time. Clean sheet.']);
const calendar=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
let fixture=calendar.find(x=>x.date==='2031-01-26'&&x.team==='Napoli'&&x.opponent==='Bologna');
if(!fixture){fixture={date:'2031-01-26',team:'Napoli',opponent:'Bologna',venue:'Home',competition:'Serie A'};calendar.push(fixture);}
Object.assign(fixture,{status:'completed',score:'1–0',events,cleanSheet:true,notes:'Napoli 1–0 Bologna full time; Raspadori scored at 83′ on official Beier assist. No other goals or match statistics established.'});
D.latestResult=['Napoli','1–0','Bologna','Serie A · 26 January 2031 · Raspadori 83′ (Beier assist)'];
D.upcoming=(D.upcoming||[]).filter(x=>x[0]!=='Bologna');
D.nextClubFixture={date:'2031-01-29',opponent:'Dynamo Kyiv',competition:'Champions League',venue:'Away',status:'scheduled'};
D.season203031={...(D.season203031||{}),
 updated:'26 January 2031 · Napoli 1–0 Bologna, Giacomo Raspadori 83′ from Beier; 57 Serie A points / 22',
 competitiveGamesConfirmed:33,competitiveWins:27,competitiveDraws:5,competitiveLosses:1,competitiveGoalsFor:79,competitiveGoalsAgainst:25,
 statsVerifiedThrough:'Napoli 1–0 Bologna · Serie A · 26 January 2031',
 serieA:{played:22,wins:18,draws:3,losses:1,points:57,goalsFor:49,goalsAgainst:16,goalDifference:33,position:null,positionReason:'Current rival fixtures not included in confirmed standings'},
 nextClubOpponent:'Dynamo Kyiv',nextClubCompetition:'Champions League',nextClubDate:'2031-01-29',nextClubFixture:D.nextClubFixture,
 titleRace:{napoliPoints:57,napoliPlayed:22,napoliPosition:null,otherClubsLatestKnown:{milanoFC:{points:48,played:19},roma:{points:47,played:20},lombardiaFC:{points:45,played:20}},rivalTotalsNotUpdated:true},
 latestSquadNews:'Napoli beat Bologna 1–0 at home, Giacomo Raspadori 83′, Maximilian Beier official assist; team clean sheet. Raspadori 6 Napoli club goals, Beier 25 assists. Rossetti, 19, remains away on short-term loan.'
};
D.seasonState={...(D.seasonState||{}),league:{played:22,w:18,d:3,l:1,points:57,goalsFor:49,goalsAgainst:16,goalDifference:33,remaining:16,position:null,status:'Napoli 57 points after 22 league games; exact ranking awaits refreshed rival match results.'}};
D.serieAStandingsAfterBolognaNapoliOnly={updated:'26 January 2031',verifiedNapoli:['SSC Napoli',22,18,3,1,49,16,33,57],fullTablePositionUnknown:true,priorRivalSnapshotStale:true};
const rows=D.statsBySeason?.['2030–31'];
if(rows){
 for(const [name,g,a,note]of [
 ['Giacomo Raspadori',1,0,'Bologna 26 Jan 2031: match winner 83′, official assist Maximilian Beier'],
 ['Maximilian Beier',0,1,'Bologna 26 Jan 2031: official assist for Raspadori 83′ match winner']
 ]){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]?row[3]+' | ':'')+note;}
 rows.sort((a,b)=>(Number(b[1])||0)-(Number(a[1])||0)||(Number(b[2])||0)-(Number(a[2])||0)||a[0].localeCompare(b[0]));
 D.stats=rows;D.statsCurrentSeason='2030–31';
 const totals=new Map();
 for(const [yr,items]of Object.entries(D.statsBySeason))for(const [raw,g,a]of items){const n=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=totals.get(n)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(yr);totals.set(n,p);}
 const career=[...totals].map(([n,v])=>[n,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);
}
D.statsScope='Napoli club 2030–31 through Bologna 1–0 (26 Jan): Pio 32G11A, Beier 21G25A, Raspadori 6G3A, Neves 0G3A, Rossetti 2G0A (on loan). All Napoli club 33P27W5D1L 79GF25GA; Serie A 22P18W3D1L 57pts; UCL 7P17pts unchanged; Italy separate.';
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="2030–31"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const refresh=()=>{if((controls.querySelector('.filter-pill.active')?.dataset.statsView||'2030–31')==='2030–31'){
 if(desc)desc.textContent='Napoli club 2030–31: Pio 32G11A, Beier 21G25A, Raspadori 6G3A, Rossetti 2G0A (loan).';
 if(notice)notice.textContent='Napoli 1–0 Bologna. Serie A 57 points in 22 matches; UCL 17 points in seven. Napoli club stats only; Italy separate.';}};
 controls.addEventListener('click',refresh);if(tab)tab.click();refresh();
}
const strap='SERIE A · NAPOLI 1–0 BOLOGNA · RASPADORI 83′ FROM BEIER';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['NAPOLI 1–0 BOLOGNA · RASPADORI 83′ · BEIER ASSIST','NAPOLI 57 SERIE A POINTS / 22 MATCHES · FOUR STRAIGHT LEAGUE WINS','BEIER 21 GOALS · 25 ASSISTS THIS NAPOLI CLUB SEASON','RASPADORI SIXTH CLUB GOAL · ANOTHER TEAM CLEAN SHEET','DYNAMO KYIV AWAY · CHAMPIONS LEAGUE 29 JANUARY'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['THE 83RD MINUTE','Raspadori broke a 0–0 deadlock at 83′, finishing from Beier for a 1–0 win.'],['BEIER THE PROVIDER','The decisive pass raised Maximilian Beier to 25 assists in Napoli club competitions this season.'],['TITLE RACE POINTS','Napoli 57 points from 22 Serie A matches: 18 wins, 3 draws, 1 defeat, goal difference +33.'],['ANOTHER CLEAN SHEET','Bologna were held scoreless. Napoli have conceded 16 goals in 22 Serie A matches.'],['DYNAMO NEXT','The Champions League league phase continues at Dynamo Kyiv on 29 January; Napoli have 17 points from seven games.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI · SERIE A 57 POINTS / 22</strong><span>18 W · 3 D · 1 L · 49 GF · 16 GA · +33</span></div><div><strong>LATEST: NAPOLI 1–0 BOLOGNA</strong><span>Raspadori 83′ · Beier assist · Clean sheet</span></div>';
const last=$('latestResult');if(last)last.innerHTML='<div class="latest-score"><span>NAP</span><strong>1–0</strong><span>BOL</span></div><p>SERIE A · RASPADORI 83′ (BEIER ASSIST)</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='SERIE A · NAPOLI 1–0 BOLOGNA · 57 POINTS / 22';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli 1–0 Bologna: Giacomo Raspadori scores the winner at 83 minutes from Beier assist. Napoli move to 57 Serie A points in 22 matches.');
})();
