#!/usr/bin/env node
// Audit CURRENT compiled Season Room, not obsolete browser-side 2028 post script order.
import fs from 'node:fs';import path from 'node:path';import vm from 'node:vm';import assert from 'node:assert/strict';
const root=path.resolve(import.meta.dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const html=read('index.html'),legacy=read('legacy-index.html');
const scripts=[...html.matchAll(/<script\s+src="([^"]+\.js)(?:\?[^"]*)?"/g)].map(m=>m[1]);
for(const name of ['snapshot-data.js','snapshot-runtime.js','comments-engine-v2.js'])assert(scripts.includes(name),'Missing compiled runtime '+name);
assert(!scripts.some(s=>/^(?:post-|stories-|site-visible-|comments\.js)/.test(s)),'Live site must not execute historical files or retired random comment engine');
assert(!html.includes('<script src="comments.js'),'Random comment generator must remain disabled');
assert(legacy.includes('comments-january-2031-expanded-fan-discussions.js')||read('site-visible-juventus-apr2030.js').includes('comments-january-2031-expanded-fan-discussions.js'),'January authored discussion loader missing');
for(const name of ['comments-january-2031-expanded-fan-discussions.js','comments-december-2030-expanded-fan-discussions.js']){assert(fs.existsSync(path.join(root,name)),'Missing bespoke overlay '+name);new vm.Script(read(name),{filename:name})}
const articleBody=read('stories-joao-neves-broken-toe-return-jan2031.js');
assert(!/Stach, Barella|McTominay,.*Barella/.test(articleBody),'Barella falsely listed in Napoli midfield');
const snapText=read('snapshot-data.js').split('\n')[0],prefix='window.NAPOLI_DATA=';
assert(snapText.startsWith(prefix),'Compiled season data missing');
const data=JSON.parse(snapText.slice(prefix.length,-1));
const manifest=/window\.NAPOLI_SNAPSHOT=\{[^;]*totalArticles:(\d+)/.exec(read('snapshot-data.js'))?.[1];
const archive=JSON.parse(read('news-archive.json'));
// This release must contain both hand-authored correction packages in the compiled snapshot.
assert(data.january2031DiscussionExpansion?.articleIds?.length===12,'January supporter discussions missing from published snapshot');
assert(data.december2030DiscussionExpansion?.articleIds?.length===12,'December supporter discussions missing from published snapshot');
assert(Array.isArray(archive.articles)&&archive.articles.length>=700,'Historical article archive unexpectedly reduced');
assert(manifest&&Number(manifest)===archive.articles.length,'Archive total does not match manifest');
const ids=new Set();let total=0,empty=0,underTen=0;
for(const a of archive.articles){assert(a.id&&!ids.has(a.id),'Missing or duplicate story ID '+a.id);ids.add(a.id);
 const rows=Array.isArray(a.comments)?a.comments:[];if(rows.length===0)empty++;if(rows.length<10)underTen++;
 const seen=new Set();for(const t of rows){if(!t||typeof t!=='object'||!String(t.user||'').trim()||!String(t.text||'').trim())continue;const key=t.user+'|'+t.text;assert(!seen.has(key),'Duplicated top-level comment for '+a.id);seen.add(key);total++;}
}
const latest=archive.articles.find(a=>a.id==='napoli-lazio-one-one-xg-27-13-raspadori-jan2031');
const neves=archive.articles.find(a=>a.id==='joao-neves-returns-from-broken-toe-napoli-jan2031');
assert(latest&&neves,'Newest reports missing from archive');
assert(!neves.body.join(' ').includes('Barella'),'Barella error remains in deployed archive');
const title=archive.articles.find(a=>a.id==='napoli-juventus-supercoppa-final-pio-four-4-1-jan2031');
if(data.january2031DiscussionExpansion){assert(title.comments.length>=25,'Supercoppa final discussion is too sparse');assert(latest.comments.length>=18,'Lazio draw discussion is too sparse');assert(neves.comments.length>=14,'Neves discussion is too sparse');}
if(data.december2030DiscussionExpansion){const u=archive.articles.find(a=>a.id==='napoli-udinese-one-one-epolo-garcia-pio-dec2030');assert(u?.comments?.length>=13,'Udinese comments did not publish');}
const lead=html.match(/<article id="heroStory"[\s\S]*?data-article="([^"]+)"/)?.[1];assert(lead===data.hero.articleId&&ids.has(lead),'Static first paint must match compiled data');
console.log(JSON.stringify({status:'PASS',articles:archive.articles.length,latestLead:lead,topLevelAcrossAllArticles:total,articlesWithoutInlineComments:empty,articlesWithFewerThanTenInlineThreads:underTen,janExpanded:!!data.january2031DiscussionExpansion,decExpanded:!!data.december2030DiscussionExpansion,publicScriptCount:scripts.length}));
