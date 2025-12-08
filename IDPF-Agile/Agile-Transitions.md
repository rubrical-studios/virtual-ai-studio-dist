# Agile-Driven Development Framework - Transitions
**Module:** Transitions (loaded on-demand)

## When to Use Each Framework
**Agile:** Evolving requirements, iterative delivery, prioritize by value, medium-large projects, track velocity
**Structured:** Fixed requirements, small scope, single feature, no sprint overhead needed
**Vibe:** Unclear requirements, exploration needed, prototyping first

## Agile → Structured
**When:** Scope narrows, solo developer, sprint overhead outweighs benefits, requirements stable, no velocity tracking needed

**How:**
1. Complete sprint (Review + Retro)
2. Commit all done stories
3. Move incomplete to backlog
4. Convert stories to PRD
5. Begin with "First-Step"

**Carries forward:** Code, tests, TDD, git history, architecture, acceptance criteria
**Changes:** Stories → PRD, Sprints → linear tasks, Velocity → progress only

## Agile → LTS
**When:** Production maintenance, active dev complete, only bugs/patches, backlog frozen, stability paramount

**How:**
1. Complete/close final sprint
2. Final Sprint-Review
3. Archive backlog/history
4. Full tests 100% passing
5. Create docs (README, CHANGELOG, API)
6. Tag version
7. Begin "LTS-Triage"
8. Set EOL date

**Carries forward:** Code, tests, docs, git history, TDD for fixes
**Changes:** Stories → bug reports, Sprints → triage, Development → maintenance, Features → fixes only

## Invalid Transitions
**Never:** Agile → Vibe (defeats purpose)

## Integration Options
**Agile + Vibe:** Vibe explore → Create Backlog → Agile formalize
**Existing Projects:** Audit → Create Backlog (features + debt) → Sprint Planning → Incremental enhancement

---
**End of Transitions Module**
