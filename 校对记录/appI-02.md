# 附录 I 校对记录（09-app-i-02.Rmd）：I.3 节后半、I.4 节

页段：底本/appendix-i.pdf 第 11–20 页（书页 I-11–I-20），另含第 20 页末跨到第 21 页的例题题干后半。PDF 页码与书页 I-N 一一对应，第 11–20 页都印着本附录的页码字母，没有混入相邻附录的页面。

- 开头：第 11 页顶部图 I.1；正文从「The overall computation-to-communication ratio is computed from the individual growth rate…」开始。第 11 页开头的「computation per processor falls proportionately…in the caption of Figure I.1.」是第 10 页跨过来的段落后半，已由 09-app-i-01.Rmd 译出，本文件不译。
- 结尾：第 20 页最后的例题「Write the code for the barrier using fetch-and-increment…」，题干跨到第 21 页，译到「…How many bus cycles are required?」为止。第 21 页的解答（「Figure I.7 shows the code for the barrier…」）、图 I.7 和 I.5 节留给下一部分。
- 本文件不写附录标题（由 09-app-i-01.Rmd 写）。I.4 节锚点 sec-i-4。

## 图

- 图 I.1（第 11 页）：排成 Markdown 表格，公式用 LaTeX `\dfrac`，「approximately」译「约为」。锚点 fig-i-1，对应第一部分正文中已有的链接。
- 图 I.2（第 14 页）、图 I.3（第 15 页）、图 I.5（第 17 页）、图 I.6（第 19 页）：均为代码，按 02-memory-11.Rmd 图 2.29 的做法，先写 `[图 I.n　…]{#fig-i-n .caption}`，再放代码块。代码照录，注释译成中文。没有截图。
- 图 I.4（第 16 页）：排成 Markdown 表格，代码列用行内代码。
- 未建 images/appi/ 下的任何截图。

## 原书疑点

1. 第 16 页正文：「if the time to complete all 10 lock and unlock operations depended only on the latency in the uncontended case, then it would take 1000 rather than 15,000 cycles」。第 13 页例题算出的是 120 次总线事务、12,000 个时钟周期；无竞争时每次加锁+解锁按两个总线周期计，10 次应为 20 个总线周期、2000 个时钟周期。15,000 和 1000 都与前文对不上，照原书译，请核对。
2. 第 13 页例题末句「120 clock cycles per lock acquisition」：12,000 个时钟周期分摊到 10 次获得锁，应为每次 1200 个时钟周期（或每次 12 次总线事务）。照原书译作「120 个时钟周期」，请核对。
3. 第 18、20 页两处「the example on page I-12」：该自旋锁例题实际印在第 I-13 页（第 12 页只有 I.4 节开头）。照原书保留「第 I-12 页」。
4. 第 20 页「compared to the simple code-sensing barrier」：疑为 sense-reversing barrier 或 simple barrier 的笔误。译文保留英文「code-sensing」，未作改动。
5. 图 I.3 代码末尾多一个「}」，图 I.6 代码中 `if (tree[mynode].count==k) {` 缺少对应的右括号，且 `barrier(tree[mynode].parent)` 只传一个参数，而函数定义有两个参数；图 I.4 最后一行源代码末尾多一个「/」。均照原书照录。
6. 第 15 页例题：「You can ignore the time of the actual read or write of a lock held in the cache as the time to execute other nonsynchronization operations」中的 as 疑为 as well as，按 as well as 译。
7. 第 13 页解答中「i load linked operations…」三行原书是缩进排列的列表，译文排成项目列表。
8. 第 17 页「see Sections F.4 to F.8」写作「[附录 F](#app-f) 的 F.4 节至 F.8 节」。

## 新定术语

| 英文 | 译法 |
|---|---|
| spin lock | 自旋锁（沿用第 5 章） |
| load linked / store conditional | 保留英文（与第 5 章习题一致） |
| barrier | 栅障（barrier）（沿用第 5 章） |
| sense-reversing barrier | 感知反转栅障 |
| local_sense 等代码变量 | 保留原名 |
| point of serialization | 串行化点 |
| forward progress | 前进性 |
| exponential back-off | 指数退避 |
| queuing lock | 排队锁 |
| combining tree | 组合树 |
| fan-in | 扇入 |
| gather stage / release stage | 收集阶段 / 放行阶段 |
| fetch-and-increment | 取并加一（沿用第 5 章） |
| upgrade（写失效） | 升级（upgrade） |
| sharing set | 共享集合（与第 5 章一致） |
| synchronization controller | 同步控制器 |
| races（图 I.6 图注） | 竞争冒险 |

统稿：sharing set 统一为「共享集合」，与第 5 章一致。
