/* Summer 2031 latest squad screenshots; applied after historic season rollover. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const rows=[["M. Epolo","GK",26,86],["F. Lawton","GK",21,78],["C. Peacock","GK",22,75],["O. Burnett","GK",21,78],["Alphonso Davies","LB",30,91],["Riccardo Calafiori","LB",29,89],["Y. Tran","LB",20,76],["S. Vitale","LB",19,76],["V. Hermansen","LB",22,82],["Alessandro Bastoni","CB",32,93],["Alessandro Buongiorno","CB",32,89],["Rafa Marín","CB",29,81],["M. Valentini","CB",22,73],["G. Ricci","CB",22,72],["Michael Kayode","RB",27,88],["M. Cancio","LM",18,61],["Lirim Hasa","CM",27,80],["Scott McTominay","CM",34,83],["Anton Stach","CM",32,83],["Warren Zaïre-Emery","CM",25,90],["João Neves","CM",26,95],["Nico Paz","CAM",26,91],["L. Resende","CAM",20,72],["D. Parisis","CAM",17,66],["Estêvão","RM",24,89],["C. Brun","RM",21,76],["V. Mancini","RM",22,78],["E. Rossetti","RM",19,82],["Mikey Moore","LW",24,88],["M. Hooper","RW",20,77],["G. D'Angelo","RW",18,64],["J. Pagano","RW",18,67],["O. Ly","RW",17,67],["Sebastiano Esposito","ST",29,82],["Maximilian Beier","ST",28,92],["Pio Esposito","ST",26,92],["F. Freitas","ST",19,70]];
const loans=new Set(["F. Lawton","Y. Tran","S. Vitale","M. Valentini","G. Ricci","L. Resende","D. Parisis","C. Brun","V. Mancini","M. Hooper","J. Pagano","O. Ly","F. Freitas"]);

if(rows.length!==37||new Set(rows.map(p=>p[0])).size!==37||loans.size!==13)throw Error('Updated squad census integrity failed');
const arrivals=[{name:'Sebastiano Esposito',type:'Permanent signing',fee:36000000,position:'ST',age:29,overall:82}];
const previous=D.squadSnapshot||{},departures=previous.departures||D.departuresSummer2031||[];
if(departures.length!==7)throw Error('Existing summer departures missing');
const aliases={'M. Epolo':['Epolo'],'Alphonso Davies':['A. Davies','Davies'],'Riccardo Calafiori':['R. Calafiori'],'Alessandro Bastoni':['A. Bastoni'],'Alessandro Buongiorno':['A. Buongiorno'],'Rafa Marín':['R. Marín','Marín'],'Michael Kayode':['M. Kayode'],'Lirim Hasa':['L. Hasa'],'Scott McTominay':['S. McTominay'],'Anton Stach':['A. Stach'],'Warren Zaïre-Emery':['W. Zaïre-Emery'],'João Neves':['J. Neves'],'Nico Paz':['N. Paz'],'Mikey Moore':['M. Moore'],'Maximilian Beier':['M. Beier'],'Pio Esposito':['F. Esposito','Francesco Pio Esposito'],'Sebastiano Esposito':['S. Esposito']};
const groups={Goalkeepers:[],Defenders:[],Midfielders:[],Attackers:[]},players={},ratings={};
D.playerAges={...(D.playerAges||{})};
for(const [name,pos,age,overall] of rows){
 const onLoan=loans.has(name);
 const group=pos==='GK'?'Goalkeepers':['LB','CB','RB'].includes(pos)?'Defenders':['CDM','CM','CAM'].includes(pos)?'Midfielders':'Attackers';
 players[name]={age,overall,position:pos,onLoan,verified:true,source:'Latest summer 2031 Squad Hub images, plus earlier confirmed Peacock record'};
 if(!onLoan)groups[group].push([name,pos,overall,'Age '+age]);
 ratings[name]=overall;D.playerAges[name]=age;
 for(const alias of aliases[name]||[]){ratings[alias]=overall;D.playerAges[alias]=age;}
}
D.squadPublic=groups;D.playerRatingsCurrent=ratings;
D.loanedPlayers=rows.filter(r=>loans.has(r[0])).map(([name,pos,age,ovr])=>[name,pos,age,ovr]);
D.loanDetails=Object.fromEntries(D.loanedPlayers.map(([name])=>[name,['S. Vitale','M. Valentini'].includes(name)?'One-year loan; destination unverified':'Loan shown in squad hub; destination unverified']));
D.squadSnapshot={updated:'Summer 2031 · latest Squad Hub',verified:true,playerCount:rows.length,availableCount:null,knownNotLoanedCount:rows.length-loans.size,loanCount:loans.size,players,departures,arrivals,loans:D.loanedPlayers.map(([name,position,age,overall])=>({name,position,age,overall,destination:null,...(['S. Vitale','M. Valentini'].includes(name)?{duration:'One year'}:{})})),notes:'37 current players: the prior 34 after four sales, plus the completed Sebastiano Esposito signing and newly pictured M. Cancio and G. D’Angelo. 13 loan indicators in these photos; Peacock retained from prior census because not pictured in this batch. No loan destinations inferred from crests.'};
D.squadCurrentSeason='2031–32';
D.developmentNote='Summer 2031: 37 players on the books, 13 marked on loan. Vitale and Valentini have one-year loans. No destinations inferred.';
const mk=(tag,cls,value)=>{const node=document.createElement(tag);if(cls)node.className=cls;if(value!==undefined)node.textContent=String(value);return node};
const section=(title,items,mode)=>{
 const panel=mk('section','squad-group');panel.dataset.squadEdition='summer2031';
 const head=mk('div','squad-group-head');head.append(mk('h3','',title),mk('span','',items.length));panel.append(head);
 for(const item of items){
  const line=mk('div','player-row'),detail=mk('div');
  if(mode==='player'){const [name,pos,ovr]=item;detail.append(mk('strong','',name),mk('span','',pos+' · Age '+players[name].age));line.append(detail,mk('b','',ovr));}
  else if(mode==='loan'){const [name,pos,age,ovr]=item;detail.append(mk('strong','',name),mk('span','',pos+' · Age '+age+(['S. Vitale','M. Valentini'].includes(name)?' · One-year loan':'')+' · Destination not verified'));line.append(detail,mk('b','',ovr));}
  else if(mode==='departure'){detail.append(mk('strong','',item.name),mk('span','',item.type+' · '+item.destination+(item.fee?' · $'+(item.fee/1000000).toFixed(2).replace(/\.?0+$/,'')+'m fee':'')));line.append(detail);}
  else if(mode==='arrival'){detail.append(mk('strong','',item.name),mk('span','',item.type+' · $36m fee · ST · Age 29'));line.append(detail,mk('b','',item.overall));}
  panel.append(line);
 }
 return panel;
};
const target=document.getElementById('squadGroups');
if(target){
 const frag=document.createDocumentFragment(),intro=mk('div','development-roster-head');intro.dataset.squadEdition='summer2031';
 intro.append(mk('div','section-kicker','2031–32 · Updated squad'),mk('h2','','First-team ratings'),mk('p','','37 contracted players · 13 marked on loan · 24 others not marked on loan. Sebastiano Esposito joins for $36m.'));
 frag.append(intro);
 for(const [group,items] of Object.entries(groups))frag.append(section(group,items,'player'));
 frag.append(section('Summer arrivals',arrivals,'arrival'));
 frag.append(section('Summer departures',departures,'departure'));
 frag.append(section('Players on loan',D.loanedPlayers,'loan'));
 target.replaceChildren(frag);
}
const summary=document.querySelector('#squad .section-head>div>p');
if(summary)summary.textContent='Summer 2031: updated player ratings, ages and loans. Previous seasons and transferred players’ historic statistics remain preserved.';
const academy=document.getElementById('youthTable');
if(academy){
 const head=mk('thead'),tr=mk('tr');
 for(const title of ['Player','Position','Age','OVR','Status'])tr.append(mk('th','',title));
 head.append(tr);const body=mk('tbody');
 for(const [name,pos,age,ovr] of rows.filter(p=>p[2]<=22)){const tr=mk('tr');for(const value of [name,pos,age,ovr,loans.has(name)?'On loan':'Squad'])tr.append(mk('td','',value));body.append(tr);}
 academy.replaceChildren(head,body);
}
const academyNote=document.querySelector('#academy [data-youth-census]');
if(academyNote)academyNote.textContent='Summer 2031 players aged 22 or younger. Loan status follows the latest Squad Hub indicators; Vitale and Valentini have one-year loans. Destinations have not been verified.';
D.ticker=['NAPOLI 2031–32 · CHAMPIONS BEGIN A NEW CAMPAIGN','THIRD STRAIGHT CHAMPIONS LEAGUE · SECOND STRAIGHT TREBLE','SEBASTIANO ESPOSITO JOINS NAPOLI · $36M','OLISE DEPARTS FOR TOTTENHAM · RASPADORI JOINS FULHAM','KEVIN DE BRUYNE RETIRES','SÁNCHEZ $3.3M · JETTEN $17.6M · REYNA $7.25M · VERGARA $8.1M','13 SQUAD PLAYERS ON LOAN · VITALE ONE-YEAR LOAN','2030–31 FINAL: NAPOLI 2–0 PSG · BEIER 61′ AND 71′'];
const ticker=document.getElementById('tickerTrack');
if(ticker)ticker.replaceChildren(...[...D.ticker,...D.ticker].map(s=>mk('span','',s)));
})();
