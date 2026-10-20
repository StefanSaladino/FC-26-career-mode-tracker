/* Current 2029–30 homepage snapshot. Apply after historical season scripts. */
(()=>{const $=id=>document.getElementById(id);const D=window.NAPOLI_DATA||(window.NAPOLI_DATA={});
const latest=$('latestResult');if(latest)latest.innerHTML='<div class="latest-score"><span>NAP</span><strong>2–0</strong><span>SAS</span></div><p>SERIE A · 1 SEP 2029 · PIO 28′ (BEIER) · MOORE 88′ (RASPADORI)</p>';
const next=$('nextTwo');if(next)next.innerHTML='<div class="next-match"><strong>ITALY · 8 SEP 2029</strong><p>Finland vs Italy · Away · Friendly</p></div><div class="next-match"><strong>NAPOLI · 15 SEP 2029</strong><p>Udinese vs Napoli · Away · Serie A</p></div>';
const form=$('formLine');if(form)form.innerHTML='<div class="form-season">SERIE A · 2029–30</div><strong>1W–1D–0L</strong><p>4 POINTS · 2 PLAYED</p><strong>UNBEATEN</strong><p>Parma 1–1 Napoli · Napoli 2–0 Sassuolo</p><strong>+2</strong><p>Goal difference · 3 scored · 1 conceded</p>';
D.latestResult=['NAP','2–0','SAS','SERIE A · MD2 · PIO / MOORE'];D.ticker=['NAPOLI 2–0 SASSUOLO · PIO AND MOORE','SERIE A · 4 POINTS FROM TWO MATCHES','ITALY AT FINLAND · 8 SEPTEMBER 2029','NAPOLI AT UDINESE · 15 SEPTEMBER 2029'];
const ticker=$('tickerTrack');if(ticker)ticker.replaceChildren(...[...D.ticker,...D.ticker].map(s=>{const el=document.createElement('span');el.textContent=s;return el;}));
const h=document.querySelector('.header-status span:last-child');if(h)h.textContent='2029–30 · UNBEATEN AFTER TWO';
})();