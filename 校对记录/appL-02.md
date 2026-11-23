# 附录 L 校对记录（二）（09-app-l-02.Rmd）

页段：底本/appendix-l.pdf 第 11–20 页（页面印的页码与 PDF 页码一致）。第 11 页顶部是图 4，图下是问答 3 答案的后半段（「TLB, the back-invalidation would not have an impact on the L1 TLB. …」），延续第 10 页，不译。本文件从图 4 开始，接着从问答 4 译起：「Q4. Consider Figure 4, which shows the private L1 caches and L1 TLBs of a four-core system.」到第 21 页上段结束：「…there are important aspects of hardware PTW design complexity. We now discuss some of these complexities:」。第 21 页起的「Microcode injection」段落归下一部分。

内容：问答 4（第 4 节末）、第 5 节「Multiple Page Size Support」全节（含问答 5）、第 6 节「Page Table Walks」前半（软件方法、TSB、状态位管理、优缺点、硬件方法开头）。

## 图

- 图 L.4（第 11 页）、图 L.5（第 14 页）、图 L.6（第 15 页）、图 L.7（第 18 页）、图 L.8（第 20 页）：均为 200 dpi 截图，存 images/appl/fig-l-4.png～fig-l-8.png，已检查不缺边、不带图注。图内英文标注的译文补在图注末尾。
- 图 L.5 的图注排在页大小预测器两段之后、「并行查找」之前；其余图放在首次引用处附近。

## 排版处理

- 原文的「Q&A n」框写成 `**问答 n**`，题目、答案写「**问 n**」「**答 n**」；子题 (Q4a.)～(A4d.) 写成「（问 4a）」「（答 4a）」。
- 原文加粗的段首引导语（Hash-rehashing、Skewing、Software approaches、Hardware approaches）用粗体；斜体的引导语（Translation storage buffers、Managing status bits、Pros and cons）用斜体。
- 原文带圈编号 ①②③（Page size prediction / Parallel lookup / Parallel page table walks）写成「（1）（2）（3）」加粗。
- 页大小写法照原文「4KB」「2MB」，未改成 KiB/MiB。
- 引用第 7 节写 [L.7 节](#sec-l-7)，该锚点在后续文件中；图 L.7 图注里写纯文本「L.7 节」。

## 原书疑点

1. 答 4d：「invalidate the cache lines of CPU 1 and CPU 3」。执行 store 的就是 CPU 1，按问 4 的设定应作废的是 CPU 0 和 CPU 3 中的 Cache 行，疑为 CPU 0 之误。译文照录「CPU 1 和 CPU 3」。
2. 第 15–16 页斜相联例子：64 个组需要 6 个索引位，但随后说「use bits 23-21」（只有 3 位），且这 3 位与选路规则的关系没有说明。照译。
3. 第 6 节开头说早期 Alpha 用硬件管理的转换遍历、后来 SPARC 和 ARM 演变为软件遍历，与通常的认识（Alpha 用 PALcode 软件处理，ARM 用硬件遍历）不符。照译。
4. 第 19 页「the dirty bit can be set by the OS when there is a TLB miss to the store instruction. When the replacement policy evicts a page which has its store bit set」：「store bit」应即脏位，照译为「store 位」。
5. 第 13 页「the region of the instruction that corresponds to the base register, rs」，图 5 中标作 rs1，照录。
6. 第 18 页正文说「concatenate the physical address of the first entry in the root page table … with the first 9-bit index」；第 21 页说 L4 返回的物理页号是「0x42」，图 7 和第 17 页正文写作 0x042，数值相同，照录。
7. 第 20 页「take in the range of 700 clock cycle」，译「大约 700 个时钟周期」。

## 新定术语

| 英文 | 译法 |
|---|---|
| translation coherence | 转换一致性 |
| TLB coherence | TLB 一致性 |
| strictly inclusive / mostly inclusive / exclusive | 严格包含 / 大体包含 / 互斥 |
| back-invalidation | 反向作废 |
| inter-processor interrupt | 处理器间中断 |
| false sharing | 伪共享（与第 5 章一致） |
| probe | 探查 |
| page table walk / translation walk | 页表遍历 / 转换遍历 |
| page table walker (PTW) | 页表遍历器（PTW）（与 2.6 节一致） |
| PTW state machine / PTW buffer | PTW 状态机 / PTW 缓冲 |
| hash-rehashing | 散列-再散列 |
| page size prediction / predictor | 页大小预测 / 预测器 |
| predictor aliasing | 预测器别名 |
| skewed TLB / skew-associative | 斜相联 TLB / 斜相联 |
| effective associativity | 有效相联度 |
| speculative page table walk | 推测性页表遍历 |
| trap table | 陷阱表 |
| forward-mapped multi-level | 正向映射的多级（结构） |
| page table page | 页表页 |
| Page Map Level 4 (PML4) / PDP / PD / PT | 页映射第 4 级 / 页目录指针表 / 页目录 / 页表 |
| physical page number (PPN) | 物理页号（PPN） |
| physical frame number | 物理页帧号 |
| MMU cache | 存储管理部件（MMU）Cache |
| Translation Storage Buffer (TSB) | 转换存储缓冲（TSB） |
| access bit / dirty bit / protection bit | 访问位 / 脏位 / 保护位 |
| protection fault | 保护故障 |
| page hotness | 页热度 |
| LRU with second chance | 带第二次机会的 LRU |
| replay | 重放 |
| inverted / hashed page table | 反向页表 / 散列页表 |
| miss-status holding register (MSHR) | 失效状态处理寄存器（MSHR）（与第 2 章一致） |
