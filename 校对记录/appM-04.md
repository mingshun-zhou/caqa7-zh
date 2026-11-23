# 附录 M 校对记录（09-app-m-04.Rmd）：M.5 后半、M.5 参考文献前半

页段：底本/appendix-m.pdf 第 31–40 页（书页 M-31～M-40）。这 10 页的页眉都印着 M 字母页码，没有混入其他附录的页。

- 开头：第 31 页第一段「One of the interesting approaches used in early VLIW processors, such as the AP-120B and i860, …」是新段落（第 30 页末段「Because the processor was an attached processor, … could be ignored.」在第 30 页内结束），本文件从这里开始。
- 结尾：第 40 页最后一条参考文献 Hirata, H., … [1992]「An elementary processor architecture with simultaneous instruction issuing from multiple threads」，在本页内完结。第 41 页从 Hopkins, M. [2000] 开始，归第 5 部分。
- 内容：M.5 正文余下部分（推入接出式流水线、早期多发射研究、America/Power1、解耦体系结构、推测与重排序缓冲、Multiflow 与 Cydrome、多周期调度）；无编号小标题「编译技术和支持调度的硬件」「EPIC 和 IA-64 的发展」「ILP 的研究和提高 ILP 的思路」「突破数据流极限」「近年来的先进微处理器」「多线程和同时多线程」；M.5 参考文献（Agarwal 1993 至 Hirata 1992）。

## 图

本段页面没有图，也没有脚注、习题。

## 格式处理

- M.5 参考文献照第 2 部分写成 `### 参考文献 {- #sec-m-5-references}`。
- 参考文献照录英文；页码、日期中的「e」恢复为连接号，「d」恢复为破折号（Jordan 条目「HEP—a pipelined MIMD computer」）；连字（fi、fl）断开处补齐；González 的重音按页面图恢复。斜体未保留。
- 正文提到的「Section 3.10」写纯文本「3.10 节」。

## 原书疑点

1. 第 39 页 Colwell & Steck [1995]：pdftotext 抽出「0.6 mm」，页面图为「0.6 μm」，按图录作 μm。
2. 第 39–40 页 Fisher [1983] 与 Jordan [1983]：年份标 1983，会议日期却是「June 5–7, 1982」（第 10 届 ISCA 实为 1983 年），照录。Gallagher [1994] 的「Santa Jose」（应为 San Jose）也照录。
3. 第 36 页「most recently by Intel (see Douglas [2005])」「Recent and upcoming processors」等时间说法沿用旧版文字，照译。

## 新定术语

| 英文 | 译法 |
|---|---|
| push-and-catch | 推入接出 |
| self-draining pipeline | 自排空的流水线 |
| horizontal microcode | 水平型微代码 |
| decoupled approach | 解耦方法 |
| polycyclic scheduling | 多周期调度（polycyclic scheduling） |
| modulo scheduling | 模调度 |
| boosting | 保留英文 |
| sentinel scheduling | 哨兵调度（sentinel scheduling） |
| speculate-and-check | 先推测、后检查 |
| register rotation | 寄存器轮转 |
| block multithreading | 块多线程 |
| selective value prediction | 选择性值预测 |
| predication | 谓词执行（与第 3 章一致） |
