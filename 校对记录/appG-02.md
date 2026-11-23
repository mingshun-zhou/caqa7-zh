# 附录 G 校对记录（09-app-g-02.Rmd）：G.3 节后半至 G.6 节 N~1/2~ 例题

页段：底本/appendix-g.pdf 第 10–18 页（书页 G-10～G-18）。各页页眉均印 G 字母页码，没有混入其他附录的页。

- 开头：第 10 页顶部是图 G.7，正文第一段「systems that support multiple simultaneous vector accesses … memory bank conflicts will exist.」是第 9 页段落的后半，按分界规则不译（由 09-app-g-01.Rmd 译完）。本文件从图 G.7 和「Memory bank conflicts will not occur within a single vector memory instruction if …」开始。
- 结尾：第 18 页末尾是例题「What is N1/2 for just the inner loop of DAXPY …」的解答，止于「So N1/2 = 13; that is, a vector of length 13 gives approximately one-half the peak performance for the DAXPY loop on VMIPS.」，没有跨页段落。第 19 页的 Nv 例题由下一部分译。
- 覆盖的节：G.3 节后半；G.4 节（含「Chaining in More Depth」「Sparse Matrices in More Depth」两个无编号小标题）；G.5 节；G.6 节开头至 Linpack 持续性能和 N~1/2~ 例题（含「Measures of Vector Performance」「The Peak Performance of VMIPS on DAXPY」「Sustained Performance of VMIPS on the Linpack Benchmark」三个小标题）。

## 图

- 图 G.7（第 10 页）：存储体时序表，排成 Markdown 表格，放在文件开头（图注所在页属于本部分；正文中引用它的例题在第 9 页，由上一部分译）。Busy 译「忙」，图注末尾已说明。
- 图 G.8（第 12 页）：时序示意图，截图 images/appg/fig-g-8.png（200 dpi，-x 1060 -y 320 -W 900 -H 382），已检查四边完整、不带图注；图底部带一小段原书的表格底线。图内标注译文补在图注末尾。
- 图 G.9（第 15 页）：编译器向量化结果表，排成 Markdown 表格。
- 图 G.10（第 16 页）：DAXPY 链接后的护航指令组，排成 Markdown 表格。原图没有表头，Markdown 表头行留空；代码照录，说明列译出。

## 原书疑点

1. G.4 节「The indexed loads-stores and the CVI instruction provide an alternative method to support conditional vector execution. Let us first recall code from Chapter 4:」后面给出的却是分段开采的 DAXPY 循环（low/VL/MVL），而随后「implements that loop using CVI」的向量序列做的是条件减法（A(i) ≠ 0 时 A(i) = A(i) − B(i)）。两段代码不对应，疑为第 7 版排错了代码（旧版此处应为 `do 100 i = 1, 64 / if (A(i).ne.0) then / A(i) = A(i) – B(i)` 一类条件循环）。译文照录原书代码，**请对照纸本或旧版确认**。
2. 第 14 页「(i.e., A(i) ¦ 0)」中的符号印刷/抽取异常，按上下文（SNEVS.D 在 V1(i)!=F0 时置位）译作「A(i) ≠ 0」。
3. 习题 G.6 在正文中写成纯文本「习题 G.6」，没有加链接（习题不在本部分）。G.2 节链接写作 [G.2 节](#sec-g-2)，附录 H 原书在此只是提及，写作纯文本「附录 H」；若统一要求写链接，可改为 [附录 H](#app-h)。
4. 第 17 页「The performance without the start-up overhead … is now 1.33 times higher」，指 333 MFLOPS 是 250 MFLOPS 的 1.33 倍，译作「是 R∞ 的 1.33 倍」；第 18 页「1.64 times higher」同理（333/202），译作「的 1.64 倍」。
5. T~n~ 推导中「≤ (n + 64) + 3n」的第二行在 pdftotext 中丢了「≤」，按页面图补回。
6. VMIPS 代码中的 FORTRAN 注释（/*...*/）和汇编注释（;...）已译成中文，代码本身照录。

## 新定术语

| 英文 | 译法 |
|---|---|
| flexible chaining | 灵活链接（与第 4 章一致） |
| bank busy time / bank cycle time | 存储体忙时间（与第 4 章一致） |
| multistage switching network | 多级交换网络 |
| inter-instruction conflict | 指令间冲突 |
| programmer directive | 程序员编译指示（与第 4 章一致） |
| advanced load address table (ALAT) | 高级装入地址表（ALAT） |
| stripmine iteration / strip-mined loop | 分段开采迭代 / 分段开采循环 |
| dependency violation | 相关违例 |
| scatter-gather | 集中—分散（与第 4 章一致） |
| create vector index (CVI) | 生成向量索引（CVI） |
| compressed index vector | 压缩的索引向量 |
| conditional vector execution | 条件向量执行 |
| sustained rate / sustained performance | 持续速率 / 持续性能 |
| R∞ / N~1/2~ / N~v~ | 保留符号 |
| vector-register allocation | 向量寄存器分配 |
| interprocedural optimization | 过程间优化 |
| test kernel | 测试核心程序 |
