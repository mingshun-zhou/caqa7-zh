# 附录 C 校对记录（09-app-c-06.Rmd）：C.5 节后半、C.6 节开头

页段：底本/appendix-c.pdf 第 51–60 页（书页 C-51～C-60）。这 10 页的页眉都印着 C 字母页码，没有混入相邻附录的页。

- 开头：第 51 页上方是图 C.32、图 C.33（两张表），之后正文开头的「write the register file. With only a single register file write port…」是第 50 页段落的后半段，由上一部分译出，本文件不译。本文件正文从第 51 页第二段「There are two different ways to implement this interlock.」开始。图 C.32、C.33 印在第 51 页，按「图归所在页」放在本文件开头。
- 结尾：第 60 页最后一段「In addition to the increase in stalls for loads and branches, the deeper pipeline increases the number of levels of forwarding…」，到「EX/DF, DF/DS, DS/TC, and TC/WB.」结束，没有跨页。第 61 页从小标题「The Floating-Point Pipeline」开始，归下一部分。
- 范围内的标题：「Maintaining Precise Exceptions」「Performance of a Simple RISC V FP Pipeline」（无编号，加 {-}），以及 C.6 节「Putting It All Together: The MIPS R4000 Pipeline」（{#sec-c-6}）。

## 图

- 图 C.32（第 51 页）、图 C.33（第 51 页）、图 C.38（第 60 页）：原书是流水线时序表，排成 Markdown 表格。列数多（17 列），表头只写周期号 1～N，表后加一行「表中 1～N 为时钟周期号」代替原书的「Clock cycle number」表头；Stall 译「停顿」，指令照录为代码。
- 图 C.34（第 57 页）、图 C.35（第 58 页）：柱状图，截图 images/appc/fig-c-34.png、fig-c-35.png（200 dpi），图注末尾补了图例和坐标轴译文。
- 图 C.36、图 C.37（第 59 页）、图 C.39（第 60 页）：截图 images/appc/fig-c-36.png、fig-c-37.png、fig-c-39.png（200 dpi），图注末尾补了标注译文。
- 所有截图已用 read_image 检查，不缺边、不带图注。
- 正文引用了图 C.40（第 61 页，归下一部分），链接写作 #fig-c-40；引用的图 C.30（第 48 页）写作 #fig-c-30。

## 原书疑点

1. 第 52 页 WAW 冒险一段，第 7 版把指令名全部印成了 fadd.d（如「If the fadd.d instruction were issued one cycle earlier… it would write f2 one cycle earlier than the fadd.d」「delay the issue of the load instruction until the fadd.d enters MEM」），自相矛盾。按图 C.33 和第 5、6 版同段（L.D 与 ADD.D），应是「fld 提前一个周期发射……比 fadd.d 早写 f2」。译文据此把后写的那条改为 fld：被覆盖的结果是 fadd.d 的；停顿或发射的是 fld；「检测 fld 可能先于 fadd.d 完成」「fadd.d 当前位置」「最后 f2 中应为 fld 的结果」。**请对照纸本确认。**
2. 第 59–60 页图 C.37、C.38 图注和正文中的「x1 load delay」「x1 stall」「x1 branch stall penalty」：PDF 中印作「x1」，显然是「2-cycle」之类的字样抽取/排版错误。正文明确说 load 延迟两个周期（图 C.38 中也是两个停顿），转移成功时延迟槽后有两个空闲周期，译文一律作「2 个周期」。
3. 第 58 页图 C.35 图注「The stalls occurring for the a simple RISC V FP pipeline」多一个 the，照意思译。
4. 第 56 页「Figure C.30 on page C.48」，译作「第 C-48 页图 C.30」。
5. 第 60 页「forwarding … could happen from the ALU/MEM or the MEM/WB registers」：五段流水线的寄存器通常称 EX/MEM，原书写 ALU/MEM，照录。
6. 第 51 页图 C.32 图注「Each instruction in this sequence is dependent on the previous」照译「每条指令都相关于前一条指令」。
7. 第 54 页「in thepast fifteen years」（缺空格）照意思译「过去十五年里」。
8. 数字核对：图 C.34 加/减/转换平均 1.7，(1.7+1.6+2.3+2.1+0.7)/5 = 1.68；1.7/3 ≈ 57%，原书写 56%，照录。乘法 2.8 是 7 周期延迟的 40%，原书写 46%（若按 6 周期计为 47%），照录。除法 (15.4+12.4+0.4+24.5+18.6)/5 = 14.26，与 14.2 相符。图 C.35 各程序合计：doduc 0.98+0.07+0.08+0.08 = 1.21，su2cor 0.61+0.02+0.01+0.01 = 0.65，与图注一致；浮点结果停顿平均 (0.98+0.52+0.54+0.88+0.61)/5 = 0.706。
9. 「Smith and Pleszkun (1988)」按文献引用格式照录英文。

## 新定术语

| 英文 | 译法 |
|---|---|
| interlock | 互锁 |
| reservation register | 预约寄存器（reservation register） |
| out-of-order completion | 乱序完成 |
| imprecise / precise exception | 非精确异常 / 精确异常 |
| drain (the pipeline) | 排空 |
| history file / future file | 历史文件 / 未来文件（首次注英文） |
| trap-handling routine | 陷阱处理程序 |
| superpipelining | 超流水线 |
| delayed branch / delay slot | 延迟转移 / 延迟槽 |
| predicted-not-taken | 预测不转移 |
| branch-likely instruction | 「可能转移」（branch-likely）指令 |
| taken / untaken branch | 转移成功的 / 不转移的转移指令 |
| tag check | tag 检查 |
| forwarding / bypass | 前递 / 旁路（与第 3 章一致） |
