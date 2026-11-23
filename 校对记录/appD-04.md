# 附录 D 校对记录（09-app-d-04.Rmd）：D.5 后半、D.6、D.7 前半

页段：底本/appendix-d.pdf 第 31–40 页（书页 D-31～D-40，PDF 页号与书页号一致，没有混入其他附录的页）。

- 开头：第 31 页第一行是 D.5 节 M/M/1 假设列表的后两项「There is no limit to the length of the queue…」「There is one server.」。列表从第 30 页开始，但这两项是在第 31 页另起的独立条目，按分界规则由本文件译出，文件以这两个列表项开头。前面的条目（第 30 页）由上一部分负责。
- 结尾：第 40 页最后一段「Adding the 0.1 ms ATA controller overhead means 0.2 ms to 0.5 ms per I/O, making the maximum rate per controller」跨到第 41 页，本文件补完到第 41 页开头的两行公式「Maximum IOPS per ATA controller = 1/0.2 ms = 5000 IOPS / 1/0.5 ms = 2000 IOPS」为止。下一部分应从「The next link in the chain is the disks themselves.」开始。
- 包含 D.6 节（交叉问题）全部内容，D.7 节标题及开头到上述位置。

## 图

- 图 D.17（第 33 页）：截图 images/appd/fig-d-17.png（200 dpi 裁剪，不含图注）。图注末尾补了图内标注译文。
- 图 D.18（第 35 页）：表格，排成 Markdown 表格，前置 `[图 D.18 …]{#fig-d-18 .caption}`。原表的「?」照录。原表按 ATA / SCSI / PCI 三组分隔，Markdown 中无分组线。
- 图 D.19（第 39 页）：照片，截图 images/appd/fig-d-19.png（200 dpi 裁剪，不含图注）。图放在引用它的段落后、「估算……」小标题之前。

## 原书疑点

1. M/M/m 的 $\text{Prob}_{\text{tasks}\ge \text{N}_{\text{servers}}}$ 公式，原书分子写作「N_servers × Utilization^N_servers」，而 Prob_0tasks 公式和例题中都是 (N_servers × Utilization)^N_servers；例题里写「2 × Utilization²」但代入时算的是 (2 × 0.4)²。照原书录入，标准 M/M/m 公式应为 (N_servers × Utilization)^N_servers。
2. D.5 两磁盘例题末句：原文「The mean service time of a system with a single fast disk, however, is still 1.4 times faster than one with two disks」。按数字 23.8/16.7 ≈ 1.4，比的其实是平均响应时间，不是服务时间。照原文译为「平均服务时间」，请确认是否改为「响应时间」。另外 Time_queue 的结果 0.0038 原书没写单位（是秒，即 3.8 ms），照录。
3. 「two disks cut the queue waiting time by a factor of 21 over a single slow disk」：80/3.8 ≈ 21，「1.75 versus a single fast disk」：6.7/3.8 ≈ 1.76，照原书写 1.75。主存 IOPS 公式「266 × 8 / 16 KB」照录（未写单位 MB/sec）。
4. 「the I/O bus limits the maximum performance to no more than 18,600 IOPS」：2 × 8300 = 16,600，原书写 18,600，疑为笔误；50 KB 的 2 × 2700 = 5400 无误。照原书录入。
5. D.6 「This trend started in high-performance computers in the last edition of the book, and by 2011…」是沿用旧版的说法，照译。

## 新定术语

| 英文 | 译法 |
|---|---|
| M/M/1, M/M/m | 保留 |
| memoryless process | 无记忆过程 |
| interarrival time | 到达间隔时间 |
| first in, first out | 先进先出（FIFO） |
| Server utilization / Arrival rate / Time_server / Time_queue / Length_queue / N_servers / Prob | 公式中保留英文变量名 |
| point-to-point link | 点到点链路 |
| block server / filer | 块服务器 / 文件服务器（filer） |
| logical unit / logical volume / physical volume | 逻辑单元 / 逻辑卷 / 物理卷 |
| storage area network | 存储区域网络 |
| network attached storage (NAS) | 网络附加存储（NAS） |
| NFS / CIFS | 网络文件系统（NFS）/ 通用 Internet 文件系统（CIFS） |
| synchronous / asynchronous I/O | 同步 I/O / 异步 I/O |
| Internet Archive | Internet Archive（互联网档案馆），Wayback Machine 保留 |
| cost-dependability | 成本—可信性比 |
| Serial Attach SCSI | 串行 SCSI（Serial Attach SCSI） |
