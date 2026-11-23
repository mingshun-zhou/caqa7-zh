# 附录 H 统稿记录（VLIW 和 EPIC 的硬件与软件）

## 文件与页段

| 文件 | PDF 页段 | 起止 | 图 |
|---|---|---|---|
| 09-app-h-01.Rmd | 1–11 | 标题、章首引语、H.1、H.2 至「消除相关的计算」DADDUI 例 | 无 |
| 09-app-h-02.Rmd | 11–21 | 树高降低起，H.3 至踪迹调度段末 | H.1–H.4 |
| 09-app-h-03.Rmd | 21–30 | 「Although trace scheduling…」起，超块、H.4、H.5 至毒位段 | H.5 |
| 09-app-h-04.Rmd | 31–41 | 毒位例题起，H.5 余下部分、H.6 至「…IA-32 implementations.」 | H.6–H.9 |
| 09-app-h-05.Rmd | 41–44 | 「The Itanium 2 can fetch…」起，H.6 余下、H.7、参考文献 | H.10、H.11 |

- 第 45 页空白，第 46 页是附录 I 目录页（印 I-2 等），均不属本附录，跳过。
- 本附录没有习题。参考文献 1 条（原书标题为单数 Reference）。

## 统稿所做修改

1. **补译第 4 部分**：原第 4 部分失败、文件缺失，由统稿人按规则补译为 09-app-h-04.Rmd（第 31 页起至第 41 页第一段）。内容包括：毒位例题、毒位与上下文切换、类重排序缓冲的第四种方法、小节「访存推测的硬件支持」、H.6 节标题及「Intel IA-64 指令系统结构」「IA-64 的寄存器模型」「指令格式与显式并行的支持」「指令系统基础」「谓词执行与推测的支持」等小节、「Itanium 2 处理器」小节第一段。
2. **重新裁剪图 H.7、H.8**：目录中已有的 fig-h-7.png、fig-h-8.png（第 4 部分残留）右边和下边被截掉（H.7 缺模板 28、29 两行和槽 2 右侧的停止位粗线，H.8 缺执行周期列和 (b) 表最后一行）。已按 200 dpi 整页图重新裁剪（H.7：第 36 页 712,388–2360,2205；H.8：第 37 页 345,342–2528,2412），检查四边完整、不含图注。
3. 图 H.6、H.9 排成 Markdown 表格；图 H.9 原表「指令类型」「格式数」两列是合并单元格，表格中只在每组第一行填写。
4. 衔接核对：1/2、2/3、3/4、4/5 各边界均对照 PDF 文本，无漏译、无重复。
5. 术语统一：第 5 部分「检测例外」改为「检测异常」（全附录 exception 统一译「异常」；「例外」只用于 exception to a rule 的一般含义）；第 5 部分首段「指令束（bundle）」的英文注移到首次出现处（第 4 部分 H.6 节）。
6. 锚点检查：{#app-h}、sec-h-1～sec-h-7、sec-h-references 齐全；fig-h-1～fig-h-11 均已定义，截图文件（1–5、7、8、11）均存在；附录内全部链接都能对上（含第 1、3 部分引用的 #sec-h-6、第 5 部分引用的 #fig-h-8）。

## 全附录疑点

1. **第 31 页毒位例题（第 4 部分）**：代码是 `sLD` / `SD`，但代码注释写「exception for speculative LW」，正文写「nonspeculative SW」，是旧版 MIPS 32 位助记符的残留。译文照录（注释译作「推测 LW 的异常在此识别」，正文保留 `SW`），请确认是否改为 LD/SD。
2. **第 2 部分软件流水段「Section 2.2」**：第 7 版循环展开在 3.2 节，疑为旧版节号残留，译文照录「2.2 节」。
3. **第 41 页 H.6 性能段**：正文说「the full set of SPEC floating-point benchmarks」，图 H.11 只画了 5 个 SPECfp、5 个 SPECint，照译。
4. 第 32 页寄存器编号「Registers 32 to 128」（应为 32～127，共 96 个），原书如此，照录；寄存器旋转一段同。
5. 第 35 页例题题干「the array increment example, x[i] = x[i] + s」（抽字乱码 ¼ þ 已按页面图改正）；图 H.8 图注「x[i] [ x[i] D s」同为乱码。
6. 第 35 页图 H.6 的 I 部件 I 类「integer Integer and multimedia shifts」有重复词，按意思译「整数和多媒体移位」。
7. 第 37 页图 H.8 图注说分支依赖「the DADD」，表中实际是 `DADDUI`，照译。图 H.8 (a) 中 MMF 指令束模板编号 14/15 与停止位的对应照原图。
8. 第 31 页「the compiler, rather than the hardware, has the job of register renaming」照译。
9. 第 33 页「current frame pointer (CFM)」缩写与全称不一致（CFM 实为 current frame marker），照录。
10. 第 25 页「make it predicted」按 predicated 译；第 14 页「sport」按 support 译（见第 2、3 部分记录）。
11. 第 1 部分：代码 `i=i+1 {` 缺右括号、`A[i] = B[i] + C[i]` 缺分号，照录；「GCD test succeeds but no dependence exists」照字面译。

## 新定术语（全附录）

| 英文 | 译法 |
|---|---|
| loop-carried dependence | 循环携带相关 |
| induction variable / recurrence | 归纳变量 / 递推 |
| dependence distance | 相关距离 |
| GCD test | 最大公约数（GCD）测试 |
| points-to analysis / interprocedural analysis | 指向分析 / 过程间分析 |
| copy propagation / back substitution | 复制传播 / 回代 |
| tree height reduction | 树高降低 |
| software pipelining | 软件流水 |
| start-up / wind-down code | 启动代码 / 收尾代码（prologue / epilogue 同） |
| global code scheduling / motion | 全局代码调度 / 全局代码移动 |
| trace scheduling / selection / compaction | 踪迹调度 / 踪迹选择 / 踪迹压缩 |
| compensation / bookkeeping code | 补偿代码 / 簿记代码 |
| superblock / extended basic block / tail duplication | 超块 / 扩展基本块 / 尾复制 |
| predicated instruction / full predication / if conversion | 谓词指令 / 完全谓词化 / if 转换 |
| conditional move / annul | 条件传送 / 作废 |
| poison bit | 毒位（poison bit） |
| terminating / resumable exception | 终止性异常 / 可恢复的异常 |
| speculation check / sentinel | 推测检查 / 哨兵 |
| reorder buffer | 重排序缓冲（与第 3 章一致） |
| fix-up code / routine | 修复代码 / 修复例程 |
| EPIC | 显式并行指令计算机（EPIC） |
| bundle / bundle bits / template field | 指令束 / 指令束模板位（模板位）/ 模板字段 |
| instruction group / stop | 指令组 / 停止位 |
| syllable | 音节 |
| execution unit slot; I/M/F/B-unit | 执行部件槽；I/M/F/B 部件 |
| register stack / register stack engine / frame | 寄存器栈 / 寄存器栈引擎 / 栈帧 |
| local area / output area | 局部区 / 输出区 |
| register rotation | 寄存器旋转 |
| predicate register / branch register | 谓词寄存器 / 转移寄存器 |
| control speculation / memory reference speculation | 控制推测 / 访存推测 |
| NaT / NaTVal | 保留英文 |
| advanced load / ALAT | 提前 load / ALAT |
| instruction delivery / operand delivery | 指令分送 / 操作数分送 |
| scoreboard | 记分牌 |
| split bundle | 拆分的指令束 |
