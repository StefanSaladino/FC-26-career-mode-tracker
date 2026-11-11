/* Roma 0-2 Napoli Mar16 2031, manager-confirmed HT 0-1 FT0-2; Barcelona R16 return home March19 remains unplayed. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),E=x=>String(x??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ids=['roma-napoli-two-nil-neves-beier-rotation-mar16-2031','estevao-neves-mctominay-roma-squad-depth-mar2031','napoli-barcelona-home-return-preview-after-roma-mar19-2031'];
const newest=ids.map(id=>D.articles.find(a=>a.id===id));
if(newest.some(x=>!x))throw Error('Roma newsroom stories missing');
D.articles=[...newest,...D.articles.filter(a=>!ids.includes(a.id))];
const match={date:'2031-03-16',team:'Napoli',opponent:'Roma',competition:'Serie A',venue:'Away',status:'completed',score:'0–2',resultText:'Roma 0–2 Napoli',halftime:'Roma 0–1 Napoli',rotatedSquad:true,teamCleanSheet:true,goalkeeper:null,events:[{minute:'45+2',team:'Napoli',scorer:'João Neves',assist:'Estêvão'},{minute:'90+2',team:'Napoli',scorer:'Maximilian Beier',assist:'Scott McTominay',notes:'Counterattack'}]};
D.romaMarch16_2031=match;
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==='Roma'&&r[1]==='Napoli'&&r[2]==='Serie A'&&r[3]===0&&r[4]===2&&String(r[6]||'').includes('16 Mar 2031')))D.results.push(['Roma','Napoli','Serie A',0,2,'W','16 Mar 2031 · Away','Neves 45+2′ (Estêvão), Beier 90+2′ counterattack (McTominay). Rotated Napoli squad, team clean sheet.']);
for(const arr of [D.fixturesFebMar2031,D.schedule203031])if(Array.isArray(arr)){
let x=arr.find(r=>r.date==='2031-03-16'&&r.team==='Napoli'&&r.opponent==='Roma');
if(!x){x={};arr.push(x)}Object.assign(x,match);arr.sort((a,b)=>String(a.date||'9999').localeCompare(String(b.date||'9999')));
}
const leagueTop5=[
{name:'Napoli',gameName:'SSC Napoli',played:29,points:74,rank:1},
{name:'Roma',gameName:'AS Roma',played:29,points:63,rank:2},
{name:'Inter',gameName:'Lombardia FC',played:29,points:62,rank:3},
{name:'Juventus',gameName:'Juventus',played:29,points:61,rank:4},
{name:'AC Milan',gameName:'Milano FC',played:29,points:60,rank:5}
];
D.latestSerieATopFive=leagueTop5;
D.serieAStandingsLatestVerifiedMar2031={date:'2031-03-16',competition:'Serie A',source:'Manager-confirmed top five after Roma 0-2 Napoli',topFiveOnly:true,rows:leagueTop5,all29Played:true,pointsGapToSecond:11,nineLeagueFixturesRemainingForNapoli:true};
const rows=leagueTop5.map(x=>[x.gameName,29,null,null,null,null,null,null,x.points]);
D.serieAStandings203031={source:'Manager-confirmed Serie A top five after Roma 0-2 Napoli',date:'2031-03-16',topFiveOnly:true,rows,aliases:leagueTop5.map(x=>[x.gameName,x.name]),unknownColumns:['wins','draws','losses','goalsFor','goalsAgainst','goalDifference']};
D.serieAStandingsLastConfirmed={verifiedNapoli:rows[0],topFive:rows,topSix:null,asOf:'2031-03-16',otherClubsBelowFifthNotConfirmed:true,otherClubsNotRefreshed:false,tablePositionUnknown:false,knownFieldsOnly:['rank','team','played','points']};
D.serieAStandingsLatestMar2031=leagueTop5;
if(D.seasonState){
D.seasonState.league={played:29,points:74,remaining:9,position:1,runnerUp:'Roma',runnerUpPoints:63,leadPoints:11,asOf:'2031-03-16',status:'Manager-confirmed top five after Roma away March16; W/D/L, goals for/against and other clubs below fifth not provided',topFive:leagueTop5};
D.seasonState.nextFixture={date:'2031-03-19',team:'Napoli',opponent:'FC Barcelona',competition:'Champions League',venue:'Home',round:'Round of 16',leg:2,status:'scheduled'};
}
D.nextClubFixture={date:'2031-03-19',team:'Napoli',opponent:'FC Barcelona',competition:'Champions League',venue:'Home',round:'Round of 16',leg:2,status:'scheduled',aggregate:'Barcelona 2–1 Napoli'};
D.nextClubMatch={...D.nextClubFixture,played:false};D.nextMatch={...D.nextClubFixture,played:false,confirmedNext:true,kickoffTime:null};D.nextEuropeanFixture={...D.nextClubFixture};
D.nextSerieAFixture={date:'2031-03-23',home:'Napoli',away:'Latium',gameAlias:'Lazio',competition:'Serie A',status:'scheduled'};
D.currentCalendarDate2031='2031-03-16';
D.upcoming=(D.fixturesFebMar2031||[]).filter(x=>x.team==='Napoli'&&x.date>'2031-03-16'&&x.status==='scheduled').map(x=>[x.gameAlias||x.opponent,x.competition,x.date.slice(5).replace('-','/')+' · '+x.venue]);
D.latestResult=['Roma','0–2','Napoli','Serie A · 16 Mar 2031 · Neves 45+2′, Beier 90+2′'];
const s=D.season203031||{};
D.season203031={...s,updated:'Roma 0–2 Napoli Serie A away 16 Mar: João Neves 45+2 from Estêvão; Beier 90+2 counterattack from McTominay. Rotated squad, team clean sheet. Manager-confirmed top 5 after 29 played: Napoli74 Roma63 Inter62 Juventus61 AC Milan60. Barcelona home Mar19 next; Napoli trail aggregate 2–1.',latestResult:'Roma 0–2 Napoli · Serie A · 16 Mar 2031',latestResultDate:'2031-03-16',latestResultCompetition:'Serie A',lastCompletedLeagueFixture:match,nextClubOpponent:'FC Barcelona',nextClubCompetition:'Champions League',nextClubDate:'2031-03-19',nextClubFixture:D.nextClubFixture,nextClubMatch:D.nextClubFixture,serieA:{played:29,points:74,position:1,leadPoints:11,remaining:9,source:'Manager-confirmed top five after Roma Mar16; breakdown goals WDL unknown'},statsVerifiedThrough:'Reported Napoli goals and credited providers through Roma Mar16. Current league standings confirmed separately; March2 Pescara final score still not supplied.'};
const stats=D.statsBySeason?.['2030–31'];
if(stats){for(const [n,g,a,note]of[
['João Neves',1,0,'Roma away Serie A Mar16: 45+2′ goal from Estêvão'],
['Estêvão',0,1,'Roma away Serie A Mar16: official provider for João Neves 45+2′'],
['Maximilian Beier',1,0,'Roma away Serie A Mar16: counterattacking goal 90+2′ from Scott McTominay'],
['Scott McTominay',0,1,'Roma away Serie A Mar16: 90+2′ counterattack assist to Beier']
]){let row=stats.find(x=>x[0]===n);if(!row){row=[n,0,0,''];stats.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]?row[3]+' | ':'')+note}
stats.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||String(a[0]).localeCompare(String(b[0])));D.stats=stats;D.statsCurrentSeason='2030–31';
const tally=new Map();for(const [year,rows]of Object.entries(D.statsBySeason))for(const [raw,g,a]of rows){const n=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,v=tally.get(n)||{g:0,a:0,years:new Set()};v.g+=Number(g)||0;v.a+=Number(a)||0;v.years.add(year);tally.set(n,v)}
const career=[...tally].map(([n,v])=>[n,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);
}
D.statsScope='Manager-confirmed Serie A top five Mar16 after 29 games: Napoli74 Roma63 Inter62 Juventus61 AC Milan60. Recorded Napoli club goals/assists through Roma: Beier33G30A, Pio37G16A, Estêvão2G3A, João Neves1G3A, Scott McTominay1G4A, Moore7G9A. Pescara Mar2 final score not reported; do not invent individual event details. Italy stats remain separate.';
const card=(a,v)=>'<article class="article-card '+E(v)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const a=newest[0];D.hero={...(D.hero||{}),articleId:a.id,strap:'SERIE A · ROMA 0–2 NAPOLI · 11 POINTS CLEAR'};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h2>'+E(a.headline)+'</h2><p>'+E(a.dek)+'</p><span class="hero-read">Read the story →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((x,i)=>'<button type="button" class="top-story" data-article="'+E(x.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(x.category)+'</small><strong>'+E(x.headline)+'</strong></div></button>').join('');
const latest=$('latestNews');if(latest)latest.innerHTML=D.articles.slice(1,7).map((x,i)=>card(x,i?'compact':'wide')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((x,i)=>card(x,i?'standard':'lead-grid')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(x=>x.category))].map((x,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(x)+'">'+E(x)+'</button>').join('');
D.ticker=['ROMA 0–2 NAPOLI · NEVES 45+2′ · BEIER 90+2′','ESTÊVÃO & McTOMINAY ASSIST · ROTATED NAPOLI SHINE','NAPOLI 74 PTS · ROMA 63 · INTER 62 · JUVENTUS 61 · MILAN 60','ALL TOP FIVE ON 29 GAMES · NAPOLI ELEVEN CLEAR','BARCELONA ARRIVE IN NAPLES · 19 MAR · UCL R16 RETURN'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
D.whispers=[['ELEVEN-POINT LEAD','Napoli top Serie A on 74 from 29, with Roma second on 63 and nine matches left.'],['ESTÊVÃO CREATES AGAIN','The Brazilian supplied João Neves for the opener in Rome at 45+2′.'],['McTOMINAY TO BEIER','The stoppage-time counterattack finished Roma off at 90+2′.'],['BARCELONA AWAIT','Napoli trail Barcelona 2–1 on aggregate, with the home return scheduled for March19.'],['ROTATION REWARDED','A rotated Napoli side delivered a 2–0 win away against its closest league rival.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
const last=$('latestResult');if(last)last.innerHTML='<div class="latest-score"><span>ROM</span><strong>0–2</strong><span>NAP</span></div><p>SERIE A · 16 MAR · NEVES 45+2′ (ESTÊVÃO) · BEIER 90+2′ (McTOMINAY)</p>';
const next=$('nextTwo');if(next)next.innerHTML='<div class="next-row"><strong>FC Barcelona</strong><span>Champions League Round of 16 · 19 Mar · Home · Second leg</span></div><div class="next-row"><strong>Lazio</strong><span>Serie A · 23 Mar · Home</span></div>';
const form=$('formLine');if(form)form.innerHTML='<div><strong>ROMA 0–2 NAPOLI · SERIE A</strong><span>Neves 45+2′ · Beier 90+2′ · rotated squad, clean sheet</span></div><div><strong>TOP FIVE · 29 GAMES EACH</strong><span>Napoli 74 · Roma 63 · Inter 62 · Juventus 61 · AC Milan 60</span></div><div><strong>NEXT: BARCELONA HOME · UCL R16 SECOND LEG · MARCH 19</strong><span>Barcelona lead 2–1 on aggregate · one-goal Napoli win levels the tie</span></div>';
const upcoming=(D.fixturesFebMar2031||[]).filter(x=>x.team==='Napoli'&&x.status==='scheduled'&&x.date>'2031-03-16');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=upcoming.slice(0,8).map(x=>'<div class="fixture"><span>'+E(x.competition)+' · '+E(Number(x.date.slice(-2)))+' Mar</span><strong>'+E(x.gameAlias||x.opponent)+'</strong><small>'+E(x.venue)+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='ROMA 0–2 NAPOLI · BARCELONA NEXT';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli beat Roma 2–0 away with Neves and Beier goals, move 11 points clear in Serie A, and now host Barcelona in the Champions League.');
if(stats){
const table=$('statsTable');if(table)table.innerHTML='<thead><tr><th>Player</th><th>Goals</th><th>Assists</th><th>G+A</th><th>Season note</th></tr></thead><tbody>'+stats.map(r=>'<tr>'+[r[0],r[1],r[2],Number(r[1])+Number(r[2]),r[3]].map(x=>'<td>'+E(x)+'</td>').join('')+'</tr>').join('')+'</tbody>';
const srt=[...stats].sort((a,b)=>Number(b[1])-Number(a[1]))[0],topScorer=$('topScorer');if(topScorer)topScorer.innerHTML='<span>Top scorer · 2030–31</span><strong>'+E(srt[0])+'</strong><b>'+E(srt[1])+'</b><small>goals</small>';
const max=Math.max(1,...stats.map(r=>Number(r[1])||0)),bars=$('goalBars');if(bars)bars.innerHTML=stats.filter(r=>Number(r[1])>0).map(r=>'<div class="goal-row"><span>'+E(r[0])+'</span><div class="bar-track"><div class="bar-fill" style="width:'+((Number(r[1])||0)/max*100)+'%"></div></div><strong>'+E(r[1])+'</strong></div>').join('');
}
const matches=$('matchesList');if(matches)matches.innerHTML=D.results.slice().reverse().map(r=>{const away=(r[0]==='Napoli'||r[0]==='Italy')&&/\bAway\b/i.test(String(r[6]));const left=away?r[1]:r[0],right=away?r[0]:r[1],sc=away?r[4]+'–'+r[3]:r[3]+'–'+r[4];return '<div class="match-card"><div class="result-badge '+E(r[5])+'">'+E(r[5])+'</div><div class="match-main"><span>'+E(r[2])+'</span><strong>'+E(left)+' <b>'+E(sc)+'</b> '+E(right)+'</strong><p>'+E(r[6])+' · '+E(r[7])+'</p></div></div>'}).join('');
})();