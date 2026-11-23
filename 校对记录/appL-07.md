# 附录 L 校对记录（09-app-l-07.Rmd）：第 12 节列表后半、参考文献

页段：底本/appendix-l.pdf 第 61–69 页。第 60 页末尾是第 12 节「Conclusion」的引导段和列表前五项（到「Software optimizations」），由上一部分译出。第 61 页从列表项「Energy-efficient address translation」开始，没有跨页的半段，本文件从这一项译起，接着是第 12 节列表剩余各项，然后是 References（第 61–69 页，[1]～[95]）。附录到第 69 页结束。

起句：「**高能效的地址转换。** 为加快地址转换而投入的硬件资源越来越多……」
止句：参考文献 [95]「Tianhao Zheng, Haishan Zhu, and Mattan Erez. SIPT: Speculatively Indexed, Physically Tagged Caches. International Symposium on High Performance Computer Architecture, 2018.」

## 图

本部分没有图。

## 处理方式

- 列表接续上一部分的项目列表，没有重复第 12 节标题和引导段。列表项的英文小标题译成粗体引导语。
- 参考文献标题写作 `## 参考文献 {- #sec-l-references}`，条目照录英文原文，每条一行，保留 [n] 编号；只去掉了 pdftotext 抽出的行末断词连字符（如 Pro-gramming → Programming），原有的连字符（Application-Transparent、hardware-os 等）保留。

## 原书疑点

1. 「Virtualization」一项原文为「maintain hardware support to accelerate the cost of TLB misses」，「accelerate the cost」搭配不通，按意思译为「降低这一代价」；「a factor of 4× worse than native execution」译为「可能是本机执行时的 4 倍」。
2. 「Accelerators」一项「near-memory accelerators [71], and more [33]」：[33] 是 Dong 等人的「Shared Address Translation Revisited」，与「and more」挂钩，照录。「Memory protection」一项原文「We point interested to」漏了 readers，「a much recent work」多了 a，按意思译。
3. 参考文献照录原文，以下疑似原书笔误未改：[9]「Amro Award」（应为 Awad）；[14]「Microarchitecure」；[42]「TLB-Refull」（应为 Refill）；[44]「Sofware-Managed」；[46]、[63]、[75] 作者表中多出的「, ,」；[57]「Sitararn Iyer」（应为 Sitaram）；[67]「Pistcataway」（应为 Piscataway）；[78] 与 [79] 是同一篇 Seznec 论文的重复条目（[79] 多了卷期号）。

## 新定术语

| 英文 | 译法 |
|---|---|
| translation coherence | 转换一致性 |
| energy-efficient address translation | 高能效的地址转换 |
| near-memory accelerator | 近存加速器 |
| native execution | 本机执行 |
| page-granularity / object-granularity protection | 页粒度保护 / 对象粒度保护 |
| capability | 权能（capability） |
| MMU cache | MMU Cache |
