html:
	bash tools/build-book.sh

pdf:
	Rscript -e 'bookdown::render_book("index.Rmd", "bookdown::pdf_book")'

serve:
	Rscript -e 'bookdown::serve_book()'

clean:
	rm -rf _book _bookdown_files

# 不依赖 R：生成仿 gitbook 的静态网站到 _site/，并在 8090 端口提供
site:
	node tools/build-site.mjs

serve-site: html
	node tools/serve.mjs 8090
