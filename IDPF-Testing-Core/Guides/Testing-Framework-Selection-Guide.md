# Testing Framework Selection Guide

## Decision 1: Embedded vs Separate Repository
**Embedded (no separate repo):** TDD, ATDD, BDD - same release cycle as app
**Separate repo:** UI/E2E automation, Performance, Security, Chaos, Contract Testing - different cycle, specialized tools

## Decision 2: Which Testing Framework?
| Testing Type | Framework | Repo |
|--------------|-----------|------|
| Web/Mobile UI | IDPF-QA-Automation | Separate |
| Load/Stress | IDPF-Performance | Separate |
| Security Scans | IDPF-Security | Separate |
| WCAG/a11y | IDPF-Accessibility | Flexible |
| Resilience | IDPF-Chaos | Separate |
| API Contracts | IDPF-Contract-Testing | Separate |

## Decision 3: IDPF-Structured vs IDPF-Agile
**Structured:** Fixed scope, solo/small team, stable app, smaller suite, milestone-based
**Agile:** Evolving scope, larger team, active development, large/growing suite, sprint-based

## Decision Tree
```
TDD/ATDD/BDD for app dev?
├─ YES → EMBEDDED (use app's IDPF-Structured/Agile)
└─ NO (separate testing)
    ├─ Select IDPF-Testing-* framework by type
    └─ Fixed scope → Structured | Evolving → Agile
```

## Examples
| Scenario | Framework | Methodology |
|----------|-----------|-------------|
| E-commerce regression suite | QA-Automation | Structured |
| Microservices performance | Performance | Agile |
| WCAG compliance audit | Accessibility | Structured |
| HIPAA security testing | Security | Structured |
| Microservices contracts | Contract-Testing | Agile |

## Checklist
- [ ] Embedded vs separate decided
- [ ] Testing framework selected
- [ ] Structured vs Agile chosen
- [ ] Repo created, GitHub Project setup
- [ ] Test Plan created, PRD traceability established
