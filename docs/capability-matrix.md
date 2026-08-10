# Capability Matrix

| 能力 | 负责人 | 输入 | 输出 | 门禁 | 成熟度 |
| --- | --- | --- | --- | --- | --- |
| 性能场景建模与测量设计 | performance-lead | 性能现象<br>项目或 URL<br>关键用户旅程<br>业务与技术约束 | performance-brief<br>measurement-plan<br>rolePlan | role-activation-gate, context-gate, reproducibility-gate | usable |
| 前端源码与构建性能静态分析 | source-performance-analyst | 源码<br>构建配置<br>依赖与产物<br>关键旅程 | static-analysis-findings<br>code-impact-map<br>runtime-hypotheses | static-analysis-gate, attribution-gate | usable |
| 真实浏览器受控测量与运行时剖析 | browser-performance-engineer | URL 或可运行应用<br>复现步骤<br>环境矩阵<br>访问授权 | runtime-profile-findings<br>browser-evidence-bundle<br>lab-metrics | reproducibility-gate, runtime-evidence-gate, metric-integrity-gate | usable |
| 渲染、交互与 Hydration 归因 | rendering-performance-specialist | trace<br>Event Timing<br>组件与状态源码<br>渲染指标 | rendering-root-cause-analysis<br>interaction-impact-map | runtime-evidence-gate, attribution-gate | usable |
| 加载、资源、缓存与网络归因 | loading-performance-specialist | waterfall<br>Resource Timing<br>构建产物<br>响应头与部署约束 | loading-critical-path<br>resource-impact-map | static-analysis-gate, runtime-evidence-gate, attribution-gate | usable |
| 现场指标、分位数与用户分群分析 | field-performance-analyst | RUM 或 APM<br>指标口径<br>版本与分群<br>业务护栏 | field-metrics-baseline<br>segment-analysis<br>monitoring-plan | metric-integrity-gate, evidence-gate, verification-gate | usable |
| 优化方案、影响范围与落地路线图 | performance-solution-architect | 根因图谱<br>证据索引<br>项目约束<br>性能目标 | optimization-solution<br>impact-scope-matrix<br>rollout-roadmap<br>implementation-handoff | impact-scope-gate, solution-fit-gate, handoff-gate | usable |
| 独立证据复核与结论等级控制 | performance-evidence-reviewer | 性能报告<br>原始证据<br>根因图谱<br>方案与影响范围 | evidence-review<br>verification-boundary<br>delivery-gate-result | evidence-gate, verification-gate, delivery-gate | usable |
