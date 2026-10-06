(()=>{
const D=window.NAPOLI_DATA;if(!D||!Array.isArray(D.articles))return;
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hash=s=>{let h=0;for(const c of String(s))h=((h<<5)-h+c.charCodeAt(0))|0;return Math.abs(h)};
const H=['VesuvioVoice','PartenopeiProfessor','NapoliTherapy','CurvaB','AzzurriWatch','OldSchoolAzzurro','VomeroView','ForzaSempre','SanPaoloSoul','PiazzaPundit','NoTacticsJustVibes','SempreNapoli','NapoliDoomer','90MinuteNervousBreakdown','SanPaoloSufferer','matchday_meltdown','VARConspiracyDesk','touchlinelawyer','ActuallyWatchTheGame','SouthStandAnalyst','NapoliSinceBirth','OneNilEnjoyer','CleanSheetCult','LateGoalTrauma','EuropeanNights','CupRomantic','VesuviusPress','AwayDayNapoli','curva_commentator','napoli_in_my_blood','partenopei92','northstandnoise','bluewall'];
const IT=new Set(['VesuvioVoice','CurvaB','OldSchoolAzzurro','VomeroView','ForzaSempre','SanPaoloSoul','SempreNapoli','NapoliSinceBirth','curva_commentator','napoli_in_my_blood','partenopei92']);
function norm(r){
 if(Array.isArray(r))return{u:r[0],t:r[1],lang:r[2]||'en',translation:r[3]||'',replies:Array.isArray(r[4])?r[4].map(norm).filter(Boolean):[]};
 if(r&&typeof r==='object')return{u:r.user||r.handle||r.u||'CurvaB',t:r.text||r.comment||r.t||'',lang:r.lang||'en',translation:r.translation||r.en||'',replies:Array.isArray(r.replies)?r.replies.map(norm).filter(Boolean):[]};
 return null;
}
function explicit(a){
 const seeded=(window.NAPOLI_SEEDED_COMMENTS||{})[String(a.id)];
 return [...(Array.isArray(a.comments)?a.comments:[]),...(Array.isArray(seeded)?seeded:[])].map(norm).filter(x=>x?.t);
}
const isChamp=a=>String(a.id||'').startsWith('scudetto-2028-');
const desired=a=>isChamp(a)?56+(hash(a.id)%13):Math.max(14,Math.min(28,Number(a.commentHeat||10)+8));
const surface=a=>[a.headline,a.dek,a.category,a.label].filter(Boolean).join(' ').toLowerCase();
function ctx(a){
 const s=surface(a),cc=String(a.commentContext||'').toLowerCase(),reaction=String(a.reaction||'').toLowerCase(),visitor=String(a.visitorClub||'NONE').toUpperCase();
 const c={cc,reaction,visitor};
 c.staff=/assistant-manager|staff|media-row/.test(`${cc} ${s}`);
 c.history=/club-history|historical|greatest.*season|history/.test(`${cc} ${s}`);
 c.transfer=/transfer|mercato|rumou?r/.test(`${cc} ${s}`);
 c.title=/scudetto|champion|campioni/.test(`${cc} ${s}`);
 c.celebration=/celebrat|trophy|party/.test(`${cc} ${s}`);
 c.interview=/interview/.test(`${cc} ${s}`)||String(a.category||'').toLowerCase()==='interview';
 c.unbeaten=/unbeaten|invincible|zero defeats|no defeats/.test(s)||/post-scudetto-run-in|club-history/.test(cc);
 c.ucl=/^ucl-|champions league|european cup/.test(`${cc} ${s}`);
 c.final=/ucl-final/.test(cc)||reaction==='final-preview';
 c.psg=c.final&&visitor==='PARIS SAINT-GERMAIN';
 c.barca=/ucl-semifinal/.test(cc)&&visitor==='BARCELONA';
 c.atletico=/ucl-quarterfinal/.test(cc)&&visitor==='ATLETICO MADRID';
 c.madrid=/ucl-round16/.test(cc)&&visitor==='REAL MADRID';
 c.league=/league-/.test(cc)||/serie a|league/.test(`${String(a.category||'').toLowerCase()} ${String(a.label||'').toLowerCase()}`);
 c.cup=/coppa|supercoppa/.test(`${cc} ${s}`);
 c.pio=/\bpio\b|esposito/.test(s);c.beier=/beier/.test(s);c.endrick=/endrick/.test(s);c.meret=/meret/.test(s);c.bastoni=/bastoni/.test(s);c.buongiorno=/buongiorno/.test(s);c.paz=/\bpaz\b|nico paz/.test(s);c.chiesa=/chiesa/.test(s);c.davies=/davies/.test(s);c.kdb=/de bruyne|\bkdb\b/.test(s);
 return c;
}
function roles(c){
 const r=[];
 if(c.staff)r.push('VesuvioVoice','TacticalNonno','SaladinoOutNow','AMDefenseLeague');
 if(c.pio)r.push('PioNation','PioHaterForNoReason','PioShirtOwner');
 if(c.beier)r.push('BeierDefenseLeague','BeierHive');
 if(c.endrick)r.push('EndrickEra');if(c.meret)r.push('MeretUnion');if(c.bastoni)r.push('BastoniAgenda');if(c.buongiorno)r.push('BuongiornoBrigade');if(c.paz)r.push('PazEnjoyer');if(c.chiesa)r.push('ChiesaHive');if(c.davies)r.push('DaviesExpress');if(c.kdb)r.push('KDBVision');
 if(c.title)r.push('ScudettoOrBust','CurvaCalculator');if(c.ucl)r.push('EuropeanNights');if(!r.includes('SaladinoOutNow'))r.push('SaladinoOutNow');
 return [...new Set(r)];
}
const pools={
 generic:[['it','Questa stagione continua a trovare nuovi modi per diventare più assurda.'],['en','There are about six different agendas fighting for control of this thread already.'],['it','Io ho abbandonato l’obiettività da mesi. Forza Napoli e basta.'],['en','Every week we unlock another storyline.'],['it','La cosa più bella è che questa squadra non ha un solo modo per vincere.'],['en','The squad depth is making more sense the longer this season goes.']],
 title:[['it','Campioni. Io sarò insopportabile per mesi.'],['en','The trophy is secured and somehow I immediately want more.'],['it','Tutti quei pareggi stressanti adesso sembrano parte della storia.'],['en','This squad gave us a season we will talk about for years.']],
 unbeaten:[['it','Quel numero zero nella colonna delle sconfitte ormai mi mette ansia da solo.'],['en','Protect the unbeaten run, but do not let it become more important than the cups.'],['it','Finire imbattuti trasformerebbe una stagione enorme in qualcosa di storico anche fuori Napoli.']],
 ucl:[['it','Inter, Madrid, Atlético, Barcellona. Nessuno può parlare di percorso facile.'],['en','This team has learned how to suffer in Europe. That matters at this stage.'],['it','Non siamo più turisti in Europa. Questa squadra appartiene a queste notti.']],
 psg:[['it','Una finale secca contro il PSG fa paura. Ma dopo questo percorso non possiamo sentirci inferiori.'],['en','No second leg, no correction game. One night for the European Cup.'],['it','Rispetto per il PSG. Paura di nessuno.'],['en','May 27 is going to take years off my life.']],
 barca:[['it','Il Barça è enorme, ma questa squadra ha già smesso di avere paura dei nomi.'],['en','Make Barcelona defend Napoli too. Do not spend the whole tie admiring the badge.']],
 staff:[['it','Lo staff si giudica sulle decisioni. Le caricature televisive sono un’altra cosa.'],['en','Criticize the decisions all you want. Pretending the staff are passengers is lazy television.'],['it','Se vuoi parlare di tattica parla di tattica. Se vuoi fare il personaggio, almeno ammettilo.']],
 history:[['it','Il 1987 resta sacro. Ma sul piano sportivo questa squadra sta entrando in un territorio mai visto.'],['en','The cultural argument and the competitive argument do not have to be the same thing.'],['it','Prima finale di Coppa dei Campioni/Champions della storia del club. Già questo cambia il dibattito.']],
 transfer:[['it','Prima vediamo chi torna dai prestiti e poi spendiamo mezzo continente, grazie.'],['en','Rumour is not a bid. A bid is not an agreement. Everyone survive the summer.'],['it','Comprare nomi famosi solo perché adesso possiamo permetterceli sarebbe il modo più veloce per perdere identità.']],
 pio:[['it','PIO È IL NOSTRO RAGAZZO. Fine analisi.'],['en','Big matches do not seem to change Pio’s heartbeat at all.'],['it','I numeri sono enormi e ancora non raccontano tutti i momenti pesanti che ha deciso.']],
 beier:[['it','La fila per chiedere scusa a Beier è ancora aperta.'],['en','The “rotation striker” conversation is dead. Beier killed it himself.']],
 meret:[['it','Meret ha riscritto la sua reputazione europea in pochi mesi.'],['en','Knockout football eventually asks your keeper to save the tie. Meret keeps doing it.']]
};
const choose=(arr,key)=>arr[hash(key)%arr.length];
function persona(u,c,a){
 const key=`${a.id}:${u}`;
 if(u==='SaladinoOutNow'){
  const options=c.staff?
   [['en','Now we are not allowed to question the assistant either? The technical area is becoming a protected institution. Saladino OUT.'],['it','Quindi il manager si può criticare ma appena tocchi lo staff parte il vittimismo. Trasparenza zero. Saladino OUT.'],['en','Interesting how every success belongs to the project and every criticism is suddenly “personal.” Saladino OUT.']]:
   c.transfer?
   [['en','Another transfer fantasy before the season is finished. This is how dynasties collapse. Saladino OUT.'],['it','Prima ancora del mercato abbiamo già comprato mezza Europa. Gestione seria, sicuramente. Saladino OUT.'],['en','The propaganda department has a larger summer budget than the football department. Saladino OUT.']]:
   c.history?
   [['en','Greatest season ever articles before the final whistle in Paris. Humility has officially left the building. Saladino OUT.'],['it','Adesso riscriviamo tutta la storia del Napoli prima ancora di giocare col PSG. Calma. Saladino OUT.'],['en','Win the final first. Then build the statue. Saladino OUT.']]:
   c.psg?
   [['en','PSG is the test. I will evaluate the celebrations when the European Cup is actually in Naples. Saladino OUT.'],['it','Finale raggiunta, bene. Adesso battete il PSG prima di parlare di immortalità. Saladino OUT.'],['en','A final appearance is not a trophy. Standards, please. Saladino OUT.']]:
   c.title?
   [['en','Congratulations on meeting the minimum requirement with a championship-calibre squad. Saladino OUT.'],['it','Scudetto meritato. Questo non significa che ogni scelta del manager diventi improvvisamente geniale. Saladino OUT.'],['en','One trophy does not erase nine draws and months of questionable decisions. Saladino OUT.']]:
   [['en','I remain unconvinced by Saladino and will not be silenced by temporary evidence.'],['it','Continuo a non fidarmi del manager. I risultati non cancellano tutte le domande. Saladino OUT.']];
  const [lang,t]=choose(options,key);return{t,lang};
 }
 if(u==='PioHaterForNoReason'){const [lang,t]=choose(c.pio?[["en","I acknowledge the goals, assists and big moments. I simply reject their implications."],["it","Vedo i gol. Vedo gli assist. Ho deciso comunque di non imparare niente."]]:[["en","I was prepared to blame Pio but this article has denied me the opportunity."]],key);return{t,lang};}
 if(u==='PioNation'){const [lang,t]=choose(c.psg?[["it","PIO in una finale europea. Datemi il palco e lasciate succedere la storia."],["en","OUR GUY in a European Cup final. I have no further notes."]]:pools.pio,key);return{t,lang};}
 if(/Beier/.test(u)){const [lang,t]=choose(pools.beier,key);return{t,lang};}
 if(/Meret/.test(u)){const [lang,t]=choose(pools.meret,key);return{t,lang};}
 if(u==='EuropeanNights'){const arr=c.psg?[["it","Inter. Madrid. Atlético. Barcellona. Ora PSG. Se vuoi l’immortalità, questa è la strada."],["en","Inter. Madrid. Atlético. Barcelona. Now PSG. Nobody can call this an easy route."]]:c.barca?[["it","Madrid. Atlético. Ora Barcellona. Non c’è niente di facile qui."],["en","Another giant, another European night. Good."]]:pools.ucl;const [lang,t]=choose(arr,key);return{t,lang};}
 if(u==='AMDefenseLeague'){return{t:'I did not expect this account to become necessary, but apparently we are operational.',lang:'en'};}
 return null;
}
function generated(u,c,a,i){
 const p=persona(u,c,a);if(p)return p;
 let choices=[];
 if(c.staff)choices.push(...pools.staff);else if(c.transfer)choices.push(...pools.transfer);else if(c.history)choices.push(...pools.history);
 if(c.title)choices.push(...pools.title);if(c.unbeaten)choices.push(...pools.unbeaten);if(c.ucl)choices.push(...pools.ucl);if(c.psg&&!c.transfer)choices.push(...pools.psg);if(c.barca)choices.push(...pools.barca);if(c.pio)choices.push(...pools.pio);if(c.beier)choices.push(...pools.beier);if(c.meret)choices.push(...pools.meret);choices.push(...pools.generic);
 const [lang,t]=choose(choices,`${a.id}:${u}:${i}`);return{t,lang:IT.has(u)&&lang==='en'&&hash(`${a.id}:${u}:it`)%3===0?'it':lang};
}
function replyRow(u,t,lang='en'){return{u,t,lang,translation:'',replies:[]};}
function pickReplies(pool,key,count){
 if(!pool.length||count<1)return[];
 const start=hash(key)%pool.length,out=[];
 for(let n=0;n<pool.length&&out.length<count;n++){const x=pool[(start+n)%pool.length];if(!out.some(r=>r.u===x[0]&&r.t===x[1]))out.push(replyRow(x[0],x[1],x[2]||'en'));}
 return out;
}
function generatedReplies(parent,c,a,i){
 if(Array.isArray(parent.replies)&&parent.replies.length)return parent.replies;
 const key=`${a.id}:${parent.u}:${parent.t}:${i}`;
 if(parent.u==='SaladinoOutNow'){
  const pool=c.staff?[
   ['VesuvioVoice','Fratè, criticare una scelta è una cosa. Inventarsi che l’AM non faccia niente è televisione da quattro soldi.','it'],
   ['TacticalNonno','Se hai un problema con una decisione tattica, nominala. “Lo staff non serve” non è analisi.','it'],
   ['ActuallyWatchTheGame','You found a second person to blame after three years of blaming only Saladino. Impressive depth.','en'],
   ['CurvaB','Tra poco chiederai le dimissioni del preparatore dei portieri perché Meret para troppo.','it'],
   ['AMDefenseLeague','You have activated the account. This was avoidable.','en']
  ]:c.transfer?[
   ['SquadDepthDept','Nobody has signed anybody. You are protesting a rumour about a hypothetical budget.','en'],
   ['CurvaCalculator','Current confirmed spend on this rumour: zero. Please update the outrage spreadsheet.','en'],
   ['MercatoMadness','Fratè siamo a maggio e tu hai già licenziato il manager per un acquisto che non esiste.','it'],
   ['PazEnjoyer','If we sign nobody you will blame him. If we sign someone you will also blame him. Elite consistency.','en']
  ]:c.history?[
   ['OldGuard87','Nessuno sta cancellando il 1987. Stiamo parlando di ciò che questa squadra sta facendo sul campo.','it'],
   ['SanPaoloSoul','The first Scudetto can be culturally untouchable while this season is competitively unprecedented. Both can be true.','en'],
   ['CurvaCalculator','You have moved from “he cannot win the league” to “a league title is propaganda.” Remarkable progression.','en'],
   ['VesuvioVoice','Se battere Inter, Madrid, Atlético e Barça è propaganda, allora continuate pure con la propaganda.','it'],
   ['EuropeanNights','Fine: win PSG first. But pretending the run so far means nothing is just agenda maintenance.','en']
  ]:c.psg?[
   ['EuropeanNights','You said Madrid was the test, then Atlético, then Barcelona. I am keeping receipts for Paris.','en'],
   ['CurvaB','Ogni turno è “la vera prova” finché la superiamo e ne inventi un’altra.','it'],
   ['NapoliTherapy','I respect the commitment to never enjoying anything for more than four minutes.','en'],
   ['VesuvioVoice','Va bene, PSG è la prova. Se vinciamo però non sparire.','it'],
   ['CurvaCalculator','Your goalposts have now completed more European travel than most supporters.','en'],
   ['OldSchoolAzzurro','Una finale non è un trofeo, vero. Ma arrivarci così non è niente? Ma dai.','it']
  ]:c.title?[
   ['ScudettoOrBust','My username literally achieved its purpose and you still found a complaint.','en'],
   ['CurvaB','“Minimo indispensabile” adesso significa vincere lo Scudetto. Siamo arrivati a livelli incredibili.','it'],
   ['ActuallyWatchTheGame','The standard keeps moving every time Napoli reach it. Very convenient.','en'],
   ['NapoliDoomer','For once I am not the most unreasonable person in the thread and I do not like it.','en'],
   ['VesuvioVoice','Goditi una cosa per cinque minuti, fratè. Cinque.','it']
  ]:[
   ['ActuallyWatchTheGame','You have committed to the agenda and I almost respect the stamina.','en'],
   ['CurvaB','Tu riesci a trovare una crisi pure in un comunicato sul parcheggio.','it'],
   ['NapoliTherapy','I opened the comments for perspective. That was my mistake.','en'],
   ['VesuvioVoice','Un giorno scriverai “Saladino OUT” pure sotto gli auguri di Natale.','it']
  ];
  return pickReplies(pool,key,1+(hash(`${key}:count`)%2));
 }
 if(parent.u==='PioHaterForNoReason'){
  const pool=[['PioNation','“I reject their implications” remains the strongest anti-evidence platform on this website.','en'],['PioShirtOwner','Continua così. Ogni commento aumenta il valore della maglia.','it'],['CurvaB','Almeno ormai ammetti apertamente che è solo agenda. Progressi.','it'],['ActuallyWatchTheGame','This is less analysis and more performance art.','en']];
  return pickReplies(pool,key,1+(hash(key)%2));
 }
 if(parent.u==='NapoliDoomer'){
  const pool=c.psg?[["90MinuteNervousBreakdown","Deleting the website will not cancel the final. I checked.","en"],["EuropeanNights","Hai previsto l’apocalisse in ogni turno. A questo punto sei parte del rituale.","it"],["NapoliTherapy","Please continue doomposting. It may be the only thing keeping the run alive.","en"]]:[["NapoliTherapy","Tu non stai vivendo una stagione, stai sopravvivendo a un’allucinazione collettiva.","it"],["ActuallyWatchTheGame","At least the username is honest.","en"]];
  return pickReplies(pool,key,1);
 }
 const shouldReply=hash(`${key}:generic`)%7===0;
 if(!shouldReply)return[];
 const generic=c.staff?[["CurvaB","Questo almeno parla del punto vero: decisioni sì, attacchi personali no.","it"],["PartenopeiProfessor","That is the distinction the television segment ignored.","en"]]:c.psg?[["NapoliTherapy","Ogni frase su Parigi mi aumenta il battito cardiaco.","it"],["SouthStandAnalyst","The one-off nature of the final changes everything tactically.","en"],["VesuvioVoice","Prima arriviamoci vivi al 27 maggio.","it"]]:[["ActuallyWatchTheGame","Finalmente un commento normale. Durato poco.","it"],["NapoliTherapy","I came here to relax. Another tactical error.","en"],["SouthStandAnalyst","There is an actual football point in here somewhere.","en"]];
 return pickReplies(generic,key,1);
}
function thread(a){
 const n=desired(a),out=[],seen=new Set(),c=ctx(a);
 for(const x of explicit(a)){const k=x.t.toLowerCase();if(!seen.has(k)){seen.add(k);out.push(x)}}
 const R=roles(c);let i=0;
 while(out.length<n&&i<n*12){const u=i<R.length?R[i]:H[(hash(a.id)+i)%H.length],g=generated(u,c,a,i),k=g.t.toLowerCase();if(!seen.has(k)){seen.add(k);out.push({u,t:g.t,lang:g.lang||'en',translation:'',replies:[]})}i++}
 return out.slice(0,n).map((row,index)=>({...row,replies:generatedReplies(row,c,a,index)}));
}
function renderReply(r,parentMinutes,ri){const mins=Math.max(1,parentMinutes-(ri+1)*3);return `<article class="fan-comment fan-reply"><div class="comment-avatar fan-avatar">${safe(r.u).slice(0,1).toUpperCase()}</div><div class="comment-body"><div class="comment-user fan-comment-meta"><strong>@${safe(r.u)}</strong><span>${mins}m</span></div><p lang="${safe(r.lang)}">${safe(r.t)}</p><div class="fan-actions"><span>▲ ${7+(hash(r.u+r.t)%96)}</span><span>Reply</span></div></div></article>`}
function render(a){
 const rows=thread(a),replyTotal=rows.reduce((n,r)=>n+(r.replies?.length||0),0);
 return `<section class="fan-comments" data-comments-for="${safe(a.id)}" data-engine="70"><div class="comments-head fan-comments-head"><div><div class="section-kicker">Supporters' thread</div><h3>Comments</h3></div><span>${rows.length} comments${replyTotal?` · ${replyTotal} replies`:''}</span></div><div class="comments-list fan-comments-list">${rows.map((r,i)=>{const parentMinutes=i?Math.min(59,2+i*2):0,replyId=`reply-${hash(a.id+'-'+i+'-'+r.u)}`,replyCount=r.replies?.length||0;return `<article class="fan-comment" data-comment-article="${safe(a.id)}"><div class="comment-avatar fan-avatar">${safe(r.u).slice(0,1).toUpperCase()}</div><div class="comment-body"><div class="comment-user fan-comment-meta"><strong>@${safe(r.u)}</strong><span>${i?parentMinutes+'m':'just now'}</span></div><p lang="${safe(r.lang)}">${safe(r.t)}</p><div class="fan-actions"><span>▲ ${18+(hash(a.id+i)%184)}</span>${replyCount?`<button type="button" class="fan-action-button" data-reply-toggle="${replyId}" aria-expanded="false">View ${replyCount} ${replyCount===1?'reply':'replies'}</button>`:'<span>Reply</span>'}</div>${replyCount?`<div class="comment-replies" id="${replyId}" hidden>${r.replies.map((rr,ri)=>renderReply(rr,parentMinutes||8,ri)).join('')}</div>`:''}</div></article>`}).join('')}</div></section>`;
}
let busy=false;
function sync(){
 if(busy)return;const r=document.getElementById('readerContent');if(!r)return;
 const id=String(r.dataset.articleId||'');if(!id)return;
 const a=D.articles.find(x=>String(x.id)===id);if(!a)return;
 const old=r.querySelector('.fan-comments');if(old?.dataset.engine==='70'&&old.dataset.commentsFor===id)return;
 busy=true;old?.remove();r.insertAdjacentHTML('beforeend',render(a));busy=false;
 document.dispatchEvent(new CustomEvent('seasonroom:comments-rendered',{detail:{id}}));
}
const reader=document.getElementById('readerContent');if(reader){new MutationObserver(()=>queueMicrotask(sync)).observe(reader,{childList:true,subtree:true});sync()}
document.addEventListener('seasonroom:article-opened',()=>requestAnimationFrame(sync));
document.addEventListener('click',e=>{
 const toggle=e.target.closest?.('[data-reply-toggle]');
 if(toggle){const target=document.getElementById(toggle.dataset.replyToggle);if(target){const opening=target.hasAttribute('hidden');if(opening)target.removeAttribute('hidden');else target.setAttribute('hidden','');toggle.setAttribute('aria-expanded',String(opening));const count=target.querySelectorAll('.fan-reply').length;toggle.textContent=opening?'Hide replies':`View ${count} ${count===1?'reply':'replies'}`;}return;}
 if(e.target.closest?.('[data-article]'))requestAnimationFrame(sync);
});
window.NAPOLI_COMMENT_ENGINE_VERSION='7.0.0';
})();