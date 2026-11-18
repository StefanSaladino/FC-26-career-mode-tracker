/* Supercoppa Italiana 2031–32: Napoli 1–1 Inter, Napoli win 4–1 on penalties. Date/day not supplied. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const ids=['napoli-inter-supercoppa-rossetti-penalties-2031','edoardo-rossetti-19-supercoppa-top-corner-2031','epolo-inter-supercoppa-frattesi-save-2031'];
const source=D.articles||[],front=ids.map(id=>source.find(x=>x.id===id));
if(front.some(x=>!x))throw Error('Supercoppa editorial article missing');
const set=new Set(ids);D.articles=[...front,...source.filter(x=>!set.has(x.id))];
const match={date:null,season:'2031–32',team:'Napoli',opponent:'Inter',competition:'Supercoppa Italiana',stage:'Final',round:'Final',status:'completed',score:'1–1',winner:'Napoli',decision:'Penalties',penalties:{Napoli:4,Inter:1},resultText:'Napoli 1–1 Inter (Napoli win 4–1 on penalties)',events:[
{minute:'25',team:'Inter',scorer:'Carboni'},
{minute:'39',team:'Napoli',scorer:'Pio Esposito',assist:'Estêvão',officialAssist:true,notes:'Header from Estêvão cross'},
{minute:'120+1',team:'Napoli',type:'woodwork',player:'Pio Esposito',notes:'Hits the post; ball stays out'}
],shootout:[{round:1,team:'Napoli',player:'Pio Esposito',outcome:'goal'},{round:1,team:'Inter',player:'Barella',outcome:'post, no goal'},{round:2,team:'Napoli',player:'Maximilian Beier',outcome:'goal'},{round:2,team:'Inter',player:'Lavelli',outcome:'goal'},{round:3,team:'Napoli',player:'Warren Zaïre-Emery',outcome:'goal'},{round:3,team:'Inter',player:'Frattesi',outcome:'saved by Epolo'},{round:4,team:'Napoli',player:'Edoardo Rossetti',outcome:'goal, top corner; trophy won'}],
notes:'Both goalkeepers performed well across 120 minutes. Napoli win 4–1 on penalties; no Inter fourth kick. No calendar day, venue, additional match actions or save totals reported.'};
D.supercoppaInter2031=match;
for(const key of ['latestMatch','latestClubMatch','latestCompletedFixture','lastCompletedFixture','latestClubResult'])D[key]=match;
D.latestResult=['Napoli','1–1','Inter','Supercoppa Italiana · 4–1 on penalties · 2031–32'];
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(r=>r[0]==='Napoli'&&r[1]==='Inter'&&r[2]==='Supercoppa Italiana'&&String(r[6]).includes('2031–32')))D.results.unshift(['Napoli','Inter','Supercoppa Italiana',1,1,'W','2031–32 · Final · penalties 4–1','Carboni 25; Pio Esposito 39 (Estêvão official assist); Pio post 120+1; Napoli penalties Pio, Beier, Zaïre-Emery, Rossetti scored; Barella post, Lavelli goal, Epolo saves Frattesi.']);
D.seasonState={...(D.seasonState||{}),currentSeason:'2031–32',phase:'competitive season',supercoppa:{status:'completed',winner:'Napoli',result:'Napoli 1–1 Inter (4–1 penalties)',season:'2031–32',final:match}};
D.trophies=Array.isArray(D.trophies)?D.trophies:[];
if(!D.trophies.includes('Supercoppa Italiana 2031–32'))D.trophies.push('Supercoppa Italiana 2031–32');
D.statsBySeason=D.statsBySeason||{};
D.statsBySeason['2031–32']=[['Pio Esposito',1,0,'Supercoppa final vs Inter: 39′ headed equalizer from Estêvão cross; first penalty converted. Penalty is excluded from club goals.'],['Estêvão',0,1,'Supercoppa final vs Inter: 39′ official assist for Pio Esposito headed equalizer.']];
D.statsCurrentSeason='2031–32';D.stats=D.statsBySeason['2031–32'];
for(const [name,g,a,previousG,previousA] of [['Pio Esposito',145,74,144,74],['Estêvão',3,8,3,7]]){
 const row=(D.careerStats||[]).find(r=>r[0]===name);if(!row)throw Error('Career row missing '+name);
 if(Number(row[1])===previousG&&Number(row[2])===previousA){row[1]=g;row[2]=a;}
 else if(Number(row[1])!==g||Number(row[2])!==a)throw Error('Career totals inconsistent for '+name);
}
if(D.statsRoomAudit){D.statsRoomAudit.pioCareerGoals=145;D.statsRoomAudit.pioCareerAssists=74;}
D.statsRoomAsOf='2031–32 · Supercoppa Italiana final';
D.statsScope='2031–32 competitive Napoli club stats after Supercoppa final against Inter: Pio Esposito 1G0A; Estêvão 0G1A. Shootout conversions excluded. Italy internationals excluded.';
D.keeperStats203132={Epolo:{lastMatch:'Napoli 1–1 Inter · Supercoppa final · 4–1 penalties',frattesiPenaltySaved:true,matchSaveTotal:null}};
D.meta={...(D.meta||{}),season:'2031–32 · SUPERCOPPA ITALIANA WINNERS'};
D.hero={...(D.hero||{}),articleId:ids[0],strap:'SUPERCOPPA WINNERS · NAPOLI 1–1 INTER · 4–1 ON PENALTIES'};
D.ticker=['NAPOLI WIN THE SUPERCOPPA · 4–1 ON PENALTIES AGAINST INTER','ROSSETTI, 19, BLASTS THE TROPHY-WINNING PENALTY INTO THE TOP CORNER','EPOLO SAVES FRATTESI · INTER DENIED','PIO 39′ HEADER FROM ESTÊVÃO CROSS · CARBONI 25′','PIO HITS THE POST AT 120+1 THEN SCORES THE FIRST PENALTY','PIO · BEIER · ZAÏRE-EMERY · ROSSETTI ALL CONVERT','2031–32 BEGINS WITH SILVERWARE · THREE STRAIGHT EUROPEAN TITLES BEHIND THE CHAMPIONS'];
D.whispers=[['ROSSETTI FINISHES IT','At nineteen, Edoardo Rossetti converts the fourth Napoli penalty into the top corner to win the Supercoppa.'],['EPOLO DENIES FRATTESI','After a strong match from both goalkeepers, Epolo saves Inter’s third penalty.'],['PIO ANSWERS THE POST','Pio strikes the woodwork at 120+1 but converts the opening shootout penalty; his 39′ header levelled the final.'],['ESTÊVÃO CREATES','The official assist for Pio’s headed equalizer belongs to Estêvão.'],['INTER MADE IT A FINAL','Carboni put Inter ahead at 25′. Neither side broke the 1–1 deadlock over 120 minutes.'],['NEXT FIXTURE','The Supercoppa is won; the following fixture has not yet been announced.']];
const card=(a,variant)=>'<article class="article-card '+esc(variant)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media"><img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy"></div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story</span></div></article>';
const lead=front[0];
if($('heroStory'))$('heroStory').innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="Editorial illustration for Napoli Supercoppa victory over Inter" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(D.hero.strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read story</span></div>';
if($('topStories'))$('topStories').innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
if($('latestNews'))$('latestNews').innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i?'compact':'wide')).join('');
if($('newsGrid'))$('newsGrid').innerHTML=D.articles.map((a,i)=>card(a,i?'standard':'lead-grid')).join('');
if($('articleFilters'))$('articleFilters').innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((a,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+esc(a)+'">'+esc(a)+'</button>').join('');
if($('tickerTrack'))$('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
if($('whisperList'))$('whisperList').innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
if($('latestResult'))$('latestResult').innerHTML='<div class="latest-score"><span>NAP</span><strong>1–1</strong><span>INT</span></div><p>SUPERCOPPA FINAL · NAPOLI WIN 4–1 ON PENALTIES · ROSSETTI WINNER</p>';
if($('formLine'))$('formLine').innerHTML='<div><strong>SUPERCOPPA ITALIANA WINNERS</strong><span>Napoli 1–1 Inter · 4–1 penalties · Rossetti converts winning kick</span></div><div><strong>EPOLO SAVES FRATTESI · PIO LEVELS AT 39′</strong><span>Inter: Carboni 25′ · Napoli: Pio from Estêvão cross 39′</span></div><div><strong>THREE CONSECUTIVE EUROPEAN CUPS · FOUR CONSECUTIVE SCUDETTI</strong><span>Napoli enter 2031–32 with another domestic trophy</span></div>';
if($('upcomingStrip'))$('upcomingStrip').innerHTML='<div class="fixture"><span>2031–32 · SUPERCOPPA WINNERS</span><strong>NEXT NAPOLI FIXTURE</strong><small>Schedule awaiting confirmation</small></div>';
if($('nextTwo'))$('nextTwo').innerHTML='<div class="next-row"><strong>SUPERCOPPA CHAMPIONS · NAPOLI 4–1 ON PENALTIES</strong><span>Next fixture awaiting confirmation</span></div>';
if($('matchesList')&&!$('matchesList').querySelector('[data-supercoppa-inter-2031]'))$('matchesList').innerHTML='<div class="match-card" data-supercoppa-inter-2031="true"><div class="result-badge W">W</div><div class="match-main"><span>Supercoppa Italiana · Final · 2031–32</span><strong>Napoli <b>1–1</b> Inter · 4–1 penalties</strong><p>Carboni 25′ · Pio Esposito 39′ (Estêvão) · Pio post 120+1 · Epolo saves Frattesi · Rossetti winner</p></div></div>'+$('matchesList').innerHTML;
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='SUPERCOPPA WINNERS · NAPOLI 4–1 INTER ON PENALTIES';
const eyebrow=document.querySelector('.brand-copy .eyebrow');if(eyebrow)eyebrow.textContent='NAPOLI & ITALIA · SEASON 2031–32';
document.title='Napoli 2031–32 · Supercoppa Champions — Season Room';
const description=document.querySelector('meta[name="description"]');if(description)description.content='Napoli win the 2031–32 Supercoppa Italiana on penalties against Inter. Edoardo Rossetti converts the winner; Epolo saves Frattesi; Pio Esposito equalises from Estêvão’s cross.';
window.SEASONROOM_STATS?.render?.('2031–32');
})();
