/* Napoli 3–1 Sassuolo · 15 January 2031, source-of-truth state overlay. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const $=id=>document.getElementById(id), esc=v=>String(v??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ids=['napoli-sassuolo-three-one-rossetti-brace-jan2031','edoardo-rossetti-first-napoli-brace-sassuolo-jan2031','joao-neves-two-assists-pio-rossetti-sassuolo-jan2031'];
const stories=ids.map(id=>(D.articles||[]).find(x=>x.id===id));
if(stories.some(x=>!x)){console.error('Sassuolo newsroom articles missing');return;}
const used=new Set(ids);D.articles=[...stories,...D.articles.filter(x=>!used.has(x.id))];
const events=[
 {minute:30,team:'Napoli',scorer:'Pio Esposito',assist:'João Neves',assistOfficial:true},
 {minute:48,team:'Napoli',scorer:'Edoardo Rossetti',assist:'Maximilian Beier',assistOfficial:true,detail:'Through on goal; first Napoli goal'},
 {minute:63,team:'Napoli',scorer:'Edoardo Rossetti',assist:'João Neves',assistOfficial:true,detail:'Second goal, superb finish'},
 {minute:'90+1',team:'Sassuolo',scorer:'Weiper',assist:null,detail:'Fantastic shot from edge of box, off crossbar and in'}
];
D.sassuoloJan2031={date:'2031-01-15',competition:'Serie A',home:'Napoli',away:'Sassuolo',score:'3–1',opponentPositionBefore:7,events};
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Sassuolo'&&x[2]==='Serie A'&&x[3]===3&&x[4]===1&&String(x[6]).includes('2031')))
D.results.push(['Napoli','Sassuolo','Serie A',3,1,'W','15 Jan 2031 · Home','Pio 30′ (Neves), Rossetti 48′ (Beier) and 63′ (Neves); Weiper 90+1′ off bar and in from edge of box. FT 3–1.']);
const calendar=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
let fixture=calendar.find(x=>x.date==='2031-01-15'&&x.team==='Napoli'&&x.opponent==='Sassuolo'&&x.competition==='Serie A');
if(!fixture){fixture={date:'2031-01-15',team:'Napoli',opponent:'Sassuolo',venue:'Home',competition:'Serie A'};calendar.push(fixture);}
Object.assign(fixture,{status:'completed',score:'3–1',events,notes:'Rossetti scores first two Napoli first-team goals at 48′ and 63′; Neves two official assists; Weiper tremendous 90+1′ strike. Substitutions, goalkeeper, other events not confirmed.'});
D.latestResult=['Napoli','3–1','Sassuolo','Serie A · 15 January 2031 · Pio 30′ (Neves), Rossetti 48′ (Beier), 63′ (Neves), Weiper 90+1′'];
D.upcoming=(D.upcoming||[]).filter(x=>x[0]!=='Sassuolo');
D.nextClubFixture={date:'2031-01-18',opponent:'Hellas Verona',competition:'Serie A',venue:'Away',status:'scheduled'};
D.season203031={...(D.season203031||{}),updated:'15 January 2031 · Napoli 3–1 Sassuolo; Rossetti brace; 51 Serie A points /20',
 competitiveGamesConfirmed:30,competitiveWins:24,competitiveDraws:5,competitiveLosses:1,competitiveGoalsFor:74,competitiveGoalsAgainst:24,
 statsVerifiedThrough:'Napoli 3–1 Sassuolo · Serie A · 15 January 2031',
 serieA:{played:20,wins:16,draws:3,losses:1,points:51,goalsFor:46,goalsAgainst:15,goalDifference:31,position:null,positionReason:'Current rival results and complete table not supplied'},
 nextClubOpponent:'Hellas Verona',nextClubCompetition:'Serie A',nextClubDate:'2031-01-18',nextClubFixture:D.nextClubFixture,
 titleRace:{napoliPoints:51,napoliPlayed:20,napoliPosition:null,otherClubsLatestKnown:{milanoFC:{points:48,played:19},roma:{points:47,played:20},lombardiaFC:{points:45,played:20}},rivalTotalsNotUpdated:true},
 latestSquadNews:'Edoardo Rossetti, 19, scores first Napoli goals, a brace against seventh-place Sassuolo (48′ from Beier, 63′ from Neves). João Neves records two official assists, for Pio 30′ and Rossetti 63′. No unreported substitution or new contract.'};
D.seasonState={...(D.seasonState||{}),league:{played:20,w:16,d:3,l:1,points:51,goalsFor:46,goalsAgainst:15,goalDifference:31,remaining:18,position:null,status:'Napoli 51 points after 20 games; current Serie A ranking unverified without refreshed rival results.'}};
D.serieAStandingsAfterSassuoloNapoliOnly={updated:'15 January 2031 after Sassuolo result',verifiedNapoli:['SSC Napoli',20,16,3,1,46,15,31,51],fullTablePositionUnknown:true,priorRivalsFrom:'Post-Lazio photograph; not updated for later opponent fixtures'};
const season='2030–31',rows=D.statsBySeason?.[season];
if(rows){for(const [name,g,a,note] of [
 ['Pio Esposito',1,0,'Sassuolo 15 Jan 2031: goal 30′ from João Neves'],
 ['Edoardo Rossetti',2,0,'Sassuolo 15 Jan 2031: FIRST Napoli goal 48′ from Beier; second goal 63′ from João Neves; age 19'],
 ['Maximilian Beier',0,1,'Sassuolo 15 Jan 2031: assist for Rossetti first Napoli goal 48′'],
 ['João Neves',0,2,'Sassuolo 15 Jan 2031: official assists Pio 30′ and Rossetti 63′']
 ]){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]?row[3]+' | ':'')+note;}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));D.stats=rows;D.statsCurrentSeason=season;
const sum=new Map();for(const [yr,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,entry=sum.get(name)||{goals:0,assists:0,years:new Set()};entry.goals+=Number(g)||0;entry.assists+=Number(a)||0;entry.years.add(yr);sum.set(name,entry)}
const career=[...sum].map(([n,v])=>[n,v.goals,v.assists,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);}
const mid=D.squadPublic?.Midfielders||[];
const ros=mid.find(x=>x[0]==='E. Rossetti'||x[0]==='Edoardo Rossetti');if(ros){ros[3]='19-year-old RM, returned from loan; first Napoli goals — brace against Sassuolo (48′ and 63′), 15 January 2031; last known rating 80 OVR.';}
const neves=mid.find(x=>x[0]==='João Neves');if(neves){neves[3]='Returned from broken toe injury; two assists against Sassuolo for Pio 30′ and Rossetti 63′, three Napoli club assists this season; last known rating 95 OVR.';}
D.statsScope='Napoli club 2030–31 through Sassuolo 3–1: Pio 29G10A, Beier 20G21A, Neves 0G3A, Rossetti 2G0A, Moore 5G6A. Napoli club 30P24W5D1L 74GF24GA; Italy separate.';
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;if(desc&&view===season)desc.textContent='Napoli club 2030–31: Pio 29G10A, Beier 20G21A, Rossetti 2G0A, Neves 0G3A.';if(notice&&view===season)notice.textContent='Latest Napoli 3–1 Sassuolo · 51 Serie A points from 20; full current league ranking unverified. Napoli club stats only; Italy separate.';};controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const lead=stories[0],strap='SERIE A · NAPOLI 3–1 SASSUOLO · ROSSETTI FIRST NAPOLI BRACE';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['NAPOLI 3–1 SASSUOLO · ROSSETTI FIRST NAPOLI BRACE','ROSSETTI 48′ (BEIER) · 63′ (NEVES) · AGE 19','PIO 30′ FROM NEVES · 29 NAPOLI CLUB GOALS','NEVES TWO OFFICIAL ASSISTS · WEIPER 90+1′ OFF BAR AND IN','NAPOLI 51 POINTS FROM 20 · NEXT HELLAS VERONA'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['THE BOY ARRIVES','Edoardo Rossetti, 19, scored his first two Napoli goals, fifteen minutes apart, against Sassuolo.'],['NEVES IS CREATING','Two official assists: Pio 30′, Rossetti 63′ after his return from a broken toe.'],['BEIER TO ROSSETTI','Beier played the youngster through for his first goal and reaches 21 Napoli club assists this season.'],['ONE FINE CONSOLATION','Weiper scored at 90+1′ with a spectacular effort from the edge of the box, off the bar and in.'],['THREE MORE POINTS','Napoli 51 points /20; Sassuolo beaten 3–1; Verona next before Barcelona comes to town.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI · 51 POINTS / 20</strong><span>16 W · 3 D · 1 L · 46 GF · 15 GA · +31</span></div><div><strong>LATEST: NAPOLI 3–1 SASSUOLO</strong><span>Pio 30′ · Rossetti 48′ and 63′ · Weiper 90+1′</span></div>';
const last=$('latestResult');if(last)last.innerHTML='<div class="latest-score"><span>NAP</span><strong>3–1</strong><span>SAS</span></div><p>SERIE A · PIO 30′ (NEVES) · ROSSETTI 48′ (BEIER), 63′ (NEVES) · WEIPER 90+1′</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='SERIE A · NAPOLI 3–1 SASSUOLO · 51 POINTS / 20';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli beat seventh-place Sassuolo 3–1 as Edoardo Rossetti, 19, scores his first two club goals. Neves records two assists, Pio scores his 29th.');
})();
