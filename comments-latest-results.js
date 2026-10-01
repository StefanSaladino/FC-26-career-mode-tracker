(() => {
  const threads = {
    'Pio Strikes Again, but Salzburg Snatch a 1–1 Draw Late': {
      id:'salzburg-pio-1-1', label:'CHAMPIONS LEAGUE · LATE DRAW', rows:[
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
      id:'juventus-pio-penalty-1-0', label:'SERIE A · BIG AWAY WIN', rows:[
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
      id:'cagliari-davies-winner-2-1', label:'COPPA ITALIA · THROUGH', rows:[
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

  const render = () => {
    const headline = document.querySelector('#readerHeadline')?.textContent?.trim();
    const thread = threads[headline];
    if (!thread) return;
    const host = document.querySelector('#readerContent');
    if (!host) return;
    let section = host.querySelector('.fan-comments');
    if (!section) {
      section = document.createElement('section');
      section.className = 'fan-comments';
      host.appendChild(section);
    }
    section.dataset.commentsFor = thread.id;
    section.dataset.commentContext = thread.id === 'salzburg-pio-1-1' ? 'ucl-league-stage' : (thread.id === 'cagliari-davies-winner-2-1' ? 'coppa-knockout' : 'league-title-race');
    section.dataset.contextEngine = '2';
    section.dataset.latestResultFixed = '1';
    section.innerHTML = `<div class="fan-comments-head"><span>${thread.label}</span><strong>${thread.rows.length} comments</strong></div><div class="fan-comments-list">${thread.rows.map(([name,text,club]) => `<article class="fan-comment${club ? ' visitor-comment' : ''}"><div class="fan-avatar">${name.slice(0,2).toUpperCase()}</div><div><div class="fan-meta"><strong>${name}</strong>${club ? `<span>${club}</span>` : ''}</div><p>${text}</p></div></article>`).join('')}</div>`;
  };

  new MutationObserver(render).observe(document.body,{subtree:true,childList:true,characterData:true});
  document.addEventListener('click',() => setTimeout(render,0));
  render();
})();