# Workspace

本目录用于保存 Frontend Performance Analysis Team 的过程产物、证据、决策和交付摘要。

代码或真实业务变更应发生在用户指定项目中；workspace 只保存过程材料。

建议结构：

```text
workspace/
└── YYYYMMDD-short-task-slug/
    ├── README.md
    ├── workflow-status.json
    ├── decision-log.md
    ├── risk-register.md
    ├── role-handoff.md
    ├── delivery-summary.md
    └── evidence/
        └── README.md
```

- `workflow-status.json` 必须记录复杂度、执行档位、当前/目标验证等级、`rolePlan`、阻塞和未覆盖风险。
- 每次阶段切换更新 `role-handoff.md`；关键取舍写入 `decision-log.md`。
- `evidence/` 只保存命令、日志、数据来源、截图说明或人工验收记录，不保存凭据。
