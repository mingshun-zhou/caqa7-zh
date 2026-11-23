# 附录 F 校对记录（09-app-f-06.Rmd）：F.5 节末尾、F.6 节前大半

页段：底本/appendix-f.pdf 第 56–66 页（书页 F-56～F-66），页眉均印 F 字母页码，没有混入其他附录的页。

起止：第 56 页开头「of nodes in the network (i.e., bytes per cycle per node). … independent of network clock frequency.」是上一页例题解答段落的延续，不译（由 09-app-f-05.Rmd 负责）。本文件从第 56 页新段落「As can be seen, the plots within each graph have similar characteristic shapes …」开始，经 F.5 节例题解答余下部分、图 F.20、F.6 节开头及「Basic Switch Microarchitecture」「Buffer Organizations」「Routing Algorithm Implementation」「Pipelining the Switch Microarchitecture」各小节，到第 66 页末「Other Switch Microarchitecture Enhancements」第一段为止。该段跨到第 67 页，已译完，末句为「… the IBM Blue Gene/L implements two crossbar access ports and two read ports per switch input port.」。第 67 页的新段落「Another way of implementing parallel data paths …」和图 F.26（印在第 67 页）由下一部分负责（09-app-f-07.Rmd 开头正是这一段，衔接无缝）。

## 图

- 图 F.20（第 58 页，整页表格）：排成 Markdown 表格，8 列 7 行。系统名中的方括号和「[× # CPUs]」用全角方括号［］，避免被 Pandoc 当作链接；QsNet^II^ 用上标。RR（round-robin）、LCA、SLQ 保留缩写，与 09-app-f-05.Rmd 一致；「bristled」保留英文。
- 图 F.21（第 59 页）：截图 images/appf/fig-f-21.png（200 dpi 整页图裁剪，像素框 333,1885–2520,2908），不含图注和横线；图内标注译文补在图注末尾。
- 图 F.22（第 62 页）：截图 images/appf/fig-f-22.png（像素框 179,337–2350,1980），含 (A)(B)(C) 三个子图标签，不含横线和图注。
- 图 F.23（第 64 页）：截图 images/appf/fig-f-23.png（像素框 190,2170–2350,2898），含拓扑图、配置位表和「Bidirectional routing restriction」图例。
- 图 F.24、F.25（第 65 页）：截图 images/appf/fig-f-24.png（375,380–2500,1140）、fig-f-25.png（375,1365–2500,2050）。图 F.24 中的四个逻辑表达式照录在图注末尾。
- 图 F.26 在第 67 页，不属本部分；正文中「[图 F.26](#fig-f-26)」链接已按约定写出。
- 本部分没有脚注、习题和参考文献。

## 原书疑点

1. 第 56 页「unable to absorb the applied load, = causing packets to queue up」：页面上印的是等号「=」（pdftotext 抽成「¼」），应是破折号排版错误，按破折号的意思译。
2. 图 F.20 图注「interconnections networks」应为 interconnection networks，按正确意思译。
3. 正文说效率差「12%」、可能「再提高 14%」，是百分点意义（86% − 74% = 12，100% − 86% = 14），照译为「相差 12%」「再提高 14%」。
4. 图 F.23 配置位表中路由器 10、11、14、15 一行全为「-」，与拓扑图中这四个路由器不存在相对应；图注中「『-』表示该路由器不存在」是据图补的说明，请确认。连通位 Cn/Ce/Cw/Cs 的方向含义也是据正文补的。
5. 第 57 页正文中间印有一条横线（「…virtual channel designs.」之后），看来是例题结束的分隔线，不是新的小标题，未作处理。
6. 「Figure F.22(a)」等子图引用写成「[图 F.22](#fig-f-22)(a)」。

## 新定术语

| 英文 | 译法 |
|---|---|
| saturation point | 饱和点 |
| peak / sustained throughput | 峰值吞吐率 / 持续吞吐率 |
| head-of-line (HOL) blocking | 队头阻塞（HOL 阻塞） |
| congestion management | 拥塞管理 |
| efficiency factor (ρ) | 效率因子（ρ），与 09-app-f-05.Rmd 一致 |
| switch microarchitecture | 交换机微结构 |
| dynamically allocatable multi-queue (DAMQ) | 动态可分配多队列（DAMQ） |
| input / output / centrally / input-output buffered switch | 输入缓冲交换机 / 输出缓冲交换机 / 集中缓冲交换机 / 输入-输出缓冲交换机 |
| routing control unit | 路由控制单元 |
| forwarding table | 转发表 |
| routing bits / connectivity bits / configuration bits | 路由位 / 连通位 / 配置位 |
| hierarchical arbitration | 分级仲裁 |
| link controller / link-level flow control | 链路控制器 / 链路级流量控制 |
| deserialize | 解串行 |
| switch speedup | 交换机加速比；internal switch speedup 译「交换机内部加速（比）」 |
| virtual output queue (VOQ) | 虚拟输出队列（VOQ）；virtual output queuing 译「虚拟输出排队」 |
| staging output | 输出暂存（图 F.20） |
| express links | 快捷链路（图 F.20） |
| bubble escape virtual channel | 气泡逃逸虚通道（图 F.20） |
| source routing / distributed routing | 源路由 / 分布式路由 |
| logic-based / table-based routing | 基于逻辑的路由 / 基于表的路由 |
| interval routing | 区间路由 |
| Logic-Based Distributed Routing (LBDR) | 基于逻辑的分布式路由（LBDR） |
| topology-agnostic routing algorithm | 与拓扑无关的路由算法 |
| process variability / variation | 工艺参数波动 |
| collective communication | 集合通信 |
| traffic isolation | 流量隔离 |
| phit (physical transfer unit) | phit（物理传输单元），保留英文 |
| Demux / Mux（图内） | 多路分配器 / 多路选择器 |
