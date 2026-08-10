---
id: "perf-team"
title: "/perf-team 快捷指令"
triggers:
  - "/perf-team"
members:
  - "performance-lead"
execution_mode: "sequential"
---

# /perf-team 快捷指令

## 命令表

| 指令 | 工作流 | 文件 | 必需输入 | 默认输出 |
| --- | --- | --- | --- | --- |
| `/perf-team intake <输入>` | performance-intake | `workflows/performance-intake.md` | 项目路径、URL、性能现象或目标中的至少一项 | 性能分析简报和测量计划 |
| `/perf-team analyze <输入>` | full-performance-assessment | `workflows/full-performance-assessment.md` | 项目路径、目标 URL、关键用户旅程及可用运行条件 | 完整性能分析报告、根因图谱、影响范围和优化方案 |
| `/perf-team diagnose <输入>` | performance-regression-diagnosis | `workflows/performance-regression-diagnosis.md` | 回退现象、基线与当前版本、复现路径或指标变化 | 回退诊断、根因排序和验证建议 |
| `/perf-team design <输入>` | performance-solution-design | `workflows/performance-solution-design.md` | 性能发现、约束、目标预算和可接受变更边界 | 方案对比、影响范围矩阵、路线图和实施交接包 |
| `/perf-team deliver <输入>` | performance-analysis-delivery | `workflows/performance-analysis-delivery.md` | 分析工作区或已有性能报告 | 最终性能分析报告、落地路线图和实施交接包 |

## 自然语言触发

用户要求 前端应用性能分析与优化决策 团队协作、分析、执行、验证或交付时，可映射到 `/perf-team` 指令。

## 执行要求

1. 解析指令后读取目标工作流。
2. 读取 `workflows/execution-protocol.md`。
3. 读取执行、角色激活和验证方法论，建立状态板与 `rolePlan`。
4. 只加载 `active` 或 `consulted` 的成员文件。
5. 按阶段执行并检查价值、决策、交接、复杂度、证据、验证和风险门禁。

## 失败处理

- 指令缺少输入：要求用户补充目标、上下文或数据来源。
- 指令未知：展示命令表并推荐最近似命令。
- 输入同时匹配多个工作流：优先选择命令指定工作流。
- 高风险领域缺少证据或风险边界：阻断交付，不输出确定性结论。
