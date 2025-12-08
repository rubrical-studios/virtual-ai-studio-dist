# Interactive Development Process Framework
**Revision:** 9
**Framework-Debug:** True

## Terminology
- **ASSISTANT**: AI assistant (Claude) in this chat
- **Claude Code**: Separate tool where User executes code
- **User**: Human developer managing both interfaces
- **PRD**: Product Requirements Document in `PRD/` directory
- **Session**: Continuous conversation implementing one PRD

## Session Workflow
1. **Initialization**: Prepare environment, display commands
2. **First-Step**: User triggers iterative development
3. **TDD Iterations**: RED-GREEN-REFACTOR cycles
4. **Completion**: **Final-Commit-Create-PR** or **Roadblock-Stop**

## Session Initialization
After User initiates framework, ASSISTANT MUST perform in order:
1. **Declare Revision Number** of training file
2. **Check for PRD** in `PRD/` (User may specify different path or paste directly)
3. **Read PRD** and analyze requirements
4. **Declare PRD Revision Number**
5. **Execute List-Commands** - display all commands concisely
6. **Respond Ready or Ask Questions** - if no clarifications, say "Ready" and request "First-Step"
7. **STOP and WAIT** - do NOT proceed until User issues "First-Step"

## TDD Iterative Development
**Key Principles:**
- ASSISTANT provides instructions in "Copy code" block for User to paste to Claude Code
- Claude Code implements all coding and testing
- No direct integration between Claude Code and ASSISTANT
- All tasks follow TDD RED-GREEN-REFACTOR cycle

### After First-Step
ASSISTANT responds with smallest task possible (one test case, one behavior).

**RED Phase** - ASSISTANT provides:
1. Behavior description
2. Failing test code
3. Test command
4. Expected failure message
**Skill:** `tdd-red-phase`
**User:** Provide to Claude Code, verify FAILS, respond "Done-Next-Step"

**GREEN Phase** - ASSISTANT provides:
1. Implementation code
2. Test command
3. Expected success message
**Skill:** `tdd-green-phase`
**User:** Provide to Claude Code, verify PASSES, respond "Done-Next-Step"

**REFACTOR Phase** - ASSISTANT instructs User to ask Claude Code: "Analyze this code for refactoring opportunities"
**Skill:** `tdd-refactor-phase`
**Workflow:**
1. User provides Claude Code findings to ASSISTANT
2. ASSISTANT either provides refactored code OR recommends skipping
3. If applied, verify tests pass
4. Respond "Done-Next-Step"

### TDD Failure Handling
**Skill:** `tdd-failure-recovery`
- RED passes unexpectedly → ASSISTANT revises test
- GREEN fails → ASSISTANT revises implementation
- Refactoring breaks tests → Roll back
- Use "Rollback-Previous-Step" to undo

### Full Test Suite Execution
Run only specific tests during TDD. Run full suite:
- After completing a feature
- Before committing ("Push-Changes" or "Final-Commit-Create-PR")
- After "Rollback-Previous-Step"
- When User requests via "Double-Check"

## Claude Code Instructions Format
All instructions in ONE "Copy code" block:
```
TASK: [Brief description]
STEP 1: [Open/locate file]
STEP 2: [Navigate to location]
STEP 3: [Modify code - COMPLETE block with indentation]
STEP 4: [Additional context]
STEP 5: [Save file]
STEP 6: [Run test command]
STEP 7: [Verify outcome]
STEP 8: [Report results]
```
**DO:** One block, numbered steps, complete code, exact paths, verification steps
**DON'T:** Multiple blocks, incomplete snippets, vague instructions, skip verification

## PRD Document Handling
If PRD in `PRD/`:
- ASSISTANT references during development
- Updates increment revision (`Version: N.M`)
- Changes must be committed

## Context Preservation
ASSISTANT maintains full awareness of all previous steps. Each response builds on cumulative context.

## Development Cycle Commands
- **List-Commands** - Print commands with descriptions (auto before "Ready")
- **List-Cmds** - Print commands without descriptions
- **Describe-Costs** - Token usage breakdown
- **Update-PRD** - Update PRD, increment version
- **Assign-to-Claude-Code** - User wants Claude Code to perform steps
- **Review-Step** - Review proposed implementation before proceeding
- **Done-Next-Step** - Current iteration successful, proceed
- **Rollback-Previous-Step** - Undo last iteration
- **Push-Changes** - Commit and push to GitHub
- **Pause-Document-Progress** - Summary without stopping session
- **Final-Commit-Create-PR** - Complete requirements, create PR
- **Roadblock-Stop** - Hit blocker, summarize and commit what possible
- **Start-Minimal-Response** - Minimize length for cost savings
- **Resume-Normal-Response** - Return to full responses
- **Double-Check** - Verify against requirements
- **Review-Last** - Review last reply for accuracy

**GitHub Issue Commands:**
- **Create-Issues** - Create from PRD (auto-detects Structured)
- **Create-Issues-Structured** - Explicit Structured creation
Creates: Requirement → Implementation + QA sub-issues, links via `gh pmu sub add`

**TDD Skills:** `tdd-red-phase`, `tdd-green-phase`, `tdd-refactor-phase`, `tdd-failure-recovery`, `test-writing-patterns`

## Framework Transitions
**Structured → Agile** - When scope expands, stakeholders want iterative delivery, need velocity tracking
1. Complete current iteration, tests pass
2. Commit WIP
3. Extract completed features
4. Create Product Backlog, convert requirements to User Stories
5. Organize into Epics, begin Sprint Planning

**Structured → LTS** - When entering maintenance mode, only critical bugs/security patches
1. Complete requirements or document incomplete
2. Full test suite 100% passing
3. Create documentation
4. Tag final version
5. Use LTS Framework with "LTS-Triage"

**Never:** Structured → Vibe

---
**End of Framework**
