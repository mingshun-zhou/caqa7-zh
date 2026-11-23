# 附录 K 校对记录（09-app-k-05.Rmd）：K.3 后半、K.4 章首引语

页段：底本/appendix-k.pdf 第 41–50 页（书页 K-41～K-50），全部印着附录 K 的页码，没有混入其他附录的页。

- 开头：第 41 页以「As mentioned earlier SSE2 presents a model of IEEE floating-point registers.」开始。这是第 40 页 FADD 选项表之后另起的一句，不是上一页段落的延续，所以本部分译出。第 40 页的图 K.35、「Not all combinations are provided…」一段和 FADD 选项表由上一部分处理。
- 结尾：第 50 页末是 K.4 节标题和 Eric Raymond 的章首引语，引语跨到第 51 页，译到「… The New Hacker's Dictionary (1991)」为止。下一部分从 K.4 的「Introduction」（「To enhance your understanding of instruction set architectures, …」）开始。
- 标题层级：与 09-app-k-03.Rmd 一致。粗体小标题「80x86 Instruction Encoding」「Putting It All Together: Measurements of Instruction Set Usage」「Concluding Remarks」写作 `### … {-}`；斜体小标题「Measurements of 80x86 Operand Addressing」「Comparative Operation Measurements」写作 `#### … {-}`。K.4 写作 `## VAX 体系结构 {#sec-k-4}`。

## 图

- 图 K.36（第 41 页）：截图 images/appk/fig-k-36.png（200 dpi，-x 1320 -y 1550 -W 740 -H 1360）。
- 图 K.37（第 42 页）：截图 images/appk/fig-k-37.png（-x 960 -y 370 -W 1120 -H 1820）。
- 图 K.38（第 43 页）：表格有合并单元格和斜体说明文字，截图 images/appk/fig-k-38.png（-x 340 -y 345 -W 2280 -H 1050）。
- 图 K.42（第 46 页）：柱状图，截图 images/appk/fig-k-42.png（-x 950 -y 340 -W 1150 -H 1330）。
- 以上四张已用 read_image 检查，不缺边、不带图注；图内英文标注的译文补在图注末尾。
- 图 K.39（第 44 页）、K.40、K.41（第 45 页）、K.43、K.44（第 47 页）、K.45（第 48 页）、K.46、K.47（第 49 页）、K.48（第 50 页）：排成 Markdown 表格。pdftotext 对这些表格中的竖排数字抽取有误，所有数据都按页面图逐项核对过。
- 图 K.39 原书只有「Index」「Base」两个列名，第一列编码值无列名，译文补了「编码」。
- 图 K.44、K.45 的指令名在中文后括注原书英文（Load、Cond. branch 等），AND、OR 保留英文。原书空白单元格照留空。
- 图 K.48 原书是两层表头（Integer average / FP average 下各分 x86、DLX），Markdown 不支持合并表头，改写为「整数平均：x86」等四列。
- 图 K.46、K.47、K.48 放在正文引用它们的段落之后、「结束语」标题之前。

## 原书疑点

1. 图 K.38 中 r/m = 3 一行 16 位 mod = 0 栏印作「addr=BP+SI」，与 r/m = 2 重复；按 8086 编码应为 BP+DI。截图照原样保留，未改。另外 mod = 1、mod = 2 的 16 位栏中，r/m = 4～7 的 disp8 / disp16 似乎与列标题互换（mod = 1 栏写 SI+disp16，mod = 2 栏写 SI+disp8），也照原样保留。
2. 图 K.38 图注「when mod ¦3 (sib)」中的符号是抽取乱码，页面上为「mod ≠ 3」的残字，按意思译作 mod ≠ 3。图 K.39 中「If mod ¦ 0」同样译作 mod ≠ 0。
3. 正文「See Section L.3 for a historical explanation」：本版附录 L 是「地址转换的高级概念」，历史回顾在附录 M（指令系统的演变是 M.4 节，09-app-m-02.Rmd 中确有 80x86 浮点栈的讨论）。原书交叉引用疑为旧版遗留，译文照原文写纯文本「L.3 节」，没有加链接，合并时请确认是否改为 [M.4 节](#sec-m-4)。
4. 本节开头说「compare the measurements to MIPS」，其后正文和图表都与 DLX 比较，原书如此，照译。
5. 正文说整数程序的数据访问是 DLX 的「1.25 倍」，图 K.46 的整数平均为 1.23；浮点程序「两到四倍」，图 K.47 的平均为 4.35。照原文译出，未改。
6. 图 K.48 中浮点平均的 DLX「数据传送合计」只有 2%，与 DLX 浮点数据传送 33% 并列，数字照录。

## 新定术语

| 英文 | 译法 |
|---|---|
| postbyte | 后字节（postbyte） |
| address specifier | 地址说明符 |
| prefix / segment override | 前缀 / 段超越 |
| escape opcode | 换码（escape）操作码 |
| displacement | 偏移量（与附录 A 一致） |
| scaled index | 比例变址 |
| direct addressing / register indirect | 直接寻址 / 寄存器间接寻址（与附录 A 一致） |
| instruction mix | 指令混合比（与第 1 章一致） |
| read-modify-write | 读-改-写 |
| orthogonal | 正交 |
| pop (the stack) | 弹栈 |
