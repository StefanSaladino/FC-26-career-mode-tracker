(() => {
  const D = window.NAPOLI_DATA;
  if (!D) return;

  const englishExtras = {
    'opinion-fortress-needs-goals':[
      ['ShootTheFuckingBall','Eight conceded in fifteen and somehow every match still feels like a fucking hostage situation because we refuse to score twice.'],
      ['BacklineUnion','Bastoni and Buongiorno must be fucking exhausted watching us miss chances and then being asked to defend a 1-0 for half an hour.'],
      ['NapoliTillIDie','I love this team but holy shit, just give me ONE boring 3-0 where nothing happens after minute 60.']
    ],
    'opinion-two-points-conversation':[
      ['GameInHandFC','Win the fucking game in hand before we start doing imaginary-table victory laps.'],
      ['InterCanFuckOff','Two points if we win it. TWO. Inter can absolutely fuck off, this race is alive.'],
      ['NervousSinceAugust','The table says title race. My blood pressure says this team is trying to kill me.']
    ],
    'opinion-pio-dependence':[
      ['BigPioEnergy','This kid keeps dragging goals out of absolutely nothing. What the fuck are we going to do when he has a normal bad game?'],
      ['ProtectTheKid','He is young as hell. Stop making him responsible for fixing every shitty attacking performance.'],
      ['FeedPioRepeat','Counterpoint: fuck it, keep feeding the giant until somebody proves they can stop him.']
    ],
    'opinion-beier-case':[
      ['GoalsPleaseMate','I understand the movement. I understand the link play. I also understand we rejected 204 fucking million. Score.'],
      ['BeierHive','Some of you watch him create space for everybody else for 90 minutes then come online and say he did fuck all.'],
      ['BarcaReceipt','If Barcelona come back with that money again and he is still not scoring, this comment section is going to become a fucking crime scene.']
    ],
    'opinion-defensive-identity':[
      ['CentreBackPorn','These two are fucking ridiculous. Half the time the opponent reaches the box and I already know the attack is dead.'],
      ['GiveThemFlowers','Everyone talks about Pio. Fine. But this title race is sitting on the backs of two absolute bastards at centre-half.'],
      ['MeretMatters','And put some fucking respect on Meret too. Eight conceded is not happening without him.']
    ],
    'curva-right-to-be-irritated':[
      ['JustFuckingShoot','THANK YOU. Being in a title race does not mean I have to enjoy watching four players pass sideways while the box is fucking empty.'],
      ['StopWhiningFFS','We have conceded eight goals and you miserable fuckers still act like the stadium is on fire every week 😂'],
      ['WeekendRuined','This team can win 1-0 and somehow still piss me off for 70 of the 90 minutes. Football is stupid.']
    ],
    'italy-saladino-turnaround':[
      ['WorldCupTrauma','Three straight missed World Cups. I do not give a shit how nice the project looks yet. Qualify first.'],
      ['AzzurriAbroad','Top of the group, beating France, clean sheets everywhere. Fuck me, I am starting to believe again and I hate it.']
    ],
    'italy-france-approval':[
      ['OneNilHeritage','Italy winning 1-0 against France while defending like absolute bastards? That is the shit I grew up on.'],
      ['NoMoreFuckingPlayoffs','Great result. Now please, for the love of God, win the fucking group and spare us another playoff.']
    ],
    'italy-wales-warning':[
      ['ShootForFuckSake','That Wales match was fucking painful. SHOOT. THE. BALL.'],
      ['FriendlyOrNot','Call it a friendly all you want. Ninety minutes of sterile possession still pisses me off.']
    ],
    'italy-napotalia-question':[
      ['ClubBiasPolice','If the Napoli guys deserve it, pick them. If they play like shit, drop them. This does not need to be a fucking constitutional crisis.'],
      ['NationalTeamOnly','I could not give less of a shit what club they play for. Win games for Italy. End of discussion.']
    ],
    'italy-scotland-statement':[
      ['ThreeGoalsHolyShit','Three fucking goals AND a clean sheet? Who are you and what have you done with Italy?'],
      ['EspositoAgenda','Sebastiano brace, Pio coming through too. The Esposito discourse is about to be completely fucking unbearable.']
    ],
    'italy-south-africa-pio':[
      ['PioAgain','Of course it was fucking Pio. This kid apparently refuses to score meaningless goals.'],
      ['BigGameMagnet','Ugly match, one moment needed, Pio shows up. Same shit at Napoli. That is becoming a real trait.']
    ],
    'italy-esposito-nine-debate':[
      ['PlayBothFFS','Why the fuck are we turning this into Pio VERSUS Sebastiano? Find a way to use both.'],
      ['StrikerProblems','We spent years asking where the hell the Italian strikers went. Now we have two and immediately start fighting about it 😂']
    ],
    'italy-state-of-azzurri':[
      ['StillTraumatized','Four wins and a draw in that run and I am still waiting for the fucking trapdoor to open. Three missed World Cups broke us.'],
      ['MaybeWeAreBack','I am not saying we are back. I am saying this is the first time in ages the team does not look like complete shit.']
    ]
  };

  const translations = new Map([
    ['Siamo primi, bene. Ma dopo TRE Mondiali saltati non mi fido ancora di un cazzo. Fatemi vedere l’Italia al torneo e poi ne parliamo.','Top of the group, good. But after THREE missed World Cups I still do not trust a damn thing. Show me Italy at the tournament, then we can talk.'],
    ['Prima cosa giusta: siamo tornati difficili da battere. Il resto viene dopo.','First thing they got right: we are difficult to beat again. The rest comes after.'],
    ['Se Pio, Bastoni, Buongiorno e Kayode meritano la maglia, devono giocare. Basta con sta cazzata del “troppo Napoli”.','If Pio, Bastoni, Buongiorno and Kayode deserve the shirt, they should play. Enough of this “too much Napoli” bullshit.'],
    ['Va bene Napotalia, ma il manager mi sta rompendo le palle se ogni dubbio viene liquidato come anti-Napoli. Voglio vedere meritocrazia, cazzo.','Napotalia is fine, but the manager is pissing me off if every doubt gets dismissed as anti-Napoli. I want meritocracy, damn it.'],
    ['Tre Mondiali di fila. TRE. Fanculo l’entusiasmo prematuro, prima qualifichiamoci.','Three World Cups in a row. THREE. Fuck the premature excitement; qualify first.'],
    ['Se questo pezzo di merda di sport mi fa credere di nuovo e poi ci manda ai playoff giuro che cambio hobby 😂','If this piece-of-shit sport makes me believe again and then sends us to the playoffs, I swear I am changing hobbies 😂'],
    ['Vincere 1-0 contro la Francia difendendo da bastardi? Finalmente riconosco la mia Nazionale.','Winning 1-0 against France while defending like bastards? Finally I recognize my national team.'],
    ['Bella la Francia. Adesso vincete il girone perché io un altro playoff del cazzo non lo guardo.','Nice beating France. Now win the group because I am not watching another fucking playoff.'],
    ['Non è il risultato che ci salva. Però cazzo, serviva. Eccome se serviva.','It is not the result that saves us. But fuck, we needed it. We really did.'],
    ['Porca puttana, una volta tanto abbiamo sofferto senza sembrare undici sconosciuti incontrati nel parcheggio.','For fuck’s sake, for once we suffered without looking like eleven strangers who met in the parking lot.'],
    ['Fanculo il possesso sterile. Se contro la Francia vinci 1-0 e non concedi niente, io firmo col sangue.','Fuck sterile possession. If you beat France 1-0 and give them nothing, I would sign for that in blood.'],
    ['Contro il Galles: TIRATE IN PORTA PORCA MISERIA. Fine dell’analisi tattica.','Against Wales: SHOOT THE DAMN BALL. End of tactical analysis.'],
    ['Ecco perché non mi esalto ancora. Se una squadra si chiude non possiamo passare novanta minuti a guardarci.','This is why I am not getting carried away yet. If a team sits deep, we cannot spend ninety minutes staring at each other.'],
    ['Quando non sapete cosa fare: palla a Pio e che Dio ce la mandi buona 😂','When you do not know what to do: give it to Pio and hope for the best 😂'],
    ['Il manager sta rompendo le palle con tutta questa pazienza nel possesso. Ogni tanto tira, cazzo.','The manager is pissing me off with all this patience in possession. Shoot once in a while, damn it.'],
    ['Un altro 0-0 così e fanculo la lavagnetta tattica, mettiamo quattro punte e vediamo che succede.','Another 0-0 like that and fuck the tactics board; put four strikers on and see what happens.'],
    ['NAPOTALIA e vi rode pure. Se vincono, possono convocare anche il magazziniere del Napoli per quanto mi riguarda.','NAPOTALIA, and you are mad about it too. If they win, they can call up Napoli’s kit man for all I care.'],
    ['Bastoni era un fenomeno prima di Saladino, non trasformiamo ogni cosa buona in propaganda del progetto.','Bastoni was brilliant before Saladino. Let’s not turn every good thing into propaganda for the project.'],
    ['A me non frega un cazzo del club: Napoli, Inter, Milan, Bari. Convoca i migliori e vinci.','I do not give a fuck about the club: Napoli, Inter, Milan, Bari. Pick the best and win.'],
    ['Se uno del Napoli gioca male e parte titolare comunque, allora sì che mi girano i coglioni. Finché meritano, fanculo le polemiche.','If a Napoli player is shit and starts anyway, then yes, I will be pissed off. As long as they deserve it, fuck the controversy.'],
    ['“Troppo Napoli” ma quando vinciamo tutti zitti. Che rottura di palle.','“Too much Napoli,” but when we win everybody shuts up. What a pain in the ass.'],
    ['TRE a zero. Finalmente una partita dove non dobbiamo soffrire come dei coglioni fino al 94°.','THREE-nil. Finally a match where we do not have to suffer like idiots until the 94th minute.'],
    ['Sebastiano doppietta. Pio che cresce. La famiglia Esposito vuole direttamente le chiavi di Coverciano 😂','Sebastiano with a brace. Pio developing. The Esposito family wants the keys to Coverciano now 😂'],
    ['Scozia o no, tre gol e porta inviolata. Continuate così e magari ricomincio a fidarmi.','Scotland or not, three goals and a clean sheet. Keep this up and maybe I will start trusting again.'],
    ['Porca puttana, TRE gol. Avevo dimenticato che il regolamento permettesse all’Italia di farne così tanti.','Holy fucking shit, THREE goals. I forgot the rules allowed Italy to score that many.'],
    ['Fanculo la prudenza per una sera. 3-0 e birra aperta prima del novantesimo. Miracolo.','Fuck caution for one night. 3-0 and the beer opened before the 90th. A miracle.'],
    ['PIOOOOO. Questo ragazzo ha il vizio del gol pesante, porca puttana.','PIOOOOO. This kid has a habit of scoring huge goals, for fuck’s sake.'],
    ['Club o Nazionale, quando la partita fa schifo lui trova sempre qualcosa. Non è normale.','Club or country, when the match is shit he always finds something. It is not normal.'],
    ['Sono interista e vedere Pio esplodere altrove mi fa girare i coglioni. Però in azzurro segno pure io con lui.','I am an Inter fan and watching Pio explode somewhere else pisses me off. But in blue I celebrate with him too.'],
    ['Partita bloccata, tutti a rompere le palle, poi arriva sto ragazzo e sistema tutto. Cazzo di animale.','Stuck match, everybody pissing and moaning, then this kid shows up and fixes everything. Fucking animal.'],
    ['Se continua così chi cazzo lo toglie più dalla Nazionale?','If he keeps this up, who the fuck can take him out of the national team?'],
    ['Sebastiano o Pio? Sì. Questa è la mia risposta.','Sebastiano or Pio? Yes. That is my answer.'],
    ['Pio ti dà peso, Sebastiano movimenti diversi. Magari invece di litigare su chi deve giocare possiamo usare entrambi, cazzo.','Pio gives you physical presence, Sebastiano different movement. Maybe instead of fighting over who plays, we can use both, damn it.'],
    ['Finalmente discutiamo su QUALE attaccante italiano mettere e non su chi cazzo possiamo inventarci come centravanti. Progresso.','Finally we are arguing about WHICH Italian striker to use instead of who the fuck we can invent as a centre-forward. Progress.'],
    ['Questa guerra Pio-Sebastiano mi ha già rotto le palle. Sono forti entrambi, trovate una soluzione e fanculo.','This Pio-Sebastiano war is already pissing me off. They are both good; find a solution and fuck off.'],
    ['Due Esposito davanti e che gli altri si arrangino. Non voglio sentire un cazzo.','Two Espositos up front and everyone else can deal with it. I do not want to hear a fucking word.'],
    ['Sudafrica W. Scozia W. Islanda W. Galles X. Francia W. Io continuo ad aspettare la tragedia perché ormai è trauma nazionale.','South Africa W. Scotland W. Iceland W. Wales D. France W. I am still waiting for disaster because national trauma is permanent now.'],
    ['Non siamo guariti. Però per la prima volta da anni non sembriamo una barzelletta. È già qualcosa.','We are not healed. But for the first time in years we do not look like a joke. That is something.'],
    ['Primi nel girone. Tutto il resto è rumore. Restate primi e portateci all’Europeo, cazzo.','Top of the group. Everything else is noise. Stay top and take us to the Euros, damn it.'],
    ['Ogni volta che qualcuno dice “l’Italia è tornata” mi viene voglia di mandarlo affanculo. Aspettate la qualificazione.','Every time someone says “Italy is back,” I want to tell them to fuck off. Wait for qualification.'],
    ['Però ammettiamolo: la squadra comincia ad avere una faccia. Porca puttana, era ora.','But admit it: the team is starting to have an identity. Fucking finally.']
  ]);

  const esc=(v='')=>String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  const findArticle=()=>{
    const h=document.querySelector('#readerHeadline')?.textContent?.trim();
    return (D.articles||[]).find(a=>String(a.headline||'').trim()===h||String(a.translation?.headline||'').trim()===h);
  };

  function addEnglish(){
    const article=findArticle(); if(!article)return;
    const section=document.querySelector('#readerContent .fan-comments');
    const list=section?.querySelector('.fan-comments-list');
    const extras=englishExtras[article.id];
    if(!list||!extras?.length||section.dataset.englishAuthenticity===article.id)return;
    extras.slice().reverse().forEach(([user,text])=>{
      const n=document.createElement('article'); n.className='fan-comment authenticity-comment';
      n.innerHTML=`<div class="fan-avatar">${esc(user.slice(0,2).toUpperCase())}</div><div><div class="fan-comment-meta"><strong>@${esc(user)}</strong><span>just now</span></div><p>${esc(text)}</p><div class="fan-actions"><span>▲ ${40+user.length*9}</span><span>Reply</span></div></div>`;
      list.prepend(n);
    });
    section.dataset.englishAuthenticity=article.id;
  }

  // Capture phase intentionally owns translation clicks so the older incomplete
  // handler cannot replace untranslated comments with "English: <Italian>".
  document.addEventListener('click',e=>{
    const b=e.target.closest?.('.comment-translate'); if(!b)return;
    e.preventDefault(); e.stopImmediatePropagation();
    const p=b.parentElement?.querySelector('p'); if(!p)return;
    const original=b.dataset.original||p.dataset.original||p.textContent;
    p.dataset.original=original;
    if(b.dataset.translated==='1'){
      p.textContent=original; p.lang='it'; b.textContent='Translate'; b.dataset.translated='0';
    }else{
      p.textContent=translations.get(original)||'Translation unavailable.'; p.lang='en'; b.textContent='Original'; b.dataset.translated='1';
    }
  },true);

  let queued=false;
  const schedule=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;addEnglish();});};
  const reader=document.getElementById('readerContent'); if(reader)new MutationObserver(schedule).observe(reader,{childList:true,subtree:true});
  document.addEventListener('click',e=>{if(e.target.closest?.('[data-article]'))requestAnimationFrame(schedule);});
  schedule();
})();
