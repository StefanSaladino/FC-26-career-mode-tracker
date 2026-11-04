/* Serie A MD13 · Napoli 2–1 Juventus · 1 December 2030. Beier goal and OFFICIAL assist to Hasa; Zaïre-Emery assist. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={}),$=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const season='2030–31',match={
date:'2030-12-01',team:'Napoli',opponent:'Juventus',venue:'Home',competition:'Serie A',status:'completed',score:'2–1',halfTime:'0–0',teamCleanSheet:false,
events:[
{minute:58,team:'Napoli',scorer:'Maximilian Beier',assist:'Warren Zaïre-Emery',detail:'Receives Zaïre-Emery pass and breaks deadlock'},
{minute:78,team:'Napoli',scorer:'Lirim Hasa',assist:'Maximilian Beier',detail:'Beier pass; initial Hasa shot blocked, goalkeeper already reacted, Hasa scores his own follow-up; Beier OFFICIALLY credited the assist'},
{minute:'90+2',team:'Juventus',scorer:'Kenan Yildiz',assist:null}
],
statistics:{expectedGoals:{Napoli:4.6,Juventus:2.6},shots:{Napoli:13,Juventus:10},onTarget:{Napoli:9,Juventus:5},firstHalf:{expectedGoals:{Napoli:3.6,Juventus:1.0},juventusGoalkeeperSaves:6}},
notes:'Napoli 2–1 Juventus, 1 December 2030, HT 0–0. Beier 58′ from Zaïre-Emery; Hasa 78′ from Beier OFFICIAL assist, following own blocked shot; Yildiz 90+2′. FT xG 4.6–2.6, shots 13–10, shots on target 9–5. First half Napoli 3.6 xG vs Juventus 1.0 and six saves by Juventus keeper. No further details established.'};
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
const previous=schedule.find(x=>x.team==='Napoli'&&x.opponent==='Juventus'&&x.date===match.date);
if(previous)Object.assign(previous,match);else schedule.push(match);
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((a,b)=>String(a.date).localeCompare(String(b.date))).map(x=>[
x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+({'08':'Aug','09':'Sep','10':'Oct','11':'Nov','12':'Dec'}[x.date.slice(5,7)]||x.date.slice(5,7))+' 2030 · '+x.venue
]);
D.results=Array.isArray(D.results)?D.results:[];
if(!D.results.some(x=>x[0]==='Napoli'&&x[1]==='Juventus'&&x[2]==='Serie A'&&String(x[6]).includes('01 Dec 2030')))
D.results.push(['Napoli','Juventus','Serie A',2,1,'W','01 Dec 2030 · Home','Beier 58′ from Zaïre-Emery; Lirim Hasa 78′ rebound from own blocked attempt, OFFICIAL Beier assist; Yildiz 90+2′ for Juventus. Final xG 4.6–2.6, shots 13–10, shots on target 9–5.']);
D.latestResult=['NAPOLI','2–1','JUVENTUS','Serie A · 1 December 2030 · Beier 58′ (Zaïre-Emery), Hasa 78′ (Beier), Yildiz 90+2′'];
D.season203031={...(D.season203031||{}),
updated:'1 December 2030 · Napoli 2–1 Juventus · full time',
competitiveGamesConfirmed:19,competitiveWins:16,competitiveDraws:2,competitiveLosses:1,competitiveGoalsFor:43,competitiveGoalsAgainst:12,
statsVerifiedThrough:'Napoli 2–1 Juventus · Serie A · 1 December 2030',
serieA:{played:13,wins:11,draws:1,losses:1,points:34,goalsFor:29,goalsAgainst:8,goalDifference:21},
championsLeague:{played:5,wins:4,draws:1,losses:0,points:13,goalsFor:12,goalsAgainst:3,goalDifference:9},
nextClubOpponent:'Pisa',nextClubCompetition:'Serie A',nextClubDate:'2030-12-07'};
D.seasonState={...(D.seasonState||{}),league:{played:13,w:11,d:1,l:1,points:34,goalsFor:29,goalsAgainst:8,goalDifference:21,remaining:25,status:'Napoli 34 points in Serie A after thirteen: eleven wins, one draw, one loss; 29 scored, eight conceded.'}};
D.nextClubFixture={date:'2030-12-07',opponent:'Pisa',competition:'Serie A',venue:'Away'};
D.juventusDec2030={date:'2030-12-01',result:'Napoli 2–1 Juventus',halfTime:'0–0',
goals:[{minute:58,player:'Maximilian Beier',assist:'Warren Zaïre-Emery'},{minute:78,player:'Lirim Hasa',assist:'Maximilian Beier',detail:'Own shot blocked; scores follow-up; Beier official assist'},{minute:'90+2',player:'Kenan Yildiz',team:'Juventus'}],
fullTime:{xG:[4.6,2.6],shots:[13,10],onTarget:[9,5]},firstHalf:{xG:[3.6,1.0],juventusKeeperSaves:6},leaguePointsAfter:34,teamCleanSheet:false};
D.statsScope='Napoli competitive club record through Juventus 1 Dec 2030: Beier 14G13A, Pio 17G7A, Lirim Hasa 1G1A, Zaïre-Emery 0G3A, Olise 0G3A, Moore 5G4A, McTominay 1G2A. International matches and contributions kept separate.';
const rows=D.statsBySeason?.[season];
if(rows){
for(const [name,g,a,note] of [
['Maximilian Beier',1,1,'Juventus 1 Dec: scores 58′ from Zaïre-Emery pass; OFFICIAL assist to Hasa 78′ rebound goal'],
['Lirim Hasa',1,0,'Juventus 1 Dec: scores 78′ after first shot is blocked; follow-up from official Beier assist'],
['Warren Zaïre-Emery',0,1,'Juventus 1 Dec: official assist to Beier 58′ opener']
]){
let row=rows.find(x=>x[0]===name);if(!row){row=[name,0,0,''];rows.push(row)}
row[1]=(Number(row[1])||0)+g;row[2]=(Number(row[2])||0)+a;
row[3]=(row[3]&&!row[3].startsWith('0 confirmed')?row[3]+' | ':'')+note;}
rows.sort((a,b)=>Number(b[1])-Number(a[1])||Number(b[2])-Number(a[2])||a[0].localeCompare(b[0]));
D.stats=rows;D.statsCurrentSeason=season;
const sums=new Map();
for(const [year,items] of Object.entries(D.statsBySeason))for(const [raw,g,a] of items){const name=raw==='Francesco Pio Esposito'?'Pio Esposito':raw,p=sums.get(name)||{g:0,a:0,years:new Set()};p.g+=Number(g)||0;p.a+=Number(a)||0;p.years.add(year);sums.set(name,p)}
const career=[...sums].map(([name,v])=>[name,v.g,v.a,[...v.years].sort().join(', ')]).sort((a,b)=>b[1]-a[1]||b[2]-a[2]);
if(Array.isArray(D.careerStats))D.careerStats.splice(0,D.careerStats.length,...career);else D.careerStats=career;
}
const controls=$('stats')?.querySelector('.stats-filters');
if(controls){const tab=controls.querySelector('[data-stats-view="'+season+'"]'),desc=$('stats')?.querySelector('.section-head p'),notice=$('statsVerificationNotice');
const refresh=()=>{const view=controls.querySelector('.filter-pill.active')?.dataset.statsView||season;
if(desc)desc.textContent=view===season?'Napoli club after Juventus: Beier 14G13A, Pio 17G7A, Hasa 1G1A, Zaïre-Emery 0G3A. Italy excluded.':'Napoli club stats for '+(view==='career'?'recorded career':view)+'.';
if(notice)notice.textContent=view===season?'Juventus 2–1: Beier official assist on Hasa rebound, plus his own goal. Napoli 34 Serie A points from thirteen.':'Napoli club records only; Italy excluded.';};
controls.addEventListener('click',refresh);if(tab)tab.click();refresh();}
const ids=[
'napoli-juventus-two-one-beier-hasa-yildiz-dec1-2030',
'lirim-hasa-juventus-goal-fictional-interview-dec2030',
'napoli-juventus-xg-saves-finishing-defense-dec2030',
'bellandi-juventus-2-1-winning-is-not-immunity-dec2030'];
const pool=Array.isArray(D.articles)?D.articles:[],priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Missing Juventus 2030 newsroom stories');return}
const used=new Set(ids);D.articles=[...priority,...pool.filter(a=>!used.has(a.id))];
const lead=priority[0],strap='SERIE A · NAPOLI 2–1 JUVENTUS';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager" fetchpriority="high"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the match report →</span></div>';
const top=$('topStories');if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,v)=>'<article class="article-card '+esc(v)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
D.ticker=[
'NAPOLI 2–1 JUVENTUS · BEIER 58′ · HASA 78′ · YILDIZ 90+2′',
'BEIER 14 CLUB GOALS · 13 OFFICIAL ASSISTS',
'NAPOLI 4.6 xG · JUVENTUS 2.6 xG',
'NAPOLI 13 SHOTS / 9 ON TARGET · JUVENTUS 10 / 5',
'NAPOLI SERIE A · 34 POINTS FROM 13',
'HASA FOLLOWS OWN BLOCKED SHOT · BEIER OFFICIAL ASSIST',
'NEXT · PISA AWAY 7 DEC · LEIPZIG AWAY 11 DEC'];
const ticker=$('tickerTrack');if(ticker)ticker.innerHTML=[...D.ticker,...D.ticker].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[
['BEIER BREAKS THE DEADLOCK','Zaïre-Emery sets up Beier at 58′ after a goalless first half.'],
['HASA FOLLOWS UP','The youngster scores in the 78th after his first shot is blocked; Beier officially receives the assist.'],
['JUVENTUS HIT BACK','Yildiz scores at 90+2′, but Napoli win 2–1.'],
['CHANCES AT BOTH ENDS','Final xG 4.6–2.6, shots 13–10 and shots on target 9–5, all in Napoli’s favour.'],
['DECEMBER FIXTURES','Pisa away 7 December, RB Leipzig away 11 December.']];
const whispers=$('whisperList');if(whispers)whispers.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');if(form)form.innerHTML='<div><strong>NAPOLI 2–1 JUVENTUS · BEIER AND HASA</strong><span>Beier 58′ (Zaïre-Emery) · Hasa 78′ (Beier official assist) · Yildiz 90+2′</span></div><div><strong>SERIE A · 34 POINTS</strong><span>13 played · 11 wins · one draw · one defeat · 29 scored / 8 conceded</span></div>';
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>2–1</strong><span>JUV</span></div><p>SERIE A · 1 DEC 2030 · BEIER 58′ · HASA 78′ · YILDIZ 90+2′</p>';
const next=$('nextTwo');if(next)next.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A'||x[1]==='Champions League').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const status=document.querySelector('.header-status span:last-child');if(status)status.textContent='NAPOLI 2–1 JUVENTUS · 34 SERIE A POINTS · PISA NEXT';
})();
