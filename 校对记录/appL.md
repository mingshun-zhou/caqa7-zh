# 附录 L 校对记录（统稿）

## 底本

底本/appendix-l.pdf 是从出版社配套站下载的完整版，共 69 页：Abhishek Bhattacharjee（罗格斯大学），*Advanced Concepts on Address Translation*，2018 年 9 月 11 日。排版是 LaTeX 论文格式：节号 1～12，图号 Figure 1～36，参考文献编号 [1]～[95]，第 61 页起是 References。书中原来只有一页出版社指引页，现在另存为 底本/appendix-l-指引页.pdf。旧版记录说指引页之后的第 2 页是附录 M 的目录页，那一页仍归附录 M 处理。

## 分工与文件

| 文件 | 页段 | 行数 | 内容 | 分段记录 |
|---|---|---|---|---|
| 09-app-l-01.Rmd | 1–10 | 132 | 标题、L.1～L.4 节，问答 1～3（问答 3 的解答到第 11 页） | appL-01.md |
| 09-app-l-02.Rmd | 11–20 | 101 | 图 L.4、问答 4，L.5 节，L.6 节到「硬件方法」段末 | appL-02.md |
| 09-app-l-03.Rmd | 21–30 | 91 | 硬件 PTW 的复杂之处，问答 6，L.7 节，L.8 节首段 | appL-03.md |
| 09-app-l-04.Rmd | 31–40 | 74 | 图 L.14，L.8 节（1）～（5），L.9 节开头和「Cache 行预取」 | appL-04.md |
| 09-app-l-05.Rmd | 41–50 | 106 | L.9 节其余部分，L.10 节到第 51 页「0x3002」 | appL-05.md |
| 09-app-l-06.Rmd | 51–60 | 77 | 图 L.28，L.10 节末段，L.11 节，问答 7，L.12 节到第 60 页 | appL-06.md |
| 09-app-l-07.Rmd | 61–69 | 103 | L.12 节列表的后五条，参考文献 [1]～[95] | appL-07.md |

合计 684 行。图 L.1～L.36 都有定义：其中 34 幅是截图，放在 images/appl/；图 L.9 是代码块，图 L.26 是 Markdown 表格。原文只有一个脚注（第 32 页），已译在 09-app-l-04.Rmd。

## 统稿检查

- 边界：逐一对照了第 10/11、20/21、30/31、40/41、50/51、60/61 页的跨页处，没有漏译，也没有重复。第 8 节首段跨第 30～31 页，由 03 译完；04 从图 L.14 和（1）开始。
- 标题：有 `{#app-l}` 和 sec-l-1～sec-l-12，节号与原文第 1～12 节一一对应。小节只有 3.1 和 3.2，写成 `### 3.1　… {-}`。参考文献写作 `## 参考文献 {- #sec-l-references}`，不编号。
- 链接：所有 `(#fig-l-n)`、`(#sec-l-n)` 都有对应的锚点，所有图片文件都存在。

## 统稿时所做的修改

1. 「虚页」统一为「虚拟页」，「虚页号」统一为「虚拟页号」，与附录 B 一致（02～06 都有）。
2. 01 中的「淘汰」（evict）统一为「逐出」，「随机淘汰」改为「随机逐出」。
3. 01 中的「OS」统一为「操作系统」，只在首次出现处写「操作系统（OS）」，与 02～07 一致。
4. 「转换存储缓冲区（TSB）」统一为「转换存储缓冲（TSB）」。
5. 02 中写 exclusive TLB 的「互斥的」改为「排他的」，与 L.4 节一致。
6. 03 中的「存储管理单元（MMU）Cache」改为「存储管理部件（MMU）Cache」，与 01、02 一致。
7. 03 中的「非虚拟化执行」改为「本机执行」（native execution），与 07 一致。
8. 正文中的「4KB」「2MB」「1GB」等改为数字与单位之间留空格（4 KB），与 01 一致。图注里照录的英文标注（如 4KB page offset、4KB Frame）不改。
9. 问答格式统一为：`**问答 n**`，`**问题 n**`、`**解答 n**`，子题写（问 na）、（答 na）。02 原来写「问 4/问 5/答 5」，01 原来写（Q1a）（A1a），都已改。问答 4 的原文没有总的 A4，只有（A4a）～（A4d），所以不补「解答 4」。
10. 05 中「与缺页的交互」原文编号印作 ③，和前一项重复，按顺序改为（4）。
11. 07 中 L.12 节列表的后五条，列表符号由 `-` 改为 `*`，与 06 中的前五条一致，拼接后是同一个列表。

## 新定术语（附录 L 通用）

| 英文 | 译法 | 备注 |
|---|---|---|
| address translation | 地址转换 | 术语表 |
| page table walk / walker (PTW) | 页表遍历 / 页表遍历器（PTW） | 与 2.7 节图 2.22 一致；translation walk 译「转换遍历」 |
| PTW state machine / PTW buffer | PTW 状态机 / PTW 缓冲 | |
| memory management unit (MMU) | 存储管理部件（MMU） | |
| MMU cache / prefix cache | MMU Cache / 前缀 Cache | |
| page walk cache | 页遍历 Cache | |
| paging structure cache | 分页结构 Cache | 第 2 章 02-memory-07.Rmd 写作「页结构 Cache（page structure cache）」，见疑点 |
| translation path cache | 转换路径 Cache | |
| unified / split | 统一 / 分离 | split L1 TLBs（按页大小分开）译「分立的 L1 TLB」 |
| nested TLB (nTLB) | 嵌套 TLB | |
| guest virtual / physical page (GVP / GPP)，system physical page (SPP) | 客户虚拟页 / 客户物理页 / 系统物理页 | |
| guest / nested page table | 客户页表 / 嵌套页表 | |
| Translation Storage Buffer (TSB) | 转换存储缓冲（TSB） | |
| forward-mapped multi-level radix tree | 正向映射的多级基数树 | |
| page table page | 页表页 | |
| PML4 / PDP / PD / PT | 页映射第 4 级 / 页目录指针表 / 页目录 / 页表 | |
| virtual page (number) / physical page (number, PPN) | 虚拟页（号）/ 物理页（号，PPN） | |
| physical frame (number) | 物理页帧（号） | 与附录 B 一致 |
| page offset | 页内偏移 | 与附录 B 一致 |
| base(line) page / large page / superpage | 基本页 / 大页 / 超级页 | 原文混用 large page 和 superpage，照原文 |
| evict | 逐出 | |
| mostly inclusive / strictly inclusive / exclusive | 大体包含 / 严格包含 / 排他 | |
| back-invalidation | 反向作废 | |
| translation coherence / TLB coherence | 转换一致性 / TLB 一致性 | |
| inter-processor interrupt | 处理器间中断 | |
| hash-rehash | 散列-再散列 | |
| skew-associative TLB | 斜相联 TLB | |
| effective associativity | 有效相联度 | |
| access bit / dirty bit | 访问位 / 脏位 | |
| protection fault / page fault | 保护故障 / 缺页 | |
| minor (soft) / major (hard) page fault | 次要缺页（软缺页）/ 主要缺页（硬缺页） | |
| copy-on-write / deduplication | 写时复制 / 去重 | |
| microcode injection | 微码注入 | |
| hits under misses / outstanding miss | 失效下命中 / 未完成的失效 | |
| memory disambiguation / forwarding | 访存消歧 / 前递 | |
| replay / memory replay | 重放 / 访存重放 | |
| translation prefetching | 地址转换预取（节标题），正文也作「转换预取」 | |
| prefetch buffer (PB) | 预取缓冲（PB） | |
| sequential / stride / arbitrary stride prefetching | 顺序预取 / 步长预取 / 任意步长预取 | |
| Markov / recency-based / distance-based prefetching | 马尔可夫预取 / 最近性预取 / 基于距离的预取 | |
| replay prefetching / translation-triggered prefetching | 重放预取 / 转换触发的预取 | |
| memory controller (MC) | 存储控制器（MC） | |
| translation contiguity | 转换连续性 | |
| coalesced TLB / coalescing | 聚合 TLB / 聚合 | |
| (complete / partial) sub-blocking | （完全 / 部分）子块化 | |
| reach / coverage | 覆盖范围 | |
| MIX TLB / mirror | MIX TLB / 镜像 | |
| native execution | 本机执行 | |
| capability | 权能（capability） | |
| Q&A n / Qn / An | 问答 n / 问题 n / 解答 n | 子题（问 na）（答 na） |

## 疑点汇总（原文问题，译文照录，除第 10 条外未改）

**数字和计算**

1. 问答 1（A1b）：8 GB ÷ 2 MB 应为 4096，原文写 1024 项（第 7 页）。
2. 第 38 页正文和图 L.19：2 MB 页含 327 680 个 64 字节的 Cache 行，图中最后一行标为「$ Line 327679」。按 2 MB ÷ 64 B 应为 32 768，原文多了一个 0。
3. L.7 节「复杂度」（第 30 页）：说 tag 是「27 bits versus 40 bits」。按图 L.14 的公式，页遍历 Cache 的 tag 是 P−3 = 49 位，40 位对不上。图 L.14 中转换路径 Cache 的 tag 印作「(L-1, N) x N」，疑为排版错误，应为 (L−1) × N = 27。
4. 图 L.2：统一 L2 TLB（4 KB/2 MB 页）的访问时间写 14 个周期，L.4 节正文说 Skylake 查找 L2 TLB 要 8～10 个周期。图中 1 GB 页 L2 TLB 一栏写「1 cycle access; 9 cycle miss penalty」，与 L1 各栏一字不差，疑为复制错误。
5. 第 15～16 页的斜相联例子：64 组需要 6 位索引，原文却说「use bits 23-21」，这只有 3 位。
6. 图 L.29：虚拟页 7 的物理页帧标作「9 (10010)」，十进制 9 和二进制 10010（即 18）对不上。
7. 图 L.3：按位数数下来，黑色位落在第 29 位，图注说是第 30 位。

**事实和逻辑**

8. L.4 节「Intel Skylake's Haswell/Broadwell architectures」不通，因为 Haswell/Broadwell 早于 Skylake。01 意译为「从 Intel 的 Haswell/Broadwell 微结构开始」，没有保留 Skylake。
9. L.6 节开头说早期 Alpha 用硬件遍历页表，后来 SPARC、ARM 改为软件遍历。这和通常的认识相反：Alpha 用 PALcode 由软件处理，ARM 用硬件遍历。
10. 第 49 页「Interaction with page faults」编号印作 ③，与前一项重复，统稿时改为（4）。
11. 答 4d 说「作废 CPU 1 和 CPU 3 中的 Cache 行」。执行 store 的就是 CPU 1，按题设应作废的疑为 CPU 0 和 CPU 3。
12. 解答 6：客户 CR3 存的应是客户页表根的 GPP（后文说由它生成的是 GPP，还要经嵌套页表转换），原文写 SPP。同一段说用 GVP 的「L3 索引位」查 gL4，应为 L4 索引位。
13. MIX TLB 镜像数（第 59～60 页）：原文「N > M … (or N mirrors) … if N < M, M mirrors」。按逻辑，镜像数应为 min(N, M)，这两处的 N 和 M 像是写反了。
14. 第 47 页：4 KB 页的指针指向 2 MB 页时，「L1 级页表中的指针可能指向 L3 级」。按 x86-64 的编号，2 MB 页的页表项在 L2 级。
15. 图 L.18 的图注说用 L4～L3 级查页遍历 Cache，正文是 L4～L2 级。图中间一列有两个「PTW generates PA for L2 lookup」方框，其中一个疑为重复。
16. 图 L.30 只有 (a)(b)(d)(e) 四个子图标签，没有 (c)。正文说的「Figure 30(c)」实际指图中标「(d) Sub-blocked TLB」的那一栏。
17. 图 L.21 的图注说「Adaptive sequential prefetching」，正文用这张图讲「Arbitrary stride prefetching」，图 L.26 又写「Adaptive Stride」，三处名称不一致。

**文字笔误（按文意译出）**

18. L.12 节「Virtualization」：「accelerate the cost of TLB misses」搭配不通，译成「降低这一代价」。「Memory protection」：「We point interested to」漏了 readers；「a much recent work」多了 a。
19. 参考文献照录的笔误：[9]「Award」应为 Awad；[42]「TLB-Refull」应为 Refill；[67]「Pistcataway」应为 Piscataway。[78] 和 [79] 是同一篇论文的重复条目。

## 与其他章节的交叉问题（不在附录 L 范围内，未改）

- 第 2 章 02-memory-07.Rmd 说页表遍历器和页结构 Cache 在「附录 L 的 L.5 节和 L.6 节」，实际分别在 L.6 节和 L.7 节。
- 同一处写作「页结构 Cache（page structure cache）」，附录 L 按原文 paging structure cache 译作「分页结构 Cache」。建议第 2 章改成「分页结构 Cache」，并把节号改为 L.6 节、L.7 节。
- 第 2 章、附录 B 用 KiB/MiB，附录 L 原文用 KB/MB，照原文写作 4 KB、2 MB。
