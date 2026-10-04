(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const article = {
    id:'napoli-3-0-como-response', category:'Match Report', label:'Serie A', date:'Napoli 3–0 Como · FT',
    headline:'Napoli Respond in Style: Endrick and Pio Shine in 3–0 Win Over Como',
    dek:'Napoli answer the difficult night in Marseille with a controlled 3–0 league win. De Bruyne opened the scoring before Endrick and Pio Esposito each finished with a goal and an assist.',
    tone:'news', commentHeat:5, reaction:'league-win', visitorClub:'COMO', commentContext:'league-title-race',
    body:[
      'Napoli produced the response they needed after the Champions League defeat in Marseille, beating Como 3–0 in a composed Serie A performance.',
      'Kevin De Bruyne opened the scoring in the 40th minute after an assist from Scott McTominay, giving Napoli a deserved 1–0 lead at halftime.',
      'De Bruyne, still managing fatigue from the disrupted Marseille trip, was replaced by Nico Paz at the interval.',
      'Napoli doubled the lead in the 50th minute when Pio Esposito played Endrick through and the Brazilian finished for 2–0.',
      'The pair combined again in the 78th minute with the roles reversed: Endrick supplied the assist and Pio Esposito scored Napoli’s third.',
      'Pio and Endrick therefore finished with one goal and one assist each, while De Bruyne scored and McTominay registered an assist.',
      'Geertruida delivered an excellent defensive performance at left back, repeatedly cutting out Como attacks, while Bastoni also produced an important early block and Meret kept the clean sheet.',
      'Inter’s dropped points mean Napoli finish the match three points clear of their title rivals at the top of Serie A.'
    ]
  };
  if (Array.isArray(D.articles)) { D.articles=D.articles.filter(a=>a.id!==article.id); D.articles.unshift(article); }
  if (Array.isArray(D.results)) { D.results=D.results.filter(r=>!(r[2]==='Serie A'&&((r[0]==='Napoli'&&r[1]==='Como')||(r[0]==='Como'&&r[1]==='Napoli')))); D.results.push(['Napoli','Como','Serie A',3,0,'W',"De Bruyne 40'; Endrick 50'; Pio Esposito 78'",'Assists: McTominay, Pio Esposito, Endrick']); }
  D.upcoming=[['Bodø/Glimt','Champions League','Jan 26'],['Bologna FC','Serie A','Jan 29']];
  D.hero={articleId:article.id,strap:'SERIE A · STATEMENT RESPONSE · NAPOLI THREE POINTS CLEAR'};
  D.ticker=['FT · NAPOLI 3–0 COMO',"DE BRUYNE 40' · ENDRICK 50' · PIO 78'",'PIO · 1 GOAL · 1 ASSIST','ENDRICK · 1 GOAL · 1 ASSIST','NAPOLI · THREE POINTS CLEAR OF INTER'];
  if(Array.isArray(D.whispers)){D.whispers=D.whispers.filter(item=>item[0]!=='Perfect Response');D.whispers.unshift(['Perfect Response','Napoli answer the Marseille defeat with a 3–0 win over Como. Endrick and Pio both record a goal and an assist, while Inter’s dropped points leave Napoli three clear at the top.']);}
  const napVoices=[['nap','Uagliù, chesta è stata ’a risposta ca vulévemo. Tre gol, porta pulita e jammo annanz.','Lads, this was the response we wanted. Three goals, a clean sheet, and we move forward.'],['it','Pio ed Endrick insieme mi stanno piacendo tantissimo. Si cercano sempre e oggi si è visto.','I am really liking Pio and Endrick together. They are always looking for each other and today it showed.'],['nap','Doppo Marsiglia servéva proprio na partita accussì. Senza paura e senza fa’ casino.','After Marseille we really needed a match like this. No fear and no unnecessary chaos.'],['it','Tre punti sopra l’Inter. Adesso niente calcoli: continuiamo a vincere.','Three points above Inter. Now no calculations: just keep winning.']];
  const italyVoices=[['it','La Nazionale viene prima di tutto. Chi entra deve essere pronto subito.','The national team comes first. Whoever comes in has to be ready immediately.'],['it','Finalmente c’è concorrenza vera per ogni maglia. Era ora.','Finally there is real competition for every shirt. About time.'],['it','Le assenze pesano, ma una squadra seria non può dipendere da due giocatori.','The absences matter, but a serious team cannot depend on two players.'],['it','Basta esperimenti infiniti. Serve continuità e bisogna qualificarsi.','Enough endless experiments. We need continuity and we have to qualify.']];
  function localiseComments(){const reader=document.getElementById('readerContent');const id=reader?.dataset.articleId;if(!id)return;const a=D.articles?.find(x=>String(x.id)===String(id));const list=reader.querySelector('.fan-comments-list');if(!a||!list||list.dataset.nativeVoices===String(id))return;const meta=`${a.category||''} ${a.label||''} ${a.commentContext||''} ${a.id||''}`.toLowerCase();const isItaly=/italy|azzurr|nazionale|international/.test(meta);const voices=isItaly?italyVoices:napVoices;const rows=[...list.querySelectorAll('.fan-comment')];const slots=isItaly?[0,2,4,6]:[1,3,5,7];slots.forEach((slot,i)=>{const row=rows[slot];if(!row)return;const p=row.querySelector('p');if(!p)return;const[lang,text,en]=voices[i%voices.length];p.textContent=text;p.setAttribute('lang',lang);row.dataset.englishTranslation=en;row.dataset.nativeComment='1';});list.dataset.nativeVoices=String(id);}
  document.addEventListener('seasonroom:comments-rendered',()=>localiseComments());

  // Load the permanent non-match policy. It replaces generic match reactions on features,
  // awards, transfers, injuries, opinion/editorial, dressing-room and other news stories.
  if(!document.querySelector('script[data-nonmatch-comments]')){const s=document.createElement('script');s.src='comments-nonmatch-policy.js?v=20261003-67';s.dataset.nonmatchComments='1';document.head.appendChild(s);}
})();