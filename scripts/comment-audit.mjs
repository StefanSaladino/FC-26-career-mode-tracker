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
// Lecce publication continuity: enforce meaningful original reactions, precise goalscoring scope and privacy.
const lecceIds=[
 ['napoli-lecce-four-one-comeback-beier-pio-jan2031',22],
 ['beier-lecce-20-goals-20-assists-jan2031',18],
 ['nico-paz-neves-lecce-midfield-jan2031',15],
 ['bellandi-lecce-four-one-early-warning-jan2031',14]
];
const lecceSet=lecceIds.map(([id,minimum])=>{const story=archive.articles.find(x=>x.id===id);assert(story,'Missing Lecce edition story '+id);assert(story.body?.length>=12,'Lecce article too short: '+id);assert(story.comments?.length>=minimum,'Lecce comments have been lost: '+id);
assert(fs.existsSync(path.join(root,story.image)),'Missing approved Lecce gallery image '+story.image);
assert(!/manager (supplied|confirmed)|\\$600,000|\\$5\\.9M|\\$17\\.5M|\\$192\\.5M/i.test(story.body.join(' ')),'Lecce newsroom source/private-talk leak: '+id);
return story});
const lecceThreads=lecceSet.reduce((n,s)=>n+s.comments.length,0);
assert(lecceThreads>=69,'Lecce edition fell below its approved original 69 discussions');
// January Sassuolo edition: preserve all earlier Lecce discussion while updating the current match checkpoints.
const sassuoloIds=[
 ['napoli-sassuolo-three-one-rossetti-brace-jan2031',20],
 ['edoardo-rossetti-first-napoli-brace-sassuolo-jan2031',22],
 ['joao-neves-two-assists-pio-rossetti-sassuolo-jan2031',16]
];
const sassuoloSet=sassuoloIds.map(([id,minimum])=>{const story=archive.articles.find(x=>x.id===id);
assert(story,'Missing new Sassuolo article '+id);
assert(story.body?.length>=15,'Sassuolo article too short: '+id);
assert(story.comments?.length>=minimum,'Sassuolo authored discussion lost: '+id);
assert(fs.existsSync(path.join(root,story.image)),'Missing approved Sassuolo gallery image '+story.image);
assert(!/manager (supplied|confirmed)|\$600,000|\$5\.9M|\$17\.5M|\$192\.5M/i.test(story.body.join(' ')),'Private source data leaked in Sassuolo newsroom '+id);
return story});
const sassuoloThreads=sassuoloSet.reduce((n,story)=>n+story.comments.length,0);
assert(sassuoloThreads>=58,'Sassuolo article discussions must preserve the original 58 bespoke threads');
// Verona 18 January 2031: preserve historical Sassuolo/Lecce threads, and validate new current publication.
const veronaIds=[
 ['verona-one-two-napoli-pio-beier-comeback-jan2031',20],
 ['pio-beier-two-goals-two-assists-verona-jan2031',18],
 ['napoli-54-points-early-deficits-barcelona-jan2031',16]
];
const veronaSet=veronaIds.map(([id,minimum])=>{const s=archive.articles.find(x=>x.id===id);
 assert(s,'Missing Verona edition '+id);
 assert(s.body?.length>=14,'Verona article too short '+id);
 assert(s.comments?.length>=minimum,'Verona commenter thread loss '+id);
 assert(fs.existsSync(path.join(root,s.image)),'Missing approved image for Verona piece '+id);
 assert(!/manager (supplied|confirmed)|\\$600,000|\\$5\\.9M|\\$17\\.5M|\\$192\\.5M/i.test(s.body.join(' ')),'Unacceptable reporter source or staff-room leak '+id);
 return s;});
const veronaTopLevel=veronaSet.reduce((n,s)=>n+s.comments.length,0);
assert(veronaTopLevel>=54,'Verona originals missing: expected at least 54 bespoke first-level threads');
const clubSeason=data.statsBySeason?.['2030–31']||[],clubStat=name=>clubSeason.find(r=>r[0]===name)?.slice(1,3);
for(const [name,g,a] of [
 ['Pio Esposito',31,10],['Maximilian Beier',20,23],
 ['Nico Paz',1,4],['Mikey Moore',5,6],['João Neves',0,3],['Edoardo Rossetti',2,0]
])assert(JSON.stringify(clubStat(name))===JSON.stringify([g,a]),'Wrong Napoli club stat after Verona '+name);
assert(data.season203031?.serieA?.points===54&&data.season203031?.serieA?.played===21,'Wrong Serie A record after Verona');
assert(data.season203031?.serieA?.position==null,'Do not invent current rank without full rival table');
assert(data.nextClubFixture?.opponent==='Barcelona','Barcelona should be next club fixture');
assert(data.latestResult?.[1]==='1–2'&&data.latestResult?.[2]==='Napoli'&&data.latestResult?.[0]==='Hellas Verona','Verona not latest result');
assert(data.season203031?.competitiveGamesConfirmed===31&&data.season203031?.competitiveGoalsFor===76&&data.season203031?.competitiveGoalsAgainst===25,'Napoli all-club totals wrong after Verona');

const lead=html.match(/<article id="heroStory"[\s\S]*?data-article="([^"]+)"/)?.[1];assert(lead===data.hero.articleId&&ids.has(lead),'Static first paint must match compiled data');
console.log(JSON.stringify({status:'PASS',articles:archive.articles.length,latestLead:lead,topLevelAcrossAllArticles:total,articlesWithoutInlineComments:empty,articlesWithFewerThanTenInlineThreads:underTen,janExpanded:!!data.january2031DiscussionExpansion,decExpanded:!!data.december2030DiscussionExpansion,publicScriptCount:scripts.length}));
