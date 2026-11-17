/* Napoli Season Room — shared stats renderer for first paint and interactive tabs. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||{},$=id=>document.getElementById(id);
const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const current=D.statsCurrentSeason||'2030–31';
const asOf=D.statsRoomAsOf||'18 May 2031';
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
 if(table)table.innerHTML='<thead><tr>'+['Player','Goals','Assists','G+A',view==='career'?'Recorded seasons':'Season note'].map(h=>'<th>'+escape(h)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr><td>'+escape(r[0])+'</td><td>'+escape(number(r[1]))+'</td><td>'+escape(number(r[2]))+'</td><td>'+escape(r[1]==null||r[2]==null?'—':count(r[1])+count(r[2]))+'</td><td>'+escape(note(view,r))+'</td></tr>').join('')+'</tbody>';
 const ranked=[...rows].filter(r=>r[1]!=null).sort((a,b)=>count(b[1])-count(a[1])||count(b[2])-count(a[2]));
 const top=ranked[0];
 if($('topScorer'))$('topScorer').innerHTML=top?'<span>Top scorer · '+escape(view==='career'?'Napoli career':view)+'</span><strong>'+escape(top[0])+'</strong><b>'+escape(top[1])+'</b><small>goals</small>':'';
 const max=Math.max(1,...ranked.map(r=>count(r[1])));
 if($('goalBars'))$('goalBars').innerHTML=ranked.filter(r=>count(r[1])>0).map(r=>'<div class="goal-row"><span>'+escape(r[0])+'</span><div class="bar-track"><div class="bar-fill" style="width:'+(count(r[1])/max*100)+'%"></div></div><strong>'+escape(r[1])+'</strong></div>').join('');
 const intro=document.querySelector('#stats .section-head p');
 const verification=$('statsVerificationNotice');
 if(view===current){
  if(intro)intro.textContent='Napoli '+current+' competitive-club goals and assists, recorded through '+asOf+'. Italy totals are kept separate.';
  if(verification)verification.textContent='Season records through Napoli 4–0 Como on '+asOf+'. Historical seasons may be incomplete; figures include only recorded Napoli club competitions.';
 }else if(view==='career'){
  if(intro)intro.textContent='Napoli career totals from the recorded season archive. Historic records are incomplete, especially 2028–29.';
  if(verification)verification.textContent='Pio Esposito’s 2029–30 records are consolidated into one season entry (34 goals, 21 assists). Older records are incomplete, so career totals are recorded minimums, not independently verified full-career totals. Italy excluded.';
 }else if(view==='2029–30'){
  if(intro)intro.textContent='Napoli 2029–30 club statistics, including the Champions League final against Porto on 1 June 2030.';
  if(verification)verification.textContent='Pio Esposito: 34 goals, 21 assists for 2029–30. His March squad snapshot (28 goals, 20 assists) is superseded, not a second season row. Italy excluded.';
 }else{
  if(intro)intro.textContent='Napoli '+view+' recorded club statistics. Historical coverage may be incomplete.';
  if(verification)verification.textContent=view==='2028–29'?'This historical season is incomplete. Displayed numbers are recorded Napoli club contributions, not guaranteed complete totals. Italy excluded.':'Recorded Napoli club totals for '+view+'. Italy excluded.';
 }
 const keeper=$('keeperStats203031');
 if(keeper){
  keeper.hidden=view!==current;
  if(view===current)keeper.textContent='Goalkeepers — selected confirmed performances, not complete season totals: Epolo made six saves and conceded once against Milan (25 August 2030). Peacock started the Coppa Italia final against Bergamo (14 May 2031), conceding Fruk’s penalty; his earlier clean sheet against Milan was on 5 March. Other appearances and saves are not fully recorded.';
 }
 return {view,rows:rows.length};
}
window.SEASONROOM_STATS={render};
render(current);
})();
