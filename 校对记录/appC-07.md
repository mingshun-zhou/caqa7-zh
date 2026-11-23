# 附录 C 校对记录（09-app-c-07.Rmd）：C.6 节后半（浮点流水线、R4000 性能）、C.7 节大部分

页段：底本/appendix-c.pdf 第 61–70 页（书页 C-61～C-70），全部印 C 字母页码，没有混入相邻附录的页。

- 开头：第 61 页顶部是图 C.40（表格），归本部分；随后是小标题「The Floating-Point Pipeline」，第一句「The R4000 floating-point unit consists of three functional units…」。第 61 页没有延续上一页的半段正文（第 60 页以图 C.39 结束）。
- 结尾：第 70 页最后一段「Because the operands for an instruction are read only when both operands are available in the register file…」跨到第 71 页，译到「We would need additional buffering to eliminate this overhead.」为止。第 71 页从「Based on its own data structure, the scoreboard controls…」起是新段落，归下一部分。

## 图

- 图 C.40（第 61 页）：表格，排成 Markdown 表格。原表上下两半（发生转移／不发生转移）共用表头，这里拆成两张表，在图名末尾说明。
- 图 C.41、C.42（第 62 页）：排成 Markdown 表格。上标 D^28^、(A + R)^108^ 用 Pandoc 上标语法。
- 图 C.43、C.44（第 63 页）、C.45、C.46（第 64 页）：排成 Markdown 表格；原书「Clock cycle」跨列表头无法在 Markdown 中合并，表下加一句「表头的 0～12（25～36）为时钟周期」。原书粗体（引起停顿的段）照用 ** 标出。
- 图 C.47（第 65 页）：截图 images/appc/fig-c-47.png（200 dpi，已检查不缺边、不带图注），图注末尾补了坐标轴和图例译文。
- 图 C.48（第 65 页）：排成 Markdown 表格，三个平均行照原书加粗。
- 图 C.49（第 69 页）：截图 images/appc/fig-c-49.png（200 dpi，同上），图注末尾补了图内标注译文。图放在正文「四个步骤如下：」之后、步骤列表之前，与原书版面位置一致。

## 原书疑点

1. 图 C.42 图注开头重复：「The latencies and initiation intervals for the FP operations initiation intervals for the FP operations both depend on…」，按去掉重复后的意思译。
2. 第 68 页「If the pipeline executes the fsub.d before the fadd.d, it will violate yield incorrect execution.」句子残缺（应是 violate the dependence, yielding incorrect execution 一类），按此意译为「就会破坏相关，导致执行结果错误」。
3. 第 67 页「The IF stage proceeds the issue stage」：proceeds 应为 precedes，按「IF 段在发射段之前」译。
4. 第 68 页「Figure C.49 on page C.68」：图 C.49 实际在 C-69 页，页码写法也应为 C-68 格式。译文照录「第 C-68 页」，请合并时确认是否改为 C-69 或删去页码。
5. 图 C.45 图注说在周期 28～33 开始的加法都会停顿，但表中标「Stall」的是 U 段位于周期 28～33 的 6 行，与图注一致；而图注又说「假定恰好有一条加法在周期 26～35 之间到达 U 段」，表中最后一行 U 在周期 36，照录。
6. 图 C.47 图注说 CPI 在 1.2～2.8 之间；图中 doduc 柱高约 2.73，而图 C.48 表中 Doduc 为 2.84。表中 Mdljdp2、Hydro2d、Su2cor 各分量之和比总 CPI 大 0.01（舍入），其余各行相加吻合。图与表程序顺序不同（图为 ear、hydro2d、mdljdp，表为 Mdljdp2、Ear、Hydro2d），均照原书。
7. 第 69 页 CDC 6600 部件数「4 个浮点、5 个访存、7 个整数」合计 16，与「16 separate functional units」一致。
8. 「Thus, the pipeline will do out-of-order execution, which implies out-of-order completion.」照译。
9. 正文写作「RISC V」（抽取丢了连字符），统一为 RISC-V，与 09-app-c-01.Rmd 一致。

## 新定术语

| 英文 | 译法 |
|---|---|
| initiation rate / initiation interval | 启动速率 / 启动间隔 |
| delay slot / branch delay slot | 延迟槽 / 转移延迟槽 |
| branch-likely | 保留英文（branch-likely 转移） |
| delayed branch | 延迟转移 |
| load stalls / branch stalls | load 停顿 / 转移停顿 |
| FP result stalls / FP structural stalls | 浮点结果停顿 / 浮点结构停顿 |
| unpack FP numbers | 浮点数拆包 |
| mantissa add / operand shift / rounding / exception test stage | 尾数相加段 / 操作数移位段 / 舍入段 / 异常检测段 |
| compiler scheduling / static scheduling / dynamic scheduling | 编译器调度 / 静态调度 / 动态调度 |
| in-order issue | 按序发射 |
| out-of-order execution / completion | 乱序执行 / 乱序完成 |
| bypassing / forwarding | 旁路 / 前递 |
| read operands / write result（记分牌步骤） | 读操作数 / 写结果 |
| begins execution / completes execution / in execution | 开始执行 / 完成执行 / 执行中 |
| trunk / data trunk | 干线 / 数据干线 |
| write slot | 写入时隙 |
| active instruction | 正在执行的指令 |
