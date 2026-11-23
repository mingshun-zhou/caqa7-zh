# 附录 D 校对记录（09-app-d-03.Rmd）：D.4 节（续）、D.5 节前半

页段：底本/appendix-d.pdf 第 21–30 页（书页 D-21～D-30，PDF 页号与书页号一致；本段 10 页都印着 D 字母页码，没有混入其他附录的页）。

- 开头：第 21 页图 D.13，然后是正文「Efforts that are more recent have focused on the effectiveness of fault tolerance in systems.」。第 21 页没有从第 20 页延续过来的半段（第 20 页以「…running some RAID organization in their storage system.」整段结束）。
- 结尾：第 30 页排队模型假设列表的第 4 条「The server can start on the next job immediately after finishing the prior one.」。列表的后两条（队列长度无限且 FIFO、只有一个服务器）以及「Such a queue is called M/M/1」都起始于第 31 页，归下一部分。各列表项分别成段，所以在第 4 条结束处断开。
- 本部分包含 D.5 节标题「A Little Queuing Theory」（第 23 页），译作「排队论初步」，锚点 sec-d-5；无编号小标题「Poisson Distribution of Random Variables」译作「随机变量的泊松分布 {-}」。
- 例题 3 道：利用率（D-26）、推导 Time_queue（D-29）、Length_queue（D-30）。第 30 页末开始的第 4 道例题（40 次 I/O/秒、20 ms）起始于第 31 页，归下一部分。

## 图

- 图 D.13（第 21 页）：截图 images/appd/fig-d-13.png（200 dpi），不含图注；图注末尾补了坐标轴和图例译文。文件放在本部分开头（图在第 21 页上半，正文引用它的那段在第 20 页，由上一部分译出）。
- 图 D.14（第 22 页）：截图 images/appd/fig-d-14.png，三幅子图（Linux、Solaris、Windows）一并截取。
- 图 D.15（第 24 页）、图 D.16（第 25 页）：截图 fig-d-15.png、fig-d-16.png。图 D.16 在原书中印在「Algebra lets us split the first formula」之前，译文放在同样的位置。
- 公式全部按页面图重排为 LaTeX，没有截图。

## 原书疑点

1. 第 25 页拆分公式「Time_accumulated/Time_observe = Time_accumulated/Number_tasks ∞ Number_tasks/Time_observe」，中间的运算符印成「∞」，应为乘号「×」，译文改为 \times。
2. 第 25 页「Time_observe is Number_task」下标为单数 task，其余各处为 tasks；「Time_accumulated ≥ Time_observed」写作 observed，其余各处为 observe。译文统一为 Number_tasks、Time_observe。
3. 第 28 页「As mentioned on page D-26, the equation for Time_server has another restriction on task arrival」：D-26 页说的是 Time_queue 的公式（「There is one more restriction about the arrival of tasks, which we reveal on page D-28」），这里的 Time_server 疑为 Time_queue 之误。译文照原书写 Time_server，请确认。
4. 第 28 页平均剩余服务时间公式中「Arithemtic mean」拼写错误，按 Arithmetic mean 译为「算术平均值」。第 30 页例题公式中「Server uti1ization」（数字 1 代替字母 l）照正常拼写处理。
5. 第 27 页直方图例子，pdftotext 抽出「10 ms」，页面图上是「10 μs」，以页面图为准。
6. 第 26 页「Service utilization must be between 0 and 1」，前后文都说 server utilization，此处 Service 疑为笔误，译文只写「利用率」。第 30 页「This relates number of items in queue to service utilization」同样译为「利用率」。
7. 第 25 页「Server utilization is simply the mean number of tasks being serviced divided by the service rate」：按单服务器服务速率 1/Time_server，除以服务速率后得到的是 到达率×Time_server²，与下面的公式不符；按公式，应为「除以服务器数」或「到达率除以服务速率」。照原书译出，未改。
8. 第 26 页「page D-28」、第 28 页和第 30 页「page D-26」：书页码照录。「Appendix M」写成 [附录 M](#app-m) 链接；「Chapter 2」写纯文本「第 2 章」。

## 新定术语

| 英文 | 译法 |
|---|---|
| fault injection | 故障注入 |
| quality-of-service metrics | 服务质量指标 |
| transient / permanent fault | 瞬时故障 / 永久故障 |
| reconstruction | 重构（RAID 卷）；rebuild 译「重建」 |
| hot spare | 热备盘 |
| window of vulnerability | 易损窗口 |
| availability benchmark | 可用性基准测试 |
| queuing theory | 排队论 |
| steady state / equilibrium | 稳态 / 平衡状态 |
| flow-balanced | 流量平衡 |
| Little's law | Little 定律（与第 4 章一致） |
| queue / waiting line / server | 队列 / 等待线 / 服务器 |
| server utilization | 服务器利用率 |
| traffic intensity | 业务强度 |
| queue discipline | 排队规则 |
| histogram / bucket | 直方图 / 桶 |
| weighted arithmetic mean time | 加权算术平均时间 |
| variance / standard deviation | 方差 / 标准差 |
| (squared) coefficient of variance | 方差系数（的平方），C / C² 保留 |
| exponential distribution | 指数分布 |
| memoryless | 无记忆性 |
| Poisson distribution / process | 泊松分布 / 泊松过程 |
| probability mass function | 概率质量函数 |
| average residual service time | 平均剩余服务时间 |
| interarrival time | 到达间隔时间 |
| infinite / finite population model | 无限总体模型 / 有限总体模型 |
| back-of-the-envelope calculation | 粗略估算 |
| best-case analysis | 最佳情况分析 |

公式中的变量名 Time_server、Time_queue、Time_system、Length_server、Length_queue、Length_system、Time_observe、Time_accumulated、Number_tasks 保留英文，作为符号使用；Arrival rate、Server utilization 等用普通词写的量译成中文。
