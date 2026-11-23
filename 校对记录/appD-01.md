# 附录 D 校对记录（09-app-d-01.Rmd）：附录标题、D.1 节、D.2 节、D.3 节开头

页段：底本/appendix-d.pdf 第 1–10 页（书页 D-1～D-10）。第 1 页是附录标题页（标题与两段章首引语，无页眉页码），第 2–10 页页眉均印 D 字母页码，没有混入其他附录的页。

起止：从附录标题「Storage Systems」、章首引语（Al Hoagland；George Gilder）和 D.1 节「The popularity of Internet services such as search engines and auctions」开始；到第 10 页末尾跨入第 11 页的 Laprie 定义引文第一段「Computer system dependability is the quality of delivered service … The cause of an error is a fault.」为止（该段在第 11 页的部分已一并译出）。第 11 页引文第二段「When a fault occurs, it creates a latent error, …［p. 3］」起由下一部分翻译。

## 图

- 图 D.1（第 3 页）：截图 images/appd/fig-d-1.png（200 dpi，-x 560 -y 1755 -W 1745 -H 950），不含图注；图内标注译文补在图注末尾。
- 图 D.2（第 4 页）：截图 images/appd/fig-d-2.png（200 dpi，-x 730 -y 2050 -W 1600 -H 790），图内标注译文补在图注末尾。
- 图 D.3（第 5 页）：表格，排成 Markdown 表格（原表表头竖排），表前写 caption 行。
- 图 D.4（第 7 页）：表格，排成 Markdown 表格。原表「RAID level」列含编号和名称两栏，译文拆成两列，第二列表头留空。
- 图 D.5（第 9 页）：截图 images/appd/fig-d-5.png（200 dpi，-x 915 -y 2105 -W 1555 -H 415），图内标注译文补在图注末尾。
- 图位置：图 D.1、D.4 按引用处就近放置；图 D.4 放在 RAID 2 条目之后、RAID 3 条目之前（与原书版面一致）。

## 原书疑点

1. 图 D.3 图注「the time to transfer one sector of 512 KB」：扇区一般为 512 字节，按 512 KB 计算的每秒 I/O 次数也与表中 47、285 对不上（SATA：16 ms + 5.1 ms ≈ 21 ms → 约 47 次/秒，传输时间可忽略，应为 512 字节）。照录原书「512 KB」，请确认。
2. 正文说 SATA 盘片「use four or five of them」，SAS「using smaller platters and many fewer of them」，但图 D.3 两种驱动器的盘片数都是 4，前后不一致，照译。
3. 带宽对比：按正文数字，DRAM 每 GB 带宽为 16,000/4 = 4000 MB/s/GB，磁盘为 200/600 ≈ 0.33，比值约 12,000，原书写「6000 times」；每美元带宽比值 (16,000/200)/(200/400) = 160，与原书一致。照录 6000。
4. 「Flash … latency is 100 to 1000 times faster than disk」译为延迟是磁盘的 1/1000～1/100；「15 to 20 times cheaper than DRAM」译为 DRAM 的 1/20～1/15。
5. 「the focus of this chapter」（D.1 节）系沿用旧版章的说法，译为「本附录的主题」。
6. 引用的图 D.22（第 D-45 页）不在本部分，写作链接 [图 D.22](#fig-d-22)，页码照录。
7. 面密度公式原书为「Tracks/Inch on a disk surface × Bits/Inch on a track」，译成带说明的分式。
8. 参考文献引注原书为方括号［作者 年份］，译文用全角方括号照录，避免与 Markdown 链接冲突。
9. 图 D.4 RAID 2 缺点栏「~ Log 2 check storage overhead」原文含义不清（应指与 log₂ 数据盘数成比例），照录为「约为 Log 2」。

## 新定术语

| 英文 | 译法 |
|---|---|
| areal density | 面密度（与第 1 章一致） |
| access time gap | 访问时间鸿沟 |
| sector-track-cylinder model | 「扇区—磁道—柱面」模型 |
| seek time | 寻道时间 |
| serpentine fashion | 蛇形顺序 |
| command queue / queue depth | 命令队列 / 队列深度 |
| platter / form factor | 盘片 / 外形规格 |
| Serial ATA / Serial Attach SCSI | 串行 ATA（SATA）/ 串行连接 SCSI（SAS） |
| disk array / striping | 磁盘阵列 / 条带化（striping） |
| check disk | 校验盘 |
| mirroring / shadowing | 镜像 / 影子 |
| parity / even parity | 奇偶校验 / 偶校验 |
| bit-/block-interleaved (distributed) parity | 位交叉 / 块交叉（分布式）奇偶校验 |
| small write | 小写；small read 译「小读」 |
| striped mirrors / mirrored stripes | 条带化的镜像 / 镜像的条带 |
| row-diagonal parity (RAID-DP) | 行-对角线奇偶校验（RAID-DP） |
| reconstruction | 重建 |
| fault / error / failure | 故障 / 错误 / 失效（与手册一致） |
| latent error / effective error | 潜在错误 / 有效错误（下一部分使用，建议统一） |
| service specification | 服务规范 |
| specified behavior / actual behavior | 规定行为 / 实际行为 |
| IFIP Working Group 10.4 | IFIP 第 10.4 工作组 |
| IEEE Computer Society Technical Committee on Fault Tolerance | IEEE 计算机学会容错技术委员会 |
