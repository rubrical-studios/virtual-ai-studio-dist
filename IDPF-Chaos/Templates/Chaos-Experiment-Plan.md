# Chaos Experiment Plan: [Name]
**Version:** 1.0 | **Date:** YYYY-MM-DD | **Author:** [Name] | **Status:** Draft

## 1. Overview
**Purpose:** [What resilience is being validated?]
**Target:** Service, Repository, Environment
**PRD Reference:** App PRD, NFR, SLO

## 2. Hypothesis
### Steady State
| Metric | Expected | Source |
|--------|----------|--------|
| Success rate | >99.9% | Prometheus |
| p99 latency | <500ms | Datadog |
| Throughput | >1000 req/s | Metrics |

### Hypothesis Statement
```
Given: [steady-state - specific metrics]
When: [fault - what exactly happens]
Then: [expected behavior - measurable]
```

### Expected Outcomes
- [ ] Failure detected within [X]s
- [ ] Failover within [Y]s
- [ ] No data loss
- [ ] Limited user impact
- [ ] Alerts fire correctly

## 3. Experiment Design
### Fault Injection
| Parameter | Value |
|-----------|-------|
| Fault Type | [Instance termination/Latency/etc.] |
| Target | [pod/replica/service] |
| Scope | [1 of 3 replicas] |
| Duration | [5 minutes] |
| Tool | [LitmusChaos/Gremlin/etc.] |

### Blast Radius Controls
| Control | Setting |
|---------|---------|
| Target Scope | [Single pod] |
| Affected Users | [<1%] |
| Duration Limit | [Max 10 min] |
| Auto-Rollback | [Error rate >5%] |

### Abort Conditions
**Stop immediately if:**
- Error rate > [X]%
- Latency p99 > [Y]ms
- Revenue impact detected
- Customer complaints
- On-call escalation

## 4. Observability
| Type | Dashboard | Alert Threshold |
|------|-----------|-----------------|
| Error rate | [Link] | >1% |
| Latency p99 | [Link] | >2000ms |
| CPU/Memory | [Link] | >90% |

**Pre-experiment:** [ ] Dashboards open [ ] Alerts configured [ ] Baseline captured

## 5. Execution
### Pre-Checklist
- [ ] Team notified
- [ ] On-call aware
- [ ] Rollback tested
- [ ] Observability ready

### Steps
| Step | Time | Action | Owner |
|------|------|--------|-------|
| 1 | T-5m | Verify steady state | |
| 2 | T-0 | Inject fault | |
| 3 | Ongoing | Monitor | |
| 4 | T+duration | End experiment | |
| 5 | T+1m | Verify recovery | |

### Rollback
```bash
# Stop fault
[command]
# Verify recovery
[command]
```

## 6. Results (Post-Experiment)
**Outcome:** [ ] Confirmed [ ] Disproved [ ] Partial [ ] Inconclusive

### Observations
| Time | Observation |
|------|-------------|
| T+0s | Fault injected |
| T+Xs | [Impact] |
| T+Ys | [Recovery] |

### Findings
| # | Finding | Severity | Action |
|---|---------|----------|--------|
| 1 | | C/H/M/L | |

## 7. Action Items
| # | Action | Owner | Due | Status |
|---|--------|-------|-----|--------|
| 1 | | | | [ ] |

## 8. Approval
| Role | Name | Approved |
|------|------|----------|
| Experiment Lead | | [ ] |
| Service Owner | | [ ] |
| SRE Lead | | [ ] |
