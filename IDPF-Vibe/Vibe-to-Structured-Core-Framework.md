# Vibe-to-Structured Development Framework (Core)
**Revision:** 2
**Type:** Core Framework (Platform-Agnostic)
**Framework-Debug:** True

## Purpose
Core framework for Vibe-to-Structured methodology. Platform-agnostic.
**Platform-specific:** Desktop, Mobile, Web, Game, Embedded, Newbie frameworks

## Terminology
- **ASSISTANT**: AI assistant (Claude) in this chat
- **Claude Code**: Separate tool where User executes code
- **User**: Human developer managing both interfaces
- **Vibe Phase**: Exploratory development without formal requirements
- **Structured Phase**: TDD with documented requirements
- **Evolution Point**: Transition from Vibe to Structured

## Two-Tool Workflow
**ASSISTANT (this chat):** Plans, provides TASK/STEP instructions, reviews results
**Claude Code:** Executes instructions, runs commands, creates files

**Workflow:** User asks → ASSISTANT provides code block → User copies to Claude Code → Claude Code executes → User reports results → Repeat

## Three-Phase Workflow
1. **VIBE PHASE**: Exploratory with natural language prompts
2. **EVOLUTION POINT**: Capture learnings, formalize requirements
3. **STRUCTURED PHASE**: TDD-driven with testing rigor

## Phase 1: VIBE PHASE

### Session Initialization
User: "Let's start a vibe coding project for [description]"

**STEP 0: Verify Claude Code Setup (CRITICAL)**
Ask: "Do you have Claude Code installed and ready?"
- Yes → Proceed
- No/Unsure → Offer installation guidance or manual option

**After confirmation:**
1. Declare Framework Rev 2
2. Check MCP Access
3. Confirm Vibe Mode
4. Establish Project Location
5. Identify Project Type (desktop/mobile/web/game)
6. Ask clarifying questions (goal, language, platform, constraints)
7. Suggest starting point
8. Display Vibe Commands
9. Wait for "Vibe-Start"

### Vibe Phase Philosophy
- No formal requirements yet
- Natural language descriptions
- Rapid iteration without strict TDD
- Focus on exploration
- Build working prototypes quickly
- Learn through building

### Vibe Development Cycle
1. User describes want
2. ASSISTANT provides instructions (single code block)
3. User reports results
4. ASSISTANT adjusts
5. Repeat until feature works

### Vibe Commands
- **Vibe-Start** - Begin exploration
- **Try-This** - Describe feature to try
- **Show-Me** - See what's built (files, code)
- **That-Works** - Feature good, next idea
- **Undo-That** - Remove last change
- **Run-It** - Get run/test instructions
- **Vibe-Status** - Summarize progress
- **Vibe-End** - Save snapshot, end session (no evolution)
- **Ready-to-Structure** - Transition to structured (full evolution)
- **Vibe-Abandon** - Stop project

### Context Tracking
Track: files created, features implemented, tech choices, patterns emerged, problems solved, user preferences, architecture decisions

### Vibe-End Behavior
Creates snapshot in `/vibe-snapshots/[project]-[date].md` with features, tech, patterns, next ideas, notes. Does NOT trigger evolution.

## Phase 2: EVOLUTION POINT

### Triggering
- User issues "Ready-to-Structure", OR
- ASSISTANT detects maturity (3-5 features, stable architecture, quality concerns)

### Evolution Options
**Structured (IDPF-Structured):** Fixed scope, solo developer, linear development
**Agile (IDPF-Agile):** Large features, prioritization, velocity tracking, sprints

Ask user which framework fits their needs.

### Evolution to Structured
1. Pause development
2. Analyze what exists
3. Generate Requirements Document
4. Propose test strategy
5. Create START-DATA section
6. Present, refine with user
7. Save to `/requirements/[project]-requirements.md`
8. Instruct: End session, start new with Structured framework loaded

### Evolution to Agile
1. Pause development
2. Analyze what exists
3. Generate As-Built PRD (completed features marked DONE)
4. Organize into Epics
5. Add acceptance criteria
6. Estimate story points
7. Prioritize
8. Present, note "Ready for Sprint 1" or "No pending stories"
9. Refine with user
10. Save to `/backlog/product-backlog.md`
11. Begin "Plan-Sprint"

## Phase 3: STRUCTURED PHASE

### Transition
1. Switch to TDD Mode (RED-GREEN-REFACTOR)
2. Add tests for existing vibe code
3. Continue with remaining requirements
4. Maintain requirements document

Follows **Interactive Development Process Framework** with initialization skipped (context preserved from vibe).

### Structured Commands
All from IDPF-Structured: List-Commands, Done-Next-Step, Rollback-Previous-Step, Push-Changes, Update-Requirements, Double-Check, Final-Commit-Create-PR, Roadblock-Stop, etc.

## Claude Code Instructions Format
All in ONE code block:
```
TASK: [Description]
STEP 1: [Open/create file]
STEP 2: [Navigate/action]
STEP 3: [Add/modify - COMPLETE code]
STEP 4: [Context]
STEP 5: [Save]
STEP 6: [Run/test]
STEP 7: [Verify]
STEP 8: [Report]
```
DO: One block, numbered steps, complete code, exact paths, verification
DON'T: Split blocks, incomplete snippets, vague instructions

## Context Preservation
**Vibe:** Features tried, preferences, tech choices, problems solved, patterns
**Evolution:** Why features built, how architecture emerged, what worked
**Structured:** All above + requirements, test coverage, remaining work

## Special Scenarios
- **Off Track:** Vibe-Abandon, lessons learned, end session
- **Early Evolution:** Requirements focus on "what to build"
- **Late Evolution:** Focus on testing/polish, minimal new features
- **Return to Vibe:** Discouraged after structured; warn user, experimental code must pass tests

## Best Practices
**Vibe:** Small iterations, run frequently, don't overthink, note what works, embrace mess, fail fast
**Evolution:** Don't rush, be honest, think ahead, set clear goals, prioritize, plan for quality
**Structured:** TDD rigorously, test existing code, refactor freely, update requirements, maintain quality

## When to Use
**Use Vibe-to-Structured:** Unclear requirements, exploring tech, prototyping, learning while building, need rapid feedback
**Use Structured directly:** Clear requirements, existing codebase, mature project, quality critical from start
**Don't use:** Safety-critical, production without staging, fixed scope, formal docs required

## Framework Extensions
Platform-specific: Desktop, Mobile, Web, Game, Embedded, Newbie
**Always use core + appropriate specialized framework**

---
**End of Core Framework**
