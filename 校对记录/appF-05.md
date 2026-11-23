# 附录 F 校对记录（09-app-f-05.Rmd）：F.4 节例题结尾、F.5 节前半

页段：底本/appendix-f.pdf 第 45–55 页（书页 F-45～F-55），页眉均印 F 字母页码，没有混入其他附录的页。

起止：第 45 页开头是 F.4 节例题解答中「Fully connected」一项的后半段（「directions would take only 1 time unit if …」），属上一部分，未译。本文件从「Fat tree—Assume the same mapping of elements to nodes as is done for the ring …」一项开始（译为项目列表的一项，接在上一部分的列表之后），经「The above example should not lead one to the wrong conclusion …」、图 F.16、F.5 节全部「Routing」「Arbitration」「Switching」「Impact on Network Performance」小节，到第二个例题（4096 节点三维环面）解答第二段末句「… thus providing results that are independent of network clock frequency.」为止。该段始于第 55 页、跨到第 56 页，已译完整。第 56 页从「As can be seen, the plots within each graph …」开始的新段由下一部分翻译。

## 图

- 图 F.16（第 46 页）：表格，排成 Markdown 表格，前置 `[图 F.16 …]{#fig-f-16 .caption}`。表头「Injection [reception] node BW」等照原意译出，方括号用全角；QsNet^II^ 用上标。
- 图 F.17（第 48 页）：截图 images/appf/fig-f-17.png（200 dpi，-x 175 -y 390 -W 2185 -H 805），含 (A)(B) 标签，不含图注。图内只有 s~i~、d~i~ 标注，无需补译。
- 图 F.18（第 51 页）：截图 images/appf/fig-f-18.png（200 dpi，-x 880 -y 345 -W 1650 -H 580），图内标注 Request/Grant/Acknowledgment 译文补在图注末尾。
- 图 F.19（第 55 页）：截图 images/appf/fig-f-19.png（200 dpi，-x 300 -y 1530 -W 2235 -H 1150），坐标轴、图例译文补在图注末尾。
- 本部分无脚注、习题。

## 原书疑点

1. 公式中的希腊字母 ρ、γ、σ、τ 在 pdftotext 中抽成 r、g、s 等，按页面图恢复为 $\rho$、$\gamma$、$\sigma$、$\tau_a$。有效带宽公式原书分两行排版，译文合为一行 min(…)。
2. 胖树一项原书「the fattree network」照意译为「胖树网络」。
3. 第二个例题题干要求「compare the efficiency of the best and worst of these networks」，相应讨论在第 56 页之后，本部分不涉及。
4. 图 F.16 中 Cray X1E 的「4-way bristled 2D torus」：bristled（每个路由器挂多个节点）保留英文，译「4 路 bristled 二维环面」，待全附录统一。
5. 「regressively dropping / progressively redirecting」译为「退行式地丢弃 / 进行式地转到」，按 Duato 等文献用法直译，可再斟酌。

## 新定术语

| 英文 | 译法 |
|---|---|
| routing / arbitration / switching | 路由 / 仲裁 / 交换 |
| bisection bandwidth | 对分带宽（与第 5、6 章一致） |
| mesh / torus / hypercube / fat tree / ring | 网格 / 环面 / 超立方体 / 胖树 / 环 |
| MIN (multistage interconnection network) | 保留 MIN |
| livelock / deadlock | 活锁 / 死锁 |
| deadlock avoidance / recovery | 死锁避免 / 死锁恢复 |
| escape path / escape resource set | 逃逸路径 / 逃逸资源集 |
| dimension-order routing (DOR) / e-cube routing | 维序路由（DOR）/ e-cube 路由 |
| deterministic / adaptive routing | 确定性路由 / 自适应路由 |
| wrap-around link | 回绕链路 |
| bubble / bubble flow control | 气泡 / 气泡流控 |
| physical / virtual channel | 物理通道 / 虚通道 |
| Duato's protocol | Duato 协议 |
| Turn Model; west-first / negative-first / north-last routing | 转向模型；西向优先 / 负向优先 / 北向最后路由 |
| least common ancestor (LCA) | 最小公共祖先（LCA） |
| self-routing | 自路由 |
| up*/down* routing | up\*/down\* 路由 |
| source / distributed routing | 源路由 / 分布式路由 |
| forwarding table | 转发表 |
| starvation | 饥饿 |
| serve-longest-queue (SLQ) / round-robin (RR) / age-based | 服务最长队列（SLQ）/ 轮转（RR）/ 基于包龄 |
| request / grant / acknowledgment phase | 请求 / 授权 / 确认阶段 |
| circuit switching / pipelined circuit switching | 电路交换 / 流水电路交换 |
| store-and-forward / cut-through | 存储转发 / 直通 |
| virtual cut-through / wormhole switching | 虚拟直通 / 虫孔交换 |
| flit | flit（流控单位） |
| buffered wormhole switching | 带缓冲的虫孔交换 |
| efficiency factor ρ | 效率因子 ρ |
| applied load | 施加负载 |
| cycle-accurate / trace-driven / execution-driven simulation | 周期精确 / 踪迹驱动 / 执行驱动模拟 |
| synthetic traffic | 合成流量 |
| time of flight | 飞行时间 |
| peak / sustained throughput | 峰值 / 持续吞吐率 |
