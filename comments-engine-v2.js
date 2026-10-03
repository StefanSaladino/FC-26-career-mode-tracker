(() => {
  const D = window.NAPOLI_DATA;
  if (!D || !Array.isArray(D.articles)) return;

  const safe = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  // Verified article-specific reactions. These are deliberately conservative: if a fact is
  // not encoded in the article/context registry, the automated layer does not invent it.
  const seeded = {
    'arsenal-pio-91': [
      ['PioNation','90+1 and Pio buries it. That is a striker who does not care what minute it is.'],
      ['MeretUnion','Meret kept Napoli alive long enough for that moment to exist.'],
      ['EuropeanNights','That is exactly the kind of European night people remember.']
    ],
    'bayern-test': [
      ['EuropeanNights','Bayern were cleaner in the decisive moments. Learn from it and move.'],
      ['DaviesExpress','There were promising spells, but this level punishes every missed opportunity.'],
      ['NapoliTherapy','Painful European lesson. The response matters now.']
    ],
    'udinese-pio-clean-sheet': [
      ['PioNation','Pio delivers again. At some point this stops being a streak and becomes the standard.'],
      ['CleanSheetCult','Three points and a clean sheet. Exactly the professional job required.']
    ],
    'genoa-drought': [
      ['PartenopeiProfessor','Defensive structure held up. The final-third execution did not.'],
      ['NapoliTherapy','A frustrating draw, but frustration is not the same thing as crisis.']
    ],
    'lazio-control': [
      ['azzurro_76','A draw is not a disaster. Bank the point and fix what was missing.'],
      ['tacticalnonno','Structure was there. The cutting edge was not.']
    ],
    'sassuolo-response': [
      ['ChiesaHive','That is a response: take the hit, stay composed, find a way back.'],
      ['NapoliTherapy','Comeback wins are terrible for the nerves and excellent for the table.']
    ],
    'chiesa-pisa': [
      ['FedeForever','Chiesa in a huge late moment. Cinema.'],
      ['NapoliTherapy','This club remains completely uninterested in winning quietly.']
    ],
    'torino-control': [
      ['EndrickEra','Endrick taking his opportunity is exactly what squad depth is supposed to look like.'],
      ['PeacockWatch','A valuable senior night for Peacock and a result to build on.']
    ],
    'fiorentina-kdb-1-0': [
      ['KDBClock','Veteran quality in a match decided by one moment.'],
      ['MeretUnion','In a one-goal game, the keeper matters every bit as much as the scorer.'],
      ['RotationPolice','Win the awkward one and keep the season moving.']
    ],
    'chelsea-pio-1-0': [
      ['PioNation','Pio keeps choosing the loudest possible European moments to score.'],
      ['MeretUnion','A one-goal European win needs nerve at both ends. Napoli had it.'],
      ['EuropeanNights','This is the kind of result that changes how opponents look at Napoli.']
    ],
    'inter-title-race-preview': [
      ['ScudettoOrBust','No predictions. Win the duels, control the emotion, let the table take care of itself.'],
      ['CurvaCalculator','A title-race fixture does not need extra hype. The stakes are already there.']
    ],
    'juventus-pio-penalty-1-0': [
      ['ScudettoOrBust','Beating Juventus in a title race always carries extra weight.'],
      ['PioNation','Pio wins the penalty and converts it. Big-game responsibility.'],
      ['BeierDefenseLeague','Beier on the scoresheet too. Huge result from the front line.']
    ],
    'salzburg-pio-1-1': [
      ['EuropeanNights','European points are valuable, but this one will feel like an opportunity left on the table.'],
      ['PioNation','Pio producing again on a European night.']
    ],
    'cagliari-davies-winner-2-1': [
      ['CupRomantic','Knockout football only asks one question: are you still in the competition? Napoli are.'],
      ['DaviesExpress','Big contribution in a cup tie when the margin was thin.']
    ],
    'italy-scotland-esposito-3-0': [
      ['AzzurriWatch','Three goals and a clean sheet is the kind of international performance you can actually build from.'],
      ['PioNation','The Esposito storyline keeps getting more interesting for Italy.']
    ],
    'italy-south-africa-pio-1-0': [
      ['AzzurriWatch','Not spectacular, but a win and a clean sheet still count.'],
      ['PioNation','Pio deciding another match is becoming familiar.']
    ],
    'marseille-hotel-disruption-3-0': [
      ['EuropeanNights','The hotel disruption and widespread fatigue are part of the context. This was not a normal preparation.'],
      ['MeretUnion','Meret kept Napoli alive for a long time before the exhausted legs finally gave way.'],
      ['NapoliTherapy','Bad result. Unique circumstances. Recover first, then judge the response.']
    ],
    'como-response-3-0': [
      ['PioNation','A goal and an assist for Pio. Complete centre-forward day.'],
      ['EndrickEra','Endrick with a goal and an assist too. That partnership was cooking.'],
      ['KDBClock','De Bruyne opens it before halftime and Napoli never look back.'],
      ['CleanSheetCult','Three goals, clean sheet, and a proper response after Marseille.'],
      ['GeertruidaWatch','Geertruida at left back was winning everything.']
    ]
  };

  const pools = {
    win: [
      'Three points. Bank them and move.',
      'Professional wins matter just as much as dramatic ones.',
      'Good teams find different ways to win over a long season.',
      'The best part of a league win is making the next opponent deal with the confidence.',
      'No need to invent problems after a win. Recover and go again.'
    ],
    'big-win': [
      'Big match, big pressure, big response.',
      'That is the sort of result that changes the mood around a season.',
      'Serious opponents demand serious concentration. Napoli delivered it.',
      'Enjoy the statement, then make sure it means something in the next match.'
    ],
    'cup-win': [
      'Knockout football is about surviving and advancing. Job done.',
      'Cup ties do not award style points. Napoli are through.',
      'One more obstacle cleared. Keep the trophy path alive.'
    ],
    'comeback-win': [
      'Going behind and still winning says plenty about the mentality of the group.',
      'The response after adversity matters more than the panic while it is happening.',
      'Not the calmest route to three points, but three points all the same.'
    ],
    'chaotic-win': [
      'Three points and several years removed from my life expectancy.',
      'A win is a win, even when the match refuses to behave normally.',
      'Take the points. Review the chaos tomorrow.'
    ],
    'frustrating-draw': [
      'A frustrating draw is still one point, not the end of the season.',
      'The structure can be fine while the final action is not. Fix the right problem.',
      'Dropped points hurt. Overreacting to them helps nobody.'
    ],
    loss: [
      'Bad night. Own it, recover, and make sure it does not become two bad nights.',
      'There is plenty to criticize after a loss without declaring the whole project dead.',
      'The response in the next match matters more than the funeral posts tonight.'
    ],
    'big-loss': [
      'Europe punishes mistakes brutally. Learn the level and respond.',
      'No panic, but no excuses either. The next European night has to look different.',
      'Painful result. Useful only if the lessons actually carry forward.'
    ],
    rivalry: [
      'Rivalry matches are emotional events with tactics attached.',
      'Control the emotion, win the duels, and let the football decide it.',
      'The badge makes this one personal even before the table gets involved.'
    ],
    'title-race': [
      'Do not spend the week staring at the table. Win and make the rivals watch Napoli.',
      'Every point feels louder in a title race. The job is still the next match.',
      'Depth, recovery and ugly wins all matter when the margins get this small.'
    ],
    editorial: [
      'There is a reasonable football argument here, which means the comments will definitely become unreasonable.',
      'Context matters. The next few matches will tell us more than one headline can.',
      'The role and the squad balance matter more than a single number.'
    ],
    story: [
      'This is the kind of squad storyline that will look obvious only in hindsight.',
      'The interesting part is what this changes in the rotation going forward.',
      'Bookmark the debate. Somebody will be quoting it again in a month.'
    ],
    'club-news': [
      'Good clubs manage the season off the pitch as carefully as they manage it on the pitch.',
      'Continuity matters when the football calendar never slows down.',
      'This will matter more later than it feels like it does today.'
    ]
  };

  const handles = ['VesuvioVoice','PartenopeiProfessor','NapoliTherapy','ScudettoOrBust','ActuallyWatchTheGame','NoTacticsJustVibes','CurvaCalculator','SouthStandAnalyst','BlueSideNaples','RotationPolice','EuropeanNights','NapoliSinceBirth'];

  function reactionFor(a) {
    const r = String(a.reaction || 'story').toLowerCase();
    if (pools[r]) return r;
    if (r.includes('loss')) return r.includes('big') ? 'big-loss' : 'loss';
    if (r.includes('draw')) return 'frustrating-draw';
    if (r.includes('win')) return r.includes('big') ? 'big-win' : 'win';
    if (a.commentContext === 'league-title-race') return 'title-race';
    if (a.commentContext === 'editorial' || a.commentDomain === 'italy') return 'editorial';
    return 'story';
  }

  function automated(a) {
    const key = reactionFor(a);
    const lines = pools[key] || pools.story;
    return lines.map((text, i) => [handles[(hash(a.id) + i) % handles.length], text]);
  }

  function hash(s) {
    let h = 0; for (const c of String(s)) h = ((h << 5) - h + c.charCodeAt(0)) | 0; return Math.abs(h);
  }

  function threadFor(a) {
    const bespoke = seeded[a.id] || [];
    const auto = automated(a);
    const seen = new Set();
    return [...bespoke, ...auto].filter(([, text]) => {
      const k = text.toLowerCase(); if (seen.has(k)) return false; seen.add(k); return true;
    }).slice(0, 10);
  }

  function render(a) {
    const rows = threadFor(a);
    return `<section class="fan-comments" data-comments-for="${safe(a.id)}"><div class="comments-head"><div><div class="section-kicker">Supporters' thread</div><h3>Comments</h3></div><span>${rows.length} reactions</span></div><div class="comments-list">${rows.map(([user,text]) => `<article class="fan-comment"><div class="comment-avatar">${safe(user).slice(0,1).toUpperCase()}</div><div class="comment-body"><div class="comment-user">@${safe(user)}</div><p>${safe(text)}</p></div></article>`).join('')}</div></section>`;
  }

  let syncing = false;
  function sync() {
    if (syncing) return;
    const reader = document.getElementById('readerContent'); if (!reader) return;
    const headline = reader.querySelector('#readerHeadline')?.textContent?.trim();
    if (!headline) { reader.querySelector('.fan-comments')?.remove(); return; }
    const a = D.articles.find(x => String(x.headline).trim() === headline); if (!a) return;
    syncing = true;
    reader.querySelector('.fan-comments')?.remove();
    reader.insertAdjacentHTML('beforeend', render(a));
    syncing = false;
  }

  const reader = document.getElementById('readerContent');
  if (reader) { new MutationObserver(() => queueMicrotask(sync)).observe(reader,{childList:true,subtree:true}); sync(); }
  document.addEventListener('click', e => { if (e.target.closest?.('[data-article]')) requestAnimationFrame(sync); });
  window.NAPOLI_COMMENT_ENGINE_VERSION = '2.0';
})();