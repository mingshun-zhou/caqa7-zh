# 附录 D 校对记录（09-app-d-05.Rmd）：D.7 节（续）～D.11 节、案例研究 1 开头

页段：底本/appendix-d.pdf 第 41–50 页（书页 D-41～D-50，PDF 页号与书页号一致；10 页都印着 D 字母页码，没有混入其他附录的页）。

- 开头：第 41 页顶部的「Maximum IOPS per ATA controller = 1/0.2 ms = 5000 IOPS」两行公式，是第 40 页「making the maximum rate per controller」那句话的延续，已由 09-app-d-04.Rmd 译出，本文件不重复。本文件从「The next link in the chain is the disks themselves.」开始。
- 结尾：第 50 页末的习题 D.1 题干和 a 小题；b～e 小题印在第 51 页，属于跨页的同一道题，一并译完（到「e. What is the number of disk heads?」为止）。习题 D.2、D.3 起始于第 51 页，归下一部分。
- 本部分包含：D.7 节无编号小标题「Calculating MTTF of the TB-80 Cluster」（{-}）及其例题；D.8「Putting It All Together: NetApp FAS6000 Filer」（sec-d-8）；D.9「Fallacies and Pitfalls」（sec-d-9）；D.10「Concluding Remarks」（sec-d-10，译「结束语」，与正文各章一致），章首引语照译为块引用；D.11「Historical Perspective and References」（sec-d-11）；「Case Studies with Exercises by Andrea C. Arpaci-Dusseau and Remzi H. Arpaci-Dusseau」（{- #sec-d-exercises}）和「Case Study 1: Deconstructing a Disk」（{-}）。
- 公式全部按页面图重排为 LaTeX；与 09-app-d-04.Rmd 一致，IOPS 计算公式中的量名保留英文（Maximum IOPS …、I/O time），MTTF 例题中的 Failure rate 译为「故障率」。
- 第 46 页两个读请求小表排成 Markdown 表格，无图号；操作名 Read 照录。
- Skippy 代码照录（原书「gettime() -begin_time」的空格位置照录）。

## 图

- 图 D.20（第 44 页）：排成 Markdown 表格。日志消息是 SCSI 规范中的原文，表中照录英文，在图注末尾补了译文。
- 图 D.21（第 45 页）：排成 Markdown 表格。
- 图 D.22（第 46 页）：截图 images/appd/fig-d-22.png（200 dpi），不含图注；图注末尾补了图例译文。
- 图 D.23（第 48 页）：截图 images/appd/fig-d-23.png，连同下方 a、b、c 公式框一起截取；图注末尾补了坐标轴、曲线名和公式框中各量的译文。
- 图 D.24（第 48 页）：截图 images/appd/fig-d-24.png，左右两幅子图一并截取；图注末尾补了坐标轴译文。
- 图 D.25（第 51 页）不在本部分范围，习题 D.1 中只写了指向 #fig-d-25 的链接，图由下一部分截取。

## 原书疑点

1. 第 41 页：「The disks themselves are almost 60% of the cost」。按原书数字，磁盘为 40 × 4 × 375 = 60,000 美元，占 84,500 美元的约 71%，与「almost 60%」不符。照原书译出，请确认。
2. 第 41 页：成本式「40 × ($500 + 4 × $375) + $3000 + $1500」中的 1500 美元在 09-app-d-04.Rmd 所列假定中没有出处（假定只有节点 500 美元、磁盘 375 美元、交换机和线缆 3000 美元），照录。
3. 第 41 页：机架 IOPS 原文写作「40 × 308 or 12,320 IOPS to 40 × 292 or 11,680 IOPS」，译文按从小到大写成 11,680～12,320；交换机带宽一句仍按原文 16 KB 对 12,320、50 KB 对 11,680。注意：按前文，16 KB 时每盘 77 IOPS（4 盘 308）、50 KB 时 73 IOPS（4 盘 292），对应关系与原文一致。
4. 第 42–43 页：「running NSF」「including NSF」两处应为 NFS（网络文件系统），译文改为 NFS。第 43 页「look like a file server if running NTFS or CIFS」中的 NTFS 疑为 NFS 之误（NTFS 是 Windows 本地文件系统，不是网络文件协议），译文照原书写 NTFS，请确认。
5. 第 41 页：「about a factor of 10 to 15 better than storage cluster from the prior edition in 2001」，按手册倍数规则译为「只有……的 1/15～1/10 左右」。
6. 第 45 页：微软网站 22 小时不可用，按每年 5 分钟计需要约 264 年，原书说 250 年，照录。
7. 第 44 页 D.9 第一条谬误标题「Components fail fast」译为「部件发生故障时会立即停止工作」，按正文意思展开；fail-fast 的含义请确认。
8. 第 47 页「see page B-2 in Appendix B」写成「[附录 B](#app-b) 第 B-2 页」；第 43 页「see page D-8」写「第 D-8 页」；D.11 节「Section M.9 (available online)」写「M.9 节（在线提供，见[附录 M](#app-m)）」。「Chapter 1/4/5」写纯文本。
9. 第 50 页「University of California—Berkeley」pdftotext 抽成「CaliforniaeBerkeley」，以页面图为准。第 49 页「< sector, track, surface >」译文用〈扇区，磁道，盘面〉。

## 新定术语

| 英文 | 译法 |
|---|---|
| filer | 文件服务器（filer），首次注英文 |
| row-diagonal parity / RAID-DP | 行-对角奇偶校验 / RAID-DP（与 09-app-d-01 一致） |
| Fibre Channel (FC) | 光纤通道（FC） |
| shelf (disk shelf) | 磁盘架 |
| bridge controller | 桥接控制器 |
| block server | 块服务器 |
| clustered failover / failover | 集群故障切换 / 故障切换 |
| virtual filer | 虚拟文件服务器 |
| latent error | 潜在错误（与第 1 章一致） |
| service agreement | 服务协议 |
| five nines | 五个 9 |
| availability class | 可用性等级 |
| scheduled downtime | 计划内的停机时间 |
| logical block address (LBA) | 逻辑块地址（LBA） |
| host-ordered / drive-ordered queue | 主机排序的队列 / 驱动器排序的队列 |
| settle time | 稳定时间 |
| rule of thumb | 经验法则 |
| naive / new seek formula | 朴素寻道公式 / 新寻道公式 |
| seek distance | 寻道距离 |
| fingerprint (v.) | 采集指纹 |
| microbenchmark | 微基准测试程序 |
| raw device interface | 原始设备接口 |
| minimal transfer time | 最小传输时间 |
| head switch / cylinder switch time | 磁头切换时间 / 柱面切换时间 |
| mock disk | 假想的磁盘 |
- 润色时改正：D.7 例题「ATA 驱动器每年有 3%～7% 发生故障」漏了 about，补为「每年约有 3%～7%」。
