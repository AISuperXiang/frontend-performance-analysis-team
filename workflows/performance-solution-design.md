---
id: "performance-solution-design"
title: "性能优化方案与落地节奏设计"
triggers:
  - "/perf-team design"
  - "根据性能报告出方案"
  - "比较性能优化路径"
  - "制定性能优化路线图"
commands:
  - "/perf-team design"
members:
  - "performance-lead"
  - "source-performance-analyst"
  - "browser-performance-engineer"
  - "rendering-performance-specialist"
  - "loading-performance-specialist"
  - "field-performance-analyst"
  - "performance-solution-architect"
  - "performance-evidence-reviewer"
execution_mode: "hybrid"
quality_gates:
  - "role-activation-gate"
  - "evidence-gate"
  - "attribution-gate"
  - "impact-scope-gate"
  - "solution-fit-gate"
  - "verification-gate"
  - "handoff-gate"
  - "delivery-gate"
outputs:
  - "root-cause-map"
  - "impact-scope-matrix"
  - "optimization-solution"
  - "rollout-roadmap"
  - "implementation-handoff"
---

# 性能优化方案与落地节奏设计

## 适用场景

- /perf-team design
- 根据性能报告出方案
- 比较性能优化路径
- 制定性能优化路线图

## 角色激活

frontmatter 的 `members` 是候选角色池，不代表所有成员都必须执行。进入阶段表前必须在 `workflow-status.json.rolePlan` 中为每个候选角色记录 `active`、`consulted` 或 `not_applicable`、场景依据和参与阶段。

- 只加载 `active` 与 `consulted` 角色。
- `not_applicable` 角色不生成虚假评审、评分或交接产物。
- 范围扩大、验证失败、跨领域依赖或高风险信号出现时重新评估 `rolePlan`。

## 阶段表

| 阶段 | 负责人 | 动作 | 产出 | 门禁 |
| --- | --- | --- | --- | --- |
| Evidence Lock | performance-lead | 确认可用于方案决策的根因、证据、约束、目标预算和未知项。<br>激活与当前瓶颈相关的专项角色。 | root-cause-map.md | role-activation-gate, evidence-gate, attribution-gate |
| Option Design | performance-solution-architect | 形成保持现状、局部优化和结构性优化候选。<br>计算预期影响、置信度、成本、风险、依赖和可逆性。 | optimization-solution.md | solution-fit-gate |
| Impact Mapping | source-performance-analyst | 联合浏览器、渲染、加载和现场角色补齐代码、运行时、用户、指标和回归影响。<br>标记共享模块、跨团队依赖、发布和监控变化。 | impact-scope-matrix.md | impact-scope-gate |
| Roadmap And Handoff | performance-solution-architect | 按验证优先、quick wins、结构性优化、灰度和复盘拆分节奏。<br>形成 ai-work-team 的任务边界、验收指标、回归范围、风险和停止条件。 | rollout-roadmap.md<br>implementation-handoff.md | handoff-gate |
| Solution Review | performance-evidence-reviewer | 检查方案是否越过证据、收益是否可验证、影响范围是否完整。<br>确认验证等级和未解决决策项。 | evidence-review.md | verification-gate |
| Solution Delivery | performance-lead | 交付推荐方案、未选方案理由、影响范围、路线图和实施交接入口。 | delivery-summary.md | delivery-gate |

## 完成定义

- 所有阶段产出已形成。
- 工作流门禁已检查。
- 结论带证据、风险、置信度和需决策项。
