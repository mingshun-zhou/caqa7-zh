// 目录开关、当前项滚动到可见、公式渲染、全书搜索
(function () {
  const book = document.querySelector('.book');
  const mobile = () => window.matchMedia('(max-width: 900px)').matches;
  document.getElementById('toggle').addEventListener('click', () => {
    if (mobile()) book.classList.toggle('show-toc');
    else { book.classList.toggle('hide-toc'); localStorage.setItem('hideToc', book.classList.contains('hide-toc') ? '1' : ''); }
  });
  if (!mobile() && localStorage.getItem('hideToc')) book.classList.add('hide-toc');
  const act = document.querySelector('.summary li.active');
  if (act) act.scrollIntoView({ block: 'center' });

  // 键盘左右翻页
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    const a = document.querySelector(e.key === 'ArrowLeft' ? '.pager .prev' : e.key === 'ArrowRight' ? '.pager .next' : null);
    if (a) location.href = a.href;
  });

  window.addEventListener('load', () => {
    if (window.renderMathInElement) renderMathInElement(document.querySelector('.page-inner'), {
      delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
      throwOnError: false
    });
  });

  // 搜索
  const input = document.getElementById('search'), list = document.getElementById('search-results');
  let index = null;
  const escHtml = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  input.addEventListener('input', async () => {
    const q = input.value.trim();
    if (!q) { list.innerHTML = ''; return; }
    if (!index) index = await (await fetch('assets/search.json')).json();
    const hits = [];
    for (const p of index) {
      const i = p.x.toLowerCase().indexOf(q.toLowerCase());
      if (i >= 0 || p.t.includes(q)) {
        const j = Math.max(0, i);
        const snip = escHtml(p.x.slice(Math.max(0, j - 20), j + q.length + 40)).replace(escHtml(q), `<mark>${escHtml(q)}</mark>`);
        hits.push(`<li><a href="${p.s}.html">${escHtml(p.t)}</a><small>…${snip}…</small></li>`);
        if (hits.length >= 30) break;
      }
    }
    list.innerHTML = hits.join('') || '<li>没有找到</li>';
  });
})();
