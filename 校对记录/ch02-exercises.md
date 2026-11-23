# 第 2 章校对记录：案例研究与习题（PDF 第 66–81 页）

## 范围与格式

- 第 66 页上半是 2.8 节末尾和 2.9 节，不属本文件；本文件从第 66 页 “Case Studies and Exercises by Rajeev Balasubramonian, Norman P. Jouppi, Naveen Muralimanohar, and Sheng Li” 起。第 81 页为 “This page intentionally left blank”，第 82 页是第 3 章目录，均未译。
- 标题照第 1 章写成 `## 案例研究与习题（四位作者） {- #sec-2-exercises}`，作者名保留英文。
- 图 2.29 是 C 程序，放进 ```c 代码块，代码和注释都保留英文原样；图名用 `[图 2.29　…]{#fig-2-29 .caption}` 放在代码块前。原书跨两页（第二页标 “Figure 2.29 continued”），译文合成一个代码块。
- 图 2.30 截图：第 71 页 rot=270，200 dpi 渲染后顺时针旋转 90° 再裁，存为 images/ch02/fig-2-30.png。图注原文只有 “Sample output from the code in Figure 2.29.”，按手册「必要时在图注里补一句译文」补了图内标注的说明（上下两图、横轴步长、纵轴每次 load 延迟 ns）。如认为属增译，可删去句号后的部分。
- 2.17 的表格原书无图号，改成 Markdown 表格，不加 caption 和锚点；表内 Read X / Read Y 保留英文。
- 2.1 的 C 循环照页面缩进（原书几乎无缩进）放入代码块。
- 引用 2.7 节写 `[2.7 节](#sec-2-7)`，依赖其他组设好锚点。

## 疑似原书问题（均照原文译）

- 第 67 页 “this concept is illustrated here:” 后面原书没有任何示意图（直接接 “Here is a simple C loop”），疑似漏图（按代码应是一个 3×3 矩阵转置示意，未查旧版核实）。译文照译「如下所示：」，未补图。
- 2.1 “256·256”“B · B” 原书用中点，按乘号译成「256 × 256」「*B* × *B*」。
- 2.1 题头 [10/15/15/12/20] 与小题分值一致；2.21 题头 [12/12]，但 (b)(c) 标 [15]，且有三个小题，不一致，照印。
- 2.29 题号后分值印成 “20]”，少左方括号，译文补成 [20]。
- 案例研究 2 正文说 “You may need to change CACHE_MAX”，代码中只有 ARRAY_MAX / ARRAY_MIN，没有 CACHE_MAX，照原文。
- 2.4 “the x-axis lists the size of the array that is exercised”：图 2.30 的横轴实际是步长，数组大小是各条曲线；照原文译。
- 习题引言 “updates the CATCI 7.0 models” 中 CATCI 是 CACTI 的笔误，照原样保留；FT-CACTI 的链接是 …/FN-CACTI，名称不一致，照原样。
- 2.19 “assume the best supported”：省略了宾语，按上下文理解为工艺节点，译「采用所支持的最好的工艺」，请核。
- 2.20 “each additional 16-byte block … requires 16 cycles”：照译。
- 2.38 “reading or writing a cache line of size 64 bytes to Flash requires 2.56 J”：每 64 字节 2.56 J 明显过大，疑为 μJ 之误（未查旧版核实），照原文 2.56 J。
- 2.16 “16 x 4 chips or 4 x 16 chips” 中 x 两侧有空格，按语义（16 片 x4、4 片 x16）译。
- 2.33(a) 原文 “data I/Os” 译「数据 I/O」。
- 代码第 5 行 label 函数中 pdftotext 抽成 “i/10 48576”，按页面图还原为 `i/1048576`；`i=i -1` 还原为 `i=i-1`。
- 2.25 “Chip-kill” 断字，还原为 Chipkill。

## 新定术语（请全章统一）

| 英文 | 译法 |
|---|---|
| row major order | 行主序 |
| loop interchange / blocking | 循环交换 / 分块 |
| write-allocate, fetch-on-write | 写分配、写时取块 |
| hardware / software prefetcher；unit / nonunit stride | 硬件 / 软件预取器；单位步长 / 非单位步长 |
| outstanding prefetch | 尚未完成的预取 |
| cache pollution | Cache 污染 |
| memory channel | 存储通道 |
| rank | rank（保留英文） |
| DIMM | DIMM |
| x4 (by four) chip | x4（by four）芯片 |
| Precharge / Activate / column-read (CAS) command | 预充电（Precharge）/ 激活（Activate）/ 列读（CAS）命令 |
| burst / transfer time | 突发 / 传输时间 |
| row buffer hit / miss | 行缓冲命中 / 行缓冲失效 |
| memory controller | 存储控制器 |
| open-page / close-page policy | 开页策略 / 关页策略 |
| first-come, first-serve | 先来先服务 |
| speed grade / precharge exit mode | 速度等级 / 预充电退出模式 |
| background power | 背景功耗 |
| banked / pipelined cache | 多体 Cache / 流水化 Cache |
| pipestage | 流水段 |
| critical word first / early restart | 关键字优先 / 提前重启 |
| refill path | 回填通路 |
| merging write buffer | 合并写缓冲 |
| blocking / nonblocking cache | 阻塞 / 非阻塞 Cache |
| MPKI | MPKI（每千条指令失效次数） |
| off-chip memory | 片外存储器 |
| hibernation / standby | 休眠 / 待机 |
| SECDED | 纠正单个错误、检测两个错误（SECDED） |
| Chipkill | Chipkill |
| side channel / prime-probe | 旁路 / 填充—探测（沿用 2.4 节记录） |
| way prediction / way predictor | 路预测 / 路预测器 |
| Alloy Cache | Alloy Cache（保留英文） |
| hit/miss predictor | 命中/失效预测器 |
| Insertion / Promotion / Victim Selection | 插入 / 提升 / 牺牲块选择 |
| last-level cache | 最后一级 Cache |
| quality of service (QoS) | 服务质量（QoS） |
| NonUniform Cache Access (NUCA) | 非一致 Cache 访问（NUCA） |
| error-correcting code (ECC) | 纠错码（ECC） |
| leakage energy / dynamic energy | 漏电能耗 / 动态能耗 |
| gate off the power supply | 切断电源 |
| aggressive prefetcher | 激进的预取器 |

## 第二轮改写

- 按手册 2.5 节重写正文：2.1、2.20 的条件和案例研究 2 的三部分程序结构改成列表；案例研究 3 的背景说明加了「存储通道的组织」「读操作的命令序列」两个粗体引导语；2.15 的操作步骤、2.17 的开页/关页策略、2.30 的三个子策略改成列表；2.27、2.29 的 (i)–(iv) 分行写。题号、分值、节号、数字都没有改。
- 术语：2.27 是本文件第一次出现 tag，改成「tag（标签）」；2.31 第一次出现 last-level cache，改成「末级 Cache（LLC，Last-Level Cache）」，其后 2.34、2.35 写「末级 Cache」。新定术语表里「last-level cache｜最后一级 Cache」一行与全章用法不一致，以「末级 Cache」为准。
- 2.38 原文 “DRAM requires 0.5 nJ” 省略了宾语，第一轮译「DRAM 需要 0.5 nJ」意思不明，按并列结构补成「对 DRAM 读或写一个 Cache 行需要 0.5 nJ」，请核。
- 2.8、2.9 “experienced by a memory controller” 第一轮译「经历的」，改成「看到的」。
- 第一轮没有发现漏译和数字错误。
