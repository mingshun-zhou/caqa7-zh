# 附录 E 校对记录（统稿）：嵌入式系统

底本：底本/appendix-e.pdf，共 28 页。第 1–26 页属附录 E（第 1 页为标题页，第 2–26 页页眉印 E-2～E-26）。第 27 页为空白页，第 28 页是附录 F 的目录页，均跳过。附录 E 原书没有习题和参考文献，因此不设 sec-e-exercises、sec-e-references。

## 文件

| 文件 | 页段 | 内容 | 行数 |
|---|---|---|---|
| [09-app-e-01.Rmd](<../09-app-e-01.Rmd>) | 1–10 | 附录标题、章首引语、E.1 节、E.2 节至「媒体扩展」第一段 | 139 |
| [09-app-e-02.Rmd](<../09-app-e-02.Rmd>) | 11–20 | E.2 节末尾、E.3～E.6 节、E.7 节第一段 | 124 |
| [09-app-e-03.Rmd](<../09-app-e-03.Rmd>) | 21–26 | E.7 节其余部分、E.8 节 | 70 |

分部记录：[appE-01.md](<appE-01.md>)、[appE-02.md](<appE-02.md>)、[appE-03.md](<appE-03.md>)。

## 衔接核查

- 第 10/11 页：第 10 页末段「…(SIMD) or vector instructions.」在页内结束，第 11 页「Most graphics multimedia applications…」是新段落。两文件无漏译、无重复。
- 第 20/21 页：第 20 页 E.7 节首段「…exceeds the number of wired phones in use.」在页内结束，第 21 页「Not surprisingly…」是新段落。无漏译、无重复。
- 节标题与原书逐一核对：E.1 引言、E.2 信号处理与嵌入式应用：数字信号处理器、E.3 嵌入式基准测试程序、E.4 嵌入式多处理器、E.5 案例研究：索尼 PlayStation 2 的 Emotion Engine、E.6 案例研究：三洋 VPC-SX500 数码相机、E.7 案例研究：手机内部、E.8 结束语。锚点 sec-e-1～sec-e-8 齐全，首行 `# 嵌入式系统 {#app-e}`。
- 无编号小标题（均加 {-}）：实时处理；TI 320C55；TI 320C6x；媒体扩展；以功耗和效率为衡量指标；无线网络的背景知识；手机；手机标准及其演进。

## 统稿改动

1. 第 3 部分的截图原放在 images/appE/，与前两部分的 images/appe/ 不一致。已把 fig-e-15/16/17.png 移入 images/appe/，删除空目录 images/appE/，并改了 09-app-e-03.Rmd 中的三处路径。
2. Media extensions 统一译「媒体扩展」：09-app-e-03.Rmd 结束语中的「多媒体扩展」改为「媒体扩展」（原文 E.8 节就是 Media extensions）。
3. 图 E.1～E.17 的锚点 fig-e-1～fig-e-17 全部定义。其中 E.1、E.2、E.3、E.7、E.8、E.14 排成 Markdown 表格，其余 11 张是截图，文件都在 images/appe/。本附录内的链接（#app-e、#sec-e-N、#fig-e-N）都能对上。

## 全附录疑点（原书问题，译文照录或按正确意思译）

1. 第 5 页离散傅里叶变换：原书 $W_N^{kn}=e^{j2\pi kn/N}$，指数缺负号（通常为 $e^{-j2\pi kn/N}$）。照录。
2. 第 6 页「A code of rate m/n has m information bits for (m + n) check bits」与后文「1/2 码率每 2 位有 1 个信息位」矛盾，应为 n 位码字含 m 个信息位。照译。
3. 第 16–17 页：正文说 Graphics Synthesizer 的嵌入式 DRAM 接口宽 2048 位，图 E.11 图注说 1024 位传输，图中画两条 1024 位通路和一条 512 位通路。两处照录。
4. 第 18 页图 E.12 图注先讲并行模式、后讲串行模式，图和正文都是先串行后并行。照图注原文译。
5. 第 25 页 CDMA：每位展宽为「最小频率的 11 倍」，而 9600 bit/s 到 1.25 Mbit/s 约为 130 倍，对不上。照录。
6. 第 11 页末句「two's complement arithmetic can add a small positive number to a large positive.」句子不完整（意思应是两个正数相加溢出成负数），照字面译。
7. 笔误：第 11 页「EMBCC」应为 EEMBC，已按 EEMBC 译；第 24 页「gallium arsinide」应为 arsenide，译「砷化镓」；第 24 页「drops offs」按「减弱」译；第 3 页「until the line is unlocked」缺句号。
8. 文献引用 Okada et al. 1999、Grice and Kanellos 2000、National Research Council 1997、Groe and Larson 2000 在原书是链接，本附录没有参考文献节，保留为纯文本。
9. 第 15、16 页：MXP 芯片和 Emotion Engine 都是 1350 万个晶体管，两处照录。各处数据（1999、2000、2001 年的市场数字等）均为原书旧数据，照译。

## 新定术语（全附录统一）

| 英文 | 译法 |
|---|---|
| embedded computer system | 嵌入式计算机系统 |
| real-time constraint / hard real-time / soft real-time | 实时约束 / 硬实时 / 软实时 |
| worst-case execution time (WCET) | 最坏情况执行时间（WCET） |
| line locking | 行锁定 |
| system on a chip (SOC) | 片上系统（SOC） |
| digital signal processor (DSP) | 数字信号处理器（DSP） |
| multiply-accumulate (MAC) | 乘累加（MAC） |
| fixed-point / blocked floating point | 定点 / 块浮点 |
| guard bits | 保护位 |
| forward error correction (FEC) / trellis code | 前向纠错（FEC）/ 网格码 |
| compare-select | 比较—选择 |
| idle domain | 空闲域 |
| instruction packet | 指令包 |
| predication | 谓词执行 |
| media extensions | 媒体扩展（全附录统一，不用「多媒体扩展」） |
| partitioned add | 分段加法 |
| paired single operation | 成对单精度运算 |
| saturating arithmetic | 饱和运算 |
| kernel（基准测试） | 核心程序 |
| performance per watt | 每瓦性能 |
| display list | 显示列表 |
| scratchpad memory (SPRAM) | 便笺存储器（SPRAM），与手册一致 |
| Emotion Engine / Graphics Synthesizer / EnergyBench / ramset | 保留英文 |
| bit error rate (BER) / signal-to-noise ratio (SNR) | 误码率（BER）/ 信噪比（SNR） |
| path loss / shadow fading / multipath fading | 路径损耗 / 阴影衰落 / 多径衰落 |
| spread spectrum | 扩频 |
| cell / handoff | 蜂窝 / 越区切换 |
| CDMA / TDMA / GSM / AMPS | 码分多址 / 时分多址 / 全球移动通信系统 / 高级移动电话服务 |
| die | 晶片（与手册一致） |
