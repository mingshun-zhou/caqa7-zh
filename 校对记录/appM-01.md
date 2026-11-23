# 附录 M 校对记录（09-app-m-01.Rmd）：标题、M.1、M.2、M.3 开头

页段：底本/appendix-m.pdf 第 1–10 页（书页 M-1～M-10），全部印着附录 M 的页码，没有混入其他附录的页面。

- 开头：附录标题「Historical Perspectives and References」，两段章首引语（Kennedy、Santayana），然后是 M.1 节「This Appendix provides historical background ...」。
- 结尾：M.3 节第 10 页最后一段「The architects of the IBM 360 were aware of the importance of address size ...」。这一段跨到第 11 页，到「... and trap if the bits have the wrong value.」结束，已译完整。下一部分从第 11 页「As mentioned in the text, system virtual machines were pioneered at IBM ...」开始。
- 内容：M.1 全节；M.2 全节（含 4 个无编号小标题和本节参考文献，第 6–8 页）；M.3 节开头至上述段落。

## 图与公式

- 第 1–10 页没有图（Figure M.n）。
- 第 7 页的相对 MIPS 公式用 LaTeX 重排，下标「reference」译「参考」。

## 格式处理

- M.2 节末的「References」是节内参考文献（每节各有一份），写成 `### 参考文献 {- #sec-m-2-references}`，锚点带节号，免得与后面各节重复。后面各部分建议照此写 `sec-m-3-references` 等。
- 节标题中的「(Chapter 1)」「(Chapter 2 and Appendix B)」写成纯文本，没有加链接。
- M.1 节的各节对应关系改成了列表；只有 M.2、M.3 写成本附录链接，M.4～M.9 不在本部分，写纯文本，合并时可以改成链接。
- 两段 Wilkes [1982] 的引文和 Wilkes [1965] 的引文（后者在第 11 页，不属于本部分）原书用斜体排成引文块，译文用 `>` 引用块。原文里的「[p. 112]」译成「［第 112 页］」。
- 参考文献照录英文。抽取乱码已修正：页码范围里的「e」改为连接号「–」（如 18e20 → 18–20）；「Project WhirlwinddThe History」改为「Project Whirlwind—The History」；网址按页面图连成一行。

## 原书疑点

1. M.1 节说 M.4 节涵盖「Appendices A, J, and K」。第 7 版目录中附录 J 是否存在要核对（本书目前没有 #app-j 锚点，链接 [附录 J](#app-j) 暂时会悬空）；[附录 K](#app-k) 也还没有文件。
2. M.3 节说 80286 具有「Appendix C 所述的保护机制」。按第 7 版附录分工，保护机制（80x86 分段保护）在附录 B（B.5 节），附录 C 讲流水线；可能是沿用旧版附录编号。照原文译作附录 C，请核对。
3. 时间说法沿用旧版：Burks 等人的文章「写于 50 多年前」（实际已近 80 年）；「SPEC2006 将近二十年后仍在处理器基准测试中占主导地位」（第 7 版时 SPEC CPU2017 已发布）；Gibson「这一先例已有 40 多年」（第 11 页，不属本部分）。均照译。
4. 「SPEC (System Performance and Evaluation Cooperative)」照原书全称译出；SPEC 现在的正式名称是 Standard Performance Evaluation Corporation，原书沿用旧称。
5. 第 2 页「In 1946 ... Goldstine left to join von Neumann」：原文没说 Goldstine 从哪里离开，译文补了「离开摩尔学院」，依据是上文他在 ENIAC 项目中分发备忘录。若要严格对应，可删去这四个字。

## 新定术语

| 英文 | 译法 |
|---|---|
| Historical Perspectives and References | 历史回顾与参考文献 |
| stored-program computer | 存储程序计算机 |
| von Neumann computer | 冯·诺依曼计算机 |
| accumulator-based architecture | 基于累加器的体系结构 |
| Harvard architecture | 哈佛结构 |
| magnetic core memory | 磁芯存储器 |
| mercury delay line | 水银延迟线 |
| Whirlwind | 旋风（Whirlwind） |
| Bletchley Park | 布莱切利园（Bletchley Park） |
| instruction mix / Gibson mix | 指令混合比 / Gibson 混合比 |
| average instruction execution time | 平均指令执行时间 |
| kernel（基准测试） | 核心程序 |
| synthetic program | 合成程序 |
| Livermore FORTRAN Kernels | 利弗莫尔 FORTRAN 核心程序 |
| relative MIPS / native MIPS | 相对 MIPS / 原生 MIPS |
| peak MFLOPS | 峰值 MFLOPS |
| paged segmentation | 段页式（与已有译稿一致） |
| capability | 权能（与已有译稿一致） |
| translation lookaside buffer | TLB，括注英文全称 |
| "32-bit clean" | 「32 位干净」 |

润色时改正：第 2 页「Goldstine left to join von Neumann at the Institute for Advanced Study at Princeton in 1946」，原译补出的「离开摩尔学院」原文没有，已改为「Goldstine 前往普林斯顿高等研究院，与 von Neumann 会合」（疑点 5 随之消除）；另「the paper led to the IAS machine」原译「根据这篇文章……建造」偏重，改为「这篇报告促成了 IAS 机」。
