# 附录 K 校对记录（09-app-k-02.Rmd）：K.2 中段

页段：底本/appendix-k.pdf 第 11–20 页（书页 K-11～K-20），全部印着附录 K 的页码，没有混入其他附录的页。

- 开头：第 11、12 页只有图 K.8、K.9，没有正文。第 13 页开头「second "register" be optionally set by floating-point instructions. PowerPC provides logical operations among these eight 4-bit condition code registers …」到「… moving from/to the condition register.」是第 10 页「Power also uses four condition codes …」一段的延续，按分界规则不译，由上一部分（09-app-k-01.Rmd）译完。本文件从图 K.8 开始，正文从「RISC-V and MIPS are most similar.」开始。
- 结尾：第 20 页末段「The danger of register windows is that …」到「… they were not included in the RISC-V ISA.」在本页结束，没有跨页。下一部分从第 21 页小标题「Fast Traps」开始（09-app-k-03.Rmd 已如此）。
- 标题层级沿用 09-app-k-03.Rmd 的做法：粗体小标题「Instructions: Common Extensions beyond RV64G」「Instructions Unique to MIPS64 R6」「Instructions Unique to SPARC v.9」写作 `### … {-}`；斜体小标题「RV64GC Core 16-bit Instructions」「Register Windows」写作 `#### … {-}`。

## 图

- 图 K.8（第 11 页）、K.9（第 12 页）、K.10（第 14 页）、K.11、K.12（第 15 页）、K.13（第 16 页）、K.14（第 17 页）、K.15、K.16（第 18 页）、K.17、K.18（第 19 页）、K.19（第 20 页）：全部排成 Markdown 表格，没有截图。pdftotext 对这些表格的旋转文字和多行单元格抽取错乱，内容全部按页面图核对。
- 原书表格中「指令格式」一行（如「Data transfer (instruction formats) R-I …」）是表头的第一行，译文把它作为表格第一行数据。
- 图 K.8～K.13 放在第 13 页正文之前（K.8、K.9 所在页没有正文）；图 K.14～K.18 放在「Instructions: Common Extensions beyond RV64G」一段之后、「To accelerate branches …」之前，与引用位置相近。
- 指令助记符一律照录，放在反引号中，避免 `*`、`_` 被 Markdown 解释。

## 原书疑点

1. 图 K.9 中 ARMv8 的存数助记符印作 STB／STW（存半字）／STL（存字）／STX，RV64G 的存半字印作 STH（RISC-V 实为 SH），Power 的取字印作 LW_，RV64G 的「整数传送到浮点寄存器」印作「STW; FLDWX」等，看起来都不对，照录。
2. 图 K.10 中 ARM 的除法印作 MULX, SMULX，逻辑右移、算术右移印作 RSL、RSA，RISC-V 的「Load bits 31..16」印作 ADDIS（RISC-V 实为 LUI），照录。图 K.11 中 RISC-V 的「Return from interrupt」印作 EBREAK，照录。
3. 图 K.14 中 Thumb-2 以 SP 为基址的取字/存字印作「1;3;8」，与其他两列的写法（1;32;x）不一致，可能是「1;8;8」，照录。
4. 正文「Figures K.14 through K.17 summarize the data transfer, ALU, and control instructions for our three embedded processors」中，图 K.17 实际是桌面体系结构的扩展数据传送指令，嵌入式部分应为图 K.14～K.16；「Figures K.15 through K.18 list instructions not found in Figures K.9 through K.13」中，扩展指令表实际是图 K.17～K.19。引用照原文译出。
5. 「in the same four categories (data transfer, ALU, and control.」只列了三类，括号也没有闭合，译作「按同样的四类（数据传送、ALU 和控制）」。
6. 「All three processors provide more address modes than provided by RV64G」紧接着列出 ARM、Power3、MIPS64、SPARC 四种，「三种处理器」照译。「SPARVv9」改为 SPARC v9。
7. 第 13 页「Since floating point is optional, we do not include it. I」末尾多一个「I」，删去。「RISC-V floating point comparisons sets … content.-」末尾的「.-」按句号处理。
8. 图 K.12 中 ARMv8「16 (8 + the inverse)」译作「16（8 位加上它们的反码）」；PowerPC「8 × 4 both」译作「8 × 4，整数和浮点共用」。
9. 图 K.13 图注「less-then or equal」按 less-than 译；分类指令说明的括号不配对，按意思译出。
10. 图 K.19 图注「Additional instructions provided MIPS64 R6」缺 by，按意思译。「Tensilica is the only other major architecture in use today employs them」语法有误，按意思译。

## 新定术语

| 英文 | 译法 |
|---|---|
| register windows | 寄存器窗口 |
| annulling branch / annul bit | 取消转移 / 取消位 |
| delayed branch / delay slot | 延迟转移 / 延迟槽（与附录 C 一致） |
| set-on-less-than | 小于置位 |
| load reserved / store conditional | 预留取数 / 条件存数 |
| sign-injection | 符号注入 |
| compare and branch | 比较并转移 |
| scaled immediate | 比例立即数 |
| circular buffer | 循环缓冲区 |
| knee of the cost-performance curve | 性价比曲线的拐点 |
| caller / callee | 调用者 / 被调用者 |
