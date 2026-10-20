/* Manager-confirmed summer 2029–30 squad additions. Loaded after historic season overlays. */
(()=>{
 const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
 const newcomers=[{name:'Giacomo Raspadori',position:'ST',age:29,overall:81,role:'Rotation',status:'First team'},{name:'Lucas Jetten',position:'LB / RW / LM',age:22,overall:75,role:'Prospect',status:'First team'},{name:'Lirim Hasa',position:'CM',age:25,overall:79,role:'Sporadic',status:'Recalled / first team'},{name:'Alessandro Plizzari',position:'GK',age:'not confirmed',overall:71,role:'Third choice',status:'One-year loan; Napoli wage share $7,000/week'}];
 D.squadSnapshot={...(D.squadSnapshot||{}),updated:'2029–30 · after Plizzari loan',loanCount:13,availableCount:24,notes:'24 available including Plizzari loan-in; 13 Napoli-owned players out on loan. Broja not signed.'};
 D.summer2029Additions=newcomers;
 const node=document.getElementById('squadGroups');
 if(node&&!document.getElementById('summer2029Additions')){
 const panel=document.createElement('section');panel.id='summer2029Additions';panel.className='squad-group';
 const title=document.createElement('h3');title.textContent='2029–30 · Confirmed additions';panel.appendChild(title);
 newcomers.forEach(p=>{const entry=document.createElement('div');entry.className='squad-player';entry.textContent=p.name+' · '+p.position+' · '+p.overall+' OVR · Age '+p.age+' · '+p.role;panel.appendChild(entry)});
 const note=document.createElement('p');note.textContent='24 available senior players including Plizzari loan-in · 13 on loan. Raspadori and Jetten signed; Hasa recalled.';panel.appendChild(note);node.prepend(panel);
 }
 D.latestResult=['PAR','1–1','NAP','SERIE A · 26 AUG 2029 · FRIGAN 24′; JOÃO NEVES 90+′ (MCTOMINAY)'];
 D.ticker=['PARMA 1–1 NAPOLI · NEVES LATE EQUALISER','RASPADORI SIGNS · 81 OVR · THREE-YEAR DEAL','JETTEN SIGNS · HASA RETURNS FROM LOAN','NEXT · NAPOLI vs SASSUOLO · 1 SEP 2029'];
 const l=document.getElementById('latestResult');if(l)l.innerHTML='<div class="latest-score"><span>PAR</span><strong>1–1</strong><span>NAP</span></div><p>SERIE A · 26 AUG 2029 · FRIGAN 24′; JOÃO NEVES 90+′ (MCTOMINAY)</p>';
 const t=document.getElementById('tickerTrack');if(t)t.replaceChildren(...[...D.ticker,...D.ticker].map(s=>{const e=document.createElement('span');e.textContent=s;return e}));
 const n=document.getElementById('nextTwo');if(n)n.innerHTML='<div class="next-match"><strong>NEXT · SERIE A · 1 SEP 2029</strong><p>Napoli vs Sassuolo · Home</p></div>';
 const h=document.querySelector('.header-status span:last-child');if(h)h.textContent='2029–30 · TITLE DEFENCE';
})();
