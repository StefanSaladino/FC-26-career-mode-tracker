/* Napoli Season Room — shared stats renderer for first paint and interactive tabs. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||{},$=id=>document.getElementById(id);
const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const current=D.statsCurrentSeason||'2031–32';
const asOf=D.statsRoomAsOf||'Summer 2031';
const number=value=>value==null?'—':String(value);
const count=value=>Number.isFinite(Number(value))?Number(value):0;
function note(view,row){
 if(view==='career')return String(row[3]||'Recorded club seasons');
 let s=String(row[3]||'');
 if(view===current)s=s.split(/\s+\|\s+/).pop()||s;
 s=s.replace(/FC ?26 canonical final total/gi,'Final season record')
    .replace(/Official EA FC 26 Squad Hub/gi,'Squad record')
    .replace(/Manager-confirmed/gi,'Recorded')
    .replace(/\bcareer[- ]mode\b|\bin[- ]game\b|\bgameplay\b/gi,'')
    .replace(/\s{2,}/g,' ').trim();
 if(s.length>230){const short=s.slice(0,227),end=short.lastIndexOf(' ');s=short.slice(0,end>170?end:227)+'…';}
 return s;
}
function render(requested){
 const view=requested==='career'||Object.prototype.hasOwnProperty.call(D.statsBySeason||{},requested)?requested:current;
 const rows=(view==='career'?D.careerStats:D.statsBySeason?.[view])||[];
 document.querySelectorAll('.stats-filters [data-stats-view]').forEach(b=>b.classList.toggle('active',b.dataset.statsView===view));
 const table=$('statsTable');
 if(table)table.innerHTML='<thead><tr>'+['Player','Goals','Assists','G+A',view==='career'?'Recorded seasons':'Season note'].map(h=>'<th>'+escape(h)+'</th>').join('')+'</tr></thead><tbody>'+(rows.length?rows.map(r=>'<tr><td>'+escape(r[0])+'</td><td>'+escape(number(r[1]))+'</td><td>'+escape(number(r[2]))+'</td><td>'+escape(r[1]==null||r[2]==null?'—':count(r[1])+count(r[2]))+'</td><td>'+escape(note(view,r))+'</td></tr>').join(''):'<tr><td colspan="5">No Napoli competitive contributions recorded for this season yet.</td></tr>')+'</tbody>';
 const ranked=[...rows].filter(r=>r[1]!=null).sort((a,b)=>count(b[1])-count(a[1])||count(b[2])-count(a[2]));
 const top=ranked[0];
 if($('topScorer'))$('topScorer').innerHTML=top?'<span>Top scorer · '+escape(view==='career'?'Napoli career':view)+'</span><strong>'+escape(top[0])+'</strong><b>'+escape(top[1])+'</b><small>goals</small>':'<span>'+escape(view)+'</span><strong>Season not started</strong><small>Statistics will appear after the opening fixture.</small>';
 const max=Math.max(1,...ranked.map(r=>count(r[1])));
 if($('goalBars'))$('goalBars').innerHTML=ranked.filter(r=>count(r[1])>0).map(r=>'<div class="goal-row"><span>'+escape(r[0])+'</span><div class="bar-track"><div class="bar-fill" style="width:'+(count(r[1])/max*100)+'%"></div></div><strong>'+escape(r[1])+'</strong></div>').join('');
 const intro=document.querySelector('#stats .section-head p');
 const verification=$('statsVerificationNotice');
 if(view===current){
  if(intro)intro.textContent=rows.length?'Napoli '+current+' · Supercoppa Italiana champions. Pio Esposito scores the opening club goal; Estêvão provides the assist.':'Napoli '+current+' · new campaign. Competitive club statistics will begin with the first confirmed fixture.';
  if(verification)verification.textContent=rows.length?'2031–32: Napoli 1–1 Inter, won 4–1 on penalties in the Supercoppa final. Only Pio’s 39′ goal and Estêvão’s official assist count toward competitive club goals and assists; penalty-shootout goals do not. Italy excluded.':'No 2031–32 competitive club match has been recorded. The completed 2030–31 treble-winning season remains available in its own tab.';
 }else if(view==='career'){
  if(intro)intro.textContent='Napoli career totals from the recorded season archive. Historic records are incomplete, especially 2028–29.';
  if(verification)verification.textContent='Pio Esposito’s 2029–30 records are consolidated into one season entry (34 goals, 21 assists). Older records are incomplete, so career totals are recorded minimums, not independently verified full-career totals. Italy excluded.';
 }else if(view==='2030–31'){
  if(intro)intro.textContent='Napoli 2030–31 · historic treble-winning club season through the PSG final on 31 May 2031.';
  if(verification)verification.textContent='2030–31 completed: Napoli 2–0 PSG in Munich, 31 May 2031. Season records remain separate from 2031–32; Italy excluded.';
 }else if(view==='2029–30'){
  if(intro)intro.textContent='Napoli 2029–30 club statistics, including the Champions League final against Porto on 1 June 2030.';
  if(verification)verification.textContent='Pio Esposito: 34 goals, 21 assists for 2029–30. His March squad snapshot (28 goals, 20 assists) is superseded, not a second season row. Italy excluded.';
 }else{
  if(intro)intro.textContent='Napoli '+view+' recorded club statistics. Historical coverage may be incomplete.';
  if(verification)verification.textContent=view==='2028–29'?'This historical season is incomplete. Displayed numbers are recorded Napoli club contributions, not guaranteed complete totals. Italy excluded.':'Recorded Napoli club totals for '+view+'. Italy excluded.';
 }
 const keeper=$('keeperStats203031');
 if(keeper){
  keeper.hidden=view!=='2030–31';
  if(view==='2030–31')keeper.textContent='Goalkeepers — selected confirmed performances, NOT complete season totals: Epolo made an enormous first-half save and kept a clean sheet in Napoli 2–0 PSG (31 May 2031 Champions League final); he also made six saves and conceded once against Milan on 25 August 2030. Peacock started the Coppa Italia final against Bergamo (14 May 2031), conceding a penalty; his earlier confirmed clean sheet against Milan was on 5 March. Total appearances and saves for the season are incomplete.';
 }
 return {view,rows:rows.length};
}
window.SEASONROOM_STATS={render};
render(current);
})();
