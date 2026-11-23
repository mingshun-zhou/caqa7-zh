# 附录 M 校对记录（09-app-m-02.Rmd）：M.3 后半、M.3 参考文献、M.4 前半

页段：底本/appendix-m.pdf 第 11–20 页（书页 M-11～M-20）。这 10 页的页眉都印着 M 字母页码，没有混入其他附录的页。

- 开头：第 11 页第一段「Virtually every computer since then will check …」是第 10 页段落的延续，由第 1 部分译出，本文件不译。本文件从第 11 页第二段「As mentioned in the text, system virtual machines were pioneered at IBM …」开始。
- 结尾：第 20 页最后一段「In the early 1980s, the direction of computer architecture began to swing away …」到「Clark and Strecker [1980], who were VAX architects, rebutted their proposal.」结束，段落在本页内完结。第 21 页「The simple load-store computers such as MIPS …」归第 3 部分。
- 内容：M.3 余下正文（CP-67/VM、Wilkes 的 Cache 论文、360/85、3C、非阻塞 Cache、多级包含、流缓冲器等）；M.3 的参考文献（第 12–17 页，Agarwal 1987 至 Wulf 1981）；M.4 节标题、章首引语，以及「栈体系结构」「计算机体系结构的定义」「高级语言计算机体系结构」「精简指令系统计算机」四个无编号小标题的前半部分。

## 图

本段页面没有图，也没有脚注、习题。

## 格式处理

- 附录 M 每节各有一份参考文献，不止一份，所以 M.3 的参考文献写成 `### 参考文献 {- #sec-m-3-references}`（三级标题，挂在 M.3 下面，锚点带节号避免重名）。若第 1 部分对 M.2 的参考文献用了别的写法，合并时请统一。
- 参考文献照录英文；抽取乱码中页码、日期里的「e」恢复为连接号（如 70e75 → 70–75），「d」恢复为破折号（Pabst 条目「FSB—The Best Platform」）。斜体未保留，与 07-dsa-08.Rmd 一致。
- M.4 节标题写作 `## 指令系统的演变（附录 A、J 和 K） {#sec-m-4}`，标题内附录名用纯文本；正文中的附录 B、K 写成链接 [附录 B](#app-b)、[附录 K](#app-k)。第 2 章写纯文本。
- 第 18 页的三条反对栈的理由，原书用项目符号（抽取为「n」），排成列表。
- 引文（Wilkes 1965、IBM 360 体系结构定义、Meyers 1978）排成引用块。

## 原书疑点

1. 第 12 页：「Symposium on Architectural Support for Compilers and Operating Systems (ASPLOS)」——ASPLOS 的正式名称是 Architectural Support for Programming Languages and Operating Systems；「International Computer Architecture Symposium (ISCA)」正式名称是 International Symposium on Computer Architecture。译文照原书英文名录入括号内，未改。
2. 第 11 页：Gibson 1967 的研究「This precedent is more than 40 years old」，照译「40 多年」（按第 7 版出版时间实际已近 60 年，原书沿用旧版文字）。
3. 第 16 页 Smith & Goodman 条目：年份标 [1983]，会议日期却是「June 5–7, 1982」（第 10 届 ISCA 实为 1983 年），照录。
4. 第 11 页 Wilkes 引文「32,000 words」「one million words」译「32 000 字」「100 万字」。
5. 第 12 页 Jouppi 和 Wilton「proposed multilevel exclusion」译「多级排他」。

## 新定术语

| 英文 | 译法 |
|---|---|
| capability | 权能（与已有译法一致，本段只在参考文献中出现） |
| tunnel diode memory | 隧道二极管存储器 |
| slave memory | 从属存储器 |
| memory interleaving | 存储器交叉访问（4 路／16 路） |
| hardware monitor | 硬件监视器 |
| three C's model | 3C 模型（与附录 B 一致） |
| multilevel inclusion / exclusion | 多级包含性 / 多级排他 |
| streaming buffer / stream buffer | 流缓冲器 |
| accumulator-based computer | 基于累加器的计算机 |
| block transfer | 块传送 |
| drum memory | 磁鼓存储器 |
| activation record | 活动记录 |
| code density | 代码密度 |
| Java bytecodes / applet | Java 字节码 / 小程序（applet） |
| just-in-time (JIT) compiler | 即时（JIT）编译器 |
| timing independent | 与时序无关 |
| binary compatibility | 二进制兼容 |
| frequency-encoded instruction format | 按频度编码的指令格式 |
| orthogonality | 正交性 |
| instruction mix | 指令混合比例 |
| high-level language computer architecture (HLLCA) | 高级语言计算机体系结构（HLLCA） |
| semantic gap | 语义鸿沟 |
| Reduced Instruction Set Computer (RISC) | 精简指令系统计算机（RISC）（手册把 ISA 统一为「指令系统」；第 1 章有一处作「精简指令集计算机」，请统一） |

- 润色时改正：第 12 页 Baer 和 Wang［1988］「did one of the first examinations of the multilevel inclusion property」，原译「最早研究了多级包含性」丢了 one of，改为「的研究是最早考察多级包含性的工作之一」；第 11 页 Gibson「showed how the miss rate varies between programs」，原译「差别很大」为原文所无，改为「给出了失效率在不同程序之间的变化」。
