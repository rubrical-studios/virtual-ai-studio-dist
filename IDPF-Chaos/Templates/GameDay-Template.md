# GameDay: [Theme/Name]
**Date:** YYYY-MM-DD | **Duration:** [X hours] | **Environment:** [Staging/Production] | **Status:** Planning

## 1. Overview
**Purpose:** [Goals] | **Theme:** [Database Resilience/Network Failures/etc.]

### Objectives
| # | Objective | Success Criteria |
|---|-----------|------------------|
| 1 | Validate resilience of [X] | [Measurable] |
| 2 | Test response to [Y] | [Measurable] |
| 3 | Verify monitoring | [Measurable] |

## 2. Scope
### In Scope
| System | Owner | Environment | Risk |
|--------|-------|-------------|------|
| [Service] | [Team] | [Staging] | H/M/L |

### Out of Scope
| System | Reason |
|--------|--------|

## 3. Scenarios
| # | Time | Scenario | Target | Duration | Owner | Risk |
|---|------|----------|--------|----------|-------|------|
| 1 | HH:MM | [Description] | [Service] | 15 min | | Low |
| 2 | HH:MM | [Description] | [Service] | 15 min | | Med |

### Scenario 1: [Name]
**Fault:** [Type] | **Target:** [Specific] | **Tool:** [Chaos tool]
```
Hypothesis:
Given: [steady state]
When: [fault]
Then: [expected]
```
**Abort:** Error >X%, Latency >Yms

## 4. Schedule
| Time | Duration | Activity | Lead |
|------|----------|----------|------|
| HH:MM | 15 min | Kickoff | GameDay Lead |
| HH:MM | 15 min | Baseline | Observer |
| HH:MM | 15 min | Scenario 1 | Operator |
| HH:MM | 30 min | Debrief | GameDay Lead |

## 5. Participants
| Role | Name | Contact |
|------|------|---------|
| GameDay Lead | | |
| Fault Operator | | |
| Observer | | |
| Scribe | | |
| On-Call | | |

**Channels:** Slack: #channel | Zoom: [link]

## 6. Safety Controls
**Global Abort:** P0/P1 incident, Customer impact, Revenue impact, Any participant stop

**Pre-GameDay:** [ ] Scenarios reviewed [ ] Participants confirmed [ ] Tools verified [ ] Rollback tested

## 7. Results
| Metric | Result |
|--------|--------|
| Scenarios Completed | /X |
| Hypotheses Confirmed | /X |
| Findings | X |
| Action Items | X |

### Scenario Results
| # | Scenario | Outcome | Finding |
|---|----------|---------|---------|
| 1 | | Confirmed/Disproved | |

## 8. Findings
| # | Finding | Severity | Category |
|---|---------|----------|----------|
| 1 | | C/H/M/L | Resilience/Monitoring/Runbook/Process |

## 9. Action Items
| # | Action | Owner | Due | Status |
|---|--------|-------|-----|--------|
| 1 | | | | [ ] |

## 10. Retrospective
**Went Well:**
**Improve:**
**Next GameDay:**
