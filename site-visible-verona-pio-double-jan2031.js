/* Verona 1–2 Napoli, 18 January 2031. Last source overlay; never fabricates league ranks or match events. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ids=['verona-one-two-napoli-pio-beier-comeback-jan2031','pio-beier-two-goals-two-assists-verona-jan2031','napoli-54-points-early-deficits-barcelona-jan2031'];
const stories=ids.map(id=>(D.articles||[]).find(x=>x.id===id));
if(stories.some(x=>!x)){console.error('Verona articles not loaded');return}
const used=new Set(ids);
D.articles=[...stories,...D.articles.filter(x=>!used.has(x.id))];
const events=[
 {minute:27,team:'Hellas Verona',scorer:'Isaac',assist:null},
 {minute:33,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',assistOfficial:true},
 {minute:69,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',assistOfficial:true}
];
D.veronaJanuary2031={date:'2031-01-18',competition:'Serie A',venue:'Away',opponent:'Hellas Verona',score:'1–2',halfTime:'1–1',events};
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Hellas Verona'&&x[1]==='Napoli'&&x[2]==='Serie A'&&x[3]===1&&x[4]===2&&String(x[6]).includes('2031')))
D.results.push(['Hellas Verona','Napoli','Serie A',1,2,'W','18 Jan 2031 · Away','Isaac 27′ (Verona); Pio 33′ and 69′ (both officially assisted by Beier). FT 1–2 Napoli.']);
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
let fixture=schedule.find(x=>x.date==='2031-01-18'&&x.team==='Napoli'&&x.opponent==='Hellas Verona');
if(!fixture){fixture={date:'2031-01-18',team:'Napoli',opponent:'Hellas Verona',venue:'Away',competition:'Serie A'};schedule.push(fixture)}
Object.assign(fixture,{status:'completed',score:'1–2',halfTime:'1–1',events,notes:'Isaac 27′, Pio equaliser 33′ from Beier, Pio winner 69′ from Beier; Napoli 2–1 winners. No other gameplay or substitutions established.'});
D.latestResult=['Hellas Verona','1–2','Napoli','Serie A · 18 January 2031 · Isaac 27′, Pio 33′ and 69′ (both Beier assists)'];
D.upcoming=(D.upcoming||[]).filter(x=>x[0]!=='Hellas Verona'&&x[0]!=='Verona');
D.nextClubFixture={date:'2031-01-22',opponent:'Barcelona',competition:'Champions League',venue:'Home',status:'scheduled'};
D.season203031={...(D.season203031||{}),
 updated:'18 January 2031 · Hellas Verona 1–2 Napoli; Pio 33′ & 69′ both from Beier; Serie A 54pts/21',
 competitiveGamesConfirmed:31,competitiveWins:25,competitiveDraws:5,competitiveLosses:1,competitiveGoalsFor:76,competitiveGoalsAgainst:25,
 statsVerifiedThrough:'Hellas Verona 1–2 Napoli · Serie A · 18 January 2031',
 serieA:{played:21,wins:17,draws:3,losses:1,points:54,goalsFor:48,goalsAgainst:16,goalDifference:32,position:null,positionReason:'Current league rivals results not supplied'},
 nextClubOpponent:'Barcelona',nextClubCompetition:'Champions League',nextClubDate:'2031-01-22',nextClubFixture:D.nextClubFixture,
 titleRace:{napoliPoints:54,napoliPlayed:21,napoliPosition:null,otherClubsLatestKnown:{milanoFC:{points:48,played:19},roma:{points:47,played:20},lombardiaFC:{points:45,played:20}},rivalTotalsNotUpdated:true},
 latestSquadNews:'Napoli win at Verona 2–1: Pio 33′ and 69′ from Beier official assists. Pio 31 club goals; Beier 23 club assists. Rossetti 19yo first two Napoli goals against Sassuolo remain in history; no new Rossetti match contribution recorded.'};
D.seasonState={...(D.seasonState||{}),league:{played:21,w:17,d:3,l:1,points:54,goalsFor:48,goalsAgainst:16,goalDifference:32,remaining:17,position:null,status:'Napoli 54 points after 21 Serie A matches; cannot calculate current table rank from stale rival snapshot.'}};
D.serieAStandingsAfterVeronaNapoliOnly={updated:'18 January 2031',verifiedNapoli:['SSC Napoli',21,17,3,1,48,16,32,54],fullTablePositionUnknown:true,priorOtherTeamsSnapshotOutdated:true};
const year='2030–31',rows=D.statsBySeason?.[year];
if(rows){
 for(const [name,g,a,note] of [
 ['Pio Esposito',2,0,'Hellas Verona 18 Jan 2031: goals 33′ and 69′; BOTH official assists Maximilian Beier'],
 ['Maximilian Beier',0,2,'Hellas Verona 18 Jan 2031: two official assists, Pio 33′ equaliser and 69′ winner']
 ]){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]?row[3]+' | ':'')+note;}
 rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));D.stats=rows;D.statsCurrentSeason=year;
 const summary=new Map();for(const [yr,items] of Object.entries(D.statsBySeason))for(const [raw,g,a]of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=summary.get(name)||{g:0,a:0,seasons:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.seasons.add(yr);summary.set(name,p)}
 const career=[...summary].map(([n,v])=>[n,v.g,v.a,[...v.seasons].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
 if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);
}
D.statsScope='Napoli club 2030–31 after Hellas Verona 1–2 Napoli: Pio 31G10A, Beier 20G23A, Neves 0G3A, Rossetti 2G0A, Moore 5G6A. All Napoli club 31P25W5D1L GF76GA25. Italy separate.';
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+year+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||year;if(desc&&view===year)desc.textContent='Napoli club 2030–31: Pio 31G10A, Beier 20G23A, Rossetti 2G0A, Neves 0G3A.';if(notice&&view===year)notice.textContent='Latest Hellas Verona 1–2 Napoli. Napoli 54 Serie A points / 21; other clubs’ results not updated. Italy separate.';};
controls.addEventListener('click',refresh);if(tab)tab.click();refresh()}
const lead=stories[0],strap='SERIE A · VERONA 1–2 NAPOLI · PIO DOUBLE FROM BEIER DOUBLE ASSIST';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['HELLAS VERONA 1–2 NAPOLI · PIO 33′ AND 69′','BEIER ASSISTS BOTH GOALS · SEASON 20G23A','PIO REACHES 31 NAPOLI CLUB GOALS · 54 LEAGUE POINTS','THREE STRAIGHT LEAGUE WINS · BARCELONA HOME NEXT','ISAAC 27′ PUT VERONA AHEAD · SIX-MINUTE RESPONSE'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['AWAY COMEBACK','Isaac 27′ put Verona ahead; Pio equalised at 33′ and won it at 69′, both from Beier passes.'],['THE PARTNERSHIP','Pio has 31 Napoli club goals, Beier 23 assists and 20 goals this season.'],['NINE FROM FOUR','Pio has scored four against Juventus, two against Lecce, one against Sassuolo and two against Verona.'],['THREE STRAIGHT WINS','Napoli have collected nine Serie A points from Lecce, Sassuolo and Verona since Lazio 1–1.'],['BARCELONA NEXT','Napoli 54 points / 21 league matches; European action returns at home against Barcelona on 22 January.']];
const whisper=$('whisperList');if(whisper)whisper.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI · 54 POINTS / 21</strong><span>17 W · 3 D · 1 L · 48 GF · 16 GA · +32</span></div><div><strong>LATEST: VERONA 1–2 NAPOLI</strong><span>Pio 33′ and 69′ · both Beier assists</span></div>';
const last=$('latestResult');if(last)last.innerHTML='<div class="latest-score"><span>VER</span><strong>1–2</strong><span>NAP</span></div><p>SERIE A · ISAAC 27′ · PIO 33′ (BEIER), 69′ (BEIER)</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='SERIE A · VERONA 1–2 NAPOLI · 54 POINTS / 21';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli win 2–1 away at Verona: Pio Esposito scores at 33 and 69, both Beier assists. Napoli take 54 Serie A points from 21 games, Barcelona next.');
})();
