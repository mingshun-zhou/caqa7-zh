# 附录 F 校对记录（09-app-f-01.Rmd）：附录标题、F.1 节、F.2 节前半

页段：底本/appendix-f.pdf 第 1–11 页（书页 F-1～F-11）。第 1 页是附录标题页（标题、修订者、四段章首引语，无页码），第 2–11 页页眉均印 F 字母页码，没有混入其他附录的页。

起止：从附录标题「Interconnection Networks」、修订者行（Revised by Timothy M. Pinkston … José Duato …）、四段章首引语（McLuhan、Mayer、Wu & Feng、Dally）和 F.1 节「Previous chapters and appendices cover the components of a single computer …」开始；到第 11 页例题解答末句「… the minimum buffer space for Xon/Xoff turns out to be more than twice that for credit-based flow control.」为止。第 11 页末尾段落没有跨页，第 12 页从新段落「Networks that implement flow control do not need to drop packets …」开始，由下一部分翻译。

## 图

- 图 F.1（第 2 页）：截图 images/appf/fig-f-1.png（200 dpi，-x 880 -y 2225 -W 1320 -H 722），不含图注；图内标注译文补在图注末尾。
- 图 F.2（第 5 页）：截图 images/appf/fig-f-2.png（200 dpi，-x 1030 -y 395 -W 1280 -H 790），图内坐标轴译文补在图注末尾。
- 图 F.3（第 6 页）：截图 images/appf/fig-f-3.png（200 dpi，-x 865 -y 2530 -W 1320 -H 362）。
- 图 F.4（第 7 页）：截图 images/appf/fig-f-4.png（200 dpi，-x 950 -y 2170 -W 1530 -H 728），图内字段名和类型编码译文补在图注末尾。
- 本部分没有表格、脚注和习题。

## 原书疑点

1. 「Sonic's Smart Interconnect」：该公司一般写作 Sonics，照原书写 Sonic。
2. OCN 一段的时效性内容（TILE-Gx「4Q 2011」「200 cores planned for 2013」）沿用旧版文字，照译。
3. 例题公式中 66% 与 2/3 混用（原书如此），照录。按公式核算：10 km 时往返延迟 100 μs，单包发送时间 100 ns，需 1000 个信用；100 m 时需 10 个；1 cm、1 m 不足 1，取 1，与原书一致。
4. 「thousands of megabytes of RAM」译为「几千 MB 的 RAM」，保留原书量级说法。
5. 修订者行原书无对应 Markdown 格式，译成标题下一行斜体说明。
6. 文献引注原书为方括号［Hoskote07］等，用全角方括号照录，与附录 D 做法一致。
7. 引用的 F.3～F.13 节尚未译出，已按约定写成 #sec-f-N 链接。

## 新定术语

| 英文 | 译法 |
|---|---|
| interconnection network | 互连网络 |
| end node / link | 端节点 / 链路 |
| internetworking | 网络互连 |
| communication subnet / subsystem | 通信子网 / 通信子系统 |
| on-chip network (OCN) / network-on-chip (NoC) | 片上网络（OCN）/ 片上网络（NoC） |
| system/storage area network (SAN) | 系统/存储区域网络（SAN） |
| local / wide area network | 局域网（LAN）/ 广域网（WAN） |
| long-haul network | 长途网络 |
| compute tile | 计算 tile |
| dedicated link / shared link / switched point-to-point | 专用链路 / 共享链路 / 交换式点对点 |
| message / request / reply | 消息 / 请求 / 应答 |
| payload / header / trailer | 有效载荷 / 头部 / 尾部 |
| network interface / channel adapter | 网络接口 / 通道适配器 |
| maximum transfer unit | 最大传输单元 |
| packet / datagram | 包 / 数据报 |
| communication protocol | 通信协议 |
| offload / TCP offload engine | 卸载 / TCP 卸载引擎 |
| OS bypassing | 绕过操作系统、OS 旁路 |
| zero-copy / user-level communication protocol | 零拷贝协议 / 用户级通信协议 |
| form factor | 外形规格（与附录 D 一致） |
| packet transport | 包传输 |
| flow control | 流量控制（流控） |
| Xon/Xoff (Stop & Go) | Xon/Xoff（Stop & Go），保留英文 |
| credit-based flow control / credit counter | 基于信用的流控 / 信用计数器 |
| high/low occupancy level, watermark | 高水位 / 低水位 |
| hysteresis | 迟滞 |
| wavelength division multiplexing | 波分复用 |
| multimode / single-mode fiber | 多模光纤 / 单模光纤 |
