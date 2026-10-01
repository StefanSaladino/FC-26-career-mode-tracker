(() => {
  const threads = {
    'Pio Strikes Again, but Salzburg Snatch a 1–1 Draw Late': {
      id:'salzburg-pio-1-1', context:'ucl-league-stage', label:'CHAMPIONS LEAGUE · LATE DRAW', rows:[
        ['PioPressure','Pio again. That left-foot finish was ice cold. Sickening that it did not end up being the winner.',''],
        ['BeierBeliever','Beier to Pio is a real thing now. That link looked dangerous all night.',''],
        ['MeretMoment','He kept us alive in the first half, which makes the spill on the equaliser even harder to take.',''],
        ['EuropeNights','One point is not nothing, but from 1–0 up in the 79th this absolutely feels like two dropped.',''],
        ['KayodeEngine','Kayode at right mid actually gave us a proper outlet late. I want to see that again.',''],
        ['SalzburgAway','Schlager kept us in it long enough and then we found the equaliser. We will take that all day.','RB SALZBURG'],
        ['PartenopeiPulse','The frustrating part is we had enough chances for the second. This should have been finished before the spill.',''],
        ['PioXI','Ten goals logged now. The kid just keeps answering every time the game gets tight.','']
      ]
    },
    'Pio from the Spot: Napoli Grind Out a 1–0 Win at Juventus': {
      id:'juventus-pio-penalty-1-0', context:'league-title-race', label:'SERIE A · BIG AWAY WIN', rows:[
        ['PioPressure','Bottom right. No panic. No drama. Pio wanted that penalty and buried it.',''],
        ['MooreMinutes','Mikey Moore winning the penalty in Turin is exactly how you earn more minutes. Massive impact.',''],
        ['BastoniWall','That late Bastoni intervention was every bit as important as the goal. Clutch defending.',''],
        ['SnowDayNapoli','Winning 1–0 away at Juve in the snow is the most grown-up result of the season.',''],
        ['TurinBlue','Not pretty, not open, not chaotic. Just three points and a clean sheet. Beautiful.',''],
        ['JuveGuest','One penalty decided it. Napoli managed the last fifteen minutes better than we did.','JUVENTUS'],
        ['KayodeEngine','Kayode carrying us out of pressure late was huge. Fresh legs changed the right side.',''],
        ['ScudettoWatch','35 points from 15 and a direct rival beaten away. That is a serious result.',''],
        ['PioXI','Eleven logged Napoli goals now. At this point calling him clutch is underselling it.',''],
        ['PartenopeiPulse','After the Salzburg frustration, this is exactly the response you wanted. Go to Turin and win ugly.','']
      ]
    },
    'Davies Off the Bench Wins It: Napoli Survive Cagliari 2–1 in the Coppa': {
      id:'cagliari-davies-winner-2-1', context:'coppa-knockout', label:'COPPA ITALIA · THROUGH', rows:[
        ['DaviesDrive','That is what a superstar bench cameo looks like. Miss one, keep attacking, bury the next one.',''],
        ['BeierBeliever','Finally. Beier needed that goal badly and the Paz pass was perfect.',''],
        ['PeacockWatch','Two or three huge saves tonight. Peacock absolutely earned this start.',''],
        ['PazVision','Paz was creating all night. The assist to Beier was only the cleanest example.',''],
        ['CupNerves','That corner equaliser before halftime was ridiculous. Massive response not to lose our heads.',''],
        ['CagliariGuest','Sherri gave us a chance for a long time, but Davies changed the level of the match when he came on.','CAGLIARI'],
        ['ChiesaChaos','Chiesa coming on for Stach was the moment we stopped managing the tie and went hunting for it.',''],
        ['RotationFC','Peacock, Marín, Geertruida at left back, Stach, Lang — rotated side and still got through. Job done.',''],
        ['TitleRaceNow','Cup business handled. Straight back to the league now with Inter only four points ahead.',''],
        ['PartenopeiPulse','Beier scores, Peacock delivers, Davies wins it. That is exactly what squad depth is supposed to look like.','']
      ]
    }
  };

  const esc = (value='') => String(value)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#039;');

  let scheduled = false;
  function render() {
    scheduled = false;
    const host = document.getElementById('readerContent');
    if (!host) return;
    const headline = host.querySelector('#readerHeadline')?.textContent?.trim();
    const thread = threads[headline];
    if (!thread) return;

    let section = host.querySelector('.fan-comments');
    if (!section) {
      section = document.createElement('section');
      section.className = 'fan-comments';
      host.appendChild(section);
    }

    if (section.dataset.latestResultFixed === thread.id) return;

    section.dataset.commentsFor = thread.id;
    section.dataset.commentContext = thread.context;
    section.dataset.contextEngine = '2';
    section.dataset.latestResultFixed = thread.id;
    section.classList.add('heat-5');
    section.innerHTML = `<div class="fan-comments-head"><div><span>CURVA COMMENTS</span><h3>What the fans are saying</h3></div><small>Fictional comments · ${esc(thread.label)} · ${thread.rows.length} shown</small></div><div class="fan-comments-list">${thread.rows.map(([name,text,club],i) => `<article class="fan-comment${club ? ' visitor-comment' : ''}"><div class="fan-avatar">${esc(name.slice(0,2).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${esc(name)}</strong>${club ? `<em class="visitor-badge">${esc(club)} FAN</em>` : ''}<span>${i===0?'just now':`${2+i*4}m`}</span></div><p>${esc(text)}</p><div class="fan-actions"><span>▲ ${21+i*9}</span><span>Reply</span></div></div></article>`).join('')}</div>`;
  }

  function scheduleRender(){
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(render);
  }

  const reader = document.getElementById('readerContent');
  if (reader) new MutationObserver(scheduleRender).observe(reader,{subtree:true,childList:true});
  document.addEventListener('click',e=>{if(e.target.closest?.('[data-article]'))requestAnimationFrame(scheduleRender);});
  document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.closest?.('[data-article]'))requestAnimationFrame(scheduleRender);});
  scheduleRender();
})();