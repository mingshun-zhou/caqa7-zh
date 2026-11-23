# 附录 G 校对记录（第 4/4 部分，09-app-g-04.Rmd）：习题、参考文献

页段：底本/appendix-g.pdf 第 28–36 页（书页 G-28～G-34）。

- 第 28 页开头「and Mendez [1985], Bucher [1983], and Jordan [1987]. There are several benchmark suites …… actual mix of applications required at the customer site.」是第 27 页 G.9 节最后一段（以「Benchmark studies of various supercomputers …」开头）的延续，按分界规则不译，由第 3 部分译完。
- 本文件从第 28 页「Exercises」小标题及引导段「In these exercises assume VMIPS has a clock rate of 500 MHz …」开始，到第 34 页参考文献最后一条「Watson, W.J., 1972. The TI ASC—a highly modular …」结束。
- 第 35 页为空白页。第 36 页是附录 H 的章首目录页（H.1～H.7、Reference H-44），不属于附录 G，跳过。

## 图

本部分没有图。习题中的 FORTRAN 和 VMIPS 代码按页面图照录为代码块。

## 格式处理

- 原书习题没有署名作者，标题写作 `## 习题 {- #sec-g-exercises}`（与附录 F 一致）。
- 题号后的章节范围原书印作「G.1–G.6」（pdftotext 抽成「G.1eG.6」），统一写 en dash。
- 引导段中「Figure G.2」「Section G.2」以及 G.3、G.6、G.11 中的「Section G.5 / G.6」写成本附录链接（#fig-g-2、#sec-g-2、#sec-g-5、#sec-g-6）。
- $T_{\text{loop}}$、$T_{\text{start}}$、$T_{\text{chime}}$、$T_{100}$、$R_{100}$、$R_\infty$、$N_{1/2}$、$N_v$、$T_{64}$ 用 LaTeX 写。
- G.8 代码中的注释行「C Code sequence 1/2」照录未译。

## 原书疑点

1. G.10 的代码「A(i) = B」中 B 是标量还是数组未说明，照录。
2. G.6 代码的内层循环体是 Y(k,j)，与外层循环变量 i 无关（a、X 用 i,j），这是原书题意，照录。
3. 参考文献：抽取文本中页码分隔的「e」改为连接号；Asanovic、Banerjee、Luszczek 条目原书有不成对的右引号（「Vector microprocessors,”」等），已删去；Bucher、Moore 条目「1983Minneapolis」「1987Pittsburgh」补了逗号和空格，Tanqueray 条目「December 11–12Cheshire」补逗号；Watson 条目「TI ASCda」还原为破折号「TI ASC—a」。其余照录。

## 新定术语

| 英文 | 译法 |
|---|---|
| loop fission | 循环分裂 |
| reduction | 归约 |
| recurrence | 递推 |
| scalar expansion | 标量扩展 |
| recursive doubling | 递归倍增 |
| partial sums | 部分和 |
| sustained performance | 持续性能 |
| memory pipeline | 访存流水线 |
| dependence checker | 相关检查器 |
| percentage of vectorization | 向量化百分比 |
| scatter-gather | 分散–集中（沿用第 4 章 scatter「分散」、gather「集中」） |
| chime / convoy / chaining / lane / strip mining | 钟鸣 / 护航指令组 / 链接 / 车道 / 分段开采（沿用第 4 章） |
