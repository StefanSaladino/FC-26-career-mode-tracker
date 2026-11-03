/* 9 Nov 2030 · Napoli 3–1 Torino · Serie A MD11 full time: Kayode available and Epolo recovered. */
(()=>{'use strict';const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31';
const match={date:'2030-11-09',team:'Napoli',opponent:'Torino',venue:'Home',competition:'Serie A',status:'completed',score:'3–1',teamCleanSheet:false,events:[
 {minute:29,team:'Napoli',scorer:'Pio Esposito',assist:'Warren Zaïre-Emery',detail:'Pio scores from a lovely Zaïre-Emery ball'},
 {minute:45,team:'Torino',scorer:'Sazonov',assist:null,finish:'Weak header',detail:'Peacock may have been able to save it — assessment, not established error'},
 {minute:70,team:'Napoli',scorer:'Mikey Moore',assist:'Pio Esposito'},
 {minute:81,team:'Napoli',scorer:'Maximilian Beier',assist:'Scott McTominay'}
],injuryIncidents:[{player:'Michael Kayode',minute:28,diagnosis:null,substitutionMinute:null,availability:'Available, avoided serious injury'}],notes:'Napoli 3–1 Torino, halftime 1–1. Kayode hurt 28′ but avoided serious injury and remains available; Pio 29′ from Zaïre-Emery, Sazonov 45′ weak header with Peacock in goal (manager thought saveable), Moore 70′ from Pio, Beier 81′ from McTominay. Epolo has healed and is available after his eleven-day absence. No extra match events supplied.'};
const sched=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const old=sched.find(x=>x.team==='Napoli'&&x.opponent==='Torino'&&x.date===match.date);
if(old)Object.assign(old,match);else sched.push(match);
D.upcoming=sched.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Torino'&&x[2]==='Serie A'&&String(x[6]).includes('09 Nov 2030')))D.results.push(['Napoli','Torino','Serie A',3,1,'W','09 Nov 2030 · Home','Kayode injury 28′ (no serious problem, available); Pio 29′ (Zaïre-Emery); Sazonov 45′ weak header (Torino, Peacock in goal); Moore 70′ (Pio); Beier 81′ (McTominay). Epolo recovered.']);
D.latestResult=['NAPOLI','3–1','TORINO','Serie A · 9 November 2030 · Pio 29′ · Moore 70′ · Beier 81′'];
D.season203031={...(D.season203031||{}),updated:'9 November 2030 · Napoli 3–1 Torino · full time',competitiveGamesConfirmed:16,competitiveWins:13,competitiveDraws:2,competitiveLosses:1,competitiveGoalsFor:37,competitiveGoalsAgainst:10,statsVerifiedThrough:'Napoli 3–1 Torino · Serie A · 9 November 2030',serieA:{played:11,wins:9,draws:1,losses:1,points:28,goalsFor:24,goalsAgainst:6,goalDifference:18},championsLeague:{played:4,wins:3,draws:1,losses:0,points:10,goalsFor:11,goalsAgainst:3,goalDifference:8},nextClubOpponent:'Cagliari',nextClubCompetition:'Serie A',nextClubDate:'2030-11-23'};
D.seasonState={...(D.seasonState||{}),league:{played:11,w:9,d:1,l:1,points:28,goalsFor:24,goalsAgainst:6,goalDifference:18,remaining:27,status:'Napoli 28 points after eleven league matches: nine wins, one draw, one loss; 24 goals for and six against.'}};
D.nextClubFixture={date:'2030-11-23',opponent:'Cagliari',competition:'Serie A',venue:'Away'};
D.goalkeeperAvailability2030={player:'Epolo',status:'Recovered and available',expectedAbsenceDays:0,returnDate:null,temporaryReplacements:['Burnett','Peacock'],rotation:'Earlier temporary Burnett–Peacock rotation completed on Epolo recovery; future selections unconfirmed',notes:'Epolo has healed following his previously reported eleven-day absence. Peacock was in goal when Sazonov headed in at 45′; no blame conclusively assigned.'};
D.kayodeTorino2030={player:'Michael Kayode',incidentDate:'2030-11-09',incidentMinute:28,severity:'Not serious',availability:'Available',injuryDiagnosis:null,substitution:null};
D.statsScope='Napoli competitive club matches ONLY through Torino on 9 November 2030: Pio Esposito 15G7A, Maximilian Beier 13G9A, Mikey Moore 5G4A, Anton Stach 1G3A, Giacomo Raspadori 2G1A, Warren Zaïre-Emery 0G2A, Scott McTominay 0G2A. Italy stats separate.';
const rows=D.statsBySeason?.[season];
if(rows){
for(const [name,g,a,note] of [
 ['Pio Esposito',1,1,'Torino 9 Nov: scores 29′ assisted by Zaïre-Emery; assists Moore for 70′ winner'],
 ['Mikey Moore',1,0,'Torino 9 Nov: scores 70′ to restore lead, assisted by Pio'],
 ['Maximilian Beier',1,0,'Torino 9 Nov: scores 81′ assisted by McTominay; after Betis hat-trick'],
 ['Warren Zaïre-Emery',0,1,'Torino 9 Nov: beautiful pass for Pio goal 29′'],
 ['Scott McTominay',0,1,'Torino 9 Nov: official assist for Beier goal 81′; assisted Beier vs Betis too']
]){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}
row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;
row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
D.stats=rows;D.statsCurrentSeason=season;
const sums=new Map();
for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p)}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
if(desc)desc.textContent=view===season?'Napoli club totals through Torino: Pio 15G7A, Beier 13G9A, Moore 5G4A, McTominay 0G2A, Zaïre-Emery 0G2A. Italy excluded.':'Napoli club statistics for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'Napoli 3–1 Torino: Pio 29′ (Zaïre-Emery), Moore 70′ (Pio), Beier 81′ (McTominay). Italy excluded.':'Napoli club records only; Italy excluded.';};
controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=['napoli-torino-three-one-moore-pio-beier-nov9-2030','pio-moore-torino-seventy-minute-breakthrough-nov2030','torino-kayode-cleared-epolo-back-peacock-header-nov2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Torino stories missing');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='SERIE A · NAPOLI 3–1 TORINO';D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['NAPOLI 3–1 TORINO · PIO 29′ · MOORE 70′ · BEIER 81′','SAZONOV HEADER 45′ · TORINO LEVEL AT THE BREAK','KAYODE AVAILABLE AFTER 28′ SCARE · EPOLO RECOVERED','PIO 1 GOAL + 1 ASSIST · MOORE RESTORES NAPOLI LEAD','McTOMINAY ASSISTS BEIER IN CONSECUTIVE MATCHES','NAPOLI SERIE A · 28 POINTS FROM ELEVEN · 9W 1D 1L','NEXT NAPOLI AT CAGLIARI NOV 23 · MAN CITY UCL NOV 26'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['MOORE STRIKES','Mikey Moore scores the 70′ goal that restores Napoli’s lead against Torino.'],['PIO TWO WAYS','Esposito scores from Zaïre-Emery, then assists Moore for the 2–1.'],['BEIER AGAIN','The German scores at 81′, assisted by McTominay after their Betis combination.'],['GOALKEEPERS','Peacock was in goal for Sazonov’s equaliser; Epolo has recovered and is available again.'],['KAYODE AVAILABLE','The defender avoids serious injury after going down at 28′.'],['NEXT','Away to Cagliari 23 November, followed by Manchester City in Europe.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI 3–1 TORINO · MOORE BREAKS THE DEADLOCK</strong><span>Pio 29′ (Zaïre-Emery) · Moore 70′ (Pio) · Beier 81′ (McTominay)</span></div><div><strong>SERIE A · 28 POINTS</strong><span>11 played · 9 wins, one draw, one defeat · 24 scored, six conceded</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>3–1</strong><span>TOR</span></div><p>SERIE A · 09 NOV 2030 · PIO 29′ · SAZONOV 45′ · MOORE 70′ · BEIER 81′</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='NAPOLI 3–1 TORINO · 28 SERIE A POINTS · CAGLIARI NEXT';
})();
