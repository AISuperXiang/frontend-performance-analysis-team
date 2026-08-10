# Frontend Performance Analysis Team

**语言：简体中文 | [English](./README_EN.md)**

`frontend-performance-analysis-team` 是一个面向 Agent / IDE 的 前端应用性能分析与优化决策 专家团队 Skill。

核心价值：以静态代码、可重复浏览器测量和现场指标的三角证据准确刻画性能现状，追踪根因，给出带上下文影响范围、优先级和落地节奏的最适合方案，并形成可由 ai-work-team 执行的实施交接包。

## 适合谁使用

- 需要诊断 Web 前端启动、加载、渲染、交互、内存或稳定性性能问题的研发团队
- 需要结合代码静态分析、浏览器实测和性能指标制定优化方案的技术负责人
- 需要在实施前明确性能方案影响范围、优先级、落地节奏和验证口径的项目团队

## 常用入口

```text
/perf-team intake <输入>
/perf-team analyze <输入>
/perf-team diagnose <输入>
/perf-team design <输入>
/perf-team deliver <输入>
```

完整命令说明见 [commands/perf-team.md](commands/perf-team.md)。

## 目录结构

```text
frontend-performance-analysis-team/
├── SKILL.md
├── README.md
├── README_EN.md
├── package.json
├── skill-runtime.json
├── evaluation-report.md
├── members/
├── workflows/
├── commands/
├── docs/
├── schemas/
├── assets/templates/
├── external-skills/
├── external-cli/
├── workspace/
└── scripts/
```

## 风险边界

- 性能结论仅适用于报告记录的代码版本、用户旅程、运行环境、数据窗口和测量条件。
- 实验室测量不等同真实用户表现；缺少现场数据时必须明确标记为实验室结论。
- 本团队只交付分析、方案和落地节奏，不直接执行代码、配置或生产环境变更。

禁止性承诺：

- 不得在没有真实浏览器证据时声称运行时性能已验证。
- 不得把单次采样、综合评分、静态代码气味或现场相关性写成确定性根因。
- 不得承诺未经实施、复测和现场观测的确定性性能收益或交付工期。
- 不得在未获用户批准时调用 ai-work-team 修改代码或触发生产副作用。

## 团队评分

评分报告见 [evaluation-report.md](evaluation-report.md)。报告包含总分、等级、维度得分、短板、升级建议和能力补齐方向。

## 验证

```bash
npm test
```

## 文档职责

- `README.md` 是默认中文用户文档，说明这个 Skill 是什么、如何使用和如何维护。
- `README_EN.md` 是对应的英文用户文档。
- `SKILL.md` 面向 Agent，定义触发、路由、加载顺序、执行协议和输出契约。
