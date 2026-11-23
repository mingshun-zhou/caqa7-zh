# 附录 B 校对记录（09-app-b-07.Rmd）：习题（后半）

页段：底本/appendix-b.pdf 第 61–70 页。第 61–68 页印有 B 字母页码（B-61～B-68）。第 69 页是空白页（「This page intentionally left blank」），第 70 页是附录 C 的目录页（印 C-2 等页码），都不属于附录 B，跳过。因此本部分实际内容在第 61–68 页，到附录 B 结束。附录 B 的习题标题、B.7 结论、B.8 历史回顾及补充参考文献都在第 60 页，由上一部分译出；本附录没有单独的「参考文献」节。

起止：第 61 页开头「accesses). The latencies (in CPU cycles) … main memory access with cache disabled, 105 cycles.」是习题 B.1 题干从第 60 页延续过来的半段，不译。本文件从 B.1 (a)「When you run a program with an overall miss rate of 3%…」开始，到 B.15 (b)「…share data and code between processes?)」结束。

## 图

图 B.30～B.35 都是数据不多的表格，全部排成 Markdown 表格，表前写 caption 行，没有截图。

- 图 B.30（第 62 页）：放在 B.2 之后。表中「….」照录为「……」。
- 图 B.31（第 62 页）：放在 B.3 题干之后、(a) 之前。原表第二行写作「Tag | Array 5 units」，显然是「Tag array | 5 units」排错了列，译作「tag 阵列 | 5 单位」。「Miscellaneous array」译「其他阵列」，按题干应指替换阵列。
- 图 B.32（第 65 页）：放在 B.8 题干之后。
- 图 B.33（第 66 页）、图 B.34、图 B.35（第 67 页）：放在 B.13 之后。B.35 的后两列原书为空白待填，照录为空列。

## 原书疑点

1. 图 B.33 图注写「TLB contents (problem B.12)」，但引用它的是习题 B.13（第 7 版习题重新编号后未改）。译文照录「习题 B.12」，请确认是否改为 B.13。
2. 习题 B.3：说明「Estimate the memory system (cache + memory) power usage … Provide answers for the LRU, FIFO, and random replacement policies.」在原书中排在 (h) 之后，按意思应是 (a)～(h) 之前的总要求。译文保持原书位置。
3. 习题 B.8 分值为 [5/5/5]，但有 (a)～(d) 四个小题，(d) 没有分值和章节标注；(a)～(c) 的章节号原书写作「< B3 >」，译文统一为 <B.3>。题干「each has 512 4-byte-wide integer elements」与图 B.32 每个数组 2048 字节一致。
4. 习题 B.5、B.14 分值原书末尾多一个斜杠（[10/10/10/10/]、[15/15/15/15/]），译文删去。
5. 习题 B.4 周期公式原书写作 10 + 5⌈B/8 − 1⌉，按页面图录为 LaTeX，并核对 8 字节为 10 周期、12 字节为 15 周期，与原文一致。代码照录（包括原书的缩进和「... #define」写法），注释译文另起一行给出。
6. 习题 B.11 题干原书以小写「excluding」开头，照意译出。
7. 习题 B.6 中「page B-5」照录为「第 B-5 页」。
8. 习题 B.5 题干较长，译文把 L1、L2 和主存的参数分成三条列表，信息逐项核对，未增删。

## 新定术语

| 英文 | 译法 |
|---|---|
| data / tag / replacement array, subarray | 数据阵列 / tag 阵列 / 替换阵列，子阵列 |
| power consumption weight | 功耗权重 |
| way hit / way miss / way predictor | 路命中 / 路失效 / 路预测器 |
| inclusive / exclusive hierarchy | 包含式层次 / 互斥式（exclusive）层次 |
| merging write buffer | 合并写缓冲（与手册一致） |
| write-back on hits, write-allocate on misses | 写命中时写回，写失效时写分配 |
| pathological case | 病态情形 |
| (micro) translation lookaside buffer | （微）转换后备缓冲器（TLB） |
| entry valid / present | 表项有效 / 在内存中 |
| protection ID | 保护 ID |
| supervisor mode | 管态 |
| microkernel / monolithic operating system | 微内核 / 宏内核操作系统 |
| Hewlett-Packard Precision Architecture (HP/PA) | 惠普精密体系结构（HP/PA） |

