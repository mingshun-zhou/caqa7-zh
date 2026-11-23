# 附录 K 统稿记录：指令系统结构概览

底本：底本/appendix-k.pdf，共 78 页。第 1–76 页印着 K 字母页码（第 1、75 页没有页眉，但按版面和页序属于 K-1、K-75）。第 77 页是空白页，第 78 页是下一附录的章首装饰页，没有文字，两页都跳过了。没有混入其他附录的页。

## 文件与分界

| 文件 | PDF 页 | 起 | 止 | 行数 |
|---|---|---|---|---|
| [09-app-k-01.Rmd](<../09-app-k-01.Rmd>) | 1–10（跨到 13 页顶） | 附录标题、章首引语、K.1 | Power 条件码一段（第 13 页「… from/to the condition register.」） | 193 |
| [09-app-k-02.Rmd](<../09-app-k-02.Rmd>) | 11–20 | 图 K.8、K.9，正文「RISC-V and MIPS are most similar.」 | 寄存器窗口末段「… not included in the RISC-V ISA.」 | 219 |
| [09-app-k-03.Rmd](<../09-app-k-03.Rmd>) | 21–30（跨到 31 页顶） | 「Fast Traps」 | K.3 引言 1978 年条目「… extended accumulator machine.」 | 211 |
| [09-app-k-04.Rmd](<../09-app-k-04.Rmd>) | 31–40 | 1980 年条目（8087） | FADD 五种形式 | 201 |
| [09-app-k-05.Rmd](<../09-app-k-05.Rmd>) | 41–50（跨到 51 页顶） | 「As mentioned earlier SSE2 …」 | K.4 节标题和 Eric Raymond 引语 | 224 |
| [09-app-k-06.Rmd](<../09-app-k-06.Rmd>) | 51–60 | K.4「Introduction」 | calls 一段、图 K.53 | 275 |
| [09-app-k-07.Rmd](<../09-app-k-07.Rmd>) | 61–70 | 「Thus, to preserve these four registers …」 | K.5 引言 370-XA 一段 | 327 |
| [09-app-k-08.Rmd](<../09-app-k-08.Rmd>) | 71–76 | 「Several studies of the IBM 360 …」 | 致谢 | 204 |

合计 1854 行。八个分界处都对照了 PDF 文本：跨页段落各由前一部分译完，后一部分从下一段起，没有漏译，也没有重复。本轮没有补译或删除正文段落。

## 结构检查

- 第一行 `# 指令系统结构概览 {#app-k}`，章首引语齐全。
- 节锚点 sec-k-1～sec-k-6 齐全；习题 `## 习题 {- #sec-k-exercises}` 位于 K.4 节末、K.5 节之前（原书如此，无作者名，K.1～K.5 五题）。原书本附录没有单列参考文献，K.6 节指向历史回顾附录，所以不设 sec-k-references。
- 图 K.1～K.59 全部定义，每个锚点只出现一次。截图 11 张（K.6、K.20、K.30、K.32、K.36、K.37、K.38、K.42、K.54、K.56、K.57），文件都在 images/appk/；其余 48 个排成表格或代码块。
- 本附录内的 fig-k-n、sec-k-n 链接都能对上；外部锚点 app-a、sec-a-9、fig-a-1、fig-a-2、fig-a-26、app-c、app-m 在本目录中都存在。

## 统稿改动

1. 标题层级：原书斜体小标题统一用 `####`、粗体小标题用 `###`。09-app-k-07.Rmd 的「完整的 swap 过程」由 `###` 改为 `####`，与 09-app-k-06.Rmd 的 swap 各小标题同级（页面上为斜体）。
2. 术语：register specifier 统一为「寄存器说明符」（09-app-k-01.Rmd 原作「描述符」三处，改为与附录 A、K.3、K.4 一致；「段描述符」是 segment descriptor，不改）。autoincrement deferred 统一为「自增间接寻址」（习题 K.2 原作「自增延迟寻址」，与图 K.50 不一致，且「延迟」易与 delayed branch 混淆）。
3. 失效的交叉引用（原书沿用旧版页码或旧附录字母），改为能对上的写法：
   - 09-app-k-04.Rmd：「第 K-11 页的『80x86 的指令编码』一节」改为「本节后面的『80x86 指令编码』一小节」（实际在 K-41）。
   - 09-app-k-04.Rmd：「第 A-4 页图 A.31 中的栈示例」改为附录 A 的[图 A.1]/[图 A.2]。本书图 A.31 是 EEMBC 代码大小图，栈体系结构示例是图 A.1、A.2。
   - 09-app-k-05.Rmd：「Section L.3」改为「附录 M 的 M.4 节」；09-app-k-08.Rmd：「Section L.4 (available online)」改为「附录 M 的 M.4 节」。本版附录 L 是地址转换，历史回顾在附录 M，M.4 节是「指令系统的演变（附录 A、J 和 K）」，并收有 Kahan 关于 8087 栈的文献。原 `#app-l` 链接已去掉。
   - 09-app-k-06.Rmd：「MIPS 的 lui（Figure A.24 on page A-37）」改为指向附录 A 中列出 RISC-V lui 的[图 A.26]。本版图 A.24 是 RISC-V 指令字段用法表。
   - 09-app-k-06.Rmd：去掉「原书第 K-24 页」「原书第 K-33 页」两处旧页码，改为「前面例题」「本节后面『一个更长的例子：sort』」。
   - 09-app-k-07.Rmd：「the fallacy on page K-38」原译「K.3 节中的一条谬误」有误。这条谬误是 K.4 节自己的「谬误与陷阱」的最后一条（The architecture that executes fewer instructions is faster），改为「本节后面『谬误与陷阱』中的最后一条谬误」。
   - 其余「第 6 页的图 K.3」「第 8 页的图 K.6」与原书页码相符，照第 2 章的做法保留。

## 全附录疑点（需对照纸本或由主编定夺）

1. 第 10 页 SPARC v9 寄存器转移条件印作「=, not=, <, <=, >=, or <= 0」，译文改为「=、≠、<、≤、>、≥ 0」（与 BPr 指令一致，也与图 K.12 一致）。
2. microMIPS64 全局指针：图 K.4 为寄存器 28，图 K.5 图注为寄存器 30；Thumb-2 栈指针：图 K.4 印 0，图 K.5 图注说是 r31（ARM 实际为 r13）。照录。
3. 原书正文的图号范围有误：嵌入式指令表应为图 K.14～K.16（原文 K.14～K.17），扩展指令表应为图 K.17～K.19（原文 K.15～K.18）。照原文译出。
4. 图 K.9、K.10、K.11 多处助记符可疑（ARM 存半字 STW、除法 MULX/SMULX、RISC-V 存半字 STH、从中断返回 EBREAK 等）；图 K.14 Thumb-2 以 SP 为基址的取/存字「1;3;8」可能是「1;8;8」。照录。
5. 图 K.26 Power 列「6B」可能是 16B；图 K.29 VAX 数据寻址方式「=14」可能是「≥14」。照录。
6. 图 K.33「MOVW BX,[DI+45]」原书印在功能栏，译文移到指令栏。
7. 图 K.38 中 r/m = 3 一行印作 BP+SI（应为 BP+DI），16 位模式 mod = 1、mod = 2 两栏的 disp8/disp16 似印反。截图保留原样。
8. 正文与图表数字不符：整数程序数据访问正文 1.25 倍、图 K.46 为 1.23；浮点程序正文 2～4 倍、图 K.47 为 4.35。swap 代码行数正文 17/8 行，图 K.54 数得 MIPS 15 条；sort 正文 44/20 行，图 K.56 数得 MIPS 42 条。照原文。
9. 图 K.54 VAX 代码 `4(a)`、`8(a)` 应为 `4(ap)`、`8(ap)`；图 K.57 横轴标题印作「Number of bits of displacement」，与图意不符。截图保留原样，图注已说明。
10. 「the VMS C compiler does include registers r0 and r1」按上下文译为「本来不必……但它还是放进去了」。
11. 图 K.59 汇总行与分项之和略有出入（只列 >1.5% 的指令且有舍入），照录。致谢「Hiokazu Takata」照原书拼写。
12. 原书笔误按意思译出的（venerable、than、IEEE 754、short specifiers、16-bit 等）见各部分校对记录。
13. **补充说明**（Elaboration）是本附录首次使用的译法，全书若另有先例请统一。

## 新定术语（全附录统一）

| 英文 | 译法 |
|---|---|
| Survey of Instruction Set Architectures | 指令系统结构概览 |
| register specifier / address specifier / operand specifier | 寄存器说明符 / 地址说明符 / 操作数说明符 |
| displacement / based addressing | 偏移量寻址 / 基址寻址 |
| register indirect / indexed / scaled indexed | 寄存器间接寻址 / 变址寻址 / 比例变址寻址 |
| based / indexed with update | 带更新的基址寻址 / 带更新的变址寻址 |
| deferred（VAX）；autoincrement deferred | 间接；自增间接寻址 |
| literal | 字面量 |
| opcode extension / escape opcode / postbyte / prefix | 操作码扩展 / 换码（escape）操作码 / 后字节（postbyte） / 前缀 |
| condition code / condition flags / summary overflow | 条件码 / 条件标志 / 汇总溢出 |
| link register / count register / branch count register | 链接寄存器 / 计数寄存器 / 转移计数寄存器 |
| global pointer / stack pointer / frame pointer / argument pointer | 全局指针 / 栈指针 / 帧指针 / 参数指针 |
| register windows | 寄存器窗口 |
| delayed branch / delay slot / annulling branch | 延迟转移 / 延迟槽 / 取消转移 |
| trap / fast traps / conditional trap | 自陷 / 快速自陷 / 条件自陷 |
| tagged addition | 带标记的加法 |
| load reserved / store conditional | 预留取数 / 条件存数 |
| sign-injection | 符号注入 |
| packed SIMD / saturating arithmetic | 紧缩 SIMD / 饱和运算 |
| interleave / pack / shuffle | 交织 / 打包 / 混洗 |
| extended accumulator machine / extended stack architecture | 扩展累加器机器 / 扩展栈体系结构 |
| real mode / protected mode / long mode | 实模式 / 保护模式 / 长模式 |
| segment register / segment descriptor / linear address | 段寄存器 / 段描述符 / 线性地址 |
| segment override | 段超越 |
| instruction mix | 指令混合比 |
| mask（calls 的寄存器屏蔽字） | 屏蔽字 |
| callee save convention | 被调用者保存约定 |
| directive（汇编） | 伪指令 |
| orthogonality / code density | 正交性 / 代码密度 |
| supervisor mode / storage key / PSW | 管态 / 存储键 / PSW |
| packed decimal | 压缩十进制 |
| Elaboration | 补充说明 |
