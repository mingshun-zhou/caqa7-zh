# 附录 H 校对记录（09-app-h-05.Rmd）：第 5 部分

页段：底本/appendix-h.pdf 第 41–46 页。第 41–44 页印 H-41～H-44，属本附录。第 45 页为空白页；第 46 页是附录 I 的目录页（I.1 Introduction I-2 …），不属本附录，跳过。
开头：第 41 页开头「to Itanium 2, the Pentium processors improved by slightly more than a factor of three. …implementations.」是第 40 页段落的后半，不译（上一部分译完）。本文件从「The Itanium 2 can fetch and issue two bundles, or up to six instructions, per clock.」开始。
结尾：H.7 节最后一句「…once the older x86 architecture was extended to 64 bits.」，之后是参考文献（仅 1 条，原书标题为单数 Reference）。本附录没有习题。

## 图

- 图 H.10（第 41 页）：6 行两列的延迟表，排成 Markdown 表格，前置 `[图 H.10 …]{#fig-h-10 .caption}`。
- 图 H.11（第 43 页）：柱状图，200 dpi 截图存 images/apph/fig-h-11.png（含纵轴标题、图例和横轴程序名，不含图注和下方横线）。图注末尾补了纵轴和横轴分组的说明。

## 原书疑点

1. H.6 节正文说「five SPECint and five SPECfp benchmarks」，图注说「five SPECfp and SPECint」，一致；但正文随后说「for the full set of SPEC floating-point benchmarks」，比较的是全套 SPEC，而图中只有 10 个程序，照译。
2. 操作数分送段引用「Figure H.8」（指令束停顿导致性能差），链接写 #fig-h-8，请确认前面部分有此图锚点。
3. 「Instructions are allocated to functional units based on the bundle bits」：bundle bits 指指令束的模板（template）字段，译作「模板位」，请与前面部分 IA-64 指令格式的译法核对。
4. 参考文献页码原文抽取为「18e21」「1e12」，按页面图改为连接号 18–21、1–12；SIGPLAN'95 的弯引号改为直引号。
5. 「Hewlett-Packard」译作「HP 公司」。

## 新定术语

| 英文 | 译法 |
|---|---|
| bundle | 指令束（bundle），首次注英文；bundle slot 译「指令束槽位」；split bundle 译「拆分的指令束」 |
| I-unit / M-unit / B-unit / F-unit | I 部件 / M 部件 / B 部件 / F 部件 |
| instruction delivery / operand delivery | 指令分送 / 操作数分送 |
| register rotation / register stacking | 寄存器旋转 / 寄存器栈 |
| scoreboard | 记分牌（与第 3 章一致） |
| post NaTs | 置上 NaT |
| lockstep parallelism | 步调一致的并行 |
| IPF | 保留缩写 |

润色时改正：H.6 节性能段「have larger die sizes」原译「晶片面积也大得多」，多了程度，改为「晶片面积也更大」。
