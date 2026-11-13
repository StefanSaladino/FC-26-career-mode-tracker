/* Juventus 1–1 Napoli 12 Apr 2031 Serie A; confirm four-game winless run, exact top six, Pio/Beier stats. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),E=x=>String(x??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ids=['juventus-napoli-one-one-cvetkovic-pio-apr12-2031','napoli-seven-points-clear-roma-70-table-apr12-2031','pio-beier-connection-juventus-39-31-apr2031','napoli-arsenal-home-recovery-april-schedule-bellandi-2031'];
const articles=ids.map(id=>(D.articles||[]).find(x=>x.id===id));if(articles.some(x=>!x))throw Error('Juventus April12 article missing');
D.articles=[...articles,...(D.articles||[]).filter(x=>!ids.includes(x.id))];
const match={date:'2031-04-12',team:'Napoli',opponent:'Juventus',venue:'Away',competition:'Serie A',status:'completed',score:'1–1',resultText:'Juventus 1–1 Napoli',halftime:'Juventus 1–1 Napoli',goalsFor:1,goalsAgainst:1,events:[{minute:'8',team:'Juventus',scorer:'Cvetkovic',assist:null,officialAssist:null},{minute:'19',team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',officialAssist:true}],notes:'Juventus led from 8′; Pio equalised at 19′ assisted by Beier; 1–1 at half-time and full time. No further events supplied.'};
D.juventusNapoliApril12_2031=match;
for(const k of ['april2031Schedule','schedule203031','fixturesFebMar2031'])if(Array.isArray(D[k])){
let x=D[k].find(x=>x.team==='Napoli'&&x.date==='2031-04-12'&&x.competition==='Serie A');if(x)Object.assign(x,match);
D[k].sort((a,b)=>String(a.date||'9999').localeCompare(String(b.date||'9999')));
}
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Juventus'&&x[1]==='Napoli'&&String(x[6]||'').includes('12 Apr 2031')))D.results.push(['Juventus','Napoli','Serie A',1,1,'D','12 Apr 2031 · Away','Cvetkovic 8′; Pio Esposito 19′ (Maximilian Beier official assist). HT 1–1; FT 1–1. Napoli 77 points / 32 league games, Roma 70 / 32.']);
D.latestResult=['Juventus','1–1','Napoli','Serie A · 12 Apr 2031 · Cvetkovic 8′; Pio Esposito 19′ (Beier assist)'];D.latestMatch=match;D.latestClubLeagueResult=match;D.currentCalendarDate2031='2031-04-12';
D.upcoming=Array.isArray(D.april2031Schedule)?D.april2031Schedule.filter(x=>x.status==='scheduled'):(D.upcoming||[]).filter(x=>x.date!=='2031-04-12');
D.nextMatch=D.upcoming[0];D.nextFixture=D.nextMatch;D.nextClubMatch=D.nextMatch;D.nextClubFixture=D.nextMatch;
const rows=[['SSC Napoli',32,23,8,1,66,23,43,77],['AS Roma',32,21,7,4,58,35,23,70],['Lombardia FC',32,20,8,4,67,35,32,68],['Juventus',32,20,8,4,62,36,26,68],['Milano FC',32,19,8,5,66,37,29,65],['Latium',32,13,11,8,43,43,0,50]];
const aliases=[['SSC Napoli','Napoli'],['AS Roma','Roma'],['Lombardia FC','Inter'],['Juventus','Juventus'],['Milano FC','AC Milan'],['Latium','Lazio']];
D.serieAStandings203031={source:'Manager league table screenshot after Juventus 1–1 Napoli, 12 April 2031',date:'2031-04-12',topFiveOnly:false,rows,aliases,unknownColumns:[],allTopSixSamePlayed:true};
D.serieAStandingsLastConfirmed={verifiedNapoli:rows[0],topFive:rows.slice(0,5),topSix:rows,asOf:'2031-04-12',otherClubsBelowSixthNotConfirmed:true,otherClubsNotRefreshed:false,tablePositionUnknown:false,knownFieldsOnly:['rank','team','played','wins','draws','losses','goalsFor','goalsAgainst','goalDifference','points']};
const topFive=[{name:'Napoli',gameName:'SSC Napoli',rank:1,played:32,points:77},{name:'Roma',gameName:'AS Roma',rank:2,played:32,points:70},{name:'Inter',gameName:'Lombardia FC',rank:3,played:32,points:68},{name:'Juventus',gameName:'Juventus',rank:4,played:32,points:68},{name:'AC Milan',gameName:'Milano FC',rank:5,played:32,points:65}];
D.latestSerieATopFive=topFive;D.serieAAfterJuventusApril12_2031={date:'2031-04-12',played:32,points:77,wins:23,draws:8,losses:1,goalsFor:66,goalsAgainst:23,goalDifference:43,remaining:6,position:1,runnerUp:'AS Roma',runnerUpPoints:70,runnerUpPlayed:32,leadPoints:7,topSix:rows};
D.seasonState=D.seasonState||{};
D.seasonState.league={...(D.seasonState.league||{}),played:32,points:77,wins:23,draws:8,losses:1,goalsFor:66,goalsAgainst:23,goalDifference:43,remaining:6,position:1,runnerUp:'Roma',runnerUpPoints:70,leadPoints:7,asOf:'2031-04-12',status:'Napoli 77 from 32 after Juventus 1–1; Roma 70 from 32; Inter and Juventus both 68/32; six games left.',topFive};
D.seasonState.nextFixture=D.nextMatch;
if(!D.clubSeasonStatAppliedJuventusApril12_2031){
for(const arr of [D.stats,D.statsBySeason&&D.statsBySeason['2030–31']]){
if(!Array.isArray(arr))continue;
const p=arr.find(x=>Array.isArray(x)&&x[0]==='Pio Esposito'),b=arr.find(x=>Array.isArray(x)&&x[0]==='Maximilian Beier');
if(!p||!b)throw Error('Missing Pio or Beier Napoli club stats');
if(p[1]===38)p[1]=39;else if(p[1]!==39)throw Error('Unexpected Pio season goals '+p[1]);
if(b[2]===30)b[2]=31;else if(b[2]!==31)throw Error('Unexpected Beier season assists '+b[2]);
if(!String(p[3]||'').includes('Juventus away 12 Apr 2031'))p[3]=(p[3]||'')+' | Juventus away 12 Apr 2031: Pio Esposito goal 19′, official Beier assist.';
if(!String(b[3]||'').includes('Juventus away 12 Apr 2031'))b[3]=(b[3]||'')+' | Juventus away 12 Apr 2031: Beier official assist to Pio goal 19′.';
}
if(Array.isArray(D.careerStats)){
const p=D.careerStats.find(x=>x[0]==='Pio Esposito'),b=D.careerStats.find(x=>x[0]==='Maximilian Beier');
if(p){if(p[1]===165)p[1]=166;else if(p[1]!==166)throw Error('Unexpected career Pio goals '+p[1])}
if(b){if(b[2]===85)b[2]=86;else if(b[2]!==86)throw Error('Unexpected career Beier assists '+b[2])}
}
D.clubSeasonStatAppliedJuventusApril12_2031=true;
}
D.season203031={...(D.season203031||{}),updated:'12 Apr 2031 Juventus 1–1 Napoli; Cvetkovic 8′, Pio 19′ official Beier assist. Napoli 77 from 32, Roma 70 from 32, seven clear with six Serie A matches left. Four consecutive games in all competitions without a win. Arsenal home UCL QF return Apr16; Arsenal lead 2–1 aggregate.',statsVerifiedThrough:'Napoli club contributions through Juventus Apr12: Pio 39G16A, Beier 33G31A, Paz 5G4A. One Pio goal and one official Beier assist added exactly once. Italy contributions excluded.',serieA:{...(D.season203031?.serieA||{}),played:32,points:77,position:1,leadPoints:7,remaining:6,source:'Manager league screenshot after Juventus 1–1 Napoli 12 April; six clubs played 32.'},nextClubOpponent:'Arsenal',nextClubCompetition:'Champions League',nextClubDate:'2031-04-16'};
D.statsScope='Napoli club contributions through Juventus Apr12: Pio Esposito 39 goals 16 assists; Maximilian Beier 33 goals 31 assists; Nico Paz 5 goals 4 assists. Do not add Italy matches to Napoli totals.';
D.hero={...(D.hero||{}),articleId:ids[0],strap:'JUVENTUS 1–1 NAPOLI · FOUR MATCHES WITHOUT A WIN'};
D.ticker=['JUVENTUS 1–1 NAPOLI · CVETKOVIC 8′ · PIO 19′ (BEIER)','NAPOLI 77 POINTS FROM 32 · ROMA 70 FROM 32 · LEAD SEVEN','NAPOLI FOUR MATCHES WITHOUT A WIN · THREE STRAIGHT SERIE A DRAWS','NAPOLI vs ARSENAL · UCL QUARTERFINAL RETURN · 16 APRIL','ARSENAL LEAD 2–1 AGGREGATE · NAPOLI DEFEND EUROPEAN TITLE','PIO 39 CLUB GOALS · BEIER 31 CLUB ASSISTS'];
D.whispers=[['FOUR WITHOUT A WIN','Lazio, Pisa, Arsenal and Juventus: Napoli have drawn three and lost one across all competitions.'],['SEVEN-POINT TITLE LEAD','Napoli 77 from 32, Roma 70 from 32; all six listed league sides have played 32.'],['PIO AND BEIER','Pio equalised against Juventus in minute 19 from Beier’s official assist; season totals 39G and 31A respectively.'],['ARSENAL AT THE MARADONA','Napoli trail 2–1 on aggregate, with the second leg scheduled at home on 16 April.'],['RASPADORI REQUEST','The striker has requested to leave; no destination or completed move is confirmed.']];
const card=(a,v)=>'<article class="article-card '+E(v)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const a=articles[0],hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h2>'+E(a.headline)+'</h2><p>'+E(a.dek)+'</p><span class="hero-read">Read the story →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((x,i)=>'<button type="button" class="top-story" data-article="'+E(x.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(x.category)+'</small><strong>'+E(x.headline)+'</strong></div></button>').join('');
const latest=$('latestNews');if(latest)latest.innerHTML=D.articles.slice(1,7).map((x,i)=>card(x,i?'compact':'wide')).join('');
const news=$('newsGrid');if(news)news.innerHTML=D.articles.map((x,i)=>card(x,i?'standard':'lead-grid')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(x=>x.category))].map((x,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(x)+'">'+E(x)+'</button>').join('');
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
const wh=$('whisperList');if(wh)wh.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
const lr=$('latestResult');if(lr)lr.innerHTML='<div class="latest-score"><span>JUV</span><strong>1–1</strong><span>NAP</span></div><p>SERIE A · 12 APR · CVETKOVIC 8′ · PIO 19′ (BEIER ASSIST)</p>';
const form=$('formLine');if(form)form.innerHTML='<div><strong>JUVENTUS 1–1 NAPOLI · TURIN DRAW</strong><span>Cvetkovic 8′ · Pio 19′ from Beier · Four matches without a win</span></div><div><strong>NAPOLI 77 PTS / 32 MATCHES</strong><span>Roma 70/32 · Seven points clear · Six league games to play</span></div><div><strong>ARSENAL HOME · 16 APRIL</strong><span>Champions League quarterfinal second leg · Arsenal lead 2–1</span></div>';
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.slice(0,5).map(x=>'<div class="fixture"><span>'+E(x.competition)+' · '+E(x.date.slice(8))+' Apr</span><strong>'+E(x.gameAlias||x.opponent)+'</strong><small>'+E(x.venue)+'</small></div>').join('');
const header=document.querySelector('.header-status span:last-child');if(header)header.textContent='JUVENTUS 1–1 NAPOLI · SEVEN POINTS CLEAR';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Juventus 1–1 Napoli: Cvetkovic scores, Pio equalises from Beier. Napoli remain seven points clear of Roma on 77 points with Arsenal return next.');
const matches=$('matchesList');if(matches)matches.innerHTML='<div class="match-card"><div class="result-badge D">D</div><div class="match-main"><span>Serie A · 12 April 2031</span><strong>Juventus <b>1–1</b> Napoli</strong><p>Cvetkovic 8′; Pio Esposito 19′ (Beier official assist)</p></div></div>'+matches.innerHTML;
})();