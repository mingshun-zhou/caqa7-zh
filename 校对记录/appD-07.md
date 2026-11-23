# 附录 D 校对记录（09-app-d-07.Rmd）：案例研究 5（续）～案例研究 7，习题 D.19～D.31

页段：底本/appendix-d.pdf 第 61–70 页。第 61–68 页印着书页码 D-61～D-68，属于本附录；第 69 页是空白页；第 70 页是附录 E 的节目录（E.1 Introduction E-2 … E.8 Concluding Remarks E-26），属于附录 E，跳过不译。

- 开头：第 61 页以案例研究 5 的部件列表「An Ultra320 SCSI controller that is capable of 50,000 IOPS…」开始。这是第 60 页「Here are your building blocks:」列表的后半，第 61 页上没有跨页的半句（第 60 页最后一项「Ultra320 SCSI buses … The SCSI cable MTTF is 1,000,000 hours.」在第 60 页结束）。按列表项分段的做法（同 appD-03），从第 61 页的第一项译起，所以文件第一行就是列表项，前面没有引导句。列表前半（CPU、I/O 总线、SCSI 总线三项）、案例研究 5 的标题和引言、习题 D.17～D.18 归上一部分。
- 结尾：第 68 页习题 D.31 最后一段「…you might be able to beat this on a single PC configured with a few disks.」。这也是附录 D 正文的结尾。
- 本部分包含无编号小标题「Case Study 6: Dirty Rotten Bits」「Case Study 7: Sorting Things Out」，按第 7 章格式写作 `### 案例研究 6：烂掉的位 {-}`、`### 案例研究 7：排序问题 {-}`，「Concepts illustrated by this case study」译作 *本案例研究涉及的概念*。
- 本附录在第 68 页后没有参考文献节（附录的参考文献在书末统一列出），所以本文件没有 `## 参考文献`。

## 图

- 本部分没有带编号的图。
- 第 63 页文件大小分布表（D.24）和第 66 页硬件价格表（D.28）原书无图号，排成无锚点的 Markdown 表格；美元写作 \$。第 66 页表原书是 CPU/I/O 互连、内存/磁盘两组并排，译文保持同样的 6 列布局，第二组的组名用粗体行。
- 第 64–65 页的命令行用法和第 65 页的 C 代码照录为代码块，C 注释译成中文。

## 原书疑点

1. D.31「The file consists of 100 byte keys, with 10-byte records (the part that must be sorted)」：括号说「需要排序的部分」应指关键字，而且按惯例（Datamation 排序、D.28）是 100 字节记录、10 字节关键字，原书疑把 keys 和 records 写反了。译文照原书译出，请确认。
2. D.25 (a)「Assuming the same 20 GB volume that is half full」：前面 D.24 说的是 37 GB 卷，原书前后不一致（可能沿用旧版数字）。照原书写 20 GB。
3. D.27 MD5 网址 pdftotext 抽成「group_id¼42360」，页面上是「group_id=42360」，按页面写 =。D.27 代码注释原书「carat symbol」应为 caret（脱字符），译作「脱字符号 ^」。D.24 说 MD5 校验和为 20 字节，D.27 又说 MD5 输出 128 位（16 字节），原书如此，照译。
4. D.22 (b) 的 MTDL 原书未展开，按上下文应为 mean time to data loss（平均数据丢失时间），保留缩写未译。
5. 第 61 页列表项「The SCSI disks described in Figure D.3」及 D.25、D.26 中的「Figure D.3」写成 [图 D.3](#fig-d-3) 链接；D.28 的「see Chapter 1」写纯文本「第 1 章」。PennySort 网址照录，未做链接。

## 新定术语

| 英文 | 译法 |
|---|---|
| enclosure | 机箱 |
| bit rot | 位腐烂 |
| partial disk failure | 磁盘局部失效 |
| checksum / checksumming | 校验和 |
| parity protection | 奇偶校验保护 |
| disk scrubbing | 磁盘擦洗（与第 1 章 scrub 译「擦洗」一致） |
| lazily / eager | 懒惰地 / 积极的 |
| bit flip | 位翻转 |
| write traffic | 写流量 |
| external (disk-to-disk) sort | 外部排序（磁盘到磁盘的排序） |
| one-pass / two-pass sort | 一趟 / 两趟排序 |
| sorted run | 已排序的顺串（run） |
| amortization of overhead | 开销的分摊 |
| balanced systems | 均衡的系统 |
| disk efficiency | 磁盘效率 |
| I/O interconnect | I/O 互连 |
| memory copy | 内存复制 |
| Slow / Standard / Fast（表中档次） | 慢速 / 标准 / 快速 |
| Case Study 6 标题 Dirty Rotten Bits | 烂掉的位 |
| Case Study 7 标题 Sorting Things Out | 排序问题 |

润色时改正：D.25 原译漏了「sometimes called disk scrubbing」中的 sometimes，改为「有时所说的*磁盘擦洗*」。
