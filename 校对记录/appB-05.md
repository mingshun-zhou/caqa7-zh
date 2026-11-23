# 附录 B 校对记录（09-app-b-05.Rmd）：B.4 节、B.5 节开头

页段：底本/appendix-b.pdf 第 41–50 页（书页 B-41～B-50）。这 10 页都印有 B 字母页码，没有混入其他附录的页。

起止：第 40 页末段（「…No optimization in this figure helps more than one category.」）在第 40 页内结束，第 41 页不含上一页延续的半段，从页首的图 B.18 开始。文件依次为图 B.18、B.4 节标题与章首引语（Kilburn et al., 1962）、「At any instant in time computers are running multiple processes…」。到第 50 页末段「Processes can be protected from one another by having their own page tables… or protection would be circumvented.」为止，该段在第 50 页内结束。第 51 页「Protection can be escalated…」起由下一部分翻译。

## 图

- 图 B.18（第 41 页）：表格，排成 Markdown 表格。原表 +、− 照录；Pentium 4L2 译作「Pentium 4 的 L2」。
- 图 B.19（第 42 页）：截图 images/appb/fig-b-19.png（200 dpi，-x 860 -y 1790 -W 1360 -H 1046），图内标注译文补在图注末尾。
- 图 B.20（第 43 页）：表格，排成 Markdown 表格。
- 图 B.21（第 44 页）：截图 images/appb/fig-b-21.png（-x 910 -y 340 -W 1240 -H 360）。
- 图 B.22（第 44 页）：表格，排成 Markdown 表格；首列表头原书为空，照留空。
- 图 B.23（第 45 页）：截图 images/appb/fig-b-23.png（-x 960 -y 2175 -W 1490 -H 785）。
- 图 B.24（第 47 页）：截图 images/appb/fig-b-24.png（-x 890 -y 2045 -W 1625 -H 760）。
- 图 B.25（第 49 页）：截图 images/appb/fig-b-25.png（-x 345 -y 345 -W 2190 -H 1825）。
- 所有截图已用 read_image 检查，不缺边、不带图注和横线。注意：本 PDF 用 pdftoppm -r 100 渲染的整页图与 -r 200 的坐标比约为 1:2.13（页面 972.96 × 1200 pt），不是 1:2。

## 原书疑点

1. 图 B.25：图中「L1 cache tag <43>」与「L1 tag compare address <28>」位数不一致。按物理地址 41 位、L1 索引 7 位、块内偏移 6 位，L1 tag 应为 28 位；<43> 疑为照搬 TLB tag <43> 的错误。截图照原书，正文未改。
2. 第 48 页「the high bit of the latter is sent to the L1 cache to act as an index」：页内偏移 13 位中，送往 L1 作索引的是高 7 位，不止一位，译作「高位部分」。
3. 第 42 页「Several general memory hierarchy ideas from Chapter 1 about caches」：Cache 的内容主要在第 2 章和本附录 B.1 节，「Chapter 1」可能有误，照译「第 1 章」。
4. 第 50 页「shrink by log 2n bits」：抽字与排版为 log 2n，按上下文应为 log₂n，译文写 $\log_2 n$。
5. 第 45 页反向页表例子：1 MiB = 8 × 512 MiB/4 KiB，即每项 8 字节（4 字节物理页地址 + 4 字节虚拟地址），与原文「the extra 4 bytes per page table entry are for the virtual address」一致；页表大小 (2^32^/2^12^) × 2^2^ = 2^22^ 字节 = 4 MiB，核对无误。
6. 第 45 页「traditional pages tables」为 page tables 的笔误，照意译。
7. 图 B.24：Opteron 虚拟页号 36 位 + 页内偏移 12 位（48 位虚拟地址），物理地址 28 + 12 = 40 位，与正文一致。图中 U/S、A 两字段原书未解释（B.5 节介绍），图注里按 x86 习惯译「用户/管理者」「访问位」。

## 新定术语

| 英文 | 译法 |
|---|---|
| overlay | 覆盖段（overlay） |
| relocation / relocation register | 重定位 / 重定位寄存器 |
| address fault | 地址故障 |
| memory mapping | 存储映射 |
| paged segments | 段页式 |
| page table entry (PTE) | 页表项（PTE）（与第 2 章一致） |
| inverted page table | 反向页表 |
| translation lookaside buffer (TLB) / translation buffer (TB) | 转换后备缓冲器（TLB）/ 转换缓冲器（TB） |
| use bit / reference bit | 使用位 / 引用位 |
| physical page frame number | 物理页帧号 |
| protection field | 保护字段 |
| virtually addressed, physically tagged | 虚拟寻址、物理 tag（与第 2 章一致） |
| virtually indexed, physically tagged | 虚拟索引、物理 tag（与第 2 章一致） |
| internal / external fragmentation | 内部碎片 / 外部碎片 |
| multiprogramming / time-sharing | 多道程序设计 / 分时 |
| process switch / context switch | 进程切换 / 上下文切换（与第 5 章一致） |
| n:1 multiplexor | n 选 1 多路选择器 |
| Four Memory Hierarchy Questions Revisited | 再谈存储层次的四个问题（小标题） |
