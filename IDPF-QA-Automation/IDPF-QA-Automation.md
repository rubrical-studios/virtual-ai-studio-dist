# IDPF-QA-Automation Framework
**Revision:** 1 | **Extends:** IDPF-Testing-Core

## Overview
Framework for automated UI/E2E test suites using Selenium, Playwright, Cypress, Appium.
**Principle:** Tests validate user-facing behavior through browser/mobile automation.

## Terminology
| Term | Definition |
|------|------------|
| Page Object | Class encapsulating page elements/actions |
| Component Object | Reusable UI component abstraction |
| Smoke Suite | Critical path tests post-deployment |
| Regression Suite | Full feature coverage tests |
| Flaky Test | Inconsistent pass/fail results |

## Test Types
| Type | Scope | Time | Trigger |
|------|-------|------|---------|
| Smoke | Critical paths | <5 min | Every deploy |
| Regression | Full coverage | 30-60 min | PR merge, nightly |
| Cross-Browser | Compatibility | Varies | Weekly, release |
| E2E | User journeys | 15-45 min | Nightly, release |

## Tools
**Web:** Selenium (enterprise), Playwright (modern), Cypress (JS), WebDriverIO (flexible)
**Mobile:** Appium (cross-platform), XCUITest (iOS), Espresso (Android), Detox (React Native)
**Visual:** Percy, Applitools, BackstopJS
**Cloud:** BrowserStack, Sauce Labs, LambdaTest

## Page Object Model
```
src/
├── pages/           # Page Objects
├── components/      # Reusable UI components
├── tests/smoke/, regression/, e2e/
├── fixtures/        # Test data
├── utils/           # Helpers
└── config/          # Environment configs
```

**Principles:** One PO per page, encapsulate locators, expose meaningful actions, no assertions in PO

## Selector Strategy (Priority Order)
1. `data-testid` (highest reliability)
2. ID
3. Name
4. ARIA
5. Stable CSS class
6. Text content (low)
7. XPath (avoid)

## Wait Strategies
Prefer explicit/auto waits over implicit. Never use `sleep()`. Set reasonable timeouts.

## Test Data
| Approach | Use Case |
|----------|----------|
| Fixtures | Static data, version controlled |
| Factories | Dynamic generation |
| API Seeding | Pre-test setup |

## Metrics
| Metric | Target |
|--------|--------|
| Pass Rate | >95% |
| Flaky Rate | <2% |
| Smoke Time | <5 min |
| Regression Time | <60 min |

## Flaky Test Management
1. Move to quarantine suite
2. Create investigation issue
3. Fix root cause (not just retries)
4. Return to main suite when stable

## Labels
`qa-automation`, `smoke-suite`, `regression-suite`, `cross-browser`, `mobile`, `flaky`, `page-object`

## Commands
QA-Start, QA-Status, Create-PageObject, Create-TestSpec, Run-Smoke, Run-Regression, Flaky-Report
