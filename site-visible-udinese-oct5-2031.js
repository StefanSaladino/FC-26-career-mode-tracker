/* 5 October 2031: Napoli 3–1 Udinese, Pio twice, Rossetti draws penalty, Solet yellow, Beier rebound no assist. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const E=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const ids=["napoli-udinese-3-1-pio-brace-beier-rebound-oct5-2031","pio-esposito-solet-udinese-brace-oct5-2031","rossetti-paris-corner-udinese-penalty-two-matches-oct5-2031"],old=D.articles||[],front=ids.map(id=>old.find(x=>x.id===id));
if(front.some(x=>!x))throw Error('October Udinese edition article missing');
const chosen=new Set(ids);D.articles=[...front,...old.filter(a=>!chosen.has(a.id))];
const udinese={date:'2031-10-05',season:'2031–32',team:'Napoli',opponent:'Udinese',venue:'Home',competition:'Serie A',status:'completed',score:'3–1',resultText:'Napoli 3–1 Udinese',goalsFor:3,goalsAgainst:1,
events:[{minute:'10',team:'Udinese',player:'Oumar Solet',type:'yellow card',notes:'Reckless challenge on Edoardo Rossetti gives Napoli penalty; Solet booked'},
{minute:'10',team:'Napoli',scorer:'Pio Esposito',type:'penalty',penalty:true,notes:'Penalty won by Edoardo Rossetti; powerful finish into top corner; no assist'},
{minute:'17',team:'Napoli',scorer:'Pio Esposito',assist:'João Neves',officialAssist:true,notes:'Pass from Neves; Pio outmuscles booked Solet and finishes bottom corner'},
{minute:'37',team:'Udinese',scorer:'Lorenzo Lucca'},
{minute:'69',team:'Napoli',scorer:'Maximilian Beier',assist:null,officialAssist:false,notes:'João Neves shot saved by Udinese goalkeeper Koffi; Beier smashes rebound home; NO ASSIST'}],
penaltyWonBy:'Edoardo Rossetti',cautioned:['Oumar Solet'],notes:'Rotation against Udinese after PSG; precise starting line-up, goalkeeper for Napoli, exact other substitutions, match xG and shots not supplied. Solet booked at 10; not sent off. Rossetti wins penalty but no official assist. Beier rebound at 69 no assist. FT 3–1.'};
D.udineseNapoliOct5_2031=udinese;D.currentCalendarDate2031='2031-10-05';
for(const key of ['latestMatch','latestCompletedFixture','lastCompletedFixture','latestClubMatch','latestClubResult','latestClubLeagueResult','latestLeagueMatch','lastCompletedLeagueFixture'])D[key]=udinese;
D.latestResult=['Napoli','3–1','Udinese','Serie A · 5 Oct 2031'];
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==='Napoli'&&r[1]==='Udinese'&&r[2]==='Serie A'&&r[3]===3&&r[4]===1&&String(r[6]).includes('5 Oct 2031')))
 D.results.unshift(['Napoli','Udinese','Serie A',3,1,'W','5 Oct 2031 · Home','10′ Pio penalty (won by Rossetti; Solet yellow); 17′ Pio (Neves); Lucca 37′; Beier 69′ rebound (NO ASSIST).']);
D.seasonState={...(D.seasonState||{}),currentSeason:'2031–32',phase:'league season',
league203132:{season:'2031–32',played:6,won:5,drawn:1,lost:0,goalsFor:15,goalsAgainst:6,goalDifference:9,points:16,position:null,asOf:'2031-10-05'},
championsLeague203132:{stage:'League phase',played:2,won:1,drawn:0,lost:1,goalsFor:3,goalsAgainst:1,goalDifference:2,points:3,asOf:'2031-10-01',lastOpponent:'Paris Saint-Germain'}};
D.serieAStandingsAfterUdineseNapoliOnly={season:'2031–32',played:6,wins:5,draws:1,losses:0,goalsFor:15,goalsAgainst:6,goalDifference:9,points:16,position:null,date:'2031-10-05'};
D.statsBySeason=D.statsBySeason||{};D.statsBySeason['2031–32']=[
['Pio Esposito',10,0,'Udinese 10′ top-corner penalty won by Rossetti and 17′ low finish from Neves assist; prior goals including Supercoppa, Serie A and PSG.'],
['Sebastiano Esposito',1,1,'Roma 32′ goal from Moore and Roma 75′ assist to Pio; PSG appearance.'],
['Mikey Moore',0,4,'Assists Sampdoria (Pio), Roma (Sebastiano), Inter league (Beier), Sassuolo (Paz).'],
['Estêvão',1,2,'PSG goal 63′ from Beier; previous assists Supercoppa Inter and Palermo.'],
['Warren Zaïre-Emery',0,3,'Palermo one and Serie A Inter two; returned against PSG, official Man of the Match.'],
['João Neves',2,1,'Goals Sampdoria and Sassuolo; official assist on Pio against Udinese at 17′. Shot saved by Koffi at 69′ before Beier rebound does NOT count as assist.'],
['Nico Paz',1,1,'Sassuolo goal and Sampdoria assist.'],
['Maximilian Beier',3,2,'Inter league two goals; PSG two assists; Udinese 69′ rebound goal with no assist.'],
['Anton Stach',0,1,'Assist on Pio against Sassuolo.'],
['Scott McTominay',0,1,'Assist on Neves against Sassuolo.'],
['Alessandro Bastoni',1,0,'PSG goal 90+2′ header from Rossetti corner.'],
['Edoardo Rossetti',0,1,'PSG corner assist for Bastoni at 90+2′; Udinese penalty won at 10′ is not an official assist.']
];D.statsCurrentSeason='2031–32';D.stats=D.statsBySeason['2031–32'];
for(const [name,oldG,oldA,newG,newA] of [['Pio Esposito',152,74,154,74],['Maximilian Beier',135,92,136,92],['João Neves',9,9,9,10]]){const row=(D.careerStats||[]).find(x=>x[0]===name);if(!row)throw Error('Missing career row '+name);if(Number(row[1])===oldG&&Number(row[2])===oldA){row[1]=newG;row[2]=newA;}else if(Number(row[1])!==newG||Number(row[2])!==newA)throw Error('Unexpected career row for '+name+': '+row[1]+'/'+row[2]);}
if(D.statsRoomAudit){D.statsRoomAudit.pioCareerGoals=154;D.statsRoomAudit.pioCareerAssists=74;}
D.statsRoomAsOf='5 October 2031 · Napoli 3–1 Udinese';
D.statsScope='2031–32 competitive Napoli club goals and official assists through Udinese 5 October, including Supercoppa, excluding Italy and penalty shootouts. Rossetti penalty won is not an assist; Beier rebound has no assist.';
D.fixtures203132=(D.fixtures203132||[]).map(x=>x.date==='2031-10-05'&&x.opponent==='Udinese'?udinese:x);
if(!D.fixtures203132.some(x=>x.date==='2031-10-05'&&x.opponent==='Udinese'&&x.status==='completed'))D.fixtures203132.push(udinese);
const fiorentina={date:'2031-10-17',season:'2031–32',team:'Napoli',opponent:'Fiorentina',venue:'Away',competition:'Serie A',status:'scheduled'};
const benfica={date:'2031-10-21',season:'2031–32',team:'Napoli',opponent:'Benfica',venue:'Home',competition:'Champions League',stage:'League phase',status:'scheduled'};
for(const f of [fiorentina,benfica])if(!D.fixtures203132.some(x=>x.date===f.date&&x.opponent===f.opponent))D.fixtures203132.push(f);
for(const key of ['nextClubFixture','nextMatch','nextFixture','nextSerieAFixture','nextLeagueMatch'])D[key]=fiorentina;
D.nextEuropeanFixture=benfica;D.nextEuropeanOpponent='Benfica';D.upcoming=[['Fiorentina','Serie A','17 Oct 2031 · Away'],['Benfica','Champions League','21 Oct 2031 · Home']];
D.meta={...(D.meta||{}),season:'2031–32 · FOUR STRAIGHT SCUDETTI · UNBEATEN IN SERIE A'};
D.hero={...(D.hero||{}),articleId:ids[0],strap:'SERIE A · NAPOLI 3–1 UDINESE · 5 OCTOBER 2031'};
D.ticker=['NAPOLI 3–1 UDINESE · PIO 10′ PENALTY, 17′ · BEIER 69′','PIO TEN COMPETITIVE CLUB GOALS THIS SEASON','ROSSETTI WINS PENALTY · SOLET BOOKED AT 10′','NEVES ASSISTS PIO · KOFFI DENIES NEVES BEFORE BEIER REBOUND','NAPOLI UNBEATEN IN SERIE A · 16 POINTS FROM SIX','NAPOLI 3–0 PSG · WARREN MAN OF THE MATCH','NEXT FIORENTINA AWAY · 17 OCTOBER'];
D.whispers=[['PIO DOUBLE, SOLET IN TROUBLE','Pio converts Rossetti’s penalty and powers past booked Solet seven minutes later for 2–0.'],['LUCCA MAKES A CONTEST','Udinese pull one back through Lucca at 37′, but Napoli restore their advantage later.'],['BEIER SEALS THE WIN','Koffi saves Neves’s shot before Beier blasts in the rebound at 69′, with no official assist.'],['ROSSETTI MAKES IT COUNT','The youngster follows his PSG corner assist with the penalty won against Udinese.'],['UNBEATEN IN SERIE A','Napoli take sixteen points from six games: five victories and a draw.']];
const card=(a,v)=>'<article class="article-card '+E(v)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy"></div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story</span></div></article>';
const lead=front[0];
if($('heroStory'))$('heroStory').innerHTML='<div class="hero-media"><img src="'+E(lead.image)+'" alt="Archival Napoli goal celebration illustration" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(lead.category)+'</span><span>'+E(lead.date)+'</span></div><h2>'+E(lead.headline)+'</h2><p>'+E(lead.dek)+'</p><span class="hero-read">Read story</span></div>';
if($('topStories'))$('topStories').innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+E(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(a.category)+'</small><strong>'+E(a.headline)+'</strong></div></button>').join('');
if($('latestNews'))$('latestNews').innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i?'compact':'wide')).join('');
if($('newsGrid'))$('newsGrid').innerHTML=D.articles.map((a,i)=>card(a,i?'standard':'lead-grid')).join('');
if($('articleFilters'))$('articleFilters').innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((a,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(a)+'">'+E(a)+'</button>').join('');
if($('tickerTrack'))$('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
if($('whisperList'))$('whisperList').innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
if($('latestResult'))$('latestResult').innerHTML='<div class="latest-score"><span>NAP</span><strong>3–1</strong><span>UDI</span></div><p>SERIE A · PIO DOUBLE · BEIER REBOUND · 16 POINTS FROM SIX</p>';
if($('formLine'))$('formLine').innerHTML='<div><strong>NAPOLI · 16 POINTS FROM SIX</strong><span>6 played · 5 wins · 1 draw · 0 defeats · 15 for · 6 against</span></div><div><strong>NAPOLI 3–1 UDINESE</strong><span>Pio 10′ penalty and 17′ (Neves); Lucca 37′; Beier 69′ rebound, no assist</span></div><div><strong>NAPOLI 3–0 PSG</strong><span>Beier two assists · Warren Zaïre-Emery Man of the Match</span></div>';
if($('upcomingStrip'))$('upcomingStrip').innerHTML=D.upcoming.map(([team,comp,when])=>'<div class="fixture"><span>'+E(comp)+'</span><strong>'+E(team)+'</strong><small>'+E(when)+'</small></div>').join('');
if($('nextTwo'))$('nextTwo').innerHTML=D.upcoming.map(([team,comp,when])=>'<div class="next-row"><strong>'+E(team)+'</strong><span>'+E(comp)+' · '+E(when)+'</span></div>').join('');
if($('matchesList')&&!$('matchesList').querySelector('[data-napoli-udinese-oct5-2031]'))$('matchesList').innerHTML='<div class="match-card" data-napoli-udinese-oct5-2031="true"><div class="result-badge W">W</div><div class="match-main"><span>Serie A · Home · 5 Oct 2031</span><strong>Napoli <b>3–1</b> Udinese</strong><p>Pio 10′ pen (Rossetti won), Pio 17′ (Neves), Lucca 37′, Beier 69′ rebound (no assist); Solet yellow</p></div></div>'+$('matchesList').innerHTML;
const st=document.querySelector('.header-status span:last-child');if(st)st.textContent='UNBEATEN IN SERIE A · 16 POINTS · FIORENTINA NEXT';
const ey=document.querySelector('.brand-copy .eyebrow');if(ey)ey.textContent='NAPOLI & ITALIA · SEASON 2031–32';
document.title='Napoli 3–1 Udinese · Pio Brace · Season Room';
const desc=document.querySelector('meta[name="description"]');if(desc)desc.content='Napoli 3–1 Udinese: Pio double at 10′ and 17′, Rossetti penalty won, Neves assist, Lucca 37′ and Beier rebound at 69′ with no assist.';
window.SEASONROOM_STATS?.render?.('2031–32');
})();
