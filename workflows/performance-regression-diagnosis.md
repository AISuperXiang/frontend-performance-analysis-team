---
id: "performance-regression-diagnosis"
title: "性能回退诊断"
triggers:
  - "/perf-team diagnose"
  - "性能突然变慢"
  - "版本回退分析"
  - "定位特定慢交互"
commands:
  - "/perf-team diagnose"
members:
  - "performance-lead"
  - "source-performance-analyst"
  - "browser-performance-engineer"
  - "rendering-performance-specialist"
  - "loading-performance-specialist"
  - "field-performance-analyst"
  - "performance-evidence-reviewer"
execution_mode: "hybrid"
quality_gates:
  - "role-activation-gate"
  - "context-gate"
  - "reproducibility-gate"
  - "metric-integrity-gate"
  - "evidence-gate"
  - "attribution-gate"
  - "verification-gate"
  - "delivery-gate"
outputs:
  - "performance-metrics-baseline"
  - "runtime-profile-findings"
  - "static-analysis-findings"
  - "root-cause-map"
  - "performance-analysis-report"
---

# 性能回退诊断

## 适用场景

- /perf-team diagnose
- 性能突然变慢
- 版本回退分析
- 定位特定慢交互

## 角色激活

frontmatter 的 `members` 是候选角色池，不代表所有成员都必须执行。进入阶段表前必须在 `workflow-status.json.rolePlan` 中为每个候选角色记录 `active`、`consulted` 或 `not_applicable`、场景依据和参与阶段。

- 只加载 `active` 与 `consulted` 角色。
- `not_applicable` 角色不生成虚假评审、评分或交接产物。
- 范围扩大、验证失败、跨领域依赖或高风险信号出现时重新评估 `rolePlan`。

## 阶段表

| 阶段 | 负责人 | 动作 | 产出 | 门禁 |
| --- | --- | --- | --- | --- |
| Regression Contract | performance-lead | 确认好版本、坏版本、变化窗口、受影响旅程、用户分群和回退阈值。<br>建立差异假设、角色计划和停止条件。 | performance-brief.md | role-activation-gate, context-gate |
| Controlled Comparison | browser-performance-engineer | 在可比环境下重复测量好坏版本或对照场景。<br>记录差异、方差、trace、waterfall 和关键指标。 | performance-metrics-baseline.md<br>runtime-profile-findings.md | reproducibility-gate, metric-integrity-gate |
| Change And Field Correlation | source-performance-analyst | 将代码、依赖、构建和配置变化映射到运行时差异。<br>结合现场版本分群验证变化时间线与用户覆盖面。 | static-analysis-findings.md | evidence-gate |
| Root Cause Ranking | rendering-performance-specialist | 联合加载专项按直接证据、反证和替代解释排序根因。<br>为每个候选根因定义最小验证实验。 | root-cause-map.md | attribution-gate |
| Regression Review | performance-evidence-reviewer | 复核环境可比性、变化归因和结论等级。<br>列出阻断项、未知项和最小补证动作。 | evidence-review.md | verification-gate |
| Diagnosis Delivery | performance-lead | 交付回退事实、根因排序、影响范围和下一步验证建议。 | performance-analysis-report.md | delivery-gate |

## 完成定义

- 所有阶段产出已形成。
- 工作流门禁已检查。
- 结论带证据、风险、置信度和需决策项。
