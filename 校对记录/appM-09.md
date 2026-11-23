# 附录 M 校对记录（09-app-m-09.Rmd）：M.8 参考文献后半、M.9 及其参考文献、M.10 前半

页段：底本/appendix-m.pdf 第 81–90 页（书页 M-81～M-90），全部是附录 M 的页面，没有混入其他附录的页。

- 开头：第 80 页末条 Hamilton（April 2017）在第 80 页结束，第 81 页从新条目「Hölzle, U. [2010]. "Brawny cores still beat wimpy cores…」开始，本文件从这一条译起（M.8 参考文献续，不重复写参考文献标题），到「Vahdat, A., … "Scale-out networking in the data center"…」为止。
- 第 82 页起是 M.9「Historical Perspectives and References」（第 7 章 DSA 的历史回顾），写作 `## 历史回顾与参考文献 {#sec-m-9}`；原书标题未注章号，照原书不加。其参考文献写作 `### 参考文献 {- #sec-m-9-references}`，与 sec-m-2～sec-m-6 一致。
- 第 87 页起是 M.10，写作 `## 磁存储、RAID 和 I/O 总线的历史（附录 D） {#sec-m-10}`；小标题 Magnetic Storage、RAID、I/O Buses and Controllers 用 `### … {-}`。标题里的附录 D 写成链接 [附录 D](#app-d) 会破坏标题，故标题中用纯文本，正文中「As mentioned in Appendix D」写成链接。
- 结尾：第 90 页最后一段「The ubiquitous microprocessor inspired…」在本页结束于「…It was later standardized by the IEEE.」，不跨页。第 91 页从「There have been several candidates to be the successor to SCSI…」开始，留给下一部分。

## 图

本段没有图。

## 原书疑点

1. M.9 第二段「CNAPS chips contained a 64 SIMD array of 16-bit by 8-bit multipliers」，译作「由 64 个 16 位 × 8 位乘法器组成的 SIMD 阵列」。
2. M.9 说 IPU 名称「The earliest use we can find is 1999, when the Sony Playstation…」，参考文献对应条目是 PS2 的 Emotion Engine；正文照译「Playstation」。M.9 段首「custom neural network ASICs go back at least 25 years」是第 6 版旧说法，照译。
3. M.10 多处保留旧版时间说法（「In 2001」「In 2006」「It remains to be seen whether … iPODs」「RAID was a $30 billion industry in 2006」），照译。第 88 页 1.8 英寸驱动器「that market chose Flash」照译。
4. M.10 Winchester 段原文「benefited from two related properties. First, …」只有 First，没有显式 Second；译文把「Since the disk was fixed…」一句作为「其次」补出，内容未增。
5. M.10 第 88 页「Disk designers concluded that disks must improve at 60% per year」，原文未说明指面密度，结合上下文（areal density gap）译作「面密度必须每年提高 60%」。
6. 参考文献：抽取乱码已按页面图改正，页码中的「e」改为连接号「–」；「¼」改为「=」，「þ」改为「+」，「w krste」恢复为「~krste」；「MemorydA White Paper」改为「Memory—A White Paper」（原书引号未闭合，照录）；Asanović、Avižienis、Nikolić 的变音符号按页面图补回；Lee et al. 2016 条中「Avizienis」「Nikolic」「Asanovic」原书即无变音符号，照录。Tensor-flow、Rau and Fisher「J. Supercomput. 235」等照录。

## 新定术语

| 英文 | 译法 |
|---|---|
| sequencer | 定序器 |
| systolic multiply-accumulate chip | 脉动乘累加芯片 |
| lane（向量部件） | 车道（与第 4 章一致） |
| bunch (batch) | 束（bunch，即批） |
| Image Processing Unit (IPU) | 图像处理单元 |
| mass storage | 大容量存储 |
| cartridge（磁带） | 磁带盒 |
| serpentine recording | 蛇形记录 |
| helical scan | 螺旋扫描 |
| air-bearing read/write head | 空气轴承读写头 |
| moving-head disk | 动头磁盘 |
| areal density | 面密度（与附录 D 一致） |
| Winchester disk | 温彻斯特（Winchester）磁盘 |
| (giant) magnetoresistive head | （巨）磁阻磁头 |
| small form factor (SFF) | 小外形尺寸（SFF） |
| rotating / rotated parity | 轮转奇偶校验 |
| hot swap | 热插拔 |
| Network-Attached Storage | 网络附加存储 |
| intelligent device | 智能设备 |
| track buffer / read ahead / connect/disconnect | 磁道缓冲 / 预读 / 连接/断开 |
| SCSI string | SCSI 链 |
