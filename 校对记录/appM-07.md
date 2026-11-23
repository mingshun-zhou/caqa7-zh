# 附录 M 校对记录（09-app-m-07.Rmd）：M.7 后半、M.7 参考文献（A–G 前段）

页段：底本/appendix-m.pdf 第 61–70 页（书页 M-61～M-70），全部是附录 M 的页面，没有混入其他附录的页。

- 开头：第 61 页开头「distributed and centralized memory); and the remaining 4 were clusters…」是第 60 页段落的结尾，已由 09-app-m-06.Rmd 译出。本文件从小标题「More Recent Advances and Developments」及其下第一段「With the primary exception of the parallel vector multiprocessors…」译起。
- 结尾：第 70 页最后一条参考文献 Gharachorloo, K., D. Lenoski, … [1990]「Memory consistency and event ordering in scalable shared-」跨到第 71 页，已译完整（到「…Seattle, Wash., 15–26.」）。第 71 页从 Gibson, J. 等 [2000] 起留给下一部分。
- 标题层级：沿用 09-app-m-06.Rmd 的写法。原书粗体小标题（More Recent Advances and Developments）用 `###`，其下斜体小标题（The Development of Bus-Based Coherent Multiprocessors、Toward Large-Scale Multiprocessors、Clusters、Recent Trends in Large-Scale Multiprocessors、Developments in Synchronization and Consistency Models、Other References）用 `####`。M.7 的参考文献写作 `### 参考文献 {- #sec-m-7-references}`，与 sec-m-2～sec-m-6 一致。
- 参考文献照录英文，抽取乱码已修正：页码中的「e」改为连接号「–」；「Weak orderingda」「CEDARda」改为破折号「—」；「þ」「¼」（Baskett 条目）改为「+」「=」。

## 图

- 图 M.2（第 62 页）：五种监听协议汇总表，排成 Markdown 表格，锚点 fig-m-2，未截图。Write Once 一行原书「使用该协议的多处理器」一栏为空，照留空。

## 原书疑点

1. 第 62 页「The Thinking Multiprocessors CM-5」应为 Thinking Machines（公司名，疑为旧版把 Machine 全局替换成 Multiprocessor 留下的错误，同节 Connection Multiprocessor 也是如此），译文改作「Thinking Machines 的 CM-5」，**请确认**。同页「Gajksi et al. 1983」与参考文献 Gajski 不一致，正文照录。
2. 第 66 页「In 2006, a Blue Gene … (and scheduled to go to 65K in late 2005)」年份自相矛盾，照译；「Blue Gene's predecessor … QCDOD」实为 QCDOC，照录。同页「at a much smaller fraction of the area of power」按「area and power」理解，译作「面积和功耗」。
3. Goodman [1983] 条目会议日期印作「June 5–7, 1982」，Hagersten and Koster [1998] 条目会议日期印作 1999 年，均照录。第 65 页「In 2011, nearly all Internet services…」是旧版的时间说法，照译。

## 新定术语

| 英文 | 译法 |
|---|---|
| snooping cache | 监听 Cache |
| write invalidate / write broadcast | 写作废 / 写广播 |
| directory-based | 基于目录 |
| message-passing multicomputer | 消息传递多计算机 |
| fat tree / fat hypercube | 胖树 / 胖超立方体 |
| fetch-and-operate | fetch-and-operate（取数并操作） |
| combining references in the network | 在网络中合并访存请求 |
| cache-only memory architecture (COMA) | 唯 Cache 存储结构（COMA） |
| home location | 宿主位置 |
| coarse bit vector | 粗粒度位向量 |
| cluster | 机群（与 09-app-m-06.Rmd 一致） |
| weak ordering / data-race-free | 弱序 / 无数据竞争 |
| release consistency / relaxed consistency model | 释放一致性 / 宽松一致性模型 |
| spin lock / queuing lock | 自旋锁 / 排队锁 |
