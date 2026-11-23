# 附录 M 校对记录（09-app-m-05.Rmd）：M.5 参考文献后半、M.6 前半

页段：底本/appendix-m.pdf 第 41–50 页（书页 M-41～M-50）。这 10 页的页眉都印着 M 字母页码，没有混入其他附录的页。

- 开头：第 40 页以 Hirata 等［1992］条目结束，条目在本页内完结；第 41 页从新条目「Hopkins, M. [2000]. "A critical look at IA-64 …"」开始，没有延续上一页的半段。本文件开头直接接续 M.5 的参考文献列表（该列表的标题由上一部分写出），因此不另写标题。
- 结尾：第 50 页最后一段「The NEC SX-9 has up to 16 processors per node … The maximum size is 512 nodes.」在本页内完结。第 51 页「The basis for modern vectorizing compiler technology …」及「Multimedia SIMD Instruction Extensions」小标题归第 6 部分。
- 内容：M.5 参考文献 Hopkins［2000］至 Yeh & Patt［1993］（第 41–46 页）；M.6 节标题与导言；「SIMD 超级计算机」小标题（含 Bouknight 等、David Kuck 两段引语）全部；「向量计算机」小标题（含 Seymour Cray 引语）从开头到 NEC SX-9 一段。

## 图

本段页面没有图，也没有脚注、习题。

## 格式处理

- M.6 节标题写作 `## SIMD 超级计算机、向量计算机、多媒体 SIMD 指令扩展和图形处理器的发展（第 4 章） {#sec-m-6}`，「第 4 章」为纯文本。
- 三段引语排成引用块。David Kuck 引语原书署名分两行（「Software designer for the Illiac IV and early pioneer in parallel software」和「An oral history conducted in 1991 by Andrew Goldstein, IEEE History Center, New Brunswick, N.J.」），合并成一行署名。引语中的「…」照原书保留为「……」，方括号译成「［］」。
- 参考文献照录英文，引号沿用前面部分的直引号；抽取乱码中的「e」恢复为连接号（页码、日期、「September–October」「March–April」「November 30–December 2」），「d」恢复为破折号（「HEP—a pipelined MIMD computer」「overview—64 bits/100 MHz」）。斜体未保留。
- 美元金额写成「800 万美元」「1.52 亿美元」等。

## 原书疑点

1. Hsu［1994］条目页码印作「2333」（页面图如此），应是「23–33」漏了连接号；另外 IEEE Micro 1994 年应为第 14 卷，原书写「18:2」。均照录未改。
2. Jordan［1983］条目年份标 1983，会议日期却写「June 5–7, 1982」（第 10 届 ISCA 实为 1983 年）；Riseman & Foster［1972］与上一部分的 Foster & Riseman［1972］是同一篇文章重复收录，且标题作「paralleled dispatching」。均照录。
3. 正文：NEC SX/5 与 SX/6 都写「in 2001」，且 SX/6 一段先写「SX/6」后写「SX-6」，照录；Cray X2「42 GFLOP/sec for single precision」照译。Cray-2「256M word」照译「256M 字」。Kuck 引语 pdftotext 抽出「Iliac IV」，页面图为「Illiac IV」，按页面图；Cray 引语中「Illiac-IV」照录。

## 新定术语

| 英文 | 译法 |
|---|---|
| Bunny People | 「兔子人」（Bunny People） |
| cleansuit | 洁净服 |
| array processor | 阵列处理器 |
| Connection Machine | 连接机（Connection Machine） |
| processing element | 处理单元 |
| memory-memory vector processor | 存储器–存储器型向量处理器 |
| vector-register architecture | 向量–寄存器体系结构 |
| crossover（标量与向量） | 交叉点 |
| non-unit stride | 非单位步长 |
| chaining | 链接（与第 4 章一致） |
| lane | 车道（与第 4 章「向量车道」一致） |
| start-up overhead | 启动开销（与第 4 章一致） |
| optical clock distribution | 光时钟分配 |
| Earth Simulator | 地球模拟器（Earth Simulator） |
| decoupled | 解耦 |
