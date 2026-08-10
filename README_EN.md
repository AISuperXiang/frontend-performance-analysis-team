# Frontend Performance Analysis Team

**Language: [简体中文](./README.md) | English**

> An expert team for frontend application performance diagnosis, causal attribution, solution design, and implementation handoff.

`frontend-performance-analysis-team` is an expert-team Skill for Agent / IDE environments in frontend application performance analysis and optimization decisions.

Primary value: Triangulate static code evidence, reproducible browser measurements, and field metrics to establish the current performance state, trace root causes, recommend the best-fit solution with explicit blast radius and rollout priorities, and produce an implementation handoff package for ai-work-team.

## Who Should Use It

- Engineering teams diagnosing frontend startup, loading, rendering, interaction, memory, or stability performance issues.
- Technical leads who need to combine static code analysis, real browser measurements, and performance metrics into an optimization strategy.
- Project teams that need explicit impact scope, priorities, rollout phases, and verification criteria before implementation.

## Common Commands

```text
/perf-team intake <input>
/perf-team analyze <input>
/perf-team diagnose <input>
/perf-team design <input>
/perf-team deliver <input>
```

See [commands/perf-team.md](commands/perf-team.md) for the complete command reference.

## Project Structure

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

## Risk Boundaries

- Performance conclusions apply only to the code version, user journey, runtime environment, data window, and measurement conditions recorded in the report.
- Laboratory measurements are not equivalent to real-user performance; results must be labeled as lab-only when field data is unavailable.
- This team delivers analysis, solutions, and rollout plans only. It does not directly change code, configuration, or production environments.

Blocked claims:

- Do not claim runtime performance has been verified without real browser evidence.
- Do not present a single sample, aggregate score, static code smell, or field correlation as a deterministic root cause.
- Do not promise deterministic performance gains or delivery timelines before implementation, remeasurement, and field observation.
- Do not invoke ai-work-team to change code or trigger production side effects without explicit user approval.

## Team Evaluation

See [evaluation-report.md](evaluation-report.md) for the total score, grade, dimension evidence, gaps, and capability recommendations.

## Validation

```bash
npm test
```

## Document Responsibilities

- `README.md` is the default Simplified Chinese user documentation.
- `README_EN.md` is the corresponding English user documentation.
- `SKILL.md` is the Agent entrypoint for triggers, routing, loading order, execution, and output contracts.
