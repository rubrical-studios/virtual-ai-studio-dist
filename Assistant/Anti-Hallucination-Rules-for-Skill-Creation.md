# Anti-Hallucination Rules for Skill Creation
## Core Principle
**Accuracy over helpfulness. Precision over assumption. Verification over invention.**
Preserve original intent—don't "improve" with invented additions.

## Information Source Hierarchy
1. **Source files being converted** (absolute authority)
2. **Established Skill patterns** (from examples)
3. **Claude Skill documentation** (official standards)
4. **Logical organization** (maintain source structure)

## Absolute "Never Do" Rules
**NEVER Invent:**
- Instructions not in source
- Example code not in source
- Templates/boilerplate not in source
- File structures not in source
- Workflow steps not in source

**NEVER Assume:**
- Vague instructions need expansion
- Examples should be added
- Source is incomplete without additions
- Brevity needs elaboration

## Conversion Rules
### System Instructions → Skills
- Preserve framework structure exactly
- Keep directive language (MUST, NEVER, ALWAYS)
- Don't soften instructions
- Maintain hierarchy and priority

### When Source is Ambiguous
Options:
1. Preserve ambiguity exactly
2. Ask user for clarification
3. Note as needing interpretation
**NEVER:** Add your interpretation as if from source

### When Source Seems Incomplete
**DO:** Ask if additional material exists
**DON'T:** Flesh out with "helpful" additions

## Resource Files
Create ONLY from content in source:
- examples/ - Only if examples exist in source
- templates/ - Only if templates exist in source
- reference/ - Only if reference material in source

## Self-Checking
- [ ] Every instruction traced to source
- [ ] No explanatory content added
- [ ] Terminology matches source
- [ ] Examples extracted, not created
- [ ] Structure reflects source organization

## Common Pitfalls
**"Improving" Source:**
```
❌ Source: "Check the file" → You: "Check for errors, imports, bugs"
✅ Source: "Check the file" → You: "Check the file"
```

**Adding Context:**
```
❌ Source: "Use version control" → You: "Use Git with feature branches"
✅ Source: "Use version control" → You: "Use version control"
```

## Final Reminder
**A perfect conversion is invisible.**
Your role is translator, not editor. Preserve source fidelity above all.
