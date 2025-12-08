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
| Fault | Impact | Tools | Risk |
|-------|--------|-------|------|
| Instance termination | Compute loss | Chaos Monkey, Gremlin, AWS FIS | Medium |
| AZ/Region failure | Multi-instance loss | Gremlin, AWS FIS | High |
| Disk failure | Storage unavailable | Gremlin, dd | Medium |
| Resource exhaustion | Throttling, OOM | stress-ng, Gremlin | Medium |

### Network
| Fault | Impact | Tools | Risk |
|-------|--------|-------|------|
| Latency injection | Slow responses | tc, Gremlin, Toxiproxy | Low |
| Packet loss | Unreliable network | tc, Gremlin, Pumba | Medium |
| DNS failure | Service discovery broken | Gremlin, custom | Medium |
| Network partition | Split-brain scenarios | iptables, Gremlin | High |
| Bandwidth throttling | Slow data transfer | tc, Toxiproxy | Low |

### Application
| Fault | Impact | Tools | Risk |
|-------|--------|-------|------|
| Memory pressure | OOM conditions | stress-ng, Gremlin | Medium |
| CPU stress | Compute exhaustion | stress-ng, Gremlin | Medium |
| Disk fill | Storage exhaustion | dd, Gremlin | Medium |
| Process kill | Service crash | kill, Gremlin | Medium |
| Thread exhaustion | Deadlock, slowdown | Custom, Gremlin | Medium |

### Dependency
| Fault | Impact | Tools | Risk |
|-------|--------|-------|------|
| Service unavailable | Upstream failure | Toxiproxy, Gremlin | Medium |
| Slow dependency | Timeout scenarios | Toxiproxy, Gremlin | Low |
| Database failure | Data layer loss | Gremlin, custom | High |
| Cache eviction | Cache miss storm | Custom scripts | Low |
| Message queue failure | Async processing broken | Gremlin, custom | Medium |

### State
| Fault | Impact | Tools | Risk |
|-------|--------|-------|------|
| Data corruption | Invalid state | Custom scripts | High |
| Clock skew | Time-dependent failures | chrony, Gremlin | Medium |
| Certificate expiry | TLS failures | Custom scripts | Medium |

## Tools
| Tool | Platform | Best For |
|------|----------|----------|
| Chaos Monkey | AWS | Instance termination |
| Gremlin | Multi-cloud | Enterprise chaos |
| LitmusChaos | Kubernetes | K8s native |
| Chaos Mesh | Kubernetes | K8s native |
| AWS FIS | AWS | AWS infrastructure |
| Toxiproxy | Any | Network simulation |
| Pumba | Docker | Docker chaos |

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
| Environment | Staging first |

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

## Safety Practices
| Stage | Scope | Environment | Approval |
|-------|-------|-------------|----------|
| 1 | Single instance | Dev | Self |
| 2 | Single instance | Staging | Team lead |
| 3 | Multiple | Staging | Manager |
| 4 | Single | Production | SRE lead |
| 5 | Multiple | Production | VP Eng |

## Directory Structure
```
<chaos-repo>/
├── PRD/TestPlans/
├── experiments/infrastructure/, network/, application/, dependency/, state/
├── gamedays/
├── dashboards/
├── scripts/rollback/
└── .github/workflows/
```

## Labels
`chaos`, `experiment`, `gameday`, `infrastructure-fault`, `network-fault`, `application-fault`, `dependency-fault`, `state-fault`, `finding`

## Commands
Chaos-Start, Design-Experiment, Plan-GameDay, Run-Experiment, Abort-Experiment, Chaos-Report
