(()=>{
const D=window.NAPOLI_DATA;if(!D||!Array.isArray(D.articles))return;
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const H=['VesuvioVoice','PartenopeiProfessor','NapoliTherapy','CurvaB','AzzurriWatch','OldSchoolAzzurro','VomeroView','ForzaSempre','SanPaoloSoul','PiazzaPundit','NoTacticsJustVibes','SempreNapoli','NapoliDoomer','90MinuteNervousBreakdown','SanPaoloSufferer','matchday_meltdown','VARConspiracyDesk','touchlinelawyer','ActuallyWatchTheGame','SouthStandAnalyst','NapoliSinceBirth','OneNilEnjoyer','CleanSheetCult','LateGoalTrauma','EuropeanNights','CupRomantic','VesuviusPress','AwayDayNapoli','curva_commentator','napoli_in_my_blood','partenopei92','northstandnoise','bluewall'];
const hash=s=>{let h=0;for(const c of String(s))h=((h<<5)-h+c.charCodeAt(0))|0;return Math.abs(h)};
const text=a=>[a.headline,a.dek,a.category,a.label,a.date,...(Array.isArray(a.body)?a.body:[])].filter(Boolean).join(' ');
function norm(r){
 if(Array.isArray(r))return{u:r[0],t:r[1],lang:r[2]||'en',translation:r[3]||'',replies:Array.isArray(r[4])?r[4].map(norm).filter(Boolean):[]};
 if(r&&typeof r==='object')return{u:r.user||r.handle||r.u||'CurvaB',t:r.text||r.comment||r.t||'',lang:r.lang||'en',translation:r.translation||r.en||'',replies:Array.isArray(r.replies)?r.replies.map(norm).filter(Boolean):[]};
 return null;
}
const explicit=a=>[...(Array.isArray(a.comments)?a.comments:[]),...((window.NAPOLI_SEEDED_COMMENTS||{})[a.id]||[])].map(norm).filter(x=>x?.t);
const isChamp=a=>String(a.id||'').startsWith('scudetto-2028-');
const desired=a=>isChamp(a)?56+(hash(a.id)%13):Math.max(14,Math.min(28,Number(a.commentHeat||10)+8));
function ctx(a){
 const t=text(a).toLowerCase(),c={};
 c.pio=/pio|esposito/.test(t);c.beier=/beier/.test(t);c.endrick=/endrick/.test(t);c.meret=/meret/.test(t);c.bastoni=/bastoni/.test(t);c.buongiorno=/buongiorno/.test(t);c.paz=/\bpaz\b|nico/.test(t);c.chiesa=/chiesa/.test(t);c.davies=/davies/.test(t);c.kdb=/de bruyne|kdb/.test(t);
 c.title=/scudetto|champion|campioni/.test(t);c.psg=/paris saint-germain|\bpsg\b/.test(t);c.final=c.psg&&/champions league final|european cup final|\bthe final\b|\bfinalist/.test(t);c.barca=/barcelona/.test(t)&&!c.psg;c.atletico=/atletico|atlético/.test(t);c.madrid=/real madrid/.test(t);
 c.ucl=/champions league|european cup|semifinal|semi-final|quarter-final|round of 16/.test(t);c.unbeaten=/unbeaten|invincible|25.?9.?0|26.?9.?0|zero defeats|no defeats/.test(t);c.interview=/interview/.test(t)||String(a.category).toLowerCase()==='interview';c.preview=/preview/.test(t)||String(a.label).toLowerCase().includes('preview');c.celebration=/celebrat|trophy|party/.test(t);c.defence=/defen|clean sheet|wall/.test(t);c.transfer=/transfer|mercato|rumou?r/.test(`${a.category||''} ${a.label||''} ${a.headline||''}`.toLowerCase());
 return c;
}
function roles(c){const r=[];if(c.pio)r.push('PioNation','PioHaterForNoReason','PioShirtOwner');if(c.beier)r.push('BeierDefenseLeague','BeierHive');if(c.endrick)r.push('EndrickEra');if(c.meret)r.push('MeretUnion','MeretRedemptionTour');if(c.bastoni)r.push('BastoniAgenda','BastoniWall');if(c.buongiorno)r.push('BuongiornoBrigade');if(c.paz)r.push('PazEnjoyer');if(c.chiesa)r.push('ChiesaHive','FedeForever');if(c.davies)r.push('DaviesExpress','DaviesDrive');if(c.kdb)r.push('KDBVision','KDBClock');if(c.title)r.push('ScudettoOrBust','CurvaCalculator');if(c.ucl)r.push('EuropeanNights');r.push('SaladinoOutNow');return r}
const pools={
 title:['CHAMPIONS. I am going to be completely unbearable about this for months.','The trophy picture still does not look real to me 😭','All those stressful ugly wins were worth every second.','This squad gave us a season we are going to talk about for years.','Someone check on the people who said this team would fall apart by February.','Naples tonight must be absolute chaos. As it should be.','The best part is how many different players had a real hand in this title.','Enjoy the medal tonight. Tomorrow we start getting greedy again.'],
 unbeaten:['That zero in the loss column has become its own source of stress.','The title is secured and somehow the unbeaten run makes the remaining league games feel tense anyway.','Please protect the unbeaten season without treating it as more important than the cups.','Going unbeaten would turn a brilliant league season into permanent club-history material.'],
 ucl:['This team has learned how to suffer in Europe and that matters more every round.','Inter, Madrid, Atlético, Barcelona. Nobody can call this an easy path.','There is no tourist mentality left in this squad. They belong on this stage.','Every European round has asked a different question and Napoli have found an answer.'],
 psg:['PSG in a one-off final is terrifying. It is also exactly the kind of match this season has earned.','No second leg. No correction game. One night for the European Cup.','After Inter, Madrid, Atlético and Barcelona, there is no reason to arrive at PSG feeling inferior.','Respect PSG. Fear nobody. This team has already proved it belongs in the final.','May 27 is going to take years off my life.'],
 barca:['Barcelona away first is fine by me. Stay alive there and bring the tie back to Naples.','Their name is huge. So is the opportunity. Go make them defend Pio, Beier and the rest of this attack.','The key for me is not sitting in a low block for 90 minutes. Make Barça uncomfortable too.','May 2 at the Maradona could be one of those nights people remember forever.'],
 pio:['Pio in a massive European match just feels inevitable now.','The kid went from prospect to main character ridiculously fast.','Big games do not seem to change his heartbeat at all.','The numbers are huge and somehow still undersell the season he is having.'],
 beier:['The Beier apology queue remains open. Please have your paperwork ready.','Stop talking about Beier like he is merely useful depth. He has forced his way into star status.','Having Beier available in a match like this is such a luxury. He can change the whole shape of the attack.'],
 meret:['Meret has earned every bit of this redemption arc.','The knockout rounds completely changed the way I look at Meret in Europe.','Knockout football eventually asks your keeper to save the tie. Meret has been doing exactly that.'],
 defence:['Bastoni and Buongiorno give this team a completely different level of calm.','The attack gets the clips but the defensive spine is why we can survive nights when nothing is easy.','Please give the centre-backs their flowers too. Titles are not won by forwards alone.'],
 kdb:['This is exactly why you bring in someone like KDB. He knows the trophy is not the finish line.','KDB saying celebrate and then immediately want the next one is the mentality I want around this squad.','The younger guys having De Bruyne beside them on nights this big is priceless experience.'],
 interview:['Good interview. No fake humility, no chest-beating. Enjoy the title and go attack the next objective.','I like hearing the players acknowledge the celebration without acting like the season ended there.','This dressing room sounds hungry rather than satisfied. That is what I wanted to hear.'],
 celebration:['I would like approximately 400 more celebration photos please.','You can see months of pressure disappearing in those faces.','Keep these pictures in the archive forever.'],
 generic:['This season keeps finding a new way to get more interesting.','I swear every week we unlock another storyline.','There are about six different agendas fighting for control of this comment section right now.','The vibes are immaculate and therefore I am immediately suspicious.','We are reaching the stage of the season where every match feels like club history.','I have abandoned objectivity. Forza Napoli.','The squad depth is finally making sense now that every competition is still demanding something.','This is why you build a team instead of just an XI.']
};
function persona(u,c){
 if(u==='SaladinoOutNow'){
  if(c.psg)return 'Congratulations on reaching the final with a squad built to compete for trophies. PSG will reveal whether Saladino can actually finish the job. Saladino OUT.';
  if(c.title)return 'Congratulations on doing the bare minimum with a championship-calibre squad. I remain unconvinced. Saladino OUT.';
  if(c.barca)return 'If Saladino gets tactically cute against Barcelona I will be waiting with documents. Saladino OUT.';
  if(c.ucl)return 'European progress is welcome. I will evaluate the manager when the biggest test arrives. Saladino OUT.';
  return 'I remain unconvinced by Saladino and will not be silenced by temporary evidence.';
 }
 if(u==='PioHaterForNoReason')return c.pio?'I acknowledge the goals, assists and big moments. I simply reject their implications.':'I was ready to blame Pio but apparently the article has denied me that opportunity.';
 if(u==='PioNation')return c.psg?'OUR GUY in a European Cup final. Give him the stage and let history happen.':c.barca?'Pio already decided the Atlético tie. Give him Barcelona and watch what happens.':'OUR GUY. That is the entire comment.';
 if(u==='PioShirtOwner')return 'Bought the Pio shirt before the bandwagon filled up. My records are immaculate.';
 if(/Beier/.test(u))return 'The “rotation striker” conversation is dead. Beier forced everyone to update the hierarchy.';
 if(/Meret/.test(u))return 'Meret slanderers have been extremely quiet since the knockout rounds started.';
 if(/Bastoni/.test(u))return c.psg?'Bastoni in a Champions League final is exactly why you make that kind of signing.':'Bastoni on this European run is exactly why you make that kind of signing.';
 if(u==='BuongiornoBrigade')return 'Bastoni gets the headlines and Buongiorno keeps doing elite work next to him. I see you.';
 if(u==='PazEnjoyer')return c.psg?'Nico Paz already opened the scoring in the night that sent us to the final. One more European stage.':'One Nico Paz pass can change an entire tie. That is why you keep him central.';
 if(/Chiesa|Fede/.test(u))return c.psg?'If Chiesa has one more historic European contribution in him, May 27 would be a decent time for it.':'Give Chiesa space in transition and let him run.';
 if(/Davies/.test(u))return c.psg?'Davies in a one-off final is basically a controlled emergency for PSG.':'Davies in an open European game is basically a controlled emergency for the opponent.';
 if(/KDB/.test(u))return c.psg?'This is the exact night you wanted KDB in the building for. A final needs people who have lived at this altitude.':'Veteran KDB treating the Scudetto like checkpoint one instead of the finish line. Perfect.';
 if(u==='CurvaCalculator')return c.psg&&c.unbeaten?'26 wins, 9 draws, 0 losses. Champions. European Cup final. I have checked the arithmetic and it remains absurd.':c.unbeaten?'The unbeaten arithmetic is becoming emotionally irresponsible.':'I have spreadsheets open and emotions closed.';
 if(u==='ScudettoOrBust')return 'My username has completed its purpose. I am accepting suggestions for a new identity.';
 if(u==='EuropeanNights')return c.psg?'Inter. Madrid. Atlético. Barcelona. Now PSG. If you want immortality, this is the road.':c.barca?'Madrid. Atlético. Now Barcelona. If you want to reach a final, this is the road.':'European nights with this team have aged me approximately twelve years.';
 return null;
}
function generated(u,c,a,i){const p=persona(u,c);if(p)return p;let choices=[];if(c.title)choices.push(...pools.title);if(c.unbeaten)choices.push(...pools.unbeaten);if(c.ucl)choices.push(...pools.ucl);if(c.psg&&!c.transfer)choices.push(...pools.psg);if(c.barca)choices.push(...pools.barca);if(c.pio)choices.push(...pools.pio);if(c.beier)choices.push(...pools.beier);if(c.meret)choices.push(...pools.meret);if(c.defence)choices.push(...pools.defence);if(c.kdb)choices.push(...pools.kdb);if(c.interview)choices.push(...pools.interview);if(c.celebration)choices.push(...pools.celebration);choices.push(...pools.generic);return choices[(hash(a.id+u)+i)%choices.length]}
function generatedReplies(parent,c,a,i){
 if(Array.isArray(parent.replies)&&parent.replies.length)return parent.replies;
 const rows=[];
 const add=(u,t)=>rows.push({u,t,lang:'en',translation:'',replies:[]});
 if(parent.u==='SaladinoOutNow'){
  if(c.psg){add('ActuallyWatchTheGame','You said the same thing before Madrid, then Atlético, then Barça. The goalposts have their own passport at this point.');add('CurvaCalculator','Unbeaten champions plus a European Cup final is “bare minimum” only if your calculator is actively hostile.');add('EuropeanNights','Fine. PSG is the test. But if Napoli win, I expect a 4,000-word apology thread.');}
  else if(c.title){add('ActuallyWatchTheGame','Winning the league is now the bare minimum. Incredible work moving the standard after the trophy is already in the cabinet.');add('NapoliDoomer','I disagree with you, which is upsetting because I prefer being the unreasonable one in here.');}
 }
 if(parent.u==='PioHaterForNoReason'){add('PioNation','“I reject their implications” is the strongest anti-evidence platform on this website. Respect the commitment.');add('PioShirtOwner','Please continue. Every complaint adds value to the shirt.');}
 if(parent.u==='NapoliDoomer'&&c.psg){add('90MinuteNervousBreakdown','Deleting the website will not cancel the final. I checked.');add('EuropeanNights','We have survived your predicted apocalypse in four straight knockout rounds. Stay consistent.');}
 if(parent.u==='Interista'){add('CurvaB','That is fair. Win the final and then we can become completely insufferable.');}
 if(parent.u==='Milanista'){add('VesuvioVoice','A rival fan admitting this is serious is somehow more frightening than praise from us.');}
 if(parent.u==='OldGuard87'){add('SanPaoloSoul','This is the right distinction. 1987 is the soul of the club. This team is pushing the sporting ceiling somewhere new.');}
 if(!rows.length&&hash(`${a.id}:${parent.u}:${i}:reply`)%6===0){
  const options=c.psg?
   [['ActuallyWatchTheGame','At least we have finally reached the point where every argument ends with “okay, now beat PSG.”'],['NapoliTherapy','I opened this thread for comfort and somehow became more nervous about May 27.'],['SouthStandAnalyst','The most impressive thing is that the team has reached this stage without one single way of winning.']]:
   [['ActuallyWatchTheGame','This is a much more reasonable take than the rest of this comment section deserves.'],['NapoliTherapy','I came here to relax. That was my first mistake.'],['SouthStandAnalyst','There is an actual football point buried under all the agenda posting here.']];
  const [u,t]=options[hash(`${parent.u}:${a.id}`)%options.length];add(u,t);
 }
 return rows.slice(0,3);
}
function thread(a){
 const n=desired(a),out=[],seen=new Set(),c=ctx(a);
 for(const x of explicit(a)){const k=x.t.toLowerCase();if(!seen.has(k)){seen.add(k);out.push(x)}}
 const R=roles(c);let i=0;
 while(out.length<n&&i<n*10){const u=i<R.length?R[i]:H[(hash(a.id)+i)%H.length],t=generated(u,c,a,i),k=t.toLowerCase();if(!seen.has(k)){seen.add(k);out.push({u,t,lang:'en',translation:'',replies:[]})}i++}
 return out.slice(0,n).map((row,index)=>({...row,replies:generatedReplies(row,c,a,index)}));
}
function renderReply(r,parentMinutes,ri){const mins=Math.max(1,parentMinutes-(ri+1)*3);return `<article class="fan-comment fan-reply"><div class="comment-avatar fan-avatar">${safe(r.u).slice(0,1).toUpperCase()}</div><div class="comment-body"><div class="comment-user fan-comment-meta"><strong>@${safe(r.u)}</strong><span>${mins}m</span></div><p lang="${safe(r.lang)}">${safe(r.t)}</p><div class="fan-actions"><span>▲ ${7+(hash(r.u+r.t)%96)}</span><span>Reply</span></div></div></article>`}
function render(a){
 const rows=thread(a),replyTotal=rows.reduce((n,r)=>n+(r.replies?.length||0),0);
 return `<section class="fan-comments" data-comments-for="${safe(a.id)}" data-engine="60"><div class="comments-head fan-comments-head"><div><div class="section-kicker">Supporters' thread</div><h3>Comments</h3></div><span>${rows.length} comments${replyTotal?` · ${replyTotal} replies`:''}</span></div><div class="comments-list fan-comments-list">${rows.map((r,i)=>{const parentMinutes=i?Math.min(59,2+i*2):0,replyId=`reply-${hash(a.id+'-'+i)}`,replyCount=r.replies?.length||0;return `<article class="fan-comment"><div class="comment-avatar fan-avatar">${safe(r.u).slice(0,1).toUpperCase()}</div><div class="comment-body"><div class="comment-user fan-comment-meta"><strong>@${safe(r.u)}</strong><span>${i?parentMinutes+'m':'just now'}</span></div><p lang="${safe(r.lang)}">${safe(r.t)}</p><div class="fan-actions"><span>▲ ${18+(hash(a.id+i)%184)}</span>${replyCount?`<button type="button" class="fan-action-button" data-reply-toggle="${replyId}" aria-expanded="false">View ${replyCount} ${replyCount===1?'reply':'replies'}</button>`:'<span>Reply</span>'}</div>${replyCount?`<div class="comment-replies" id="${replyId}" hidden>${r.replies.map((rr,ri)=>renderReply(rr,parentMinutes||8,ri)).join('')}</div>`:''}</div></article>`}).join('')}</div></section>`;
}
let busy=false;
function sync(){if(busy)return;const r=document.getElementById('readerContent');if(!r)return;const id=r.dataset.articleId,h=r.querySelector('#readerHeadline')?.textContent?.trim();const a=D.articles.find(x=>String(x.id)===String(id))||D.articles.find(x=>String(x.headline).trim()===h);if(!a)return;const old=r.querySelector('.fan-comments');if(old?.dataset.engine==='60'&&old.dataset.commentsFor===String(a.id))return;busy=true;old?.remove();r.insertAdjacentHTML('beforeend',render(a));busy=false}
const r=document.getElementById('readerContent');if(r){new MutationObserver(()=>queueMicrotask(sync)).observe(r,{childList:true,subtree:true});sync()}
document.addEventListener('seasonroom:article-opened',()=>requestAnimationFrame(sync));
document.addEventListener('click',e=>{
 const toggle=e.target.closest?.('[data-reply-toggle]');
 if(toggle){const target=document.getElementById(toggle.dataset.replyToggle);if(target){const opening=target.hasAttribute('hidden');if(opening)target.removeAttribute('hidden');else target.setAttribute('hidden','');toggle.setAttribute('aria-expanded',String(opening));const count=target.querySelectorAll('.fan-reply').length;toggle.textContent=opening?'Hide replies':`View ${count} ${count===1?'reply':'replies'}`;}return;}
 if(e.target.closest?.('[data-article]'))requestAnimationFrame(sync);
});
window.NAPOLI_COMMENT_ENGINE_VERSION='6.0.0';
})();