# 附录 K 校对记录（09-app-k-03.Rmd）：K.2 后半、K.3 开头

页段：底本/appendix-k.pdf 第 21–30 页（书页 K-21～K-30），全部印着附录 K 的页码，没有混入其他附录的页。

- 开头：第 21 页以小标题「Fast Traps」开始（「SPARCv9 includes support to make traps fast.」），没有上一页延续过来的半段。第 20 页末的图 K.19 由上一部分处理。
- 结尾：第 30 页末是 K.3 引言中的第一个里程碑条目「1978—The Intel 8086 architecture was announced …」，跨到第 31 页，译到「… can fairly be called an extended accumulator machine.」为止。下一部分从「1980—The Intel 8087 …」开始。
- 标题层级：「Instructions Unique to ARM / Power3」「Instructions: Multimedia Extensions …」「Instructions: Digital Signal-Processing Extensions …」「Concluding Remarks」是 K.2 下的粗体小标题，写作 `### … {-}`；「Fast Traps」「Support for LISP and Smalltalk」「Branch Registers: Link and Counter」是斜体的更低一级小标题，写作 `#### … {-}`。K.3 写作 `## Intel 80x86 {#sec-k-3}`，其下「Introduction」写作 `### 引言 {-}`。上一部分若对同级小标题用了别的层级，合并时请统一。

## 图

- 图 K.20（第 22 页）：截图 images/appk/fig-k-20.png（200 dpi，-x 500 -y 360 -W 1500 -H 940），已检查不缺边、不带图注。图注末尾补了图内英文标注的译文。
- 图 K.21（第 22 页）、K.22（第 23 页）、K.23（第 25 页）、K.24（第 26 页）、K.25（第 27 页）、K.26、K.27（第 28 页）、K.28（第 29 页）、K.29（第 30 页）：排成 Markdown 表格，图注写在表前的 caption 行里。K.22 中的英文指令名保留，括号里附中文。K.25～K.28 中的数据类型记法（16B、8H、4W、2 D、Q15 等）按原书照录，包括原书中逗号、分号混用的地方。
- pdftotext 对这些表格中的旋转文字抽取有误，所有表格内容都以页面图为准。

## 原书疑点

1. 图 K.26 的 Power Vector Facility 列，「Interleave even/odd」和「Pack even/odd」两行印作「6B, 8H, 4W; 2 D」，可能是「16B」的排版错误，照录。
2. 图 K.29 中 VAX 的「Data addressing modes」印作「=14」，可能是「≥14」丢了符号，照录。
3. 图 K.24 图注开头「In addition to the vector facility, The last row states …」是一个残句，「In addition to the vector facility」应当是后面讲 Power 3 可选的向量-标量扩展那句话的开头。译文把它移到那句话前，译成「除了 Vector Facility 之外，Power3 还有一个可选的向量-标量扩展」。
4. 图 K.26 图注「Shuffle creates a from two registers」少了一个名词，译作「从两个寄存器生成一个结果」。
5. 图 K.23 中，FRSQRTE 的功能栏末尾是逗号，照常理译成完整句。BPERMD 一行下面有一个空行，原书如此，译文没有保留空行。
6. 正文提到「Power 3 Vector-Scalar extension」「Power 3 has an optional …」，原书「Power 3」「Power3」混用，译文统一写作 Power3。
7. 原文「the dot product instruction an the maximum/minimum instructions」中「an」应为「and」；「the Hi-Lo register, which is already exists」语法有误，按意思译出。
8. 正文「As Figure K.3 on page 6」「Figure K.6 on page 8」里的页码照录为「第 6 页」「第 8 页」。
9. K.3 引言中「MIPS was the vision of a single architect」保留了旧版的说法（本附录其他地方以 RISC-V 为主），照译。

## 新定术语

| 英文 | 译法 |
|---|---|
| trap | 自陷（与附录 A 一致） |
| fast traps | 快速自陷 |
| tagged addition / subtraction | 带标记的加法 / 减法 |
| tagged data | 带标记的数据 |
| nonfaulting load | 不引起故障的取数 |
| condition flags / condition codes | 条件标志 / 条件码 |
| link register / count register | 链接寄存器 / 计数寄存器 |
| packed SIMD | 紧缩 SIMD（与附录 A 一致） |
| saturating operations | 饱和运算 |
| fractional data | 小数数据 |
| accumulator register | 累加器寄存器 |
| interleave / pack / shuffle | 交织 / 打包 / 混洗；SPLAT 保留英文 |
| population count | 1 的个数统计 |
| Vector-Scalar extension | 向量-标量扩展 |
| extended accumulator machine | 扩展累加器机器 |
| flat / segmented addressing | 平坦 / 分段寻址 |
| memory mapped I/O | 存储器映射 |

- 润色时改正：K.3 引言「evolved the architecture over 20 years」原译「20 多年」，原文指 20 年间，改为「在 20 年间」。
