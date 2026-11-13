/* Arsenal 2–1 Napoli, 8 Apr 2031. QF first leg; update club Paz 4G to 5G, no assist. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id),E=x=>String(x??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ids=['arsenal-two-one-napoli-paz-saka-wood-ucl-qf-apr8-2031','saka-six-minutes-wood-header-arsenal-napoli-apr2031','nico-paz-five-goals-arsenal-rebound-ucl-apr2031','juventus-between-arsenal-legs-napoli-april2031'];
const articles=ids.map(id=>(D.articles||[]).find(x=>x.id===id));if(articles.some(x=>!x))throw Error('Arsenal April8 articles missing');
D.articles=[...articles,...(D.articles||[]).filter(x=>!ids.includes(x.id))];
const match={date:'2031-04-08',team:'Napoli',opponent:'Arsenal',venue:'Away',competition:'Champions League',round:'Quarterfinal',leg:1,status:'completed',score:'2–1',resultText:'Arsenal 2–1 Napoli',halftime:'Arsenal 2–1 Napoli',goalsFor:1,goalsAgainst:2,events:[
{minute:'7',team:'Napoli',scorer:'Nico Paz',assist:null,officialAssist:false,notes:'Pio Esposito crosses, Beier shoots, David Raya saves, Paz scores on rebound. No officially credited assist.'},
{minute:'13',team:'Arsenal',scorer:'Bukayo Saka',assist:null,officialAssist:null,notes:'Equaliser; method and assist not established.'},
{minute:'19',team:'Arsenal',scorer:'Wood',assist:null,officialAssist:null,deliveryBy:'Bukayo Saka',notes:'Wood header from a Saka cross. Official assist not separately confirmed.'}],
notes:'Napoli led 1–0 at 7 minutes, trailed 2–1 at halftime, lost 2–1 at full time. No additional events supplied.'};
D.arsenalNapoliUCLQuarterfinalFirstLegApril8_2031=match;
for(const k of ['schedule203031','fixturesFebMar2031','april2031Schedule'])if(Array.isArray(D[k])){
 let x=D[k].find(x=>x.team==='Napoli'&&x.date==='2031-04-08'&&x.competition==='Champions League');if(x)Object.assign(x,match);
 D[k].sort((a,b)=>String(a.date||'9999').localeCompare(String(b.date||'9999'));
}
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Arsenal'&&x[1]==='Napoli'&&String(x[6]||'').includes('8 Apr 2031')))D.results.push(['Arsenal','Napoli','Champions League',2,1,'L','8 Apr 2031 · Away · Quarterfinal first leg','Paz 7′ rebound (no official assist; Pio cross, Beier shot saved by Raya); Saka 13′; Wood header 19′ from Saka cross. HT 2–1, FT 2–1.']);
D.latestResult=['Arsenal','2–1','Napoli','Champions League · 8 Apr 2031 · QF first leg · Paz 7′; Saka 13′, Wood 19′'];
D.latestMatch=match;D.latestClubEuropeanMatch=match;D.currentCalendarDate2031='2031-04-08';
D.upcoming=Array.isArray(D.april2031Schedule)?D.april2031Schedule.filter(x=>x.status==='scheduled'):(D.upcoming||[]).filter(x=>x.date!=='2031-04-08');
D.nextMatch=D.upcoming[0];D.nextFixture=D.nextMatch;D.nextClubMatch=D.nextMatch;D.nextClubFixture=D.nextMatch;
D.uclQuarterfinalArsenal2031={opponent:'Arsenal',stage:'Quarterfinal',firstLeg:match,firstLegResult:'Arsenal 2–1 Napoli',aggregate:{Arsenal:2,Napoli:1},afterFirstLeg:'Arsenal lead 2–1',nextMatch:{date:'2031-04-16',venue:'Napoli home',status:'scheduled'},advancement:'Napoli need a two-goal regulation win, or one-goal win to force extra time; away-goals rule not in effect'};
D.seasonState=D.seasonState||{};
const cl=D.seasonState.championsLeague||(D.seasonState.championsLeague={});
cl.stage='Quarterfinals';cl.status='First leg completed, second leg scheduled';cl.quarterfinalOpponent='Arsenal';cl.quarterfinal=cl.quarterfinal||{};
cl.quarterfinal.stage='Quarterfinals';cl.quarterfinal.opponent='Arsenal';cl.quarterfinal.status='first leg completed';cl.quarterfinal.aggregate={Arsenal:2,Napoli:1};cl.quarterfinal.firstLegResult='Arsenal 2–1 Napoli';cl.quarterfinal.legs=cl.quarterfinal.legs||[];
const leg1=cl.quarterfinal.legs.find(x=>x.date==='2031-04-08');if(leg1)Object.assign(leg1,match);else cl.quarterfinal.legs.push(match);
let leg2=cl.quarterfinal.legs.find(x=>x.date==='2031-04-16');if(!leg2)cl.quarterfinal.legs.push({date:'2031-04-16',venue:'Home',home:'Napoli',away:'Arsenal',status:'scheduled',round:'Quarterfinal',leg:2});
cl.quarterfinal.result=null;cl.quarterfinal.qualifier=null;
D.seasonState.nextFixture=D.nextMatch;
D.clubSeasonStatAppliedArsenalApril8_2031=D.clubSeasonStatAppliedArsenalApril8_2031||false;
if(!D.clubSeasonStatAppliedArsenalApril8_2031){
for(const arr of [D.stats,D.statsBySeason&&D.statsBySeason['2030–31']]){
 if(!Array.isArray(arr))continue;const row=arr.find(x=>Array.isArray(x)&&x[0]==='Nico Paz');if(!row)throw Error('Nico Paz club stats missing');if(row[1]===4)row[1]=5;else if(row[1]!==5)throw Error('Unexpected Nico Paz goal total before Arsenal: '+row[1]);row[3]=(row[3]||'')+' | Arsenal away UCL quarterfinal 8 Apr 2031: goal 7′ on rebound after Raya saved Beier attempt from Pio cross; NO OFFICIAL ASSIST.';}
const c=Array.isArray(D.careerStats)?D.careerStats.find(x=>Array.isArray(x)&&x[0]==='Nico Paz'):null;
if(c){if(c[1]!==19)throw Error('Unexpected Nico Paz career total before Arsenal '+c[1]);c[1]=20;}
D.clubSeasonStatAppliedArsenalApril8_2031=true;
}
D.season203031={...(D.season203031||{}),updated:'8 Apr 2031 Arsenal 2–1 Napoli away Champions League quarterfinal first leg. Paz 7′ (no official assist); Saka 13′; Wood 19′ headed Saka cross. Second leg Naples Apr16; Juventus away Apr12. Serie A still Napoli 76 points from 31 (nine clear of Roma) with seven league matches to go.',statsVerifiedThrough:'Napoli club goals/assists through Arsenal 2–1 Napoli Apr8: Paz now 5G4A, Beier 33G30A, Pio38G16A; no new official Napoli assist. All Italy contributions separate.',serieA:{...(D.season203031?.serieA||{}),played:31,points:76,position:1,leadPoints:9,remaining:7,source:'Manager-supplied Serie A table after Napoli Pisa Apr4; no subsequent league fixture played.'}};
D.statsScope='Napoli club contributions through Arsenal Apr8: Nico Paz 5G4A; Pio 38G16A and Beier 33G30A unchanged; no official Napoli assist on Paz goal. March Italy internationals separate.';
D.hero={...(D.hero||{}),articleId:ids[0],strap:'UCL QUARTERFINAL · ARSENAL 2–1 NAPOLI · FIRST LEG'};
D.ticker=['ARSENAL 2–1 NAPOLI · CHAMPIONS LEAGUE QUARTERFINAL FIRST LEG','PAZ 7′ · NO OFFICIAL ASSIST · SAKA 13′ · WOOD 19′ (SAKA CROSS)','JUVENTUS AWAY · 12 APRIL · SERIE A','NAPOLI vs ARSENAL · QUARTERFINAL SECOND LEG · 16 APRIL','NAPOLI 76 POINTS / 31 LEAGUE MATCHES · ROMA 67 / 31 · NINE CLEAR','RASPADORI REQUESTED TRANSFER · NO CONFIRMED MOVE'];
D.whispers=[['LONDON DEFEAT','Paz led in minute seven; Arsenal responded through Saka at 13 and Wood at 19. FT Arsenal 2–1 Napoli.'],['QUARTERFINAL RETURN','Arsenal bring a 2–1 lead to Naples on 16 April. The tie remains open.'],['JUVENTUS NEXT','Napoli visit Turin in Serie A on 12 April, between Arsenal legs.'],['PISA STILL FELT','Napoli remain 76 points from 31 Serie A matches, nine clear of Roma on equal games played.'],['RASPADORI SEEKS EXIT','Raspadori has requested a transfer but is still a Napoli player; no destination confirmed.']];
const card=(a,v)=>'<article class="article-card '+E(v)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const a=articles[0],hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h2>'+E(a.headline)+'</h2><p>'+E(a.dek)+'</p><span class="hero-read">Read the story →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((x,i)=>'<button type="button" class="top-story" data-article="'+E(x.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(x.category)+'</small><strong>'+E(x.headline)+'</strong></div></button>').join('');
const latest=$('latestNews');if(latest)latest.innerHTML=D.articles.slice(1,7).map((x,i)=>card(x,i?'compact':'wide')).join('');
const news=$('newsGrid');if(news)news.innerHTML=D.articles.map((x,i)=>card(x,i?'standard':'lead-grid')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(x=>x.category))].map((x,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(x)+'">'+E(x)+'</button>').join('');
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
const wh=$('whisperList');if(wh)wh.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
const lr=$('latestResult');if(lr)lr.innerHTML='<div class="latest-score"><span>ARS</span><strong>2–1</strong><span>NAP</span></div><p>UCL QUARTERFINAL · 8 APR · FIRST LEG · PAZ 7′, SAKA 13′, WOOD 19′</p>';
const form=$('formLine');if(form)form.innerHTML='<div><strong>ARSENAL 2–1 NAPOLI · FIRST LEG</strong><span>Paz 7′ · Saka 13′ · Wood 19′ · Return in Naples Apr16</span></div><div><strong>JUVENTUS AWAY · 12 APRIL</strong><span>Serie A · Napoli 76/31, Roma 67/31 · Nine points clear</span></div><div><strong>RASPADORI REQUESTED TRANSFER</strong><span>No completed move · Napoli attacking depth under pressure</span></div>';
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.slice(0,5).map(x=>'<div class="fixture"><span>'+E(x.competition)+' · '+E(x.date.slice(8))+' Apr</span><strong>'+E(x.gameAlias||x.opponent)+'</strong><small>'+E(x.venue)+'</small></div>').join('');
const header=document.querySelector('.header-status span:last-child');if(header)header.textContent='ARSENAL 2–1 NAPOLI · QUARTERFINAL FIRST LEG';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Arsenal beat Napoli 2–1 in the Champions League quarterfinal first leg. Nico Paz scored at seven minutes; Saka equalised and crossed for Wood. Juventus away next before the Naples return.');
const matches=$('matchesList');if(matches)matches.innerHTML='<div class="match-card"><div class="result-badge L">L</div><div class="match-main"><span>Champions League · Quarterfinal first leg</span><strong>Arsenal <b>2–1</b> Napoli</strong><p>8 Apr 2031 · Away · Paz 7′ (no assist); Saka 13′; Wood 19′ header (Saka cross)</p></div></div>'+matches.innerHTML;
})();