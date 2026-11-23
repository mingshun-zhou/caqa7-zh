# 附录 C 校对记录（09-app-c-05.Rmd）：C.4 节后半、C.5 节开头

页段：底本/appendix-c.pdf 第 41–50 页（书页 C-41～C-50）。PDF 页号与书页号一一对应，这 10 页都属于附录 C，没有混入相邻附录的页。

- 开头：第 41 页的图 C.26（表格及图注）。第 41 页正文开头「instruction that caused the exception can be tried again.」是第 40 页段落的延续，不译（由上一部分译完）；本文件从这一段的下一句「This process must be effectively invisible to the executing program.」译起，作为一个新段落。**合并时请上一部分确认该段只译到「……the instruction that caused the exception can be tried again.」为止。**
- 结尾：第 50 页最后一段「Now look at the problems arising from writes, described as (2) and (3) …」跨到第 51 页，译完到「Instead, we choose to detect and enforce access to the write port as a structural hazard.」为止。第 51 页下一段「There are two different ways to implement this interlock.」起归下一部分。
- 小标题层级：原书粗体小标题（Instruction Set Complications、Hazards and Forwarding in Longer Latency Pipelines）用 `### … {-}`；斜体小标题（Stopping and Restarting Execution、Exceptions in RISC V）用 `#### … {-}`。如上一部分对 C.4 节的小标题另有层级安排，合并时统一。

## 图

- 图 C.26（第 41 页）：表格，排成 Markdown 表格，图注全文放在 caption 行。
- 图 C.27（第 43 页）：表格，排成 Markdown 表格。
- 图 C.28（第 48 页）：截图 images/appc/fig-c-28.png（200 dpi，已检查不缺边、不带图注）。图注末尾补了图内英文标注译文。
- 图 C.29（第 48 页）：表格，排成 Markdown 表格。
- 图 C.30（第 49 页）：截图 images/appc/fig-c-30.png（200 dpi，同上，已去掉图注上方的横线）。图注末尾补了标注译文。
- 图 C.31（第 50 页）：排成 Markdown 表格，斜体、粗体段按原图用 `*…*`、`**…**` 标出；原表无表头，补了「指令」列名，其余表头留空。
- 图 C.32、C.33 印在第 51 页，不属本部分；正文中对它们的引用照写链接 [图 C.32](#fig-c-32)、[图 C.33](#fig-c-33)，由下一部分提供锚点。
- 第 43 页 ld/add 两行时序表：原书正文中出现一次，紧接着在图 C.27 上方又重复印了一次（排版重复），译文只保留一次，不编号。

## 原书疑点

1. 第 43 页 ld/add 时序表重复排印两次，疑为排版错误，只保留一处。
2. 第 47 页「Second, there may be multiple FP functional units.」等处原书写「RISC V」，统一为 RISC-V（与 09-app-c-01 一致）。
3. 第 48–49 页：正文说「浮点加有 4 段，浮点乘有 7 段」，与图 C.29 的延迟 3、6 相差 1，符合「延迟 = 执行深度 − 1」；图 C.30 图注说除法器需要 24 个时钟周期，图 C.29 的除法启动间隔为 25，照录。
4. 第 49 页「The example pipeline structure in Figure C.29 allows up to four outstanding FP adds…」：严格说流水线结构见图 C.30，图 C.29 是延迟表，照原书写「图 C.29 中的示例流水线结构」。
5. 第 43 页图 C.27 图注「six out of eight cases」：表中 IF、MEM 各 3 项，共 6 项与访存有关，加上 ID、EX 各 1 项共 8 项，核对无误。
6. 第 45 页「consider a VAX instruction that autoincrements the same register multiple times」译为「VAX 有的指令会对同一个寄存器多次自动增量」。

## 新定术语

| 英文 | 译法 |
|---|---|
| synchronous / asynchronous | 同步 / 异步 |
| user requested / coerced | 用户请求 / 强制 |
| user maskable / nonmaskable | 用户可屏蔽 / 不可屏蔽 |
| within / between instructions | 指令内 / 指令间 |
| resume / terminate | 恢复 / 终止 |
| restartable | 可重启的 |
| page fault | 缺页（与第 3 章一致） |
| precise exception | 精确异常（与第 3 章一致；09-app-c-01 的 precise interrupt 译「精确中断」） |
| trap instruction | 陷阱（trap）指令 |
| pipeline latch | 流水线锁存器 |
| exception status vector | 异常状态向量 |
| committed | 提交（与第 3 章一致） |
| autoincrement addressing | 自动增量寻址 |
| condition code | 条件码 |
| delay slot | 延迟槽 |
| microinstruction / microoperation | 微指令 / 微操作 |
| demand paging | 请求调页 |
| initiation interval / repeat interval | 启动间隔 / 重复间隔 |
| outstanding (operation) | 未完成的（操作） |
| fully pipelined | 全流水的 |
| forwarding / bypass | 前递 / 旁路（与第 3 章一致） |
| WAW / WAR / RAW | 写后写 / 读后写 / 写后读，保留缩写 |
- 润色时改正：第 45 页「In most processors with implicitly set condition codes」原译漏了「大多数」，已补；第 48 页「the EX pipeline stage has some number of clock delays larger than 1」改译为「EX 流水段本身有若干个时钟周期的延迟，大于 1」。
