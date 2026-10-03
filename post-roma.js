(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;
  const article = {
    id:'roma-1-0-grown-up-win', category:'Match Report', label:'Serie A', date:'After Roma 0–1 Napoli', tone:'feature',
    headline:'Beier Breaks Roma, Napoli’s Back Line Does the Rest',
    dek:'Maximilian Beier struck in the 50th minute from Scott McTominay’s pass, while Meret, Bastoni, Buongiorno and the Napoli defence delivered a statement clean sheet.',
    image:'assets/beier-napoli.jpg',
    body:[
      'Napoli went to Roma needing the kind of performance title races eventually demand: patient when the match was uncomfortable, ruthless when the opening arrived, and disciplined enough to protect a one-goal lead.',
      'Roma carried the early threat. They hit the crossbar from a corner in the fifth minute and forced Alex Meret into important saves, but Alessandro Bastoni and Alessandro Buongiorno repeatedly shut down the second phase. Napoli bent without breaking.',
      'The breakthrough arrived five minutes after halftime. Scott McTominay found Maximilian Beier, and Beier supplied the finish for a 1–0 lead.',
      'From there the match became a defensive examination. Bastoni was immense, Buongiorno blocked everything in reach, and Meret completed an exceptional clean sheet as Roma searched for an equaliser that never came.',
      'Napoli saw out the final stages without panic. It was not a rout. It was something more useful in December: a grown-up away win in a major league fixture, with Juventus and the Supercoppa waiting next.'
    ]
  };
  D.articles = [article, ...(D.articles||[]).filter(a=>a.id!==article.id)];
  D.matches = (D.matches||[]).filter(m=>!(m.team==='Napoli' && m.opponent==='Roma'));
  D.matches.unshift({team:'Napoli',competition:'Serie A',date:'Dec 25',opponent:'Roma',venue:'Away',status:'FT',score:'1–0',note:"Beier 50' · Assist: McTominay · Clean sheet: Meret"});
  D.upcoming = (D.upcoming||[]).filter(m=>m.opponent!=='Roma');
})();