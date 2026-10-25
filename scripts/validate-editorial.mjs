#!/usr/bin/env node
// Editorial checks: objective code errors block; subjective text warnings NEVER block.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
const root=process.cwd();
const files=readdirSync(root).filter(n=>n.endsWith('.js') && (n.startsWith('stories-')||n.startsWith('site-visible-')));
let errors=0,warnings=0;
function error(message){console.error('ERROR:',message);errors++}
function warn(message){console.warn('WARNING (nonblocking):',message);warnings++}
for(const name of files){
 const file=join(root,name);
 const check=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});
 if(check.status!==0){error(name+' invalid JavaScript: '+(check.stderr||'unknown parse error').trim());continue}
 if(!name.startsWith('stories-'))continue;
 const source=readFileSync(file,'utf8');
 // Only scan story scripts; policy documents and internal correspondence are intentionally excluded.
 const matches=[...source.matchAll(/Ferraro/gi)];
 if(matches.length)warn(name+': '+matches.length+' Ferraro reference(s). Review context: a legitimate footballer with this name is permitted.');
 const ids=[...source.matchAll(/"id":"([^"]+)"/g)].map(m=>m[1]);
 const seen=new Set();
 for(const id of ids){if(seen.has(id))error(name+': duplicate article ID '+id);seen.add(id)}
 const images=[...source.matchAll(/"image":"([^"]+)"/g)].map(m=>m[1]);
 for(const img of images){if(!/^assets\//.test(img))continue;const local=img.split(/[?#]/)[0];if(!existsSync(join(root,local)))error(name+': missing local image '+local)}
 if(ids.length===0)warn(name+': no JSON-style article IDs detected; check manually if this is an alternate story format.');
}
const ledgerPath=join(root,'EDITORIAL_COVERAGE_LEDGER.json');
if(existsSync(ledgerPath)){
 try{const ledger=JSON.parse(readFileSync(ledgerPath,'utf8'));for(const x of ledger.historical_player_features||[])if(x.status==='review_needed')warn('Monthly coverage needs review: '+x.month+' — '+x.note)}catch(e){error('Invalid coverage ledger JSON: '+e.message)}
}else warn('Coverage ledger not found.');
console.log('Editorial validation: '+files.length+' scripts checked; '+errors+' technical errors; '+warnings+' nonblocking warnings.');
if(errors)process.exitCode=1;
