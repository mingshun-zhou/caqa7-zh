# 附录 C 校对记录（09-app-c-04.Rmd）：C.3 节后半、C.4 节开头

页段：底本/appendix-c.pdf 第 31–40 页（书页 C-31～C-40），PDF 页号与书页号一一对应，全部属于附录 C，没有混入相邻附录的页。

- 开头：第 31 页第一段「There are some hardware redundancies that could be eliminated in this multicycle implementation.」是新段落（第 30 页以图 C.18 图注结束），从这里译起。
- 结尾：第 40 页最后一段「Figure C.26 classifies the preceding examples according to these five categories. …」跨到第 41 页，译到「…because it is needed to implement virtual memory (see Chapter 2).」为止。第 41 页的小标题「Stopping and Restarting Execution」及图 C.26 归下一部分。
- 包含的标题：A Basic Pipeline for RISC V、Implementing the Control for the RISC V Pipeline、Dealing With Branches in the Pipeline（均为 `###` 无编号）；C.4 节标题 `## 流水线实现的难点 {#sec-c-4}`；Dealing With Exceptions（`###`）；Types of Exceptions and Requirements（原书斜体三级小标题，用 `####`）。

## 图

- 图 C.19（第 32 页）：截图 images/appc/fig-c-19.png（200 dpi，按 pdftotext -bbox 坐标裁剪，已检查不缺边、不带图注和分隔线）。图注末尾补了图内标注译文。
- 图 C.20（第 33 页）：原书是表格，但单元格内是多行 RTL 伪代码，EX 段三列里还有分段对齐，排 Markdown 表格容易走样，所以截图 images/appc/fig-c-20.png，图注末尾补表头和「or」「For load only」的译文。
- 图 C.21、图 C.22（第 35 页）、图 C.23（第 36 页）：排成 Markdown 表格，代码用反引号照录，多行代码用 `<br>`（与 09-app-a-01.Rmd 一致）。
- 图 C.24（第 37 页）：截图 images/appc/fig-c-24.png，width=70%。图注补标注译文，并据正文说明虚线为新增前递通路。
- 图 C.25（第 38 页）：截图 images/appc/fig-c-25.png。
- 图 C.18（第 30 页，上一部分）和图 C.26（第 41 页，下一部分）只在正文中链接。

## 原书疑点

1. 第 38 页「may have branch penalties of 10e15 cycles」：PDF 页面上是「10–15」，抽取时连接号变成 e，译为 10～15 个周期。
2. 图 C.25 的图内标注沿用了 MIPS 的位字段：IR~6..10~、IR~11..15~，符号扩展为 16→32；而图 C.19 已改为 RISC-V 的 IR~19..15~、IR~24..20~ 和 12→32。图未改，图注照图中标注说明，**请留意原书图 C.25 未随 RISC-V 更新**。图注中「as part of ID/IF」也疑为 IF/ID 之误，照录。
3. 图 C.20 EX 段 load 列第一行原书印作「EX/MEM.IR to ID/EX.IR」，与 ALU 列「EX/MEM.IR←ID/EX.IR」不一致，应为赋值；转移列「ID/EX.NPC + (ID/EX.Imm << 2)」也是沿用 MIPS 的左移 2 位（RISC-V 转移偏移以 2 字节为单位）。图为截图，照原样保留。
4. 图 C.22 表头「ID/EX.IR~0..5~」与「IF/ID.IR~0..6~」的位范围不一致（RISC-V 操作码为 7 位，即 0..6），照录。
5. 图 C.23 图注说「There are 10 separate comparisons」，而表中只列出 4 行比较，照译。图注说图 C.24 在「page C.36」，实际在 C-37 页；图 C.18 在「page C.30」与实际一致。译文写作「第 C-36 页」，页码照录。
6. 第 34 页：「the top ALU input multiplexer is set by whether the instruction is a branch or not」照译。
7. 第 39 页异常列表中「FP arithmetic anomaly」译「浮点算术运算异常」，与后文「floating-point exception」（浮点异常）用词接近，照原文区分保留。

## 新定术语

| 英文 | 译法 |
|---|---|
| pipeline register / pipeline latch | 流水线寄存器 / 流水线锁存器 |
| instruction issue / issued | 指令发射 / 已发射（与第 3 章一致） |
| forwarding / forwarding path | 前递 / 前递通路（与第 3 章一致） |
| bypass | 旁路 |
| interlock / load interlock | 互锁 / load 互锁 |
| no-op | 空操作 |
| zero detection unit | 零检测部件 |
| sign-extend | 符号扩展 |
| multiplexer | 多路选择器 |
| branch delay / branch penalty | 转移延迟 / 转移开销（与第 3 章一致） |
| taken branch | 成功的转移 |
| race condition | 竞争条件 |
| top / bottom ALU input | ALU 上输入 / 下输入 |
| interrupt / fault / exception | 中断 / 故障 / 异常 |
| synchronous / asynchronous | 同步 / 异步 |
| user requested / coerced | 用户请求 / 强制 |
| user maskable / nonmaskable | 用户可屏蔽 / 用户不可屏蔽 |
| within / between instructions | 指令内 / 指令间 |
| resume / terminate | 恢复 / 终止 |
| restartable | 可重启 |
| page fault | 缺页 |
| misaligned memory access | 访存未对齐 |
| memory protection violation | 违反存储保护 |
| power failure | 电源掉电 |
