// 生成仿 Archbase（bookdown gitbook）样式的多页静态网站，输出到 _site/。
// 用法：node tools/build-site.mjs
// 不依赖 R/bookdown；正式出版物仍可用 make html。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from '/home/zms/.local/node/lib/node_modules/@deepseek-harness-tui/dsh-tui/node_modules/marked/lib/marked.esm.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const final = path.join(root, '_site');
const out = path.join(root, '_site.tmp');   // 先写临时目录，最后整体替换，避免服务中出现半成品
const BOOK = '计算机体系结构：量化研究方法（第 7 版）';

const yml = fs.readFileSync(path.join(root, '_bookdown.yml'), 'utf8');
const files = [...yml.matchAll(/^\s*-\s*(\S+\.Rmd)\s*$/gm)].map(m => m[1])
  .filter(f => f !== 'index.Rmd' && fs.existsSync(path.join(root, f)));

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// ---------- 1. 读入并切分成页 ----------
// 每章一个封面页（章标题到第一个 ## 之前），每个 ## 一页。
const pages = [];          // {slug, title, label, level, chapter, md}
let chap = 0, sec = 0, cur = null;
for (const f of files) {
  let src = fs.readFileSync(path.join(root, f), 'utf8').replace(/```\{r[\s\S]*?```/g, '');
  const lines = src.split('\n');
  let inCode = false;
  for (const line of lines) {
    if (/^```/.test(line)) inCode = !inCode;
    const h = !inCode && line.match(/^(#{1,2}) (.+?)\s*(\{([^}]*)\})?\s*$/);
    if (h) {
      const lv = h[1].length, attr = h[4] || '';
      const id = (attr.match(/#([\w-]+)/) || [])[1];
      const unnum = /(^|\s)-(\s|$)|\.unnumbered/.test(attr);
      let label = '';
      if (lv === 1) { chap++; sec = 0; label = `第 ${chap} 章`; }
      else if (!unnum) { sec++; label = `${chap}.${sec}`; }
      const slug = id || (lv === 1 ? `ch-${chap}` : `sec-${chap}-x${pages.length}`);
      cur = { slug, title: h[2], label, level: lv, chapter: chap, md: '' };
      pages.push(cur);
      continue;
    }
    if (cur) cur.md += line + '\n';
  }
}

// ---------- 2. Markdown 转 HTML ----------
const idPage = {};         // 锚点 id → 页面 slug
for (const p of pages) idPage[p.slug] = p.slug;

function render(p) {
  let src = p.md;
  const math = [];
  src = src.replace(/\\\$/g, '&#36;');
  src = src.replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g, m => `@@M${math.push(m) - 1}@@`);
  const foot = [];
  src = src.replace(/\^\[((?:[^\[\]]|\[[^\]]*\])+)\]/g, (_, t) => {
    foot.push(t); const n = foot.length;
    return `<sup class="fn-ref"><a href="#fn-${p.slug}-${n}" id="fr-${p.slug}-${n}">${n}</a></sup>`;
  });
  src = src.replace(/!\[([\s\S]*?)\]\(([^)]+)\)\{#([\w-]+)[^}]*\}/g, (_, cap, s, id) => {
    idPage[id] = p.slug;
    return `<div class="figure" id="${id}"><img src="${s}" alt="${esc(cap.split('　')[0])}" loading="lazy"><p class="caption">${marked.parseInline(cap)}</p></div>\n`;
  });
  src = src.replace(/^\[([^\]]+)\]\{#([\w-]+)[^}]*\}[ \t]*$/gm, (_, t, id) => {
    idPage[id] = p.slug;
    return `<p class="caption table-caption" id="${id}">${marked.parseInline(t)}</p>\n`;
  });
  src = src.replace(/^(#{3,4}) (.+?)\s*\{([^}]*)\}[ \t]*$/gm, (_, h, t, a) => {
    const id = (a.match(/#([\w-]+)/) || [])[1] || '';
    if (id) idPage[id] = p.slug;
    return `<h${h.length}${id ? ` id="${id}"` : ''}>${t}</h${h.length}>\n`;
  });
  let html = marked.parse(src);
  html = html.replace(/@@M(\d+)@@/g, (_, i) => esc(math[i]));
  if (foot.length) html += '<div class="footnotes"><hr><ol>' + foot.map((t, i) =>
    `<li id="fn-${p.slug}-${i + 1}">${marked.parseInline(t)} <a href="#fr-${p.slug}-${i + 1}">↩</a></li>`).join('') + '</ol></div>';
  return html;
}
for (const p of pages) p.html = render(p);
// 跨页链接：#id → page.html#id
for (const p of pages) {
  p.html = p.html.replace(/href="#([\w-]+)"/g, (m, id) => {
    const target = idPage[id];
    if (!target || target === p.slug) return m;
    return `href="${target}.html#${id}"`;
  });
}

// ---------- 3. 页面模板 ----------
const tocHtml = active => {
  let h = `<li class="chapter"><a href="index.html"${active === 'index' ? ' class="active"' : ''}>${BOOK}</a></li>\n`;
  for (const p of pages) {
    const cls = p.level === 1 ? 'chapter' : 'section';
    h += `<li class="${cls}${p.slug === active ? ' active' : ''}"><a href="${p.slug}.html"><b>${p.label}</b> ${p.title}</a></li>\n`;
  }
  return h;
};
const shell = (title, active, body, prev, next) => `<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} | ${BOOK}</title>
<link rel="stylesheet" href="assets/book.css">
<link rel="stylesheet" href="assets/katex/katex.min.css">
<script defer src="assets/katex/katex.min.js"></script>
<script defer src="assets/katex/contrib/auto-render.min.js"></script>
<script defer src="assets/book.js"></script>
</head><body>
<div class="book">
<nav class="book-summary" aria-label="目录">
<div class="search"><input id="search" type="search" placeholder="搜索全书…" aria-label="搜索全书"><ul id="search-results"></ul></div>
<ul class="summary">${tocHtml(active)}</ul>
</nav>
<div class="book-body">
<header class="book-header"><button id="toggle" aria-label="显示或隐藏目录">☰</button><span>${esc(title)}</span></header>
<main class="page-inner">${body}
<nav class="pager">${prev ? `<a class="prev" href="${prev.slug}.html">← ${prev.label} ${prev.title}</a>` : '<span></span>'}${next ? `<a class="next" href="${next.slug}.html">${next.label} ${next.title} →</a>` : '<span></span>'}</nav>
</main></div></div></body></html>`;

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, 'assets'), { recursive: true });

pages.forEach((p, i) => {
  const head = p.level === 1
    ? `<h1 id="${p.slug}"><span class="num">${p.label}</span> ${p.title}</h1>`
    : `<h2 id="${p.slug}"><span class="num">${p.label}</span> ${p.title}</h2>`;
  let body = head + p.html;
  if (p.level === 1) {   // 章封面页附本章目录
    const subs = pages.filter(q => q.chapter === p.chapter && q.level === 2);
    body += '<ul class="chapter-toc">' + subs.map(q => `<li><a href="${q.slug}.html">${q.label} ${q.title}</a></li>`).join('') + '</ul>';
  }
  fs.writeFileSync(path.join(out, `${p.slug}.html`), shell(`${p.label} ${p.title}`, p.slug, body, pages[i - 1], pages[i + 1]));
});

// 首页：index.Rmd 正文 + 章目录
const idx = fs.readFileSync(path.join(root, 'index.Rmd'), 'utf8').replace(/^---[\s\S]*?---/, '').replace(/^#\s+(.+?)\s*\{[^}]*\}\s*$/m, '## $1');
const chapters = pages.filter(p => p.level === 1);
const home = `<h1 class="title">${BOOK}</h1><p class="author">John L. Hennessy　David A. Patterson　Christos Kozyrakis　著</p>`
  + marked.parse(idx)
  + '<h2>目录</h2><ul class="chapter-toc">' + chapters.map(c => `<li><a href="${c.slug}.html">${c.label} ${c.title}</a></li>`).join('') + '</ul>'
  + `<p class="build">最后生成：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}</p>`;
fs.writeFileSync(path.join(out, 'index.html'), shell(BOOK, 'index', home, null, pages[0]));

// 搜索索引
const strip = h => h.replace(/<[^>]+>/g, ' ').replace(/&[#\w]+;/g, ' ').replace(/\s+/g, ' ');
fs.writeFileSync(path.join(out, 'assets', 'search.json'),
  JSON.stringify(pages.map(p => ({ s: p.slug, t: `${p.label} ${p.title}`, x: strip(p.html) }))));

// 图片
for (const d of fs.readdirSync(path.join(root, 'images'))) {
  fs.cpSync(path.join(root, 'images', d), path.join(out, 'images', d), { recursive: true });
}
fs.cpSync(path.join(root, 'tools', 'site', 'book.css'), path.join(out, 'assets', 'book.css'));
fs.cpSync(path.join(root, 'tools', 'site', 'book.js'), path.join(out, 'assets', 'book.js'));
fs.cpSync(path.join(root, 'tools', 'site', 'katex'), path.join(out, 'assets', 'katex'), { recursive: true });

fs.rmSync(final + '.old', { recursive: true, force: true });
if (fs.existsSync(final)) fs.renameSync(final, final + '.old');
fs.renameSync(out, final);
fs.rmSync(final + '.old', { recursive: true, force: true });

const unresolved = new Set();
for (const p of pages) for (const m of p.html.matchAll(/href="#([\w-]+)"/g)) if (!idPage[m[1]] && !m[1].startsWith('f')) unresolved.add(m[1]);
console.log(`生成 ${pages.length + 1} 页，${chapters.length} 章，来自 ${files.length} 个 Rmd 文件。`);
if (unresolved.size) console.log('未解析的锚点：', [...unresolved].join(' '));
