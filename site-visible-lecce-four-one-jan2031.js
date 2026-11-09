/* Napoli 4–1 Lecce, January 2031. Source state, not a fabricated league table. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const ids=['napoli-lecce-four-one-comeback-beier-pio-jan2031','beier-lecce-20-goals-20-assists-jan2031','nico-paz-neves-lecce-midfield-jan2031','bellandi-lecce-four-one-early-warning-jan2031'];
const stories=ids.map(id=>(D.articles||[]).find(a=>a.id===id));if(stories.some(x=>!x)){console.error('Lecce edition missing article');return;}
const used=new Set(ids);D.articles=[...stories,...D.articles.filter(a=>!used.has(a.id))];
D.lecceWinJan2031={competition:'Serie A',date:'2031-01-12',team:'Napoli',opponent:'Lecce',score:'4–1',halfTime:'1–1',venue:'Home (existing calendar)',events:[
 {minute:13,team:'Lecce',scorer:'Lozano',assist:null},
 {minute:28,team:'Napoli',scorer:'Maximilian Beier',assist:'Nico Paz'},
 {minute:51,team:'Napoli',scorer:'Nico Paz',assist:'Maximilian Beier'},
 {minute:60,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',buildup:'João Neves to Beier to Pio'},
 {minute:64,team:'Napoli',scorer:'Pio Esposito',assist:'Mikey Moore',buildup:'Beier to Moore across goalmouth to Pio'}
 ],substitutions:'Not recorded as confirmed; planned rotation discussed but players taken off not specified.'};
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Lecce'&&x[2]==='Serie A'&&x[3]===4&&x[4]===1&&String(x[6]).includes('2031')))
D.results.push(['Napoli','Lecce','Serie A',4,1,'W','12 Jan 2031 · Home','Lozano 13′; Beier 28′ (Paz); Paz 51′ (Beier); Pio 60′ (Beier; Neves in buildup); Pio 64′ (Moore; Beier preceding pass). FT 4–1.']);
D.latestResult=['Napoli','4–1','Lecce','Serie A · 12 January 2031 · Beier 28′, Paz 51′, Pio 60′ & 64′'];
const s=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const fixture=s.find(x=>x.date==='2031-01-12'&&x.team==='Napoli'&&x.opponent==='Lecce'&&x.competition==='Serie A');
if(fixture){fixture.status='completed';fixture.score='4–1';fixture.events=D.lecceWinJan2031.events;fixture.notes='Napoli recover from Lozano 13′ to win 4–1; substitutions not confirmed.'}
else s.push({date:'2031-01-12',team:'Napoli',opponent:'Lecce',competition:'Serie A',venue:'Home',status:'completed',score:'4–1',events:D.lecceWinJan2031.events});
D.upcoming=s.filter(x=>x.team==='Napoli'&&x.status==='scheduled'&&x.date>'2031-01-12').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[x.opponent,x.competition,x.date.slice(8,10)+' '+({'01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'May','06':'Jun','07':'Jul','08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' '+x.date.slice(0,4)+' · '+x.venue]);
D.nextClubFixture={date:'2031-01-15',opponent:'Sassuolo',competition:'Serie A',venue:'Home',status:'scheduled',opponentConfirmed:true};
D.season203031={...(D.season203031||{}),updated:'January 2031 · Napoli 4–1 Lecce; 48 Serie A points / 19 games',competitiveGamesConfirmed:29,competitiveWins:23,competitiveDraws:5,competitiveLosses:1,competitiveGoalsFor:71,competitiveGoalsAgainst:23,statsVerifiedThrough:'Napoli 4–1 Lecce · Serie A · 12 January 2031',serieA:{played:19,wins:15,draws:3,losses:1,points:48,goalsFor:43,goalsAgainst:14,goalDifference:29,position:null,positionReason:'Rival fixtures not yet updated from previous photographed table'},nextClubOpponent:'Sassuolo',nextClubCompetition:'Serie A',nextClubDate:'2031-01-15',nextClubFixture:{date:'2031-01-15',opponent:'Sassuolo',competition:'Serie A',venue:'Home',status:'scheduled'},titleRace:{napoliPoints:48,napoliPlayed:19,napoliPosition:null,otherClubsLatestKnown:{milanoFC:{points:48,played:19},roma:{points:47,played:20},lombardiaFC:{points:45,played:20}},rivalTotalsNotUpdated:true},latestSquadNews:'João Neves took part in the buildup for Pio’s 60′ goal against Lecce following broken-toe injury. First comeback appearance is not independently established.'};
D.seasonState={...(D.seasonState||{}),league:{played:19,w:15,d:3,l:1,points:48,goalsFor:43,goalsAgainst:14,goalDifference:29,remaining:19,position:null,status:'Napoli 48 points after 19 games; league rank depends on updated rival results.'},ucl:{stage:'League phase',played:6,w:4,d:2,l:0,points:14,gf:14,ga:5,gd:9,status:'2030–31 Champions League: six played, 14 points, remaining January league-phase games scheduled.'}};
D.serieAStandingsAfterLecceNapoliOnly={updated:'12 January 2031 after Lecce victory',verifiedNapoli:['SSC Napoli',19,15,3,1,43,14,29,48],fullTablePositionUnknown:true,priorRivalSnapshot:'Post-Lazio screenshot before this latest match'};
const year='2030–31',rows=D.statsBySeason?.[year];
if(rows){for(const [name,g,a,note] of [
 ['Pio Esposito',2,0,'Lecce 12 Jan 2031: goal 60′ from Beier (Neves buildup); goal 64′ from Moore (Beier earlier pass)'],
 ['Maximilian Beier',1,2,'Lecce 12 Jan 2031: goal 28′ from Paz; assist Paz 51′; assist Pio 60′; fed Moore before 64′ goal (no third assist)'],
 ['Nico Paz',1,1,'Lecce 12 Jan 2031: official assist Beier 28′; first club-season goal 51′ from Beier'],
 ['Mikey Moore',0,1,'Lecce 12 Jan 2031: official assist for Pio 64′ after pass from Beier']
 ]){let r=rows.find(x=>x[0]===name);if(!r){r=[name,0,0,''];rows.push(r)}r[1]=(Number(r[1])||0)+g;r[2]=(Number(r[2])||0)+a;r[3]=(r[3]?r[3]+' | ':'')+note}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));D.stats=rows;D.statsCurrentSeason=year;
const summary=new Map();for(const [yr,items]of Object.entries(D.statsBySeason))for(const [raw,g,a]of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=summary.get(name)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(yr);summary.set(name,p)}
const career=[...summary].map(([n,v])=>[n,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);}
const squad=(D.squadPublic?.Midfielders||[]).find(x=>x[0]==='João Neves');if(squad)squad[3]='Back from broken toe injury; contributed buildup pass to Beier for Pio goal 60′ against Lecce. No precise minutes or full appearance details confirmed.';
D.statsScope='Napoli club 2030–31 after Lecce 4–1: Pio 28G10A, Beier 20G20A, Moore 5G6A, Paz 1G4A; Napoli club 29P 23W5D1L 71GF23GA. Italy internationals separate.';
const controls=$('stats')?.querySelector('.stats-filters');if(controls){const tab=controls.querySelector('[data-stats-view="'+year+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||year;if(desc&&view===year)desc.textContent='Napoli club 2030–31: Pio 28G10A, Beier 20G20A, Moore 5G6A, Paz 1G4A.';if(notice&&view===year)notice.textContent='Latest Napoli 4–1 Lecce. 48 Serie A points in 19 games; all-club tally 29 played. Italy separate.'};controls.addEventListener('click',refresh);if(tab)tab.click();refresh()}
const lead=stories[0],strap='SERIE A · NAPOLI 4–1 LECCE · FOUR UNANSWERED GOALS';D.hero={...(D.hero||{}),articleId:lead.id,strap};
const h=$('heroStory');if(h)h.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((c,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(c)+'">'+esc(c)+'</button>').join('');
D.ticker=['NAPOLI 4–1 LECCE · LOZANO 13′ · FOUR UNANSWERED','BEIER 1 GOAL + 2 ASSISTS · CLUB SEASON 20G20A','PIO BRACE 60′ & 64′ · 28 NAPOLI CLUB GOALS','PAZ 1 GOAL + 1 ASSIST · NEVES INVOLVED IN THIRD','NAPOLI 48 POINTS / 19 · NEXT SASSUOLO'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['THE RESPONSE','Lozano led for Lecce after thirteen minutes. Napoli hit four unanswered goals to win 4–1.'],['BEIER MAKES TWENTY–TWENTY','The forward combines a club-season 20 goals with 20 assists after setting up Paz and Pio.'],['PIO KEEPS SCORING','Two more for Esposito; 28 Napoli club goals this season.'],['MIDFIELD CONNECTIONS','Paz supplied the equaliser and scored the winner; Neves played to Beier before Pio’s third.'],['NEXT TEST','48 points from nineteen league games. Sassuolo next, with Barcelona approaching in Europe.']];
const w=$('whisperList');if(w)w.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI · 48 POINTS / 19</strong><span>15 W · 3 D · 1 L · 43 GF · 14 GA · +29</span></div><div><strong>LATEST: NAPOLI 4–1 LECCE</strong><span>Beier 28′ · Paz 51′ · Pio 60′, 64′</span></div>';
const last=$('latestResult');if(last)last.innerHTML='<div class="latest-score"><span>NAP</span><strong>4–1</strong><span>LEC</span></div><p>SERIE A · BEIER 28′ (PAZ) · PAZ 51′ (BEIER) · PIO 60′ (BEIER), 64′ (MOORE)</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='SERIE A · NAPOLI 4–1 LECCE · 48 POINTS / 19';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli 4–1 Lecce: Beier one goal and two assists, Pio brace, Paz scores. Napoli have 48 Serie A points from nineteen matches.');
})();
