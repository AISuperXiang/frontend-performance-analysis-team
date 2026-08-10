# Members

本目录维护 Frontend Performance Analysis Team 的专家团队成员定义。工作流只加载它声明需要的成员文件，避免一次性加载全部角色上下文。

## 成员文件约定

每个成员文件必须包含 YAML frontmatter：`id`、`name`、`role`、`when_to_load`、`primary_outputs`、`quality_gates`。

## 当前成员

| 成员 | 文件 | 角色域 | 主要产出 |
| --- | --- | --- | --- |
| 性能分析负责人 | `performance-lead.md` | performance-delivery-coordinator | performance-brief, workflow-status, performance-analysis-report, delivery-summary |
| 前端源码性能分析师 | `source-performance-analyst.md` | static-code-analysis | static-analysis-findings, code-impact-map, static-evidence-index |
| 浏览器性能测量工程师 | `browser-performance-engineer.md` | browser-runtime-profiling | measurement-plan, runtime-profile-findings, browser-evidence-bundle |
| 渲染与交互性能专家 | `rendering-performance-specialist.md` | rendering-interaction-performance | rendering-root-cause-analysis, interaction-impact-map, rendering-solution-options |
| 加载与网络性能专家 | `loading-performance-specialist.md` | loading-network-performance | loading-critical-path, resource-impact-map, loading-solution-options |
| 现场性能数据分析师 | `field-performance-analyst.md` | rum-observability-analysis | field-metrics-baseline, segment-analysis, monitoring-plan |
| 性能优化方案架构师 | `performance-solution-architect.md` | solution-architecture-roadmap | optimization-solution, impact-scope-matrix, rollout-roadmap, implementation-handoff |
| 性能证据与质量复核专家 | `performance-evidence-reviewer.md` | independent-evidence-review | evidence-review, challenge-log, verification-boundary |
