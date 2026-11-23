# 附录 F 校对记录（09-app-f-02.Rmd）：F.2 节后半、F.3 节开头

页段：底本/appendix-f.pdf 第 12–22 页（书页 F-12～F-22，PDF 页号与书页号一致，本段没有混入其他附录的页）。

- 开头：第 12 页第一段「Networks that implement flow control do not need to drop packets ...」。第 11 页末以 Xon/Xoff 缓冲区例题的解答收尾，第 12 页没有延续半段。
- 结尾：第 22 页末段「... how are paths allocated to packets?」跨到第 23 页，译到「Instead, as explained in Section F.5, paths are usually established one fragment at a time.」为止。第 23 页从「These three network functions—routing, arbitration, and switching ...」起，以及「Shared-Media Networks」小标题和图 F.8，留给下一部分。
- 包含：F.2 节的小标题「Characterizing Performance: Latency and Effective Bandwidth」（{-}），F.3 节标题（sec-f-3），F.3 节的小标题「Additional Network Structure and Functions: Topology, Routing, Arbitration, and Switching」（{-}），两道例题。

## 图

- 图 F.5（第 13 页）：截图 images/appf/fig-f-5.png（200 dpi，裁剪 -x 880 -y 2010 -W 1660 -H 850），已检查不缺边、不带图注。图注末尾补了图内标注的译文。
- 图 F.6（第 19 页）：截图 images/appf/fig-f-6.png（200 dpi，裁剪 -x 860 -y 1620 -W 1670 -H 1107），已检查含完整横轴标题，不带图注线。图注末尾补了坐标轴标题译文。
- 图 F.7（第 21 页）：排成 Markdown 表格。列名译出；系统名、网络名照录英文；「Few μs」译「几 μs」，「~1 μs with up to 4 packets processed in ||」译「~1 μs，最多可并行处理 4 个包」，「CRC for link, dest.」译「链路级和目的端 CRC」。

## 原书疑点

1. 第 19 页「Let's use the equation on page F-17」：有效带宽公式实际印在 F-18 页（F-17 页是 BW_LinkInjection 公式）。照录「第 F-17 页」。
2. 第二道例题的解答：SAN「packets less than about 800 bytes」接收开销大于传输时间，「packets of 655 bytes and larger」才能达到 90% 聚合带宽。按题设参数自算（接收开销 0.4 μs + 0.05 ns/字节，传输时间 1 ns/字节），交叉点约为 421 字节；按开销取值不同也算不出 800/655。图 F.6 中 SAN 曲线约在 800 字节处与 OCN 重合，与正文「about 800」一致。数字照录原书，请对照纸本或旧版确认。
3. 第一道例题：题设距离写「5000 m」，解答写「5 km」，两者一致，照录。WAN 结果 30.005 + 25000 + 0.1 + 40.005 = 25070.11 μs ≈ 25.07 ms，已核对；OCN 110.025 ns、SAN 0.835 μs、LAN 32.11 μs 均已核对。
4. 例题公式中的单位「km/sec」「Gbits/sec」统一写成 km/s、Gbit/s，「bytes」写「字节」。

## 新定术语

| 英文 | 译法 |
|---|---|
| flow control | 流量控制 |
| lossless / lossy network | 无损网络 / 有损网络 |
| credit / credit-based flow control | credit（不译）/ 基于 credit 的流量控制 |
| interconnection network domain | 互连网络域 |
| OCN / SAN / LAN / WAN | 保留缩写 |
| time of flight | 飞行时间 |
| transmission time | 传输时间 |
| transport latency | 传送延迟 |
| total latency | 总延迟 |
| sending / receiving overhead | 发送开销 / 接收开销 |
| transmission speed | 传输速率 |
| aggregate bandwidth | 聚合带宽 |
| effective bandwidth | 有效带宽 |
| raw bandwidth | 原始带宽 |
| zero-load network | 零负载网络 |
| link pipelining | 链路流水 |
| staging latch | 级间锁存器 |
| link injection / reception bandwidth | 链路注入带宽 / 链路接收带宽（下标 BW_LinkInjection 等照录英文） |
| network injection / reception bandwidth | 网络注入带宽 / 网络接收带宽 |
| payload / header / trailer | 有效载荷 / 包头 / 包尾 |
| Big Endian / Little Endian | 大端 / 小端 |
| topology / routing / arbitration / switching | 拓扑 / 路由 / 仲裁 / 交换 |
| shared-media / switched-media network | 共享介质网络 / 交换介质网络 |
| footprint | 占地 |
