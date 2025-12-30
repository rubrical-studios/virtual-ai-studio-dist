# Framework Transitions Reference
**Version:** v0.17.0
**Purpose:** Transition rules, diagrams, hybrid usage

---

## Transition Diagram
```
VIBE ──► STRUCTURED ──► LTS
  │          ↑↓
  └────► AGILE ────────► LTS
```

**Invalid:** Structured/Agile → Vibe, LTS → Any

---

## Valid Transitions

| From | To | When |
|------|----|------|
| Vibe | Structured | Fixed scope, solo/small team |
| Vibe | Agile | Large feature set, need sprints |
| Structured | Agile | Scope expanded, iterative delivery |
| Agile | Structured | Scope narrowed, sprint overhead not justified |
| Structured | LTS | Production ready, maintenance mode |
| Agile | LTS | Final sprint, backlog frozen |

---

## Transition Principles

**Preserved:**
- Code, tests, Git history
- TDD methodology
- Technical architecture
- Dependencies

**Changes:**
- Documentation format
- Workflow structure
- Planning granularity
- Progress tracking

**Best Practices:**
1. Complete current work
2. All tests green
3. Commit WIP
4. Create transition docs
5. Archive old artifacts
6. Generate new artifacts

---

## Invalid Transitions

| Invalid | Rationale |
|---------|-----------|
| Structured → Vibe | Defeats structured discipline |
| Agile → Vibe | Abandons testing discipline |
| LTS → Any | Terminal state |

**If new development needed from LTS:**
- Start new project (Vibe/Structured/Agile)
- Maintain LTS in parallel
- Plan migration path
- Archive LTS at EOL

---

## Specific Transitions

**Structured → Agile:**
- Requirements → User Stories
- Linear → Sprints
- Add velocity tracking

**Structured → LTS:**
- New features forbidden
- Requirements → Bug triage
- Active dev → Maintenance

**Agile → Structured:**
- User Stories → Requirements
- Sprints → Linear
- Remove backlog overhead

**Agile → LTS:**
- Stories → Bug reports
- Sprint Planning → LTS triage

---

## Hybrid Usage

**Valid Scenarios:**
- Backend (Structured) + Frontend (Agile)
- Core Platform (LTS) + Extensions (Agile)
- Production v2.x (LTS) + v3.x (Vibe/Agile)

**Guidelines:**
- Document framework per concern
- Separate documentation
- Clear boundaries
- Never mix for same concern

---

## Selection Matrix

| Project Type | Framework | Evolution |
|--------------|-----------|-----------|
| Fixed requirements | Structured | → LTS |
| Evolving requirements | Agile | → LTS |
| Exploration needed | Vibe | → Structured/Agile |
| Production maintenance | LTS | Terminal |
| Separate test repo | Testing-Core | Use Structured/Agile |

---

## Integration Architecture

```
System Instructions (WHO)
    ↓
Framework (WHAT)
    ↓
Skills (TOOLS)
    ↓
Guidelines (HOW WELL)
```

**Common Elements:**
- TDD: RED-GREEN-REFACTOR
- Claude Code: Single block, STEP format
- Context preservation
- Git workflows

---

**End of Framework Transitions Reference**
