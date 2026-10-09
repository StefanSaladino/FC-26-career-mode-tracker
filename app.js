const raw = window.NAPOLI_DATA || {};
const D = {
  meta: raw.meta || {}, ticker: raw.ticker || [], hero: raw.hero || {}, articles: raw.articles || [],
  results: raw.results || [], upcoming: raw.upcoming || [], stats: raw.stats || [], youth: raw.youth || [],
  whispers: raw.whispers || [], media: raw.media || [], firstXI: raw.firstXI || [], squadPublic: raw.squadPublic || {},
  loanedPlayers: raw.loanedPlayers || [], academyPlayers: raw.academyPlayers || [], latestResult: raw.latestResult || null,
  statsBySeason: raw.statsBySeason || {}, statsSeasonOrder: raw.statsSeasonOrder || [], statsCurrentSeason: raw.statsCurrentSeason || '', careerStats: raw.careerStats || [], statsUnavailableSeasons: raw.statsUnavailableSeasons || []
};

if (!D.articles.length && Array.isArray(raw.news)) {
  D.articles = raw.news.map((n,i)=>({id:`legacy-${i}`,category:'News',label:'Season Room',date:'2027–28',headline:n[0],dek:n[2],image:null,body:[n[2]]}));
}

const $ = id => document.getElementById(id);
const sections = [...document.querySelectorAll('.page-section')];
const escapeHTML = (value='') => String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;').replace(/'/g,'&#039;');
const safePos = value => /^\d{1,3}%\s+\d{1,3}%$/.test(String(value||'')) ? String(value) : '50% 50%';
const safeFit = value => ['cover','contain'].includes(value) ? value : 'cover';

function img(src,alt='',eager=false,cls='',objectPosition='50% 50%',objectFit='cover'){
  if(!src)return '';
  const style=`object-position:${safePos(objectPosition)};object-fit:${safeFit(objectFit)};`;
  return `<img${cls?` class="${cls}"`:''} src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" style="${style}" ${eager?'fetchpriority="high"':'loading="lazy"'} referrerpolicy="no-referrer" onerror="this.remove()">`;
}
function credit(item){
  if(!item?.imageCredit)return '';
  const source=item.imageSource?` · <a href="${escapeHTML(item.imageSource)}" target="_blank" rel="noopener noreferrer">source</a>`:'';
  return `<div class="photo-credit">${escapeHTML(item.imageCredit)}${source}</div>`;
}

function goSection(id){
  const target=document.getElementById(id); if(!target)return;
  sections.forEach(s=>s.classList.toggle('active',s===target));
  document.querySelectorAll('#nav button').forEach(b=>b.classList.toggle('active',b.dataset.target===id));
  window.scrollTo({top:0,behavior:'smooth'});
}

const nav=$('nav');
if(nav){
  if(!nav.querySelector('button')) sections.forEach((section,index)=>{const b=document.createElement('button');b.textContent=section.dataset.section;b.dataset.target=section.id;b.className=index===0?'active':'';nav.appendChild(b);});
  nav.addEventListener('click',e=>{const b=e.target.closest('button[data-target]');if(b)goSection(b.dataset.target);});
}
document.addEventListener('click',e=>{const go=e.target.closest?.('[data-go]');if(go)goSection(go.dataset.go);});

if($('tickerTrack') && D.ticker.length) $('tickerTrack').innerHTML=[...D.ticker,...D.ticker].map(x=>`<span>${escapeHTML(x)}</span>`).join('');
if($('fictionalNotice') && D.meta.fictionalNotice) $('fictionalNotice').textContent=D.meta.fictionalNotice;

const napoli=D.results.filter(r=>r[0]==='Napoli');
const serieA=napoli.filter(r=>r[2]==='Serie A');
const ucl=napoli.filter(r=>r[2]==='Champions League');
const record=rows=>`${rows.filter(r=>r[5]==='W').length}-${rows.filter(r=>r[5]==='D').length}-${rows.filter(r=>r[5]==='L').length}`;
const points=rows=>rows.reduce((sum,r)=>sum+(r[5]==='W'?3:r[5]==='D'?1:0),0);
const articleById=id=>D.articles.find(a=>a.id===id);

function articleCard(a,variant='standard'){
  const media=a.image?img(a.image,a.headline,false,'',a.objectPosition,a.objectFit):`<div class="article-no-image"><span>${escapeHTML(a.category)}</span></div>`;
  return `<article class="article-card ${variant}" data-article="${escapeHTML(a.id)}" tabindex="0" role="button"><div class="article-card-media">${media}</div><div class="article-card-copy"><div class="story-meta"><span>${escapeHTML(a.category)}</span><span>${escapeHTML(a.date)}</span></div><h3>${escapeHTML(a.headline)}</h3><p>${escapeHTML(a.dek)}</p><span class="read-link">Read story →</span></div></article>`;
}
function openArticle(id){
  const a=articleById(id); if(!a||!$('readerContent')||!$('articleModal'))return;
  const reader=$('readerContent');
  reader.dataset.articleId=a.id;
  reader.dataset.articleHeadline=a.headline;
  reader.innerHTML=`${a.image?`<div class="reader-media">${img(a.image,a.headline,true,'reader-hero',a.objectPosition,a.objectFit)}${credit(a)}</div>`:''}<div class="reader-body ${a.longform?"reader-longform":""}"><div class="story-meta"><span>${escapeHTML(a.category)}</span><span>${escapeHTML(a.date)}</span></div><div class="reader-label">${escapeHTML(a.label||'Season Room')}</div><h2 id="readerHeadline">${escapeHTML(a.headline)}</h2><p class="reader-dek">${escapeHTML(a.dek)}</p>${a.byline?`<div class="reader-byline">${escapeHTML(a.byline)}</div>`:""}${(a.body||[a.dek]).map((p,i)=>`${a.chapterHeads?.[i]?`<h3 class="reader-chapter">${escapeHTML(a.chapterHeads[i])}</h3>`:""}<p>${escapeHTML(p)}</p>${a.pullQuote&&a.pullQuoteAfter===i?`<blockquote class="reader-pullquote">${escapeHTML(a.pullQuote)}</blockquote>`:""}`).join("")}<div class="reader-end">Season Room · Fictional in-universe coverage</div></div>`;
  $('articleModal').classList.add('open'); $('articleModal').setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
  document.dispatchEvent(new CustomEvent('seasonroom:article-opened',{detail:{id:a.id}}));
}
function closeArticle(){if(!$('articleModal'))return;$('articleModal').classList.remove('open');$('articleModal').setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}
document.addEventListener('click',e=>{const c=e.target.closest?.('[data-article]');if(c)openArticle(c.dataset.article);if(e.target.closest?.('[data-close-article]'))closeArticle();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeArticle();const c=e.target.closest?.('[data-article]');if(c&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openArticle(c.dataset.article);}});

if(D.articles.length){
  const hero=articleById(D.hero.articleId)||D.articles[0];
  if($('heroStory')) $('heroStory').innerHTML=`<div class="hero-media">${hero.image?img(hero.image,hero.headline,true,'',hero.objectPosition,hero.objectFit):''}</div><div class="hero-copy" data-article="${escapeHTML(hero.id)}" tabindex="0" role="button"><div class="hero-strap">${escapeHTML(D.hero.strap||'SEASON ROOM')}</div><div class="story-meta"><span>${escapeHTML(hero.category)}</span><span>${escapeHTML(hero.date)}</span></div><h2>${escapeHTML(hero.headline)}</h2><p>${escapeHTML(hero.dek)}</p><span class="hero-read">Read the lead story →</span>${credit(hero)}</div>`;
  const secondary=D.articles.filter(a=>a.id!==hero.id);
  if($('topStories')) $('topStories').innerHTML=secondary.slice(0,4).map((a,i)=>`<button class="top-story" data-article="${escapeHTML(a.id)}"><span>${String(i+1).padStart(2,'0')}</span><div><small>${escapeHTML(a.category)}</small><strong>${escapeHTML(a.headline)}</strong></div></button>`).join('');
  if($('latestNews')) $('latestNews').innerHTML=secondary.slice(0,5).map((a,i)=>articleCard(a,i===0?'wide':'compact')).join('');
  if($('articleFilters')){
    const cats=['All',...new Set(D.articles.map(a=>a.category))];
    $('articleFilters').innerHTML=cats.map((c,i)=>`<button class="filter-pill ${i===0?'active':''}" data-category="${escapeHTML(c)}">${escapeHTML(c)}</button>`).join('');
    const renderNews=(category='All')=>{if(!$('newsGrid'))return;const rows=category==='All'?D.articles:D.articles.filter(a=>a.category===category);$('newsGrid').innerHTML=rows.map((a,i)=>articleCard(a,i===0&&category==='All'?'lead-grid':'standard')).join('');};
    renderNews();
    $('articleFilters').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;document.querySelectorAll('.filter-pill').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderNews(b.dataset.category);});
  }
}

const latestNapoli=napoli[napoli.length-1];
if($('latestResult')) {
  if(Array.isArray(D.latestResult) && D.latestResult.length>=4) {
    $('latestResult').innerHTML=`<div class="latest-score"><span>${escapeHTML(String(D.latestResult[0]).slice(0,3).toUpperCase())}</span><strong>${escapeHTML(D.latestResult[1])}</strong><span>${escapeHTML(String(D.latestResult[2]).slice(0,3).toUpperCase())}</span></div><p>${escapeHTML(D.latestResult[3])}</p>`;
  } else if(latestNapoli) {
    $('latestResult').innerHTML=`<div class="latest-score"><span>NAP</span><strong>${latestNapoli[3]}–${latestNapoli[4]}</strong><span>${escapeHTML(String(latestNapoli[1]).slice(0,3).toUpperCase())}</span></div><p>${escapeHTML(latestNapoli[6])}</p>`;
  }
}
const nextClub=D.upcoming.filter(x=>x[1]!=='International').slice(0,2);
if($('nextTwo')&&nextClub.length) $('nextTwo').innerHTML=nextClub.map(x=>`<div class="next-row"><strong>${escapeHTML(x[0])}</strong><span>${escapeHTML(x[1])} · ${escapeHTML(x[2])}</span></div>`).join('');
if($('formLine')&&(serieA.length||ucl.length)) $('formLine').innerHTML=`<div><strong>${record(serieA)}</strong><span>Serie A · ${points(serieA)} pts</span></div><div><strong>${record(ucl)}</strong><span>Europe · ${points(ucl)} pts</span></div>`;
if($('whisperList')&&D.whispers.length) $('whisperList').innerHTML=D.whispers.map(w=>`<div class="whisper"><span>${escapeHTML(w[0])}</span><p>${escapeHTML(w[1])}</p></div>`).join('');

const compSel=$('compFilter');
if(compSel){[...new Set(D.results.map(r=>r[2]))].forEach(c=>{const o=document.createElement('option');o.textContent=c;compSel.appendChild(o);});}
function renderMatches(){if(!$('matchesList'))return;const team=$('teamFilter')?.value||'',comp=compSel?.value||'';const rows=D.results.filter(r=>(!team||r[0]===team)&&(!comp||r[2]===comp));$('matchesList').innerHTML=rows.slice().reverse().map(r=>{const away2028=r[0]==='Napoli'&&r[2]==='Serie A'&&/2028 · Away/.test(String(r[6]));const left=away2028?r[1]:r[0],right=away2028?r[0]:r[1],score=away2028?`${r[4]}–${r[3]}`:`${r[3]}–${r[4]}`;return `<div class="match-card"><div class="result-badge ${r[5]}">${r[5]}</div><div class="match-main"><span>${escapeHTML(r[2])}</span><strong>${escapeHTML(left)} <b>${score}</b> ${escapeHTML(right)}</strong><p>${escapeHTML(r[6])} · ${escapeHTML(r[7])}</p></div></div>`}).join('');}
$('teamFilter')?.addEventListener('change',renderMatches);compSel?.addEventListener('change',renderMatches);renderMatches();
if($('upcomingStrip')) $('upcomingStrip').innerHTML=D.upcoming.map(x=>`<div class="fixture"><span>${escapeHTML(x[1])}</span><strong>${escapeHTML(x[0])}</strong><small>${escapeHTML(x[2])}</small></div>`).join('');

if($('formation')&&D.firstXI.length) $('formation').innerHTML=D.firstXI.map(x=>`<div class="formation-row"><span>${escapeHTML(x[0])}</span><strong>${escapeHTML(x[1])}</strong><b>${x[2]}</b></div>`).join('');
if($('squadGroups')){
  const senior=Object.entries(D.squadPublic).map(([g,players])=>`<section class="squad-group"><div class="squad-group-head"><h3>${escapeHTML(g)}</h3><span>${players.length}</span></div>${players.map(p=>`<div class="player-row"><div><strong>${escapeHTML(p[0])}</strong><span>${escapeHTML(p[1])} · ${escapeHTML(p[3])}</span></div><b>${p[2]}</b></div>`).join('')}</section>`).join('');
  const loans=D.loanedPlayers.length?`<div class="development-roster-head"><div class="section-kicker">Development</div><h2>Players on Loan</h2><p>Registered separately from the Napoli first-team squad.</p></div><section class="squad-group development-group"><div class="squad-group-head"><h3>Loaned Out</h3><span>${D.loanedPlayers.length}</span></div>${D.loanedPlayers.map(p=>`<div class="player-row"><div><strong>${escapeHTML(p[0])}</strong><span>${escapeHTML(p[1])} · Age ${p[2]}</span></div><b>${p[3]}</b></div>`).join('')}</section>`:'';
  const academy=D.academyPlayers.length?`<div class="development-roster-head"><div class="section-kicker">Future</div><h2>Youth Academy</h2><p>Academy players remain outside the senior roster.</p></div><section class="squad-group development-group"><div class="squad-group-head"><h3>Academy</h3><span>${D.academyPlayers.length}</span></div>${D.academyPlayers.map(p=>`<div class="player-row"><div><strong>${escapeHTML(p[0])}</strong><span>${escapeHTML(p[1])} · Age ${p[2]} · POT ${escapeHTML(p[4])}</span></div><b>${p[3]}</b></div>`).join('')}</section>`:'';
  $('squadGroups').innerHTML=senior+loans+academy;
}

function renderTable(el,headers,rows){if(!el)return;el.innerHTML=`<thead><tr>${headers.map(h=>`<th>${escapeHTML(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${escapeHTML(c??'—')}</td>`).join('')}</tr>`).join('')}</tbody>`;}
const statsTable=$('statsTable');
const statsHead=statsTable?.closest('.stats-feature')?.previousElementSibling;
if(statsTable&&Object.keys(D.statsBySeason).length){
 const controls=document.createElement('div');controls.className='article-filters stats-filters';
 const available=D.statsSeasonOrder.filter(s=>D.statsBySeason[s]);
 controls.innerHTML=[...available.map((s,i)=>`<button class="filter-pill ${i===0?'active':''}" data-stats-view="${escapeHTML(s)}">${escapeHTML(s)}</button>`),`<button class="filter-pill" data-stats-view="career">Napoli Career</button>`].join('');
 statsTable.closest('.stats-feature')?.insertAdjacentElement('beforebegin',controls);
 const renderStatsView=view=>{
   controls.querySelectorAll('.filter-pill').forEach(b=>b.classList.toggle('active',b.dataset.statsView===view));
   const rows=view==='career'?D.careerStats:(D.statsBySeason[view]||[]);
   const display=rows.map(r=>view==='career'?[r[0],r[1],r[2],(Number(r[1])||0)+(Number(r[2])||0),r[3]]:[r[0],r[1],r[2],(Number(r[1])||0)+(Number(r[2])||0),r[3]]);
   renderTable(statsTable,['Player','Goals','Assists','G+A',view==='career'?'Recorded seasons':'Season note'],display);
   if($('topScorer')){
     const top=[...rows].sort((a,b)=>(b[1]-a[1])||(b[2]-a[2]))[0];
     $('topScorer').innerHTML=top?`<span>${view==='career'?'Recorded Napoli leader':'Top scorer · '+escapeHTML(view)}</span><strong>${escapeHTML(top[0])}</strong><b>${top[1]}</b><small>goals</small>`:'<span>No appearances recorded yet</span>';
   }
   if($('goalBars')){const max=Math.max(...rows.map(s=>Number(s[1])||0),1);$('goalBars').innerHTML=rows.filter(s=>(Number(s[1])||0)>0).map(s=>`<div class="goal-row"><span>${escapeHTML(s[0])}</span><div class="bar-track"><div class="bar-fill" style="width:${(Number(s[1])||0)/max*100}%"></div></div><strong>${s[1]}</strong></div>`).join('');}
 };
 controls.addEventListener('click',e=>{const b=e.target.closest('[data-stats-view]');if(b)renderStatsView(b.dataset.statsView);});
 renderStatsView(available[0]||'career');
}else{
 renderTable(statsTable,['Player','Goals','Assists','Season note'],D.stats);
}
renderTable($('youthTable'),['Player','Pos','Age','OVR','Potential','Plan','Note'],D.youth);
const mediaArticleMap = {
  'Bayern: The First Real Test': 'bayern-test',
  'Pio Takes the Shirt': 'pio-shirt',
  "Chiesa 80'": 'chiesa-pisa',
  'Three Calls, Three Nos': 'three-nos',
  'Paz: The Heir Is Already Playing': 'paz-kdb',
  'Peacock: The Development Gamble': 'peacock-problem',
  'Club and Country': 'italy-pipeline',
  'The Captaincy Transition': 'captain-future',
  'The Insurance Policy': 'stach-insurance'
};
if($('mediaWall')&&D.media.length) $('mediaWall').innerHTML=D.media.map(item=>{
  if(item.type==='image'){
    const source=item.source?` · <a href="${escapeHTML(item.source)}" target="_blank" rel="noopener noreferrer">source</a>`:'';
    const itemCredit=item.credit?`<div class="photo-credit">${escapeHTML(item.credit)}${source}</div>`:'';
    const articleId=item.articleId||mediaArticleMap[item.title];
    const attrs=articleId?` data-article="${escapeHTML(articleId)}" tabindex="0" role="button"`:'';
    return `<article class="media-item"${attrs}>${img(item.src,item.title,false,'',item.objectPosition,item.objectFit)}<div><span>${escapeHTML(item.tag)}</span><h3>${escapeHTML(item.title)}</h3>${itemCredit}</div></article>`;
  }
  if(item.type==='video') return `<article class="media-item video"><video controls preload="metadata" playsinline src="${escapeHTML(item.src)}"></video><div><span>${escapeHTML(item.tag)}</span><h3>${escapeHTML(item.title)}</h3></div></article>`;
  return '';
}).join('');
