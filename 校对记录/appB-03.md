# 附录 B 校对记录（09-app-b-03.Rmd）：B.2 节末尾（乱序处理器的失效开销）、B.3 节前半（3C 模型、前三种优化、第四种优化开头）

页段：底本/appendix-b.pdf 第 21–30 页（书页 B-21～B-30，PDF 页码与书页码一致，本段没有混入其他附录的页）。

- 开头：第 21 页开头「latency. This equation could be further expanded … Let's just concentrate on miss latency.」是第 20 页段落的后半，已由 09-app-b-02.Rmd 译出。本文件从「We now have to decide the following:」开始。
- 结尾：第 30 页最后一段「Reducing cache misses had been the traditional focus of cache research … making the relative cost of miss penalties increase over time.」在本页结束，没有跨页。第 31 页从「This performance gap between processors and memory leads the architect to this question…」起归下一部分。小标题「Fourth Optimization: Multilevel Caches to Reduce Miss Penalty」在第 30 页，已在本文件写出。
- 节标题：B.3「Six Basic Cache Optimizations」写作 `## 六种基本的 Cache 优化 {#sec-b-3}`；First～Fourth Optimization 四个小标题用 `### … {-}`。

## 图

- 图 B.7（第 22 页）：公式汇总，排成 LaTeX aligned 公式块，前面写 `[图 B.7　…]{#fig-b-7 .caption}`。原图第一行「Cache s ze」为排版缺字，按 Cache size 译「Cache 容量」。
- 图 B.8（第 25 页）：排成 Markdown 表格（32 行）。原书表头是两层（「Miss rate components (relative percent) (sum = 100% of total miss rate)」统领强制/容量/冲突三组，每组两列：绝对值与百分比），Markdown 只能单层，改为「强制失效／占比／容量失效／占比／冲突失效／占比」，并在表后加一句说明。
- 图 B.9（第 26 页）：截图 images/appb/fig-b-9.png（200 dpi，-x 760 -y 330 -W 1460 -H 1880），上下两幅图完整，不带图注横线。图注末尾补了图内标注译文。图放在「第一种优化」第一段之后。
- 图 B.10（第 27 页）：截图 images/appb/fig-b-10.png（200 dpi，-x 830 -y 330 -W 1740 -H 806），已检查不缺 Block size 轴标题、不带图注。图注末尾补了图内标注译文。
- 图 B.11、图 B.12（第 28 页）：排成 Markdown 表格；图 B.12 的粗体照原书（4K 的 7.082，16K/64K/256K 的 64 字节一行）。原表的「Cache size」上层表头改为表后说明。
- 图 B.13（第 30 页）：排成 Markdown 表格，粗体照原书（4、8 KiB 只有 8 路一格；16 KiB 起 2/4/8 路三格）。
- [图 B.4](#fig-b-4) 链接指向第一部分；[图 B.18](#fig-b-18)（第 B-40 页）在后面的部分，先写成链接。正文第 2 章的图 2.2 写纯文本「第 2 章第 80 页的图 2.2」。

## 原书疑点

1. 第 21 页 OOO 例题：性能公式左边原书印作「CUP time」，是 CPU time 的笔误，译文改为「CPU 时间」。同一公式中的 1.6 与上一例题的 CPI 1.0 不一致，题干只说时钟周期较长的处理器改为乱序执行，未说明 CPI 变为 1.6；按 1.6 × 0.35 × 1.35 + 0.021 × 1.4 × 45.5 计算确为 0.756 + 1.338 ≈ 2.09，与原书结果一致，照录。另外平均访存时间 0.35 × 1.35 + 0.021 × 45.5 = 0.4725 + 0.9555 = 1.428 ≈ 1.43，一致。
2. 图 B.10、B.11、B.12 的图名都说「five different-sized caches」，但图和表里只有 4K、16K、64K、256K 四种容量。照原书译「五种」，**请对照纸本确认**。
3. 第 30 页两个算例：0.098 × 25 = 2.45，1.00 + 2.45 = 3.45，原书写 3.44；0.006 × 25 = 0.15，1.52 + 0.15 = 1.67，原书写 1.66。估计原书用的是未四舍五入的失效率，照录原书数值。
4. 第 26 页例题：16 字节块 82 周期，按「80 + 每 16 字节 2 周期」，256 字节块应为 80 + 32 = 112，与解答一致；64 字节 88、128 字节 96 也与图 B.12 一致。8.57% × 82 = 7.027，+1 = 8.027；0.49% × 112 = 0.549，+1 = 1.549，均一致。
5. 图 B.8 的若干行百分比之和不等于 100%（如 16 KiB 1 路 0.1% + 82% + 17% = 99.1%，512 KiB 2 路 0.9% + 71% + 28% = 99.9%），是原书舍入所致，照录。
6. 图 B.8 图注「up through 128 K」写的是 K 而非 KiB，照录；正文（第 29 页）说「less than 128 KiB」，两处说法（到 128 K 为止／小于 128 KiB）略有出入，照译。
7. 第 24 页「compusolory misses」为 compulsory 的拼写错误，按 compulsory 译。
8. 第 24 页「see the example on page B-29」、第 23 页「Figure B.18 on page B-40」、第 30 页「Figure 2.2 on page 80」，页码照录。第 23 页「Chapter 5 adds a fourth C」照译「第 5 章」（第 7 版一致性失效确在第 5 章）。

## 新定术语

| 英文 | 译法 |
|---|---|
| three C's | 3C、3C 模型（与 02-memory-01.Rmd 一致） |
| cold-start miss / first-reference miss | 冷启动失效 / 首次访问失效 |
| collision miss | 碰撞失效 |
| coherency miss | 一致性失效（与 05-tlp-03.Rmd 一致） |
| thrash / thrashing | 颠簸（首次注 thrash） |
| 2:1 cache rule of thumb | 2:1 Cache 经验规则 |
| retirement pipeline stage / retire | 退出流水级 / 退出（首次注 retire） |
| instruction window | 指令窗口 |
| overlapped miss latency | 重叠的失效延迟（与 09-app-b-02.Rmd 一致） |
| address trace | 地址踪迹 |
| off-chip cache | 片外 Cache |

## 重写记录

