# 附录 J 统稿校对记录

底本：底本/appendix-j.pdf，共 76 页。第 1–74 页是书页 J-1～J-74。第 75 页是空白页，第 76 页是附录 K 的目录页（印 K 字母页码），这两页都跳过。分部的细节见 appJ-01.md～appJ-08.md。

## 文件与范围

| 文件 | PDF 页 | 内容 |
|---|---|---|
| 09-app-j-01.Rmd | 1–10 | 附录标题、引语、J.1、J.2（到「有符号数」小节结束） |
| 09-app-j-02.Rmd | 11–20 | J.2「系统问题」、J.3、J.4 前半 |
| 09-app-j-03.Rmd | 21–30 | J.4「非规格化数」「乘法的精度」、J.5、J.6 前半（Goldschmidt 算法） |
| 09-app-j-04.Rmd | 31–40 | J.6 后半、J.7、J.8「先行进位」前半 |
| 09-app-j-05.Rmd | 41–50 | J.8 后半、J.9 前半 |
| 09-app-j-06.Rmd | 51–60 | J.9 后半、J.10 前半（含图 J.37） |
| 09-app-j-07.Rmd | 61–70 | 图 J.37（续）、J.10 后半、J.11、J.12、习题 J.1–J.26 |
| 09-app-j-08.Rmd | 71–74 | 习题 J.27–J.36、参考文献（40 条） |

## 衔接检查

各页段的边界都对照 PDF 文本查过（第 11、21、31、41、51、61、71 页开头的跨页段落），没有漏译。只发现一处重复：

- 图 J.37（续）（第 61 页的 Weitek 3364 版图）在 09-app-j-06.Rmd 和 09-app-j-07.Rmd 中各收录了一次。现在删去了 06 中那份没有锚点的，保留 07 中的那份（锚点 fig-j-37-cont），因为这张图印在第 61 页。另外删去了 07 图注中原书没有的「左边是显微照片，右边是对应的布局图」，图注只保留「图 J.37（续）」和图内标注。

## 锚点核查

- 09-app-j-01.Rmd 第一行写的是 `# 计算机算术 {#app-j}`。
- sec-j-1～sec-j-12 都已定义。习题锚点是 `{- #sec-j-exercises}`（原书没有作者名），参考文献锚点是 `{- #sec-j-references}`。
- 图 J.1～J.37 全部定义了锚点，另外还有 fig-j-37-cont。截图图共 23 个文件，都在 images/appj/ 下，路径全部存在。表格图共 15 个：J.3–J.8、J.11、J.12、J.22、J.23、J.25、J.26、J.34、J.35、J.36。
- 本附录内的链接都能找到对应锚点。[附录 C](#app-c) 也能对上，锚点在 09-app-c-01.Rmd。
- 正文中提到的习题编号、公式编号（式 J.2.3 等）和原书页码（第 J-4 页等）都写成纯文本。

## 统稿时统一的术语（已改正文）

| 英文 | 统一译法 | 改动 |
|---|---|---|
| exponent / fraction | 指数 / 小数部分 | 01 引言把「阶码」「尾数」改成了「指数」「小数部分」 |
| significand | 有效数 | 全附录统一 |
| trap / trap handler | 陷阱 / 陷阱处理程序；trap on overflow 译「溢出时产生陷阱」 | 02 的「自陷」全部改了，与 03、04、07 和附录 C 一致 |
| gradual underflow | 渐进下溢 | 04 的「逐级下溢」改了 |
| carry-lookahead | 先行进位（CLA） | 07 的「超前进位」改了 |
| signed digit | 带符号数字 | 07 的「有符号数字」改了 |
| unpack / pack | 解包 / 打包 | 03 的「拆包」改了 |

## 全附录新定术语

| 英文 | 译法 |
|---|---|
| half / full adder；(2,2)/(3,2) adder | 半加器 / 全加器；(2,2)/(3,2) 加法器 |
| ripple-carry adder | 行波进位加法器 |
| carry-in / carry-out | 进位输入 / 进位输出 |
| restoring / nonrestoring division | 恢复余数除法 / 不恢复余数除法 |
| sign magnitude / two's complement / one's complement / biased | 原码 / 补码 / 反码 / 移码 |
| bias；biased / unbiased exponent | 偏置值；偏置指数 / 无偏指数 |
| Booth recoding | Booth 重编码 |
| denormal | 非规格化数 |
| flush to zero | 清零 |
| guard / round / sticky bit | 保护位 / 舍入位 / 粘滞位 |
| round to nearest (even) | 舍入到最近（偶数） |
| enable bit | 允许位 |
| multiply-step / divide-step / remainder-step | 乘法步 / 除法步 / 求余步 |
| fused multiply-add | 融合乘加 |
| double rounding | 两次舍入 |
| generate / propagate | 产生 / 传播 |
| carry-skip / carry-select adder | 进位跳跃加法器 / 进位选择加法器 |
| carry-save adder (CSA) / carry-propagate adder (CPA) | 进位保留加法器 / 进位传播加法器 |
| shifting over zeros | 跳 0 移位 |
| SRT division；redundant representation | SRT 除法；冗余表示 |
| overlapping triplets | 重叠三元组 |
| array / even/odd multiplier | 阵列乘法器 / 奇偶乘法器 |
| Wallace tree；signed-digit representation | Wallace 树；带符号数字表示 |
| Newton's iteration；self-correcting | 牛顿迭代；自校正 |
| Goldschmidt's algorithm | Goldschmidt 算法 |

## 汇总疑点（需对纸本）

1. 第 18 页（J.4 节例题）：两个操作数的指数字段印成 7 位的「1000001」，按下面的加法竖式应为 10000010 和 10000011。页面图确实印成这样，译文照录。
2. 第 25 页（J.5 节第一个例题第 8 步）：「−S × 2^exp = 1.001₂ × 2¹」，右边漏了负号，照录。
3. 第 61 页起（J.12 节 IBM 370 一段）：嵌套指数按 $16^{2^7}=2^{4\times2^7}=2^{2^9}$、$2^{2^8}$ 排版。
4. 第 54 页图 J.31：后两组的上横线印得很细，第六组上行读作「1 $\bar{1}$」，和正文例题的 $\bar{1}+0=0\bar{1}$ 不符。截图保持原样。
5. 第 31 页牛顿法展开式原书括号不配对，按含义改成了 $[1+(x_0b-1)^2]$。第 35 页「Š」按 ≥ 处理，第 39 页「p01」按 $P_{01}$ 处理。
6. 原书的「0(n)」「0(log n)」「0(√n)」印的是数字 0，统一改成大 O 记号。
7. 原文排印错误按意思处理的几处：第 26 页 reduce 应为 produce；第 29 页「y0þ」多了一个符号；第 47 页 SRT 规则缺 then。
8. 第 57–58 页说三种芯片的周期都是「about 40 ns」，图 J.36 中实际是 40、50、30 ns。原文用的是 about，照译。
9. 习题 J.27(c)、J.29 原文写「J.17」「J.27」，没有写 Figure，按图处理。习题 J.36「bottom CSAs」的含义需对照图 J.28 再确认。
10. 公式编号用 `\tag{J.x.y}`（J.2.1–J.2.3、J.6.1–J.6.3、J.8.1–J.8.6），构建时要确认 MathJax 能正常显示编号。
