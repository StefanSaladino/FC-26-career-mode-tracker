(() => {
  const D = window.NAPOLI_DATA;
  if (!D || !Array.isArray(D.articles)) return;

  const azzurriCrest = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/640px-Flag_of_Italy.svg.png';

  const pieces = [
    {
      id:'italy-scotland-esposito-3-0', category:'Italy', label:'AZZURRI MATCH REPORT · Carlo Ferri', date:'After Italy 3–0 Scotland · Friendly',
      headline:'Esposito Twice, Tonali Once: Italy Put Three Past Scotland and the Mood Is Changing',
      dek:'Sebastiano Esposito scored twice and Sandro Tonali added the third as Italy followed another clean sheet with their most emphatic result of the recent run.',
      image:azzurriCrest, objectFit:'contain', objectPosition:'50% 50%', tone:'feature', commentHeat:5, commentContext:'editorial',
      body:[
        'Italy have spent years asking supporters for patience. Against Scotland, they finally gave them something simpler: goals.',
        'Sebastiano Esposito scored twice and Sandro Tonali added another in a 3–0 win that continued the clean-sheet habit while showing a more ruthless side of Stefan Saladino’s team.',
        'The significance is not that Scotland were beaten in a friendly. It is the shape of the result. Italy have already shown they can control matches and protect narrow leads. Three goals offered evidence that the rebuild may have another gear when the attacking pieces connect.',
        'For Esposito, the brace complicates the forward conversation in the best possible way. Pio Esposito has been forcing his way into the Napoli and Italy story with decisive goals of his own. Sebastiano answering with two for the national team gives Saladino genuine competition rather than a ceremonial depth chart.',
        'Tonali’s goal added another encouraging layer. Italy cannot rebuild around one striker or one club pipeline; production from established internationals matters just as much as the emerging Napotalia core.',
        'Nobody should mistake a friendly for qualification. But after three consecutive missed World Cups in this universe, confidence has to be rebuilt somewhere. A 3–0 win with another clean sheet is a useful place to continue.'
      ]
    },
    {
      id:'italy-south-africa-pio-1-0', category:'Italy', label:'AZZURRI MATCH REPORT · Francesca Leone', date:'After Italy 1–0 South Africa · Friendly',
      headline:'Pio Does It for Italy Too: Esposito Delivers the Goal in a 1–0 Win Over South Africa',
      dek:'The same young striker becoming Napoli’s emergency answer carried the habit into international duty, scoring the only goal as Italy kept another clean sheet.',
      image:azzurriCrest, objectFit:'contain', objectPosition:'50% 50%', tone:'feature', commentHeat:5, commentContext:'editorial',
      body:[
        'Apparently the shirt does not change the habit. Pio Esposito scored, Italy won, and another match ended with the opposition on zero.',
        'The 1–0 victory over South Africa will not live forever in Azzurri folklore, but Pio’s goal matters because of the larger pattern developing around him. At Napoli he has become the player supporters expect to appear when a match needs one decisive action. Now that reputation is following him into the national team.',
        'There is an obvious warning inside the praise. Italy cannot simply reproduce Napoli’s dependence on Pio and call it a national-team solution. Saladino needs multiple routes to goal, particularly against compact opponents where one moment can become the entire match.',
        'Still, international teams are built partly on players who arrive believing they will decide something. Pio currently carries that belief everywhere.',
        'Another clean sheet also strengthens the clearest identity of the Saladino era so far. Italy are becoming difficult to score against before they have become consistently easy to watch. Given the recent history of the national side, solidity is a reasonable first brick.'
      ]
    },
    {
      id:'italy-esposito-brothers-debate', category:'Italy', label:'PUNDIT DESK · Alessia Conti', date:'After Scotland & South Africa · Debate',
      headline:'Two Espositos, One No. 9 Conversation — Italy Suddenly Have a Striker Debate Worth Having',
      dek:'Pio scored against South Africa. Sebastiano answered with a brace against Scotland. After years of searching for reliable attacking answers, Italy may finally have competition rather than desperation.',
      image:azzurriCrest, objectFit:'contain', objectPosition:'50% 50%', tone:'opinion', commentHeat:5, commentContext:'editorial',
      body:[
        'For years, Italian striker debates have too often sounded like an inventory of what the national team lacked. This one feels different.',
        'Pio Esposito scored the winner against South Africa after building a reputation for decisive goals at Napoli. Sebastiano Esposito then scored twice in the 3–0 win over Scotland. Suddenly the conversation is not “who can survive at centre-forward?” but “who has earned the next start?”',
        'Pio offers power, penalty-box presence and an increasingly absurd appetite for important moments. Sebastiano has now supplied the kind of international brace that demands another look. Neither performance should settle the hierarchy by itself.',
        'That is the point. Healthy national teams do not need a permanent answer in December. They need several convincing ones.',
        'Saladino’s challenge is to resist turning club familiarity into automatic selection. Pio may be his Napoli striker, but the Italy shirt has to remain an open competition. Sebastiano just made sure it will.'
      ]
    },
    {
      id:'italy-five-match-temperature', category:'Italy', label:'STATE OF THE AZZURRI · Matteo Rinaldi', date:'December 2027 · Analysis',
      headline:'Four Wins, a Draw and a Wall at the Back: Italy Are Giving the Skeptics Less to Work With',
      dek:'South Africa, Scotland, Iceland, Wales and France now form a five-match picture: four wins, one draw, and a national side beginning to look structurally credible again.',
      image:azzurriCrest, objectFit:'contain', objectPosition:'50% 50%', tone:'analysis', commentHeat:4, commentContext:'editorial',
      body:[
        'One result can be dismissed. A sequence starts demanding interpretation.',
        'Italy’s recent ledger now includes wins over South Africa, Scotland, Iceland and France, plus the scoreless draw with Wales. The opponents and stakes vary, so the results should not be flattened into one grand declaration. But the direction is increasingly difficult to ignore.',
        'The defensive consistency is the clearest feature. Saladino has built a side that expects to control space and make opponents work for clean chances. The Scotland performance then supplied the attacking release critics had been waiting to see.',
        'Meanwhile Italy remain top of their EURO qualifying group. That matters more than any friendly approval rating. After three consecutive World Cups missed in this universe, tournament qualification is not administrative housekeeping; it is the first credibility test of the entire project.',
        'The skeptics still have legitimate questions about chance creation, Napoli influence and whether friendly form will survive competitive pressure. They simply have fewer easy arguments than they did a few months ago.',
        'Saladino has not restored Italy. He has, however, made restoration look plausible enough that the country can start arguing about football again instead of only arguing about failure.'
      ]
    }
  ];

  const ids = new Set(pieces.map(p => p.id));
  D.articles = D.articles.filter(a => !ids.has(a.id));
  const insertAt = Math.min(5, D.articles.length);
  D.articles.splice(insertAt, 0, ...pieces);

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(w => w[0] !== 'Esposito Competition');
    D.whispers.unshift(['Esposito Competition','Pio scored against South Africa; Sebastiano answered with two against Scotland. Italy suddenly have a genuine No. 9 selection argument.']);
  }
})();