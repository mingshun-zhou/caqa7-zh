# 附录 C 校对记录（09-app-c-08.Rmd）：C.7 节末段、C.8～C.10 节、习题

页段：底本/appendix-c.pdf 第 71–80 页。第 71–79 页印 C-71～C-79；**第 80 页是附录 D 的目录页**（D.1 Introduction D-2 …… Case Studies with Exercises by Andrea C. Arpaci-Dusseau and Remzi H. Arpaci-Dusseau D-49），不属于本附录，未译。附录 C 没有单独的参考文献节（C.10 只指向在线的 M.5 节），因此本文件不设参考文献标题。

- 开头：第 71 页顶部「and the benefits of forwarding. … We would need additional buffering to eliminate this overhead.」是上一页段落的延续，已由 09-app-c-07.Rmd 译出，跳过。本文件从「Based on its own data structure, the scoreboard controls the instruction progression…」开始（C.7 节最后一段）。
- 结尾：第 79 页习题 C.11 (b)「Demonstrate a WAW hazard requiring a stall.」为附录 C 正文最后一句。

## 图

- 本部分没有编号的图。
- 习题 C.2 的转移频度、习题 C.5 的流水线结构原书是无编号的排版表格，排成 Markdown 表格（C.2 补了「类别 / 频度」列名；C.5 表头行为空，第一行即原书首行）。
- 本文件引用的图 C.5、C.6、C.8 所在的 09-app-c-02.Rmd 目前尚不存在，锚点 #fig-c-5、#fig-c-6、#fig-c-8 合并时请确认。

## 原书疑点

1. 习题 C.11 标作 [10/10/10]，但只有 (a)、(b) 两个子题，照录。
2. 习题 C.1 章节标注为 <A.2>，其余子题均为 <C.2>，疑为 <C.2> 之误，照录。
3. 习题 C.9 说「Here is the MIPS code」，实际代码是 RISC-V 指令（fld、fmul.d、addi 等），照译为 MIPS；C.9 (b)(c) 标 <C.8>，但记分牌在 C.7 节、C.8 节是谬误与陷阱，C.10 同样标 <C.8>，照录。另外 (a)～(c) 都要求「从第一条指令进入 WB 段」计数，(c) 的段名是 WR，照译。
4. C.9 分值写作 [20/22/22]，而各子题标的是 [20]，照录。
5. C.1 代码 `sd x1,0,(x2)` 多一个逗号，照录。
6. 正文和习题中「RISC V」（抽取丢了连字符）统一为 RISC-V。
7. C.8 节第三条陷阱：「idle clock cycles increases by 18%」照译为「增加了 18%」（未说明是相对增长还是百分点）。
8. C.5 「Branches use a full compare of two registers」译「对两个寄存器做完整比较」。

## 新定术语

| 英文 | 译法 |
|---|---|
| trap / trap routine | 陷阱 / 陷阱处理程序 |
| microinstruction level | 微指令一级 |
| tight optimized code | 经过优化的「紧凑」代码 |
| idle clock cycles | 空闲时钟周期 |
| flushing the pipeline | 清空流水线（与 09-app-c-03.Rmd 一致） |
| predicted taken / not taken | 预测为成功 / 预测为不成功 |
| pipeline register delay | 流水线寄存器的延迟 |
| resolved（branch） | 解析 |
| incrementer | 增量器 |
| register-memory architecture | 寄存器-存储器体系结构 |
| register indirect addressing | 寄存器间接寻址 |
| micropipeline | 微流水线 |
| misprediction rate / mispredict penalty | 预测错误率 / 预测错误开销 |
| deadlock | 死锁 |
