# 附录 K 校对记录（09-app-k-01.Rmd）：附录标题、K.1、K.2 前半

页段：底本/appendix-k.pdf 第 1–10 页（书页 K-1～K-10），全部印着附录 K 的页码，没有混入其他附录的页。

- 开头：第 1 页是附录首页，含附录标题和章首引语（Steven Przybylski），K.1 从这一页开始，没有上一页延续的半段。文件第一行写附录标题 `# 指令系统结构概览 {#app-k}`。
- 结尾：第 10 页末的段落「Power also uses four condition codes …… Power also lets the」跨页。第 11、12 页是整页的图 K.8 和图 K.9，正文在第 13 页顶部接着「second "register" be optionally set by floating-point instructions. …」，到「There are also special instructions for moving from/to the condition register.」为止。本文件把这段译完整。下一部分从第 11 页的图 K.8、第 12 页的图 K.9 和第 13 页的「RISC-V and MIPS are most similar.」开始。
- 标题层级：K.2 下的粗体小标题「Introduction」「Addressing Modes and Instruction Formats」「Instructions」写作 `### … {-}`；斜体小标题「RV64G Core Instructions」「Compare and Conditional Branch」写作 `#### … {-}`，与 09-app-k-03.Rmd 的层级一致。
- 「比较与条件转移」中 SPARC、Power 两段前加了粗体引导语「**SPARC。**」「**Power。**」，下一部分讲 RISC-V/MIPS、ARM 时可沿用。

## 图

- 图 K.1（第 3 页）、K.2（第 4 页）、K.3（第 6 页）、K.4、K.5（第 7 页）、K.7（第 10 页）：排成 Markdown 表格，图注写在表前的 caption 行里。图 K.1 中 ARMv8 的「(flat)」带括号、其余不带，译文统一成「64 位，平坦」/「64 位（平坦）」照原样。
- 图 K.6（第 8 页）：截图 images/appk/fig-k-6.png（200 dpi，-x 430 -y 330 -W 1660 -H 2345），已检查不缺边、不带图注。图注末尾补了图内英文标注的译文；字段名 Op、Opx、Rd、Rs1、Rs2、Const 图注中已有解释。
- 图 K.8、K.9 不在本部分页段内，正文对它们和 K.10～K.13、K.19、K.29 的引用写成本附录内链接。
- 「Section A.9」写作 [A.9 节](#sec-a-9)（附录 A 已有该锚点）；「Appendix A」写作 [附录 A](#app-a)。

## 原书疑点

1. 第 10 页 SPARC v9 寄存器转移条件印作「=, not=, <, <=, >=, or <= 0」，「<=」重复出现、缺少「>」。按 SPARCv9 的 BPr 指令（BRZ、BRNZ、BRLZ、BRLEZ、BRGZ、BRGEZ）改译为「=、≠、<、≤、>、≥ 0」，**请对照纸本确认**。
2. 图 K.4 说 microMIPS64 全局指针是寄存器 28，图 K.5 图注却说是寄存器 30，照译未改。图 K.4 中 Thumb-2 栈指针一栏印作「0（when used in load/store）」，图 K.5 图注又说 Thumb-2 的栈指针是「another version of r31」，而 ARM 的 SP 通常是 r13，三处互不一致，照录。
3. 原书笔误，按意思译出：K.1「The vulnerable IBM 360/370」应为 venerable，译「历史悠久的」；「then it did in the past 30 years」中 then 应为 than；第 9 页「EEE 754」改为 IEEE 754；「16-it」应为 16-bit；图 K.5 图注「RV64c」按 RV64GC 译，「a designed GPR」按 designated 译「指定的通用寄存器」，「r31 is Thumb-2」中 is 应为 in；图 K.2 表中「(which use should specifiers)」按 short specifiers 译「较短的寄存器描述符」；第 9 页「accessible my most instructions」中 my 应为 by；图 K.6 图注「sift amount」应为 shift amount。
4. 图 K.1 中「Aligned preferred」译「最好对齐」，「Unaligned」译「不要求对齐」。
5. 第 4 页「RV32GC 或 Thumb-2 ……代码长度减小到大约 0.73」，数字照录。
6. 正文写「RISC V」「RISC-V」混用，译文统一为 RISC-V。

## 新定术语

| 英文 | 译法 |
|---|---|
| Survey of Instruction Set Architectures | 指令系统结构概览（附录标题） |
| displacement / based addressing | 偏移量寻址 / 基址寻址（与附录 A 一致） |
| register indirect addressing | 寄存器间接寻址 |
| indexed / scaled addressing | 变址寻址 / 比例变址寻址 |
| based / indexed with update | 带更新的基址寻址 / 带更新的变址寻址 |
| register specifier | 寄存器描述符 |
| opcode extension | 操作码扩展 |
| condition code | 条件码 |
| summary overflow | 汇总溢出 |
| branch count register | 转移计数寄存器 |
| global pointer / stack pointer / return address register | 全局指针 / 栈指针 / 返回地址寄存器 |
| global variable data pool | 全局变量数据池 |
| linkage convention | 链接约定 |
| Compressed extension (RISC-V) | 压缩扩展 |
| code size | 代码长度 |
| binary compatibility | 二进制兼容 |
