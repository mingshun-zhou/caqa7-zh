# 附录 A 校对记录（09-app-a-03.Rmd）：A.6 节末尾至 A.8 节前半

页段：底本/appendix-a.pdf 第 21–30 页（书页 A-21～A-30）。本段各页页眉都印着附录 A 的页码，没有混入其他附录的页。

- 开头：第 21 页开头「branch addressing in a new architecture to be able to jump to hundreds of instructions...」是第 20 页「Summary: Instructions for Control Flow」第一段的后半，按分界规则不译，由上一部分译完。本文件从下一段「We have now completed our instruction architecture tour...」开始。
- 结尾：第 30 页最后是 A.8 节「How the Architect Can Help the Compiler Writer」第三个要点「Simplify trade-offs among alternatives」，该段跨到第 31 页，已译完（到「...may vary among models of the same architecture.」为止）。第 31 页的第四个要点「Provide instructions that bind the quantities known at compile time as constants」以及「Compiler Support (or Lack Thereof) for Multimedia Instructions」留给下一部分。
- 覆盖内容：A.6 节小结的后两段；A.7 节全节（含「Reduced Code Size in RISCs」「Summary: Encoding an Instruction Set」两个小标题）；A.8 节开头至「How the Architect Can Help the Compiler Writer」的前三个要点。

## 图

- 图 A.17 在第 20 页，不属本部分。
- 图 A.18（第 22 页）：截图 images/appa/fig-a-18.png（200 dpi 裁剪，不含图注和下方横线），图注末尾补了图内标注译文。
- 图 A.19（第 25 页）：截图 images/appa/fig-a-19.png，图注末尾按「方框名——依赖性；功能」补了译文。
- 图 A.20（第 28 页）：排成 Markdown 表格，分类行（High-level、Local、Global、Processor-dependent）照原书用斜体。原图注较长，表格前只写图名，图注正文作为表后一段写出（含 Chow 1983 的数据来源，英文照录）。
- 图 A.21（第 29 页）：截图 images/appa/fig-a-21.png，图注补了坐标轴、图例译文和各柱的百分比。
- 正文中原书图放置位置与引用段落之间隔着其他段落的，译文把图放在首次引用它的段落之后。

## 原书疑点

1. 第 23 页「Common instruction occurrences, such as intermediates with small values」中 intermediates 应为 immediates（立即数），按立即数译。
2. 第 26 页图着色一段「yielding close allocations that run in near-linear time」，close 未说明接近什么，按上下文译为「接近最优的分配」。
3. 图 A.18 (B)、(C) 原图写作「RISC V」，译文图注统一为 RISC-V。
4. 第 23 页公式 `1 þ 1 þ 4 ¼ 6 bytes` 为抽取乱码，按页面图为 1 + 1 + 4 = 6 bytes；「2 8」为 2⁸。
5. 第 24 页「35%e40%」、第 27 页「25%e90%」中的 e 为抽取乱码，按页面图是连接号，译作「35%～40%」「25%～90%」。
6. 第 29 页代码注释前的「–」照录为短横（原书即如此，不是 C 语言注释符），注释已译成中文。
7. 引用的 [A.9 节](#sec-a-9)、[A.10 节](#sec-a-10)、[图 A.6](#fig-a-6)、[附录 C](#app-c)、[附录 E](#app-e)、[附录 K](#app-k) 都写成链接，依赖其他部分和其他附录的锚点。

## 新定术语

| 英文 | 译法 |
|---|---|
| address specifier | 地址说明符 |
| address field | 地址字段 |
| variable / fixed / hybrid encoding | 变长 / 定长 / 混合编码 |
| displacement addressing | 偏移量寻址（与第 1 章一致） |
| register indirect | 寄存器间接寻址 |
| jump and link | 跳转并链接 |
| run-length encoding | 游程编码 |
| hash table | 散列表 |
| code size | 代码大小 |
| pass / phase（编译器） | 遍 / 阶段 |
| phase-ordering problem | 阶段排序问题 |
| front end / code generator / global optimizer | 前端 / 代码生成器 / 全局优化器 |
| intermediate representation | 中间表示 |
| procedure inlining / procedure integration | 过程内联 / 过程集成 |
| (global) common subexpression elimination | （全局）公共子表达式消除 |
| constant propagation / copy propagation | 常量传播 / 复制传播 |
| stack height reduction | 栈高度降低 |
| code motion | 代码外提 |
| induction variable elimination | 归纳变量消除 |
| strength reduction | 强度削弱 |
| pipeline scheduling | 流水线调度 |
| branch offset optimization | 转移偏移量优化 |
| basic block / straight-line code | 基本块 / 直线型代码 |
| graph coloring | 图着色 |
| register allocator | 寄存器分配器 |
| activation record | 活动记录 |
| global data area / heap / stack | 全局数据区 / 堆 / 栈 |
| aliased / aliasing | 存在别名 / 别名 |
| dereference | 解引用 |
| orthogonal | 正交 |
| primitives, not solutions | 提供原语，而不是解决方案 |
| register-memory architecture | 寄存器-存储器体系结构 |

## 重写记录

