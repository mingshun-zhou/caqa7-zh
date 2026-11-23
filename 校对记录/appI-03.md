# 附录 I 校对记录（09-app-i-03.Rmd）：I.4 节末尾、I.5 节、I.6 节开头

页段：底本/appendix-i.pdf 第 21–30 页（书页 I-21–I-30）。这几页都印着本附录的页码字母（I-21～I-30），没有混入相邻附录的页面。

- 开头：第 21 页顶部是图 I.7（代码），随后是第 20 页例题题干的后半「the time for 10 processors to traverse the barrier. How many bus cycles are required?」。题干已由 09-app-i-02.Rmd 完整译出，本文件不译，从图 I.7 和解答「Figure I.7 shows the code for the barrier…」开始。
- 结尾：第 30 页末的 I.6 节首段「One of the most controversial issues…wall-clock time.」跨到第 31 页，按分界规则译完到「…unavailable for other uses.」为止。09-app-i-04.Rmd 的记录说明它从「Users and designers are often interested…」开始，衔接无误。
- I.6 节标题 `## 用科学计算应用测量并行处理器的性能 {#sec-i-6}` 写在本文件；09-app-i-04.Rmd 没有这个标题，不重复。
- 小标题层级沿用 09-app-i-01/02.Rmd：节下无编号小标题用 `###`。
- 上次中断没有留下 09-app-i-03.Rmd；/tmp 里有一批旧裁剪图，裁剪范围不对（缺右侧子图、缺图例），未使用，全部重新裁剪。

## 图

- 图 I.7（第 21 页）：代码，按 09-app-i-02.Rmd 的做法写 `[图 I.7　…]{#fig-i-7 .caption}` 加代码块，代码照录，注释译成中文。
- 图 I.8（第 23 页）、图 I.9（第 24 页）、图 I.10（第 25 页）、图 I.11（第 26 页）、图 I.12（第 28 页）、图 I.13（第 29 页）、图 I.14（第 30 页）：截图存 images/appi/fig-i-8.png～fig-i-14.png（200 dpi，含图例，不含图注和图注上方的横线），逐张用 read_image 检查过四个子图、坐标轴和图例完整。图内英文标注的译文补在图注末尾。
- 图 I.14 在第 30 页，归本部分；09-app-i-04.Rmd 的记录说明它不收图 I.14，没有重复。图 I.15、I.16、I.17 在第 31–33 页，正文在本文件中只作链接引用。

## 原书疑点

1. 第 27–28 页例题：原书排版把「FFT performs all-to-all communication, so the bisection bandwidth…No standard networking technology comes close.」这一段放在 Example 题干之后、Answer 之前，但它用到 Answer 中才算出的 448 MB/s，显然是解答的后半。译文把它移到解答末尾，作为解答第二段。
2. 图 I.8 图注「The single-processor numbers include write upgrade misses」，与正文「we include as a coherence miss any write misses needed to upgrade a block」一致，照译。
3. 第 22 页「the coherence miss rate increases (from about 1% to about 2.7%)」：图 I.8 中 FFT 16 个处理器的一致性失效率读数约 2.8%，与 2.7% 基本一致，照原书。
4. 第 25 页「increasing the basic size」疑为 block size，按「块大小」译。
5. 第 26 页图 I.11 图注「The factor of 3 increase in traffic for Ocean」：图中 Ocean 从 16 字节约 2.1 增至 128 字节约 6.0，约 3 倍，一致。
6. 第 29 页图 I.13 图注「The plateau in the miss rate of FFT, which we mentioned in the last section」：指本节前一小节（对称共享存储部分）的工作集效应，照译「上一节」。图 I.14 图注「just as in the last section」同。
7. 解答中「Cray T3E」原书印作「CrayT3E」，补了空格。

## 新定术语

| 英文 | 译法 |
|---|---|
| sense-reversing barrier | 感知反转栅障（沿用 09-app-i-02.Rmd） |
| combining tree barrier | 组合树栅障 |
| queueing lock | 排队锁 |
| accuracy control | 精度控制参数 |
| coherence miss / capacity miss | 一致性失效 / 容量失效 |
| potentially shared data | 可能共享的数据 |
| write ownership miss | 写所有权失效 |
| write upgrade miss | 写升级失效 |
| ownership or upgrade misses | 所有权失效（升级失效） |
| false sharing | 伪共享（沿用第 5 章） |
| inherent communication | 固有通信 |
| plateau | 平台期 |
| working set effect | 工作集效应 |
| local / remote miss | 本地失效 / 远程失效 |
| three-hop remote miss | 三跳远程失效 |
| bisection bandwidth | 对分带宽（沿用第 5 章、附录 F） |
| all-to-all communication | 全对全通信 |
| wall-clock time | 墙钟时间 |

润色时改正：例题解答「exceeds … by more than a factor of 5」原译「还高出 5 倍以上」，改为「是……的 5 倍以上」。
