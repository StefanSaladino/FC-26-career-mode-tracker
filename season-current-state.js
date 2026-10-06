(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  // Canonical current-state snapshot. FC26 / manager-confirmed data wins over
  // older post files. Keep this file limited to durable current facts so it
  // cannot accidentally resurrect an obsolete fixture list later in the save.
  D.leagueSnapshot = {
    played: 35,
    wins: 26,
    draws: 9,
    losses: 0,
    points: 87,
    position: 1,
    status: 'Serie A champions',
    remaining: 3,
    unbeaten: true
  };

  D.seasonState = {
    ...(D.seasonState || {}),
    league: {
      played: 35,
      w: 26,
      d: 9,
      l: 0,
      points: 87,
      remaining: 3,
      status: 'Serie A champions',
      unbeaten: true
    },
    ucl: {
      stage: 'Final',
      opponent: 'Paris Saint-Germain',
      status: 'First Champions League final in Napoli history'
    },
    coppaItalia: {
      stage: 'Final',
      opponent: 'Roma'
    }
  };

  // Official running totals through Napoli 2–0 Barcelona.
  D.stats = [
    ['Pio Esposito',25,10,'Official running total · includes friendlies'],
    ['Maximilian Beier',22,11,'Official running total · includes friendlies'],
    ['Endrick',14,9,'Official running total · includes friendlies'],
    ['Nico Paz',6,8,'Official running total · includes friendlies'],
    ['Federico Chiesa',6,4,'Official running total · includes friendlies'],
    ['Alphonso Davies',4,5,'Official running total · includes friendlies'],
    ['Kevin De Bruyne',3,4,'Official running total · includes friendlies'],
    ['Scott McTominay',2,7,'Official running total · includes friendlies'],
    ['Alessandro Bastoni',1,0,'Official running total · includes friendlies'],
    ['Sam Beukema',1,0,'Official running total · includes friendlies'],
    ['Anton Stach',0,1,'Official running total · includes friendlies'],
    ['Lutsharel Geertruida',0,1,'Official running total · includes friendlies'],
    ['Noa Lang',0,1,'Official running total · includes friendlies'],
    ['Mikey Moore',0,1,'Official running total · includes friendlies'],
    ['Michael Kayode',0,1,'Official running total · includes friendlies'],
    ['Billy Gilmour',0,1,'Season contribution · officially sold']
  ];
  D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  D.statsScope = 'All Napoli matches · friendlies included · updated through Napoli 2–0 Barcelona, Champions League semifinal';

  // Preserve the Italy injury article's comment routing if this layer is used.
  const injury = Array.isArray(D.articles) && D.articles.find(a => a.id === 'italy-tonali-orsolini-injuries');
  if (injury) {
    injury.commentDomain = 'italy';
    injury.commentContext = 'italy-selection-injuries';
    injury.reaction = 'selection-news';
    injury.visitorClub = 'NONE';
    injury.commentHeat = 3;
  }
})();