/* November 1 2031 · Napoli 6–0 Monza · Pio four goals two assists · Sebastiano two assists · Bellandi column. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const E=v=>String(v??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const ids=["napoli-monza-six-nil-pio-four-goals-two-assists-nov1-2031","bellandi-monza-six-nil-pio-four-two-nov1-2031","esposito-brothers-two-assists-three-minutes-monza-nov1-2031","pio-esposito-four-goals-two-assists-missed-penalty-nov1-2031"],old=D.articles||[],front=ids.map(id=>old.find(a=>a.id===id));if(front.some(x=>!x))throw Error('Monza newsroom article missing: '+ids[front.findIndex(x=>!x)]);
const s=new Set(ids);D.articles=[...front,...old.filter(a=>!s.has(a.id))];
const monza={date:'2031-11-01',team:'Napoli',opponent:'Monza',venue:'Home',competition:'Serie A',status:'completed',score:'6–0',resultText:'Napoli 6–0 Monza',goalsFor:6,goalsAgainst:0,halftime:'Napoli 4–0 Monza',rotation:'Several starting changes; complete XI not reported',events:[
{minute:'19',team:'Napoli',scorer:'Pio Esposito',assist:'Edoardo Rossetti',officialAssist:true},
{minute:'24',team:'Napoli',scorer:'João Neves',assist:'Pio Esposito',officialAssist:true},
{minute:'33',team:'Napoli',scorer:'Pio Esposito',assist:'Nico Paz',officialAssist:true},
{minute:'40',team:'Napoli',scorer:'Estêvão',assist:'Pio Esposito',officialAssist:true},
{minute:'77',team:'Napoli',scorer:'Pio Esposito',assist:'Sebastiano Esposito',officialAssist:true,notes:'Receives Seba pass at edge of area, runs centrally and finishes for hat-trick'},
{minute:'80',team:'Napoli',scorer:'Pio Esposito',assist:'Sebastiano Esposito',officialAssist:true,notes:'Seba to Pio again, fourth Pio goal'}],
penalty:{awardedTo:'Napoli',wonBy:'Pio Esposito',taker:'Pio Esposito',savedBy:'Pizzignacco',goal:false,minute:null,period:'Second half, before 77′',notes:'Pio turns in box and is tripped; remarkable penalty save by Monza goalkeeper Pizzignacco; later scores twice from open play.'},
halftimeSubstitutions:{playersOff:['Mikey Moore','Nico Paz'],playersOn:['Sebastiano Esposito','Victor Hermansen'],exactOffOnPairsUnconfirmed:true,notes:'Mikey and Nico rested ahead of Salzburg, Seba and Victor entered. Victor Hermansen LB/LM/RB, not GK.'},
pioMatch:{goals:4,assists:2,contributions:6,penaltyMissed:true,goalsAfterSavedPenalty:2,officialAward:null},
sebastianoMatch:{goals:0,assists:2,bothAssistingBrother:true},
notes:'No Monza shots/xG, other player ratings, goalkeeper saves totals, cards, or exact missed-penalty minute reported. Napoli clean sheet. One match six Napoli goals, four by Pio, other two each assisted by Pio, total 6 G/A for Pio. Pizzignacco made fantastic saved penalty despite six concessions. No official Pio MOTM reported.'};
D.monzaNapoliNov1_2031=monza;
for(const key of ['latestMatch','latestCompletedFixture','lastCompletedFixture','latestClubMatch','latestClubResult','latestClubLeagueResult','latestLeagueMatch','lastCompletedLeagueFixture'])D[key]=monza;
D.latestResult=['Napoli','6–0','Monza','Serie A · 1 November 2031 · Pio 4G2A · Seba 2A'];
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==='Napoli'&&r[1]==='Monza'&&r[2]==='Serie A'&&r[3]===6&&r[4]===0&&String(r[6]).includes('1 Nov 2031')))
D.results.unshift(['Napoli','Monza','Serie A',6,0,'W','1 Nov 2031 · Home','Pio 19′ (Rossetti), Neves 24′ (Pio), Pio 33′ (Paz), Estêvão 40′ (Pio), Pio 77′ and 80′ (both Sebastiano). Penalty won and taken by Pio, spectacular save Pizzignacco (exact minute not specified). HT Napoli 4–0 Monza.']);
D.fixtures203132=Array.isArray(D.fixtures203132)?D.fixtures203132:[];
const fIndex=D.fixtures203132.findIndex(f=>f.team==='Napoli'&&f.opponent==='Monza'&&f.competition==='Serie A'&&f.status==='scheduled');
if(fIndex>=0)D.fixtures203132[fIndex]=monza;
else if(!D.fixtures203132.some(f=>f.team==='Napoli'&&f.opponent==='Monza'&&f.date==='2031-11-01'&&f.status==='completed'))D.fixtures203132.push(monza);
D.seasonState={...(D.seasonState||{}),league203132:{season:'2031–32',played:10,won:9,drawn:1,lost:0,goalsFor:28,goalsAgainst:7,goalDifference:21,points:28,position:null,asOf:'2031-11-01'}};
D.serieAStandingsAfterMonzaNapoliOnly={season:'2031–32',played:10,won:9,drawn:1,lost:0,goalsFor:28,goalsAgainst:7,goalDifference:21,points:28,position:null,asOf:'2031-11-01'};
D.serieALatestConfirmedClubPoints=28;
D.statsBySeason=D.statsBySeason||{};
const expected=[["Pio Esposito",12,0,16,2,"Monza Nov1: four goals (19′ Rossetti, 33′ Paz, 77′ and 80′ Seba), two assists (Neves 24′, Estêvão 40′); saved penalty, no goal from spot; Italy friendlies excluded"],["Sebastiano Esposito",1,1,1,3,"Monza Nov1: two official assists to younger brother Pio at 77′ and 80′; earlier Roma contributions retained"],["Mikey Moore",3,5,3,5,"Benfica goal, Milan brace and corner assist; rested at halftime Monza with RB Salzburg ahead"],["Estêvão",1,3,2,3,"Monza 40′ goal assisted by Pio; Fiorentina late assist to Beier"],["Warren Zaïre-Emery",0,4,0,4,"Milan 18′ assist to Moore and prior Napoli contributions"],["João Neves",2,2,3,2,"Monza 24′ goal assisted by Pio; Torino 61′ assist to Beier; previous contributions retained"],["Nico Paz",2,2,2,3,"Monza 33′ assist to Pio and withdrawn at halftime; prior Torino goal and Benfica assist"],["Maximilian Beier",5,4,5,4,"Fiorentina 89′ and Torino 61′ winners, Benfica and Milan assists; no known Monza G/A"],["Anton Stach",0,1,0,1,"Existing competitive Napoli club contribution retained"],["Scott McTominay",0,1,0,1,"Existing competitive Napoli club contribution retained"],["Alessandro Bastoni",1,0,1,0,"PSG 90+2′ header from Rossetti corner"],["Edoardo Rossetti",0,2,0,3,"Monza 19′ assist to Pio; PSG corner and Milan assist; Udinese penalty won and Torino crossbar do not count as assists"],["Alphonso Davies",1,0,1,0,"Milan 44′ header from Moore corner; previous club record retained"]];
const oldStats=D.statsBySeason['2031–32'];if(!Array.isArray(oldStats)||oldStats.length!==expected.length)throw Error('Expected Napoli 2031-32 club-stat rows missing');
for(const [name,g0,a0,g1,a1,note] of expected){const row=oldStats.find(r=>r[0]===name);if(!row)throw Error('Missing club stat '+name);
if(+row[1]===g0&&+row[2]===a0){row[1]=g1;row[2]=a1;row[3]=note}
else if(+row[1]!==g1||+row[2]!==a1)throw Error('Club season stat drift '+name+': '+row[1]+'/'+row[2]);}
D.statsCurrentSeason='2031–32';D.stats=oldStats;
for(const [name,g0,a0,g1,a1] of [["Pio Esposito",156,74,160,76],["Sebastiano Esposito",1,1,1,3],["João Neves",9,11,10,11],["Nico Paz",22,27,22,28],["Estêvão",4,10,5,10],["Edoardo Rossetti",2,2,2,3]]){const row=(D.careerStats||[]).find(r=>r[0]===name);if(!row)throw Error('Missing club career row '+name);
if(+row[1]===g0&&+row[2]===a0){row[1]=g1;row[2]=a1;
if(typeof row[3]==='string'&&!row[3].includes('2031–32'))row[3]+=', 2031–32';}
else if(+row[1]!==g1||+row[2]!==a1)throw Error('Career stat drift '+name+': '+row[1]+'/'+row[2]);}
D.statsRoomAsOf='1 Nov 2031 · Napoli 6–0 Monza';
D.statsScope='Napoli competitive club only, Supercoppa counted, Italy friendlies and shootouts excluded. Pio 4G2A vs Monza, missed penalty not goal. Two late Sebastiano assists; Rossetti, Paz official assists.';
const salzburg=D.fixtures203132.find(f=>f.date==='2031-11-05'&&f.team==='Napoli'&&f.opponent==='RB Salzburg')||{date:'2031-11-05',team:'Napoli',opponent:'RB Salzburg',venue:'Home',competition:'Champions League',status:'scheduled',stage:'League phase'};
const lecce=D.fixtures203132.find(f=>f.date==='2031-11-09'&&f.team==='Napoli'&&f.opponent==='Lecce')||{date:'2031-11-09',team:'Napoli',opponent:'Lecce',venue:'Away',competition:'Serie A',status:'scheduled'};
for(const k of ['nextClubFixture','nextMatch','nextFixture','nextEuropeanFixture','nextEuropeanMatch'])D[k]=salzburg;
for(const k of ['nextSerieAFixture','nextLeagueMatch'])D[k]=lecce;
D.nextEuropeanOpponent='RB Salzburg';
D.upcoming=[['RB Salzburg','Champions League','5 Nov 2031 · Home'],['Lecce','Serie A','9 Nov 2031 · Away'],['Australia','International Friendly','15 Nov 2031 · Italy home'],['Portugal','International Friendly','18 Nov 2031 · Italy home'],['Hellas Verona','Serie A','22 Nov 2031 · Home'],['Sporting CP','Champions League','26 Nov 2031 · Away']];
D.currentCalendarDate2031='2031-11-01';D.currentCalendarPeriod2031='After Napoli 6–0 Monza';
D.meta={...(D.meta||{}),season:'2031–32 · UNBEATEN SERIE A · 28 POINTS FROM TEN · SIX UCL POINTS'};
D.hero={...(D.hero||{}),articleId:ids[0],strap:'SERIE A · NAPOLI 6–0 MONZA · 1 NOVEMBER 2031'};
D.ticker=['NAPOLI 6–0 MONZA · PIO FOUR GOALS, TWO ASSISTS','PIO 19′, 33′, 77′, 80′ · NEVES 24′ · ESTÊVÃO 40′','SEBASTIANO ASSISTS BOTH LATE PIO GOALS · 77′ AND 80′','PIZZIGNACCO SAVES PIO PENALTY · PIO SCORES TWICE AFTER','NAPOLI 4–0 MILAN THEN 6–0 MONZA · TEN GOALS, TWO CLEAN SHEETS','SERIE A · 28 POINTS FROM TEN · UNBEATEN','CHAMPIONS LEAGUE · SIX POINTS FROM THREE · NEXT SALZBURG HOME 5 NOVEMBER','MATTEO BELLANDI: FOUR GOALS, TWO ASSISTS. NO QUESTIONS ABOUT PIO'];
D.whispers=[['FOUR GOALS AND TWO ASSISTS','Pio involved in all six Napoli goals and returns from saved penalty to score twice late.'],['THE ESPOSITO BROTHERS','Sebastiano delivers for Pio at 77′ and 80′, two brother-to-brother assists in three minutes.'],['PIZZIGNACCO THE RESISTANCE','Monza keeper Pizzignacco denies Pio with a remarkable penalty save despite 6–0 defeat.'],['ROTATION WORKS AGAIN','Moore and Paz rested at half-time with Salzburg next; Seba and Hermansen introduced.'],['ROSSETTI KEEPS DELIVERING','Rossetti adds another official Napoli assist, this time for Pio 19′ against Monza.'],['BELLANDI CONCEDES THE POINT','The Linea Calcio analyst praises Pio and the rotation but wants the standard sustained in Europe.']];
const card=(a,v)=>'<article class="article-card '+E(v)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy"></div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story</span></div></article>';
const lead=front[0];
if($('heroStory'))$('heroStory').innerHTML='<div class="hero-media"><img src="'+E(lead.image)+'" alt="Archival football goal celebration illustration" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(lead.category)+'</span><span>'+E(lead.date)+'</span></div><h2>'+E(lead.headline)+'</h2><p>'+E(lead.dek)+'</p><span class="hero-read">Read story</span></div>';
if($('topStories'))$('topStories').innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+E(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(a.category)+'</small><strong>'+E(a.headline)+'</strong></div></button>').join('');
if($('latestNews'))$('latestNews').innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i?'compact':'wide')).join('');
if($('newsGrid'))$('newsGrid').innerHTML=D.articles.map((a,i)=>card(a,i?'standard':'lead-grid')).join('');
if($('articleFilters'))$('articleFilters').innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((a,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(a)+'">'+E(a)+'</button>').join('');
if($('tickerTrack'))$('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
if($('whisperList'))$('whisperList').innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
if($('latestResult'))$('latestResult').innerHTML='<div class="latest-score"><span>NAP</span><strong>6–0</strong><span>MON</span></div><p>SERIE A · PIO FOUR GOALS AND TWO ASSISTS · THE ESPOSITO BROTHERS LINK UP TWICE</p>';
if($('formLine'))$('formLine').innerHTML='<div><strong>SERIE A · 28 POINTS FROM TEN</strong><span>9W · 1D · 0L · 28 SCORED · 7 CONCEDED · +21</span></div><div><strong>NAPOLI 6–0 MONZA · PIO 4G2A</strong><span>19′, 33′, 77′, 80′ for Pio · Neves 24′ · Estêvão 40′ · Seba two assists</span></div><div><strong>CHAMPIONS LEAGUE · NEXT SALZBURG</strong><span>5 November · Home · Six points from three league-phase matches</span></div>';
if($('upcomingStrip'))$('upcomingStrip').innerHTML=D.upcoming.slice(0,4).map(([team,comp,when])=>'<div class="fixture"><span>'+E(comp)+'</span><strong>'+E(team)+'</strong><small>'+E(when)+'</small></div>').join('');
if($('nextTwo'))$('nextTwo').innerHTML=D.upcoming.slice(0,2).map(([team,comp,when])=>'<div class="next-row"><strong>'+E(team)+'</strong><span>'+E(comp)+' · '+E(when)+'</span></div>').join('');
if($('matchesList')&&!$('matchesList').querySelector('[data-monza-nov2031]'))$('matchesList').innerHTML='<div class="match-card" data-monza-nov2031="true"><div class="result-badge W">W</div><div class="match-main"><span>Serie A · 1 Nov 2031</span><strong>Napoli <b>6–0</b> Monza</strong><p>Pio 19′ (Rossetti), 33′ (Paz), 77′ and 80′ (both Sebastiano); Neves 24′ (Pio); Estêvão 40′ (Pio). Pizzignacco saves Pio penalty.</p></div></div>'+$('matchesList').innerHTML;
document.title='Napoli 6–0 Monza · Pio 4G2A · Season Room';
const desc=document.querySelector('meta[name="description"]');if(desc)desc.content='Napoli 6–0 Monza: Pio Esposito scores four goals, makes two assists and answers a saved penalty with two late finishes from brother Sebastiano.';
})();
