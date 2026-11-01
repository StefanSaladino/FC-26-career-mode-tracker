#!/usr/bin/env node
// Compile legacy historical overlays once at publish time, not on visitors' devices.
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { chromium } from 'playwright';

const root=process.cwd();
const revision=(process.env.GITHUB_SHA||'local').slice(0,12);
const authorHTML=await fs.readFile(path.join(root,'legacy-index.html'),'utf8');
const heroSource=authorHTML.slice(authorHTML.indexOf('id="heroStory"'));
const expectedLead=heroSource.match(/data-article="([^"]+)"/)?.[1];
if(!expectedLead)throw Error('Authoring home page has no static lead article ID');
const mime={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json','.css':'text/css','.svg':'image/svg+xml','.jpg':'image/jpeg','.webp':'image/webp','.png':'image/png','.mp4':'video/mp4'};
const server=http.createServer(async(req,res)=>{
 try{
  const url=new URL(req.url,'http://localhost'),dest=path.resolve(root,'.'+decodeURIComponent(url.pathname));
  if(dest!==root&&!dest.startsWith(root+path.sep))throw Error('Forbidden path');
  const stat=await fs.stat(dest),file=stat.isDirectory()?path.join(dest,'index.html'):dest;
  res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Cache-Control':'no-store'});
  res.end(await fs.readFile(file));
 }catch{res.writeHead(404);res.end('Not found')}
});
await new Promise(ok=>server.listen(0,'127.0.0.1',ok));
const port=server.address().port;
let browser;
try{
 browser=await chromium.launch({args:['--no-sandbox']});
 const old=await browser.newPage({viewport:{width:1360,height:900},serviceWorkers:'block'});
 const legacyErrors=[];
 old.on('pageerror',e=>legacyErrors.push(e.stack||e.message));
 await old.route(/^https?:\/\/(?!127\.0\.0\.1)/,route=>route.abort());
 await old.goto('http://127.0.0.1:'+port+'/legacy-index.html',{waitUntil:'domcontentloaded',timeout:120000});
 await old.waitForFunction(id=>{
  const frame=document.getElementById('leadFrame');
  return frame&&!frame.classList.contains('is-booting')&&document.querySelector('#heroStory [data-article="'+id+'"]')&&window.NAPOLI_DATA?.articles?.some(x=>x.id===id);
 },expectedLead,{timeout:180000});
 await old.waitForTimeout(250);
 const result=await old.evaluate(()=>{
  const data=JSON.parse(JSON.stringify(window.NAPOLI_DATA));
  if(!data.articles?.length||!data.results?.length)throw Error('Incomplete historical state');
  const current={...data,articles:data.articles.slice(0,24)};
  const archive={articles:data.articles,comments:{
   commentOverride:window.NAPOLI_COMMENT_OVERRIDE||{},
   curatedArchive:window.NAPOLI_CURATED_ARCHIVE||{},
   legacyAuthoredComments:window.NAPOLI_LEGACY_AUTHORED_COMMENTS||{}
  }};
  const hero=document.querySelector('#heroStory [data-article]')?.getAttribute('data-article');
  document.querySelectorAll('script,[data-boot-preview]').forEach(el=>el.remove());
  for(const id of ['newsGrid','articleFilters','readerContent'])document.getElementById(id)?.replaceChildren();
  document.body.classList.remove('seasonroom-hydrating');
  document.getElementById('leadFrame')?.classList.remove('is-booting');
  document.getElementById('heroStory')?.removeAttribute('aria-hidden');
  return {hero,current,archive,html:'<!doctype html>\n'+document.documentElement.outerHTML,count:{articles:data.articles.length,results:data.results.length,seasons:Object.keys(data.statsBySeason||{}).length}};
 });
 if(legacyErrors.length)throw Error('Legacy script execution failures: '+legacyErrors.join('; '));
 if(result.hero!==expectedLead)throw Error('Wrong lead: '+result.hero+' expected '+expectedLead);
 if(result.count.articles<40||result.count.results<10)throw Error('Incomplete archive: '+JSON.stringify(result.count));
 await fs.writeFile('snapshot-data.js','window.NAPOLI_DATA='+JSON.stringify(result.current)+';\nwindow.NAPOLI_SNAPSHOT={archiveUrl:"news-archive.json?v='+revision+'",totalArticles:'+result.count.articles+',version:"'+revision+'"};\n');
 await fs.writeFile('news-archive.json',JSON.stringify(result.archive));
 const scripts=['snapshot-data.js','snapshot-runtime.js','comments-engine-v2.js','language-controller.js','image-fixes.js'].map(s=>'<script src="'+s+'?v='+revision+'"></script>').join('');
 await fs.writeFile('index.html',result.html.replace('</body>',scripts+'</body>'));
 await fs.writeFile('snapshot-build-report.json',JSON.stringify({revision,...result.count,legacyErrors:legacyErrors.slice(0,30)},null,2));
 console.log('Build state:',JSON.stringify({revision,...result.count,legacyErrors:legacyErrors.slice(0,6)}));
 const fresh=await browser.newPage({viewport:{width:390,height:844},serviceWorkers:'block'});
 const requests=[],errors=[];
 fresh.on('request',r=>{if(/\.js(?:\?|$)/.test(r.url()))requests.push(new URL(r.url()).pathname)});
 fresh.on('pageerror',e=>errors.push(e.message));
 await fresh.route(/^https?:\/\/(?!127\.0\.0\.1)/,route=>route.abort());
 await fresh.goto('http://127.0.0.1:'+port+'/',{waitUntil:'domcontentloaded',timeout:60000});
 console.log('Compact diagnostics:',JSON.stringify(await fresh.evaluate(()=>({scripts:[...document.querySelectorAll('script[src]')].map(s=>s.getAttribute('src')),dataPresent:typeof window.NAPOLI_DATA,snapshot:typeof window.NAPOLI_SNAPSHOT,heading:document.querySelector('#heroStory h2')?.textContent,bodyEnd:document.body.outerHTML.slice(-400)}))), 'requests', JSON.stringify(requests), 'errors', JSON.stringify(errors));
 await fresh.waitForFunction(()=>!!window.NAPOLI_SNAPSHOT,null,{timeout:15000});
 const rendered=await fresh.locator('#heroStory [data-article]').getAttribute('data-article');
 if(rendered!==result.hero)throw Error('Production lead mismatch: '+rendered);
 if(requests.length>7||requests.some(s=>/(?:^|\/)(?:post-|site-visible-|stories-|data\.js$)/.test(s)))throw Error('Historical scripts fetched on production '+JSON.stringify(requests));
 await fresh.locator('#heroStory [data-article]').click();
 await fresh.locator('#readerHeadline').waitFor();
 await fresh.locator('.fan-comments').waitFor({timeout:15000});
 await fresh.locator('#articleModal [data-close-article]').last().click({force:true});
 await fresh.locator('.section-nav [data-target="news"]').click();
 await fresh.waitForFunction(()=>window.NAPOLI_SNAPSHOT?.archiveLoaded===true,null,{timeout:30000});
 const found=await fresh.locator('#newsGrid [data-article]').count();
 if(found!==result.count.articles)throw Error('Missing archived articles '+found+'/'+result.count.articles);
 const lastArticle=await fresh.locator('#newsGrid [data-article]').last().getAttribute('data-article');
 await fresh.locator('#newsGrid [data-article]').last().click();
 await fresh.waitForFunction(id=>document.getElementById('readerContent')?.dataset.articleId===id,lastArticle,{timeout:12000});
 const archiveTitle=await fresh.locator('#readerHeadline').innerText();
 if(!archiveTitle)throw Error('Archived article failed to open');
 await fresh.locator('#articleModal [data-close-article]').last().click({force:true});
 await fresh.locator('.section-nav [data-target="stats"]').click();
 await fresh.locator('.stats-filters [data-stats-view="2030–31"]').click();
 if(!(await fresh.locator('#statsTable').innerText()).includes('Maximilian Beier'))throw Error('Season statistics lost');
 await fresh.locator('.section-nav [data-target="matches"]').click();
 await fresh.locator('#teamFilter').selectOption('Italy');
 const italyCards=await fresh.locator('#matchesList .match-card').count();
 if(!italyCards)throw Error('Italy match filter returned no results');
 if(errors.length)throw Error('Production errors: '+errors.join('; '));
 console.log('Production test passed',JSON.stringify({lead:rendered,articles:found,archived:lastArticle,italyMatches:italyCards,jsRequests:requests}));
 await fresh.close();await old.close();
}finally{
 await browser?.close();
 await new Promise(ok=>server.close(ok));
}
