/* 9 Nov 2031: Lecce 0–3 Napoli · third successive Pio scoring match · Esposito brothers · 31 Serie A points. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const E=v=>String(v??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const ids=["lecce-napoli-three-nil-beier-pio-seba-nov9-2031","pio-sebastiano-rossetti-lecce-family-move-nov9-2031","eriksson-saves-pio-penalty-striker-answers-lecce-nov9-2031","bellandi-lecce-three-nil-penalty-discipline-nov9-2031"],old=D.articles||[],front=ids.map(id=>old.find(a=>a.id===id));
if(front.some(x=>!x))throw Error('Lecce article missing: '+ids[front.findIndex(x=>!x)]);
const idSet=new Set(ids);D.articles=[...front,...old.filter(a=>!idSet.has(a.id))];
const lecce={date:'2031-11-09',team:'Napoli',opponent:'Lecce',venue:'Away',competition:'Serie A',status:'completed',score:'3–0',resultText:'Lecce 0–3 Napoli',goalsFor:3,goalsAgainst:0,halftime:'Lecce 0–1 Napoli',events:[
{minute:'35',team:'Napoli',scorer:'Maximilian Beier',assist:'Mikey Moore',officialAssist:true,notes:'Beier breaks through after Moore won earlier penalty'},
{minute:'66',team:'Napoli',scorer:'Pio Esposito',assist:'Anton Stach',officialAssist:true,notes:'Pio scores after 16′ penalty saved and 27′ shot against post'},
{minute:'76',team:'Napoli',scorer:'Sebastiano Esposito',assist:'Edoardo Rossetti',officialAssist:true,notes:'Pio plays Rossetti; Rossetti finds Sebastiano for goal. Pio build-up pass is not official assist'}],
penalty:{minute:'16',awardedTo:'Napoli',wonBy:'Mikey Moore',reason:'Moore tripped in Lecce penalty area',taker:'Pio Esposito',goal:false,savedBy:'Eriksson',notes:'Miraculous Eriksson penalty save. Second Pio penalty saved in three matches (Pizzignacco saved for Monza Nov1).'},
woodwork:[{minute:'27',player:'Pio Esposito',type:'Post',goal:false}],
pioMatch:{goals:1,assists:0,penaltySaved:true,hitPost:true,buildUpPassOnSebastianoGoal:true,officialAssistForSebastianoGoal:'Edoardo Rossetti',threeMatchGoals:8,threeMatchOpponents:['Monza','RB Salzburg','Lecce'],clubSeasonGoalsAfter:20},
notes:'Mister confirmed 3–0 at FT. Moore won 16′ penalty, Eriksson miraculous save from Pio. 27′ Pio hits post. 35′ Beier goal from Moore, 66′ Pio goal from Stach, 76′ Sebastiano goal from Rossetti with Pio playing Rossetti before official assist. No other goals confirmed, exact shots, xG, cards, substitutes, formal player awards or other match stats reported.'};
D.lecceNapoliNov9_2031=lecce;
for(const key of ['latestMatch','latestCompletedFixture','lastCompletedFixture','latestClubMatch','latestClubResult','latestClubLeagueResult','latestLeagueResult','lastCompletedLeagueFixture'])D[key]=lecce;
D.latestResult=['Napoli','3–0','Lecce','Serie A · 9 Nov 2031 · Beier, Pio, Sebastiano · Napoli clean sheet'];
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==='Napoli'&&r[1]==='Lecce'&&r[2]==='Serie A'&&r[3]===3&&r[4]===0&&String(r[6]).includes('9 Nov 2031')))
D.results.unshift(['Napoli','Lecce','Serie A',3,0,'W','9 Nov 2031 · Napoli Away','16′ Eriksson saves Pio penalty after Moore tripped; 27′ Pio hits post; Beier 35′ (Moore), Pio 66′ (Stach), Sebastiano Esposito 76′ (Rossetti, Pio build-up pass). HT 0–1.']);
D.fixtures203132=Array.isArray(D.fixtures203132)?D.fixtures203132:[];
const fIndex=D.fixtures203132.findIndex(f=>f.date==='2031-11-09'&&f.team==='Napoli'&&f.opponent==='Lecce');
if(fIndex>=0)D.fixtures203132[fIndex]=lecce;
else if(!D.fixtures203132.some(f=>f.team==='Napoli'&&f.opponent==='Lecce'&&f.date==='2031-11-09'&&f.status==='completed'))D.fixtures203132.push(lecce);
const league={season:'2031–32',played:11,won:10,drawn:1,lost:0,goalsFor:31,goalsAgainst:7,goalDifference:24,points:31,position:null,asOf:'2031-11-09',lastOpponent:'Lecce'};
D.seasonState={...(D.seasonState||{}),league203132:league};
D.league203132={...(D.league203132||{}),...league};
D.napoliLeagueAfterLecce={...league,latestResult:'Lecce 0–3 Napoli',previousResult:'Napoli 6–0 Monza'};
D.statsBySeason=D.statsBySeason||{};
const season=D.statsBySeason['2031–32'],expected=[["Pio Esposito",19,3,20,3,"Lecce 66′ goal (Stach assist), penalty saved by Eriksson at 16′, post 27′; Pio to Rossetti to Seba 76′ is build-up, NOT an official Pio assist. 8 goals in previous Monza/Salzburg/Lecce three matches."],["Sebastiano Esposito",1,3,2,3,"Lecce 76′ goal from Rossetti official assist; Pio began passing sequence; second competitive Napoli goal of season."],["Mikey Moore",3,5,3,6,"Lecce 16′ won penalty by being tripped; 35′ official assist for Beier opening goal."],["Estêvão",3,4,3,4,"Salzburg 29′ goal and 39′ assist to Pio; unchanged at Lecce."],["Warren Zaïre-Emery",0,4,0,4,"Existing contributions retained; no confirmed Lecce goal or assist."],["João Neves",3,3,3,3,"Salzburg 52′ assist to Davies retained; no confirmed Lecce contribution."],["Nico Paz",2,4,2,4,"Salzburg 9′ assist to Pio retained; no confirmed Lecce contribution."],["Maximilian Beier",5,4,6,4,"Lecce 35′ breakthrough goal, official assist Mikey Moore."],["Anton Stach",0,1,0,2,"Lecce 66′ official assist to Pio Esposito."],["Scott McTominay",0,1,0,1,"Prior season contributions unchanged."],["Alessandro Bastoni",1,0,1,0,"PSG 90+2′ goal from Rossetti corner; unchanged Lecce."],["Edoardo Rossetti",0,3,0,4,"Lecce 76′ official assist to Sebastiano Esposito, after Pio played Rossetti."],["Alphonso Davies",2,0,2,0,"Salzburg 52′ fake shot goal retained; unchanged Lecce."],["Riccardo Calafiori",0,1,0,1,"Salzburg 80′ official assist to Pio retained; unchanged Lecce."]];
if(!Array.isArray(season)||season.length!==expected.length)throw Error('Expected 14 competitive club-season rows missing for Lecce');
for(const [name,g0,a0,g1,a1,note] of expected){const row=season.find(r=>r[0]===name);if(!row)throw Error('Missing club season row '+name);
if(+row[1]===g0&&+row[2]===a0){row[1]=g1;row[2]=a1;row[3]=note;}
else if(+row[1]!==g1||+row[2]!==a1)throw Error('Season stats conflict '+name+': '+row[1]+'/'+row[2]);}
D.statsCurrentSeason='2031–32';D.stats=season;
for(const [name,g0,a0,g1,a1] of [["Pio Esposito",163,77,164,77],["Sebastiano Esposito",1,3,2,3],["Mikey Moore",20,33,20,34],["Maximilian Beier",138,94,139,94],["Anton Stach",5,9,5,10],["Edoardo Rossetti",2,3,2,4]]){const row=(D.careerStats||[]).find(r=>r[0]===name);
if(!row)throw Error('Missing club career stat '+name);
if(+row[1]===g0&&+row[2]===a0){row[1]=g1;row[2]=a1;if(typeof row[3]==='string'&&!row[3].includes('2031–32'))row[3]+=', 2031–32';}
else if(+row[1]!==g1||+row[2]!==a1)throw Error('Career stats conflict '+name+': '+row[1]+'/'+row[2]);}
D.statsRoomAsOf='9 Nov 2031 · Lecce 0–3 Napoli';D.statsScope='Competitive Napoli club season including Supercoppa, excluding international friendlies and shootouts. Lecce: Beier 1G, Pio 1G, Sebastiano 1G, Moore 1A, Stach 1A, Rossetti 1A; Pio build-up on Sebastiano goal is NOT an official assist.';
const verona=D.fixtures203132.find(f=>f.date==='2031-11-22'&&f.team==='Napoli'&&f.opponent==='Hellas Verona')||{date:'2031-11-22',team:'Napoli',opponent:'Hellas Verona',venue:'Home',competition:'Serie A',status:'scheduled'};
for(const k of ['nextClubFixture','nextMatch','nextFixture','nextSerieAFixture','nextLeagueMatch'])D[k]=verona;
D.upcoming=[['Australia','International Friendly','15 Nov 2031 · Italy home'],['Portugal','International Friendly','18 Nov 2031 · Italy home'],['Hellas Verona','Serie A','22 Nov 2031 · Home'],['Sporting CP','Champions League','26 Nov 2031 · Away']];
D.currentCalendarDate2031='2031-11-09';D.currentCalendarPeriod2031='After Lecce 0–3 Napoli';
D.meta={...(D.meta||{}),season:'2031–32 · UNBEATEN SERIE A · 31 POINTS FROM ELEVEN · NINE UCL POINTS'};
D.hero={...(D.hero||{}),articleId:ids[0],strap:'SERIE A · LECCE 0–3 NAPOLI · 9 NOVEMBER 2031'};
D.ticker=['LECCE 0–3 NAPOLI · BEIER 35′ · PIO 66′ · SEBASTIANO 76′','16′ PENALTY SAVED BY ERIKSSON AFTER MOORE TRIPPED IN BOX','27′ PIO HITS POST · 66′ PIO ANSWERS WITH 20TH CLUB GOAL OF SEASON','MOORE ASSISTS BEIER · STACH ASSISTS PIO · ROSSETTI ASSISTS SEBA','PIO TO ROSSETTI TO SEBA · THE ESPOSITO BROTHERS LINK UP AGAIN','SERIE A · 31 POINTS FROM ELEVEN · UNBEATEN · 31 SCORED, 7 CONCEDED','SECOND PIO PENALTY SAVED IN THREE MATCHES · PIZZIGNACCO AND ERIKSSON','CLEAN SHEET RESTORED AFTER SALZBURG · NEXT AUSTRALIA FOR ITALY 15 NOV','CHAMPIONS LEAGUE · NINE POINTS FROM FOUR · NEXT SPORTING CP 26 NOV'];
D.whispers=[['LECCE CLEAN SHEET','Napoli win 3–0 away from home after Salzburg conceded twice. League record 10 wins and a draw.'],['ERIKSSON STOPS PIO','16′ Moore tripped, penalty; Eriksson miraculous save from Pio. Second saved Pio penalty in three matches.'],['THE WOODWORK DENIES PIO','27′ Pio hits post before finally scoring in second half.'],['BEIER BREAKS THROUGH','Moore official assist for Beier 35′ opener; sixth competitive goal for Max.'],['STACH FINDS PIO','66′ Pio scores from Stach assist: 20 competitive Napoli goals this season.'],['THE ESPOSITO FAMILY MOVE','76′ Pio to Rossetti, Rossetti official assist for Sebastiano goal.'],['BELLANDI WEIGHS THE RESPONSE','Praises 3–0 clean sheet and Beier, wants penalty technique reviewed without turning saved kicks into a striker crisis.']];
const card=(a,v)=>'<article class="article-card '+E(v)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy"></div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story</span></div></article>';
const lead=front[0];
if($('heroStory'))$('heroStory').innerHTML='<div class="hero-media"><img src="'+E(lead.image)+'" alt="Approved archival Napoli goal-celebration illustration" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(lead.category)+'</span><span>'+E(lead.date)+'</span></div><h2>'+E(lead.headline)+'</h2><p>'+E(lead.dek)+'</p><span class="hero-read">Read story</span></div>';
if($('topStories'))$('topStories').innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+E(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(a.category)+'</small><strong>'+E(a.headline)+'</strong></div></button>').join('');
if($('latestNews'))$('latestNews').innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i?'compact':'wide')).join('');
if($('newsGrid'))$('newsGrid').innerHTML=D.articles.map((a,i)=>card(a,i?'standard':'lead-grid')).join('');
if($('articleFilters'))$('articleFilters').innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((a,i)=>'<button class="filter-pill '+(i?'':'active')+'" data-category="'+E(a)+'">'+E(a)+'</button>').join('');
if($('tickerTrack'))$('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
if($('whisperList'))$('whisperList').innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
if($('latestResult'))$('latestResult').innerHTML='<div class="latest-score"><span>LEC</span><strong>0–3</strong><span>NAP</span></div><p>SERIE A · BEIER, PIO AND SEBASTIANO SCORE · ERIKSSON SAVES PIO PENALTY · NAPOLI CLEAN SHEET</p>';
if($('formLine'))$('formLine').innerHTML='<div><strong>SERIE A · 31 POINTS FROM ELEVEN</strong><span>10W · 1D · 0L · 31 SCORED · 7 CONCEDED · +24</span></div><div><strong>LECCE 0–3 NAPOLI · THREE SCORERS</strong><span>Beier 35′ (Moore), Pio 66′ (Stach), Sebastiano 76′ (Rossetti)</span></div><div><strong>CHAMPIONS LEAGUE · 9 POINTS FROM FOUR</strong><span>3W · 0D · 1L · 10 SCORED · 3 CONCEDED · +7 · Next Sporting CP 26 Nov</span></div>';
if($('upcomingStrip'))$('upcomingStrip').innerHTML=D.upcoming.slice(0,4).map(([team,comp,when])=>'<div class="fixture"><span>'+E(comp)+'</span><strong>'+E(team)+'</strong><small>'+E(when)+'</small></div>').join('');
if($('nextTwo'))$('nextTwo').innerHTML=D.upcoming.slice(0,2).map(([team,comp,when])=>'<div class="next-row"><strong>'+E(team)+'</strong><span>'+E(comp)+' · '+E(when)+'</span></div>').join('');
if($('matchesList')&&!$('matchesList').querySelector('[data-lecce-nov2031]'))$('matchesList').innerHTML='<div class="match-card" data-lecce-nov2031="true"><div class="result-badge W">W</div><div class="match-main"><span>Serie A · 9 Nov 2031 · Away</span><strong>Lecce <b>0–3</b> Napoli</strong><p>Eriksson saves Pio penalty 16′ after Moore trip; Pio hits post 27′. Beier 35′ (Moore), Pio 66′ (Stach), Sebastiano 76′ (Rossetti, after Pio build-up pass). HT 0–1.</p></div></div>'+$('matchesList').innerHTML;
document.title='Lecce 0–3 Napoli · Esposito Brothers Score · Season Room';
const desc=document.querySelector('meta[name="description"]');if(desc)desc.content='Lecce 0–3 Napoli: Beier, Pio and Sebastiano Esposito score. Eriksson saves Pio penalty; Rossetti assists Seba; Napoli reach 31 Serie A points unbeaten.';
})();
