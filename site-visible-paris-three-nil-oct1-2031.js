/* 1 October 2031 Napoli 3–0 PSG; Zaïre-Emery returns and wins MOTM. Abandoned game excluded. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const E=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const ids=["napoli-psg-3-0-zaire-emery-motm-beier-bastoni-oct1-2031","beier-two-assists-paris-attack-evolution-oct1-2031","zaire-emery-motm-return-psg-oct1-2031","rossetti-bastoni-paris-corner-future-oct1-2031","bellandi-paris-napoli-arsenal-response-oct1-2031"],old=D.articles||[],front=ids.map(id=>old.find(a=>a.id===id));
if(front.some(x=>!x))throw Error('PSG editorial stories missing');
const order=new Set(ids);D.articles=[...front,...old.filter(a=>!order.has(a.id))];
const psg={date:'2031-10-01',season:'2031–32',team:'Napoli',opponent:'Paris Saint-Germain',venue:'Home',competition:'Champions League',stage:'League phase',status:'completed',score:'3–0',resultText:'Napoli 3–0 Paris Saint-Germain',goalsFor:3,goalsAgainst:0,halftime:'Napoli 0–0 PSG',
events:[{minute:'49',team:'Napoli',scorer:'Pio Esposito',assist:'Maximilian Beier',officialAssist:true},{minute:'63',team:'Napoli',scorer:'Estêvão',assist:'Maximilian Beier',officialAssist:true},{minute:'90+2',team:'Napoli',scorer:'Alessandro Bastoni',assist:'Edoardo Rossetti',officialAssist:true,notes:'Rossetti corner headed into goal by Bastoni'}],
manOfTheMatch:'Warren Zaïre-Emery',substitutesOn:['Edoardo Rossetti','Hermansen','Sebastiano Esposito'],notes:'Warren returned from personal leave and played; official Man of the Match. Exact substitutions times, goalkeeper identity and match statistics not reported. The initial connection-aborted game is void and excluded.'};
D.psgNapoliOct1_2031=psg;D.currentCalendarDate2031='2031-10-01';
for(const key of ['latestMatch','latestCompletedFixture','lastCompletedFixture','latestClubMatch','latestClubResult'])D[key]=psg;
D.latestEuropeanMatch=psg;D.latestChampionsLeagueMatch=psg;
D.latestResult=['Napoli','3–0','PSG','Champions League · 1 Oct 2031'];
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==='Napoli'&&r[1]==='Paris Saint-Germain'&&r[2]==='Champions League'&&r[3]===3&&r[4]===0&&String(r[6]).includes('1 Oct 2031')))D.results.unshift(['Napoli','Paris Saint-Germain','Champions League',3,0,'W','1 Oct 2031 · Home · league phase','Pio 49′ (Beier), Estêvão 63′ (Beier), Bastoni 90+2′ (Rossetti corner); Warren Zaïre-Emery Man of the Match.']);
D.seasonState={...(D.seasonState||{}),currentSeason:'2031–32',phase:'league season',
league203132:{season:'2031–32',played:5,won:4,drawn:1,lost:0,goalsFor:12,goalsAgainst:5,goalDifference:7,points:13,position:null,asOf:'2031-09-27'},
championsLeague203132:{stage:'League phase',played:2,won:1,drawn:0,lost:1,goalsFor:3,goalsAgainst:1,goalDifference:2,points:3,asOf:'2031-10-01',lastOpponent:'Paris Saint-Germain'}};
D.championsLeague203132=D.seasonState.championsLeague203132;
D.warrenZaireEmeryStatus={available:true,returnedBy:'2031-10-01',playedAgainst:'Paris Saint-Germain',manOfTheMatch:true};
D.statsBySeason=D.statsBySeason||{};D.statsBySeason['2031–32']=[
['Pio Esposito',8,0,'Goal PSG 49′ from Beier; other competitive club goals including Supercoppa and Serie A.'],
['Sebastiano Esposito',1,1,'Roma goal and assist; substituted on against PSG; no PSG goal or assist.'],
['Mikey Moore',0,4,'Official assists: Sampdoria, Roma, Serie A Inter, Sassuolo.'],
['Estêvão',1,2,'Goal PSG 63′ from Beier; prior official assists versus Inter Supercoppa and Palermo.'],
['Warren Zaïre-Emery',0,3,'Previous club assists Palermo one, Inter league two. Returned and won Man of the Match against PSG.'],
['João Neves',2,0,'Scored against Sampdoria and Sassuolo.'],
['Nico Paz',1,1,'Scored at Sassuolo; assisted against Sampdoria.'],
['Maximilian Beier',2,2,'Two goals versus Inter in Serie A; two assists versus PSG 49′ and 63′.'],
['Anton Stach',0,1,'Assisted Pio at Sassuolo 22′.'],
['Scott McTominay',0,1,'Assisted João Neves at Sassuolo 77′.'],
['Alessandro Bastoni',1,0,'Headed PSG goal 90+2′ from Rossetti corner.'],
['Edoardo Rossetti',0,1,'Assisted Bastoni header via corner PSG 90+2′.']
];D.statsCurrentSeason='2031–32';D.stats=D.statsBySeason['2031–32'];
for(const [name,og,oa,ng,na] of [['Pio Esposito',151,74,152,74],['Maximilian Beier',135,90,135,92],['Estêvão',3,9,4,9],['Alessandro Bastoni',2,2,3,2],['Edoardo Rossetti',2,0,2,1]]){const row=(D.careerStats||[]).find(x=>x[0]===name);if(!row)throw Error('Career row missing '+name);if(Number(row[1])===og&&Number(row[2])===oa){row[1]=ng;row[2]=na;}else if(Number(row[1])!==ng||Number(row[2])!==na)throw Error('Career record mismatch '+name+' '+row[1]+'/'+row[2]);}
if(D.statsRoomAudit){D.statsRoomAudit.pioCareerGoals=152;D.statsRoomAudit.pioCareerAssists=74;}
D.statsRoomAsOf='1 October 2031 · Napoli 3–0 PSG';
D.statsScope='2031–32 Napoli competitive club contributions through PSG, including Supercoppa; Italy and shootout excluded. Warren returned and won the PSG Man of the Match award.';
D.fixtures203132=(D.fixtures203132||[]).map(x=>x.date==='2031-10-01'&&x.opponent==='Paris Saint-Germain'?psg:x);
if(!D.fixtures203132.some(x=>x.date==='2031-10-01'&&x.status==='completed'))D.fixtures203132.push(psg);
const udinese={date:'2031-10-05',season:'2031–32',team:'Napoli',opponent:'Udinese',venue:'Home',competition:'Serie A',status:'scheduled'};
const benfica={date:'2031-10-21',season:'2031–32',team:'Napoli',opponent:'Benfica',venue:'Home',competition:'Champions League',stage:'League phase',status:'scheduled'};
for(const f of [udinese,benfica])if(!D.fixtures203132.some(x=>x.date===f.date&&x.opponent===f.opponent))D.fixtures203132.push(f);
for(const key of ['nextClubFixture','nextMatch','nextFixture','nextSerieAFixture','nextLeagueMatch'])D[key]=udinese;
D.nextEuropeanFixture=benfica;D.nextEuropeanOpponent='Benfica';
D.upcoming=[['Udinese','Serie A','5 Oct 2031 · Home'],['Benfica','Champions League','21 Oct 2031 · Home']];
D.meta={...(D.meta||{}),season:'2031–32 · THREE-TIME EUROPEAN HOLDERS · NAPOLI 3–0 PSG'};
D.hero={...(D.hero||{}),articleId:ids[0],strap:'CHAMPIONS LEAGUE · NAPOLI 3–0 PSG · 1 OCTOBER 2031'};
D.ticker=['NAPOLI 3–0 PSG · PIO 49′ · ESTÊVÃO 63′ · BASTONI 90+2′','WARREN ZAÏRE-EMERY RETURNS · MAN OF THE MATCH','BEIER TWO ASSISTS AGAINST PSG · BRACE AGAINST INTER','ROSSETTI CORNER · BASTONI HEADS THE THIRD','EUROPE · THREE POINTS FROM TWO MATCHES · +2 GOAL DIFFERENCE','SERIE A NAPOLI UNBEATEN · 13 POINTS FROM FIVE','NEXT UDINESE HOME · 5 OCTOBER'];
D.whispers=[['PARIS ANSWERED','Napoli respond to the Arsenal defeat with a 3–0 win and clean sheet at home against PSG.'],['WARREN MAN OF THE MATCH','Zaïre-Emery returns to the side after personal leave and is named the official match award winner.'],['BEIER MAKES TWO','His passes lead to Pio and Estêvão goals after the break; Beier has two club goals and two assists in the current season.'],['ROSSETTI TO BASTONI','Young substitute takes the corner that captain Bastoni heads home at 90+2.'],['BENFICA AHEAD','Napoli will host Benfica on 21 October in another Champions League league-phase match.']];
const card=(a,v)=>'<article class="article-card '+E(v)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy"></div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story</span></div></article>';
const lead=front[0];
if($('heroStory'))$('heroStory').innerHTML='<div class="hero-media"><img src="'+E(lead.image)+'" alt="Archival Napoli European football editorial illustration" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(lead.category)+'</span><span>'+E(lead.date)+'</span></div><h2>'+E(lead.headline)+'</h2><p>'+E(lead.dek)+'</p><span class="hero-read">Read story</span></div>';
if($('topStories'))$('topStories').innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+E(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(a.category)+'</small><strong>'+E(a.headline)+'</strong></div></button>').join('');
if($('latestNews'))$('latestNews').innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i?'compact':'wide')).join('');
if($('newsGrid'))$('newsGrid').innerHTML=D.articles.map((a,i)=>card(a,i?'standard':'lead-grid')).join('');
if($('articleFilters'))$('articleFilters').innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((a,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(a)+'">'+E(a)+'</button>').join('');
if($('tickerTrack'))$('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
if($('whisperList'))$('whisperList').innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
if($('latestResult'))$('latestResult').innerHTML='<div class="latest-score"><span>NAP</span><strong>3–0</strong><span>PSG</span></div><p>CHAMPIONS LEAGUE · BEIER 2 ASSISTS · WARREN MAN OF THE MATCH</p>';
if($('formLine'))$('formLine').innerHTML='<div><strong>EUROPE · NAPOLI 3–0 PSG</strong><span>2 played · 1 win · 1 defeat · 3 for · 1 against · +2 · 3 points</span></div><div><strong>BEIER CREATES TWO · BASTONI HEADS THIRD</strong><span>Pio 49′ (Beier), Estêvão 63′ (Beier), Bastoni 90+2′ (Rossetti)</span></div><div><strong>SERIE A · 13 POINTS FROM FIVE</strong><span>4 wins · 1 draw · 0 defeats · Udinese home next</span></div>';
if($('upcomingStrip'))$('upcomingStrip').innerHTML=D.upcoming.map(([team,competition,when])=>'<div class="fixture"><span>'+E(competition)+'</span><strong>'+E(team)+'</strong><small>'+E(when)+'</small></div>').join('');
if($('nextTwo'))$('nextTwo').innerHTML=D.upcoming.map(([team,competition,when])=>'<div class="next-row"><strong>'+E(team)+'</strong><span>'+E(competition)+' · '+E(when)+'</span></div>').join('');
if($('matchesList')&&!$('matchesList').querySelector('[data-napoli-psg-oct1-2031]'))$('matchesList').innerHTML='<div class="match-card" data-napoli-psg-oct1-2031="true"><div class="result-badge W">W</div><div class="match-main"><span>Champions League · Home · 1 Oct 2031</span><strong>Napoli <b>3–0</b> PSG</strong><p>Pio 49′ (Beier), Estêvão 63′ (Beier), Bastoni 90+2′ (Rossetti corner) · Warren Zaïre-Emery Man of the Match</p></div></div>'+$('matchesList').innerHTML;
const st=document.querySelector('.header-status span:last-child');if(st)st.textContent='NAPOLI 3–0 PSG · WARREN MAN OF THE MATCH';
const ey=document.querySelector('.brand-copy .eyebrow');if(ey)ey.textContent='NAPOLI & ITALIA · SEASON 2031–32';
document.title='Napoli 3–0 PSG · Warren MOTM · Season Room';
const description=document.querySelector('meta[name="description"]');if(description)description.content='Napoli 3–0 PSG: Pio, Estêvão, Bastoni goals; two Beier assists; Rossetti assists captain; returning Warren Zaïre-Emery wins Man of the Match.';
window.SEASONROOM_STATS?.render?.('2031–32');
})();
