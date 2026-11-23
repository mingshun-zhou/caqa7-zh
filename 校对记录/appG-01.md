# 附录 G 校对记录（09-app-g-01.Rmd）：标题、G.1、G.2、G.3 开头

页段：底本/appendix-g.pdf 第 1–9 页（书页：第 1 页为章首页，无页码；第 2–9 页印 G-2～G-9）。PDF 第 N 页即书页 G-N。各页页眉均为附录 G，没有混入相邻附录的页面，无跳过页。

- 开头：附录标题「Vector Processors in More Depth」、修订者 Krste Asanovic、Seymour Cray 引语（第 1 页），G.1 节「Chapter 4 introduces vector architectures…」（第 2 页）。
- 结尾：第 9 页末段「The timing of real memory banks is usually split into two different components…」一直译到第 10 页该段末句「…otherwise, memory bank conflicts will exist.」。第 10 页下一段「Memory bank conflicts will not occur within a single vector memory instruction…」起归第 2 部分。
- 附录标题行写作 `# 深入讨论向量处理器 {#app-g}`；不是附录 A，未加 `(APPENDIX)` 行。

## 图

- 图 G.1（第 3 页）：排成 Markdown 表格，图注照译，末尾补表头译文。多行单元格（如 Cray X-MP / Y-MP 合并一行）用 `<br>` 分行。
- 图 G.2、图 G.3（第 4 页）、图 G.4（第 5 页）：排成 Markdown 表格，图注末补表头译文。按正文先后，图 G.2、G.3 放在第一个例题解答之后，图 G.4 放在分段开采开销那段之后（与原书版面位置一致）。
- 图 G.5（第 7 页）：截图 images/appg/fig-g-5.png（200 dpi，-x 900 -y 340 -W 1600 -H 955），已检查坐标轴和右侧曲线标注完整、不带图注。图注末补图内标注译文。
- 图 G.6（第 8 页）：截图 images/appg/fig-g-6.png（200 dpi，-x 460 -y 1850 -W 1640 -H 990），已检查左上「Start-up latency」和右侧三段标注完整、不带图注。图注末补图内标注译文。
- 图 G.7 在第 10 页，归第 2 部分；本文件 G.3 节例题解答中只写了指向 #fig-g-7 的链接。
- 本页范围内无脚注、无习题。

## 原书疑点

1. 图 G.5 图注「for the example on page F-6」：本附录中该例题在 G-6 页，「F-6」是旧版（第 5 版附录 F）页码遗留。译文改为「第 G-6 页例题」，请确认。
2. 图 G.3 第 2 行护航指令组印作「MULVS.D LV」，抽文字与页面图一致，照录。按第 4 章同例应为 `vmul`（乘）与第二条 `vld`（load）同组；4 个护航指令组、长度 64 时 4 + 42/64 = 4.65 也与表中 41 + 4n 吻合。
3. 第一个例题解答「4 + (42/64) = 4.65」：4 + 0.656 = 4.656，原书写 4.65（截断），照录；1.16 倍 = 4.65/4，吻合。第二个例题 784/200 = 3.92，原书写 3.9，照录。C90 例题 8/12 = 66.67%，原书写 66.6%，照录。
4. 引语出处「Lawrence Livermore Laboratorieson on the introduction…」原书多了「on」（Laboratorieson），按意思译为「在劳伦斯·利弗莫尔实验室介绍 Cray-1 的公开讲座」。引语中「processors..One」原书为双句点，译作省略号。
5. G.2 节首句「The chime approximation is reasonably accurate for long vectors. Another source of overhead is far more significant than the issue limitation.」承接第 4 章的内容（发射限制），本附录前文未提及发射限制，照译。
6. 代码中「DADDUI R1,R0,#8 ;loads length of 1st segment」与下一条「DADDUI R1,R0,#64 ;length in bytes of 1st segment」——注释照译；R1 先作向量长度再作字节长度，原书如此。

## 新定术语

| 英文 | 译法 |
|---|---|
| chime / convoy | 钟鸣 / 护航指令组（沿用第 4 章） |
| start-up time / start-up overhead / start-up penalty | 启动时间 / 启动开销 / 启动开销（图 G.4 的 penalty 也译「启动开销」，与第 4 章一致） |
| initiation rate | 发起速率（沿用第 4 章） |
| strip mining / strip-mined loop | 分段开采 / 分段开采循环（沿用第 4 章） |
| lane | 车道（沿用第 4 章） |
| Vector Length Register (VLR) | 向量长度寄存器（VLR） |
| stride | 步长（沿用第 4 章） |
| dead time / dead cycle / recovery time | 空闲时间 / 空闲周期 / 恢复时间（新定） |
| bank cycle time / bank busy time | 存储体周期时间 / 存储体忙时间（新定） |
| access latency | 访问延迟 |
| foreground / background vector registers | 前台 / 后台向量寄存器（新定） |
| population count / parity | 位计数 / 奇偶校验 |
| Multi-Streaming Processor (MSP) | 多流处理器（MSP） |
| multiply/divide-add unit | 乘/除-加部件 |
