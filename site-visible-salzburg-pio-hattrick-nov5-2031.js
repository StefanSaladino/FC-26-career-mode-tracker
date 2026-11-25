/* 5 November 2031: Napoli 5–2 Salzburg · Pio second consecutive hat-trick · European table and Stats Room. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const E=v=>String(v??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const ids=["napoli-salzburg-five-two-pio-hat-trick-nov5-2031","bellandi-salzburg-five-two-defensive-warning-nov5-2031","pio-esposito-seven-goals-two-games-europe-nov5-2031","salzburg-two-concessions-napoli-four-goal-lead-nov5-2031"],old=D.articles||[],front=ids.map(id=>old.find(a=>a.id===id));
if(front.some(x=>!x))throw Error('Salzburg article missing: '+ids[front.findIndex(x=>!x)]);
const idSet=new Set(ids);D.articles=[...front,...old.filter(a=>!idSet.has(a.id))];
const salzburg={date:'2031-11-05',team:'Napoli',opponent:'RB Salzburg',venue:'Home',competition:'Champions League',stage:'League phase',status:'completed',score:'5–2',resultText:'Napoli 5–2 RB Salzburg',goalsFor:5,goalsAgainst:2,halftime:'Napoli 3–0 RB Salzburg',events:[
{minute:'9',team:'Napoli',scorer:'Pio Esposito',assist:'Nico Paz',officialAssist:true},
{minute:'29',team:'Napoli',scorer:'Estêvão',assist:'Pio Esposito',officialAssist:true},
{minute:'39',team:'Napoli',scorer:'Pio Esposito',assist:'Estêvão',officialAssist:true},
{minute:'52',team:'Napoli',scorer:'Alphonso Davies',assist:'João Neves',officialAssist:true,notes:'Davies fake shot freezes Salzburg keeper, then he slides shot to left of keeper'},
{minute:'62',team:'RB Salzburg',scorer:'Lucas Vennegoor of Hesselink',assist:null,officialAssist:null,notes:'Goal; scoring method and assist not reported'},
{minute:'80',team:'Napoli',scorer:'Pio Esposito',assist:'Riccardo Calafiori',officialAssist:true,notes:'Pio completes second consecutive hat-trick'},
{minute:'89',team:'RB Salzburg',scorer:'Simmelhack',assist:null,officialAssist:null,notes:'Headed goal from cross; delivering player not confirmed'}],
substitutions:{time:'Second half, after 52′ and before 62′',playersOff:['Nico Paz','Alphonso Davies','Mikey Moore'],playersOn:[],replacementsUnconfirmed:true,exactMinuteUnconfirmed:true,notes:'Manager reported three off after Davies 52′ goal; replacements and pairings not supplied. Do not assume or invent.'},
pioMatch:{goals:3,assists:1,contributions:4,officialAward:null,secondConsecutiveHatTrick:true,twoMatchGoals:7,twoMatchAssists:3,twoMatchContributions:10},
notes:'HT 3–0. Napoli lead 4–0 after 52′; Salzburg score 62′ (Lucas Vennegoor of Hesselink), Pio 80′, Simmelhack 89′ header from cross. Salzburg opponent assists unreported. Manager says Pio not tired when considering subs; private fitness staff-room only, not an attributed public manager quote. No complete shots, xG, player ratings, official award, goalkeeper saves, or other subs provided.'};
D.salzburgNapoliNov5_2031=salzburg;
for(const key of ['latestMatch','latestCompletedFixture','lastCompletedFixture','latestClubMatch','latestClubResult','latestChampionsLeagueMatch','latestClubEuropeanMatch','latestEuropeanMatch','lastCompletedEuropeanFixture'])D[key]=salzburg;
D.latestResult=['Napoli','5–2','RB Salzburg','Champions League · 5 Nov 2031 · Pio 3G1A · Davies goal · Estêvão 1G1A'];
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==='Napoli'&&r[1]==='RB Salzburg'&&r[2]==='Champions League'&&r[3]===5&&r[4]===2&&String(r[6]).includes('5 Nov 2031')))
D.results.unshift(['Napoli','RB Salzburg','Champions League',5,2,'W','5 Nov 2031 · Home','Pio 9′ (Paz), Estêvão 29′ (Pio), Pio 39′ (Estêvão), Davies 52′ (Neves), Salzburg Vennegoor of Hesselink 62′, Pio 80′ (Calafiori), Salzburg Simmelhack 89′ header from cross. HT 3–0.']);
D.fixtures203132=Array.isArray(D.fixtures203132)?D.fixtures203132:[];
const fIndex=D.fixtures203132.findIndex(f=>f.date==='2031-11-05'&&f.team==='Napoli'&&f.opponent==='RB Salzburg');
if(fIndex>=0)D.fixtures203132[fIndex]=salzburg;
else if(!D.fixtures203132.some(f=>f.team==='Napoli'&&f.opponent==='RB Salzburg'&&f.date==='2031-11-05'&&f.status==='completed'))D.fixtures203132.push(salzburg);
const ucl={stage:'League phase',played:4,won:3,drawn:0,lost:1,goalsFor:10,goalsAgainst:3,goalDifference:7,points:9,position:null,asOf:'2031-11-05',lastOpponent:'RB Salzburg'};
D.seasonState={...(D.seasonState||{}),championsLeague203132:ucl};
D.championsLeague203132={...(D.championsLeague203132||{}),...ucl};
D.napoliEuropeanAfterSalzburg={...ucl,latestResult:'Napoli 5–2 RB Salzburg',previousResult:'Napoli 2–0 Benfica'};
D.statsBySeason=D.statsBySeason||{};
const oldStats=D.statsBySeason['2031–32'],expected=[["Pio Esposito",16,2,19,3,"5 Nov RB Salzburg: 9′ and 39′ goals, 80′ third goal (Calafiori assist), 29′ assist to Estêvão; 7 goals and 3 assists over Monza and Salzburg. Italy excluded."],["Sebastiano Esposito",1,3,1,3,"Monza two assists to brother Pio; no known goal/assist vs Salzburg"],["Mikey Moore",3,5,3,5,"Milan brace/assist and Benfica goal; substituted off Salzburg after 52′, incoming unknown"],["Estêvão",2,3,3,4,"Salzburg: 29′ goal from Pio assist, 39′ assist to Pio. Previous Monza goal."],["Warren Zaïre-Emery",0,4,0,4,"Milan 18′ assist to Moore and earlier contributions retained"],["João Neves",3,2,3,3,"Salzburg 52′ official assist to Davies fake-shot goal; prior Monza 24′ goal"],["Nico Paz",2,3,2,4,"Salzburg 9′ official assist to Pio; substituted off after Davies 52′ goal"],["Maximilian Beier",5,4,5,4,"Prior club season contributions unchanged"],["Anton Stach",0,1,0,1,"Prior season contribution unchanged"],["Scott McTominay",0,1,0,1,"Prior season contribution unchanged"],["Alessandro Bastoni",1,0,1,0,"PSG 90+2′ goal from Rossetti corner"],["Edoardo Rossetti",0,3,0,3,"PSG, Milan and Monza official assists retained"],["Alphonso Davies",1,0,2,0,"Salzburg 52′ fake shot freezes goalkeeper, then slides finish to keeper's left; official Neves assist. Substituted after 52′"]];
if(!Array.isArray(oldStats)||oldStats.length!==expected.length)throw Error('Expected previous 13 club season rows missing for Salzburg stats');
for(const [name,g0,a0,g1,a1,note] of expected){const row=oldStats.find(r=>r[0]===name);
if(!row)throw Error('Missing season stat '+name);if(+row[1]===g0&&+row[2]===a0){row[1]=g1;row[2]=a1;row[3]=note}
else if(+row[1]!==g1||+row[2]!==a1)throw Error('Season stats conflict '+name+': '+row[1]+'/'+row[2]);}
if(!oldStats.some(x=>x[0]==='Riccardo Calafiori'))oldStats.push(['Riccardo Calafiori',0,1,'5 November RB Salzburg, official assist to Pio 80′; no club season goals']);
else {const r=oldStats.find(x=>x[0]==='Riccardo Calafiori');if(r[1]!==0||r[2]!==1)throw Error('Calafiori season stat conflict')}
D.statsCurrentSeason='2031–32';D.stats=oldStats;
for(const [name,g0,a0,g1,a1] of [["Pio Esposito",160,76,163,77],["Estêvão",5,10,6,11],["Alphonso Davies",12,8,13,8],["João Neves",10,11,10,12],["Nico Paz",22,28,22,29],["Riccardo Calafiori",0,1,0,2]]){const row=(D.careerStats||[]).find(r=>r[0]===name);
if(!row)throw Error('Missing career stat '+name);
if(+row[1]===g0&&+row[2]===a0){row[1]=g1;row[2]=a1;if(typeof row[3]==='string'&&!row[3].includes('2031–32'))row[3]+=', 2031–32'}
else if(+row[1]!==g1||+row[2]!==a1)throw Error('Career stats conflict '+name+': '+row[1]+'/'+row[2]);}
D.statsRoomAsOf='5 Nov 2031 · Napoli 5–2 RB Salzburg';D.statsScope='Competitive Napoli club, including Supercoppa; shootouts and Italy friendly goals excluded. Salzburg Pio 3G1A, Estêvão 1G1A, Davies goal, Paz/Neves/Calafiori assists. Back-to-back Pio hat-tricks.';
const lecce=D.fixtures203132.find(f=>f.date==='2031-11-09'&&f.team==='Napoli'&&f.opponent==='Lecce')||{date:'2031-11-09',team:'Napoli',opponent:'Lecce',venue:'Away',competition:'Serie A',status:'scheduled'};
const sporting=D.fixtures203132.find(f=>f.date==='2031-11-26'&&f.team==='Napoli'&&f.opponent==='Sporting CP')||{date:'2031-11-26',team:'Napoli',opponent:'Sporting CP',venue:'Away',competition:'Champions League',stage:'League phase',status:'scheduled'};
for(const k of ['nextClubFixture','nextMatch','nextFixture','nextSerieAFixture','nextLeagueMatch'])D[k]=lecce;
D.nextEuropeanFixture=sporting;D.nextEuropeanMatch=sporting;D.nextEuropeanOpponent='Sporting CP';
D.upcoming=[['Lecce','Serie A','9 Nov 2031 · Away'],['Australia','International Friendly','15 Nov 2031 · Italy home'],['Portugal','International Friendly','18 Nov 2031 · Italy home'],['Hellas Verona','Serie A','22 Nov 2031 · Home'],['Sporting CP','Champions League','26 Nov 2031 · Away']];
D.currentCalendarDate2031='2031-11-05';D.currentCalendarPeriod2031='After Napoli 5–2 RB Salzburg';
D.meta={...(D.meta||{}),season:'2031–32 · UNBEATEN SERIE A · 28 POINTS FROM TEN · NINE UCL POINTS'};
D.hero={...(D.hero||{}),articleId:ids[0],strap:'CHAMPIONS LEAGUE · NAPOLI 5–2 RB SALZBURG · 5 NOVEMBER 2031'};
D.ticker=['NAPOLI 5–2 RB SALZBURG · PIO THIRD-GOAL HAT-TRICK AT 80′','PIO 9′, 39′, 80′ · ESTÊVÃO 29′ · DAVIES 52′','SALZBURG VENNEGOOR OF HESSELINK 62′ · SIMMELHACK 89′ HEADER','PIO FOUR AGAINST MONZA, THREE AGAINST SALZBURG · SEVEN GOALS IN TWO MATCHES','PIO TEN GOAL CONTRIBUTIONS IN TWO MATCHES · SEVEN GOALS, THREE ASSISTS','NAPOLI NINE UCL POINTS FROM FOUR MATCHES · THREE STRAIGHT UCL WINS','FIVE GOALS SCORED, TWO CONCEDED · DEFENSIVE REVIEW AHEAD OF LECCE','SERIE A UNBEATEN · 28 POINTS FROM TEN · NEXT LECCE AWAY 9 NOVEMBER'];
D.whispers=[['SEVEN GOALS IN TWO MATCHES','Pio follows four against Monza with a Champions League hat-trick and assist against Salzburg.'],['THE WIDE-ATTACK CONNECTION','Estêvão scores from Pio at 29′, then returns the assist at 39′.'],['DAVIES DECEIVES THE KEEPER','Neves assists Davies at 52′; the fake shot freezes Salzburg goalkeeper before composed finish.'],['VENNEGOOR OF HESSELINK ANSWERS','Salzburg striker nets at 62′; second-half concession halts clean-sheet run.'],['SIMMELHACK HEADS LATE','89′ headed goal from cross makes it 5–2. Napoli must inspect defence after a four-goal lead.'],['CALAFIORI FEEDS THE HAT-TRICK','Official assist for Pio 80′, his third Salzburg goal.'],['BELLANDI HAS TWO QUESTIONS','Praises five-goal European answer and Pio, then turns to Salzburg goals at 62′ and 89′.']];
const card=(a,v)=>'<article class="article-card '+E(v)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy"></div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story</span></div></article>';
const lead=front[0];
if($('heroStory'))$('heroStory').innerHTML='<div class="hero-media"><img src="'+E(lead.image)+'" alt="Approved archival Napoli European team celebration illustration" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(lead.category)+'</span><span>'+E(lead.date)+'</span></div><h2>'+E(lead.headline)+'</h2><p>'+E(lead.dek)+'</p><span class="hero-read">Read story</span></div>';
if($('topStories'))$('topStories').innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+E(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(a.category)+'</small><strong>'+E(a.headline)+'</strong></div></button>').join('');
if($('latestNews'))$('latestNews').innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i?'compact':'wide')).join('');
if($('newsGrid'))$('newsGrid').innerHTML=D.articles.map((a,i)=>card(a,i?'standard':'lead-grid')).join('');
if($('articleFilters'))$('articleFilters').innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((a,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(a)+'">'+E(a)+'</button>').join('');
if($('tickerTrack'))$('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
if($('whisperList'))$('whisperList').innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
if($('latestResult'))$('latestResult').innerHTML='<div class="latest-score"><span>NAP</span><strong>5–2</strong><span>RBS</span></div><p>CHAMPIONS LEAGUE · PIO SECOND CONSECUTIVE HAT-TRICK · SALZBURG NET TWICE IN SECOND HALF</p>';
if($('formLine'))$('formLine').innerHTML='<div><strong>SERIE A · 28 POINTS FROM TEN</strong><span>9W · 1D · 0L · 28 SCORED · 7 CONCEDED · +21</span></div><div><strong>CHAMPIONS LEAGUE · 9 POINTS FROM FOUR</strong><span>3W · 0D · 1L · 10 SCORED · 3 CONCEDED · +7 · Next Sporting CP 26 Nov</span></div><div><strong>NAPOLI 5–2 RB SALZBURG · PIO HAT-TRICK</strong><span>9′, 39′, 80′ Pio · 29′ Estêvão · 52′ Davies · 62′ Vennegoor · 89′ Simmelhack</span></div>';
if($('upcomingStrip'))$('upcomingStrip').innerHTML=D.upcoming.slice(0,4).map(([team,comp,when])=>'<div class="fixture"><span>'+E(comp)+'</span><strong>'+E(team)+'</strong><small>'+E(when)+'</small></div>').join('');
if($('nextTwo'))$('nextTwo').innerHTML=D.upcoming.slice(0,2).map(([team,comp,when])=>'<div class="next-row"><strong>'+E(team)+'</strong><span>'+E(comp)+' · '+E(when)+'</span></div>').join('');
if($('matchesList')&&!$('matchesList').querySelector('[data-salzburg-nov2031]'))$('matchesList').innerHTML='<div class="match-card" data-salzburg-nov2031="true"><div class="result-badge W">W</div><div class="match-main"><span>Champions League · 5 Nov 2031</span><strong>Napoli <b>5–2</b> RB Salzburg</strong><p>Pio 9′ (Paz), Estêvão 29′ (Pio), Pio 39′ (Estêvão), Davies 52′ (Neves), Vennegoor of Hesselink 62′, Pio 80′ (Calafiori), Simmelhack 89′ header from cross. HT 3–0.</p></div></div>'+$('matchesList').innerHTML;
document.title='Napoli 5–2 RB Salzburg · Pio Hat-Trick · Season Room';
const desc=document.querySelector('meta[name="description"]');if(desc)desc.content='Napoli 5–2 RB Salzburg in Champions League: Pio Esposito hat-trick and assist, Estêvão and Davies score, Salzburg net twice late in the match.';
})();
