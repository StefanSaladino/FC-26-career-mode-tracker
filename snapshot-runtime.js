/* Pre-rendered Napoli Season Room: interactive reader and lazy historical archive. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||{},manifest=window.NAPOLI_SNAPSHOT||{},get=id=>document.getElementById(id);
const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
let pending;
async function loadArchive(){
 if(manifest.archiveLoaded)return;
 if(!pending)pending=(async()=>{
  const response=await fetch(manifest.archiveUrl,{cache:'no-cache'});
  if(!response.ok)throw Error('News archive unavailable: '+response.status);
  const record=await response.json();
  if(!Array.isArray(record.articles)||record.articles.length!==manifest.totalArticles)throw Error('Archive article count mismatch');
  D.articles=record.articles;
  window.NAPOLI_COMMENT_OVERRIDE=record.comments?.commentOverride||{};
  window.NAPOLI_CURATED_ARCHIVE=record.comments?.curatedArchive||{};
  window.NAPOLI_LEGACY_AUTHORED_COMMENTS=record.comments?.legacyAuthoredComments||{};
  manifest.archiveLoaded=true;
 })().catch(err=>{pending=null;throw err});
 return pending;
}
const findArticle=id=>(D.articles||[]).find(a=>a.id===id);
function makeCards(rows,lead=false){
 return rows.map((a,i)=>'<article class="article-card '+(lead&&i===0?'lead-grid':'standard')+'" data-article="'+esc(a.id)+'" tabindex="0" role="button"><div class="article-card-media">'+(a.image?'<img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="lazy">':'')+'</div><div class="article-card-copy"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><h3>'+esc(a.headline)+'</h3><p>'+esc(a.dek)+'</p><span class="read-link">Read story →</span></div></article>').join('');
}
function renderNews(category='All'){
 const rows=category==='All'?D.articles:D.articles.filter(a=>a.category===category);
 if(get('newsGrid'))get('newsGrid').innerHTML=makeCards(rows,category==='All');
}
async function showArchive(){
 try{
  await loadArchive();
  const bar=get('articleFilters');
  if(bar&&!bar.children.length)bar.innerHTML=['All',...new Set(D.articles.map(a=>a.category))].map((c,i)=>'<button type="button" class="filter-pill '+(i?'':'active')+'" data-category="'+esc(c)+'">'+esc(c)+'</button>').join('');
  renderNews(bar?.querySelector('[data-category].active')?.dataset.category||'All');
 }catch(err){console.error(err);if(get('newsGrid'))get('newsGrid').textContent='The news archive is temporarily unavailable.'}
}
function go(id){
 if(!get(id))return;
 document.querySelectorAll('.page-section').forEach(s=>s.classList.toggle('active',s.id===id));
 document.querySelectorAll('.section-nav [data-target]').forEach(b=>b.classList.toggle('active',b.dataset.target===id));
 if(id==='news')showArchive();
 window.scrollTo({top:0,behavior:'instant'});
}
async function read(id){
 if(!findArticle(id))try{await loadArchive()}catch(err){console.error(err);return}
 const a=findArticle(id),r=get('readerContent'),modal=get('articleModal');
 if(!a||!r||!modal)return;
 r.dataset.articleId=a.id;r.dataset.articleHeadline=a.headline;
 const cover=a.image?'<div class="reader-media"><img src="'+esc(a.image)+'" alt="'+esc(a.headline)+'" loading="eager">'+(a.imageCredit?'<div class="photo-credit">'+esc(a.imageCredit)+'</div>':'')+'</div>':'';
 r.innerHTML=cover+'<div class="reader-body '+(a.longform?'reader-longform':'')+'"><div class="story-meta"><span>'+esc(a.category)+'</span><span>'+esc(a.date)+'</span></div><div class="reader-label">'+esc(a.label||'Season Room')+'</div><h2 id="readerHeadline">'+esc(a.headline)+'</h2><p class="reader-dek">'+esc(a.dek)+'</p>'+(a.byline?'<div class="reader-byline">'+esc(a.byline)+'</div>':'')+(a.body||[a.dek]).map((p,i)=>(a.chapterHeads?.[i]?'<h3 class="reader-chapter">'+esc(a.chapterHeads[i])+'</h3>':'')+'<p>'+esc(p)+'</p>').join('')+'<div class="reader-end">Season Room · Fictional in-universe coverage</div></div>';
 modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');
 document.dispatchEvent(new CustomEvent('seasonroom:article-opened',{detail:{id:a.id}}));
}
function close(){
 const m=get('articleModal');m?.classList.remove('open');m?.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');
}
function filterMatches(){
 const team=get('teamFilter')?.value||'',comp=get('compFilter')?.value||'';
 const rows=(D.results||[]).filter(r=>(!team||r[0]===team)&&(!comp||r[2]===comp));
 if(get('matchesList'))get('matchesList').innerHTML=rows.slice().reverse().map(r=>{
  const away=(r[0]==='Napoli'||r[0]==='Italy')&&/\bAway\b/i.test(String(r[6]));
  const left=away?r[1]:r[0],right=away?r[0]:r[1],score=away?r[4]+'–'+r[3]:r[3]+'–'+r[4];
  return '<div class="match-card"><div class="result-badge '+esc(r[5])+'">'+esc(r[5])+'</div><div class="match-main"><span>'+esc(r[2])+'</span><strong>'+esc(left)+' <b>'+esc(score)+'</b> '+esc(right)+'</strong><p>'+esc(r[6])+' · '+esc(r[7])+'</p></div></div>';
 }).join('');
}
function stats(view){
 const rows=view==='career'?D.careerStats:(D.statsBySeason?.[view]||[]);
 document.querySelectorAll('.stats-filters [data-stats-view]').forEach(b=>b.classList.toggle('active',b.dataset.statsView===view));
 const table=get('statsTable');
 if(table)table.innerHTML='<thead><tr>'+['Player','Goals','Assists','G+A',view==='career'?'Recorded seasons':'Season note'].map(h=>'<th>'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+[r[0],r[1],r[2],(Number(r[1])||0)+(Number(r[2])||0),r[3]].map(x=>'<td>'+esc(x)+'</td>').join('')+'</tr>').join('')+'</tbody>';
 const top=[...rows].sort((a,b)=>(Number(b[1])||0)-(Number(a[1])||0))[0];
 if(get('topScorer'))get('topScorer').innerHTML=top?'<span>Top scorer · '+esc(view)+'</span><strong>'+esc(top[0])+'</strong><b>'+esc(top[1])+'</b><small>goals</small>':'';
 const max=Math.max(1,...rows.map(r=>Number(r[1])||0));
 if(get('goalBars'))get('goalBars').innerHTML=rows.filter(r=>Number(r[1])>0).map(r=>'<div class="goal-row"><span>'+esc(r[0])+'</span><div class="bar-track"><div class="bar-fill" style="width:'+((Number(r[1])||0)/max*100)+'%"></div></div><strong>'+esc(r[1])+'</strong></div>').join('');
}
document.addEventListener('click',event=>{
 const closeBtn=event.target.closest?.('[data-close-article]');if(closeBtn){close();return}
 const target=event.target.closest?.('[data-target]');if(target){go(target.dataset.target);return}
 const quick=event.target.closest?.('[data-go]');if(quick){go(quick.dataset.go);return}
 const category=event.target.closest?.('[data-category]');
 if(category){get('articleFilters')?.querySelectorAll('[data-category]').forEach(b=>b.classList.toggle('active',b===category));renderNews(category.dataset.category);return}
 const tab=event.target.closest?.('[data-stats-view]');if(tab){stats(tab.dataset.statsView);return}
 const link=event.target.closest?.('[data-article]');if(link){event.preventDefault();read(link.dataset.article)}
});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'){close();return}
 const link=event.target.closest?.('[data-article]');
 if(link&&(event.key==='Enter'||event.key===' ')){event.preventDefault();read(link.dataset.article)}
});
get('teamFilter')?.addEventListener('change',filterMatches);
get('compFilter')?.addEventListener('change',filterMatches);
if(location.hash==='#news')go('news');
})();
