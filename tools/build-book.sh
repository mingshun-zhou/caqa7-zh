#!/usr/bin/env bash
# 用 bookdown 生成 gitbook 网站到 _book/（与 Archbase 相同的工具链）。
# 只收入 _bookdown.yml 中已经存在的 Rmd 文件，先写到 _book.tmp 再整体替换。
set -euo pipefail
cd "$(dirname "$0")/.."
python3 - <<'PY'
import re, os
s = open('_bookdown.yml', encoding='utf-8').read()
files = re.findall(r'^\s*-\s*(\S+\.Rmd)\s*$', s, re.M)
keep = [f for f in files if os.path.exists(f)]
head, rest = s.split('rmd_files:', 1)
tail = rest[rest.index('language:'):]
head = re.sub(r'^book_filename:.*$', 'book_filename: caqa7', head, flags=re.M)
out = head.rstrip() + '\noutput_dir: _book.tmp\nrmd_files:\n' + ''.join(f'  - {f}\n' for f in keep) + tail
open('_bookdown.site.yml', 'w', encoding='utf-8').write(out)
PY
rm -rf _book.tmp
Rscript -e 'bookdown::render_book("index.Rmd", "bookdown::gitbook", config_file = "_bookdown.site.yml", quiet = TRUE)' >/dev/null 2>/tmp/build-book.err || { cat /tmp/build-book.err; exit 1; }
rm -rf _book.old; [ -d _book ] && mv _book _book.old; mv _book.tmp _book; rm -rf _book.old
echo "bookdown 构建完成：$(ls _book/*.html | wc -l) 个页面"
