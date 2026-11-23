# 附录 J 校对记录（09-app-j-04.Rmd）：J.6 节（续）、J.7 节、J.8 节（先行进位，前半）

页段：底本/appendix-j.pdf 第 31–40 页（书页 J-31～J-40），全部印着附录 J 的页码，没有混入其他附录的页。

- 第 31 页第一行「End loop」是第 30 页迭代算法（Loop … End loop）的结尾，归上一部分，本文件不译，从「The two iteration methods are related.」开始。
- 第 40 页末段「With these preliminaries out of the way…」跨到第 41 页，已译到「…to compute c8 for the carry-out of the adder.」为止。第 41 页的下一段「The bits in a CLA must pass through about log2n logic levels…」归下一部分。
- 本文件结束于 J.8 节「先行进位」小标题下，没有习题和参考文献。

## 图

- 图 J.14（第 39 页）：截图 images/appj/fig-j-14.png（200 dpi），放在式 J.8.3 所在段落之后。图内底部公式补在图注末尾。
- 图 J.15（第 40 页）：截图 images/appj/fig-j-15.png（200 dpi），放在文件末尾。1 型、2 型单元的公式补在图注末尾。
- 正文引用的图 J.16、图 J.17 在第 41 页以后，已按 #fig-j-16、#fig-j-17 写链接，由下一部分提供锚点。

## 公式

- 式 J.8.1～J.8.6 用 `\tag{J.8.n}` 编号，与 09-app-j-01.Rmd 的 `\tag{J.2.1}` 写法一致。正文中引用公式写纯文本「式 J.8.5」。
- 第 31 页牛顿法展开式：原书方括号不配对，写作「x0(2 − x0b)[(1 + (x0b − 1)²][1 + (x0b − 1)⁴]…[1 + (x0b − 1)^(2^i)]」，第一个方括号里多了一个左圆括号。译文按含义写成 $x_0(2 - x_0 b)[1 + (x_0 b - 1)^2][1 + (x_0 b - 1)^4]\cdots[1 + (x_0 b - 1)^{2^i}]$，**请核对**。
- 第 35 页「q Š 2p + 2」「q = 53 Š 2p + 2 = 50」中的「Š」是排版乱码，根据上面斜体规则「q ≥ 2p + 2」改为 ≥。原文「so q Š 2p+2 is not true」译作「$q \ge 2p + 2$ 不成立」。
- 第 37 页「The exact product is 0.1111 × 2^Emin」原书没有下标 2，照录。
- 第 39 页 P01 的公式左边印成小号「p01」，按上下文改为 $P_{01}$。
- 第 32 页「2^127/2^−126 = 2^253」照录。

## 其他

- 「for IEEE arithmetic, double precision has q = 53 and p = 24」：原文 q 指双精度、p 指单精度的有效数位数，译作「双精度 q = 53，单精度 p = 24」，补出了「单精度」。
- 习题 J.20、J.21、J.22、J.25 和式 J.6.3 写纯文本；J.3、J.6、J.10 节和图 J.2、J.7 写链接。
- 参考文献 Montoye, Hokenek, and Runyon [1990]、Markstein [1990]、Coonen [1984]、Goldberg [1991]、Cody et al. 1984 照录作者名和年份。

## 新定术语

| 英文 | 译法 |
|---|---|
| floating-point remainder / REM | 浮点余数 / REM（保留） |
| round-to-even | 舍入到偶数 |
| remainder-step instruction | 求余步指令 |
| argument reduction | 参数约简 |
| machine π | 机器 π |
| fused multiply-add | 融合乘加（与第 4 章一致） |
| correctly rounded | 正确舍入 |
| single / single extended / double / double extended | 单精度 / 单精度扩展 / 双精度 / 双精度扩展 |
| quad (precision) | 四倍精度 |
| significand | 有效数 |
| double rounding | 两次舍入 |
| sticky (flag) | 粘滞的 |
| trap handler / trap-enable bit | 陷阱处理程序 / 陷阱允许位 |
| underflow / overflow / divide by zero / inexact / invalid | 下溢 / 上溢 / 除以零 / 不精确 / 无效 |
| denormal / normalized | 非规格化数 / 规格化数 |
| gradual underflow | 逐级下溢 |
| flush-to-zero | 清零（flush-to-zero） |
| before rounding / after rounding rule | 舍入前规则 / 舍入后规则 |
| wrapped around (exponent) | （指数）回绕 |
| page fault | 页面失效 |
| false positive | 误报 |
| carry-lookahead adder (CLA) | 先行进位加法器（CLA） |
| carry-skip / carry-select | 进位跳跃 / 进位选择 |
| ripple-carry adder | 行波进位加法器（与 J-01 一致） |
| generate / propagate | 产生 / 传播 |
| fan-in | 扇入 |
| round to nearest | 就近舍入 |
