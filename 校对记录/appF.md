# 附录 F 互连网络：统稿校对记录

## 一、文件与页段

| 文件 | PDF 页 | 内容 |
|---|---|---|
| 09-app-f-01.Rmd | 1–11 | 标题 {#app-f}、修订者、章首引语、F.1、F.2（至信用/Xon-Xoff 例题） |
| 09-app-f-02.Rmd | 12–22 | F.2 后半（含图 F.5–F.7）、F.3 开头 |
| 09-app-f-03.Rmd | 23–33 | F.3 后半、F.4 开头（图 F.8–F.11） |
| 09-app-f-04.Rmd | 34–44 | F.4（图 F.12–F.15），NEWS 例题至「全连接」 |
| 09-app-f-05.Rmd | 45–55 | 例题「胖树」项、图 F.16、F.5（图 F.17–F.19） |
| 09-app-f-06.Rmd | 56–66 | F.5 末（图 F.20）、F.6（图 F.21–F.25） |
| 09-app-f-07.Rmd | 67–77 | 图 F.26、F.7（图 F.27）、F.8 开头（图 F.28） |
| 09-app-f-08.Rmd | 78–88 | F.8 后半（图 F.29–F.36）、F.9（图 F.37） |
| 09-app-f-09.Rmd | 89–99 | **统稿人补译**：F.9 末（图 F.38）、F.10 全节（图 F.39、F.40）、F.11 前半（图 F.41） |
| 09-app-f-10.Rmd | 100–110 | F.11 后半、F.12、F.13、习题 F.1 |
| 09-app-f-11.Rmd | 111–120 | 习题 F.2 起、参考文献 |
| 09-app-f-12.Rmd | 121–122 | 无内容（121 页空白，122 页为附录 G 目录页，跳过），只有一行注释，可不列入 _bookdown.yml |

PDF 首页即 F-1，未混入其他附录的页；末尾第 122 页属附录 G，已跳过。

## 二、统稿所做的改动

1. 第 9 部分（第 89–99 页）原译者失败、文件缺失，统稿人补译为 09-app-f-09.Rmd：从「As in our analogy, the danger in this layered approach…」起，到「…without introducing reordering overhead when using the protocol described above.」止，与第 8 部分结尾、第 10 部分开头逐句衔接，无漏无重。新增图 F.38（截图）、F.39（截图）、F.40（截图）、F.41（Markdown 表格），图片存 images/appf/。
2. 其余各部分边界逐一对照 PDF，均无漏译或重复。
3. 术语统一：
   - 09-app-f-04.Rmd 把 packet 译作「分组」（31 处），全附录其余均作「包」，已统一为「包」；其中「switches are grouped onto boards」一句的「分组安装」改为「成组地安装」。
   - 「流控」统一为「流量控制」（01、05、08 部分）。
   - end node 的「末端节点」统一为「端节点」（03、04、07、10、11 部分）。
4. 核查结果：{#app-f} 标题在 09-app-f-01.Rmd 第 1 行；sec-f-1 至 sec-f-13 齐全；fig-f-1 至 fig-f-41 全部定义且无重复，截图文件全部存在（32 个）；附录内所有 #fig-f-、#sec-f- 链接都有目标（第 11 部分原先悬空的 F.29–F.32、F.41 现已全部有锚点）。
5. 习题标题：原书 Exercises 无作者署名，保留 `## 习题 {- #sec-f-exercises}`。

## 三、新定术语（全附录统一）

| 英文 | 译法 |
|---|---|
| interconnection network | 互连网络 |
| OCN / NoC | 片上网络（OCN）/ network-on-chip，NoC |
| SAN | 系统/存储区域网络（SAN）；system area network 系统区域网络；storage area network 存储区域网络 |
| packet / message / flit / phit | 包 / 消息 / flit / phit（不译） |
| header / trailer / payload | 头部、包头 / 尾部、包尾 / 有效载荷（原文 header 指包的一部分时两种都用，未强行统一） |
| datagram | 数据报 |
| end node | 端节点 |
| flow control（credit-based, Xon/Xoff, bubble） | 流量控制（基于信用的、Xon/Xoff、气泡流量控制） |
| time of flight / transmission time | 飞行时间 / 传输时间 |
| sending / receiving overhead | 发送开销 / 接收开销 |
| injection / reception link | 注入链路 / 接收链路 |
| bisection bandwidth | 对分带宽 |
| MIN | 多级互连网络（MIN） |
| crossbar | 交叉开关 |
| torus / mesh / hypercube / fat tree | 环面 / 网格 / 超立方体 / 胖树 |
| bristling | 保留英文 bristling（图表中作「4 路 bristled」） |
| high-radix / low-radix switch | 高基数 / 低基数交换机 |
| routing / arbitration / switching | 路由 / 仲裁 / 交换 |
| deterministic / adaptive routing | 确定性路由 / 自适应路由 |
| dimension-order routing / direction-order routing | 维序路由 / 方向序路由 |
| virtual channel | 虚通道 |
| wormhole / virtual cut-through switching | 虫孔交换 / 虚拟直通交换 |
| HOL blocking / virtual output queueing | 队头阻塞（HOL 阻塞）/ 虚拟输出排队 |
| NIC | 网络接口卡（NIC） |
| channel adapter（TCA / HCA） | 通道适配器（目标通道适配器 TCA / 主机通道适配器 HCA） |
| bridge / gateway | 网桥 / 网关 |
| protocol stack / peer-to-peer | 协议栈 / 对等 |
| zero-copy protocol | 零拷贝协议 |
| offload | 卸载 |
| eager / rendezvous protocol | 急切协议 / 会合协议 |
| collocation site | 托管机房 |
| block transfer engine（BLT） | 块传送引擎（BLT） |
| sliding window / piggyback acknowledgment / urgent pointer | 滑动窗口 / 捎带确认 / 紧急指针 |
| time-to-live | 生存时间 |

## 四、全附录疑点汇总

### 数字与单位（需对照纸本）

1. 第 78–88 页（第 8 部分）InfiniBand 发送/接收开销原书印作 0.946/1.423 ms、0.910/0.323 ms，按量级应为 μs，照录 ms。
2. 第 12–22 页 SAN 例题「about 800 bytes」「655 bytes and larger」按题设算不出来，交叉点约 421 字节；图 F.6 与 800 字节一致。照录。
3. 第 34–44 页环网络：正文说「8 of the 56 packets」，算式却写 γ = 10/112 = 8.93%。照录。
4. 第 23–33 页图 F.10 图注称片上交换网络有效带宽可等于聚合带宽，与例题 σ < 1 的算法（N = 1024 时约 4600 Gbit/s 对 8192 Gbit/s）矛盾。照录。
5. 第 67–77 页 SCC 电压区域「six predefined regions … (two 2-tile regions)」，24 个 tile 分 6 区应每区 4 tile，与括号说法不符。照译。
6. 以太网速率「10, 100, 10,000, and 100,000 Mbits/sec」漏 1000 Mbit/s。照录。
7. 习题 F.11 (f)「i + 1 modulo N − 1」，桶形移位通常 mod N。照录。
8. 交换机相对成本精确值 170.67、85.33，原书写 170、85。照录。
9. 第 95 页（第 9 部分）IBM Blue Gene/L「7-bit injection and 12-bit reception links」照录。
10. pdftotext 普遍把 μs 抽成 ms、把 ρ/σ/γ 抽成字母，各部分已按页面图改回（第 9 部分 CM-5、Paragon、Blue Gene/L 的开销均为 μs，ρ < 100%、σ < 100%）。习题 F.31 的 2 ms 照录。

### 页码与引用

11. 正文「page F-17」实际公式在 F-18；「page F-40」实际在 F-42；「Figure F.36 on page F-85」实际在 F-86。均照录。

### 原文笔误、措辞

12. 「This, too, is costly but not in terms of performance」（第 34–44 页）从上下文看代价正在性能上，疑原文写反。按字面译。
13. 第 1 部分原文写「Intel Single-Chip Cloud Computer (SCCC)」，F.8 节原文写 SCC，两处都照原书。
14. 「Sonic's Smart Interconnect」通常写作 Sonics，照原书。
15. 第 56 页「absorb the applied load, = causing…」等号按破折号译；图 F.20 图注「interconnections networks」按正确写法译；图 F.32(b) 图例「1PoIB」应为 IPoIB；图 F.28 出处「58e59」改为 58–59。
16. 「TPC/IP」改为 TCP/IP，「shear size」按 sheer 译。Cerf 和 Kahn 所获奖项原文写「ACM Software Award」，实际应为 ACM 软件系统奖，照译「ACM 软件奖」。
17. 图 F.38 图注末句「Nowadays, version six of the Internet protocol (IPv6) was widely used.」时态混用，译作「如今，第 6 版网际协议（IPv6）已经得到广泛使用」。
18. 第 94 页 Fallacy「Bisection bandwidth is an accurate cost constraint」：正文 r、s 按页面图为 ρ、σ。
19. 习题 F.31 题干说 network bridge，小题说 gateway，分别照译。
20. 「regressively dropping / progressively redirecting」暂译「退行式地丢弃 / 进行式地转到」，可再斟酌。
21. 图 F.23 配置位表中「-」行，图注补了「『-』表示该路由器不存在」，系据拓扑推断，待确认。
22. 修订者行在 09-app-f-01.Rmd 中写成标题下一行斜体。

- 润色时改正（09-app-f-09.Rmd）：虫孔交换谬误一段「(e.g., perhaps for on-chip networks)」原译漏了 perhaps，已补为「片上网络或许就是一例」。
