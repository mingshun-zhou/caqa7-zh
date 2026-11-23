# 附录 K 校对记录（09-app-k-06.Rmd）：K.4 节前半（引言、操作数与寻址方式、指令编码、操作、swap 例子前半）

页段：底本/appendix-k.pdf 第 51–60 页（书页 K-51～K-60，页眉字母均为 K，无混入其他附录的页）。

- 开头：第 51 页顶部「assembler-programmer-friendly instruction set—an asset that became a liability after the RISC revolution. Eric Raymond, The New Hacker's Dictionary (1991)」是第 50 页起头的 K.4 节章首引语的后半，按分界规则不译，由上一部分（09-app-k-05.Rmd）连同 K.4 节标题 `## VAX 体系结构 {#sec-k-4}` 和引语一起译完。本文件从 Introduction 小标题开始。
- 结尾：第 60 页正文末句「Of course, calls also saves the program counter so that the procedure can return!」，段落在本页结束；图 K.53（C 代码）也在第 60 页，排在文件末尾。第 61 页「Thus, to preserve these four registers…」起归 09-app-k-07.Rmd（已存在）。

## 标题层级

- 原书粗体小标题（Introduction、VAX Operands and Addressing Modes、Encoding VAX Instructions、VAX Operations、An Example to Put It All Together: swap）用 `###`；斜体小标题（Number of Operations；Branches, Jumps, and Procedure Calls；Register Allocation for swap；Code for the Body of the Procedure swap；Preserving Registers across Procedure Invocation of swap）用 `####`。全部加 `{-}`。
- 与 09-app-k-07.Rmd 的衔接：该文件把斜体小标题「The Full Procedure swap」写作 `###`，而本文件同级的 swap 斜体小标题是 `####`。合并时建议把 K-07 的「完整的 swap 过程」改为 `####`（本文件不改他人文件）。
- 「An Example to Put It All Together」按手册「Putting It All Together → 融会贯通」译作「融会贯通的例子：swap」。
- Elaboration 译作 **补充说明**（粗体引导语），全书此前无先例。

## 图

- 图 K.49（第 52 页）、图 K.50（第 53 页）、图 K.51（第 55 页）、图 K.52（第 59 页）：均排成 Markdown 表格，前加 `[图 K.n　…]{#fig-k-n .caption}`。图 K.50 的寻址方式名称在中文后括注英文原名；图 K.49 的 MIPS 名称保留英文并括注中文，VAX 名称照录英文。图 K.51 中 205/206 两字节在原图共用一格「The 16-bit constant 737」，表格 206 行写「（同上）」；十六进制下标写作 `~hex~`。图 K.52 原图分组表头（如 Data transfers 行的说明）放在「例子」列为空的分组行里。
- 第 57 页 clr*/inc*/dec*/push* 四行小表原书无图号，排成无标题 Markdown 表格。
- 图 K.53（第 60 页）：C 代码，排成代码块，前加 caption 行。09-app-k-07.Rmd 中已有指向 #fig-k-53 的链接。
- 本部分没有需要截图的插图。

## 公式与代码

- 第 56 页指令名构成式 (operation)(datatype)(2 上 3 下，中间横线) 写作 `\left(\frac{2}{3}\right)`，正文补一句「即『操作名 + 数据类型 + 2 或 3』」说明含义。
- 第 57 页 `movl – (sp), r3` 中的 en dash 照代码习惯改作 ASCII `-(sp)`。
- 第 60 页 swap 过程体代码注释原书「(te mp)」为排版断字，改作 temp。
- 第 57 页转移指令条件符号 pdftotext 抽成 ¼、s 等乱码，按页面图写作 =、≠、<、≤、>、≥。

## 原书疑点

1. 第 55 页「the add instruction from the example on page K-24」：该例题实际在第 K-54 页（旧版页码未更新）。译作「前面例题（原书第 K-24 页）中那条加法指令」，合并时可删去页码。
2. 第 52 页「there is no equivalent to the MIPS lui instruction (see Figure A.24 on page A-37)」：本版附录 A 已改用 RISC-V，图 A.24 是 RISC-V 指令字段用法表，不讲 MIPS lui。照原书保留链接 [图 A.24](#fig-a-24) 并注原书页码，请合并时核对。
3. 图 K.52 calls 行「see "A Longer Example: sort" on page K-33」：该例子实际在 K-62 前后（旧版页码），译作链接到 K.4 节并注原书页码。
4. 第 52 页「register, displacement, immediate, and PC-relative」后原书漏句号，照意补齐。第 53 页「pointed to by r1」、第 55 页「added to r2」「register r1」句末句号在抽取中丢失，页面图上有。
5. 图 K.50 原书称变址方式为「Indexed (scaled)」，与附录 A 图 A.6 的「变址寻址」「比例寻址」两种名称对应，这里统一译「变址（比例）」。正文「Elaboration」说 VAX 有 22 种寻址方式，图 K.50 只列 10 行（字节/字/长字合列），照录未改。

## 新定术语

| 英文 | 译法 |
|---|---|
| deferred（VAX 寻址） | 间接；register deferred 寄存器间接，autoincrement deferred 自增间接，displacement deferred 偏移量间接 |
| byte/word/long displacement | 字节/字/长字偏移量寻址（VAX 的 word 指 16 位，正文已说明） |
| literal | 字面量（与附录 A 一致） |
| indexed / scaled addressing | 变址寻址 / 比例寻址（与附录 A 图 A.6 一致） |
| (operand / address) specifier | （操作数/地址）说明符 |
| condition codes | 条件码 |
| move / move address | 传送 / 传送地址 |
| stack frame | 栈帧 |
| variable allocation | 变量分配 |
| callee convention | 被调用者保存约定（与 K-07 一致） |
| mask | 屏蔽字（与 K-07 一致） |
| Elaboration | 补充说明 |
