# Risk Register

用于持续维护 Frontend Performance Analysis Team 的风险、触发信号和处置责任。

## 记录规则

- 每项风险必须说明概率、影响、严重度、证据和责任人。
- 分开记录已缓解风险、未覆盖风险和已接受风险。
- P0/P1、高风险结论、敏感数据、权限或外部副作用必须升级人工复核。
- 风险关闭必须附验证证据；没有证据只能标记为已缓解，不能标记为已关闭。

## 风险条目

| 字段 | 填写要求 |
| --- | --- |
| Risk ID | 使用可追踪的稳定标识 |
| Description | 描述风险事件、原因和受影响对象 |
| Probability / Impact | 分别给出等级及判断依据 |
| Trigger | 写明可观察的预警信号 |
| Mitigation | 记录预防、降级、回滚或转人工方案 |
| Owner | 指定唯一责任角色 |
| Evidence | 引用验证记录或数据来源 |
| Status | 使用 open、mitigated、accepted、closed |
