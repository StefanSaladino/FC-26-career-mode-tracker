/* Summer 2030 transfers confirmed by Mister after UEFA Super Cup: Meret sale and Epolo signing. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const name='Epolo',age=25,overall=85,potential=89,position='GK';
const oldName='Alex Meret';
D.playerAges={...(D.playerAges||{})};
D.playerAges[name]=age;
delete D.playerAges[oldName];
if(!D.squadPublic)D.squadPublic={};
if(!Array.isArray(D.squadPublic.Goalkeepers))D.squadPublic.Goalkeepers=[];
D.squadPublic.Goalkeepers=D.squadPublic.Goalkeepers.filter(p=>p[0]!==oldName&&p[0]!==name);
D.squadPublic.Goalkeepers.unshift([name,position,overall,'New signing · POT 89']);
D.summer2030Transfers={...(D.summer2030Transfers||{}),
 meret:{type:'sale',name:oldName,age:33,overallAtSale:86,feeMillions:44.9,currency:'USD',destination:'Bournemouth',source:'Manager-confirmed sale following Bournemouth bid'},
 epolo:{type:'purchase',name,age,position,overall,potential,feeMillions:null,feeUnconfirmed:true,source:'Manager-confirmed summer 2030 signing'}
};
D.squadSnapshot=D.squadSnapshot||{};
const ps=D.squadSnapshot.players||(D.squadSnapshot.players={});
const meret=ps[oldName];
if(meret){
 D.squadSnapshot.departures={...(D.squadSnapshot.departures||{}),[oldName]:{...meret,departure:'Sold to Bournemouth',feeMillions:44.9}};
 delete ps[oldName];
}
ps[name]={age,overall,position,onLoan:false,potential,verified:true,source:'Manager confirmation · summer 2030 signing; fee not supplied'};
const count=Object.values(ps);
D.squadSnapshot.playerCount=count.length;
D.squadSnapshot.loanCount=count.filter(p=>p.onLoan).length;
D.squadSnapshot.availableCount=count.filter(p=>!p.onLoan).length;
D.squadSnapshot.updated='Summer 2030 · Post-Super Cup · Meret sold; Epolo signed';
D.squadSnapshot.notes='Current squad after Resende loan to Torino, Meret sold to Bournemouth for $44.9m and goalkeeper Epolo signed (25 years, 85 OVR, POT 89, acquisition fee unknown). 38 Napoli-owned players recorded: 24 currently available and 14 on loan. Historical summer screenshots remain a dated archive, not current transfer status. The starting goalkeeper has not been confirmed by the manager.';
D.developmentNote='Summer 2030: 24 available and 14 loaned. L. Resende at Torino; Meret sold; Epolo signed. No unconfirmed buy fee or debut.';
for(const key of ['firstXI','eliteXI'])if(Array.isArray(D[key])){
 D[key]=D[key].map(r=>r[1]===oldName?[r[0],'GK selection pending','—',...r.slice(3)]:r);
}
const root=document.getElementById('squadGroups');
if(root){
 const gks=[...root.querySelectorAll('section.squad-group')].find(s=>s.querySelector('.squad-group-head h3')?.textContent.trim()==='Goalkeepers');
 if(gks){
  for(const row of [...gks.querySelectorAll('.player-row')])if([oldName,name].includes(row.querySelector('strong')?.textContent.trim()))row.remove();
  const row=document.createElement('div');row.className='player-row';
  const person=document.createElement('div'),who=document.createElement('strong'),details=document.createElement('span'),ovr=document.createElement('b');
  who.textContent=name;details.textContent=position+' · Age '+age+' · POT '+potential+' · New signing';ovr.textContent=String(overall);
  person.append(who,details);row.append(person,ovr);
  gks.insertBefore(row,gks.querySelector('.player-row')||null);
  const n=gks.querySelector('.squad-group-head span');if(n)n.textContent=String(D.squadPublic.Goalkeepers.length);
 }
 for(const intro of root.querySelectorAll('.development-roster-head')){
  const h=intro.querySelector('h2')?.textContent.trim();
  if(h==='First-team squad ratings'){
   const p=intro.querySelector('p');
   if(p)p.textContent='24 available players. Updated after Meret’s $44.9m sale and Epolo’s signing (85 OVR, POT 89); other ratings from the summer 2030 squad census.';
  }
 }
}
const note=document.querySelector('#squad [data-squad-edition]');
if(note)note.textContent='Summer 2030 · 38 recorded Napoli players: 24 available, 14 loaned. Meret sold; Epolo, 25, GK, 85 OVR (POT 89) signed. Goalkeeper XI selection pending.';
for(const id of ['formation','eliteFormation']){
 const el=document.getElementById(id);
 if(!el)continue;
 for(const row of el.querySelectorAll('.formation-row')){
  const who=row.querySelector('strong');
  if(who?.textContent.trim()===oldName){
   who.textContent='GK selection pending';
   const rating=row.querySelector('b');if(rating)rating.textContent='—';
  }
 }
}
})();
