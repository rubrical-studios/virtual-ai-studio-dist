# Long-Term Support (LTS) Framework
**Revision:** 1
**Revision Date:** 2025-11-17
**Framework-Debug:** True

## Purpose
Structured approach for maintaining LTS versions. Emphasizes stability, minimal risk, comprehensive testing, backwards compatibility.

## Terminology
- **ASSISTANT**: AI assistant (Claude)
- **Claude Code**: Separate tool for executing changes
- **User**: Maintainer managing LTS releases
- **LTS Version**: Version receiving only critical fixes
- **Regression**: New bug introduced by a fix
- **Hotfix**: Critical fix outside normal cycle
- **Patch Release**: Minor version with bug fixes only (v2.1.3 → v2.1.4)

## LTS Principles
1. **Stability First**: Preserve existing behavior
2. **Minimal Change**: Only what's necessary
3. **No New Features**: Bug fixes and security patches only
4. **Backwards Compatibility**: Maintain API, data formats, config
5. **Comprehensive Testing**: Prevent regressions
6. **Risk Assessment**: Evaluate side effects
7. **Clear Documentation**: Track all changes

**✅ Allowed:** Critical bugs, high-priority bugs, security patches, doc fixes
**❌ Not Allowed:** New features, refactoring, dependency upgrades (except security), breaking changes, performance improvements (unless fixing bugs)

## Session Workflow
Bug Report → Triage → Impact Assessment → Fix (TDD) → Regression Testing → Documentation → Release

## Phase 1: Bug Report Triage
**Command:** `LTS-Triage [bug-id] [description]`

1. **Understand:** Expected vs actual, repro steps, affected versions, workaround?
2. **Classify Severity:** P0 (critical) / P1 (high) / P2 (medium) / P3 (low) / P4 (trivial)
3. **LTS Eligibility:** Bug or feature? Meets criteria? Risk/benefit? Defer possible?
4. **Decision:** Fix / Defer / Won't Fix

## Phase 2: Impact Assessment
**Command:** `LTS-Investigate [bug-id]`

1. **Reproduce:** Minimal case, verify in LTS version, test environments
2. **Root Cause:** Code location, why, trace paths, git history
3. **Impact:** Users affected, functionality impacted, dependencies
4. **Risk:** Code changes needed, side effects, blast radius
5. **Compatibility:** API contracts, config format, data migration

Output: Root cause, affected code, risk level, proposed approach, recommendation

## Phase 3: Fix Development
**Command:** `LTS-Fix [bug-id]`

1. Document current state
2. Write failing test (TDD RED)
3. Implement minimal fix (no refactoring, add comments)
4. Verify test passes (TDD GREEN)
5. Run full test suite

## Phase 4: Regression Prevention
**Command:** `LTS-Regression-Check [bug-id]`

1. **Automated:** Unit, integration, e2e tests
2. **Manual:** Fix verified, related features work, common workflows, edge cases
3. **Performance:** No degradation
4. **Compatibility:** API unchanged, existing data works

## Phase 5: Documentation & Release
**Command:** `LTS-Document [bug-id]`
- Update CHANGELOG.md, known issues, compatibility notes
- Prepare release notes

**Command:** `LTS-Release [version]`
- Verify all fixes tested
- Update version number
- Finalize CHANGELOG
- Create git tag: `git tag -a v[version]`
- Build artifacts, run smoke tests
- Push and deploy

## Emergency Hotfix
**Command:** `LTS-Hotfix [description]` (for P0 Critical only)

1. Confirm severity, identify affected versions
2. Fast-track fix (skip TDD if necessary, add tests after)
3. Test specific issue, critical paths only
4. Deploy immediately, follow up with comprehensive testing within 24-48 hours

## Commands Reference
**Triage:** LTS-Triage, LTS-Investigate
**Fix:** LTS-Fix, LTS-Regression-Check
**Release:** LTS-Document, LTS-Release
**Emergency:** LTS-Hotfix
**General:** List-LTS-Commands, LTS-Status

## Best Practices
**Maintainers:** Conservative default, test everything, communicate clearly, track metrics, know when to defer
**Reporters:** Provide reproduction, honest severity, be patient

## Framework Integration
- **IDPF-Structured:** Requirements = fix spec, TDD for development
- **IDPF-Agile:** Batch fixes into maintenance sprints

## Framework Transitions
**LTS is terminal.** No transitions back to active development.
- New development → new major version (separate repo/branch)
- LTS continues until EOL, then archived

**Never:** LTS → Agile/Structured/Vibe
**Instead:** Start new project, maintain in parallel, plan migration, archive LTS at EOL

---
**End of Long-Term Support Framework**
