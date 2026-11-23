# 附录 J 校对记录（09-app-j-03.Rmd）：J.4 节后半、J.5 节、J.6 节开头

页段：底本/appendix-j.pdf 第 21–30 页（书页 J-21～J-30），各页页眉都印着 J 字母页码，没有混入其他附录的页。第 21 页开头「between −125 and 381 ……can make a difference.」是第 20 页那段的后半，归上一部分译。本文件从第 21 页「Denormals」小标题开始，到第 30 页末 Goldschmidt 算法第 4 步的循环结束；循环末行「End loop」印在第 31 页顶，属于同一个列表项，一并译出。第 31 页从「The two iteration methods are related.」开始，归下一部分。

## 图

- 图 J.12（第 24 页）：排成 Markdown 表格，表头 swap、compl、sign(a1)、sign(a2)、sign(result) 照录英文（正文和图注按英文列名引用），Yes/No 照录。
- 图 J.13（第 29 页）：截图 images/appj/fig-j-13.png（200 dpi），已检查不缺边、不带图注。图内标注只有 f(x)、f(x_i)、x_i、x_{i+1}、x，都是数学符号，没补译文。
- 第 27 页「consider the following diagram of step 4」后面的小示意图（s1、s2 对齐，宽度 p，s2 的低位标 y、z）没有图号，排成代码块。

## 原书疑点

1. 第 26 页「one adder is guaranteed to reduce the correct answer」，reduce 应为 produce，按「得到正确答案」译。
2. 第 29 页「let x0 = a and y0þ = b」多了一个「þ」（排版错误），按 y0 = b 译。
3. 第 25 页第一个例题第 8 步，原书写「Final answer: −S × 2^exp = 1.001₂ × 2¹」，等号右边漏了负号（两个加数都是负数，结果应为 −1.001₂ × 2¹）。译文照录原书，请确认是否补负号。
4. 第 26 页「Intel 860 [Kohn and Fu 1989]」照录；引文保留英文作者名和年份，未做链接（参考文献在本附录末尾，由后面的部分译）。
5. 「Putting It All Together」一节没有给节号，译作「融会贯通」一节，未加链接。
6. 交叉引用：J.7、J.10 节写成链接 #sec-j-7、#sec-j-10；图 J.11、J.2 写成链接 #fig-j-11、#fig-j-2（在前面部分中），合并时请确认锚点存在。习题 J.12、J.17、J.19、J.20 写纯文本。
7. 公式 J.6.1～J.6.3 用 \tag{} 标号；正文引用写「式 J.6.1」。
8. 第 30 页 Goldschmidt 循环里右栏方括号注释照录，「if」译「若」；循环用 array 排版。
9. 第 22 页第一行「a “single times single gets double” instruction」译作「单字长乘单字长得双字长」。

## 新定术语

| 英文 | 译法 |
|---|---|
| denormal / denormalized number | 非规格化数（与 07-dsa-08 一致） |
| significand | 有效数 |
| biased / unbiased exponent | 偏置指数 / 无偏指数 |
| guard bit / round bit / sticky bit | 保护位 / 舍入位 / 粘滞位 |
| round up / roundup | 进 1 |
| carry-out | 进位输出 |
| cancellation | 抵消 |
| unpack / pack | 拆包 / 打包 |
| two's complement | 补码 |
| signed magnitude | 原码 |
| variable shift | 可变（位数的）移位 |
| iterative refinement | 迭代求精 |
| Newton's iteration | 牛顿迭代 |
| self-correcting | 自校正 |
| Goldschmidt's algorithm | Goldschmidt 算法 |
| trap / trap handler | 陷阱 / 陷阱处理程序 |
