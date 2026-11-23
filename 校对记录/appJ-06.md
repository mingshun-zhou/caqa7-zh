# 附录 J 校对记录（09-app-j-06.Rmd）：J.9 节后半、J.10 节开头

页段：底本/appendix-j.pdf 第 51–60 页（书页 J-51～J-60）。PDF 第 n 页即书页 J-n，本段内没有混入其他附录的页。第 51 页正文开头「to a box in (a). The picture is "twisted" … laid out as a square instead.」是第 50 页段落的延续，已由 09-app-j-05.Rmd 译完，本文件从图 J.27 和「The array multiplier in Figure J.27 performs the same number of additions …」开始。第 60 页整页是图 J.37，第 59 页末段「In the summary of the three chips given in Figure J.36 … Comparing the cycles/op」跨过第 60 页延续到第 61 页，译到「… are usually larger when used in a complete system.」为止。第 61 页下一段「The MIPS chip has the fewest transistors of the three.」起属于第 7 部分。

## 图

- 图 J.27（第 51 页）、J.28（第 52 页）、J.29（第 53 页）、J.30、J.31（第 54 页）、J.32（第 56 页）、J.33（第 57 页）、J.37（第 60 页）：截图存 images/appj/fig-j-N.png（200 dpi），已检查不缺边、不带图注。
- 图 J.37 跨页：第 60 页是 TI 8847 和 MIPS R3010，第 61 页是 Weitek 3364（图注「Figure J.37 (Continued)」）。续图也截了，存 images/appj/fig-j-37-cont.png，放在本文件中图 J.37 之后，图注写「图 J.37（续）」，不另设锚点。第 7 部分无需再放这张续图。
- 图 J.34（第 58 页）、J.35、J.36（第 59 页）排成 Markdown 表格。
- 图 J.34：原书左右两栏各有「b / Range of P / q」三列，Range of P 下有两个数（下限、上限），排成 8 列表头。数字已逐行对 PDF 页面图核对。
- 图 J.35：原书 P、A 两列之外的说明是一整块，按行拆进「步骤」「说明」两列；商数字粗体照原书标在 A 列。答案行原书为「q = 020$\bar{2}$ − 1 = 29」，$\bar{2}$ 即 −2，0·64 + 2·16 + 0·4 − 2 − 1 = 29，与 149/5 一致。
- 图 J.36：「Size (mil²)」译作「面积（mil^2^）」，单位保留；平方根一行 MIPS 为「–」照录。
- 图 J.31：带符号数字加法表的后两组在 PDF 中上横线很细。按 400 dpi 放大：第五组为 $1 + 0$（被加数 1 上方似无横线），结果「若 x ≥ 0 且 y ≥ 0 为 1$\bar{1}$，否则为 01」；第六组为 $\bar{1} + 0$，结果「1$\bar{1}$ / $\bar{1}$1」的读法存疑（见疑点 2）。图未改，图注补了「if … otherwise」的译文，并说明 x、y 是低一位的数字（据正文「需要检查 $a_ia_{i-1}a_{i-2}$」推断，原图注未说明）。

## 原书疑点

1. 第 53 页「cutting the number of summands from n to n/2」前的加数写作「$b_0$A⋯$b_{n-1}$A」，pdftotext 抽成「b0A/bn 1A」，按页面图照录为 $b_0\mathrm{A} \cdots b_{n-1}\mathrm{A}$。原书 0(n)、0(log n) 中的「0」应为大 O，译文写作 $O(n)$、$O(\log n)$。
2. 图 J.31 第六组（$\bar{1} + 0$）的结果在页面图上读作上行「1 $\bar{1}$」、下行「$\bar{1}$ 1」，但按正文例题 $\bar{1} + 0 = 0\bar{1}$，上行似应为「0 $\bar{1}$」；第五组上行「1 $\bar{1}$」、下行「0 1」与例题 $0 + 1 = 1\bar{1}$ 的形式一致，但例题中这一对是 0 + 1 而非 1 + 0。原书表格可能有排印问题，截图照原样，**请对照纸本确认**。
3. 第 54 页例题解答：最低位一对「0 + 1 = 1$\bar{1}$」、下一对「$\bar{1}$ + 0 = 0$\bar{1}$」、最高一对「1 + 0 = 01」，和为 $1\bar{1} + 0\bar{1}0 + 0100 = 10\bar{1}_2$（= 3，与 $1\bar{1}0_2 = 2$ 加 $001_2 = 1$ 相符）。照录。
4. 第 52 页「One of the reasons why the multiplier of Figure J.2 (page J-4) needs a clock」，页码照录。第 55 页「Figure J.2(b) on page J-4」「SRT division (page J-45)」，页码照录。
5. 第 56 页「suppose that we take a radix of 4, use quotient digits of 2, 1, 0, $\bar{1}$, $\bar{2}$」照录。「restricting |r_i| ≤ 2b/3」照录。
6. 第 57 页「Exercises J.34(c) and J.35」：本附录习题尚未定锚点，写成纯文本「习题 J.34(c) 和 J.35」。
7. 第 52 页「Pipelining is discussed in general in Appendix C」写成链接 [附录 C](#app-c)（09-app-c-01.Rmd 锚点为 app-c）。
8. 第 57–58 页「All were introduced in 1988 and run with a cycle time of about 40 nanoseconds」，而图 J.36 中三者分别为 40、50、30 ns，原文说「about」，照译「40 ns 左右」。

## 新定术语

| 英文 | 译法 |
|---|---|
| two-pass arrangement / multipass array multiplier | 两遍结构 / 多遍阵列乘法器 |
| "retires" 5 bits of B | 处理完 B 的 5 位 |
| even/odd multiplier / even/odd array | 奇偶乘法器 / 奇偶阵列 |
| asynchronous logic | 异步逻辑 |
| Wallace tree | Wallace 树（不译人名） |
| binary tree multiplier | 二叉树乘法器 |
| MSI parts | MSI 器件 |
| signed-digit representation / signed-digit tree | 带符号数字表示 / 带符号数字树（与 09-app-j-08 一致） |
| (2,1) adder | (2,1) 加法器 |
| carry-save division | 进位保留除法 |
| quotient selection | 商选择 |
| quotient lookup table | 商查找表 |
| remainder step | 求余步（与 09-app-j-03 一致） |
| portable codes | 可移植的代码 |
| photomicrograph / floor plan | 显微照片 / 布局图 |
| pads | 焊盘 |
| forwarding | 前递（与第 3 章、附录 C 一致） |
