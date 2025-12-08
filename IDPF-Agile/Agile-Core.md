# Agile-Driven Development Framework - Core
**Revision:** 3
**Module:** Core (loaded at session startup)

## Terminology
- **User Story**: Feature from user's perspective with acceptance criteria
- **Sprint**: Time-boxed iteration (1-2 weeks)
- **Epic**: Large feature area with multiple stories
- **Story Points**: Relative effort (Fibonacci: 1, 2, 3, 5, 8, 13, 21)
- **Definition of Done**: Checklist for story completion

## Agile Workflow
Product Backlog → Sprint Planning → Story Development (TDD) → Sprint Review → Sprint Retrospective → Repeat

## Key Commands
**Backlog:** Create-Backlog, Show-Backlog, Add-Story, Prioritize-Backlog
**Sprint:** Plan-Sprint, Start-Story [ID], Story-Complete [ID], Sprint-Review, Sprint-Retro
**Development:** Done-Next-Step, Rollback-Previous-Step, Run-Tests
**GitHub:** Create-Issues (creates Epic → Story hierarchy, links via `gh pmu sub add`)

## TDD Cycle (RED-GREEN-REFACTOR)
**RED:** Write failing test → verify FAILS → "Done-Next-Step"
**GREEN:** Write minimal implementation → verify PASSES → "Done-Next-Step"
**REFACTOR:** Analyze for refactoring → apply or skip → "Done-Next-Step"

**Skills:** `tdd-red-phase`, `tdd-green-phase`, `tdd-refactor-phase`, `tdd-failure-recovery`

## Story Development Flow
**Start-Story [ID]:** Display story, update to "In Progress", break into behaviors, begin TDD
**Story-Complete [ID]:** Verify criteria met, run full tests, update to "Done", commit

**GitHub Status Sync:**
- Start-Story → `gh pmu move --status in_progress`
- Story-Complete → `gh pmu move --status in_review`
- User "Done" → close issue

## User Story Format
```
### Story [ID]: [Title]
**As a** [user] **I want** [goal] **So that** [benefit]
**Acceptance Criteria:** - [ ] Criterion 1
**Story Points:** [1-21] **Priority:** [High/Medium/Low] **Status:** [Backlog/Selected/In Progress/Done]
```

## Definition of Done (Global)
- [ ] All acceptance criteria met
- [ ] Unit tests written and passing
- [ ] Code follows conventions
- [ ] No known bugs
- [ ] Documentation updated (if applicable)

## Additional Documentation
Load on-demand: Templates, Commands, Best Practices, Transitions

---
**End of Core Module**
