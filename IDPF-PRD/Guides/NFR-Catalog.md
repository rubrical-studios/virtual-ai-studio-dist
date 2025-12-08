# NFR Catalog

## Performance
| ID | Requirement | Typical Values |
|----|-------------|----------------|
| PERF-001 | Response time p50/p95/p99 | <100ms/<500ms/<1000ms |
| PERF-002 | API response | <200ms |
| PERF-003 | DB query | <50ms |
| PERF-010 | Requests/second | 100-10000 rps |
| PERF-020 | Concurrent users | 100-100000 |
| PERF-030 | Page load | <3s |
| PERF-031 | Time to interactive | <5s |

## Security
| ID | Requirement | Options |
|----|-------------|---------|
| SEC-001 | Authentication | Password, OAuth, SAML, MFA |
| SEC-002 | MFA | SMS, TOTP, hardware key |
| SEC-003 | Session timeout | 15-60 min |
| SEC-010 | Authorization | RBAC, ABAC, ACL |
| SEC-020 | Encryption in transit | TLS 1.2+/1.3 |
| SEC-021 | Encryption at rest | AES-256 |
| SEC-030 | Audit logging | All security events |
| SEC-040 | OWASP | Input validation, XSS, CSRF |

## Reliability
| ID | Requirement | Target |
|----|-------------|--------|
| REL-001 | 99% availability | 3.65 days/year downtime |
| REL-002 | 99.9% availability | 8.76 hours/year |
| REL-003 | 99.99% availability | 52.6 min/year |
| REL-010 | RTO | Minutes to hours |
| REL-011 | RPO | Seconds to hours |
| REL-020 | Backup frequency | Hourly/Daily |
| REL-030 | Failover | Auto/Manual |

## Usability
| ID | Requirement | Standard |
|----|-------------|----------|
| USE-001 | WCAG 2.1 A | Minimum |
| USE-002 | WCAG 2.1 AA | Recommended |
| USE-010 | Desktop browsers | Chrome, Firefox, Safari, Edge (2 versions) |
| USE-011 | Mobile browsers | Safari iOS, Chrome Android |
| USE-020 | Languages | Per project |

## Scalability
| ID | Requirement | Options |
|----|-------------|---------|
| SCA-001 | Auto-scaling | Load-based |
| SCA-002 | Stateless design | Scale-out ready |
| SCA-020 | Database scaling | Sharding, replication |

## Maintainability
| ID | Requirement | Target |
|----|-------------|--------|
| MNT-001 | Test coverage | >80% |
| MNT-010 | CI/CD | Required |
| MNT-012 | Rollback | Required |
| MNT-020 | Monitoring | APM + infrastructure |

## Compliance
| ID | Regulation | Key Requirements |
|----|------------|------------------|
| CMP-001 | GDPR | Consent, right to erasure, portability |
| CMP-002 | CCPA | Disclosure, opt-out |
| CMP-003 | HIPAA | PHI protection, audit, encryption |
| CMP-010 | PCI-DSS | Cardholder data protection |
| CMP-011 | SOC 2 | Security, availability, confidentiality |

## Quick Reference by Domain
| Domain | Key NFRs |
|--------|----------|
| E-commerce | PERF-030, SEC-020, REL-002, CMP-010 |
| Healthcare | SEC-020, SEC-030, REL-003, CMP-003 |
| Finance | SEC-001, REL-003, CMP-010 |
| SaaS | SCA-001, REL-002, MNT-010, CMP-011 |
