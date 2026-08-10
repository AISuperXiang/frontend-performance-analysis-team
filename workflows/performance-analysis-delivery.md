---
id: "performance-analysis-delivery"
title: "性能分析复核与实施交接"
triggers:
  - "/perf-team deliver"
  - "复核性能报告"
  - "准备性能优化实施交接"
  - "输出最终落地节奏"
commands:
  - "/perf-team deliver"
members:
  - "performance-lead"
  - "performance-solution-architect"
  - "performance-evidence-reviewer"
execution_mode: "sequential"
quality_gates:
  - "evidence-gate"
  - "impact-scope-gate"
  - "verification-gate"
  - "handoff-gate"
  - "delivery-gate"
outputs:
  - "performance-analysis-report"
  - "impact-scope-matrix"
  - "rollout-roadmap"
  - "implementation-handoff"
  - "delivery-summary"
---

# 性能分析复核与实施交接

## 适用场景

- /perf-team deliver
- 复核性能报告
- 准备性能优化实施交接
- 输出最终落地节奏

## 角色激活

frontmatter 的 `members` 是候选角色池，不代表所有成员都必须执行。进入阶段表前必须在 `workflow-status.json.rolePlan` 中为每个候选角色记录 `active`、`consulted` 或 `not_applicable`、场景依据和参与阶段。

- 只加载 `active` 与 `consulted` 角色。
- `not_applicable` 角色不生成虚假评审、评分或交接产物。
- 范围扩大、验证失败、跨领域依赖或高风险信号出现时重新评估 `rolePlan`。

## 阶段表

| 阶段 | 负责人 | 动作 | 产出 | 门禁 |
| --- | --- | --- | --- | --- |
| Evidence Audit | performance-evidence-reviewer | 检查关键结论、数据来源、指标口径、反证、方差和未覆盖范围。<br>确认报告允许声明的验证等级。 | evidence-review.md | evidence-gate, verification-gate |
| Handoff Audit | performance-solution-architect | 检查影响范围、方案优先级、路线图、验收指标和 ai-work-team 输入。<br>确认实施与分析边界、依赖、风险和停止条件。 | impact-scope-matrix.md<br>rollout-roadmap.md<br>implementation-handoff.md | impact-scope-gate, handoff-gate |
| Final Delivery | performance-lead | 输出结论置顶的完整分析报告、推荐方案、落地节奏和剩余风险。<br>明确只有获得用户批准后才由 ai-work-team 进入实施。 | performance-analysis-report.md<br>delivery-summary.md | delivery-gate |

## 完成定义

- 所有阶段产出已形成。
- 工作流门禁已检查。
- 结论带证据、风险、置信度和需决策项。
