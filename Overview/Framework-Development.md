# Framework Development Reference
**Version:** 1.0.0
## IDPF-PRD Framework (Pre-Development)
**Location:** `IDPF-PRD/IDPF-PRD.md` | **Revision:** 3 | **Type:** Requirements Engineering
### Purpose
Transform ideas into implementation-ready PRDs through AI-assisted elicitation. Pre-development phase feeding into IDPF-Structured or IDPF-Agile.
### Auto Template Selection (Rev 3)
| Framework | Auto-Selected Template |
|-----------|------------------------|
| IDPF-Structured | PRD-Structured-Moderate |
| IDPF-Agile | PRD-Agile-Lightweight |
Override: `Use-Template [name]`
### Workflow Phases
**Forward Path:** Discovery → Elicitation → Specification → Generation
**Reverse Path:** Analyze → Extract → Refine → Generate
### Key Resources
**Templates:** Discovery-Worksheet, Elicitation-Worksheet, Specification-Worksheet, Generation-Checklist
**Guides:** Domain-Analysis, NFR-Catalog, Stakeholder-Mapping, Template-Selection, Extraction-Guide
### Commands
**Forward:** PRD-Start, PRD-Status, PRD-Next, PRD-Back, Discovery-Complete, Elicitation-Complete, Specification-Complete, Generate-PRD, Export-PRD
**Reverse:** Reverse-PRD-Start, Reverse-PRD-Analyze, Reverse-PRD-Extract, Reverse-PRD-Refine, Reverse-PRD-Status
### Handoff
- PRD → IDPF-Structured: Fixed requirements with REQ-IDs
- PRD → IDPF-Agile: Features mapped to Epics/Stories
- Skip PRD → IDPF-Vibe: Exploratory projects

## IDPF-Structured Framework
**Location:** `IDPF-Structured/Interactive Development Process Framework.md` | **Revision:** 9 | **Type:** TDD with Fixed Requirements
### Purpose
Execute software development with well-defined requirements using strict TDD methodology and Claude Code integration.
### Key Components
**Terminology:** ASSISTANT (Claude AI), Claude Code (execution tool), User (human), Requirements (spec doc), Session (conversation), Git Diff (state analysis)
**Workflow:** Session Initialization → TDD Iterations (RED-GREEN-REFACTOR) → Completion
**TDD Cycle:** RED (write failing test) → GREEN (implement to pass) → REFACTOR (improve quality)
**Critical Requirements:** Single code block, numbered STEP format, complete runnable code, exact paths, full test suite at milestones
### Commands
**Development:** List-Commands, Done-Next-Step, Rollback-Previous-Step, Push-Changes, Final-Commit-Create-PR, Roadblock-Stop, Update-Requirements, Double-Check, Review-Last
**GitHub Issues:** Create-Issues, Create-Issues-Structured
### When to Use
- Fixed, well-defined requirements
- Small to medium projects
- Single feature/component
- TDD rigor without sprint overhead
- Solo/small team

## IDPF-Agile Framework
**Location:** `IDPF-Agile/Agile-Driven Development Framework.md` | **Revision:** 3 | **Type:** Sprint-Based Development
### Purpose
Implement agile methodology with AI assistance, organizing work around user stories, sprints, and continuous iteration.
### Key Components
**Terminology:** Product Backlog, Sprint Backlog, User Story, Story Points (Fibonacci), Sprint, Epic, DoD, Velocity
**Workflow:** Product Backlog Creation → Sprint Planning → Story Development (TDD) → Sprint Review → Sprint Retrospective
**User Story Format:**
```
As a [user type] I want [goal] So that [benefit]
Acceptance Criteria: - [ ] Criterion
Story Points: [estimate] | Priority: [H/M/L] | Status: [state]
```
### Commands
**Backlog:** Create-Backlog, Show-Backlog, Add-Story, Refine-Story, Estimate-Story, Prioritize-Backlog, Split-Story, Create-Issues-Agile
**Sprint:** Plan-Sprint, Show-Sprint, Start-Story, Story-Complete, Sprint-Progress, Sprint-Review, Sprint-Retro, End-Sprint
**Development:** Done-Next-Step, Rollback-Previous-Step, Run-Tests, Show-Coverage, Refactor-Now
**Project:** Project-Status, Velocity-Report, Push-Changes, Create-Release, Project-Complete
### When to Use
- Evolving requirements
- Iterative delivery with feedback
- Feature prioritization needed
- Medium to large projects
- Velocity tracking needed

## IDPF-Vibe Framework
**Location:** `IDPF-Vibe/` | **Core Revision:** 4.0 | **Type:** Exploratory → Structured Evolution
### Purpose
Enable exploratory development without formal requirements, then evolve into structured TDD (Structured or Agile) when direction crystallizes.
### Architecture
**Core:** Vibe-to-Structured-Core-Framework.md (Rev 4.0)
**Platform-Specific:** Desktop (Rev 2), Mobile (Rev 3), Web (Rev 2), Game (Rev 1), Embedded (Rev 1), Newbie (Rev 1)
### Three-Phase Workflow
**Phase 1: VIBE** - Exploratory, rapid iteration, no formal requirements
**Commands:** Vibe-Start, Try-This, Show-Me, That-Works, Undo-That, Run-It, Vibe-Status, Vibe-End, Ready-to-Structure, Vibe-Abandon
**Phase 2: EVOLUTION POINT** - Triggered by "Ready-to-Structure"
- Option 1: Evolve to IDPF-Structured (fixed scope, solo/small team)
- Option 2: Evolve to IDPF-Agile (large features, sprints, team)
**Phase 3: STRUCTURED** - Switch to chosen framework, TDD for all new work
### Platform Coverage
| Platform | Technologies |
|----------|--------------|
| Desktop | Python, Ruby, JS (Node/Electron), C#, Rust |
| Mobile | iOS (Swift), Android (Kotlin), React Native, Flutter |
| Web | React, Vue, Svelte, Node.js, Python, Ruby |
| Game | Godot, Unity, Unreal, Phaser, PixiJS |
| Embedded | Arduino, ESP32, STM32, FreeRTOS, Zephyr |
| Newbie | Flask, Sinatra, SQLite (with Skills) |
### When to Use
- Unclear requirements
- Need exploration first
- Prototyping
- Requirements emerge from experimentation

## IDPF-LTS Framework
**Location:** `IDPF-LTS/Long-Term-Support-Framework.md` | **Revision:** 1 | **Type:** Production Maintenance
### Purpose
Structured approach for maintaining LTS versions with emphasis on stability, minimal risk, comprehensive testing, backwards compatibility.
### LTS Principles
1. Stability First 2. Minimal Change 3. No New Features 4. Backwards Compatibility 5. Comprehensive Testing 6. Risk Assessment 7. Clear Documentation
**What Goes Into LTS:** Critical bugs, high-priority bugs, security patches, documentation fixes
**What Does NOT:** New features, refactoring, dependency upgrades (unless security), breaking changes, performance improvements
### Five-Phase Workflow
Bug Report Triage → Impact Assessment → Fix Development (TDD) → Regression Prevention → Documentation & Release
### Commands
**Triage:** LTS-Triage, LTS-Investigate
**Fix:** LTS-Fix, LTS-Regression-Check
**Release:** LTS-Document, LTS-Release
**Emergency:** LTS-Hotfix
**General:** List-LTS-Commands, LTS-Status
### Severity Classification
- P0 (Critical): Data loss, security, system failure - 24h
- P1 (High): Core broken, no workaround - 7d
- P2 (Medium): Significant, workaround exists - 30d
- P3 (Low): Minor, cosmetic - 90d
- P4 (Trivial): Nice-to-have
### When to Use
- Project in production, maintenance mode
- Only critical bugs and security patches
- Stability paramount
- No new features
