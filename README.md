# Process Docs - AI-Assisted Development Framework Ecosystem

**Last Updated:** 2025-12-04
**Current Version:** 2.6.0

This repository contains a comprehensive ecosystem for AI-assisted software development, including development frameworks, system instructions, skills, and quality guidelines.

---

## Repository Structure

```
process-docs/
├── Overview/                      # Framework ecosystem documentation
│   ├── Framework-Overview.md      # Complete ecosystem reference (v1.3)
│   └── Framework-Overview_chg.md  # Version history and regeneration prompts
│
├── IDPF-Structured/               # Test-Driven Development with Fixed Requirements
│   ├── Interactive Development Process Framework.md (Rev 8)
│   └── Interactive Development Process Framework_chg.md
│
├── IDPF-Agile/                    # Sprint-Based Development with User Stories
│   ├── Agile-Driven Development Framework.md (Rev 2)
│   └── Agile-Driven Development Framework_chg.md
│
├── IDPF-Vibe/                     # Vibe-to-Structured Development Framework
│   ├── Vibe-to-Structured-Core-Framework.md
│   ├── Merged-Frameworks/         # Auto-generated merged files
│   └── [Platform-specific frameworks]
│
├── System-Instructions/           # AI assistant identity and expertise
│   ├── Senior_Full_Stack_Developer.md (Rev 6)
│   ├── Senior_Full_Stack_Developer_chg.md
│   ├── Vibe/                      # Vibe Agent instructions
│   │   ├── Vibe-Agent-Core-Instructions.md
│   │   ├── Vibe-Agent-[Platform]-Instructions.md
│   │   └── ...
│   └── Merged-Instructions/       # Auto-generated merged files
│
├── Skills/                        # Reusable AI capabilities (14 Skills)
│   ├── tdd-red-phase/             # TDD Skills (5)
│   ├── tdd-green-phase/
│   ├── tdd-refactor-phase/
│   ├── tdd-failure-recovery/
│   ├── test-writing-patterns/
│   ├── flask-setup/               # Beginner Setup (2)
│   ├── sinatra-setup/
│   ├── beginner-testing/          # Beginner Support (3)
│   ├── common-errors/
│   ├── sqlite-integration/
│   ├── uml-generation/            # Analysis Skills (4)
│   ├── anti-pattern-analysis/
│   ├── bdd-writing/
│   └── extract-prd/
│   (Each Skill: SKILL.md, SKILL_chg.md, LICENSE.txt, resources/)
│
├── Assistant/                     # Quality and accuracy guidelines (4 Rulesets)
│   ├── Anti-Hallucination-Rules-for-Framework-Development.md
│   ├── Anti-Hallucination-Rules-for-PRD-Work.md
│   ├── Anti-Hallucination-Rules-for-Skill-Creation.md
│   └── Anti-Hallucination-Rules-for-Software-Development.md
│
├── Reference/                     # Supporting documentation
│   ├── Skill-Packaging-Guide.md
│   ├── Session-Startup-Instructions.md
│   └── How Skills Extend Framework and System Instructions.md
│
├── .github/                       # GitHub Actions automation
│   ├── workflows/
│   │   ├── merge-instructions.yml
│   │   └── merge-frameworks.yml
│   └── README.md
│
├── Scapple-Diagrams/             # Visual framework diagrams
│
└── Market-Analysis/              # Market research and analysis
```

---

## Quick Start

### For Framework Development Sessions

**Recommended Startup Sequence:**

1. **Confirm the date** (ensures accurate version tracking)
2. **Read Overview directory:**
   - `Overview/Framework-Overview.md` - Current ecosystem state
   - `Overview/Framework-Overview_chg.md` - Version history
3. **Read Assistant directory:**
   - All Anti-Hallucination Rules documents

See `Reference/Session-Startup-Instructions.md` for detailed startup procedure.

### For Development Projects

**Choose Your Framework:**

#### IDPF-Structured (Test-Driven Development)
- **Use when:** Fixed requirements, clear scope, TDD rigor
- **Location:** `IDPF-Structured/Interactive Development Process Framework.md`
- **Revision:** 8
- **Includes:** TDD Skill integration (RED-GREEN-REFACTOR)

#### IDPF-Agile (Sprint-Based Development)
- **Use when:** Evolving requirements, iterative delivery, user stories
- **Location:** `IDPF-Agile/Agile-Driven Development Framework.md`
- **Revision:** 2
- **Includes:** Sprint planning, backlog management, velocity tracking

#### IDPF-Vibe (Vibe-to-Structured Development)
- **Use when:** Starting with unclear requirements, exploration phase
- **Location:** `IDPF-Vibe/Vibe-to-Structured-Core-Framework.md`
- **Includes:** Platform-specific variants (Desktop, Web, Mobile, Game, Embedded, Newbie)

**System Instructions Required:**
- `System-Instructions/Senior_Full_Stack_Developer.md` (Rev 6)
- Or platform-specific Vibe Agent instructions

---

## Framework Ecosystem Components

### Development Process Frameworks (12)

**Core Development Frameworks (4):**
1. **IDPF-Structured** - TDD with fixed requirements
2. **IDPF-Agile** - Sprint-based with user stories
3. **IDPF-Vibe** - Exploration to structured development
4. **IDPF-LTS** - Long-term support maintenance mode

**Testing Frameworks (7):**
5. **IDPF-Testing-Core** - Foundation for all testing approaches
6. **IDPF-QA-Automation** - Quality assurance and test automation
7. **IDPF-Performance** - Performance testing
8. **IDPF-Accessibility** - Accessibility testing (WCAG compliance)
9. **IDPF-Chaos** - Chaos engineering
10. **IDPF-Contract-Testing** - Contract testing
11. **IDPF-Security** - Security testing

**Requirements Framework (1):**
12. **IDPF-PRD** - Requirements engineering with PRD templates

### System Instructions (8+)
- Senior Full Stack Developer (generic expertise)
- Vibe Agent Core Instructions
- 6 Platform-Specific Vibe Instructions (Desktop, Web, Mobile, Game, Embedded, Newbie)

### Skills (14)
**TDD Skills (5)** - For experienced developers:
- tdd-red-phase
- tdd-green-phase
- tdd-refactor-phase
- tdd-failure-recovery
- test-writing-patterns

**Beginner Setup Skills (2):**
- flask-setup
- sinatra-setup

**Beginner Support Skills (3):**
- beginner-testing
- common-errors
- sqlite-integration

**Analysis Skills (4):**
- uml-generation - Generate PlantUML diagrams from code
- anti-pattern-analysis - Detect code smells and anti-patterns
- bdd-writing - BDD specification and Gherkin syntax
- extract-prd - Extract PRD from existing code

### Assistant Guidelines (4)
- Anti-Hallucination Rules for Framework Development (dev repo only)
- Anti-Hallucination Rules for PRD Work (requirements engineering)
- Anti-Hallucination Rules for Skill Creation (loaded on-demand)
- Anti-Hallucination Rules for Software Development (user project startup)

---

## Skills Usage

### Skill Package Structure
Each Skill contains:
- `SKILL.md` - Main skill definition with frontmatter
- `SKILL_chg.md` - Version tracking and regeneration prompts
- `LICENSE.txt` - License terms
- `resources/` - Supporting files (checklists, templates, examples)

### Distribution
Skills are packaged as `.zip` files (excludes `SKILL_chg.md`):
- Upload to Claude.ai Projects (max 20 custom Skills)
- Use in Claude Desktop or Claude Code workflows

See `Reference/Skill-Packaging-Guide.md` for complete packaging documentation.

---

## GitHub Actions Automation

Two automated workflows maintain merged files:

### Merge Instructions Workflow
- **Trigger:** Manual or on push to `System-Instructions/Vibe/`
- **Output:** `System-Instructions/Merged-Instructions/`
- **Purpose:** Combines Core + Specialized Agent Instructions

### Merge Frameworks Workflow
- **Trigger:** Manual or on push to `IDPF-Vibe/`
- **Output:** `IDPF-Vibe/Merged-Frameworks/`
- **Purpose:** Combines Core + Platform-Specific Frameworks

See `.github/README.md` for setup and usage.

---

## Version Tracking

All major framework components use `_chg.md` files:
- Track version history with [REWRITE] blocks
- Include regeneration prompts
- Document all changes with dates and instructions

**Current Versions:**
- Framework: v2.6.0
- IDPF-Structured: Rev 9
- IDPF-Agile: Rev 3
- Domain Specialists: 18
- All Skills: v1.0

---

## Key Principles

### Integration Model
- **System Instructions** define WHO the assistant is (identity/expertise)
- **Frameworks** define WHAT process to follow (methodology)
- **Skills** provide reusable capabilities (tools)
- **Assistant Guidelines** ensure quality control (accuracy)

### Core Principles from Assistant Guidelines
1. **Accuracy over helpfulness** - Precision over assumption
2. **Uncertainty over invention** - Never fabricate APIs or configurations
3. **Verifiability over engagement** - All code examples must work

### TDD Methodology
All frameworks use RED-GREEN-REFACTOR cycles:
- **RED:** Write failing test, verify expected failure
- **GREEN:** Minimal implementation to pass test
- **REFACTOR:** Improve code while maintaining green tests

---

## Updating the Framework

### To Update Framework Components

1. **Edit source file** (e.g., IDPF-Structured Framework)
2. **Increment revision number** in file header
3. **Update corresponding _chg.md file:**
   - Add new `[CHANGES IN VERSION N]` entry
   - Include date, changes, instructions
4. **Update Framework-Overview.md** if needed
5. **Commit and push changes**

### To Create New Skills

Follow `Reference/Skill-Packaging-Guide.md`:
1. Create Skill structure (SKILL.md, SKILL_chg.md, LICENSE.txt, resources/)
2. Package as .zip (exclude SKILL_chg.md)
3. Update Framework-Overview.md Skills section
4. Update Framework-Overview_chg.md with version entry

### To Rebuild All Skill Packages

Use the prompt in `Reference/Skill-Packaging-Guide.md` (Rebuild All Skills Prompt section).

---

## Documentation

### Framework Documentation
- **Framework Overview:** `Overview/Framework-Overview.md`
- **IDPF-Structured:** `IDPF-Structured/Interactive Development Process Framework.md`
- **IDPF-Agile:** `IDPF-Agile/Agile-Driven Development Framework.md`
- **IDPF-Vibe:** `IDPF-Vibe/Vibe-to-Structured-Core-Framework.md`

### Process Documentation
- **Session Startup:** `Reference/Session-Startup-Instructions.md`
- **Skill Packaging:** `Reference/Skill-Packaging-Guide.md`
- **Skills Extension:** `Reference/How Skills Extend Framework and System Instructions.md`
- **GitHub Actions:** `.github/README.md`

### Quality Guidelines
- **Framework Development:** `Assistant/Anti-Hallucination-Rules-for-Framework-Development.md`
- **PRD Work:** `Assistant/Anti-Hallucination-Rules-for-PRD-Work.md`
- **Skill Creation:** `Assistant/Anti-Hallucination-Rules-for-Skill-Creation.md`
- **Software Development:** `Assistant/Anti-Hallucination-Rules-for-Software-Development.md`

---

## Platform Limits

### Claude.ai (2025)
- **Maximum 20 custom Skills** per project
- Requires careful Skill prioritization
- See `Reference/How Skills Extend Framework and System Instructions.md`

---

## License

[Your license here]

---

## Contributing

[Your contribution guidelines here]

---

**For comprehensive framework ecosystem details, see `Overview/Framework-Overview.md`**
