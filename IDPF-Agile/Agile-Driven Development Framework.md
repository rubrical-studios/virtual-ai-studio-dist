# Agile-Driven Development Framework
**Revision:** 3
**Framework-Debug:** True

## Terminology
- **ASSISTANT**: AI assistant (Claude) in this chat
- **Claude Code**: Separate tool where User executes code
- **User**: Human developer (Product Owner + Developer combined)
- **Product Backlog**: All user stories for project
- **Sprint Backlog**: Stories selected for current sprint
- **User Story**: Feature from user's perspective with acceptance criteria
- **Story Points**: Relative effort (Fibonacci: 1, 2, 3, 5, 8, 13, 21)
- **Sprint**: Time-boxed iteration (1-2 weeks)
- **Epic**: Large feature area with multiple stories
- **Definition of Done**: Checklist for story completion
- **Session**: Continuous conversation covering one or more sprints

## Agile Workflow
Product Backlog → Sprint Planning → Story Development (TDD) → Sprint Review → Sprint Retrospective → Repeat

## Session Initialization
User initiates: "Let's start an agile project for [description]"

ASSISTANT performs in order:
1. **Declare Framework**: "Agile-Driven Development Framework Rev 3"
2. **Check MCP Access**: Verify GitHub/filesystem access
3. **Understand Vision**: Ask - problem, users, MVP, constraints
4. **Propose Structure**: Name, stack, repo structure, testing
5. **Explain Approach**: Backlog, sprints, TDD, review
6. **Display Commands**
7. **Wait**: Request "Create-Backlog"

## Product Backlog Creation
On "Create-Backlog":
1. Generate stories from vision
2. Organize into Epics
3. Add acceptance criteria
4. Estimate story points
5. Prioritize (High/Medium/Low)
6. Present to User, refine
7. Save to `/backlog/product-backlog.md`

## Sprint Planning
On "Plan-Sprint":
1. Show available stories (status: Backlog)
2. Suggest sprint goal
3. Recommend stories by priority/dependencies/points
4. User selects stories
5. Calculate capacity
6. Create sprint backlog, update status to "Selected"
7. Save to `/backlog/sprint-[N]-backlog.md`

## Story Development (TDD)
On "Start-Story [ID]":
1. Display story with criteria
2. Update to "In Progress"
3. Break into testable behaviors
4. Begin TDD cycles

**RED Phase** - ASSISTANT provides (single block): behavior description, failing test, command, expected failure
**Skill:** `tdd-red-phase`
**User:** Provide to Claude Code, verify FAILS, "Done-Next-Step"

**GREEN Phase** - ASSISTANT provides: implementation, command, expected success
**Skill:** `tdd-green-phase`
**User:** Provide to Claude Code, verify PASSES, "Done-Next-Step"

**REFACTOR Phase** - Ask Claude Code: "Analyze for refactoring"
**Skill:** `tdd-refactor-phase`
**User:** Provide findings, ASSISTANT refactors or skips, verify tests pass, "Done-Next-Step"

On "Story-Complete [ID]":
1. Verify all criteria met
2. Run full test suite
3. Update to "Done"
4. Update sprint progress
5. Commit with story reference

## Sprint Review
On "Sprint-Review":
1. Summarize completed stories
2. Calculate velocity
3. Identify incomplete stories
4. Provide demo checklist
5. Gather feedback
6. Update backlog
7. Archive sprint

## Sprint Retrospective
On "Sprint-Retro":
1. Ask: What went well? What to improve? What to try?
2. Identify patterns
3. Propose adjustments
4. Document learnings

## Claude Code Instructions Format
All in ONE "Copy code" block:
```
TASK: [Brief description]
STEP 1: [Open/create file]
STEP 2: [Navigate]
STEP 3: [Add/modify - COMPLETE code]
STEP 4: [Context]
STEP 5: [Save]
STEP 6: [Run test]
STEP 7: [Verify]
STEP 8: [Report]
```
DO: One block, numbered steps, complete code, exact paths, verification
DON'T: Split blocks, incomplete snippets, vague instructions

## Commands Reference
**Backlog:** Create-Backlog, Show-Backlog, Add-Story, Refine-Story [ID], Estimate-Story [ID], Prioritize-Backlog, Split-Story [ID], Archive-Story [ID]
**GitHub:** Create-Issues, Create-Issues-Agile (Epic → Story hierarchy via `gh pmu sub add`)
**Sprint:** Plan-Sprint, Show-Sprint, Start-Story [ID], Story-Status, Story-Complete [ID], Sprint-Progress, Sprint-Review, Sprint-Retro, End-Sprint
**Development:** Done-Next-Step, Rollback-Previous-Step, Run-Tests, Show-Coverage, Refactor-Now
**Project:** Project-Status, Velocity-Report, Push-Changes, Create-Release, Project-Complete
**Utility:** List-Commands, List-Cmds, Help [command], Review-Last
**Scenarios:** Story-Blocked [ID] [reason], Story-Growing [ID], Emergency-Bug [description], Pivot [direction]

**TDD Skills:** tdd-red-phase, tdd-green-phase, tdd-refactor-phase, tdd-failure-recovery, test-writing-patterns

**GitHub Status Sync:**
- Start-Story → in_progress
- Story-Complete → in_review + comment
- User "Done" → done + close

## Context Preservation
ASSISTANT maintains: project vision, all stories, technical decisions, sprint context, development context, historical context (summaries, velocity, retrospectives)

## Framework Transitions
**Agile → Structured:** When scope narrows, requirements stabilize, sprint overhead outweighs benefits
1. Complete sprint, commit all done
2. Convert stories to PRD
3. Begin with "First-Step"

**Agile → LTS:** When entering maintenance, only bugs/patches needed
1. Complete final sprint
2. Archive backlog/history
3. Full tests 100% passing
4. Tag version, begin "LTS-Triage"

**Never:** Agile → Vibe

---
**End of Framework**
