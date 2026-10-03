(() => {
  const ARTICLE_ID='inter-supercoppa-final-2-1';
  const rows=[
    ['SaladinoOutNow','Manager of the Month to no trophy in three days. I have reopened the agenda.'],
    ['RotationPolice','I understand the stamina problem. I do. But rotating this much in a FINAL is always going to get questioned when you lose.'],
    ['NerazzurriGuest','First in the league and now Supercoppa champions. Thanks for making the last twenty minutes dramatic though.','INTER'],
    ['PazEnjoyer','Paz tried to drag us back into it himself. Goal in the 71st and nearly the equalizer at the death.'],
    ['ChiesaHive','That shot off the post is going to haunt me. He absolutely cooked Dimarco and we were centimetres from 2–2.'],
    ['CalendarVictim','The real villain is playing a final and then Milan away two days later. What is this schedule?'],
    ['InteristaInPeace','You can blame rotation, fatigue, the calendar, whatever. The cup is still coming home with us.','INTER'],
    ['MeretUnion','Meret kept this alive when Inter were all over us early. Do not put this on him.'],
    ['NoTacticsJustVibes','2–0 down, pulled one back, hit the post, two saves in the final attack. This club exists to damage my nervous system.'],
    ['ScudettoOrBust','Fine. They can have the Supercoppa. We are two points behind them in Serie A. Take the anger into the league.'],
    ['SquadDepthDept','This is exactly why January depth matters. The first XI cannot play every 48 hours.'],
    ['PioNation','Sommer saving Paz and then Pio on the rebound at the end was cruel. That was the moment.'],
    ['PartenopeiProfessor','The first fifty minutes lost the final. The last forty showed why this team is still dangerous. Both things can be true.'],
    ['BlueSideNaples','No moral trophies. We lost. But the response at 2–0 matters with Milan coming immediately.'],
    ['CurvaCalculator','Supercoppa gone. Serie A: two points off Inter. Milan next. There is literally no time to sulk.'],
    ['AwayEndInter','Paz gave us a scare, Chiesa hit the post, Sommer handled the rest. Champions.','INTER']
  ];
  const esc=(v='')=>String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;').replace(/'/g,'&#039;');
  let scheduled=false;
  function render(){
    scheduled=false; const host=document.getElementById('readerContent'); if(!host)return;
    const id=host.querySelector('[data-article-id]')?.dataset?.articleId||'';
    const headline=host.querySelector('#readerHeadline')?.textContent?.trim()||'';
    if(id!==ARTICLE_ID && !headline.startsWith('Napoli Fall Short as Inter'))return;
    let section=host.querySelector('.fan-comments'); if(!section){section=document.createElement('section');host.appendChild(section);}
    if(section.dataset.resultSpecific===ARTICLE_ID)return;
    section.dataset.commentsFor=ARTICLE_ID; section.dataset.commentContext='supercoppa-final-loss'; section.dataset.contextEngine='result-specific'; section.dataset.resultSpecific=ARTICLE_ID; section.className='fan-comments heat-5';
    section.innerHTML=`<div class="fan-comments-head"><div><span>CURVA COMMENTS</span><h3>What the fans are saying</h3></div><small>Fictional comments · SUPERCOPPA FINAL · INTER 2–1 NAPOLI · ${rows.length} shown</small></div><div class="fan-comments-list">${rows.map(([name,text,club],i)=>`<article class="fan-comment${club?' visitor-comment':''}"><div class="fan-avatar">${esc(name.slice(0,2).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${esc(name)}</strong>${club?`<em class="visitor-badge">${esc(club)} FAN</em>`:''}<span>${i===0?'just now':`${1+i*2}m`}</span></div><p>${esc(text)}</p><div class="fan-actions"><span>▲ ${41+i*9}</span><span>Reply</span></div></div></article>`).join('')}</div>`;
  }
  function schedule(){if(scheduled)return;scheduled=true;queueMicrotask(render);}
  const reader=document.getElementById('readerContent'); if(reader)new MutationObserver(schedule).observe(reader,{subtree:true,childList:true});
  document.addEventListener('click',e=>{if(e.target.closest?.('[data-article]'))requestAnimationFrame(schedule);}); schedule();
})();