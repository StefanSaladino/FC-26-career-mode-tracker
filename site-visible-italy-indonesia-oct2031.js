/* October 2031 · Italy 3–0 Indonesia · deliberately youthful Italy team · Pio 10.0 hat-trick. Exact match day/venue not established here. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const E=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const ids=["italy-indonesia-3-0-pio-perfect-ten-youth-oct2031","pio-esposito-perfect-ten-hat-trick-italy-indonesia-oct2031","rossetti-camarda-pafundi-liberali-young-italy-indonesia-oct2031","audero-indonesia-italy-double-save-heroics-oct2031"],old=D.articles||[],front=ids.map(id=>old.find(x=>x.id===id));
if(front.some(x=>!x))throw Error('Italy Indonesia newsroom article missing');
const set=new Set(ids);D.articles=[...front,...old.filter(x=>!set.has(x.id))];
const italy={date:null,period:'October 2031',season:'2031–32',team:'Italy',opponent:'Indonesia',venue:null,competition:'International Friendly',status:'completed',score:'3–0',resultText:'Italy 3–0 Indonesia',goalsFor:3,goalsAgainst:0,halftime:'Italy 2–0 Indonesia',
xGAtHalfTime:{Italy:2.9,Indonesia:0.0},xGFullTime:null,
events:[{minute:'14',team:'Italy',scorer:'Francesco Pio Esposito',assist:'Edoardo Rossetti',officialAssist:true},{minute:'30',team:'Italy',scorer:'Francesco Pio Esposito',assist:'Francesco Camarda',officialAssist:true},{minute:'87',team:'Italy',scorer:'Francesco Pio Esposito',assist:null,assistStatus:'not reported',notes:'Indonesia goalkeeper Emil Audero saved the first attempt, miraculously recovered to save the second, then Pio scored on the third opportunity in the sequence'}],
playerRatings:{'Francesco Pio Esposito':10.0,'Edoardo Rossetti':8.0,'Francesco Camarda':7.7,'Simone Pafundi':7.4,'Mattia Liberali':7.4},
indonesiaGoalkeeper:{name:'Emil Audero',goodFirstHalfSaves:4,recoverySavesIn87thMinuteSequence:2,officialTotalSaves:null},
intentionalYouthSelection:true,notes:'Intentionally very young Italy side. At halftime Italy 2–0 Indonesia and xG 2.9 to 0.0. At full time Italy 3–0 Indonesia; final xG, exact date/venue, complete lineup, player substitutions, match award and official save count not established. Pio 87 third attempt after two Audero saves, assist not reported. Italy-only goals and assists must not be mixed into Napoli club totals.'};
D.italyIndonesiaOct2031=italy;D.latestInternationalMatch=italy;D.lastCompletedInternationalFixture=italy;
for(const key of ['latestMatch','latestCompletedFixture','lastCompletedFixture'])D[key]=italy;
D.latestResult=['Italy','3–0','Indonesia','International Friendly · October 2031'];
D.latestInternationalResult=['Italy','3–0','Indonesia','International Friendly · October 2031 · Pio 14′ (Rossetti), 30′ (Camarda), 87′ after Audero double save'];
D.italyOctober2031FriendlyContributions={scope:'Italy national side only; no changes to Napoli club statistics',matches:1,goalsFor:3,goalsAgainst:0,
players:{'Francesco Pio Esposito':{goals:3,assists:0,rating:10.0},'Edoardo Rossetti':{goals:0,assists:1,rating:8.0},'Francesco Camarda':{goals:0,assists:1,rating:7.7},'Simone Pafundi':{goals:0,assists:0,rating:7.4},'Mattia Liberali':{goals:0,assists:0,rating:7.4}},
notes:'Only known match contributions, not complete career totals. No assist established for Pio 87th-minute goal.'};
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==='Italy'&&r[1]==='Indonesia'&&r[2]==='International Friendly'&&r[3]===3&&r[4]===0))
 D.results.unshift(['Italy','Indonesia','International Friendly',3,0,'W','October 2031 · Venue not recorded','Pio 14′ (Rossetti), 30′ (Camarda), 87′ after two Audero saves. HT Italy xG 2.9–0.0. Pio rating 10.0, Rossetti 8.0, Camarda 7.7, Pafundi and Liberali 7.4.']);
D.fixtures203132=Array.isArray(D.fixtures203132)?D.fixtures203132:[];
if(!D.fixtures203132.some(x=>x.team==='Italy'&&x.opponent==='Indonesia'&&x.status==='completed'))D.fixtures203132.push(italy);
D.nextInternationalFixture={date:'2031-10-14',team:'Italy',opponent:null,competition:'International Friendly',status:'scheduled',venue:null,notes:'Second October friendly in known calendar; opponent not confirmed.'};
D.meta={...(D.meta||{}),season:'2031–32 · ITALY YOUTH FRIENDLY · NAPOLI UNBEATEN IN SERIE A'};
D.hero={...(D.hero||{}),articleId:ids[0],strap:'INTERNATIONAL FRIENDLY · ITALY 3–0 INDONESIA · OCTOBER 2031'};
D.ticker=['ITALY 3–0 INDONESIA · PIO HAT-TRICK · 10.0 MATCH RATING','ROSSETTI ASSISTS PIO 14′ · 8.0 RATING','CAMARDA ASSISTS PIO 30′ · 7.7 RATING','PAFUNDI AND LIBERALI · BOTH 7.4','AUDERO FOUR GOOD FIRST-HALF SAVES · DOUBLE RECOVERY AT 87′','ITALY HALFTIME XG 2.9 TO INDONESIA 0.0','NAPOLI 3–1 UDINESE · 16 POINTS FROM SIX','NEXT NAPOLI FIORENTINA AWAY · 17 OCTOBER'];
D.whispers=[['PERFECT TEN FOR PIO','Three goals against Indonesia earn Francesco Pio Esposito a 10.0 match rating.'],['YOUNG ITALY DELIVERS','Deliberately youthful side features Rossetti 8.0, Camarda 7.7, Pafundi 7.4 and Liberali 7.4.'],['ROSSETTI TO PIO','Rossetti assists Italy’s opener at 14′, continuing his important contributions after PSG and Udinese.'],['AUDERO EARNS RESPECT','Four good first-half saves and a spectacular double recovery at 87′ before Pio scores from the third chance.'],['CLUB AND COUNTRY','Pio’s three Italy goals belong to his international record; Napoli club season remains ten goals through Udinese.']];
const card=(a,v)=>'<article class="article-card '+E(v)+'" data-article="'+E(a.id)+'" tabindex="0" role="button"><div class="article-card-media"><img src="'+E(a.image)+'" alt="'+E(a.headline)+'" loading="lazy"></div><div class="article-card-copy"><div class="story-meta"><span>'+E(a.category)+'</span><span>'+E(a.date)+'</span></div><h3>'+E(a.headline)+'</h3><p>'+E(a.dek)+'</p><span class="read-link">Read story</span></div></article>';
const lead=front[0];
if($('heroStory'))$('heroStory').innerHTML='<div class="hero-media"><img src="'+E(lead.image)+'" alt="Archival football squad walkout editorial illustration" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+E(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+E(D.hero.strap)+'</div><div class="story-meta"><span>'+E(lead.category)+'</span><span>'+E(lead.date)+'</span></div><h2>'+E(lead.headline)+'</h2><p>'+E(lead.dek)+'</p><span class="hero-read">Read story</span></div>';
if($('topStories'))$('topStories').innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+E(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+E(a.category)+'</small><strong>'+E(a.headline)+'</strong></div></button>').join('');
if($('latestNews'))$('latestNews').innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i?'compact':'wide')).join('');
if($('newsGrid'))$('newsGrid').innerHTML=D.articles.map((a,i)=>card(a,i?'standard':'lead-grid')).join('');
if($('articleFilters'))$('articleFilters').innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((a,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+E(a)+'">'+E(a)+'</button>').join('');
if($('tickerTrack'))$('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+E(x)+'</span>').join('');
if($('whisperList'))$('whisperList').innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+E(x[0])+'</span><p>'+E(x[1])+'</p></div>').join('');
if($('latestResult'))$('latestResult').innerHTML='<div class="latest-score"><span>ITA</span><strong>3–0</strong><span>IDN</span></div><p>INTERNATIONAL FRIENDLY · PIO HAT-TRICK · 10.0 RATING</p>';
if($('formLine'))$('formLine').innerHTML='<div><strong>ITALY 3–0 INDONESIA</strong><span>Pio 14′ (Rossetti), 30′ (Camarda), 87′ · 10.0 match rating</span></div><div><strong>YOUNG ITALY · STRONG RATINGS</strong><span>Rossetti 8.0 · Camarda 7.7 · Pafundi and Liberali 7.4</span></div><div><strong>NAPOLI · 16 POINTS FROM SIX</strong><span>Five Serie A wins · one draw · Fiorentina away next · Benfica at home 21 October</span></div>';
if($('upcomingStrip'))$('upcomingStrip').innerHTML=(D.upcoming||[]).map(([team,comp,when])=>'<div class="fixture"><span>'+E(comp)+'</span><strong>'+E(team)+'</strong><small>'+E(when)+'</small></div>').join('');
if($('nextTwo'))$('nextTwo').innerHTML=(D.upcoming||[]).map(([team,comp,when])=>'<div class="next-row"><strong>'+E(team)+'</strong><span>'+E(comp)+' · '+E(when)+'</span></div>').join('');
if($('matchesList')&&!$('matchesList').querySelector('[data-italy-indonesia-oct2031]'))$('matchesList').innerHTML='<div class="match-card" data-italy-indonesia-oct2031="true"><div class="result-badge W">W</div><div class="match-main"><span>International Friendly · October 2031</span><strong>Italy <b>3–0</b> Indonesia</strong><p>Pio 14′ (Rossetti), 30′ (Camarda), 87′ (third chance after Audero double save); Pio rating 10.0</p></div></div>'+$('matchesList').innerHTML;
document.title='Italy 3–0 Indonesia · Pio Perfect 10.0 · Season Room';
const desc=document.querySelector('meta[name="description"]');if(desc)desc.content='Italy 3–0 Indonesia: Pio Esposito scores a hat-trick and earns a perfect 10.0 rating, Rossetti and Camarda assist, and Audero makes dramatic saves.';
})();
