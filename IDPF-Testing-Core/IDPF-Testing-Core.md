# IDPF-Testing-Core Framework
**Revision:** 1
**Framework-Debug:** True

## Overview
Foundation for all testing frameworks. Establishes common architecture, terminology, workflows, and integration patterns.

**Principle:** "Test automation is software development - same tools, skills, practices."

## Terminology
| Term | Definition |
|------|------------|
| Test Repository | Separate Git repo for test code |
| Test Plan | Lightweight doc defining test scope, references app PRD |
| AUT | Application Under Test |
| Coverage Mapping | Traceability from tests to requirements |

## Architecture
```
IDPF-Testing-Core
├── IDPF-QA-Automation (Selenium, Playwright, Cypress)
├── IDPF-Performance (k6, JMeter, Gatling)
├── IDPF-Security (OWASP ZAP, Burp Suite)
├── IDPF-Accessibility (axe, Lighthouse, Pa11y)
├── IDPF-Chaos (Chaos Monkey, Gremlin)
└── IDPF-Contract-Testing (Pact)
```

## Repository Strategy
**Embedded (uses IDPF-Structured/Agile):** TDD, ATDD, BDD - in app repo
**Separate (uses IDPF-Testing):** QA Automation, Performance, Security, Chaos, Contract Testing
**Flexible:** Accessibility (embedded CI or separate audit)

## Development Methodology
Test repos use IDPF-Structured or IDPF-Agile:
| Factor | Structured | Agile |
|--------|------------|-------|
| Scope | Fixed test cases | Evolving coverage |
| Team | Solo/small | Larger with sprints |
| App maturity | Stable, regression | Active development |

TDD applies to: utilities, page objects, API clients, data generators, framework infrastructure

## Workflow Phases
PLAN → DESIGN → DEVELOP → EXECUTE → REPORT

| Phase | Activities |
|-------|------------|
| PLAN | Create Test Plan, define scope, coverage mapping |
| DESIGN | Architecture, tools, patterns |
| DEVELOP | TDD test code, utilities, test data |
| EXECUTE | Run tests (manual, CI/CD, scheduled) |
| REPORT | Analyze results, track metrics |

## Test Plan Document
Replaces PRD for test repos. Lightweight, references app PRD.

**Must include:** App repo link, PRD link, REQ-ID coverage, app version

**Location:** `<test-repo>/PRD/TestPlans/`

## Directory Structure
```
<test-repo>/
├── PRD/TestPlans/
├── src/tests/, pages/, utils/, config/
├── reports/
├── .github/workflows/
└── README.md
```

## GitHub Project Labels
| Label | Description |
|-------|-------------|
| qa-automation | QA automation |
| performance | Performance tests |
| security | Security tests |
| accessibility | Accessibility tests |
| chaos | Chaos experiments |
| contract | Contract tests |
| test-plan | Planning/documentation |
| implementation | Test code development |

## Session Commands
**Planning:** Test-Plan-Start, Test-Plan-Review, Coverage-Check
**Development:** Test-Dev-Start, Run-Tests, Generate-Report
**Standard:** All IDPF-Structured/Agile commands apply

## Integration
- Extends IDPF-Structured or IDPF-Agile
- References application PRD
- Uses ATDD/BDD specs for test design
- Outputs test results, coverage, metrics

---
**End of Framework**
