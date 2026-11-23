# 第 1 章校对记录：案例研究与习题、参考文献（PDF 第 79–91 页）

## 范围与格式

- PDF 第 79 页上半是 1.13 节末尾和 1.14 节，不属本文件；本文件从第 79 页 “Case Studies and Exercises by Gregory D. Peterson” 起。第 92 页是第 2 章章首目录，不属第 1 章，未译。第 91 页的 “Reference” 列表属第 1 章，已收入，条目保留英文原样。
- 原书 “Case Studies and Exercises” 不编号，标题写成 `## 案例研究与习题（Gregory D. Peterson） {- #sec-1-exercises}`；锚点不用 sec-1-15，以免和原书节号混淆。合并时如另有约定再改。
- 图 1.28–1.31 均为表格，已改成 Markdown 表格，未截图，images/ch01 下无新增文件。图 1.28 的 CPU B 两行（12 × 75 计算芯粒、1 × 400 I/O 芯粒）拆成两行，第二行首列留空；图 1.31 两级表头拍平为「吞吐率 A/B/C」「% Max IPS A/B/C」。
- 美元金额一律写「N 美元」，避免 `$` 被 Pandoc 当成数学公式定界符。“8×”“2×”“1.5×” 译成「8 倍」等。
- 引用图 1.22、1.26 写成 `[图 1.22](#fig-1-22)`、`[图 1.26](#fig-1-26)`，依赖其他组在 1.10 节等处设好锚点。

## 疑似原书问题（均照原文译）

- 1.7(c) 脚注号在页面上印成上标 “11”，脚注本身编号为 1，疑排版错误；译文用 `^[]` 脚注，不受影响。
- 1.13 “Many machine language operations can be performed concurrently”：按上下文疑为 machine learning，照原文译「机器语言操作」。
- 1.13 题头分值 [10/10/10/10/10/20]，但小题 (c) 标 [15]，不一致，照印。
- 1.13(b) 问 “each of the three systems”，图 1.30/1.31 只有基于 CPU 和基于 GPU 两种系统，照译「这三种系统」。
- 1.13(d) 说 “general-purpose system”，应即 CPU 系统，照译「通用系统」。
- 1.13(e) 说 “TDP in Figures 1.30 and 1.31”，TDP 只出现在图 1.30，照译。
- 图 1.31 图注说 “two neural-net workloads”，表中有 A、B、C 三个负载，C 是虚构的通用应用；照译「两种神经网络负载」。
- 1.9 “failure in time (FIT)”：FIT 通常是每 10^9 小时的失效次数，原文未说明单位，照原文。
- 1.14 “improves some mode of execution by a factor of 10”：译「速度提高到原来的 10 倍」。
- 1.16 “adding an extra cycle in delay to reach that unit”：that unit 指被挪远的那个部件还是浮点部件，原文有歧义，译「访问那个部件」。
- 1.20 引用 “Figure 1.22” 未加链接色（其他图引用均为蓝色链接），可能原书漏设链接；译文照常加链接。
- 参考文献 “Emebnch IOT 2.0” 疑为 Embench 之误；Jouppi 条 “Towles, B. Young, C.” 之间少逗号；均照原样保留。
- 1.2(e) “a profit of $75, per defect-free product” 多一个逗号，不影响翻译。

## 新定术语

| 英文 | 译法 |
|---|---|
| chiplet | 芯粒 |
| yield | 成品率（Archbase 用「成品率」） |
| good wafer | 完好的晶圆 |
| die size | 晶片面积（die 统一译「晶片」） |
| manufacturing size / technology node | 制造尺寸 / 工艺节点 |
| stock keeping unit (SKU) | 库存单位（SKU） |
| symmetric multiprocessor (SM) | 照原文译「对称多处理器（SM）」。疑原书笔误：NVIDIA 的 SM 是 streaming multiprocessor（流式多处理器），待定 |
| strong scaling / weak scaling | 强扩展 / 弱扩展 |
| scaled speedup | 扩展加速比 |
| Gustafson's Law | Gustafson 定律 |
| MTTF | 平均无故障时间（MTTF） |
| availability | 可用性 |
| server farm | 服务器集群 |
| downtime | 停机 |
| dynamic energy | 动态能耗 |
| frequency and voltage scaling | 调频调压 |
| voltage floor | 电压下限 |
| dark silicon | 暗硅 |
| power gating | 电源门控 |
| cooling door | 冷却门 |
| idle power / busy power | 空闲功耗 / 忙碌功耗 |
| % Max IPS | 保留英文 |
| “barely alive” state | 「勉强活着」的状态 |
| architect | 体系结构设计者 |
| total cost of ownership (TCO) | 总拥有成本（TCO） |
| SPEC rate | SPEC rate 成绩 |
| deadline | 截止时间 |

## 润色时的改动

- 全文按 1.1 节尺度润色：拆句、调语序，口语词（赚、关掉、用不着之类）改回书面语；删去括号里的英文全称（SM、MTTF、GPU、TCO 等只留缩写）。
- 术语统一：图 1.28 表头 die size 和 1.4(c) 的 die 由「芯片」改为「晶片」。
- 倍数说法去歧义：1.15「比普通执行模式快 20 倍」改为「速度是普通执行模式的 20 倍」；1.15(b)(c)「2 倍的加速比」改为「加速比达到 2」；1.16(b)「慢了 1.5 倍」改为「访问时间变为原来的 1.5 倍」。
- 1.9、1.10 中 fail 指系统或计算机出故障，「失效」改为「出现故障」，与 miss「失效」区分。
- 1.19(c) 补出原文 current rate 的「目前」。
