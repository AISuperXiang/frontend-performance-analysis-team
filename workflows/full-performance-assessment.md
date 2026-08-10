---
id: "full-performance-assessment"
title: "前端性能完整评估"
triggers:
  - "/perf-team analyze"
  - "完整性能分析"
  - "前端性能体检"
  - "结合代码和浏览器实测给优化方案"
commands:
  - "/perf-team analyze"
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
  - "context-gate"
  - "reproducibility-gate"
  - "static-analysis-gate"
  - "runtime-evidence-gate"
  - "metric-integrity-gate"
  - "evidence-gate"
  - "attribution-gate"
  - "impact-scope-gate"
  - "solution-fit-gate"
  - "verification-gate"
  - "handoff-gate"
  - "delivery-gate"
outputs:
  - "performance-metrics-baseline"
  - "static-analysis-findings"
  - "runtime-profile-findings"
  - "root-cause-map"
  - "impact-scope-matrix"
  - "optimization-solution"
  - "rollout-roadmap"
  - "implementation-handoff"
  - "performance-analysis-report"
---

# 前端性能完整评估

## 适用场景

- /perf-team analyze
- 完整性能分析
- 前端性能体检
- 结合代码和浏览器实测给优化方案

## 角色激活

frontmatter 的 `members` 是候选角色池，不代表所有成员都必须执行。进入阶段表前必须在 `workflow-status.json.rolePlan` 中为每个候选角色记录 `active`、`consulted` 或 `not_applicable`、场景依据和参与阶段。

- 只加载 `active` 与 `consulted` 角色。
- `not_applicable` 角色不生成虚假评审、评分或交接产物。
- 范围扩大、验证失败、跨领域依赖或高风险信号出现时重新评估 `rolePlan`。

## 阶段表

| 阶段 | 负责人 | 动作 | 产出 | 门禁 |
| --- | --- | --- | --- | --- |
| Scope And Baseline | performance-lead | 冻结分析版本、旅程、环境、比较基线、目标指标和角色计划。<br>建立证据索引、风险台账和结论等级边界。 | performance-brief.md<br>performance-metrics-baseline.md | role-activation-gate, context-gate |
| Static Analysis | source-performance-analyst | 分析入口、路由、构建、bundle、依赖、数据和渲染链路。<br>将静态风险映射到关键旅程、指标假设和代码影响范围。 | static-analysis-findings.md | static-analysis-gate |
| Browser Measurement | browser-performance-engineer | 按受控协议执行浏览器访问和重复采样。<br>采集可用 trace、waterfall、timing、coverage、Long Tasks/LoAF 和截图证据。 | runtime-profile-findings.md<br>performance-metrics-baseline.md | reproducibility-gate, runtime-evidence-gate |
| Specialist Attribution | rendering-performance-specialist | 分析主线程、交互、渲染、组件和 Hydration 证据。<br>与加载专项并行核对关键请求链、资源优先级、缓存和第三方影响。 | root-cause-map.md | attribution-gate |
| Field Validation | field-performance-analyst | 核验现场指标口径、分位数、样本和版本分群。<br>验证实验室发现的真实用户覆盖面，或记录现场数据不可用边界。 | performance-metrics-baseline.md | metric-integrity-gate, evidence-gate |
| Solution And Scope | performance-solution-architect | 比较候选方案并按价值、置信度、成本、风险、依赖和可逆性排序。<br>建立代码、运行时、用户、指标、依赖、测试、发布和监控影响范围。<br>制定验证优先、quick wins、结构性优化、灰度与复盘节奏。 | impact-scope-matrix.md<br>optimization-solution.md<br>rollout-roadmap.md<br>implementation-handoff.md | impact-scope-gate, solution-fit-gate, handoff-gate |
| Independent Review | performance-evidence-reviewer | 挑战测量、指标、归因、收益预测、替代解释和影响范围。<br>确定当前验证等级、阻断项和未覆盖风险。 | evidence-review.md | verification-gate |
| Analysis Delivery | performance-lead | 汇总结论、证据、优先级、影响范围、路线图和失效条件。<br>确认未执行代码修改，并记录 ai-work-team 后续交接入口。 | performance-analysis-report.md<br>delivery-summary.md | delivery-gate |

## 完成定义

- 所有阶段产出已形成。
- 工作流门禁已检查。
- 结论带证据、风险、置信度和需决策项。
