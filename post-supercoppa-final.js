(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const finalStory = {
    id:'inter-supercoppa-final-2-1', category:'Match Report', label:'Supercoppa Final', date:'January 3, 2028', tone:'loss',
    headline:'Napoli Fall Short as Inter Lift the Supercoppa',
    dek:'A heavily rotated Napoli side fought back through Nico Paz and pushed Inter to the final whistle, but a 2–1 defeat leaves the first trophy of the project just out of reach.',
    body:['Inter are Supercoppa champions after beating Napoli 2–1 in a final shaped by fixture congestion, early pressure and a furious late Napoli response.','With the squad still carrying fatigue from the semifinal and AC Milan waiting just two days later, Stefan Saladino was forced into heavy rotation. Inter took control early and opened the scoring in the 17th minute before doubling the advantage in the 50th.','Napoli refused to fold. Nico Paz pulled one back in the 71st minute from Scott McTominay, and the closing stages became a siege. Federico Chiesa beat Dimarco and struck the post, Alphonso Davies had an effort blocked, and Paz plus Pio Esposito were both denied in a frantic final sequence.','The equalizer never came. Inter took the trophy.'],
    commentHeat:5, reaction:'big-loss', visitorClub:'INTER'
  };
  const story = {
    id:'milan-1-2-napoli-top', category:'Match Report', label:'Serie A', date:'January 5, 2028', tone:'win',
    headline:'Napoli Beat Milan and Go Top as Inter Stumble',
    dek:'Beier and Esposito deliver a 2–1 win at Milan, Bologna beat Inter, and Napoli finish the round first in Serie A on 44 points.',
    body:['Napoli are top of Serie A after a huge swing at the summit. A 2–1 away win over AC Milan, combined with Inter’s defeat to Bologna, moves Stefan Saladino’s side into first place on 44 points.','Maximilian Beier opened the scoring in the 18th minute from Pio Esposito before Esposito reacted first to a Maignan spill in the 23rd for his 10th league goal of the campaign. Milan pulled one back through Jimenez after the break, but Napoli managed the closing stages to secure all three points.','The result was particularly significant after the Supercoppa final defeat to Inter only two days earlier. With fatigue forcing careful rotation, Napoli responded immediately in the league and turned a two-point deficit to Inter into a one-point lead.','The table now reads Napoli 44, Inter 43, Milan 39, Roma 38, with Lazio and Juventus both on 34. January remains congested, but Napoli now have the position everyone else wants.'],
    commentHeat:5, reaction:'statement-win', visitorClub:'MILAN'
  };
  D.articles=[story,finalStory,...(D.articles||[]).filter(a=>a.id!==story.id&&a.id!==finalStory.id)];
  D.hero={...(D.hero||{}),articleId:story.id,strap:'NAPOLI TOP OF SERIE A · 44 POINTS'};
  D.upcoming=(D.upcoming||[]).filter(x=>String(x[0]).toLowerCase()!=='ac milan');
  D.ticker=['NAPOLI TOP · 44 PTS','INTER 43 · MILAN 39 · ROMA 38','MILAN 1–2 NAPOLI · BEIER 18’ · ESPOSITO 23’','PIO ESPOSITO · 10 SERIE A GOALS'];
  if(Array.isArray(D.whispers)){D.whispers=D.whispers.filter(item=>!['Silverware Next','Supercoppa Fallout','Top of the Table'].includes(item[0]));D.whispers.unshift(['Top of the Table','Inter lost to Bologna. Napoli’s win at Milan sends Saladino’s side top on 44 points, one clear of Inter.']);}
})();