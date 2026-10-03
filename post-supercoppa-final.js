(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const story = {
    id:'inter-supercoppa-final-2-1', category:'Match Report', label:'Supercoppa Final', date:'January 3, 2028', tone:'loss',
    headline:'Napoli Fall Short as Inter Lift the Supercoppa',
    dek:'A heavily rotated Napoli side fought back through Nico Paz and pushed Inter to the final whistle, but a 2–1 defeat leaves the first trophy of the project just out of reach.',
    body:[
      'Inter are Supercoppa champions after beating Napoli 2–1 in a final shaped by fixture congestion, early pressure and a furious late Napoli response.',
      'With the squad still carrying fatigue from the semifinal and AC Milan waiting just two days later, Stefan Saladino was forced into heavy rotation. Inter took control early and opened the scoring in the 17th minute before doubling the advantage in the 50th.',
      'Napoli refused to fold. Nico Paz pulled one back in the 71st minute from Scott McTominay, and the closing stages became a siege. Federico Chiesa beat Dimarco and struck the post, Alphonso Davies had an effort blocked, and Paz plus Pio Esposito were both denied in a frantic final sequence.',
      'The equalizer never came. Inter took the trophy, while Napoli leave the final without silverware but with little time to dwell on it: AC Milan away in Serie A is next on January 5.'
    ],
    commentHeat:5, reaction:'big-loss', visitorClub:'INTER'
  };

  D.articles = [story, ...(D.articles||[]).filter(a=>a.id!==story.id)];
  D.hero = {...(D.hero||{}), articleId:story.id, strap:'SUPERCOPPA FINAL · INTER 2–1 NAPOLI'};
  D.upcoming = (D.upcoming||[]).filter(x=>!(String(x[0]).toLowerCase()==='inter' && String(x[1]).toLowerCase().includes('supercoppa')));
  D.ticker = ['INTER 2–1 NAPOLI · SUPERCOPPA FINAL','PAZ 71’ · McTOMINAY ASSIST','JAN 5 · AC MILAN AWAY · SERIE A','NAPOLI SECOND · TWO POINTS OFF INTER'];

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => !['Silverware Next','Supercoppa Fallout'].includes(item[0]));
    D.whispers.unshift(['Supercoppa Fallout','Inter took the trophy 2–1, but Napoli nearly forced the final level after Paz scored and Chiesa hit the post. Milan away arrives in two days.']);
  }
})();