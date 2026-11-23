# 附录 J 校对记录（09-app-j-01.Rmd）：J.1 引言、J.2 整数算术的基本技术（前半）

页段：底本/appendix-j.pdf 第 1–10 页（书页 J-1～J-10）。第 1 页是附录标题页（标题、作者 David Goldberg、章首引语），第 1 页没有混入其他附录的页。本文件从附录标题开始，到第 10 页末尾跨页的段落「Two final remarks: …… than it does on multiplication.」结束（这一段的最后一句在第 11 页开头，已译完）。第 11 页的「Systems Issues」小节和图 J.5 归下一部分。

## 图

- 图 J.1（第 3 页）：截图 images/appj/fig-j-1.png（200 dpi），图注末尾补了「Full adder」的译文。
- 图 J.2（第 4 页）：截图 images/appj/fig-j-2.png（200 dpi），含 (a)(b) 两部分，图注末尾补了「Carry-out」「Shift」的译文。原书图在「Radix-2 Multiplication and Division」小标题之前，译文放在该小标题之前，位置照原书。
- 图 J.3（第 6 页）：恢复余数 / 不恢复余数除法的逐步数值例子，排成两张 Markdown 表格（P、A、说明三列），说明文字已译。原书 A 列中已产生的商位用粗体，表格照用粗体，并在图名后补了一句「表中粗体数字是已经产生的商位」作说明。原书减数行带下划线（竖式写法），表格中无法表示，略去下划线。
- 图 J.4（第 10 页）：Booth 重编码数值例子，排成 Markdown 表格。原书的加数行下面有横线、横线下一行是和，表格中把「和」单独成行、说明栏留空。

## 原书疑点

1. 图 J.2 图注最后一句「If the difference is nonnegative, the low-order bit of A is set to 1」与前一句的条件重复，照译。
2. 第 9 页「The algorithm on page J-4」「Equation J.2.3 (page J-8)」等页码引用照录（J-4、J-8 为原书页码，式 J.2.3 实际在第 J-8 页，一致）。
3. 第 10 页「try −2^n−1^ × −2^n−1^, since this is the only case that produces a 2n − 1 bit result」照译。
4. 引言中参考文献引用（Patterson and Hennessy [2009] 等）写成纯文本，待附录 J 参考文献一节译出后可改为链接。
5. 公式 J.2.1～J.2.3 用 `\tag{}` 保留原书编号；正文引用写「式 J.2.3」纯文本。

## 新定术语

| 英文 | 译法 |
|---|---|
| half adder / full adder | 半加器 / 全加器 |
| (2,2) adder / (3,2) adder | (2,2) 加法器 / (3,2) 加法器 |
| ripple-carry adder | 行波进位加法器；ripple adder 译「行波加法器」 |
| carry-in / carry-out | 进位输入 / 进位输出 |
| logic level | 逻辑级数 |
| least/most-significant bit | 最低/最高有效位 |
| restoring / nonrestoring division | 恢复余数除法 / 不恢复余数除法 |
| sign magnitude / two's complement / one's complement / biased | 原码 / 补码 / 反码 / 移码 |
| bias | 偏置值 |
| overflow | 溢出 |
| arithmetic shift | 算术移位 |
| Booth recoding | Booth 重编码 |
| exponent / fraction（浮点） | 阶码 / 尾数 |
| write-off | 核销 |
| microcode | 微码 |
