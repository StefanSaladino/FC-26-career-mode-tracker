(() => {
  const D = window.NAPOLI_DATA;
  if (!D || !Array.isArray(D.articles)) return;

  const pieces = [
    {
      id:'opinion-fortress-needs-goals', category:'Opinion', label:'THE PRESS BOX · Marco Bellini', date:'December 2027 · Column',
      headline:'Napoli Have Built a Fortress. So Why Does Every Goal Feel Like Work?',
      dek:'Eight league goals conceded in 15 matches should feel like the foundation of a title charge. Instead, Napoli keep asking an extraordinary defence to live on the thinnest margins.',
      image:'assets/bastoni-buongiorno-napoli.jpg', objectPosition:'50% 28%', objectFit:'cover', tone:'opinion', commentHeat:5,
      body:[
        'There is a strange contradiction at the centre of Napoli’s season. This is a team defending like a champion and, too often, attacking like it is still trying to discover what kind of team it wants to be.',
        'Eight goals conceded through 15 Serie A matches is not merely good. It is the sort of defensive record that should let an attack breathe. Bastoni and Buongiorno have turned the centre of the pitch into hostile territory, Kayode can recover ground that should not be recoverable, and Meret has repeatedly supplied the save when the structure finally bends.',
        'Yet Napoli have spent too many evenings making one goal feel like a weekly engineering project. The consecutive scoreless draws with Lazio and Genoa were the obvious warning, but even some of the wins have carried the same tension: create the lead, protect it, and ask the back line to make it sacred.',
        'That is why irritation around the attack is not ingratitude. Supporters can appreciate a title race and still ask why this much attacking talent so rarely turns control into separation.',
        'Pio Esposito has covered some of the cracks with an extraordinary run of decisive goals. Maximilian Beier contributes more between the boxes than his recent scoring numbers suggest. Davies can turn one carry into a crisis. Paz sees passes other players do not. Chiesa and Endrick can change the temperature of a match from the bench. The ingredients exist.',
        'The question is whether Napoli can turn those ingredients into a repeatable attacking identity before the defence finally has an ordinary night. Because at some point Bastoni will lose a duel. Meret will not make the save. A deflection will go in. Champions need to survive those nights too.',
        'The defence has already done its part. It is time for the attack to make two goals feel normal.'
      ]
    },
    {
      id:'opinion-two-points-conversation', category:'Column', label:'TABLE WATCH · Elena Russo', date:'December 2027 · Column',
      headline:'Five Points Back, One Game in Hand — Napoli Are Closer Than the Noise Suggests',
      dek:'Inter’s latest draw leaves Napoli five points behind with a match in hand. Win it and the emotional temperature around this team suddenly looks very different.',
      image:'assets/stadio-maradona-night.jpg', objectPosition:'50% 45%', objectFit:'cover', tone:'opinion', commentHeat:4,
      body:[
        'Listen to Naples for long enough and you might think the season is wobbling. Look at the table and the argument becomes harder to sustain.',
        'Inter have 40 points from 16 matches. Napoli have 35 from 15. The arithmetic is uncomplicated: win the game in hand and the gap is two points with the schedule level.',
        'None of that erases the attacking concerns. It does, however, put them in context. Napoli have been offensively inconsistent without becoming competitively inconsistent. That distinction matters.',
        'The 1–0 win in Turin was the kind of result title challengers store away for spring. The draw with Inter kept the leaders within reach. Even the frustrating nights have generally been protected by a defence that refuses to let bad attacking performances become defeats.',
        'There is pressure here, but there is also opportunity. Napoli do not need a rescue operation. They need improvement in the final third while continuing to do almost everything else at a very high level.',
        'If the game in hand becomes three points, the conversation changes from “why are Napoli struggling?” to “why are Napoli only two points off the top while still waiting for their attack to click?”',
        'Those are very different questions. The table has a way of editing the mood.'
      ]
    },
    {
      id:'opinion-pio-dependence', category:'Opinion', label:'FORWARD LINE · Davide Ferraro', date:'December 2027 · Opinion',
      headline:'The Pio Problem Is a Wonderful Problem — Until Napoli Become Dependent on Him',
      dek:'Pio Esposito has become Napoli’s favourite answer to difficult matches. The danger is allowing a breakout season to become an attacking system.',
      image:'assets/pio-napoli.webp', objectPosition:'50% 24%', objectFit:'cover', tone:'opinion', commentHeat:5,
      body:[
        'There are worse problems than having a young centre-forward who keeps scoring important goals. Napoli would happily accept several more of them.',
        'Pio Esposito has become the emotional centre of this season because his goals arrive with timing attached. Arsenal in stoppage time. Chelsea. Salzburg. Juventus. He does not merely score; he keeps appearing when matches become uncomfortable.',
        'That is how cult heroes are made. It is also how dependency begins.',
        'Napoli cannot allow “find Pio” to become the answer every time possession slows down. His emergence should expand the attack, not excuse everybody around him from producing. Beier must remain a scoring threat as well as a connector. Paz has to turn invention into regular final-third production. The wide players need to make opponents defend more than one route to goal.',
        'There is also a developmental responsibility here. Pio is still becoming the player supporters are already treating as finished. Asking him to carry the decisive action every week is flattering right up until it becomes unfair.',
        'Enjoy the goals. Sing the songs. Print the shirts. But build an attack where Pio is the sharpest weapon, not the emergency button.'
      ]
    },
    {
      id:'opinion-beier-case', category:'Opinion', label:'COUNTERPOINT · Sofia Esposito', date:'December 2027 · Counterpoint',
      headline:'Beier Is Doing More Than the Goals Column Says. Eventually, That Won’t Be Enough.',
      dek:'Napoli rejected a €204 million approach from Barcelona because Beier is central to the project. That makes both the defence of his game and the demand for more goals reasonable.',
      image:'assets/beier-napoli.jpg', objectPosition:'50% 25%', objectFit:'cover', tone:'opinion', commentHeat:5,
      body:[
        'Maximilian Beier has become the easiest Napoli attacker to argue about because both sides of the argument are right.',
        'Watch only the scoring column and the frustration makes sense. Napoli rejected an enormous Barcelona approach because Beier was considered foundational. Foundational forwards are eventually judged by goals.',
        'Watch the matches more closely and the picture becomes less convenient. Beier has repeatedly connected attacks, created space for Pio, and supplied assists in matches where Napoli’s shape would otherwise have become static. His pass for Pio against Salzburg was another example of contribution that does not look like a striker dominating a scoresheet but still changes the match.',
        'The Cagliari goal mattered because it interrupted the argument. For once, the useful work and the visible reward arrived together.',
        'But one goal does not settle it. Beier should not be sold because he went through a dry spell, and supporters should not be told the dry spell is irrelevant because his movement is intelligent.',
        'Napoli said no to Barcelona because they believe there is a star here. The fairest expectation is simple: keep doing the difficult work, and start finishing more of it.'
      ]
    },
    {
      id:'opinion-defensive-identity', category:'Tactics', label:'TACTICAL ROOM · Luca Vitale', date:'December 2027 · Analysis',
      headline:'Bastoni and Buongiorno Are Quietly Becoming the Story of Napoli’s Season',
      dek:'The forwards own the clips. The centre-backs own the margins. Napoli’s title challenge is being built on a partnership that rarely needs to announce itself.',
      image:'assets/bastoni-buongiorno-napoli.jpg', objectPosition:'50% 30%', objectFit:'cover', tone:'analysis', commentHeat:4,
      body:[
        'The best defensive partnerships eventually develop a strange invisibility. You stop noticing individual interventions because attacks simply stop becoming chances.',
        'That is where Alessandro Bastoni and Alessandro Buongiorno are heading.',
        'Bastoni gives Napoli aggression without sacrificing progression. He can step forward, carry, pass through pressure and still recover into the line. Buongiorno provides the counterweight: duel strength, penalty-area authority and the kind of uncomplicated defending that becomes more valuable as matches get uglier.',
        'Together they allow the rest of the team to take risks. Davies can advance. Kayode can attack space. Midfielders can squeeze higher because the centre-backs behind them are comfortable defending large areas.',
        'Eight league goals conceded in 15 matches is the statistical headline. The more important tactical point is what that number permits. Napoli can win while searching for attacking form because the defence keeps the required score so low.',
        'Pio will get the murals if the goals keep coming. Bastoni and Buongiorno may be the reason those goals are enough.'
      ]
    },
    {
      id:'curva-right-to-be-irritated', category:'Curva View', label:'CURVA VIEW · Gennaro ’O Critico', date:'December 2027 · From the stands',
      headline:'Yes, We’re in the Title Race. The Curva Still Has Every Right to Be Irritated.',
      dek:'Being five points off Inter with a game in hand does not require supporters to pretend every attacking performance has been acceptable.',
      image:'assets/stadio-maradona-night.jpg', objectPosition:'50% 42%', objectFit:'cover', tone:'opinion', commentHeat:5,
      body:[
        'Here comes the lecture: Napoli are in the title race, the defence is brilliant, Pio is scoring, so everybody in the stands should smile politely and stop complaining.',
        'No.',
        'Supporters are allowed to hold two thoughts at once. This is a very good Napoli team. This Napoli team should score more goals.',
        'We have watched Bastoni and Buongiorno defend one-goal leads like their families are locked inside the penalty area. We have watched Meret turn late chances away. We have watched Pio produce the one moment that saves another night. Eventually you start asking why every match needs to become a referendum on our blood pressure.',
        'The talent is not the issue. That is precisely why the frustration exists. Davies, Paz, Beier, Chiesa, Endrick, De Bruyne, McTominay and Pio is not an attack that should spend this much time negotiating with the first goal.',
        'Nobody is asking for five every weekend. Two would be lovely. Occasionally three, just to remember what relaxation feels like.',
        'We will sing. We will believe. We will check Inter’s score every ten minutes. And if Napoli spend another hour circulating the ball outside a low block without shooting, we will complain loudly because that is also part of the arrangement.'
      ]
    }
  ];

  const ids = new Set(pieces.map(x => x.id));
  D.articles = D.articles.filter(a => !ids.has(a.id));
  // Keep the latest match report as the lead story; editorial follows immediately beneath it.
  const lead = D.articles.shift();
  D.articles = lead ? [lead, ...pieces, ...D.articles] : [...pieces, ...D.articles];

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(w => w[0] !== 'Press Box Temperature');
    D.whispers.unshift(['Press Box Temperature','The defensive record is earning admiration; the attack is earning questions. With Inter five points ahead having played one more, Napoli are close enough that every dropped attacking point feels expensive.']);
  }
})();
