/* Atalanta 1–2 Napoli, 5 October 2030 · authoritative completed-match state */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const season='2030–31';
const match={date:'2030-10-05',team:'Napoli',opponent:'Atalanta',venue:'Away',competition:'Serie A',status:'completed',score:'2–1',events:[
{minute:8,team:'Napoli',scorer:'Maximilian Beier',assist:'Michael Olise',detail:'Olise through-ball to Beier'},
{minute:34,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',detail:'Beier plays Pio'},
{minute:72,team:'Atalanta',scorer:'Lopez',assist:null,detail:'No first name or goal play supplied'}
],notes:'Napoli 2–1 away, Beier 8′ (Olise), Pio 34′ (Beier), Lopez 72′. Full time.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const old=schedule.find(x=>x.date===match.date&&x.team==='Napoli');
if(old)Object.assign(old,match);else schedule.push(match);
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Atalanta'&&x[2]==='Serie A'&&String(x[6]).includes('5 Oct 2030')))D.results.push(['Napoli','Atalanta','Serie A',2,1,'W','5 Oct 2030 · Away','Beier 8′ (Olise through-ball), Pio Esposito 34′ (Beier), Lopez 72′ (Atalanta)']);
D.latestResult=['ATALANTA','1–2','NAPOLI','Serie A · 5 October 2030 · Beier 8′ (Olise), Pio 34′ (Beier); Lopez 72′'];
D.season203031={...(D.season203031||{}),updated:'5 October 2030 · Atalanta 1–2 Napoli · full time',competitiveGamesConfirmed:9,competitiveWins:7,competitiveDraws:2,competitiveGoalsFor:20,competitiveGoalsAgainst:5,statsVerifiedThrough:'Atalanta 1–2 Napoli · Serie A · 5 October 2030',
serieA:{played:6,wins:5,draws:1,losses:0,points:16,goalsFor:14,goalsAgainst:3,goalDifference:11},
championsLeague:{played:2,wins:1,draws:1,losses:0,points:4,goalsFor:4,goalsAgainst:1},
nextClubOpponent:'Hellas Verona',nextClubCompetition:'Serie A',nextClubDate:'2030-10-18'};
D.seasonState={...(D.seasonState||{}),league:{played:6,w:5,d:1,l:0,points:16,goalsFor:14,goalsAgainst:3,goalDifference:11,remaining:32,status:'Napoli unbeaten in six Serie A matches: five wins, one draw, 16 points, 14 scored, 3 conceded.'}};
D.nextClubFixture={date:'2030-10-18',opponent:'Hellas Verona',competition:'Serie A',venue:'Home'};
const rows=D.statsBySeason?.[season];
if(rows){
 for(const [name,g,a,note] of [
 ['Pio Esposito',1,0,'Atalanta 5 Oct: goal at 34′ assisted by Beier'],
 ['Maximilian Beier',1,1,'Atalanta 5 Oct: 8′ goal assisted by Olise; 34′ assist to Pio'],
 ['Michael Olise',0,1,'Atalanta 5 Oct: through-ball assist to Beier at 8′']
 ]){
 let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}
 row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;
 row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;
 }
 rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
 D.stats=rows;D.statsCurrentSeason=season;
 const sums=new Map();
 for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){
  const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,found=sums.get(name)||{g:0,a:0,years:new Set()};
  found.g+=Number(g)||0;found.a+=Number(a)||0;found.years.add(year);sums.set(name,found);
 }
 const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
 if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
D.statsScope='Napoli 2030–31 competitive club totals through Atalanta 1–2 Napoli on 5 October: Pio 11G3A, Beier 8G5A, Olise 2A. Italy international appearances and stats separate.';
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const update=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
if(desc)desc.textContent=view===season?'Napoli club competitive contributions through Bergamo, 5 October: Pio 11G3A; Beier 8G5A; Olise 2A.':'Napoli club stats for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'Atalanta 1–2 Napoli: Beier 8′ (Olise), Pio 34′ (Beier), Lopez 72′. Italy excluded.':'Napoli club records only; Italy excluded.';
};controls.addEventListener('click',update);if(tab)tab.click();update();}
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>ATA</span><strong>1–2</strong><span>NAP</span></div><p>SERIE A · 5 OCT 2030 · BEIER 8′ · PIO 34′ · LOPEZ 72′</p>';
const ids=['atalanta-napoli-two-one-bergamo-oct5-2030','beier-pio-bergamo-shared-language-oct2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(x=>x.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Bergamo stories missing');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(x=>!used.has(x.id))];
const lead=priority[0],strap='SERIE A · ATALANTA 1–2 NAPOLI · BERGAMO';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['ATALANTA 1–2 NAPOLI · BEIER 8′, PIO 34′ · LOPEZ 72′','NAPOLI CLAIM THREE POINTS IN BERGAMO · NINE CLUB GAMES UNBEATEN','BEIER EIGHT GOALS FIVE ASSISTS · PIO ELEVEN CLUB GOALS','MICHAEL OLISE THROUGH-BALL SETS UP EIGHTH-MINUTE OPENER','SERIE A · SIXTEEN POINTS FROM SIX MATCHES','ITALY · DENMARK AWAY 11 OCT · NORWAY HOME 15 OCT','NAPOLI NEXT · HELLAS VERONA HOME 18 OCT · CELTIC 22 OCT'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['BERGAMO WIN','Beier 8′ from Olise, Pio 34′ from Beier and Lopez 72′ for Atalanta. Napoli win 2–1.'],['PARTNERSHIP','Beier scores and creates in the same fixture: 8 goals, 5 assists in competitive club games.'],['PIO ELEVEN','Pio Esposito has 11 Napoli club goals and three assists this season.'],['ITALY NEXT','Denmark away on 11 October and Norway at home on 15 October are next on the international calendar.'],['NAPOLI HOME','The next Napoli club match is Verona at home on 18 October, followed by Celtic in Europe on 22 October.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>ATALANTA 1–2 NAPOLI · AWAY WIN</strong><span>Beier 8′ (Olise), Pio 34′ (Beier); Lopez 72′</span></div><div><strong>SERIE A · NAPOLI UNBEATEN</strong><span>6 played · 5 wins, 1 draw · 16 points · 14 scored, 3 conceded</span></div>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='ATALANTA 1–2 NAPOLI · BEIER AND PIO · UNBEATEN';
})();