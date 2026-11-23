/* 27 Sep 2031: publish Inter and Sassuolo in one coherent edition; PSG October 1 next. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const E=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[ch]));
const ids=["sassuolo-napoli-1-3-burnett-reprieve-sep27-2031","napoli-inter-3-2-beier-bonny-epolo-sep2031","burnett-first-half-sassuolo-goalkeeper-depth-sep2031"];
const prev=D.articles||[],front=ids.map(id=>prev.find(a=>a.id===id));
if(front.some(x=>!x))throw Error('Inter/Sassuolo editorial articles missing');
const chosen=new Set(ids);D.articles=[...front,...prev.filter(x=>!chosen.has(x.id))];
const inter={date:null,season:'2031–32',team:'Napoli',opponent:'Inter',venue:'Home',competition:'Serie A',status:'completed',score:'3–2',resultText:'Napoli 3–2 Inter',goalsFor:3,goalsAgainst:2,
events:[{minute:'8',team:'Napoli',scorer:'Maximilian Beier',assist:'Mikey Moore',officialAssist:true},{minute:'12',team:'Inter',scorer:'Bonny'},{minute:'23',team:'Napoli',scorer:'Pio Esposito',assist:'Warren Zaïre-Emery',officialAssist:true},{minute:'31',team:'Inter',scorer:'Bonny'},{minute:'45+3',team:'Napoli',scorer:'Maximilian Beier',assist:'Warren Zaïre-Emery',officialAssist:true}],notes:'Bonny threatened an equaliser at 90+2; Epolo saved and put the ball behind for a corner. Exact match date not established.'};
const sassuolo={date:'2031-09-27',season:'2031–32',team:'Napoli',opponent:'Sassuolo',venue:'Away',competition:'Serie A',status:'completed',score:'3–1',resultText:'Sassuolo 1–3 Napoli',goalsFor:3,goalsAgainst:1,halftime:'Sassuolo 0–1 Napoli',
events:[{minute:'22',team:'Napoli',scorer:'Pio Esposito',assist:'Anton Stach',officialAssist:true},{minute:'48',team:'Napoli',scorer:'Nico Paz',assist:'Mikey Moore',officialAssist:true,notes:'Powerful strike off the post and in'},{minute:'77',team:'Napoli',scorer:'João Neves',assist:'Scott McTominay',officialAssist:true,notes:'Top-corner finish after attractive build-up'},{minute:'80',team:'Sassuolo',scorer:'Weiper'}],
notes:'Burnett very good, notably first half. Half-time xG Sassuolo 3.3, Napoli 1.7. Sassuolo xG still 3.3 at 78 minutes. Weiper 80 was their only chance of the second half. No final xG established.'};
D.interNapoliSep2031=inter;D.sassuoloNapoliSep27_2031=sassuolo;D.currentCalendarDate2031='2031-09-27';
for(const key of ['latestMatch','latestCompletedFixture','lastCompletedFixture','latestClubMatch','latestClubResult','latestClubLeagueResult','latestLeagueMatch','lastCompletedLeagueFixture'])D[key]=sassuolo;
D.latestResult=['Sassuolo','1–3','Napoli','Serie A · 27 Sep 2031'];
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==='Napoli'&&r[1]==='Inter'&&r[2]==='Serie A'&&r[3]===3&&r[4]===2&&String(r[6]).includes('Sep 2031')))D.results.unshift(['Napoli','Inter','Serie A',3,2,'W','Sep 2031 · Home','Beier 8′ (Moore), Pio 23′ (Zaïre-Emery), Beier 45+3′ (Zaïre-Emery); Bonny 12′ and 31′; Epolo crucial save on Bonny 90+2′.']);
if(!D.results.some(r=>r[0]==='Napoli'&&r[1]==='Sassuolo'&&r[2]==='Serie A'&&r[3]===3&&r[4]===1&&String(r[6]).includes('27 Sep 2031')))D.results.unshift(['Napoli','Sassuolo','Serie A',3,1,'W','27 Sep 2031 · Away','Pio 22′ (Stach), Paz 48′ (Moore), Neves 77′ (McTominay); Weiper 80′. Sassuolo 3.3 xG at HT; Burnett excellent.']);
D.seasonState={...(D.seasonState||{}),currentSeason:'2031–32',phase:'league season',
league203132:{season:'2031–32',played:5,won:4,drawn:1,lost:0,goalsFor:12,goalsAgainst:5,goalDifference:7,points:13,position:null,asOf:'2031-09-27'},
championsLeague203132:{stage:'League phase',played:1,won:0,drawn:0,lost:1,goalsFor:0,goalsAgainst:1,points:0,asOf:'2031-09-16',opponent:'Arsenal'}};
D.serieAStandingsAfterSassuoloNapoliOnly={season:'2031–32',played:5,wins:4,draws:1,losses:0,goalsFor:12,goalsAgainst:5,goalDifference:7,points:13,position:null,date:'2031-09-27'};
D.statsBySeason=D.statsBySeason||{};
D.statsBySeason['2031–32']=[
['Pio Esposito',7,0,'Supercoppa Inter; Palermo twice; Sampdoria; Roma; Serie A Inter 23′; Sassuolo 22′. Italy and shootout excluded.'],
['Sebastiano Esposito',1,1,'Roma 32′ goal (Moore), Roma 75′ assist for Pio.'],
['Mikey Moore',0,4,'Assists: Sampdoria (Pio), Roma (Sebastiano), Inter league (Beier 8′), Sassuolo (Paz 48′).'],
['Estêvão',0,2,'Assists in Supercoppa Inter and Palermo.'],
['Warren Zaïre-Emery',0,3,'Palermo assist for Pio; two assists against Inter in Serie A (Pio 23′ and Beier 45+3′). On personal leave; return unknown.'],
['João Neves',2,0,'Long-range goals at Sampdoria 67′ and Sassuolo 77′.'],
['Nico Paz',1,1,'Sampdoria assist for Neves; Sassuolo goal 48′.'],
['Maximilian Beier',2,0,'Two goals against Inter in Serie A (8′,45+3′).'],
['Anton Stach',0,1,'Assist for Pio against Sassuolo 22′.'],
['Scott McTominay',0,1,'Assist for Neves against Sassuolo 77′.']
];D.statsCurrentSeason='2031–32';D.stats=D.statsBySeason['2031–32'];
const updates=[['Pio Esposito',149,74,151,74],['Mikey Moore',17,30,17,32],['João Neves',8,9,9,9],['Nico Paz',20,26,21,26],['Warren Zaïre-Emery',6,15,6,17],['Maximilian Beier',133,90,135,90]];
for(const [name,oldG,oldA,newG,newA] of updates){const row=(D.careerStats||[]).find(x=>x[0]===name);if(!row)throw Error('Missing career stats row '+name);
if(Number(row[1])===oldG&&Number(row[2])===oldA){row[1]=newG;row[2]=newA;}else if(Number(row[1])!==newG||Number(row[2])!==newA)throw Error('Unexpected career stats for '+name+': '+row[1]+'/'+row[2]);}
for(const [name,goalDelta,assistDelta] of [['Anton Stach',0,1],['Scott McTominay',0,1]]){const row=(D.careerStats||[]).find(x=>x[0]===name);if(row){row[1]=Number(row[1])+goalDelta;row[2]=Number(row[2])+assistDelta;}}
if(D.statsRoomAudit){D.statsRoomAudit.pioCareerGoals=151;D.statsRoomAudit.pioCareerAssists=74;}
D.statsRoomAsOf='27 September 2031 · Sassuolo 1–3 Napoli';
D.statsScope='2031–32 Napoli club goals and official assists through Sassuolo 27 September, including Supercoppa and Serie A. All Italy contributions and penalty shootout kicks excluded.';
D.fixtures203132=(D.fixtures203132||[]).filter(x=>!(x.date==='2031-09-21'&&x.opponent==null)).map(x=>x.date==='2031-09-27'&&x.opponent==='Sassuolo'?sassuolo:x);
if(!D.fixtures203132.some(x=>x.opponent==='Sassuolo'&&x.status==='completed'))D.fixtures203132.push(sassuolo);
D.fixtures203132.push(inter);
const psg={date:'2031-10-01',season:'2031–32',team:'Napoli',opponent:'Paris Saint-Germain',venue:'Home',competition:'Champions League',stage:'League phase',status:'scheduled'};
const udinese={date:'2031-10-05',season:'2031–32',team:'Napoli',opponent:'Udinese',venue:'Home',competition:'Serie A',status:'scheduled'};
for(const f of [psg,udinese])if(!D.fixtures203132.some(x=>x.date===f.date&&x.opponent===f.opponent))D.fixtures203132.push(f);
for(const key of ['nextClubFixture','nextEuropeanFixture','nextMatch','nextFixture'])D[key]=psg;
for(const key of ['nextSerieAFixture','nextLeagueMatch'])D[key]=udinese;
D.nextEuropeanOpponent='Paris Saint-Germain';D.upcoming=[['PSG','Champions League','1 Oct 2031 · Home'],['Udinese','Serie A','5 Oct 2031 · Home']];
D.meta={...(D.meta||{}),season:'2031–32 · THREE-TIME EUROPEAN HOLDERS · UNBEATEN IN SERIE A'};
D.hero={...(D.hero||{}),articleId:ids[0],strap:'SERIE A · SASSUOLO 1–3 NAPOLI · 27 SEPTEMBER 2031'};
D.ticker=['SASSUOLO 1–3 NAPOLI · PIO 22′ · PAZ 48′ · NEVES 77′','BURNETT CRUCIAL FIRST HALF · SASSUOLO HAD 3.3 xG AT INTERVAL','NAPOLI 3–2 INTER · BEIER BRACE · EPOLO SAVES AT 90+2′','NAPOLI UNBEATEN IN SERIE A · 13 POINTS FROM 5','MOORE FOUR CLUB ASSISTS THIS SEASON · ZAÏRE-EMERY THREE','PSG AT THE MARADONA · CHAMPIONS LEAGUE · 1 OCT','ITALY EURO QUALIFYING GROUP WINNERS · 20 POINTS · UNBEATEN'];
D.whispers=[['BURNETT KEEPS NAPOLI ALIVE','At Sassuolo, Napoli survive a first half of 3.3 xG against before a decisive second-half improvement.'],['PAZ AND NEVES LET FLY','Two extraordinary finishes after the break make it 3–0 before Weiper scores Sassuolo’s lone second-half opportunity.'],['EPOLO STOPS INTER LATE','A vital 90+2′ save denies Bonny a hat-trick and protects Napoli’s 3–2 win.'],['ZAÏRE-EMERY ABSENT','The midfielder is on personal leave. No timetable for his return has been announced.'],['NEXT: PSG','European champions Napoli host Paris Saint-Germain on 1 October following their opening defeat at Arsenal.']];
const card=(a,variant)=>'<article class="article-card '+E(variant)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy"></div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story</span></div></article>';
const lead=front[0];if($('heroStory'))$('heroStory').innerHTML='<div class="hero-media"><img src="'+E(lead.image)+'" alt="Archival Napoli football editorial illustration" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(lead.category)+'</span><span>'+E(lead.date)+'</span></div><h2>'+E(lead.headline)+'</h2><p>'+E(lead.dek)+'</p><span class="hero-read">Read story</span></div>';
if($('topStories'))$('topStories').innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+E(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(a.category)+'</small><strong>'+E(a.headline)+'</strong></div></button>').join('');
if($('latestNews'))$('latestNews').innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i?'compact':'wide')).join('');
if($('newsGrid'))$('newsGrid').innerHTML=D.articles.map((a,i)=>card(a,i?'standard':'lead-grid')).join('');
if($('articleFilters'))$('articleFilters').innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((a,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(a)+'">'+E(a)+'</button>').join('');
if($('tickerTrack'))$('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
if($('whisperList'))$('whisperList').innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
if($('latestResult'))$('latestResult').innerHTML='<div class="latest-score"><span>SAS</span><strong>1–3</strong><span>NAP</span></div><p>SERIE A · PIO 22′ · PAZ 48′ · NEVES 77′ · BURNETT IMPRESSIVE</p>';
if($('formLine'))$('formLine').innerHTML='<div><strong>NAPOLI · 13 POINTS FROM FIVE</strong><span>5 played · 4 wins · 1 draw · 0 defeats · 12 for · 5 against</span></div><div><strong>SASSUOLO 1–3 NAPOLI</strong><span>Pio 22′ (Stach), Paz 48′ (Moore), Neves 77′ (McTominay) · Burnett vital</span></div><div><strong>NAPOLI 3–2 INTER</strong><span>Beier brace · Pio goal · Epolo saves 90+2′</span></div>';
if($('upcomingStrip'))$('upcomingStrip').innerHTML=D.upcoming.map(([team,competition,when])=>'<div class="fixture"><span>'+E(competition)+'</span><strong>'+E(team)+'</strong><small>'+E(when)+'</small></div>').join('');
if($('nextTwo'))$('nextTwo').innerHTML=D.upcoming.map(([team,competition,when])=>'<div class="next-row"><strong>'+E(team)+'</strong><span>'+E(competition)+' · '+E(when)+'</span></div>').join('');
if($('matchesList')&&!$('matchesList').querySelector('[data-sassuolo-napoli-sep27-2031]'))$('matchesList').innerHTML='<div class="match-card" data-sassuolo-napoli-sep27-2031="true"><div class="result-badge W">W</div><div class="match-main"><span>Serie A · Away · 27 Sep 2031</span><strong>Sassuolo <b>1–3</b> Napoli</strong><p>Pio 22′ (Stach) · Paz 48′ (Moore) · Neves 77′ (McTominay) · Weiper 80′ · Burnett excellent</p></div></div>'+$('matchesList').innerHTML;
if($('matchesList')&&!$('matchesList').querySelector('[data-napoli-inter-sep2031]'))$('matchesList').insertAdjacentHTML('afterbegin','<div class="match-card" data-napoli-inter-sep2031="true"><div class="result-badge W">W</div><div class="match-main"><span>Serie A · Home · September 2031</span><strong>Napoli <b>3–2</b> Inter</strong><p>Beier 8′ and 45+3′ · Pio 23′ · Bonny 12′ and 31′ · Epolo save 90+2′</p></div></div>');
const st=document.querySelector('.header-status span:last-child');if(st)st.textContent='UNBEATEN IN SERIE A · PSG NEXT · 1 OCTOBER';
const ey=document.querySelector('.brand-copy .eyebrow');if(ey)ey.textContent='NAPOLI & ITALIA · SEASON 2031–32';
document.title='Sassuolo 1–3 Napoli · Burnett and Inter thrillers · Season Room';
const description=document.querySelector('meta[name="description"]');if(description)description.content='Burnett keeps Napoli ahead before Pio, Paz and Neves win 3–1 at Sassuolo. Beier scores twice and Epolo rescues Napoli in a 3–2 win over Inter.';
window.SEASONROOM_STATS?.render?.('2031–32');
})();
