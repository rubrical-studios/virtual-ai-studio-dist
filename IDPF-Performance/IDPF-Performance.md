# IDPF-Performance Framework
**Revision:** 1 | **Extends:** IDPF-Testing-Core

## Overview
Framework for load, stress, endurance, and capacity testing. Validates response time, throughput, scalability under various conditions.

## Terminology
| Term | Definition |
|------|------------|
| Load Test | Validate under expected load |
| Stress Test | Find breaking point |
| Endurance/Soak | Detect degradation over time |
| Spike Test | Handle sudden bursts |
| Capacity Test | Determine max throughput |
| VUs | Virtual Users (simulated) |
| Throughput | Requests per second (RPS) |
| Percentile (p95/p99) | Response time at percentile |

## Test Types
| Type | Purpose | Duration | Pattern |
|------|---------|----------|---------|
| Load | Expected load | 15-60 min | Steady |
| Stress | Breaking point | Until failure | Ramp up |
| Endurance | Memory leaks | 4-24 hours | Steady |
| Spike | Traffic bursts | 15-30 min | Spikes |
| Capacity | Max throughput | Varies | Step |

## Tools
| Tool | Language | Best For |
|------|----------|----------|
| k6 | JavaScript | Modern APIs, CI/CD |
| JMeter | Java/XML | Enterprise, GUI |
| Gatling | Scala/Java | High throughput |
| Locust | Python | Python teams |
| Artillery | JavaScript | Serverless |

**Decision:** JS team → k6/Artillery | Python → Locust | Java → Gatling/JMeter | Need GUI → JMeter

## Key Metrics
| Metric | Description | Target |
|--------|-------------|--------|
| Response p50 | Median | <200ms |
| Response p95 | 95th percentile | <500ms |
| Response p99 | 99th percentile | <1000ms |
| Throughput | Requests/sec | Depends |
| Error Rate | Failed/total | <0.1% |

## Directory Structure
```
<perf-repo>/
├── PRD/TestPlans/
├── src/scenarios/     # load-test.js, stress-test.js
├── src/lib/           # Shared utilities
├── src/thresholds/    # Pass/fail criteria
├── results/
└── .github/workflows/
```

## Thresholds (k6)
```javascript
thresholds: {
  'http_req_duration': ['p(95)<500', 'p(99)<1000'],
  'http_req_failed': ['rate<0.01'],
  'http_reqs': ['rate>1000'],
}
```

## Workflow Phases
| Phase | Activities |
|-------|------------|
| PLAN | Define SLAs, identify critical paths, establish baselines |
| DESIGN | Create workload model, design profiles, configure thresholds |
| DEVELOP | Write scripts, build data generators, set up monitoring |
| EXECUTE | Run tests, collect metrics, monitor resources |
| REPORT | Analyze percentiles, compare baselines, recommendations |

## Labels
`performance`, `load-test`, `stress-test`, `soak-test`, `capacity`, `baseline`

## Commands
Perf-Plan-Start, Baseline-Define, Load-Test-Create, Run-Load-Test, Analyze-Results, Compare-Baseline
