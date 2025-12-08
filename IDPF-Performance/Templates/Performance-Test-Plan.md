# Performance Test Plan: [Test Name]
**Version:** 1.0 | **Date:** YYYY-MM-DD | **Author:** [Name] | **Status:** Draft

## 1. Overview
**Purpose:** [Goals] | **AUT:** [Repo, PRD, Environment]
**Test Type:** [ ] Load [ ] Stress [ ] Soak [ ] Spike [ ] Capacity

## 2. Performance Requirements
### SLAs/SLOs
| Metric | Target | Critical |
|--------|--------|----------|
| Response p95 | <500ms | <1000ms |
| Response p99 | <1000ms | <2000ms |
| Throughput | >1000 req/s | >500 req/s |
| Error Rate | <0.1% | <1% |

### NFR Traceability
| NFR ID | Requirement | Test Coverage |
|--------|-------------|---------------|
| NFR-001 | | load-test.js |

## 3. Environment
**Target:** App servers, DB, Cache, Load balancer
**Load Generation:** Tool, Generators, Network
**Monitoring:** [ ] APM [ ] Infrastructure [ ] Logging [ ] Dashboards

## 4. Test Scenarios
### Workload Model
| Transaction | % Load | Think Time | Data |
|-------------|--------|------------|------|
| Login | 10% | 2s | users.csv |
| Browse | 40% | 5s | - |
| Checkout | 15% | 10s | payment.csv |

### Load Profile
| Phase | Duration | VUs | Ramp |
|-------|----------|-----|------|
| Ramp Up | 5 min | 0→500 | 100/min |
| Steady | 30 min | 500 | - |
| Peak | 10 min | 500→1000 | 50/min |
| Ramp Down | 5 min | 1000→0 | 200/min |

## 5. Pass/Fail Criteria
```javascript
thresholds: {
  'http_req_duration': ['p(95)<500', 'p(99)<1000'],
  'http_req_failed': ['rate<0.01'],
}
```
**Exit:** [ ] Thresholds met [ ] No critical errors [ ] System stable [ ] Resources OK

## 6. Execution
**Pre-Test:** [ ] Environment verified [ ] Data loaded [ ] Monitoring ready [ ] Baseline captured
**Schedule:** Baseline, Load Test, Stress Test dates
**Post-Test:** [ ] Collect metrics [ ] Generate reports [ ] Analyze [ ] Clean up

## 7. Risks
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Non-representative env | M | H | Production-like config |
| Network bottleneck | L | H | Distributed load generators |

## 8. Deliverables
- [ ] Test scripts [ ] Results [ ] Analysis report [ ] Recommendations [ ] Dashboards

## 9. Approval
| Role | Name | Approved |
|------|------|----------|
| Performance Lead | | [ ] |
| Ops/SRE Lead | | [ ] |
