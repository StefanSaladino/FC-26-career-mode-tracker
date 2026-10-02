(() => {
  const D = window.NAPOLI_DATA;
  if (!D || !Array.isArray(D.articles)) return;

  const italyIds = new Set(['italy-saladino-turnaround','italy-france-approval','italy-wales-warning','italy-napotalia-question','italy-scotland-statement','italy-south-africa-pio','italy-esposito-nine-debate','italy-state-of-azzurri']);
  const articleIt = {
    'italy-saladino-turnaround':{headline:'Tre Mondiali saltati. Italia prima nel girone EURO. Saladino può davvero cambiare tutto?',dek:'Il trauma non è sparito, ma finalmente i segnali vanno nella direzione giusta: gli Azzurri guidano il girone di qualificazione e stanno ritrovando solidità, risultati e un minimo di fiducia.',body:['Il calcio italiano si è guadagnato questa diffidenza. Tre Mondiali consecutivi mancati non si cancellano con un buon autunno o con una vittoria in amichevole.','Questo è il peso ereditato da Stefan Saladino: non basta qualificarsi, bisogna convincere un Paese intero che partecipare ai grandi tornei possa tornare ad essere normale.','I primi segnali sono incoraggianti. L’Italia è prima nel girone EURO e la recente serie di risultati ha restituito solidità alla squadra.','La vittoria contro la Francia cambia il tono. Non cancella nulla, ma battere una grande nazionale senza subire gol offre qualcosa di più utile dell’ottimismo: una prova concreta.','Lo scetticismo resta legittimo. Il vero standard è tornare ai grandi tornei e comportarsi da Italia quando si arriva lì.','Per la prima volta da tempo, però, la domanda sta cambiando: non solo “come siamo caduti così in basso?”, ma “e se fosse davvero l’inizio della risalita?”']},
    'italy-france-approval':{headline:'Battere la Francia non cancella il passato. Ma dà a Saladino una cosa che mancava: credibilità.',dek:'Il Galles era stato un test funzionale. La Francia è stata diversa: un 1-0 contro una nazionale di riferimento dà alla nuova direzione il primo risultato davvero pesante.',body:['Nessuno deve organizzare una parata per un’amichevole. L’Italia, più di tutti, dovrebbe conoscere il pericolo delle false partenze.','Però la Francia conta.','Lo 0-0 col Galles aveva lasciato dubbi sulla creatività. La risposta è arrivata sul campo: 1-0 alla Francia e un’altra porta inviolata.','Il merito principale di Saladino finora è semplice: l’Italia sta tornando ad essere una squadra fastidiosa, dura, difficile da battere.','L’approvazione deve restare condizionata, non euforica. La struttura migliora, la classifica sorride e la Francia merita rispetto. Adesso bisogna farlo quando i punti pesano davvero.']},
    'italy-wales-warning':{headline:'Non lasciamo che la vittoria sulla Francia ci faccia dimenticare il Galles',dek:'L’Italia difende benissimo, ma lo 0-0 col Galles ha mostrato la stessa domanda che accompagna il Napoli: da dove arriva una produzione offensiva davvero affidabile?',body:['Dopo aver battuto la Francia sarebbe facile riscrivere tutta la finestra internazionale come un trionfo. Sarebbe comodo e sbagliato.','Il Galles ha tenuto l’Italia sullo 0-0. La porta inviolata va bene; non segnare no.','Il parallelo con il Napoli è evidente: struttura forte, giovani interessanti, ma a volte fare gol sembra un cazzo di esame universitario.','Non significa che il progetto non funzioni. Significa che il prossimo passo è evidente: trasformare il controllo in gol.','La Francia ha mostrato il potenziale. Il Galles ci ricorda quanto lavoro resta.']},
    'italy-napotalia-question':{headline:'Napotalia: filiera intelligente o troppo potere concentrato in un solo progetto?',dek:'Napoli e Nazionale condividono allenatore, giocatori e sempre più linguaggio calcistico. I risultati alimentano il progetto — e inevitabilmente anche le polemiche.',body:['Far finta che Napoli e Italia siano due mondi completamente separati non ha senso. Condividono un allenatore, diversi protagonisti e sempre più principi di gioco.','Il vantaggio per Saladino è evidente: può osservare alcuni nazionali ogni settimana e sviluppare automatismi che normalmente una Nazionale deve costruire in pochi giorni.','La critica è altrettanto ovvia: la familiarità diventa preferenza? Un giocatore del Napoli riceve più pazienza?','Finora i risultati rendono difficile attaccare il progetto in blocco. L’Italia è prima nel girone EURO e sta accumulando risultati e clean sheet.','Ma Napotalia verrà giudicata soprattutto dalla Nazionale. Se l’Italia torna ai grandi tornei e va lontano sarà visione. Se fallisce ancora, diventerà ossessione.']}
  };

  const italianComments = {
    'italy-saladino-turnaround':[
      ['AzzurroVero','Siamo primi, bene. Ma dopo TRE Mondiali saltati non mi fido ancora di un cazzo. Fatemi vedere l’Italia al torneo e poi ne parliamo.'],
      ['CalcioNonno','Prima cosa giusta: siamo tornati difficili da battere. Il resto viene dopo.'],
      ['NapoliItalia','Se Pio, Bastoni, Buongiorno e Kayode meritano la maglia, devono giocare. Basta con sta cazzata del “troppo Napoli”.'],
      ['MilanistaAzzurro','Va bene Napotalia, ma il manager mi sta rompendo le palle se ogni dubbio viene liquidato come anti-Napoli. Voglio vedere meritocrazia, cazzo.'],
      ['TraumaAzzurro','Tre Mondiali di fila. TRE. Fanculo l’entusiasmo prematuro, prima qualifichiamoci.'],
      ['BarSportRoma','Se questo pezzo di merda di sport mi fa credere di nuovo e poi ci manda ai playoff giuro che cambio hobby 😂']
    ],
    'italy-france-approval':[
      ['VecchioAzzurro','Vincere 1-0 contro la Francia difendendo da bastardi? Finalmente riconosco la mia Nazionale.'],
      ['NoMorePlayoffs','Bella la Francia. Adesso vincete il girone perché io un altro playoff del cazzo non lo guardo.'],
      ['CurvaItalia','Non è il risultato che ci salva. Però cazzo, serviva. Eccome se serviva.'],
      ['TatticoUbriaco','Porca puttana, una volta tanto abbiamo sofferto senza sembrare undici sconosciuti incontrati nel parcheggio.'],
      ['AzzurroNord','Fanculo il possesso sterile. Se contro la Francia vinci 1-0 e non concedi niente, io firmo col sangue.']
    ],
    'italy-wales-warning':[
      ['TirateInPorta','Contro il Galles: TIRATE IN PORTA PORCA MISERIA. Fine dell’analisi tattica.'],
      ['AzzurriSkeptic','Ecco perché non mi esalto ancora. Se una squadra si chiude non possiamo passare novanta minuti a guardarci.'],
      ['PioSubito','Quando non sapete cosa fare: palla a Pio e che Dio ce la mandi buona 😂'],
      ['CurvaIncazzata','Il manager sta rompendo le palle con tutta questa pazienza nel possesso. Ogni tanto tira, cazzo.'],
      ['ZeroZeroPTSD','Un altro 0-0 così e fanculo la lavagnetta tattica, mettiamo quattro punte e vediamo che succede.']
    ],
    'italy-napotalia-question':[
      ['VesuvioAzzurro','NAPOTALIA e vi rode pure. Se vincono, possono convocare anche il magazziniere del Napoli per quanto mi riguarda.'],
      ['InteristaAzzurro','Bastoni era un fenomeno prima di Saladino, non trasformiamo ogni cosa buona in propaganda del progetto.'],
      ['NazionalePrima','A me non frega un cazzo del club: Napoli, Inter, Milan, Bari. Convoca i migliori e vinci.'],
      ['MilanoCalcio','Se uno del Napoli gioca male e parte titolare comunque, allora sì che mi girano i coglioni. Finché meritano, fanculo le polemiche.'],
      ['PartenopeoDOC','“Troppo Napoli” ma quando vinciamo tutti zitti. Che rottura di palle.']
    ],
    'italy-scotland-statement':[
      ['Azzurri87','TRE a zero. Finalmente una partita dove non dobbiamo soffrire come dei coglioni fino al 94°.'],
      ['EspositoFamily','Sebastiano doppietta. Pio che cresce. La famiglia Esposito vuole direttamente le chiavi di Coverciano 😂'],
      ['CalcioNonno','Scozia o no, tre gol e porta inviolata. Continuate così e magari ricomincio a fidarmi.'],
      ['CurvaItalia','Porca puttana, TRE gol. Avevo dimenticato che il regolamento permettesse all’Italia di farne così tanti.'],
      ['ScoziaNelCuore','Fanculo la prudenza per una sera. 3-0 e birra aperta prima del novantesimo. Miracolo.']
    ],
    'italy-south-africa-pio':[
      ['PioNazionale','PIOOOOO. Questo ragazzo ha il vizio del gol pesante, porca puttana.'],
      ['No9Italia','Club o Nazionale, quando la partita fa schifo lui trova sempre qualcosa. Non è normale.'],
      ['InteristaInPace','Sono interista e vedere Pio esplodere altrove mi fa girare i coglioni. Però in azzurro segno pure io con lui.'],
      ['PioCult','Partita bloccata, tutti a rompere le palle, poi arriva sto ragazzo e sistema tutto. Cazzo di animale.'],
      ['CentravantiVero','Se continua così chi cazzo lo toglie più dalla Nazionale?']
    ],
    'italy-esposito-nine-debate':[
      ['DueEspositos','Sebastiano o Pio? Sì. Questa è la mia risposta.'],
      ['TatticoDaBar','Pio ti dà peso, Sebastiano movimenti diversi. Magari invece di litigare su chi deve giocare possiamo usare entrambi, cazzo.'],
      ['MagliaNove','Finalmente discutiamo su QUALE attaccante italiano mettere e non su chi cazzo possiamo inventarci come centravanti. Progresso.'],
      ['NoveNove','Questa guerra Pio-Sebastiano mi ha già rotto le palle. Sono forti entrambi, trovate una soluzione e fanculo.'],
      ['EspositoFC','Due Esposito davanti e che gli altri si arrangino. Non voglio sentire un cazzo.']
    ],
    'italy-state-of-azzurri':[
      ['TreMondialiDopo','Sudafrica W. Scozia W. Islanda W. Galles X. Francia W. Io continuo ad aspettare la tragedia perché ormai è trauma nazionale.'],
      ['AzzurriPulse','Non siamo guariti. Però per la prima volta da anni non sembriamo una barzelletta. È già qualcosa.'],
      ['QualifyFirst','Primi nel girone. Tutto il resto è rumore. Restate primi e portateci all’Europeo, cazzo.'],
      ['PTSDItalia','Ogni volta che qualcuno dice “l’Italia è tornata” mi viene voglia di mandarlo affanculo. Aspettate la qualificazione.'],
      ['BarSportNapoli','Però ammettiamolo: la squadra comincia ad avere una faccia. Porca puttana, era ora.']
    ]
  };

  D.articles.forEach(a=>{if(italyIds.has(a.id)){a.commentContext='editorial';a.translation=articleIt[a.id]||null;}});
  const esc=(v='')=>String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  const english = {
    'Siamo primi, bene. Ma dopo TRE Mondiali saltati non mi fido ancora di un cazzo. Fatemi vedere l’Italia al torneo e poi ne parliamo.':'Top of the group, good. But after THREE missed World Cups I still do not trust a damn thing. Show me Italy at the tournament, then we can talk.',
    'TIRATE IN PORTA PORCA MISERIA. Fine dell’analisi tattica.':'SHOOT THE DAMN BALL. End of tactical analysis.',
    'A me non frega un cazzo del club: Napoli, Inter, Milan, Bari. Convoca i migliori e vinci.':'I do not give a damn which club: Napoli, Inter, Milan, Bari. Pick the best players and win.',
    'TRE a zero. Finalmente una partita dove non dobbiamo soffrire come dei coglioni fino al 94°.':'THREE-nil. Finally a match where we do not have to suffer like idiots until the 94th minute.',
    'PIOOOOO. Questo ragazzo ha il vizio del gol pesante, porca puttana.':'PIOOOOO. This kid has a habit of scoring huge goals, for fuck’s sake.',
    'Sebastiano o Pio? Sì. Questa è la mia risposta.':'Sebastiano or Pio? Yes. That is my answer.',
    'Primi nel girone. Tutto il resto è rumore. Restate primi e portateci all’Europeo, cazzo.':'Top of the group. Everything else is noise. Stay top and take us to the Euros, damn it.'
  };
  let busy=false;
  function enhance(){
    if(busy)return; const host=document.getElementById('readerContent'); if(!host)return;
    const headline=host.querySelector('#readerHeadline')?.textContent?.trim();
    const article=D.articles.find(a=>String(a.headline||'').trim()===headline||String(a.translation?.headline||'').trim()===headline); if(!article)return;
    busy=true;
    try{
      if(article.translation&&!host.querySelector('.article-translation-toggle')){
        const h=host.querySelector('#readerHeadline'); if(h){const btn=document.createElement('button');btn.className='text-btn article-translation-toggle';btn.type='button';btn.textContent='Leggi in italiano';btn.dataset.lang='en';h.insertAdjacentElement('afterend',btn);const original={headline:article.headline,dek:article.dek,body:[...(article.body||[])]};btn.addEventListener('click',()=>{const toIt=btn.dataset.lang==='en',src=toIt?article.translation:original;const title=host.querySelector('#readerHeadline');if(title)title.textContent=src.headline;const paras=[...host.querySelectorAll('.reader-body p')];if(src.body)paras.forEach((p,i)=>{if(src.body[i]!=null)p.textContent=src.body[i];});const dek=host.querySelector('.reader-dek');if(dek&&src.dek)dek.textContent=src.dek;btn.dataset.lang=toIt?'it':'en';btn.textContent=toIt?'Read in English':'Leggi in italiano';});}
      }
      const section=host.querySelector('.fan-comments'),extras=italianComments[article.id];
      if(section&&extras?.length&&section.dataset.italianLayer!==article.id){const list=section.querySelector('.fan-comments-list');if(list)extras.slice().reverse().forEach(([user,text])=>{const node=document.createElement('article');node.className='fan-comment italian-comment';node.innerHTML=`<div class="fan-avatar">${esc(user.slice(0,2).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${esc(user)}</strong><em class="visitor-badge">IT</em><span>adesso</span></div><p lang="it">${esc(text)}</p><button type="button" class="text-btn comment-translate" data-original="${esc(text)}">Translate</button><div class="fan-actions"><span>▲ ${31+user.length*7}</span><span>Rispondi</span></div></div>`;list.prepend(node);});section.dataset.italianLayer=article.id;}
    }finally{busy=false;}
  }
  document.addEventListener('click',e=>{const b=e.target.closest?.('.comment-translate');if(b){const p=b.parentElement.querySelector('p'),original=b.dataset.original;if(b.dataset.translated==='1'){p.textContent=original;b.textContent='Translate';b.dataset.translated='0';}else{p.textContent=english[original]||`English: ${original}`;b.textContent='Original';b.dataset.translated='1';}return;}if(e.target.closest?.('[data-article]'))requestAnimationFrame(()=>requestAnimationFrame(enhance));});
  const reader=document.getElementById('readerContent');if(reader)new MutationObserver(()=>requestAnimationFrame(enhance)).observe(reader,{childList:true,subtree:true});
})();
