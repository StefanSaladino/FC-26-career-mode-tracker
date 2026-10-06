(() => {
 const D=window.NAPOLI_DATA;if(!D||!Array.isArray(D.articles))return;
 const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot',"'":'&#39;'}[c]));
 const handles=['VesuvioVoice','PartenopeiProfessor','NapoliTherapy','ScudettoOrBust','CurvaCalculator','BlueSideNaples','TacticalNonno','CurvaB','AzzurriWatch','OldSchoolAzzurro','VomeroView','ForzaSempre','SanPaoloSoul','NaplesAwayDays','PiazzaPundit','NoTacticsJustVibes','SempreNapoli','PioEra','EndrickEra','MeretWall','Pazienza','SaladinoOutNow','NapoliDoomer','90MinuteNervousBreakdown','SanPaoloSufferer','matchday_meltdown','TransferListEveryone','scapegoat_selector','VARConspiracyDesk','touchlinelawyer','PioNation','PioShirtOwner','PioHaterForNoReason','BeierDefenseLeague','BeierHive','PazEnjoyer','ChiesaHive','FedeForever','ChiesaCurve','MeretUnion','MeretRedemptionTour','DaviesExpress','DaviesDrive','BastoniAgenda','BastoniWall','BuongiornoBrigade','StachAttack','CaptainRespect','KDBClock','KDBVision','GeertruidaWatch','PeacockWatch','MidfieldNonno','RotationPolice','SquadDepthDept','CalendarVictim','PressingTruther','SecondBallMerchant','LowBlockSurvivor','SetPiecePanic','HalftimeOverthinker','ExpectedGoalsHater','ActuallyWatchTheGame','SouthStandAnalyst','NapoliSinceBirth','OneNilEnjoyer','CleanSheetCult','LateGoalTrauma','EuropeanNights','CupRomantic','TitleRaceInsomnia','MercatoMadness','NoSellingAllowed','VesuviusPress','AwayDayNapoli','curva_commentator','napoli_in_my_blood','partenopei92','northstandnoise','bluewall','vesuvio_voice'];
 const rivalHandles=['AwayEndTourist','OppositionScout','ScoreboardMerchant','HereForTheMeltdown','VisitingNoise','WrongEndOfTown','RivalAccount','AwayDayLurker','NeutralButNotReally','TableScreenshotter','GuestSection','RivalWithReceipts','AwayEndLawyer','OppositionTherapy','VisitingTactico','ScorelineEnjoyer','CommentSectionInvader','NotYourFriend','RivalHistorian','AwayFanOnWifi','TunnelCamGuest','LastWordMerchant','AwayDayAccount','VisitingProfessor'];
 const hash=s=>{let h=0;for(const c of String(s))h=((h<<5)-h+c.charCodeAt(0))|0;return Math.abs(h)};
 const subject=a=>String(a.headline||'this story').replace(/[.!?]+$/,'');
 const detail=a=>{const b=Array.isArray(a.body)?a.body.join(' '):String(a.body||'');return String(a.dek||b||'').replace(/\s+/g,' ').trim()};
 const pickDetail=a=>{const t=detail(a);if(!t)return subject(a);const ss=t.split(/(?<=[.!?])\s+/).filter(x=>x.length>18);return (ss[hash(a.id)%Math.max(1,ss.length)]||t).slice(0,190)};
 const allText=a=>[a.category,a.label,a.date,a.headline,a.dek,a.commentContext].join(' ').toLowerCase();
 const isScudetto=a=>String(a.id||'').startsWith('scudetto-2028-')||/campioni d.?italia|scudetto review|champions.? night|after the scudetto/.test(allText(a));
 const knockout=a=>/knockout|playoff|round of 16|quarter|semi|final|coppa|supercoppa|aggregate|agg\.?|leg 1|leg 2|1st leg|2nd leg/.test(allText(a));
 const league=a=>/serie a|league/.test(allText(a))&&!knockout(a);
 const mentions=(a,re)=>re.test(allText(a)+' '+detail(a).toLowerCase());
 function normalize(row){if(Array.isArray(row)){const[u,t,lang='en',translation='']=row;return{u,t,lang,translation}}return row&&typeof row==='object'?{u:row.user||row.handle||'CurvaB',t:row.text||row.comment||'',lang:row.lang||'en',translation:row.translation||row.en||''}:null}
 function explicit(a){return [...(Array.isArray(a.comments)?a.comments:[]),...((window.NAPOLI_SEEDED_COMMENTS||{})[a.id]||[])].map(normalize).filter(Boolean)}
 function desired(a){if(isScudetto(a))return 56+(hash(a.id)%13);return Math.max(10,Math.min(24,Math.round((Number(a.commentHeat)||8)+6)))}
 const champLines=[
  ['NapoliSinceBirth','I have watched enough false dawns to know exactly how much this means. CHAMPIONS OF ITALY.'],
  ['CurvaB','No analysis tonight. Put the trophy back on the screen.'],
  ['SaladinoOutNow','Winning the league with four games left is exactly how complacency starts. I remain vigilant. Saladino OUT.'],
  ['PioNation','22 goals. 10 assists. Scudetto. And he already sent Atletico home. OUR GUY.'],
  ['PioHaterForNoReason','Congratulations to Napoli. I will address the Pio allegations after my legal team reviews the footage.'],
  ['BeierDefenseLeague','Twenty goals and a league medal. The apology form for Beier is now 14 pages long.'],
  ['BeierHive','Remember when people called him depth? I remember. We all remember.'],
  ['MeretUnion','Madrid survived. Atletico survived. Scudetto secured. Keeper discourse CLOSED.'],
  ['BastoniAgenda','Bastoni arrived and immediately started collecting evidence for the best-CB-in-the-world folder.'],
  ['BuongiornoBrigade','Bastoni gets the headlines and Buongiorno keeps doing elite work beside him. CHAMPION.'],
  ['DaviesExpress','Davies brought turbo mode to Naples and now he has a Scudetto medal.'],
  ['PazEnjoyer','Paz is going to tell his grandchildren his first Napoli title came during THIS season.'],
  ['EndrickEra','Twelve goals while sharing minutes with two 20-goal forwards. This attack is ridiculous.'],
  ['ChiesaHive','Fede came here to win things. Mission one complete.'],
  ['KDBVision','De Bruyne did not come to Naples for a retirement tour. He came to conduct a champion.'],
  ['CaptainRespect','Whatever the succession conversations are, Di Lorenzo gets to lift another one with Napoli. Respect the captain.'],
  ['GeertruidaWatch','Utility player discourse is over when the utility player is helping you win championships.'],
  ['SquadDepthDept','This title was won by a SQUAD. Look at how many different players mattered over 34 matches.'],
  ['RotationPolice','I complained about rotations all year and apparently the manager knew the calendar was 900 matches long. I hate growth.'],
  ['NapoliDoomer','I predicted collapse approximately 31 times. Delighted to report I know absolutely nothing.'],
  ['90MinuteNervousBreakdown','We won the league and somehow my resting heart rate is worse than August. Barcelona next btw.'],
  ['CurvaCalculator','25-9-0. 84 points. ZERO LOSSES. Four matches between us and immortality.'],
  ['ScudettoOrBust','Username fulfilled. I genuinely do not know what to do with this account now.'],
  ['EuropeanNights','Celebrate tonight. Tomorrow we remember Barcelona is waiting in a Champions League semi-final.'],
  ['CupRomantic','League won. Coppa alive. Champions League semi. Do not wake me up.'],
  ['CalendarVictim','Somehow this team won the league while playing every three days since the invention of electricity.'],
  ['TacticalNonno','Champions because they learned when to attack, when to suffer and when to stop being stupid. Beautiful.'],
  ['ActuallyWatchTheGame','The table says 84 points. The tape says this team can win five different ways.'],
  ['OneNilEnjoyer','A championship is just a very large collection of opportunities to appreciate 1-0.'],
  ['CleanSheetCult','The forwards get the posters. The defence gets the medals too.'],
  ['OldSchoolAzzurro','Younger supporters: save these pictures. Seasons like this become family stories.'],
  ['SanPaoloSoul','The trophy at the Maradona. That is the post. That is the whole comment.'],
  ['VesuvioVoice','NAPOLI CAMPIONE. Turn the city volume all the way up.'],
  ['PartenopeiProfessor','The most impressive part is not the points total. It is how many identities this side can assume inside one match.'],
  ['NoTacticsJustVibes','TACTICS TOMORROW. PARADE ENERGY TODAY.'],
  ['TitleRaceInsomnia','So apparently when you clinch the league you are allowed to sleep? Can anyone confirm?'],
  ['LateGoalTrauma','All those late-game heart attacks were apparently building character.'],
  ['PressingTruther','The title was won in the ugly possessions too. Press, recover, suffocate, repeat.'],
  ['MidfieldNonno','McTominay, KDB, Paz and everyone rotating through midfield gave this team different gears all season.'],
  ['StachAttack','ONE GOAL. ONE SCUDETTO. STATUE DISCUSSION OPEN.'],
  ['PioShirtOwner','Bought the shirt before the discourse. I would like that entered into the historical record.'],
  ['MeretRedemptionTour','The Meret redemption tour has upgraded to an open-top bus.'],
  ['BastoniWall','Real Madrid know. Atletico know. Serie A knows.'],
  ['FedeForever','CHIESA HAS A SCUDETTO IN NAPLES. I am emotional.'],
  ['DaviesDrive','From flying down the left to lifting the trophy. What a signing.'],
  ['PiazzaPundit','This is where a good project becomes an era. The next trophies decide how large the era gets.'],
  ['SempreNapoli','Champions today. Napoli forever.'],
  ['ForzaSempre','84 points and still unbeaten. Finish the job.'],
  ['SanPaoloSufferer','I suffered for months and the reward is that now I get to suffer through a Champions League semi-final as champion of Italy.'],
  ['matchday_meltdown','WHY AM I CRYING AT PIXELS LIFTING A PIXEL TROPHY'],
  ['ExpectedGoalsHater','Expected trophies: 1. Actual trophies: 1. Finally a metric I respect.'],
  ['SouthStandAnalyst','Pio became the face, Beier became a star, Meret became a wall, Bastoni-Buongiorno became a partnership. That is a season arc.'],
  ['BlueSideNaples','The two celebration photos need to stay on this site forever.'],
  ['napoli_in_my_blood','Campioni. I could type it 500 times and it would still hit.'],
  ['partenopei92','From August optimism to April silverware. What a ride.'],
  ['northstandnoise','FOUR MORE LEAGUE GAMES. DO NOT LOSE NOW.'],
  ['bluewall','Invincibles watch has officially entered dangerous levels of belief.'],
  ['VesuviusPress','Headline tomorrow: CHAMPIONS. Subheadline: they are not done yet.'],
  ['AwayDayNapoli','Imagine being in the away end for any of this run. Special season.'],
  ['MercatoMadness','We spent all year arguing about transfers and somehow assembled a champion with three terrifying forwards.'],
  ['NoSellingAllowed','Friendly reminder that every club in Europe is now banned from asking about Pio.'],
  ['SecondBallMerchant','Titles are won by stars and by the guy winning the disgusting second ball in minute 78. This squad has both.'],
  ['LowBlockSurvivor','They can break a low block, counter, defend a lead, survive Madrid and survive Atletico. Complete team.'],
  ['SetPiecePanic','We are champions and I am still terrified every time the opponent wins a corner. Some things cannot be healed.'],
  ['HalftimeOverthinker','I have 47 tactical concerns and every single one of them is currently wearing a Scudetto medal.'],
  ['TransferListEveryone','I would like to formally retract approximately 60% of my September posts.'],
  ['scapegoat_selector','This is devastating. Everyone contributed. Who am I supposed to blame?'],
  ['VARConspiracyDesk','The establishment tried everything including the laws of mathematics. Napoli still champions.'],
  ['touchlinelawyer','Legally speaking, 25 wins plus 9 draws plus 0 losses equals YOU CANNOT TOUCH US.'],
  ['AzzurriWatch','Italian core, international stars, young talent, veterans. This roster construction deserves credit.'],
  ['VomeroView','You can hear the city through the screenshots.'],
  ['NapoliTherapy','My therapist says winning the league is not a personality. We have agreed to disagree.']
 ];
 function explicit(a){return [...(Array.isArray(a.comments)?a.comments:[]),...((window.NAPOLI_SEEDED_COMMENTS||{})[a.id]||[])].map(normalize).filter(Boolean)}
 function persona(a,i){const r=String(a.reaction||'').toLowerCase(),d=pickDetail(a),opp=a.visitorClub&&a.visitorClub!=='NONE'?a.visitorClub:'';const rows=[];if(i===0)rows.push(['SaladinoOutNow',r.includes('loss')?'Saladino has lost control of the project. I have prepared seventeen supporting documents.':r.includes('draw')?'Another result the Saladino propaganda department will somehow call game management. I remain unmoved.':'I regret to inform everyone that my anti-Saladino agenda has suffered a significant setback. I will be reviewing the tape for alternative grounds for dismissal.']);if(mentions(a,/pio|esposito/)){rows.push(['PioNation',`Pio discourse is never normal anymore. ${d}`]);rows.push(['PioHaterForNoReason',r.includes('loss')?'And somehow I will still find a way to make this Pio’s fault. Consistency matters.':'I have reviewed the evidence and decided I am still hating. Please respect the commitment to the agenda.'])}if(mentions(a,/beier/))rows.push(['BeierDefenseLeague',`Another entry for the Beier receipts folder. ${d}`]);if(mentions(a,/endrick/))rows.push(['EndrickEra',`Every Endrick contribution restarts the minutes conversation. ${d}`]);if(mentions(a,/meret/))rows.push(['MeretUnion',`Keeper discourse gets very quiet when Meret does his job. ${d}`]);if(mentions(a,/bastoni/))rows.push(['BastoniAgenda',`Bastoni agenda remains extremely healthy. ${d}`]);if(mentions(a,/buongiorno/))rows.push(['BuongiornoBrigade',`Friendly reminder that the other centre-back exists and is very good at football. ${d}`]);if(mentions(a,/paz|nico/))rows.push(['PazEnjoyer',`The Paz minutes remain appointment viewing. ${d}`]);if(mentions(a,/chiesa/))rows.push(['ChiesaHive',`The Chiesa hive has entered the thread. ${d}`]);if(mentions(a,/davies/))rows.push(['DaviesExpress',`Give Davies grass and bad things happen to the other team. ${d}`]);if(mentions(a,/kayode|di lorenzo|captain/))rows.push(['CaptainRespect',`The succession plan can exist without pretending the old guard stopped mattering. ${d}`]);if(league(a)&&i%4===1)rows.push(['CurvaCalculator',`Yes, I have already recalculated the table. No, I will not be taking questions. ${d}`]);if(knockout(a)&&i%4===1)rows.push(['CurvaCalculator',`I have done the aggregate arithmetic twelve times and I trust none of it emotionally. ${d}`]);if(opp&&i%5===2)rows.push([rivalHandles[(hash(a.id+'rival')+i)%rivalHandles.length],`${opp} supporter checking in: ${d}`]);if(!rows.length)return null;const x=rows[(hash(a.id+'persona'+i)+i)%rows.length];return{u:x[0],t:x[1],lang:'en',translation:''}}
 function custom(a,i){const h=subject(a),d=pickDetail(a);const templates=knockout(a)?[`Qualification is the currency tonight. ${d}`,`That is knockout football: survive the pressure, take your moment, get through. ${d}`,`Big European night. Big pressure. Napoli are still standing. ${d}`]:league(a)?[`Three points banked. ${d}`,`Another league result, another problem handed to the chasing pack. ${d}`,`The table keeps telling the story. ${d}`]:[`On “${h}”: ${d}`,`This is not filler news. ${d}`,`The part I care about here is specific: ${d}`,`This story is going to matter again later. ${d}`];return templates[(hash(a.id+'custom')+i)%templates.length]}
 function thread(a){const n=desired(a),out=[],seen=new Set();for(const x of explicit(a)){if(x.t&&!seen.has(x.t.toLowerCase())){seen.add(x.t.toLowerCase());out.push(x)}}if(isScudetto(a)){const offset=hash(a.id)%champLines.length;for(let i=0;out.length<n&&i<champLines.length;i++){const x=champLines[(offset+i)%champLines.length],row={u:x[0],t:x[1],lang:'en',translation:''};if(!seen.has(row.t.toLowerCase())){seen.add(row.t.toLowerCase());out.push(row)}}}for(let i=0;out.length<n&&i<n*8;i++){const p=(i%3===0||i===1)?persona(a,i):null;if(p&&p.t&&!seen.has(p.t.toLowerCase())){seen.add(p.t.toLowerCase());out.push(p);continue}const t=custom(a,i);if(seen.has(t.toLowerCase()))continue;seen.add(t.toLowerCase());out.push({u:handles[(hash(a.id)+i)%handles.length],t,lang:'en',translation:''})}return out.slice(0,n)}
 function render(a){const rows=thread(a);return `<section class="fan-comments" data-comments-for="${safe(a.id)}" data-engine="30"><div class="comments-head fan-comments-head"><div><div class="section-kicker">Supporters' thread</div><h3>Comments</h3></div><span>${rows.length} reactions</span></div><div class="comments-list fan-comments-list">${rows.map((r,i)=>`<article class="fan-comment"${r.translation?` data-english-translation="${safe(r.translation)}"`:''}><div class="comment-avatar fan-avatar">${safe(r.u).slice(0,1).toUpperCase()}</div><div class="comment-body"><div class="comment-user fan-comment-meta"><strong>@${safe(r.u)}</strong><span>${i===0?'just now':`${Math.min(58,3+i*3)}m`}</span></div><p lang="${safe(r.lang)}">${safe(r.t)}</p><div class="fan-actions"><span>▲ ${18+(hash(a.id+i)%184)}</span><span>Reply</span></div></div></article>`).join('')}</div></section>`}
 let syncing=false;function sync(){if(syncing)return;const r=document.getElementById('readerContent');if(!r)return;const id=r.dataset.articleId,h=r.querySelector('#readerHeadline')?.textContent?.trim();const a=D.articles.find(x=>String(x.id)===String(id))||D.articles.find(x=>String(x.headline).trim()===h);if(!a)return;const current=r.querySelector('.fan-comments');if(current?.dataset.commentsFor===String(a.id)&&current.dataset.engine==='30')return;syncing=true;current?.remove();r.insertAdjacentHTML('beforeend',render(a));syncing=false;document.dispatchEvent(new CustomEvent('seasonroom:comments-rendered',{detail:{id:a.id}}))}const reader=document.getElementById('readerContent');if(reader){new MutationObserver(()=>queueMicrotask(sync)).observe(reader,{childList:true,subtree:true});sync()}document.addEventListener('seasonroom:article-opened',()=>requestAnimationFrame(sync));document.addEventListener('click',e=>{if(e.target.closest?.('[data-article]'))requestAnimationFrame(sync)});window.NAPOLI_COMMENT_ENGINE_VERSION='3.0.0';
})();