# 附录 M 校对记录（09-app-m-06.Rmd）：M.6 后半、M.6 参考文献、M.7 前半

页段：底本/appendix-m.pdf 第 51–60 页（书页 M-51～M-60），全部是附录 M 的页面，没有混入其他附录的页。

- 开头：第 50 页最后一段（NEC SX-9）在第 50 页结束，所以第 51 页从新段落「The basis for modern vectorizing compiler technology…」开始，本文件从这一段译起（M.6 节正文末段）。
- 结尾：第 60 页最后一段「In 1989, when this bet was made…」跨到第 61 页，译到「…clusters built using PCs with an off-the-shelf interconnect.」为止。第 61 页的「More Recent Advances and Developments」及以后的内容留给下一部分。
- 节标题：M.7 写作 `## 多处理器与并行处理的历史（第 5 章和附录 F、G、I） {#sec-m-7}`。M.6 的小标题（多媒体 SIMD 指令扩展、图形处理器）用 `###`；原书在 GPU 下的更低一级小标题（Scalable GPUs、Graphics Pipelines、GPGPU、GPU Computing）用 `####`。M.6 的参考文献写作 `### 参考文献 {- #sec-m-6-references}`，与 sec-m-2/sec-m-3 的写法一致；其下的分组（SIMD Supercomputers、Vector Architecture、Multimedia SIMD、GPU）译成 `####` 小标题。

## 图

本段没有图。

## 原书疑点

1. 第 57 页：原书写 Connection Machine「had 65,636 1-bit processors」，第 58 页又写 Connection Multiprocessor 2「65,536 single-bit-wide processors」。前者应为 65 536 的笔误，译文照录 65 636，**请确认是否改正**。
2. 第 52 页引语署名「Vincent Natol」，实为 Vincent Natoli；参考文献「Lindholm, E., M. J. Kligard」实为 Kilgard。两处照录原书。
3. 第 54 页「In 2011, the performance is much higher…」及「announced just as this edition was being finished」是旧版留下的时间说法，照译。
4. 第 51 页引语原文用「.」代替省略号，并写作问句的形式但以句点结尾，译文按意思恢复为问句和省略号。
5. 第 60 页抽取文本丢了「≤」「≥」，已对照页面图补回（≤ 100、≥ 1000、≤ 20）。teraFLOPS 后的「done million MFLOPSd」是破折号被抽成 d，译作括号说明。
6. 参考文献页码中的「e」（抽取乱码）改为连接号「–」；「The TI ASCda」改为「ASC—a」；「WisconsineMadison」改为「Wisconsin–Madison」；DOI「10.1 145」去掉断行空格为 10.1145。Akeley 条目页码「239–46」照录。其余照录英文。

## 新定术语

| 英文 | 译法 |
|---|---|
| partitioned ALU | 可分割的 ALU |
| subword parallelism | 子字并行 |
| shader / vertex / pixel fragment | 着色器 / 顶点 / 像素片段 |
| wireframe / flat-shaded / smooth-shaded | 线框 / 平面着色 / 平滑着色 |
| full-scene anti-aliasing | 全场景反走样 |
| multitexturing | 多重纹理 |
| speed binning | 按速度分档 |
| SLI (Scan Line Interleave) | 保留缩写，扫描行交错 |
| framebuffer | 帧缓冲 |
| scatter (operation) | 分散写 |
| thread block (cooperative thread array) / grid | 线程块（协作线程阵列）/ 网格 |
| array processor | 阵列处理器 |
| multicomputer | 多计算机 |
| data stream | 数据流 |
| sustained MFLOPS | 持续 MFLOPS |
| Gordon Bell Prize | 戈登·贝尔奖 |
- 润色时改正：第 58 页「Two of the best-documented multiprocessor projects」原译「开展了两个文档记录最完整的多处理器项目」，改为「在文档记录最完整的多处理器项目中，有两个是……开展的」。
