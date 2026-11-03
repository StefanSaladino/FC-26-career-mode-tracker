/* Napoli 4–1 Real Betis · 5 Nov 2030 · full time, confirmed UEFA Champions League match, Beier 3G, Moore 1G1A, Pio 2A and McTominay 1A. */
(()=>{'use strict';const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31';
const match={date:'2030-11-05',team:'Napoli',opponent:'Real Betis',venue:'Home',competition:'Champions League',status:'completed',score:'4–1',teamCleanSheet:false,events:[
{minute:9,team:'Real Betis',scorer:'Marcos Leonardo',assist:null,finish:'Rebound; preceding shot and mechanism unknown'},
{minute:15,team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito'},
{minute:55,team:'Napoli',scorer:'Maximilian Beier',assist:'Mikey Moore',detail:'Slotting home a Moore through ball'},
{minute:70,team:'Napoli',scorer:'Mikey Moore',assist:'Pio Esposito'},
{minute:75,team:'Napoli',scorer:'Maximilian Beier',assist:'Scott McTominay',detail:'McTominay through ball from behind halfway; Beier runs through alone and scores'}
],notes:'Napoli 4–1 Real Betis at home in UCL. Half-time 1–1. Beier hat-trick (15′ Pio, 55′ Moore, 75′ McTominay), Moore 70′ (Pio); Marcos Leonardo rebound 9′. No confirmed Napoli keeper or other unreported events.'};
const sched=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const previous=sched.find(x=>x.team==='Napoli'&&x.opponent==='Real Betis'&&x.date===match.date);
if(previous)Object.assign(previous,match);else sched.push(match);
D.upcoming=sched.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Real Betis'&&x[2]==='Champions League'&&String(x[6]).includes('05 Nov 2030')))
D.results.push(['Napoli','Real Betis','Champions League',4,1,'W','05 Nov 2030 · Home','Marcos Leonardo (Betis) 9′ rebound; Beier 15′ (Pio), 55′ (Moore), 75′ (McTominay from behind halfway); Moore 70′ (Pio). Beier hat-trick.']);
D.latestResult=['NAPOLI','4–1','REAL BETIS','Champions League · 5 November 2030 · Beier 15′, 55′, 75′ · Moore 70′'];
D.season203031={...(D.season203031||{}),updated:'5 November 2030 · Napoli 4–1 Real Betis · UCL full time',competitiveGamesConfirmed:15,competitiveWins:12,competitiveDraws:2,competitiveLosses:1,competitiveGoalsFor:34,competitiveGoalsAgainst:9,statsVerifiedThrough:'Napoli 4–1 Real Betis · UCL · 5 November 2030',
serieA:{played:10,wins:8,draws:1,losses:1,points:25,goalsFor:21,goalsAgainst:5,goalDifference:16},
championsLeague:{played:4,wins:3,draws:1,losses:0,points:10,goalsFor:11,goalsAgainst:3,goalDifference:8},
nextClubOpponent:'Torino',nextClubCompetition:'Serie A',nextClubDate:'2030-11-09'};
D.seasonState={...(D.seasonState||{}),league:{played:10,w:8,d:1,l:1,points:25,goalsFor:21,goalsAgainst:5,goalDifference:16,remaining:28,status:'Napoli 25 points from ten Serie A matches: eight wins, a draw and one defeat to Venezia.'}};
D.nextClubFixture={date:'2030-11-09',opponent:'Torino',competition:'Serie A',venue:'Home'};
D.statsScope='Napoli competitive club matches ONLY through Real Betis 5 November 2030: Pio Esposito 14G6A, Maximilian Beier 12G9A, Mikey Moore 4G4A, Anton Stach 1G3A, Giacomo Raspadori 2G1A, McTominay 0G1A. Italy international statistics excluded.';
const rows=D.statsBySeason?.[season];
if(rows){
for(const [name,g,a,note] of [
 ['Maximilian Beier',3,0,'UCL Betis 5 Nov: hat-trick 15′ (Pio), 55′ (Moore), 75′ (McTominay)'],
 ['Mikey Moore',1,1,'UCL Betis 5 Nov: 55′ through-ball assist for Beier; 70′ goal assisted by Pio; contributions in four of last five Napoli fixtures'],
 ['Pio Esposito',0,2,'UCL Betis 5 Nov: assists for Beier equaliser 15′ and Moore goal 70′; no personal goal'],
 ['Scott McTominay',0,1,'UCL Betis 5 Nov: 75′ official assist, through ball from behind halfway for Beier hat-trick']
 ]){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}
 row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;
 row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;
}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
D.stats=rows;D.statsCurrentSeason=season;
const sums=new Map();for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){
 const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};
 p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p)}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){
 const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
 const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
 if(desc)desc.textContent=view===season?'Napoli club totals through Betis: Beier 12G9A, Pio 14G6A, Moore 4G4A, McTominay 0G1A, Stach 1G3A. Italy excluded.':'Napoli club statistics for '+(view==='career'?'recorded career':view)+'.';
 if(notice)notice.textContent=view===season?'Betis 4–1: Beier hat-trick; Moore 1G1A, Pio two assists, McTominay 75′ assist. Italy excluded.':'Napoli club records only; Italy excluded.';};
 controls.addEventListener('click',refresh);if(tab)tab.click();refresh();
}
const ids=['napoli-betis-four-one-beier-hattrick-ucl-nov5-2030','beier-three-goals-three-passes-betis-feature-nov2030','pio-moore-betis-two-creators-nov2030','mctominay-halfway-assist-midfield-betis-nov2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Betis stories missing');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='CHAMPIONS LEAGUE · NAPOLI 4–1 REAL BETIS';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['NAPOLI 4–1 REAL BETIS · BEIER HAT-TRICK 15′ 55′ 75′','BETIS MARCOS LEONARDO 9′ · NAPOLI SCORE FOUR UNANSWERED','PIO TWO ASSISTS · MOORE A GOAL AND ASSIST · McTOMINAY 75′ ASSIST','NAPOLI UEFA CHAMPIONS LEAGUE · FOUR MATCHES · TEN POINTS','SERIE A · 25 POINTS AFTER TEN · EIGHT WINS ONE DRAW ONE DEFEAT','JOÃO NEVES RECOVERING FROM BROKEN TOE · THREE MONTHS EXPECTED','NEXT · TORINO AT NAPOLI · 9 NOVEMBER · SERIE A'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['BEIER HAT-TRICK','Three goals against Betis, supplied by Pio, Moore and McTominay.'],['MOORE RISING','An assist for Beier and a goal from Pio in another important European display.'],['PIO PROVIDES','Two assists against Betis, taking his Napoli club return to 14 goals and six assists.'],['MIDFIELD QUESTION','With Neves out, McTominay offers one answer: a long through-ball assist from behind halfway.'],['EUROPEAN FORM','Ten points from four UCL fixtures; unbeaten in Europe despite the Venezia league defeat.'],['NEXT: TORINO','Napoli return to Serie A at home on 9 November.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI 4–1 REAL BETIS · BEIER HAT-TRICK</strong><span>Beier 15′, 55′, 75′ · Moore 70′ · Marcos Leonardo 9′</span></div><div><strong>UEFA CHAMPIONS LEAGUE · 10 POINTS</strong><span>4 played · 3 wins · 1 draw · 11 goals scored, 3 conceded</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>4–1</strong><span>BET</span></div><p>CHAMPIONS LEAGUE · 05 NOV 2030 · BEIER HAT-TRICK · MOORE 70′</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='NAPOLI 4–1 REAL BETIS · BEIER HAT-TRICK · TORINO NEXT';
})();
