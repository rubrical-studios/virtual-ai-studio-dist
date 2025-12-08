---
name: anti-pattern-analysis
version: 1.0.0
description: Systematic detection of anti-patterns in code
---
# Anti-Pattern Analysis
## When to Use
- Code reviews, refactoring planning
- Technical debt assessment
- Quality improvement initiatives

## Anti-Pattern Categories
### Design/OOP Anti-Patterns
| Pattern | Problem | Solution |
|---------|---------|----------|
| God Class | Class does too much | Split into focused classes |
| Anemic Domain | No behavior in domain objects | Move logic to domain |
| Spaghetti Code | Tangled, hard to follow | Structure with patterns |
| Golden Hammer | Same solution everywhere | Choose appropriate tools |

### Code Smells
| Smell | Indicator | Fix |
|-------|-----------|-----|
| Long Method | >20 lines | Extract methods |
| Long Parameter List | >3 params | Use object |
| Duplicate Code | Copy-paste | DRY - extract |
| Magic Numbers | Unexplained values | Named constants |
| Dead Code | Unused code | Remove |

### Architecture Anti-Patterns
| Pattern | Problem | Solution |
|---------|---------|----------|
| Big Ball of Mud | No structure | Define boundaries |
| Circular Dependencies | A→B→A | Dependency inversion |
| Tight Coupling | Components intertwined | Loose coupling, interfaces |

### Database Anti-Patterns
| Pattern | Problem | Solution |
|---------|---------|----------|
| N+1 Queries | Loop queries | Eager loading |
| God Table | One table everything | Normalize |
| Missing Indexes | Slow queries | Add indexes |

### Testing Anti-Patterns
| Pattern | Problem | Solution |
|---------|---------|----------|
| Flaky Tests | Random failures | Isolate, deterministic data |
| Test Interdependence | Order matters | Independent tests |
| Slow Tests | Long feedback | Parallelize, mock |

### Security Anti-Patterns
| Pattern | Problem | Solution |
|---------|---------|----------|
| Hardcoded Secrets | Credentials in code | Environment variables |
| SQL Injection | Concatenated queries | Parameterized queries |
| Missing Validation | Trusting input | Validate all input |

## Analysis Workflow
1. Identify category (design, code, arch, db, test, security)
2. Locate specific instances
3. Assess severity and impact
4. Recommend specific fix
5. Prioritize by effort/benefit

## Output Format
```
## Anti-Pattern: [Name]
**Category:** [Type]
**Location:** [File:line]
**Severity:** Critical | High | Medium | Low
**Impact:** [Description]
**Recommendation:** [Specific fix]
```
