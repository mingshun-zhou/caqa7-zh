# 附录 F 校对记录（09-app-f-10.Rmd）：F.11 谬误与陷阱（后半）、F.12 结束语、F.13 历史回顾与参考文献、习题 F.1

页段：底本/appendix-f.pdf 第 100–110 页（书页 F-100～F-110），均属附录 F，没有混入其他附录的页。

- 开头：第 100 页的第一个新段落是谬误「Adaptive routing by itself always improves network fault tolerance because it allows packets to follow alternative paths」。第 100 页顶部「arrived, it is now necessary to count the arrived packets, …」是第 99 页上一条谬误（自适应路由导致乱序交付）最后一段的后半，由上一部分译出。
- 结尾：第 110 页最后是 Exercises 标题、星号说明和习题 F.1（F.1 在本页结束，不跨页）。F.2 起在第 111 页，属下一部分。
- 节标题：F.12 写成 `## 结束语 {#sec-f-12}`，F.13 写成 `## 历史回顾与参考文献 {#sec-f-13}`。Acknowledgments、Wide Area Networks、Local Area Networks、System Area Networks、Storage Area Networks、On-Chip Networks 原书无编号，写成 `### … {-}`。
- 谬误、陷阱的格式按 09-app-a-05.Rmd：`**谬误**　*……*`。
- 习题标题：原书 Exercises 没有署名作者（附录 F 首页写 Revised by Timothy M. Pinkston、José Duato），因此写成 `## 习题 {- #sec-f-exercises}`，未加作者名，请统稿时决定是否补。F.1 前的 ✪（带星号、教师可得答案）照录。

## 图

本段页面没有图。

## 原书疑点

1. 第 103 页「Stevens [1994e1996]」中的 e 是抽取乱码，按页面图应为连接号，译作 Stevens [1994–1996]。同页「learning more about TPC/IP」是原书笔误，译作 TCP/IP。
2. 第 103 页「winning the ACM Software Award」：Cerf 和 Kahn 实际获得的是 ACM 软件系统奖（Software System Award，1991），也获过图灵奖（2004）。照原文译作「ACM 软件奖」，请核对。
3. 第 108 页「new problems arising due to shear size」：shear 应为 sheer，译作「纯粹的规模」。
4. 第 105 页 Alto 往返时间：pdftotext 抽成「50 ms」，页面图为 50 μs，按图译。
5. 第 104 页「In 1975, there were roughly 100 networks in the ARPANET; in 1983, only 200」照录。「During the writing of the third edition … 1.3 billion Web pages」照录。
6. 第 106 页 Myrinet、InfiniBand、Quadrics、PCI-Express Advanced Switching 等「current / future implementations」以及第 109 页 ASI「may emerge」都是第 4 版前后（约 2006 年）的说法，原书未更新，照译。

## 新定术语

| 英文 | 译法 |
|---|---|
| direction-order routing | 方向序路由 |
| nonminimal path | 非最短路径 |
| end-to-end argument | 端到端论点 |
| gateway / checksum | 网关 / 校验和 |
| TCP/IP offloading engine | TCP/IP 卸载引擎（与 F.2 节一致） |
| glue software | 胶合软件 |
| network fabric | 网络交换结构 |
| catch-up mode | 「追赶」阶段 |
| ACM Software Award | ACM 软件奖 |
| Internet Systems Consortium | Internet 系统协会 |
| GENI | 全球网络创新环境（GENI） |
| ATM / connectionless server | 异步传输模式（ATM）/ 无连接服务器 |
| network processor | 网络处理器 |
| local store | 本地存储器 |
| back-off time | 退避时间 |
| FDDI | 光纤分布式数据接口（FDDI） |
| UTP | 非屏蔽双绞线（UTP） |
| MPP | 大规模并行处理机（MPP） |
| store-and-forward | 存储转发（与 F.5 节一致） |
| wire limited / pin limited | 受连线限制 / 受引脚限制 |
| pipelined switching / pipelined channel (link) | 流水化交换 / 流水化通道（链路） |
| virtual cut-through / wormhole | 虚拟直通 / 虫孔（与 F.5 节一致） |
| dynamically allocated multiqueues | 动态分配多队列 |
| escape virtual channel | 逃逸虚通道 |
| deadlock recovery | 死锁恢复（与 F.5 节一致） |
| bladed server | 刀片服务器 |
| one-of-a-kind MPP | 定制 MPP |
| source-based routing / distributed routing | 源路由 / 分布式路由（与 F.5 节一致） |
| Fibre Channel (FC), FC-AL, FC-SW | 光纤通道（FC）、光纤通道仲裁环（FC-AL）、交换式光纤通道（FC-SW） |
| Advanced Switching Interconnect (ASI) | 高级交换互连（ASI） |
| SATA / IDE | 串行高级技术附件（SATA）/ 集成驱动电子设备（IDE） |
| 5-tuple model | 五元组模型 |
| tiled design | tile 式设计 |
| broadside (send) | 整体并行地发送 |
| overnight delivery | 隔夜快递 |
