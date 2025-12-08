# Framework Skills Reference
**Version:** 1.0.0
## Overview
**Location:** `Skills/`
**Total:** 14 (6 TDD/BDD, 1 PRD, 2 Code Quality, 2 Beginner Setup, 3 Beginner Support)
**Packaging:** SKILL.md + resources/ + LICENSE.txt
**Format:** Claude Code copy/paste blocks (NOT manual instructions)

## TDD Skills (Experienced Developers)
### tdd-red-phase (1.0.0)
**Function:** Guide through RED phase - writing failing tests
**Coverage:** Test structure (AAA), assertions, failure verification, Claude Code format
**When:** Starting feature, "First-Step" or "Start-Story" commands

### tdd-green-phase (1.0.0)
**Function:** Guide through GREEN phase - minimal implementation
**Coverage:** YAGNI, implementation strategies, regression checking
**When:** After RED phase test verified failing

### tdd-refactor-phase (1.0.0)
**Function:** Guide through REFACTOR phase - improve code, maintain green
**Coverage:** Refactoring analysis, rollback procedures, when to skip
**When:** After GREEN phase success

### tdd-failure-recovery (1.0.0)
**Function:** Handle unexpected test behaviors, recovery
**Coverage:** Failure diagnostics, recovery steps, rollback, test isolation
**When:** Test behaves unexpectedly, "Rollback-Previous-Step"

### test-writing-patterns (1.0.0) [Standalone]
**Function:** Test structure, patterns, assertions, test doubles
**Coverage:** AAA, Given-When-Then, mock/stub/fake/spy, framework-agnostic
**When:** Need guidance on test structure or test doubles

### bdd-writing (1.0.0) [Standalone]
**Function:** BDD specification writing with Gherkin
**Coverage:** Feature files, scenarios, Given-When-Then, step definitions, scenario outlines
**Tools:** Cucumber, pytest-bdd, SpecFlow, Behave, RSpec
**When:** Writing acceptance criteria as executable specs

## PRD Skills
### extract-prd (1.1.0)
**Function:** Extract PRD worksheets from existing codebases
**Coverage:** Test parsing (pytest, Jest, JUnit, RSpec), NFR detection, architecture inference
**When:** Reverse-PRD workflow, documenting legacy code
**Output:** PRD/PRD-[ProjectName].md

## Code Quality Skills
### anti-pattern-analysis (1.0.0)
**Function:** Systematic detection of anti-patterns
**Coverage:** Design/OOP, code smells, architecture, database, testing, security patterns
**When:** Code reviews, refactoring planning, technical debt assessment

### uml-generation (1.0.0)
**Function:** Generate UML diagrams from source code (PlantUML)
**Coverage:** Class, sequence, component, activity diagrams
**When:** Code analysis, architecture documentation, reverse-engineering

## Beginner Setup Skills
### flask-setup (1.0.0)
**Function:** Python Flask environment setup
**Coverage:** Virtual env, dependencies, verification

### sinatra-setup (1.0.0)
**Function:** Ruby Sinatra environment setup
**Coverage:** Bundler, Gemfile, dependencies, verification

## Beginner Support Skills
### common-errors (1.0.0)
**Function:** Troubleshooting common development issues
**Coverage:** Flask errors, Sinatra errors, general programming errors

### sqlite-integration (1.0.0)
**Function:** Database integration guidance
**Coverage:** Database setup, basic queries, schema creation

### beginner-testing (1.0.0)
**Function:** Testing introduction and TDD education
**Coverage:** Test writing basics, assertions, simple TDD cycle

## Framework-Skill Dependencies
| Framework | Required Skills |
|-----------|----------------|
| IDPF-Structured | tdd-red-phase, tdd-green-phase, tdd-refactor-phase, tdd-failure-recovery, test-writing-patterns |
| IDPF-Agile | tdd-red-phase, tdd-green-phase, tdd-refactor-phase, tdd-failure-recovery, test-writing-patterns |
| IDPF-LTS | tdd-red-phase, tdd-green-phase, tdd-refactor-phase, tdd-failure-recovery, test-writing-patterns |
| IDPF-Vibe (newbie) | flask-setup, sinatra-setup, common-errors, sqlite-integration, beginner-testing |

**Standalone:** anti-pattern-analysis, bdd-writing, extract-prd, uml-generation
