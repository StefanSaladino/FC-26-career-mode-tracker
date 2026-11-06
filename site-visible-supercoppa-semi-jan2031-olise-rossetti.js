/* January 2031: Napoli 4-1 Supercoppa semifinal, Juventus final, Olise contract talks end, Rossetti returns. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31';
const match={date:'2031-01-03',dateBasis:'The existing calendar displayed 3 Jan; actual semifinal date not separately confirmed',team:'Napoli',opponent:'Supercoppa semifinal opponent (name unconfirmed)',venue:'Home (calendar listing, not independently reconfirmed)',competition:'Supercup',round:'Semifinal',status:'completed',score:'4–1',halfTime:'2–1',teamCleanSheet:false,
events:[{minute:17,team:'Napoli',scorer:'Maximilian Beier',assist:'Giacomo Raspadori',assistOfficial:true,detail:'Raspadori plays Beier; Beier scores the opener'},
{minute:42,team:'Opponent',scorer:'Lopez',assist:null,detail:'Equaliser 1–1; opponent club not supplied'},
{minute:'45+1',team:'Napoli',scorer:'Anton Stach',assist:null,detail:'Scramble, nobody in possession, Stach buries loose ball for halftime 2–1'},
{minute:56,team:'Napoli',scorer:'Maximilian Beier',assist:'Giacomo Raspadori',assistOfficial:true,detail:'Raspadori second official assist, Beier second goal 3–1'},
{minute:'90+2',team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito',assistOfficial:true,detail:'Substitute Pio supplies assist, Beier finishes hat-trick 4–1'}],
notes:'Napoli win Supercoppa semifinal 4–1 and advance to FINAL vs Juventus; opposing semifinal team unnamed. Raspadori official 2 assists, Pio 1 (entered earlier as sub); Stach loose-ball goal 45+1 with no assist confirmed. Final date, venue unconfirmed.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const semi=schedule.find(x=>x.team==='Napoli'&&x.date==='2031-01-03'&&x.competition==='Supercup');
if(semi)Object.assign(semi,match);else schedule.push(match);
D.upcoming=[['Juventus','Supercoppa Final','Date / venue TBC'],...schedule.filter(x=>x.status==='scheduled').sort((x,y)=>String(x.date).localeCompare(String(y.date))).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'01':'Jan','02':'Feb','03':'Mar','04':'Apr','05':'May','06':'Jun','07':'Jul','08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' '+x.date.slice(0,4)+' · '+x.venue])];
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&String(x[1]).includes('Supercoppa semifinal')&&x[2]==='Supercup'&&x[3]===4&&x[4]===1))
D.results.push(['Napoli','Supercoppa semifinal opposition TBC','Supercup',4,1,'W','January 2031 · Semifinal','Beier 17′ (Raspadori); Lopez 42′; Stach 45+1′; Beier 56′ (Raspadori); Beier 90+2′ (substitute Pio). Napoli through to final against Juventus.']);
D.latestResult=['NAPOLI','4–1','SUPERCOPPA SEMIFINAL','January 2031 · Beier hat-trick, two Raspadori assists, Stach goal; Juventus final next'];
D.season203031={...(D.season203031||{}),updated:'January 2031 · Napoli 4–1 in Supercoppa semifinal; Juventus final next · Olise talks ended for now',
competitiveGamesConfirmed:26,competitiveWins:21,competitiveDraws:4,competitiveLosses:1,competitiveGoalsFor:62,competitiveGoalsAgainst:20,statsVerifiedThrough:'Supercoppa semifinal 4–1, January 2031',
serieA:{played:17,wins:14,draws:2,losses:1,points:44,goalsFor:38,goalsAgainst:12,goalDifference:26},
championsLeague:{played:6,wins:4,draws:2,losses:0,points:14,goalsFor:14,goalsAgainst:5,goalDifference:9,position:2},
nextClubOpponent:'Juventus',nextClubCompetition:'Supercoppa Final',nextClubDate:null,
latestTransfer:'Geertruida sold to Real Madrid for $46.5m; Victor Hermansen signed from Fulham; E. Rossetti returned from loan at 80 OVR',
latestContract:'Olise 29y 93 OVR; two-year extension and crucial role discussed, but talks ended with no agreement'};
D.nextClubFixture={date:null,opponent:'Juventus',competition:'Supercoppa Final',venue:'Unconfirmed',status:'scheduled',opponentConfirmed:true};
D.supercoppaSemifinalJan2031=match;
D.supercoppaFinalJan2031={opponent:'Juventus',date:null,venue:null,status:'scheduled; final not played'};
D.seasonState={...(D.seasonState||{}),league:{played:17,w:14,d:2,l:1,points:44,goalsFor:38,goalsAgainst:12,goalDifference:26,remaining:21,status:'Napoli 44 points in 17 Serie A games. Supercoppa semifinal win adds NO league points.'},
supercoppa:{stage:'Final reached',status:'Napoli beat unidentified semifinal opposition 4–1 with Beier hat-trick; now face Juventus in final',nextOpponent:'Juventus',finalPlayed:false,finalDate:null,finalVenue:null}};
D.oliseContractJan2031={player:'Michael Olise',age:29,overall:93,status:'Talks ended for now; no extension signed; still Napoli player',extensionYearsAgreedInTalks:2,squadRoleAgreedInTalks:'Crucial',
initialRequestedWeeklyWage:660000,initialRequestedSigningBonus:6600000,initialMilestoneBonus:6000000,
laterRequestedWeeklyWage:690000,laterRequestedSigningBonus:6200000,laterMilestoneBonus:null,laterMilestoneStatus:'Not reconfirmed',lastKnownHistoricalWage:350000,currentContractExpiry:null,clubCounterTermsConfirmed:null};
D.rossettiReturnJan2031={player:'E. Rossetti',status:'Returned from loan to active Napoli squad',overall:80,previousOverall:79,position:'RM',currentAge:null,ageAtPreviousCheckpoint:18,napoliMatchDebutAfterReturn:false,internationalDebut:'Italy v Denmark 19 Nov 2030, 45 minutes, 7.3 rating'};
D.currentSquadTransferUpdates=[...(D.currentSquadTransferUpdates||[]).filter(x=>x.player!=='E. Rossetti'),{player:'E. Rossetti',status:'Returned from loan',overall:80,position:'RM'}];
if(D.squadPublic?.Midfielders){D.squadPublic.Midfielders=D.squadPublic.Midfielders.filter(x=>x[0]!=='E. Rossetti');D.squadPublic.Midfielders.push(['E. Rossetti','RM',80,'Returned from loan · Italy international']);}
if(Array.isArray(D.loanedPlayers))D.loanedPlayers=D.loanedPlayers.filter(x=>Array.isArray(x)?x[0]!=='E. Rossetti':x?.name!=='E. Rossetti'&&x?.player!=='E. Rossetti');
if(D.squadPublic)for(const group of Object.values(D.squadPublic))if(Array.isArray(group))for(const player of group)if(player[0]==='Michael Olise'){player[2]=93;player[3]='Crucial role discussed · renewal talks ended without deal';}
D.playerAges={...(D.playerAges||{}),'Michael Olise':29};
D.statsScope='Napoli club after Supercoppa semifinal: Beier 19G16A, Pio 22G10A, Raspadori 4G3A, Stach 2G4A based on prior 1G4A plus semifinal strike. Italy excluded. Rossetti 80 OVR returned from loan; Olise 93 OVR remains under existing agreement; no renewal.';
const rows=D.statsBySeason?.[season];
if(rows){for(const [name,g,a,note] of [
['Maximilian Beier',3,0,'Supercoppa semifinal: hat-trick, goals 17′ and 56′ from Raspadori; 90+2′ from substitute Pio'],
['Giacomo Raspadori',0,2,'Supercoppa semifinal: assists on Beier goals 17′ and 56′'],
['Pio Esposito',0,1,'Supercoppa semifinal: substitute assists Beier 90+2′'],
['Anton Stach',1,0,'Supercoppa semifinal: loose-ball finish 45+1′, assist unconfirmed']
]){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;}
rows.sort((x,y)=>Number(y[1])-Number(x[1])||Number(y[2])-Number(x[2])||x[0].localeCompare(y[0]));D.stats=rows;D.statsCurrentSeason=season;
const sums=new Map();for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p)}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((x,y)=>y[1]-x[1]||y[2]-x[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);}
const controls=$('stats')?.querySelector('.stats-filters');if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
if(desc)desc.textContent=view===season?'Supercoppa semifinal: Beier 19G16A, Raspadori 4G3A, Pio 22G10A; Stach 2G4A. Napoli club only.':'Napoli club records for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'Supercoppa 4–1 semifinal: Beier hat-trick, Raspadori 2 assists, Stach 45+1′, Pio assist 90+2′. Juventus final ahead.':'Napoli club records only; Italy excluded.';};controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=["napoli-supercoppa-semifinal-beier-hattrick-juventus-final-jan2031","olise-napoli-extension-talks-ended-690k-jan2031","beier-raspadori-pio-supercoppa-semi-jan2031","napoli-january-transfer-window-geertruida-hermansen-rossetti-jan2031","rossetti-returns-napoli-loan-80-overall-jan2031"],pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Missing January Supercoppa newsroom articles');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='SUPERCOPPA · NAPOLI 4–1 · JUVENTUS FINAL NEXT';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['NAPOLI 4–1 SUPERCOPPA SEMIFINAL · BEIER HAT-TRICK','RASPADORI TWO ASSISTS · STACH 45+1′ · PIO 90+2′ ASSIST','JUVENTUS AWAIT IN THE SUPERCOPPA FINAL','OLISE RENEWAL TALKS END WITHOUT AGREEMENT','ROSSETTI RETURNS FROM LOAN · 80 OVR · HERMANSEN JOINS'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['BEIER TREBLE','Three goals carry Napoli to a 4–1 semifinal win; Juventus await in the Supercoppa final.'],['RASPADORI SHINES','Two assists for Beier; Stach adds a crucial 45+1′ goal, and substitute Pio assists at 90+2′.'],['OLISE TALKS STOP','The 29-year-old 93-rated star remains at Napoli after extension talks ended over financial terms.'],['ROSSETTI IS BACK','The Italy international returns from loan with an 80 overall rating.'],['JANUARY TRANSFERS','Geertruida went to Real Madrid for $46.5m; Hermansen arrived from Fulham to strengthen wide options.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI 4–1 · SUPERCOPPA FINAL REACHED</strong><span>Beier hat-trick · Raspadori 2 assists · Stach 45+1′ · Pio 90+2′ assist</span></div><div><strong>JUVENTUS NEXT · OLISE TALKS END</strong><span>Olise remains at Napoli · Rossetti back at 80 OVR · Hermansen from Fulham</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>4–1</strong><span>SF</span></div><p>SUPERCOPPA SEMIFINAL · BEIER x3 · STACH · FINAL vs JUVENTUS NEXT</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League'||x[1]==='Supercoppa Final').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='BEIER HAT-TRICK · SUPERCOPPA FINAL vs JUVENTUS · OLISE TALKS STOP';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli reach Supercoppa final against Juventus after Beier hat-trick in 4–1 semifinal; Olise talks end without agreement; Rossetti 80 OVR returns from loan.');





})();
