# 附录 B　存储层次回顾：统稿记录

底本：底本/appendix-b.pdf，共 70 页。第 1–68 页印 B-1～B-68，是本附录的页面。第 69 页是空白页，第 70 页是附录 C 的目录页，两页都没有译。

## 文件与页段

| 文件 | 页段 | 行数 | 内容 |
|---|---|---:|---|
| 09-app-b-01.Rmd | B-1～B-11 | 240 | 附录标题、引语，B.1 节到「问题 4：写操作时怎么办」的第二段 |
| 09-app-b-02.Rmd | B-11～B-21 | 273 | 写策略、Opteron 数据 Cache、B.2 节到「失效开销与乱序执行处理器」 |
| 09-app-b-03.Rmd | B-21～B-30 | 278 | 乱序处理器的延迟定义、图 B.7，B.3 节第一种到第三种优化，第四种优化的开头 |
| 09-app-b-04.Rmd | B-31～B-40 | 188 | 多级 Cache、第五种和第六种优化、小结 |
| 09-app-b-05.Rmd | B-41～B-50 | 159 | 图 B.18、B.4 节、B.5 节开头到「进程保护」 |
| 09-app-b-06.Rmd | B-51～B-60 | 154 | 环与权能、IA-32 分段保护、Opteron 分页、B.6～B.8 节、习题标题和 B.1 题干 |
| 09-app-b-07.Rmd | B-61～B-68 | 238 | 习题 B.1(a) 到 B.15 |

全附录共 1530 行。

## 衔接检查

对照 PDF 逐页核对了相邻两部分的边界，包括 B-10/11、B-20/21、B-30/31、B-40/41、B-50/51 和 B-60/61。各处都是上一部分译完跨页的句子或段落，下一部分从新段落开始，没有漏译，也没有重复。B-61 开头的 "accesses). The latencies…" 已经在第 6 部分译入 B.1 题干，第 7 部分没有重复。

锚点：#app-b，#sec-b-1～#sec-b-8，#sec-b-exercises，图 #fig-b-1～#fig-b-35 都已定义。附录内的链接都能对上；外部链接只有 #app-a 和 #app-d，属于其他附录。原书没有单列的参考文献节，B.8 节「历史回顾与参考文献」已收录补充参考文献，所以没有另设 #sec-b-references。

截图共 16 幅（B.2、3、5、9、10、14、15、16、17、19、21、23、24、25、26、27），文件都在 images/appb/。其余 19 幅图排成 Markdown 表格或公式块。

## 统稿时的改动

1. 图 B.5 重新裁剪。原截图底部「Lower-level memory」方框缺下半截，现已补全，图注没有带进去。
2. 图 B.9 重新裁剪。原截图下图横轴标题「Cache size (KB)」被切掉一半，现已补全。
3. in-order 统一译「按序执行」，与第 3 章和习题 B.5 一致，09-app-b-02 中两处「顺序执行」已改。
4. no-write allocate 统一译「不写分配」，09-app-b-01 术语表中的「写不分配」已改。
5. TLB 统一译「转换后备缓冲器（TLB）」，09-app-b-04 中的「地址转换后备缓冲（TLB）」已改，与 09-app-b-05 一致。
6. exclusive hierarchy 统一译「排他式」，与正文的「多级排他性」一致。习题 B.10 中的「互斥式」已改，(a) 补注 inclusive。
7. 习题 B.4 的代码注释在代码块内直接译出，删去代码块后面另加的「（代码注释：……）」一段。
8. 页码引用统一写「第 B-n 页」，09-app-b-01 和 09-app-b-04 各补一个「第」字。
9. 09-app-b-02 第二处「tag（标签）」去掉括注，因为首次出现已在 09-app-b-01。
10. 图 B.7、B.8、B.11、B.12、B.13 的图名末尾补句号。

## 全附录新定术语

| 英文 | 译法 |
|---|---|
| memory stall cycles | 访存停顿周期（数） |
| address trace | 地址踪迹 |
| block frame / block frame address | 块帧 / 块帧地址 |
| bit selection | 位选择 |
| write allocate / no-write allocate | 写分配 / 不写分配 |
| write stall | 写停顿 |
| victim buffer | 牺牲缓冲 |
| unified / mixed / split cache | 统一 Cache / 混合 Cache / 分离 Cache |
| misses per instruction | 每条指令失效数 |
| in-order execution | 按序执行 |
| retire | 退出 |
| cold-start / first-reference / collision miss | 冷启动失效 / 首次访问失效 / 碰撞失效 |
| thrash | 颠簸 |
| 2:1 cache rule of thumb | 2:1 Cache 经验规则 |
| local / global miss rate | 局部失效率 / 全局失效率 |
| multilevel inclusion / exclusion | 多级包含性 / 多级排他性 |
| virtual / physical cache | 虚拟 Cache / 物理 Cache |
| process-identifier tag (PID) | 进程标识符 tag（PID） |
| synonyms / aliases / antialiasing | 同义词 / 别名 / 反别名 |
| page coloring | 页着色 |
| overlay | 覆盖段 |
| relocation | 重定位 |
| address fault | 地址故障 |
| paged segments | 段页式 |
| inverted page table | 反向页表 |
| translation lookaside buffer / translation buffer | 转换后备缓冲器（TLB）/ 转换缓冲器（TB） |
| use bit / reference bit | 使用位 / 引用位 |
| internal / external fragmentation | 内部碎片 / 外部碎片 |
| ring / capability | 环 / 权能 |
| descriptor table / segment descriptor | 描述符表 / 段描述符 |
| call gate / conforming / expand-down | 调用门 / 一致 / 向下扩展 |
| requested protection level | 请求保护级 |
| canonical form | 规范形式 |
| Trojan horse | 特洛伊木马 |

## 全附录疑点（照录原书，正文未改）

**数字和公式**

1. B-14～B-15，分离 Cache 与统一 Cache 的例题：题干写失效开销为 100 个时钟周期，解答全部按 200 计算。（appB-02）
2. B-20，相对性能公式：分子写 CPU 时间（2 路），分母写 CPU 时间（1 路），数值却是 2.26/2.20，下标与数值对调了。（appB-02）
3. B-21，乱序例题：公式中 CPI 是 1.6，但题干没有交代 CPI 由 1.0 改成 1.6。按 1.6 计算得 2.09，与原书一致。原书印作「CUP time」，已改为「CPU 时间」。（appB-03）
4. B-6，失效率换算式写作 0.02 × 1.5，上一例题的失效率却是 0.01。第二个例题的失效开销写 25，上一例题是 50。两处最终结果都是 IC × 0.75。（appB-01）
5. B-30，按原书数字计算，1.00 + 0.098 × 25 = 3.45，1.52 + 0.006 × 25 = 1.67，原书分别写 3.44 和 1.66。（appB-03）
6. 图 B.17 中 L2 tag 为 21 位，加上 14 位索引和 6 位偏移共 41 位，与 40 位物理地址不符，应为 20 位。图 B.25 中 L1 tag 标作 <43>，与「L1 tag compare address <28>」矛盾，按计算应为 28 位。（appB-04、appB-05）
7. B-56，页表项按「12 位保留 + 52 位页帧号 + 12 位保护信息」相加是 76 位，超过 64 位。（appB-06）
8. Opteron 页大小前后不一：B-55 写「4 KiB、2 MiB、4 MiB」，B-57 页大小位写「4 KiB 或 4 MiB」，图 B.28 写「2 MiB 或 4 MiB」。（appB-06）

**图注与引用**

9. 图 B.10～B.12 的图名说「五种不同容量」，图表中只有四种。（appB-03）
10. 图 B.14 的图注一处说 L1 为 32 KiB，另一处说 L1 是两个 64 KiB。「two-way set associative with replacement」缺修饰词。（appB-04）
11. 章节引用可能有误：B-11 写数据一致性见「第 4 章」，应为第 5 章；B-15 写「第 3 章的流水线术语」，流水线术语主要在附录 C；B-42 写「第 1 章讲过的 Cache 概念」，应为第 2 章或 B.1 节；B.8 节写历史回顾覆盖「本附录和第 3 章」，应为第 2 章。（appB-02、appB-05、appB-06）
12. 图 B.33 的图注写「习题 B.12」，引用它的是习题 B.13。（appB-07）

**排印**

13. B-3「a palt occurs」应为 page fault，译作「缺页」。B-6「Intruction」、B-24「compusolory」、B-36「x3x1」都是排印错误，已按原意译出。（appB-01、appB-03、appB-04）
14. 图 B.31 原表「Tag | Array 5 units」排错了列，已改为「tag 阵列 | 5 单位」。（appB-07）
15. 习题 B.8 分值标的是 [5/5/5]，题目却有 (a)～(d) 四问，(d) 没有分值。B.3 的总要求「估算存储系统功耗」排在 (h) 之后，译文保持原位。（appB-07）
16. B-48「the high bit of the latter」：送去作 L1 索引的是页内偏移的高 7 位，所以译作「高位部分」。（appB-05）
