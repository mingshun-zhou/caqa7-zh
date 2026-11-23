# 附录 D 校对记录（09-app-d-02.Rmd）：D.3 节后半、D.4 节前半

页段：底本/appendix-d.pdf 第 11–20 页（书页 D-11～D-20，PDF 页码与书页码一致，本段没有混入其他附录的页）。

- 开头：第 11 页开头「behavior, where a service specification is an agreed description…」是第 10 页可信性定义引文第一段的后半，已由 09-app-d-01.Rmd 译出。本文件从引文第二段「When a fault occurs, it creates a latent error…」开始，仍排成引用块，接在上一文件的引用块之后。
- 结尾：第 20 页最后一段「The TPC-C benchmark does in fact have a dependability requirement. … running some RAID organization in their storage system.」在本页结束，没有跨页。第 21 页的「Efforts that are more recent have focused on…」及图 D.13、D.14 归下一部分。
- 节标题：D.4 节写作 `## I/O 性能、可靠性度量和基准测试程序 {#sec-d-4}`；无编号小标题（伯克利的 Tertiary Disk、Tandem、其他关于操作人员对可信性影响的研究、吞吐率与响应时间、事务处理基准测试程序、SPEC 系统级文件服务器……、可信性基准测试的例子）按上一文件的写法用 `### … {-}`。
- 文献引用沿用上一文件的全角方括号［作者 年份］。

## 图

- 图 D.6（第 12 页）：表格，排成 Markdown 表格，图名放表前。
- 图 D.7（第 14 页）：截图 images/appd/fig-d-7.png（200 dpi，上下两幅面积图，含坐标轴年份，不含图注）。图注末尾补了坐标轴和图例译文。
- 图 D.8（第 16 页）：截图 images/appd/fig-d-8.png，图注补 Producer / Queue / Server 译文。
- 图 D.9（第 17 页）：截图 images/appd/fig-d-9.png，图注补坐标轴译文。
- 图 D.10（第 17 页）：截图 images/appd/fig-d-10.png，图注补全部标注译文。
- 图 D.11（第 18 页）：表格，排成 Markdown 表格。
- 图 D.12（第 19 页）：表格，排成 Markdown 表格；日期译成「1990 年 7 月」格式。
- 图 D.13、D.14 在第 21 页，不在本段（正文 D.13 的引用已写成 [图 D.13](#fig-d-13) 链接）。

## 原书疑点

1. D.4 节「Figure 1.17 on page 42 in Chapter 1 describes the top systems in performance and cost-performance for TPC-C」是旧版遗留：第 7 版图 1.17 是 NRE 成本随工艺节点的变化，与 TPC-C 无关。译文照录为纯文本「第 1 章第 42 页的图 1.17」，未加链接，请确认是否删改。
2. 原书把 TPC 写作「Transaction Processing Council」，正式名称是 Transaction Processing Performance Council。译文沿用第 1 章「事务处理委员会（TPC）」的译法。
3. Tertiary Disk 一节正文引「Talagala et al., 2000」，图 D.6 图注引「Talagala et al. [2000b]」，图注又说 Zoom 项目「in 1998」是最大的艺术图像数据库，正文说 2000 年建成服务器、7 万多件艺术品，图注为 72,000 幅；均照录。
4. 「so in 2011 the failures largely occurred elsewhere」「Although this study is 20 years old」都是旧版时间口径，照译。
5. 图 D.10 正文说响应时间缩短 0.7 秒（1.0→0.3 秒），传统事务节省 4.9 秒（34%）、图形事务节省 2.0 秒（70%），与图中标注一致。

## 新定术语

| 英文 | 译法 |
|---|---|
| latent error / effective error | 潜在错误 / 有效错误 |
| error latency | 错误延迟 |
| hardware / design / operation / environmental fault | 硬件故障 / 设计故障 / 操作故障 / 环境故障 |
| transient / intermittent / permanent fault | 瞬时故障 / 间歇故障 / 永久故障 |
| hard fault | 硬故障 |
| outage | 停机 |
| producer-server model | 生产者-服务者模型 |
| entry time / system response time / think time | 输入时间 / 系统响应时间 / 思考时间 |
| transaction time | 事务时间 |
| I/O rate / data rate | I/O 速率 / 数据速率 |
| order-entry environment | 订单录入环境 |
| synthetic benchmark | 合成基准测试程序 |
| ad hoc decision support | 即席决策支持（与第 1 章一致） |
| debit credit | 借记贷记 |
| mail ballot | 通信投票 |
