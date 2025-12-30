# Framework Summary
**Version:** v0.17.1
**Purpose:** Compact startup reference for framework developers

---

## Quick Reference

| Component | Count | Location |
|-----------|-------|----------|
| Development Frameworks | 4 | IDPF-Structured, IDPF-Agile, IDPF-Vibe (7 variants), IDPF-LTS |
| Testing Frameworks | 7 | IDPF-Testing-Core + 6 specialized |
| Domain Specialists | 23 | 12 Base + 10 Pack + 1 PRD |
| Core Instructions | 2 | Core-Developer-Instructions + Domain-Selection-Guide |
| Skills | 21 | Skills/ |
| Assistant Guidelines | 4 | Assistant/ |

---

## Current Versions

### Development Frameworks
| Framework | Rev | Type |
|-----------|-----|------|
| IDPF-PRD | 3 | Requirements Engineering |
| IDPF-Structured | 9 | TDD with Fixed Requirements |
| IDPF-Agile | 3 | Sprint-Based Development |
| IDPF-Vibe (Core) | 4.0 | Exploratory → Structured |
| IDPF-LTS | 1 | Production Maintenance |

### Testing Frameworks
| Framework | Rev | Extends |
|-----------|-----|---------|
| IDPF-Testing-Core | 1 | (Foundation) |
| IDPF-QA-Automation | 1 | Testing-Core |
| IDPF-Performance | 1 | Testing-Core |
| IDPF-Security | 1 | Testing-Core |
| IDPF-Accessibility | 1 | Testing-Core |
| IDPF-Chaos | 1 | Testing-Core |
| IDPF-Contract-Testing | 1 | Testing-Core |

### Skills Registry
| Skill | Category |
|-------|----------|
| tdd-red-phase, tdd-green-phase, tdd-refactor-phase, tdd-failure-recovery, test-writing-patterns | TDD |
| bdd-writing | BDD |
| extract-prd | PRD |
| anti-pattern-analysis, uml-generation | Code Quality |
| flask-setup, sinatra-setup | Beginner Setup |
| common-errors, sqlite-integration, beginner-testing | Beginner Support |
| postgresql-integration, migration-patterns | Database |
| property-based-testing, mutation-testing | Advanced Testing |
| api-versioning, error-handling-patterns | Architecture |
| ci-cd-pipeline-design | DevOps |

---

## Framework Selection

| Project Type | Start | Evolution |
|--------------|-------|-----------|
| Fixed requirements | IDPF-Structured | → LTS |
| Evolving requirements | IDPF-Agile | → LTS |
| Exploration needed | IDPF-Vibe | → Structured/Agile |
| Production maintenance | IDPF-LTS | Terminal |
| Separate test repo | IDPF-Testing-Core | Use Structured/Agile |

---

## Core Principle

**System Instructions** = WHO (identity/expertise)
**Frameworks** = WHAT (process)
**Skills** = TOOLS (capabilities)
**Guidelines** = HOW WELL (quality)

---

## Valid Transitions

```
VIBE ──► STRUCTURED ──► LTS
  │          ↑↓
  └────► AGILE ────────► LTS
```

**Invalid:** Structured/Agile → Vibe, LTS → Any

---

## Detailed Documentation

| File | Content |
|------|---------|
| Framework-Development.md | IDPF details |
| Framework-Testing.md | Testing frameworks |
| Framework-System-Instructions.md | Core + Specialists |
| Framework-Skills.md | All skills |
| Framework-Transitions.md | Transition matrix |
| Framework-Overview.md | Complete reference |

---

**End of Framework Summary**
