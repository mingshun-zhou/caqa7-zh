# 附录 E 校对记录（09-app-e-03.Rmd）：E.7 节后半、E.8 节

页段：底本/appendix-e.pdf 第 21–28 页（书页 E-21～E-26 及两页非本附录内容）。

- 开头：第 21 页「Not surprisingly, the cellular handset market is growing at 35% per year…」。第 20 页最后一段在「…exceeds the number of wired phones in use.」处已经结束（其后是图 E.13），所以第 21 页开头是新段落，没有需要跳过的半段，本文件从这一段译起。
- 结尾：第 26 页 E.8 节末句「…places more demands on both the programmer and the compiler for extracting parallelism.」。
- 第 27 页为空白页；第 28 页是附录 F 的目录页（F.1 Introduction F-2 …… References F-117），不属于附录 E，跳过。
- 附录 E 没有习题和参考文献，因此本文件不含 sec-e-exercises、sec-e-references。

## 图

- 图 E.14（第 22 页，表格）：排成 Markdown 表格，三列「挑战 / 说明 / 影响」。10^−7^ 照原书上标。
- 图 E.15（第 23 页）：截图 images/appE/fig-e-15.png（200 dpi），图注末尾补了图内标注译文。
- 图 E.16（第 23 页）：截图 images/appE/fig-e-16.png，图注末尾补了图内标注译文。
- 图 E.17（第 25 页，照片）：截图 images/appE/fig-e-17.png，图注末尾补了图内标注译文。
- 三张截图都已检查，不缺边，不带图注和横线。

## 原书疑点

1. 第 24 页「as the signal strength drops offs」，「offs」应为 off，按「信号强度减弱时」译。
2. 第 24 页「gallium arsinide」应为 gallium arsenide（砷化镓），按正确词译。
3. 第 25 页「each bit is stretched so that it takes 11 times the minimum frequency」说法含混（实为扩频把每位展宽到占用更宽频带），照原文译作「占用最小频率的 11 倍」。另外 9600 位/秒展宽到 1.25 Mbit/s 约为 130 倍，与「11 倍」对不上，照录未改。
4. 本段数据（1999 年用户数、手机销量、2001 年的芯片数、IMT-2000「新」标准）均为原书旧数据，照译。
5. 引用 [Grice and Kanellos 2000]、National Research Council [1997]、Groe and Larson [2000] 原书正文中是文献链接，本附录无参考文献节，保留为纯文本。

## 新定术语

| 英文 | 译法 |
|---|---|
| carrier signal | 载波信号 |
| modulate / modulation | 调制 |
| bit error rate (BER) | 误码率（BER） |
| signal-to-noise ratio (SNR) | 信噪比（SNR） |
| path loss / shadow fading / multipath fading | 路径损耗 / 阴影衰落 / 多径衰落 |
| spread spectrum | 扩频 |
| base station / peer-to-peer architecture | 基站结构 / 点对点结构 |
| cellular telephony | 蜂窝电话 |
| cell | 蜂窝（首次注「cell，即小区」） |
| handoff | 越区切换 |
| switching office | 交换局 |
| mixer / demodulator / decoder | 混频器 / 解调器 / 解码器 |
| RF amplifier | 射频放大器 |
| forward path / reverse path | 前向路径 / 反向路径 |
| setup channel / voice channel | 建立信道 / 话音信道 |
| supervisory tone | 监测音 |
| electronic serial number | 电子序列号 |
| CDMA / TDMA / GSM / AMPS | 码分多址 / 时分多址 / 全球移动通信系统 / 高级移动电话服务 |
| IMT-2000 | 国际移动通信 2000（IMT-2000） |
| media extensions | 多媒体扩展 |
| line current | 市电 |
