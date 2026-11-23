# 附录 I 校对记录（09-app-i-05.Rmd）：I.7 节结尾、I.8 节、I.9 节

页段：底本/appendix-i.pdf 第 41–48 页（书页 I-41～I-47）。

- 开头：第 41 页第一段是 I.7 节「Implementing the Directory Controller」中三条观察的第 3 条（「If instead of returning the data through the directory, the owner node forwards …」），第 1、2 条在第 40 页，由上一部分译出。本文件从第 3 条开始，列表项直接写作「3.」接续。
- 结尾：I.9 节最后一句「… will be slow or will be driven by factors other than proven architectural superiority.」（第 47 页），附录 I 正文到此结束。
- 第 48 页印的是附录 J 的目录页（J.1 Introduction J-2 … Exercises J-66），不属于附录 I，跳过。
- 附录 I 原书没有习题和参考文献，本部分无相应内容。

## 图

- 图 I.18（第 43 页）：截图 images/appi/fig-i-18.png（200 dpi，裁到「link」下沿，不含图注横线）。图内英文标注的译文补在图注末尾。放在节点组成列表之后。
- 图 I.19（第 44 页）：照片截图 images/appi/fig-i-19.png。
- 图 I.20（第 45 页）：术语表，排成 Markdown 表格；图注中「The term MPP, which had the original meaning described above …」以下几句排在表格后的正文段落里。
- 图 I.21（第 46 页）：截图 images/appi/fig-i-21.png，图内标注译文补在图注末尾。

## 原书疑点

1. I.8 节「BG/L consists of up to 64 K nodes organized into 32 racks each containing 1 K nodes」：32 × 1 K = 32 K，与 64 K 不符（每机柜 2 块板 × 512 节点 = 1 K 节点，实际 LLNL 的 BG/L 为 64 个机柜）。照原书译为 32 个机柜，请核对。
2. 原书笔误，译文已按意思改正：「the main BL/G interconnect network」应为 BG/L；「a global or or a global and」译为全局「或」或全局「与」；「speculative out-order issue」译为推测式乱序发射；「nonbblocking」为 nonblocking；「the chip that forms of the heart」；「The density in terms allows」按 in turn 理解；「an approach the uses」按 that uses 理解。
3. 「leading to times for large-scale reductions that are 10 to 100 times faster」按手册倍数规则译为「所需时间是典型超级计算机的 1/100 到 1/10」。Power5+ 处理器数核对：360 TFLOPS ÷（8 × 1.9 GHz）≈ 23 700 个，与原书「about 23,500」相近，照录 23 500。「the dual processor」理解为双核 Power5+ 芯片，译作「这种双核处理器」。
4. I.9 节「over the past five to ten years」「past 15 years」「30 years ago」均照录（原书沿用旧版的时间表述）。

## 新定术语

| 英文 | 译法 |
|---|---|
| forwarding style of protocol | 转发式协议 |
| NAK | NAK（不译） |
| non-atomicity / finite buffering | 非原子性 / 有限缓冲 |
| formal / informal verification | 形式化验证 / 非形式化验证 |
| computing density | 计算密度 |
| RAS | RAS（可靠性、可用性和可维护性） |
| rack / double-sided board | 机柜 / 双面电路板 |
| barrier network | 栅障网络 |
| global collective network | 全局集合通信网络；collective network 译「集合通信网络」 |
| reduction | 归约 |
| prefetch buffer | 预取缓冲 |
| embedded DRAM | 嵌入式 DRAM |
| lockbox | 锁箱 |
| commodity cluster / custom cluster | 商用集群 / 定制集群 |
| constellation | 星座（系统） |
| headless workstation / blade server | 无头工作站 / 刀片服务器 |
| uniform cluster | 均匀集群 |
| TOP500 list | TOP500 榜单 |
