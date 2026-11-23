// 临时预览：在没装 R/bookdown 时，把 _bookdown.yml 里列出的 Rmd 拼成一个 preview.html。
// 用法：node tools/preview.mjs   然后用浏览器打开 preview.html
// 正式成书仍用 make html（bookdown）。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from '/home/zms/.local/node/lib/node_modules/@deepseek-harness-tui/dsh-tui/node_modules/marked/lib/marked.esm.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const yml = fs.readFileSync(path.join(root, '_bookdown.yml'), 'utf8');
const files = [...yml.matchAll(/^\s*-\s*(\S+\.Rmd)\s*$/gm)].map(m => m[1]).filter(f => f !== 'index.Rmd');

let chapter = 0, sec = 0, foot = [];
const toc = [];
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function pre(src) {
  // 去掉 R 代码块
  src = src.replace(/```\{r[\s\S]*?```/g, '');
  // 数学先保护起来，交给 KaTeX 在浏览器里渲染
  const math = [];
  src = src.replace(/\\\$/g, '&#36;'); // 转义的美元符号，不当公式
  src = src.replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g, m => `@@M${math.push(m) - 1}@@`);
  // 脚注 ^[...]
  src = src.replace(/\^\[([^\]]+)\]/g, (_, t) => { foot.push(t); return `<sup><a href="#fn${foot.length}" id="fr${foot.length}">${foot.length}</a></sup>`; });
  // 图片 ![cap](src){#id width=..}
  src = src.replace(/!\[([\s\S]*?)\]\(([^)]+)\)\{#([\w-]+)[^}]*\}/g,
    (_, cap, s, id) => `<figure id="${id}"><img src="${s}"><figcaption>${marked.parseInline(cap)}</figcaption></figure>`);
  // 表格图名 [文字]{#id .caption}
  src = src.replace(/^\[([^\]]+)\]\{#([\w-]+)[^}]*\}[ \t]*$/gm, (_, t, id) => `<p class="cap" id="${id}">${marked.parseInline(t)}</p>\n`);
  // 标题 {#id} / {-}
  src = src.replace(/^(#{1,3}) (.+?)\s*\{([^}]*)\}[ \t]*$/gm, (_, h, t, a) => {
    const id = (a.match(/#([\w-]+)/) || [])[1] || '';
    const unnum = /(^|\s)-(\s|$)|\.unnumbered/.test(a);
    let label = '';
    if (h === '#' && !unnum) { chapter++; sec = 0; label = `第 ${chapter} 章　`; }
    else if (h === '##' && !unnum) { sec++; label = `${chapter}.${sec}　`; }
    if (h !== '###') toc.push({ lv: h.length, id, t: label + t });
    return `<h${h.length} id="${id}">${label}${t}</h${h.length}>\n`;
  });
  return { src, math };
}

let body = '';
for (const f of files) {
  const p = path.join(root, f);
  if (!fs.existsSync(p)) continue;
  const { src, math } = pre(fs.readFileSync(p, 'utf8'));
  let html = marked.parse(src);
  html = html.replace(/@@M(\d+)@@/g, (_, i) => esc(math[i]));
  body += `<section data-file="${f}">${html}</section>\n`;
}
if (foot.length) body += '<hr><ol class="fn">' + foot.map((t, i) => `<li id="fn${i + 1}">${marked.parseInline(t)} <a href="#fr${i + 1}">↩</a></li>`).join('') + '</ol>';

const tocHtml = toc.map(x => `<a class="l${x.lv}" href="#${x.id}">${x.t}</a>`).join('\n');
const out = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">
<title>计算机体系结构：量化研究方法（第 7 版）预览</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"
 onload="renderMathInElement(document.body,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}]})"></script>
<style>
body{margin:0;font:17px/1.85 "Noto Serif CJK SC","Source Han Serif SC","Songti SC",serif;color:#222}
nav{position:fixed;top:0;left:0;bottom:0;width:260px;overflow:auto;background:#fafafa;border-right:1px solid #e5e5e5;padding:16px;font:14px/1.6 sans-serif}
nav a{display:block;color:#333;text-decoration:none;padding:2px 0}nav a.l2{padding-left:1em;color:#555}
main{margin-left:300px;max-width:820px;padding:24px 32px 80px}
h1{font-size:1.8em;border-bottom:1px solid #ddd;padding-bottom:.3em}h2{margin-top:2em}
figure{margin:1.5em 0}figure img{max-width:100%}figcaption,.cap{font-size:.88em;color:#555;line-height:1.6}
.cap{font-weight:bold}blockquote{color:#555;border-left:3px solid #ddd;margin-left:0;padding-left:1em}
table{border-collapse:collapse;font-size:.88em;margin:1em 0}td,th{border:1px solid #ccc;padding:4px 8px}
a{color:#0a6cb5}
</style></head><body><nav><b>目录</b>\n${tocHtml}</nav><main>${body}</main></body></html>`;
fs.writeFileSync(path.join(root, 'preview.html'), out);
console.log('写入 preview.html，包含', files.filter(f => fs.existsSync(path.join(root, f))).length, '个文件');
