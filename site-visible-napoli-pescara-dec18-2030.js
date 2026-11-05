/* Domestic Cup: Napoli 4–1 Pescara, 18 December 2030 · known scorers and assists only. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31',match={date:'2030-12-18',team:'Napoli',opponent:'Pescara',venue:'Home',competition:'Cup',status:'completed',score:'4–1',halfTime:null,teamCleanSheet:false,
events:[{minute:null,team:'Napoli',scorer:'Giacomo Raspadori',assist:null,order:'unconfirmed',detail:'First Raspadori goal; timing and linked assist not established'},{minute:null,team:'Napoli',scorer:'Giacomo Raspadori',assist:null,order:'unconfirmed',detail:'Second Raspadori goal; timing and linked assist not established'},{minute:null,team:'Napoli',scorer:'Pio Esposito',assist:null,order:'unconfirmed',detail:'Pio scores; timing and linked assist not established'},{minute:null,team:'Pescara',scorer:null,assist:null,order:'unconfirmed',detail:'Pescara goal scorer and precise time not established'},{minute:69,team:'Napoli',scorer:'Michael Olise',assist:'Lutsharel Geertruida',assistOfficial:true,detail:'Powerful shot from outside the penalty area into the top corner; score becomes 4–1'}],
notes:'Napoli 4–1 Pescara: Raspadori scored twice, Pio once, Olise 69′ top-corner shot from outside area (Geertruida assisted); Pescara scored one. Olise and Nico Paz are additionally credited with one assist each in earlier Napoli scoring, and one other Napoli assist provider is unknown. Assigning those assists to individual Raspadori/Pio goals or exact times is unsupported. Cup round, halftime score and lineup not established.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const found=schedule.find(x=>x.team==='Napoli'&&x.opponent==='Pescara'&&x.date===match.date);if(found)Object.assign(found,match);else schedule.push(match);
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[
x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Pescara'&&String(x[6]).includes('18 Dec 2030')))D.results.push(['Napoli','Pescara','Cup',4,1,'W','18 Dec 2030 · Home','Raspadori twice; Pio once; Olise long-range top corner at 69′ (Geertruida assist). Olise and Paz also credited with one assist each; additional provider unknown.']);
D.latestResult=['NAPOLI','4–1','PESCARA','Domestic cup · 18 December 2030 · Raspadori x2, Pio and Olise'];
D.season203031={...(D.season203031||{}),updated:'18 December 2030 · Napoli 4–1 Pescara · full time',competitiveGamesConfirmed:23,competitiveWins:19,competitiveDraws:3,competitiveLosses:1,competitiveGoalsFor:54,competitiveGoalsAgainst:17,statsVerifiedThrough:'Napoli 4–1 Pescara · domestic cup · 18 December 2030',serieA:{played:15,wins:13,draws:1,losses:1,points:40,goalsFor:34,goalsAgainst:10,goalDifference:24},championsLeague:{played:6,wins:4,draws:2,losses:0,points:14,goalsFor:14,goalsAgainst:5,goalDifference:9,position:2},nextClubOpponent:'Parma',nextClubCompetition:'Serie A',nextClubDate:'2030-12-21'};
D.seasonState={...(D.seasonState||{}),league:{played:15,w:13,d:1,l:1,points:40,goalsFor:34,goalsAgainst:10,goalDifference:24,remaining:23,status:'Napoli have 40 Serie A points from fifteen matches; the Pescara 4–1 result was in the domestic cup.'}};
D.nextClubFixture={date:'2030-12-21',opponent:'Parma',competition:'Serie A',venue:'Away'};
D.pescaraCupDec2030={date:'2030-12-18',result:'Napoli 4–1 Pescara',scorers:{'Giacomo Raspadori':2,'Pio Esposito':1,'Michael Olise':1,'Pescara':1},goals:match.events,assists:{'Lutsharel Geertruida':1,'Michael Olise':1,'Nico Paz':1,unattributed:1},knownAssistMapping:[{scorer:'Michael Olise',provider:'Lutsharel Geertruida',minute:69}],otherGoalsOrderUnconfirmed:true,clubTotal:{played:23,wins:19,draws:3,losses:1,goalsFor:54,goalsAgainst:17},leaguePointsUnchanged:40};
D.statsScope='Napoli club after Pescara: Raspadori 4G1A, Pio 19G9A, Olise 1G6A, Nico Paz 0G2A, Geertruida 2G1A. Fourth match assist provider not recorded. Earlier Leipzig official assists retained, Pisa status independent. Italy excluded.';
const rows=D.statsBySeason?.[season];
if(rows){
for(const [name,g,a,note] of [
['Giacomo Raspadori',2,0,'Pescara cup 18 Dec: brace, individual minutes and goal-assist pairings not established'],
['Pio Esposito',1,0,'Pescara cup 18 Dec: one goal, minute and linked goal-assist pair not established'],
['Michael Olise',1,1,'Pescara cup 18 Dec: goal 69′ from Geertruida, top-corner shot from outside box; also one credited assist with unspecified recipient'],
['Nico Paz',0,1,'Pescara cup 18 Dec: credited assist, specific recipient unspecified'],
['Lutsharel Geertruida',0,1,'Pescara cup 18 Dec: credited assist on Olise 69′ screamer']
]){let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));D.stats=rows;D.statsCurrentSeason=season;
const sums=new Map();for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p)}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
if(desc)desc.textContent=view===season?'Napoli club: Raspadori 4G1A, Pio 19G9A, Olise 1G6A, Paz 0G2A, Geertruida 2G1A. Italy excluded.':'Napoli club stats for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'Pescara cup 4–1: Raspadori twice, Pio, Olise 69′. Geertruida, Olise and Paz each credited with an assist; one other provider unspecified.':'Napoli club records only; Italy excluded.';};
controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=["napoli-four-one-pescara-raspadori-pio-olise-dec2030","raspadori-two-goals-pescara-squad-depth-dec2030","olise-goal-and-assist-pescara-december-form-2030"],pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Missing Pescara newsroom articles');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='DOMESTIC CUP · NAPOLI 4–1 PESCARA';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['NAPOLI 4–1 PESCARA · RASPADORI BRACE','PIO SCORES · OLISE TOP-CORNER ROCKET 69′','GEERTRUIDA ASSISTS OLISE · PAZ AND OLISE ALSO CREATE','CUP WIN · 23 CLUB GAMES, 19 VICTORIES','NEXT · PARMA AWAY 21 DEC · UDINESE HOME 28 DEC'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['THE DOUBLE','Giacomo Raspadori scores twice in the 4–1 home cup win over Pescara.'],['OLISE THE SPECTACULAR','Geertruida assists Olise’s top-corner screamer from outside the area at 69 minutes.'],['PIO AGAIN','Esposito adds a goal to reach 19 across Napoli club competitions this season.'],['CREATORS AT WORK','Olise and Nico Paz also provide credited assists in the cup victory.'],['BACK TO THE LEAGUE','Napoli visit Parma on 21 December with 40 Serie A points.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI 4–1 PESCARA · CUP VICTORY</strong><span>Raspadori x2 · Pio · Olise 69′ (Geertruida assist)</span></div><div><strong>23 NAPOLI CLUB MATCHES · 19 WINS</strong><span>All competitions: 54 scored, 17 conceded · Serie A remains on 40 points</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>4–1</strong><span>PES</span></div><p>DOMESTIC CUP · 18 DEC 2030 · RASPADORI x2 · PIO · OLISE 69′</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='NAPOLI 4–1 PESCARA · OLISE ROCKET · PARMA NEXT';
const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Napoli defeat Pescara 4–1 in the domestic cup on 18 December 2030. Giacomo Raspadori scores twice, Pio Esposito adds one and Michael Olise strikes a 69th-minute screamer.');


})();
