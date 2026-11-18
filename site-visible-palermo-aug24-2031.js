/* Napoli 2–2 Palermo, 24 August 2031. First Serie A fixture; Palermo Diakité 7/32, Pio 15/49. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const E=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const ids=['palermo-napoli-two-two-diakite-pio-aug24-2031','pio-esposito-two-equalisers-palermo-aug24-2031','napoli-august-september-roma-arsenal-calendar-2031'];
const source=D.articles||[],front=ids.map(id=>source.find(x=>x.id===id));
if(front.some(x=>!x))throw Error('Palermo newsroom article missing');
const selected=new Set(ids);D.articles=[...front,...source.filter(x=>!selected.has(x.id))];
const match={date:'2031-08-24',season:'2031–32',team:'Napoli',opponent:'Palermo',venue:'Away',competition:'Serie A',round:'Opening league match',status:'completed',score:'2–2',resultText:'Palermo 2–2 Napoli',halftime:'Palermo 2–1 Napoli',goalsFor:2,goalsAgainst:2,points:1,events:[
 {minute:'7',team:'Palermo',scorer:'Diakité'},
 {minute:'15',team:'Napoli',scorer:'Pio Esposito',assist:'Warren Zaïre-Emery',officialAssist:true},
 {minute:'32',team:'Palermo',scorer:'Diakité'},
 {minute:'49',team:'Napoli',scorer:'Pio Esposito',assist:'Estêvão',officialAssist:true}
],notes:'2–2 draw at Palermo, Napoli 2031–32 Serie A opener. No other match statistics or lineups given.'};
D.palermoNapoliAug24_2031=match;D.currentCalendarDate2031='2031-08-24';
for(const key of ['latestMatch','latestClubMatch','latestCompletedFixture','lastCompletedFixture','latestClubResult'])D[key]=match;
D.latestResult=['Palermo','2–2','Napoli','Serie A · 24 Aug 2031'];
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==='Napoli'&&r[1]==='Palermo'&&r[2]==='Serie A'&&String(r[6]).includes('24 Aug 2031')))D.results.unshift(['Napoli','Palermo','Serie A',2,2,'D','24 Aug 2031 · Away · opening league fixture','Diakité 7, 32 Palermo; Pio Esposito 15 (Warren Zaïre-Emery official assist), 49 (Estêvão official assist); FT 2–2.']);
D.seasonState={...(D.seasonState||{}),currentSeason:'2031–32',phase:'league season',league203132:{season:'2031–32',played:1,won:0,drawn:1,lost:0,goalsFor:2,goalsAgainst:2,points:1,position:null,asOf:'2031-08-24'}};
D.statsBySeason=D.statsBySeason||{};
D.statsBySeason['2031–32']=[
 ['Pio Esposito',3,0,'Supercoppa against Inter: headed equalizer (Estêvão) · Palermo 24 Aug: equalizers at 15′ (Zaïre-Emery) and 49′ (Estêvão). Shootout excluded.'],
 ['Estêvão',0,2,'Official assists: Supercoppa headed equalizer versus Inter and Pio 49′ equalizer at Palermo 24 Aug.'],
 ['Warren Zaïre-Emery',0,1,'Palermo 24 Aug: official assist for Pio 15′ equalizer.']
];
D.stats=D.statsBySeason['2031–32'];D.statsCurrentSeason='2031–32';
for(const [name,oldG,oldA,newG,newA] of [['Pio Esposito',145,74,147,74],['Estêvão',3,8,3,9],['Warren Zaïre-Emery',6,14,6,15]]){
 const row=(D.careerStats||[]).find(r=>r[0]===name);if(!row)throw Error('Missing career row: '+name);
 if(Number(row[1])===oldG&&Number(row[2])===oldA){row[1]=newG;row[2]=newA;}
 else if(Number(row[1])!==newG||Number(row[2])!==newA)throw Error('Club career mismatch '+name);
}
if(D.statsRoomAudit){D.statsRoomAudit.pioCareerGoals=147;D.statsRoomAudit.pioCareerAssists=74;}
D.statsRoomAsOf='24 August 2031 · Serie A opening fixture';
D.statsScope='2031–32 Napoli club competitive goals/assists through Palermo away 24 Aug: Pio 3G0A, Estêvão 0G2A, Zaïre-Emery 0G1A. Shootout kicks and Italy appearances excluded.';
D.upcoming=[
 ['Sampdoria','Serie A','30 Aug 2031 · Home'],
 ['Norway','Italy international','9 Sep 2031 · Away'],
 ['Roma','Serie A','12 Sep 2031 · Away'],
 ['Arsenal','Champions League','16 Sep 2031 · Away'],
 ['Opponent not named','Serie A','21 Sep 2031 · Home'],
 ['Sassuolo','Serie A','27 Sep 2031 · Away']
];
D.fixtures203132=[{date:'2031-08-13',team:'Napoli',opponent:'Inter',competition:'Supercoppa Italiana',status:'completed',score:'1–1',shootout:'4–1 Napoli'},match,
 {date:'2031-08-30',team:'Napoli',opponent:'Sampdoria',competition:'Serie A',venue:'Home',status:'scheduled'},
 {date:'2031-09-09',team:'Italy',opponent:'Norway',competition:'International',venue:'Away',status:'scheduled'},
 {date:'2031-09-12',team:'Napoli',opponent:'Roma',competition:'Serie A',venue:'Away',status:'scheduled'},
 {date:'2031-09-16',team:'Napoli',opponent:'Arsenal',competition:'Champions League',venue:'Away',status:'scheduled'},
 {date:'2031-09-21',team:'Napoli',opponent:null,competition:'Serie A',venue:'Home',status:'scheduled'},
 {date:'2031-09-27',team:'Napoli',opponent:'Sassuolo',competition:'Serie A',venue:'Away',status:'scheduled'}];
D.nextClubFixture=D.fixtures203132[2];D.nextEuropeanFixture=D.fixtures203132[4];
/* Calendar confirms Supercoppa on August 13; preserve its match result and penalty sequence. */
if(D.supercoppaInter2031)D.supercoppaInter2031.date='2031-08-13';
if(D.seasonState.supercoppa?.final)D.seasonState.supercoppa.final.date='2031-08-13';
D.meta={...(D.meta||{}),season:'2031–32 · SUPERCOPPA HOLDERS · SERIE A BEGINS'};
D.hero={...(D.hero||{}),articleId:ids[0],strap:'SERIE A · PALERMO 2–2 NAPOLI · 24 AUGUST 2031'};
D.ticker=['SERIE A OPENING ROUND · PALERMO 2–2 NAPOLI','DIAKITÉ 7′ & 32′ · PIO ESPOSITO 15′ & 49′','ZAÏRE-EMERY ASSISTS FIRST EQUALIZER · ESTÊVÃO THE SECOND','PIO SCORES THREE IN HIS FIRST TWO COMPETITIVE MATCHES','SUPERCOPPA WINNERS · NAPOLI BEAT INTER 4–1 ON PENALTIES','NEXT: SAMPDORIA HOME · 30 AUGUST','ROMA AWAY 12 SEPTEMBER · ARSENAL AWAY IN EUROPE 16 SEPTEMBER'];
D.whispers=[
 ['PIO KEEPS ANSWERING','Pio Esposito scored twice against Palermo, both times to level the match. He has three competitive goals this season.'],
 ['DIAKITÉ PUNISHES NAPOLI','Palermo led twice thanks to Diakité at 7′ and 32′. Napoli begin the Serie A season with a 2–2 draw.'],
 ['TWO SUPPLIERS','Zaïre-Emery assisted the 15′ equalizer; Estêvão assisted Pio’s second at 49′.'],
 ['FIRST LEAGUE POINT','One match, one draw and one point for the reigning champions. League position not yet established.'],
 ['SAMPO NEXT','Sampdoria visit on 30 August. Napoli seek their first Serie A win of the season.'],
 ['SEPTEMBER PRESSURE','Roma away on 12 September, Arsenal away in the Champions League on 16 September.']
];
const card=(a,variant)=>'<article class="article-card '+E(variant)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy"></div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story</span></div></article>';
const lead=front[0];
if($('heroStory'))$('heroStory').innerHTML='<div class="hero-media"><img src="'+E(lead.image)+'" alt="Napoli team editorial illustration for the Palermo league opener" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(lead.category)+'</span><span>'+E(lead.date)+'</span></div><h2>'+E(lead.headline)+'</h2><p>'+E(lead.dek)+'</p><span class="hero-read">Read story</span></div>';
if($('topStories'))$('topStories').innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+E(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(a.category)+'</small><strong>'+E(a.headline)+'</strong></div></button>').join('');
if($('latestNews'))$('latestNews').innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i?'compact':'wide')).join('');
if($('newsGrid'))$('newsGrid').innerHTML=D.articles.map((a,i)=>card(a,i?'standard':'lead-grid')).join('');
if($('articleFilters'))$('articleFilters').innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((a,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(a)+'">'+E(a)+'</button>').join('');
if($('tickerTrack'))$('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
if($('whisperList'))$('whisperList').innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
if($('latestResult'))$('latestResult').innerHTML='<div class="latest-score"><span>PAL</span><strong>2–2</strong><span>NAP</span></div><p>SERIE A · 24 AUG · DIAKITÉ 7′, 32′ · PIO 15′ (ZAÏRE), 49′ (ESTÊVÃO)</p>';
if($('formLine'))$('formLine').innerHTML='<div><strong>SERIE A · 2031–32 OPENING ROUND</strong><span>Palermo 2–2 Napoli · first league point from one match</span></div><div><strong>PIO ESPOSITO · TWO EQUALIZERS</strong><span>15′ (Zaïre-Emery) · 49′ (Estêvão) · three competitive goals this campaign</span></div><div><strong>SUPERCOPPA CHAMPIONS</strong><span>13 August · Napoli beat Inter 4–1 on penalties after 1–1</span></div>';
if($('upcomingStrip'))$('upcomingStrip').innerHTML=D.upcoming.slice(0,6).map(([team,competition,when])=>'<div class="fixture"><span>'+E(competition)+'</span><strong>'+E(team)+'</strong><small>'+E(when)+'</small></div>').join('');
if($('nextTwo'))$('nextTwo').innerHTML=D.upcoming.filter(x=>x[1]==='Serie A').slice(0,2).map(([team,competition,when])=>'<div class="next-row"><strong>'+E(team)+'</strong><span>'+E(competition)+' · '+E(when)+'</span></div>').join('');
if($('matchesList')&&!$('matchesList').querySelector('[data-palermo-aug24-2031]'))$('matchesList').innerHTML='<div class="match-card" data-palermo-aug24-2031="true"><div class="result-badge D">D</div><div class="match-main"><span>Serie A · Away · 24 August 2031</span><strong>Palermo <b>2–2</b> Napoli</strong><p>Diakité 7′, 32′ · Pio Esposito 15′ (Zaïre-Emery), 49′ (Estêvão)</p></div></div>'+$('matchesList').innerHTML;
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='SUPERCOPPA HOLDERS · SERIE A PALERMO 2–2 NAPOLI';
const eyebrow=document.querySelector('.brand-copy .eyebrow');if(eyebrow)eyebrow.textContent='NAPOLI & ITALIA · SEASON 2031–32';
document.title='Napoli 2031–32 · Palermo 2–2 Napoli — Season Room';
const description=document.querySelector('meta[name="description"]');if(description)description.content='Napoli draw 2–2 at Palermo on 24 August 2031. Pio Esposito scores twice from Zaïre-Emery and Estêvão assists; next Sampdoria, then Roma and Arsenal in September.';
window.SEASONROOM_STATS?.render?.('2031–32');
})();
