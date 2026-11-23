# 附录 A 校对记录（09-app-a-06.Rmd）：习题（六）

页段：底本/appendix-a.pdf 第 51–56 页。第 51–55 页印 A-51～A-55，属本附录；第 56 页是附录 B 的章首目录页（B.1 Introduction B-2 … Exercises by Amr Zaky B-60），不属附录 A，已跳过，不译。

起止：第 51 页开头是习题 A.10 的 (b) 小题「b. [15] <A.2> Some of the instruction set architectures in Figure A.2 destroy operands…」。上一页（A-50）以 A.10 (a) 结束，(b) 是新起的一项，不是跨页半段，所以本文件从 A.10 (b) 开始，写成「b.　[15] <A.2> ……」，不重复 A.10 题头。结尾是 A.24「Consider typical applications for desktop, server, cloud, and embedded computing…」，到附录 A 习题结束。附录 A 在 A-55 之后没有参考文献（本 PDF 内也无「Historical Perspective and References」内容页），本文件不设参考文献节。

## 图

本段没有图。习题中引用的图 A.2、A.5、A.7、A.8、A.15 写成本附录内链接（#fig-a-2 等），锚点由其他部分定义。A.10 (b)、A.12、A.19 (a)、A.20 的代码按页面图照录为代码块。

## 原书疑点

1. A.22 (c) 与 (d) 文字完全相同（都问大端字节序下所有非对齐 2 字节字）。按 (e)(f) 推断，(d) 本意可能是「非对齐 4 字节字、大端」。照原书译出，请对照纸本确认。
2. A.21 (b)「Compare the results to those shown in this chapter in Figure A.15」、A.13「Compare the results to those shown in this chapter」：原书在附录里说「本章」，照译。
3. A.23 分值原书写作「[25,25]」（逗号而非斜杠），照录。
4. A.17、A.18、A.24 的章节范围在抽取文本中为「A.2eA.8」「A.2eA.12」，按页面图为连接号，译作 <A.2–A.8>、<A.2–A.12>。
5. A.20 代码在页面上排作「i < = 100」，按 C 语法录为 `i <= 100`。
6. A.10 (b)、A.19 (a) 代码中的减号原书为长横（–），照录。

## 新定术语

| 英文 | 译法 |
|---|---|
| accumulator / memory-memory / stack / load-store（ISA 风格） | 累加器型 / 存储器-存储器型 / 栈型 / load-store 型 |
| overhead instruction | 开销指令 |
| instrument (object code) | 插桩 |
| instruction set mix | 指令组成 |
| intrinsics | 内建函数（intrinsics） |
| Math Kernel Library (MKL) | 数学核心函数库（MKL） |
| Big Endian / Little Endian | 大端 / 小端（首次注英文） |
| misaligned | 非对齐 |
| displacement addressing | 偏移量寻址（沿用第 1 章） |
| register indirect addressing | 寄存器间接寻址（沿用第 1 章） |

润色时改正：A.14 原译「线性代数代码常常调用它们」多出原文没有的「常常」，已按原文改为「线性代数代码使用 BLAS 中的 SGEMM 等例程」。



