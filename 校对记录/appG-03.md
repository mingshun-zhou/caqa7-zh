# 附录 G 校对记录（第 3/4 部分，09-app-g-03.Rmd）：G.6 后半～G.9

页段：底本/appendix-g.pdf 第 19–27 页（书页 G-19～G-27，页码字母均为 G，无混入页），另含第 28 页开头 G.9 最后一段的后半。

- 第 19 页开头即新的例题「What is the vector length, N_v, such that the vector operation runs faster than the scalar?」，没有从第 18 页延续的半段。第 18 页以 N_{1/2} 例题结束，由第 2 部分译出。
- 本文件从该例题开始，经 G.6 的小标题「DAXPY Performance on an Enhanced VMIPS」、G.7、G.8，到 G.9 结束。
- 第 27 页末段「Benchmark studies of various supercomputers, including attempts to understand the performance differences, have been undertaken by Lubeck, Moore,」跨到第 28 页，按规则译完整，止于「…careful performance evaluation on the actual mix of applications required at the customer site.」。第 28 页的「Exercises」及以后归第 4 部分。
- 文件开头不写节标题（G.6 节标题在 09-app-g-02.Rmd）。

## 图

- 图 G.11（第 22 页）：截图 images/appg/fig-g-11.png（200 dpi，902×884），不含图注和分隔线。图注末尾补 S/V 图例和 Ecache 的译文。
- 图 G.12（第 23 页）：截图 images/appg/fig-g-12.png（200 dpi，1625×770），不含图注和分隔线。图注补了 mem、IO、「51 GFLOPS, 200 GB/sec」的译文。图中 P、S、M 方框原书未说明含义（按正文推测分别是 SSP 处理器、Ecache 芯片、存储控制器芯片），图注不作解释。
- 两图放在引用它们的段落之后。图注中「From Dunnigan et al. [2005]」译作「引自 Dunnigan 等 [2005]」。

## 原书疑点

1. G.8 第一段「In 2011, it is possible to buy a laptop computer for under $1000 …」年份是旧版遗留，照译「2011 年」。
2. G.8 最后一段「Conversely, via superscalar microprocessor designs have begun …」中「via」多余（疑为排版残留），按「superscalar microprocessor designs have begun …」译。
3. G.6 「reduced the clock cycle count … from 326 to 194, a factor of 1.7」：326/194 ≈ 1.68，照译 1.7。「peak performance … a factor of 4」：1000 MFLOPS 相对前文 R_∞ = 250 MFLOPS（第 2 部分 N_{1/2} 例题以 125 MFLOPS 为其一半），照译。T_66 = 130 由 66 + 64 得出，核对无误。
4. N_v 例题：原书 64 + 3N_v = 59N_v 推出 ⌈64/56⌉ = 2，照录（上取整符号按页面图写成 \lceil \rceil）。
5. G.7「Cray X1 MSP can have 2048 outstanding memory loads」（G.8）与 G.7「2048 outstanding memory requests」说法不同，各自照译。
6. G.9「the Lawrence Livermore Laboratories FORTRAN kernels」：中文写「劳伦斯利弗莫尔实验室的 FORTRAN 核心程序」并括注英文原名。

## 新定术语

| 英文 | 译法 |
|---|---|
| tailgating | 尾随（tailgating） |
| Single-Streaming Processor (SSP) | 单流处理器（SSP） |
| Multi-Streaming Processor (MSP) | 多流处理器（MSP） |
| Ecache | 保留英文；external cache 译「外部 Cache」 |
| vector mask register | 向量屏蔽寄存器 |
| outstanding (miss / request) | 未完成的（失效 / 请求） |
| in-flight memory requests | 正在进行中的访存请求 |
| barrier synchronization | 栅障同步（按术语表 barrier 同步原语） |
| minisupercomputer | 小型超级计算机 |
| memory-memory vector processor | 存储器–存储器型向量处理器 |
| standard cell ASIC / full custom | 标准单元 ASIC / 全定制电路设计 |
| commodity technology | 商品化技术 |
| multichip module | 多芯片模块 |
| kernels（基准） | 核心程序 |
