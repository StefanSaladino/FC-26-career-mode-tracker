/* New season 2030–31: preserve past archives; track Super Cup scoring and actual summer calendar only. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const season='2030–31';
D.meta=D.meta||{};D.meta.season=season+' · UEFA Super Cup winners';
D.seasonState={...(D.seasonState||{}),league:{played:0,w:0,d:0,l:0,points:0,goalsFor:0,goalsAgainst:0,remaining:38,status:'2030–31 Serie A: league opener vs AC Milan, 25 August 2030; no league matches played'}};
D.season203031={updated:'August 2030 · manager calendar screenshots',season,competitiveGamesConfirmed:1,competitiveWins:1,competitiveGoalsFor:2,competitiveGoalsAgainst:1,statsVerifiedThrough:'Napoli 2–1 Spurs · UEFA Super Cup · 14 August 2030',friendliesExcludedFromStats:true};
const scorers={'Maximilian Beier':[1,0],'Pio Esposito':[1,0],'Michael Olise':[0,1]};
const members=[...new Set(Object.values(D.squadPublic||{}).flat().map(r=>r[0]))];
D.statsBySeason=D.statsBySeason||{};
D.statsBySeason[season]=members.map(n=>[n,...(scorers[n]||[0,0]),scorers[n]?'Confirmed competitive Napoli 2030–31 contribution · UEFA Super Cup vs Tottenham 14 Aug':'0 confirmed competitive goals/assists so far · appearances not verified']).sort((a,b)=>b[1]-a[1]||b[2]-a[2]||a[0].localeCompare(b[0]));
for(const [name,totals]of Object.entries(scorers))if(!members.includes(name))D.statsBySeason[season].push([name,...totals,'Verified UEFA Super Cup contribution; not in present senior squad census']);
D.statsSeasonOrder=D.statsSeasonOrder||[];
if(!D.statsSeasonOrder.includes(season))D.statsSeasonOrder.unshift(season);
D.statsCurrentSeason=season;D.stats=D.statsBySeason[season];
// Keep the career view correct by aggregating the verified season archives, including this first competitive result.
const sums=new Map();for(const [year,rows] of Object.entries(D.statsBySeason))for(const [rawName,goals,assists]of rows){const n=rawName==='Francesco Pio Esposito'?'Pio Esposito':rawName;const v=sums.get(n)||{goals:0,assists:0,seasons:new Set()};v.goals+=Number(goals)||0;v.assists+=Number(assists)||0;v.seasons.add(year);sums.set(n,v)}
const career=[...sums].map(([name,v])=>[name,v.goals,v.assists,[...v.seasons].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
D.statsScope='Napoli 2030–31 competitive club totals: Super Cup only, 14 August 2030. Beier 1 goal; Pio Esposito 1 penalty goal; Olise 1 assist. The Atlético friendly is excluded. Zero rows indicate no further verified contributions, not confirmed appearances; Italy international stats remain separate.';
const statsSection=$('stats'),controls=statsSection?.querySelector('.stats-filters');
if(controls){
 let tab=controls.querySelector('[data-stats-view="'+season+'"]');
 if(!tab){tab=document.createElement('button');tab.type='button';tab.className='filter-pill';tab.dataset.statsView=season;tab.textContent=season;controls.prepend(tab)}
 const caption=statsSection.querySelector('.section-head p');
 const notice=$('statsVerificationNotice');
 const sync=()=>{
  const active=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
  if(caption)caption.textContent=active===season?'2030–31 competitive Napoli club goals and assists. Verified Super Cup: Beier and Pio scored; Olise assisted. Atlético friendly and Italy matches excluded. Unreported appearances are not invented.':active==='career'?'Recorded Napoli club goals and assists by career. Earlier seasons contain partial historical archives; Italy internationals are excluded.':'Archived Napoli club production for '+active+'. Older seasons may contain partial records; they have not been reset by the new campaign.';
  if(notice)notice.textContent=active===season?'2030–31: UEFA Super Cup vs Spurs (14 August) only · Beier 1 goal, Pio 1 goal, Olise 1 assist. Atlético preseason 3–0 excluded. Player appearances unverified.':active==='career'?'Career aggregate is based on available Napoli club season records only, some of which are incomplete. International stats excluded.':'Viewing archival '+active+' season records. New-season Super Cup contributions are stored separately in 2030–31.';
 };
 controls.addEventListener('click',sync);
 tab.click();sync();
}
D.schedule203031=[
 {date:'2030-08-03',team:'Napoli',opponent:'Atlético Madrid',venue:'Home/Away unconfirmed',competition:'Friendly',status:'completed',score:'3–0',scorers:null},
 {date:'2030-08-14',team:'Napoli',opponent:'Tottenham Hotspur',venue:'Venue unconfirmed',competition:'UEFA Super Cup',status:'completed',score:'2–1',scorers:['Gonzalo 12\' (Spurs)','Beier 31\' (Olise)','Pio Esposito 74\' (penalty)']},
 {date:'2030-08-25',team:'Napoli',opponent:'AC Milan',venue:'Home',competition:'Serie A',status:'scheduled'},
 {date:'2030-09-01',team:'Napoli',opponent:'Como',venue:'Away',competition:'Serie A',status:'scheduled'},
 {date:'2030-09-06',team:'Italy',opponent:'Ukraine',venue:'Away',competition:'International',status:'scheduled'},
 {date:'2030-09-10',team:'Italy',opponent:'Hungary',venue:'Home',competition:'International',status:'scheduled'},
 {date:'2030-09-13',team:'Napoli',opponent:'Fiorentina',venue:'Home',competition:'Serie A',status:'scheduled'},
 {date:'2030-09-21',team:'Napoli',opponent:'Bologna',venue:'Away',competition:'Serie A',status:'scheduled'},
 {date:'2030-09-28',team:'Napoli',opponent:'Inter',venue:'Home',competition:'Serie A',status:'scheduled',verification:'Manager identifies Inter next from updated September calendar'}
];
D.upcoming=D.schedule203031.filter(x=>x.status==='scheduled').map(x=>[x.opponent,x.team==='Italy'?'Italy · International':x.competition,x.date.slice(8,10)+' '+(x.date.slice(5,7)==='08'?'Aug':'Sep')+' 2030 · '+x.venue]);
D.results=D.results||[];
const results=[['Napoli','Atlético Madrid','Friendly',3,0,'W','3 Aug 2030 · Preseason','Calendar screenshot confirms 3–0; individual scorers not confirmed'],['Napoli','Tottenham Hotspur','UEFA Super Cup',2,1,'W','14 Aug 2030 · FT','Gonzalo 12\' · Beier 31\' (Olise assist) · Pio 74\' penalty · Napoli champions']];
for(const r of results)if(!D.results.some(x=>x[0]===r[0]&&x[1]===r[1]&&x[2]===r[2]&&Number(x[3])===r[3]&&Number(x[4])===r[4]))D.results.push(r);
D.latestResult=['Napoli','2–1','Tottenham','UEFA Super Cup · 14 August 2030 · Beier 31\' (Olise), Pio 74\' pen · Napoli champions'];
const list=$('matchesList');if(list){
 for(const r of results){const matchId=r[2]==='Friendly'?'napoli-atletico-friendly-aug2030':'napoli-spurs-supercup-aug2030';list.querySelector('[data-match-id="'+matchId+'"]')?.remove();const card=document.createElement('div');card.className='match-card';card.dataset.matchId=matchId;card.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>'+esc(r[2]+' · '+r[6])+'</span><strong>'+esc(r[0])+' <b>'+r[3]+'–'+r[4]+'</b> '+esc(r[1])+'</strong><p>'+esc(r[7])+'</p></div>';list.prepend(card)}
}
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>2–1</strong><span>TOT</span></div><p>14 AUG · UEFA SUPER CUP · BEIER 31\' (OLISE), PIO 74\' PEN · NAPOLI WIN</p>';
const nextTwo=$('nextTwo');if(nextTwo)nextTwo.innerHTML=D.upcoming.filter(x=>x[1].startsWith('Serie A')).slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const up=$('upcomingStrip');if(up)up.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const ids=['napoli-spurs-uefa-super-cup-comeback-aug2030','napoli-meret-epolo-goalkeeper-succession-aug2030','napoli-2030-31-season-opening-calendar-aug2030'];
const stories=ids.map(id=>(D.articles||[]).find(a=>a.id===id)).filter(Boolean);
if(stories.length!==ids.length){console.error('2030–31 season-opening newsroom stories missing');return}
const priority=new Set(ids);D.articles=[...stories,...D.articles.filter(a=>!priority.has(a.id))];
D.hero={...(D.hero||{}),articleId:ids[0],strap:'2030 UEFA SUPER CUP WINNERS · 2030–31 SEASON BEGINS'};
const lead=stories[0];const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(D.hero.strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,variant)=>'<article class="article-card '+esc(variant)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
const lines=['NAPOLI 2–1 TOTTENHAM · UEFA SUPER CUP WINNERS · 14 AUGUST 2030','GONZALO 12\' · BEIER 31\' (OLISE) · PIO 74\' PEN','2030–31 STATS · BEIER 1 GOAL · PIO 1 GOAL · OLISE 1 ASSIST','MERET SOLD TO BOURNEMOUTH FOR $44.9M · EPOLO, 25 / 85 OVR / POT 89, SIGNED','BEIER STAYS AT NAPOLI · ARSENAL $485M BID REJECTED','NEXT · AC MILAN AT HOME · 25 AUGUST · SERIE A','ITALY · UKRAINE AWAY 6 SEPT · HUNGARY HOME 10 SEPT'];D.ticker=lines;
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...lines,...lines].map(t=>'<span>'+esc(t)+'</span>').join('');
D.whispers=[['EUROPEAN SILVERWARE','Napoli came from behind to beat Tottenham 2–1 in the 2030 UEFA Super Cup.'],['THE NEW NUMBERS','2030–31 Napoli competitive totals begin with Beier 1 goal, Pio 1 goal and Olise 1 assist.'],['THE GOALKEEPER HANDOVER','Meret sold to Bournemouth for $44.9m. Epolo arrives aged 25, 85 OVR with a potential estimate of 89.'],['THE $485M NO','Arsenal\'s bid for Beier was rejected. He remains at Napoli and scored against Spurs.'],['UP NEXT','Napoli host AC Milan on 25 August. Italy face Ukraine away and Hungary at home in September.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>2030 SUPER CUP WINNERS</strong><span>Napoli 2–1 Tottenham · comeback from 0–1</span></div><div><strong>2030–31 SERIE A · 0 MATCHES</strong><span>League title defence starts vs AC Milan on 25 August</span></div>';
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='2030–31 · UEFA SUPER CUP CHAMPIONS';
const eyebrow=document.querySelector('.brand-copy .eyebrow');if(eyebrow)eyebrow.textContent='FC 26 CAREER MODE · NAPOLI 2030–31';
document.title='Napoli 2030–31 — Season Room';const description=document.querySelector('meta[name="description"]');if(description)description.content='Napoli 2030–31 FC 26 Career Mode: UEFA Super Cup win over Tottenham, new season stats, transfer updates and August–September calendar.';
})();
