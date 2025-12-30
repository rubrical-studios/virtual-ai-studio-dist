# Interactive Development Process Framework
**Version:** v0.17.1
**Framework-Debug:** True

---

## Terminology
1. **ASSISTANT**: AI assistant (Claude) responding in chat
2. **Claude Code**: Separate tool for code execution
3. **User**: Human developer managing both interfaces
4. **PRD**: Product Requirements Document in `PRD/` directory
5. **Session**: Continuous conversation implementing one PRD

---

## Session Workflow
1. **Initialization**: Prepare environment, display commands
2. **First-Step**: User triggers iterative development
3. **TDD Iterations**: RED-GREEN-REFACTOR cycles
4. **Completion**: Final-Commit-Create-PR or Roadblock-Stop

---

## Session Initialization
After User initiates framework, ASSISTANT performs:
1. Declare Revision Number
2. Check for PRD in `PRD/` (or user-specified path)
3. Read and analyze PRD
4. Declare PRD Revision Number
5. Execute List-Commands
6. Respond Ready or ask clarifying questions
7. **STOP and WAIT** for "First-Step"

---

## TDD Iterative Development

### Key Principles
- ASSISTANT provides instructions in single "Copy code" block
- User provides instructions to Claude Code
- Claude Code implements and runs tests
- All tasks follow RED-GREEN-REFACTOR cycle

### RED Phase
ASSISTANT provides: behavior description, failing test code, test command, expected failure
**Skill:** `tdd-red-phase`
User Action: Run test, verify FAIL, respond "Done-Next-Step"

### GREEN Phase
ASSISTANT provides: implementation code, test command, expected success
**Skill:** `tdd-green-phase`
User Action: Run test, verify PASS, respond "Done-Next-Step"

### REFACTOR Phase
User asks Claude Code: "Analyze for refactoring opportunities"
**Skill:** `tdd-refactor-phase`
Options: Apply refactoring or skip → "Done-Next-Step"

### Failure Handling
**Skill:** `tdd-failure-recovery`
- RED passes unexpectedly → revise test
- GREEN fails → revise implementation
- Refactoring breaks tests → rollback
- Use "Rollback-Previous-Step" command

### Full Test Suite Execution
Run at: feature completion, before commit, after rollback, on "Double-Check"

---

## Claude Code Instructions Format
```
TASK: [Brief description]
STEP 1: [Open/locate file]
STEP 2: [Navigate to location]
STEP 3: [Modify code - COMPLETE block]
STEP 4: [Additional context]
STEP 5: [Save file]
STEP 6: [Run test command]
STEP 7: [Verify outcome]
STEP 8: [Report results]
```
**Critical:** One code block, numbered steps, complete code, exact file paths, verification steps

---

## Development Cycle Commands

**Core Commands:**
| Command | Description |
|---------|-------------|
| List-Commands | Show commands with descriptions |
| List-Cmds | Show commands without descriptions |
| Done-Next-Step | Current iteration successful, proceed |
| Rollback-Previous-Step | Undo last iteration |
| Push-Changes | Commit and push to GitHub |
| Final-Commit-Create-PR | Complete requirements, create PR |
| Roadblock-Stop | Hit blocker, document and push |
| Double-Check | Verify against requirements |
| Review-Last | Verify accuracy of last reply |

**Response Mode:**
| Command | Description |
|---------|-------------|
| Start-Minimal-Response | Minimize for cost savings |
| Resume-Normal-Response | Return to full responses |

**Requirement Management:**
| Command | Description |
|---------|-------------|
| Add-Requirement [title] | Add new requirement to PRD |
| Remove-Requirement [REQ-XXX] | Mark requirement deprecated |
| Modify-Requirement [REQ-XXX] | Edit existing requirement |

**Progress Tracking:**
| Command | Description |
|---------|-------------|
| Show-Requirements | Display requirements table |
| Show-Progress | Display completion summary |
| Next-Requirement | Show next requirement |

**Workflow Control:**
| Command | Description |
|---------|-------------|
| Skip-Requirement [REQ-XXX] | Skip requirement for session |
| Unskip-Requirement [REQ-XXX] | Return skipped requirement |
| Reorder-Requirements | Interactive reordering |

**GitHub Issue Commands:**
| Command | Description |
|---------|-------------|
| Create-Requirements | Create issues from PRD |

Issue Hierarchy: Requirement → Implementation + QA sub-issues

**TDD Skills:** tdd-red-phase, tdd-green-phase, tdd-refactor-phase, tdd-failure-recovery, test-writing-patterns

---

## Framework Transitions

### Structured → Agile
**When:** Scope expands, iterative delivery needed, changing business value
**How:** Complete TDD iteration, commit WIP, create Product Backlog, convert requirements to Stories
**Carries forward:** Code, tests, TDD, git history, architecture

### Structured → LTS
**When:** Production reached, maintenance mode, critical fixes only
**How:** Complete requirements, 100% tests passing, full documentation, tag version
**Carries forward:** All artifacts, TDD for fixes

**Never:** Structured → Vibe

---

**End of Framework**
