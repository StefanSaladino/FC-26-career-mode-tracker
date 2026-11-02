/* Napoli 3-1 Celtic, 22 October 2030 — final Champions League match state. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[ch]));
const season='2030–31';
const match={date:'2030-10-22',team:'Napoli',opponent:'Celtic',venue:'Home',competition:'Champions League',status:'completed',score:'3–1',events:[
{minute:5,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier'},
{minute:24,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier'},
{minute:36,team:'Celtic',scorer:'Kenny',assist:null},
{minute:77,team:'Napoli',scorer:'Mikey Moore',assist:'Maximilian Beier'}],
notes:'Napoli 3–1 Celtic · Pio 5′ and 24′ (both Beier), Kenny 36′ for Celtic, Moore 77′ (Beier). Beier three assists; full time.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const found=schedule.find(x=>x.date===match.date&&x.team==='Napoli');
if(found)Object.assign(found,match);else schedule.push(match);
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Celtic'&&x[2]==='Champions League'&&String(x[6]).includes('22 Oct 2030')))
D.results.push(['Napoli','Celtic','Champions League',3,1,'W','22 Oct 2030 · Home','Pio Esposito 5′ (Beier), Pio 24′ (Beier), Kenny 36′ (Celtic), Moore 77′ (Beier). Beier 3 assists.']);
D.latestResult=['NAPOLI','3–1','CELTIC','Champions League · 22 October 2030 · Pio 5′ and 24′ (Beier), Kenny 36′, Moore 77′ (Beier)'];
D.season203031={...(D.season203031||{}),updated:'22 October 2030 · Napoli 3–1 Celtic · full time',
competitiveGamesConfirmed:11,competitiveWins:9,competitiveDraws:2,competitiveGoalsFor:25,competitiveGoalsAgainst:6,
statsVerifiedThrough:'Napoli 3–1 Celtic · Champions League · 22 October 2030',
serieA:{played:7,wins:6,draws:1,losses:0,points:19,goalsFor:16,goalsAgainst:3,goalDifference:13},
championsLeague:{played:3,wins:2,draws:1,losses:0,points:7,goalsFor:7,goalsAgainst:2,goalDifference:5},
nextClubOpponent:'Lecce',nextClubCompetition:'Serie A',nextClubDate:'2030-10-26'};
D.seasonState={...(D.seasonState||{}),league:{played:7,w:6,d:1,l:0,points:19,goalsFor:16,goalsAgainst:3,goalDifference:13,remaining:31,status:'Napoli unbeaten in seven Serie A matches: six wins, one draw, 19 points. 16 scored, 3 conceded.'}};
D.nextClubFixture={date:'2030-10-26',opponent:'Lecce',competition:'Serie A',venue:'Away'};
const rows=D.statsBySeason?.[season];
if(rows){
 for(const [name,g,a,note] of [
 ['Pio Esposito',2,0,'Celtic 22 Oct UCL: scored 5′ and 24′, both assisted by Beier'],
 ['Maximilian Beier',0,3,'Celtic 22 Oct UCL: three official assists (Pio 5′, Pio 24′, Moore 77′)'],
 ['Mikey Moore',1,0,'Celtic 22 Oct UCL: scored 77′, assisted by Beier']
 ]){
 let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}
 row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;
 row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;
 }
 rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
 D.stats=rows;D.statsCurrentSeason=season;
 const totals=new Map();
 for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){
 const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,item=totals.get(name)||{g:0,a:0,years:new Set()};
 item.g+=Number(g)||0;item.a+=Number(a)||0;item.years.add(year);totals.set(name,item);
 }
 const career=[...totals].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
 if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
D.statsScope='Napoli competitive club matches ONLY through Celtic on 22 October 2030: Pio Esposito 13G3A, Maximilian Beier 8G9A, Mikey Moore 2G2A. Italy EURO qualifying stats remain separate.';
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
 const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
 if(desc)desc.textContent=view===season?'Napoli competitive club totals through Celtic 22 October: Pio 13G3A, Beier 8G9A, Moore 2G2A. Italy excluded.':'Napoli club statistics for '+(view==='career'?'recorded career':view)+'.';
 if(notice)notice.textContent=view===season?'Celtic 3–1: Pio 5′, 24′; Moore 77′; Beier three assists. Italy excluded.':'Napoli club records only; Italy excluded.';
 };controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=['napoli-celtic-three-one-beier-pio-moore-oct22-2030','beier-three-assists-pio-moore-celtic-oct2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(x=>x.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Celtic articles missing');return;}
const used=new Set(ids);D.articles=[...priority,...pool.filter(x=>!used.has(x.id))];
const lead=priority[0],strap='CHAMPIONS LEAGUE · NAPOLI 3–1 CELTIC';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['NAPOLI 3–1 CELTIC · PIO BRACE · MOORE 77′ · BEIER THREE ASSISTS','PIO 5 UCL GOALS IN THREE MATCHES · NAPOLI SEVEN EUROPEAN POINTS','NAPOLI UCL · 2W1D · 7 FOR 2 AGAINST','MAXIMILIAN BEIER 8 GOALS, 9 ASSISTS IN NAPOLI CLUB COMPETITION','NAPOLI 11 CLUB MATCHES UNBEATEN · 9 WINS, 2 DRAWS','SERIE A · 19 POINTS IN SEVEN · 6 WINS, ONE DRAW','NAPOLI NEXT · LECCE AWAY 26 OCT · ROMA HOME 30 OCT'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['BEIER TRIPLE','Three Beier assists — Pio at 5′ and 24′, Moore at 77′ — in Napoli’s 3–1 Celtic win.'],['PIO IN EUROPE','Five Champions League goals in three matches this season: two Liverpool, one Dortmund, two Celtic.'],['CHAMPIONS LEAGUE','Napoli have seven points from three UCL matches after Liverpool, Dortmund and Celtic.'],['MOORE ANSWERS','After Kenny’s 36′ Celtic reply, Moore restores a two-goal margin at 77′ from Beier.'],['LECCE NEXT','Napoli visit Lecce on 26 October, then host Roma on 30 October.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI 3–1 CELTIC · EUROPEAN WIN</strong><span>Pio 5′ and 24′ · Kenny 36′ · Moore 77′ · Beier three assists</span></div><div><strong>CHAMPIONS LEAGUE · NAPOLI UNBEATEN</strong><span>3 played · 2 wins, one draw · 7 points · 7 goals for, 2 conceded</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>3–1</strong><span>CEL</span></div><p>UCL · 22 OCT 2030 · PIO 5′, 24′ · KENNY 36′ · MOORE 77′ · BEIER 3 ASSISTS</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='NAPOLI 3–1 CELTIC · BEIER 3 ASSISTS · PIO BRACE';
})();