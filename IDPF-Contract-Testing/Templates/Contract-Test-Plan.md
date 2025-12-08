# Contract Test Plan: [Service/API]
**Version:** 1.0 | **Date:** YYYY-MM-DD | **Author:** [Name] | **Status:** Draft

## 1. Overview
**Purpose:** [Goals]
| Role | Service | Repository | Team |
|------|---------|------------|------|
| Provider | | | |
| Consumer | | | |

**API Docs:** OpenAPI spec, Documentation

## 2. Contract Scope
### Endpoints Under Contract
| Endpoint | Method | Consumer(s) | Priority |
|----------|--------|-------------|----------|
| /api/orders | GET | order-ui, reporting | High |
| /api/orders | POST | order-ui | High |

### Out of Scope
- Internal/admin endpoints
- Deprecated endpoints

## 3. Approach
**Tool:** Pact / Spring Cloud Contract
**Strategy:** [ ] Consumer-driven [ ] Bi-directional [ ] Provider-driven

### Provider States
| State | Description | Setup |
|-------|-------------|-------|
| `order exists` | Order with ID exists | Seed DB |
| `no orders` | Empty list | Clear DB |

## 4. Consumer Tests
### Consumer: [Name]
| Interaction | Request | Expected |
|-------------|---------|----------|
| Get order | GET /api/orders/123 | 200 + order |
| Create order | POST /api/orders | 201 |
| Not found | GET /api/orders/999 | 404 |

## 5. Provider Verification
```typescript
const stateHandlers = {
  'order exists': async () => { await db.seed(testOrder); },
};
```

| Setting | Value |
|---------|-------|
| Base URL | http://localhost:3000 |
| Publish Results | Yes |
| Version | Git SHA |

## 6. Broker
| Setting | Value |
|---------|-------|
| URL | |
| Auth | API Token |
| Webhooks | PR checks |

## 7. CI/CD
### Consumer
```yaml
- run: npm run test:contract
- run: npm run pact:publish
- run: npm run pact:can-i-deploy
```

### Provider
```yaml
- run: npm run pact:verify
- run: npm run pact:can-i-deploy
```

## 8. Versioning
**Approach:** Git SHA / Semantic
**Breaking Changes:** Consumer publishes → Provider fails → Coordinate → Implement → Deploy

## 9. Metrics
| Metric | Target |
|--------|--------|
| Contract coverage | 100% public endpoints |
| Verification pass | 100% |
| MTTF broken contract | <24h |

## 10. Responsibilities
### Consumer Team
- [ ] Write consumer tests
- [ ] Publish contracts
- [ ] Coordinate breaking changes

### Provider Team
- [ ] Implement state handlers
- [ ] Run verification
- [ ] Fix failures

## 11. Approval
| Role | Name | Approved |
|------|------|----------|
| Consumer Lead | | [ ] |
| Provider Lead | | [ ] |
