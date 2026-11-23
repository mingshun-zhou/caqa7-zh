# 附录 B 校对记录（09-app-b-01.Rmd）：B.1 节前半

页段：底本/appendix-b.pdf 第 1–10 页（书页 B-1～B-10）。第 1 页为附录标题页（标题与章首引语），第 2 页起为 B.1 节。第 1–10 页均印有 B 字母页码（第 1 页为标题页，无页眉），没有混入其他附录的页。

起止：从附录标题、章首引语和「This appendix is a quick refresher of the memory hierarchy」开始；到第 10 页末尾跨入第 11 页的段落「Such optimism is not allowed for writes. … In contrast, reads can access more bytes than necessary without fear.」为止（该段在第 11 页的后半部分已一并译出）。第 11 页下一段「The write policies often distinguish cache designs.」起由下一部分翻译。

## 图

- 图 B.1（第 3 页）：表格，排成 Markdown 表格，表前写 caption 行。
- 图 B.2（第 7 页）：截图 images/appb/fig-b-2.png（200 dpi，-x 880 -y 1250 -W 1650 -H 1255），不含图注和下方横线。图内英文标注的译文补在图注末尾。
- 图 B.3（第 8 页）：截图 images/appb/fig-b-3.png（200 dpi，-x 940 -y 2680 -W 1180 -H 128），图内标注译文补在图注末尾。
- 图 B.4（第 10 页）：表格，排成 Markdown 表格。原表是「相联度 → 两路/四路/八路 → LRU/随机/FIFO」三层表头，Markdown 不支持合并单元格，改为单层表头「两路 LRU」「两路随机」……，数值逐一核对。
- 开头的 36 个术语原书排成三栏列表，译文排成三栏表格，按原书顺序逐行照录，括号内附英文原词。

## 原书疑点

1. 第 3 页「a palt occurs」：palt 显然是 page fault 的排印错误，按上下文译作「缺页」。
2. 第 6 页把上一例题换算成每条指令失效数时写作「0.02 × (1.5) = 0.030」，但上一例题的失效率是 1%（0.01），按 0.01 应得 0.015；第二个例题又用「IC/1000 × 30 × 25」，失效开销成了 25（上一例题是 50）。原书数字前后不一致（30 × 25 与 15 × 50 都得 750，最终结果 IC × 0.75 恰好一致）。译文照录原书数字，未改。
3. 第 6 页公式中「Intruction × 1000」为 Instruction 的拼写错误，译文写作「指令数 × 1000」；此式写成「IC/1000 × 失效次数/(指令数 × 1000)」，严格说应为「每千条指令的失效数」，照原书结构录入。
4. 第 10 页「Figures A.32 and A.33 in Appendix A」：图 A.32、A.33 在附录 A 中，写成纯文本图号，附录链接写 [附录 A](#app-a)。「Section 1.9」按约定写纯文本「1.9 节」。
5. 第 10 页「a way is bank in a set associative cache」原文缺冠词，照意译为「组相联 Cache 中的一个存储体」。
6. 第 2 页提到「Chapter 7 in Computer Organization and Design」，照译「《计算机组成与设计》第 7 章」。
7. 原书「RISC V」统一写作 RISC-V。

## 新定术语

| 英文 | 译法 |
|---|---|
| memory stall cycles | 访存停顿周期（数） |
| block offset | 块内偏移（与第 2 章一致） |
| block frame / block frame address | 块帧 / 块帧地址 |
| tag field / index field | tag 字段 / 索引字段 |
| valid bit / dirty bit | 有效位 / 脏位（与第 2 章一致） |
| address trace | 地址踪迹 |
| page fault | 缺页（与第 3、6 章一致） |
| write allocate / no-write allocate | 写分配 / 写不分配 |
| write stall | 写停顿 |
| unified cache | 统一 Cache（与第 2 章一致） |
| misses per instruction | 每条指令失效数 |
| bit selection | 位选择 |
| pseudo-LRU | 伪 LRU（与第 2 章一致） |
| way | 路 |
| block placement / identification / replacement, write strategy | 块的放置 / 块的标识 / 块的替换，写策略 |
| Four Memory Hierarchy Questions | 存储层次的四个问题（小标题），Q1～Q4 译「问题 1」～「问题 4」 |

