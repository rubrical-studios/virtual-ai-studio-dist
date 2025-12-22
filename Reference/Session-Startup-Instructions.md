# Session Startup Instructions
**Version:** 2.11

## Rules Auto-Loading (v2.9+)
Essential rules auto-load from `.claude/rules/`:
| Rule File | Content | Source |
|-----------|---------|--------|
| 01-anti-hallucination.md | Framework quality rules | Assistant/ |
| 02-github-workflow.md | GitHub integration | Reference/ |
| 03-session-startup.md | Startup procedure | Generated |
**Benefits:** No explicit reads, compact-resilient, ~47% token reduction

## Startup Sequence
### 1. Acknowledge Date
State date from environment and proceed.

### 2. Read Framework Summary
```
Overview/Framework-Summary.md
```
Provides: versions, counts, selection matrix, skills registry, on-demand references.

### 3. Confirm Initialization
Report: Date, Framework version, Skill count, Specialists count, GitHub Workflow status.
Ask user what to work on.

### 4. Check Open Releases
```bash
gh pmu release list
```
Display releases or prompt to create one if none exist.

## Post-Compact Behavior
**No re-reading required.** Rules auto-reload after compaction.

## On-Demand Documentation
| When Working On | Load File |
|-----------------|-----------|
| IDPF frameworks | Overview/Framework-Development.md |
| Testing frameworks | Overview/Framework-Testing.md |
| System Instructions | Overview/Framework-System-Instructions.md |
| Skills | Overview/Framework-Skills.md |
| Framework transitions | Overview/Framework-Transitions.md |
| Complete reference | Overview/Framework-Overview.md |
| Skill creation rules | Assistant/Anti-Hallucination-Rules-for-Skill-Creation.md |
| PRD work | Assistant/Anti-Hallucination-Rules-for-PRD-Work.md |
