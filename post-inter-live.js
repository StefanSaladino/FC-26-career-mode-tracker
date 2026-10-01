(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const article = {
    id:'inter-live-bastoni-header',
    category:'Match Report',
    label:'Title Race',
    date:'Inter 1–1 Napoli · FT',
    headline:'Point Taken in Milan: Napoli Hold Inter to 1–1 in the Title-Race Clash',
    dek:'Alessandro Bastoni headed Napoli in front from a Federico Chiesa corner, Buongiorno produced a goal-saving tackle, but Inter found an equaliser and the four-point gap at the top remains unchanged.',
    image:'assets/bastoni-napoli.jpg',
    objectPosition:'50% 30%',
    objectFit:'cover',
    tone:'feature',
    commentHeat:5,
    reaction:'rivalry',
    visitorClub:'INTER',
    commentContext:'league-title-race',
    body:[
      'Napoli leave Milan with a point after a 1–1 draw against Serie A leaders Inter in the biggest domestic match of the season so far.',
      'Napoli struck first from a set piece. Federico Chiesa delivered the corner and Alessandro Bastoni rose to power the header home against his former club, giving Napoli the lead in a match with the top of the table hanging over every phase.',
      'The advantage came under immediate pressure. Alessandro Buongiorno produced a goal-saving tackle as Inter pushed for a response, preserving the lead at a moment when the match looked ready to swing.',
      'Inter eventually found the equaliser, and neither side could force the decisive second goal. The result means the four-point gap between Inter and Napoli remains intact rather than dropping to one.',
      'For Napoli, there is frustration in surrendering a lead but also value in taking a point away from the league leaders. Coming off the 1–0 win at Chelsea, the side has now gone into two heavyweight away fixtures and avoided defeat in both.',
      'The latest gameplay clip is attached to this story and the Media section, capturing the intensity of a title-race match that finished level.',
      'Attention now shifts to the December run: Lecce on Dec 5, RB Salzburg in the Champions League on Dec 8, and Juventus on Dec 12 with Juve sitting one point behind Napoli.'
    ]
  };

  if (Array.isArray(D.articles)) {
    D.articles = D.articles.filter(a => a.id !== article.id);
    D.articles.unshift(article);
  }

  if (Array.isArray(D.upcoming)) D.upcoming = D.upcoming.filter(row => row[0] !== 'Inter');

  if (Array.isArray(D.results)) {
    const existing = D.results.findIndex(r => r[0] === 'Napoli' && r[1] === 'Inter' && r[2] === 'Serie A');
    const row = ['Napoli','Inter','Serie A',1,1,'D','Alessandro Bastoni','Bastoni header from Chiesa corner; Buongiorno goal-saving tackle; title-race gap stays at four'];
    if (existing >= 0) D.results[existing] = row; else D.results.push(row);
  }

  D.hero = {articleId:article.id,strap:'POINT TAKEN IN MILAN. THE GAP STAYS FOUR.'};

  D.ticker = [
    'FT · INTER 1–1 NAPOLI',
    'BASTONI HEADER · CHIESA ASSIST',
    'BUONGIORNO · GOAL-SAVING TACKLE',
    'TITLE RACE · FOUR-POINT GAP UNCHANGED',
    'NEXT · LECCE · DEC 5'
  ];

  if (Array.isArray(D.whispers)) {
    D.whispers = D.whispers.filter(item => !['Live Title-Race Swing','Buongiorno Rescue','Title-Race Draw'].includes(item[0]));
    D.whispers.unshift(
      ['Title-Race Draw','Napoli led through Bastoni but Inter equalised. The 1–1 away draw leaves Inter four points clear at the top.'],
      ['Buongiorno Rescue','Buongiorno produced a goal-saving tackle during the match, one of the defining defensive moments of the night.']
    );
  }

  if (Array.isArray(D.stats)) {
    let hasBastoni = false;
    D.stats = D.stats.map(row => {
      if (row[0] === 'Alessandro Bastoni') {
        hasBastoni = true;
        return ['Alessandro Bastoni',Math.max(1,Number(row[1]||0)),Number(row[2]||0),'Header in the 1–1 away draw at Inter.'];
      }
      if (row[0] === 'Federico Chiesa') return ['Federico Chiesa',1,2,'Winner vs Pisa; assists on De Bruyne vs Fiorentina and Bastoni vs Inter.'];
      return row;
    });
    if (!hasBastoni) D.stats.push(['Alessandro Bastoni',1,0,'Header in the 1–1 away draw at Inter.']);
    D.stats.sort((a,b)=>(b[1]-a[1])||(b[2]-a[2])||String(a[0]).localeCompare(String(b[0])));
  }

  if (Array.isArray(D.media)) {
    D.media = D.media.filter(item => item.articleId !== article.id);
    D.media.unshift({type:'image',title:'Bastoni Scores in Milan',src:'assets/bastoni-napoli.jpg',tag:'FT · Inter 1–1 Napoli',objectPosition:'50% 30%',objectFit:'cover',articleId:article.id});
  }
})();