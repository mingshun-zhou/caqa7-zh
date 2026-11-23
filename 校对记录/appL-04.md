# 附录 L 校对记录（09-app-l-04.Rmd）：第 8 节后半、第 9 节开头

页段：底本/appendix-l.pdf 第 31–40 页（第 4/7 部分）。第 8 节标题「MMU Integration: Putting Everything Together」及其第一段开头在第 30 页，第 31 页开头「croarchitectural components like load-store queues …… and the use of hardware PTWs.」是该段的后半，归上一部分，本文件不译。

- 起句：图 L.14（第 31 页顶部）；正文起句「1 Load/store queue to TLB: When CPUs generate memory references, they are inserted into load/store queues …」（「（1）load/store 队列与 TLB。CPU 产生的访存请求先插入 load/store 队列。」）
- 止句：第 40 页末段跨到第 41 页，译完整，止于「In particular, our studies suggest that page table entries are prefetched using standard next-cache line prefetching techniques on Intel's Broadwell processor.」（「特别是，我们的研究表明，Intel 的 Broadwell 处理器用标准的下一 Cache 行预取技术预取页表项。」）下一段「Sequential prefetching: …」起始于第 41 页，归下一部分。
- 本部分包含第 9 节标题 `## 地址转换预取 {#sec-l-9}`。
- 脚注 1（第 32 页，「We discuss the events constituting a TLB miss in subsequent subsections.」）已用 `^[]` 译出。

## 图

均为 200 dpi 截图，存 images/appl/，裁剪后已逐张检查，不缺边、不带图注。图内英文标注的译文补在图注末尾。

| 图 | 页 | 文件 | 说明 |
|---|---|---|---|
| 图 L.14 | 31 | fig-l-14.png | 复杂度表，按截图处理；放在文件开头 |
| 图 L.15 | 32 | fig-l-15.png | store/load 缓冲与 L1 TLB |
| 图 L.16 | 33 | fig-l-16.png | VIPT Cache 操作（TLB 命中） |
| 图 L.17 | 34 | fig-l-17.png | L1 TLB 失效情形 |
| 图 L.18 | 36 | fig-l-18.png | 页遍历 Cache 下的页表遍历步骤 |
| 图 L.19 | 39 | fig-l-19.png | 页表与数据的五级树 |
| 图 L.20 | 40 | fig-l-20.png | 页表遍历与重放时序（上下两条横线是原图边框，保留） |

图中圆圈字母（a～i）在正文中写作「步骤 a」等；原文 ①～⑤ 编号的段落写成粗体「（1）……」～「（5）……」。

## 原书疑点

1. 第 38 页正文和图 L.19 图注都说 2MB 页含「327,680」个 64 字节 Cache 行，图中最后一行标为「$ Line 327679」。按计算 2MB / 64B = 32 768，原书数字多了一个 0。译文照录 327 680，**请确认**。
2. 图 L.14「Translation Path Cache」一栏 tag 位数印作「(L-1, N) x N」，与分页结构 Cache 统一结构的「(L-1) x N」写法不一致，疑为排版错误；截图照原样，未改。另第 30 页正文说分页结构 Cache 和转换路径 Cache 的 tag 为 27 位、页遍历 Cache 为 40 位，与 (L−1)×N = 27、P−3 = 49 对不上（P−12 = 40 才是 40），属上一部分范围，供统稿参考。
3. 图 L.18 图注说「PTW generates physical addresses for the L4-L3 page table levels, which are looked up in the page walk cache」，而正文和图中查找页遍历 Cache 的是 L4～L2 三级；图中间一列有两个「PTW generates PA for L2 lookup」方框，上面一个疑应为 L1 之前的另一步或重复。图注照译「L4～L3」，图内标注照录。
4. 第 35 页「This MSHR is the same as a PTW buffer in Figure 8」，正文链接写作 [图 L.8](#fig-l-8)，依赖前面部分的锚点。
5. 第 34 页「Thus far, we have assumed that a situation where …」、第 37 页「loaded it memory」「crate address spaces」、第 39 页图注「points too」、第 41 页「whther」等为原书笔误，按文意译出，不影响意思。
6. 第 37 页「physical frames are assigned only the first touch to each of these virtual pages」缺介词（on），按「第一次访问时才分配」译。

## 新定术语

| 英文 | 译法 |
|---|---|
| page table walker (PTW) | 页表遍历器（PTW），与第 2 章图 2.22 一致；page table walk 译「页表遍历」 |
| page walk cache | 页遍历 Cache |
| paging structure cache | 分页结构 Cache（第 2 章 2.7 节写作「页结构 Cache（page structure cache）」，统稿时择一） |
| translation path cache | 转换路径 Cache |
| MMU cache | MMU Cache |
| unified / split（MMU Cache 配置） | 统一 / 分离 |
| load/store queue, load buffer, store buffer | load/store 队列、load 缓冲、store 缓冲 |
| memory (dependency) prediction / disambiguation | 访存（相关）预测 / 访存消歧（disambiguation） |
| forwarding | 前递 |
| age field | 年龄字段 |
| squash and replay | 清除并重放；memory replay 译「访存重放」 |
| synonym | 同义词（与附录 B 一致） |
| base page / superpage | 基本页 / 超级页（超级页与附录 B 一致） |
| page offset / virtual page number / physical page number | 页内偏移 / 虚页号 / 物理页号 |
| physical frame / physical page frame | 物理页帧（与附录 B 一致） |
| VIPT (virtually-indexed, physically-tagged) | 虚拟索引、物理 tag（VIPT），与第 2 章、附录 B 一致 |
| MSHR | 失效状态处理寄存器（MSHR），与第 2 章一致 |
| structural hazard | 结构冒险 |
| page coloring | 页着色（与附录 B 一致） |
| fault / protection fault | 故障 / 保护故障；page fault 译「缺页」（与附录 B 一致） |
| minor (soft) / major (hard) page fault | 次要缺页（软缺页）/ 主要缺页（硬缺页） |
| copy-on-write | 写时复制 |
| memory / page deduplication | 内存去重 / 页去重 |
| virtual memory area (tree) | 虚拟内存区域（树） |
| free list | 空闲链表 |
| radix tree | 基数树 |
| leaf page table entry | 叶级页表项 |
| row buffer / DRAM array | 行缓冲 / DRAM 阵列 |
| translation prefetching | 地址转换预取（节标题），正文也作「转换预取」 |
| implicit prefetching / next-cache-line prefetching | 隐式预取 / 下一 Cache 行预取 |
