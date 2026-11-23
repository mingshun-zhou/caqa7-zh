# 附录 A 校对记录（09-app-a-02.Rmd）：A.3 节后半至 A.6 节

页段：底本/appendix-a.pdf 第 11–20 页（书页 A-11～A-20）。各页页眉都印着附录 A 的页码，没有混入其他附录的页。

- 开头：第 11 页开头「measurements in this appendix, however, will use the more recent register-register architectures...」是第 10 页 VAX 那一段的后半，按分界规则不译（09-app-a-01.Rmd 已译完）。本文件从「As Figure A.7 shows, displacement and immediate addressing dominate addressing mode usage.」开始。
- 结尾：第 20 页最后是「Summary: Instructions for Control Flow」第一段，跨到第 21 页，已译完（到「...as well as many other features of current systems.」为止）。下一段「We have now completed our instruction architecture tour...」由 09-app-a-03.Rmd 译出。
- 覆盖内容：A.3 节的「Displacement Addressing Mode」「Immediate or Literal Addressing Mode」「Summary: Memory Addressing」；A.4、A.5 节全节；A.6 节从开头到小结第一段。

## 图

- 图 A.8（第 11 页）、图 A.9（第 12 页）、图 A.10（第 13 页）、图 A.11（第 14 页）、图 A.14（第 17 页）、图 A.15（第 18 页）、图 A.17（第 20 页）：截图 images/appa/fig-a-N.png（200 dpi 裁剪，不含图注和图注上方的横线），图注末尾补了坐标轴和图例译文。
- 图 A.12（第 15 页）、图 A.13（第 16 页）、图 A.16（第 19 页）：排成 Markdown 表格。表格前只写图名，原图注其余部分作为表后一段写出。图 A.13 表头「Integer average % total executed)」原书少左括号，译作「整数程序平均（占执行指令总数的百分比）」。
- 图的位置：图 A.9 原书在「Summary: Memory Addressing」之后，图 A.10 在下一页顶部；译文把图 A.9 放在引用它的两段之后，图 A.10 放在小结之后，与原书版面顺序一致。

## 原书疑点

1. 「Summary: Memory Addressing」第三条：「This claim is not substantiated by the caption of the figure to which it refers.」原文如此，照译（「不过，所引用的那幅图的图注并不能证实这一说法」）。实际上图 A.10 图注写着 16 位约覆盖 80%、8 位约覆盖 50%，可能是作者编辑遗留的批注，**请对照纸本确认**。同一段第二条说图 A.8 的图注表明 12～16 位能覆盖 75%～99% 的偏移量，但图 A.8 图注里并无此数字，照译。
2. 图 A.16 原表笔误：「instructionsbecause」缺空格；「greater then, less then」应为 than。译文按正确意思译。
3. A.5 节第二段「As mentioned before, ... every application——desktop, server, embedded——」，抽取的「ee」为双破折号，按页面图处理。抽取文本中的 d（破折号）、e（连接号，如 75%e99%、0e9、4e8）、þ（C++ 的 +、14+）均按页面图还原。
4. 0.10₁₀ 的二进制展开在页面上带有循环节上划线（印刷不清），译文写成 $0.0001100110011\ldots_2$。
5. 图 A.9 图注「For loads, the load immediate instruction loads 16 bits into either half of a 32-bit register」，按意思译为「这里的『装入』指装入立即数指令……」。
6. 引用的 [A.6 节](#sec-a-6)、[A.8 节](#sec-a-8)、[图 A.7](#fig-a-7)、[附录 J](#app-j) 均写成链接，依赖其他部分和附录 J 的锚点。

## 新定术语

| 英文 | 译法 |
|---|---|
| displacement / immediate addressing | 偏移量寻址 / 立即数寻址（沿用第 1 章、appA-03） |
| literal | 字面量 |
| tagged data | 带 tag 的数据 |
| packed decimal / binary-coded decimal | 压缩十进制 / 二进制编码的十进制（BCD） |
| unpacked decimal; packing / unpacking | 非压缩十进制；压缩 / 解压 |
| alignment network | 对齐网络 |
| trap | 自陷 |
| transfer / jump / branch | transfer（转移）/ 跳转 / 转移 |
| PC-relative | PC 相对 |
| position independence | 位置无关 |
| register indirect jump | 寄存器间接跳转 |
| virtual function / high-order function / function pointer | 虚函数 / 高阶函数 / 函数指针 |
| dynamically shared library | 动态共享库 |
| condition code (CC) / condition register | 条件码（CC）/ 条件寄存器 |
| compare and branch | 比较并转移 |
| link register | 链接寄存器 |
| caller saving / callee saving | 调用者保存 / 被调用者保存 |
| separate compilation | 分别编译 |
| application binary interface (ABI) | 应用二进制接口（ABI） |
