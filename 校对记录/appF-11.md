# 附录 F 校对记录（09-app-f-11.Rmd）：习题 F.2～F.42、参考文献

页段：底本/appendix-f.pdf 第 111–121 页。第 111–120 页印书页 F-111～F-120，属附录 F。第 121 页是空白页（无文字、无页码），跳过。第 122 页是附录 G 的目录页（G.1 Introduction G-2 …），不在本部分范围内，也不属于附录 F，未译。

- 开头：第 111 页从习题 F.2「For the same assumptions as Exercise F.1, what is the bandwidth of overnight delivery …」开始。F.1 和 Exercises 标题、星号说明在第 110 页，已由 09-app-f-10.Rmd 译出，本文件不重复写习题标题。
- 结尾：第 120 页最后一条参考文献 Yang, Y., Mason, G., 1991. Nonblocking broadcast switching networks …，附录 F 至此结束。
- 习题格式：沿用 09-app-f-10.Rmd 中 F.1 的写法，带 ✪ 的题照录 ✪；原书 F.30、F.33、F.35、F.36、F.41、F.42 无 ✪，照原书不加。小题写成 `a.　[12] <F.4> ……`，与 09-app-a-05.Rmd 一致。[Discussion] 译作 [讨论]。
- 参考文献：标题 `## 参考文献 {- #sec-f-references}`，条目照录英文。抽取乱码作了以下修正：页码中的「e」改为连接号（如 398e412 → 398–412，COMe29:4 → COM–29:4，Ce34:10 → C–34:10）；「1995Santa」「1999San Francisco」等年份与地名粘连处补逗号和空格；「Computer ArchitectureMay,」改为「Computer Architecture, May,」；Spurgeon 条目网址「etherman-age.com」是断行连字符，恢复为 ethermanage.com。其余拼写（Commmunications、Borka, N.、ACM Computer Surveys、5-ghz）照录。

## 图

本段页面没有图。习题中引用的图 F.7、F.11、F.12、F.14、F.15、F.16、F.19、F.20、F.29、F.30、F.31、F.32、F.41 都写成链接 [图 F.n](#fig-f-n)。截至本稿，图 F.29～F.32、F.41 所在部分的文件尚未出现，锚点有待那几部分译出后生效，请统稿时检查。原书「page F-31」等页码照录为「第 F-31 页」。

## 原书疑点

1. pdftotext 把 μs 抽成「ms」：F.6 的 100 μs、F.24 的 1.0 μs、F.32 的 200 μs / 300 μs / 5 μs / 10 μs，均按页面图改为 μs。F.31 的「about 2 ms」页面图确为 ms，照录。
2. F.31 题干先说「Measurements of a network bridge」，后面各小题都说 gateway（网关），原书前后用词不一致，照译「网桥」「网关」。按 2 ms、200 包/秒算，利用率为 0.4。
3. F.11 (f)「node i communicates with node i + 1 modulo N − 1」：桶形移位通常是 (i + 1) mod N，原书写 N − 1，照录为 $(i+1) \bmod (N-1)$，请核对。F.11 (e) 矩阵转置的下标照页面图录入。
4. F.30 说「Update that figure」（单数），前面列了三个图（F.7、F.16、F.20），照译「更新该图」。
5. F.41 提到 Compaq 网站，F.42 说「At the time of the writing of the fourth edition」，都是旧版遗留，照译。
6. F.27 中 FlexSim 网址（ceng.usc.edu/smart/FlexSim/flexsim.html）照录，可能已失效。

## 新定术语

| 英文 | 译法 |
|---|---|
| bytes in flight | 处于飞行中的字节 |
| payload | 有效载荷 |
| delivered bandwidth | 有效带宽 |
| straight / exchange（交换机状态） | 直通 / 交换 |
| routing tag | 路由 tag |
| bit-reversal / perfect shuffle / bit-complement / butterfly / matrix transpose / barrel-shift permutation | 位反转 / 完全混洗 / 位取反 / 蝶形 / 矩阵转置 / 桶形移位置换 |
| regressive / progressive (deadlock recovery) | 退行式 / 进行式（与 F.5 节一致） |
| dimensional turn | 维间转弯 |
| Turn Model | 转向模型（Turn Model）（与 F.5 节一致） |
| channel dependency graph | 通道依赖图 |
| efficiency factor ρ | 效率因子 $\rho$（与 F.2 节一致） |
| two-phased / three-phased arbitration | 两阶段 / 三阶段仲裁（与 F.5 节一致） |
| cut-through / store-and-forward switching | 直通交换 / 存储转发交换 |
| applied load | 施加负载 |
| warm-up period | 预热期 |
| network bridge / gateway | 网桥 / 网关 |
| bandwidth matching | 带宽匹配 |
| rack unit (RU) | 机架单元（RU） |
| Advanced Switching | 高级交换（Advanced Switching） |
| n_{1/2} | $n_{1/2}$，「达到峰值带宽一半所需的消息大小」 |
