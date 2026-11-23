# 附录 D 校对记录（09-app-d-06.Rmd）：案例研究与习题（D.1 续～案例研究 5 开头）

页段：底本/appendix-d.pdf 第 51–60 页（书页 D-51～D-60，PDF 页号与书页号一致，本段没有混入其他附录的页）。

- 开头：第 51 页第一行是习题 D.1 的子题 b.「What is the rotational latency?」。D.1 题干和子题 a. 在第 50 页，由上一部分译出；子题 b～e 各自独立成行、起始于第 51 页，所以本文件从 b. 开始译。合并时请确认上一部分没有重复译 b～e。
- 结尾：第 60 页最后一项是案例研究 5 部件清单中的「Ultra320 SCSI buses that can transfer 320 MB/sec … The SCSI cable MTTF is 1,000,000 hours.」，这一项在第 60 页内结束。下一项「An Ultra320 SCSI controller …」起始于第 61 页，归下一部分。

## 图

- 图 D.25（第 51 页）：截图 images/appd/fig-d-25.png（200 dpi），放在 D.1 子题之后、D.2 之前（D.1 题干在上一部分引用它）。
- 图 D.26（第 53 页）、图 D.27（第 54 页）、图 D.28（第 55 页）、图 D.29（第 56 页）：均截图，200 dpi，已用 read_image 检查不缺边、不带图注。
- 图 D.29 是画成四个圆柱的块布局图，保留截图，没有排成表格；图内标注 Parity: RAID 5 Left-Asymmetric, stripe = 16, pattern = 48 的译文补在图注末尾。
- 各图坐标轴的英文标注译文补在图注末尾。
- 图 D.27 原书排在 D.5 代码之后、说明段之前，译文保持这个位置。图 D.28 原书排在 D.7 之后，译文同样放在 D.7 之后。

## 原书疑点

1. D.4 代码中「p < = testsize」是排版把 <= 拆开了，代码块照录为 `p <= testsize`。代码中「issues all request[N]」的 issues（D.5、D.6 中是 issue）照录未改。
2. D.4 正文说「the value of p with the highest time corresponds to the pattern size」，但图 D.26 在 64、128、192、256 KB 处都有约 1.5 s 的峰值（倍数关系），照译，留给解题者判断。
3. D.4 (a) 问 0.4、0.8、1.6 秒对应什么，而图 D.26 的基线读数约 0.45～0.5 s；D.5 (a) 问 0.75 秒，图 D.27 低谷读数约 0.8 s。都照录原书数字。
4. D.6 的四个子题分值在题号处写作 [10/10/10/10]，但 a～d 各子题标的是 [20]，照录。
5. D.6 代码的循环变量以 chunksize 为步长、却与 numchunks 比较，单位前后不一致，照录。
6. D.9～D.14 引用 D.4 节（真实故障），D.15 起引用 D.5 节（排队论），D.20～D.22 引用 D.7 节，写成纯文本 <D.x>。D.14 引用图 D.5，链接 #fig-d-5（09-app-d-01.Rmd 已有锚点）；案例研究 3 引用图 D.3，链接 #fig-d-3。
7. 案例研究 3 说「37 GB SCSI disk shown in Figure D.3」，但 09-app-d-01.Rmd 中的图 D.3 是 2011 年的 SATA（2000 GB）和 SAS（600 GB）两种磁盘，并没有 37 GB SCSI 磁盘，疑为沿用旧版的引用。照译，请核对。
8. 案例研究 4 第一段中「N  1」是 N − 1 的抽取乱码，按页面图写作 $N-1$；D.5 中「c  1」同理写作 $c-1$；「N ¼ 1000」「p ¼ 5」中的 ¼ 是等号乱码。

## 新定术语

| 英文 | 译法 |
|---|---|
| rotational latency | 旋转延迟 |
| head switch time / cylinder switch time | 磁头切换时间 / 柱面切换时间 |
| minimal transfer time | 最小传输时间 |
| mock disk | 模拟磁盘 |
| Skippy / Shear / Disk Alpha / Disk Beta | 保留英文 |
| Deconstructing a Disk Array | 解析磁盘阵列 |
| microbenchmark | 微基准测试程序 |
| fingerprinting software | 指纹识别软件 |
| chunk | 条块（chunk） |
| stripe | 条带（与 09-app-d-01.Rmd 一致） |
| pattern | 模式（pattern） |
| raw device | 裸设备 |
| RAID 5 Left-Asymmetric | 保留英文 |
| reconstruction | 重建（与 09-app-d-01.Rmd 一致；09-app-d-03.Rmd 用「重构」，合并时需统一） |
| offline / online reconstruction | 离线重建 / 在线重建 |
| performability | 性能可用性（performability） |
| mean time until data loss (MTDL) | 平均数据丢失时间（MTDL） |
| double failure | 双重失效（与 09-app-d-01.Rmd 一致） |
| hot spare | 热备盘（与 09-app-d-03.Rmd 一致） |
| row-diagonal parity | 行-对角线奇偶校验（与 09-app-d-01.Rmd 一致） |
| space utilization | 空间利用率 |
| positioning time | 定位时间 |
| SCSI string | SCSI 串 |
