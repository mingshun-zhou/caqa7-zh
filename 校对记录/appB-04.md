# 附录 B 校对记录（09-app-b-04.Rmd）：B.3 节中段（第四种优化后半至基本优化小结）

页段：底本/appendix-b.pdf 第 31–40 页（书页 B-31～B-40），各页均印有 B 字母页码，没有混入其他附录的页。

起止：第 30 页末尾是小标题「Fourth Optimization: Multilevel Caches to Reduce Miss Penalty」和段落「Reducing cache misses had been the traditional focus …」，该段在第 30 页结束，由上一部分译出。第 31 页第一段「This performance gap between processors and memory leads the architect to this question …」是新段落（有首行缩进），本文件从这里开始。到第 40 页末尾小标题「Summary of Basic Cache Optimization」下的段落「The techniques in this section to improve miss rate … No optimization in this figure helps more than one category.」为止（该段从第 39 页底部开始，在第 40 页结束）。图 B.18 在第 41 页，由下一部分译出；本文件只引用 [图 B.18](#fig-b-18)。

## 图

- 图 B.14（第 33 页）：折线图，截图 images/appb/fig-b-14.png（200 dpi 整页渲染后用 PIL 裁剪，框 x 880–2535、y 1545–2512），不含图注和上方横线。图内标注译文补在图注末尾。
- 图 B.15（第 34 页）：条形图，截图 images/appb/fig-b-15.png（框 x 910–2165、y 340–1382）。
- 图 B.16（第 38 页）：堆叠柱状图，截图 images/appb/fig-b-16.png（框 x 715–2355、y 350–1668）。
- 图 B.17（第 40 页）：结构框图，截图 images/appb/fig-b-17.png（框 x 170–2365、y 390–2226）。
- 图注中的「Figure B.4」「Figure B.14」写成本附录内链接。图都放在原书所在位置附近的段落之后。

## 原书疑点

1. 第 36 页例题解答末句「Without proper precautions, x3x1 would not be equal to x2!」中「x3x1」显然是排印错误（题目问的是 x2 是否等于 x3），译作「x3 就不等于 x2」。
2. 第 36 页代码注释写「M[512] ← R3」，寄存器名用的是旧版的 R3，而指令中是 x3；代码照录。原书 ¬ 是箭头 ← 的抽取乱码，按页面图写作 ←。
3. 图 B.17：物理地址 40 位、L2 为 4 MiB 四路组相联、块 64 字节，按此 L2 索引应为 14 位（图中一致），tag 应为 40 − 14 − 6 = 20 位，但图中标为「L2 tag compare address <21>」「L2 cache tag <21>」，三项相加为 41 位，与 40 位物理地址不符。L1 部分（tag 26 + 索引 8 + 偏移 6 = 40）是一致的。截图照原图，未改。
4. 图 B.14 图注「The L2 caches (unified) were two-way set associative with replacement」中 replacement 前缺修饰词（推测原为 LRU replacement），照译「采用替换」。图注又说「using a 32 KiB first-level cache」，而同一图注后文和标题处说 L1 是两个 64 KiB，前后不一致，照录。
5. 图 B.15 图注说基准是「1-clock-cycle latency on a second-level hit」，而图中两组柱子是 8 和 16 个时钟周期，照录。
6. 第 39 页「in the data cache in Figure B.5 on page B-13」，页码照录为「B-13 页」，图号写成链接 [图 B.5](#fig-b-5)。「Section B.4」写成链接 [B.4 节](#sec-b-4)，「Appendix D」写成 [附录 D](#app-d)，「Chapter 2」写纯文本「第 2 章」。
7. 第 40 页「with + meaning … e meaning it hurts」中 e 是减号的抽取乱码，按页面图写作「–」。
8. 第 32 页例题「1 + 4% × 110」原式 × 号被抽掉，按页面图补出；(5.4 − 1.0) 中减号同样按图补出。各数值核对无误：60/1000 × 10 + 30/1000 × 200 = 6.6；10 + 25% × 200 = 60.0；10.1 + 20% × 200 = 50.1。

## 新定术语

| 英文 | 译法 |
|---|---|
| local miss rate / global miss rate | 局部失效率 / 全局失效率（与第 2 章一致） |
| single cache miss rate | 单级 Cache 失效率 |
| multilevel inclusion / multilevel exclusion | 多级包含性（与第 5 章一致）/ 多级排他性 |
| virtual cache / physical cache | 虚拟 Cache / 物理 Cache |
| virtually indexed, physically tagged | 虚拟索引、物理 tag（与第 2 章一致） |
| process-identifier tag (PID) | 进程标识符 tag（PID） |
| purge / uniprocess | 清空 / 单进程 |
| flush (the cache) | 清空（Cache）（与第 2 章一致） |
| synonyms / aliases | 同义词 / 别名 |
| antialiasing | 反别名 |
| page coloring | 页着色（与第 2 章一致） |
| translation lookaside buffer (TLB) | 地址转换后备缓冲（TLB） |
| read-after-write data hazard in memory | 经由存储器的写后读数据冒险（与第 2 章一致） |
| Fifth/Sixth Optimization | 第五种优化 / 第六种优化（小标题，沿用第 2 章「第一种优化」写法） |

润色时改正：第 32 页「there may be less confusion with multilevel caches when calculating using misses per instruction」原译丢了限定词 may，改为「可能……更不容易混淆」。

