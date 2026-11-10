/* Published source state: Napoli 1–1 Parma 9 February, Sampdoria 1–2 Napoli 15 February, verified Serie A top-six after 25 rounds. Do not rewrite prior historical releases or manager remarks. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const ids=['sampdoria-napoli-beier-pio-01xg-feb2031','napoli-parma-rain-moore-sorensen-feb2031','napoli-64-point-seven-clear-milan-title-race-feb2031','mikey-moore-seven-seven-feb2031-napoli-feature'],head=ids.map(id=>(D.articles||[]).find(a=>a.id===id));
if(head.some(a=>!a)){console.error('February Parma/Sampdoria newsroom stories absent; refusing new live state');return;}
D.articles=[...head,...(D.articles||[]).filter(a=>!ids.includes(a.id))];
D.parmaFeb2031={date:'2031-02-09',competition:'Serie A',opponent:'Parma',venue:'Home',score:'Napoli 1–1 Parma',halfTime:'0–0',fullTime:true,conditions:'Rain',events:[
{minute:62,team:'Napoli',scorer:'Mikey Moore',assist:'Maximilian Beier',assistOfficial:true},
{minute:66,team:'Parma',scorer:'Sørensen',assist:null}
],shots:{Napoli:8,Parma:2},shotsOnTarget:{Napoli:3,Parma:2},onTargetRate:{Napoli:0.375,Parma:1.0},matchXG:null,notes:'Moore breaks deadlock at 62′ from Beier pass; Sørensen equalises four minutes later. Rain made accuracy difficult. 8–2 attempts, 3–2 shots on goal.'};
D.sampdoriaFeb2031={date:'2031-02-15',competition:'Serie A',opponent:'Sampdoria',venue:'Away',score:'Sampdoria 1–2 Napoli',halfTime:'0–1',fullTime:true,events:[
{minute:9,team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito',assistOfficial:true,shotXG:0.1,notes:'Extremely difficult/impossible angle; 0.1 expected goals only for THIS shot, not match-wide xG.'},
{minute:67,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',assistOfficial:true},
{minute:76,team:'Sampdoria',scorer:'Pedrola',assist:null}
],matchXG:null,notes:'Napoli held the lead after Pedrola pulled Sampdoria to 1–2 in 76′. Beier and Pio each registered 1G+1A.'};
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Parma'&&x[2]==='Serie A'&&x[3]===1&&x[4]===1&&String(x[6]).includes('09 Feb 2031')))
 D.results.push(['Napoli','Parma','Serie A',1,1,'D','09 Feb 2031 · Home','Rain. Moore 62′ (Beier official assist); Sørensen 66′. Shots Napoli 8 Parma 2; on target Napoli 3 Parma 2.']);
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Sampdoria'&&x[2]==='Serie A'&&x[3]===2&&x[4]===1&&String(x[6]).includes('15 Feb 2031')))
 D.results.push(['Napoli','Sampdoria','Serie A',2,1,'W','15 Feb 2031 · Away','Beier 9′ (Pio Esposito official assist, single shot 0.1 xG), Pio Esposito 67′ (Beier official assist), Pedrola 76′ for Sampdoria. FT 2–1 Napoli.']);
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const fixtures=D.fixturesFebMar2031=Array.isArray(D.fixturesFebMar2031)?D.fixturesFebMar2031:[];
for(const [opp,date,update]of [
['Parma','2031-02-09',{status:'completed',score:'1–1',resultText:'Napoli 1–1 Parma',events:D.parmaFeb2031.events,shots:D.parmaFeb2031.shots,shotsOnTarget:D.parmaFeb2031.shotsOnTarget,conditions:'Rain',notes:D.parmaFeb2031.notes}],
['Sampdoria','2031-02-15',{status:'completed',score:'2–1',resultText:'Sampdoria 1–2 Napoli',events:D.sampdoriaFeb2031.events,notes:D.sampdoriaFeb2031.notes}]
]){for(const list of [schedule,fixtures]){let row=list.find(x=>x.team==='Napoli'&&x.opponent===opp&&x.date===date&&x.competition==='Serie A');if(!row){row={team:'Napoli',opponent:opp,date,competition:'Serie A',venue:opp==='Parma'?'Home':'Away'};list.push(row)}Object.assign(row,update)}}
schedule.sort((a,b)=>String(a.date||'9999').localeCompare(String(b.date||'9999')));
D.currentCalendarDate2031='2031-02-15';
D.latestResult=['Sampdoria','1–2','Napoli','Serie A · 15 Feb 2031 · Beier 9′, Pio 67′'];
D.nextClubFixture={date:'2031-02-22',team:'Napoli',opponent:'Bergamo Calcio',gameAlias:'Atalanta',competition:'Serie A',venue:'Home',status:'scheduled'};
D.nextClubMatch={...D.nextClubFixture,played:false};D.nextMatch={...D.nextClubFixture,played:false,confirmedNext:true,kickoffTime:null};
D.nextSerieAFixture={home:'Napoli',away:'Bergamo Calcio',date:'2031-02-22',matchday:null};
D.upcoming=fixtures.filter(f=>f.team==='Napoli'&&f.status==='scheduled').map(f=>[f.opponent,f.competition,f.date.replace('2031-','').replace('-','/')+' · '+f.venue]);
D.season203031={...(D.season203031||{}),
updated:'15 Feb 2031 · Sampdoria 1–2 Napoli away · Serie A 64 points / 25 · seven clear of Milano FC',
competitiveGamesConfirmed:38,competitiveWins:31,competitiveDraws:6,competitiveLosses:1,competitiveGoalsFor:92,competitiveGoalsAgainst:29,reportedClubGamesThroughSampdoria:38,
statsVerifiedThrough:'Sampdoria 1–2 Napoli away on 15 Feb 2031, after Parma 1–1 Napoli home on 9 Feb',
serieA:{played:25,wins:20,draws:4,losses:1,points:64,goalsFor:55,goalsAgainst:18,goalDifference:37,position:1,positionReason:'Manager-provided 2030/31 Serie A top-six screen after Sampdoria 2–1, all teams played 25'},
nextClubOpponent:'Bergamo Calcio',nextClubCompetition:'Serie A',nextClubDate:'2031-02-22',nextClubFixture:D.nextClubFixture,
latestSquadNews:'Beier 28G28A and Pio 34G15A after reciprocal goals and assists in Sampdoria 1–2 Napoli; Moore 7G7A after Parma 1–1. Olise summer Tottenham $197.9m agreement remains future-effective, and he is still a Napoli player.',
latestResult:'Sampdoria 1–2 Napoli · Serie A · 15 February 2031',
nextClubMatch:D.nextClubFixture};
const rows=[
['SSC Napoli',25,20,4,1,55,18,37,64],
['Milano FC',25,17,6,2,54,26,28,57],
['AS Roma',25,17,5,3,46,27,19,56],
['Lombardia FC',25,16,6,3,51,28,23,54],
['Juventus',25,15,6,4,51,30,21,51],
['Latium',25,12,7,6,35,32,3,43]
];
D.serieAStandings203031={source:'Manager-provided February 2031 screenshot after Sampdoria 1–2 Napoli',date:'2031-02-15',topSixOnly:true,rows:rows.map(r=>[...r])};
D.serieAStandingsLatestVerifiedFeb2031={date:'2031-02-15',competition:'Serie A',allSixPlayed:25,topSixOnly:true,rows:rows.map(r=>[...r]),leader:'SSC Napoli',pointsGapToSecond:7,pointsGapToThird:8};
D.serieAStandingsLastConfirmed={verifiedNapoli:[...rows[0]],topSix:rows.map(r=>[...r]),tablePositionUnknown:false,otherClubsNotRefreshed:false,asOf:'2031-02-15',otherClubsBelowSixthNotConfirmed:true};
D.seasonState={...(D.seasonState||{}),league:{played:25,w:20,d:4,l:1,points:64,goalsFor:55,goalsAgainst:18,goalDifference:37,remaining:13,position:1,runnerUp:'Milano FC',runnerUpPoints:57,leadPoints:7,status:'Serie A top after 25 matches; 64 points, seven ahead of Milano FC (57), Roma third on 56; 13 remaining'},coppa:{...(D.seasonState?.coppa||{}),status:'Last played Torino 2–5 Napoli AET, 5 February; next Milano FC away 5 March',nextFixture:{opponent:'Milano FC',date:'2031-03-05',venue:'Away',stage:null}}};
const stats=D.statsBySeason?.['2030–31'];
if(stats){for(const [name,g,a,note]of [
['Maximilian Beier',1,2,'Parma 9 Feb: official assist Moore 62′; Sampdoria 15 Feb: goal 9′ from Pio pass (single shot 0.1 xG), official assist Pio 67′'],
['Pio Esposito',1,1,'Sampdoria 15 Feb: official assist Beier 9′, scored 67′ from Beier assist'],
['Mikey Moore',1,0,'Parma 9 Feb: goal 62′ from Beier official assist, rainy 1–1 draw']
]){let row=stats.find(r=>r[0]===name||(name==='Pio Esposito'&&r[0]==='Francesco Pio Esposito'));if(!row){row=[name,0,0,''];stats.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]?row[3]+' | ':'')+note}
stats.sort((a,b)=>(Number(b[1])||0)-(Number(a[1])||0)||(Number(b[2])||0)-(Number(a[2])||0)||a[0].localeCompare(b[0]));
D.stats=stats;D.statsCurrentSeason='2030–31';const totals=new Map();for(const [year,list]of Object.entries(D.statsBySeason))for(const [raw,g,a]of list){const n=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=totals.get(n)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);totals.set(n,p)}const career=[...totals].map(([n,v])=>[n,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);}
D.statsScope='Napoli 2030–31 club stats through Sampdoria away Feb 15: Beier 28G28A, Pio Esposito 34G15A, Moore 7G7A, Olise 1G8A, Nico Paz 2G4A, Estêvão 1G1A. Overall club 38P31W6D1L 92GF29GA. Serie A 25P20W4D1L 64 points, 55GF18GA +37, 1st by seven over Milano FC. UCL 8P20 points, 2nd unbeaten in league phase. Italy international statistics strictly separate.';
const lead=head[0],strap='SERIE A · SAMPDORIA 1–2 NAPOLI · 64 POINTS · SEVEN CLEAR';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the story →</span></div>';
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['SAMPDORIA 1–2 NAPOLI · BEIER 9′, PIO 67′ · PEDROLA 76′','NAPOLI 64 POINTS / 25 · SEVEN CLEAR OF MILANO FC (57)','BEIER 28 GOALS & 28 ASSISTS · PIO 34 GOALS & 15 ASSISTS','RAINY PARMA 1–1 NAPOLI · MOORE 62′, SØRENSEN 66′','NEXT BERGAMO CALCIO HOME · 22 FEB · SERIE A','OLISE TO SPURS $197.9M · AGREED FOR SUMMER · STILL AT NAPOLI'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['SEVEN CLEAR','Napoli lead Serie A with 64 points after 25 games. Milano FC second on 57, Roma third on 56.'],['AN UNLIKELY FINISH','Beier scores the 9′ opener at Sampdoria from a 0.1 xG shot after Pio supplies the pass.'],['RECIPROCAL PARTNERS','Beier assists Pio at 67′; both end the 2–1 Sampdoria victory with a goal and an assist.'],['MOORE IN THE RAIN','Moore scores from Beier at 62′ against Parma, but Sørensen equalises four minutes later for a 1–1 draw.'],['NEXT TEST','Bergamo Calcio / Atalanta visit on 22 February; then March includes Pescara, the away Coppa tie at Milano FC, and Venezia.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>SERIE A · NAPOLI 64 POINTS / 25 · FIRST</strong><span>20 W · 4 D · 1 L · 55 GF · 18 GA · +37 · Milan 57 pts</span></div><div><strong>NEXT: BERGAMO CALCIO HOME · 22 FEB</strong><span>Last: Sampdoria 1–2 Napoli · Beier 9′, Pio 67′</span></div>';
const last=$('latestResult');if(last)last.innerHTML='<div class="latest-score"><span>SAM</span><strong>1–2</strong><span>NAP</span></div><p>SERIE A · FEB 15 · BEIER 9′ (PIO) · PIO 67′ (BEIER) · PEDROLA 76′</p>';
const next=$('nextTwo');if(next)next.innerHTML='<div class="next-row"><strong>Bergamo Calcio</strong><span>Serie A · 22 Feb · Home</span></div><div class="next-row"><strong>Pescara</strong><span>Serie A · 2 Mar · Away</span></div>';
const upComing=D.fixturesFebMar2031.filter(x=>x.team==='Napoli'&&x.status==='scheduled');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=upComing.slice(0,6).map(x=>'<div class="fixture"><span>'+esc(x.competition)+' · '+esc(Number(x.date.slice(-2)))+' '+(x.date.slice(5,7)==='02'?'Feb':'Mar')+'</span><strong>'+esc(x.opponent)+'</strong><small>'+esc(x.venue)+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='NAPOLI 64 PTS · 7 CLEAR · SAMPDORIA 1–2 NAPOLI';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Sampdoria 1–2 Napoli: Beier scores from a 0.1 xG chance, Pio adds a second and Napoli lead Serie A with 64 points, seven clear of Milano FC.');
})();
