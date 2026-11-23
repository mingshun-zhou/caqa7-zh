# 附录 C 统稿校对记录

底本：底本/appendix-c.pdf，共 80 页。第 1–79 页印 C-1～C-79，第 80 页是附录 D 的目录页（D.1–D.7），没有翻译。附录 C 没有参考文献节，习题以 C.11(b) 结束。

文件：09-app-c-01.Rmd ～ 09-app-c-08.Rmd，共 1330 行。图 C.1～C.49 全部定义了锚点 fig-c-1～fig-c-49，其中 24 张是截图，存放在 images/appc/ 下，文件都存在；其余 25 张排成 Markdown 表格。节锚点 sec-c-1～sec-c-10 和 sec-c-exercises 都已设置，本附录内的链接都能找到对应锚点。

## 统稿改动

1. **删除重复段落。** 第 4、5 部分的交界处，第 40–41 页的「This process must be effectively invisible… (see Chapter 2).」一段两边都译了。保留 09-app-c-04.Rmd 末尾的译文，删去 09-app-c-05.Rmd 图 C.26 后面的那一段。其余 6 处交界都对照了 PDF 文本，没有漏译，也没有重复。
2. **调整小标题层级，与原书字号一致。**「静态转移预测」「动态转移预测与转移预测缓冲」从 ### 改为 ####，归在「用预测降低转移代价」之下（第 22–23 页）。「用记分牌实现动态调度」原书是斜体小标题，从 ### 改为 ####，归在「动态调度的流水线」之下（第 67 页）。
3. **删除译者加的说明。** 图 C.8 图注末尾的「原书表格没有表头……」、图 C.40 图注末尾的「……在原书中是同一张表，这里分成两张排出」、图 C.32 表后的「表中 1～17 为时钟周期号。」都删掉了。图 C.26 图注末尾补了句号。
4. **统一术语。** taken / untaken 统一译为「转移成功 / 转移不成功」，predicted-not-taken 统一译为「预测不成功」。为此改了 09-app-c-06.Rmd 第 120 行的「预测不转移」「不转移的转移指令」，以及 09-app-c-07.Rmd 图 C.40 图注和第 111 行的「发生转移 / 不发生转移」。

## 全附录术语（沿用第 3 章，新定的在备注里注明）

| 英文 | 译法 | 备注 |
|---|---|---|
| hazard（structural / data / control） | 冒险（结构冒险 / 数据冒险 / 控制冒险） | |
| RAW / WAR / WAW | 写后读（RAW）/ 读后写（WAR）/ 写后写（WAW） | |
| stall / bubble | 停顿 / 气泡 | |
| forwarding / bypassing | 前递 / 旁路 | |
| pipeline interlock | 流水线互锁 | |
| pipe stage / pipeline register | 流水段 / 流水线寄存器 | 不用「流水级」 |
| branch taken / untaken | 转移成功 / 转移不成功 | 全附录统一 |
| predicted-taken / predicted-not-taken | 预测成功 / 预测不成功 | 全附录统一 |
| branch delay slot / delayed branch | 转移延迟槽 / 延迟转移 | |
| branch penalty | 转移开销 | 小标题中 cost 译「代价」 |
| branch-likely | 「可能转移」（branch-likely） | 新定 |
| flush pipeline / stall pipeline | 清空流水线 / 停顿流水线 | 原书两种说法并存，照译 |
| initiation interval / repeat interval | 启动间隔 / 重复间隔 | 新定 |
| precise / imprecise exception | 精确异常 / 非精确异常 | |
| restartable | 可重启 | 新定 |
| trap | 陷阱 | |
| scoreboard | 记分牌 | |
| data trunk | 数据干线 | 新定 |
| register file | 寄存器堆 | |
| multiplexer | 多路选择器 | |
| functional unit | 功能部件 | |
| issue | 发射 | |
| dynamic / static scheduling | 动态调度 / 静态调度 | |

## 原书疑点汇总（译文按原书照录，除非注明已改）

### 原书错误，译文已改

- 第 2 页：「MIPS R40000」应为 R4000，已改。
- 第 12 页：WAW 一项的末句原书印作「WAR hazards are also impossible」，按上下文应为 WAW，已改。同页两处「integrer」是 integer 的拼写错误。
- 第 29 页：MEM 周期的代码「Mem[ALUOutput]  B;」缺少赋值箭头，已补成 ←。
- 第 52 页：讲 WAW 冒险的一段把两条指令都印成 fadd.d。译文参照图 C.33 和第 5、6 版的同一段，把后写 f2 的那条改成了 fld，需要对照纸本确认。
- 第 61–62 页：图 C.37、C.38、C.40 的图注和正文里的「x1」是乱码，按上下文译为「2 个周期」。
- 第 67 页：「The IF stage proceeds the issue stage」中的 proceeds 应为 precedes，已按「在……之前」译出。
- 第 68 页：「it will violate yield incorrect execution」句子不完整，按「破坏相关，导致执行结果错误」译出。
- 图 C.42 图注开头重复了一遍「initiation intervals for the FP operations」，已去掉重复。

### MIPS 遗留，未改

- 图 C.4～C.7 图内仍是 MIPS 指令（DADD、LD、SD、DSUB 等），正文已是 RISC-V 指令。图没有改，图注里注明了对应关系。
- 第 28 页「IR 的低 16 位做符号扩展」「Imm << 2」都是 MIPS 写法。RISC-V 的立即数是 12 位，转移偏移只左移 1 位。
- 图 C.25 图内标注用 MIPS 位字段（IR~6..10~、IR~11..15~，16→32 位符号扩展），与图 C.19 的 RISC-V 字段不一致；图注里的「ID/IF」疑为 IF/ID 之误。
- 习题 C.9 原书写作「MIPS code」，实际给出的是 RISC-V 代码。

### 数字或交叉引用不一致，照录

- 第 5 页：EX 周期说「one of three functions」，下面实际列了四项。
- 第 10 页：例题算得 2.2/0.6≈3.67，原书写 3.7。
- 第 11 页：加速比推导的第二、三行完全相同。
- 第 38 页：「10e15 cycles」是抽取乱码，页面上印的是 10–15 个周期。
- 第 36 页：图 C.23 图注说判断前递要做 10 次比较，表中只列了 4 行。另外它说图 C.24 在 C-36 页，实际在 C-37 页。
- 第 43 页：ld/add 两行时序在正文和图 C.27 上方各印了一次，译文只保留一处。
- 第 49 页：说「图 C.29 中的示例流水线结构」，但流水线结构画在图 C.30，图 C.29 是延迟表。
- 图 C.34：加法 1.7/3≈57%，原书印 56%；乘法 2.8 是 7 个周期的 40%、6 个周期的 47%，原书印 46%。
- 图 C.47 中 doduc 的柱高约为 2.73，但图 C.48 表中 Doduc 的总 CPI 是 2.84。表中 Mdljdp2、Hydro2d、Su2cor 三行的分量之和比总 CPI 多 0.01，应是舍入误差。
- 第 68 页「Figure C.49 on page C.68」：图实际在 C-69 页。
- 图 C.12 写「Flush pipeline」，图 C.13 和正文写「Stall pipeline」，分别照译。
- 习题 C.1 的章节标注是 <A.2>，疑为 <C.2>。C.9(b)(c) 和 C.10 都标 <C.8>，但记分牌在 C.7 节。C.11 标 [10/10/10]，却只有 (a)、(b) 两个子题。

## 其他

- 09-app-c-06.Rmd 链接了 [附录 J](#app-j)，目录中目前还没有附录 J 的文件，合并时需要确认这个锚点。
- 图 C.26 放在 09-app-c-05.Rmd 开头，原书印在第 41 页，引用它的正文在 09-app-c-04.Rmd 末尾，位置不影响链接。
