/* Napoli 2030–31: manager-confirmed 4–0 away at Como, Beier four; no unverified assist credited. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const season='2030–31',date='2030-09-01';
const goals=[
 {minute:10,scorer:'Maximilian Beier',assist:null,detail:'Rebound after Mikey Moore blocked shot; official assist unconfirmed'},
 {minute:32,scorer:'Maximilian Beier',assist:'Pio Esposito',detail:'Pio pass; left-footed high far side, off post and in'},
 {minute:48,scorer:'Maximilian Beier',assist:'Warren Zaïre-Emery',detail:'Played in by Warren; initial shot stopped, converted own rebound'},
 {minute:71,scorer:'Maximilian Beier',assist:null,detail:'Fourth goal; finish and assist details unreported'}
];
const match={date,team:'Napoli',opponent:'Como',venue:'Away',competition:'Serie A',status:'completed',score:'4–0',events:goals,notes:'Beier 85\' hit the post; manager substituted several unspecified starters but kept Beier on. Team clean sheet; goalkeeper who played not confirmed.'};
D.season203031={...(D.season203031||{}),updated:'1 September 2030 · Como away final 4–0',competitiveGamesConfirmed:3,competitiveWins:2,competitiveDraws:1,competitiveGoalsFor:7,competitiveGoalsAgainst:2,statsVerifiedThrough:'Como 0–4 Napoli · Serie A · 1 September 2030',serieA:{played:2,wins:1,draws:1,losses:0,points:4,goalsFor:5,goalsAgainst:1,goalDifference:4},nextClubOpponent:'Fiorentina',assistClarification:'Manager confirms Pio supplied the second-goal assist at minute 32, not first goal at minute 10'};
D.seasonState={...(D.seasonState||{}),league:{played:2,w:1,d:1,l:0,points:4,goalsFor:5,goalsAgainst:1,remaining:36,status:'2030–31: Napoli 1–1 Milan; Como 0–4 Napoli. Next Fiorentina home 15 September'}};
D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const scheduled=D.schedule203031.find(x=>x.date===date&&x.team==='Napoli'&&x.opponent==='Como');
if(scheduled)Object.assign(scheduled,match);else D.schedule203031.push(match);
D.upcoming=D.schedule203031.filter(x=>x.status==='scheduled').map(x=>[x.opponent,x.team==='Italy'?'Italy · International':x.competition,x.date.slice(8,10)+' '+(x.date.slice(5,7)==='08'?'Aug':'Sep')+' 2030 · '+x.venue]);
D.results=D.results||[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Como'&&x[2]==='Serie A'&&x[6]?.includes('1 Sep 2030')))
 D.results.push(['Napoli','Como','Serie A',4,0,'W','1 Sep 2030 · Away','Beier 10\', 32\' (Pio assist), 48\' (Zaïre-Emery assist), 71\'; 85\' hit post · FT 4–0']);
D.latestResult=['COMO','0–4','NAPOLI','1 September 2030 · Beier 10\', 32\', 48\', 71\' · Four-goal match'];
const rows=D.statsBySeason?.[season];
if(rows){
 for(const [name,g,a,note] of [['Maximilian Beier',4,0,'Como away · goals 10\', 32\', 48\', 71\'; 85\' hit post'],['Pio Esposito',0,1,'Como away · confirmed assist to Beier at 32\'; Pio assist applies to second goal only'],['Warren Zaïre-Emery',0,1,'Como away · confirmed pass/assist to Beier at 48\'']]){
   let r=rows.find(row=>row[0]===name);if(!r){r=[name,0,0,''];rows.push(r)}
   r[1]=(Number(r[1])||0)+g;r[2]=(Number(r[2])||0)+a;
   r[3]=(r[3]&&!r[3].startsWith('0 confirmed')?r[3]+' | ':'')+note+' · Manager-confirmed Napoli competitive event';
 }
 rows.sort((a,b)=>(Number(b[1])||0)-(Number(a[1])||0)||(Number(b[2])||0)-(Number(a[2])||0)||a[0].localeCompare(b[0]));
 D.stats=rows;
 const sums=new Map();
 for(const [y,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){
  const n=raw==='Francesco Pio Esposito'?'Pio Esposito':raw;
  const v=sums.get(n)||{g:0,a:0,years:new Set()};v.g+=Number(g)||0;v.a+=Number(a)||0;v.years.add(y);sums.set(n,v);
 }
 const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
 if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
D.statsScope='Napoli 2030–31 competitive club totals through Como 0–4 Napoli (1 September): Beier 5G; Pio 2G, 1 confirmed assist; Olise, Nico Paz, Warren Zaïre-Emery each 1A. Manager clarified Pio assisted the second goal at 32\', not the first at 10\'. First and fourth assists unconfirmed. Epolo has 6 known saves at Milan; Como clean sheet is Napoli team only, GK unknown. Atlético friendly and Italy totals excluded.';
const stats=$('stats'),controls=stats?.querySelector('.stats-filters');
if(controls){
 const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=stats.querySelector('.section-head p');
 const keeper=$('keeperStats203031');
 const notice=$('statsVerificationNotice');
 const update=()=>{
  const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
  if(desc)desc.textContent=view===season?'2030–31 verified Napoli competitive stats through Como (1 September). Beier 5 goals; Pio 2 goals, 1 assist; Olise, Paz and Warren 1 assist each. Pio assisted the second goal at 32\', not the first.':view==='career'?'Napoli Career: recorded goals and assists across available club archives; historical totals may be incomplete.':'Archived Napoli club totals for '+view+'. Past seasons have not been reset.';
  if(notice)notice.textContent=view===season?'Como 0–4 Napoli: Beier 10\', 32\', 48\', 71\'; Pio confirmed assist at 32\', Warren at 48\'. First/last goal assists unconfirmed. Team clean sheet; GK not confirmed.':'Viewing '+(view==='career'?'Napoli Career records':'the archived '+view+' season')+'.';
  if(keeper)keeper.hidden=view!==season;
 };
 controls.addEventListener('click',update);if(tab)tab.click();update();
}
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>COM</span><strong>0–4</strong><span>NAP</span></div><p>SERIE A · 1 SEP 2030 · BEIER 10\', 32\', 48\', 71\' · NAPOLI WIN</p>';
const m=$('matchesList');if(m){
 const id='napoli-como-four-nil-sep1-2030';m.querySelector('[data-match-id="'+id+'"]')?.remove();
 const el=document.createElement('div');el.className='match-card';el.dataset.matchId=id;
 el.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>SERIE A · 1 SEPTEMBER 2030 · FT · AWAY</span><strong>Como <b>0–4</b> Napoli</strong><p>Beier 10\', 32\' (Pio), 48\' (Warren), 71\' · Beier hits post 85\'</p></div>';m.prepend(el);
}
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const up=$('upcomingStrip');if(up)up.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const ids=['napoli-como-zero-four-beier-four-goals-sep1-2030','napoli-beier-485m-rejection-four-goal-como-analysis-sep2030'],selected=new Set(ids),priority=ids.map(id=>D.articles?.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Como newsroom stories missing');return}
D.articles=[...priority,...D.articles.filter(x=>!selected.has(x.id))];
D.hero={...(D.hero||{}),articleId:ids[0],strap:'SERIE A · COMO 0–4 NAPOLI · BEIER FOUR GOALS'};
const lead=priority[0],hero=$('heroStory');
if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(D.hero.strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
const lines=[
 'COMO 0–4 NAPOLI · BEIER FOUR GOALS · 1 SEPTEMBER 2030',
 'BEIER 10\', 32\' (PIO), 48\' (WARREN), 71\' · HITS POST AT 85\'',
 '2030–31 CLUB STATS · BEIER 5 GOALS · PIO 2 GOALS + 1 CONFIRMED ASSIST',
 'SERIE A · NAPOLI 2 PLAYED · 1 WIN · 1 DRAW · 4 POINTS',
 'ARSENAL $485M BEIER BID REJECTED · FOUR GOALS AT COMO',
 'ITALY NEXT · UKRAINE AWAY 6 SEPT · HUNGARY HOME 10 SEPT',
 'NAPOLI NEXT · FIORENTINA HOME 15 SEPTEMBER',
 '2030 UEFA SUPER CUP · NAPOLI 2–1 TOTTENHAM · CHAMPIONS'
];
D.ticker=lines;const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...lines,...lines].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[
 ['FOUR FOR BEIER','Napoli beat Como 4–0. Beier scored at 10, 32, 48 and 71 minutes, then hit the post at 85.'],
 ['THE CREATIVE PAIR','Pio assisted the 32nd-minute finish and Warren Zaïre-Emery provided the 48th-minute chance. Pio assisted goal two, not goal one.'],
 ['THE LEAGUE RETURN','Napoli now have four Serie A points from two games, with five goals for and one against.'],
 ['THE $485M DECISION','Napoli rejected Arsenal\'s $485m bid for Beier. The striker has five confirmed competitive goals in 2030–31.'],
 ['NEXT ON THE CALENDAR','Italy play Ukraine away on 6 September and Hungary at home on 10 September; Napoli host Fiorentina on the 15th.']
];
const whisper=$('whisperList');if(whisper)whisper.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>BEIER · FOUR IN ONE GAME</strong><span>Como 0–4 Napoli · 1 September · 10\', 32\', 48\', 71\'</span></div><div><strong>SERIE A · FOUR POINTS</strong><span>Two games · one win · one draw · 5 scored · 1 conceded</span></div>';
const header=document.querySelector('.header-status span:last-child');if(header)header.textContent='2030–31 · COMO 0–4 NAPOLI · BEIER FOUR';
})();
