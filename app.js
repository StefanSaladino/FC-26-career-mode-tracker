const D = window.NAPOLI_DATA;
const $ = (id) => document.getElementById(id);
const sections = [...document.querySelectorAll('.page-section')];
const nav = $('nav');
sections.forEach((s,i)=>{const b=document.createElement('button');b.textContent=s.dataset.section;b.className=i===0?'active':'';b.onclick=()=>{sections.forEach(x=>x.classList.remove('active'));document.querySelectorAll('#nav button').forEach(x=>x.classList.remove('active'));s.classList.add('active');b.classList.add('active');window.scrollTo({top:0,behavior:'smooth'});};nav.appendChild(b)});

const napoli = D.results.filter(r=>r[0]==='Napoli');
const serie = napoli.filter(r=>r[2]==='Serie A');
const ucl = napoli.filter(r=>r[2]==='Champions League');
const rec=(arr)=>`${arr.filter(r=>r[5]==='W').length}-${arr.filter(r=>r[5]==='D').length}-${arr.filter(r=>r[5]==='L').length}`;
const pts=(arr)=>arr.reduce((n,r)=>n+(r[5]==='W'?3:r[5]==='D'?1:0),0);
$('scoreStrip').innerHTML=[['Serie A',rec(serie)],['Serie A pts',pts(serie)],['UCL',rec(ucl)],['UCL pts',pts(ucl)]].map(x=>`<div class="score-item"><div class="score-label">${x[0]}</div><div class="score-value">${x[1]}</div></div>`).join('');
$('formation').innerHTML=D.firstXI.map(x=>`<div class="formation-row"><span>${x[0]}</span><strong>${x[1]} · ${x[2]}</strong></div>`).join('');
$('nextMatches').innerHTML=D.upcoming.map(x=>`<div class="next-match"><strong>${x[0]}</strong><div class="small">${x[1]} · ${x[2]}</div></div>`).join('');
$('budgetLine').textContent=D.meta.budgetNote;
$('recentResults').innerHTML=napoli.slice(-6).reverse().map(r=>`<div class="result-row"><strong>${r[5]} · Napoli ${r[3]}–${r[4]} ${r[1]}</strong><div class="small">${r[2]} · ${r[6]}</div></div>`).join('');
$('leaders').innerHTML=`<table class="leaders-table"><tbody>${D.stats.slice(0,6).map(s=>`<tr><td>${s[0]}</td><td>${s[1]} G</td><td>${s[2]} A</td></tr>`).join('')}</tbody></table>`;

function renderTable(el, headers, rows){el.innerHTML=`<thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c??'—'}</td>`).join('')}</tr>`).join('')}</tbody>`}
const squadHeaders=['Player','Pos','OVR','Tier','Contract / role','Italy','Usage','Status'];
renderTable($('squadTable'),squadHeaders,D.squad);
$('rotationLineup').innerHTML=D.rotation.map(x=>`<div class="rotation-chip"><strong>${x[1]}</strong> · ${x[0]} · ${x[2]}</div>`).join('');
const tierSel=$('squadTier');[...new Set(D.squad.map(x=>x[3]))].forEach(x=>{let o=document.createElement('option');o.textContent=x;tierSel.appendChild(o)});
function squadFilter(){const q=$('squadSearch').value.toLowerCase(),t=tierSel.value;renderTable($('squadTable'),squadHeaders,D.squad.filter(r=>(!q||`${r[0]} ${r[1]}`.toLowerCase().includes(q))&&(!t||r[3]===t)))}$('squadSearch').oninput=squadFilter;tierSel.onchange=squadFilter;

const compSel=$('compFilter');[...new Set(D.results.map(x=>x[2]))].forEach(x=>{let o=document.createElement('option');o.textContent=x;compSel.appendChild(o)});
function matches(){const team=$('teamFilter').value,comp=compSel.value;const rows=D.results.filter(r=>(!team||r[0]===team)&&(!comp||r[2]===comp));$('matchesList').innerHTML=rows.map(r=>`<div class="match-card"><div class="result-badge ${r[5]}">${r[5]}</div><div><strong>${r[0]} vs ${r[1]}</strong><div class="small">${r[2]} · ${r[6]} · ${r[7]}</div></div><div class="score">${r[3]}–${r[4]}</div></div>`).join('')}matches();$('teamFilter').onchange=matches;compSel.onchange=matches;

renderTable($('statsTable'),['Player','Goals','Assists','Notes'],D.stats);
const maxG=Math.max(...D.stats.map(x=>x[1]));$('goalBars').innerHTML=D.stats.filter(x=>x[1]>0).map(x=>`<div class="goal-row"><span>${x[0]}</span><div class="bar-track"><div class="bar-fill" style="width:${x[1]/maxG*100}%"></div></div><strong>${x[1]}</strong></div>`).join('');
$('eventTimeline').innerHTML=D.results.slice().reverse().map(r=>`<div class="timeline-item"><strong>${r[0]} ${r[3]}–${r[4]} ${r[1]}</strong><div class="small">${r[2]} · ${r[6]} · ${r[7]}</div></div>`).join('');
renderTable($('transferTable'),['Move','Player','Fee / Structure','Contract','Why it mattered'],D.transfers);
$('rejectedOffers').innerHTML=['Barcelona · $204M for Beier — rejected','Bayern · $133.6M for Pio — rejected','RB Leipzig · $43.5M for captain Di Lorenzo — rejected'].map(x=>`<div class="plain-row">${x}</div>`).join('');
$('closedTargets').innerHTML=['Moise Kean — Fiorentina blocked talks','Mateo Retegui — talks blocked','Nicolò Tresoldi — negotiations collapsed','Conrad Harder — club walked','Givairo Read — abandoned after Kayode','Jordan Teze — club pulled out after $19M opener'].map(x=>`<div class="plain-row">${x}</div>`).join('');
renderTable($('youthTable'),['Player','Pos','Age','OVR','Potential','Plan','Notes'],D.youth);
$('storyList').innerHTML=D.storylines.map(x=>`<div class="story"><strong>${x[0]}</strong><div>${x[1]}</div></div>`).join('');
$('newsList').innerHTML=D.news.map(x=>`<article class="news-article"><div class="news-meta">${x[1]} · Fictional</div><h3>${x[0]}</h3><p>${x[2]}</p></article>`).join('');

const NOTES_KEY='napoli-fc26-manager-notes';$('managerNotes').value=localStorage.getItem(NOTES_KEY)||'';$('managerNotes').oninput=e=>localStorage.setItem(NOTES_KEY,e.target.value);$('clearNotes').onclick=()=>{if(confirm('Clear local manager notes?')){$('managerNotes').value='';localStorage.removeItem(NOTES_KEY)}};
$('exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify({notes:$('managerNotes').value,exported:new Date().toISOString()},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='napoli-fc26-local-notes.json';a.click();URL.revokeObjectURL(a.href)};
$('importFile').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const j=JSON.parse(await f.text());$('managerNotes').value=j.notes||'';localStorage.setItem(NOTES_KEY,$('managerNotes').value)}catch{alert('Could not read that notes file.')}};
