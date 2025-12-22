# Deployment Awareness
**Version:** 1.0
**Source:** Reference/Deployment-Awareness.md

## Architecture
```
process-docs (dev)           virtual-ai-studio-dist (user)
─────────────────            ────────────────────────────
Source Files
    ↓ /minimize-files
.min-mirror/          ────→  deploy-dist.yml (on tag v*)
    ↓ /prepare-release
.claude/rules/               install.js generates for users
Templates/            ────→  Copied directly
```

## File Classification

### Deployed FROM .min-mirror/
| Directory | Content |
|-----------|---------|
| IDPF-* | 12 frameworks |
| Overview/, Reference/ | Summaries, workflows |
| Skills/, System-Instructions/ | Skills, specialists |
| Assistant/ | Anti-hallucination (subset) |

### Deployed AS-IS
README-DIST.md→README.md, CHANGELOG.md, LICENSE, install.js, fetch-updates.js, framework-manifest.json, Templates/

### Dev-Only (Never Deployed)
- **Directories:** Archive/, Proposal/, PRD/, Guides/, .claude/rules/
- **Files:** Skills/MAINTENANCE.md, framework dev rules
- **Commands:** /prepare-release, /minimize-files, /skill-validate, /audit-*, /gap-analysis
- **Patterns:** "Merge", Skills/Packaged/

## Issue Workflow
**User-facing changes require:**
1. Update source files
2. Run `/minimize-files`
3. Verify minimized output
4. Check install.js/deploy-dist.yml if new features

## Quick Reference
**Scope:** `.claude/scripts/minimize-config.json`
**Commands:** `/minimize-files`, `/minimize-files orphans`, `/minimize-files reset`
**Trigger:** Git tag `v*` → deploy-dist.yml → -dist repo
