# Evidence Index

用于索引 Frontend Performance Analysis Team 的事实来源、验证命令和人工验收记录。

## 证据规则

- 区分用户输入、外部来源、工具输出、推断和人工确认。
- 记录来源、采集时间、适用范围、可信度和失效时间。
- 命令证据保留命令、关键输出、退出码和执行环境；不得写入凭据。
- 结论只能引用足以支持其验证等级的证据，缺口必须显式列出。

## 证据条目

| 字段 | 填写要求 |
| --- | --- |
| Evidence ID | 使用可被决策、风险和交付引用的标识 |
| Type | 标记 input、source、command、artifact 或 human-review |
| Source | 记录文件、URL、工具或责任人 |
| Collected At | 记录采集时间和时区 |
| Claim Supported | 说明该证据支持或反驳的结论 |
| Verification Level | 标记当前可支持的 V0-V4 等级 |
| Limitations | 记录时效、偏差、缺失和不适用范围 |
