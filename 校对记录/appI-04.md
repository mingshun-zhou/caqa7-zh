# 附录 I 校对记录（09-app-i-04.Rmd）：I.6 节后半、I.7 节前半

页段：底本/appendix-i.pdf 第 31–40 页（书页 I-31–I-40）。这几页都印着本附录的页码字母，没有混入相邻附录的页面。

- 开头：第 31 页正文第一段「Measuring wall-clock time obviously makes sense…」是第 30 页 I.6 节首段的延续（没有缩进），由上一部分译完，本文件不译。本文件从「Users and designers are often interested in knowing not just how well a multiprocessor performs…」开始。
- 结尾：I.7 节「Implementing the Directory Controller」小节下的三点结论只译到第 2 点「The implementation can bound the number of outstanding transactions…」，它在第 40 页末结束。第 3 点「If instead of returning the data through the directory…」起始于第 41 页，归下一部分（09-app-i-05.Rmd 开头已是第 3 点，衔接无误）。
- 第 30 页的图 I.14 归上一部分，本文件不收。

## 图

- 图 I.15（第 31 页）：截图 images/appi/fig-i-15.png（200 dpi，含图例，不含图注和图注上方的横线），放在第 31 页首段之后。图注末尾补了坐标轴和图例译文。
- 图 I.16（第 32 页）：数据少，排成 Markdown 表格；原表头「Processor clock cycles ≤16 processors / 17–64 processors」译作「处理器时钟周期数（≤ 16 个处理器）」「（17～64 个处理器）」。
- 图 I.17（第 33 页）：截图 images/appi/fig-i-17.png（200 dpi，含图例）。图注末尾补了坐标轴和图例译文；Barnes 子图纵轴标注为「Average cycles per memory reference」，与其余三图不同，照录。
- 图 I.15、I.17 正文中没有直接引用（原书也没有），按所在页位置插入。

## 原书疑点

1. 第 34 页「confusing the two has led to erroneous claims (e.g., see the discussion in Section I.6)」：这段本身就在 I.6 节，自指可疑，原意可能指第 5 章谬误一节（5.10 节关于 scaled speedup 的讨论）或其他节。照原书链接到 [I.6 节](#sec-i-6)。
2. 第 37 页「the directory can tell the register how many acknowledgments to expect」：register 应为 requester（下句即说「directly to the requester」），译作「请求者」。
3. 第 34 页「must find new ways to avoid deadlock, Let's start…」：逗号应为句号，照意思处理。
4. 例题解答中 $\sqrt[3]{10} \approx 2.154$，与 2.15 一致；$10^3/10 = 100$ 小时，一致。$k \log k = 10$ 得 $k = 5.72$，只有取自然对数才成立（$5.72 \times \ln 5.72 \approx 9.98$；以 2 为底约 14.4，以 10 为底约 4.3）。照录「log」，不改。
5. 图 I.17 图注「local miss rate (1–4%)」抽取为「1e4%」，按页面图为 1%～4%。

## 新定术语

| 英文 | 译法 |
|---|---|
| wall-clock time | 墙钟时间（上一部分用语，本部分未出现） |
| scaled / unscaled (true) speedup | 扩展后的加速比 / 不扩展的加速比（真实加速比）；第 5 章 5.7 节作「按比例扩展的加速比」，可统一 |
| memory-constrained scaling | 存储受限扩展 |
| time-constrained scaling | 时间受限扩展 |
| error tolerance | 误差容限 |
| cell-opening criteria（Barnes-Hut） | 打开单元的判据 |
| three-hop miss | 三跳失效 |
| home node / home directory | 宿主节点 / 宿主目录（沿用第 5 章） |
| owner | 属主（沿用第 5 章） |
| upgrade miss | 升级失效（沿用第 5 章） |
| fetch/invalidate | 取数/作废（沿用第 5 章） |
| data write-back | 数据写回 |
| NAK (negative acknowledge) | 否定确认（NAK），之后用 NAK；动词「发 NAK」 |
| sharing set | 共享集合 |
| outstanding miss / transaction | 未完成的失效 / 事务 |
| incoming / outgoing request | 外来请求 / 外发请求 |
| forward progress | 向前推进 |
| break ties | 打破僵局 |
| reentrant | 可重入 |
| global partial order | 全局偏序 |
| circuit switched | 电路交换（沿用附录 F） |
