(() => {
  const D = window.NAPOLI_DATA;
  if (!D || !Array.isArray(D.articles)) return;

  const article = {
    id:'italy-tonali-orsolini-injuries',
    category:'International',
    label:'Italy',
    date:'Italy · Squad Update',
    headline:'Italy Selection Hit by Tonali and Orsolini Injuries',
    dek:'Sandro Tonali and Riccardo Orsolini are unavailable through injury, forcing changes to Italy’s national-team selection.',
    tone:'news',
    commentHeat:3,
    commentContext:'italy-selection',
    body:[
      'Italy’s latest national-team selection has been hit by two injury absences, with Sandro Tonali and Riccardo Orsolini unavailable.',
      'The losses remove two experienced options from the group and force the coaching staff to adjust the squad ahead of the upcoming international fixtures.',
      'Tonali’s absence changes the midfield picture, while Orsolini being ruled out reduces Italy’s options in the wide attacking areas.',
      'Attention now turns to how the squad reshuffles and which players receive larger roles during the international window.'
    ]
  };

  D.articles = D.articles.filter(a => a.id !== article.id);
  D.articles.unshift(article);
})();