# Framework Development Reference
**Version:** v0.17.0
**Purpose:** Detailed reference for IDPF development frameworks

---

## IDPF-PRD (Pre-Development)
**Location:** `IDPF-PRD/IDPF-PRD.md` | **Type:** Requirements Engineering

**Auto-Template Selection:**
| Framework | Template |
|-----------|----------|
| IDPF-Structured | PRD-Structured-Moderate |
| IDPF-Agile | PRD-Agile-Lightweight |

**Forward Path:** Discovery → Elicitation → Specification → Generation
**Reverse Path:** Analyze → Extract → Refine → Generate

**Commands:**
- Forward: PRD-Start, PRD-Status, PRD-Next, Generate-PRD, Export-PRD
- Reverse: Reverse-PRD-Start, Reverse-PRD-Analyze, Reverse-PRD-Extract

**Handoff:** PRD → Structured (REQ-IDs) | PRD → Agile (Epics/Stories) | Skip → Vibe

---

## IDPF-Structured
**Location:** `IDPF-Structured/Interactive Development Process Framework.md`
**Type:** TDD with Fixed Requirements

**Terminology:**
- ASSISTANT: Claude AI in chat
- Claude Code: Execution tool
- User: Human bridging both

**Workflow:** Session Init → TDD Iterations → Completion

**TDD Cycle:**
- RED: Write failing test, verify failure
- GREEN: Minimal implementation to pass
- REFACTOR: Improve while green

**Critical Requirements:**
- Single code block format (numbered STEP)
- Complete, runnable code (no placeholders)
- Exact file paths and verification

**Commands:** Done-Next-Step, Rollback-Previous-Step, Push-Changes, Final-Commit-Create-PR, Double-Check, Create-Requirements

**TDD Skills:** tdd-red-phase, tdd-green-phase, tdd-refactor-phase, tdd-failure-recovery, test-writing-patterns

**When to Use:** Fixed requirements, clear scope, solo/small team

---

## IDPF-Agile
**Location:** `IDPF-Agile/Agile-Driven Development Framework.md`
**Type:** Sprint-Based Development

**Terminology:**
- Product Backlog: All stories
- Sprint Backlog: Current sprint stories
- Story Points: Fibonacci (1,2,3,5,8,13,21)
- Velocity: Points per sprint

**Workflow:** Backlog Creation → Sprint Planning → Story Development (TDD) → Review → Retrospective

**User Story Format:**
```
As a [user type] I want [goal] So that [benefit]
Acceptance Criteria: - [ ] ...
Story Points: [n] | Priority: [H/M/L] | Status: [...]
```

**Commands:**
- Backlog: Create-Backlog, Add-Story, Refine-Story, Split-Story
- Sprint: Plan-Sprint, Start-Story, Story-Complete, Sprint-Retro
- Dev: Done-Next-Step, Rollback-Previous-Step, Run-Tests
- Release: Open-Release, Prepare-Release, Close-Release

**When to Use:** Evolving requirements, iterative delivery, velocity tracking

---

## IDPF-Vibe
**Location:** `IDPF-Vibe/` | **Core Rev:** 4.0

**Architecture:**
- Core: Platform-agnostic workflow
- Platforms: Desktop, Mobile, Web, Game, Embedded, Newbie

**Three-Phase Workflow:**

**Phase 1 (Vibe):** Exploratory, no formal requirements
- Commands: Vibe-Start, Try-This, Show-Me, That-Works, Undo-That, Run-It

**Phase 2 (Evolution):** User says "Ready-to-Structure"
- Option 1 → Structured: Fixed scope, generates PRD
- Option 2 → Agile: Large feature set, generates backlog

**Phase 3 (Structured):** TDD with chosen framework

**Platform Coverage:**
| Platform | Technologies |
|----------|-------------|
| Desktop | Python, Ruby, Node/Electron, C#, Rust |
| Mobile | Swift, Kotlin, React Native, Flutter |
| Web | React, Vue, Express, Flask, Django |
| Game | Godot, Unity, Unreal, Phaser |
| Embedded | Arduino, ESP32, STM32, Wokwi, QEMU |
| Newbie | Flask/Sinatra, vanilla HTML/CSS/JS, SQLite |

---

## IDPF-LTS
**Location:** `IDPF-LTS/Long-Term-Support-Framework.md`
**Type:** Production Maintenance (Terminal)

**Core Tenets:**
1. Stability First
2. Minimal Change
3. No New Features
4. Backwards Compatibility
5. Comprehensive Testing
6. Risk Assessment
7. Clear Documentation

**Allowed:** Critical bugs, security patches, documentation fixes
**Forbidden:** New features, refactoring, dependency upgrades, breaking changes

**Five-Phase Workflow:**
1. Triage: Classify severity (P0-P4), determine eligibility
2. Impact Assessment: Reproduce, root cause, risk evaluation
3. Fix Development: TDD (RED-GREEN), minimal fix
4. Regression Prevention: Full test suite, validation
5. Documentation & Release: CHANGELOG, notes, patch version

**Severity:**
- P0: Data loss, security, system failure
- P1: Core broken, no workaround
- P2: Significant impact, workaround exists
- P3: Minor impact
- P4: Trivial

**Commands:** LTS-Triage, LTS-Investigate, LTS-Fix, LTS-Regression-Check, LTS-Hotfix, LTS-Release

---

**End of Framework Development Reference**
