/* Napoli current senior-squad census — summer 2030, 5 manager-confirmed Squad Hub screenshots. Histories preserved separately. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const rows=[["Alex Meret",33,86,"GK",false],["Emery Balcombe",30,67,"GK",false],["F. Lawton",20,76,"GK",true],["C. Peacock",21,75,"GK",false],["O. Burnett",20,76,"GK",false],["Lucas Jetten",23,76,"LB",false],["Alphonso Davies",29,91,"LB",false],["Riccardo Calafiori",28,88,"LB",false],["Y. Tran",19,72,"LB",true],["S. Vitale",18,73,"LB",true],["Alessandro Bastoni",31,92,"CB",false],["Lutsharel Geertruida",30,83,"CB",false],["Alessandro Buongiorno",31,88,"CB",false],["Rafa Marín",28,81,"CB",false],["M. Valentini",21,71,"CB",true],["G. Ricci",20,70,"CB",true],["A. Reyna",22,71,"CB",true],["Michael Kayode",26,88,"RB",false],["T. Sánchez",21,68,"CDM",true],["Lirim Hasa",26,79,"CM",false],["Kevin De Bruyne",39,77,"CM",false],["Scott McTominay",33,85,"CM",false],["Anton Stach",31,82,"CM",false],["Warren Zaïre-Emery",24,90,"CM",false],["João Neves",25,95,"CM",false],["Nico Paz",25,90,"CAM",false],["L. Resende",19,71,"CAM",false],["Michael Olise",28,92,"RM",false],["C. Brun",20,74,"RM",true],["V. Mancini",21,77,"RM",true],["E. Rossetti",18,78,"RM",true],["Mikey Moore",22,86,"LW",false],["A. Vergara",27,75,"RW",true],["M. Hooper",19,74,"RW",true],["Giacomo Raspadori",30,81,"ST",false],["Maximilian Beier",27,91,"ST",false],["Pio Esposito",25,90,"ST",false],["F. Freitas",18,67,"ST",true]];
const aliases={"Alex Meret":["A. Meret","Meret"],"Emery Balcombe":["E. Balcombe"],"F. Lawton":["Lawton"],"C. Peacock":["Peacock"],"O. Burnett":["Burnett"],"Lucas Jetten":["L. Jetten"],"Alphonso Davies":["A. Davies","Davies"],"Riccardo Calafiori":["R. Calafiori","Calafiori"],"Alessandro Bastoni":["A. Bastoni","Bastoni"],"Lutsharel Geertruida":["L. Geertruida","Geertruida"],"Alessandro Buongiorno":["A. Buongiorno","Buongiorno"],"Rafa Marín":["R. Marín","Marín","Marin"],"Michael Kayode":["M. Kayode","Kayode"],"Lirim Hasa":["L. Hasa","Hasa"],"Kevin De Bruyne":["K. De Bruyne","De Bruyne","KDB"],"Scott McTominay":["S. McTominay","McTominay"],"Anton Stach":["A. Stach","Stach"],"Warren Zaïre-Emery":["W. Zaïre-Emery","Zaïre-Emery"],"João Neves":["J. Neves","Neves"],"Nico Paz":["N. Paz","Paz"],"Michael Olise":["M. Olise","Olise"],"Mikey Moore":["M. Moore","Moore"],"Giacomo Raspadori":["G. Raspadori","Raspadori"],"Maximilian Beier":["M. Beier","Beier"],"Pio Esposito":["F. Esposito","Francesco Pio Esposito","Pio","Pio Esposito"]};
const record=Object.fromEntries(rows.map(([name,age,overall,position,onLoan])=>[name,{age,overall,position,onLoan,verified:true,source:'Summer 2030 · manager Squad Hub screenshots'}]));
const ratings={};D.playerAges={...(D.playerAges||{})};
for(const [name,p] of Object.entries(record)){
  D.playerAges[name]=p.age;ratings[name]=p.overall;
  for(const alias of aliases[name]||[]){D.playerAges[alias]=p.age;ratings[alias]=p.overall;}
}
const groups={Goalkeepers:[],Defenders:[],Midfielders:[],Attackers:[]};
for(const [name,age,overall,position,onLoan] of rows){
  if(onLoan)continue;
  const group=position==='GK'?'Goalkeepers':['LB','RB','CB'].includes(position)?'Defenders':['CM','CDM','CAM'].includes(position)?'Midfielders':'Attackers';
  const role=name==='Alessandro Bastoni'?'Captain':name==='Alex Meret'?'Established goalkeeper':name==='O. Burnett'?'Senior squad · prospect':name==='C. Peacock'?'Senior squad · prospect':'First team';
  groups[group].push([name,position,overall,role]);
}
D.squadPublic=groups;
D.loanedPlayers=rows.filter(r=>r[4]).map(([name,age,overall,position])=>[name,position,age,overall]);
D.loanDetails={...(D.loanDetails||{})};
delete D.loanDetails['O. Burnett'];delete D.loanDetails['L. Resende'];
D.squadSnapshot={
  updated:'Summer 2030 · manager screenshot-confirmed Squad Hub',
  verified:true,
  playerCount:rows.length,
  availableCount:rows.length-D.loanedPlayers.length,
  loanCount:D.loanedPlayers.length,
  players:record,
  notes:'38 pictured squad entries. Exactly 13 loan icons; Burnett (76) and Resende (71) are shown WITHOUT loan icons. No unpictured player is assumed sold or departed. Preserves historical February 2030 ratings as archive. Ratings and loan badges only verified at this snapshot.'
};
D.developmentNote='Summer 2030 manager-confirmed squad hub: 38 players pictured, 25 non-loaned, 13 on loan. The displayed 2030 statuses supersede older February values.';
for(const key of ['firstXI','eliteXI'])if(Array.isArray(D[key]))D[key]=D[key].map(r=>[r[0],r[1],ratings[r[1]]??r[2],...r.slice(3)]);
// app.js previously rendered the squad and formations using an earlier snapshot.
// Refresh current DOM without altering formations/positions, articles, or academy data.
const root=document.getElementById('squadGroups');
const groupPanel=(title,players,loan=false)=>{
  const panel=document.createElement('section');panel.className='squad-group'+(loan?' development-group':'');panel.dataset.squadEdition='summer2030';
  const heading=document.createElement('div');heading.className='squad-group-head';
  const h=document.createElement('h3');h.textContent=title;
  const count=document.createElement('span');count.textContent=String(players.length);
  heading.append(h,count);panel.appendChild(heading);
  for(const p of players){
    const [name,pos,overall,roleOrAge]=p;
    const line=document.createElement('div');line.className='player-row';
    const cell=document.createElement('div');
    const strong=document.createElement('strong');strong.textContent=name;
    const info=document.createElement('span');info.textContent=loan?pos+' · Age '+roleOrAge:pos+' · Age '+record[name].age+' · '+roleOrAge;
    const rating=document.createElement('b');rating.textContent=String(overall);
    cell.append(strong,info);line.append(cell,rating);panel.appendChild(line);
  }
  return panel;
};
if(root){
  // Keep the academy section appended in the previous 2030 youth update.
  const academyFirst=[...root.children].find(el=>el.classList?.contains('development-roster-head')&&el.querySelector('h2')?.textContent.trim()==='Youth Academy');
  for(const child of [...root.children]){
    const academy=child.dataset?.academyEdition==='summer2030'||child.querySelector?.('.squad-group-head h3')?.textContent.trim()==='Academy'
      ||(child.classList?.contains('development-roster-head')&&child.querySelector('h2')?.textContent.trim()==='Youth Academy');
    if(!academy)child.remove();
  }
  const frag=document.createDocumentFragment();
  const section=document.createElement('div');section.className='development-roster-head';section.dataset.squadEdition='summer2030';
  const kicker=document.createElement('div');kicker.className='section-kicker';kicker.textContent='Summer 2030 · Manager-confirmed';
  const title=document.createElement('h2');title.textContent='First-team squad ratings';
  const desc=document.createElement('p');desc.textContent='25 players without loan icons · ratings and ages from the latest Squad Hub. Loaned players are listed separately below.';
  section.append(kicker,title,desc);frag.append(section);
  for(const [name,players] of Object.entries(groups))frag.append(groupPanel(name,players));
  const loanIntro=document.createElement('div');loanIntro.className='development-roster-head';loanIntro.dataset.squadEdition='summer2030';
  const lk=document.createElement('div');lk.className='section-kicker';lk.textContent='Development';
  const lh=document.createElement('h2');lh.textContent='Players on Loan';
  const lp=document.createElement('p');lp.textContent=D.loanedPlayers.length+' players with a loan icon in the latest Squad Hub.';
  loanIntro.append(lk,lh,lp);frag.append(loanIntro);
  frag.append(groupPanel('Loaned Out',D.loanedPlayers.map(p=>[p[0],p[1],p[3],p[2]]),true));
  root.insertBefore(frag,academyFirst&&academyFirst.isConnected?academyFirst:null);
  const page=document.querySelector('#squad .section-head');
  if(page){
    let note=page.querySelector('[data-squad-edition]');
    if(!note){note=document.createElement('p');note.dataset.squadEdition='summer2030';note.style.cssText='font-size:.85rem;opacity:.8;margin-top:8px;max-width:720px';page.querySelector('div')?.appendChild(note);}
    note.textContent='Summer 2030 verified ratings · 38 players · 25 not on loan · 13 on loan. Academy records are tracked separately.';
  }
}
for(const id of ['formation','eliteFormation']){
  const node=document.getElementById(id);
  if(node)for(const line of node.querySelectorAll('.formation-row')){
    const name=line.querySelector('strong')?.textContent.trim();
    if(name&&ratings[name]!==undefined&&line.querySelector('b'))line.querySelector('b').textContent=String(ratings[name]);
  }
}
})();
