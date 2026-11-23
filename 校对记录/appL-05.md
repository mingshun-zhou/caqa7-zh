# 附录 L 校对记录（09-app-l-05.Rmd）：第 9 节后半、第 10 节

页段：底本/appendix-l.pdf 第 41–50 页（PDF 页码与页脚印的页码相同）。

- 起：第 41 页开头「traditional cache prefetching techniques [6, 35, 56, 75]. In particular, …Broadwell processor.」是第 40 页 Cache-line prefetching 段的后半，不译。本文件从「Sequential prefetching: We now discuss prefetching techniques for the TLB.」（译「**顺序预取。** 下面讨论 TLB 的预取技术。」）开始。
- 止：第 50 页末段「In order to supply the MC this line number, the original translation-triggered」跨到第 51 页，译到「…needs, 0x3002.」（译「……MC 就能对存放重放最终所需数据的 Cache 行 0x3002 进行预取。」）为止。第 51 页随后的「Beyond the fact that translation-triggered prefetching is simple to implement…」段、图 28 和第 11 节归第 6 部分。
- 第 9 节标题（第 40 页）不在本段内，本文件不写 `## {#sec-l-9}`；第 10 节「Replay Prefetching」写作 `## 重放预取 {#sec-l-10}`。
- 第 9 节各小段的粗体引导语（Sequential prefetching:、Arbitrary stride prefetching:、Markov prefetching:、Recency-based prefetching:、Distance-based prefetching:、Summary:）照原文译成粗体引导语，不改成小标题。

## 图

- 图 L.21（第 42 页）、L.22（第 43 页）、L.23（第 44 页）、L.24（第 45 页）、L.25（第 47 页）、L.27（第 49 页）：200 dpi 截图，按 pdftotext -bbox 得到的图注位置裁到图注上方，已逐张检查不缺边、不带图注。图内英文标注的译文补在图注末尾。
- 图 L.26（第 48 页）是表格，改排为 Markdown 表格，表前写 `[图 L.26　…]{#fig-l-26 .caption}`；表格左上角原为空格。原生成的截图已删除。
- 图 L.27 上下两条横线是原图自带的。
- 正文引用的图 L.20（第 40 页）、图 L.28（第 51 页）不归本部分，只写链接。
- 图位置：L.21、L.22 放在描述其表格的段落之后；L.27 放在第 10 节第一段之后。

## 原书疑点

1. 第 49 页「与缺页的交互」的编号印作 ③，与前一项「Interaction with status bits」的 ③ 重复，应为 ④。译文照录为（3）（3），**建议合并时改为（4）**。
2. 图 21 图注称「Adaptive sequential prefetching techniques」，而正文用这张表讲「Arbitrary stride prefetching」，图 26 又称「Adaptive Stride」。照各处原文译（图注「自适应顺序预取」、表头「自适应步长」）。
3. 第 47 页「the prefetch buffer has to support for page sizes」漏词，按文意译作「必须支持多种页大小」。
4. 第 41 页「whther」为 whether 的笔误；「that that was previously prefetched」重复 that；第 41 页「separate prefetch buffer for prefetched instructions」中 instructions 疑为 translations/entries，译作「预取进来的项」。
5. 第 41 页顺序预取一段的变体称作「stride prefetching」，与顺序预取混用，照译「步长预取」。
6. 第 47 页「a translation for a 4KB page may maintain pointers to a 2MB page. In this case, pointers maintained in the L1 page table level may point to L3 page table levels.」按 x86-64 通常的编号，2MB 页的页表项位于 L2 级（若从叶向根数），这里说 L3，可能是作者的层级编号习惯不同，照录。
7. 第 50 页「the 4-16KB row」照录为 4～16KB；「100-150+ cycles」译「100～150 多个周期」；「20-30+ cycles」译「20～30 多个周期」；「120+ cycles」译「120 多个周期」。
8. 第 50 页「Section 8 (and Figure 20 in particular)」写成 [L.8 节](#sec-l-8)、[图 L.20](#fig-l-20)，依赖其他部分的锚点。
9. 第 51 页「permits the MC To perform」中 To 大写为排印错误，无碍译文。
10. 第 46 页步骤 ⓐ～ⓔ 原文是正文中的带圈字母，译文改成项目列表，保留带圈字母。

## 新定术语

| 英文 | 译法 |
|---|---|
| translation prefetching | 地址转换预取 |
| prefetch buffer (PB) | 预取缓冲（PB） |
| TLB pollution | TLB 污染 |
| sequential prefetching | 顺序预取 |
| stride prefetching / arbitrary stride prefetching | 步长预取 / 任意步长预取 |
| adaptive stride | 自适应步长 |
| Markov prefetching / Markov predictor | 马尔可夫预取 / 马尔可夫预测器 |
| state transition diagram / transition arc | 状态转移图 / 转移弧 |
| slot | 槽 |
| recency-based prefetching | 最近性预取 |
| LRU stack | LRU 栈 |
| previous / next pointer | previous 指针 / next 指针（保留英文） |
| distance-based prefetching | 基于距离的预取 |
| demand-based (TLB entry) | 按需装入的（TLB 项） |
| baseline page | 基本大小的页 |
| superpage | 超级页（与附录 B 一致） |
| access bit / dirty bit | 访问位 / 脏位（与附录 B 一致） |
| non-faulting prefetch | 不引发缺页的预取（non-faulting） |
| page table walk / page table walker (PTW) | 页表遍历 / 页表遍历器（PTW）（与第 2 章一致） |
| replay | 重放 |
| replay prefetching | 重放预取 |
| translation-triggered prefetching | 转换触发的预取 |
| memory controller (MC) | 存储控制器（MC） |
| row buffer / DRAM array | 行缓冲 / DRAM 阵列 |
| on-chip network | 片上网络 |
| hot page / hotness | 热页 / 冷热 |
