# 附录 B 校对记录（09-app-b-02.Rmd）：B.1 节后半（写策略、Opteron 数据 Cache）、B.2 节前半

页段：底本/appendix-b.pdf 第 11–20 页（书页 B-11～B-20，PDF 页码与书页码一致，本段没有混入其他附录的页）。

- 开头：第 11 页开头「occur in parallel, writes usually take longer than reads…」是第 10 页段落（「Such optimism is not allowed for writes…」）的后半，由上一部分译出。本文件从第 11 页第一个完整段落「The write policies often distinguish cache designs.」开始。Q4 小标题在第 10 页，不在本文件。
- 结尾：第 20 页末段「Similarly, as some out-of-order processors stretch the hit time…」跨到第 21 页，译到「Let's just concentrate on miss latency.」为止。第 21 页从「We now have to decide the following:」起归下一部分。
- 节标题：B.2「Cache Performance」写作 `## Cache 的性能 {#sec-b-2}`；无编号小标题「An Example: The Opteron Data Cache」「Average Memory Access Time and Processor Performance」「Miss Penalty and Out-of-Order Execution Processors」用 `### … {-}`。

## 图

- 图 B.5（第 13 页）：截图 images/appb/fig-b-5.png（200 dpi，-x 580 -y 1035 -W 1720 -H 1505），已检查四边完整、不带图注。图注末尾补了图内标注译文。图放在引出索引公式的那句话之后、公式之前，与原书版面顺序一致。
- 图 B.6（第 15 页）：排成 Markdown 表格，放在引用它的段落之后。
- 图 B.4（第 10 页）不在本段，正文链接 [图 B.4](#fig-b-4) 指向上一部分。

## 原书疑点

1. 第 16 页例题（分离 Cache 与统一 Cache）：题干说「miss penalty is 100 clock cycles」，但第 17 页解答全部用 200 计算（1 + 0.004 × 200 等，结果 7.52、7.62 也是按 200 算的）。照原书译，**请对照纸本确认**。
2. 第 20 页相对性能公式：分子写 CPU time~2-way~、分母写 CPU time~1-way~，但右边是 2.26/2.20（2.26 是 1 路的值），下标与数值对调了。照原书照录。
3. 第 11 页「Data coherency … which we examine in Chapter 4 and Appendix D」：第 7 版多处理器一致性在第 5 章，第 4 章是数据级并行；第 16 页「Using the pipelining terminology of Chapter 3」，流水线术语主要在附录 C。均照原书译为「第 4 章」「第 3 章」。
4. 第 16 页失效率公式的下标原书写「16 KB」「32 KB」，正文用 KiB，照录 KB。
5. 第 19 页 AMAT：0.35 + 0.021 × 65 = 1.715，0.35 × 1.35 + 0.019 × 65 = 1.7075，原书分别取 1.72、1.71，照录。第 17 页 74% × 1.80 = 1.332 等数值已核对无误。
6. 第 20 页「that portion of the performance equation could be divided by total hit latency less overlapped hit latency」中的「divided by」按文意译为「拆分为总命中延迟减去重叠的命中延迟」。
7. 第 11 页「Figures A.32 and A.33」等引用在第 10 页，不在本段。

## 新定术语

| 英文 | 译法 |
|---|---|
| write stall | 写停顿 |
| write allocate / no-write allocate | 写分配 / 不写分配 |
| dirty bit / dirty / clean | 脏位 / 脏 / 干净 |
| victim buffer / victim | 牺牲缓冲 / 牺牲者（牺牲块） |
| unified / mixed cache | 统一 Cache / 混合 Cache |
| split cache | 分离 Cache |
| block offset / cache index | 块内偏移 / Cache 索引 |
| valid bit | 有效位 |
| in-order execution processor | 顺序执行的处理器（与第 2、3 章一致） |
| memory stall clock cycles | 访存停顿时钟周期数 |
| CPI~execution~ | CPI~执行~ |
| overlapped / nonoverlapped latency | 重叠的 / 未重叠的延迟 |
| perfect cache | 理想 Cache |

润色时改正：第 13 页「the results of the comparison are ignored」原译「比较结果作废」，「作废」是 invalidate 的定译，易混，改为「比较结果不予理会」；第 17 页 in-order execution processor 原译「按序执行」，按本记录术语表统一为「顺序执行」。

