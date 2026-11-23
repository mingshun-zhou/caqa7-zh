# 附录 L 校对记录（09-app-l-06.Rmd）：10 节末尾、11 节转换连续性、12 节结论（前半）

页段：底本/appendix-l.pdf 第 51–60 页。第 51 页开头「prefetching study proposes modification of the PTW …… needs, 0x3002.」是第 50 页段落的后半，不译，归上一部分。

- 起句：图 L.28 图注；正文第一句「Beyond the fact that translation-triggered prefetching is simple to implement, it differs from classical prefetching in another important way.」（转换触发的预取除了实现简单……）
- 止句：12 节列表中第 60 页的最后一条「Software optimizations: …… We point readers to relevant papers [1, 2, 34, 38].」（软件优化……[1, 2, 34, 38]。）该条在第 60 页内结束，没有跨页段落。
- 第 61 页开头的「Energy-efficient address translation」「Translation coherence」「Virtualization」「Accelerators」「Memory protection」五条列表项和 References 起于第 61 页，按分界规则归第 7 部分，本文件未译；合并时注意列表要接上。

## 图

- 图 L.28（第 51 页）：图在第 51 页，按「图归图所在页」放在本文件开头（第 50 页正文引用它）。截图 images/appl/fig-l-28.png。
- 图 L.29（第 52 页）、图 L.30（第 53 页）、图 L.31 和图 L.32（第 55 页）、图 L.33（第 56 页）、图 L.34 和图 L.35（第 58 页）、图 L.36（第 59 页）：均为 200 dpi 截图，已逐张检查不缺边、不带图注。图 L.29 width=60%，其余 80%。
- 各图注末尾补了图内英文标注的译文。

## 原书疑点

1. 图 L.29：虚拟页 7 的物理页帧标作「9 (10010)」，二进制 10010 是 18，十进制与二进制不符，图注和正文没有提及。照图截取，未改。
2. 图 L.30 只有 (a)(b)(d)(e) 四个子图标签，没有 (c)；正文「Figure 30(c) shows that complete sub-blocked approaches…」指的应是图中标作「(d) Sub-blocked TLB」的那一栏。正文照录「(c)」，图内标注照图翻译。
3. 完全子块化一段：「For a sub-block factor N, this approach looks for B aligned virtual pages」，前面说因子 N、后面用 B，符号不一致，照录。
4. 「if V0-V1 were contiguous individually (by pointing to P1-P3)」：两个虚拟页对应三个物理页，应是 P1～P2 之类；照录。
5. 图 L.33 中聚合 TLB 项写作「V0 P1 0b111」，而图中高亮的是 V0～V3 四项，正文又说「bundles translations for V0, V2, and V3」（加上请求的 V1），位图位数与 4 项不符；照图、照文。
6. MIX TLB 镜像数一段：「today's systems have N > M; this means that a superpage has a mirror per set (or N mirrors). However, if future systems use N < M, M mirrors would be present instead.」按逻辑，N > M 时每组一个镜像应为 M 个，N < M 时应为 N 个，原文两处似乎写反。译文照录原文，请核对。
7. 原文笔误径改：「coalesed」→coalesced，「remaint」→remain，「”hotes”」→holes，「verus」→versus，「far higher the 4-8 way」理解为 far higher than。
8. 「Q&A 7」照前文问答格式写成「**问答 7**」，Q7/A7 写作「**问题 7**」「**解答 7**」；若前面各部分格式不同，合并时统一。Q7 中「In Section 5」写成 [L.5 节](#sec-l-5)。
9. 原文 KB/MB/GB 照录，未改为 KiB。

## 新定术语

| 英文 | 译法 |
|---|---|
| translation-triggered prefetching | 转换触发的预取 |
| replay | 重放 |
| translation contiguity | 转换连续性 |
| intermediate contiguity | 中等程度的连续性 |
| singleton (page table entry) | 孤立项 |
| buddy allocator | 伙伴分配器 |
| memory compaction | 内存紧缩 |
| coalesced TLB / coalescing | 聚合 TLB / 聚合 |
| coalesced bundle / packet | 聚合组 / 聚合包 |
| complete / partial sub-blocking | 完全子块化 / 部分子块化 |
| sub-blocked TLB / sub-block factor | 子块 TLB / 子块因子 |
| superpage / large page | 超级页 / 大页（原文两词混用，照原文） |
| reach | 覆盖范围 |
| page table walker (PTW) | 页表遍历器（与 2.7 节一致） |
| physical frame | 物理页帧 |
| split TLB | 分离 TLB |
| MIX TLB | 保留英文 |
| mirroring / mirror copy | 镜像 / 镜像副本 |
| fill path | 填充通路 |
| MMU cache | MMU Cache |
| TLB speculation | TLB 推测 |
| direct segment | 直接段 |
| translation coherence | 转换一致性（第 61 页，供第 7 部分参考） |

润色时改正：填充一段「In practice, this can bound the number of translations…」原译「最多只能等于」把 can 译成定论，改为「可能被限制在一个 Cache 行中的页表项个数以内」。
