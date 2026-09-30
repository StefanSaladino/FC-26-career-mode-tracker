const D = window.NAPOLI_DATA;
const $ = (id) => document.getElementById(id);
const sections = [...document.querySelectorAll('.page-section')];

const escapeHTML = (value='') => String(value)
  .replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')
  .replaceAll('"','&quot;').replaceAll("'",'&#039;');

function goSection(id){
  const target = document.getElementById(id);
  if(!target) return;
  sections.forEach(s => s.classList.toggle('active', s === target));
  document.querySelectorAll('#nav button').forEach(b => b.classList.toggle('active', b.dataset.target === id));
  window.scrollTo({top:0, behavior:'smooth'});
}

sections.forEach((section, index) => {
  const button = document.createElement('button');
  button.textContent = section.dataset.section;
  button.dataset.target = section.id;
  button.className = index === 0 ? 'active' : '';
  button.addEventListener('click', () => goSection(section.id));
  $('nav').appendChild(button);
});

document.addEventListener('click', (event) => {
  const go = event.target.closest('[data-go]');
  if(go) goSection(go.dataset.go);
});

$('tickerTrack').innerHTML = [...D.ticker, ...D.ticker].map(item => `<span>${escapeHTML(item)}</span>`).join('');
$('fictionalNotice').textContent = D.meta.fictionalNotice;

const napoli = D.results.filter(r => r[0] === 'Napoli');
const serieA = napoli.filter(r => r[2] === 'Serie A');
const ucl = napoli.filter(r => r[2] === 'Champions League');
const record = rows => `${rows.filter(r=>r[5]==='W').length}-${rows.filter(r=>r[5]==='D').length}-${rows.filter(r=>r[5]==='L').length}`;
const points = rows => rows.reduce((sum,r)=>sum+(r[5]==='W'?3:r[5]==='D'?1:0),0);

function articleById(id){ return D.articles.find(a => a.id === id); }

function articleCard(article, variant='standard'){
  const media = article.image ? `<img src="${article.image}" alt="" loading="lazy">` : `<div class="article-no-image"><span>${escapeHTML(article.category)}</span></div>`;
  return `<article class="article-card ${variant}" data-article="${article.id}" tabindex="0" role="button" aria-label="Read ${escapeHTML(article.headline)}">
    <div class="article-card-media">${media}</div>
    <div class="article-card-copy">
      <div class="story-meta"><span>${escapeHTML(article.category)}</span><span>${escapeHTML(article.date)}</span></div>
      <h3>${escapeHTML(article.headline)}</h3>
      <p>${escapeHTML(article.dek)}</p>
      <span class="read-link">Read story →</span>
    </div>
  </article>`;
}

function openArticle(id){
  const article = articleById(id);
  if(!article) return;
  $('readerContent').innerHTML = `
    ${article.image ? `<img class="reader-hero" src="${article.image}" alt="">` : ''}
    <div class="reader-body">
      <div class="story-meta"><span>${escapeHTML(article.category)}</span><span>${escapeHTML(article.date)}</span></div>
      <div class="reader-label">${escapeHTML(article.label)}</div>
      <h2 id="readerHeadline">${escapeHTML(article.headline)}</h2>
      <p class="reader-dek">${escapeHTML(article.dek)}</p>
      ${article.body.map(p => `<p>${escapeHTML(p)}</p>`).join('')}
      <div class="reader-end">Season Room · Fictional in-universe coverage</div>
    </div>`;
  $('articleModal').classList.add('open');
  $('articleModal').setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
}

function closeArticle(){
  $('articleModal').classList.remove('open');
  $('articleModal').setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}

document.addEventListener('click', (event) => {
  const card = event.target.closest('[data-article]');
  if(card) openArticle(card.dataset.article);
  if(event.target.closest('[data-close-article]')) closeArticle();
});
document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape') closeArticle();
  const card = event.target.closest?.('[data-article]');
  if(card && (event.key === 'Enter' || event.key === ' ')){ event.preventDefault(); openArticle(card.dataset.article); }
});

const hero = articleById(D.hero.articleId) || D.articles[0];
$('heroStory').innerHTML = `
  <div class="hero-media"><img src="${hero.image}" alt=""></div>
  <div class="hero-copy" data-article="${hero.id}" tabindex="0" role="button">
    <div class="hero-strap">${escapeHTML(D.hero.strap)}</div>
    <div class="story-meta"><span>${escapeHTML(hero.category)}</span><span>${escapeHTML(hero.date)}</span></div>
    <h2>${escapeHTML(hero.headline)}</h2>
    <p>${escapeHTML(hero.dek)}</p>
    <span class="hero-read">Read the lead story →</span>
  </div>`;

const secondary = D.articles.filter(a => a.id !== hero.id);
$('topStories').innerHTML = secondary.slice(0,4).map((a,i) => `<button class="top-story" data-article="${a.id}"><span>${String(i+1).padStart(2,'0')}</span><div><small>${escapeHTML(a.category)}</small><strong>${escapeHTML(a.headline)}</strong></div></button>`).join('');

const latestNapoli = D.results.find(r => r[0] === 'Napoli' && r[1] === 'Pisa') || napoli[napoli.length-1];
$('latestResult').innerHTML = `<div class="latest-score"><span>NAP</span><strong>${latestNapoli[3]}–${latestNapoli[4]}</strong><span>${escapeHTML(latestNapoli[1].slice(0,3).toUpperCase())}</span></div><p>${escapeHTML(latestNapoli[6])}</p>`;

const nextClub = D.upcoming.filter(x => x[1] !== 'International').slice(0,2);
$('nextTwo').innerHTML = nextClub.map(x => `<div class="next-row"><strong>${escapeHTML(x[0])}</strong><span>${escapeHTML(x[1])} · ${escapeHTML(x[2])}</span></div>`).join('');
$('formLine').innerHTML = `<div><strong>${record(serieA)}</strong><span>Serie A · ${points(serieA)} pts</span></div><div><strong>${record(ucl)}</strong><span>Europe · ${points(ucl)} pts</span></div>`;

$('latestNews').innerHTML = secondary.slice(0,5).map((a,i) => articleCard(a, i === 0 ? 'wide' : 'compact')).join('');
$('whisperList').innerHTML = D.whispers.map(w => `<div class="whisper"><span>${escapeHTML(w[0])}</span><p>${escapeHTML(w[1])}</p></div>`).join('');

const articleCategories = ['All', ...new Set(D.articles.map(a => a.category))];
$('articleFilters').innerHTML = articleCategories.map((c,i)=>`<button class="filter-pill ${i===0?'active':''}" data-category="${escapeHTML(c)}">${escapeHTML(c)}</button>`).join('');
function renderNews(category='All'){
  const rows = category === 'All' ? D.articles : D.articles.filter(a => a.category === category);
  $('newsGrid').innerHTML = rows.map((a,i)=>articleCard(a, i===0 && category==='All' ? 'lead-grid' : 'standard')).join('');
}
renderNews();
$('articleFilters').addEventListener('click', e => {
  const btn = e.target.closest('[data-category]');
  if(!btn) return;
  document.querySelectorAll('.filter-pill').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderNews(btn.dataset.category);
});

const compSel = $('compFilter');
[...new Set(D.results.map(r=>r[2]))].forEach(comp => { const o=document.createElement('option'); o.textContent=comp; compSel.appendChild(o); });
function renderMatches(){
  const team = $('teamFilter').value;
  const comp = compSel.value;
  const rows = D.results.filter(r => (!team || r[0]===team) && (!comp || r[2]===comp));
  $('matchesList').innerHTML = rows.slice().reverse().map(r => `<div class="match-card"><div class="result-badge ${r[5]}">${r[5]}</div><div class="match-main"><span>${escapeHTML(r[2])}</span><strong>${escapeHTML(r[0])} <b>${r[3]}–${r[4]}</b> ${escapeHTML(r[1])}</strong><p>${escapeHTML(r[6])} · ${escapeHTML(r[7])}</p></div></div>`).join('');
}
$('teamFilter').addEventListener('change',renderMatches);
compSel.addEventListener('change',renderMatches);
renderMatches();
$('upcomingStrip').innerHTML = D.upcoming.map(x => `<div class="fixture"><span>${escapeHTML(x[1])}</span><strong>${escapeHTML(x[0])}</strong><small>${escapeHTML(x[2])}</small></div>`).join('');

$('formation').innerHTML = D.firstXI.map(x => `<div class="formation-row"><span>${escapeHTML(x[0])}</span><strong>${escapeHTML(x[1])}</strong><b>${x[2]}</b></div>`).join('');
$('squadGroups').innerHTML = Object.entries(D.squadPublic).map(([group,players]) => `<section class="squad-group"><div class="squad-group-head"><h3>${escapeHTML(group)}</h3><span>${players.length}</span></div>${players.map(p=>`<div class="player-row"><div><strong>${escapeHTML(p[0])}</strong><span>${escapeHTML(p[1])} · ${escapeHTML(p[3])}</span></div><b>${p[2]}</b></div>`).join('')}</section>`).join('');

function renderTable(el, headers, rows){
  el.innerHTML = `<thead><tr>${headers.map(h=>`<th>${escapeHTML(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${escapeHTML(c??'—')}</td>`).join('')}</tr>`).join('')}</tbody>`;
}
renderTable($('statsTable'), ['Player','Goals','Assists','Season note'], D.stats);
const top = [...D.stats].sort((a,b)=>b[1]-a[1])[0];
$('topScorer').innerHTML = `<span>Top scorer</span><strong>${escapeHTML(top[0])}</strong><b>${top[1]}</b><small>goals</small>`;
const maxGoals = Math.max(...D.stats.map(s=>s[1]),1);
$('goalBars').innerHTML = D.stats.filter(s=>s[1]>0).map(s=>`<div class="goal-row"><span>${escapeHTML(s[0])}</span><div class="bar-track"><div class="bar-fill" style="width:${(s[1]/maxGoals)*100}%"></div></div><strong>${s[1]}</strong></div>`).join('');
renderTable($('youthTable'), ['Player','Pos','Age','OVR','Potential','Plan','Note'], D.youth);

$('mediaWall').innerHTML = D.media.map(item => {
  if(item.type === 'image') return `<figure class="media-item"><img src="${item.src}" alt="${escapeHTML(item.title)}" loading="lazy"><figcaption><span>${escapeHTML(item.tag)}</span><strong>${escapeHTML(item.title)}</strong></figcaption></figure>`;
  return `<div class="media-item video-coming"><div class="play-orbit">▶</div><div><span>${escapeHTML(item.tag)}</span><strong>${escapeHTML(item.title)}</strong><p>${escapeHTML(item.note)}</p></div></div>`;
}).join('');
