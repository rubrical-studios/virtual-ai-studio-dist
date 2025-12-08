# IDPF-Accessibility Framework
**Version:** 1.0 | **Extends:** IDPF-Testing-Core

## Overview
Framework for WCAG compliance, automated a11y scanning, manual audits, and assistive technology testing.
**Goal:** Validate usability for people with disabilities and legal compliance (ADA, Section 508, EAA).

## Repository Type: Flexible
| Model | Use Case |
|-------|----------|
| Embedded | Automated a11y checks in app CI |
| Separate | Comprehensive audits, manual suites |

## Testing Types
| Type | Automation | Coverage | Tools |
|------|------------|----------|-------|
| Automated Scans | Full | ~30-40% | axe-core, Lighthouse, Pa11y |
| Keyboard | Partial | Focus, nav | Manual + scripts |
| Screen Reader | Manual | Content | NVDA, VoiceOver |
| Color Contrast | Full | Visual | axe, contrast checkers |

## WCAG Levels
| Level | Description | Requirement |
|-------|-------------|-------------|
| A | Minimum | Must meet |
| AA | Standard | Typically required (legal) |
| AAA | Enhanced | Aspirational |

**Target:** WCAG 2.1 Level AA

## Tools
**Automated:** axe-core (CI), Lighthouse (audit), Pa11y (CLI), WAVE (visual)
**Assistive:** NVDA (Windows), VoiceOver (macOS/iOS), TalkBack (Android)

## WCAG Checklist (Key)
### Perceivable
| SC | Description | Level | Method |
|----|-------------|-------|--------|
| 1.1.1 | Non-text Content | A | Auto+Manual |
| 1.3.1 | Info and Relationships | A | Auto+Manual |
| 1.4.3 | Contrast | AA | Automated |

### Operable
| SC | Description | Level | Method |
|----|-------------|-------|--------|
| 2.1.1 | Keyboard | A | Manual |
| 2.4.3 | Focus Order | A | Manual |
| 2.4.7 | Focus Visible | AA | Manual |

### Understandable
| SC | Description | Level | Method |
|----|-------------|-------|--------|
| 3.1.1 | Language | A | Automated |
| 3.3.2 | Labels | A | Manual |

### Robust
| SC | Description | Level | Method |
|----|-------------|-------|--------|
| 4.1.2 | Name, Role, Value | A | Auto+Manual |

## Issue Severity
| Severity | Impact | SLA |
|----------|--------|-----|
| Critical | Blocker for AT users | Before release |
| Serious | Major barrier | 30 days |
| Moderate | Degraded experience | 60 days |
| Minor | Inconvenience | 90 days |

## Metrics
| Metric | Target |
|--------|--------|
| Lighthouse a11y | >90 |
| Critical issues | 0 |
| WCAG AA conformance | 100% |

## Labels
`accessibility`, `wcag-a`, `wcag-aa`, `screen-reader`, `keyboard`, `color-contrast`

## Legal Requirements
| Regulation | Jurisdiction | Standard |
|------------|--------------|----------|
| ADA | United States | WCAG 2.1 AA |
| Section 508 | US Federal | WCAG 2.0 AA |
| EAA | European Union | WCAG 2.1 AA |
