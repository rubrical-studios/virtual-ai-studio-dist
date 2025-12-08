# QA Automation Test Plan: [Suite Name]
**Version:** 1.0 | **Date:** YYYY-MM-DD | **Author:** [Name] | **Status:** Draft

## 1. Overview
**Purpose:** [Goals] | **AUT:** [App, Repo, Version, PRD, URL]
**Scope In/Out:** [Features]

## 2. Requirements Traceability
| PRD REQ-ID | Requirement | Test Coverage | Priority |
|------------|-------------|---------------|----------|
| REQ-001 | | [spec files] | High |

## 3. Architecture
**Tools:** Automation: ___ | Language: ___ | Runner: ___ | Reporting: ___
**Patterns:** [ ] Page Object [ ] Component Objects [ ] Screenplay
**Data Strategy:** [ ] Fixtures [ ] Factories [ ] API seeding

## 4. Test Suites
### Smoke (<5 min, every deploy)
| ID | Test Case | Priority |
|----|-----------|----------|
| TC-SMOKE-001 | | P0 |

### Regression (<60 min, PR merge/nightly)
| ID | Test Case | Priority | REQ |
|----|-----------|----------|-----|
| TC-REG-001 | | P1 | REQ-001 |

## 5. Environment
**Environments:** Dev, Staging, Prod (smoke only)
**Browser Matrix:** Chrome, Firefox, Safari, Edge (latest)
**Cloud:** [ ] BrowserStack [ ] Sauce Labs [ ] None

## 6. CI/CD
**Triggers:** Smoke: deploy | Regression: merge | Full: nightly
**Parallelization:** [ ] Sharding [ ] Browser matrix [ ] Workers

## 7. Execution
**Entry:** [ ] Environment up [ ] App deployed [ ] Data ready
**Exit:** [ ] Smoke 100% [ ] Regression >X% [ ] No P0/P1 bugs
**Failure Handling:** Smoke fail → block deploy | Regression fail → create issue | Flaky → quarantine

## 8. Metrics
| Metric | Target |
|--------|--------|
| Smoke Pass Rate | 100% |
| Regression Pass Rate | >95% |
| Smoke Time | <5 min |
| Regression Time | <60 min |
| Flaky Rate | <2% |

## 9. Maintenance
**Selector Strategy:** Primary: `data-testid` | Fallback: ID > Name > ARIA > CSS
**Flaky Management:** Identify → Quarantine → Fix → Return

## 10. Approval
| Role | Name | Approved |
|------|------|----------|
| QA Lead | | [ ] |
| Dev Lead | | [ ] |
