/* Authorised Inter 2–2 newsroom edition and Milan away Coppa Italia SEMIFINAL as next fixture. Inter match date and competition unconfirmed; do not attribute league points or invent Pescara result. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const ids=['napoli-inter-two-two-epolo-pavard-comeback-mar2031','epolo-set-piece-collapse-inter-opinion-mar2031','milan-napoli-coppa-semifinal-next-mar2031','estevao-moore-inter-opening-goal-2031-feature'],head=ids.map(id=>(D.articles||[]).find(a=>a.id===id));
if(head.some(a=>!a)){console.error('Inter/Milan semifinal newsroom stories absent; keeping previous live state');return;}
D.articles=[...head,...(D.articles||[]).filter(a=>!ids.includes(a.id))];
D.interTwoTwoLatest={
 competition:null,date:null,venue:null,opponent:'Inter / Lombardia FC',matchStatus:'completed',finalScore:'Napoli 2–2 Inter',halfTime:'Napoli 2–0 Inter',
 events:[
  {minute:35,team:'Napoli',scorer:'Estêvão',assist:'Mikey Moore',assistOfficial:true,notes:'Goal from Moore cross'},
  {minute:43,team:'Napoli',scorer:'Maximilian Beier',assist:'Pio Esposito',assistOfficial:true,notes:'Pio through ball, Beier outruns and outmuscles defence, top-corner finish'},
  {minute:51,team:'Inter',scorer:'Sauer',assist:null,notes:'Capitalised on Epolo misplay'},
  {minute:null,team:'Inter',scorer:'Pavard',assist:null,notes:'Equalised following Inter corner; precise minute not given'}
 ],
observations:'Early chances at both ends; Epolo and Tzolakis make exceptional saves. Napoli halftime 2–0; Inter fight back to 2–2. No match date or competition provided.',
pointsAwarded:null,leagueTableChanged:false,
statsContributionsConfirmed:{'Estêvão':{goals:1,assists:0},'Mikey Moore':{goals:0,assists:1},'Maximilian Beier':{goals:1,assists:0},'Pio Esposito':{goals:0,assists:1}}
};
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Lombardia FC'&&x[3]===2&&x[4]===2&&String(x[7]||'').includes('Sauer 51'))){
 D.results.push(['Napoli','Lombardia FC','Unspecified',2,2,'D','Before 5 Mar 2031 · exact date not supplied','Inter 2–2 Napoli: Estêvão 35′ (official Moore assist), Beier 43′ (official Pio assist), Sauer 51′ (Epolo mistake), Pavard equalised after corner (minute not supplied). Early Epolo and Tzolakis saves. Half-time Napoli 2–0. Competition and date not supplied; do not count league points.']);
}
const lists=[D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[],D.fixturesFebMar2031=Array.isArray(D.fixturesFebMar2031)?D.fixturesFebMar2031:[]];
for(const list of lists){
 let milan=list.find(x=>x.team==='Napoli'&&x.opponent==='Milano FC'&&x.date==='2031-03-05'&&x.competition==='Coppa Italia');
 if(!milan){milan={team:'Napoli',date:'2031-03-05',opponent:'Milano FC',competition:'Coppa Italia',venue:'Away'};list.push(milan)}
 Object.assign(milan,{gameAlias:'AC Milan',status:'scheduled',round:'Semifinal',stage:'Semifinal',score:null,notes:'Manager confirmed Milan is NEXT, away in Coppa Italia semifinals; no result or leg format announced'});
 const pescara=list.find(x=>x.team==='Napoli'&&x.opponent==='Pescara'&&x.date==='2031-03-02'&&x.competition==='Serie A');
 if(pescara&&pescara.status==='scheduled'){pescara.status='result_not_supplied';pescara.notes='Previously scheduled on Mar 2; result or status not supplied; not next according to manager. Do not infer win/draw/loss.';}
 list.sort((a,b)=>String(a.date||'9999').localeCompare(String(b.date||'9999')));
}
D.latestResult=['Napoli','2–2','Lombardia FC','Inter fought back from 2–0 at half-time · Sauer 51′, Pavard equaliser'];
D.nextClubFixture={date:'2031-03-05',team:'Napoli',opponent:'Milano FC',gameAlias:'AC Milan',competition:'Coppa Italia',stage:'Semifinal',round:'Semifinal',venue:'Away',status:'scheduled',leg:null};
D.nextClubMatch={...D.nextClubFixture,played:false};D.nextMatch={...D.nextClubFixture,played:false,confirmedNext:true,kickoffTime:null};
D.coppaItalia203031={...(D.coppaItalia203031||{}),next:D.nextClubFixture,stage:'Semifinal'};
D.currentCalendarDate2031='2031-03-05';
D.nextSerieAFixture=null;
D.upcoming=D.fixturesFebMar2031.filter(f=>f.team==='Napoli'&&f.status==='scheduled'&&f.date>='2031-03-05').map(f=>[f.opponent,f.competition,f.date.slice(5).replace('-','/')+' · '+f.venue]);
D.season203031={...(D.season203031||{}),
 updated:'Latest Napoli 2–2 Inter (date and competition unspecified). Next AC Milan away Mar 5 Coppa Italia semifinal. Last confirmed Serie A table after Atalanta: 67pts/26, Roma59.',
 latestResult:'Napoli 2–2 Inter · 2–0 at half-time, Estêvão and Beier; Sauer and Pavard equalised',
 latestResultCompetition:null,latestResultDate:null,
 nextClubOpponent:'Milano FC',nextClubCompetition:'Coppa Italia',nextClubDate:'2031-03-05',nextClubFixture:D.nextClubFixture,nextClubMatch:D.nextClubFixture,
 statsVerifiedThrough:'Recorded goals/assists through Napoli 2–2 Inter (date and competition unknown; potential unreported Pescara fixture has not been presumed).',
 latestSquadNews:'In 2–2 Inter draw: Moore officially assisted Estêvão 35′; Pio officially assisted Beier 43′. Sauer 51′ from Epolo error; Pavard equalised after corner. Moores/Estevaos, Pios/Beiers confirmed Inter contributions tracked. Olise still Napoli until summer Tottenham move.',
 leagueTableAsOf:'22 February 2031, after Atalanta 2–1',standingsAreLatestVerifiedNotPostInter:true,
 clubAllCompetitionAggregatesCurrent:false,
 coppa:{...(D.season203031?.coppa||{}),stage:'Semifinal',nextFixture:D.nextClubFixture}
};
D.seasonState={...(D.seasonState||{}),
 nextFixture:D.nextClubFixture,
 league:{...(D.seasonState?.league||{}),status:'Last verified league table after Napoli 2–1 Atalanta: Napoli 67 points / 26, Roma 59. Inter draw competition not assigned, no updated league points inferred.',lastVerifiedDate:'2031-02-22'},
 coppa:{...(D.seasonState?.coppa||{}),status:'Next Coppa Italia semifinal: away at Milano FC / AC Milan March 5',stage:'Semifinal',nextFixture:D.nextClubFixture}
};
const stats=D.statsBySeason?.['2030–31'];
if(stats){for(const [name,g,a,note]of[
['Estêvão',1,0,'Inter 2–2: 35′ scored from Moore officially credited cross'],
['Mikey Moore',0,1,'Inter 2–2: officially assisted Estêvão at 35′; does not receive assist for Pio rebound against Atalanta'],
['Maximilian Beier',1,0,'Inter 2–2: 43′ goal from Pio official assist, top corner'],
['Pio Esposito',0,1,'Inter 2–2: officially assisted Beier 43′ through ball']
]){let row=stats.find(x=>x[0]===name||(name==='Pio Esposito'&&x[0]==='Francesco Pio Esposito'));if(!row){row=[name,0,0,''];stats.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]?row[3]+' | ':'')+note}
stats.sort((a,b)=>(Number(b[1])||0)-(Number(a[1])||0)||(Number(b[2])||0)-(Number(a[2])||0)||a[0].localeCompare(b[0]));
D.stats=stats;D.statsCurrentSeason='2030–31';const totals=new Map();
for(const [year,list]of Object.entries(D.statsBySeason))for(const [raw,g,a]of list){const n=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=totals.get(n)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);totals.set(n,p)}
const career=[...totals].map(([n,v])=>[n,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);}
D.statsScope='Recorded club season contributions through Napoli 2–2 Inter: Pio35G16A Beier29G29A Moore7G8A Estêvão2G1A, Paz3G4A, Olise1G8A. Does not assume results in any unreported fixture. The last VERIFIED Serie A standings remain 22 February after Atalanta: Napoli67pts/26, Roma59pts/26 (8-point gap at that date, NOT a newly verified post-Inter gap). Inter match date and competition unconfirmed. Barcelona UCL away Mar11/home Mar19. Next Cup semi Milan AWAY Mar5. All-club aggregate through Atalanta only 39P32W6D1L 94GF30GA.';
const lead=head[0],strap='NAPOLI 2–2 INTER · FROM TWO CLEAR TO LEVEL · MILAN CUP SEMIFINAL NEXT';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" role="button" tabindex="0" data-article="'+esc(lead.id)+'"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the story →</span></div>';
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['NAPOLI 2–2 INTER · ESTÊVÃO 35′, BEIER 43′ · SAUER 51′, PAVARD EQUALISER','AC MILAN AWAY NEXT · COPPA ITALIA SEMIFINAL · MAR 5','MOORE CROSS TO ESTÊVÃO · PIO THROUGH BALL TO BEIER','INTER COMEBACK: EPOLO ERROR AND PAVARD CORNER GOAL','LAST VERIFIED SERIE A TABLE: NAPOLI 67 POINTS / 26, ROMA 59','BARCELONA UCL LAST SIXTEEN · AWAY MAR 11 · HOME MAR 19'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['TWO-GOAL LEAD LOST','Estêvão 35′ from Moore and Beier 43′ from Pio put Napoli 2–0 up at halftime. Sauer 51′ and Pavard after a corner level it.'],['MILAN NEXT — COPPA SEMIFINAL','Napoli travel to Milano FC / AC Milan for the March 5 Coppa Italia semifinal; this is the next confirmed fixture.'],['EPOLO: BOTH SIDES','The keeper made tremendous early saves but his mistake was punished by Sauer at 51′. Inter then equalised from a corner.'],['NEW ATTACKING COMBINATION','Moore officially assists Estêvão 35′ and Pio officially assists Beier 43′. Both finishes came in the first half.'],['BARCELONA STILL AWAITS','March 11 away and March 19 home in the UCL Round of 16, with Roma away March 16 between the legs.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>LATEST: NAPOLI 2–2 INTER</strong><span>2–0 at halftime · Estêvão, Beier · Sauer, Pavard</span></div><div><strong>NEXT: AC MILAN AWAY · COPPA ITALIA SEMIFINAL</strong><span>5 Mar · last verified league table: Napoli 67 pts / 26</span></div>';
const last=$('latestResult');if(last)last.innerHTML='<div class="latest-score"><span>NAP</span><strong>2–2</strong><span>INT</span></div><p>ESTÊVÃO 35′ (MOORE) · BEIER 43′ (PIO) · SAUER 51′ · PAVARD</p>';
const next=$('nextTwo');if(next)next.innerHTML='<div class="next-row"><strong>Milano FC / AC Milan</strong><span>Coppa Italia semifinal · 5 Mar · Away</span></div><div class="next-row"><strong>Venezia</strong><span>Serie A · 8 Mar · Home</span></div>';
const upcoming=D.fixturesFebMar2031.filter(x=>x.team==='Napoli'&&x.status==='scheduled'&&x.date>='2031-03-05');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=upcoming.slice(0,8).map(x=>'<div class="fixture"><span>'+esc(x.competition==='Champions League'?'UCL Last 16':x.competition)+(x.stage==='Semifinal'?' · Semifinal':'')+' · '+esc(Number(x.date.slice(-2)))+' Mar</span><strong>'+esc(x.opponent)+'</strong><small>'+esc(x.venue)+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='INTER 2–2 · MILAN COPPA SEMIFINAL NEXT';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli surrender a 2–0 halftime lead and draw 2–2 with Inter after goals from Estêvão and Beier. Next: AC Milan away in the Coppa Italia semifinal on March 5.');
})();