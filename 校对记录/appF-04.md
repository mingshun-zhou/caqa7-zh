# 附录 F 校对记录（09-app-f-04.Rmd）：F.4 网络拓扑（后半）

页段：底本/appendix-f.pdf 第 34–44 页（书页 F-34～F-44），均属附录 F，没有混入其他附录的页。

- 开头：第 34 页第一段「To reduce blocking in MINs, extra switches must be added …」。第 33 页末尾的例题解答（交叉开关与 MIN 的成本比较）和「… as discussed at the end of the previous section.」一段在第 33 页结束，不跨页，由上一部分译出。
- 结尾：第 44 页末尾的 NEWS 例题「Fully connected」一项跨到第 45 页（「… so the 1024 network bisection links largely go underutilized.」），已译完整。第 45 页的「Fat tree」一项及其后内容（例题后的讨论、图 F.16、F.5 节）属下一部分。
- 小标题：「Distributed Switched Networks」「Effects of Topology on Network Performance」原书无编号，写成 `### … {-}`。
- 引用 F.2 节写成 [F.2 节](#sec-f-2)。

## 图

- 图 F.12（第 34 页）：截图 images/appf/fig-f-12.png（200 dpi，裁去图注和分隔线）。
- 图 F.13（第 37 页）：截图 images/appf/fig-f-13.png。
- 图 F.14（第 38 页）：截图 images/appf/fig-f-14.png，图内三处分图标注的译文补在图注末尾。
- 图 F.15（第 41 页）：排成 Markdown 表格，放在「拓扑对网络性能的影响」第一段之后（原书位于该页底部）。「Performance」「Cost」两个分组行用粗体行表示。

## 原书疑点

1. NEWS 例题「环」一项：正文说北向通信「8 of the 56 packets must cross the two bisection links」，随后却写 $\gamma = 10/112 = 8.93\%$。10 可能是东向 2 个加北向 8 个之和，但正文没有说明。照录原文数字，请核对。
2. 「Again, the expression on page F-40 assumes …」：这个延迟表达式实际在第 F-42 页，照录「第 F-40 页」。
3. 「This, too, is costly but not in terms of performance.」：从上下文看，阻塞降低带宽利用率，代价应当正是在性能上，原文可能写反（或想说「不是硬件成本上的代价」）。照字面译为「只不过不是性能上的代价」，请核对。
4. 「二维网格」一项末句「limited by the communication pattern at 56 BW units as opposed to the mesh network」意为受通信模式限制、而非受网格网络限制，照此意译。

## 新定术语

| 英文 | 译法 |
|---|---|
| MIN (multistage interconnection network) | MIN（多级互连网络） |
| rearrangeably nonblocking | 可重排无阻塞 |
| nonblocking / blocking | 无阻塞 / 阻塞 |
| hop / hop count | 跳 / 跳数 |
| Clos network / Beneš network | Clos 网络 / Beneš 网络 |
| folded Beneš | 折叠 Beneš 网络 |
| bidirectional multistage interconnection network | 双向多级互连网络 |
| fat tree | 胖树 |
| switch fabric | 交换结构 |
| switched-media / shared-media network | 交换介质网络 / 共享介质网络 |
| distributed switched network | 分布式交换网络 |
| network node / end node | 网络节点 / 末端节点 |
| direct / indirect network | 直接网络 / 间接网络（与第 5 章一致） |
| fully connected | 全连接 |
| ring / mesh (grid) / torus / hypercube (n-cube) | 环 / 网格 / 环面 / 超立方体（n-立方体） |
| k-ary n-cube | k 元 n 立方体 |
| switch degree | 交换机度数 |
| bristling | 保留英文 |
| injection / reception link | 注入链路 / 接收链路 |
| bisection bandwidth / full bisection bandwidth | 对分带宽 / 全对分带宽（与第 6 章一致） |
| bisection traffic fraction (γ) | 对分流量比例（γ） |
| crossbar | 交叉开关 |
| pin-out / pin count | 引脚数 |
| crosstalk / parasitic capacitance | 串扰 / 寄生电容 |
| sending / receiving overhead | 发送开销 / 接收开销 |
| routing / arbitration / switching delay | 路由延迟 / 仲裁延迟 / 交换延迟 |
| NEWS communication | NEWS 通信 |
| wrap-around link | 回绕链路 |
| BW unit | BW 单位 |

润色时改正：全连接一项「largely go underutilized」原译「大部分没有得到利用」，改为「大部分没有得到充分利用」。
