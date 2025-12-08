---
name: extract-prd
version: 1.2.0
description: Extract PRD worksheets from existing codebases
---
# Skill: extract-prd
**Load with:** Anti-Hallucination-Rules-for-PRD-Work.md

## Overview
Analyzes codebases to generate IDPF-PRD worksheets. Extracts features from tests, infers NFRs from patterns.
**Critical:** All extracted requirements must trace to code evidence. Never invent requirements.

## When to Use
- Legacy codebase without documentation
- Project built without upfront requirements
- Pre-LTS baseline documentation
- Compliance requirement generation

## Commands
| Command | Purpose |
|---------|---------|
| Analyze-Structure | Map files, detect tech stack |
| Extract-From-Tests | Parse tests for features |
| Extract-From-API | Parse API definitions |
| Detect-NFRs | Identify NFRs from patterns |
| Generate-Worksheets | Output IDPF-PRD worksheets |

## Code Analysis Sources
**Priority 1:** Test files, API routes, OpenAPI/Swagger, GraphQL schema
**Priority 2:** README, config files, package files, Dockerfile
**Priority 3:** Git history, comments, error handlers

## Test Parsing
### Python (pytest)
`test_user_can_register()` → Feature: User Registration, AC: Can register

### JavaScript (Jest)
`describe('User')` + `it('registers')` → Feature + Behavior

### Java (JUnit)
`@DisplayName` or method name → Requirement description

### Ruby (RSpec)
`describe` → Feature, `context` → Scenario, `it` → AC

## NFR Detection Patterns
| Pattern | Inferred NFR |
|---------|--------------|
| bcrypt, argon2 | SEC: Password hashing |
| @authenticate | SEC: Authentication |
| @cache, redis | PERF: Caching |
| retry, maxRetries | REL: Retry logic |
| logger, log.info | OBS: Logging |

## Confidence Levels
| Level | Criteria | Action |
|-------|----------|--------|
| High | Multiple sources confirm | Verify |
| Medium | Single source | Review/confirm |
| Low | Indirect evidence | Validate carefully |

## Output Location
```
PRD/PRD-[ProjectName].md
PRD/Worksheets/Discovery-Worksheet-[Name].md
PRD/Worksheets/Elicitation-Worksheet-[Name].md
```

## Workflow Integration
```
Reverse-PRD-Start → extract-prd executes
  → Reverse-PRD-Analyze (structure)
  → Reverse-PRD-Extract (worksheets)
  → Reverse-PRD-Refine (validation)
  → Generate-PRD (output)
```

## Limitations
- Cannot understand intent beyond code
- Missing business context
- Possible false positives
- Extracted worksheets are DRAFTS requiring human refinement
