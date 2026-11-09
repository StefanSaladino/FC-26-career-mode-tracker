/* Supercoppa 2030–31 champions: Napoli 4–1 Juventus, Pio 4, Beier 2A, Neves back */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31';
const match={date:null,dateContext:'January 2031, exact final date not specified',team:'Napoli',opponent:'Juventus',venue:'Unconfirmed',competition:'Supercup',round:'Final',status:'completed',score:'4–1',halfTime:'2–0',teamCleanSheet:false,
events:[
{minute:21,team:'Napoli',scorer:'Pio Esposito',assist:null,detail:'Goal from rebound after Mikey Moore shot saved by Di Gregorio, no confirmed official assist'},
{minute:36,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',assistOfficial:true,detail:'Beier through ball, Pio finishes from tight angle'},
{minute:59,team:'Napoli',scorer:'Pio Esposito',assist:'Mikey Moore',assistOfficial:true,detail:'Moore perfect pass, Pio first time into bottom corner'},
{minute:60,team:'Juventus',scorer:'Cvetkovic',assist:null,detail:'Weak effort slips past otherwise excellent Epolo'},
{minute:88,team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',assistOfficial:true,detail:'Beier second assist, Pio fourth goal'}],
notes:'Napoli WIN 4–1 vs Juventus, SUPERCOPPA CHAMPIONS; Pio FOUR goals, Beier 2 official assists, Moore 1 official assist at 59 only. Epolo strong game despite soft Cvetkovic goal. Final date and venue not supplied.'};
D.supercoppaFinalJan2031={...match,trophyWinner:'Napoli',trophyWon:true};
D.trophies=Array.isArray(D.trophies)?D.trophies:[];
if(!D.trophies.includes('Supercoppa 2030–31'))D.trophies.push('Supercoppa 2030–31');
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Juventus'&&x[2]==='Supercup'&&x[3]===4&&x[4]===1))
D.results.push(['Napoli','Juventus','Supercup',4,1,'W','January 2031 · SUPERCOPPA FINAL · Trophy won','Pio 21′ rebound (Moore shot saved by Di Gregorio); Pio 36′ (Beier); Pio 59′ (Moore); Cvetkovic 60′; Pio 88′ (Beier). HT 2–0, FT 4–1, NAPOLI CHAMPIONS.']);
D.latestResult=['NAPOLI','4–1','JUVENTUS','SUPERCOPPA FINAL · Pio scores four · Napoli WIN trophy'];
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
D.upcoming=schedule.filter(x=>x.status==='scheduled'&&x.team==='Napoli'&&!(x.opponent==='Juventus'&&x.competition==='Supercup')).sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[x.opponent,x.competition,x.date.slice(8,10)+' '+({'01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'May','06':'Jun','07':'Jul','08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' '+x.date.slice(0,4)+' · '+x.venue]);
D.season203031={...(D.season203031||{}),updated:'January 2031 · SUPERCOPPA CHAMPIONS · Napoli 4–1 Juventus, Pio four goals · Neves returns from injury',
competitiveGamesConfirmed:27,competitiveWins:22,competitiveDraws:4,competitiveLosses:1,competitiveGoalsFor:66,competitiveGoalsAgainst:21,statsVerifiedThrough:'Supercoppa FINAL Napoli 4–1 Juventus · January 2031',
serieA:{played:17,wins:14,draws:2,losses:1,points:44,goalsFor:38,goalsAgainst:12,goalDifference:26},championsLeague:{played:6,wins:4,draws:2,losses:0,points:14,goalsFor:14,goalsAgainst:5,goalDifference:9,position:2},
nextClubOpponent:'Lecce',nextClubCompetition:'Serie A',nextClubDate:'2031-01-12',supercoppa:'Won 2030–31 · 4–1 Juventus · Pio four goals',
latestSquadNews:'João Neves returned from broken toe injury suffered against Roma 30 Oct 2030; last confirmed rating 95 OVR; no confirmed first game back',lastCompletedCupFixture:'Supercoppa Final WON 4–1 against Juventus'};
D.nextClubFixture={date:'2031-01-12',opponent:'Lecce',competition:'Serie A',venue:'Home',status:'scheduled',opponentConfirmed:true};
D.seasonState={...(D.seasonState||{}),league:{played:17,w:14,d:2,l:1,points:44,goalsFor:38,goalsAgainst:12,goalDifference:26,remaining:21,status:'Napoli 44 points after 17 league games. Supercoppa final triumph does not add Serie A points.'},supercoppa:{stage:'Champions',status:'Napoli WON Supercoppa 4–1 against Juventus; Pio four goals',opponent:'Juventus',finalPlayed:true,trophyWon:true,finalDate:null,finalVenue:null}};
D.nevesRomaInjury2030={...(D.nevesRomaInjury2030||{}),date:'2030-10-30',player:'João Neves',diagnosis:'Broken toe',absenceDuration:'Three months originally expected',returnDate:null,availability:'Back from injury · manager reports João Neves has returned · minutes and first selection not confirmed',status:'Recovered / returned to squad picture',isInjured:false};
D.joaoNevesReturnJan2031={player:'João Neves',status:'Returned from broken toe absence',previousInjuryDate:'2030-10-30',overallLastConfirmed:95,returnConfirmed:true,firstMatchBackConfirmed:false,currentMatchFitnessDetails:null};
if(D.squadPublic?.Midfielders){const neves=D.squadPublic.Midfielders.find(x=>x[0]==='João Neves');if(neves){neves[2]=95;neves[3]='Returned from broken toe injury · first match back not yet reported';}}
D.statsScope='Napoli club 2030–31 through Supercoppa FINAL: Pio 26G10A, Beier 19G18A, Mikey Moore 5G5A. Supercoppa WON vs Juventus 4–1. Italy separate.';
const rows=D.statsBySeason?.[season];
if(rows){for(const [name,g,a,note] of [
['Pio Esposito',4,0,'Supercoppa FINAL Juventus 4–1: Pio goals 21′ rebound (Moore shot saved, no official assist confirmed), 36′ (Beier), 59′ (Moore), 88′ (Beier)'],
['Maximilian Beier',0,2,'Supercoppa FINAL: two assists to Pio 36′ and 88′, Napoli defeat Juventus 4–1'],
['Mikey Moore',0,1,'Supercoppa FINAL: confirmed assist to Pio 59′; 21′ shot saved by Di Gregorio and Pio scores rebound, no verified official assist for that goal']
]){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));D.stats=rows;D.statsCurrentSeason=season;
const sums=new Map();for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p)}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((x,y)=>y[1]-x[1]||y[2]-x[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);}
const controls=$('stats')?.querySelector('.stats-filters');if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
if(desc)desc.textContent=view===season?'NAPOLI SUPERCOPPA CHAMPIONS: Pio 26G10A, Beier 19G18A, Moore 5G5A; league unchanged.':'Napoli club records for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'Supercoppa final won 4–1 Juventus: Pio four goals, Beier two assists, Moore one. Napoli club only; Italy separate.':'Napoli club records only; Italy excluded.';};controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=["napoli-juventus-supercoppa-final-pio-four-4-1-jan2031","joao-neves-returns-from-broken-toe-napoli-jan2031","beier-pio-supercoppa-double-act-three-goals-two-assists-2031","epolo-supercoppa-juventus-final-soft-goal-jan2031"],pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Missing Supercoppa title edition articles');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='SUPERCOPPA · NAPOLI CHAMPIONS · PIO SCORES FOUR';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['NAPOLI ARE SUPERCOPPA CHAMPIONS · JUVENTUS 1–4 NAPOLI','PIO SCORES FOUR · BEIER TWO ASSISTS · MOORE ONE','JUVENTUS BEATEN 4–1 · THE TROPHY IS NAPOLI’S','JOÃO NEVES BACK FROM BROKEN TOE INJURY','NEXT: LECCE IN SERIE A · BARCELONA AND DYNAMO KYIV TO COME'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['SUPERCOPPA CHAMPIONS','Napoli defeat Juventus 4–1 in the final; Pio Esposito scores FOUR.'],['THE BEIER- PIO PARTNERSHIP','Beier assists twice in the final after his hat-trick in the semifinal.'],['NEVES IS BACK','The Portuguese midfielder returns from his broken-toe absence, adding an important midfield option.'],['MIKEY MOORE MAKES HIS MARK','Moore forces the first rebound and supplies an official assist for Pio’s 59′ goal.'],['EPOLO AND THE FINAL','A strong performance overall, with one weak effort from Cvetkovic finding a way through.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>🏆 NAPOLI WIN SUPERCOPPA · 4–1 JUVENTUS</strong><span>Pio FOUR goals · Beier TWO assists · Mikey Moore assist · Cvetkovic Juventus consolation</span></div><div><strong>JOÃO NEVES RETURNS FROM INJURY</strong><span>Broken toe recovery · important midfield reinforcement · next scheduled game Lecce</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>4–1</strong><span>JUV</span></div><p>🏆 SUPERCOPPA FINAL WON · PIO x4 · BEIER x2 ASSISTS</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='🏆 SUPERCOPPA CHAMPIONS · NAPOLI 4–1 JUVENTUS · NEVES RETURNS';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli beat Juventus 4–1 to WIN the Supercoppa, with four goals from Pio Esposito, two Beier assists and Moore assist. João Neves returns from injury.');






})();
