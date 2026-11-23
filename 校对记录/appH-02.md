# 附录 H 校对记录（09-app-h-02.Rmd）：第 2 部分

页段：底本/appendix-h.pdf 第 11–20 页（书页 H-11～H-20），各页页眉均印 H 字母页码，没有混入其他附录的页。
开头：第 11 页开头「to DADDUI R1,R2,#8 assuming this is the only use of R1 … are examples of this type of optimization.」属于第 10 页跨过来的段落，已由 09-app-h-01.Rmd 译出，跳过。本文件从「In these examples, computations are actually eliminated…」（树高降低）开始，接着译完 H.2 节「消除相关的计算」小节的其余部分，再译 H.3 节。
结尾：第 20 页只有图 H.4，没有正文段落。第 19 页最后一段「The advantage of the trace scheduling approach … When code is moved across such trace entry and exit points, additional」跨过第 20 页，到第 21 页「…If an instruction can be moved and thereby make the main trace execute faster, it is moved.」结束，已译完整。第 21 页下一段「Although trace scheduling has been successfully applied to scientific code…」留给第 3 部分。

## 图

- 图 H.1（第 13 页）、图 H.2（第 15 页）、图 H.3（第 16 页）、图 H.4（第 20 页）：均为插图，200 dpi 截图存 images/apph/fig-h-1.png～fig-h-4.png，已检查不缺边、不带图注。图内英文标注的译文补在图注末尾。
- 图 H.4 在原书中位于第 20 页，正文引用它的段落在第 19 页；译稿把图放在第 19–21 页那段跨页正文之后。
- 代码段照录，注释译成中文。例题解答中展开后的循环体，原书用粗体标出选中的指令（第 i 次迭代的 S.D、第 i+1 次的 ADD.D、第 i+2 次的 L.D）；代码块里无法加粗，改在引出代码的句子里写明这三条指令。

## 原书疑点

1. 软件流水一段称展开循环的调度例子「appeared in the example in Section 2.2」。第 7 版循环展开的例子在 3.2 节（本附录其他地方也写 Section 3.2），此处疑为旧版节号残留。译文照录为「2.2 节」，请确认。
2. 「the IA-64 added extensive hardware sport for software pipelining」：sport 是 support 的排印错误，按 support 译。
3. 「Sections H.4 and H.5 explores such support」主谓不一致，不影响意思，照译。
4. 例题解答称循环「can be run at a rate of 5 cycles per result」，并假定 L.D 放在转移延迟槽中（MIPS 延迟转移的旧假设），照译。
5. 图 H.3 图注「Predication or conditional instructions, which we discuss in the next section」，下一节即 H.4 节，照译。

## 新定术语

| 英文 | 译法 |
|---|---|
| tree height reduction | 树高降低 |
| software pipelining | 软件流水（与第 3 章、附录 E 一致） |
| start-up code / finish-up (clean-up, wind-down) code | 启动代码 / 收尾代码 |
| global code scheduling / global code motion | 全局代码调度 / 全局代码移动 |
| trace scheduling | 踪迹调度（与 3.7 节一致） |
| trace selection / trace compaction | 踪迹选择 / 踪迹压缩 |
| trace entrance / trace exit | 踪迹入口 / 踪迹出口 |
| compensation code / bookkeeping code | 补偿代码 / 簿记代码（与 3.7 节一致） |
| shadow copy | 影子副本 |
| join point | 汇合点 |
| issue slot / issue packet | 发射槽 / 发射包（与第 3 章一致） |
| profile information | 剖析信息 |
| predication | 谓词执行 |
