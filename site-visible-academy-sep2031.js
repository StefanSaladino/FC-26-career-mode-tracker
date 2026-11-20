/* Academy squad update from manager's two September 2031 Youth Squad screenshots. Existing senior/loan display preserved. */
(()=>{'use strict';
const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const raw=[["V. Gatti","GK",17,61,84,90],["N. Rinaldi","CB",15,57,75,91],["M. Ruggiero","CB",14,53,69,87],["V. Pellegrino","RB",16,59,75,89],["S. Badji","CM",16,56,79,85],["D. Castiello","CM",16,58,92,94],["P. Benedetti","CAM",17,63,72,78],["F. Cattaneo","CAM",16,57,79,85],["C. Baldé","CAM",17,64,87,93],["O. Lua","CAM",16,60,80,86],["D. Nicolino","RM",16,58,79,85],["D. Sagna","RM",16,60,88,94],["E. Kamara","LW",15,55,83,89],["M. Cissé","LW",15,58,84,90]];
const entries=raw.map(([name,position,age,overall,potentialMin,potentialMax])=>({name,position,age,overall,potentialMin,potentialMax,potentialRange:potentialMin+'–'+potentialMax,plan:'Dynamic',nationality:name==='D. Castiello'?'Italy':null,confirmedNotItalian:name==='D. Sagna'||name==='C. Baldé'}));
D.academySnapshot2031={asOf:'September 2031',source:'Youth Squad screens (2 images)',verified:true,playerCount:entries.length,players:entries,
 notes:'A dated snapshot of 14 visible academy players only, not 2031 senior or loan players. Potential ranges are estimates. Absent from current youth screenshots does not prove a historic player was released or sold. D. Sagna in current screenshot must not be silently identified as previous D. Segna. Manager independently confirms Castiello is Italian; Sagna and Baldé are not Italian, but their exact nationalities are not specified.'};
D.academyPlayers=entries.map(p=>[p.name,p.position,p.age,p.overall,p.potentialRange]);
D.youth=entries.map(p=>[p.name,p.position,p.age,p.overall,p.potentialRange,p.plan,'Academy']);
D.academyCurrentAsOf='September 2031';
D.academyNationalityNotes2031={italyConfirmed:['D. Castiello'],notItalianCountryUnspecified:['D. Sagna','C. Baldé']};
const legacy=document.getElementById('youthTable');if(!legacy)throw Error('Existing Academy table not found');
if(document.getElementById('academyLoansTable'))return;
legacy.id='academyLoansTable';
legacy.setAttribute('aria-label','Young first-team players and loanees');
const wrap=legacy.closest('.table-wrap');if(!wrap)throw Error('Academy section table wrapper not found');
const section=wrap.closest('#academy');const parent=wrap.parentNode;
const overview=document.createElement('div');overview.className='academy-snapshot-intro';
const kicker=document.createElement('h3');kicker.textContent='Current youth squad · September 2031';
const note=document.createElement('p');note.textContent='14 academy players · Dynamic plans · Scouting potential ranges are estimates, not guaranteed outcomes.';
overview.append(kicker,note);parent.insertBefore(overview,wrap);
const youthWrap=document.createElement('div');youthWrap.className='table-wrap';const table=document.createElement('table');table.id='youthTable';table.setAttribute('aria-label','Current 2031 Napoli youth academy');
const h=document.createElement('thead'),thRow=document.createElement('tr');
for(const name of ['Player','Position','Age','OVR','Potential','Plan','Nationality']){const th=document.createElement('th');th.textContent=name;thRow.append(th)}h.append(thRow);
const body=document.createElement('tbody');
for(const p of entries){const row=document.createElement('tr');for(const value of [p.name,p.position,p.age,p.overall,p.potentialRange,p.plan,p.nationality|| (p.confirmedNotItalian?'Non-Italian':'—')]){const c=document.createElement('td');c.textContent=String(value);row.append(c)}body.append(row)}
table.append(h,body);youthWrap.append(table);parent.insertBefore(youthWrap,wrap);
const loansTitle=document.createElement('h3');loansTitle.textContent='Young professionals and loans';parent.insertBefore(loansTitle,wrap);
const loansNote=document.createElement('p');loansNote.textContent='Contracted senior players and loanees are listed separately from the academy; the roster is unchanged by this academy update.';parent.insertBefore(loansNote,wrap);
const meta=section?.querySelector('.section-head .section-kicker');if(meta)meta.textContent='Academy · 14 prospects';
})();
