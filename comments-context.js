(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  // Context-aware layer that sits on top of comments.js. Existing article-specific
  // comments are preserved at the top of a thread, then the rest of the thread is
  // rebuilt around the actual competition/stage/stakes instead of a generic result bank.
  // Future match stories can explicitly set:
  //   commentContext: 'league-regular' | 'league-title-race' | 'ucl-league-stage' |
  //     'ucl-knockout-leg1' | 'ucl-knockout-leg2-leading' |
  //     'ucl-knockout-leg2-trailing' | 'ucl-knockout-leg2-level' |
  //     'ucl-final' | 'title-potential-clincher' | 'title-clincher' |
  //     'post-title' | 'coppa-knockout' | 'coppa-final' | 'supercoppa' |
  //     'international' | 'friendly'
  //   aggregateState: 'leading' | 'trailing' | 'level'
  //   titleState: 'potential-clincher' | 'clinched' | 'post-title'

  const explicit = {
    'bayern-test': 'ucl-league-stage',
    'arsenal-pio-91': 'ucl-league-stage',
    'chelsea-pio-1-0': 'ucl-league-stage',
    'inter-title-race-preview': 'league-title-race',
    'fiorentina-kdb-1-0': 'league-regular',
    'udinese-pio-clean-sheet': 'league-regular',
    'genoa-drought': 'league-regular',
    'lazio-control': 'league-regular',
    'sassuolo-response': 'league-regular',
    'chiesa-pisa': 'league-regular',
    'torino-control': 'league-regular'
  };

  const labels = {
    'league-regular': 'SERIE A · LEAGUE MATCH',
    'league-title-race': 'SERIE A · TITLE-RACE SIX-POINTER',
    'ucl-league-stage': 'CHAMPIONS LEAGUE · LEAGUE PHASE',
    'ucl-knockout-leg1': 'CHAMPIONS LEAGUE · KNOCKOUT · LEG 1',
    'ucl-knockout-leg2-leading': 'CHAMPIONS LEAGUE · LEG 2 · AGGREGATE LEAD',
    'ucl-knockout-leg2-trailing': 'CHAMPIONS LEAGUE · LEG 2 · COMEBACK NEEDED',
    'ucl-knockout-leg2-level': 'CHAMPIONS LEAGUE · LEG 2 · TIE LEVEL',
    'ucl-final': 'CHAMPIONS LEAGUE · FINAL',
    'title-potential-clincher': 'SERIE A · TITLE CAN BE CLINCHED',
    'title-clincher': 'SERIE A · CHAMPIONS',
    'post-title': 'SERIE A · CHAMPIONS ALREADY',
    'coppa-knockout': 'COPPA ITALIA · KNOCKOUT',
    'coppa-final': 'COPPA ITALIA · FINAL',
    'supercoppa': 'SUPERCOPPA · TROPHY MATCH',
    'international': 'ITALY · COMPETITIVE INTERNATIONAL',
    'friendly': 'ITALY · FRIENDLY'
  };

  const banks = {
    'league-regular': [
      'These are the matches title races are built on: take the points and do not donate anything stupid.',
      'Domestic football is a different rhythm. You do not need a European masterpiece every weekend; you need the result.',
      'Three points in the league count exactly the same whether the winner is beautiful or ugly.',
      'The table will not remember how entertaining this was. It will remember the points.',
      'This is where depth matters more than hype. Survive the schedule and keep the pace.',
      'I care less about a statement and more about leaving with the league points intact.',
      'Every ordinary league night becomes expensive when the teams around you refuse to drop points.',
      'The Scudetto is usually lost in games nobody circles in August. Handle these and move on.',
      'No need to turn a routine league game into ninety minutes of self-inflicted chaos.',
      'Bank the result, check the table, recover. That is the job.'
    ],
    'league-title-race': [
      'This is not a normal three points. The table moves twice when the teams around each other play head-to-head.',
      'Stop telling me it is early. If the leader is across from you, the points have title-race weight right now.',
      'A draw can preserve a gap. A win can change the entire mood of the race. Everyone knows the arithmetic.',
      'These are the nights when the table starts feeling like part of the tactics board.',
      'You can hear the calculators opening all over Naples.',
      'Do not chase the table so hard that you forget to play the match in front of you.',
      'One transition, one set piece, one mistake — six-pointers punish impatience more than ordinary league games.',
      'If you want the Scudetto, eventually you have to take points directly off the teams standing in the way.',
      'The pressure is different when both fanbases know exactly what the result does to the gap.',
      'Nobody is allowed to call this just another league match. Look at the table.'
    ],
    'ucl-league-stage': [
      'European points are their own currency. Get enough of them and February becomes a very different problem.',
      'This is the league phase, not a knockout tie. Do not confuse one bad night with elimination or one win with qualification.',
      'The goal tonight is points and position, not winning an imaginary two-legged tie.',
      'Every Champions League night has more noise, but the calculation is still simple: keep adding to the European total.',
      'This is where beating a heavyweight changes the table and the belief at the same time.',
      'You can survive one ugly European result in the league phase. What matters is the response across the full run.',
      'Different pressure from Serie A: no title table, no aggregate yet, just European points and seeding pressure.',
      'The anthem makes everyone dramatic, but the format still rewards consistency across all these nights.',
      'Take the result and make the rest of Europe notice. The knockout panic can wait.',
      'A clean sheet in Europe feels louder because every mistake looks twice as expensive under the lights.'
    ],
    'ucl-knockout-leg1': [
      'Nobody wins a two-legged tie in leg one, but you can absolutely make leg two miserable for yourself.',
      'Do not treat a first-leg lead like qualification. Ninety more minutes are waiting.',
      'The first goal matters, but the shape of the tie matters more. Keep the second leg playable.',
      'This is where game management becomes part of the scoreline. Every late concession travels with you.',
      'Leg one is about creating leverage, not celebrating early.',
      'If we are ahead, stay greedy without becoming reckless. If we are behind, keep the deficit recoverable.',
      'The worst first-leg mistake is forgetting there is another match and playing like this is the final minute of the final.',
      'Give me a result that makes the opponent spend the next week thinking about us.',
      'European knockout football starts with ninety minutes of trying not to poison the next ninety.',
      'I refuse to use the word comfortable until leg two is finished.'
    ],
    'ucl-knockout-leg2-leading': [
      'We are ahead on aggregate. That is an advantage, not permission to spend ninety minutes inside our own box.',
      'The opponent needs the goal. Make their desperation create our transition chances.',
      'Every minute that passes helps us, but one passive spell can erase the entire first leg.',
      'Protect the aggregate without playing scared. There is a difference.',
      'The first-leg work only matters if we finish the tie now.',
      'This is the cruel part of leading a tie: you are close enough to taste it and still one mistake from panic.',
      'Make them take risks. Then punish the space those risks create.',
      'No heroic clearances for ninety straight minutes, please. Keep the ball long enough to let everyone breathe.',
      'We earned the cushion. Now use it intelligently instead of worshipping it.',
      'The whistle, not the aggregate graphic at kickoff, is when the job is done.'
    ],
    'ucl-knockout-leg2-trailing': [
      'We need a comeback, but conceding first turns a hard night into a mountain. Aggressive does not mean stupid.',
      'Get the first goal and this entire stadium changes temperature.',
      'There is no point protecting a deficit. At some stage we have to go and take the tie back.',
      'The clock matters tonight in a way it did not in leg one. Every empty attack feels heavier.',
      'One goal changes the aggregate, the noise and the opponent’s decision-making all at once.',
      'Do not spend twenty minutes forcing miracle balls. Build pressure, then make the tie crack.',
      'This is exactly why you keep players like Pio, Davies and Endrick fresh: one moment can reset the whole knockout.',
      'If we go out, make them earn every second of it. No quiet elimination.',
      'The comeback does not have to happen in one attack. It just has to start.',
      'I am already negotiating with the football gods and kickoff has barely happened.'
    ],
    'ucl-knockout-leg2-level': [
      'Forget the first leg now. The aggregate is level and this is effectively a one-game knockout.',
      'There is no cushion and no deficit. Every decision is live ammunition.',
      'This is the purest kind of European stress: one match, one place in the next round.',
      'Do not wait for the tie to choose us. Take control of it.',
      'A level aggregate makes every missed chance feel like foreshadowing.',
      'The first leg bought us exactly nothing except the right to decide it tonight.',
      'This is where the stadium starts reacting to throw-ins like penalties.',
      'One goal can completely change which team has to take the risk.',
      'Nobody hide from the ball tonight. These are the minutes careers get remembered for.',
      'I have no tactical insight left. Advance.'
    ],
    'ucl-final': [
      'There is no second leg, no league table and no tomorrow. Win the trophy.',
      'Every player who wanted a European legacy gets ninety minutes to write it.',
      'I do not care how. I do not care who scores. Bring the cup back to Naples.',
      'Finals are not for style points. They are for surviving every ugly minute and taking your moment.',
      'One match from the biggest club trophy in Europe. My nervous system has resigned.',
      'This is the game every transfer, rotation decision and miserable November night was supposedly building toward.',
      'Do not save anything. There is nothing after this to save it for.',
      'If this goes to extra time I may simply become smoke.',
      'Legacies get compressed into tiny moments in finals. Be ready when ours arrives.',
      'Ninety minutes. Maybe more. One cup.'
    ],
    'title-potential-clincher': [
      'Do not tell me to act normal. We can win the league today.',
      'The permutations are simple enough now: handle our business and make the trophy unavoidable.',
      'This is the dangerous kind of excitement where everyone starts celebrating the ending before the match begins.',
      'One more professional performance and an entire season changes tense from “can” to “did.”',
      'The players have to ignore everything the fans are absolutely incapable of ignoring.',
      'Score first and watch the whole stadium start counting minutes instead of passes.',
      'Potential clinchers are horrible because every ordinary mistake suddenly feels historic.',
      'No looking at other scores until our own job is finished.',
      'The title is close enough to touch. Please do not make us reach for it twice.',
      'I have already rehearsed the celebration and I blame nobody but myself.'
    ],
    'title-clincher': [
      'CHAMPIONS. Put the table on the wall and leave it there forever.',
      'All those ugly one-goal wins, rotation debates and panic threads just turned into a Scudetto.',
      'This is the result that rewrites every argument from the season.',
      'Nobody talk to me about next year. We are champions right now.',
      'The league table has stopped being a projection. It is a trophy receipt.',
      'Every player who dragged us through the bad nights owns a piece of this.',
      'I would like to formally apologize to several players I tried to sell in October.',
      'Naples is not sleeping tonight.',
      'This is why the ordinary league wins mattered. They all stacked into this.',
      'Save every screenshot. We earned the obnoxious phase.'
    ],
    'post-title': [
      'The league is already won. I am here for academy minutes, records and shameless victory laps now.',
      'Rotate responsibly, keep everyone healthy and let the champions enjoy being champions.',
      'The table pressure is gone, which somehow makes me capable of watching football like a normal person again.',
      'Now I want to see who uses these low-pressure minutes to demand a bigger role next season.',
      'This is where fringe players can turn dead-rubber minutes into very real selection problems.',
      'No need to fake urgency. The interesting story now is standards after the trophy is secured.',
      'If the unbeaten run or a points record is alive, fine. Otherwise protect legs and enjoy the view.',
      'Champions playing without title pressure can either look liberated or hungover. Let us see which one.',
      'The result matters less now, but habits still matter.',
      'I am grading vibes, youth minutes and who looks ready for next season.'
    ],
    'coppa-knockout': [
      'No league points to hide behind tonight. Advance or go home.',
      'Cup football makes rotation dangerous because there is no next weekend to recover the tie.',
      'I am fine with squad players starting. I am not fine with treating the trophy like an inconvenience.',
      'One bad spell can end an entire competition. Stay awake.',
      'The Coppa only becomes “important” to people after they are two wins from lifting it. Win now anyway.',
      'Knockout football rewards the team that respects the ugly minutes.',
      'If the match gets messy, get through. Nobody gives style points in a bracket.',
      'This is exactly the night the bench has to prove it is more than names on a depth chart.',
      'Do not make me watch the starters warm up in panic at sixty minutes.',
      'Advance first, analyze later.'
    ],
    'coppa-final': [
      'It is a final. Rotation philosophy is cancelled. Win the cup.',
      'One match for silverware means nobody gets to call this a secondary competition tonight.',
      'Trophies change how seasons are remembered. Go take another one.',
      'No aggregate, no table, no excuses. Just the final.',
      'I will accept the ugliest 1-0 in human history if it ends with a trophy lift.',
      'This squad is too good to arrive at finals and treat them casually.',
      'The bench can complain tomorrow. Start the team that gives us the best chance to lift silverware.',
      'Finals are where “good season” turns into “trophy season.”',
      'Every duel is going to feel twice as loud tonight.',
      'Bring it home.'
    ],
    'supercoppa': [
      'One-off trophy match. I do not care what month it is — silverware is silverware.',
      'The Supercoppa is exactly the kind of game rivals pretend not to care about until they win it.',
      'There is no reason to save legs for a second leg. Empty the tank.',
      'Beat a rival and lift a cup in the same night. The assignment is very clear.',
      'This is a ninety-minute opportunity to add another trophy to the project.',
      'If this gets tense late, give me the veterans who know how to close a final.',
      'Nobody is allowed to call it a glorified friendly while there is a trophy on the pitch.',
      'A final against Juventus is not a rotation laboratory.',
      'I want the cup and I want their fans annoyed about it.',
      'One night, one trophy. Handle it.'
    ],
    'international': [
      'Club form matters, but international football asks different questions. The shirt changes the pressure.',
      'Tournament qualification points are too expensive for experimentation once the real matches start.',
      'This is where the Napoli-Italy pipeline has to look like an advantage, not a comfort zone.',
      'National-team football gives you fewer training sessions and less margin for complicated ideas.',
      'Take the result, keep the core healthy and make the next camp easier.'
    ],
    'friendly': [
      'Friendly result, evaluation minutes. I care more about who looks ready for the real matches.',
      'This is exactly where you try combinations you would not risk in a qualifier.',
      'Nobody gets crowned or exiled over ninety friendly minutes.',
      'Give the fringe players enough rope to force a selection conversation.',
      'The score matters a little. The information matters more.'
    ]
  };

  const previewAdditions = {
    'league-regular': [
      'Do not burn the entire first XI proving a point before the bigger fixture on the calendar.',
      'This is the kind of league game where an early goal can save thirty minutes of stress and several starter legs.'
    ],
    'league-title-race': [
      'The leader can live with a draw more comfortably than the chaser. That changes who feels the clock first.',
      'The table says we need ambition. The matchup says do not turn ambition into recklessness.'
    ],
    'ucl-league-stage': [
      'Three European points now can save us from a much uglier route later.',
      'Treat the opponent like a Champions League opponent, not a name on a schedule.'
    ],
    'ucl-knockout-leg1': [
      'I want a lead to carry into leg two, but I want the tie alive even more than I want a reckless second goal.',
      'The first-leg plan has to include what we want the second leg to feel like.'
    ],
    'ucl-knockout-leg2-leading': [
      'They have to chase. Make that fact work for us from the first minute.',
      'The aggregate advantage should calm us, not shrink us.'
    ],
    'ucl-knockout-leg2-trailing': [
      'We need the stadium angry from kickoff. Make the opponent feel the aggregate before we even change it.',
      'First goal is everything. Get it and the tie becomes a completely different animal.'
    ],
    'ucl-knockout-leg2-level': [
      'No calculations left. Win the match, win the tie.',
      'This is basically a European final with another round waiting afterward.'
    ],
    'title-potential-clincher': [
      'Please score before the live-table graphics start ruining my life.',
      'The players need tunnel vision because every fan in Naples is already imagining the whistle.'
    ],
    'post-title': [
      'Give me a couple academy names and keep the important hamstrings attached.',
      'The pressure is gone; the standards should not be.'
    ]
  };

  const outcomeAdditions = {
    win: [
      'That is exactly the kind of result this context demanded.',
      'The job changed because of the occasion and Napoli handled the occasion.',
      'Result first. Everything else can be reviewed tomorrow.'
    ],
    draw: [
      'A draw means something different in this context than it would in a random league week.',
      'Not a disaster, but the consequences of the dropped points depend entirely on the situation around it.',
      'The reaction has to match the stakes, not just the letter D on the form guide.'
    ],
    loss: [
      'The painful part is not just losing — it is what this specific match was supposed to change.',
      'You cannot grade this like an ordinary defeat because the context was not ordinary.',
      'Own the consequence of the result, then make sure it does not spill into the next competition.'
    ]
  };

  const rivalLines = {
    preview: [
      'Your forum has already turned this into destiny. We are coming to ruin the screenplay.',
      'You can do all the table math you want. You still have to play us.',
      'The confidence in here is incredible. Saving receipts now.',
      'We know exactly what this match means to you, which is why annoying you would be even better.'
    ],
    win: [
      'Enjoy it. I hate that this thread is going to be unbearable now.',
      'You took the big moment and we did not. I have no clever excuse for that.',
      'Fine. You earned the right to talk tonight. I reserve the right to mute all of you.'
    ],
    draw: [
      'You are annoyed, we are annoyed, and somehow neither fanbase gets the screenshot it wanted.',
      'A draw feels completely different depending on who needed the result more. You know which side you are on.',
      'Nobody won the argument tonight. See you in the return fixture.'
    ],
    loss: [
      'All that buildup and you gave us the result. Thank you for the hospitality.',
      'The comments before kickoff were louder than the scoreboard after it.',
      'Keep the tactical explanations coming. We will keep the result.'
    ]
  };

  const handles = [
    'ContextMatters','CurvaCalculator','EuropeanNights','ScudettoOrBust','TwoLegTrauma','AggregateAnxiety',
    'CupRomantic','TitleRaceInsomnia','NapoliTherapy','SecondBallMerchant','VesuviusPress','AwayDayNapoli',
    'NoTacticsJustVibes','PartenopeiProfessor','OneNilEnjoyer','LateGoalTrauma','BenchCamEnjoyer',
    'FullTimeWhistle','KnockoutNerves','LeagueTableAddict','TrophyCabinetDept','RotationPolice','CurvaTactico',
    'NapoliSinceBirth','HalftimeOverthinker','SetPiecePanic','PressingTruther','BlueSideNaples','NinetyMinuteLawyer'
  ];
  const rivalHandles = ['AwayEndReceipt','VisitingNoise','RivalOnWifi','ScoreboardMerchant','AwayEndLawyer','GuestSection','OppositionTherapy','HereForTheThread'];

  const esc = (v='') => String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  const hash = value => String(value||'').split('').reduce((n,c)=>(n*33+c.charCodeAt(0))>>>0,5381);
  const textOf = a => `${a?.category||''} ${a?.label||''} ${a?.date||''} ${a?.headline||''} ${a?.dek||''} ${(a?.body||[]).join(' ')}`;
  const isPreview = a => /preview|ahead of|next up|upcoming/i.test(`${a?.category||''} ${a?.label||''} ${a?.date||''}`);

  function matchResult(a){
    const t=textOf(a).toLowerCase();
    const rows=(D.results||[]).filter(r=>r[0]==='Napoli'||r[0]==='Italy');
    return rows.slice().reverse().find(r=>t.includes(String(r[1]).toLowerCase())) || null;
  }

  function opponent(a){
    if (a.visitorClub && String(a.visitorClub).toUpperCase() !== 'NONE') return String(a.visitorClub).toUpperCase();
    const r=matchResult(a);
    if (r) return String(r[1]).toUpperCase();
    const text=textOf(a).toUpperCase();
    const fixtures=[...(D.upcoming||[]),...(D.results||[]).map(r=>[r[1],r[2],''])];
    const found=fixtures.find(x=>x?.[0] && text.includes(String(x[0]).toUpperCase()));
    return found ? String(found[0]).toUpperCase() : '';
  }

  function outcome(a){
    if (isPreview(a)) return 'preview';
    const r=matchResult(a);
    if (r) return r[5] === 'W' ? 'win' : r[5] === 'D' ? 'draw' : 'loss';
    const t=textOf(a).toLowerCase();
    if (/\bwin\b|winner|victory|beat |defeat .*?\d/.test(t)) return 'win';
    if (/draw|level|equalis|equaliz|0-0|1-1|2-2/.test(t)) return 'draw';
    if (/loss|lost|beaten|defeat/.test(t)) return 'loss';
    return 'preview';
  }

  function inferContext(a){
    if (a.commentContext) return a.commentContext;
    if (explicit[a.id]) return explicit[a.id];
    const t=textOf(a).toLowerCase();
    const agg=String(a.aggregateState||'').toLowerCase();
    const title=String(a.titleState||'').toLowerCase();

    if (title==='post-title' || /already champions|title already won|after clinching|league already won/.test(t)) return 'post-title';
    if (title==='clinched' || /clinch(?:ed|es) the (?:title|scudetto)|champions of italy|wins? the scudetto|title-clinching/.test(t)) return 'title-clincher';
    if (title==='potential-clincher' || /can clinch|could clinch|win the title today|title can be won|potential clinch/.test(t)) return 'title-potential-clincher';

    if (/supercoppa/.test(t)) return 'supercoppa';
    if (/coppa italia/.test(t)) return /final/.test(t) ? 'coppa-final' : 'coppa-knockout';

    if (/champions league|\bucl\b|europe/.test(t)) {
      if (/final/.test(t) && !/semi[- ]?final|quarter[- ]?final/.test(t)) return 'ucl-final';
      const leg2=/second leg|2nd leg|leg 2|return leg/.test(t) || Number(a.matchLeg||a.leg)===2;
      const leg1=/first leg|1st leg|leg 1/.test(t) || Number(a.matchLeg||a.leg)===1;
      if (leg2) {
        if (agg==='trailing' || /trailing .*aggregate|behind .*aggregate|down .*aggregate|comeback/.test(t)) return 'ucl-knockout-leg2-trailing';
        if (agg==='leading' || /leading .*aggregate|ahead .*aggregate|aggregate lead/.test(t)) return 'ucl-knockout-leg2-leading';
        return 'ucl-knockout-leg2-level';
      }
      if (leg1 || /round of 16|quarter[- ]?final|semi[- ]?final|knockout/.test(t)) return 'ucl-knockout-leg1';
      return 'ucl-league-stage';
    }

    if (/friendly/.test(t) && /italy|international/.test(t)) return 'friendly';
    if (/italy|international|qualifier|world cup|euro qualifier/.test(t)) return 'international';

    if (/serie a|league/.test(t)) {
      if (/title race|scudetto|points? (?:clear|behind|back)|summit|leader|six[- ]?pointer/.test(t)) return 'league-title-race';
      return 'league-regular';
    }
    return '';
  }

  function isMatchArticle(a,context){
    if (!context) return false;
    if (['post-title','title-clincher','title-potential-clincher'].includes(context)) return true;
    return /match report|preview|champions league|serie a|coppa|supercoppa|friendly|international|europe|title race/i.test(`${a.category||''} ${a.label||''}`) || !!matchResult(a);
  }

  function contextHeat(context,a){
    const explicitHeat=Number(a.commentHeat||0);
    if (explicitHeat) return Math.max(1,Math.min(5,explicitHeat));
    if (['ucl-final','title-clincher','title-potential-clincher','ucl-knockout-leg2-trailing','ucl-knockout-leg2-leading','ucl-knockout-leg2-level','supercoppa'].includes(context)) return 5;
    if (['league-title-race','ucl-knockout-leg1','coppa-final'].includes(context)) return 5;
    if (['ucl-league-stage','coppa-knockout'].includes(context)) return 4;
    if (context==='league-regular') return 2;
    return 3;
  }

  function seedRows(section,heat){
    const nodes=[...section.querySelectorAll('.fan-comment')];
    const keep=heat>=5?8:heat===4?6:4;
    return nodes.slice(0,keep).map(node=>{
      const user=(node.querySelector('.fan-comment-meta strong')?.textContent||'').replace(/^@/,'').trim();
      const txt=node.querySelector('p')?.textContent?.trim()||'';
      const badge=node.querySelector('.visitor-badge')?.textContent?.replace(/\s+FAN$/i,'').trim()||'';
      return [user,txt,badge];
    }).filter(r=>r[0]&&r[1]);
  }

  function uniqueRows(a,context,baseRows){
    const h=hash(a.id+context);
    const out=[...baseRows];
    const seen=new Set(out.map(r=>r[1]));
    let pool=[...(banks[context]||[])];
    if (isPreview(a)) pool=pool.concat(previewAdditions[context]||[]);
    const oc=outcome(a);
    if (!isPreview(a)) pool=pool.concat(outcomeAdditions[oc]||[]);

    if (pool.length) {
      const shift=h%pool.length;
      pool=pool.slice(shift).concat(pool.slice(0,shift));
    }

    const opp=opponent(a);
    const target=contextHeat(context,a)>=5?30:contextHeat(context,a)===4?24:contextHeat(context,a)===3?18:12;
    for (let i=0;i<pool.length && out.length<target;i++) {
      const txt=pool[i];
      if (seen.has(txt)) continue;
      out.push([handles[(h+i*11)%handles.length],txt,'']);
      seen.add(txt);
    }

    if (opp && out.length<target) {
      const rbank=rivalLines[isPreview(a)?'preview':oc]||rivalLines.preview;
      for (let i=0;i<rbank.length && out.length<target;i++) {
        const txt=rbank[(h+i)%rbank.length];
        if (seen.has(txt)) continue;
        out.push([rivalHandles[(h+i*7)%rivalHandles.length],txt,opp]);
        seen.add(txt);
      }
    }

    let n=0;
    while (out.length<target && n<20) {
      const oppName=opp||'them';
      const variations=[
        `The part people will remember is not just the score. It is what this ${labels[context]?.toLowerCase()||'match'} meant against ${oppName}.`,
        `Context changes everything here. Play this exact score in a different competition and the reaction is completely different.`,
        `This is why the comments cannot be copy-pasted from a normal weekend. The stakes were different before kickoff.`,
        `I am judging the decisions through the situation, not just the final score. That is the whole point of this match.`,
        `Against ${oppName}, in this spot on the calendar, every substitution carries more weight than usual.`
      ];
      const txt=variations[(h+n*3)%variations.length];
      if(!seen.has(txt)){out.push([handles[(h+n*13)%handles.length],txt,'']);seen.add(txt);}
      n++;
    }
    return out.slice(0,target);
  }

  function renderSection(a,context,rows){
    const heat=contextHeat(context,a), base=hash(a.id+context), oc=outcome(a);
    const threadLabel=labels[context]||'MATCH CONTEXT';
    return `<section class="fan-comments heat-${heat}" data-comments-for="${esc(a.id)}" data-reaction="${esc(oc)}" data-comment-context="${esc(context)}" data-context-engine="2"><div class="fan-comments-head"><div><span>CURVA COMMENTS</span><h3>What the fans are saying</h3></div><small>Fictional comments · ${esc(threadLabel)} · ${rows.length} shown</small></div><div class="fan-comments-list">${rows.map(([user,txt,visitor],i)=>{const mins=i===0?'just now':`${2+((base+i*7)%54)}m`;const votes=9+((base+i*31)%241);return `<article class="fan-comment${visitor?' visitor-comment':''}"><div class="fan-avatar">${esc((user||'?')[0].toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${esc(user)}</strong>${visitor?`<em class="visitor-badge">${esc(visitor)} FAN</em>`:''}<span>${mins}</span></div><p>${esc(txt)}</p><div class="fan-actions"><span>▲ ${votes}</span><span>Reply</span></div></div></article>`;}).join('')}</div></section>`;
  }

  let busy=false;
  function sync(){
    if (busy) return;
    const reader=document.getElementById('readerContent');
    if (!reader) return;
    const headline=reader.querySelector('#readerHeadline')?.textContent?.trim();
    if (!headline) return;
    const a=(D.articles||[]).find(x=>String(x.headline||'').trim()===headline);
    if (!a) return;
    const context=inferContext(a);
    if (!isMatchArticle(a,context)) return;
    const current=reader.querySelector('.fan-comments');
    if (!current) return;
    if (current.dataset.contextEngine==='2' && current.dataset.commentContext===context) return;
    const rows=uniqueRows(a,context,seedRows(current,contextHeat(context,a)));
    busy=true;
    current.outerHTML=renderSection(a,context,rows);
    busy=false;
  }

  const reader=document.getElementById('readerContent');
  if (reader) {
    new MutationObserver(()=>queueMicrotask(sync)).observe(reader,{childList:true,subtree:true});
    queueMicrotask(sync);
  }
  document.addEventListener('click',e=>{if(e.target.closest?.('[data-article]'))requestAnimationFrame(()=>requestAnimationFrame(sync));});
  document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.closest?.('[data-article]'))requestAnimationFrame(()=>requestAnimationFrame(sync));});
})();