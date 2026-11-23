# 附录 I 统稿记录：大规模多处理器与科学计算应用

底本：底本/appendix-i.pdf，共 48 页。第 1–47 页印着书页 I-1～I-47。第 48 页印的是附录 J 的目录页（J.1 Introduction J-2 …），不属于本附录，已跳过。附录 I 原书没有习题，也没有参考文献。

## 文件与分界

| 文件 | PDF 页段 | 行数 | 起止 |
|---|---|---:|---|
| [09-app-i-01.Rmd](<../09-app-i-01.Rmd>) | 1–10（含第 11 页顶部跨页段的后半） | 127 | 附录标题、章首引语、I.1 节 → I.3 节「…in the caption of Figure I.1」 |
| [09-app-i-02.Rmd](<../09-app-i-02.Rmd>) | 11–20（含第 21 页题干后半） | 208 | 图 I.1、「The overall computation-to-communication ratio…」 → I.4 节取并加一例题题干 |
| [09-app-i-03.Rmd](<../09-app-i-03.Rmd>) | 21–30（含第 31 页首段后半） | 92 | 图 I.7、例题解答 → I.6 节首段「…unavailable for other uses.」 |
| [09-app-i-04.Rmd](<../09-app-i-04.Rmd>) | 31–40 | 107 | 「Users and designers are often interested…」 → I.7 节目录控制器三点结论的第 2 点 |
| [09-app-i-05.Rmd](<../09-app-i-05.Rmd>) | 41–47 | 66 | 第 3 点 → I.9 节末句 |

合计 600 行。统稿时对照 PDF 第 10/11、20/21、30/31、40/41 页的文字逐一核对相邻文件的边界，没有漏译，也没有重复。

## 结构检查

- 第一个文件第一行为 `# 大规模多处理器与科学计算应用 {#app-i}`，章首引语齐全。
- 节锚点 sec-i-1～sec-i-9 各定义一次，节标题与原书 I.1～I.9 一一对应。无编号小标题都带 `{-}`；层级与原书一致：「栅障同步」在「同步性能面临的挑战」之下，「软件实现」「硬件原语」在「较大规模多处理器的同步机制」之下，这三个用 `####`。
- 图 I.1～I.21 共 21 个，锚点 fig-i-1～fig-i-21 各定义一次。分类如下：
  - 表格（Markdown）：图 I.1、I.4、I.16、I.20；
  - 代码：图 I.2、I.3、I.5、I.6、I.7；
  - 截图：图 I.8～I.15、I.17、I.18、I.19、I.21，共 12 张，都在 images/appi/ 中。
- 本附录内的链接（#sec-i-N、#fig-i-N）都有对应锚点。外部链接只有 #app-f。

## 统稿改动

1. [09-app-i-02.Rmd](<../09-app-i-02.Rmd>)：「共享者集合」改为「共享集合」，与第 5 章和 09-app-i-04.Rmd 一致。
2. [09-app-i-04.Rmd](<../09-app-i-04.Rmd>)：scaled speedup 的三处译法由「扩展后的加速比」统一为第 5 章的「按比例扩展的加速比」，英文原词移到首次出现处。
3. [09-app-i-05.Rmd](<../09-app-i-05.Rmd>)：文献引注的全角括号「［2002］」改为半角「[2002]」，与 09-app-i-04.Rmd 和正文各章一致（共 3 处）。
4. [09-app-i-03.Rmd](<../09-app-i-03.Rmd>)：图 I.13、I.14 图注中的「上一节」改为「上一小节」。原文 the last section 指 I.5 节内前一小节（对称共享存储部分），而不是 I.4 节。

## 全附录疑点（按重要性排列）

1. **第 13、16 页同步例题的数字前后不符。** 自旋锁例题算出 120 次总线事务、12,000 个时钟周期，原书却说平均每次获得锁需要「120 clock cycles」，按算应为 1200。第 16 页又说竞争时需要「15,000 cycles」，无竞争时需要「1000 cycles」，两个数都和前面的例题对不上。译文照原书。（appI-02）
2. **第 41 页 BG/L 机柜数。** 原文写「up to 64 K nodes organized into 32 racks each containing 1 K nodes」，32 × 1 K = 32 K，与 64 K 不符。实际系统是 64 个机柜。译文照原书。（appI-05）
3. **第 27–28 页 FFT 带宽例题的排版错位。** 「FFT performs all-to-all communication…No standard networking technology comes close.」一段印在 Example 和 Answer 之间，但用到了解答中才算出的 448 MB/s。译文把它移到解答末尾。（appI-03）
4. 第 34 页「see the discussion in Section I.6」出现在 I.6 节内，是自指，可能原指第 5 章谬误一节。照原书链接到 I.6 节。（appI-04）
5. 第 8 页 LU：「a grid of size p × p」，若 p 是处理器数，网格应为 √p × √p。照原书。（appI-01）
6. 第 18、20 页两处「the example on page I-12」：该例题实际在 I-13 页。照原书。（appI-02）
7. 第 20 页「simple code-sensing barrier」疑为 sense-reversing 的笔误，保留英文。（appI-02）
8. 图 I.3、I.6 的代码括号不配对，图 I.6 的 barrier 调用参数个数与定义不符，图 I.4 一处源代码行末多一个「/」。都照原书录入。（appI-02）
9. 第 34 页时间受限扩展例题中 $k \log k = 10$ 得 5.72，只有取自然对数才成立。照录。（appI-04）
10. 原书笔误，已按意思改正：第 25 页 basic size 改为块大小；第 37 页 register 改为请求者；BL/G 改为 BG/L；「global or or a global and」；out-order 改为乱序；nonbblocking；CrayT3E 补空格。（appI-03/04/05）
11. I.9 节「past five to ten years」「past 15 years」「30 years ago」沿用旧版的时间表述，照录。（appI-05）

## 新定术语（全附录汇总）

沿用第 5 章：自旋锁、栅障（barrier）、取并加一、伪共享、宿主节点/宿主目录、属主、升级失效、取数/作废、共享集合、按比例扩展的加速比（scaled speedup）。
沿用附录 F：对分带宽、电路交换，以及发送开销、飞行时间、传输时间、接收开销。

| 英文 | 译法 |
|---|---|
| occupancy | 占用（首次注英文） |
| communication latency hiding | 通信延迟隐藏 |
| kernel（FFT、LU） | 核心 |
| roots of unity matrix | 单位根矩阵 |
| tiling | 铺块 |
| n-body algorithm / octree / cell | n 体算法 / 八叉树 / 单元（cell） |
| computation-to-communication ratio | 计算/通信比 |
| sense-reversing barrier | 感知反转栅障 |
| exponential back-off | 指数退避 |
| queuing lock | 排队锁 |
| combining tree (barrier) | 组合树（栅障） |
| fan-in | 扇入 |
| gather / release stage | 收集阶段 / 放行阶段 |
| point of serialization | 串行化点 |
| synchronization controller | 同步控制器 |
| coherence / capacity miss | 一致性失效 / 容量失效 |
| potentially shared data | 可能共享的数据 |
| write ownership / write upgrade miss | 写所有权失效 / 写升级失效 |
| inherent communication | 固有通信 |
| plateau / working set effect | 平台期 / 工作集效应 |
| local / remote miss | 本地失效 / 远程失效 |
| three-hop (remote) miss | 三跳（远程）失效 |
| all-to-all communication | 全对全通信 |
| wall-clock time | 墙钟时间 |
| memory- / time-constrained scaling | 存储受限扩展 / 时间受限扩展 |
| unscaled (true) speedup | 不扩展的加速比（真实加速比） |
| NAK | 否定确认（NAK），之后用 NAK |
| incoming / outgoing request | 外来请求 / 外发请求 |
| reentrant | 可重入 |
| break ties | 打破僵局 |
| forwarding style of protocol | 转发式协议 |
| computing density | 计算密度 |
| RAS | RAS（可靠性、可用性和可维护性） |
| rack | 机柜 |
| barrier network / (global) collective network | 栅障网络 / （全局）集合通信网络 |
| prefetch buffer / lockbox | 预取缓冲 / 锁箱 |
| commodity / custom / uniform cluster | 商用集群 / 定制集群 / 均匀集群 |
| constellation | 星座（系统） |
| TOP500 list | TOP500 榜单 |
