export function normalizeSeasonRoomPublication(data,extras={}){
const bad=/\bfiction(?:al|ally)\b|\bin[- ]game\b|\bcareer[- ]mode\b|\bvideo[- ]game\b|\bdramatiz(?:ed|ation)\b|\breal[- ]world\b|\bgameplay\b/i;
function has(s){return bad.test(String(s||''))}
function clean(s){return String(s??'').replace(/\s*\((?:fictional(?:\s+dramatization)?|fictional press dialogue|dramatized(?:\s+dialogue)?)\)/gi,'').replace(/\bfictional\b|\bin-universe\b|\bcareer-mode\b|\bin-game\b|\bdramatized\b|\bdramatization\b|\breal-world\b|\bgameplay\b/gi,'').replace(/\s{2,}/g,' ').replace(/\s+,/g,',').replace(/\s+\./g,'.').trim()}
function prose(s,id){
 let t=String(s||'');
 if(/^(?:EDITOR(?:'S|IAL) NOTE|RETROSPECTIVE FICTIONAL INTERVIEW|FICTIONAL IN-UNIVERSE INTERVIEW|HISTORICAL REFERENCE NOTE)/i.test(t))return '';
 if(/^The following (?:is|questions and answers are|player-desk questions|interview|conversation).*?(?:fictional|dramatized|in-universe)/i.test(t))return '';
 if(/^Nothing about the scene should be confused|^The quoted answers above are imagined character writing|^The exchange should not be read as a report/i.test(t))return '';
 const replace=[
 ["not that squad depth is a fictional advantage","not that squad depth offers no advantage"],
 ["a fictional current form guide, invented player comparison or invented first-leg forecast","an unsupported form guide, forced player comparison or speculative first-leg forecast"],
 ["No catalogue of fictional near misses is needed","No catalogue of missed chances is needed"],
 ["a fictional narrative of ninety minutes of territorial supremacy","a sweeping claim of ninety minutes of territorial supremacy"],
 ["In the dramatized in-universe scene surrounding his actual words, no player raised a hand.","The challenge was plain even before the second half began."],
 ["The in-universe dressing-room dramatization showed not a single raised hand. The players' unspoken answer gave him the room.","He demanded belief from the players before they returned to the pitch."],
 ["in this fictional career","for this Italy side"],
 ["this fictional club's established record","the club's established record"],
 ["In our explicitly fictional in-universe dramatization,","When the question came,"],
 ["The fictional Peacock","Peacock"],
 ["In the celebratory fiction of this newsroom,","In the celebrations,"],
 ["In our fictional reconstruction of the celebrations,","As the celebrations unfolded,"],
 ["fictional vignettes","moments"],
 ["the fictional scene finds","the scene finds"],
 ["In our fictional world,","From Toronto to Naples,"],
 ["this extraordinary fictional 2030 sporting week","this extraordinary sporting week"],
 ["a fictional quotation he never gave","a quotation he never gave"],
 ["in a career-mode save where","when"],
 ["Atalanta, listed as Bergamo in the career-mode table,","Atalanta"],
 ["a fictional portrait grounded in a real career-mode dilemma","a portrait of a difficult selection question"],
 ["in this career-mode save","for the current squad"],
 ["A screenshot from the career-mode discussion feed, dated March 11, shows","In a March 11 supporter discussion,"],
 ["In our fictional","In our"],
 ["Before the final, in a dramatized media-day interview","Before the final, at media day"],
 ["The dialogue was imagined as part of this career-mode newsroom's in-universe coverage. The goal was not imagined.",""],
 ["The goal was not imagined.",""],
 ["gameplay video","match footage"],
 ["gameplay clip","match footage"],
 ["actual gameplay video","match footage"],
 ["in-game naming system","league listing"],
 ["in-game potential ceiling","development outlook"],
 ["the in-game name for AC Milan","AC Milan"],
 ["Atalanta's in-game name","Atalanta"],
 ["in-game shot metric","recorded shot metric"],
 ["in-game match record","official match record"],
 ["match engine","official match record"],
 ["manager-reported in-game","recorded"],
 ["manager's in-game account","match figures"],
 ["in-game figures","match figures"],
 ["in-game xG","recorded xG"],
 ["career-mode universe","current squad"],
 ["career-mode Napoli side","Napoli side"],
 ["career-mode world","football world"],
 ["career-mode narrative","story"],
 ["career-mode table","league table"],
 ["career-mode save","season"]
 ];
 for(const [a,b] of replace)t=t.replace(a,b);
 t=t.replace(/This was character dialogue inside the career-mode narrative, not a real-world quotation or a new manager-confirmed locker-room event\.?/gi,'')
  .replace(/It is a dramatized scene, not an invented official post-match interview; its meaning is grounded in contributions we know actually occurred in the save\.?/gi,'It was a moment rooted in both players’ contributions.')
  .replace(/No documentary claims are made for those private scenes; they express a city's intergenerational memory\.?/gi,'These scenes speak to the city’s shared memories.')
  .replace(/Players' later dramatized features must be clearly identified as such\.?/gi,'')
  .replace(/In the fictional 2030 sports universe,/gi,'In Toronto,')
  .replace(/\bFC ?26\b/gi,'');

 t=t.replace('We imagine a conversation about what such a match might mean to a young player.','Lorenzo Ferri spoke with the winger about the afternoon and the standards ahead.')
  .replace('This was character dialogue inside the story, not a quotation or a new manager-confirmed locker-room event.','')
  .replace(/manager-confirmed tiebreaker/gi,'head-to-head tiebreaker')
  .replace(/manager-confirmed draw/gi,'draw')
  .replace(/manager-confirmed standings/gi,'standings')
  .replace(/manager-confirmed ratings/gi,'reported ratings')
  .replace(/manager-confirmed Napoli match events/gi,'Napoli match records')
  .replace(/manager-confirmed defensive moments/gi,'defensive moments')
  .replace(/manager-confirmed elite 4-2-3-1/gi,'established 4-2-3-1')
  .replace(/actual, manager-supplied testimony/gi,'from the halftime speech')
  .replace(/Players have not given a manager-confirmed formal interview here, so these are observed performances and analysis rather than fabricated testimony\./gi,'The performances offer more than enough material for analysis.')
  .replace(/the manager reported that Italy held the ball/gi,'Italy held the ball')
  .replace(/the manager reported six close-range saves/gi,'the goalkeeper was credited with six close-range saves')
  .replace(/the manager reported that the position of Moore's hand was cited/gi,'Moore’s hand position was cited')
  .replace(/The manager confirmed the selection after the match;/gi,'The selection was clear at kickoff;')
  .replace(/according to the manager's in-game account/gi,'according to the match record')
  .replace(/one screenshot of fan discussion/gi,'a supporter discussion')
  .replace(/Other comments in the same screenshot/gi,'Other comments in the same discussion')
  .replace(/a single screenshot/gi,'one captured discussion')
  .replace(/without a new screenshot/gi,'without updated league results')
  .replace(/from a single screenshot/gi,'from those limited results')
  .replace(/at the latest verified screenshot/gi,'in the last full league table')
  .replace(/in the latest screenshot/gi,'in the latest league table')
  .replace(/in this save/gi,'for this side')
  .replace(/a previous spell at Arsenal in this save/gi,'a previous spell at Arsenal')
  .replace(/manager's in-game account/gi,'match figures')
  .replace(/The exact in-game match date has not been confirmed/gi,'The precise fixture date was not available in the published schedule')
  .replace(/the in-game match record awarded/gi,'the official match record awarded')
  .replace(/explicitly confirmed in-game/gi,'credited in the official match report');

 return clean(t);
}
const commentReplacements=[
["Clearly labelled dramatization. Fine by me. The real transfer fee and the real goal already supply the story.","The transfer fee and that goal give us plenty to talk about. The pressure on Estêvão must be enormous."],
["A fictional interview in which a new player displays humility? I find the positive atmosphere deeply suspicious.","A new player displaying humility? I find the positive atmosphere deeply suspicious."],
["THE TWO KEEPERS EMBRACING IN OUR FICTIONAL CELEBRATION HAS BROKEN ME.","THE TWO KEEPERS EMBRACING AFTER THE FINAL HAS BROKEN ME."],
["The fictional grandfather and scarf scene got me.","That grandfather and scarf story got me."],
["I know it's dramatized, but it expresses the truth of how much both gave the team.","It shows how much both players gave to the team."],
["That's the most believable invented detail in this whole fictional reconstruction.","Of course Scott tried to take charge of the speakers."],
["Good that the player interview is clearly labelled as dramatized fiction.","The goalkeeper deserved that interview after two shutouts."],
["Another completed outgoing deal. Somebody tell me when the actual in-game budget updates.","Another completed outgoing deal. Somebody tell me when the budget figures finally settle."],
["This match was one of the first times I genuinely yelled at an in-game clip.","This was one of the first times I genuinely yelled at the screen."],
["The old gameplay clip is still on the site, by the way.","The old match footage is still on the site, by the way."],
["The .08 is the in-game value for Davies","The 0.08 is the recorded xG for Davies"]
];
function comment(s){let t=String(s||'');for(const [a,b]of commentReplacements)t=t.replace(a,b);return clean(t)}
function comments(rows){for(const a of rows||[]){if(!a||typeof a!=='object')continue;if(typeof a.text==='string')a.text=comment(a.text);if(typeof a.t==='string')a.t=comment(a.t);comments(a.replies)}}
for(const a of data.articles||[]){
 if(typeof a.headline==='string')a.headline=clean(a.headline);
 if(typeof a.dek==='string')a.dek=prose(a.dek.replace(/A clearly labelled in-universe dramatization of Moore reflecting on/i,'Moore reflects on').replace(/A clearly fictional in-universe conversation explores/i,'A conversation with Estêvão explores').replace(/a dramatized in-universe conversation asks/i,'an interview asks').replace(/A fictional in-universe sit-down with/i,'A conversation with').replace(/A fictional interview with/i,'A conversation with').replace(/An explicitly dramatized, in-universe mixed-zone interview explores/i,'A mixed-zone interview explores').replace(/the fictional 2030 celebration/i,'the 2030 celebration').replace(/A fictional joint interview/i,'A joint interview'),a.id);
 if(typeof a.label==='string'&&has(a.label))a.label=/interview/i.test(a.label)?'Player Interview':/celebration/i.test(a.label)?'Club & City':'Feature';
 if(typeof a.imageCredit==='string'&&/fictional|dramatiz|not a (?:photograph|photo)|not documentary|not an actual|not from this|not a match photograph|not confirmed to depict|FC ?26 save|generated composite/i.test(a.imageCredit))a.imageCredit='Season Room · Editorial illustration';
 if(Array.isArray(a.body))a.body=a.body.map(p=>prose(p,a.id)).filter(Boolean);
 if(Array.isArray(a.chapterHeads))a.chapterHeads=a.chapterHeads.map(clean);
 comments(a.comments);
}
if(data.meta)delete data.meta.fictionalNotice;
function extra(x){if(Array.isArray(x))for(const v of x)extra(v);else if(x&&typeof x==='object')for(const[k,v]of Object.entries(x)){if((k==='text'||k==='t')&&typeof v==='string')x[k]=comment(v);else extra(v)}}extra(extras);
const errors=[];
for(const a of data.articles||[]){
 for(const k of ['headline','dek','label','category','imageCredit'])if(has(a[k]))errors.push(a.id+'.'+k+': '+String(a[k]).slice(0,130));
 for(let i=0;i<(a.body||[]).length;i++)if(has(a.body[i]))errors.push(a.id+'.body['+i+']: '+a.body[i].slice(0,140));
 const visit=n=>{if(has(n.text))errors.push(a.id+'.comment: '+n.text.slice(0,140));for(const c of n.replies||[])visit(c)};
 for(const n of a.comments||[])visit(n);
}
if(errors.length)throw Error(errors.slice(0,18).join('\n'));
return {articleCount:data.articles?.length||0};
}