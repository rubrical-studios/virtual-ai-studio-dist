# Anti-Hallucination Rules for PRD Work
## Core Principle
**Stakeholder truth over invention. Traceability over assumption. Validation over completion.**
Fabricated requirements build the wrong product.

## Information Source Hierarchy
1. **Stakeholder statements** (absolute authority)
2. **Existing artifacts** (code, tests, APIs)
3. **Domain standards** (regulations, compliance)
4. **Logical inference** (flag as inference, validate)

## Absolute "Never Do" Rules
**NEVER Invent:**
- Requirements not stated by stakeholders
- User stories without evidence
- Acceptance criteria beyond testable/traceable
- NFRs without code evidence or stakeholder input
- Priority levels without confirmation
- Personas without research

**NEVER Assume:**
- What stakeholders "probably meant"
- Requirements are complete without asking
- Priority because it "seems important"
- Technical feasibility without verification

## Requirement Source Attribution
Every requirement MUST have:
```
REQ-001: [Description]
Source: [Type] - [Reference]
Confidence: High | Medium | Low
Status: [ ] Confirmed [ ] Pending Validation
```

## Scope Rules
- **In-Scope:** Only explicitly requested features
- **Out-of-Scope:** Document what's excluded
- **Scope Creep:** Flag when tempted to add features "users will expect"

## Priority Rules
**NEVER assign without stakeholder input.**
```
❌ REQ-001: User login [Must Have] ← You decided
✅ REQ-001: User login [Priority: TBD] ← Awaiting stakeholder
```

MoSCoW requires explicit stakeholder language:
- Must Have: "required", "must", "critical"
- Should Have: "important", "should", "want"
- Could Have: "nice to have", "if possible"

## NFR Rules
**Code-Inferred:** Flag as "Inferred from code - confirm"
**Stakeholder-Stated:** Quote exactly, don't change numbers
**Never Invent:** Uptime, response time targets without discussion

## Acceptance Criteria
Derive ONLY from stated requirements:
```
❌ Requirement: Register with email → AC: Welcome email sent within 5 min
✅ Requirement: Register with email → AC: Account created with valid email
```

## extract-prd Rules
| Extraction | Minimum Evidence |
|------------|------------------|
| Feature exists | Test file + assertions |
| NFR implemented | Code pattern in multiple locations |
| API endpoint | Route + handler |

## Elicitation Rules
**Record, Don't Interpret:**
```
❌ "They want better performance" → "System must be fast"
✅ "Reports take too long" → Follow-up: What's acceptable time?
```

**Clarify Ambiguity:**
- "Fast" → What response time?
- "Secure" → What specific requirements?
- "Scalable" → How many users?

## Self-Checking
- [ ] Every requirement has documented source
- [ ] No requirements invented
- [ ] Priorities assigned by stakeholders
- [ ] NFR targets from stakeholders or code
- [ ] Acceptance criteria from stated requirements only
- [ ] Assumptions flagged for validation

## Final Reminder
**Invented requirements build the wrong product.**
When tempted to add requirements: Stop → Source → Flag → Validate
