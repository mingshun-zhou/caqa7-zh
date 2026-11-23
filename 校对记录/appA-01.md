# 附录 A 校对记录（09-app-a-01.Rmd）：第 1/6 部分，A.1～A.3 节前半

页段：底本/appendix-a.pdf 第 1–10 页（书页 A-1～A-10），各页页眉均为附录 A 页码，没有混入相邻附录的页。第 1 页是附录标题页和章首引语（EDSAC 指令表），照译。本文件从 A.1 节「In this appendix we concentrate on instruction set architecture…」开始，到第 10 页末跨入第 11 页的段落「…will use the more recent register-register architectures to show how programs use instruction sets of current computers.」结束（该段已译完整）。第 11 页从「As Figure A.7 shows, displacement and immediate addressing dominate…」起，归下一部分。

文件开头按约定写了 `# (APPENDIX) 附录 {-}` 和 `# 指令系统原理 {#app-a}`。

## 图

- 图 A.1（第 4 页）：截图 images/appa/fig-a-1.png（200 dpi），图注末尾补了图内标注译文。
- 图 A.2（第 4 页）：排成 Markdown 表格。原书图注第二句起（「Note that the Add instruction…」）放在表后作说明段。
- 图 A.3（第 5 页）、图 A.4（第 6 页）、图 A.6（第 9 页）：排成 Markdown 表格，图注的说明部分放在表后。图 A.6 自增、自减两行的「含义」列各有两条语句，用 `<br>` 分行。
- 图 A.5（第 8 页）：表格有跨列单元格和阴影，截图 images/appa/fig-a-5.png，图注末尾补了表头和单元格文字译文。
- 图 A.7（第 10 页）：截图 images/appa/fig-a-7.png，图注末尾补了标注译文。
- 第 7 页的小端/大端字节编号示意（无图号）排成两个单行 Markdown 表格。
- 注：images/appa/ 下其他 fig-a-*.png 为其他部分所建，未改动。

## 原书疑点

1. A.1 节说附录 K 给出「four embedded RISC processors (ARM Thumb2, RISC-V Compressed, microMIPS)」，括号里只列了三种。照译「四种」并照录三个名称，请对照纸本或附录 K 确认。
2. 图 A.6 图注「The extensions to C used as hardware descriptions are defined on page A.38」，正文又说「Figure A.6 on page A.9」，页码照录为「第 A.38 页」「第 A.9 页」，合并时可考虑改成链接。
3. A.2 节第一段说图 A.2 给出 C = A + B 在「these three classes」中的写法，而图 A.2 图题是「four classes」（栈、累加器、寄存器-存储器、load-store）。正文按「三类」（栈、累加器、通用寄存器）照译。
4. 第 6 页「Appendix C and Chapter 3」后原书漏句号，第 8 页「called addressing modes」后句号 PDF 可见，无影响。
5. 「Sections A.3–A.8」pdftotext 抽成「A.3eA.8」，按页面图为连接号。

## 新定术语

| 英文 | 译法 |
|---|---|
| stack / accumulator / general-purpose register architecture | 栈体系结构 / 累加器体系结构 / 通用寄存器体系结构 |
| register-memory / load-store / memory-memory architecture | 寄存器-存储器 / load-store / 存储器-存储器体系结构（与第 1 章一致） |
| extended accumulator / special-purpose register computer | 扩展累加器计算机 / 专用寄存器计算机 |
| top of stack (TOS) | 栈顶（TOS） |
| Little Endian / Big Endian | 小端 / 大端（首次注英文） |
| aligned / misaligned | 对齐 / 不对齐 |
| alignment network | 对齐网络 |
| addressing mode | 寻址方式 |
| effective address | 有效地址 |
| register / immediate / displacement addressing | 寄存器寻址 / 立即数寻址 / 偏移量寻址（与第 1 章、09-app-a-03 一致） |
| register indirect / indexed / direct (absolute) / memory indirect | 寄存器间接寻址 / 变址寻址 / 直接寻址（绝对寻址）/ 存储器间接寻址 |
| autoincrement / autodecrement / scaled | 自增寻址 / 自减寻址 / 比例寻址 |
| PC-relative addressing | PC 相对寻址 |
| literal | 字面量 |
| register specifier | 寄存器说明符 |


