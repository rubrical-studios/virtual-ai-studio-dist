# Accessibility Test Plan: [App/Feature]
**Version:** 1.0 | **Date:** YYYY-MM-DD | **Author:** [Name] | **Status:** Draft

## 1. Overview
**Purpose:** [Goals] | **AUT:** [Repo, PRD, URL]
**Conformance Target:** [ ] WCAG 2.1 A [ ] WCAG 2.1 AA [ ] WCAG 2.2 AA
**Legal:** [ ] ADA [ ] Section 508 [ ] EAA

## 2. Scope
| Page/Component | Priority |
|----------------|----------|
| Homepage | High |
| Login | High |
| Navigation | High |

**User Flows:** Registration, Primary task, Error handling

## 3. Testing Approach
### Automated
| Tool | Scope | Frequency | Gate |
|------|-------|-----------|------|
| axe-core | All pages | Every commit | Fail on serious+ |
| Lighthouse | Key pages | Weekly | Score >90 |

### Manual
| Type | Scope | Frequency |
|------|-------|-----------|
| Keyboard nav | All interactive | Per release |
| Screen reader | Key flows | Per release |

### Assistive Technology
| AT | Browser/OS | Tester |
|----|------------|--------|
| NVDA | Chrome/Windows | |
| VoiceOver | Safari/macOS | |

## 4. WCAG Checklist
### Perceivable
| SC | Description | Level | Status |
|----|-------------|-------|--------|
| 1.1.1 | Non-text Content | A | [ ] |
| 1.4.3 | Contrast | AA | [ ] |

### Operable
| SC | Description | Level | Status |
|----|-------------|-------|--------|
| 2.1.1 | Keyboard | A | [ ] |
| 2.4.7 | Focus Visible | AA | [ ] |

### Understandable
| SC | Description | Level | Status |
|----|-------------|-------|--------|
| 3.1.1 | Language | A | [ ] |
| 3.3.2 | Labels | A | [ ] |

### Robust
| SC | Description | Level | Status |
|----|-------------|-------|--------|
| 4.1.2 | Name, Role, Value | A | [ ] |

## 5. Issue Tracking
| Severity | Impact | SLA |
|----------|--------|-----|
| Critical | Blocker for AT | Before release |
| Serious | Major barrier | 30 days |
| Moderate | Degraded | 60 days |
| Minor | Inconvenience | 90 days |

## 6. Metrics
| Metric | Target |
|--------|--------|
| Lighthouse a11y | >90 |
| Critical issues | 0 |
| WCAG AA conformance | 100% |

## 7. Deliverables
- [ ] Automated scan config [ ] WCAG checklist [ ] Screen reader results [ ] Audit report [ ] VPAT

## 8. Approval
| Role | Name | Approved |
|------|------|----------|
| A11y Lead | | [ ] |
| Product Owner | | [ ] |
