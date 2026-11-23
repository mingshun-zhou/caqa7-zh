# 附录 G 统稿记录：深入讨论向量处理器

底本：底本/appendix-g.pdf，共 36 页。第 1–34 页为附录 G（第 1 页章首无页码，其余印 G-2～G-34）。第 35 页空白。第 36 页是附录 H 的章首目录页，不属于附录 G，未译。

## 文件与分界

| 文件 | PDF 页段 | 内容 | 行数 |
|---|---|---|---|
| 09-app-g-01.Rmd | 1–9（含第 10 页首段后半） | 附录标题、引语、G.1、G.2、G.3 前半，图 G.1～G.6 | 195 |
| 09-app-g-02.Rmd | 10–18 | 图 G.7、G.3 后半、G.4、G.5、G.6 至 N~1/2~ 例题，图 G.7～G.10 | 249 |
| 09-app-g-03.Rmd | 19–27（含第 28 页首段） | N~v~ 例题至 G.6 末、G.7、G.8、G.9，图 G.11、G.12 | 145 |
| 09-app-g-04.Rmd | 28–34 | 习题 G.1～G.14、参考文献 | 243 |

合计 832 行。

边界核对（对照 pdftotext 文本）：

- 01/02：第 9 页末段「The timing of real memory banks …」跨页，01 译到「…否则就会出现存储体冲突。」；02 从图 G.7 和「Memory bank conflicts will not occur …」开始。无漏无重。
- 02/03：第 18 页以 N~1/2~ 例题结束，第 19 页以 N~v~ 例题开始，没有跨页段落。无漏无重。
- 03/04：第 27 页末段「Benchmark studies …」跨到第 28 页，03 译完；04 从「Exercises」开始。无漏无重。
- 抽查第 11–16、20–26 页逐句对照，未发现漏段。

本轮未补译、未删重。统稿只改了两处中英文间缺空格：09-app-g-03.Rmd「远程 store 在更新」，09-app-g-04.Rmd「这次 load 需要」。

## 结构核对

- 标题行 `# 深入讨论向量处理器 {#app-g}` 在 09-app-g-01.Rmd 第 1 行。
- 节锚点 sec-g-1～sec-g-9 齐全，节标题写法与第 4 章一致（「融会贯通：……」「结束语」「历史回顾与参考文献」）。习题 `## 习题 {- #sec-g-exercises}`（原书无作者名），参考文献 `## 参考文献 {- #sec-g-references}`。
- 图 G.1～G.12 均有锚点。插图 5 幅（fig-g-5、6、8、11、12），文件都在 images/appg/；表格 7 个（G.1、2、3、4、7、9、10）。
- 本附录内链接（fig-g-1～12、sec-g-2/4/5/6）全部有对应锚点。外部链接只有 [附录 H](#app-h)，09-app-h-01.Rmd 中已定义。原书的 Figure G.n / Section G.n 引用都已写成链接；「习题 G.6」写成纯文本。
- 图 G.8 底部有一条横线压在「ADDV」字样上，原书版面本来如此，不影响阅读，保留。

## 术语统一

全附录与第 4 章一致，没有需要改的冲突：

| 英文 | 译法 |
|---|---|
| chime / convoy | 钟鸣 / 护航指令组 |
| chaining / flexible chaining | 链接 / 灵活链接 |
| lane | 车道 |
| strip mining | 分段开采 |
| start-up time / overhead / penalty | 启动时间 / 启动开销 |
| initiation rate | 发起速率 |
| dead time / dead cycle / recovery time | 空闲时间 / 空闲周期 / 恢复时间（新定） |
| bank busy time / bank cycle time | 存储体忙时间 / 存储体周期时间 |
| scatter-gather | 集中—分散（正文统一用此写法；04 的分记录表里写作「分散–集中」，正文实际用的也是「集中—分散」） |
| vector mask register | 向量掩码寄存器（03 的分记录表写「向量屏蔽寄存器」，正文实际用「向量掩码寄存器」，与第 4 章一致） |
| SSP / MSP | 单流处理器 / 多流处理器 |
| tailgating | 尾随（新定） |
| Ecache | 保留英文，即外部 Cache |
| minisupercomputer | 小型超级计算机 |
| create vector index (CVI) | 生成向量索引（CVI） |
| ALAT | 高级装入地址表（ALAT） |
| loop fission / scalar expansion / recursive doubling / partial sums / reduction / recurrence | 循环分裂 / 标量扩展 / 递归倍增 / 部分和 / 归约 / 递推 |
| kernels | 核心程序 |
| sustained performance | 持续性能 |

## 疑点汇总（按重要程度）

1. **G.4 节代码不对应**（第 13 页）：「Let us first recall code from Chapter 4」后给出的是分段开采 DAXPY 循环，但随后用 CVI 实现的向量序列是条件减法（A(i) ≠ 0 时 A(i) = A(i) − B(i)）。疑为第 7 版排错了代码，旧版此处应为条件循环。译文照录，请对照纸本或旧版确认。
2. **图 G.3 第 2 行印作「MULVS.D LV」**（第 4 页）：页面图与抽取文字一致，照录。按 4 + 42/64 和 41 + 4n 推算，这一组是乘法加第二条 load。另外，图 G.5 图注原书写「page F-6」，是旧版页码遗留，译文改为「第 G-6 页」。
3. **年份与数据是旧版遗留**：G.3 节和 G.8 节的「In 2011」照译；第 14 页「A(i) ¦ 0」符号印刷异常，按上下文译作 A(i) ≠ 0。数值近似照录原书：4.656 写 4.65，784/200 写 3.9，8/12 写 66.6%，326/194 写 1.7。

其他小问题见各分记录：引语出处「Laboratorieson」多了 on；G.8 节「Conversely, via superscalar …」中的 via 多余；参考文献中不成对的引号和缺失的逗号已整理；习题 G.6、G.10 照录原题。
