/* October 2030 EURO qualifiers and rotated Verona 2-0 win — club/Italy scopes separate. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const itGames=[
{date:'2030-10-11',team:'Italy',opponent:'Denmark',venue:'Away',competition:'EURO qualifying',competitionVerified:true,status:'completed',score:'3–1',italyGoals:3,opponentGoals:1,teamCleanSheet:false,events:[
{minute:18,team:'Italy',scorer:'Simone Pafundi',assist:'Francesco Pio Esposito',firstItalyGoal:true},
{minute:45,team:'Denmark',scorer:'Harder',assist:null},
{minute:53,team:'Italy',scorer:'Francesco Pio Esposito',assist:'Simone Pafundi'},
{minute:87,team:'Italy',scorer:'Sandro Tonali',assist:'Francesco Pio Esposito'}]},
{date:'2030-10-15',team:'Italy',opponent:'Norway',venue:'Home',competition:'EURO qualifying',competitionVerified:true,status:'completed',score:'2–0',italyGoals:2,opponentGoals:0,teamCleanSheet:true,events:[
{minute:71,team:'Italy',scorer:'Moise Kean',assist:'Manuel Locatelli'},
{minute:74,team:'Italy',scorer:'Mateo Retegui',assist:'Francesco Pio Esposito'}],
notes:'Manager reports Italy had 5 shots on goal before Kean breakthrough.'}
];
const verona={date:'2030-10-18',team:'Napoli',opponent:'Hellas Verona',venue:'Home',competition:'Serie A',status:'completed',score:'2–0',teamCleanSheet:true,rotatedSquad:true,events:[
{minute:22,team:'Napoli',scorer:'Lutsharel Geertruida',assist:'Anton Stach'},
{minute:45,team:'Napoli',scorer:'Giacomo Raspadori',assist:'Maximilian Beier'}],
notes:'Rotated Napoli squad wins 2-0. Manager describes a big-time performance. No goalkeeper identified.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
for(const game of [...itGames,verona]){const old=schedule.find(x=>x.team===game.team&&x.date===game.date);if(old)Object.assign(old,game);else schedule.push(game)}
const italyBase=D.italyEuroQualifiers2030||{},allItaly=schedule.filter(x=>x.team==='Italy'&&x.competition==='EURO qualifying'&&x.status==='completed').sort((a,b)=>a.date.localeCompare(b.date));
D.italyEuroQualifiers2030={...italyBase,competition:'UEFA European Championship qualifying',scope:'Italy national team only',updated:'15 October 2030',played:4,wins:3,draws:1,losses:0,pointsEarned:10,goalsFor:7,goalsAgainst:2,goalDifference:5,teamCleanSheets:2,
octoberWindow:{played:2,wins:2,goalsFor:5,goalsAgainst:1,playerContributions:{
'Francesco Pio Esposito':{goals:1,assists:3},'Simone Pafundi':{goals:1,assists:1,firstItalyGoal:true,age:24},
'Sandro Tonali':{goals:1,assists:0},'Moise Kean':{goals:1,assists:0},'Mateo Retegui':{goals:1,assists:0},'Manuel Locatelli':{goals:0,assists:1}}},
documentedQualifyingContributions:{'Francesco Pio Esposito':{knownGoals:2,knownAssists:3,otherAssistsUnknown:true},'Moise Kean':{knownGoals:2}},
windowContributions:{'Francesco Pio Esposito':{goals:1,assists:3},'Simone Pafundi':{goals:1,assists:1},'Sandro Tonali':{goals:1,assists:0},'Moise Kean':{goals:1,assists:0},'Mateo Retegui':{goals:1,assists:0},'Manuel Locatelli':{goals:0,assists:1}},
groupTable:null,groupPosition:null,games:allItaly};
D.italyOctober2030={competition:'EURO qualifying',results:itGames,pointsEarnedThisWindow:6,wins:2,goalsFor:5,goalsAgainst:1,pio:{goals:1,assists:3},pafundi:{age:24,firstItalyGoal:true,goals:1,assists:1}};
D.latestInternationalResult=['Italy','2–0','Norway','EURO qualifying · 15 October 2030 · Kean 71′ (Locatelli), Retegui 74′ (Pio)'];
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((a,b)=>a.date.localeCompare(b.date)).map(x=>[
x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
for(const row of [
['Italy','Denmark','EURO qualifying',3,1,'W','11 Oct 2030 · Away','Pafundi 18′ (Pio; first Italy goal), Harder 45′ (DEN), Pio 53′ (Pafundi), Tonali 87′ (Pio)'],
['Italy','Norway','EURO qualifying',2,0,'W','15 Oct 2030 · Home','Kean 71′ (Locatelli), Retegui 74′ (Pio). Team clean sheet.'],
['Napoli','Hellas Verona','Serie A',2,0,'W','18 Oct 2030 · Home','Rotated squad; Geertruida 22′ (Stach), Raspadori 45′ (Beier); team clean sheet']
])if(!D.results.some(x=>x[0]===row[0]&&x[1]===row[1]&&x[2]===row[2]&&String(x[6]).includes(row[6].split(' · ')[0])))D.results.push(row);
D.latestResult=['NAPOLI','2–0','HELLAS VERONA','Serie A · 18 October 2030 · Geertruida 22′ (Stach), Raspadori 45′ (Beier)'];
D.season203031={...(D.season203031||{}),updated:'18 October 2030 · Napoli 2–0 Hellas Verona · rotated squad',competitiveGamesConfirmed:10,competitiveWins:8,competitiveDraws:2,competitiveGoalsFor:22,competitiveGoalsAgainst:5,statsVerifiedThrough:'Napoli 2–0 Hellas Verona · Serie A · 18 October 2030',
serieA:{played:7,wins:6,draws:1,losses:0,points:19,goalsFor:16,goalsAgainst:3,goalDifference:13},
nextClubOpponent:'Celtic',nextClubCompetition:'Champions League',nextClubDate:'2030-10-22'};
D.seasonState={...(D.seasonState||{}),league:{played:7,w:6,d:1,l:0,points:19,goalsFor:16,goalsAgainst:3,goalDifference:13,remaining:31,status:'Napoli unbeaten after seven Serie A matches: six wins, one draw, 19 points; 16 goals scored and three conceded.'}};
D.nextClubFixture={date:'2030-10-22',opponent:'Celtic',competition:'Champions League',venue:'Home'};
const rows=D.statsBySeason?.['2030–31'];
if(rows){
for(const [name,g,a,note] of [
['Lutsharel Geertruida',1,0,'Verona 18 Oct: scored 22′ from Stach'],
['Anton Stach',0,1,'Verona 18 Oct: assisted Geertruida 22′'],
['Giacomo Raspadori',1,0,'Verona 18 Oct: scored 45′ from Beier'],
['Maximilian Beier',0,1,'Verona 18 Oct: assisted Raspadori 45′']
]){
let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}
row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;
row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;
}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
D.stats=rows;D.statsCurrentSeason='2030–31';
const sums=new Map();for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){
const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,found=sums.get(name)||{g:0,a:0,years:new Set()};
found.g+=Number(g)||0;found.a+=Number(a)||0;found.years.add(year);sums.set(name,found);}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
D.statsScope='Napoli club competitive totals only through Verona 2–0 on 18 October: Pio 11G3A; Beier 8G6A; Raspadori 1G1A; Geertruida 1G; Stach 1A. Italy EURO qualifying excluded.';
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="2030–31"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||'2030–31';
if(desc)desc.textContent=view==='2030–31'?'Napoli club stats through Verona 18 October: Beier 8G6A, Pio 11G3A; Italy qualifiers excluded.':'Napoli club stats for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view==='2030–31'?'Verona: Geertruida 22′ (Stach), Raspadori 45′ (Beier). Club goals and assists only.':'Napoli club records only; Italy excluded.';};
controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=['napoli-verona-rotated-squad-two-zero-oct18-2030','italy-norway-kean-retegui-two-zero-oct15-2030','denmark-italy-three-one-pafundi-pio-tonali-oct11-2030','simone-pafundi-first-italy-goal-new-partnership-oct2030'];
const pool=Array.isArray(D.articles)?D.articles:[],ordered=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(ordered.length!==ids.length){console.error('October 2030 Verona/EURO qualifier articles missing in load order');return}
const used=new Set(ids);D.articles=[...ordered,...pool.filter(a=>!used.has(a.id))];
const lead=ordered[0],strap='SERIE A · NAPOLI 2–0 VERONA · ROTATED SQUAD';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the Verona match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=['NAPOLI 2–0 VERONA · GEERTRUIDA 22′ (STACH) · RASPADORI 45′ (BEIER)','ROTATED NAPOLI XI DELIVER CLEAN SHEET · 19 SERIE A POINTS IN SEVEN','DENMARK 1–3 ITALY · PAFUNDI FIRST ITALY GOAL · PIO 1G2A','ITALY 2–0 NORWAY · KEAN 71′ · RETEGUI 74′','AZZURRI EURO QUALIFYING · FOUR PLAYED · THREE WINS ONE DRAW · TEN POINTS','PIO 1 GOAL, 3 ASSISTS ACROSS THE OCTOBER ITALY WINDOW','NAPOLI NEXT · CELTIC HOME 22 OCT · LECCE AWAY 26 OCT'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[['ROTATION WORKS','Geertruida 22′ from Stach and Raspadori 45′ from Beier deliver a 2–0 Napoli win over Verona.'],['CLEAN SHEET','A rotated Napoli side defeat Verona 2–0; the Serie A record is 6W1D, 19 points.'],['PAFUNDI FIRST','24-year-old Simone Pafundi scores his first Italy goal at 18′ in Denmark, then assists Pio at 53′.'],['AZZURRI DOUBLE','Denmark 1–3 Italy and Italy 2–0 Norway in Euro qualifying; ten points earned across four matches.'],['CELTIC NEXT','Napoli host Celtic in the Champions League on 22 October.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>SERIE A · NAPOLI 2–0 VERONA</strong><span>Geertruida 22′ (Stach) · Raspadori 45′ (Beier) · 19 points</span></div><div><strong>ITALY · TWO EURO QUALIFYING WINS</strong><span>Denmark 1–3 Italy · Italy 2–0 Norway · ten points from four qualifiers</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>2–0</strong><span>VER</span></div><p>SERIE A · 18 OCT 2030 · GEERTRUIDA 22′ · RASPADORI 45′ · CLEAN SHEET</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='NAPOLI 2–0 VERONA · ITALY TWO EURO QUALIFYING WINS';
})();