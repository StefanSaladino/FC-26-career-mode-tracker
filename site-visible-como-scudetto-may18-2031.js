/* 18 May 2031 Napoli 4–0 Como, fourth consecutive Serie A title. One-time stat increments; Italy separate. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const E=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
const ids=['napoli-como-four-nil-fourth-scudetto-may18-2031','moore-como-goal-two-assists-title-may18-2031','napoli-four-straight-scudetti-dynasty-may19-2031','bellandi-scudetto-paris-not-yet-may19-2031','mikey-moore-fictional-title-night-interview-may19-2031'];
const arts=ids.map(id=>(D.articles||[]).find(a=>a.id===id));if(arts.some(x=>!x))throw Error('Como championship article missing');
D.articles=[...arts,...(D.articles||[]).filter(a=>!ids.includes(a.id))];
const match={date:'2031-05-18',team:'Napoli',opponent:'Como',gameAlias:'Como',venue:'Home',competition:'Serie A',round:'37',status:'completed',score:'4–0',resultText:'Napoli 4–0 Como',halftime:'3–0',goalsFor:4,goalsAgainst:0,winner:'Napoli',trophy:'Serie A 2030–31',events:[
 {minute:'18',team:'Napoli',scorer:'Mikey Moore',assist:'Estêvão',officialAssist:true,finish:'Header from Estêvão cross'},
 {minute:'38',team:'Napoli',scorer:'Pio Esposito',assist:'Mikey Moore',officialAssist:true,notes:'Moore beautiful pass, Pio finish'},
 {minute:'43',team:'Napoli',scorer:'Maximilian Beier',assist:'Mikey Moore',officialAssist:true,notes:'Moore reads Beier run early, passes him through alone'},
 {minute:'84',team:'Napoli',scorer:'Scott McTominay',assist:'Pio Esposito',officialAssist:true}
],notes:'HT3–0 FT4–0. Fourth consecutive Scudetto CLINCHED at 87 points/37 Serie A matches, with one league fixture left. Moore 1G2A, Pio 1G1A, Beier goal, McT goal, Estêvão assist. Opponent results for May18 unreported; no invented events.'};
D.napoliComoMay18_2031=match;D.latestMatch=match;D.latestClubMatch=match;D.latestLeagueMatch=match;D.latestCompletedFixture=match;D.lastCompletedLeagueFixture=match;D.latestClubLeagueResult=match;D.currentCalendarDate2031='2031-05-18';
for(const key of ['aprilMay2031Schedule','may2031Schedule','april2031Schedule','schedule203031'])if(Array.isArray(D[key])){
 const row=D[key].find(x=>x.date==='2031-05-18'&&x.team==='Napoli'&&x.competition==='Serie A');
 if(row)Object.assign(row,match);else D[key].push({...match});
 D[key].sort((a,b)=>String(a.date||'9999').localeCompare(String(b.date||'9999')));
}
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==='Napoli'&&r[1]==='Como'&&r[2]==='Serie A'&&String(r[6]||'').includes('18 May 2031')))
 D.results.push(['Napoli','Como','Serie A',4,0,'W','18 May 2031 · Home · Scudetto clinched','HT3–0 FT4–0. 18 Moore header (Estêvão), 38 Pio (Moore), 43 Beier (Moore), 84 McTominay (Pio). FOURTH CONSECUTIVE SERIE A TITLE, Napoli87/37; rivals maximum Inter86 Roma85.']);
if(!D.clubStatAppliedComoScudettoMay18_2031){
 const changes=[
 ['Mikey Moore',9,11,10,13,16,26,17,28,'18 headed goal from Estêvão, 38 assist Pio, 43 assist Beier'],
 ['Pio Esposito',44,18,45,19,171,92,172,93,'38 goal from Moore, 84 assist McTominay'],
 ['Maximilian Beier',40,35,41,35,130,90,131,90,'43 goal from Moore through ball'],
 ['Scott McTominay',1,4,2,4,11,26,12,26,'84 goal from Pio pass'],
 ['Estêvão',3,5,3,6,3,5,3,6,'18 cross assist Moore header']
 ];
 for(const arr of [D.stats,D.statsBySeason?.['2030–31']])if(Array.isArray(arr))for(const p of changes){
  const row=arr.find(r=>Array.isArray(r)&&r[0]===p[0]);if(!row)throw Error('Missing season player '+p[0]);
  if(row[1]===p[1]&&row[2]===p[2]){row[1]=p[3];row[2]=p[4];}
  else if(row[1]!==p[3]||row[2]!==p[4])throw Error('Unexpected season total '+p[0]+': '+row[1]+'/'+row[2]);
  if(!String(row[3]||'').includes('Como Scudetto May18 2031'))row[3]=(row[3]||'')+' | Como Scudetto May18 2031: '+p[9]+'.';
 }
 for(const p of changes){
  const row=(D.careerStats||[]).find(r=>Array.isArray(r)&&r[0]===p[0]);if(!row)throw Error('Missing career player '+p[0]);
  if(row[1]===p[5]&&row[2]===p[6]){row[1]=p[7];row[2]=p[8];}
  else if(row[1]!==p[7]||row[2]!==p[8])throw Error('Unexpected career total '+p[0]+': '+row[1]+'/'+row[2]);
 }
 D.clubStatAppliedComoScudettoMay18_2031=true;
}
D.seasonState=D.seasonState||{};const L=D.seasonState.league=D.seasonState.league||{};
Object.assign(L,{played:37,wins:26,draws:9,losses:2,points:87,goalsFor:78,goalsAgainst:28,goalDifference:50,remaining:1,position:1,asOf:'2031-05-18',titleClinched:true,titleWon:true,won:true,champions:'Napoli',consecutiveScudetti:4,championshipSeason:'2030–31',titleMagic:null,status:'NAPOLI FOURTH CONSECUTIVE SCUDETTO CHAMPIONS: 4–0 Como May18, 87 points/37 matches, 26W9D2L 78GF28GA +50. Inter were 80/36 and Roma79/36 as of May10; absolute maxima Inter86, Roma85. May18 rival match results unreported.',leadPoints:null,runnerUpPoints:80,runnerUpPlayed:36,interMax:86,romaMax:85});
const three=[{name:'Napoli',gameName:'SSC Napoli',rank:1,played:37,points:87,won:26,drawn:9,lost:2,goalsFor:78,goalsAgainst:28,goalDifference:50},{name:'Inter',gameName:'Lombardia FC',rank:2,played:36,points:80,asOf:'2031-05-10',latestResultUnknown:true},{name:'Roma',gameName:'AS Roma',rank:3,played:36,points:79,asOf:'2031-05-10',latestResultUnknown:true}];
L.topThree=three;L.topFive=three;D.latestSerieATopFive=three;D.serieAStandingsAfterComoMay18_2031={date:'2031-05-18',partial:true,napoliVerified:true,rivalsAsOf:'2031-05-10',interMax:86,romaMax:85,rows:three};
if(Array.isArray(D.trophies)&&!D.trophies.includes('Serie A 2030–31'))D.trophies.push('Serie A 2030–31');
D.latestTrophy={competition:'Serie A',status:'Won',winner:'Napoli',season:'2030–31',date:'2031-05-18',opponent:'Como',result:'Napoli 4–0 Como',fourConsecutive:true};
D.latestSerieAChampion='Napoli';D.fourthConsecutiveScudetto2031=true;
const milan={date:'2031-05-25',team:'Napoli',opponent:'Milano FC',gameAlias:'AC Milan',venue:'Away',competition:'Serie A',status:'scheduled'};
const psg={date:'2031-05-31',team:'Napoli',opponent:'Paris Saint-Germain',gameAlias:'PSG',venue:'Neutral',competition:'Champions League',round:'Final',stage:'Final',status:'scheduled',score:null,result:null};
D.upcoming=[milan,psg];D.nextMatch=milan;D.nextFixture=milan;D.nextClubMatch=milan;D.nextClubFixture=milan;D.nextSerieAFixture=milan;D.nextEuropeanFixture=psg;D.seasonState.nextFixture=milan;
D.latestResult=['Napoli','4–0','Como','18 May 2031 SERIE A · FOURTH CONSECUTIVE SCUDETTO · Moore18 (Estêvão), Pio38 (Moore), Beier43 (Moore), McTominay84 (Pio)'];
D.season203031={...(D.season203031||{}),updated:'May18 Napoli 4–0 Como home Serie A, fourth consecutive Scudetto CLINCHED. Napoli87/37, 26W9D2L GF78 GA28 +50. Moore 1G2A, Pio 1G1A, Beier goal, McT goal, Estêvão assist. May25 Milan away league remains, May31 PSG final unplayed.',statsVerifiedThrough:'Napoli club through Como May18: Pio45G19A, Beier41G35A, Moore10G13A, McT2G4A, Estêvão3G6A. Italy separate.',latestResult:'Napoli 4–0 Como',latestResultDate:'2031-05-18',latestResultCompetition:'Serie A',lastCompletedLeagueFixture:match,latestLeagueResult:match,nextClubOpponent:'AC Milan',nextClubCompetition:'Serie A',nextClubDate:'2031-05-25',nextClubMatch:milan,nextClubFixture:milan,serieA:{...(D.season203031?.serieA||{}),played:37,points:87,won:true,titleClinched:true,champions:'Napoli',consecutiveTitles:4,wins:26,draws:9,losses:2,goalsFor:78,goalsAgainst:28,goalDifference:50,remaining:1,position:1,asOf:'2031-05-18',source:'Napoli 4–0 Como home May18, manager-confirmed; rivals mathematically unable to reach87'},titleRace:{...(D.season203031?.titleRace||{}),napoliPoints:87,napoliPlayed:37,interMaxPoints:86,romaMaxPoints:85,won:true,clinched:true,interPointsAsOf:'2031-05-10',romaPointsAsOf:'2031-05-10',nextLeagueFixture:'AC Milan away May25'},championsLeague:{...(D.season203031?.championsLeague||{}),finalOpponent:'Paris Saint-Germain',finalDate:'2031-05-31',finalStatus:'scheduled unplayed',finalResult:null}};
D.statsScope='Napoli competitive club through Como May18: Pio45G19A Beier41G35A Moore10G13A McT2G4A Estêvão3G6A. Italy separate. Napoli Serie A CHAMPIONS with87/37, fourth consecutive Scudetto; rivals last confirmed May10.';
D.hero={...(D.hero||{}),articleId:ids[0],strap:'SERIE A CHAMPIONS · FOURTH CONSECUTIVE SCUDETTO · NAPOLI 4–0 COMO'};
D.ticker=['QUATTRO SCUDETTI CONSECUTIVI · NAPOLI ARE CHAMPIONS','NAPOLI 4–0 COMO · MOORE18 (ESTÊVÃO) · PIO38 (MOORE)','BEIER43 (MOORE) · MCTOMINAY84 (PIO) · CLEAN SHEET','NAPOLI 87 POINTS / 37 GAMES · 26W 9D 2L · TITLE CLINCHED','MIKEY MOORE 1 GOAL + 2 ASSISTS · FIRST-HALF MASTERCLASS','COPPA ITALIA CHAMPIONS · SUPER COPPA CHAMPIONS','MILAN AWAY MAY25 · CHAMPIONS LEAGUE FINAL PSG MAY31 UNPLAYED'];
D.whispers=[['FOUR-TIME CHAMPIONS','Napoli 4–0 Como clinches a fourth consecutive Scudetto. 87 points from37, above every rival possible total.'],['MOORE MAKES HISTORY','18 headed opener from Estêvão, 38 assist to Pio, 43 through ball for Beier. Goal and two assists by halftime.'],['SCOTT FINISHES IT','Pio finds McTominay for the fourth on 84 minutes. Napoli close the match with a clean sheet.'],['TROPHY CABINET','Supercoppa and Coppa Italia already won; fourth straight Serie A title now secure.'],['PARIS IS NEXT','AC Milan away May25 first. PSG Champions League final at neutral venue May31, fourth successive UCL final, unplayed.']];
const card=(a,v)=>'<article class="article-card '+E(v)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const a=arts[0],hero=$('heroStory');
if(hero)hero.innerHTML='<div class="hero-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h2>'+E(a.headline)+'</h2><p>'+E(a.dek)+'</p><span class="hero-read">Read the story →</span></div>';
if($('topStories'))$('topStories').innerHTML=D.articles.slice(1,5).map((x,i)=>'<button type="button" class="top-story" data-article="'+E(x.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(x.category)+'</small><strong>'+E(x.headline)+'</strong></div></button>').join('');
if($('latestNews'))$('latestNews').innerHTML=D.articles.slice(1,7).map((x,i)=>card(x,i?'compact':'wide')).join('');
if($('newsGrid'))$('newsGrid').innerHTML=D.articles.map((x,i)=>card(x,i?'standard':'lead-grid')).join('');
if($('articleFilters'))$('articleFilters').innerHTML=['All',...new Set(D.articles.map(x=>x.category))].map((x,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(x)+'">'+E(x)+'</button>').join('');
if($('tickerTrack'))$('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
if($('whisperList'))$('whisperList').innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
if($('latestResult'))$('latestResult').innerHTML='<div class="latest-score"><span>NAP</span><strong>4–0</strong><span>COM</span></div><p>SERIE A · MAY18 · FOURTH CONSECUTIVE SCUDETTO</p>';
if($('formLine'))$('formLine').innerHTML='<div><strong>SCUDETTO CHAMPIONS · NAPOLI 87 / 37</strong><span>26W · 9D · 2L · +50 · FOUR CONSECUTIVE TITLES</span></div><div><strong>NAPOLI 4–0 COMO · MOORE 1G2A</strong><span>Moore18 · Pio38 · Beier43 · McTominay84</span></div><div><strong>MILAN AWAY MAY25 · PSG FINAL MAY31</strong><span>League clinched · European final still to play</span></div>';
if($('upcomingStrip'))$('upcomingStrip').innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+E(x.competition)+' · '+E(x.date.slice(8))+' May</span><strong>'+E(x.gameAlias||x.opponent)+'</strong><small>'+E(x.venue)+'</small></div>').join('');
const hs=document.querySelector('.header-status span:last-child');if(hs)hs.textContent='FOUR CONSECUTIVE SCUDETTI · NAPOLI 87 / 37';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.content='Napoli 4–0 Como May18 2031. Fourth consecutive Serie A title secured on87 points. Mikey Moore goal and two assists, Pio, Beier, McTominay score. PSG Champions League final May31 unplayed.';
if($('matchesList')&&!$('matchesList').querySelector('[data-como-scudetto-may18]'))$('matchesList').innerHTML='<div class="match-card" data-como-scudetto-may18="true"><div class="result-badge W">W</div><div class="match-main"><span>Serie A · 18 May 2031 · Champions</span><strong>Napoli <b>4–0</b> Como</strong><p>Moore18 (Estêvão) · Pio38 (Moore) · Beier43 (Moore) · McTominay84 (Pio) · FOURTH SCUDETTO</p></div></div>'+$('matchesList').innerHTML;

/* Stats Room reconciliation: one player identity and one 2029–30 season, not two. */
const history202930=D.statsBySeason?.['2029–30'];
if(!Array.isArray(history202930))throw Error('Stats Room: 2029–30 archive missing');
const pioFinal=history202930.find(r=>r[0]==='Francesco Pio Esposito');
const pioMarch=history202930.find(r=>r[0]==='Pio Esposito');
if(pioFinal&&pioMarch){
 if(Number(pioFinal[1])!==34||Number(pioFinal[2])!==21)throw Error('Stats Room: unexpected final Pio baseline');
 if(Number(pioMarch[1])!==28||Number(pioMarch[2])!==20)throw Error('Stats Room: unexpected March Pio baseline');
 pioFinal[0]='Pio Esposito';
 pioFinal[3]='34 goals and 21 assists through the Porto Champions League final, 1 June 2030. Supersedes the 28-goal, 20-assist March squad snapshot.';
 history202930.splice(history202930.indexOf(pioMarch),1);
}else if(pioFinal){
 pioFinal[0]='Pio Esposito';
}else if(!pioMarch||Number(pioMarch[1])!==34||Number(pioMarch[2])!==21){
 throw Error('Stats Room: missing final Pio 2029–30 total');
}
if(history202930.filter(r=>r[0]==='Pio Esposito').length!==1)throw Error('Stats Room: duplicate Pio remains');
history202930.sort((a,b)=>(Number(b[1])||0)-(Number(a[1])||0)||(Number(b[2])||0)-(Number(a[2])||0));
const pioCareerRow=D.careerStats?.find(r=>r[0]==='Pio Esposito');
if(!pioCareerRow)throw Error('Stats Room: Pio career row missing');
const pioSeasonRows=['2027–28','2028–29','2029–30','2030–31'].map(y=>{
 const r=D.statsBySeason?.[y]?.find(row=>row[0]==='Pio Esposito');
 if(!r)throw Error('Stats Room: Pio missing '+y);
 return r;
});
pioCareerRow[1]=pioSeasonRows.reduce((sum,r)=>sum+Number(r[1]||0),0);
pioCareerRow[2]=pioSeasonRows.reduce((sum,r)=>sum+Number(r[2]||0),0);
if(pioCareerRow[1]!==144||pioCareerRow[2]!==73)throw Error('Stats Room: Pio reconciliation failed');
D.careerStats.sort((a,b)=>(Number(b[1])||0)-(Number(a[1])||0)||(Number(b[2])||0)-(Number(a[2])||0));
D.statsRoomAsOf='18 May 2031';
D.statsRoomAudit={pioCareerGoals:144,pioCareerAssists:73,pio202930:[34,21],clubOnly:true,historical202829Partial:true};
D.keeperStats203031=D.keeperStats203031||{};
D.keeperStats203031.Peacock={
 ...(D.keeperStats203031.Peacock||{}),
 lastMatch:'Napoli 3–1 Bergamo · 14 May 2031 Coppa Italia final',
 lastConfirmedCleanSheet:'Milano FC 0–2 Napoli · 5 March 2031 Coppa Italia semifinal first leg',
 lastKnownPerformance:'Started Coppa final; Fruk scored a 72-minute Bergamo penalty. Other save and season appearance totals not established.',
 finalMay14:{started:true,penaltyConceded:1,otherSaves:null,cleanSheet:false}
};
})();
