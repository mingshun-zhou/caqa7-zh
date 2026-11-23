# 附录 F 校对记录（09-app-f-07.Rmd）：F.6 末尾、F.7 商用互连网络的实际问题、F.8 开头

页段：底本/appendix-f.pdf 第 67–77 页（书页 F-67～F-77），均属附录 F，没有混入其他附录的页。

- 开头：第 67 页上部是图 F.26，图下第一段「implementing several physical queues per input port, … two read ports per switch input port.」是第 66 页末段的延续，由上一部分译出。本文件从图 F.26 和「Another way of implementing parallel data paths between input and output ports …」开始。
- 结尾：第 77 页末段「The IBM BlueGene/L was the largest-scaled … With 65,536」跨到第 78 页，译到「… and 1 byte serves as a valid indicator.」为止。第 78 页从「The main interconnection network is a proprietary 32 × 32 × 64 3D torus SAN …」起属下一部分。
- 节标题：F.7 写成 `## 商用互连网络的实际问题 {#sec-f-7}`，F.8 写成 `## 互连网络实例 {#sec-f-8}`。原书无编号的小标题 Connectivity、Standardization、Congestion Management、Fault Tolerance、On-Chip Network: Intel Single-Chip Cloud Computer、System Area Network: IBM Blue Gene/L 3D Torus Network 写成 `### … {-}`。
- 引用 F.2、F.4、F.5 节写成链接 [F.2 节](#sec-f-2) 等。
- 这几页没有脚注。

## 图

- 图 F.26（第 67 页）：截图 images/appf/fig-f-26.png（200 dpi，裁到图注上方分隔线之前，含下方流水线时空图）。第 66 页正文已引用 #fig-f-26，图按所在页归本部分，放在文件开头。图内标注译文补在图注末尾。
- 图 F.27（第 74 页）：排成 Markdown 表格，放在例题题干之后（原书在第 74 页上部，例题跨第 73–75 页）。核对了各列总数：8974、654、373、573 与各行之和一致。
- 图 F.28（第 76 页）：截图 images/appf/fig-f-28.png。放在 SCC 第二段之后（原书位于该段中间）。图注只有出处，出处照录英文；原书「pp. 58e59」为抽取乱码，按页面图应为 58–59。图内标注译文补在图注末尾。

## 原书疑点

1. SCC 一段「adjust the voltage in any of the six predefined regions configuring the network (two 2-tile regions)」：24 个 tile 分成 6 个区域，每区应为 4 个 tile（2 × 2），括号「two 2-tile regions」意义不明（可能想说 2 × 2-tile）。照字面译为「（两个 2-tile 区域）」，请核对。
2. 例题解答说使用不容忍故障的局域网时「more than 30 times」，4.1% / 0.13% ≈ 31.5（精确值 369 / 11.28 ≈ 32.7），与「30 多倍」相符；后句「a 30-fold increase in phone calls」照译为「增加到原来的 30 倍」。
3. 「The SIF controller is used to communicate the network from outside the chip.」原文缺介词，按「从芯片外部与网络通信」译。另外 F.1 节（09-app-f-01.Rmd）把这台芯片的缩写写成「SCCC」，本节原书写 SCC，照本节原文。

## 新定术语

| 英文 | 译法 |
|---|---|
| buffered crossbar (switch) | 带缓冲的交叉开关（交换机） |
| crosspoint / crosspoint memory | 交叉点 / 交叉点存储器 |
| HOL (head-of-line) blocking | 队头（HOL）阻塞，之后用 HOL 阻塞 |
| input-buffered / input-output-buffered switch | 输入缓冲交换机 / 输入–输出缓冲交换机 |
| flit / phit | flit / phit（不译） |
| connectivity | 连通性 |
| collective communication network / barrier network | 集合通信网络 / 栅障网络 |
| interoperability | 互操作性 |
| de facto standard | 事实上的标准 |
| congestion management / congestion control | 拥塞管理 / 拥塞控制 |
| circuit-switched / packet-switched network | 电路交换网络 / 包交换网络 |
| packet discarding | 丢包 |
| choke packet | 抑制包（choke packet） |
| backpressure | 反压 |
| end-to-end flow control | 端到端流量控制 |
| windowing / sliding window | 窗口机制 / 滑动窗口 |
| virtual output queue | 虚拟输出队列 |
| hot spot | 热点 |
| RECN | 区域显式拥塞通知（RECN） |
| transient / permanent failure | 瞬时失效 / 永久失效 |
| resource sparing / fault-tolerant routing / network reconfiguration | 资源备份 / 容错路由 / 网络重配置 |
| degraded mode | 降级模式 |
| midplane node board | 中板节点板 |
| up\*/down\* routing | up\*/down\* 路由（不译） |
| hot swapping | 热插拔 |
| dynamic network reconfiguration | 动态网络重配置 |
| failure-intolerant LAN | 不容忍故障的局域网 |
| Single-chip Cloud Computer (SCC) | 单芯片云计算机（SCC） |
| voltage regulator controller (VRC) / system interface controller (SIF) | 电压调节控制器（VRC）/ 系统接口控制器（SIF） |
| mesh interface unit (MIU) | 网格接口单元（MIU） |
| packetization / de-packetization | 打包 / 拆包 |
| virtual cut-through switching | 虚拟直通交换 |
| virtual channel (VC) | 虚通道（VC） |
| side band | 边带 |
| wrapped wave-front arbiter | 回绕波前仲裁器（wrapped wave-front arbiter） |
| dimension-order XY routing | 维序 XY 路由 |
| system area network | 系统区域网络（与 F.1 节 SAN 译法一致） |
| valid indicator | 有效标志 |

润色时改正：标准化一段「Components … may also have a larger market」原译漏了 may，改为「可能有更大的市场」。
