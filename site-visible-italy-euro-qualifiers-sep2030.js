/* Italy 2030 EURO qualifying, independent public state. Keep Napoli and World Cup stat scopes unchanged. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const $=id=>document.getElementById(id);
const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const matches=[
 {date:'2030-09-06',team:'Italy',opponent:'Ukraine',venue:'Away',competition:'EURO qualifying',competitionVerified:true,status:'completed',score:'0–0',italyGoals:0,opponentGoals:0,events:[],teamCleanSheet:true},
 {date:'2030-09-10',team:'Italy',opponent:'Hungary',venue:'Home',competition:'EURO qualifying',competitionVerified:true,status:'completed',score:'2–1',italyGoals:2,opponentGoals:1,events:[{team:'Italy',scorer:'Francesco Pio Esposito',minute:null,assist:null},{team:'Italy',scorer:'Moise Kean',minute:null,assist:null}],teamCleanSheet:false}
];
const schedule=D.schedule203031=Array.isArray(D.schedule203031)?D.schedule203031:[];
for(const game of matches){
 const found=schedule.find(x=>x.date===game.date&&x.team==='Italy'&&x.opponent===game.opponent);
 if(found)Object.assign(found,game);else schedule.push(game);
}
D.italyEuroQualifiers2030={
 competition:'UEFA European Championship qualifying',scope:'Italy national team only',
 updated:'10 September 2030',played:2,wins:1,draws:1,losses:0,pointsEarned:4,goalsFor:2,goalsAgainst:1,goalDifference:1,teamCleanSheets:1,
 windowContributions:{'Francesco Pio Esposito':{goals:1,assists:null},'Moise Kean':{goals:1,assists:null}},
 groupTable:null,groupPosition:null,
 games:matches
};
D.latestInternationalResult=['Italy','2–1','Hungary','EURO qualifying · 10 September 2030 · Pio Esposito, Moise Kean'];
D.latestResult=['Italy','2–1','Hungary','EURO qualifying · 10 September 2030 · Pio Esposito and Moise Kean'];
D.upcoming=schedule.filter(x=>x.status==='scheduled').sort((a,b)=>a.date.localeCompare(b.date)).map(x=>[x.opponent,x.team==='Italy'?'Italy · '+x.competition:x.competition,x.date.slice(8,10)+' '+(x.date.slice(5,7)==='08'?'Aug':'Sep')+' 2030 · '+x.venue]);
D.results=Array.isArray(D.results)?D.results:[];
const officialRows=[
 ['Italy','Ukraine','EURO qualifying',0,0,'D','6 Sep 2030 · Away','Ukraine 0–0 Italy · full time · qualifying opener'],
 ['Italy','Hungary','EURO qualifying',2,1,'W','10 Sep 2030 · Home','Italy 2–1 Hungary · Pio Esposito and Moise Kean goals']
];
for(const row of officialRows){
 if(!D.results.some(r=>r[0]===row[0]&&r[1]===row[1]&&r[2]===row[2]&&r[6]===row[6]))D.results.push(row);
}
const filter=$('compFilter');
if(filter&&!Array.from(filter.options).some(x=>x.value==='EURO qualifying')){
 const opt=document.createElement('option');opt.value='EURO qualifying';opt.textContent='EURO qualifying';filter.appendChild(opt);
}
const latest=$('latestResult');
if(latest)latest.innerHTML='<div class="latest-score"><span>ITA</span><strong>2–1</strong><span>HUN</span></div><p>EURO QUALIFYING · 10 SEP 2030 · PIO ESPOSITO & MOISE KEAN SCORE</p>';
const list=$('matchesList');
if(list){
 for(const [id,klass,kicker,score,sub] of [
  ['italy-ukraine-euro-sep2030','D','EURO QUALIFYING · 6 SEPTEMBER 2030 · AWAY · FT','Ukraine <b>0–0</b> Italy','A point away from home · Italy team clean sheet'],
  ['italy-hungary-euro-sep2030','W','EURO QUALIFYING · 10 SEPTEMBER 2030 · HOME · FT','Italy <b>2–1</b> Hungary','Pio Esposito and Moise Kean score · four points from two qualifiers']
 ]){
  list.querySelector('[data-match-id="'+id+'"]')?.remove();
  const node=document.createElement('div');node.className='match-card';node.dataset.matchId=id;
  node.innerHTML='<div class="result-badge '+klass+'">'+klass+'</div><div class="match-main"><span>'+esc(kicker)+'</span><strong>'+score+'</strong><p>'+esc(sub)+'</p></div>';
  list.prepend(node);
 }
}
const nextTwo=$('nextTwo');
if(nextTwo)nextTwo.innerHTML=D.upcoming.filter(x=>x[1]==='Serie A').slice(0,2).map(x=>'<div class="next-row"><strong>'+esc(x[0])+'</strong><span>'+esc(x[1]+' · '+x[2])+'</span></div>').join('');
const strip=$('upcomingStrip');
if(strip)strip.innerHTML=D.upcoming.map(x=>'<div class="fixture"><span>'+esc(x[1])+'</span><strong>'+esc(x[0])+'</strong><small>'+esc(x[2])+'</small></div>').join('');
const ids=['italy-hungary-two-one-pio-kean-euro-qualifiers-sep2030','ukraine-italy-zero-zero-euro-qualifier-sep2030','moise-kean-worldcup-record-to-euro-qualifiers-interview-sep2030'];
const pool=Array.isArray(D.articles)?D.articles:[];
const priority=ids.map(id=>pool.find(a=>a.id===id)).filter(Boolean);
if(priority.length!==ids.length){console.error('Italy qualifying edition missing stories:',ids.filter(x=>!priority.some(p=>p.id===x)));return;}
const selected=new Set(ids);
D.articles=[...priority,...pool.filter(a=>!selected.has(a.id))];
const lead=priority[0],strap='EURO QUALIFYING · ITALY 2–1 HUNGARY · PIO & KEAN';
D.hero={...(D.hero||{}),articleId:lead.id,strap};
const hero=$('heroStory');
if(hero)hero.innerHTML='<div class="hero-media"><img src="'+esc(lead.image)+'" alt="'+esc(lead.headline)+'" loading="eager"></div><div class="hero-copy" data-article="'+esc(lead.id)+'" tabindex="0" role="button"><div class="hero-strap">'+esc(strap)+'</div><div class="story-meta"><span>'+esc(lead.category)+'</span><span>'+esc(lead.date)+'</span></div><h2>'+esc(lead.headline)+'</h2><p>'+esc(lead.dek)+'</p><span class="hero-read">Read the full match report →</span></div>';
const top=$('topStories');
if(top)top.innerHTML=D.articles.slice(1,5).map((a,i)=>'<button type="button" class="top-story" data-article="'+esc(a.id)+'"><span>'+String(i+1).padStart(2,'0')+'</span><div><small>'+esc(a.category)+'</small><strong>'+esc(a.headline)+'</strong></div></button>').join('');
const card=(a,variant)=>'<article class="article-card '+esc(variant)+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'<div class="article-no-image"><span>'+esc(a.category)+'</span></div>')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>';
const news=$('latestNews');
if(news)news.innerHTML=D.articles.slice(1,7).map((a,i)=>card(a,i===0?'wide':'compact')).join('');
const grid=$('newsGrid');
if(grid)grid.innerHTML=D.articles.map((a,i)=>card(a,i===0?'lead-grid':'standard')).join('');
const filters=$('articleFilters');
if(filters)filters.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((cat,i)=>'<button type="button" class="filter-pill '+(i===0?'active':'')+'" data-category="'+esc(cat)+'">'+esc(cat)+'</button>').join('');
const lines=[
 'ITALY 2–1 HUNGARY · PIO ESPOSITO AND MOISE KEAN SCORE',
 'EURO QUALIFYING · ITALY FOUR POINTS FROM TWO MATCHES',
 'UKRAINE 0–0 ITALY · CLEAN SHEET IN OPENING AWAY QUALIFIER',
 'KEAN AND PIO · WORLD CUP BRONZE TO EURO QUALIFICATION',
 'NAPOLI 2030–31 · FOUR SERIE A POINTS AFTER TWO MATCHES',
 'NAPOLI NEXT · FIORENTINA HOME · 15 SEPTEMBER 2030',
 'BEIER FIVE CLUB GOALS · FOUR AT COMO · CLUB STATS UNCHANGED'
];
D.ticker=lines;const ticker=$('tickerTrack');
if(ticker)ticker.innerHTML=[...lines,...lines].map(x=>'<span>'+esc(x)+'</span>').join('');
D.whispers=[
 ['AZZURRI REPLY','After a 0–0 in Ukraine, Italy beat Hungary 2–1 with goals from Pio Esposito and Moise Kean.'],
 ['FOUR POINTS BANKED','The opening two EURO qualifiers bring Italy a win, a draw, two goals for and one against.'],
 ['KEAN AFTER SEVEN','The World Cup record scorer opens his new qualifying campaign on the scoresheet against Hungary.'],
 ['PIO ON BOTH FRONTS','Esposito scored for Italy against Hungary and has two Napoli competitive club goals this season; the competitions remain separate.'],
 ['BACK TO NAPLES','Napoli host Fiorentina on 15 September after Beier’s four-goal performance at Como.']
];
const whisper=$('whisperList');if(whisper)whisper.innerHTML=D.whispers.map(x=>'<div class="whisper"><span>'+esc(x[0])+'</span><p>'+esc(x[1])+'</p></div>').join('');
const form=$('formLine');
if(form)form.innerHTML='<div><strong>ITALY · EURO QUALIFYING</strong><span>2 played · 1W 1D 0L · 4 points · 2 scored · 1 conceded</span></div><div><strong>NAPOLI · SERIE A</strong><span>2 played · 1W 1D 0L · 4 points · Next Fiorentina home 15 September</span></div>';
const status=document.querySelector('.header-status span:last-child');
if(status)status.textContent='ITALY · 2–1 HUNGARY · FOUR EURO QUALIFYING POINTS';
})();
