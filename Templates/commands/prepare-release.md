---
description: Prepare and close a release
argument-hint: [version] (e.g., v1.2.0)
---

# Prepare Release

Execute the full release workflow including project management closure.

## Pre-Checks

1. **Verify on release branch:**
   ```bash
   git branch --show-current
   ```
   Must be on a release branch (e.g., `release/v1.2.0`), not `main`.

2. **Check for open sprints in this release:**
   ```bash
   gh pmu microsprint current
   ```
   If sprints are open, close them first:
   ```bash
   gh pmu microsprint close
   ```

3. **Check for incomplete issues in release:**
   ```bash
   gh pmu release current --json issues | jq '.[] | select(.status != "done")'
   ```
   If incomplete issues exist, prompt user:
   - Transfer to next release
   - Return to backlog
   - Block release (cannot close with open issues)

## Phase 1: Version Updates

1. Determine version from `$ARGUMENTS` or prompt user
2. Update version files:
   - `package.json` / `Cargo.toml` / etc. (project-specific)
   - `CHANGELOG.md` — add new version section
3. **ASK USER:** Confirm version updates

## Phase 2: Git Preparation

1. Commit version updates:
   ```bash
   git add -A
   git commit -m "chore: prepare release $VERSION"
   ```

2. Create PR from release branch to main:
   ```bash
   gh pr create --base main --head $(git branch --show-current) \
     --title "Release $VERSION" \
     --body "## Release $VERSION\n\nSee CHANGELOG.md for details."
   ```

3. **ASK USER:** Approve and merge PR (or wait for CI)

4. After PR merged, switch to main and pull:
   ```bash
   git checkout main
   git pull origin main
   ```

## Phase 3: Tag and Release

1. Create tag:
   ```bash
   git tag -a $VERSION -m "Release $VERSION"
   git push origin $VERSION
   ```

2. Close the gh-pmu release:
   ```bash
   gh pmu release close --tag
   ```

3. **ASK USER:** Confirm tag pushed and release closed

## Phase 4: Verification

1. Verify tag exists:
   ```bash
   git tag -l "$VERSION"
   ```

2. Verify gh-pmu release closed:
   ```bash
   gh pmu release list --closed | head -1
   ```

3. (Optional) Create GitHub Release:
   ```bash
   gh release create $VERSION --generate-notes
   ```

## Post-Release Reminder

**Releasing code does NOT close related issues.**
Issues included in this release still require explicit user approval ("Done") to close.
Do NOT auto-close issues just because they shipped.

---

**End of Prepare Release**
