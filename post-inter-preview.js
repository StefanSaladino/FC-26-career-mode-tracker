(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const article = {
    id:'inter-title-race-preview',
    category:'Preview',
    label:'Title Race',
    date:'Ahead of Inter · Oct 28',
    headline:'Four Points Back, One Night to Change the Race: Inter Is Next',
    dek:'Inter arrive four points clear at the top of Serie A. Napoli come in off a 1–0 Champions League win over Chelsea knowing victory would cut the gap to one and drag the leaders straight back into a fight.',
    image:null,
    tone:'breaking',
    commentHeat:5,
    reaction:'rivalry',
    visitorClub:'INTER',
    commentContext:'league-title-race',
    body:[
      'The European statement is banked. Now the pressure shifts directly onto the Serie A table.',
      'Inter enter the Oct 28 match four points ahead of Napoli at the summit. That makes the arithmetic unusually sharp: a Napoli win cuts the gap to one point, a draw leaves it at four, and an Inter win stretches the separation to seven.',
      'Napoli arrive with momentum after beating Chelsea 1–0 in the Champions League, a match decided by Pio Esposito from Alphonso Davies’ run and preserved by Alex Meret deep into stoppage time. The result mattered in Europe, but the challenge now is carrying that same control and nerve into the domestic title race.',
      'There is no rotation argument this time. Napoli have five days between Chelsea and Inter, and the strongest available XI is expected to be used. Pio’s recent run makes him impossible to leave out, while Davies, Endrick and Nico Paz give Napoli the transition threat that hurt Chelsea.',
      'Inter hold the advantage and therefore do not need to chase the match recklessly. Napoli cannot afford to play with desperation either. The opportunity is to make the leaders defend the pressure of the table while still respecting the danger of opening the game too early.',
      'It is not a title decider in October. It is, however, the first match this season where the shape of the race can change dramatically in ninety minutes.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  D.ticker = [
    "FT · NAPOLI 1–0 CHELSEA · PIO 43'",
    'INTER · FOUR POINTS CLEAR · OCT 28',
    'SERIE A · WIN CUTS THE GAP TO ONE',
    'TITLE RACE · FULL-STRENGTH NAPOLI EXPECTED'
  ];

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => item[0] !== 'Title Race Pressure');
    D.whispers.unshift(['Title Race Pressure','Inter are four points clear. Napoli can cut the gap to one with a win on Oct 28; defeat would stretch it to seven.']);
  }
})();