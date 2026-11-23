# 附录 H 校对记录（09-app-h-03.Rmd）：第 3 部分

页段：底本/appendix-h.pdf 第 21–30 页（书页 H-21～H-30）。本段各页页眉均印 H 字母页码，没有混入其他附录的页。

开头：第 21 页开头「bookkeeping code will often be needed on the entry or exit point. The key assumption is…」是第 20 页踪迹调度段落的后半段，按分界规则不译，留给第 2 部分。本文件从第 21 页第二段「Although trace scheduling has been successfully applied to scientific code…」开始，接着是无编号小标题 Superblocks、H.3 节结尾段、H.4 节全文、H.5 节开头及「Hardware Support for Preserving Exception Behavior」小节。

结尾：第 30 页最后一段「A third approach for preserving exception behavior tracks exceptions…」完整结束于本页「…stores are never speculative and thus trap if either operand is "poison."」，没有跨页。第 31 页的毒位例题（「Consider the code fragment from page H-29…」）留给第 4 部分。

注：H.3 节结尾段「Loop unrolling, software pipelining, trace scheduling, and superblock scheduling all aim at…」起于第 21 页末、跨到第 23 页（中间隔着整页图 H.5），已译完整。

## 图

- 图 H.5（第 22 页，整页图）：截图 images/apph/fig-h-5.png（200 dpi，-x 165 -y 335 -W 2190 -H 2322），不含页眉、图注和图下横线，已检查四边完整（最底部 C(i) 框出来的箭头保留）。放在 H.3 节结尾段之后、H.4 节标题之前。图注末尾补了图内标注译文。
- 第 25 页例题中的两张双发射指令槽代码表，原书没有图号，排成无图号的 Markdown 表格（三列：第一指令槽的操作码、操作数，第二指令槽）。
- 其余代码段照录，汇编注释译成中文。

## 原书疑点

1. 第 30 页毒位一段与第 31 页例题：本段无问题；但需提醒第 4 部分，第 31 页例题代码注释写「exception for speculative LW」、正文说「nonspeculative SW」，而代码实际是 sLD / SD。
2. 第 25 页「speculatively move an instruction and make it predicted」，按上下文应为 predicated，译作「使之成为谓词指令」。
3. H.5 节第一个推测例题的题干「Consider that the following code fragment…」语法不通，按意思译。H.4 节绝对值一段，PDF 抽字中 `A ¼ abs (B)` 的 ¼ 是「=」的乱码，已按页面图改正。
4. H.4 节「no design with predicated execution (or conditional move) annuls instructions early」照译，未加限定。

## 新定术语

| 英文 | 译法 |
|---|---|
| superblock | 超块 |
| extended basic block | 扩展基本块 |
| tail duplication | 尾复制 |
| residual loop | 剩余循环 |
| compensation code / bookkeeping code | 补偿代码 / 簿记代码（与第 3 章 3.7 节一致） |
| conditional / predicated instruction | 条件指令 / 谓词指令 |
| conditional move | 条件传送（与第 3 章一致） |
| if conversion | if 转换 |
| full predication | 完全谓词化 |
| annul | 作废 |
| guarding branch | 守护它的转移 |
| poison bit | 毒位（poison bit） |
| terminating exception / resumable exception | 终止性异常 / 可恢复的异常 |
| fast mode | 快速模式 |
| speculation check | 推测检查 |
| issue slot / instruction slot | 发射槽 / 指令槽 |
