# 附录 M 校对记录（09-app-m-03.Rmd）：M.4 后半、M.4 参考文献、M.5 前半

页段：底本/appendix-m.pdf 第 21–30 页（书页 M-21～M-30）。这 10 页的页眉都印着 M 字母页码，没有混入其他附录的页。

- 开头：第 21 页从新段落「The simple load-store computers such as MIPS are commonly called RISC architectures.」开始（第 20 页最后一段「…rebutted their proposal.」在第 20 页内结束，已由第 2 部分译出），本页没有需要跳过的延续半段。
- 结尾：第 30 页最后一段「Most of the early multiple-issue processors that actually reached the market followed an LIW or VLIW design approach.」到「…(for example, virtual memory and exception handling) could be ignored.」结束，段落在本页内完结。第 31 页「One of the interesting approaches used in early VLIW processors…」归第 4 部分。
- 内容：M.4「精简指令系统计算机」小标题下的其余正文（第 21–24 页）；M.4 的参考文献（第 24–28 页，Alexander and Wortman 1975 至 Wulf 1981，共 76 条）；M.5 节标题，以及「早期的流水线 CPU」「动态调度的引入」「IBM 360/91：一台里程碑式的计算机」「转移预测方案」「多发射处理器的发展」五个无编号小标题（最后一个只译到第 30 页末）。

## 图

- 图 M.1（第 23 页）：截图 images/appm/fig-m-1.png（200 dpi，-x 400 -y 330 -W 2060 -H 1170），已检查四边完整、不带图注。图注末尾补了纵轴、横轴和三条曲线标注的译文。放在正文引用它的段落之后。
- 本段页面没有脚注、习题。

## 格式处理

- M.4 的参考文献按第 2 部分的做法写成 `### 参考文献 {- #sec-m-4-references}`。
- M.5 节标题写作 `## 流水线与指令级并行的发展（第 3 章和附录 C、H） {#sec-m-5}`，与 M.3、M.4 标题的写法一致。
- VAX 与 MIPS 设计目标的对比（第 22 页）原书是一段连续文字，按手册允许的做法排成两项列表。
- 参考文献照录英文；抽取乱码中的「e」恢复为连接号（如 41e46 → 41–46，February 29e March 4 → February 29–March 4，SeptembereOctober → September–October），「d」恢复为破折号（Chow 1983「Optimizer—Design」、Gagliardi 1973「workshop 4—software」、Morse 1980「microprocessors—8080」），Intel 2001 条目中的「¼」恢复为「=」，「R GB」改为 RGB。斜体未保留。
- Darcy 条目网址中的「w」对照页面图确认为「~」（http://www.sonic.net/~jddarcy/…）。正文 ACS 网址「www.cs.clemson.edu/wmark/acs.html」同样按「~」恢复为 /~mark/，该处换行在页面图上未逐字核对，请合并时留意。

## 原书疑点

1. 第 21 页：「Eckert-Mauchly」在抽取文本中断成「Eckert e Mauchly」，按奖项名写成连字符。
2. 第 22 页：正文说 RS 6000「is the first superscalar RISC processor」，第 30 页又写作「IBM Power1 architecture (the RS/6000 line)」，原书写法不统一（RS 6000 / RS/6000），照各处原文录入。
3. 第 28 页 Ropers 条目「Aaachen, Germany」多一个 a；Kozyrakis 条目会议日期和页码都是「13–15」；Patterson et al. 1983 条目「10th Annual Int'l. Conf. on Computer Architecture Conf. Proc.」；Bell and Strecker 1998 在正文中被说成「summarized the debate inside the company」。以上均照录。
4. 第 29 页 ACS「to follow Stretch and surpass the CDC 6600/6800」，CDC 6800 是未量产的计划型号，照录。

## 新定术语

| 英文 | 译法 |
|---|---|
| Complex Instruction Set Computer (CISC) | 复杂指令系统计算机（CISC） |
| hybrid-format RISC | 混合格式 RISC |
| Microprocessor without Interlocked Pipeline Stages | 无互锁流水级的微处理器 |
| code density | 代码密度（与第 2 部分一致） |
| pipeline reservation table | 流水线预约表 |
| latch | 锁存器（与正文一致） |
| precise exception | 精确异常（与第 3 章一致） |
| scoreboarding | 记分牌（与第 3 章一致） |
| peripheral processor | 外围处理器 |
| packaging technology | 组装技术 |
| tagging of data | 数据的标记 |
| generalized forwarding | 通用的前递 |
| branch-target buffer / branch folding | 转移目标缓冲 / 转移折叠（与第 3 章一致） |
| correlating predictor | 相关预测器 |
| tournament predictor / combined predictor | 竞争预测器 / 组合预测器（竞争预测器与正文一致） |
| local history predictor | 局部历史预测器 |
| return address prediction | 返回地址预测 |
| backup register | 后备寄存器 |
| fetching down both branch paths | 沿转移的两条路径同时取指 |
| wide-instruction processor | 宽指令处理器 |
| attached processor | 附属处理器 |
| software pipelining | 软件流水（与第 3 章一致） |

润色时改正：第 30 页 Floating Point Systems「applied the concept of software pipelining both in a compiler and by handwriting assembly language libraries」原译为「一方面在编译器中使用软件流水，另一方面手工编写汇编语言库」，改为软件流水概念同时用于编译器和手工编写的汇编语言库。
