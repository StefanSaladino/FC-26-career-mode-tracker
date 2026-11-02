/* Napoli win 3-1 at Lecce, 26 October 2030; Serie A MD8, full-time. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const season='2030–31';
const match={date:'2030-10-26',team:'Napoli',opponent:'Lecce',venue:'Away',competition:'Serie A',status:'completed',score:'3–1',rotatedSquad:true,events:[
{minute:25,team:'Lecce',scorer:'Lozano',assist:null,detail:'Jetten unforced giveaway'},
{minute:36,team:'Napoli',scorer:'Mikey Moore',assist:'Anton Stach'},
{minute:41,team:'Napoli',scorer:'Anton Stach',assist:null,detail:'Rebound from Mikey Moore shot; official assist not established'},
{minute:59,team:'Napoli',scorer:'Giacomo Raspadori',assist:'Anton Stach'}],
notes:'Lecce 1–3 Napoli · Lozano 25′ after Jetten giveaway · Moore 36′ (Stach) · Stach 41′ rebound from Moore shot · Raspadori 59′ (Stach). Rotated squad win; Stach 1G2A. No extra Moore assist awarded.'};
const s=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const existing=s.find(x=>x.date===match.date&&x.team==='Napoli');
if(existing)Object.assign(existing,match);else s.push(match);
const nextConfirmed=[
['2030-11-02','Napoli','Venezia','Away','Serie A'],['2030-11-05','Napoli','Real Betis','Home','Champions League'],
['2030-11-09','Napoli','Torino','Home','Serie A'],['2030-11-19','Italy','Denmark','Home','International'],
['2030-11-23','Napoli','Cagliari','Away','Serie A'],['2030-11-26','Napoli','Manchester City','Away','Champions League'],
['2030-12-01','Napoli','Juventus','Home','Serie A'],['2030-12-07','Napoli','Pisa','Away','Serie A'],
['2030-12-11','Napoli','RB Leipzig','Away','Champions League'],['2030-12-14','Napoli','Sampdoria','Home','Serie A'],
['2030-12-18','Napoli','Pescara','Home','Cup'],['2030-12-21','Napoli','Parma','Away','Serie A'],
['2030-12-28','Napoli','Udinese','Home','Serie A']];
for(const [date,team,opponent,venue,competition] of nextConfirmed){
 const found=s.find(x=>x.date===date&&x.team===team);
 if(found){if(found.status==='scheduled')Object.assign(found,{opponent,venue,competition});}
 else s.push({date,team,opponent,venue,competition,status:'scheduled'});
}
D.upcoming=s.filter(x=>x.status==='scheduled').sort((a,b)=>a.date.localeCompare(b.date)).map(x=>[
x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,
x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue
]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Lecce'&&x[2]==='Serie A'&&String(x[6]).includes('26 Oct 2030')))
 D.results.push(['Napoli','Lecce','Serie A',3,1,'W','26 Oct 2030 · Away','Lozano 25′ (Lecce; Jetten error); Moore 36′ (Stach); Stach 41′ (rebound on Moore shot); Raspadori 59′ (Stach). Stach 1G2A.']);
D.latestResult=['NAPOLI','3–1','LECCE','Serie A · 26 October 2030 · Away · Moore 36′, Stach 41′, Raspadori 59′'];
D.season203031={...(D.season203031||{}),
 updated:'26 October 2030 · Lecce 1–3 Napoli · full time',competitiveGamesConfirmed:12,competitiveWins:10,
 competitiveDraws:2,competitiveGoalsFor:28,competitiveGoalsAgainst:7,
 statsVerifiedThrough:'Lecce 1–3 Napoli · Serie A · 26 October 2030',
 serieA:{played:8,wins:7,draws:1,losses:0,points:22,goalsFor:19,goalsAgainst:4,goalDifference:15},
 nextClubOpponent:'Roma',nextClubCompetition:'Serie A',nextClubDate:'2030-10-30'};
D.seasonState={...(D.seasonState||{}),league:{played:8,w:7,d:1,l:0,points:22,goalsFor:19,goalsAgainst:4,goalDifference:15,remaining:30,status:'Napoli unbeaten in eight Serie A matches: seven wins, one draw and 22 points; 19 scored, four conceded.'}};
D.nextClubFixture={date:'2030-10-30',opponent:'Roma',competition:'Serie A',venue:'Home'};
const rows=D.statsBySeason?.[season];
if(rows){
 for(const [name,g,a,note] of [
 ['Mikey Moore',1,0,'Lecce 26 Oct: equaliser 36′ from Stach; shot led to Stach rebound goal at 41′ (no official assist credited)'],
 ['Anton Stach',1,2,'Lecce 26 Oct: assists Moore 36′ and Raspadori 59′; scores rebound 41′ from Moore shot'],
 ['Giacomo Raspadori',1,0,'Lecce 26 Oct: scores 59′ from Stach']
 ]){
 let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}
 row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;
 row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;
 }
 rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
 D.stats=rows;D.statsCurrentSeason=season;
 const sums=new Map();
 for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){
 const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};
 p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p);
 }
 const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
 if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
D.statsScope='Napoli competitive club matches ONLY through Lecce on 26 October 2030: Pio Esposito 13G3A, Maximilian Beier 8G9A, Mikey Moore 3G2A, Anton Stach 1G3A, Giacomo Raspadori 2G1A. Italy statistics separate.';
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){
 const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
 const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
 if(desc)desc.textContent=view===season?'Napoli club totals through Lecce 26 October: Pio 13G3A, Beier 8G9A, Moore 3G2A, Stach 1G3A, Raspadori 2G1A. Italy excluded.':'Napoli club statistics for '+(view==='career'?'recorded career':view)+'.';
 if(notice)notice.textContent=view===season?'Lecce 1–3: Stach one goal and two assists; Moore and Raspadori score. Italy excluded.':'Napoli club records only; Italy excluded.';
 };controls.addEventListener('click',refresh);if(tab)tab.click();refresh();
}
const ids=['lecce-napoli-one-three-rotated-comeback-oct26-2030','stach-moore-raspadori-lecce-squad-depth-oct2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(x=>x.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Lecce articles missing');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(x=>!used.has(x.id))];
const lead=priority[0],strap='SERIE A · LECCE 1–3 NAPOLI';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['LECCE 1–3 NAPOLI · MOORE 36′ · STACH 41′ · RASPADORI 59′','ANTON STACH · ONE GOAL AND TWO ASSISTS · ROTATED XI DELIVERS','NAPOLI SERIE A · 22 POINTS FROM EIGHT · SEVEN WINS, ONE DRAW','NAPOLI 12 COMPETITIVE MATCHES UNBEATEN · TEN WINS, TWO DRAWS','MOORE SCORES IN CONSECUTIVE MATCHES · CELTIC AND LECCE','UP NEXT · ROMA AT NAPOLI · 30 OCTOBER · SERIE A','NOVEMBER · REAL BETIS HOME · MAN CITY AWAY IN CHAMPIONS LEAGUE'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['STACH MASTERCLASS','One goal and two assists for Stach in the 3–1 win away to Lecce.'],
['MOORE ON THE UP','Moore equalised in Lecce and scored four days after his goal against Celtic.'],
['ROTATION REWARDED','The rotated Napoli side overturned a 25th-minute deficit with three unanswered goals.'],
['ROMA NEXT','Napoli host Roma on 30 October; Venezia, Betis and Torino follow in November.'],
['NOVEMBER EUROPE','Napoli host Real Betis on 5 November and visit Manchester City on 26 November.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>LECCE 1–3 NAPOLI · COMEBACK WIN</strong><span>Moore 36′ · Stach 41′ · Raspadori 59′ · Stach 1 goal and 2 assists</span></div><div><strong>SERIE A · STILL UNBEATEN</strong><span>8 played · 7 wins, one draw · 22 points · 19 for, 4 conceded</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>LEC</span><strong>1–3</strong><span>NAP</span></div><p>SERIE A · 26 OCT 2030 · LOZANO 25′ · MOORE 36′ · STACH 41′ · RASPADORI 59′</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='LECCE 1–3 NAPOLI · STACH 1 GOAL, 2 ASSISTS · UNBEATEN';
})();
