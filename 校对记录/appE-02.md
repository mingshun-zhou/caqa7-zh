# 附录 E 校对记录（09-app-e-02.Rmd）：E.2 节末尾、E.3～E.6 节、E.7 节开头

页段：底本/appendix-e.pdf 第 11–20 页（书页 E-11～E-20），各页页眉都印 E 字母页码，没有混入其他附录的页。

- 开头：第 11 页「Most graphics multimedia applications use 32-bit floating-point operations.」。第 10 页最后一段「… commonly called single-instruction multiple-data (SIMD) or vector instructions.」在第 10 页内结束（其下是图 E.6），所以第 11 页开头是新段落，没有需要跳过的半段。注意第 11 页页眉印「E.3 Embedded Benchmarks」，但页首两段半仍属 E.2 节「媒体扩展」小节，接在 09-app-e-01.Rmd 之后。
- 结尾：第 20 页 E.7 节第一段「… the number of cell phones in use exceeds the number of wired phones in use.」，该段在第 20 页内结束。第 21 页「Not surprisingly, the cellular handset market …」由 09-app-e-03.Rmd 翻译。
- 节标题：E.3 嵌入式基准测试程序 {#sec-e-3}，E.4 嵌入式多处理器 {#sec-e-4}，E.5 {#sec-e-5}，E.6 {#sec-e-6}，E.7 案例研究：手机内部 {#sec-e-7}；无编号小标题「以功耗和效率为衡量指标 {-}」。

## 图

- 图 E.7（第 12 页，表格）：排成 Markdown 表格，表前 caption 行。表中 `*` 写作 `\*`；SPARC VIS「比较」栏原书「not =」写作「≠」；「AND/OR/XOR」原书为小型大写字母。
- 图 E.8（第 13 页，表格）：排成 Markdown 表格。
- 图 E.9、图 E.10（第 14 页）：截图 images/appe/fig-e-9.png（200 dpi，-x 960 -y 360 -W 1120 -H 765）、fig-e-10.png（-x 800 -y 1360 -W 1450 -H 650），不含图注和图注上方横线。图注末尾补了坐标轴、类别标注译文。
- 图 E.11（第 16 页）：截图 images/appe/fig-e-11.png（-x 525 -y 840 -W 1480 -H 1170），放在引用它的段落（跨第 16、17 页）中间，与版面一致；图注末尾补图内标注译文。
- 图 E.12（第 18 页）：截图 images/appe/fig-e-12.png（-x 1035 -y 2105 -W 1000 -H 625）。
- 图 E.13（第 20 页）：截图 images/appe/fig-e-13.png（-x 350 -y 340 -W 1835 -H 1040），含底部 RS-232 等标注。
- 截图都已用 read_image 检查，不缺边、不带图注。

## 原书疑点

1. 图 E.12 图注说「The first mode divides the work between the two units …（并行）The second mode uses CPU/VPU0 as a filter …（串行）」，而图中上面是 Serial connection、下面是 Parallel connection，正文也是先讲 serial 后讲 parallel，图注的先后与图相反。照原图注译出，未改。
2. 正文说 Graphics Synthesizer 的嵌入式 DRAM「has a 2048-bit-wide interface」，而图 E.11 图注说「allows 1024-bit transfers」，图中画的是两条 1024 位通路和一条 512 位通路。两处数字照录。
3. 第 11 页末句「two's complement arithmetic can add a small positive number to a large positive.」句子不完整（应是「……相加，得到负数结果」之类），照字面译为「可以把一个小正数加到一个大正数上」，未补出原文没有的结论，请对照纸本。
4. 第 11 页「the EMBCC benchmarks」为 EEMBC 的笔误，按 EEMBC 译。
5. EEMBC 全称原书写作「EDN Embedded Microprocessor Benchmark Consortium」，照录（09-app-e-01.Rmd 中另有 EEMBC 的写法，合并时可核对）。
6. MXP 处理器「each with its own cache (a total of 48 KB or 12 KB per processor)」照译；E.5 节说 Emotion Engine 有 13.5M 晶体管，E.4 节 MXP 芯片也是 13.5M 晶体管，两处照录。
7. 引用 [Okada et al. 1999] 在原书是文献链接，本附录无参考文献节，保留为纯文本。

## 新定术语

| 英文 | 译法 |
|---|---|
| paired single operation | 成对单精度运算（与第 1 部分「成对单精度」一致） |
| saturating arithmetic | 饱和运算 |
| kernel（基准测试） | 核心程序 |
| subcommittee（EEMBC） | 分委员会 |
| EnergyBench / Energymark | 保留英文 |
| performance per watt | 每瓦性能 |
| finite-state machine | 有限状态机 |
| voice-over-IP | IP 语音 |
| echo cancellation / voice activity detection | 回声消除 / 话音活动检测 |
| Emotion Engine / Graphics Synthesizer | 保留英文 |
| Graphics Interface | 图形接口 |
| display list | 显示列表 |
| scratchpad memory (SPRAM) | 便笺存储器（SPRAM） |
| double buffer | 双缓冲 |
| context identifier | 上下文标识符 |
| Image Processing Unit (IPU) | 图像处理部件 |
| charge-coupled device (CCD) | 电荷耦合器件（CCD） |
| progressive-scan | 逐行扫描 |
| frame buffer | 帧缓冲 |
| bus bridge | 总线桥 |
