# IDPF-Contract-Testing Framework
**Revision:** 1 | **Extends:** IDPF-Testing-Core

## Overview
Framework for API contract testing. Validates that consumers and providers agree on interface contracts.
**Goal:** Catch integration issues early without full E2E testing.

## Terminology
| Term | Definition |
|------|------------|
| Consumer | Service that calls an API |
| Provider | Service that exposes an API |
| Contract | Agreement on request/response format |
| Pact | Contract file (Pact format) |
| Consumer-Driven | Consumer defines expected interactions |
| Provider Verification | Provider validates it meets contracts |
| Broker | Central repository for contracts |
| Can-I-Deploy | Check if safe to deploy |
| Provider State | Precondition for verification |

## Flow
```
Consumer: Write tests → Generate contract → Publish to broker
Provider: Fetch contracts → Setup states → Verify → Publish results
Both: Can-I-Deploy check → Deploy
```

## Tools
| Tool | Language | Best For |
|------|----------|----------|
| Pact | Multi | Most scenarios, mature |
| Spring Cloud Contract | Java | Spring ecosystem |
| Specmatic | Any | OpenAPI-based |
| Dredd | Any | API Blueprint/OpenAPI |

**Decision:** Spring → Spring Cloud Contract | Multi-language → Pact | OpenAPI-first → Specmatic

## Consumer Workflow
1. Write contract test (mock provider)
2. Run tests
3. Generate pact
4. Publish to broker

## Provider Workflow
1. Fetch contracts
2. Setup provider states
3. Run verification
4. Publish results

## Provider States
```typescript
const stateHandlers = {
  'order exists': async () => { await db.seed(testOrder); },
  'no orders': async () => { await db.clear('orders'); },
};
```

## Can-I-Deploy
```bash
pact-broker can-i-deploy \
  --pacticipant order-service \
  --version $GIT_SHA \
  --to-environment production
```

## Directory Structure
### Consumer (Embedded)
```
<consumer>/tests/contract/
├── pacts/             # Generated
└── consumer-tests.ts
```

### Provider (Embedded)
```
<provider>/tests/contract/
├── provider-verification.ts
└── provider-states/
```

### Separate Repo
```
<contract-repo>/
├── PRD/TestPlans/
├── contracts/
├── broker/
├── scripts/
└── .github/workflows/
```

## Versioning Strategy
| Approach | Use Case |
|----------|----------|
| Git SHA | Standard CI/CD |
| Semantic | Formal releases |
| Branch-based | Feature branches |

## Breaking Change Process
1. Consumer publishes breaking contract
2. Provider verification fails
3. Teams coordinate
4. Provider implements
5. Both deploy

## Labels
`contract`, `consumer`, `provider`, `breaking-change`, `pending-pact`, `verification-failed`

## Commands
Contract-Plan-Start, Consumer-Test-Create, Provider-State-Create, Pact-Publish, Provider-Verify, Can-I-Deploy
