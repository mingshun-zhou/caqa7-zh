# 附录 A 统稿记录：指令系统原理

底本：底本/appendix-a.pdf，共 56 页。第 1–55 页印 A-1～A-55。第 56 页是附录 B 的目录页（B.1 Introduction B-2 …），不属于本附录，已跳过。本附录没有参考文献节；A.12 节只指向网上的 M.4 节。

## 文件

| 文件 | PDF 页 | 内容 |
|---|---|---|
| [09-app-a-01.Rmd](<../09-app-a-01.Rmd>) | 1–10（含第 11 页开头半段） | 附录标题、章首引语、A.1～A.3 节「寻址方式」，图 A.1～A.7 |
| [09-app-a-02.Rmd](<../09-app-a-02.Rmd>) | 11–20（含第 21 页开头半段） | A.3 节后半～A.6 节，图 A.8～A.17 |
| [09-app-a-03.Rmd](<../09-app-a-03.Rmd>) | 21–30（含第 31 页开头半段） | A.6 节末段～A.8 节「体系结构设计者如何帮助编译器编写者」，图 A.18～A.21 |
| [09-app-a-04.Rmd](<../09-app-a-04.Rmd>) | 31–40 | A.8 节后半～A.9 节「RISC-V 的浮点操作」，图 A.22～A.27 |
| [09-app-a-05.Rmd](<../09-app-a-05.Rmd>) | 41–50 | 图 A.28～A.31、A.10～A.12 节、习题 A.1～A.10 (a) |
| [09-app-a-06.Rmd](<../09-app-a-06.Rmd>) | 51–55 | 习题 A.10 (b)～A.24 |

共 1019 行。各部分校对记录见 appA-01.md～appA-06.md。

## 衔接检查

对照 pdftotext 抽出的第 10/11、20/21、30/31、40/41、50/51 页边界：

- 第 11 页开头「measurements in this appendix, however, …」由第 1 部分译出，第 2 部分从「As Figure A.7 shows」开始，无重复、无遗漏。
- 第 21 页开头的「小结：控制流指令」后半由第 2 部分译出，第 3 部分从「We have now completed …」开始。
- 第 31 页开头「Simplify trade-offs」一条后半由第 3 部分译出，第 4 部分从「Provide instructions that bind …」开始。
- 第 40 页末「Figure A.28 contains a list …」在第 4 部分；第 41 页只有图 A.28，归第 5 部分。
- 第 50 页末习题 A.10 (a) 在第 5 部分，第 51 页 (b) 起归第 6 部分。

结论：没有漏译或重复段落，未补译、未删除正文。

## 结构检查

- 第一个文件有 `# (APPENDIX) 附录 {-}` 和 `# 指令系统原理 {#app-a}`。
- A.1～A.12 节都有 `{#sec-a-N}` 锚点；习题节 `{- #sec-a-exercises}`。节标题与正文各章写法一致（谬误与陷阱、结束语、历史回顾与参考文献、融会贯通：…、交叉问题：…）。
- 图 A.1～A.31 全部定义锚点 fig-a-1～fig-a-31。截图 15 幅（A.1、5、7、8、9、10、11、14、15、17、18、19、21、23、30），文件都在 images/appa/；其余 16 幅排成表格。
- 本附录内的 fig-a-*、sec-a-* 链接都有对应锚点。指向其他附录的链接（app-c、app-e、app-h、app-j、app-k、app-m）要等这些附录的首文件建立锚点后才能跳转。

## 统稿改动

1. 指令名统一为第 1 章图 1.5 的写法「取…／存…」：图 A.25 的「装入双字」「无符号装入字」「存储字」等改为「取双字」「取无符号字」「存字」等；图 A.26 和正文 LUI 的「装入高位立即数」改为「取高位立即数」，与图 A.28、图 1.5 一致。正文叙述中的动词「装入」「存储」保留。
2. 指令类别 Loads/Stores 统一用 load/store（与 A.8、A.9 节正文一致）：图 A.29 表头和图注、习题 A.1、A.3 表中的「取数」「存数」已改。
3. misaligned 统一为「不对齐」（与图 A.5、A.3 节一致），改了 09-app-a-04 和 09-app-a-06 中的「非对齐」。
4. 图 A.6 图注末句改写通顺：「用作硬件描述的 C 语言扩展，定义见第 A-38 页。」书页页码统一写作「第 A-9 页」「第 A-38 页」「第 A-42 页」这种原书页眉形式，作纯文本，不改成链接。

## 全附录疑点（按重要性）

1. **A.3 节小结与图注不符**（第 12 页）：小结说图 A.8 图注给出 12～16 位偏移量覆盖 75%～99%，图注里没有这个数；末句「This claim is not substantiated by the caption of the figure to which it refers」像是作者编辑时留下的批注，误入正文。照译，请对照纸本。
2. **例题 RGB→YUV 代码缺减号**（第 32 页）：`U = (-4784*R 9437*G …)`、`V = (20218*R 16941*G 3277*B)`，习题 A.8 同一段代码有减号，说明例题是排印丢失。代码照录。
3. **习题 A.22 (c)(d) 原文完全相同**（第 54–55 页，已核对 pdftotext），按 (e)(f) 推断 (d) 应为「大端、不对齐 4 字节字」。照译。
4. 图 A.27 中 `beq`、`bgt` 的名称印作「Branch equal zero」「Branch not equal zero」；图 A.26 中 `addi` 印作「Add immediate unsigned」。照译。
5. 第 39 页例子说 x8、x10 是 32 位寄存器，与 RV64G 矛盾；式子缺左括号（已补），末尾 R8 应为 x8（照录）。第 40 页 R64C 应为 RV64C。
6. 图 A.28 操作码笔误照录：subi/subiw（RISC-V 无此指令）、fmult、fiv、fsgn/fsjnx，srli、srai 各重复一次。
7. 图 A.29 图注「1/5 to 3x」中 1/5 疑为 1.5；正文说数据「using RV32G」，与 RV64G 不一致。照录。
8. A.1 节说附录 K 有「four embedded RISC processors」，括号里只列三种；A.2 节正文说「three classes」，图 A.2 图题是「four classes」。照译。
9. 第 37 页「Figure A.28 (page A.42)」，图 A.28 实际在 A-41 页。照录。
10. 习题 A.2、A.3 原文写「Table A.29」，照译「表 A.29」；A.13、A.21 (b) 写「this chapter」，照译「本章」；A.23 分值印作 [25,25]，照录。
11. 第 23 页「intermediates with small values」应为 immediates，按立即数译；第 26 页「yielding close allocations」按「接近最优的分配」译。
12. 图 A.16 笔误「instructionsbecause」「greater then, less then」，按正确意思译；0.10₁₀ 的二进制循环节印得不清，译作 $0.0001100110011\ldots_2$。

## 新定术语（全附录统一）

| 英文 | 译法 |
|---|---|
| stack / accumulator / general-purpose register architecture | 栈体系结构 / 累加器体系结构 / 通用寄存器体系结构 |
| register-memory / load-store / memory-memory | 寄存器-存储器 / load-store / 存储器-存储器 |
| extended accumulator / special-purpose register computer | 扩展累加器计算机 / 专用寄存器计算机 |
| Little Endian / Big Endian | 小端 / 大端（首次注英文） |
| aligned / misaligned | 对齐 / 不对齐 |
| alignment network | 对齐网络 |
| addressing mode / effective address | 寻址方式 / 有效地址 |
| register / immediate / displacement addressing | 寄存器寻址 / 立即数寻址 / 偏移量寻址 |
| register indirect / indexed / direct (absolute) / memory indirect | 寄存器间接寻址 / 变址寻址 / 直接寻址（绝对寻址）/ 存储器间接寻址 |
| autoincrement / autodecrement / scaled | 自增寻址 / 自减寻址 / 比例寻址 |
| PC-relative / position independence | PC 相对 / 位置无关 |
| literal | 字面量 |
| register specifier / address specifier / address field | 寄存器说明符 / 地址说明符 / 地址字段 |
| packed / unpacked decimal, BCD | 压缩十进制 / 非压缩十进制，二进制编码的十进制（BCD） |
| trap / trap enable | 自陷 / 自陷允许位 |
| jump / branch | 跳转 / 转移 |
| taken / not taken | 成功 / 不成功 |
| condition code / compare and branch | 条件码（CC）/ 比较并转移 |
| caller saving / callee saving | 调用者保存 / 被调用者保存 |
| ABI | 应用二进制接口（ABI） |
| jump and link | 跳转并链接 |
| variable / fixed / hybrid encoding | 变长 / 定长 / 混合编码 |
| run-length encoding / hash table | 游程编码 / 散列表 |
| pass / phase / phase-ordering problem | 遍 / 阶段 / 阶段排序问题 |
| procedure integration (inlining) | 过程集成（过程内联） |
| common subexpression elimination / constant propagation / copy propagation | 公共子表达式消除 / 常量传播 / 复制传播 |
| code motion / induction variable elimination / strength reduction | 代码外提 / 归纳变量消除 / 强度削弱 |
| basic block / straight-line code | 基本块 / 直线型代码 |
| graph coloring | 图着色 |
| aliasing / dereference | 别名 / 解引用 |
| orthogonal | 正交 |
| strided / unit stride / gather-scatter | 带步长寻址 / 单位步长 / 集中/分散 |
| packed SIMD | 紧缩 SIMD |
| semantic gap / semantic clash | 语义鸿沟 / 语义冲突 |
| procedure call mask / activation record | 过程调用屏蔽码 / 活动记录 |
| delayed branch / conditional move / paired single | 延迟转移 / 条件传送 / 成对单精度 |
| overhead instruction / instrument / instruction mix | 开销指令 / 插桩 / 指令组成 |
| intrinsics | 内建函数（intrinsics） |
| 指令名（lb、sw、lui 等） | 取字节、存字、取高位立即数（同第 1 章图 1.5） |
| Loads / Stores（指令类别） | load / store |
