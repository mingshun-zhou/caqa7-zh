# 附录 F 校对记录（09-app-f-03.Rmd）：F.3 节后半、F.4 节开头

页段：底本/appendix-f.pdf 第 23–33 页（书页 F-23～F-33，页眉字母均为 F，没有混入其他附录的页）。

- 开头：第 23 页开头「paths allocated to packets?” To achieve better utilization…」是上一页末段的延续，由 09-app-f-02.Rmd 译完（已核对该文件结尾），本文件不译。本文件从「These three network functions—routing, arbitration, and switching—must be implemented…」开始。
- 结尾：第 33 页最后一段「The reduction in switch cost of MINs comes at the price of performance… as discussed at the end of the previous section.」在本页结束，没有跨页。第 34 页「To reduce blocking in MINs…」由 09-app-f-04.Rmd 承接。
- 包括：F.3 节的「Shared-Media Networks」「Switched-Media Networks」「Comparison of Shared- and Switched-Media Networks」「Characterizing Performance: Latency and Effective Bandwidth」四个小标题（`{-}`）及两个公式、一个例题；F.4 节标题 `## 网络拓扑 {#sec-f-4}`、引言四段、小标题「Centralized Switched Networks」（`{-}`）及一个例题。本范围内没有脚注。

## 图

- 图 F.8（第 23 页）：截图 images/appf/fig-f-8.png（200 dpi，含 (A)(B) 标号，不含图注），图注末尾补了图内标注译文。
- 图 F.9（第 29 页）：截图 images/appf/fig-f-9.png，不含图注上方横线；补了坐标轴、图例译文。
- 图 F.10（第 30 页）：截图 images/appf/fig-f-10.png；补了坐标轴、图例译文。
- 图 F.11（第 32 页）：截图 images/appf/fig-f-11.png，含 (A)(B) 标号；图内只有端口编号，未补译文。
- 图 F.9 印在第 29 页顶部、F.10 印在第 30 页顶部，译文中分别放在引用它们的例题解答之后和其后一段之后；F.11 放在 F.4 节引用它的段落之后、例题之前。

## 原书疑点

1. 图 F.10 图注说「只有片上交换网络能达到与聚合带宽相等的有效带宽」。但按例题假设，交换介质的 σ = (log₂N)^−1/4 < 1，有效带宽应为 σ × N × 8 Gbps，小于聚合带宽（N = 1024 时约 4600 Gbps，而聚合带宽为 8192 Gbps，与图中 OCN—switched 末点约 5000 Gbps 一致）。图注的说法与 σ 的设定不完全吻合，照译。
2. 交换机相对成本例题：4096²/(2² × 4096/2 × 12) = 170.67、(16²…×3) = 85.33，原书取整写作 170 和 85，照录。
3. 例题解答中「the additional delays total 5 + 2.5(N) ns」等，原书 $T_A = 2.5(N)$ 的括号写法照录；σ 为「polylogarithmic (log₂N)^−1/4」，照译「多重对数形式」。
4. 例题解答中 OCN／SAN／LAN、WAN 三种情形原文是一段，译文改排成三项列表，信息未增减。
5. 共享介质「shared media」原书单复数混用（media are shared），译文统一为「共享介质」。

## 新定术语

| 英文 | 译法 |
|---|---|
| shared-media network / switched-media network | 共享介质网络 / 交换介质网络（与 09-app-f-02 一致） |
| half-duplex / full-duplex | 半双工 / 全双工 |
| carrier sensing | 载波侦听 |
| collision / collision detection | 冲突 / 冲突检测 |
| back off | 退避 |
| token | 令牌 |
| broadcasting / unicasting / multicasting | 广播 / 单播 / 组播 |
| (network) switch fabric | （网络）交换结构 |
| end node | 末端节点（与 09-app-f-04 一致） |
| aggregate bandwidth | 聚合带宽 |
| contention / contention delay | 争用 / 争用延迟 |
| time of flight | 飞行时间 |
| average reception factor | 平均接收因子 σ |
| network injection / reception bandwidth | 网络注入带宽 / 网络接收带宽 |
| cycle-accurate simulation | 周期精确的模拟 |
| best-case lower / upper bound | 最好情况下的下界 / 上界 |
| switch port / network port | 交换机端口 / 网络端口 |
| full access (connectedness) | 完全可达性（连通性） |
| hop count | 跳数 |
| crossbar (switch) / crosspoint switch | 交叉开关（交换机）/ 交叉点开关 |
| multistage interconnection network (MIN) | 多级互连网络（MIN）；multistage switch fabric 译「多级交换结构」 |
| perfect-shuffle permutation / perfect-shuffle exchange | 完全混洗置换 / 完全混洗交换 |
| exchange switch | 交换开关 |
| centralized switched network / indirect network | 集中式交换网络 / 间接网络 |
| blocking / nonblocking | 阻塞 / 无阻塞 |
| superlinear / sublinear | 超线性 / 亚线性 |
- 润色时改正：F-29「in several application domains」原译「在越来越多的应用领域中」，改为「在若干应用领域中越来越多地取代」，increasingly 与 several 各归其位。
