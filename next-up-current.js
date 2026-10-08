(()=>{
  const D=window.NAPOLI_DATA;if(!D)return;
  // Upcoming fixtures transcribed from the manager's August/September 2028 in-game calendar.
  // Unclear crests are deliberately left unidentified until the manager confirms them.
  const fixtures=[
    {date:'2028-08-19',team:'Napoli',opponent:'Lecce',venue:'Away',competition:'Serie A',verified:true},
    {date:'2028-08-27',team:'Napoli',opponent:'Opponent TBC',venue:'Home',competition:'Serie A',verified:false},
    {date:'2028-09-01',team:'Italy',opponent:'Côte d’Ivoire',venue:'Away',competition:'International Friendly',verified:true},
    {date:'2028-09-05',team:'Italy',opponent:'Opponent TBC',venue:'Away',competition:'International Friendly',verified:false},
    {date:'2028-09-10',team:'Napoli',opponent:'Venezia',venue:'Away',competition:'Serie A',verified:true},
    {date:'2028-09-16',team:'Napoli',opponent:'Como',venue:'Home',competition:'Serie A',verified:true},
    {date:'2028-09-23',team:'Napoli',opponent:'Torino',venue:'Away',competition:'Serie A',verified:true}
  ];
  D.fixtures2028=fixtures;
  D.upcoming=fixtures.filter(f=>f.team==='Napoli').map(f=>[f.opponent,f.competition,f.date+' · '+f.venue+(f.verified?'':' · Opponent unconfirmed')]);
  const next=document.getElementById('nextTwo');
  if(next)next.innerHTML=D.upcoming.slice(0,2).map(f=>'<div class="next-row"><strong>'+f[0]+'</strong><span>'+f[2]+' · '+f[1]+'</span></div>').join('');
  const strip=document.getElementById('upcomingStrip');
  if(strip)strip.innerHTML=D.upcoming.map(f=>'<div class="fixture"><span>'+f[1]+'</span><strong>'+f[0]+'</strong><small>'+f[2]+'</small></div>').join('');
  const matches=document.getElementById('matchesList');
  if(matches){
    const section=document.createElement('section');section.className='season-2028-fixtures';section.setAttribute('aria-label','2028–29 upcoming Napoli and Italy fixtures');
    const heading=document.createElement('h3');heading.textContent='2028–29 · Upcoming fixtures';section.appendChild(heading);
    const list=document.createElement('div');list.className='match-list';
    fixtures.forEach(f=>{const card=document.createElement('div');card.className='match-card';const badge=document.createElement('div');badge.className='result-badge';badge.textContent=f.date.slice(5).replace('-','/');const main=document.createElement('div');main.className='match-main';const type=document.createElement('span');type.textContent=f.competition;const title=document.createElement('strong');title.textContent=f.venue==='Home'?f.team+' vs '+f.opponent:f.opponent+' vs '+f.team;const detail=document.createElement('p');detail.textContent=f.date+' · '+f.venue+(f.verified?'':' · Opponent awaiting confirmation');main.append(type,title,detail);card.append(badge,main);list.appendChild(card)});
    section.appendChild(list);matches.parentNode.insertBefore(section,matches);
  }
})();
