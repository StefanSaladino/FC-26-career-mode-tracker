(() => {
  const D = window.NAPOLI_DATA;
  const el = document.getElementById('formLine');
  const s = D?.leagueSnapshot;
  if (!el || !s) return;
  el.innerHTML = `<div><strong>${s.played} played</strong><span>Serie A · ${s.points} pts · 1st</span></div><div><strong>+1</strong><span>Lead over Inter · ${s.interPoints} pts</span></div>`;
})();