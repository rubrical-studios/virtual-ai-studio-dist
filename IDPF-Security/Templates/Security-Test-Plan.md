# Security Test Plan: [App/Feature Name]
**Version:** 1.0 | **Date:** YYYY-MM-DD | **Author:** [Name] | **Status:** Draft

## 1. Overview
**Purpose:** [Goals] | **AUT:** [Repo, PRD, Version, Stack]
**Scope In/Out:** [Components, APIs]

## 2. Security Requirements
| Req ID | Requirement | Coverage |
|--------|-------------|----------|
| SEC-001 | | SAST/DAST/Manual |

**Compliance:** [ ] OWASP Top 10 [ ] PCI-DSS [ ] SOC2 [ ] HIPAA

## 3. Testing Approach
### SAST
| Tool | Scope | Frequency |
|------|-------|-----------|
| Semgrep | All code | Every commit |
| GitLeaks | Secrets | Every commit |

### SCA
| Tool | Scope | Frequency |
|------|-------|-----------|
| Snyk | Dependencies | Every commit |

### DAST
| Tool | Target | Frequency |
|------|--------|-----------|
| OWASP ZAP | API/Web | Pre-release |

### Manual
| Activity | Frequency |
|----------|-----------|
| Penetration Test | Quarterly |
| Code Review | Per PR |

## 4. Test Cases
### Auth & Access
| TC ID | Test | Type | Priority |
|-------|------|------|----------|
| SEC-001 | Brute force protection | DAST | High |
| SEC-002 | Privilege escalation | Manual | Critical |

### Input Validation
| TC ID | Test | Type | Priority |
|-------|------|------|----------|
| SEC-010 | SQL injection | SAST+DAST | Critical |
| SEC-011 | XSS | DAST | High |
| SEC-012 | Command injection | SAST+DAST | Critical |

### Data Protection
| TC ID | Test | Type | Priority |
|-------|------|------|----------|
| SEC-020 | TLS configuration | DAST | High |
| SEC-021 | Secrets in code | SAST | Critical |

## 5. Vulnerability Management
### Severity SLA
| Severity | CVSS | SLA | Escalation |
|----------|------|-----|------------|
| Critical | 9.0+ | 24h | Leadership |
| High | 7.0+ | 7d | Security lead |
| Medium | 4.0+ | 30d | Dev lead |
| Low | <4.0 | 90d | Backlog |

### Workflow
Discovery → Triage → Assignment → Remediation → Verification → Closure

## 6. CI/CD Gates
| Stage | Tool | Fail On |
|-------|------|---------|
| Commit | SAST | Critical/High |
| Commit | Secrets | Any |
| PR | SCA | Critical |
| Deploy | DAST | Critical |

## 7. Metrics
| Metric | Target |
|--------|--------|
| MTTR (Critical) | <24h |
| MTTR (High) | <7d |
| False Positive Rate | <10% |
| OWASP Coverage | 100% |

## 8. Deliverables
- [ ] SAST results [ ] DAST results [ ] SCA report [ ] Pentest report [ ] Vuln tracking

## 9. Approval
| Role | Name | Approved |
|------|------|----------|
| Security Lead | | [ ] |
| Compliance | | [ ] |
