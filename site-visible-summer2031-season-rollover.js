/* Summer 2031 squad census and 2031–32 season opening. Manager-confirmed Squad Hub ages and OVR. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const rows=[
['M. Epolo','GK',26,86],['F. Lawton','GK',21,78],['C. Peacock','GK',22,75],['O. Burnett','GK',21,79],
['Alphonso Davies','LB',30,91],['Riccardo Calafiori','LB',29,89],['Y. Tran','LB',20,75],['S. Vitale','LB',19,75],['V. Hermansen','LB',22,81],
['Alessandro Bastoni','CB',32,93],['Alessandro Buongiorno','CB',32,89],['Rafa Marín','CB',29,81],['M. Valentini','CB',21,73],['G. Ricci','CB',21,72],
['Michael Kayode','RB',26,88],
['Lirim Hasa','CM',27,80],['Scott McTominay','CM',34,84],['Anton Stach','CM',32,82],['Warren Zaïre-Emery','CM',25,90],['João Neves','CM',26,95],
['Nico Paz','CAM',26,91],['L. Resende','CAM',20,72],['D. Parisis','CAM',17,66],
['Estêvão','RM',24,89],['C. Brun','RM',21,76],['V. Mancini','RM',22,77],['E. Rossetti','RM',19,82],
['Mikey Moore','LW',23,88],['A. Vergara','RW',28,75],['M. Hooper','RW',20,77],['J. Pagano','RW',18,64],['O. Ly','RW',17,64],
['Maximilian Beier','ST',28,92],['Pio Esposito','ST',26,92],['F. Freitas','ST',19,70]
];
if(rows.length!==35||new Set(rows.map(p=>p[0])).size!==35)throw Error('Summer 2031 post-transfer squad requires 35 distinct players');
const departures=[{name:'Michael Olise',destination:'Tottenham Hotspur',type:'Transfer'},{name:'Giacomo Raspadori',destination:'Fulham',type:'Transfer'},{name:'Kevin De Bruyne',destination:'Retired',type:'Retirement'},{name:'T. Sánchez',destination:'Club not provided',type:'Transfer',fee:3300000},{name:'L. Jetten',destination:'Torino',type:'Transfer',fee:17600000},{name:'A. Reyna',destination:'Buyer not reported',type:'Transfer',fee:7250000}];
const aliases={'M. Epolo':['Epolo'],'L. Jetten':['Lucas Jetten'],'Alphonso Davies':['A. Davies','Davies'],'Riccardo Calafiori':['R. Calafiori'],'Alessandro Bastoni':['A. Bastoni'],'Alessandro Buongiorno':['A. Buongiorno'],'Rafa Marín':['R. Marín','Marín'],'Michael Kayode':['M. Kayode'],'Lirim Hasa':['L. Hasa'],'Scott McTominay':['S. McTominay'],'Anton Stach':['A. Stach'],'Warren Zaïre-Emery':['W. Zaïre-Emery'],'João Neves':['J. Neves'],'Nico Paz':['N. Paz'],'Mikey Moore':['M. Moore'],'Maximilian Beier':['M. Beier'],'Pio Esposito':['F. Esposito','Francesco Pio Esposito'],'E. Rossetti':['Rossetti']};
const groups={Goalkeepers:[],Defenders:[],Midfielders:[],Attackers:[]},players={},ratings={};
D.playerAges={...(D.playerAges||{})};
for(const [name,pos,age,overall] of rows){
 const group=pos==='GK'?'Goalkeepers':['LB','RB','CB'].includes(pos)?'Defenders':['CM','CDM','CAM'].includes(pos)?'Midfielders':'Attackers';
 const onLoan=['C. Brun','O. Ly','D. Parisis','M. Valentini','J. Pagano','L. Resende'].includes(name);
 if(!onLoan)groups[group].push([name,pos,overall,'Age '+age]);
 players[name]={age,overall,position:pos,onLoan,verified:true,source:'Summer 2031 Squad Hub; subsequent transfer updates from manager'};
 ratings[name]=overall;D.playerAges[name]=age;
 for(const alt of aliases[name]||[]){ratings[alt]=overall;D.playerAges[alt]=age;}
}
D.squadPublic=groups;D.playerRatingsCurrent=ratings;
D.loanedPlayers=[['C. Brun','RM',21,76],['O. Ly','RW',17,64],['D. Parisis','CAM',17,66],['M. Valentini','CB',21,73],['J. Pagano','RW',18,64],['L. Resende','CAM',20,72]];
D.loanDetails={...(D.loanDetails||{}),'C. Brun':'Loan confirmed · destination unreported','O. Ly':'Loan confirmed · destination unreported','D. Parisis':'Loan confirmed · destination unreported','M. Valentini':'One-season loan · destination unreported','J. Pagano':'Loan confirmed · destination unreported','L. Resende':'Loan confirmed · destination unreported'};
D.squadSnapshot={updated:'Summer 2031 · 2031–32 transfer update',verified:true,playerCount:35,availableCount:null,knownNotLoanedCount:29,loanCount:6,players,departures,loans:[{name:'C. Brun',position:'RM',age:21,overall:76,destination:null},{name:'O. Ly',position:'RW',age:17,overall:64,destination:null},{name:'D. Parisis',position:'CAM',age:17,overall:66,destination:null},{name:'M. Valentini',position:'CB',age:21,overall:73,destination:null,duration:'One year'},{name:'J. Pagano',position:'RW',age:18,overall:64,destination:null},{name:'L. Resende',position:'CAM',age:20,overall:72,destination:null}],notes:'38 originally pictured; T. Sánchez sold for $3.3m, L. Jetten to Torino for $17.6m, and A. Reyna sold for $7.25m. Brun, Ly, Parisis, Valentini, Pagano and Resende out on loan. Valentini loan duration one year; destinations unspecified. Other loan statuses unverified; unsigned targets excluded.'};
D.squadCurrentSeason='2031–32';D.departuresSummer2031=departures;
D.developmentNote='Summer 2031 squad: Brun, Ly, Parisis, Valentini (one year), Pagano and Resende on loan; destinations unreported. Sánchez, Jetten and Reyna sold. All other loan statuses unverified.';
D.firstXI=[];D.eliteXI=[]; // Stale 2030–31 projected formations removed until manager announces the new XI.
D.statsBySeason=D.statsBySeason||{};D.statsBySeason['2031–32']=[];
D.statsCurrentSeason='2031–32';D.stats=[];D.statsRoomAsOf='Summer 2031 · preseason';
D.statsScope='2031–32 club competitive statistics: no played fixtures recorded. Prior seasons remain archived.';
D.seasonState={...(D.seasonState||{}),currentSeason:'2031–32',phase:'preseason'};
D.meta={...(D.meta||{}),season:'2031–32 · PRESEASON · DEFENDING CHAMPIONS'};
D.upcoming=[];D.nextClubFixture=null;D.nextEuropeanFixture=null;
const el=id=>document.getElementById(id);
const mk=(tag,cls,value)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(value!==undefined)n.textContent=String(value);return n;};
const squad=el('squadGroups');
if(squad){
 const intro=mk('div','development-roster-head');intro.dataset.squadEdition='summer2031';
 intro.append(mk('div','section-kicker','2031–32 · Opening squad'),mk('h2','', 'First-team ratings'),mk('p','', '35 contracted players · 6 confirmed loans · 29 others not recorded on loan. Further changes remain possible this summer.'));
 const frag=document.createDocumentFragment();frag.append(intro);
 for(const [group,items] of Object.entries(groups)){
  const panel=mk('section','squad-group');panel.dataset.squadEdition='summer2031';
  const head=mk('div','squad-group-head');head.append(mk('h3','',group),mk('span','',items.length));panel.append(head);
  for(const [name,pos,ovr] of items){
   const row=mk('div','player-row'),detail=mk('div');detail.append(mk('strong','',name),mk('span','',pos+' · Age '+players[name].age));
   row.append(detail,mk('b','',ovr));panel.append(row);
  }frag.append(panel);
 }
 const changes=mk('section','squad-group');changes.dataset.squadEdition='summer2031';
 const heading=mk('div','squad-group-head');heading.append(mk('h3','','Summer departures'),mk('span','',departures.length));changes.append(heading);
 for(const d of departures){const row=mk('div','player-row'),details=mk('div');details.append(mk('strong','',d.name),mk('span','',d.type+' · '+d.destination+(d.fee?' · $'+(d.fee/1000000).toFixed(1)+'m fee':'')));row.append(details);changes.append(row);}
 frag.append(changes);
 const loanPanel=mk('section','squad-group');loanPanel.dataset.squadEdition='summer2031';
 const loanHead=mk('div','squad-group-head');loanHead.append(mk('h3','','Players on loan'),mk('span','',6));loanPanel.append(loanHead);
 for(const [name,pos,age,ovr] of D.loanedPlayers){const row=mk('div','player-row'),details=mk('div');details.append(mk('strong','',name),mk('span','',pos+' · Age '+age+(name==='M. Valentini'?' · One-year loan':'')+' · Destination not reported'));row.append(details,mk('b','',ovr));loanPanel.append(row);}
 frag.append(loanPanel);squad.replaceChildren(frag);
}
const squadHeader=document.querySelector('#squad .section-head>div');
if(squadHeader){const p=mk('p','','Summer 2031 ratings and ages. Past player contributions remain in the historical season tabs.');p.style.cssText='font-size:.88rem;opacity:.82;margin-top:8px;max-width:720px';squadHeader.querySelector('p')?.remove();squadHeader.append(p);}
const formation=document.querySelector('#squad .formation-panel');
if(formation)formation.replaceChildren(mk('div','section-kicker light','Season 2031–32'),mk('h3','','Selection in progress'),mk('p','xi-note','The starting XI for the new campaign has not yet been announced.'),mk('div','section-kicker light','Reigning champions'),mk('p','xi-note','Napoli enter preseason having won Serie A, Coppa Italia and the Champions League in 2030–31.'));
const academy=el('youthTable');
if(academy){
 const young=rows.filter(p=>p[2]<=22),thead=document.createElement('thead'),tr=document.createElement('tr');
 for(const text of ['Player','Position','Age','OVR','Status'])tr.append(mk('th','',text));thead.append(tr);
 const tbody=document.createElement('tbody');for(const p of young){const row=document.createElement('tr');for(const v of [...p,players[p[0]].onLoan?'On loan':'Squad'])row.append(mk('td','',v));tbody.append(row);}
 academy.replaceChildren(thead,tbody);
 const h=document.querySelector('#academy .section-head h2');if(h)h.textContent='Young Players & Development';
 const intro=document.querySelector('#academy .section-head');if(intro){intro.querySelector('[data-academy-edition]')?.remove();}if(intro&&!intro.querySelector('[data-youth-census]')){const p=mk('p','','Summer 2031 senior-squad players aged 22 and under. Brun, Ly, Parisis, Valentini, Pagano and Resende are on loan. Valentini’s loan lasts one year; destinations have not been reported.');p.dataset.youthCensus='summer2031';p.style.cssText='font-size:.88rem;opacity:.82;margin-top:8px;max-width:730px';intro.querySelector('div')?.append(p);}
}
const filters=document.querySelector('#stats .stats-filters');
if(filters&&!filters.querySelector('[data-stats-view="2031–32"]')){for(const button of filters.querySelectorAll('[data-stats-view]'))button.classList.remove('active');const button=mk('button','filter-pill active','2031–32');button.type='button';button.dataset.statsView='2031–32';filters.prepend(button);}
const eyebrow=document.querySelector('.brand-copy .eyebrow');if(eyebrow)eyebrow.textContent='NAPOLI & ITALIA · SEASON 2031–32';
const header=document.querySelector('.header-status span:last-child');if(header)header.textContent='2031–32 PRESEASON · REIGNING EUROPEAN CHAMPIONS';
document.title='Napoli 2031–32 — Season Room';
const description=document.querySelector('meta[name="description"]');if(description)description.content='Napoli open the 2031–32 campaign as reigning Serie A, Coppa Italia and Champions League winners. Updated squad ratings and season statistics.';
D.ticker=['NAPOLI 2031–32 · CHAMPIONS BEGIN A NEW CAMPAIGN','THIRD STRAIGHT CHAMPIONS LEAGUE · SECOND STRAIGHT TREBLE','OLISE DEPARTS FOR TOTTENHAM · RASPADORI JOINS FULHAM','KEVIN DE BRUYNE RETIRES · SUMMER SQUAD UPDATED','SÁNCHEZ $3.3M · JETTEN TO TORINO $17.6M · REYNA SOLD $7.25M','BRUN, LY, PARISIS, VALENTINI, PAGANO AND RESENDE LOANED OUT','2030–31 FINAL: NAPOLI 2–0 PSG · BEIER 61′ AND 71′'];
const ticker=el('tickerTrack');if(ticker)ticker.replaceChildren(...[...D.ticker,...D.ticker].map(s=>mk('span','',s)));
const next=el('nextTwo');if(next)next.replaceChildren(mk('div','next-row','2031–32 fixtures awaiting confirmation'));
const upcoming=el('upcomingStrip');if(upcoming){const row=mk('div','fixture');row.append(mk('span','','SUMMER 2031'),mk('strong','','2031–32 · PRESEASON'),mk('small','','Next Napoli fixture not yet confirmed'));upcoming.replaceChildren(row);}
})();