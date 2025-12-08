# IDPF-Chaos Framework
**Revision:** 1 | **Extends:** IDPF-Testing-Core

## Overview
Framework for chaos engineering experiments, resilience testing, and failure scenario validation.
**Principle:** Proactively test resilience by introducing controlled failures to discover weaknesses.

## Chaos Principles
1. **Build Hypothesis** - Define expected behavior under failure
2. **Real-World Events** - Inject realistic failures
3. **Run in Production** - Test real systems (safely)
4. **Automate** - Enable continuous validation
5. **Minimize Blast Radius** - Start small, expand gradually

## Terminology
| Term | Definition |
|------|------------|
| Chaos Experiment | Controlled fault injection with hypothesis |
| Steady State | Normal behavior metrics before fault |
| Blast Radius | Scope of potential impact |
| Fault Injection | Deliberate failure introduction |
| GameDay | Scheduled event with multiple scenarios |
| Abort Condition | Threshold triggering immediate stop |

## Fault Types
### Infrastructure
| Fault | Tools | Risk |
|-------|-------|------|
| Instance termination | Chaos Monkey, Gremlin | Medium |
| AZ/Region failure | Gremlin, AWS FIS | High |
| Resource exhaustion | stress-ng, Gremlin | Medium |

### Network
| Fault | Tools | Risk |
|-------|-------|------|
| Latency injection | tc, Gremlin, Toxiproxy | Low |
| Packet loss | tc, Pumba | Medium |
| Network partition | iptables, Gremlin | High |

### Dependency
| Fault | Tools | Risk |
|-------|-------|------|
| Service unavailable | Toxiproxy, Gremlin | Medium |
| Database failure | Gremlin | High |
| Cache eviction | Custom | Low |

## Tools
| Tool | Platform | Best For |
|------|----------|----------|
| Chaos Monkey | AWS | Instance termination |
| Gremlin | Multi-cloud | Enterprise chaos |
| LitmusChaos | Kubernetes | K8s native |
| Chaos Mesh | Kubernetes | K8s native |
| AWS FIS | AWS | AWS infrastructure |
| Toxiproxy | Any | Network simulation |

**Decision:** K8s → LitmusChaos/Chaos Mesh | Enterprise → Gremlin | AWS → FIS | Network → Toxiproxy

## Hypothesis Template
```
Given: [steady-state conditions]
When: [fault injected]
Then: [expected behavior]
```

## Blast Radius Controls
| Control | Example |
|---------|---------|
| Target Scope | 1 of 10 pods |
| User Impact | Canary traffic only |
| Duration | Max 10 minutes |
| Auto-Rollback | Error rate >5% |

## Abort Conditions
Stop immediately if: Error rate > threshold, Latency > threshold, Revenue impact, Customer complaints, On-call escalation, Data loss

## GameDay Structure
| Phase | Duration |
|-------|----------|
| Kickoff | 15 min |
| Experiments | 2-4 hours |
| Debrief | 30 min |
| Documentation | 1 hour |

**Roles:** GameDay Lead, Fault Operator, Observer, Scribe, On-Call

## Directory Structure
```
<chaos-repo>/
├── PRD/TestPlans/
├── experiments/infrastructure/, network/, dependency/
├── gamedays/
├── dashboards/
├── scripts/rollback/
└── .github/workflows/
```

## Safety Practices
| Stage | Scope | Environment | Approval |
|-------|-------|-------------|----------|
| 1 | Single instance | Dev | Self |
| 2 | Single instance | Staging | Team lead |
| 3 | Multiple | Staging | Manager |
| 4 | Single | Production | SRE lead |
| 5 | Multiple | Production | VP Eng |

## Labels
`chaos`, `experiment`, `gameday`, `infrastructure-fault`, `network-fault`, `dependency-fault`, `finding`

## Commands
Chaos-Start, Design-Experiment, Plan-GameDay, Run-Experiment, Abort-Experiment, Chaos-Report
