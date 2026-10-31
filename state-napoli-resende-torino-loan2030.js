/* Summer 2030 manager-confirmed event after the squad-hub screenshot: L. Resende loaned to Torino. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const name='L. Resende', destination='Torino', position='CAM', age=19, overall=71;
if(!Array.isArray(D.loanedPlayers))D.loanedPlayers=[];
D.loanedPlayers=D.loanedPlayers.filter(row=>row[0]!==name);
D.loanedPlayers.push([name,position,age,overall]);
if(!D.squadPublic)D.squadPublic={};
for(const group of Object.values(D.squadPublic))if(Array.isArray(group)){
  for(let i=group.length-1;i>=0;i--)if(group[i][0]===name)group.splice(i,1);
}
D.loanDetails={...(D.loanDetails||{}),[name]:destination+' — loan (duration and buy option not confirmed)'};
D.loansSummer2030={...(D.loansSummer2030||{}),[name]:{
  destination,position,age,overall,status:'Loaned out',source:'Manager confirmed in chat · summer 2030',
  duration:null,buyOption:null
}};
if(D.squadSnapshot){
  D.squadSnapshot.updated='Summer 2030 · Resende loan to Torino (post-screenshot confirmation)';
  D.squadSnapshot.loanCount=D.loanedPlayers.length;
  D.squadSnapshot.availableCount=(D.squadSnapshot.playerCount??38)-D.loanedPlayers.length;
  D.squadSnapshot.notes='38 players in the earlier manager Squad Hub screenshots (25 non-loaned, 13 loaned at capture). Subsequent manager-confirmed event: L. Resende loaned to Torino; current totals 24 non-loaned, 14 loaned. Age/OVR unchanged. No departure for unpictured players inferred.';
  if(D.squadSnapshot.players?.[name]){
    D.squadSnapshot.players[name].onLoan=true;
    D.squadSnapshot.players[name].loanDestination=destination;
    D.squadSnapshot.players[name].source='Manager confirmation · summer 2030 Resende loan to Torino (rating from prior screenshot)';
  }
}
D.developmentNote='Summer 2030 current loan records: 14 on loan including L. Resende (19, CAM, 71 OVR) to Torino; no loan duration or buy option specified.';
const root=document.getElementById('squadGroups');
if(root){
 const groups=[...root.querySelectorAll('section.squad-group')];
 const findGroup=title=>groups.find(g=>g.querySelector('.squad-group-head h3')?.textContent.trim()===title);
 const midfield=findGroup('Midfielders'),onLoan=findGroup('Loaned Out');
 if(midfield){
  for(const row of [...midfield.querySelectorAll('.player-row')]){
   if(row.querySelector('strong')?.textContent.trim()===name)row.remove();
  }
  const count=midfield.querySelector('.squad-group-head span');
  if(count)count.textContent=String(D.squadPublic.Midfielders?.length??midfield.querySelectorAll('.player-row').length);
 }
 if(onLoan){
  for(const row of [...onLoan.querySelectorAll('.player-row')]){
   if(row.querySelector('strong')?.textContent.trim()===name)row.remove();
  }
  const line=document.createElement('div');line.className='player-row';
  const info=document.createElement('div'),who=document.createElement('strong'),meta=document.createElement('span'),rating=document.createElement('b');
  who.textContent=name;meta.textContent=position+' · Age '+age+' · '+destination;rating.textContent=String(overall);
  info.append(who,meta);line.append(info,rating);onLoan.append(line);
  const count=onLoan.querySelector('.squad-group-head span');if(count)count.textContent=String(D.loanedPlayers.length);
 }
 for(const intro of root.querySelectorAll('.development-roster-head')){
  const h=intro.querySelector('h2')?.textContent.trim(),p=intro.querySelector('p');
  if(h==='First-team squad ratings'&&p)p.textContent='24 players currently available · summer 2030 screenshot ratings, adjusted for the subsequently confirmed Resende loan to Torino.';
  if(h==='Players on Loan'&&p)p.textContent='14 on loan, including L. Resende to Torino (confirmed after the summer squad screenshot).';
 }
 const note=document.querySelector('#squad [data-squad-edition]');
 if(note)note.textContent='Summer 2030 verified squad ratings · 38 players · 24 available · 14 on loan, including Resende to Torino. Academy records tracked separately.';
}
})();
