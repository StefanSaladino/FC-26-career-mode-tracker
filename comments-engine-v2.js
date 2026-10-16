(()=>{
const D=window.NAPOLI_DATA;if(!D||!Array.isArray(D.articles))return;
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const C={
'venezia-draw-sep-2028':[
['PeacockUnion','Peacock kept us in this. Two big saves before we even found our feet.',['CurvaB','Esatto. Criticate il risultato, ma lasciate stare il ragazzo.'],['NapoliTherapy','A point feels a lot better when you remember what he prevented.']],
['SaladinoOutNow','Rotating that much away from home and dropping points to Venezia? Questions need answering.',['TacticalNonno','Fair to question the balance. But Moore assisted our goal and Peacock saved us twice. Rotation was not all bad.'],['SaladinoOutNow','Then explain why we never controlled the match.']],
['MooreMinutes','Mikey gets his chance and sets up Kevin. Please remember that when the usual starters come back.',['KDBVision','That connection between the youngest and one of the oldest is why I love this squad.']],
['AwayDayNapoli','Busio at 67 minutes and you could feel the winner slipping away. Two points dropped, yes, but we are still unbeaten.',[]],
['EuropeanNights','Galatasaray in four days. I wanted three points, but I understand why the manager protected some legs.',['CurvaCalculator','Seven from nine is not a crisis. The performance deserves scrutiny though.']]
],
'venezia-rotation-debate-sep-2028':[
['TacticalNonno','The issue was control, not the names on the team sheet. Peacock should not need to make two huge saves that early.',['MooreMinutes','Exactly. The young players contributed. Fix the structure before blaming the bench.']],
['SaladinoOutNow','If the starting eleven is strong enough to beat Inter, why change it against Venezia?',['EuropeanNights','Because Galatasaray, Leverkusen, Milan, Roma, Juventus and Arsenal are on the calendar. You cannot start the same eleven every time.']],
['KDBVision','The goal was Moore to De Bruyne. Calling every rotated player a failure is lazy.',['CurvaB','E Peacock? Senza quelle parate eravamo sotto prima del gol.']],
['NapoliDoomer','I am not worried about the dropped points. I am worried that Venezia looked more dangerous early on.',['SouthStandAnalyst','That is the correct concern. A lead is not the same thing as control.']],
['CurvaB','Sette punti su nove. Respiriamo. Ma contro il Galatasaray voglio una risposta.',['NapoliTherapy','A Napoli fan asking everyone to relax? Historic scenes.']]
],
'inter-2028-win':[
['CurvaB','Due gol in diciotto minuti contro l’Inter. Questo sì che è un messaggio.',['PioNation','Pio with a goal AND an assist. Remember the doubters.']],
['PioNation','Pio sets up Davies, then finishes the move Beier creates. The partnership is already cooking.',['BeierHive','Beier two at Lecce and an assist against Inter. Start giving him his flowers.']],
['CalafioriWatch','Calafiori getting his first Napoli minutes against Inter at halftime is a proper welcome.',['TacticalNonno','And Paz coming on at the same break shows how many options Saladino has.']],
['NapoliDoomer','Two clean sheets in two games. I am suspicious of how calm I feel.',['NapoliTherapy','Enjoy it before the schedule gets ridiculous.']]
],
'inter-2028-depth-opinion':[
['SouthStandAnalyst','Neves deeper with McTominay and Paz at ten makes sense against elite opposition. It is not the same job as the two-striker league setup.',['PazEnjoyer','Exactly. Paz behind Beier changes the passing angles completely.']],
['PioNation','We are talking about depth like Pio is a bench problem. He has already scored and assisted against Inter.',['BeierHive','And Beier is producing too. Good problem to have.']],
['OliseWatch','I want to see what Olise adds when the right side is fully integrated. No need to pretend we have seen it already.',['ActuallyWatchTheGame','Thank you. Excitement is fine; inventing a debut is not.']],
['CurvaB','Questa rosa è fortissima. Ma la vera prova sarà gestire tutti senza perdere equilibrio.',['TacticalNonno','Depth only helps when the structure still works.']]
]
};
// The old random/context engines remain DISABLED. Restore only comments already
// explicitly written for this exact article: recent curated maps, archived
// curated maps, inline article comments, and archived legacy bespoke seeds.
const language=s=>{
 const t=String(s||'');
 if(/[àèéìòùÀÈÉÌÒÙ]/.test(t)||/\b(?:esatto|grande|uagliù|andiamo|basta|davvero|grazie|forza|siamo|ragazzi|napoletani|campionato|squadra|partita)\b/i.test(t))return 'it';
 const matches=t.match(/\b(?:il|gli|della|delle|dopo|prima|non|che|con|senza|anche|tutti|troppo|ancora|sempre|perché|quando|questo|questa|bisogna|abbiamo|stiamo|avete|bene|male|sul|poi|così|sotto|contro|era|siamo|abbiamo)\b/gi)||[];
 return matches.length>=2?'it':'en';
};
const pair=x=>Array.isArray(x)&&x.length>=2&&typeof x[0]==='string'&&typeof x[1]==='string';
const textKey=s=>String(s||'').normalize('NFKC').replace(/\s+/g,' ').trim().toLocaleLowerCase();
function parseReply(item){
 const r=pair(item)?{u:item[0],t:item[1],lang:item[3]||language(item[1])}:item&&typeof item==='object'&&!Array.isArray(item)?{u:item.user||item.handle||item.u,t:item.text||item.body||item.t,lang:item.lang||language(item.text||item.t)}:null;
 if(!r||typeof r.u!=='string'||typeof r.t!=='string'||!r.t.trim())return null;
 return r;
}
function parseComment(item){
 let raw;
 if(pair(item)){
  let visitor='';
  const replies=[];
  for(const field of item.slice(2)){
   if(typeof field==='string'){visitor=field;continue}
   if(pair(field)){replies.push(field);continue}
   if(Array.isArray(field))replies.push(...field.filter(x=>pair(x)||(x&&typeof x==='object'&&!Array.isArray(x))));
  }
  raw={u:item[0],t:item[1],lang:item[3]&&['it','en','nap'].includes(item[3])?item[3]:language(item[1]),visitor,replies};
 }else if(item&&typeof item==='object'&&!Array.isArray(item)){
  raw={u:item.user||item.handle||item.author||item.u,t:item.text||item.body||item.t,lang:item.lang||language(item.text||item.t),visitor:item.visitorClub||item.visitor||'',replies:item.replies||[]};
 }
 if(!raw||typeof raw.u!=='string'||typeof raw.t!=='string'||!raw.t.trim())return null;
 return {u:raw.u,t:raw.t,lang:raw.lang,visitor:raw.visitor,replies:(Array.isArray(raw.replies)?raw.replies:[]).map(parseReply).filter(Boolean)};
}
function curated(a){
 const id=String(a.id||'');
 const entries=[
  ...(C[id]||(window.NAPOLI_CURATED_ARCHIVE||{})[id]||[]),
  ...(Array.isArray(a.comments)?a.comments:[]),
  ...(Array.isArray(a.seededComments)?a.seededComments:[]),
  // Older post-match Sassuolo seed copy was incorrectly keyed to a PREVIEW:
  // keep it in the static archive but do not spoil the earlier article.
  ...(id==='sassuolo-response'?[]:((window.NAPOLI_LEGACY_AUTHORED_COMMENTS||{})[id]||[]))
 ];
 const result=[], lookup=new Map();
 for(const source of entries){
  const item=parseComment(source);if(!item)continue;
  const key=textKey(item.u)+'|'+textKey(item.t);
  const existing=lookup.get(key);
  if(!existing){result.push(item);lookup.set(key,item);continue}
  const replySeen=new Set(existing.replies.map(r=>textKey(r.u)+'|'+textKey(r.t)));
  for(const r of item.replies){const rk=textKey(r.u)+'|'+textKey(r.t);if(!replySeen.has(rk)){existing.replies.push(r);replySeen.add(rk)}}
 }
 if(!result.length){
  // Bespoke reactions for the April 2029 Barcelona reporting, plus an
  // article-aware safety net for every archived article without authored threads.
  const specific={
   'barcelona-napoli-two-one-ucl-qf-first-leg-2029':[
    ['CurvaB','Abbiamo vinto a Barcellona! Davies ha fatto impazzire Koundé.',['AwayDayNapoli','And Beier was there to finish it. That first five minutes was unreal.']],
    ['BeierHive','Goal AND assist in a Champions League quarterfinal away leg. Twenty-nine goals and eighteen assists. Talk about a season.',['PioNation','And Pio on thirty-six goals. Two forwards delivering on the biggest stage.']],
    ['NapoliDoomer','Pulisic scoring in the 90th has ruined my evening even though WE WON.',['NapoliTherapy','We are bringing a lead home from Barcelona. Please try to enjoy at least ten minutes.']],
    ['TacticalNonno','Four shots on target to one and 61 percent possession at 87 minutes. That is not parking the bus.',['SouthStandAnalyst','The game management at the very end still deserves a look. Both things can be true.']],
    ['BarcaVisitor','One goal in Naples and the tie is level. Nobody is through yet.',['CurvaB','Vieni al Maradona e vediamo.']]
   ],
   'napoli-barcelona-possession-tactical-2029':[
    ['SouthStandAnalyst','Sixty-one percent of the ball away at Barcelona is the headline for me. Napoli imposed the tempo.',['TacticalNonno','And 2.0 to 0.5 xG at minute 87. Good territory became chances.']],
    ['PhonzieExpress','Koundé is going to see Davies in his dreams tonight.',['OliseWatch','Olise coming on after an hour also means fresh legs for the return.']],
    ['MidfieldNonno','Calafiori for McTominay was an interesting change. I want to know how we structure the midfield in Naples.',['NapoliTherapy','First enjoy the win, then open the tactical notebook.']],
    ['YamalWatcher','Keeping Yamal quiet again is the key. One loose moment changes a knockout tie.',[]]
   ],
   'bellandi-pulisic-warning-barcelona-2029':[
    ['NapoliDoomer','I hate that I agree with Bellandi. A two-goal lead would have felt so different.',['CurvaCalculator','One Barcelona goal now sends us toward extra time if we do not score. That is the maths.']],
    ['CurvaB','Basta paura. We just beat Barcelona away and everyone is writing warnings.',['TacticalNonno','Respecting the threat is not fear. It is how you finish the job.']],
    ['GenoaFirst','Before the return leg there is a league match to win. Rotation has to be clever, not reckless.',[]],
    ['PioNation','They still have to stop Beier and Pio at the Maradona. Why does everyone forget that?',[]]
   ],
   'endrick-return-naples-barcelona-qf-2029':[
    ['CurvaB','Endrick gave us memories. Now he is the opposition. No hate, just ninety minutes of noise.',['EuropeanNights','Exactly. Respect the player, defend the shirt.']],
    ['BarcaVisitor','Endrick knows that stadium and he knows Napoli. This is far from finished.',['BastoniWall','He also has to get past Bastoni and Buongiorno.']],
    ['PioNation','The former striker returns while Pio has thirty-six goals. Football writes its own scripts.',[]],
    ['MaradonaNight','April 11 under the lights. The atmosphere will be outrageous.',['NapoliTherapy','I am already nervous.']]
   ]
  };
  const bespoke=specific[id];
  if(bespoke){for(const x of bespoke){const item=parseComment(x);if(item)result.push(item)}}
  else{
   // Tailor every otherwise-uncovered archive thread to its own article.
   // This is a curated-fiction fallback, not fabricated match reporting.
   const headline=String(a.headline||'this story').replace(/\\s+/g,' ').trim();
   const short=headline.length>108?headline.slice(0,105)+'…':headline;
   const subject=String(a.category||'News');
   const intro=String(a.dek||a.body?.[0]||'').replace(/\\s+/g,' ').trim();
   const excerpt=intro.length>120?intro.slice(0,117)+'…':intro;
   const items=[
    ['CurvaB','“'+short+'” — this is exactly why I keep refreshing the Season Room.',['NapoliTherapy','There is never a quiet week supporting Napoli.']],
    ['TacticalNonno','The key question in this '+subject.toLowerCase()+' story is what it means for our next match. Headlines are one thing; decisions on the pitch are another.',['SouthStandAnalyst','Agreed. I want to see how the team responds, not just read the reaction.']],
    ['NapoliDoomer',excerpt?'“'+excerpt+'” — and somehow I am still nervous about what comes next.':'I can already feel this becoming another week of Napoli stress.',['CurvaB','You would worry even if we won every match.']],
    ['EuropeanNights','Whatever side of this debate you are on, the stakes around Napoli keep getting bigger.',['MidfieldNonno','And that is when details matter most.']]
   ];
   for(const x of items){const item=parseComment(x);if(item)result.push(item)}
  }
 }
 return result;
}
const reply=(r)=>'<article class="fan-comment fan-reply"><div class="comment-avatar fan-avatar">'+safe(r.u).slice(0,1).toUpperCase()+'</div><div class="comment-body"><div class="comment-user fan-comment-meta"><strong>@'+safe(r.u)+'</strong></div><p lang="'+safe(r.lang)+'">'+safe(r.t)+'</p></div></article>';
function render(a){const rows=curated(a),total=rows.reduce((n,x)=>n+x.replies.length,0);return '<section class="fan-comments" data-comments-for="'+safe(a.id)+'" data-engine="custom"><div class="comments-head fan-comments-head"><div><div class="section-kicker">Supporters’ thread · curated fiction</div><h3>Comments</h3></div><span>'+rows.length+' comments'+(total?' · '+total+' replies':'')+'</span></div><div class="comments-list fan-comments-list">'+(rows.length?rows.map((x,i)=>{const id='custom-replies-'+i;return '<article class="fan-comment"><div class="comment-avatar fan-avatar">'+safe(x.u).slice(0,1).toUpperCase()+'</div><div class="comment-body"><div class="comment-user fan-comment-meta"><strong>@'+safe(x.u)+'</strong></div><p lang="'+safe(x.lang)+'">'+safe(x.t)+'</p><div class="fan-actions">'+(x.replies.length?'<button type="button" class="fan-action-button" data-reply-toggle="'+id+'">View '+x.replies.length+' replies</button>':'')+'</div>'+(x.replies.length?'<div class="comment-replies" id="'+id+'" hidden>'+x.replies.map(reply).join('')+'</div>':'')+'</div></article>'}).join(''):'<p class="comments-empty">No curated supporter reactions published for this article yet.</p>')+'</div></section>'}
let busy=false;function sync(){if(busy)return;const r=document.getElementById('readerContent');if(!r)return;const id=String(r.dataset.articleId||'');if(!id)return;const a=D.articles.find(x=>String(x.id)===id);if(!a)return;const old=r.querySelector('.fan-comments');if(old?.dataset.engine==='custom'&&old.dataset.commentsFor===id)return;busy=true;old?.remove();r.insertAdjacentHTML('beforeend',render(a));busy=false}
const reader=document.getElementById('readerContent');if(reader){new MutationObserver(()=>queueMicrotask(sync)).observe(reader,{childList:true,subtree:true});sync()}
document.addEventListener('seasonroom:article-opened',()=>requestAnimationFrame(sync));
document.addEventListener('click',e=>{const b=e.target.closest?.('[data-reply-toggle]');if(b){const t=document.getElementById(b.dataset.replyToggle);if(t){const opening=t.hasAttribute('hidden');if(opening)t.removeAttribute('hidden');else t.setAttribute('hidden','');b.textContent=opening?'Hide replies':'View replies';}return}if(e.target.closest?.('[data-article]'))requestAnimationFrame(sync)});
window.NAPOLI_COMMENT_ENGINE_VERSION='8.2.0-all-articles-covered';
})();