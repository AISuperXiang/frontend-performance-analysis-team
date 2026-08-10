# 工作流路由表

按优先级从上到下匹配。若多个规则命中，选择更具体的工作流；若仍冲突，由交付经理或主协调角色说明原因并选择主工作流。

| 优先级 | 触发输入 | 工作流 | 文件 | 默认命令 |
| --- | --- | --- | --- | --- |
| P0 | /perf-team intake、梳理性能问题、制定性能测量计划、评估现有输入是否足够 | 性能场景受理与测量设计 | `workflows/performance-intake.md` | /perf-team intake |
| P1 | /perf-team analyze、完整性能分析、前端性能体检、结合代码和浏览器实测给优化方案 | 前端性能完整评估 | `workflows/full-performance-assessment.md` | /perf-team analyze |
| P1 | /perf-team diagnose、性能突然变慢、版本回退分析、定位特定慢交互 | 性能回退诊断 | `workflows/performance-regression-diagnosis.md` | /perf-team diagnose |
| P1 | /perf-team design、根据性能报告出方案、比较性能优化路径、制定性能优化路线图 | 性能优化方案与落地节奏设计 | `workflows/performance-solution-design.md` | /perf-team design |
| P1 | /perf-team deliver、复核性能报告、准备性能优化实施交接、输出最终落地节奏 | 性能分析复核与实施交接 | `workflows/performance-analysis-delivery.md` | /perf-team deliver |

## 路由规则

1. 明确有 `/perf-team` 命令时，优先按 `commands/perf-team.md` 的命令映射。
2. 没有命令时，按用户意图和关键词匹配本表。
3. 工作流执行前必须读取 `workflows/execution-protocol.md`。
4. 无法路由时，给出最多 3 个候选工作流并询问用户。
