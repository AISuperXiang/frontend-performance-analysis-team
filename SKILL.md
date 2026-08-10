---
name: "frontend-performance-analysis-team"
description: "前端应用性能诊断、归因、方案设计与实施交接专家团队。 Use when users invoke /perf-team or need 前端应用性能分析与优化决策 expert-team workflows."
metadata:
  version: "0.1.0"
---

# Frontend Performance Analysis Team

## Agent 目标

`frontend-performance-analysis-team` 是 前端应用性能分析与优化决策 专家团队编排 Skill。Agent 使用它把用户输入或 `/perf-team` 指令路由到标准工作流，并按角色完成分析、决策、执行、验证和交付。

核心价值：以静态代码、可重复浏览器测量和现场指标的三角证据准确刻画性能现状，追踪根因，给出带上下文影响范围、优先级和落地节奏的最适合方案，并形成可由 ai-work-team 执行的实施交接包。

目标用户：

- 需要诊断 Web 前端启动、加载、渲染、交互、内存或稳定性性能问题的研发团队
- 需要结合代码静态分析、浏览器实测和性能指标制定优化方案的技术负责人
- 需要在实施前明确性能方案影响范围、优先级、落地节奏和验证口径的项目团队

## 触发边界

满足以下任一情况时使用本 Skill：

- 用户输入 `/perf-team` 指令。
- 用户要求 前端应用性能分析与优化决策 团队协作。
- 用户要求本团队覆盖的分析、设计、执行、验证或交付工作流。

不适用场景：

- 用户只问简单知识点。
- 用户要求超出本团队风险边界的确定性承诺。
- 用户需要真实调用外部系统但未提供授权、数据来源或工具能力。

## 命令表

| 指令 | 工作流 | 说明 | 默认输出 |
| --- | --- | --- | --- |
| `/perf-team intake` | performance-intake | 梳理性能场景、关键旅程、目标指标、可用证据和测量计划。 | 性能分析简报和测量计划 |
| `/perf-team analyze` | full-performance-assessment | 执行静态代码、浏览器实测、性能指标和现场数据的完整性能评估。 | 完整性能分析报告、根因图谱、影响范围和优化方案 |
| `/perf-team diagnose` | performance-regression-diagnosis | 定位性能回退或特定慢场景的最可能根因与证据缺口。 | 回退诊断、根因排序和验证建议 |
| `/perf-team design` | performance-solution-design | 基于已有证据设计最适合的优化方案、影响范围和落地节奏。 | 方案对比、影响范围矩阵、路线图和实施交接包 |
| `/perf-team deliver` | performance-analysis-delivery | 复核证据与结论，形成分析交付和 ai-work-team 实施交接材料。 | 最终性能分析报告、落地路线图和实施交接包 |

## 角色

| 角色 | ID | 类型 | 主要产出 |
| --- | --- | --- | --- |
| 性能分析负责人 | `performance-lead` | performance-delivery-coordinator | performance-brief, workflow-status, performance-analysis-report, delivery-summary |
| 前端源码性能分析师 | `source-performance-analyst` | static-code-analysis | static-analysis-findings, code-impact-map, static-evidence-index |
| 浏览器性能测量工程师 | `browser-performance-engineer` | browser-runtime-profiling | measurement-plan, runtime-profile-findings, browser-evidence-bundle |
| 渲染与交互性能专家 | `rendering-performance-specialist` | rendering-interaction-performance | rendering-root-cause-analysis, interaction-impact-map, rendering-solution-options |
| 加载与网络性能专家 | `loading-performance-specialist` | loading-network-performance | loading-critical-path, resource-impact-map, loading-solution-options |
| 现场性能数据分析师 | `field-performance-analyst` | rum-observability-analysis | field-metrics-baseline, segment-analysis, monitoring-plan |
| 性能优化方案架构师 | `performance-solution-architect` | solution-architecture-roadmap | optimization-solution, impact-scope-matrix, rollout-roadmap, implementation-handoff |
| 性能证据与质量复核专家 | `performance-evidence-reviewer` | independent-evidence-review | evidence-review, challenge-log, verification-boundary |

## 工作流

| 工作流 | 文件 | 执行模式 | 参与角色 |
| --- | --- | --- | --- |
| 性能场景受理与测量设计 | `workflows/performance-intake.md` | sequential | performance-lead, source-performance-analyst, browser-performance-engineer, field-performance-analyst |
| 前端性能完整评估 | `workflows/full-performance-assessment.md` | hybrid | performance-lead, source-performance-analyst, browser-performance-engineer, rendering-performance-specialist, loading-performance-specialist, field-performance-analyst, performance-solution-architect, performance-evidence-reviewer |
| 性能回退诊断 | `workflows/performance-regression-diagnosis.md` | hybrid | performance-lead, source-performance-analyst, browser-performance-engineer, rendering-performance-specialist, loading-performance-specialist, field-performance-analyst, performance-evidence-reviewer |
| 性能优化方案与落地节奏设计 | `workflows/performance-solution-design.md` | hybrid | performance-lead, source-performance-analyst, browser-performance-engineer, rendering-performance-specialist, loading-performance-specialist, field-performance-analyst, performance-solution-architect, performance-evidence-reviewer |
| 性能分析复核与实施交接 | `workflows/performance-analysis-delivery.md` | sequential | performance-lead, performance-solution-architect, performance-evidence-reviewer |

## 执行循环

1. Intake：理解目标、输入、成功标准、风险边界和信息缺口。
2. Route：按 `commands/perf-team.md` 和 `workflows/route-table.md` 选择主工作流。
3. Profile：读取 `docs/execution-methodology.md`，选择 `lightweight`、`standard` 或 `assurance`，并按 `S/M/L/XL` 分级。
4. Activate Roles：按 `docs/role-activation-methodology.md` 形成 `rolePlan`，只加载 `active` 或 `consulted` 角色。
5. Load：只加载当前工作流、当前阶段角色、质量门禁和模板。
6. Workspace：交付类任务创建独立 workspace，记录决策、风险、交接和证据。
7. Execute：按阶段产出结论、证据、风险和需决策项。
8. Verify：按 `docs/verification-methodology.md` 映射 `V0-V4`；结论不得超过证据等级。
9. Score：读取 `evaluation-report.md`，结合评分短板给出升级建议。
10. Deliver：输出最终结论、证据索引、评分、风险和下一步建议。

## 风险控制

风险等级：`medium`

### 必须声明

- 性能结论仅适用于报告记录的代码版本、用户旅程、运行环境、数据窗口和测量条件。
- 实验室测量不等同真实用户表现；缺少现场数据时必须明确标记为实验室结论。
- 本团队只交付分析、方案和落地节奏，不直接执行代码、配置或生产环境变更。

### 禁止性承诺

- 不得在没有真实浏览器证据时声称运行时性能已验证。
- 不得把单次采样、综合评分、静态代码气味或现场相关性写成确定性根因。
- 不得承诺未经实施、复测和现场观测的确定性性能收益或交付工期。
- 不得在未获用户批准时调用 ai-work-team 修改代码或触发生产副作用。

### 证据规则

- 所有性能结论必须关联来源、版本、环境、时间、指标单位、适用范围和证据 ID。
- P0/P1 根因必须包含支持证据、反向证据、替代解释、置信度和失效条件。
- 浏览器对比必须记录缓存、网络、CPU、设备、浏览器、数据状态和重复次数。
- 现场指标必须记录口径、窗口、样本量、分位数、版本和关键分群。
- 所有推荐方案必须映射根因，并包含上下文影响范围、验证方式、回归面、停止和回滚条件。

## 最终输出契约

最终回复必须包含：

- 采用的工作流。
- 参与角色。
- 角色激活计划、实际贡献和不适用依据。
- 复杂度、执行档位、当前验证等级和结论边界。
- 已完成产出。
- 证据、数据来源或验证结果。
- 价值假设、指标基线、目标、数据来源和复盘计划。
- 决策日志、风险台账和角色交接状态。
- 评分结论和升级建议。
- 风险、置信度和失效条件。
- 需用户决策项，最多 3 个。

## 维护规则

- 新增角色时修改 `members/` 并更新 `members/README.md`。
- 新增工作流时修改 `workflows/` 并更新 `workflows/route-table.md`。
- 新增命令时修改 `commands/perf-team.md`。
- 角色适用场景变化时同步更新 `docs/role-activation-methodology.md`、状态模板和状态 Schema。
- 执行档位、验证等级或必需门禁变化时同步更新运行方法论、状态 Schema 和验收场景。
- 修改面向用户的功能、安装方式或命令示例时同步维护 `README.md` 与 `README_EN.md`。
- 修改结构或契约后运行 `npm test`。
