(() => {
  const D = window.NAPOLI_DATA;
  if (!D || !Array.isArray(D.articles)) return;

  // Editorial image policy: reuse our approved Napoli player composites first.
  // Order matters when multiple players are mentioned: headline > dek > body.
  const players = [
    {keys:['Pio Esposito','Pio'], src:'assets/pio-napoli.webp'},
    {keys:['Endrick'], src:'assets/endrick-napoli.jpg'},
    {keys:['Bastoni'], src:'assets/bastoni-napoli.jpg'},
    {keys:['Beier'], src:'assets/beier-napoli.jpg'},
    {keys:['Chiesa'], src:'assets/chiesa-napoli.jpg'},
    {keys:['Davies','Alphonso Davies'], src:'assets/davies-napoli.jpg'},
    {keys:['Kayode'], src:'assets/kayode-napoli.jpg'}
  ];

  const text = a => ({
    headline:String(a.headline||''),
    dek:String(a.dek||''),
    body:Array.isArray(a.body)?a.body.join(' '):String(a.body||'')
  });
  const has = (s,k) => new RegExp(`(^|[^A-Za-z])${k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}([^A-Za-z]|$)`,'i').test(s);
  const findPlayer = a => {
    const t=text(a);
    for (const field of ['headline','dek','body']) {
      for (const p of players) if (p.keys.some(k=>has(t[field],k))) return p;
    }
    return null;
  };

  D.articles.forEach(a => {
    // Keep intentionally authored media/video choices. Replace missing/generic imagery
    // whenever an approved asset exists for the story's central player.
    const p=findPlayer(a);
    if (!p) return;
    const current=String(a.image||a.img||a.imageUrl||'');
    const generic=!current || /stadium|generic|placeholder|default|unsplash|pexels/i.test(current);
    if (generic) {
      a.image=p.src;
      a.img=p.src;
      a.imageUrl=p.src;
      a.imagePolicy='approved-player-asset';
    }
  });

  // Future post scripts can call this after inserting an article.
  window.NAPOLI_ASSIGN_ARTICLE_IMAGE = a => {
    const p=findPlayer(a||{});
    if (!p) return a;
    a.image=p.src; a.img=p.src; a.imageUrl=p.src; a.imagePolicy='approved-player-asset';
    return a;
  };
})();