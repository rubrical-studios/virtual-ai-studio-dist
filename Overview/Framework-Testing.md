# Framework Testing Reference
**Version:** 1.0.0
## IDPF-Testing-Core Framework
**Location:** `IDPF-Testing-Core/IDPF-Testing-Core.md` | **Revision:** 1 | **Type:** Foundational Testing Framework
### Purpose
Common architecture, terminology, workflows for testing-focused development. Foundation that specialized frameworks extend.
**Principle:** "Test automation is software development. Same tools, skills, practices."
### Architecture
```
IDPF-Testing-Core (foundation)
├── IDPF-QA-Automation (Selenium, Playwright, Cypress, Appium)
├── IDPF-Performance (k6, JMeter, Gatling, Locust)
├── IDPF-Security (OWASP ZAP, Burp Suite, SAST/DAST)
├── IDPF-Accessibility (axe, Lighthouse, Pa11y)
├── IDPF-Chaos (Chaos Monkey, Gremlin, LitmusChaos)
└── IDPF-Contract-Testing (Pact, Spring Cloud Contract)
```
### Embedded vs Separate Repository
**Embedded (No IDPF-Testing):** TDD, ATDD, BDD - Application repo with IDPF-Structured/Agile
**Separate (Uses IDPF-Testing):**
| Type | Framework | Rationale |
|------|-----------|-----------|
| QA Automation | IDPF-QA-Automation | Independent codebase |
| Performance | IDPF-Performance | Specialized tooling |
| Security | IDPF-Security | Compliance, vuln tracking |
| Chaos | IDPF-Chaos | Separate from deployment |
| Contract | IDPF-Contract-Testing | Cross-repo coordination |
| Accessibility | IDPF-Accessibility | Flexible: Embedded OR Separate |
### Workflow Phases
PLAN → DESIGN → DEVELOP → EXECUTE → REPORT
### Commands
**Planning:** Test-Plan-Start, Test-Plan-Review, Coverage-Check
**Development:** Test-Dev-Start, Run-Tests, Generate-Report

## IDPF-QA-Automation Framework
**Revision:** 1 | **Extends:** IDPF-Testing-Core | **Type:** UI & E2E Test Automation
### Test Types
| Type | Scope | Time |
|------|-------|------|
| Smoke | Critical paths | < 5 min |
| Regression | Full coverage | 30-60 min |
| Cross-Browser | Compatibility | Varies |
| Mobile | Native/hybrid | Varies |
| Visual | UI appearance | 10-30 min |
| E2E | User journeys | 15-45 min |
### Tools
**Web:** Selenium (enterprise), Playwright (modern), Cypress (JS), WebDriverIO
**Mobile:** Appium (cross-platform), XCUITest (iOS), Espresso (Android), Detox (RN)
### Page Object Model
- One page object per page/screen
- Encapsulates locators
- Exposes meaningful actions
- Tests don't access locators directly
### Selector Priority
1. data-testid 2. ID 3. Name 4. ARIA 5. CSS Class

## IDPF-Performance Framework
**Revision:** 1 | **Extends:** IDPF-Testing-Core | **Type:** Performance Testing
### Test Types
| Type | Purpose | Duration | Pattern |
|------|---------|----------|---------|
| Load | Expected load | 15-60 min | Steady |
| Stress | Breaking point | Until failure | Ramping |
| Endurance | Memory leaks | 4-24 hours | Steady |
| Spike | Traffic bursts | 15-30 min | Spikes |
| Capacity | Max throughput | Varies | Incremental |
### Tools
| Tool | Language | Best For |
|------|----------|----------|
| k6 | JavaScript | Modern APIs, CI/CD |
| JMeter | Java/XML | Enterprise, GUI |
| Gatling | Scala/Java | High throughput |
| Locust | Python | Python teams |
| Artillery | JavaScript | Serverless |
### Key Metrics
| Metric | Good Value |
|--------|------------|
| p95 Response | < 500ms |
| p99 Response | < 1000ms |
| Error Rate | < 0.1% |
| Apdex | > 0.9 |

## IDPF-Security Framework
**Revision:** 1 | **Extends:** IDPF-Testing-Core | **Type:** Security Testing
### Testing Types
| Type | When | Tools |
|------|------|-------|
| SAST | Dev/CI | SonarQube, Semgrep, CodeQL |
| SCA | Dev/CI | Snyk, Dependabot |
| DAST | Staging | OWASP ZAP, Burp Suite |
| IAST | Testing | Contrast Security |
| Secret Scanning | Dev/CI | GitLeaks, TruffleHog |
### Vulnerability SLAs
| Severity | CVSS | SLA |
|----------|------|-----|
| Critical | 9.0-10.0 | 24h |
| High | 7.0-8.9 | 7d |
| Medium | 4.0-6.9 | 30d |
| Low | 0.1-3.9 | 90d |
### CI/CD Gates
| Stage | Type | Gate |
|-------|------|------|
| Commit | SAST | No critical/high |
| Commit | Secret | No secrets |
| PR | SCA | No critical vulns |
| Pre-Deploy | DAST | No critical |

## IDPF-Accessibility Framework
**Revision:** 1 | **Extends:** IDPF-Testing-Core | **Type:** Accessibility Testing
### Repository Type: Flexible
**Embedded:** Automated a11y checks in CI (tests/a11y/)
**Separate:** Comprehensive audits, manual testing
### Testing Types
| Type | Automation | Coverage |
|------|------------|----------|
| Automated Scans | Full | ~30-40% |
| Keyboard | Partial | Focus management |
| Screen Reader | Manual | Content |
| Color Contrast | Full | Visual |
| Cognitive | Manual | Readability |
### WCAG Levels
| Level | Requirement |
|-------|-------------|
| A | Must meet |
| AA | Typically required (legal) |
| AAA | Aspirational |
**Target:** WCAG 2.1 Level AA
### Tools
**Scanning:** axe-core (CI), Lighthouse, Pa11y, WAVE
**AT:** NVDA, JAWS, VoiceOver, TalkBack

## IDPF-Chaos Framework
**Revision:** 1 | **Extends:** IDPF-Testing-Core | **Type:** Chaos Engineering
### Principles
1. Build Hypothesis 2. Real-World Events 3. Run in Production (safely) 4. Automate 5. Minimize Blast Radius
### Fault Types
| Category | Faults | Tools |
|----------|--------|-------|
| Infrastructure | Instance termination, AZ failure | Chaos Monkey, Gremlin, AWS FIS |
| Network | Latency, packet loss | tc, Toxiproxy |
| Application | Memory, CPU, disk | stress-ng, Gremlin |
| Dependency | Service unavailable | Toxiproxy |
| State | Database failure | Custom, Gremlin |
### Tools
| Tool | Platform | Best For |
|------|----------|----------|
| Chaos Monkey | AWS | Instance termination |
| Gremlin | Multi-cloud | Enterprise |
| LitmusChaos | K8s | K8s native |
| Chaos Mesh | K8s | K8s native |
| AWS FIS | AWS | AWS infra |
| Toxiproxy | Any | Network sim |
### Workflow
Hypothesis → Observability → Design → Approval → Execute → Analyze → Fix/Expand

## IDPF-Contract-Testing Framework
**Revision:** 1 | **Extends:** IDPF-Testing-Core | **Type:** API Contract Testing
### Flow
Consumer → Generate Contract → Publish to Broker → Provider Fetches → Verify → Can-I-Deploy → Deploy
### Tools
| Tool | Language | Best For |
|------|----------|----------|
| Pact | Multi | Most scenarios |
| Spring Cloud Contract | Java | Spring |
| Specmatic | Any | OpenAPI-based |
| Dredd | Any | API Blueprint |
### Key Concepts
| Concept | Description |
|---------|-------------|
| Consumer | Calls an API |
| Provider | Exposes an API |
| Contract | Request/response agreement |
| Broker | Central repository |
| Can-I-Deploy | Deployment safety check |
| Provider State | Precondition setup |
