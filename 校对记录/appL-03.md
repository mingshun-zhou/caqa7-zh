# 附录 L 校对记录（09-app-l-03.Rmd）：第 3/7 部分

页段：底本/appendix-l.pdf 第 21–30 页。第 21 页开头「PTW. The hardware PTW usually has access to a register…」是第 20 页「…the core can activate the hardware」一段的延续，这一段一直写到「We now discuss some of these complexities:」，按分界规则不译，归上一部分。

- 起句：「Microcode injection: Correct address translation often requires the use of microcode instructions…」（第 21 页），译「**微码注入。** 地址转换要正确完成，往往要用到一些微码指令。」
- 止句：第 8 节第一段，从第 30 页末「We have presented several microarchitectural structures…」跨到第 31 页「…and the use of hardware PTWs.」，已译完整，止于「为了简化讨论，我们假设 MMU 与一个虚拟索引、物理 tag 的 L1 Cache 集成在一起，并采用硬件 PTW。」
- 范围内的节标题：`## MMU Cache {#sec-l-7}`（原第 7 节 Memory Management Unit Caches）、`## MMU 的集成：融会贯通 {#sec-l-8}`（原第 8 节 MMU Integration: Putting Everything Together，按术语表 Putting It All Together 译「融会贯通」）。
- 第 31 页的图 14 归下一部分；本文件只在 7 节「复杂度」一段写了指向 #fig-l-14 的链接。

## 图

- 图 L.9（第 22 页）：内容是 7 行汇编代码，按「代码照录」写成带锚点的图名行 `[图 L.9　…]{#fig-l-9 .caption}` 加代码块，没有截图；代码中的英文注释照录，译文补在图注末尾。
- 图 L.10（第 25 页）：截图 images/appl/fig-l-10.png（200 dpi，-x 360 -y 345 -W 960 -H 645），已检查不缺边、不带图注。图内标注 GPP Req.、SPP Req.、nL4～nL1、gL4～gL1、MMU$、nTLB 的译文补在图注末尾；alt 文字中的 `$` 写作 `\$`。
- 图 L.11（第 27 页）：截图 fig-l-11.png（-x 360 -y 345 -W 980 -H 455）。
- 图 L.12（第 28 页）：截图 fig-l-12.png（-x 360 -y 345 -W 980 -H 455）。
- 图 L.13（第 29 页）：截图 fig-l-13.png（-x 385 -y 345 -W 900 -H 270）。
- 图在正文中放在首次引用它的段落附近；图 L.11 放在「统一页遍历 Cache」段后，图 L.13 放在分页结构 Cache 例子之后。

## 原书疑点

1. 解答 6：原文说客户 CR3「maintains the system physical page (SPP) of the root of the guest page table」，但随即又说由此生成的是 GPP（GPP Req），还要经嵌套页表转换成 SPP，与[图 L.10](images/appl/fig-l-10.png) 一致的说法应是客户 CR3 存放客户页表根的 GPP。照原文译，请核对。
2. 解答 6：「the SPP is combined with the GVP's L3 index bits to look up the gL4」，按前后文，查 gL4 应用 L4 索引位（gL4 查得的是 gL3 的 GPP），这里的 L3 疑为笔误。照原文译。
3. 7 节「复杂度」末段：「27 bits versus 40 bits」。按图 14 的公式，统一页遍历 Cache 的 tag 是 P−3 = 49 位，分页结构 Cache 是 (L−1)×N = 27 位；40 位恰是 P−12（物理页号位数），与图 14 的页遍历 Cache tag 公式不符。照录数字，请核对。
4. 图 12 图注后半「we show the state of the page walk cache after the walk」「split page walk caches」，按图的内容应是 paging structure cache；译文照原文写「页遍历 Cache」，请核对是否改为「分页结构 Cache」。
5. 「Pros and cons」段说 hardware translation walks 的高性能来自消除上下文切换「and also two other reasons」，下面的 ① ② 译作（1）（2）。原文「On the other hard」（7 节设计比较 ①）为 hand 之误；「concantenates」「fullfill」为拼写错误（前者在第 21 页上一部分范围内），均不影响译文。
6. 第 2 章 02-memory-07.Rmd 说「页表遍历器和页结构 Cache 见在线附录 L 的 L.5 节和 L.6 节」，按本附录实际编号，硬件页表遍历器在第 6 节，MMU Cache（分页结构 Cache）在第 7 节（L.7）。未改第 2 章文件，供合稿时核对。
7. 「Q&A 6」写成粗体「**问答 6**」，Q6/A6 写成「**问题 6**」「**解答 6**」（仿例题格式），全附录需统一。

## 新定术语

| 英文 | 译法 |
|---|---|
| microcode injection | 微码注入 |
| sticky (bits) | 「粘滞」的 |
| hits under misses | 失效下命中（与 2.3 节一致） |
| outstanding (TLB) miss | 未完成的（TLB）失效 |
| PTW buffer | PTW 缓冲 |
| hybrid page table walker | 混合式页表遍历器 |
| permission fault | 权限故障 |
| hotness of pages | 页的冷热程度 |
| guest virtual / physical page (GVP / GPP) | 客户虚页（GVP）/ 客户物理页（GPP） |
| system physical page (SPP) | 系统物理页（SPP） |
| guest page table / nested page table | 客户页表 / 嵌套页表 |
| guest CR3 | 客户 CR3 |
| two-dimensional page table walk | 二维页表遍历 |
| nested TLB | 嵌套 TLB |
| native execution | 非虚拟化执行 |
| MMU cache / prefix cache | MMU Cache / 前缀 Cache；首次出现写「存储管理单元（MMU）Cache」 |
| page walk cache | 页遍历 Cache |
| paging structure cache | 分页结构 Cache（第 2 章写作「页结构 Cache」，需统一） |
| translation path cache | 转换路径 Cache |
| unified / split (cache) | 统一 / 分离 |
| root level / leaf level | 根级 / 叶级 |
| longest matching prefix | 前缀匹配最长 |
| don't care (bits) | 无关位 / 无关值 |
| coverage | 覆盖范围 |
| top-down search | 自顶向下查找 |
| Base / Index / Next 字段 | 保留英文字段名 |
- 润色时改正：「There were many reasons」「for several reasons」原译「原因有三」「原因也有三个」，改为「原因有多方面」「原因也有几个」；「native execution」原译「本机执行」，按术语表改为「非虚拟化执行」；复杂度段「表中」改为「图中」（图 L.14）。
