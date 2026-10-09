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
// Verify each reviewed/hand-authored archive identity can be resolved by the current renderer.
for(const id of Object.keys(archive))assert(thread(id).length>0,'An archived article is unreachable: '+id);
console.log('PASS: '+scripts.length+' JavaScript scripts parse; '+Object.keys(archive).length+
  ' curated article IDs + '+Object.keys(legacy).length+
  ' preserved historic-seed IDs; sample replies, recurring threads and spoiler guards pass.');
