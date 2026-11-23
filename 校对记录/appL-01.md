# 附录 L 校对记录（09-app-l-01.Rmd）：标题、引语、L.1～L.4 节前半

页段：底本/appendix-l.pdf 第 1–10 页。第 1 页是标题、作者、日期、章首引语和第 1 节，没有上一页延续的半段。第 10 页末尾问答 3 的解答第二段（「Now consider the situation where instead of B, F had been evicted…」）跨到第 11 页，已译完（到「…which must have these translations due to strict inclusion.」）。第 11 页的图 4 和问答 4 归下一部分。

起句：In previous chapters, we discussed the concepts of virtual memory and address translation.（引语之后）
止句：B or D need to be evicted from the L1 TLB, and can be done silently without informing the L2 TLB, which must have these translations due to strict inclusion.

文件头：第一行 `# 地址转换的高级概念 {#app-l}`，下一行作者署名，然后是 Peter Denning 引语。原文第 1～4 节对应 `{#sec-l-1}`～`{#sec-l-4}`；小节 3.1、3.2 写作 `### 3.1　… {-}`。第 4 节只译到第 10 页（11 页起续）。

## 图

- 图 L.1（第 2 页）：200 dpi 截图 images/appl/fig-l-1.png（-x 370 -y 335 -W 980 -H 575），不带图注，已检查四边完整。图内英文标注的译文补在图注末尾。
- 图 L.2（第 4 页）：图本身是三栏文字参数，按要求截图 images/appl/fig-l-2.png（-x 355 -y 318 -W 1000 -H 565），图内全部参数在图注末尾逐项译出。
- 图 L.3（第 6 页）：截图 images/appl/fig-l-3.png（-x 360 -y 325 -W 860 -H 575），图内标注译文补在图注末尾。
- 第 1–10 页没有脚注。

## 原书疑点

1. 问答 1（A1b）：8 GB ÷ 2 MB 应为 4096，原文写 1024 项。照译未改，**请确认是否加译注或改正**。
2. 图 L.2：统一 L2 TLB 的 4 KB/2 MB 部分标为「14 cycle access」，而 L.4 节正文说 Skylake 查找 L2 TLB 为「8-10 cycle latencies」，二者不一致；另外 1 GB 页 L2 TLB 一栏写「1 cycle access; 9 cycle miss penalty」，与 L1 各栏完全相同，疑为复制错误。均照录。
3. 图 L.3：按图中位串数位，黑色位落在第 29 位，而图注和 1 GB 页 30 位偏移的说法要求是第 30 位；图上 0000001 段为 7 位，疑少画 1 位。照译图注。
4. L.4 节「since the advent of Intel Skylake's Haswell/Broadwell architectures」：Haswell/Broadwell 早于 Skylake，「Skylake's」说不通，译作「从 Intel 的 Haswell/Broadwell 微结构……开始」，未保留 Skylake。
5. 问答 2：按 64 位虚拟地址、52 位物理页号（4 KB 页）计算，2 MB 页物理页号写作 43 位（实际应为 52 − 9 = 43，与原文一致），1 GB 页「再少 18 位」也自洽；照译。
6. 笔误径改：「Hardware caches caches page table entries」→ cache；「on the other hard」→ hand；「approxmiations」「accomodate」「addess」「it's own」等拼写不影响译文。
7. L.2 节 MMU Cache 一条原文句子缺连接词（「MMU caches store page translations from non-leaf entries of these page tables are used to accelerate…」），按「存放非叶表项、用来加速页表遍历」译出。

## 新定术语

| 英文 | 译法 |
|---|---|
| page table walker (PTW) | 页表遍历器（PTW）（与 2.6 节图 2.22 一致）；page table walk 译「页表遍历」 |
| MMU cache | MMU Cache；memory management unit 译「存储管理部件（MMU）」 |
| nested TLB (nTLB) | 嵌套 TLB |
| Translation Storage Buffer (TSB) | 转换存储缓冲区（TSB） |
| forward-mapped multi-level radix tree | 正向映射的多级基数树 |
| large page / superpage | 大页 / 超级页（与附录 B 一致） |
| baseline page | 基本页 |
| page offset | 页内偏移（与附录 B 一致） |
| physical frame | 物理页帧 |
| split L1 TLBs | 分立的 L1 TLB |
| unified L2 TLB | 统一的 L2 TLB |
| mostly inclusive / strictly inclusive / exclusive | 大体包含 / 严格包含 / 排他（排他与附录 B「排他式」一致） |
| back-invalidation | 反向作废 |
| translation coherence | 转换一致性 |
| coherence filter | 一致性过滤器 |
| hyperthreading | 超线程；simultaneous multithreading 译「同时多线程」 |
| statically / dynamically partitioned | 静态划分 / 动态划分 |
| memory footprint | 内存占用 |
| working set | 工作集 |
| microbenchmark | 微基准测试程序 |
| random eviction | 随机淘汰 |
| Q&A n | 问答 n；Qn / An 译「问题 n / 解答 n」，子题号（Q1a）（A1a）照录 |
