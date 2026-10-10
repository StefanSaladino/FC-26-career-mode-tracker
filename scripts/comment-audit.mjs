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
// Verify each reviewed/hand-authored archive identity can be resolved by the current renderer.
for(const id of Object.keys(archive))assert(thread(id).length>0,'An archived article is unreachable: '+id);
console.log('PASS: '+scripts.length+' JavaScript scripts parse; '+Object.keys(archive).length+
  ' curated article IDs + '+Object.keys(legacy).length+
  ' preserved historic-seed IDs; sample replies, recurring threads and spoiler guards pass.');
