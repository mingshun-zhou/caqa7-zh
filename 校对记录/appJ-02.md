# 附录 J 校对记录（09-app-j-02.Rmd）：整数运算的系统问题、浮点、浮点乘法（一）

页段：底本/appendix-j.pdf 第 11–20 页（书页 J-11～J-20，页眉均为附录 J，没有混入其他附录的页）。第 11 页开头「is substantially slower (and less frequent) than multiplication…」是上一页段落的后半，由 09-app-j-01.Rmd 译出；本文件从小标题「Systems Issues」开始。第 20 页末尾关于上溢的段落跨到第 21 页，已译到「…shows that this can make a difference.」为止；第 21 页的「Denormals」小标题起归下一部分。

## 图

- 图 J.5（第 11 页）、图 J.6（第 12 页）、图 J.7（第 16 页）、图 J.8（第 17 页）、图 J.11（第 20 页）：排成 Markdown 表格。
- 图 J.5 中 MIPS R3000 一行原书把后两列合并为一格（「No. Software must deduce it from sign of operands and result.」），译文写在第 4 列，第 5 列写「（同左）」。
- 图 J.9（第 18 页）、图 J.10（第 19 页）：截图 images/appj/fig-j-9.png、fig-j-10.png（200 dpi），图内英文标注的译文补在图注末尾。
- 第 20 页例题中四种舍入模式的结果表不是编号图，排成无图名的 Markdown 表格。

## 原书疑点

1. 第 18 页例题：两个操作数的指数字段印作 7 位「1000001」，而单精度指数字段是 8 位；按下文的加法竖式，应为 10000010（130，即 3+127）和 10000011（131，即 4+127）。译文照录原书的位串，请对照纸本确认。
2. 同一例题中，第一个数符号位为 1 却印作「= −1 × 2³」，第二个数为 1 × 2⁴，结果形式「1 ???????? 000…」，与之一致，照录。
3. 第 13 页公式 x DIV y = ⌊x/y⌋，PDF 抽取为「Px/yR」，按页面图改为取整符号。
4. 「见习题 J.12」、「第 J-7 页的『有符号数』小节」、「图 J.2（第 J-4 页）」照原书保留页码；图 J.2 链接到 #fig-j-2，J.7 节链接到 #sec-j-7。

## 新定术语

| 英文 | 译法 |
|---|---|
| trap (on overflow) | 自陷（与附录 A、K 一致） |
| enable bit | 允许位 |
| multiply-step / divide-step instruction | 乘法步 / 除法步指令 |
| interlock | 互锁 |
| multiple-precision | 多倍精度 |
| fixed point / floating point | 定点 / 浮点 |
| significand | 有效数 |
| fraction (field) | 小数（字段） |
| exponent / biased exponent / unbiased exponent | 指数 / 偏置指数 / 无偏指数 |
| bias | 偏置值；bias method 译「偏置法」 |
| denormal (denormalized) number | 非规格化数 |
| gradual underflow | 渐进下溢 |
| flush to zero | 清为 0；flush-to-zero system 译「清零系统」 |
| unpack | 解包 |
| NaN | NaN（Not a Number，非数） |
| round to nearest / toward 0 / toward ±∞ | 舍入到最近 / 向 0 舍入 / 向 ±∞ 舍入 |
| guard / round / sticky bit | 保护位 / 舍入位 / 粘滞位 |
| sign magnitude | 原码 |
| Booth recoding | Booth 重编码 |
| carry-out | 进位输出 |
| zero finder | 求零点程序 |
