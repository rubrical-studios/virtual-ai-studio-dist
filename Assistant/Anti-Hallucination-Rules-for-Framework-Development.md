# Anti-Hallucination Rules for Framework Development
## Core Principle
**Accuracy over speed. Verification over assumption. Completeness over convenience.**
Framework errors propagate to all users.

## Information Source Hierarchy
1. **Git history/tags** (absolute authority for versions)
2. **Existing framework files** (current state)
3. **Issue tracker** (intent)
4. **Documentation** (reference, may be stale)

## Absolute "Never Do" Rules
**NEVER Invent:**
- Version numbers without analyzing commits
- CHANGELOG entries without reviewing changes
- Counts (skills, specialists) without listing files
- File paths without verification
- Registry entries for non-existent components

**NEVER Assume:**
- Patch version appropriate without commit analysis
- CHANGELOG is complete without verification
- Install scripts synchronized without comparing
- Counts in documentation match actual files

## Version Management
**Before Determining Version:**
```bash
git describe --tags --abbrev=0
git log <last-tag>..HEAD --oneline
```

| Commit Contains | Version Type |
|-----------------|--------------|
| New framework (IDPF-*) | MINOR or MAJOR |
| New specialist or skill | MINOR |
| New feature | MINOR |
| Bug fixes only | PATCH |

**CHANGELOG:** Document ALL commits since last release, not just triggering issue.

## Cross-Reference Validation
| File A | Must Match | File B |
|--------|------------|--------|
| framework-manifest.json | = | CHANGELOG latest |
| Skills/ directories | = | Packaged/*.zip |
| Domain/ specialists | = | Documentation count |

## Self-Checking Before Release
- [ ] Ran git log and reviewed ALL commits
- [ ] Version reflects HIGHEST change type
- [ ] CHANGELOG documents every commit
- [ ] Counts match actual files
- [ ] All registries synchronized

## Final Reminder
**Framework errors multiply.** Verify:
1. Commits - Review all before versioning
2. Counts - List files, don't assume
3. Consistency - Cross-check versions
4. Completeness - Document everything
