# 附录 I 校对记录（09-app-i-01.Rmd）：标题、引语、I.1–I.3 节前半

页段：底本/appendix-i.pdf 第 1–10 页（书页 I-1–I-10），另含第 11 页（I-11）开头跨页段落的后半。PDF 页码与书页 I-N 一一对应，第 1–10 页都印着本附录的页码字母，没有混入相邻附录的页面。

- 开头：附录标题「Large-Scale Multiprocessors and Scientific Applications」和章首引语（Jim Gray），接 I.1 节「The primary application of large-scale multiprocessors is for true parallel programming…」。第 1 页是标题页，没有上一页延续过来的半段。
- 结尾：I.3 节「Computation/Communication for the Parallel Programs」第二段「To understand what happens quantitatively to the computation-to-communication ratio…」，这一段从第 10 页末跨到第 11 页，译到「…we describe the basic phenomena for each application in the caption of Figure I.1」为止。
- 第 11 页其余内容（「The overall computation-to-communication ratio…」段、例题、图 I.1）留给下一部分。

## 图

- 本部分（第 1–10 页）没有图。图 I.1 印在第 11 页，归下一部分；正文已写 [图 I.1](#fig-i-1) 链接，锚点 fig-i-1 由下一部分建立。
- 已建空目录 images/appi/，本部分没有截图。

## 原书疑点

1. I.2 节通信延迟公式（第 4 页）：pdftotext 抽出的「¼」「þ」是 = 和 + 的乱码，按页面图排成两行的 aligned 公式；公式在原书中处于第 2 项列表之内，译文保持在列表项内（缩进 3 格）。
2. LU 核心（第 8 页）：原书写「laying a grid of size p × p over the matrix of blocks」。若 p 是处理器数，网格应为 √p × √p；照原书译作 p × p，请核对。
3. I.1 节说「Sections I.7 and I.8 rely on a basic understanding of interconnection networks」，又说 I.7 研究分布式共享存储 Cache 一致性的实现，照译。引语第二段（斜体评论）没有署名，与 Jim Gray 的话放在同一引用块中。
4. Ocean 段「A finer grid increases accuracy and thus the rate of convergence」，照原文译为「精度越高，收敛速度也就越快」。

## 新定术语

| 英文 | 译法 |
|---|---|
| occupancy | 占用（首次注英文） |
| communication latency hiding | 通信延迟隐藏 |
| sender/receiver overhead, time of flight, transmission time | 发送开销、接收开销、飞行时间、传输时间（沿用附录 F） |
| message passing / shared memory | 消息传递 / 共享存储 |
| distributed shared memory | 分布式共享存储 |
| multiprogramming | 多道程序 |
| loosely coupled cluster | 松耦合集群 |
| sender-initiated communication | 由发送方发起的通信 |
| fault isolation | 故障隔离 |
| roots of unity matrix | 单位根矩阵 |
| radix | 基数 |
| 2D tiling / tiled decomposition | 二维铺块 / 铺块方式 |
| n-body algorithm | n 体算法 |
| octree / cell | 八叉树 / 单元（cell） |
| center of mass | 质心 |
| red-black Gauss-Seidel multigrid | 红黑 Gauss-Seidel 多重网格 |
| eddy and boundary currents | 涡流和边界流 |
| computation-to-communication ratio | 计算/通信比 |
| kernel（FFT、LU） | 核心 |

润色时改正：I.2 节末句「it has never been practical to use message passing to implement shared memory for a commercial system」原译「商用系统从来没有实际采用过……」，改为「商用系统用消息传递来实现共享存储，从来都是不现实的」。
