# Framework Transitions Reference
**Version:** 1.0.0
## Workflow Diagrams
**Primary Development Path:**
```
VIBE ──► STRUCTURED ──► LTS
  │          ↑↓
  └────► AGILE ────────► LTS
```
**Invalid Transitions:**
```
STRUCTURED ──✗──► VIBE
AGILE ──────✗──► VIBE
LTS ────────✗──► ANY
```
Rationale: Quality standards never decrease. LTS is terminal.

## Valid Transitions
| From | To | When |
|------|-----|------|
| Vibe | Structured | Fixed scope emerged, solo/small team, linear development |
| Vibe | Agile | Large feature set, need sprints, team collaboration |
| Structured | Agile | Scope expanded, need iterative delivery, stakeholder feedback |
| Agile | Structured | Scope narrowed, solo developer, sprint overhead not justified |
| Structured | LTS | Production ready, maintenance mode, bugs only |
| Agile | LTS | Final sprint complete, production ready, backlog frozen |

## Transition Principles
### Always Preserved
- Code, tests, Git history
- TDD methodology (RED-GREEN-REFACTOR)
- Testing framework and suite
- Architecture decisions
- Dependencies and configs

### What Changes
- Documentation format (Requirements ↔ User Stories ↔ Bug Triage)
- Workflow structure (Linear ↔ Sprints ↔ Maintenance)
- Planning granularity (Features ↔ Stories ↔ Patches)
- Progress tracking (Completion ↔ Velocity ↔ Regression Prevention)

### Best Practices
1. Complete current work unit first
2. Ensure all tests pass (100% green)
3. Commit all WIP
4. Create transition documentation
5. Archive old workflow artifacts
6. Generate new framework artifacts
7. Communicate to stakeholders

## Framework-Specific Transitions
### Structured → Agile
**Preserves:** Code, tests, Git history, TDD
**Changes:** Requirements → User Stories, Linear → Sprints, Add velocity tracking

### Structured → LTS
**Preserves:** Code, tests, documentation, TDD for bug fixes
**Changes:** New features forbidden, Requirements → Bug triage, Active dev → Maintenance

### Agile → Structured
**Preserves:** Code, tests, Git history, TDD, acceptance criteria
**Changes:** User Stories → Requirements, Sprints → Linear, Remove backlog overhead

### Agile → LTS
**Preserves:** Code, tests, documentation, TDD for bug fixes
**Changes:** User Stories → Bug reports, Sprint Planning → LTS triage, No new features

### LTS Transitions
**LTS is Terminal State:**
- No transitions FROM LTS to any framework
- Continues until EOL, then archived
- New development requires new major version (separate repo/branch)

## Simultaneous Framework Usage
### Valid Hybrid Scenarios
**Backend (Structured) + Frontend (Agile):**
- Backend API with fixed contract: IDPF-Structured
- Frontend UI with evolving features: IDPF-Agile
- Separate requirements docs and backlogs per concern

**Core Platform (LTS) + Extensions (Agile):**
- Core platform in maintenance: IDPF-LTS
- Plugin/extension development: IDPF-Agile
- Separate repositories or branches

**Production (LTS) + Next Version (Vibe/Agile):**
- v2.x in LTS maintenance
- v3.x in Vibe exploration or Agile sprints
- Completely separate codebases

### Guidelines for Hybrid Usage
- Document which framework governs which concern
- Separate documentation for each framework scope
- Clear boundaries between framework contexts
- Never mix frameworks for same concern/feature

## Framework Integration Architecture
### Dependency Hierarchy
```
System Instructions (WHO + EXPERTISE)
    ↓
Framework Selection (WHAT process)
    ↓
Skills (TOOLS)
    ↓
Assistant Guidelines (HOW WELL)
```

## Selection Criteria
| Use Case | Framework |
|----------|-----------|
| Fixed requirements, clear scope | IDPF-Structured |
| Evolving requirements, large scope | IDPF-Agile |
| Unclear requirements, exploration | IDPF-Vibe |
| Production maintenance | IDPF-LTS |
| Separate test repository | IDPF-Testing-Core |

## Common Elements
**TDD:** All frameworks use RED-GREEN-REFACTOR cycles
**Claude Code:** Single code block format, numbered STEP, complete runnable code
**Context:** Full awareness of previous steps, cumulative context
**Git:** GitFlow, GitHub Flow, trunk-based, Conventional Commits
