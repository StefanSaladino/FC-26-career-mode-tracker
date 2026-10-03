(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  // Single current-state override. Keep schedule, table snapshot and official stats together.
  D.leagueSnapshot = { played: 21, points: 51, position: 1, interPoints: 50 };

  D.upcoming = [
    ['Marseille','Champions League','Next'],
    ['Como','Serie A','Jan 23'],
    ['Bodø/Glimt','Champions League','Jan 26'],
    ['Bologna FC','Serie A','Jan 29']
  ];

  D.stats = [
    ['Pio Esposito',17,7,'Official running total · includes friendlies'],
    ['Maximilian Beier',10,4,'Official running total · includes friendlies'],
    ['Endrick',6,5,'Official running total · includes friendlies'],
    ['Nico Paz',2,7,'Official running total · includes friendlies'],
    ['Kevin De Bruyne',2,1,'Official running total · includes friendlies'],
    ['Alphonso Davies',2,2,'Official running total · includes friendlies'],
    ['Federico Chiesa',2,1,'Official running total · includes friendlies'],
    ['Scott McTominay',1,3,'Official running total · includes friendlies'],
    ['Alessandro Bastoni',1,0,'Official running total · includes friendlies'],
    ['Anton Stach',1,1,'Official running total · includes friendlies'],
    ['Billy Gilmour',0,1,'Official running total · includes friendlies'],
    ['Mikey Moore',0,1,'Official running total · includes friendlies'],
    ['Noa Lang',0,1,'Official running total · includes friendlies']
  ];
  D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  D.statsScope = 'All Napoli matches · friendlies included · updated through Napoli 2–1 Juventus';

  const injury = Array.isArray(D.articles) && D.articles.find(a => a.id === 'italy-tonali-orsolini-injuries');
  if (injury) {
    injury.commentDomain = 'italy';
    injury.commentContext = 'italy-selection-injuries';
    injury.reaction = 'selection-news';
    injury.visitorClub = 'NONE';
    injury.commentHeat = 3;
  }
})();