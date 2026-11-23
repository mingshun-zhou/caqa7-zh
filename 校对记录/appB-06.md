# 附录 B 校对记录（09-app-b-06.Rmd）：B.5 节后半、B.6～B.8 节、习题开头

页段：底本/appendix-b.pdf 第 51–60 页（书页 B-51～B-60）。这 10 页都印有 B 字母页码，没有混入其他附录的页。

起止：第 50 页末段以「or protection would be circumvented.」完整结束，第 51 页从新段落「Protection can be escalated, depending on the apprehension of the computer designer or the purchaser.」开始，本文件从这一句起译。第 60 页末尾是习题 B.1 的题干，跨到第 61 页，到「main memory access with cache disabled, 105 cycles.」为止，已经译完。第 61 页从小题 B.1 a. 开始，由下一部分翻译。

## 图

- 图 B.26（第 53 页）：截图 images/appb/fig-b-26.png（200 dpi，-x 870 -y 930 -W 1650 -H 1220），不带图注。图内标注的译文补在图注末尾。
- 图 B.27（第 56 页）：截图 images/appb/fig-b-27.png（200 dpi，-x 190 -y 340 -W 2200 -H 1252），包含底部的「Main memory」，不带图注上方的横线。图内标注的译文补在图注末尾。
- 图 B.28（第 58 页）：参数表，排成两列的 Markdown 表格。
- 图 B.29（第 59 页）：排成 Markdown 表格。原表有「Misses / Time → % Time due to application misses / % Time due directly to OS misses」多层表头，Markdown 不支持合并单元格，所以改成单层表头，用「上层：下层」的写法。数值逐项核对过：每行最后一列等于「OS 与应用程序冲突」加上四项「OS 失效直接所致时间」，例如 Pmake 4.8 + 10.9 + 1.0 + 6.2 + 2.9 = 25.8。图注较长，整段写在 caption 行里。

## 原书疑点

1. 第 55 页说 Opteron 64 位模式的页大小是「4 KiB, 2 MiB, and 4 MiB」，第 57 页的页大小位又说「4 KiB pages or 4 MiB pages」，图 B.28 写的是「2 MiB or 4 MiB pages」。AMD64 长模式实际用 2 MiB 大页（4 MiB 是 32 位非 PAE 模式的大页）。译文照录原书，未改。
2. 第 56 页说 64 位页表项「前 12 位保留，接下来 52 位是物理页帧号，最后 12 位是保护和使用信息」，三者相加是 76 位，超过 64 位。照原书译出，未改。
3. 第 60 页 B.8 节说历史回顾「covers both this appendix and Chapter 3」。按内容（Cache、虚拟存储、虚拟机）看，对应的应是第 2 章，但照原书写「第 3 章」。
4. 图 B.27 图内「Page-mp entry」应为 Page-map entry 的排印错误，按 Page-map 译「页映射表项」。
5. 第 60 页补充参考文献「Gupta, S. Xiang, P.」中 S. 后缺逗号，已补；页码中的「e」（抽取乱码）改为连接号。图 B.29 引文中的「October 12e15」「162e174」同样改为连接号。
6. 第 57 页「64 − (4 × 9 + 12) or 16 bits」：pdftotext 把运算符抽成乱码，已按页面图恢复。
7. 第 58 页「IBM 360 (24–31 bits)」中的连接号抽成了「24e31」，已按页面图恢复。
8. B.5 节内「Adding Bounds Checking and Memory Mapping」等三个小标题字号比「A Segmented Virtual Memory Example …」小一级，排成四级标题（####）并加 {-}；后者与「A Paged Virtual Memory Example …」「Summary: …」排成三级标题。
9. Brooks 引语原书排在小标题之下，照原书位置排成引用块，书名《人月神话》后附英文原名。

## 新定术语

| 英文 | 译法 |
|---|---|
| ring（保护结构） | 环 |
| capability | 权能 |
| inner sanctum | 内层禁地 |
| Trojan horse | 特洛伊木马 |
| descriptor table / segment descriptor | 描述符表 / 段描述符 |
| global / local descriptor table | 全局描述符表 / 局部描述符表 |
| global / local address space | 全局地址空间 / 局部地址空间 |
| present bit / base field / access bit / attributes field / limit field | 存在位 / 基址字段 / 访问位 / 属性字段 / 界限字段 |
| reference bit / use bit | 引用位 / 使用位 |
| descriptor privilege level (DPL) | 描述符特权级（DPL） |
| conforming | 一致（段） |
| expand-down | 向下扩展 |
| word count | 字数 |
| call gate | 调用门 |
| destination selector / destination offset | 目标选择子 / 目标偏移 |
| requested protection level | 请求保护级 |
| mutually suspicious | 互相猜疑 |
| canonical form | 规范形式 |
| page-map level 4 | 第 4 级页映射 |
| page-directory pointer table / page-directory table | 页目录指针表 / 页目录表 |
| physical page frame number | 物理页帧号 |
| no execute | 禁止执行 |
| page level cache disable / write through | 页级 Cache 禁止 / 页级写直达 |
| user/supervisor | 用户/管理（与第 2 章「用户/管理模式」一致） |
| superpage | 超级页 |
| year-to-date | 年初至今（累计） |
