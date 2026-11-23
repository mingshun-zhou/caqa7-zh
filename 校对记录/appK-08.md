# 附录 K 校对记录（09-app-k-08.Rmd）：K.5 节后半、K.6 节、致谢

页段：底本/appendix-k.pdf 第 71–78 页（书页 K-71～K-76）。第 71 页开头一段（Several studies of the IBM 360…）是新起的段落，不是上一页的延续，本文件从这里开始。上一部分（09-app-k-07.Rmd）止于第 70 页 370-XA 一段。

## 跳过的页

- 第 77 页：空白页。
- 第 78 页：只有一条横线和灰色竖条，没有页码、没有文字，是下一附录（L）的章首装饰页，不属于附录 K，跳过。

## 图

- 图 K.59（第 75 页，该页无页眉，按版面和页序属 K-75）：排成 Markdown 表格。原书各类别汇总行为粗体，照排粗体；空格照原书留空。
- K.5 节中各指令表（R-R、RX、RS/SI、SS 格式）原书没有图号，排成无图名的 Markdown 表格；说明列给中文译名，括号保留原英文。

## 原书疑点

1. 图 K.59 汇总行与分项之和不完全一致（如 PLIC 控制类 32%，BC/BCR 28% + BAL/BALR 3% = 31%），原因是只列出了频率 > 1.5% 的指令且有舍入，照录。
2. 图 K.59 图注把 PL-I 和 PL/I 两种写法并用，照录。
3. 致谢中的 Hiokazu Takata，原书拼写如此（常见拼法为 Hirokazu），照录。
4. K.6 节引用「Section L.4 (available online)」，写成「[附录 L](#app-l) 的 L.4 节」。若附录 L 不入书，锚点 app-l 需在合并时处理。
5. 附录 K 到此结束，原书本附录没有习题，也没有单列参考文献（参考文献在在线 L.4 节）。

## 新定术语

| 英文 | 译法 |
|---|---|
| supervisor mode | 管态（与附录 B、F 一致） |
| supervisor call (SVC) | 管理程序调用 |
| storage key | 存储键 |
| program mask / system mask | 程序屏蔽 / 系统屏蔽 |
| PSW | 保留缩写 |
| packed (decimal) | 压缩十进制 |
| Move numeric / Move zone | 数字位传送 / 区位传送 |
| Test under mask | 按屏蔽测试 |
| Translate (TR) | 翻译 |
