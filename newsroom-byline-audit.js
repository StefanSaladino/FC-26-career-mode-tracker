/* Full newsroom byline audit — runs after all article and site state scripts. */
(()=>{
  const D=window.NAPOLI_DATA;
  if(!D||!Array.isArray(D.articles))return;
  const desk={
    match:'Marco Bellini · Match Desk',
    tactics:'Giulia Romano · Tactical Desk',
    europe:'Marco Bellandi · European Desk',
    italy:'Marco Bellandi · International Desk',
    features:'Giulia Romano · Features Desk'
  };
  const names=['Marco Bellini','Giulia Romano','Marco Bellandi'];
  const valid=v=>typeof v==='string'&&names.some(n=>v.trim().startsWith(n))&&!/Luca Ferraro/i.test(v);
  const pick=a=>{
    const text=[a.category,a.label,a.headline,a.dek].filter(Boolean).join(' ').toLowerCase();
    if(/italy|italia|azzurri|national|qualif|friendly|world cup|euro 20/.test(text))return desk.italy;
    if(/tactic|analysis|system|midfield|shape|press|formation|passing|rotation|question|why |how /.test(text))return desk.tactics;
    if(/champions league|ucl|europe|benfica|psg|bayern|barcelona|madrid|porto|dinamo|rakow|raków|juventus semifinal/.test(text))return desk.europe;
    if(/feature|opinion|spotlight|profile|academy|contract|transfer|whisper|future|inside|debate/.test(text))return desk.features;
    return desk.match;
  };
  let missing=0,incorrect=0,kept=0;
  const seen=new Set();
  for(const a of D.articles){
    if(!a||typeof a!=='object')continue;
    if(a.id)seen.add(a.id);
    if(valid(a.byline)){kept++;continue}
    if(!a.byline||!String(a.byline).trim())missing++;else incorrect++;
    a.byline=pick(a);
  }
  const failures=D.articles.filter(a=>a&&!valid(a.byline));
  window.NAPOLI_BYLINE_AUDIT={total:D.articles.length,uniqueIds:seen.size,preserved:kept,filledMissing:missing,reassignedIncorrect:incorrect,failures:failures.map(a=>a.id||a.headline)};
  if(failures.length)console.error('Napoli byline audit failed',window.NAPOLI_BYLINE_AUDIT);
  else console.info('Napoli byline audit passed',window.NAPOLI_BYLINE_AUDIT);
})();