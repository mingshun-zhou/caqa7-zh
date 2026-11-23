# 附录 H 校对记录（09-app-h-01.Rmd）：第 1 部分

页段：底本/appendix-h.pdf 第 1–10 页（书页 H-1～H-10）。第 1 页即本附录首页（印 H 字母与标题），没有混入其他附录的页。
开头：附录标题「Hardware and Software for VLIW and EPIC」和 M. Hopkins 章首引语，正文从 H.1 节「In this chapter, we discuss compiler technology…」开始。
结尾：第 10 页末尾「消除相关的计算」小节中 DADDUI 化简的例子跨到第 11 页，译到第 11 页「…are examples of this type of optimization.」为止；下一段「In these examples, computations are actually eliminated…」（树高降低）留给第 2 部分。

## 图

- 第 1–10 页没有图（Figure H.n）。代码段照录，C 代码注释译成中文。

## 原书疑点

1. H.1 节「Section H.6 provides a description … of the Intel IA-64 architecture」：节号照录，链接写 #sec-h-6，待后续部分确认存在该节。
2. 消除伪相关的代码 `for (i=1; i<=100; i=i+1 {` 缺右括号；`A[i] = B[i] + C[i]` 两行缺分号。均照录原书。
3. 「there are cases where the GCD test succeeds but no dependence exists」：按字面照译（「GCD 测试通过、实际却不存在相关」），与第 4 章 4.5 节的处理一致；此处 succeeds 指测试未能排除相关。
4. 正文中「Section 3.2」多处引用（循环展开、归纳变量），照录为纯文本「3.2 节」。
5. 引言称「rather than the 20 we have allotted」，照译「20 页」。

## 新定术语

| 英文 | 译法 |
|---|---|
| loop-carried dependence | 循环携带相关（与 4.5 节一致） |
| induction variable | 归纳变量 |
| recurrence | 递推 |
| dependence distance | 相关距离 |
| affine | 仿射 |
| GCD test | 最大公约数（GCD）测试 |
| exact test | 精确测试 |
| points-to analysis | 指向分析 |
| interprocedural analysis | 过程间分析 |
| back substitution | 回代 |
| copy propagation | 复制传播 |
| false (pseudo) dependence | 假相关（伪相关） |
