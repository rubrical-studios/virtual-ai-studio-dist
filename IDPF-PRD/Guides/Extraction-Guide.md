# PRD Extraction Guide

## Purpose
Reverse-engineer PRD from existing code for: legacy documentation, onboarding, pre-LTS baseline, compliance

## Prerequisites
1. Source code access
2. Test files exist (primary extraction source)
3. Can build/run
4. Stakeholder availability for refinement

## Quick Start
`Reverse-PRD-Start` → Scans codebase, detects stack, begins workflow

## Workflow

### Step 1: Initialize
**Command:** `Reverse-PRD-Start`
- Scans directory structure
- Identifies project type, language, framework, database
- Reports analysis

### Step 2: Analyze
**Command:** `Reverse-PRD-Analyze`
- Maps directories
- Identifies API endpoints
- Detects auth patterns
- Lists integrations

### Step 3: Extract
**Command:** `Reverse-PRD-Extract`
- Parses test files for features
- Extracts API endpoints
- Detects NFRs from code patterns
- Generates draft worksheets

### Step 4: Refine
**Command:** `Reverse-PRD-Refine`
For each feature: **[C]onfirm / [M]odify / [R]eject / [S]kip**

Add: Business rationale, priority, dependencies, stakeholders

### Step 5: Generate
**Command:** `Generate-PRD`
- Select template (Structured/Agile)
- Outputs `PRD-[Project].md`

## Confidence Levels
| Level | Meaning | Action |
|-------|---------|--------|
| High | Multiple sources confirm | Quick verify |
| Medium | Single strong source | Review carefully |
| Low | Inferred from patterns | Validate thoroughly |

## Extraction Sources
**Tests (highest value):** pytest, Jest, JUnit, RSpec → Feature + behavior
**API Routes:** GET/POST/PUT/DELETE → CRUD features
**Config:** rateLimit, bcrypt, cache.ttl → NFRs

## Troubleshooting
**Few features:** Limited tests, add manually
**False positives:** Reject during refinement
**Missing NFRs:** Add manually, check config files
