# 附录 C 校对记录（09-app-c-03.Rmd）：C.2 节后半（转移开销、转移预测）、C.3 节开头

页段：底本/appendix-c.pdf 第 21–30 页（书页 C-21～C-30）。各页页眉页码都是 C-21～C-30，没有混入相邻附录的页。

- 开头：第 21 页顶部是图 C.11（延迟转移的行为），图归本部分，放在文件开头。图下的「we obtain: Pipeline speedup = Pipeline depth / (1 + Branch frequency × Branch penalty)」是第 20 页那一段的延续，不译，归上一部分。正文从「The branch frequency and branch penalty can have a component from both unconditional and conditional branches.」开始。
- 结尾：第 30 页最后一段「Although all processors today are pipelined, this multicycle implementation is a reasonable approximation …」，到「… would determine the structure of the control.」结束，段落没有跨页。第 31 页「There are some hardware redundancies …」起归下一部分。

## 图

- 图 C.11（第 21 页）：原书是表格，排成两个 Markdown 表格（转移不成功 / 转移成功）共用一个图名；原书无表头，补了「指令 / 时钟 1～9」列名。上一部分正文如引用 #fig-c-11，锚点在本文件。
- 图 C.12（第 22 页）、图 C.13（第 22 页）：排成 Markdown 表格。图 C.13 原表头有跨列标题「Additions to the CPI from branch costs」，Markdown 无法跨列，改写进图名（「表中后四列都是转移开销造成的 CPI 增量」）。
- 图 C.14（第 23 页）、C.15（第 24 页）、C.16（第 25 页）、C.17（第 26 页）、C.18（第 30 页）：截图 images/appc/fig-c-14.png～fig-c-18.png，200 dpi，按墨迹边界自动裁剪后逐张检查，不缺边、不带图注。图注末尾补了图内英文标注的译文。
- 例题中的转移频度小表（4% / 6% / 10%）原书无图号，排成无编号 Markdown 表格。
- 第 27～29 页的寄存器传送描述（IR ← Mem[PC] 等）照录为代码块，仅给 Imm 一行加了中文注释。

## 原书疑点

1. 图 C.12 第一行写「Flush pipeline」，图 C.13 和正文写「Stall pipeline」，指同一方案。分别照译「清空流水线」「停顿流水线」。
2. 第 28 页「The lower 16 bits of the IR are also sign extended」：RISC-V 的立即数是 12 位（图 C.18 中符号扩展单元也标 12→32），16 位是沿用 MIPS 版的旧文字。照译「低 16 位」，请定是否改。
3. 第 28 页转移目标「NPC + (Imm << 2)」「shifted left by 2 bits to create a word offset」：RISC-V 转移偏移量实际以 2 字节为单位、左移 1 位，这里也是 MIPS 遗留写法；另外 RISC-V 应以转移指令自身的 PC（而非 NPC）为基址。照录照译。
4. 第 29 页 MEM 周期代码「Mem[ALUOutput]  B;」中间缺了赋值箭头（页面图上也是空白），按上下文补为「Mem[ALUOutput] ← B;」。
5. 第 24 页「Figure C.15 shows the finite-state processor」：应为 finite-state machine，译为「有限状态机」。
6. 第 22 页例题：频度 4%、6%、10%，开销见图 C.12；0.04×2 = 0.08，0.06×3 = 0.18，0.10×3 = 0.30 / ×2 = 0.20，合计 0.56、0.46、0.38；1.56 = 1 + 0.56，1.38/1.56 ≈ 1/1.13，均核对无误。
7. 第 23 页正文说「In the next section, we consider dynamic branch predictors」，实际是紧接着的下一小节，照译「下一节」。
8. 第 25 页「misprediction rate of 1%e18%」中 e 为抽取乱码，按页面图是 1%–18%。
9. 图 C.16 图注「See Pan et al. (1992)」在原书是参考文献链接，译文写纯文本「Pan 等（1992）」。
10. 第 27 页「RISC V」统一写为 RISC-V（与 appC-01 一致）。

## 新定术语

| 英文 | 译法 |
|---|---|
| branch frequency / branch penalty | 转移频度 / 转移开销 |
| flush / stall pipeline | 清空流水线 / 停顿流水线 |
| predicted taken / untaken | 预测为成功 / 预测为不成功（与第 3 章一致） |
| delayed branch / branch delay slot | 延迟转移 / 转移延迟槽（与第 3 章一致） |
| profile (information) | 剖析（profile）信息 |
| bimodally distributed | 呈双峰分布 |
| branch-prediction buffer / branch history table | 转移预测缓冲 / 转移历史表 |
| misprediction rate | 误预测率（与第 3 章一致）；图轴 Frequency of mispredictions 译「误预测频度」 |
| saturating counter | 饱和计数器（与第 3 章一致） |
| branch equal | 相等转移 |
| register file | 寄存器堆（与 appC-01 一致） |
| function code / opcode | 功能码 / 操作码 |
| LMD (load memory data) | LMD（取存储器数据） |
| microcode control | 微码控制 |
| multiplexer (Mux) | 多路选择器 |
