# 附录 K 校对记录（09-app-k-07.Rmd）：K.4 节后半（swap、sort 例子，谬误，结束语，习题）、K.5 节引言

页段：底本/appendix-k.pdf 第 61–70 页（书页 K-61～K-70，页眉字母均为 K，无混入其他附录的页）。

- 开头：第 61 页首句「Thus, to preserve these four registers for swap, we just add the mask…」。第 60 页末段（calls 保存程序计数器）已在句末完结，第 61 页从新段开始，无需续译半段。
- 结尾：第 70 页末句「Converting the operating system, which was written mostly in assembly language, was no doubt the biggest task.」，段落在本页结束。第 71 页起（「Several studies of the IBM 360…」、System/360 指令表）归下一部分。

## 标题层级

- 原书 K.4 内的粗体小标题（A Longer Example: sort、Fallacies and Pitfalls、Concluding Remarks）用 `###`；斜体小标题（The Full Procedure swap 等）按原书层次放在其下：The Full Procedure swap 因紧接前一部分同级的「Preserving Registers across Procedure Invocation of swap」，写作 `###`；sort 例子下的斜体小标题用 `####`，再下一级的非斜体小标题（The Outer Loop、The Inner Loop、The Procedure Call、Passing Parameters）用 `#####`。全部加 `{-}`。前一部分如对 swap 例子的层级另有安排，合并时请统一。
- 原书 Exercises 无作者名，写作 `## 习题 {- #sec-k-exercises}`。注意原书习题位于 K.4 节末（K.5 节之前），只有 K.1～K.5 五题，均为 <K.4>。
- K.5 节标题 `## 大型机的 IBM 360/370 体系结构 {#sec-k-5}`，Introduction 作 `### 引言 {-}`。

## 图

- 图 K.54（第 61 页）、图 K.56（第 66 页）：MIPS 与 VAX 汇编代码对照表，排版复杂（分块标题、两栏代码对齐），截图 images/appk/fig-k-54.png、fig-k-56.png（200 dpi），图注末尾补了图内标注译文。
- 图 K.55（第 62 页）：C 代码，排成代码块，前加 `[图 K.55　…]{#fig-k-55 .caption}`。
- 图 K.57（第 68 页）：折线图，截图 images/appk/fig-k-57.png，图注末补坐标轴和图例译文。
- 图 K.58（第 69 页）：排成 Markdown 表格。spice/MIPS 转移一栏原书印作「4%」（pdftotext 抽成 04%），照图写 4%。
- 图 K.53 在第 60 页，不属本部分；正文和图 K.54 图注中链接到 #fig-k-53。

## 原书疑点

1. 图 K.54、K.56 图注说图 K.53、K.55「on page K-30」「on page K-33」，实际两图在 K-60、K-62（沿用旧版页码）。译文去掉页码，只留图链接。正文「the fallacy on page K-38」同理，译作「[K.3 节](#sec-k-3)中的一条谬误（原书第 K-38 页）」，请合并时核对 K.3 节是否确有该谬误。
2. 行数：正文说 swap「17 lines of MIPS … 8 lines of VAX」，图 K.54 中 MIPS 实数为 15 条指令（含 jr），VAX 为 8 条；sort 说「44 lines in MIPS … 20 lines in VAX」，图 K.56 中 MIPS 数得 42 条、VAX 20 条。照原书数字译出，未改。
3. 图 K.54 VAX 代码 `movl r2, 4(a)`、`movl r1, 8(a)` 应为 4(ap)、8(ap)；截图照原样，正文未涉及。
4. 「so the VMS C compiler does include registers r0 and r1 in the register saving mask」：按上下文（r0、r1 是不需保存的临时寄存器，紧接着又指出编译器的另一处不足）理解为批评编译器多此一举，译作「本来不必……但它还是放进去了」。若原意是「does not」，需改译。
5. 第 64 页拼合后代码最后一条注释原书印作「v[j] ð [j+1]」（符号错码，且漏 v），按前文改作 `v[j] ≤ v[j+1]`。`brb for2tst # jump to test of inner loop` 一行原书注释用 # 而非 ;，照录，正文下补一句译文。
6. 图 K.57 横轴标题印作「Number of bits of displacement」，与图意（各 SPEC89 程序）不符，疑为从别的图沿用；截图照原样，在图注中说明。
7. 习题 K.1「pointed to be register r5」，to be 应为 to by，按 by 译。习题 K.3 注释原书用 # 引导，照录。
8. Hans Hoffman 引语出处 *Search for the Real*，人名照原书拼法（通常拼作 Hans Hofmann）。

## 新定术语

| 英文 | 译法 |
|---|---|
| mask（calls 的寄存器屏蔽字） | 屏蔽字 |
| directive（汇编） | 伪指令 |
| argument pointer (ap) / frame pointer (fp) / stack pointer (sp) | 参数指针 / 帧指针 / 栈指针 |
| callee save convention | 被调用者保存约定（与附录 A 一致） |
| scaled indexed addressing / index addressing | 比例变址寻址 / 变址寻址 |
| autoincrement deferred addressing | 自增延迟寻址（待与 K.4 前文统一，也可作「自增间接寻址」） |
| register indirect addressing | 寄存器间接寻址（与附录 A 一致） |
| condition codes | 条件码 |
| bubble sort | 冒泡排序 |
| skeleton code | 代码框架 |
| orthogonality | 正交性 |
| code density | 代码密度 |
| general-purpose register machine | 通用寄存器结构 |
| segmented address space | 分段地址空间 |
| object-code-compatible implementations | 目标代码兼容的实现 |
| timing independent | 与时序无关 |
| 370-XA (eXtended Architecture) | 370-XA（扩展体系结构） |
