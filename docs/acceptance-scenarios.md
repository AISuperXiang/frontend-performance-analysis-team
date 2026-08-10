# Acceptance Scenarios

## spa-startup-and-interaction-assessment

### 输入

用户提供一个 React 或 Vue SPA 项目路径、可访问 URL 和首页到核心操作的旅程，要求分析首屏慢和交互卡顿并给出方案。

### 期望产出

- performance-metrics-baseline.md
- static-analysis-findings.md
- runtime-profile-findings.md
- root-cause-map.md
- impact-scope-matrix.md
- optimization-solution.md
- rollout-roadmap.md
- implementation-handoff.md
- performance-analysis-report.md

### 必过门禁

- context-gate
- reproducibility-gate
- static-analysis-gate
- runtime-evidence-gate
- metric-integrity-gate
- attribution-gate
- impact-scope-gate
- solution-fit-gate
- verification-gate
- handoff-gate
- delivery-gate

### 执行期望

- 预期工作流：full-performance-assessment
- 执行档位：standard
- 最低验证等级：V3
- active：performance-lead, source-performance-analyst, browser-performance-engineer, rendering-performance-specialist, loading-performance-specialist, performance-solution-architect, performance-evidence-reviewer
- consulted：field-performance-analyst
- not applicable：无

### 失败样例

- 只给 Lighthouse 分数和通用最佳实践，没有 trace、代码位置和根因映射。
- 没有记录浏览器、网络、CPU、缓存和重复次数就比较指标。
- 方案没有说明共享组件、路由、用户群、回归和发布影响。
- 分析团队直接修改了业务代码。

## ssr-hydration-regression-diagnosis

### 输入

用户说明某次发布后 SSR 页面 LCP 与首次交互明显回退，提供好坏版本源码、目标 URL 和部分 RUM 版本分群。

### 期望产出

- performance-metrics-baseline.md
- static-analysis-findings.md
- runtime-profile-findings.md
- root-cause-map.md
- performance-analysis-report.md

### 必过门禁

- context-gate
- reproducibility-gate
- metric-integrity-gate
- evidence-gate
- attribution-gate
- verification-gate
- delivery-gate

### 执行期望

- 预期工作流：performance-regression-diagnosis
- 执行档位：assurance
- 最低验证等级：V3
- active：performance-lead, source-performance-analyst, browser-performance-engineer, rendering-performance-specialist, loading-performance-specialist, field-performance-analyst, performance-evidence-reviewer
- consulted：无
- not applicable：performance-solution-architect

### 失败样例

- 好坏版本的缓存、网络或数据条件不可比却直接归因代码提交。
- 把 RUM 时间相关性直接写成 Hydration 因果结论。
- 只检查客户端 bundle，忽略 TTFB、服务端数据和重复请求。
- 没有替代解释和最小验证实验。

## mobile-lcp-loading-solution

### 输入

用户已有移动端落地页的 LCP、waterfall 和静态分析结果，要求设计最适合的加载优化方案、影响范围和落地节奏。

### 期望产出

- root-cause-map.md
- impact-scope-matrix.md
- optimization-solution.md
- rollout-roadmap.md
- implementation-handoff.md

### 必过门禁

- evidence-gate
- attribution-gate
- impact-scope-gate
- solution-fit-gate
- verification-gate
- handoff-gate
- delivery-gate

### 执行期望

- 预期工作流：performance-solution-design
- 执行档位：standard
- 最低验证等级：V2
- active：performance-lead, source-performance-analyst, loading-performance-specialist, performance-solution-architect, performance-evidence-reviewer
- consulted：browser-performance-engineer, field-performance-analyst
- not applicable：rendering-performance-specialist

### 失败样例

- 默认建议 preload 全部资源，没有关键请求链证据。
- 只看图片体积，没有分解 TTFB、发现、下载和渲染延迟。
- 缓存方案没有版本失效、回滚和 CDN 影响。
- 实施交接没有验收指标和回归范围。

## browser-access-unavailable-degradation

### 输入

用户提供项目源码和一个需要生产认证但未授权访问的 URL，仍要求团队给出性能分析。

### 期望产出

- performance-brief.md
- measurement-plan.md
- static-analysis-findings.md
- performance-analysis-report.md

### 必过门禁

- role-activation-gate
- context-gate
- static-analysis-gate
- evidence-gate
- verification-gate
- delivery-gate

### 执行期望

- 预期工作流：full-performance-assessment
- 执行档位：assurance
- 最低验证等级：V1
- active：performance-lead, source-performance-analyst, performance-evidence-reviewer
- consulted：browser-performance-engineer, performance-solution-architect
- not applicable：rendering-performance-specialist, loading-performance-specialist, field-performance-analyst

### 失败样例

- 未获授权却尝试登录生产系统。
- 伪造浏览器指标或声称已完成运行时验证。
- 把静态风险直接写成真实性能根因。
- 没有列出恢复 V3 所需的最小访问和测量条件。

## analysis-to-ai-work-team-handoff

### 输入

用户已有完整性能报告和推荐方案，要求复核后形成可交给 ai-work-team 的实施上下文，但暂不执行代码修改。

### 期望产出

- performance-analysis-report.md
- impact-scope-matrix.md
- rollout-roadmap.md
- implementation-handoff.md

### 必过门禁

- evidence-gate
- impact-scope-gate
- verification-gate
- handoff-gate
- delivery-gate

### 执行期望

- 预期工作流：performance-analysis-delivery
- 执行档位：standard
- 最低验证等级：V2
- active：performance-lead, performance-solution-architect, performance-evidence-reviewer
- consulted：无
- not applicable：source-performance-analyst, browser-performance-engineer, rendering-performance-specialist, loading-performance-specialist, field-performance-analyst

### 失败样例

- 没有用户批准就自动调用实现团队修改代码。
- 交接包没有代码版本、根因证据、验收指标和回归面。
- 把预期收益写成已实现收益。
- 没有要求实施团队重新确认当前代码状态。
