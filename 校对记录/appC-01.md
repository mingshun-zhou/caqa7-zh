# 附录 C 校对记录（09-app-c-01.Rmd）：附录标题、C.1 节、C.2 节开头

页段：底本/appendix-c.pdf 第 1–10 页（书页 C-1～C-10）。第 1 页为附录标题页（标题与章首引语，无页码），第 2 页起印 C-2，PDF 页号与书页号一一对应，前 10 页都属于附录 C，没有混入相邻附录的页。

- 开头：附录标题「Pipelining: Basic and Intermediate Concepts」、章首引语「It is quite a three-pipe problem.」，C.1 节第一句「Many readers of this text will have covered the basics of pipelining…」。
- 结尾：第 10 页最后一段是 C.2 节第一段「There are situations, called hazards, …」，跨到第 11 页，译到「There are three classes of hazards:」为止。第 11 页起的三类冒险编号列表（1. Structural hazards …）是新段落，归下一部分。

## 图

- 图 C.1（第 6 页）：原书是表格，排成 Markdown 表格；表头「Clock number」与 1～9 合并为「时钟 1」～「时钟 9」。
- 图 C.2（第 7 页）：截图 images/appc/fig-c-2.png（200 dpi，已检查不缺边、不带图注）。图注末尾补了图内英文标注译文。
- 图 C.3（第 9 页）：截图 images/appc/fig-c-3.png（200 dpi，同上）。图注末尾补了标注译文，并说明灰色竖条是流水线寄存器（图内无文字标注，据正文补）。
- 图片目录按已有 images/appa、images/appb 的习惯用小写 images/appc。

## 原书疑点

1. 第 2 页「The MIPS R40000 is similar to a single-issue embedded processor」：前文是 MIPS R4000/4400，R40000 应为 R4000 之误，译文改为 MIPS R4000。
2. 第 3 页起正文写作「RISC V」（PDF 抽取丢了连字符），译文统一为 RISC-V。
3. 第 2 页 C.7 节介绍中「the core concepts in Chapter 3, which focused on dynamically scheduled approaches」用过去时，照意思译为「第 3 章的重点正是动态调度方法」。
4. 第 5 页 EX 周期说「performing one of three functions」，下面却列了四项（访存、寄存器-寄存器、寄存器-立即数、条件转移），照译「三种功能之一」，四项全部保留。
5. 第 6 页 CPI 4.66：按转移 12%×3 + store 10%×4 + 其余 78%×5 = 0.36 + 0.40 + 3.90 = 4.66，核对无误。
6. 第 10 页例题：0.5 ns ×[(40%+20%)×4 + 40%×5] = 0.5 × 4.4 = 2.2 ns，2.2/0.6 ≈ 3.67，原书写 3.7，照录。
7. 图 C.2 图注「read in one part of the stage and written in another by using a solid line, on the right or left, respectively」：译为「右侧为实线表示读，左侧为实线表示写」。
8. 第 2 页引语出处原书印为 *The Adventures of Sherlock Holmes*，译为《福尔摩斯探案集》；「three-pipe problem」译作「要抽三斗烟才能解决的问题」。

## 新定术语

| 英文 | 译法 |
|---|---|
| pipe stage / pipe segment | 流水段（与第 3 章一致） |
| hazard | 冒险（structural / data / control hazard：结构冒险 / 数据冒险 / 控制冒险，与第 3 章一致） |
| stall | 停顿 |
| processor cycle | 处理器周期 |
| fixed-field decoding | 固定字段译码 |
| register specifier | 寄存器号（正文中 rs1、rs2、rd 称「寄存器字段」） |
| effective address | 有效地址 |
| pipeline register | 流水线寄存器 |
| clock skew | 时钟偏斜 |
| setup time | Setup 时间（按手册保留英文） |
| latch overhead | 锁存器开销 |
| edge-triggered | 边沿触发 |
| scoreboard / scoreboarding | 记分牌 |
| precise / imprecise interrupt | 精确中断 / 非精确中断 |
| instruction memory / data memory (IM / DM) | 指令存储器 / 数据存储器 |
