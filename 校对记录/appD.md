# 附录 D 统稿记录：存储系统

底本：底本/appendix-d.pdf，共 70 页。第 1–68 页印着 D 字母页码（第 1 页是标题页），都已译出。第 69 页是空白页，第 70 页是附录 E 的节目录，这两页跳过。本附录在 D.11 节之后没有单独的参考文献节，所以不设 `## 参考文献`。

## 文件

| 文件 | 行数 | 页段 | 内容 |
|---|---:|---|---|
| 09-app-d-01.Rmd | 130 | 1–10（含 11 页前 4 行） | 附录标题 {#app-d}、章首引语、D.1、D.2、D.3 开头 |
| 09-app-d-02.Rmd | 157 | 11–20 | D.3 后半、D.4 前半 |
| 09-app-d-03.Rmd | 258 | 21–30 | D.4 末尾、D.5 前半 |
| 09-app-d-04.Rmd | 287 | 31–40（含 41 页顶两行公式） | D.5 后半、D.6、D.7 前半 |
| 09-app-d-05.Rmd | 232 | 41–50 | D.7 后半～D.11、习题开头至 D.1 a |
| 09-app-d-06.Rmd | 281 | 51–60 | D.1 b～案例研究 5 部件清单前半 |
| 09-app-d-07.Rmd | 228 | 61–68 | 案例研究 5 后半～案例研究 7（D.19～D.31） |
| 合计 | 1573 | | |

## 衔接检查（对照 PDF 各页首末行）

- 第 10/11 页：Laprie 定义引文第一段跨页，由 01 完整译出；02 从第二段「When a fault occurs…」接排，无漏无重。
- 第 20/21 页：第 20 页以「…some RAID organization in their storage system.」结束；03 以图 D.13 和「Efforts that are more recent…」开头，无漏无重。
- 第 30/31 页：M/M/1 假设列表前 4 条在 03，后 2 条在 04，无漏无重。
- 第 40/41 页：04 补译了第 41 页顶部两行 ATA 控制器公式，05 从「The next link in the chain is the disks themselves.」开始，无重复。
- 第 50/51 页：**D.1 子题 b～e 重复**。05 按跨页规则译了 b～e，06 也从 b 开始译。已删去 05 末尾的 b～e（4 道子题），保留 06 的版本，05 以 D.1 a 结束。
- 第 60/61 页：部件清单在列表项之间断开，无漏无重。

## 结构检查

- 01 第一行为 `# 存储系统 {#app-d}`。
- 节锚点 sec-d-1 ～ sec-d-11 齐全，各出现一次；习题节为 `{- #sec-d-exercises}`，案例研究 1～7 为 `### … {-}`。
- 图 D.1～D.29 的锚点 fig-d-1 ～ fig-d-29 全部定义，各一次。截图 21 张：D.1、2、5、7、8、9、10、13、14、15、16、17、19、22、23、24、25、26、27、28、29，文件都在 images/appd/，无缺失。排成 Markdown 表格的 8 个：D.3、4、6、11、12、18、20、21。另有无编号小表 4 张（D.9 节两张读请求表，D.24、D.28 题内各一张）。
- 本附录内链接 #fig-d-n 全部能对上；外部链接 #app-b、#app-f、#app-m 在 09-app-b-01、09-app-f-01、09-app-m-01 中有定义。

## 统稿时统一的术语和写法

| 英文 | 统一为 | 改动 |
|---|---|---|
| reconstruction（RAID） | 重建 | 03 中「重构」4 处改为「重建」（含图 D.14 图注的 Reconstruction 标注）。07 习题 D.27「重构出正确的数据」是一般用语，保留 |
| row-diagonal parity | 行-对角线奇偶校验（RAID-DP） | 05 中「行-对角奇偶校验」改 |
| server（生产者-服务者模型、排队论） | 服务器 | 02 中「服务者」改为「服务器」，与 03、04 和图内标注 Server 的译文一致 |
| Server utilization / Arrival rate / Utilization（公式中的普通词） | 服务器利用率 / 到达率 / 利用率 | 04 公式和正文中的英文改为中文，与 03 的约定一致；Time_server、Time_queue、N_servers、Prob 等符号保留英文 |
| mock disk / mock storage system | 假想磁盘 / 假想的存储系统 | 06 中 D.3 g 的「模拟磁盘」和图 D.26～D.28 图注的「模拟存储系统」改，与 05 的 D.1 一致；03 中故障注入用的 emulated disk 仍译「模拟磁盘」 |
| raw device (interface) | 裸设备（接口） | 05 中「原始设备接口」改，与 06 一致 |
| MB/sec、GB/sec、Gbits/sec（正文） | MB/s、GB/s、Gbit/s | 04、05 正文和图 D.18 表头改；公式内部单位照原书 |

Internet Archive 一节 IOPS 计算公式中的量名（Maximum IOPS for CPU、I/O time 等）在 04、05 中都保留英文，前后一致，未改。

## 全附录新定术语（汇总）

| 英文 | 译法 |
|---|---|
| areal density | 面密度 |
| access time gap | 访问时间鸿沟 |
| command queue / queue depth | 命令队列 / 队列深度 |
| platter / form factor | 盘片 / 外形规格 |
| Serial ATA / Serial Attach SCSI | 串行 ATA（SATA）/ 串行连接 SCSI（SAS）；图 D.18 表中写「串行 SCSI（Serial Attach SCSI）」 |
| striping / stripe / chunk / pattern | 条带化 / 条带 / 条块（chunk）/ 模式（pattern） |
| check disk | 校验盘 |
| mirroring / shadowing | 镜像 / 影子 |
| bit-/block-interleaved (distributed) parity | 位交叉 / 块交叉（分布式）奇偶校验 |
| small write / small read | 小写 / 小读 |
| striped mirrors / mirrored stripes | 条带化的镜像 / 镜像的条带 |
| row-diagonal parity | 行-对角线奇偶校验（RAID-DP） |
| reconstruction / offline / online reconstruction | 重建 / 离线重建 / 在线重建 |
| hot spare | 热备盘 |
| window of vulnerability | 易损窗口 |
| fault / error / failure | 故障 / 错误 / 失效 |
| latent / effective error, error latency | 潜在错误 / 有效错误，错误延迟 |
| transient / intermittent / permanent / hard fault | 瞬时 / 间歇 / 永久 / 硬故障 |
| service specification, specified / actual behavior | 服务规范，规定行为 / 实际行为 |
| fault injection, quality-of-service metrics | 故障注入，服务质量指标 |
| producer-server model | 生产者-服务器模型 |
| entry / system response / think / transaction time | 输入时间 / 系统响应时间 / 思考时间 / 事务时间 |
| I/O rate / data rate | I/O 速率 / 数据速率 |
| queuing theory, Little's law | 排队论，Little 定律 |
| steady state / equilibrium / flow-balanced | 稳态 / 平衡状态 / 流量平衡 |
| queue / waiting line / server | 队列 / 等待线 / 服务器 |
| server utilization, traffic intensity, queue discipline | 服务器利用率，业务强度，排队规则 |
| (squared) coefficient of variance | 方差系数（的平方） |
| memoryless, Poisson distribution / process | 无记忆性，泊松分布 / 泊松过程 |
| average residual service time | 平均剩余服务时间 |
| interarrival time | 到达间隔时间 |
| infinite / finite population model | 无限总体模型 / 有限总体模型 |
| point-to-point link | 点到点链路 |
| block server / filer | 块服务器 / 文件服务器（filer） |
| logical unit / logical volume / physical volume | 逻辑单元 / 逻辑卷 / 物理卷 |
| storage area network, NAS | 存储区域网络，网络附加存储（NAS） |
| synchronous / asynchronous I/O | 同步 I/O / 异步 I/O |
| Fibre Channel, disk shelf, clustered failover | 光纤通道（FC），磁盘架，集群故障切换 |
| five nines, availability class | 五个 9，可用性等级 |
| LBA, settle time | 逻辑块地址（LBA），稳定时间 |
| head / cylinder switch time, minimal transfer time | 磁头 / 柱面切换时间，最小传输时间 |
| mock disk, raw device | 假想磁盘，裸设备 |
| performability, MTDL | 性能可用性，平均数据丢失时间（MTDL） |
| bit rot, disk scrubbing, bit flip | 位腐烂，磁盘擦洗，位翻转 |
| sorted run, disk efficiency | 顺串（run），磁盘效率 |

## 全附录疑点汇总（原书问题，译文均照录，除另注明）

数字与计算：

1. 图 D.3 图注「one sector of 512 KB」：按表中 47、285 次/秒推算应为 512 字节（appD-01）。
2. D.2 节：按正文数字，DRAM 每 GB 带宽约为磁盘的 12,000 倍，原书写 6000 倍（appD-01）。
3. D.7 节：I/O 总线上限 18,600 IOPS，2 × 8300 = 16,600，疑为笔误（appD-04）。
4. D.7 节：磁盘成本 40 × 4 × 375 = 60,000 美元，占 84,500 美元约 71%，原书写「almost 60%」；成本式中的 1500 美元在假定中无出处（appD-05）。
5. D.5 节双磁盘例题末句「mean service time … 1.4 times」，按 23.8/16.7 比的是响应时间（appD-04）。
6. M/M/m 的 Prob_tasks≥N 公式分子原书为 N × Utilization^N，例题代入用 (2 × 0.4)²，标准公式应为 (N × Utilization)^N（appD-04）。
7. D.5 节「服务器利用率 = 正在服务的任务数除以服务速率」与后面公式不符；第 28 页「Time_server 的公式只对泊松过程成立」应为 Time_queue（appD-03）。
8. D.9 节微软网站 22 小时不可用，按每年 5 分钟计约需 264 年，原书写 250 年（appD-05）。

旧版遗留与前后不一致：

9. D.4 节「第 1 章第 42 页的图 1.17」介绍 TPC-C，第 7 版图 1.17 讲 NRE 成本，无关；照录为纯文本（appD-02）。
10. 案例研究 3、5、6 说「图 D.3 中的 37 GB SCSI 磁盘」，第 7 版图 D.3 只有 2000 GB SATA 和 600 GB SAS（appD-06、appD-07）。D.25 又写 20 GB 卷，与 D.24 的 37 GB 不一致（appD-07）。
11. 「到 2011 年」「这项研究已有 20 年」「本书上一版」等时间说法沿用旧版（appD-02、appD-04）。
12. 正文说 SATA 盘装四五张盘片、SAS 少得多，图 D.3 两者都是 4 张（appD-01）。
13. Tertiary Disk 正文引 Talagala 2000，图 D.6 图注引 2000b；72,000 幅 / 70,000 多件（appD-02）。
14. TPC 原书写 Transaction Processing Council，正式名称为 Transaction Processing Performance Council（appD-02）。

笔误：

15. 第 42–43 页「NSF」应为 NFS，**译文已改**；「running NTFS or CIFS」中 NTFS 疑为 NFS，照录（appD-05）。
16. 第 25 页拆分公式乘号印成「∞」，**译文改为 ×**（appD-03）。
17. D.31「100 byte keys, with 10-byte records」，关键字与记录长度疑写反（appD-07）。
18. D.24 说 MD5 校验和 20 字节，D.27 说 MD5 输出 128 位（appD-07）。
19. D.6 题号处分值 [10/10/10/10]，子题各标 [20]；D.6 代码循环以 chunksize 为步长与 numchunks 比较（appD-06）。
20. 图 D.4 RAID 2 缺点栏「~ Log 2 check storage overhead」含义不清（appD-01）。
