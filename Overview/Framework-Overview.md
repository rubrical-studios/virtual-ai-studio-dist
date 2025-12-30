# Framework Overview
**Version:** 0.17.1
**Purpose:** Comprehensive reference for AI assistants and framework development

---

## Core Principle
**System Instructions** = WHO (identity/expertise)
**Frameworks** = WHAT (process)
**Skills** = TOOLS (capabilities)
**Guidelines** = HOW WELL (quality)

---

## IDPF-PRD (Pre-Development)
**Location:** `IDPF-PRD/IDPF-PRD.md` | **Type:** Requirements Engineering

**Forward Path:** Discovery → Elicitation → Specification → Generation
**Reverse Path:** Analyze → Extract → Refine → Generate

**Commands:** PRD-Start, PRD-Status, PRD-Next, Generate-PRD, Reverse-PRD-Start
**Handoff:** PRD → Structured (REQ-IDs) | PRD → Agile (Epics/Stories) | Skip → Vibe

---

## IDPF-Structured
**Location:** `IDPF-Structured/Interactive Development Process Framework.md`
**Type:** TDD with Fixed Requirements

**Workflow:** Session Init → TDD Iterations (RED-GREEN-REFACTOR) → Completion
**Commands:** Done-Next-Step, Rollback-Previous-Step, Push-Changes, Final-Commit-Create-PR, Double-Check

**When to Use:** Fixed requirements, small-medium projects, solo/small team, TDD without sprint overhead

---

## IDPF-Agile
**Location:** `IDPF-Agile/Agile-Driven Development Framework.md`
**Type:** Sprint-Based Development

**Workflow:** Backlog Creation → Sprint Planning → Story Development (TDD) → Review → Retrospective
**Commands:** Create-Backlog, Plan-Sprint, Start-Story, Story-Complete, Sprint-Retro, Velocity-Report

**When to Use:** Evolving requirements, iterative delivery, feature prioritization, velocity tracking

---

## IDPF-Vibe
**Location:** `IDPF-Vibe/` | **Core Rev:** 4.0 | **Type:** Exploratory → Structured Evolution

**Platforms:** Desktop, Mobile, Web, Game, Embedded, Newbie (7 variants)

**Phase 1 (Vibe):** Exploratory, no formal requirements
**Phase 2 (Evolution):** Ready-to-Structure → Choose Structured or Agile
**Phase 3 (Structured):** TDD with chosen framework

**Commands:** Vibe-Start, Try-This, That-Works, Run-It, Ready-to-Structure

---

## IDPF-LTS
**Location:** `IDPF-LTS/Long-Term-Support-Framework.md`
**Type:** Production Maintenance (Terminal State)

**Principles:** Stability First, Minimal Change, No New Features, Backwards Compatibility
**Allowed:** Critical bugs, security patches, documentation fixes
**Forbidden:** New features, refactoring, dependency upgrades, breaking changes

**Workflow:** Triage → Impact Assessment → Fix (TDD) → Regression Prevention → Release

---

## Testing Frameworks

```
IDPF-Testing-Core (foundation)
├── IDPF-QA-Automation (Selenium, Playwright, Cypress, Appium)
├── IDPF-Performance (k6, JMeter, Gatling, Locust)
├── IDPF-Security (OWASP ZAP, SAST/DAST, SCA)
├── IDPF-Accessibility (axe, Lighthouse, WCAG)
├── IDPF-Chaos (Chaos Monkey, Gremlin, LitmusChaos)
└── IDPF-Contract-Testing (Pact, Spring Cloud Contract)
```

**Separate repos** use Testing frameworks; **Embedded tests** use Structured/Agile

---

## System Instructions

**Architecture:** Core + Domain Specialization
- **Core-Developer-Instructions.md:** Universal competencies
- **23 Domain Specialists:** Backend, Frontend, DevOps, Database, API-Integration, Security, Platform, Mobile, Data, QA-Test, Cloud-Architect, SRE, Embedded, ML, Performance, PRD-Analyst, Accessibility, Full-Stack, Desktop-App, Game, Graphics, Systems-Programmer, Technical-Writer
- **Vibe Agents:** Core + 6 platform-specific

**Loading:** Core first, then Domain specialist(s)

---

## Skills (21 Total)

| Category | Skills |
|----------|--------|
| TDD | tdd-red-phase, tdd-green-phase, tdd-refactor-phase, tdd-failure-recovery, test-writing-patterns |
| BDD | bdd-writing |
| PRD | extract-prd |
| Code Quality | anti-pattern-analysis, uml-generation |
| Beginner Setup | flask-setup, sinatra-setup |
| Beginner Support | common-errors, sqlite-integration, beginner-testing |
| Database | postgresql-integration, migration-patterns |
| Advanced Testing | property-based-testing, mutation-testing |
| Architecture | api-versioning, error-handling-patterns |
| DevOps | ci-cd-pipeline-design |

---

## Framework Transitions

**Valid:**
```
VIBE ──► STRUCTURED ──► LTS
  │          ↑↓
  └────► AGILE ────────► LTS
```

**Invalid:** Structured/Agile → Vibe, LTS → Any

| From | To | When |
|------|----|------|
| Vibe | Structured | Fixed scope, solo/small team |
| Vibe | Agile | Large feature set, sprints needed |
| Structured | Agile | Scope expanded, iterative delivery |
| Agile | Structured | Scope narrowed, sprint overhead not justified |
| Structured/Agile | LTS | Production ready, maintenance mode |

---

## Selection Matrix

| Project Type | Framework | Evolution |
|--------------|-----------|-----------|
| Fixed requirements | IDPF-Structured | → LTS |
| Evolving requirements | IDPF-Agile | → LTS |
| Exploration needed | IDPF-Vibe | → Structured/Agile |
| Production maintenance | IDPF-LTS | Terminal |
| Separate test repo | IDPF-Testing-Core | Use Structured/Agile |

---

**End of Framework Overview**
