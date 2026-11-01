/* Napoli 2030–31 · Fiorentina full time; Liverpool confirmed as next UCL opponent. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const season='2030–31',date='2030-09-15';
const goals=[
 {minute:9,team:'Napoli',scorer:'Maximilian Beier',assist:'Giacomo Raspadori'},
 {minute:61,team:'Fiorentina',scorer:'Piccoli',assist:null},
 {minute:66,team:'Napoli',scorer:'Mikey Moore',assist:'Pio Esposito'},
 {minute:77,team:'Napoli',scorer:'Pio Esposito',assist:'Mikey Moore'},
 {minute:88,team:'Napoli',scorer:'Pio Esposito',assist:'Mikey Moore'}
];
const match={date,team:'Napoli',opponent:'Fiorentina',venue:'Home',competition:'Serie A',status:'completed',score:'4–1',events:goals,notes:'Napoli 1–0 at 9′; Piccoli equaliser 61′; Moore and Pio combine for three late Napoli goals. Goalkeeper, formations, bookings and other actions not established.'};
D.season203031={...(D.season203031||{}),
 updated:'15 September 2030 · Napoli 4–1 Fiorentina',competitiveGamesConfirmed:4,competitiveWins:3,competitiveDraws:1,competitiveGoalsFor:11,competitiveGoalsAgainst:3,
 statsVerifiedThrough:'Napoli 4–1 Fiorentina · Serie A · 15 September 2030',
 serieA:{played:3,wins:2,draws:1,losses:0,points:7,goalsFor:9,goalsAgainst:2,goalDifference:7},
 nextClubOpponent:'Liverpool',nextClubCompetition:'UEFA Champions League'};
D.seasonState={...(D.seasonState||{}),league:{played:3,w:2,d:1,l:0,points:7,goalsFor:9,goalsAgainst:2,goalDifference:7,remaining:35,status:'2030–31: Milan 1–1; Como 4–0; Fiorentina 4–1. Next confirmed match: Liverpool · UEFA Champions League'}};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const found=schedule.find(x=>x.team==='Napoli'&&x.opponent==='Fiorentina'&&x.date===date);
if(found)Object.assign(found,match);else schedule.push(match);
D.nextEuropeanFixture={team:'Napoli',opponent:'Liverpool',competition:'UEFA Champions League',status:'scheduled',date:null,venue:null,order:'next',source:'Manager named Liverpool as next after Fiorentina FT'};
D.upcoming=[['Liverpool','UEFA Champions League','NEXT MATCH · Date and venue TBC'],...schedule.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+(x.date.slice(5,7)==='08'?'Aug':'Sep')+' 2030 · '+x.venue])];
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Fiorentina'&&x[2]==='Serie A'&&String(x[6]).includes('15 Sep 2030')))
 D.results.push(['Napoli','Fiorentina','Serie A',4,1,'W','15 Sep 2030 · Home','Beier 9′ (Raspadori), Piccoli 61′ (Fiorentina), Moore 66′ (Pio), Pio 77′ & 88′ (both Moore)']);
D.latestResult=['Napoli','4–1','Fiorentina','Serie A · 15 September 2030 · Beier 9′, Moore 66′, Pio 77′ & 88′; Piccoli 61′'];
const rows=D.statsBySeason?.[season];
if(rows){
 for(const [name,g,a,detail] of [
  ['Maximilian Beier',1,0,'Fiorentina 15 September: goal 9′ from Raspadori'],
  ['Giacomo Raspadori',0,1,'Fiorentina 15 September: assist for Beier 9′'],
  ['Mikey Moore',1,2,'Fiorentina 15 September: goal 66′ from Pio; assists for Pio 77′ and 88′'],
  ['Pio Esposito',2,1,'Fiorentina 15 September: assists Moore 66′; goals 77′ and 88′ from Moore']
 ]){
  let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}
  row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;
  row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+detail;
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
D.statsScope='Napoli 2030–31 competitive club totals through Fiorentina 4–1 on 15 September: Beier 6 goals; Pio Esposito 4 goals and 2 assists; Mikey Moore 1 goal and 2 assists; Raspadori 1 assist; Olise, Paz and Zaïre-Emery 1 assist each. Excludes Italy international fixtures and Atlético preseason friendly. Goalkeeper who played against Fiorentina unknown.';
const stats=$('stats'),controls=stats?.querySelector('.stats-filters');
if(controls){
 const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=stats.querySelector('.section-head p'),notice=$('statsVerificationNotice');
 const update=()=>{
  const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
  if(desc)desc.textContent=view===season?'2030–31 Napoli competitive goals and assists through Fiorentina (15 September): Beier 6G; Pio 4G 2A; Moore 1G 2A; Olise, Paz, Warren and Raspadori 1A each.':'Napoli recorded club statistics for '+(view==='career'?'all available seasons':view)+'.';
  if(notice)notice.textContent=view===season?'Fiorentina 4–1: Beier 9′ (Raspadori), Moore 66′ (Pio), Pio 77′ and 88′ (Moore twice). Italy national-team contributions excluded. Goalkeeper statistics retained only for confirmed appearances.':'Earlier season records retained; Italy goals and assists excluded from Napoli club totals.';
 };
 controls.addEventListener('click',update);
 if(tab)tab.click();update();
}
const latest=$('latestResult');
if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>4–1</strong><span>FIO</span></div><p>SERIE A · 15 SEP 2030 · BEIER 9′ · MOORE 66′ · PIO 77′, 88′ · PICCOLI 61′</p>';
const matches=$('matchesList');
if(matches){
 const id='napoli-fiorentina-four-one-sep15-2030';matches.querySelector('[data-match-id="'+id+'"]')?.remove();
 const card=document.createElement('div');card.className='match-card';card.dataset.matchId=id;
 card.innerHTML='<div class="result-badge W">W</div><div class="match-main"><span>SERIE A · 15 SEPTEMBER 2030 · HOME · FT</span><strong>Napoli <b>4–1</b> Fiorentina</strong><p>Beier 9′ (Raspadori); Piccoli 61′; Moore 66′ (Pio); Pio 77′ &amp; 88′ (Moore twice)</p></div>';
 matches.prepend(card);
}
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const ids=['napoli-fiorentina-four-one-pio-moore-sep15-2030','napoli-moore-pio-one-two-fiorentina-sep2030','napoli-liverpool-champions-league-return-sep2030-preview'];
const articles=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>articles.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Napoli Fiorentina/Liverpool articles missing',ids.filter(id=>!priority.some(x=>x.id===id)));return}
const keep=new Set(ids);D.articles=[...priority,...articles.filter(x=>!keep.has(x.id))];
const lead=priority[0],strap='SERIE A · NAPOLI 4–1 FIORENTINA · PIO & MOORE';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');
if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
const lines=[
 'NAPOLI 4–1 FIORENTINA · PIO ESPOSITO DOUBLE · MOORE 1 GOAL, 2 ASSISTS',
 'FIORENTINA LEVEL ON 61′ · NAPOLI SCORE AT 66′, 77′ AND 88′',
 'BEIER SCORES AGAIN · SIX COMPETITIVE CLUB GOALS IN 2030–31',
 'SERIE A · NAPOLI UNBEATEN · 7 POINTS FROM 3 MATCHES',
 'LIVERPOOL NEXT · UEFA CHAMPIONS LEAGUE · FIXTURE DATE TO FOLLOW',
 'LAST SEASON · NAPOLI ELIMINATE LIVERPOOL 4–0 ON AGGREGATE',
 'ITALY EURO QUALIFYING · 4 POINTS FROM 2 GAMES · PIO AND KEAN SCORED'
];
D.ticker=lines;const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...lines,...lines].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[
 ['PIO & MIKEY','Pio scored at 77′ and 88′, both from Moore. Moore scored at 66′ with Pio providing. Three crucial goals.'],
 ['LIVERPOOL NEXT','The Champions League brings Liverpool back. Napoli won their March 2030 round-of-16 tie 4–0 on aggregate.'],
 ['BEIER IN FORM','Beier now has six Napoli competitive goals in the new campaign, including four in one match against Como.'],
 ['SEVEN LEAGUE POINTS','Napoli beat Como and Fiorentina after drawing the opener with Milan: 3 played, 2 wins, 1 draw.'],
 ['SQUAD CONTRIBUTIONS','Raspadori assisted Beier’s ninth-minute opener against Fiorentina. Pio and Moore then settled the match.']
];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI · 4–1 FIORENTINA</strong><span>Beier 9′; Moore 66′; Pio 77′ &amp; 88′ · 7 Serie A points</span></div><div><strong>NEXT · LIVERPOOL IN EUROPE</strong><span>UEFA Champions League · date and venue not announced in the season calendar</span></div>';
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='NAPOLI 4–1 FIORENTINA · LIVERPOOL NEXT';
})();