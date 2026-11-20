/* 16 Sep 2031 final current edition: Roma 0–2 Napoli; Arsenal 1–0 Napoli; Bellandi's independent opinion. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const E=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const ids=['arsenal-napoli-1-0-ansah-epolo-raya-sep16-2031','bellandi-arsenal-napoli-early-goal-raya-epolo-sep16-2031','roma-napoli-0-2-sebastiano-pio-esposito-sep12-2031','sebastiano-pio-esposito-brothers-roma-role-sep2031'];
const previous=D.articles||[],front=ids.map(id=>previous.find(x=>x.id===id));
if(front.some(x=>!x))throw Error('Arsenal/Roma newsroom articles missing');
const chosen=new Set(ids);D.articles=[...front,...previous.filter(x=>!chosen.has(x.id))];
const roma={date:'2031-09-12',season:'2031–32',team:'Napoli',opponent:'Roma',venue:'Away',competition:'Serie A',status:'completed',score:'2–0',resultText:'Roma 0–2 Napoli',goalsFor:2,goalsAgainst:0,halftime:'Roma 0–1 Napoli',
 events:[{minute:'32',team:'Napoli',scorer:'Sebastiano Esposito',assist:'Mikey Moore',officialAssist:true,notes:'Sebastiano first goal as a Napoli player'},
 {minute:'75',team:'Napoli',scorer:'Pio Esposito',assist:'Sebastiano Esposito',officialAssist:true,notes:'Through ball from Sebastiano; Pio scores when through on goal'}],
 notes:'Two goals away at Roma; clean sheet. No further numerical match statistics established.'};
const arsenal={date:'2031-09-16',season:'2031–32',team:'Napoli',opponent:'Arsenal',venue:'Away',competition:'Champions League',stage:'League phase',status:'completed',score:'0–1',resultText:'Arsenal 1–0 Napoli',goalsFor:0,goalsAgainst:1,
 events:[{minute:'8',team:'Arsenal',scorer:'Ansah'}],
 notes:'Competitive match. Napoli created several good chances; Arsenal goalkeeper David Raya was excellent. Napoli goalkeeper Epolo likewise outstanding. No assists, save counts, xG, shots or other incidents given.'};
D.romaNapoliSep12_2031=roma;D.arsenalNapoliSep16_2031=arsenal;
D.currentCalendarDate2031='2031-09-16';
for(const key of ['latestMatch','latestCompletedFixture','lastCompletedFixture','latestClubMatch','latestClubResult'])D[key]=arsenal;
for(const key of ['latestClubLeagueResult','latestLeagueMatch','lastCompletedLeagueFixture'])D[key]=roma;
D.latestResult=['Arsenal','1–0','Napoli','Champions League · 16 Sep 2031'];
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==='Napoli'&&r[1]==='Roma'&&r[2]==='Serie A'&&String(r[6]).includes('12 Sep 2031')))
 D.results.unshift(['Napoli','Roma','Serie A',2,0,'W','12 Sep 2031 · Away','Sebastiano Esposito first Napoli goal 32′ (Mikey Moore), Pio Esposito 75′ (Sebastiano Esposito through ball); half-time 1–0.']);
if(!D.results.some(r=>r[0]==='Napoli'&&r[1]==='Arsenal'&&r[2]==='Champions League'&&String(r[6]).includes('16 Sep 2031')))
 D.results.unshift(['Napoli','Arsenal','Champions League',0,1,'L','16 Sep 2031 · Away · league phase','Ansah 8′ for Arsenal. Several Napoli chances; Raya excellent for Arsenal and Epolo outstanding for Napoli.']);
D.seasonState={...(D.seasonState||{}),currentSeason:'2031–32',phase:'league season',league203132:{season:'2031–32',played:3,won:2,drawn:1,lost:0,goalsFor:6,goalsAgainst:2,goalDifference:4,points:7,position:null,asOf:'2031-09-12'},championsLeague203132:{stage:'League phase',played:1,won:0,drawn:0,lost:1,goalsFor:0,goalsAgainst:1,points:0,asOf:'2031-09-16',opponent:'Arsenal'}};
D.serieAStandingsAfterRomaNapoliOnly={season:'2031–32',played:3,wins:2,draws:1,losses:0,goalsFor:6,goalsAgainst:2,goalDifference:4,points:7,position:null,date:'2031-09-12'};
D.statsBySeason=D.statsBySeason||{};
D.statsBySeason['2031–32']=[
 ['Pio Esposito',5,0,'Inter Supercoppa 39′; Palermo 15′ and 49′; Sampdoria 58′ (Moore); Roma 75′ (Sebastiano). Shootout and international goals excluded.'],
 ['Sebastiano Esposito',1,1,'Roma away 12 September: first Napoli goal at 32′ from Moore, assist for Pio at 75′.'],
 ['Mikey Moore',0,2,'Official assists: Pio against Sampdoria 58′; Sebastiano against Roma 32′.'],
 ['Estêvão',0,2,'Official assists: Pio header against Inter; Pio second equalizer at Palermo.'],
 ['Warren Zaïre-Emery',0,1,'Official assist: Pio first equalizer at Palermo.'],
 ['João Neves',1,0,'Long-range goal against Sampdoria 67′.'],
 ['Nico Paz',0,1,'Official assist for João Neves long-range goal against Sampdoria 67′.']
];D.statsCurrentSeason='2031–32';D.stats=D.statsBySeason['2031–32'];
for(const [name,oldG,oldA,newG,newA] of [['Pio Esposito',148,74,149,74],['Mikey Moore',17,29,17,30]]){
 const row=(D.careerStats||[]).find(x=>x[0]===name);if(!row)throw Error('Career row missing: '+name);
 if(Number(row[1])===oldG&&Number(row[2])===oldA){row[1]=newG;row[2]=newA;}
 else if(Number(row[1])!==newG||Number(row[2])!==newA)throw Error('Club career record mismatch '+name);
}
const seba=(D.careerStats||[]).find(x=>x[0]==='Sebastiano Esposito');
if(seba){if(Number(seba[1])!==1||Number(seba[2])!==1)throw Error('Unexpected Sebastiano career row');}
else D.careerStats.push(['Sebastiano Esposito',1,1,'2031–32 · First Napoli goal and assist at Roma']);
if(D.statsRoomAudit){D.statsRoomAudit.pioCareerGoals=149;D.statsRoomAudit.pioCareerAssists=74;}
D.statsRoomAsOf='16 September 2031 · Arsenal 1–0 Napoli';
D.statsScope='2031–32 Napoli club contributions through Arsenal away 16 Sep, including Supercoppa and Serie A: Pio 5 goals, Sebastiano 1 goal 1 assist, Moore 2 assists, Estêvão 2 assists, Zaïre-Emery 1 assist, Neves 1 goal, Paz 1 assist. No Napoli goals at Arsenal. Shootout and Italy goals excluded.';
D.fixtures203132=(D.fixtures203132||[]).map(x=>x.date==='2031-09-12'&&x.opponent==='Roma'?roma:x.date==='2031-09-16'&&x.opponent==='Arsenal'?arsenal:x);
const nextKnown=D.fixtures203132.find(x=>x.date==='2031-09-21'&&x.team==='Napoli'&&x.competition==='Serie A');
if(!nextKnown)throw Error('21 Sep next league fixture missing');
D.nextClubFixture=nextKnown;D.nextSerieAFixture=nextKnown;D.nextLeagueMatch=nextKnown;D.nextMatch=nextKnown;D.nextFixture=nextKnown;
D.nextEuropeanFixture=null;D.nextEuropeanOpponent=null;
D.upcoming=[['Opponent to be confirmed','Serie A','21 Sep 2031 · Home'],['Sassuolo','Serie A','27 Sep 2031 · Away']];
D.meta={...(D.meta||{}),season:'2031–32 · THREE-TIME EUROPEAN HOLDERS · ITALY QUALIFYING GROUP WINNERS'};
D.hero={...(D.hero||{}),articleId:ids[0],strap:'CHAMPIONS LEAGUE · ARSENAL 1–0 NAPOLI · 16 SEPTEMBER 2031'};
D.ticker=['ARSENAL 1–0 NAPOLI · ANSAH 8′ · CHAMPIONS LEAGUE LEAGUE PHASE','RAYA AND EPOLO BOTH OUTSTANDING · NAPOLI FALL SHORT IN LONDON','BELLANDI: A SINGLE LOSS IS NOT A CRISIS · FIX THE EARLY STARTS','ROMA 0–2 NAPOLI · SEBA 32′ · PIO 75′','SEBASTIANO ESPOSITO · FIRST NAPOLI GOAL AND AN ASSIST FOR HIS BROTHER','MIKEY MOORE · ASSISTS IN CONSECUTIVE SERIE A MATCHES','NAPOLI SERIE A · 7 POINTS FROM 3 MATCHES · TWO STRAIGHT CLEAN SHEETS','ITALY QUALIFYING GROUP WINNERS · 20 POINTS · UNBEATEN'];
D.whispers=[
 ['ARSENAL EDGE HOLDERS','Ansah scores after eight minutes; Raya denies Napoli chances, while Epolo shines at the other end in a 1–0 defeat.'],
 ['BELLANDI ON EARLY CONCESSIONS','The columnist rejects talk of crisis after one league-phase loss but questions the opening eight minutes.'],
 ['SEBA OPENS HIS ACCOUNT','Sebastiano Esposito scores first Napoli goal at Roma, then sets up Pio with a through ball.'],
 ['MOORE THE PROVIDER','Mikey Moore assists Pio against Sampdoria and Sebastiano against Roma in consecutive league fixtures.'],
 ['LEAGUE FORM HOLDS','Napoli have seven points from three Serie A matches, with consecutive clean-sheet wins against Sampdoria and Roma.'],
 ['EPOLO IMPRESSES','Napoli goalkeeper delivers an excellent performance despite defeat at Arsenal.'],
 ['ITALY ON TOP','Italy finished their European Championship qualifying group unbeaten, with 20 points and a +10 goal difference.']
];
const card=(a,variant)=>'<article class="article-card '+E(variant)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy"></div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story</span></div></article>';
const lead=front[0];
if($('heroStory'))$('heroStory').innerHTML='<div class="hero-media"><img src="'+E(lead.image)+'" alt="Archival European football editorial illustration accompanying Arsenal versus Napoli" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(lead.category)+'</span><span>'+E(lead.date)+'</span></div><h2>'+E(lead.headline)+'</h2><p>'+E(lead.dek)+'</p><span class="hero-read">Read story</span></div>';
if($('topStories'))$('topStories').innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+E(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(a.category)+'</small><strong>'+E(a.headline)+'</strong></div></button>').join('');
if($('latestNews'))$('latestNews').innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i?'compact':'wide')).join('');
if($('newsGrid'))$('newsGrid').innerHTML=D.articles.map((a,i)=>card(a,i?'standard':'lead-grid')).join('');
if($('articleFilters'))$('articleFilters').innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((a,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(a)+'">'+E(a)+'</button>').join('');
if($('tickerTrack'))$('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
if($('whisperList'))$('whisperList').innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
if($('latestResult'))$('latestResult').innerHTML='<div class="latest-score"><span>ARS</span><strong>1–0</strong><span>NAP</span></div><p>CHAMPIONS LEAGUE · ANSAH 8′ · RAYA AND EPOLO EXCELLENT</p>';
if($('formLine'))$('formLine').innerHTML='<div><strong>NAPOLI · SEVEN LEAGUE POINTS</strong><span>3 played · 2 wins · 1 draw · 0 defeats · 6 for · 2 against</span></div><div><strong>ROMA 0–2 NAPOLI</strong><span>Sebastiano 32′ (Moore), Pio 75′ (Sebastiano) · clean sheet</span></div><div><strong>CHAMPIONS LEAGUE OPENER · ARSENAL 1–0 NAPOLI</strong><span>Ansah 8′ · Raya outstanding · Epolo outstanding · league phase continues</span></div>';
if($('upcomingStrip'))$('upcomingStrip').innerHTML=D.upcoming.map(([team,competition,when])=>'<div class="fixture"><span>'+E(competition)+'</span><strong>'+E(team)+'</strong><small>'+E(when)+'</small></div>').join('');
if($('nextTwo'))$('nextTwo').innerHTML=D.upcoming.map(([team,competition,when])=>'<div class="next-row"><strong>'+E(team)+'</strong><span>'+E(competition)+' · '+E(when)+'</span></div>').join('');
if($('matchesList')&&!$('matchesList').querySelector('[data-arsenal-napoli-sep16-2031]'))$('matchesList').innerHTML='<div class="match-card" data-arsenal-napoli-sep16-2031="true"><div class="result-badge L">L</div><div class="match-main"><span>Champions League · League phase · Away · 16 Sep 2031</span><strong>Arsenal <b>1–0</b> Napoli</strong><p>Ansah 8′ · Raya and Epolo outstanding · Napoli created several good chances</p></div></div>'+$('matchesList').innerHTML;
if($('matchesList')&&!$('matchesList').querySelector('[data-napoli-roma-sep12-2031]'))$('matchesList').innerHTML='<div class="match-card" data-napoli-roma-sep12-2031="true"><div class="result-badge W">W</div><div class="match-main"><span>Serie A · Away · 12 Sep 2031</span><strong>Roma <b>0–2</b> Napoli</strong><p>Sebastiano Esposito 32′ (Mikey Moore) · Pio Esposito 75′ (Sebastiano) · two consecutive league clean sheets</p></div></div>'+$('matchesList').innerHTML;
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='THREE-TIME EUROPEAN HOLDERS · ARSENAL 1–0 NAPOLI';
const eyebrow=document.querySelector('.brand-copy .eyebrow');if(eyebrow)eyebrow.textContent='NAPOLI & ITALIA · SEASON 2031–32';
document.title='Arsenal 1–0 Napoli · Bellandi reaction · Season Room 2031–32';
const description=document.querySelector('meta[name="description"]');if(description)description.content='Ansah scores early as Arsenal defeat Napoli 1–0 despite Epolo and Raya brilliance; Matteo Bellandi analyses the loss. Roma 0–2 Napoli: Sebastiano scores and assists Pio.';
window.SEASONROOM_STATS?.render?.('2031–32');
})();
