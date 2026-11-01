/* Early October 2030 newsroom: Toronto FC interest, Napoli 1–0 Inter, Dortmund 1–1 Napoli. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const season='2030–31',sched=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const games=[
{date:'2030-09-28',team:'Napoli',opponent:'Inter',venue:'Home',competition:'Serie A',status:'completed',score:'1–0',events:[{minute:58,scorer:'Pio Esposito',assist:'Maximilian Beier',buildUp:'Mikey Moore passes to Beier'}],notes:'Epolo keeper: 4 saves and clean sheet. Moore to Beier to Pio. Moore not the official assister.'},
{date:'2030-10-01',team:'Napoli',opponent:'Borussia Dortmund',venue:'Away',competition:'Champions League',status:'completed',score:'1–1',events:[{minute:64,scorer:'Pio Esposito',assist:'Maximilian Beier',type:'equaliser',scoreAfter:'1–1'}],notes:'Dortmund scored once before the 64th-minute Napoli equaliser. Dortmund goalscorer, minute and assist unknown.'}
];
for(const g of games){const x=sched.find(x=>x.date===g.date&&x.team===g.team);if(x)Object.assign(x,g);else sched.push(g)}
D.season203031={...(D.season203031||{}),updated:'1 October 2030 · Dortmund 1–1 Napoli; Toronto FC pursuing manager homecoming',competitiveGamesConfirmed:8,competitiveWins:6,competitiveDraws:2,competitiveGoalsFor:18,competitiveGoalsAgainst:4,statsVerifiedThrough:'Dortmund 1–1 Napoli · Champions League · 1 October 2030',serieA:{played:5,wins:4,draws:1,losses:0,points:13,goalsFor:12,goalsAgainst:2,goalDifference:10},championsLeague:{played:2,wins:1,draws:1,losses:0,points:4,goalsFor:4,goalsAgainst:1},nextClubOpponent:'Opponent to confirm',nextClubCompetition:'Serie A',nextClubDate:'2030-10-05'};
D.seasonState={...(D.seasonState||{}),league:{played:5,w:4,d:1,l:0,points:13,goalsFor:12,goalsAgainst:2,goalDifference:10,remaining:33,status:'Napoli unbeaten in Serie A through 5 games, 13 points, 12 goals for and 2 against. Napoli drew away to Dortmund on 1 October in UCL.'}};
D.managerFuture={...(D.managerFuture||{}),asOf:'Early October 2030',interest:'Toronto FC trying to lure manager Stefan Saladino home',status:'Interest only; no confirmed signed agreement, formal terms, move or manager decision'};
D.upcoming=sched.filter(x=>x.status==='scheduled').sort((a,b)=>a.date.localeCompare(b.date)).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
const newResults=[
 ['Napoli','Inter','Serie A',1,0,'W','28 Sep 2030 · Home','Pio 58′ (Beier assist; Moore in build-up). Epolo 4 saves and clean sheet.'],
 ['Napoli','Borussia Dortmund','Champions League',1,1,'D','1 Oct 2030 · Away','Pio equaliser 64′ (Beier assist). Dortmund goalscorer and time unreported.']
];
for(const row of newResults)if(!D.results.some(r=>r[0]===row[0]&&r[1]===row[1]&&r[2]===row[2]&&String(r[6]).includes(row[6].slice(0,11))))D.results.push(row);
D.latestResult=['DORTMUND','1–1','NAPOLI','UEFA Champions League · 1 October 2030 · Pio equaliser 64′ (Beier assist)'];
const rows=D.statsBySeason?.[season];
if(rows){
 for(const [name,g,a,note] of [
  ['Pio Esposito',2,0,'Inter 28 Sep: winner 58′ (Beier assist); Dortmund 1 Oct: equaliser 64′ (Beier assist)'],
  ['Maximilian Beier',0,2,'Inter 28 Sep: assist for Pio 58′; Dortmund 1 Oct: assist for Pio 64′']
 ]){
  let r=rows.find(x=>x[0]===name);if(!r){r=[name,0,0,''];rows.push(r)}
  r[1]=(Number(r[1])||0)+g;r[2]=(Number(r[2])||0)+a;
  r[3]=(r[3]&&!r[3].startsWith('0 confirmed')?r[3]+' | ':'')+note;
 }
 rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
 D.stats=rows;D.statsCurrentSeason=season;
 const sums=new Map();
 for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){
  const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw;
  const v=sums.get(name)||{g:0,a:0,years:new Set()};
  v.g+=Number(g)||0;v.a+=Number(a)||0;v.years.add(year);sums.set(name,v);
 }
 const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
 if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
D.statsScope='Napoli club competitive totals through Dortmund 1–1, 1 October 2030. Pio 10 goals / 3 assists; Beier 7 goals / 4 assists; Moore 1 goal / 2 assists. Sep 28 Inter goal official assist Beier, Moore build-up. Italy international fixtures remain excluded.';
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const update=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
 if(desc)desc.textContent=view===season?'Napoli 2030–31 competitive club statistics through Dortmund on 1 October: Pio 10G3A, Beier 7G4A, Moore 1G2A.':'Historical Napoli club statistics for '+(view==='career'?'all recorded seasons':view)+'.';
 if(notice)notice.textContent=view===season?'Inter 1–0: Pio 58′ Beier assist, Epolo 4 saves. Dortmund 1–1: Pio equaliser 64′ Beier assist. Italy excluded.':'Napoli club goals and assists only; Italy competitions excluded.';
 };controls.addEventListener('click',update);if(tab)tab.click();update();}
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>BVB</span><strong>1–1</strong><span>NAP</span></div><p>CHAMPIONS LEAGUE · 1 OCT 2030 · PIO EQUALISER 64′ · BEIER ASSIST</p>';
const ids=['toronto-fc-saladino-homecoming-interest-oct2030','napoli-inter-one-zero-epolo-pio-sep28-2030','dortmund-napoli-one-one-pio-rescue-oct2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Toronto/Inter/Dortmund newsroom articles missing',ids.filter(id=>!priority.some(a=>a.id===id)));return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='CLUB FUTURE · TORONTO FC PURSUE NAPOLI MANAGER';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full story →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
const lines=[
 'TORONTO FC TRY TO LURE SALADINO HOME · NAPOLI DYNASTY AT A CROSSROADS?',
 'NAPOLI 1–0 INTER · PIO WINNER 58′ · EPOLO FOUR SAVES AND CLEAN SHEET',
 'DORTMUND 1–1 NAPOLI · PIO EQUALISER 64′ · BEIER ASSIST',
 'NAPOLI UNBEATEN IN EIGHT COMPETITIVE CLUB MATCHES · SIX WINS TWO DRAWS',
 'SERIE A · NAPOLI THIRTEEN POINTS FROM FIVE MATCHES',
 'CHAMPIONS LEAGUE · FOUR POINTS FROM LIVERPOOL AND DORTMUND',
 'PIO TEN NAPOLI CLUB GOALS · BEIER SEVEN GOALS AND FOUR ASSISTS',
 'ITALY · DENMARK 11 OCT · NORWAY 15 OCT · CELTIC HOME 22 OCT'
];
D.ticker=lines;const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...lines,...lines].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[
 ['TORONTO CALLING','Toronto FC are trying to lure Napoli and Italy manager Stefan Saladino home. Interest is not a completed move.'],
 ['INTER WIN','Pio Esposito scored in the 58th minute, with Beier assisting after a move begun by Moore. Epolo made four saves in the 1–0 win.'],
 ['DORTMUND POINT','Pio equalised at 64′ from Beier in a 1–1 away draw. Napoli have four Champions League points from two games.'],
 ['TEN FOR PIO','Pio has reached ten competitive Napoli club goals in 2030–31; Beier has seven goals and four assists.'],
 ['NEXT LEAGUE TRIP','Napoli play away on 5 October; the opposition has not yet been identified from the fixture calendar.']
];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>EUROPE · DORTMUND 1–1 NAPOLI</strong><span>Pio 64′ (Beier) · four European points in two games</span></div><div><strong>SERIE A · NAPOLI 1–0 INTER</strong><span>Pio 58′ (Beier) · Epolo four saves · thirteen points in five league matches</span></div>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='TORONTO FC WANT SALADINO · DORTMUND 1–1 NAPOLI';
})();