/* Napoli 2–0 Roma, 30 October 2030 — confirmed full-time, Neves first-half injury withdrawal, late goals. */
(()=>{'use strict';const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const season='2030–31';
const match={date:'2030-10-30',team:'Napoli',opponent:'Roma',venue:'Home',competition:'Serie A',status:'completed',score:'2–0',teamCleanSheet:true,
 events:[{minute:87,team:'Napoli',scorer:'Pio Esposito',assist:'Mikey Moore',finish:'first-time',buildUp:'Maximilian Beier to Mikey Moore to Pio Esposito'},
 {minute:'90+1',team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito',detail:'Counterattack as Roma press, Pio through-ball to Beier'}],
 injuryIncidents:[{player:'João Neves',period:'first half',substitutedOff:true,substitutionMinute:null,diagnosis:null,estimatedAbsence:null}],
 notes:'Napoli 2–0 Roma, HT 0–0. Late pressure without final product. Pio 87′ first-time (official assist Moore; Beier build-up), Beier 90+1′ counter (official assist Pio). Neves suffered first-half injury and was taken off; severity and timing unknown.'};
const sched=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const previous=sched.find(x=>x.team==='Napoli'&&x.date===match.date);
if(previous)Object.assign(previous,match);else sched.push(match);
D.upcoming=sched.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Roma'&&x[2]==='Serie A'&&String(x[6]).includes('30 Oct 2030')))D.results.push(['Napoli','Roma','Serie A',2,0,'W','30 Oct 2030 · Home','Pio 87′ (Moore; Beier in build-up); Beier 90+1′ (Pio) on counterattack. Neves injured first half and taken off. Clean sheet.']);
D.latestResult=['NAPOLI','2–0','ROMA','Serie A · 30 October 2030 · Pio 87′ (Moore), Beier 90+1′ (Pio)'];
D.season203031={...(D.season203031||{}),updated:'30 October 2030 · Napoli 2–0 Roma · full time',competitiveGamesConfirmed:13,competitiveWins:11,competitiveDraws:2,competitiveGoalsFor:30,competitiveGoalsAgainst:7,statsVerifiedThrough:'Napoli 2–0 Roma · Serie A · 30 October 2030',
 serieA:{played:9,wins:8,draws:1,losses:0,points:25,goalsFor:21,goalsAgainst:4,goalDifference:17},
 nextClubOpponent:'Venezia',nextClubCompetition:'Serie A',nextClubDate:'2030-11-02'};
D.seasonState={...(D.seasonState||{}),league:{played:9,w:8,d:1,l:0,points:25,goalsFor:21,goalsAgainst:4,goalDifference:17,remaining:29,status:'Napoli unbeaten in nine Serie A matches: eight wins, one draw, 25 points; 21 scored, four conceded.'}};
D.nextClubFixture={date:'2030-11-02',opponent:'Venezia',competition:'Serie A',venue:'Away'};
D.nevesRomaInjury2030={date:'2030-10-30',player:'João Neves',incident:'First-half injury against Roma, substituted off',substitutionMinute:null,diagnosis:null,absenceDuration:null,returnDate:null,availability:'Unknown; no diagnosis or estimated time missed'};
const rows=D.statsBySeason?.[season];
if(rows){
 for(const [name,g,a,note] of [
 ['Pio Esposito',1,1,'Roma 30 Oct: first-time 87′ goal assisted by Moore, 90+1′ assist for Beier counter winner/second'],
 ['Maximilian Beier',1,0,'Roma 30 Oct: 90+1′ counterattack goal assisted by Pio; involved in build-up for 87′ without official assist'],
 ['Mikey Moore',0,1,'Roma 30 Oct: official assist for Pio first-time 87′ opener; three straight Napoli matches with goal contribution']
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
D.statsScope='Napoli competitive club matches ONLY through Roma on 30 October 2030: Pio Esposito 14G4A, Maximilian Beier 9G9A, Mikey Moore 3G3A, Anton Stach 1G3A, Giacomo Raspadori 2G1A. Italy statistics separate.';
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){
 const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
 const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
 if(desc)desc.textContent=view===season?'Napoli club totals through Roma 30 October: Pio 14G4A, Beier 9G9A, Moore 3G3A, Stach 1G3A, Raspadori 2G1A. Italy excluded.':'Napoli club statistics for '+(view==='career'?'recorded career':view)+'.';
 if(notice)notice.textContent=view===season?'Roma 2–0: Pio 87′ (Moore), Beier 90+1′ (Pio). Italy statistics excluded.':'Napoli club records only; Italy excluded.';};
 controls.addEventListener('click',refresh);if(tab)tab.click();refresh();
}
const ids=['napoli-roma-two-nil-pio-beier-late-oct30-2030','moore-three-straight-napoli-pio-roma-oct2030','joao-neves-roma-injury-napoli-midfield-question-oct2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Roma stories missing');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='SERIE A · NAPOLI 2–0 ROMA';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['NAPOLI 2–0 ROMA · PIO 87′ (MOORE) · BEIER 90+1′ (PIO)','PIO FIRST-TIME WINNER · LATE BEIER COUNTER SEALS IT','MOORE INVOLVED IN GOALS AGAINST CELTIC, LECCE AND ROMA','JOÃO NEVES WITHDRAWN AFTER FIRST-HALF INJURY · RETURN UNKNOWN','NAPOLI SERIE A · 25 POINTS IN NINE · EIGHT WINS, ONE DRAW','13 COMPETITIVE NAPOLI MATCHES UNBEATEN · ELEVEN WINS, TWO DRAWS','NEXT · VENEZIA AWAY 2 NOV · REAL BETIS HOME 5 NOV'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['PIO DECIDES','Esposito scores the first-time opener at 87′ and sets up Beier for the stoppage-time second.'],
 ['MOORE MOMENT','Moore assists Pio at 87′ after scoring in the previous two Napoli fixtures.'],
 ['NEVES INJURY','The midfielder left the Roma game after a first-half injury. Availability is not yet known.'],
 ['TWENTY-FIVE POINTS','Napoli remain unbeaten in Serie A after nine matches: eight wins, one draw.'],
 ['NEXT THREE','Venezia away on 2 Nov, Real Betis home UCL on 5 Nov, Torino home on 9 Nov.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI 2–0 ROMA · LATE BREAKTHROUGH</strong><span>Pio 87′ (Moore) · Beier 90+1′ (Pio) · clean sheet</span></div><div><strong>SERIE A · UNBEATEN IN NINE</strong><span>8 wins · one draw · 25 points · 21 goals for, four conceded</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>2–0</strong><span>ROM</span></div><p>SERIE A · 30 OCT 2030 · PIO 87′ (MOORE) · BEIER 90+1′ (PIO)</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='NAPOLI 2–0 ROMA · PIO 87′ · BEIER 90+1′ · 25 POINTS';
})();
