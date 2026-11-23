# 附录 E 校对记录（09-app-e-01.Rmd）：附录标题、E.1 节、E.2 节

页段：底本/appendix-e.pdf 第 1–10 页（书页 E-1～E-10）。第 1 页是附录标题页（标题、作者署名、章首引语，无页眉页码），第 2–10 页页眉均印 E 字母页码，没有混入其他附录的页。

起止：从附录标题「Embedded Systems / By Thomas M. Conte」、章首引语（Popular Mechanics, March 1949）和 E.1 节「Embedded computer systems—computers lodged in other devices …」开始；到第 10 页末尾「媒体扩展」小节第一段「… commonly called single-instruction multiple-data (SIMD) or vector instructions.」为止（该段在第 10 页内结束）。第 11 页「Most graphics multimedia applications use 32-bit floating-point operations.」起由下一部分翻译；图 E.7 在第 11 页，不属于本部分。

## 图

- 图 E.1（第 4 页）：表格，排成 Markdown 表格，表前 caption 行。
- 图 E.2、图 E.3（第 6 页）：表格，排成 Markdown 表格。
- 图 E.4（第 7 页）：截图 images/appe/fig-e-4.png（200 dpi，-x 865 -y 2160 -W 1700 -H 740），不含图注；图内标注译文补在图注末尾。
- 图 E.5（第 9 页）：截图 images/appe/fig-e-5.png（200 dpi，-x 875 -y 1760 -W 1690 -H 1155），图内标注译文补在图注末尾。
- 图 E.6（第 10 页）：截图 images/appe/fig-e-6.png（200 dpi，-x 705 -y 340 -W 1665 -H 230），图内标注译文补在图注末尾。图 E.6 在原书第 10 页顶部，译文放在引用它的段落之前（与版面一致）。
- 作者署名「By Thomas M. Conte, North Carolina State University」译为标题下一行「本附录作者：……」。

## 原书疑点

1. 离散傅里叶变换公式：原书印 $W_N^{kn} = e^{j2\pi kn/N} = \cos(2\pi kn/N) + j\sin(2\pi kn/N)$，指数缺负号（通常为 $e^{-j2\pi kn/N}$，相应为 cos − j sin），照录原书。
2. 「A code of rate m/n has m information bits for (m + n) check bits」：按通常定义应是 n 位码字中含 m 个信息位（与后文「1/2 码率每 2 位有 1 个信息位」一致），原文表述有误，照译。
3. E.1 节「until the line is unlocked」句末缺句号；例题「Fixedpoint numbers」缺连字符；E.3 节（下一部分）有「EMBCC」应为 EEMBC 的笔误，供后续参考。
4. 例题数字核对：0100 1000 0000 1000 = 2^14 + 2^11 + 2^3 = 18,440；定点 2^-1 + 2^-4 + 2^-12 = 2305/4096 ≈ 0.56274，与原书一致。
5. 「the other primary functional units」「1- cycle penalty」原书「1- cycle」含多余空格，照意译为「多花 1 个周期」。
6. 「discussed in the next subsection」指「Real-Time Processing」小节，照译「下一小节」；引用 E.4 节写成链接 [E.4 节](#sec-e-4)。
7. 「Thus, there are now no NOPs that are needed」照译「不再需要 NOP」。

## 新定术语

| 英文 | 译法 |
|---|---|
| embedded computer system | 嵌入式计算机系统 |
| real-time constraint / hard real-time / soft real-time | 实时约束 / 硬实时 / 软实时（与第 1 章一致） |
| worst-case execution time (WCET) | 最坏情况执行时间（WCET） |
| hint bits | 提示位 |
| line locking | 行锁定 |
| core plus ASIC / system on a chip (SOC) | 「核加 ASIC」/ 片上系统（SOC） |
| digital signal processor (DSP) | 数字信号处理器（DSP） |
| multiply-accumulate (MAC) | 乘累加（MAC） |
| fixed-point / blocked floating point | 定点 / 块浮点 |
| guard bits | 保护位 |
| forward error correction (FEC) | 前向纠错（FEC） |
| trellis code | 网格码（trellis code） |
| compare-select | 比较—选择 |
| idle domain / Idle Control Register (ICR) / Idle Enable bit | 空闲域 / 空闲控制寄存器（ICR）/ 空闲使能位 |
| ramset | 保留英文 |
| compare, select, and store unit (CSSU) | 比较、选择和存储部件（CSSU） |
| instruction packet | 指令包 |
| predication | 谓词执行 |
| media extensions | 媒体扩展 |
| partitioned add | 分段加法 |
| paired single | 成对单精度（与第 4 章一致，供下一部分用） |
