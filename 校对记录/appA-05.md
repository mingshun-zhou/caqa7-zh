# 附录 A 校对记录（09-app-a-05.Rmd）：A.9 末尾的图、A.10～A.12、习题 A.1～A.10(a)

页段：底本/appendix-a.pdf 第 41–50 页（书页 A-41～A-50），全部印着附录 A 页码，没有混入其他附录的页。

- 开头：第 41 页只有图 A.28（RV64G 指令一览表），没有延续上页的正文；本文件从图 A.28 开始。第 40 页正文（「Figure A.28 contains a list of nearly all the RV64G instructions…」及图 A.27）归上一部分。
- 第 42 页：图 A.29、小标题「RISC-V Instruction Set Usage」、A.10 节开头。
- 结尾：第 50 页最后是习题 A.10 (a)「…how many addresses, or names, appear in each instruction for the code to compute C = A + B, and what is the total code size?」，在本页结束。第 51 页的 A.10 (b) 是新的一段，归下一部分（09-app-a-06.Rmd 已从 b. 开始）。

## 图

- 图 A.28（第 41 页）：排成 Markdown 表格，操作码照录原书（含原书笔误，见疑点）。
- 图 A.29（第 42 页）：排成 Markdown 表格，12 个程序 × 5 列数字已逐个对照页面图。
- 图 A.30（第 44 页）：截图 images/appa/fig-a-30.png（200 dpi，-x 640 -y 320 -W 1680 -H 880），已检查不缺边、不带图注和下方横线。图内标注译文补在图注末尾。
- 图 A.31（第 45 页）：排成 Markdown 表格，数字已对照页面图。
- 习题 A.1、A.3 中的 CPI 表原书无图号，排成无标题 Markdown 表格。

## 原书疑点

1. 图 A.28 中若干操作码疑为笔误，照录未改：`subi, subiw`（RISC-V 无此指令）；移位行 `srli`、`srai` 各重复一次，且缺 `sraw`；浮点行 `fmult`（应为 fmul）、`fiv`（应为 fdiv）、`fsgn, fsgnj, fsjnx`（应为 fsgnj, fsgnjn, fsgnjx）；`fmv` 行英文「abd GPR」为 and 之误。说明栏「Load, store, word…」译作「取、存字（单精度）和双字（双精度）」。
2. 图 A.29 图注「load frequencies that are 1/5 to 3x the store frequency」，「1/5」疑为「1.5」（从表中数据看取数一般多于存数），照原书译「1/5 到 3 倍」，请核对。另外正文说数据「using RV32G」，而 A.9 节讨论的是 RV64G，照录。
3. 习题 A.2、A.3 说「Table A.29」，原书其余处均作 Figure A.29，照原文译「表 A.29」未加链接；A.8 (b)「discussed in the A.8」译为「A.8 节讨论的」并加链接。A.8 代码中 U 行 `R[p]` 与 `9437` 之间原书 pdftotext 丢了减号，按页面图补为「-」；A.5 代码原书为「–」（短横），代码块中统一写 ASCII「-」。
4. A.10 节引语后的「[p. 43]」是 Wulf 等人原文页码，照录为「[第 43 页]」。
5. A.12 节「Section M.4 (available online)」：附录 M 未译，写作「M.4 节（在网上提供，见[附录 M](#app-m)）」。

## 新定术语

| 英文 | 译法 |
|---|---|
| semantic gap / semantic clash | 语义鸿沟 / 语义冲突 |
| callee save | 被调用者保存 |
| procedure call mask | 过程调用屏蔽码 |
| activation record / activation stack | 活动记录 / 活动栈 |
| trap enable | 自陷允许位 |
| linkage convention / calling convention | 链接约定 / 调用约定 |
| synthetic benchmark | 合成基准测试程序（同第 1 章） |
| extended accumulator | 扩展的累加器 |
| segmentation / paging | 分段 / 分页 |
| delayed branch | 延迟转移 |
| conditional move | 条件传送 |
| paired single | 成对单精度（paired single） |
| high-level language computer architecture | 高级语言计算机体系结构 |
| copy propagation | 复制传播（同图 A.20） |
| kernel（EEMBC） | 核心程序 |
| taken / not taken | 成功 / 不成功 |
| two-/one-/zero-address instruction | 二地址 / 一地址 / 零地址指令 |

润色时改正：A.10 节代码大小陷阱一段，「struggle to reduce code size by 30%–40%」原译「费尽力气才把代码减小 30%～40%」，含已做到之意，改为「费尽力气想把代码减小 30%～40%」。
