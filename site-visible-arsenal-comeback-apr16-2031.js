/* 16 APRIL 2031 · Napoli 3–1 Arsenal, UEFA Champions League QF second leg; Napoli advance 4–3 on aggregate. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),E=x=>String(x??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ids=[
'napoli-arsenal-three-one-estevao-91-beier-comeback-apr16-2031',
'maximilian-beier-two-goals-one-assist-arsenal-apr16-2031',
'estevao-header-91-beier-cross-napoli-arsenal-apr16-2031',
'rice-72-napoli-arsenal-collapse-turnaround-bellandi-apr2031',
'napoli-third-straight-ucl-dream-survives-arsenal-apr2031',
'maradona-fan-reactions-napoli-arsenal-91st-minute-2031'];
const articles=ids.map(id=>(D.articles||[]).find(x=>x.id===id));if(articles.some(x=>!x))throw Error('Missing Arsenal Apr16 newsroom story');
D.articles=[...articles,...(D.articles||[]).filter(x=>!ids.includes(x.id))];
const match={date:'2031-04-16',team:'Napoli',opponent:'Arsenal',venue:'Home',competition:'Champions League',round:'Quarterfinal',leg:2,status:'completed',score:'3–1',resultText:'Napoli 3–1 Arsenal',goalsFor:3,goalsAgainst:1,aggregate:'Napoli 4–3 Arsenal',qualifiedFor:'Semifinals',events:[
{minute:'49',team:'Napoli',scorer:'Maximilian Beier',assist:'João Neves',officialAssist:true,notes:'Beier breaks the deadlock, Neves supplies the official assist; aggregate 2–2.'},
{minute:'72',team:'Arsenal',scorer:'Declan Rice',assist:null,officialAssist:null,notes:'Arsenal equalise on the night and take a 3–2 aggregate lead.'},
{minute:null,minuteKnown:false,ordering:'After Rice at 72′ and before Estêvão 90+1′',team:'Napoli',scorer:'Maximilian Beier',assist:null,officialAssist:false,notes:'Cross comes through towards goal; ball rolls toward target, Raya comes to collect, Beier gets one poke on it and it trickles over the line. No official assist. Aggregate level 3–3.'},
{minute:'90+1',team:'Napoli',scorer:'Estêvão',assist:'Maximilian Beier',officialAssist:true,finish:'Header',notes:'Beier makes a run on the flank and crosses; Estêvão heads home at 90+1. Napoli lead 4–3 aggregate.'}],
notes:'Full time Napoli 3–1 Arsenal at home, 4–3 Napoli on aggregate; semifinal qualification confirmed. No minute assigned to Beier second goal. Previously reported Olise-to-Paz header in a crashed attempt was explicitly voided and is not a match event.'};
D.arsenalHomeApril16_2031=match;
for(const k of ['april2031Schedule','schedule203031','fixturesFebMar2031'])if(Array.isArray(D[k])){
const x=D[k].find(x=>x.team==='Napoli'&&x.date==='2031-04-16'&&x.competition==='Champions League');if(x)Object.assign(x,match);
}
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Arsenal'&&String(x[6]||'').includes('16 Apr 2031')))D.results.push(['Napoli','Arsenal','Champions League',3,1,'W','16 Apr 2031 · Home · Quarterfinal second leg','Beier 49′ (João Neves), Declan Rice 72′, Beier second goal (no official assist; after Rice, before stoppage time), Estêvão header 90+1′ (Beier). Napoli advance 4–3 on aggregate to semifinals.']);
D.latestResult=['Napoli','3–1','Arsenal','Champions League · Quarterfinal second leg · 16 Apr 2031 · Napoli advance 4–3 aggregate'];
D.latestMatch=match;D.latestCompletedFixture=match;D.lastCompletedEuropeanFixture=match;D.currentCalendarDate2031='2031-04-16';
D.upcoming=Array.isArray(D.april2031Schedule)?D.april2031Schedule.filter(x=>x.status==='scheduled'&&x.date>'2031-04-16'):(D.upcoming||[]).filter(x=>x.date>'2031-04-16');
D.nextMatch=D.upcoming[0];D.nextFixture=D.nextMatch;D.nextClubMatch=D.nextMatch;D.nextClubFixture=D.nextMatch;
D.uclQuarterfinalArsenal2031={...(D.uclQuarterfinalArsenal2031||{}),secondLeg:match,secondLegResult:'Napoli 3–1 Arsenal',aggregate:{Napoli:4,Arsenal:3},afterFirstLeg:'Arsenal led 2–1 after first leg; overturned in Naples',status:'completed',result:'Napoli advance 4–3 on aggregate',winner:'Napoli',qualifier:'Napoli',nextMatch:null,advancement:'Napoli qualified for Champions League semifinals after 3–1 home win'};
D.seasonState=D.seasonState||{};const cl=D.seasonState.championsLeague||(D.seasonState.championsLeague={});
cl.stage='Semifinals';cl.status='Quarterfinal win completed; semifinal opponent and dates not confirmed';cl.quarterfinalOpponent='Arsenal';cl.quarterfinal=cl.quarterfinal||{};cl.quarterfinal.stage='Quarterfinals';cl.quarterfinal.opponent='Arsenal';cl.quarterfinal.status='completed';cl.quarterfinal.result='Napoli progress 4–3 aggregate';cl.quarterfinal.aggregate={Napoli:4,Arsenal:3};cl.quarterfinal.winner='Napoli';cl.quarterfinal.qualifier='Napoli';cl.quarterfinal.secondLegResult='Napoli 3–1 Arsenal';
cl.quarterfinal.legs=cl.quarterfinal.legs||[];const leg2=cl.quarterfinal.legs.find(x=>x.date==='2031-04-16');
if(leg2)Object.assign(leg2,match);else cl.quarterfinal.legs.push(match);
cl.nextStage='Semifinals';cl.semifinal={...(cl.semifinal||{}),status:'scheduled, details not yet confirmed',opponent:null,firstLeg:null,secondLeg:null};
D.seasonState.nextFixture=D.nextMatch;
if(D.seasonState.ucl&&typeof D.seasonState.ucl==='object'){D.seasonState.ucl.stage='Semifinals';D.seasonState.ucl.status='Napoli qualified from Arsenal QF 4–3 aggregate';D.seasonState.ucl.quarterfinalAggregate={Napoli:4,Arsenal:3}}
if(!D.clubSeasonStatAppliedArsenalHomeApril16_2031){
for(const arr of [D.stats,D.statsBySeason&&D.statsBySeason['2030–31']]){
if(!Array.isArray(arr))continue;
for(const [name,expectG,expectA,afterG,afterA,note] of [
['Maximilian Beier',33,31,35,32,'Arsenal HOME UCL quarterfinal Apr16: goal 49′ from João Neves; second goal later after Rice 72′ with NO official assist (time not reported); official assist 90+1′ to Estêvão header. 2G1A.'],
['Estêvão',2,5,3,5,'Arsenal HOME UCL QF Apr16: headed winner at 90+1′ from Maximilian Beier official assist.'],
['João Neves',1,3,1,4,'Arsenal HOME UCL QF Apr16: official assist for Beier opening goal 49′.']
]){
const row=arr.find(x=>Array.isArray(x)&&x[0]===name);if(!row)throw Error('Missing club stats '+name);
if(row[1]===expectG&&row[2]===expectA){row[1]=afterG;row[2]=afterA;}else if(row[1]!==afterG||row[2]!==afterA)throw Error('Unexpected club totals for '+name+' '+row[1]+'/'+row[2]);
if(!String(row[3]||'').includes('Arsenal HOME UCL quarterfinal Apr16')&&!String(row[3]||'').includes('Arsenal HOME UCL QF Apr16'))row[3]=(row[3]||'')+' | '+note;
}
}
if(Array.isArray(D.careerStats)){
for(const [name,expectG,expectA,afterG,afterA] of [['Maximilian Beier',123,86,125,87],['Estêvão',2,5,3,5],['João Neves',6,8,6,9]]){
const row=D.careerStats.find(x=>Array.isArray(x)&&x[0]===name);if(!row)throw Error('Missing career stats '+name);
if(row[1]===expectG&&row[2]===expectA){row[1]=afterG;row[2]=afterA;}else if(row[1]!==afterG||row[2]!==afterA)throw Error('Unexpected career totals '+name+': '+row[1]+','+row[2]);
}
}
D.clubSeasonStatAppliedArsenalHomeApril16_2031=true;
}
D.season203031={...(D.season203031||{}),updated:'16 Apr 2031 Napoli 3–1 Arsenal at home Champions League QF second leg; Napoli advance 4–3 aggregate. Beier 49′ (Neves), Rice 72′, Beier second (no official assist, minute unspecified), Estêvão header 90+1′ (Beier). First victory after four-game winless stretch. Serie A remains Napoli 77/32 seven clear of Roma 70/32; Cagliari home Apr19 next.',statsVerifiedThrough:'Napoli club goals/assists through Arsenal Apr16: Beier 35G32A, Pio Esposito 39G16A, Estêvão 3G5A, João Neves 1G4A, Paz 5G4A. Canceled game header by Paz and Olise cross excluded. Italy national-team records unchanged.',nextClubOpponent:'Cagliari',nextClubCompetition:'Serie A',nextClubDate:'2031-04-19',championsLeague:{...(D.season203031?.championsLeague||{}),stage:'Semifinals',status:'Napoli beat Arsenal 4–3 on aggregate and qualified for semifinals',quarterfinalOpponent:'Arsenal',quarterfinalAggregate:{Napoli:4,Arsenal:3},quarterfinalWinner:'Napoli',semifinalOpponent:null}};
D.statsScope='Napoli club contributions through Arsenal home UCL QF Apr16: Beier35G32A, Pio39G16A, Estêvão3G5A, João Neves1G4A, Paz5G4A. International goals and assists remain separate.';
D.hero={...(D.hero||{}),articleId:ids[0],strap:'CHAMPIONS LEAGUE · NAPOLI 3–1 ARSENAL · 4–3 AGGREGATE · SEMIFINALISTS'};
D.ticker=['NAPOLI 3–1 ARSENAL · QUARTERFINAL SECOND LEG · NAPOLI ADVANCE 4–3','BEIER SCORES TWICE · ESTÊVÃO HEADER WINS IT IN 90+1′','BEIER 35 CLUB GOALS / 32 ASSISTS · JOÃO NEVES 4 ASSISTS','CHAMPIONS LEAGUE SEMIFINALS · THIRD STRAIGHT EUROPEAN TITLE DREAM ALIVE','NAPOLI 77/32 · ROMA 70/32 · SEVEN-POINT SERIE A LEAD','CAGLIARI HOME 19 APRIL · AC MILAN CUP SEMIFINAL HOME 23 APRIL'];
D.whispers=[['ESTÊVÃO IN STOPPAGE TIME','Beier crossed, Estêvão headed home at 90+1′; Napoli beat Arsenal 3–1 at home, 4–3 aggregate.'],['BEIER’S EUROPEAN NIGHT','Two goals against Arsenal and an official assist for the 90+1′ winner; 35 club goals, 32 assists this season.'],['THE DYNASTY LIVES','Napoli, winners of the previous two Champions Leagues, have reached another semifinal.'],['SCUDETTO STILL IN PLAY','Napoli lead Roma 77–70 after 32 matches each, with six league fixtures remaining.'],['NEXT AT THE MARADONA','Cagliari visit Apr19; AC Milan follow Apr23 for the Coppa Italia semifinal second leg, Napoli 2–0 ahead on aggregate.']];
const card=(a,v)=>'<article class="article-card '+E(v)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const a=articles[0],hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h2>'+E(a.headline)+'</h2><p>'+E(a.dek)+'</p><span class="hero-read">Read the story →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((x,i)=>'<button type="button" class="top-story" data-article="'+E(x.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(x.category)+'</small><strong>'+E(x.headline)+'</strong></div></button>').join('');
const latest=$('latestNews');if(latest)latest.innerHTML=D.articles.slice(1,7).map((x,i)=>card(x,i?'compact':'wide')).join('');
const news=$('newsGrid');if(news)news.innerHTML=D.articles.map((x,i)=>card(x,i?'standard':'lead-grid')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(x=>x.category))].map((x,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(x)+'">'+E(x)+'</button>').join('');
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
const wh=$('whisperList');if(wh)wh.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
const lr=$('latestResult');if(lr)lr.innerHTML='<div class="latest-score"><span>NAP</span><strong>3–1</strong><span>ARS</span></div><p>UCL QUARTERFINAL · 16 APR · NAPOLI ADVANCE 4–3 ON AGGREGATE · ESTÊVÃO 90+1′</p>';
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI 3–1 ARSENAL · 4–3 AGGREGATE</strong><span>Beier twice, Rice 72′, Estêvão 90+1′ from Beier · Through to semifinals</span></div><div><strong>NAPOLI 77/32 · ROMA 70/32</strong><span>Seven points clear · Six Serie A matches left</span></div><div><strong>CAGLIARI HOME · 19 APRIL</strong><span>Serie A returns · AC Milan Coppa semifinal home Apr23, Napoli lead 2–0</span></div>';
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.slice(0,5).map(x=>'<div class="fixture"><span>'+E(x.competition)+' · '+E(x.date.slice(8))+' Apr</span><strong>'+E(x.gameAlias||x.opponent)+'</strong><small>'+E(x.venue)+'</small></div>').join('');
const header=document.querySelector('.header-status span:last-child');if(header)header.textContent='NAPOLI 3–1 ARSENAL · EUROPEAN SEMIFINALISTS · 4–3 AGG';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli 3–1 Arsenal, 4–3 aggregate. Beier scores twice and assists Estêvão’s 90+1′ header; the two-time defending European champions advance to Champions League semifinals.');
const matches=$('matchesList');if(matches)matches.innerHTML='<div class="match-card"><div class="result-badge W">W</div><div class="match-main"><span>Champions League · Quarterfinal second leg · 16 April 2031</span><strong>Napoli <b>3–1</b> Arsenal</strong><p>Beier twice · Declan Rice 72′ · Estêvão 90+1′ from Beier · Napoli advance 4–3 aggregate</p></div></div>'+matches.innerHTML;
})();