#!/usr/bin/env node
// Static, dependency-free safety check. Never executes old synthetic comment generators.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root=path.resolve(import.meta.dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const html=read('index.html');
const scripts=[...html.matchAll(/<script\s+src="([^"]+\.js)(?:\?[^"]*)?"/g)].map(x=>x[1]);
assert(scripts.includes('comments-engine-v2.js'),'The live HTML must load the comment renderer.');
assert(scripts.indexOf('post-milan-beier-san-siro-oct-2028.js')>=0 && scripts.indexOf('post-milan-beier-san-siro-oct-2028.js')<scripts.indexOf('app.js'),'Milan stories must load before app snapshot.');
assert(scripts.indexOf('state-milan-san-siro-2028.js')>=0 && scripts.indexOf('state-milan-san-siro-2028.js')<scripts.indexOf('app.js'),'Milan stats must load before app snapshot.');
assert(scripts.indexOf('post-italy-oct-friendlies-2028.js')>scripts.indexOf('post-milan-beier-san-siro-oct-2028.js'),'Italy notebook must not displace Milan hero.');
assert(scripts.indexOf('state-italy-oct-friendlies-2028.js')<scripts.indexOf('app.js'),'Italy results must load before app snapshot.');
assert(scripts.indexOf('post-roma-streak-ends-oct-2028.js')>scripts.indexOf('post-italy-oct-friendlies-2028.js'),'Roma stories must follow Italy friendly brief.');
assert(scripts.indexOf('post-roma-streak-ends-oct-2028.js')<scripts.indexOf('app.js'),'Roma articles must load before rendering.');
assert(scripts.indexOf('state-roma-loss-oct-2028.js')<scripts.indexOf('app.js'),'Roma state must load before rendering.');
assert(scripts.indexOf('post-slavia-comeback-oct-2028.js')>scripts.indexOf('post-roma-streak-ends-oct-2028.js'),'Latest Slavia stories must follow Roma.');
assert(scripts.indexOf('post-slavia-comeback-oct-2028.js')<scripts.indexOf('app.js'),'Slavia stories must load before rendering.');
assert(scripts.indexOf('state-slavia-17-oct-2028.js')<scripts.indexOf('app.js'),'Slavia result must load before rendering.');
assert(scripts.indexOf('comments-slavia-comeback-curated.js')<scripts.indexOf('comments-engine-v2.js'),'Slavia comments must load before renderer.');
assert(scripts.indexOf('post-empoli-title-race-juve-oct-2028.js')>scripts.indexOf('post-slavia-comeback-oct-2028.js'),'Empoli and title race package should follow Slavia.');
assert(scripts.indexOf('post-empoli-title-race-juve-oct-2028.js')<scripts.indexOf('app.js'),'October title-race stories should load before app.');
assert(scripts.indexOf('state-empoli-standings-juve-oct-2028.js')<scripts.indexOf('app.js'),'Empoli stats and photographed Serie A table should load before app.');
assert(scripts.indexOf('comments-empoli-title-race-juve-2028.js')<scripts.indexOf('comments-engine-v2.js'),'October comments must load before renderer.');
assert(scripts.indexOf('post-juventus-pio-brace-top-oct-2028.js')>scripts.indexOf('post-empoli-title-race-juve-oct-2028.js'),'Juventus FT stories must follow the pre-match coverage.');
assert(scripts.indexOf('post-juventus-pio-brace-top-oct-2028.js')<scripts.indexOf('app.js'),'Juve FT article loading order wrong.');
assert(scripts.indexOf('state-juventus-pio-25-oct-2028.js')<scripts.indexOf('app.js'),'Juventus FT and screenshot state must load before rendering.');
assert(scripts.indexOf('comments-juventus-pio-top-oct-2028.js')<scripts.indexOf('comments-engine-v2.js'),'Juventus comments must precede the comment renderer.');
assert(scripts.indexOf('post-sampdoria-arsenal-rematch-oct-2028.js')>scripts.indexOf('post-juventus-pio-brace-top-oct-2028.js'),'Arsenal/Sampdoria newsroom must follow Juventus FT.');
assert(scripts.indexOf('post-sampdoria-arsenal-rematch-oct-2028.js')<scripts.indexOf('app.js'),'Arsenal preview stories must load before render.');
assert(scripts.indexOf('state-sampdoria-arsenal-28-oct-2028.js')<scripts.indexOf('app.js'),'Sampdoria match state must load before render.');
assert(scripts.indexOf('comments-sampdoria-arsenal-rematch-oct-2028.js')<scripts.indexOf('comments-engine-v2.js'),'Arsenal preview comments must load before renderer.');
assert(scripts.includes('post-arsenal.js'),'Historic Arsenal draw archive must remain available.');
assert(scripts.indexOf('post-arsenal-2-0-selection-inquest-oct-2028.js')>scripts.indexOf('post-sampdoria-arsenal-rematch-oct-2028.js'),'Arsenal FT stories must follow match preview.');
assert(scripts.indexOf('post-arsenal-2-0-selection-inquest-oct-2028.js')<scripts.indexOf('app.js'),'Arsenal FT story must load before app snapshot.');
assert(scripts.indexOf('state-arsenal-2-0-31-oct-2028.js')<scripts.indexOf('app.js'),'Arsenal state must load before app render.');
assert(scripts.indexOf('comments-arsenal-2-0-controversy-oct-2028.js')<scripts.indexOf('comments-engine-v2.js'),'Arsenal comments must load before renderer.');
assert(scripts.indexOf('post-genoa-mctominay-67-international-break-2028.js')>scripts.indexOf('post-arsenal-2-0-selection-inquest-oct-2028.js'),'Genoa stories should follow Arsenal FT.');
assert(scripts.indexOf('post-genoa-mctominay-67-international-break-2028.js')<scripts.indexOf('app.js'),'Genoa article data must load before snapshot.');
assert(scripts.indexOf('state-genoa-mctominay-67-break-2028.js')<scripts.indexOf('app.js'),'Genoa result/stat state must load before render.');
assert(scripts.indexOf('comments-genoa-italy-break-nov-2028.js')<scripts.indexOf('comments-engine-v2.js'),'Genoa comment thread must load before renderer.');
assert(scripts.indexOf('post-italy-senegal-turkey-atalanta-preview-2028.js')>scripts.indexOf('post-genoa-mctominay-67-international-break-2028.js'),'Latest Italy/Atalanta preview must follow Genoa stories.');
assert(scripts.indexOf('post-italy-senegal-turkey-atalanta-preview-2028.js')<scripts.indexOf('app.js'),'Atalanta preview must load before initial rendering.');
assert(scripts.indexOf('state-italy-senegal-turkey-atalanta-next-2028.js')<scripts.indexOf('app.js'),'New international results and next fixture must load before rendering.');
assert(scripts.indexOf('comments-italy-senegal-turkey-atalanta-preview-2028.js')<scripts.indexOf('comments-engine-v2.js'),'New supporter comments must load before renderer.');
assert(scripts.indexOf('post-atalanta-six-two-pio-three-three-nov-2028.js')>scripts.indexOf('post-italy-senegal-turkey-atalanta-preview-2028.js'),'New Atalanta FT stories should supersede pre-game preview.');
assert(scripts.indexOf('post-atalanta-six-two-pio-three-three-nov-2028.js')<scripts.indexOf('app.js'),'Atalanta FT lead articles must load before app render.');
assert(scripts.indexOf('state-atalanta-six-two-pio-three-three-nov-2028.js')<scripts.indexOf('app.js'),'Atalanta six-two result and stats must load before app render.');
assert(scripts.indexOf('comments-atalanta-six-two-pio-three-three-nov-2028.js')<scripts.indexOf('comments-engine-v2.js'),'Atalanta comments must load before renderer.');
assert(scripts.indexOf('state-fixtures-psg-monza-december-2028.js')>scripts.indexOf('state-atalanta-six-two-pio-three-three-nov-2028.js'),'New fixture schedule must load AFTER Atalanta FT.');
assert(scripts.indexOf('state-fixtures-psg-monza-december-2028.js')<scripts.indexOf('app.js'),'New fixture schedule must load BEFORE app snapshots.');
assert(scripts.indexOf('state-serie-a-table-after-atalanta-12p-nov-2028.js')>scripts.indexOf('state-fixtures-psg-monza-december-2028.js'),'New 12-game league screenshot should supersede October rival rows.');
assert(scripts.indexOf('post-psg-final-rematch-neves-changes-sides-nov-21-2028.js')>scripts.indexOf('post-atalanta-six-two-pio-three-three-nov-2028.js'),'PSG preview hero must follow full-time Atalanta newsroom.');
assert(scripts.indexOf('post-psg-final-rematch-neves-changes-sides-nov-21-2028.js')<scripts.indexOf('app.js'),'PSG preview must load before app render.');
assert(scripts.indexOf('comments-psg-neves-final-rematch-nov-2028.js')<scripts.indexOf('comments-engine-v2.js'),'PSG reaction archive must be loaded before comment renderer.');
assert(scripts.indexOf('post-psg-nov21-ft-goalkeeper-inquest-monza-2028.js')>scripts.indexOf('post-psg-final-rematch-neves-changes-sides-nov-21-2028.js'),'PSG 0–2 postmatch story must follow prematch preview.');
assert(scripts.indexOf('post-psg-nov21-ft-goalkeeper-inquest-monza-2028.js')<scripts.indexOf('app.js'),'PSG 0–2 newsroom must load before app snapshots.');
assert(scripts.indexOf('state-psg-nov21-zero-two-monza-peacock-2028.js')>scripts.indexOf('state-serie-a-table-after-atalanta-12p-nov-2028.js'),'New PSG 0–2 result state must follow photographed Serie A table.');
assert(scripts.indexOf('state-psg-nov21-zero-two-monza-peacock-2028.js')<scripts.indexOf('app.js'),'PSG FT result must load before app render.');
assert(scripts.indexOf('comments-psg-ft-meret-peacock-monza-nov-2028.js')<scripts.indexOf('comments-engine-v2.js'),'New Meret/PSG/Monza supporter reactions must load before renderer.');
assert(!scripts.includes('comments.js'),'Retired randomly generated comment engine must stay disabled.');
const engineAt=scripts.indexOf('comments-engine-v2.js');
const archives=scripts.filter(x=>x.startsWith('comments-')&&x!=='comments-engine-v2.js');
assert(archives.length>=6,'Missing comment archive source scripts.');
for(const name of archives)assert(scripts.indexOf(name)<engineAt,name+' must load before the renderer.');
for(const name of scripts){
 assert(fs.existsSync(path.join(root,name)),'HTML references missing script: '+name);
 new vm.Script(read(name),{filename:name});
}
const ctx={window:{NAPOLI_DATA:{articles:[],results:[],whispers:[],ticker:[],upcoming:[]}},console};
ctx.document={write(){}};
ctx.window.document=ctx.document;
vm.createContext(ctx);
for(const name of archives)vm.runInContext(read(name),ctx,{filename:name,timeout:3000});
const archive=ctx.window.NAPOLI_CURATED_ARCHIVE||{};
const legacy=ctx.window.NAPOLI_LEGACY_AUTHORED_COMMENTS||{};
assert(Object.keys(archive).length>=60,'Reviewed article thread coverage unexpectedly shrank.');
assert(Object.values(archive).every(rows=>Array.isArray(rows)&&rows.length),'Archived article with no comments.');
assert(Object.values(legacy).every(rows=>Array.isArray(rows)&&rows.length),'Legacy author archive contains empty article rows.');
// These post files carry first-class historic inline comments/replies. Include them
// when auditing parity (archives alone are intentionally not the entire source).
for(const name of [
 'post-transfer-rumours-may.js',
 'post-am-controversy-may.js',
 'post-psg-final-result-may.js',
 'post-torino-invincibles-may.js'
])vm.runInContext(read(name),ctx,{filename:name,timeout:3000});
const engine=read('comments-engine-v2.js');
const cut=engine.indexOf('const reply=(r)=>');
assert(cut>0,'Cannot audit comment renderer parser.');
vm.runInContext(engine.slice(0,cut)+'window.__auditCurated=curated;})();',ctx,{timeout:3000});
const thread=(id,inline)=>ctx.window.__auditCurated(ctx.window.NAPOLI_DATA.articles.find(a=>a.id===id)||{id,comments:inline||[]});
const expected=[
 ['galatasaray-comeback-sep-2028',5,5],
 ['venezia-draw-sep-2028',5,5],
 ['inter-2028-win',4,4],
 ['saladino-defends-am-pisa-may-2028',11,7],
 ['psg-final-report-may-2028',8,3],
 ['torino-invincibles-comeback-may-2028',8,4],
 ['sassuolo-response',2,1],
 ['italy-friendly-double-pio-kean-oct-2028',8,9],
 ['psg-two-nil-kvaratskhelia-again-nov-21-2028',20,20],
 ['meret-pressure-peacock-audition-after-psg-nov-2028',16,16],
 ['monza-away-title-race-peacock-decision-nov-26-2028',12,12],
 ['psg-final-rematch-neves-switches-sides-nov-21-2028',25,25],
 ['pio-six-involvements-napoli-six-two-atalanta-2028',18,19],
 ['beier-pio-partnership-four-combinations-atalanta-2028',16,16],
 ['saladino-overrules-bench-pio-hat-trick-atalanta-2028',16,16],
 ['napoli-31-points-atalanta-pasalic-brace-2028',16,16],
 ['atalanta-next-title-test-after-italy-friendlies-2028',16,16],
 ['pio-kean-senegal-turkey-friendlies-2028',12,12],
 ['mctominay-67-jankowski-genoa-win-nov-2028',18,20],
 ['jankowski-saves-beier-offside-genoa-nov-2028',17,18],
 ['napoli-28-points-eight-clean-sheets-genoa-2028',17,17],
 ['italy-friendlies-international-break-napoli-nov-2028',17,17],
 ['arsenal-two-chances-two-goals-saladinio-oct-2028',18,19],
 ['arsenal-paz-calafiori-bench-controversy-2028',17,19],
 ['raya-pio-rematch-two-season-story-2028',16,16],
 ['napoli-europe-eight-conceded-arsenal-2028',16,16],
 ['arsenal-rematch-pio-91-history-oct-2028',19,25],
 ['sampdoria-3-0-rotation-beier-pio-oct-2028',19,24],
 ['pio-beier-swap-roles-sampdoria-oct-2028',18,19],
 ['rotation-gamble-paid-arsenal-ahead-oct-2028',18,18],
 ['pio-turin-brace-napoli-top-oct-2028',20,28],
 ['juventus-napoli-pio-double-di-gregorio-oct-2028',18,21],
 ['roma-unbeaten-napoli-title-fight-oct-2028',18,19],
 ['pio-paz-partnership-beier-depth-oct-2028',18,18],
 ['bergamo-stumble-turin-title-race-oct-2028',18,25],
 ['napoli-empoli-davies-paz-clean-sheet-oct-2028',18,21],
 ['juventus-napoli-turin-preview-title-oct-2028',18,19],
 ['milan-inter-struggle-new-powers-oct-2028',18,19],
 ['slavia-beier-pio-3-2-oct-2028',36,53],
 ['pio-beier-triple-assist-oct-2028',22,24],
 ['slavia-rotation-gamble-doubts-oct-2028',26,28],
 ['slavia-doubters-editorial-oct-2028',30,37],
 ['roma-ends-44-match-run-oct-2028',32,52],
 ['roma-first-loss-what-now-oct-2028',18,20],
 ['milan-san-siro-beier-91-match-report-oct-2028',33,45],
 ['mctominay-two-assists-milan-big-game-oct-2028',22,22],
 ['milan-maignan-napoli-mentalita-opinion-oct-2028',20,21],
 ['leverkusen-92-sep-2028',32,37],
 ['leverkusen-beier-pio-analysis-sep-2028',20,24],
 ['leverkusen-defence-opinion-sep-2028',25,26],
 ['como-beier-88-winner-sep-2028',22,36],
 ['beier-mctominay-late-goal-como-analysis-sep-2028',14,17],
 ['napoli-como-late-winner-fan-pressure-sep-2028',10,11]
];
for(const [id,minComments,minReplies] of expected){
 const rows=thread(id);
 assert(rows.length>=minComments,id+' lost authored comments: '+rows.length);
 assert(rows.reduce((n,x)=>n+x.replies.length,0)>=minReplies,id+' lost authored replies.');
 assert(rows.every(x=>x.u&&x.t&&x.replies.every(r=>r.u&&r.t)),id+' has malformed author/content.');
}
const noSpoilers=thread('sassuolo-response');
assert(noSpoilers.every(x=>!/winner|dragged us level|finished the job|last ten minutes/i.test(x.t)),
  'Future match spoilers leaked into the Sassuolo preview.');
// Independent Roma state check: loss is Napoli's first in seven Serie A matches.
const romaFixture={date:'2028-10-13',team:'Napoli',opponent:'Roma',venue:'Away',competition:'Serie A',verified:true};
const sc={window:{NAPOLI_DATA:{results:[],results2028:[],fixtures2028:[romaFixture,{date:'2028-10-17',team:'Napoli',opponent:'Slavia Prague',venue:'Home',competition:'Champions League',verified:true}],seasonState:{ucl:{played:2,w:1,d:1,points:4,gf:5,ga:4}},statsBySeason:{'2028–29':[['Pio Esposito',4,1,'Club only']]}}}};
vm.createContext(sc);
vm.runInContext(read('state-roma-loss-oct-2028.js'),sc,{filename:'state-roma-loss-oct-2028.js',timeout:3000});
const D=sc.window.NAPOLI_DATA;
assert(D.results.some(x=>x[1]==='Roma'&&x[3]===0&&x[4]===1&&x[5]==='L'),'Roma result missing.');
const l=D.seasonState.league;
assert(l.played===7&&l.w===5&&l.d===1&&l.l===1&&l.points===16&&l.gf===9&&l.ga===3,'Incorrect Roma league totals.');
assert(D.seasonState.ucl.points===4,'Roma must not modify UCL points.');
assert(D.statsBySeason['2028–29'][0][1]===4&&D.statsBySeason['2028–29'][0][2]===1,'Club player stats must not change for no Napoli scorer.');
assert(romaFixture.played&&D.upcoming[0][0]==='Slavia Prague','Next Napoli match should be Slavia Prague.');
// Independent match-state smoke test: Slavia is a UCL comeback, not a league win.
const slaviaFixture={date:'2028-10-17',team:'Napoli',opponent:'Slavia Prague',venue:'Home',competition:'Champions League',verified:true};
const slaviaContext={window:{NAPOLI_DATA:{
 results:[],results2028:[],
 fixtures2028:[slaviaFixture,{date:'2028-10-21',team:'Napoli',opponent:'Empoli',venue:'Home',competition:'Serie A',verified:true}],
 seasonState:{league:{played:7,w:5,d:1,l:1,points:16,gf:9,ga:3},ucl:{played:2,w:1,d:1,l:0,points:4,gf:5,ga:4}},
 statsBySeason:{'2027–28':[['Maximilian Beier',25,11,'Archived'],['Pio Esposito',29,12,'Archived']],'2028–29':[['Maximilian Beier',6,2,'Current'],['Pio Esposito',4,1,'Current'],['Scott McTominay',0,5,'Current']]}}
}};
vm.createContext(slaviaContext);
vm.runInContext(read('state-slavia-17-oct-2028.js'),slaviaContext,{filename:'state-slavia-17-oct-2028.js',timeout:3000});
const SD=slaviaContext.window.NAPOLI_DATA;
assert(SD.results.some(r=>r[1]==='Slavia Prague'&&r[2]==='Champions League'&&r[3]===3&&r[4]===2&&r[5]==='W'),'Slavia result missing or wrong.');
assert(SD.seasonState.ucl.played===3&&SD.seasonState.ucl.w===2&&SD.seasonState.ucl.d===1&&SD.seasonState.ucl.points===7&&SD.seasonState.ucl.gf===8&&SD.seasonState.ucl.ga===6,'UCL points/goals incorrect.');
assert(SD.seasonState.league.played===7&&SD.seasonState.league.points===16&&SD.seasonState.league.ga===3,'UCL incorrectly modified league results.');
assert(SD.statsBySeason['2028–29'].find(r=>r[0]==='Maximilian Beier')[1]===9,'Beier hat-trick missing.');
assert(SD.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito')[2]===4,'Pio triple assist missing.');
assert(SD.statsBySeason['2027–28'].find(r=>r[0]==='Pio Esposito')[1]===29,'Historical Napoli stats overwritten.');
assert(SD.upcoming[0][0]==='Empoli'&&slaviaFixture.played,'Next fixture not updated.');
assert(SD.latestResult[0]==='NAP'&&SD.latestResult[1]==='3–2','Latest match widget stale.');
// FC26 October standings screenshot and 21 October home victory: no fabricated Juve result.
const empCtx={window:{NAPOLI_DATA:{}}};
const ED=empCtx.window.NAPOLI_DATA;
ED.results=[];ED.results2028=[];
const empFixture={date:'2028-10-21',team:'Napoli',opponent:'Empoli',competition:'Serie A',venue:'Home',verified:true};
ED.fixtures2028=[empFixture,{date:'2028-10-25',team:'Napoli',opponent:'Juventus',competition:'Serie A',venue:'Away',verified:true}];
ED.seasonState={league:{played:7,w:5,d:1,l:1,points:16,gf:9,ga:3},ucl:{played:3,w:2,d:1,l:0,points:7,gf:8,ga:6}};
ED.statsBySeason={'2027–28':[['Alphonso Davies',5,5,'Archive']],'2028–29':[['Alphonso Davies',1,0,'Current'],['Michael Olise',0,1,'Current'],['Nico Paz',0,1,'Current'],['Scott McTominay',0,5,'Current'],['Maximilian Beier',9,2,'Current'],['Pio Esposito',4,4,'Current']]};
vm.createContext(empCtx);
vm.runInContext(read('state-empoli-standings-juve-oct-2028.js'),empCtx,{filename:'state-empoli-standings-juve-oct-2028.js',timeout:3000});
assert(ED.results.length===1&&ED.results[0][1]==='Empoli'&&ED.results[0][3]===2&&ED.results[0][4]===0,'Empoli result incorrect.');
assert(ED.seasonState.league.played===8&&ED.seasonState.league.w===6&&ED.seasonState.league.d===1&&ED.seasonState.league.l===1&&ED.seasonState.league.points===19&&ED.seasonState.league.gf===11&&ED.seasonState.league.ga===3,'After-Empoli league state wrong.');
assert(ED.seasonState.ucl.points===7&&ED.seasonState.ucl.ga===6,'Empoli match incorrectly altered UCL.');
assert(ED.statsBySeason['2028–29'].find(r=>r[0]==='Alphonso Davies')[1]===2,'Davies second league goal missing.');
assert(ED.statsBySeason['2028–29'].find(r=>r[0]==='Michael Olise')[2]===2,'Olise real assist missing or offside goal counted.');
assert(ED.statsBySeason['2028–29'].find(r=>r[0]==='Nico Paz')[1]===1,'Nico first goal missing.');
assert(ED.statsBySeason['2028–29'].find(r=>r[0]==='Scott McTominay')[2]===6,'McTominay sixth assist missing.');
assert(ED.statsBySeason['2027–28'][0][1]===5,'Old player totals must remain.');
assert(empFixture.played&&ED.upcoming[0][0]==='Juventus','Juventus away should be next and unplayed.');
const T=ED.serieAStandings.rows;
assert(T.length===13,'Expected 13 photographed teams only.');
assert(T[0][0]==='Atalanta'&&T[0][1]===9&&T[0][4]===1&&T[0][8]===20,'Atalanta first loss missing.');
assert(T[1][0]==='Napoli'&&T[1][1]===8&&T[1][8]===19,'Napoli photographed table record missing.');
assert(T[2][0]==='Roma'&&T[2][4]===0&&T[2][8]===18,'Roma unbeaten position incorrect.');
assert(T[3][0]==='Juventus'&&T[3][8]===17,'Juventus now have 17, not 14.');
assert(T[6][0]==='AC Milan'&&T[6][8]===13,'AC Milan seventh with 13.');
assert(T[8][0]==='Inter'&&T[8][8]===10,'Inter ninth with ten.');
assert(T.every(r=>r[2]+r[3]+r[4]===r[1]&&r[5]-r[6]===r[7]&&r[2]*3+r[3]===r[8]),'Photographed table rows fail arithmetic validation.');
assert(ED.results.every(r=>r[1]!=='Juventus'),'Do not publish a Juventus result before playing.');
// Juventus away, new post-match screenshot and Pio/Paz official contributions audit.
const juveFixture={date:'2028-10-25',team:'Napoli',opponent:'Juventus',venue:'Away',competition:'Serie A',verified:true};
const postContext={window:{NAPOLI_DATA:{
 results:[],results2028:[],fixtures2028:[juveFixture,{date:'2028-10-28',team:'Napoli',opponent:'Sampdoria',venue:'Home',competition:'Serie A',verified:true}],
 seasonState:{league:{played:8,w:6,d:1,l:1,points:19,gf:11,ga:3},ucl:{played:3,w:2,d:1,l:0,points:7,gf:8,ga:6}},
 statsBySeason:{'2027–28':[['Pio Esposito',29,12,'Archive'],['Nico Paz',6,8,'Archive']],'2028–29':[['Pio Esposito',4,4,'Current'],['Nico Paz',1,1,'Current'],['Maximilian Beier',9,2,'Current']]},
 articles:[]
}}};
vm.createContext(postContext);
vm.runInContext(read('state-juventus-pio-25-oct-2028.js'),postContext,{filename:'state-juventus-pio-25-oct-2028.js',timeout:3000});
const JD=postContext.window.NAPOLI_DATA;
assert(JD.results.length===1&&JD.results[0][1]==='Juventus'&&JD.results[0][3]===2&&JD.results[0][4]===0,'Juventus result missing or wrong.');
assert(JD.results[0][7].includes('Di Gregorio')&&JD.results[0][7].includes('Nico Paz officially credited'),'Juve verified match events missing.');
assert(JD.seasonState.league.played===9&&JD.seasonState.league.w===7&&JD.seasonState.league.d===1&&JD.seasonState.league.l===1&&JD.seasonState.league.points===22&&JD.seasonState.league.gf===13&&JD.seasonState.league.ga===3,'Incorrect Juventus result league totals.');
assert(JD.seasonState.ucl.points===7&&JD.seasonState.ucl.gf===8&&JD.seasonState.ucl.ga===6,'Juventus incorrectly changed Champions League.');
assert(JD.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito')[1]===6,'Pio Juventus brace did not update season goal total.');
assert(JD.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito')[2]===4,'Pio assists altered without cause.');
assert(JD.statsBySeason['2028–29'].find(r=>r[0]==='Nico Paz')[2]===2,'Paz official assist at 89 minutes missing.');
assert(JD.statsBySeason['2027–28'].find(r=>r[0]==='Pio Esposito')[1]===29,'Historic Pio goals unexpectedly changed.');
assert(juveFixture.played&&JD.upcoming[0][0]==='Sampdoria'&&!JD.upcoming.some(x=>x[0]==='Juventus'),'Juventus should be final and Sampdoria next.');
assert(JD.latestResult[0]==='JUV'&&JD.latestResult[1]==='0–2'&&JD.latestResult[2]==='NAP','Latest result widget stale.');
assert(!JD.whispers.some(w=>/89.? winner/i.test(w[1])),'89th minute was the second goal; the 37th was the match winner.');
const JT=JD.serieAStandings.rows;
assert(JT.length===6,'Only the six photographed teams should be displayed.');
assert(JT[0][0]==='Napoli'&&JT[0][8]===22&&JT[0][7]===10,'Napoli not first on 22.');
assert(JT[1][0]==='Roma'&&JT[1][2]===6&&JT[1][3]===3&&JT[1][4]===0&&JT[1][8]===21&&JT[1][7]===15,'Unbeaten Roma on 21 not reflected.');
assert(JT[2][0]==='Atalanta'&&JT[2][8]===20,'Atalanta third on 20 not reflected.');
assert(JT[3][0]==='Juventus'&&JT[3][8]===17,'Juve after second defeat incorrect.');
assert(JT[4][0]==='AC Milan'&&JT[4][8]===16,'Milan fifth, 16 points not reflected.');
assert(JT[5][0]==='Lazio'&&JT[5][8]===15,'Lazio sixth, 15 points not reflected.');
assert(JT.every((r,i)=>r[2]+r[3]+r[4]===r[1]&&r[5]-r[6]===r[7]&&r[2]*3+r[3]===r[8]&&(i===0||JT[i-1][8]>=r[8])),'Post-Juve standings arithmetic / order incorrect.');
vm.runInContext(read('post-juventus-pio-brace-top-oct-2028.js'),postContext,{filename:'post-juventus-pio-brace-top-oct-2028.js',timeout:3000});
assert(JD.hero.articleId==='pio-turin-brace-napoli-top-oct-2028'&&JD.articles.length===4,'Juventus lead story not leading.');
assert(JD.articles.every(a=>a.body.length>=6&&a.headline&&a.image),'Juve article content or image missing.');
// Sampdoria FULL TIME + arsenal historic meeting with upcoming fixture kept unplayed.
const sampFixture={date:'2028-10-28',team:'Napoli',opponent:'Sampdoria',venue:'Home',competition:'Serie A',verified:true};
const arsenalUpcomingFixture={date:'2028-10-31',team:'Napoli',opponent:'Arsenal',venue:'Away',competition:'Champions League',verified:true};
const sampCtx={window:{NAPOLI_DATA:{
 results:[],results2028:[],fixtures2028:[sampFixture,arsenalUpcomingFixture],
 seasonState:{league:{played:9,w:7,d:1,l:1,points:22,gf:13,ga:3},ucl:{played:3,w:2,d:1,l:0,points:7,gf:8,ga:6}},
 serieAStandings:{updated:'25 Oct 2028',rows:[['Napoli',9,7,1,1,13,3,10,22],['Roma',9,6,3,0,22,7,15,21],['Atalanta',9,6,2,1,21,10,11,20]]},
 statsBySeason:{'2027–28':[['Pio Esposito',29,12,'Archive'],['Maximilian Beier',25,11,'Archive']],'2028–29':[['Pio Esposito',6,4,'Current'],['Maximilian Beier',9,2,'Current'],['Nico Paz',1,2,'Current'],['Kevin De Bruyne',1,1,'Current']]},
 articles:[]
}}};
vm.createContext(sampCtx);
vm.runInContext(read('state-sampdoria-arsenal-28-oct-2028.js'),sampCtx,{filename:'state-sampdoria-arsenal-28-oct-2028.js',timeout:3000});
const SM=sampCtx.window.NAPOLI_DATA;
assert(SM.results.length===1&&SM.results[0][1]==='Sampdoria'&&SM.results[0][3]===3&&SM.results[0][4]===0,'Sampdoria score wrong.');
assert(SM.results[0][7].includes('Beier entered at halftime')&&SM.results[0][7].includes('Pio Esposito 70′'),'Missing confirmed Sampdoria events.');
assert(SM.seasonState.league.played===10&&SM.seasonState.league.w===8&&SM.seasonState.league.d===1&&SM.seasonState.league.l===1&&SM.seasonState.league.points===25&&SM.seasonState.league.gf===16&&SM.seasonState.league.ga===3,'Sampdoria Serie A totals incorrect.');
assert(SM.seasonState.ucl.points===7&&SM.seasonState.ucl.gf===8&&SM.seasonState.ucl.ga===6,'Sampdoria must not change UCL record.');
assert(SM.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito')[1]===7&&SM.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito')[2]===5,'Pio Samp goal/assist not counted.');
assert(SM.statsBySeason['2028–29'].find(r=>r[0]==='Maximilian Beier')[1]===10&&SM.statsBySeason['2028–29'].find(r=>r[0]==='Maximilian Beier')[2]===3,'Beier Samp goal/assist not counted.');
assert(SM.statsBySeason['2028–29'].find(r=>r[0]==='Nico Paz')[2]===3,'Paz Samp assist not counted.');
assert(SM.statsBySeason['2028–29'].find(r=>r[0]==='Kevin De Bruyne')[1]===2,'De Bruyne Samp goal not counted.');
assert(SM.statsBySeason['2027–28'].find(r=>r[0]==='Pio Esposito')[1]===29,'Historical 2027–28 Napoli goals must remain unchanged.');
assert(sampFixture.played&&SM.upcoming[0][0]==='Arsenal'&&!arsenalUpcomingFixture.played,'Arsenal must be next and NOT completed.');
assert(SM.latestResult[0]==='NAP'&&SM.latestResult[1]==='3–0'&&SM.latestResult[2]==='SAM','Result widget should show Sampdoria.');
assert(SM.arsenalRematch.previous.result==='Napoli 1–1 Arsenal'&&SM.arsenalRematch.previous.napoliScorer.includes('90+1')&&SM.arsenalRematch.previous.napoliAssist==='Maximilian Beier','Arsenal 2027–28 history missing or altered.');
assert(SM.serieAStandings.rows[0][8]===25&&SM.serieAStandings.rows[1][8]===21&&SM.serieAStandings.rows[2][8]===20,'Should update only Napoli, keep rival points as latest known.');
assert(SM.titleRaceSnapshot2028.confirmed===false,'New post-Sampdoria rival standings have not been provided.');
vm.runInContext(read('post-sampdoria-arsenal-rematch-oct-2028.js'),sampCtx,{filename:'post-sampdoria-arsenal-rematch-oct-2028.js',timeout:3000});
assert(SM.hero.articleId==='arsenal-rematch-pio-91-history-oct-2028','Arsenal rematch should lead home.');
assert(SM.articles.length===4&&SM.articles.every(a=>a.body.length>=6&&a.image&&a.headline),'Arsenal/Sampdoria long-form stories incomplete.');
assert(SM.articles.find(a=>a.id==='arsenal-rematch-pio-91-history-oct-2028').body.join(' ').includes('90+1'),'Arsenal 90+1 historical moment missing from preview.');
assert(!SM.results.some(r=>r[1]==='Arsenal'),'NO current-season Arsenal result should be published.');
// 2028 Arsenal away FT: verified events and early substitutions, unconfirmed exact minutes respected.
const arsenalMatch={date:'2028-10-31',team:'Napoli',opponent:'Arsenal',venue:'Away',competition:'Champions League',verified:true};
const arsenalCtx={window:{NAPOLI_DATA:{
 articles:[],results:[],results2028:[],fixtures2028:[arsenalMatch],
 seasonState:{league:{played:10,w:8,d:1,l:1,points:25,gf:16,ga:3},ucl:{played:3,w:2,d:1,l:0,points:7,gf:8,ga:6}},
 arsenalRematch:{played:false,upcoming:'2028-10-31',previous:{season:'2027–28',result:'Napoli 1–1 Arsenal',napoliScorer:'Pio Esposito 90+1′',napoliAssist:'Maximilian Beier'}},
 statsBySeason:{'2027–28':[['Pio Esposito',29,12,'Previous']],'2028–29':[['Pio Esposito',7,5,'Current'],['Maximilian Beier',10,3,'Current'],['Nico Paz',1,3,'Current']]}
}}};
vm.createContext(arsenalCtx);
vm.runInContext(read('state-arsenal-2-0-31-oct-2028.js'),arsenalCtx,{filename:'state-arsenal-2-0-31-oct-2028.js',timeout:3000});
const AR=arsenalCtx.window.NAPOLI_DATA;
assert(AR.results.length===1&&AR.results[0][1]==='Arsenal'&&AR.results[0][3]===0&&AR.results[0][4]===2,'Arsenal away 2-0 FT wrong.');
assert(AR.results[0][7].includes('Merino')&&AR.results[0][7].includes('Martinelli'),'Arsenal confirmed goal scorers missing.');
assert(AR.results[0][7].includes('both entered early')&&AR.results[0][7].includes('second Arsenal goal'),'Paz and Calafiori actual early second-half appearances not preserved.');
assert(AR.arsenalRematch.selection.bothCameOnEarlySecondHalf&&AR.arsenalRematch.selection.bothOnForSecondGoal,'Substitution and second-concession attendance must be explicit.');
assert(AR.arsenalRematch.selection.minutes==='unconfirmed'&&AR.arsenalRematch.goalOrder==='unconfirmed','Do not invent goal order or substitution minutes.');
assert(AR.arsenalRematch.previous.result==='Napoli 1–1 Arsenal'&&AR.arsenalRematch.previous.napoliAssist==='Maximilian Beier','Historic 1-1 Arsenal match incorrectly changed.');
assert(arsenalMatch.played&&AR.upcoming.length===0,'Arsenal FT must not remain upcoming.');
assert(AR.latestResult[0]==='ARS'&&AR.latestResult[1]==='2–0'&&AR.latestResult[2]==='NAP','Latest result must show Arsenal FT.');
assert(AR.seasonState.ucl.played===4&&AR.seasonState.ucl.w===2&&AR.seasonState.ucl.d===1&&AR.seasonState.ucl.l===1&&AR.seasonState.ucl.points===7&&AR.seasonState.ucl.gf===8&&AR.seasonState.ucl.ga===8,'UCL 2-1-1 7pts 8GF 8GA incorrect.');
assert(AR.seasonState.league.played===10&&AR.seasonState.league.points===25&&AR.seasonState.league.ga===3,'Champions League defeat incorrectly changed league.');
assert(AR.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito')[1]===7&&AR.statsBySeason['2028–29'].find(r=>r[0]==='Nico Paz')[2]===3,'Player club goal contributions should not change in 0-2 loss.');
vm.runInContext(read('post-arsenal-2-0-selection-inquest-oct-2028.js'),arsenalCtx,{filename:'post-arsenal-2-0-selection-inquest-oct-2028.js',timeout:3000});
assert(AR.hero.articleId==='arsenal-two-chances-two-goals-saladinio-oct-2028'&&AR.articles.length===4,'Arsenal FT hero missing.');
assert(AR.articles.every(a=>a.headline&&a.image&&a.body.length>=6),'Arsenal coverage incomplete.');
assert(AR.articles.some(a=>a.id==='arsenal-paz-calafiori-bench-controversy-2028'&&a.body.join(' ').includes('Both were on the pitch when Arsenal scored their SECOND goal')),'Selection follow-up omitted critical confirmed participation.');
// Genoa FT after Arsenal with no fictitious dates, clean sheet and international window.
const genoaCtx={window:{NAPOLI_DATA:{
 articles:[],results:[],results2028:[],fixtures2028:[],
 seasonState:{league:{played:10,w:8,d:1,l:1,points:25,gf:16,ga:3},ucl:{played:4,w:2,d:1,l:1,points:7,gf:8,ga:8}},
 serieAStandings:{updated:'after Sampdoria',rows:[['Napoli',10,8,1,1,16,3,13,25],['Roma',9,6,3,0,22,7,15,21],['Atalanta',9,6,2,1,21,10,11,20]]},
 statsBySeason:{'2027–28':[['Scott McTominay',7,11,'Archive'],['Alphonso Davies',12,8,'Archive']],'2028–29':[['Scott McTominay',0,6,'Current'],['Alphonso Davies',2,0,'Current'],['Maximilian Beier',10,3,'Current'],['Pio Esposito',7,5,'Current']]},
 upcoming:[],ticker:[],whispers:[]
}}};
vm.createContext(genoaCtx);
vm.runInContext(read('state-genoa-mctominay-67-break-2028.js'),genoaCtx,{filename:'state-genoa-mctominay-67-break-2028.js',timeout:3000});
const GN=genoaCtx.window.NAPOLI_DATA;
assert(GN.results.length===1&&GN.results[0][1]==='Genoa'&&GN.results[0][3]===1&&GN.results[0][4]===0,'Genoa 1–0 score missing/incorrect.');
assert(GN.results[0][7].includes('Jankowski')&&GN.results[0][7].includes('Beier 36′')&&GN.results[0][7].includes('offside'),'Genoa goalkeeper heroics and 36th minute DISALLOWED goal omitted.');
assert(GN.results[0][7].includes('67′')&&GN.results[0][7].includes('SCOTT McTOMINAY')&&GN.results[0][7].includes('ALPHONSO DAVIES'),'Goal scorer, assist and minute must be verified.');
assert(GN.genoaMatch.exactDate===null&&GN.genoaMatch.venue===null,'Do not invent Genoa match date or venue.');
assert(GN.seasonState.league.played===11&&GN.seasonState.league.w===9&&GN.seasonState.league.d===1&&GN.seasonState.league.l===1&&GN.seasonState.league.points===28&&GN.seasonState.league.gf===17&&GN.seasonState.league.ga===3,'Genoa corrected Serie A 11P/28pts/17GF/3GA totals missing.');
assert(GN.genoaMatch.cleanSheetNumber===8,'Genoa was eighth domestic clean sheet.');
assert(GN.seasonState.ucl.played===4&&GN.seasonState.ucl.points===7&&GN.seasonState.ucl.gf===8&&GN.seasonState.ucl.ga===8,'Genoa must not alter UCL stats.');
assert(GN.statsBySeason['2028–29'].find(r=>r[0]==='Scott McTominay')[1]===1&&GN.statsBySeason['2028–29'].find(r=>r[0]==='Scott McTominay')[2]===6,'Scott should have one goal and six assists.');
assert(GN.statsBySeason['2028–29'].find(r=>r[0]==='Alphonso Davies')[1]===2&&GN.statsBySeason['2028–29'].find(r=>r[0]==='Alphonso Davies')[2]===1,'Davies should have two goals and one assist.');
assert(GN.statsBySeason['2028–29'].find(r=>r[0]==='Maximilian Beier')[1]===10,'Offside Beier goal must NOT increase season goal count.');
assert(GN.statsBySeason['2027–28'].find(r=>r[0]==='Scott McTominay')[1]===7,'Prior-season Scott goals should remain unchanged.');
assert(GN.nextInternationalWindow.opponentsVerified===false&&GN.nextInternationalWindow.datesVerified===false,'International friendly opponents/dates are NOT known.');
assert(GN.upcoming[0][0]==='Italy friendlies','International break must be next in upcoming state.');
assert(GN.serieAStandings.rows[0][8]===28&&GN.serieAStandings.rows[1][8]===21&&GN.titleRaceSnapshot2028.confirmed===false,'No invented new Roma standings or current point gap allowed.');
assert(GN.latestResult[0]==='NAP'&&GN.latestResult[1]==='1–0'&&GN.latestResult[2]==='GEN','Latest score widget must show Genoa.');
vm.runInContext(read('post-genoa-mctominay-67-international-break-2028.js'),genoaCtx,{filename:'post-genoa-mctominay-67-international-break-2028.js',timeout:3000});
assert(GN.hero.articleId==='mctominay-67-jankowski-genoa-win-nov-2028'&&GN.articles.length===4,'Genoa lead hero missing.');
assert(GN.articles.every(a=>a.body.length>=6&&a.image&&a.headline),'Genoa/new international feature must contain longform copy and a real archive asset.');
assert(GN.articles.some(a=>a.id==='italy-friendlies-international-break-napoli-nov-2028'&&a.body.join(' ').includes('opponents, dates and venues have not yet been supplied')),'International break story should avoid invented schedules.');
// Senegal/Turkey Italy friendlies and manager-confirmed Atalanta NEXT: no invented match events or dates.
const italyNext={window:{NAPOLI_DATA:{
 articles:[],results:[['Napoli','Genoa','Serie A',1,0,'W','November 2028 · unconfirmed date','McTominay 67′ from Davies']],
 results2028:[],fixtures2028:[],
 seasonState:{league:{played:11,w:9,d:1,l:1,points:28,gf:17,ga:3},ucl:{played:4,w:2,d:1,l:1,points:7,gf:8,ga:8}},
 italyOctober2028:{played:2,wins:2,players:[{name:'Pio Esposito',goals:2,assists:2},{name:'Moise Kean',goals:2,assists:0}]},
 nextInternationalWindow:{stage:'Upcoming',opponentsVerified:false},
 latestResult:['NAP','1–0','GEN','McTominay 67′'],
 statsBySeason:{'2027–28':[['Pio Esposito',29,12,'archive']],'2028–29':[['Pio Esposito',7,5,'current'],['Scott McTominay',1,6,'current'],['Maximilian Beier',10,3,'current']]},
 upcoming:[['Italy friendlies','International Friendly','TBC']],ticker:[],whispers:[]
}}};
vm.createContext(italyNext);
vm.runInContext(read('state-italy-senegal-turkey-atalanta-next-2028.js'),italyNext,{filename:'state-italy-senegal-turkey-atalanta-next-2028.js',timeout:3000});
const IN=italyNext.window.NAPOLI_DATA;
assert(IN.italyNovember2028.played===2&&IN.italyNovember2028.wins===1&&IN.italyNovember2028.draws===1,'New Italy two-game friendly record must be 1W1D.');
assert(IN.results.filter(r=>r[0]==='Italy').length===2,'Senegal/Turkey both must appear in the Italy friendly results archive.');
assert(IN.results.find(r=>r[1]==='Senegal')[3]===1&&IN.results.find(r=>r[1]==='Senegal')[4]===1,'Senegal Italy 1–1 incorrect.');
assert(IN.results.find(r=>r[1]==='Turkey')[3]===2&&IN.results.find(r=>r[1]==='Turkey')[4]===1,'Turkey Italy 2–1 incorrect.');
assert(IN.results.find(r=>r[1]==='Senegal')[7].includes('Donnarumma saved a penalty'),'Donnarumma Senegal penalty save omitted.');
assert(IN.results.find(r=>r[1]==='Turkey')[7].includes('UNASSISTED'),'Pio second Turkey goal MUST be unassisted.');
assert(IN.italyNovember2028.results[1].keanAssists===1&&IN.italyNovember2028.results[1].pioSecondGoalUnassisted===true,'Kean only assists the first Turkey goal; second Pio rebound has zero assists.');
assert(IN.italy2028FriendlySummary.played===4&&IN.italy2028FriendlySummary.wins===3&&IN.italy2028FriendlySummary.draws===1&&IN.italy2028FriendlySummary.gf===7&&IN.italy2028FriendlySummary.ga===2,'Four reported 2028 Italy friendlies have incorrect W/D or goal totals.');
assert(IN.italy2028FriendlySummary.pioGoals===5&&IN.italy2028FriendlySummary.pioAssists===2&&IN.italy2028FriendlySummary.keanAssists===2,'Pio/Kean 2028 Italy confirmed goal/assist totals incorrect.');
assert(IN.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito')[1]===7&&IN.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito')[2]===5,'Italy goals must not increase Napoli club statistics.');
assert(IN.statsBySeason['2027–28'].find(r=>r[0]==='Pio Esposito')[1]===29,'Historical club seasons must remain untouched.');
assert(IN.seasonState.league.points===28&&IN.seasonState.league.played===11&&IN.seasonState.ucl.points===7,'Friendlies must not alter Napoli club league/UCL statistics.');
assert(IN.nextInternationalWindow.stage==='Completed','Italy friendlies must not remain upcoming.');
assert(IN.nextClubMatch.opponent==='Atalanta'&&IN.nextClubMatch.played===false&&IN.nextClubMatch.date===null&&IN.nextClubMatch.venue===null,'Next Atalanta match must remain unplayed with no invented fixture date or venue.');
assert(IN.upcoming.length===1&&IN.upcoming[0][0]==='Atalanta','Atalanta must be next in fixtures sidebar.');
assert(IN.latestResult[0]==='NAP'&&IN.latestResult[1]==='1–0'&&IN.latestResult[2]==='GEN','Latest NAPOLI match should remain the Genoa victory.');
assert(IN.results.every(r=>r[1]!=='Atalanta'),'Do not publish a result for the unplayed Atalanta game.');
vm.runInContext(read('post-italy-senegal-turkey-atalanta-preview-2028.js'),italyNext,{filename:'post-italy-senegal-turkey-atalanta-preview-2028.js',timeout:3000});
assert(IN.hero.articleId==='atalanta-next-title-test-after-italy-friendlies-2028'&&IN.articles.length===2,'Atalanta should be lead and Italy friendly recap secondary.');
assert(IN.articles.find(x=>x.id==='pio-kean-senegal-turkey-friendlies-2028').body.join(' ').includes('NO ASSIST credited'),'Italy short report must preserve unassisted rebound correction.');
assert(IN.articles.find(x=>x.id==='atalanta-next-title-test-after-italy-friendlies-2028').body.length>=6,'Atalanta should have substantial preview coverage.');
// Atalanta 6–2 FT · all eight minute/scorer records, six credited Napoli assists, and updated season totals.
const preAtalanta=JSON.stringify({
  played:IN.seasonState.league.played,points:IN.seasonState.league.points,
  pio:IN.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito').slice(1,3)
});
assert(preAtalanta.includes('"played":11')&&preAtalanta.includes('"points":28'),'Atalanta state test must begin AFTER Genoa and Italy friendlies.');
IN.statsBySeason['2028–29'].push(['Nico Paz',1,3,'prior Genoa-confirmed'],['João Neves',1,0,'first Napoli goal vs Galatasaray']);
IN.serieAStandings={updated:'25 Oct snapshot plus Napoli Genoa',rows:[
 ['Napoli',11,9,1,1,17,3,14,28],
 ['Roma',9,6,3,0,22,7,15,21],
 ['Atalanta',9,6,2,1,21,10,11,20]]};
IN.titleRaceSnapshot2028={confirmed:false};
vm.runInContext(read('post-atalanta-six-two-pio-three-three-nov-2028.js'),italyNext,{filename:'post-atalanta-six-two-pio-three-three-nov-2028.js',timeout:3000});
assert(IN.hero.articleId==='pio-six-involvements-napoli-six-two-atalanta-2028'&&IN.articles.length===6,'Atalanta FT must lead above old previews and remain in history.');
assert(IN.articles.slice(0,4).every(x=>x.image&&x.imageLocked&&x.body.length>=8),'Every Atalanta story needs an archival image and substantial journalism.');
vm.runInContext(read('state-atalanta-six-two-pio-three-three-nov-2028.js'),italyNext,{filename:'state-atalanta-six-two-pio-three-three-nov-2028.js',timeout:3000});
assert(IN.atalantaMatch.played===true&&IN.atalantaMatch.result==='Napoli 6–2 Atalanta','Atalanta FT score and completed state incorrect.');
assert(IN.atalantaMatch.goals.length===8,'Exactly eight goals must be recorded, with no invented extra strikes.');
assert(JSON.stringify([...IN.atalantaMatch.goals.map(x=>x.minute)])===JSON.stringify([18,27,33,36,44,55,61,89]),'Goal event minute ordering must match manager narration.');
assert(IN.atalantaMatch.halftime==='4–1','Halftime score Atalanta must be 4–1.');
assert(IN.atalantaMatch.goals[0].scorer==='Pio Esposito'&&IN.atalantaMatch.goals[0].assist==='João Neves','18th minute Esposito top-corner goal from Neves missing.');
assert(IN.atalantaMatch.goals[1].scorer==='Nico Paz'&&IN.atalantaMatch.goals[1].assist==='Pio Esposito','27th minute Pio to Paz combination missing.');
assert(IN.atalantaMatch.goals[2].scorer==='Mario Pašalić'&&IN.atalantaMatch.goals[6].scorer==='Pio Esposito'&&IN.atalantaMatch.goals[7].scorer==='Mario Pašalić','Pašalić goals at 33/89 and Pio hat trick at 61 must be accurate.');
const napoliEvents=IN.atalantaMatch.goals.filter(x=>x.team==='Napoli');
assert(napoliEvents.length===6&&napoliEvents.every(x=>x.assist),'All six Napoli goals have grounded official assists.');
const pioScored=napoliEvents.filter(x=>x.scorer==='Pio Esposito');
const pioAssisted=napoliEvents.filter(x=>x.assist==='Pio Esposito');
const beierScored=napoliEvents.filter(x=>x.scorer==='Maximilian Beier');
const beierAssisted=napoliEvents.filter(x=>x.assist==='Maximilian Beier');
assert(pioScored.length===3&&pioAssisted.length===3&&beierScored.length===2&&beierAssisted.length===2,'Pio must have 3G 3A and Beier 2G 2A in Atalanta game.');
assert(napoliEvents.every(x=>x.scorer==='Pio Esposito'||x.assist==='Pio Esposito'),'Pio involved in ALL six Napoli goals.');
assert(IN.atalantaMatch.exactDate===null&&IN.atalantaMatch.venue===null,'Do NOT fabricate match date or location.');
assert(IN.atalantaMatch.substitutionsConfirmed===false&&IN.atalantaMatch.confirmedSubstitutions.length===0,'Substitutions NOT confirmed, do not invent completion.');
assert(IN.results.find(r=>r[1]==='Atalanta')[3]===6&&IN.results.find(r=>r[1]==='Atalanta')[4]===2,'Atalanta game must appear with 6–2 in the result archive.');
assert(IN.results2028.find(r=>r[1]==='Atalanta')[3]===6,'Season 2028 fixture result must be appended.');
assert(IN.latestResult[0]==='NAP'&&IN.latestResult[1]==='6–2'&&IN.latestResult[2]==='ATA','Latest match widget must be NAP 6–2 ATA.');
assert(IN.seasonState.league.played===12&&IN.seasonState.league.w===10&&IN.seasonState.league.d===1&&IN.seasonState.league.l===1,'Napoli 12 league matches record 10W 1D 1L incorrect.');
assert(IN.seasonState.league.points===31&&IN.seasonState.league.gf===23&&IN.seasonState.league.ga===5,'31pts,23GF,5GA missing after Atalanta.');
assert(IN.atalantaMatch.goals.filter(x=>x.team==='Atalanta').length===2,'Atalanta conceded 2, Pašalić brace must be captured.');
assert(IN.serieAStandings.rows[0][8]===31&&IN.serieAStandings.rows[0][7]===18,'League row points/+18 wrong.');
assert(IN.serieAStandings.rows[1][8]===21&&IN.serieAStandings.rows[2][8]===20&&IN.titleRaceSnapshot2028.confirmed===false,'Do not fabricate rival league points.');
assert(IN.seasonState.ucl.played===4&&IN.seasonState.ucl.points===7&&IN.seasonState.ucl.gf===8&&IN.seasonState.ucl.ga===8,'League game must not alter the Champions League.');
assert(IN.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito')[1]===10&&IN.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito')[2]===8,'Pio club cumulative 10G 8A incorrect.');
assert(IN.statsBySeason['2028–29'].find(r=>r[0]==='Maximilian Beier')[1]===12&&IN.statsBySeason['2028–29'].find(r=>r[0]==='Maximilian Beier')[2]===5,'Beier club cumulative 12G 5A incorrect.');
assert(IN.statsBySeason['2028–29'].find(r=>r[0]==='Nico Paz')[1]===2&&IN.statsBySeason['2028–29'].find(r=>r[0]==='Nico Paz')[2]===3,'Nico club cumulative 2G 3A incorrect.');
assert(IN.statsBySeason['2028–29'].find(r=>r[0]==='João Neves')[1]===1&&IN.statsBySeason['2028–29'].find(r=>r[0]==='João Neves')[2]===1,'Neves club cumulative 1G 1A incorrect.');
assert(IN.statsBySeason['2027–28'].find(r=>r[0]==='Pio Esposito')[1]===29,'Past club season must stay unchanged.');
assert(IN.italy2028FriendlySummary.pioGoals===5&&IN.italy2028FriendlySummary.pioAssists===2,'Pio national-team record must not change following Atalanta.');
assert(IN.nextClubMatch.played===true&&IN.upcoming[0][0]==='Next opponent TBC','Atalanta must be completed, and next fixture opponent unconfirmed.');
// Verified manager PSG/Monza dates + December 2028 in-game screenshot fixture audit. No scores or kickoff times invented.
vm.runInContext(read('state-fixtures-psg-monza-december-2028.js'),italyNext,{filename:'state-fixtures-psg-monza-december-2028.js',timeout:3000});
assert(IN.verifiedUpcoming2028.length===9,'Upcoming FC26 December fixtures must total NINE including PSG and Monza.');
const expectedDates=['2028-11-21','2028-11-26','2028-12-02','2028-12-05','2028-12-09','2028-12-13','2028-12-17','2028-12-24','2028-12-29'];
assert(JSON.stringify(Array.from(IN.verifiedUpcoming2028,x=>x.date))===JSON.stringify(expectedDates),'PSG Monza and December 2028 fixture dates inaccurate.');
const namesFixture=['Paris Saint-Germain','Monza','Udinese','Borussia Dortmund','Lazio','Como','Palermo','Bologna','AC Milan'];
assert(JSON.stringify(Array.from(IN.verifiedUpcoming2028,x=>x.opponent))===JSON.stringify(namesFixture),'PSG/Monza/December opponents incorrectly transcribed.');
assert(IN.verifiedUpcoming2028[0].venue==='Home'&&IN.verifiedUpcoming2028[0].competition==='Champions League','PSG is HOME 21 November in UCL.');
assert(IN.verifiedUpcoming2028[1].venue==='Away'&&IN.verifiedUpcoming2028[1].competition==='Serie A','Monza is AWAY 26 November in league.');
assert(IN.verifiedUpcoming2028[3].venue==='Away'&&IN.verifiedUpcoming2028[3].competition==='Champions League','Dortmund away UCL 5 December.');
assert(IN.verifiedUpcoming2028[5].venue==='Home'&&IN.verifiedUpcoming2028[5].competition==='Domestic Cup','Como home CUP 13 December. Round unconfirmed.');
assert(IN.verifiedUpcoming2028[8].venue==='Home'&&IN.verifiedUpcoming2028[8].competition==='Supercoppa'&&IN.verifiedUpcoming2028[8].gameAlias==='Milano FC','29 December game-calendar Home SUPERCUP vs Milano FC (AC Milan).');
assert(IN.verifiedUpcoming2028.every(x=>x.played===false&&x.verified===true),'Upcoming events must remain UNPLAYED and manager/screenshot verified.');
assert(IN.verifiedUpcoming2028.every(x=>!('result' in x)),'Do NOT invent scores for future fixtures.');
assert(IN.scheduleSnapshot.kickoffTimesVerified===false&&IN.scheduleSnapshot.domesticCupRoundVerified===false,'Kickoff times and domestic cup round are not supplied.');
assert(IN.nextClubMatch.opponent==='Paris Saint-Germain'&&IN.nextClubMatch.date==='2028-11-21'&&IN.nextClubMatch.confirmedNext===true,'PSG HOME is the next fixture after Atalanta FT.');
assert(IN.upcoming.length===9&&IN.upcoming[0][0]==='PSG'&&IN.upcoming[1][0]==='Monza','Live next-two fixture module must show PSG and Monza.');
assert(IN.seasonState.league.points===31&&IN.seasonState.league.played===12&&IN.atalantaMatch.played===true,'Adding upcoming calendar must NOT change completed Napoli league record.');
assert(IN.latestResult[0]==='NAP'&&IN.latestResult[1]==='6–2'&&IN.latestResult[2]==='ATA','Latest Napoli FT widget must remain Napoli 6–2 Atalanta.');
assert(IN.hero.articleId==='pio-six-involvements-napoli-six-two-atalanta-2028','Fixture-only update must NOT replace the Atalanta 6–2 front-page hero.');
assert(IN.seasonState.ucl.played===4&&IN.seasonState.ucl.points===7,'Upcoming PSG/Dortmund fixtures must not change prior European stats.');
assert(IN.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito')[1]===10,'Calendar must not alter Pio stats.');
// NEW post-Atalanta 12-game standings screenshot and PSG final-rematch preview checks.
vm.runInContext(read('state-serie-a-table-after-atalanta-12p-nov-2028.js'),italyNext,{filename:'state-serie-a-table-after-atalanta-12p-nov-2028.js',timeout:3000});
assert(IN.serieAStandings.rows.length===6,'Fresh photographed table has only top SIX club rows.');
const expectedTable=[
 ['Napoli',12,10,1,1,23,5,18,31],['Roma',12,9,3,0,28,10,18,30],
 ['Atalanta',12,7,3,2,27,18,9,24],['Juventus',12,6,4,2,21,13,8,22],
 ['AC Milan',12,6,4,2,21,13,8,22],['Lazio',12,5,5,2,22,18,4,20]
];
assert(JSON.stringify(Array.from(IN.serieAStandings.rows,r=>Array.from(r)))===JSON.stringify(expectedTable),'Latest FC26 12-game top-six Serie A table transcription error.');
assert(IN.titleRaceSnapshot2028.confirmed===true&&IN.titleRaceSnapshot2028.romapoints===30&&IN.titleRaceSnapshot2028.napolipoints===31,'Roma exactly ONE behind Napoli and still UNBEATEN in new screenshot.');
assert(IN.serieAStandings.rows[1][4]===0&&IN.serieAStandings.rows[1][3]===3&&IN.serieAStandings.rows[1][7]===18,'Roma 9W3D0L and +18 GD from twelve.');
assert(IN.serieAStandings.rows[2][8]===24,'Atalanta now 24 points, not the stale 20 from October.');
vm.runInContext(read('post-psg-final-rematch-neves-changes-sides-nov-21-2028.js'),italyNext,{filename:'post-psg-final-rematch-neves-changes-sides-nov-21-2028.js',timeout:3000});
assert(IN.hero.articleId==='psg-final-rematch-neves-switches-sides-nov-21-2028','PSG/Neves story must be current headline above Atalanta FT.');
const preview=IN.articles[0],previewText=preview.body.join(' ');
assert(preview.id==='psg-final-rematch-neves-switches-sides-nov-21-2028'&&preview.body.length>=9&&preview.image==='assets/pio-napoli.webp','New PSG headline must have long-form story with existing Napoli player image.');
assert(previewText.includes('38th minute')&&previewText.includes('João Neves')&&previewText.includes('$250 million'),'João Neves PSG 38th minute final goal and later $250m Napoli move are crucial to rematch.');
assert(previewText.includes('110 minutes')&&previewText.includes('Kvaratskhelia')&&previewText.includes('90th'),'Confirmed PSG 3–2 AET 2028 final history must be intact.');
assert(previewText.includes('league phase, not another final'),'Upcoming PSG league phase must not be misrepresented as 2028 final replay for trophy.');
assert(IN.nextClubMatch.opponent==='Paris Saint-Germain'&&IN.nextClubMatch.played===false&&IN.nextClubMatch.date==='2028-11-21','PSG HOME on Nov 21 remains UNPLAYED.');
assert(IN.seasonState.ucl.played===4&&IN.seasonState.ucl.points===7,'PSG preview must NOT fabricate new European result.');
assert(IN.seasonState.league.played===12&&IN.seasonState.league.points===31&&IN.latestResult[1]==='6–2','Fixture preview must not erase Atalanta FT or Serie A record.');
// Manager-confirmed Napoli 0–2 PSG 21 November 2028 FT, GK concern and Monza next.
vm.runInContext(read('post-psg-nov21-ft-goalkeeper-inquest-monza-2028.js'),italyNext,{filename:'post-psg-nov21-ft-goalkeeper-inquest-monza-2028.js',timeout:3000});
assert(IN.articles.length===10,'Three PSG/Monza full-time stories should lead, retaining pregame story and Atalanta archive.');
assert(IN.articles[0].id==='psg-two-nil-kvaratskhelia-again-nov-21-2028'&&IN.hero.articleId===IN.articles[0].id,'Full-time 0–2 PSG story must replace preview as hero.');
assert(IN.articles.slice(0,3).every(x=>x.image&&x.imageLocked&&x.body.length>=10),'Post-PSG story package must include long-form, existing Napoli-colours player artwork.');
assert(IN.articles.find(x=>x.id==='meret-pressure-peacock-audition-after-psg-nov-2028').body.join(' ').includes('NOT confirmation'),'Peacock recommendation must not be reported as confirmed XI.');
assert(IN.articles.find(x=>x.id==='monza-away-title-race-peacock-decision-nov-26-2028').body.join(' ').includes('Roma have 30'),'Monza story must mention Roma one point behind.');
const mayPsg=['Napoli','Paris Saint-Germain','Champions League',2,3,'L','27 May 2028 · Final, after extra time','Pio 17 pen/90; Neves PSG 38; Kvara 54/110'];
IN.results.push(mayPsg);
vm.runInContext(read('state-psg-nov21-zero-two-monza-peacock-2028.js'),italyNext,{filename:'state-psg-nov21-zero-two-monza-peacock-2028.js',timeout:3000});
assert(IN.psgNovember2028.played===true&&IN.psgNovember2028.date==='2028-11-21'&&IN.psgNovember2028.venue==='Home','Nov PSG home FT must be on 21 November 2028.');
assert(IN.psgNovember2028.goals.length===2,'Only two PSG goals confirmed.');
assert(IN.psgNovember2028.goals[0].minute===23&&IN.psgNovember2028.goals[0].scorer==='Ousmane Dembélé','PSG Dembélé 23rd minute opener missing.');
assert(IN.psgNovember2028.goals[1].minute===84&&IN.psgNovember2028.goals[1].scorer==='Khvicha Kvaratskhelia','Kvaratskhelia 84th minute second PSG goal missing.');
assert(IN.psgNovember2028.halftime==='Napoli 0–1 Paris Saint-Germain','Confirmed PSG halftime 0–1 is not reflected.');
assert(IN.psgNovember2028.goals.every(x=>x.assist===null&&x.assistStatus==='not supplied'),'PSG assists are unknown; never fabricate scorer-assist pairings.');
assert(IN.psgNovember2028.startingXIConfirmed===false&&IN.psgNovember2028.substitutionsConfirmed===false&&IN.psgNovember2028.meretResponsibleForIndividualGoalsConfirmed===false,'Starting XI, substitutions, and keeper blame have NOT been confirmed.');
assert(IN.results.some(r=>r[1]==='Paris Saint-Germain'&&r[3]===2&&r[4]===3&&String(r[6]).includes('27 May 2028')),'Historical PSG 3–2 Champions League final MUST be preserved.');
assert(IN.results.some(r=>r[1]==='Paris Saint-Germain'&&r[3]===0&&r[4]===2&&String(r[6]).includes('21 Nov 2028')),'Nov PSG 0–2 UCL league phase must appear separately from historical final.');
assert(IN.results2028.some(r=>r[1]==='Paris Saint-Germain'&&r[3]===0&&r[4]===2),'Season 2028–29 results archive missing Napoli 0–2 PSG.');
assert(IN.latestResult[0]==='NAP'&&IN.latestResult[1]==='0–2'&&IN.latestResult[2]==='PSG','Latest full-time match widget must be Napoli 0–2 PSG.');
assert(IN.seasonState.ucl.played===5&&IN.seasonState.ucl.w===2&&IN.seasonState.ucl.d===1&&IN.seasonState.ucl.l===2&&IN.seasonState.ucl.points===7,'European record after five matches is 2W 1D 2L seven points.');
assert(IN.seasonState.ucl.gf===8&&IN.seasonState.ucl.ga===10&&IN.seasonState.ucl.gd===-2,'UCL GF/GA and goal difference wrong after PSG.');
assert(IN.goalkeeperReview2028.managerAssessment.includes('other teams are getting'),'Actual manager concern about lack of key saves must be recorded.');
assert(IN.goalkeeperReview2028.peacockSelectedConfirmed===false&&IN.goalkeeperReview2028.meretDroppedConfirmed===false,'Peacock at Monza is only a proposed start, not yet confirmed by manager.');
assert(IN.goalkeeperReview2028.proposedNextStart.opponent==='Monza'&&IN.goalkeeperReview2028.proposedNextStart.date==='2028-11-26','Peacock trial proposal applies to Monza away Nov26.');
assert(IN.nextClubMatch.opponent==='Monza'&&IN.nextClubMatch.venue==='Away'&&IN.nextClubMatch.date==='2028-11-26'&&IN.nextClubMatch.played===false,'After PSG, Monza away Nov26 must be NEXT and UNPLAYED.');
assert(IN.verifiedUpcoming2028.length===8&&IN.verifiedUpcoming2028[0].opponent==='Monza'&&IN.verifiedUpcoming2028.every(f=>f.date!=='2028-11-21'),'No PSG match in upcoming fixtures after full time.');
assert(IN.fixtures2028.find(f=>f.date==='2028-11-21'&&f.opponent==='Paris Saint-Germain').played===true,'Original PSG fixture must be flagged played, never listed as upcoming.');
assert(IN.upcoming.length===8&&IN.upcoming[0][0]==='Monza'&&IN.upcoming[1][0]==='Udinese','Monza then Udinese must lead schedule after PSG.');
assert(IN.seasonState.league.played===12&&IN.seasonState.league.points===31,'UCL PSG defeat does NOT alter domestic league points.');
assert(IN.serieAStandings.rows[0][8]===31&&IN.serieAStandings.rows[1][8]===30,'Roma remains one behind Napoli after a EUROPEAN match.');
assert(IN.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito')[1]===10&&IN.statsBySeason['2028–29'].find(r=>r[0]==='Pio Esposito')[2]===8,'0–2 PSG must not add Napoli player stats.');
assert(IN.italy2028FriendlySummary.pioGoals===5,'0–2 PSG must not change Italy national-team records.');
// Verify each reviewed/hand-authored archive identity can be resolved by the current renderer.
for(const id of Object.keys(archive))assert(thread(id).length>0,'An archived article is unreachable: '+id);
console.log('PASS: '+scripts.length+' JavaScript scripts parse; '+Object.keys(archive).length+
  ' curated article IDs + '+Object.keys(legacy).length+
  ' preserved historic-seed IDs; sample replies, recurring threads and spoiler guards pass.');
