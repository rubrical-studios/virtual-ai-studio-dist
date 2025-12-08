# IDPF-Security Framework
**Revision:** 1 | **Extends:** IDPF-Testing-Core

## Overview
Framework for SAST, DAST, penetration testing, vulnerability management, and security compliance.
**Principle:** Validate protection against vulnerabilities and meet security requirements.

## Terminology
| Term | Definition |
|------|------------|
| SAST | Static Application Security Testing - source code |
| DAST | Dynamic Application Security Testing - running app |
| SCA | Software Composition Analysis - dependencies |
| IAST | Interactive Application Security Testing - runtime |
| CVE | Common Vulnerabilities and Exposures |
| CVSS | Common Vulnerability Scoring System |

## Testing Types
| Type | When | Tools |
|------|------|-------|
| SAST | Development/CI | SonarQube, Semgrep, CodeQL |
| SCA | Development/CI | Snyk, Dependabot, OWASP Dependency-Check |
| DAST | Staging/Pre-prod | OWASP ZAP, Burp Suite, Nuclei |
| Secret Scan | Development/CI | GitLeaks, TruffleHog |
| Penetration | Pre-release | Manual + tools |

## OWASP Top 10 Coverage
| # | Vulnerability | Approach | Tools |
|---|---------------|----------|-------|
| A01 | Broken Access Control | DAST, Manual | ZAP, Burp |
| A02 | Cryptographic Failures | SAST | SonarQube |
| A03 | Injection | SAST, DAST | All |
| A05 | Security Misconfiguration | DAST | ZAP |
| A06 | Vulnerable Components | SCA | Snyk |
| A07 | Auth Failures | DAST | ZAP, Burp |

## Severity & SLA
| Severity | CVSS | SLA |
|----------|------|-----|
| Critical | 9.0-10.0 | 24 hours |
| High | 7.0-8.9 | 7 days |
| Medium | 4.0-6.9 | 30 days |
| Low | 0.1-3.9 | 90 days |

## Vulnerability Workflow
Discovery → Triage → Assignment → Remediation → Verification → Closure

## CI/CD Gates
| Stage | Tool | Criteria |
|-------|------|----------|
| Commit | SAST | No critical/high |
| Commit | Secret Scan | No secrets |
| PR | SCA | No critical |
| Pre-Deploy | DAST | No critical |

## Directory Structure
```
<security-repo>/
├── PRD/TestPlans/
├── src/sast/         # Custom SAST rules
├── src/dast/         # ZAP scripts, Nuclei templates
├── reports/
├── vulnerabilities/  # Tracking
└── .github/workflows/
```

## Metrics
| Metric | Target |
|--------|--------|
| MTTR (Critical) | <24 hours |
| MTTR (High) | <7 days |
| Vulnerability Escape Rate | <5% |
| False Positive Rate | <10% |
| OWASP Coverage | 100% |

## Labels
`security`, `sast`, `dast`, `sca`, `pentest`, `vulnerability`, `compliance`

## Commands
Security-Scan-Start, Run-SAST, Run-DAST, Run-SCA, Vuln-Triage, Vuln-Status
