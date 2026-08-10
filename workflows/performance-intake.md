---
id: "performance-intake"
title: "性能场景受理与测量设计"
triggers:
  - "/perf-team intake"
  - "梳理性能问题"
  - "制定性能测量计划"
  - "评估现有输入是否足够"
commands:
  - "/perf-team intake"
members:
  - "performance-lead"
  - "source-performance-analyst"
  - "browser-performance-engineer"
  - "field-performance-analyst"
execution_mode: "sequential"
quality_gates:
  - "role-activation-gate"
  - "context-gate"
  - "reproducibility-gate"
  - "metric-integrity-gate"
outputs:
  - "performance-brief"
  - "measurement-plan"
  - "workflow-status"
---

# 性能场景受理与测量设计

## 适用场景

- /perf-team intake
- 梳理性能问题
- 制定性能测量计划
- 评估现有输入是否足够

## 角色激活

frontmatter 的 `members` 是候选角色池，不代表所有成员都必须执行。进入阶段表前必须在 `workflow-status.json.rolePlan` 中为每个候选角色记录 `active`、`consulted` 或 `not_applicable`、场景依据和参与阶段。

- 只加载 `active` 与 `consulted` 角色。
- `not_applicable` 角色不生成虚假评审、评分或交接产物。
- 范围扩大、验证失败、跨领域依赖或高风险信号出现时重新评估 `rolePlan`。

## 阶段表

| 阶段 | 负责人 | 动作 | 产出 | 门禁 |
| --- | --- | --- | --- | --- |
| Scene Intake | performance-lead | 定义关键用户旅程、性能现象、受影响用户、比较基线和成功指标。<br>盘点项目、URL、运行环境、认证、现场数据和时间约束。<br>形成角色激活计划和证据缺口。 | performance-brief.md<br>workflow-status.json | role-activation-gate, context-gate |
| Measurement Design | browser-performance-engineer | 定义实验室环境、关键旅程、冷暖缓存、重复采样和原始证据要求。<br>定义指标、单位、统计口径、分群、预算和不可用时的降级路径。 | measurement-plan.md | reproducibility-gate, metric-integrity-gate |

## 完成定义

- 所有阶段产出已形成。
- 工作流门禁已检查。
- 结论带证据、风险、置信度和需决策项。
