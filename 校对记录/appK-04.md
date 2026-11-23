# 附录 K 校对记录（09-app-k-04.Rmd）：K.3 的里程碑（续）至浮点运算

页段：底本/appendix-k.pdf 第 31–40 页（书页 K-31～K-40），全部印着附录 K 的页码，没有混入其他附录的页。

- 开头：第 31 页开头「wide. Whereas the 8080 … extended accumulator machine.」是 1978 年条目的后半，已由 09-app-k-03.Rmd 译出，不重复。本文件从「1980—The Intel 8087 floating-point coprocessor is announced.」开始。
- 结尾：第 40 页末是浮点加法的五种操作数形式（FADD … FADD mem64），到此结束，没有跨页段落。第 41 页从「As mentioned earlier SSE2 presents a model of IEEE floating-point registers.」开始，归下一部分。
- 标题层级：「80x86 Registers and Data Addressing Modes」「80x86 Integer Operations」「80x86 Floating-Point Operations」与 09-app-k-03.Rmd 的「Introduction」同级，写作 `### … {-}`。
- 本文件开头直接接 1978 年条目之后的列表项（`* 1980 年……`），合并时与 09-app-k-03.Rmd 末尾的列表连续。

## 图

- 图 K.30（第 33 页）：截图 images/appk/fig-k-30.png（200 dpi 整页渲染后裁剪，区域 x 360–2510、y 340–2640），已检查不缺边、不带图注。图注末尾补了图内标注译文。
- 图 K.31（第 34 页）、K.33（第 37 页）、K.34（第 39 页）、K.35（第 40 页）：排成 Markdown 表格，图注写在表前的 caption 行。
- 图 K.32（第 36 页）：截图 images/appk/fig-k-32.png（区域 x 165–2375、y 330–1841），包含最下方的「Physical address」，不含图注上方的横线。图注末尾补了图内标注译文。
- 第 40 页 FADD 五种形式原书是无编号的排版列表，排成两列表格（补了「指令 / 说明」列名）。
- pdftotext 对这些表格中的旋转文字抽取有误，表格内容以页面图为准。

## 原书疑点

1. 图 K.33 中「MOVW BX,[DI+45]」一行，原书的指令栏是空的，「MOVW BX,[DI+45]」和功能「BX←16 M[DS:DI+45]」一起印在功能栏里。译文把指令移到指令栏，请对照纸本确认。
2. 正文「The section "80x86 Instruction Encoding" on page K-11」：该小节实际在第 K-41 页起，K-11 疑为排版错误。照录「第 K-11 页」。
3. 正文「just as the stack example in Figure A.31 on page A-4 suggests」：附录 A 中的栈示例是图 A.1/A.2（第 A-4 页附近），本书 09-app-a-05.Rmd 的图 A.31 是 EEMBC 代码大小图，不对应。照录链接 [图 A.31](#fig-a-31)，合并时请确认是否改为图 A.1。
4. 图 K.34 中 LOOP 一行「if CX ¦ 0」，「¦」是 ≠ 的字体错码，改为 ≠。
5. 图 K.33 中「SHL BX,1」的功能「BX←BX1..15 ## 0」，`##` 是本书描述语言的拼接符，照录；下标用 `<sub>` 写。
6. 第 40 页 FADD 一行「Both operands are in the in stack」多了一个「in」，按意思译为「都在栈中」。
7. 正文「increase the address space for 32 to 64 bits」中「for」应为「from」，按意思译。
8. 寻址方式列表里，正文列出的名称（Based with scaled indexed …）与后面详述的名称（Base plus scaled indexed …）措辞不同，分别照译为「带比例变址的基址寻址」和「基址加比例变址寻址」。
9. 图 K.30 图注说扩展部分是「gray」，正文说「lighter shade」，照各自原文译。

## 新定术语

| 英文 | 译法 |
|---|---|
| coprocessor | 协处理器 |
| extended stack architecture | 扩展栈体系结构 |
| real addressing mode / real mode | 实地址模式 / 实模式 |
| protected mode | 保护模式 |
| golden handcuffs | 「金手铐」 |
| saturating / nonsaturating arithmetic | 饱和 / 非饱和运算 |
| streaming store | 流式存数（streaming store） |
| long mode | 长模式（long mode） |
| absolute / register indirect / based / indexed | 绝对寻址 / 寄存器间接寻址 / 基址寻址 / 变址寻址（与附录 A 一致） |
| based indexed / scaled index | 基址变址 / 比例变址 |
| segment register / segment descriptor | 段寄存器 / 段描述符 |
| linear address / logical address | 线性地址 / 逻辑地址 |
| near / far (intrasegment / intersegment) | 近 / 远（段内 / 段间） |
| prefix | 前缀 |
| semaphore | 信号量 |
| string instructions | 串指令 |
| transcendental instructions | 超越函数指令 |
| word / double word | 字 / 双字 |

润色时改正：图 K.35 图注第一列原译「在存储器与栈顶以下的寄存器之一之间传送数据」，原文是 move data to memory or to one of the registers below the top of the stack，改为「把数据送到存储器或栈顶以下的某个寄存器」。
