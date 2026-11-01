/* Napoli 2030–31: manager-confirmed Milan league opener after UEFA Super Cup. Previous stats/history remain. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const season='2030–31',date='2030-08-25';
const match={date,team:'Napoli',opponent:'AC Milan',venue:'Home',competition:'Serie A',status:'completed',score:'1–1',events:[{minute:42,team:'AC Milan',scorer:'Michaud',assist:null},{minute:53,team:'Napoli',scorer:'Pio Esposito',assist:'Nico Paz'}],keeper:{name:'Epolo',saves:6,conceded:1,cleanSheet:false}};
D.season203031={...(D.season203031||{}),updated:'25 August 2030 · manager-confirmed Serie A opener',competitiveGamesConfirmed:2,competitiveWins:1,competitiveDraws:1,competitiveGoalsFor:3,competitiveGoalsAgainst:2,statsVerifiedThrough:'Napoli 1–1 AC Milan · Serie A · 25 August 2030',friendlyGoalsExcluded:true,serieA:{played:1,wins:0,draws:1,losses:0,goalsFor:1,goalsAgainst:1,points:1},goalkeeper:{Epolo:{serieAAppearancesConfirmed:1,saves:6,goalsConceded:1,cleanSheets:0,source:'Manager-confirmed Napoli 1–1 Milan · 25 August 2030'}}};
D.seasonState={...(D.seasonState||{}),league:{played:1,w:0,d:1,l:0,points:1,goalsFor:1,goalsAgainst:1,remaining:37,status:'2030–31: Napoli 1–1 AC Milan · 25 August; next Como away 1 September'}};
D.keeperStats203031={...(D.keeperStats203031||{}),Epolo:{played:1,saves:6,goalsConceded:1,cleanSheets:0,lastMatch:'Napoli 1–1 AC Milan · 25 August 2030',source:'Manager-confirmed six saves, Milan 1 goal'}};
D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const existing=D.schedule203031.find(x=>x.team==='Napoli'&&x.opponent==='AC Milan'&&x.date===date);
if(existing)Object.assign(existing,match);else D.schedule203031.push(match);
D.upcoming=D.schedule203031.filter(x=>x.status==='scheduled').map(x=>[x.opponent,x.team==='Italy'?'Italy · International':x.competition,x.date.slice(8,10)+' '+(x.date.slice(5,7)==='08'?'Aug':'Sep')+' 2030 · '+x.venue]);
D.results=D.results||[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='AC Milan'&&x[2]==='Serie A'&&x[6]?.includes('25 Aug 2030'))){
 D.results.push(['Napoli','AC Milan','Serie A',1,1,'D','25 Aug 2030 · Home','Michaud 42\' (Milan); Pio Esposito 53\' (Nico Paz assist); Epolo 6 saves']);
}
D.latestResult=['Napoli','1–1','AC Milan','Serie A · 25 August 2030 · Pio 53\' (Paz) · Michaud 42\' · Epolo six saves'];
const rows=D.statsBySeason?.[season];
if(rows){
 // Every page load starts from the kickoff script's 1G Pio baseline; apply only the verified Milan events.
 for(const [name,g,a,detail] of [['Pio Esposito',1,0,'Milan 25 Aug: goal 53\' from Nico Paz'],['Nico Paz',0,1,'Milan 25 Aug: assist for Pio 53\'']]){
  let r=rows.find(x=>x[0]===name);
  if(!r){r=[name,0,0,''];rows.push(r)}
  r[1]=(Number(r[1])||0)+g;r[2]=(Number(r[2])||0)+a;
  r[3]=(r[3]&&!r[3].startsWith('0 confirmed')?r[3]+' | ':'')+detail+' · Verified 2030–31 competitive club';
 }
 rows.sort((a,b)=>(Number(b[1])||0)-(Number(a[1])||0)||(Number(b[2])||0)-(Number(a[2])||0));
 D.stats=rows;
 const sums=new Map();
 for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){
  const n=raw==='Francesco Pio Esposito'?'Pio Esposito':raw;
  const item=sums.get(n)||{g:0,a:0,years:new Set()};item.g+=Number(g)||0;item.a+=Number(a)||0;item.years.add(year);sums.set(n,item);
 }
 const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
 if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
D.statsScope='2030–31 verified Napoli competitive club totals: Super Cup + Milan opener. Pio 2 goals (Tottenham, Milan); Beier 1 goal; Olise 1 assist; Nico Paz 1 assist. Epolo six saves, one conceded against Milan. Atlético friendly and Italy matches excluded.';
const stats=$('stats'),controls=stats?.querySelector('.stats-filters');
if(controls){
 const current=controls.querySelector('[data-stats-view="'+season+'"]');
 const description=stats.querySelector('.section-head p');
 const feature=stats.querySelector('.stats-feature');
 let note=$('keeperStats203031');
 if(!note&&feature){note=document.createElement('div');note.id='keeperStats203031';note.setAttribute('role','note');note.style.cssText='margin:0 0 18px;padding:13px 16px;border-left:3px solid currentColor;line-height:1.6';feature.prepend(note);}
 if(note)note.textContent='2030–31 GOALKEEPER · Epolo: 1 confirmed Serie A appearance · 6 saves · 1 conceded · 0 clean sheets (Milan, 25 August). No other appearances or save totals supplied.';
 const sync=()=>{
  const active=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
  if(note)note.hidden=active!==season;
  if(description)description.textContent=active===season?'2030–31 competitive Napoli club totals: UEFA Super Cup and 25 August Milan opener. Pio 2 goals; Beier 1; Olise and Paz 1 assist each. Friendly and Italy matches excluded.':active==='career'?'Napoli Career: recorded Napoli club goals and assists across archived seasons, some incomplete. International stats excluded.':'Archived Napoli club totals for '+active+'. Historical records may be incomplete; the new season starts in a separate tab.';
  const existingNotice=$('statsVerificationNotice');
  if(existingNotice)existingNotice.textContent=active===season?'2029–30 totals retained as archive. 2030–31: Spurs Super Cup 2–1; Milan league 1–1. Pio 2G, Beier 1G, Olise 1A, Paz 1A. Epolo 6 saves against Milan.':'Viewing '+(active==='career'?'recorded Napoli career':'archived '+active)+' totals. Italy international figures excluded.';
 };
 controls.addEventListener('click',sync);
 if(current)current.click();sync();
}
const latest=$('latestResult');
if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>1–1</strong><span>MIL</span></div><p>SERIE A · 25 AUG 2030 · MICHAUD 42\' · PIO 53\' (PAZ) · EPOLO 6 SAVES</p>';
const matchList=$('matchesList');
if(matchList){
 const mid='napoli-milan-seriea-aug25-2030';matchList.querySelector('[data-match-id="'+mid+'"]')?.remove();
 const card=document.createElement('div');card.className='match-card';card.dataset.matchId=mid;
 card.innerHTML='<div class="result-badge D">D</div><div class="match-main"><span>SERIE A · 25 AUGUST 2030 · FT</span><strong>Napoli <b>1–1</b> AC Milan</strong><p>Michaud 42\'; Pio Esposito 53\' (Nico Paz assist) · Epolo 6 saves</p></div>';matchList.prepend(card);
}
const next=$('nextTwo');
if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');
if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const ids=['napoli-milan-one-one-aug25-2030-pio-paz-epolo','napoli-epolo-six-saves-milan-first-appearance-aug2030'];
const selected=new Set(ids),priority=ids.map(id=>D.articles?.find(x=>x.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Milan opener newsroom stories missing');return;}
D.articles=[...priority,...D.articles.filter(a=>!selected.has(a.id))];
D.hero={...(D.hero||{}),articleId:ids[0],strap:'SERIE A 2030–31 · NAPOLI 1–1 AC MILAN · EPOLO 6 SAVES'};
const lead=priority[0],hero=$('heroStory');
if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(D.hero.strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full match report →</span></div>';
const top=$('topStories');
if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
const lines=[
 'NAPOLI 1–1 AC MILAN · SERIE A OPENER · 25 AUGUST 2030',
 'MICHAUD 42\' · PIO ESPOSITO 53\' (NICO PAZ ASSIST)',
 'EPOLO FIRST CONFIRMED NAPOLI APPEARANCE · SIX SAVES AGAINST MILAN',
 'SERIE A · 1 PLAYED · 1 DRAW · 1 POINT',
 '2030–31 STATS · PIO 2 GOALS · BEIER 1 GOAL · OLISE 1 ASSIST · PAZ 1 ASSIST',
 'NAPOLI UEFA SUPER CUP WINNERS · 2–1 TOTTENHAM · AUGUST 14',
 'NEXT · COMO AWAY · 1 SEPTEMBER 2030',
 'ITALY · UKRAINE 6 SEP AWAY · HUNGARY 10 SEP HOME'];
D.ticker=lines;const tick=$('tickerTrack');if(tick)tick.innerHTML=[...lines,...lines].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[
 ['THE LEAGUE OPENER','Michaud 42\' for Milan, Pio 53\' from Paz for Napoli. Full time 1–1.'],
 ['EPOLO IN GOAL','The new 25-year-old goalkeeper made six saves against Milan; one goal conceded.'],
 ['PIO FINDS THE NET','Pio has two verified 2030–31 competitive Napoli goals, one in the Super Cup and one against Milan.'],
 ['THE LEAGUE TABLE','Napoli open with 0W 1D 0L, 1 goal for, 1 against and 1 point.'],
 ['THE NEXT TEST','Como away on 1 September; then Italy face Ukraine away and Hungary at home.']
];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');
if(form)form.innerHTML='<div><strong>SERIE A · 1 POINT</strong><span>Napoli 1–1 Milan · Michaud 42\', Pio 53\' (Paz)</span></div><div><strong>SUPER CUP WINNERS</strong><span>Napoli 2–1 Tottenham · new campaign trophy</span></div>';
const header=document.querySelector('.header-status span:last-child');
if(header)header.textContent='2030–31 · SERIE A 1/38 · NAPOLI 1–1 MILAN';
})();
