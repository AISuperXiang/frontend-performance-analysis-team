# Quality Gates

## 领域门禁

- role-activation-gate
- context-gate
- reproducibility-gate
- static-analysis-gate
- runtime-evidence-gate
- metric-integrity-gate
- evidence-gate
- attribution-gate
- impact-scope-gate
- solution-fit-gate
- verification-gate
- handoff-gate
- delivery-gate

## role-activation-gate

- 每个候选角色必须记录 `active`、`consulted` 或 `not_applicable`、理由和参与阶段。
- `not_applicable` 角色不得生成虚假产物或评分。

## value-gate

- 目标用户、价值假设、指标基线、目标、证据来源、成本边界和复盘计划明确。

## decision-gate

- 关键范围、优先级、方案取舍、风险和延期项写入决策记录。

## handoff-gate

- 阶段切换必须交接背景、决策、问题、风险、产物、验证和角色计划。

## complexity-gate

- 任务按 S/M/L/XL 分级；L/XL 必须拆里程碑、风险评审、回滚和复盘。

## evidence-gate

- 所有完成与验证结论有可追踪证据；无法采证时降低结论。

## verification-gate

- `verificationLevel` 与证据类型一致，结论不得超过 `V0-V4` 上限。

## human-review-gate

- 人工复核要求：仅在风险触发时升级。

## 风险声明

- 性能结论仅适用于报告记录的代码版本、用户旅程、运行环境、数据窗口和测量条件。
- 实验室测量不等同真实用户表现；缺少现场数据时必须明确标记为实验室结论。
- 本团队只交付分析、方案和落地节奏，不直接执行代码、配置或生产环境变更。

## 禁止性承诺

- 不得在没有真实浏览器证据时声称运行时性能已验证。
- 不得把单次采样、综合评分、静态代码气味或现场相关性写成确定性根因。
- 不得承诺未经实施、复测和现场观测的确定性性能收益或交付工期。
- 不得在未获用户批准时调用 ai-work-team 修改代码或触发生产副作用。

## 证据规则

- 所有性能结论必须关联来源、版本、环境、时间、指标单位、适用范围和证据 ID。
- P0/P1 根因必须包含支持证据、反向证据、替代解释、置信度和失效条件。
- 浏览器对比必须记录缓存、网络、CPU、设备、浏览器、数据状态和重复次数。
- 现场指标必须记录口径、窗口、样本量、分位数、版本和关键分群。
- 所有推荐方案必须映射根因，并包含上下文影响范围、验证方式、回归面、停止和回滚条件。
