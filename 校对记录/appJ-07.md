# 附录 J 校对记录（09-app-j-07.Rmd）：J.10 后半、J.11 谬误与陷阱、J.12 历史回顾、习题 J.1～J.26

页段：底本/appendix-j.pdf 第 61–70 页（书页 J-61～J-70，PDF 页号与书页号一致）。本段各页页眉都印着 J 字母页码，没有混入其他附录的页。

- 第 61 页开头「numbers needs to be done carefully, because the figures for the MIPS chip are …」是第 60 页段落的延续，按分界规则不译，由上一部分译完。本文件从「The MIPS chip has the fewest transistors of the three.」开始。
- 第 61 页末段「Addition on the R3010 uses …」跨到第 62 页，已译完整。
- 第 70 页结束于习题 J.26 (c)，没有跨页段落。J.27 起于第 71 页，归下一部分。

## 图

- 图 J.37（续）（第 61 页）：Weitek 3364 的显微照片和布局图。截图 images/appj/fig-j-37-cont.png（200 dpi，含图内「Weitek 3364」字样，不含「Figure J.37 (Continued)」图注）。原书续图只有「Figure J.37 (Continued)」，译文图注补了一句「Weitek 3364 的芯片版图……」，图内标注译文附在图注末尾。锚点用 `fig-j-37-cont`，避免与上一部分的 `fig-j-37` 重复。**合并时请确认上一部分是否已收录这张续图，避免重复。**

## 原书疑点与处理

1. J.12 节 IBM 370 一段：抽取文本为「16^27 = 2^4 × 2^7 = 2^29，compared with 2^28」，页面图上指数为嵌套形式，按数学意义写成 $16^{2^7} = 2^{4 \times 2^7} = 2^{2^9}$，IEEE 为 $2^{2^8}$。请对照纸本确认。
2. J.10 节「Double-precision division is about four times slower than multiplication」按手册倍数规则译作「所需的时间大约是乘法的 4 倍」。
3. J.10 节「an 0(n) multiplier」、习题 J.26 (c)「0(√n)」原书印作数字 0，按意思写成 $O(n)$、$O(\sqrt{n})$。
4. 习题 J.22 提示中的连乘号原书写作 Π 下标「i=1,n」，照录为 `\prod_{i=1,n}`；第二个、第三个 Π 原书无上下标，照录。
5. 习题 J.21 的 q 上横线写作 $\bar{q}$。
6. 习题 J.25 原书分值为「[Discussion]」，译作「[讨论]」。
7. 「Fallacy/Pitfall」格式照附录 A（09-app-a-05.Rmd）：`**谬误**　*……*`。
8. 习题标题原书无作者名，写作 `## 习题 {- #sec-j-exercises}`。
9. Intel 引语「This doesn't even qualify as an errata … even if you're an engineer, you're not going to see this.」照译，省略号保留。
10. 正文引用的 Taylor [1985]、Kahaner 1988 等文献条目保持英文「作者 [年份]」形式，不加链接。

## 新定术语

| 英文 | 译法 |
|---|---|
| carry-propagate adder | 进位传播加法器 |
| carry-select adder | 进位选择加法器 |
| carry-skip adder | 进位跳跃加法器 |
| carry-lookahead (CLA) | 超前进位（CLA） |
| ripple | 行波进位（与 09-app-j-01 一致） |
| radix-4 / radix-8 Booth recoding | 基 4 / 基 8 Booth 重编码 |
| even/odd technique | 奇偶技术 |
| signed-digit adder / form | 有符号数字加法器 / 有符号数字形式 |
| overlapped triplets | 重叠三元组 |
| quotient digit / quotient lookup table | 商数字 / 商查找表 |
| retiring half the bits | 处理掉一半的位 |
| end-around carry | 循环进位（首次注英文） |
| reserved operand | 保留操作数 |
| signaling NaN | 发信号的 NaN |
| projective bits | 射影位（首次注英文） |
| double-extended precision | 双精度扩展格式 |
| guard digit / round digit / sticky digit | 保护位 / 舍入位 / 粘滞位 |
| scale factor | 比例因子 |
| false positive | 误报 |
润色时改正：J.12 节 Pentium 一段「大约每九十亿次才算错一次商」中的「大约」原文没有（only … 1 out of 9 billion times），已删去。
