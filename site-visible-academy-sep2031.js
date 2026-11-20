/* September 2031 Youth Squad snapshot: 14 screenshot-confirmed academy players.
   Keep academy distinct from senior squad and existing loan/young-player table.
   No nationality fields or labels displayed in the website UI. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const players=[{"name":"V. Gatti","position":"GK","age":17,"overall":61,"potentialMin":84,"potentialMax":90,"potentialRange":"84–90","plan":"Dynamic"},{"name":"N. Rinaldi","position":"CB","age":15,"overall":57,"potentialMin":75,"potentialMax":91,"potentialRange":"75–91","plan":"Dynamic"},{"name":"M. Ruggiero","position":"CB","age":14,"overall":53,"potentialMin":69,"potentialMax":87,"potentialRange":"69–87","plan":"Dynamic"},{"name":"V. Pellegrino","position":"RB","age":16,"overall":59,"potentialMin":75,"potentialMax":89,"potentialRange":"75–89","plan":"Dynamic"},{"name":"S. Badji","position":"CM","age":16,"overall":56,"potentialMin":79,"potentialMax":85,"potentialRange":"79–85","plan":"Dynamic"},{"name":"D. Castiello","position":"CM","age":16,"overall":58,"potentialMin":92,"potentialMax":94,"potentialRange":"92–94","plan":"Dynamic"},{"name":"P. Benedetti","position":"CAM","age":17,"overall":63,"potentialMin":72,"potentialMax":78,"potentialRange":"72–78","plan":"Dynamic"},{"name":"F. Cattaneo","position":"CAM","age":16,"overall":57,"potentialMin":79,"potentialMax":85,"potentialRange":"79–85","plan":"Dynamic"},{"name":"C. Baldé","position":"CAM","age":17,"overall":64,"potentialMin":87,"potentialMax":93,"potentialRange":"87–93","plan":"Dynamic"},{"name":"O. Lua","position":"CAM","age":16,"overall":60,"potentialMin":80,"potentialMax":86,"potentialRange":"80–86","plan":"Dynamic"},{"name":"D. Nicolino","position":"RM","age":16,"overall":58,"potentialMin":79,"potentialMax":85,"potentialRange":"79–85","plan":"Dynamic"},{"name":"D. Sagna","position":"RM","age":16,"overall":60,"potentialMin":88,"potentialMax":94,"potentialRange":"88–94","plan":"Dynamic"},{"name":"E. Kamara","position":"LW","age":15,"overall":55,"potentialMin":83,"potentialMax":89,"potentialRange":"83–89","plan":"Dynamic"},{"name":"M. Cissé","position":"LW","age":15,"overall":58,"potentialMin":84,"potentialMax":90,"potentialRange":"84–90","plan":"Dynamic"}];
D.academySnapshot2031={
 updated:'September 2031 · Youth Squad screenshots',
 playerCount:players.length,players,
 notes:'Latest 14 visible academy players. Dynamic development plans; projected potential ranges are estimates, not guaranteed outcomes. Players absent from the current screenshots are not automatically released, sold or promoted. Senior players and loanees stay separate.'
};
D.currentAcademySnapshot=D.academySnapshot2031;
D.academyPlayers=players.map(p=>[p.name,p.position,p.age,p.overall,p.potentialRange]);
D.youth=players.map(p=>[p.name,p.position,p.age,p.overall,p.potentialRange,p.plan,'—']);
const safe=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const academy=document.getElementById('academy'),oldSenior=document.getElementById('youthTable');
if(academy&&oldSenior){
 const wrap=oldSenior.closest('.table-wrap');
 const head=academy.querySelector('.section-head h2');
 if(head)head.textContent='Academy & Development';
 const intro=academy.querySelector('[data-youth-census]');
 if(intro)intro.textContent='September 2031 Youth Squad snapshot; senior development players and loanees remain separately listed below.';
 academy.querySelector('[data-academy-edition]')?.remove();
 academy.querySelector('[data-academy-snapshot-sep2031]')?.remove();
 const panel=document.createElement('div');panel.dataset.academySnapshotSep2031='true';panel.className='academy-snapshot-current';
 const title=document.createElement('h3');title.textContent='Youth Academy · September 2031';
 const note=document.createElement('p');note.textContent='14 academy players shown in the latest Youth Squad update. Potential figures are projected ranges, not guarantees. All players are on Dynamic plans.';
 const tableWrap=document.createElement('div');tableWrap.className='table-wrap';
 const table=document.createElement('table');table.id='academyYouth2031';
 table.innerHTML='<thead><tr>'+['Player','Pos','Age','OVR','Potential','Plan'].map(v=>'<th>'+safe(v)+'</th>').join('')+'</tr></thead><tbody>'+players.map(p=>'<tr>'+[p.name,p.position,p.age,p.overall,p.potentialRange,p.plan].map(v=>'<td>'+safe(v)+'</td>').join('')+'</tr>').join('')+'</tbody>';
 tableWrap.append(table);panel.append(title,note,tableWrap);
 if(wrap)wrap.before(panel);else academy.querySelector('.wrap')?.append(panel);
 if(wrap){
  const seniorTitle=document.createElement('h3');seniorTitle.dataset.seniorDevelopment='true';seniorTitle.textContent='Young First-Team Players & Loans';
  wrap.before(seniorTitle);
 }
}
})();
