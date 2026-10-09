(()=>{
const D=window.NAPOLI_DATA;if(!D||!Array.isArray(D.articles))return;
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const C={
'venezia-draw-sep-2028':[
['PeacockUnion','Peacock kept us in this. Two big saves before we even found our feet.',['CurvaB','Esatto. Criticate il risultato, ma lasciate stare il ragazzo.'],['NapoliTherapy','A point feels a lot better when you remember what he prevented.']]],
['SaladinoOutNow','Rotating that much away from home and dropping points to Venezia? Questions need answering.',['TacticalNonno','Fair to question the balance. But Moore assisted our goal and Peacock saved us twice. Rotation was not all bad.'],['SaladinoOutNow','Then explain why we never controlled the match.']]],
['MooreMinutes','Mikey gets his chance and sets up Kevin. Please remember that when the usual starters come back.',['KDBVision','That connection between the youngest and one of the oldest is why I love this squad.']]],
['AwayDayNapoli','Busio at 67 minutes and you could feel the winner slipping away. Two points dropped, yes, but we are still unbeaten.',[]],
['EuropeanNights','Galatasaray in four days. I wanted three points, but I understand why the manager protected some legs.',['CurvaCalculator','Seven from nine is not a crisis. The performance deserves scrutiny though.']]
],
'venezia-rotation-debate-sep-2028':[
['TacticalNonno','The issue was control, not the names on the team sheet. Peacock should not need to make two huge saves that early.',['MooreMinutes','Exactly. The young players contributed. Fix the structure before blaming the bench.']]],
['SaladinoOutNow','If the starting eleven is strong enough to beat Inter, why change it against Venezia?',['EuropeanNights','Because Galatasaray, Leverkusen, Milan, Roma, Juventus and Arsenal are on the calendar. You cannot start the same eleven every time.']]],
['KDBVision','The goal was Moore to De Bruyne. Calling every rotated player a failure is lazy.',['CurvaB','E Peacock? Senza quelle parate eravamo sotto prima del gol.']]],
['NapoliDoomer','I am not worried about the dropped points. I am worried that Venezia looked more dangerous early on.',['SouthStandAnalyst','That is the correct concern. A lead is not the same thing as control.']]],
['CurvaB','Sette punti su nove. Respiriamo. Ma contro il Galatasaray voglio una risposta.',['NapoliTherapy','A Napoli fan asking everyone to relax? Historic scenes.']]
],
'inter-2028-win':[
['CurvaB','Due gol in diciotto minuti contro l’Inter. Questo sì che è un messaggio.',['PioNation','Pio with a goal AND an assist. Remember the doubters.']]],
['PioNation','Pio sets up Davies, then finishes the move Beier creates. The partnership is already cooking.',['BeierHive','Beier two at Lecce and an assist against Inter. Start giving him his flowers.']]],
['CalafioriWatch','Calafiori getting his first Napoli minutes against Inter at halftime is a proper welcome.',['TacticalNonno','And Paz coming on at the same break shows how many options Saladino has.']]],
['NapoliDoomer','Two clean sheets in two games. I am suspicious of how calm I feel.',['NapoliTherapy','Enjoy it before the schedule gets ridiculous.']]]
],
'inter-2028-depth-opinion':[
['SouthStandAnalyst','Neves deeper with McTominay and Paz at ten makes sense against elite opposition. It is not the same job as the two-striker league setup.',['PazEnjoyer','Exactly. Paz behind Beier changes the passing angles completely.']]],
['PioNation','We are talking about depth like Pio is a bench problem. He has already scored and assisted against Inter.',['BeierHive','And Beier is producing too. Good problem to have.']]],
['OliseWatch','I want to see what Olise adds when the right side is fully integrated. No need to pretend we have seen it already.',['ActuallyWatchTheGame','Thank you. Excitement is fine; inventing a debut is not.']]],
['CurvaB','Questa rosa è fortissima. Ma la vera prova sarà gestire tutti senza perdere equilibrio.',['TacticalNonno','Depth only helps when the structure still works.']]]
]
};
const norm=x=>Array.isArray(x)?{u:x[0],t:x[1],lang:/[àèéìòù]/i.test(x[1])?'it':'en',replies:(x[2]||[]).map(y=>({u:y[0],t:y[1],lang:/[àèéìòù]/i.test(y[1])?'it':'en'}))}:null;
const curated=a=>{const seed=(window.NAPOLI_SEEDED_COMMENTS||{})[a.id];const entries=C[a.id]||seed||a.comments||[];return entries.map(norm).filter(x=>x&&x.t)};
const reply=(r)=>'<article class="fan-comment fan-reply"><div class="comment-avatar fan-avatar">'+safe(r.u).slice(0,1).toUpperCase()+'</div><div class="comment-body"><div class="comment-user fan-comment-meta"><strong>@'+safe(r.u)+'</strong></div><p lang="'+safe(r.lang)+'">'+safe(r.t)+'</p></div></article>';
function render(a){const rows=curated(a),total=rows.reduce((n,x)=>n+x.replies.length,0);return '<section class="fan-comments" data-comments-for="'+safe(a.id)+'" data-engine="custom"><div class="comments-head fan-comments-head"><div><div class="section-kicker">Supporters’ thread · curated fiction</div><h3>Comments</h3></div><span>'+rows.length+' comments'+(total?' · '+total+' replies':'')+'</span></div><div class="comments-list fan-comments-list">'+(rows.length?rows.map((x,i)=>{const id='custom-replies-'+i;return '<article class="fan-comment"><div class="comment-avatar fan-avatar">'+safe(x.u).slice(0,1).toUpperCase()+'</div><div class="comment-body"><div class="comment-user fan-comment-meta"><strong>@'+safe(x.u)+'</strong></div><p lang="'+safe(x.lang)+'">'+safe(x.t)+'</p><div class="fan-actions">'+(x.replies.length?'<button type="button" class="fan-action-button" data-reply-toggle="'+id+'">View '+x.replies.length+' replies</button>':'')+'</div>'+(x.replies.length?'<div class="comment-replies" id="'+id+'" hidden>'+x.replies.map(reply).join('')+'</div>':'')+'</div></article>'}).join(''):'<p class="comments-empty">No curated supporter reactions published for this article yet.</p>')+'</div></section>'}
let busy=false;function sync(){if(busy)return;const r=document.getElementById('readerContent');if(!r)return;const id=String(r.dataset.articleId||'');if(!id)return;const a=D.articles.find(x=>String(x.id)===id);if(!a)return;const old=r.querySelector('.fan-comments');if(old?.dataset.engine==='custom'&&old.dataset.commentsFor===id)return;busy=true;old?.remove();r.insertAdjacentHTML('beforeend',render(a));busy=false}
const reader=document.getElementById('readerContent');if(reader){new MutationObserver(()=>queueMicrotask(sync)).observe(reader,{childList:true,subtree:true});sync()}
document.addEventListener('seasonroom:article-opened',()=>requestAnimationFrame(sync));
document.addEventListener('click',e=>{const b=e.target.closest?.('[data-reply-toggle]');if(b){const t=document.getElementById(b.dataset.replyToggle);if(t){const opening=t.hasAttribute('hidden');if(opening)t.removeAttribute('hidden');else t.setAttribute('hidden','');b.textContent=opening?'Hide replies':'View replies';}return}if(e.target.closest?.('[data-article]'))requestAnimationFrame(sync)});
window.NAPOLI_COMMENT_ENGINE_VERSION='8.0.0-custom-only';
})();