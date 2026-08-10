# Role Handoff

用于在 Frontend Performance Analysis Team 的角色和阶段之间传递可执行上下文。

## 交接规则

- 只在真实发生责任转移、评审或咨询时创建交接，不为 not_applicable 角色伪造记录。
- 交接必须包含目标、已完成工作、输入产物、未决问题、风险、证据和验收条件。
- 接收方必须明确 accepted、needs_changes 或 blocked；沉默不视为接受。
- 范围扩大、验证失败或风险升级时重新评估 rolePlan。

## 交接条目

| 字段 | 填写要求 |
| --- | --- |
| From / To | 记录交出与接收角色 |
| Stage | 记录所属工作流和阶段 |
| Objective | 说明接收方要完成的具体结果 |
| Inputs | 列出文件、决策和证据 ID |
| Open Questions | 仅保留会影响下一阶段的问题 |
| Risks / Blockers | 关联风险 ID 和阻断条件 |
| Acceptance Criteria | 写明接收完成的可验证标准 |
| Acknowledgement | 记录接收状态、责任人和时间 |
