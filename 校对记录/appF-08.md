# 附录 F 校对记录（09-app-f-08.Rmd）：F.8 互连网络实例（后半）、F.9 网络互连

页段：底本/appendix-f.pdf 第 78–88 页（书页 F-78～F-88），均印有附录 F 的页码，没有混入其他附录的页。

- 开头：第 78 页第一句「dual-processor compute nodes and 1024 I/O nodes, this 360 TFLOPS (peak) supercomputer …」所在段落起于第 77 页，已由 09-app-f-07.Rmd 译出。本文件从第 78 页第二段「The main interconnection network is a proprietary 32 × 32 × 64 3D torus SAN …」开始。
- 结尾：第 88 页末段「Protocol families follow this analogy more closely than you might think …」跨到第 89 页，译到「… reflecting the last in, first out nature of the addition and removal of headers and trailers.」为止。第 89 页其后的「As in our analogy, the danger …」段及 F.10 节属下一部分。
- 小标题：「System/Storage Area Network: InfiniBand」「Ethernet: The Local Area Network」「Wide Area Network: ATM」原书无编号，写成 `### … {-}`，与 09-app-f-07.Rmd 中 F.8 节的小标题一致。F.9 节写成 `## 网络互连 {#sec-f-9}`。
- 引用 F.2、F.13 节写成链接；「page F-23」「page F-85」照录为「第 F-23 页」「第 F-85 页」。

## 图

- 图 F.29（第 80 页，表格）：原书位于第 80 页，正文在 09-app-f-07.Rmd（F.8 节片上网络部分）中未出现对它的引用，按「图归图所在页」由本部分排成 Markdown 表格，放在 InfiniBand 第二段之后（原书版面位置）。分隔符「；」照原表。
- 图 F.30（第 81 页）：截图 images/appf/fig-f-30.png（200 dpi，裁去图注与分隔线），图内字段名译文补在图注末尾。
- 图 F.31（第 82 页，表格）：排成 Markdown 表格。
- 图 F.32（第 82 页）：截图 images/appf/fig-f-32.png，含 (A)(B) 两幅分图，图例与坐标轴译文补在图注末尾。
- 图 F.33（第 84 页）：截图 images/appf/fig-f-33.png。
- 图 F.34、F.35（第 85 页）：截图 images/appf/fig-f-34.png、fig-f-35.png。
- 图 F.36（第 86 页，表格）：排成 Markdown 表格。
- 图 F.37（第 88 页）：截图 images/appf/fig-f-37.png。

## 原书疑点

1. InfiniBand 的发送/接收开销「0.946 and 1.423 ms」「0.910 and 0.323 ms」：以 4 字节包而言，毫秒量级显然过大，应为微秒（μs），可能是 μ 被排成了 m。照录 ms，请核对。
2. 以太网速率「10, 100, 10,000, and 100,000 Mbits/sec」漏了 1000 Mbit/s（下一句即提到「1000 Mbits/sec and above」）。照录原文。
3. 正文「see Figure F.36 on page F-85」：图 F.36 实际在第 F-86 页，照录「第 F-85 页」。
4. 图 F.32(b) 图例「MVAPICH 1PoIB SDR/DDR」应为 IPoIB（图注和正文都写 IPoIB），图注译文按 IPoIB 说明。
5. 「Messages of 2 KB represent approximately 50% of the bytes transferred」：按累计曲线应指 2 KB 及以下的消息，照字面译作「2 KB 的消息」。另外图注说小于 512 字节的消息约占 40% 字节，与正文一致。
6. InfiniBand「2 to 120 Gbp/link per direction」，单位「Gbp」照录（应为 Gbps）；图 F.31 中 InfiniBand 链路原始双向带宽为 4～240 Gbps，与之一致。
7. 图 F.31「SGI Altrix」应为 SGI Altix，照录。

## 新定术语

| 英文 | 译法 |
|---|---|
| bubble flow control | 气泡流控（bubble flow control） |
| fully adaptive deadlock-free routing | 完全自适应无死锁路由 |
| bypass switch board | 旁路交换板 |
| checkpoint | 检查点 |
| collective / combining operation | 集合操作 / 合并操作 |
| reduction | 归约 |
| send/receive / remote DMA (RDMA) | send/receive（不译）/ 远程 DMA（RDMA） |
| post a receive buffer | 登记接收缓冲区 |
| service level | 服务级别 |
| weighted round-robin fair scheduling | 加权轮转公平调度 |
| forwarding table | 转发表 |
| virtual destination naming | 虚拟目的地命名 |
| OS bypass / protocol offloading | OS 旁路 / 协议卸载 |
| native (VAPI) | 原生（接口） |
| SDR / DDR | 单数据率（SDR）/ 双数据率（DDR） |
| wire-speed | 线速 |
| bridge / router / gateway / hub | 网桥 / 路由器 / 网关 / 集线器 |
| segment | 网段 |
| carrier sensing with exponential back-off | 带指数退避的载波侦听 |
| cell (ATM) | 信元 |
| virtual connection / connectionless | 虚连接 / 无连接 |
| quality of service | 服务质量 |
| protocol family / protocol suite | 协议族 |
| protocol stack | 协议栈 |
| peer-to-peer | 对等 |
| OSI 各层 | 应用层、表示层、会话层、传输层、网络层、数据链路层、物理层 |
| preamble / pad / partition key / sequence number | 前导码 / 填充 / 分区键 / 序号 |
| LCA (least common ancestor) | 保留缩写 LCA |
| age-based arbitration | 按等待时间（age）仲裁 |

润色时改正：Blue Gene/L 容错段 failures 原译「失效」，按术语表（failure 译「故障」）改为「故障」。
