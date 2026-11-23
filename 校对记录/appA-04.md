# 附录 A 校对记录（09-app-a-04.Rmd）：A.8 节后半至 A.9 节（RISC-V 浮点操作）

页段：底本/appendix-a.pdf 第 31–40 页（书页 A-31～A-40），全部印 A 字母页码，无混入其他附录的页。

- 开头：第 31 页开头是「How the Architect Can Help the Compiler Writer」中「Simplify trade-offs among alternatives」一条的后半（complex. Anything the designer can do …），属于第 30 页起始的段落，由上一部分译出，本文件不译。本文件从同页下一条「Provide instructions that bind the quantities known at compile time as constants」开始。
- 结尾：第 40 页最后一段「Figure A.28 contains a list of nearly all the RV64G instructions and a summary of their meaning.」，完整结束在本页。图 A.28 在第 41 页，归下一部分。
- 内容：A.8 节的「编译器对多媒体指令的支持」（含 RGB→YUV 例题）、「小结：编译器的作用」；A.9 节开头至「RISC-V 的浮点操作」。

## 图

- 图 A.22（第 35 页）：排成 Markdown 表格，放在「RISC-V 指令集的组织」段后。
- 图 A.23（第 36 页）：截图 images/appa/fig-a-23.png（200 dpi，-x 670 -y 2390 -W 1760 -H 440），已检查四种格式和右侧 R/I/S/U-type 标注完整、不带图注。图注末尾补了图内标注译文。
- 图 A.24（第 37 页）：排成 Markdown 表格。原表单元格内多行（如「ALU immediates / Load」）用分号合并为一格。
- 图 A.25（第 38 页）、图 A.26（第 39 页）、图 A.27（第 40 页）：排成 Markdown 表格。含义列用 Pandoc 的 `~下标~`、`^上标^` 表示原书上下标；含 `<<`、`<`、`>` 的单元格放进代码格式，避免被当成 HTML。
- 各表放在正文首次引用它的段落之后。

## 原书疑点

1. 例题 C 代码第 2、3 行原书印作「U = (-4784*R 9437*G +4221*B) …」「V = (20218*R 16941*G 3277*B) …」，系数之间缺运算符（页面图上也是空格，应是减号丢失，即 −9437*G、−16941*G、−3277*B）。代码照录未改，请对照纸本确认。
2. 第 39 页例子：「assuming that x8 and x10 are 32-bit registers」，但 RV64G 寄存器是 64 位，且后面又说扩展成 64 位存入 x10；公式「Regs[x10]←64(Mem[Regs[x8]]0)32## Mem[Regs[R8]]」左括号缺失（已按图 A.25 的写法补成 `(Mem[Regs[x8]]~0~)^32^`），末尾「R8」应为 x8，照录未改。
3. 图 A.27：`beq` 的名称印作「Branch equal zero」、`bgt` 印作「Branch not equal zero」，与指令实际语义（相等转移、大于转移）及含义列不符；照译「等于零转移」「不等于零转移」。
4. 图 A.26：`addi` 的名称印作「Add immediate unsigned」，但 addi 的立即数做符号扩展；照译「无符号加立即数」。表头「Example instrucmtion」为排印错误，按 instruction 译。
5. 第 40 页「compressed instruction set, R64C」，应为 RV64C，照录。
6. 第 37 页「Figure A.28 (page A.42)」，页码写法照原书作「第 A-42 页」；图 A.28 实际在 A-41 页。
7. 图 A.24 图注说 SB、UJ 与「S and J」组织相同，但表中并无 J 型（第 4 行是 U 型）；照译。
8. 第 33 页引用「Section M.3」，写成「[附录 M](#app-m) 的 M.3 节」。第 4 章各节（4.2、4.3、4.7 节）按约定写纯文本。
9. 第 33 页「RISC-V provides a both a 32-bit and a 64-bit instruction set」多一个 a，不影响翻译。
10. 图 A.23 图注「two variations on these formata」，formata 为 formats 之误。

## 新定术语

| 英文 | 译法 |
|---|---|
| orthogonal / orthogonality | 正交 / 正交性 |
| primitives, not solutions | 原语，而不是解决方案 |
| graph coloring | 图着色 |
| strided addressing / unit stride | 带步长寻址 / 单位步长 |
| gather/scatter | 集中/分散（与第 4 章一致） |
| streaming SIMD extension (SSE) | 流式 SIMD 扩展（SSE） |
| packed SIMD | 紧缩 SIMD |
| base instruction set / extension | 基本指令集 / 扩展 |
| GPR / FPR | 通用寄存器（GPR）/ 浮点寄存器（FPR） |
| primary opcode / funct field | 主操作码 / funct 字段 |
| jump and link (register) | 跳转并链接（寄存器） |
| load upper immediate (LUI) | 装入高位立即数 |
| set less than | 小于置位 |
| fused multiply-add | 融合乘加 |
| modular arithmetic | 模运算 |
| sign-extended / zero-extended | 符号扩展 / 零扩展 |

润色时改正：「小结：编译器的作用」中 to simplify allocation of registers using graph coloring 原译「以便用图着色法分配寄存器」漏了 simplify，改为「这样用图着色法分配寄存器会比较简单」；SIMD 一段补出 in contrast（「相比之下」）。


