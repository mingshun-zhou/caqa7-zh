# 附录 C 校对记录（09-app-c-02.Rmd）：C.2 节（三类冒险、有停顿时的性能、数据冒险、转移冒险）

页段：底本/appendix-c.pdf 第 11–20 页（书页 C-11～C-20，PDF 页号与书页号一致，本段没有混入其他附录的页）。

- 开头：第 11 页开头「the performance from the ideal speedup gained by pipelining. There are three classes of hazards:」是第 10 页 C.2 节第一段的后半，已由 09-app-c-01.Rmd 译出。本文件从三类冒险编号列表「1. Structural hazards arise from resource conflicts…」开始，与 appC-01.md 的分界说明一致。
- 结尾：第 20 页最后是「Because of the following: Pipeline stall cycles from branches = Branch frequency × Branch penalty」，这句话跨到第 21 页，以「we obtain: Pipeline speedup = Pipeline depth / (1 + Branch frequency × Branch penalty)」结束，已译完。第 21 页从「The branch frequency and branch penalty can have a component…」起（以及图 C.11、MIPS R4000 例题）归下一部分。
- 节与小标题：本段没有新的编号节。粗体无编号小标题「Performance of Pipelines With Stalls」「Data Hazards」「Branch Hazards」用 `### … {-}`；斜体的下一级小标题「Minimizing Data Hazard Stalls by Forwarding」「Data Hazards Requiring Stalls」「Reducing Pipeline Branch Penalties」「Performance of Branch Schemes」用 `#### … {-}`。

## 图

- 图 C.4（第 13 页）、图 C.5（第 15 页）、图 C.6（第 16 页）、图 C.7（第 17 页）：截图 images/appc/fig-c-4.png～fig-c-7.png。先用 pdftoppm -r 200 渲染整页，再按图注上方的横线自动定界裁剪（四边留约 20 像素白边），已用 read_image 逐张检查：不缺边、不带图注。图注末尾补了图内英文标注译文。
- 图 C.8（第 18 页）、图 C.9（第 19 页）、图 C.10（第 20 页）：原书是表格，排成 Markdown 表格。原表没有表头行，补了「指令 / 时钟 1～时钟 n」列名，并在图 C.8 图注末尾注明；图 C.10 上下两半合成一张表，「idle」译「空闲」并保留粗体。
- 图 C.11（第 21 页）不在本段，正文链接 [图 C.11](#fig-c-11) 指向下一部分。

## 原书疑点

1. 图 C.4～C.7 图内的指令仍是旧版 MIPS 写法（DADD R1, R2, R3；DSUB；LD R1, 0(R2)；SD R4,12(R1) 等），与正文的 RISC-V 指令（add x1,x2,x3 等）不一致。没有改图，在图注里注明对应关系。
2. 第 12 页写后写（WAW）一项末句原书印「WAR hazards are also impossible in the simple five stage…」，按上下文应为 WAW，译文改为 WAW。同页两处「integrer pipeline」为 integer 之误，译「整数流水线」。
3. 第 11 页加速比公式的第二行和第三行完全相同（第三行原应是化简后的形式，或是重复排版），照录两行。第 12 页公式中的「CPI unpiplined」「Pipelines stall」是拼写错误，译文不受影响。

其他：

4. 第 12 页「beginning on page C.65」译作「从 C-65 页开始」，页码照录，未核对。
5. 第 12 页 WAR 的定义「read of register x by instruction i occurs after a write of register x by instruction j」照原书译。
6. 第 18 页「One stall cycle for every branch will yield a performance loss of 10% to 30%」，数字照录。
7. 第 20 页延迟转移的代码块照录英文，下标「successor₁」写作 successor_1，注释译成中文。
8. 正文写作「RISC V」（抽取丢了连字符），与 appC-01 一致改为 RISC-V。

## 新定术语

| 英文 | 译法 |
|---|---|
| RAW / WAR / WAW hazard | 写后读 / 读后写 / 写后写冒险（与第 3 章一致） |
| depth of the pipeline | 流水线深度 |
| forwarding / bypassing / short-circuiting | 前递 / 旁路 / 短路（与第 3 章一致） |
| bypass path / forwarding path | 旁路通路 / 前递通路 |
| pipeline interlock | 流水线互锁 |
| bubble | 气泡 |
| taken / not taken (untaken) branch | 成功的 / 不成功的转移（与第 3 章一致） |
| branch penalty | 转移开销 |
| freeze / flush the pipeline | 冻结 / 清空流水线 |
| predicted-not-taken / predicted-taken | 预测不成功 / 预测成功 |
| delayed branch | 延迟转移 |
| branch delay slot | 转移延迟槽 |
| sequential successor / branch successor | 顺序后继指令 / 转移后继指令 |
| no-op | 空操作 |
| fall-through | 顺序往下的指令 |
| idle | 空闲 |
