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
// 22 January Barcelona edition and Rossetti short-term loan: new publication guard; preserve January Lecce, Sassuolo and Verona archives above.
const barcelonaIds=[
 ['napoli-barcelona-two-nil-beier-pio-ucl-jan2031',24,17],
 ['bellandi-barcelona-xg-shots-precision-jan2031',18,16],
 ['pio-beier-barcelona-reciprocal-partnership-jan2031',17,15],
 ['edoardo-rossetti-short-term-loan-after-sassuolo-brace-jan2031',20,15]
];
const barcelonaStories=barcelonaIds.map(([id,minimum,paragraphs])=>{
 const a=archive.articles.find(x=>x.id===id);
 assert(a,'Missing January Barcelona/loan story '+id);
 assert(a.body?.length>=paragraphs,'Barcelona/loan piece too short '+id);
 assert(a.comments?.length>=minimum,'Barcelona/loan comment threads lost '+id);
 assert(fs.existsSync(path.join(root,a.image)),'Missing approved image '+a.image);
 assert(!/manager (supplied|confirmed)|\\$600,000|\\$5\\.9M|\\$17\\.5M|\\$192\\.5M|source screenshot|no keeper confirmed/i.test(a.body.join(' ')),'Editorial or staff-room privacy leak: '+id);
 return a;
});
const barcelonaThreads=barcelonaStories.reduce((n,s)=>n+s.comments.length,0);
assert(barcelonaThreads>=79,'New Barcelona and Rossetti loan supporter discussions lost');
const countNested=rows=>rows.reduce((n,r)=>n+1+countNested(r.replies||[]),0);
assert(barcelonaStories.reduce((n,s)=>n+countNested(s.comments),0)>=198,'New Barcelona and Rossetti loan replies lost');
// Current edition: Bologna 26 Jan. Preserve Lecce, Sassuolo, Verona, Barcelona original discussions above.
// Run this complete Bologna guard after the compact site generator commits news-archive.json; source-only pushes can precede that artifact.
const bolognaId='napoli-bologna-one-nil-raspadori-beier-83-jan2031';
const bologna=archive.articles.find(a=>a.id===bolognaId);
assert(bologna,'Bologna report missing');
assert(bologna.body?.length>=18,'Bologna article cut short');
assert(bologna.comments?.length>=24,'Bologna supporter threads lost');
assert(fs.existsSync(path.join(root,bologna.image)),'Approved Bologna cover image missing');
assert(countNested(bologna.comments)>=66,'Bologna replies lost');
assert(!/manager (supplied|confirmed)|source screenshot|private staff-room/i.test(bologna.body.join(' ')),'Bologna public reporting includes source provenance or private material');
// Current reporting checkpoint: Napoli 3–1 Arsenal, UEFA Champions League quarterfinal
// 16 April 2031. Older Bologna story content is checked above as archived history;
// its historical snapshot totals must not override the living season data.
const clubSeason=data.statsBySeason?.['2030–31']||[];
const clubStat=name=>clubSeason.find(r=>r[0]===name)?.slice(1,3);
for(const [name,g,a] of [
 ['Pio Esposito',39,16],['Maximilian Beier',35,32],['Nico Paz',5,4],
 ['Estêvão',3,5],['João Neves',1,4]
])assert(JSON.stringify(clubStat(name))===JSON.stringify([g,a]),'Wrong Napoli current club stats after Arsenal 16 April '+name);
const league=data.seasonState?.league;
assert(league?.played===32&&league?.wins===23&&league?.draws===8&&league?.losses===1&&league?.points===77&&league?.goalsFor===66&&league?.goalsAgainst===23&&league?.goalDifference===43,'Wrong Serie A standings after latest Champions League match');
assert(league?.leadPoints===7&&league?.remaining===6,'Serie A seven-point lead and six-game cushion lost');
const qf=data.seasonState?.championsLeague?.quarterfinal;
assert(data.seasonState?.championsLeague?.stage==='Semifinals'&&qf?.qualifier==='Napoli'&&qf?.aggregate?.Napoli===4&&qf?.aggregate?.Arsenal===3,'Napoli must advance to UCL semifinals 4–3 on aggregate');
const secondLeg=qf?.legs?.find(x=>x.date==='2031-04-16');
assert(secondLeg?.status==='completed'&&secondLeg?.resultText==='Napoli 3–1 Arsenal'&&secondLeg?.events?.length===4,'Arsenal comeback match record missing');
assert(secondLeg.events[0]?.minute==='49'&&secondLeg.events[0]?.scorer==='Maximilian Beier'&&secondLeg.events[0]?.assist==='João Neves','Beier 49′ / João Neves contribution changed');
assert(secondLeg.events[1]?.minute==='72'&&secondLeg.events[1]?.scorer==='Declan Rice','Rice 72′ equalizer missing');
assert(secondLeg.events[2]?.scorer==='Maximilian Beier'&&secondLeg.events[2]?.minute==null&&secondLeg.events[2]?.officialAssist===false,'Beier second goal cannot receive an invented minute or assist');
assert(secondLeg.events[3]?.minute==='90+1'&&secondLeg.events[3]?.scorer==='Estêvão'&&secondLeg.events[3]?.assist==='Maximilian Beier','Estêvão stoppage-time header / Beier assist missing');
assert(data.latestResult?.[0]==='Napoli'&&data.latestResult?.[1]==='3–1'&&data.latestResult?.[2]==='Arsenal','Current latest result must be Napoli 3–1 Arsenal');
assert(data.nextMatch?.opponent==='Cagliari'&&data.nextMatch?.date==='2031-04-19','Cagliari must remain next scheduled fixture');
const arsenalComments=[
 ['napoli-arsenal-three-one-estevao-91-beier-comeback-apr16-2031',40],
 ['maximilian-beier-two-goals-one-assist-arsenal-apr16-2031',38],
 ['estevao-header-91-beier-cross-napoli-arsenal-apr16-2031',37],
 ['rice-72-napoli-arsenal-collapse-turnaround-bellandi-apr2031',37],
 ['napoli-third-straight-ucl-dream-survives-arsenal-apr2031',38],
 ['maradona-fan-reactions-napoli-arsenal-91st-minute-2031',40]
];
let newTopLevel=0,newTotal=0;
for(const [id,expectedRoots] of arsenalComments){
 const a=archive.articles.find(x=>x.id===id);
 assert(a,'Missing latest Arsenal comeback report '+id);
 assert(a.comments?.length===expectedRoots,'Top-level Arsenal discussions not fully deployed for '+id+': got '+a.comments?.length);
 assert(a.body?.length>=15,'Original article body missing for '+id);
 const all=new Set();
 const visit=(nodes)=>{for(const node of nodes){assert(node.user&&node.text,'Empty user or text in '+id);const key=node.text.trim().toLowerCase();assert(!all.has(key),'Repeated Arsenal comment in '+id);all.add(key);visit(node.replies||[])}};
 visit(a.comments);
 newTopLevel+=a.comments.length;newTotal+=all.size;
}
assert(newTopLevel===230,'Arsenal comeback must have 230 independent root reactions across six articles');
assert(newTotal===434,'Arsenal comeback must preserve 204 original replies and contain 434 total comments');
assert(read('site-visible-juventus-apr2030.js').includes('comments-arsenal-top-level-wave-a-apr16-2031.js')&&read('site-visible-juventus-apr2030.js').includes('comments-arsenal-top-level-wave-b-apr16-2031.js'),'Additional root discussion scripts missing from compiled loader');

const lead=html.match(/<article id="heroStory"[\s\S]*?data-article="([^"]+)"/)?.[1];assert(lead===data.hero.articleId&&ids.has(lead),'Static first paint must match compiled data');
console.log(JSON.stringify({status:'PASS',articles:archive.articles.length,latestLead:lead,topLevelAcrossAllArticles:total,articlesWithoutInlineComments:empty,articlesWithFewerThanTenInlineThreads:underTen,janExpanded:!!data.january2031DiscussionExpansion,decExpanded:!!data.december2030DiscussionExpansion,publicScriptCount:scripts.length}));
