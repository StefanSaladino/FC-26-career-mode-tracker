/* Current academy snapshot, summer 2030. Manager screenshot-confirmed names, ages, ratings, POT ranges, plans. No nationality fields displayed. */
(()=>{
'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const players=[{"name":"V. Gatti","position":"GK","age":16,"overall":57,"potentialMin":75,"potentialMax":94,"potentialRange":"75–94","plan":"Dynamic"},{"name":"S. Longo","position":"GK","age":16,"overall":59,"potentialMin":74,"potentialMax":94,"potentialRange":"74–94","plan":"Dynamic"},{"name":"L. Riva","position":"GK","age":14,"overall":48,"potentialMin":66,"potentialMax":90,"potentialRange":"66–90","plan":"Dynamic"},{"name":"A. Benedetti","position":"CDM","age":17,"overall":60,"potentialMin":75,"potentialMax":81,"potentialRange":"75–81","plan":"Dynamic"},{"name":"J. Rowland","position":"CDM","age":16,"overall":57,"potentialMin":79,"potentialMax":85,"potentialRange":"79–85","plan":"Dynamic"},{"name":"M. Costa","position":"LM","age":15,"overall":57,"potentialMin":75,"potentialMax":81,"potentialRange":"75–81","plan":"Dynamic"},{"name":"F. Ferrari","position":"CM","age":17,"overall":61,"potentialMin":71,"potentialMax":75,"potentialRange":"71–75","plan":"Dynamic"},{"name":"D. Ali","position":"CM","age":14,"overall":53,"potentialMin":70,"potentialMax":94,"potentialRange":"70–94","plan":"Dynamic"},{"name":"C. Baldé","position":"CAM","age":16,"overall":62,"potentialMin":78,"potentialMax":94,"potentialRange":"78–94","plan":"Dynamic"},{"name":"M. Piras","position":"CAM","age":14,"overall":54,"potentialMin":76,"potentialMax":84,"potentialRange":"76–84","plan":"Dynamic"},{"name":"D. Nicolino","position":"RM","age":15,"overall":55,"potentialMin":79,"potentialMax":85,"potentialRange":"79–85","plan":"Dynamic"},{"name":"D. Segna","position":"RM","age":15,"overall":56,"potentialMin":76,"potentialMax":94,"potentialRange":"76–94","plan":"Dynamic"},{"name":"C. Bernardi","position":"LW","age":16,"overall":62,"potentialMin":72,"potentialMax":88,"potentialRange":"72–88","plan":"Dynamic"},{"name":"N. Conti","position":"RW","age":15,"overall":55,"potentialMin":72,"potentialMax":80,"potentialRange":"72–80","plan":"Dynamic"},{"name":"M. Dieme","position":"RW","age":17,"overall":64,"potentialMin":70,"potentialMax":94,"potentialRange":"70–94","plan":"Dynamic"},{"name":"T. Cissé","position":"RW","age":14,"overall":57,"potentialMin":67,"potentialMax":89,"potentialRange":"67–89","plan":"Dynamic"}];
D.academySnapshot2030={
 updated:'Summer 2030 · manager-confirmed Youth Squad screenshots',
 verified:true,
 playerCount:players.length,
 players,
 notes:'Exactly 16 players visible in the two screenshots. Potential values are game estimates, not guaranteed outcomes. Absent historical youth players are not automatically releases or sales.'
};
D.academyPlayers=players.map(p=>[p.name,p.position,p.age,p.overall,p.potentialRange]);
D.youth=players.map(p=>[p.name,p.position,p.age,p.overall,p.potentialRange,p.plan,'—']);
const escape=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const table=document.getElementById('youthTable');
if(table){
 const headings=['Player','Pos','Age','OVR','Potential','Plan','Note'];
 table.innerHTML='<thead><tr>'+headings.map(x=>'<th>'+escape(x)+'</th>').join('')+'</tr></thead><tbody>'+
 D.youth.map(row=>'<tr>'+row.map(value=>'<td>'+escape(value)+'</td>').join('')+'</tr>').join('')+'</tbody>';
 const section=table.closest('#academy');
 if(section){
  const heading=section.querySelector('.section-head');
  if(heading){
   let note=heading.querySelector('[data-academy-edition]');
   if(!note){note=document.createElement('p');note.dataset.academyEdition='summer2030';note.style.cssText='font-size:.85rem;opacity:.8;margin-top:8px;max-width:720px';heading.appendChild(note);}
   note.textContent='Summer 2030 · 16 confirmed youth players. Overalls and potential ranges are from the manager’s latest academy screenshots; projected ranges are not guaranteed ratings.';
  }
 }
}
const root=document.getElementById('squadGroups');
if(root){
 for(const section of [...root.querySelectorAll('section.squad-group')]){
  if(section.querySelector('.squad-group-head h3')?.textContent.trim()==='Academy')section.remove();
 }
 for(const heading of [...root.querySelectorAll('.development-roster-head')]){
  if(heading.querySelector('h2')?.textContent.trim()==='Youth Academy')heading.remove();
 }
 const intro=document.createElement('div');
 intro.className='development-roster-head';
 intro.innerHTML='<div class="section-kicker">Summer 2030 · Confirmed snapshot</div><h2>Youth Academy</h2><p>16 active academy players; all shown on Dynamic development plans. Former graduates and loanees remain listed in their own sections.</p>';
 root.appendChild(intro);
 const panel=document.createElement('section');panel.className='squad-group development-group';panel.dataset.academyEdition='summer2030';
 const header=document.createElement('div');header.className='squad-group-head';
 const h=document.createElement('h3');h.textContent='Academy';
 const count=document.createElement('span');count.textContent=String(players.length);
 header.append(h,count);panel.appendChild(header);
 for(const player of players){
  const row=document.createElement('div');row.className='player-row';
  const detail=document.createElement('div');const name=document.createElement('strong');name.textContent=player.name;
  const meta=document.createElement('span');meta.textContent=player.position+' · Age '+player.age+' · POT '+player.potentialRange+' · '+player.plan;
  detail.append(name,meta);
  const overall=document.createElement('b');overall.textContent=String(player.overall);
  row.append(detail,overall);panel.appendChild(row);
 }
 root.appendChild(panel);
}
})();
