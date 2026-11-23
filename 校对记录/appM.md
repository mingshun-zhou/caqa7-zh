# 附录 M 统稿记录

## 文件与范围

| 文件 | 行数 | PDF 页 | 内容 |
|---|---|---|---|
| 09-app-m-01.Rmd | 177 | 1–10 | 附录标题、章首引语、M.1、M.2 及其参考文献、M.3 开头 |
| 09-app-m-02.Rmd | 221 | 11–20 | M.3 余下部分及参考文献、M.4 开头 |
| 09-app-m-03.Rmd | 216 | 21–30 | M.4 余下部分（含图 M.1）及参考文献、M.5 开头 |
| 09-app-m-04.Rmd | 157 | 31–40 | M.5 余下部分、M.5 参考文献前半 |
| 09-app-m-05.Rmd | 213 | 41–50 | M.5 参考文献后半、M.6 开头 |
| 09-app-m-06.Rmd | 171 | 51–60 | M.6 余下部分及参考文献、M.7 开头 |
| 09-app-m-07.Rmd | 182 | 61–70 | M.7 余下部分（含图 M.2）、M.7 参考文献前半 |
| 09-app-m-08.Rmd | 259 | 71–80 | M.7 参考文献后半、M.8 及其参考文献前半 |
| 09-app-m-09.Rmd | 201 | 81–90 | M.8 参考文献后半、M.9 及其参考文献、M.10 开头 |
| 09-app-m-10.Rmd | 145 | 91–96 | M.10 余下部分及参考文献；第 96 页空白 |

合计 1942 行。PDF 96 页均印附录 M 页码，没有混入其他附录的页。原书附录 M 没有习题。

## 衔接检查

对照 PDF 文本逐一核对了 9 处文件边界（第 10/11、20/21、30/31、40/41、50/51、60/61、70/71、80/81、90/91 页），均无漏译、无重复。跨页的段落和参考文献条目（第 10–11 页 IBM 360 地址一段、第 60–61 页 TOP500 一段、第 70–71 页 Gharachorloo［1990］条目）都只在前一个文件中出现一次。

各节参考文献按「[年份]」逐节计数与 PDF 比对：M.2 34 条、M.3 72、M.4 76、M.5 127、M.7 129、M.8 34、M.10 66，条数一致。M.6、M.9 参考文献格式不统一，按作者名抽查，未发现缺条。

## 统稿改动

1. cluster 统一译「集群」（与第 5、6 章正文多数用法一致）：09-app-m-06.Rmd 5 处、09-app-m-07.Rmd 26 处「机群」改为「集群」，含小标题「#### 集群 {-}」。
2. M.1 节列表中 M.4–M.9 节改为本附录内链接（原来只有 M.2、M.3 有链接）。
3. 09-app-m-01.Rmd 正文作者-年份引用的半角方括号改成全角「［］」，与其他部分一致（4 处，含「［Gibson 1970］」）。参考文献条目里的 [年份] 照录英文，未改。
4. instruction mix 统一为「指令混合比」（09-app-m-02.Rmd 一处「指令混合比例」）。

检查结果：第一个文件首行是 `# 历史回顾与参考文献 {#app-m}`；sec-m-1 到 sec-m-10 各有一个锚点；各节参考文献标题为 `### 参考文献 {- #sec-m-N-references}`（M.2–M.10，M.1 没有参考文献）。附录 M 每节各有一份参考文献，所以没有用全附录唯一的 `#sec-m-references`。fig-m-1（截图 images/appm/fig-m-1.png，已检查，不缺边、不带图注）和 fig-m-2（Markdown 表格）都有定义，正文中的 [图 M.1]、[图 M.2] 链接都能对上。

## 疑点汇总

### 链接与原书编号
1. **M.1 节说「Section M.9, on I/O, corresponds to Appendix D」**，但第 7 版的 M.9 是讲 DSA 的「Historical Perspectives and References」，I/O 实际在 M.10。译文照原文写 M.9，并链接到 #sec-m-9，建议改为 M.10。另外 M.1 的列表没有提到讲 DSA 的那一节（M.9）。
2. **M.9 节标题**原书印作「Historical Perspectives and References」，与附录标题相同，没有写对应章（应为第 7 章）。照录为「历史回顾与参考文献」。
3. [附录 J](#app-j)、[附录 K](#app-k) 目前全书没有锚点（附录 K 只有部分文件，J 没有文件），链接暂时悬空，待这两个附录的首文件加上 {#app-j}、{#app-k}。
4. M.3 节说 80286 有「附录 C 所述的保护机制」，按第 7 版应为附录 B，疑沿用旧版编号，照原文。
5. M.10 中 Myer 和 Sutherland 的引语说「in Appendix D」，已链接到附录 D，未核对附录 D 是否确有此引语。

### 原书笔误（均照录未改，除非注明）
6. 第 57 页 Connection Machine「65,636 1-bit processors」，第 58 页为 65 536，前者应为笔误。
7. 第 62 页「The Thinking Multiprocessors CM-5」，第 7 部分译者已改为 Thinking Machines（唯一一处改了原文，请确认）。正文「Gajksi」、引语署名「Vincent Natol」（应为 Natoli）、「Kligard」（应为 Kilgard）、「QCDOD」（应为 QCDOC）、「Kleinfekder」、「Aaachen」、「Santa Jose」照录。
8. 第 66 页「In 2006 … scheduled to go to 65K in late 2005」年份矛盾，照译。
9. 参考文献日期不符：Fisher［1983］、Jordan［1983］、Goodman［1983］会议日期印作 1982 年；Hagersten and Koster［1998］会议日期印作 1999 年；正文「Bell and Gray 2001」对应条目年份为［2002］。
10. Hsu［1994］页码「2333」（应为 23–33）、卷号 18:2 与年份不符；Scott and Thorson 页码「14–156」；Barroso 等 2017 卷期「56(2)」；Riseman & Foster［1972］与 Foster & Riseman［1972］重复收录；Gray and van Ingen［2005］缺前引号；Blaum et al.［2001］作者列表多一个「J.,」；Tezzaron 条目引号未闭合。
11. 第 12 页 ASPLOS、ISCA 的会议名称不规范，照录。
12. 名称写法：EC2 写作「Elastic Cloud Computing」（正式名为 Elastic Compute Cloud）；「Serial Attach SCSI」（通行写法 Serial Attached SCSI）；RS 6000 与 RS/6000、SX/6 与 SX-6 混用；NEC SX/5 和 SX/6 都写 2001 年。均照原书。
13. Colwell & Steck［1995］抽取文本为「0.6 mm」，按页面图录作「0.6 μm」。

### 旧版遗留的时间说法
14. 「50 多年前」「40 多年」（Gibson 1967 年）、「SPEC2006 将近二十年后仍占主导」等，沿用旧版时间，照译。

### 译法待确认
15. M.10 Winchester 磁盘「two related properties. First, …」原书没有 Second，译文把「Since the disk was fixed…」作为「其次」接上。
16. 「disks must improve at 60% per year」未说明指标，按上下文译作「面密度每年提高 60%」。
17. 正文 ACS 网址抽出为「/wmark/」，已恢复为「/~mark/」，未逐字核对页面图。

## 新定术语（全附录统一后）

| 英文 | 译法 | 备注 |
|---|---|---|
| Historical Perspectives and References | 历史回顾与参考文献 | |
| cluster | 集群 | 统一，取代「机群」；第 5 章有 2 处「机群」、第 6 章有 3 处，建议各章也统一 |
| instruction mix / Gibson mix | 指令混合比 / Gibson 混合比 | |
| kernel（基准测试） | 核心程序 | |
| synthetic program | 合成程序 | |
| relative MIPS / native MIPS | 相对 MIPS / 原生 MIPS | |
| capability | 权能 | |
| paged segmentation | 段页式 | |
| slave memory | 从属存储器 | |
| three C's model | 3C 模型 | 与附录 B 一致 |
| stream buffer | 流缓冲器 | |
| high-level language computer architecture (HLLCA) | 高级语言计算机体系结构（HLLCA） | |
| semantic gap | 语义鸿沟 | |
| RISC / CISC | 精简指令系统计算机（RISC）/ 复杂指令系统计算机（CISC） | 第 1 章有一处作「精简指令集计算机」，请统一 |
| attached processor | 附属处理器 | |
| tournament / correlating predictor | 竞争预测器 / 相关预测器 | 与第 3 章一致 |
| push-and-catch | 推入接出 | |
| modulo scheduling / sentinel scheduling | 模调度 / 哨兵调度 | |
| register rotation | 寄存器轮转 | |
| block multithreading | 块多线程 | |
| processing element | 处理单元 | |
| array processor | 阵列处理器 | |
| lane | 车道 | 与第 4 章一致 |
| chaining | 链接 | 与第 4 章一致 |
| partitioned ALU / subword parallelism | 可分割的 ALU / 子字并行 | |
| multicomputer | 多计算机 | |
| snooping cache | 监听 Cache | |
| cache-only memory architecture (COMA) | 唯 Cache 存储结构（COMA） | |
| fat tree | 胖树 | |
| weak ordering / release consistency | 弱序 / 释放一致性 | |
| utility computing / grid computing | 效用计算 / 网格计算 | 与第 6 章一致 |
| container（数据中心） | 集装箱 | |
| systolic multiply-accumulate chip | 脉动乘累加芯片 | |
| Image Processing Unit | 图像处理单元 | |
| areal density | 面密度 | 与附录 D 一致 |
| Winchester disk | 温彻斯特（Winchester）磁盘 | |
| rotated parity | 轮转奇偶校验 | |
| Fibre Channel Arbitrated Loop | 光纤通道仲裁环（FC-AL） | |
| plug-compatible vendor | 插接兼容厂商 | |
| wheel of reincarnation | 轮回之轮 | |

各部分的完整术语表和逐页说明见 校对记录/appM-01.md 至 appM-10.md。
