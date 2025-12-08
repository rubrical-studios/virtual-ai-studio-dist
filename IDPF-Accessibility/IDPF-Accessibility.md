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
| Screen Reader | Manual | Content | NVDA, JAWS, VoiceOver |
| Color Contrast | Full | Visual | axe, contrast checkers |
| Cognitive | Manual | Readability | Manual review |
| Mobile a11y | Partial | Touch, gestures | Accessibility Scanner |

## WCAG Levels
| Level | Description | Requirement |
|-------|-------------|-------------|
| A | Minimum | Must meet |
| AA | Standard | Typically required (legal) |
| AAA | Enhanced | Aspirational |

**Target:** WCAG 2.1 Level AA

## Tools
**Automated:** axe-core (CI), Lighthouse (audit), Pa11y (CLI), WAVE (visual), Tenon (API)
**Assistive:** NVDA (Win), JAWS (Win), VoiceOver (Mac/iOS), TalkBack (Android), Dragon (voice)

## WCAG Success Criteria Checklist

### Perceivable (1.x)
| SC | Description | Level | Method |
|----|-------------|-------|--------|
| 1.1.1 | Non-text Content | A | Auto+Manual |
| 1.2.1 | Audio-only and Video-only | A | Manual |
| 1.3.1 | Info and Relationships | A | Auto+Manual |
| 1.3.2 | Meaningful Sequence | A | Manual |
| 1.4.1 | Use of Color | A | Manual |
| 1.4.3 | Contrast (Minimum) | AA | Automated |
| 1.4.4 | Resize Text | AA | Manual |
| 1.4.11 | Non-text Contrast | AA | Manual |

### Operable (2.x)
| SC | Description | Level | Method |
|----|-------------|-------|--------|
| 2.1.1 | Keyboard | A | Manual |
| 2.1.2 | No Keyboard Trap | A | Manual |
| 2.4.1 | Bypass Blocks | A | Manual |
| 2.4.2 | Page Titled | A | Automated |
| 2.4.3 | Focus Order | A | Manual |
| 2.4.4 | Link Purpose | A | Manual |
| 2.4.6 | Headings and Labels | AA | Auto+Manual |
| 2.4.7 | Focus Visible | AA | Manual |

### Understandable (3.x)
| SC | Description | Level | Method |
|----|-------------|-------|--------|
| 3.1.1 | Language of Page | A | Automated |
| 3.2.1 | On Focus | A | Manual |
| 3.2.2 | On Input | A | Manual |
| 3.3.1 | Error Identification | A | Manual |
| 3.3.2 | Labels or Instructions | A | Manual |

### Robust (4.x)
| SC | Description | Level | Method |
|----|-------------|-------|--------|
| 4.1.1 | Parsing | A | Automated |
| 4.1.2 | Name, Role, Value | A | Auto+Manual |
| 4.1.3 | Status Messages | AA | Manual |

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
| Serious issues | <5 |
| WCAG AA conformance | 100% |

## Labels
`accessibility`, `wcag-a`, `wcag-aa`, `wcag-aaa`, `screen-reader`, `keyboard`, `color-contrast`

## Legal Requirements
| Regulation | Jurisdiction | Standard |
|------------|--------------|----------|
| ADA | United States | WCAG 2.1 AA |
| Section 508 | US Federal | WCAG 2.0 AA |
| EAA | European Union | WCAG 2.1 AA |
| AODA | Ontario, Canada | WCAG 2.0 AA |
