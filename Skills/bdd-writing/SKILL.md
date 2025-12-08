---
name: bdd-writing
version: 1.0.0
description: BDD specifications using Gherkin syntax, feature files, step definitions
---
# BDD Writing
## When to Use
- Writing acceptance criteria as executable specs
- Creating feature files
- Defining step definitions
- BDD + TDD integration questions

## Gherkin Syntax
| Keyword | Purpose |
|---------|---------|
| Feature | Groups scenarios |
| Scenario | Single test case |
| Given | Preconditions |
| When | Action |
| Then | Expected outcome |
| And/But | Continue previous |
| Background | Shared setup |
| Scenario Outline + Examples | Parameterized |

## Feature File Structure
```gherkin
Feature: User Authentication
  As a user I want to log in So that I can access my account

  Background:
    Given the login page is displayed

  Scenario: Successful login
    Given a user "alice" exists with password "secret"
    When the user enters credentials "alice" and "secret"
    And clicks login
    Then the user sees the dashboard
```

## Scenario Outline (Data-Driven)
```gherkin
Scenario Outline: Login validation
  When user logs in with "<user>" and "<pass>"
  Then result is "<outcome>"

  Examples:
    | user  | pass   | outcome |
    | alice | secret | success |
    | alice | wrong  | failure |
```

## Step Definitions
### Python (pytest-bdd)
```python
@given(parsers.parse('a user "{name}" exists'))
def create_user(name):
    User.create(name=name)

@when('the user clicks login')
def click_login(page):
    page.click_login()

@then('the user sees the dashboard')
def verify_dashboard(page):
    assert page.url == '/dashboard'
```

### JavaScript (Cucumber.js)
```javascript
Given('a user {string} exists', async (name) => {
  await createUser(name);
});
```

## Best Practices
| Do | Don't |
|----|-------|
| One behavior per scenario | Multiple behaviors |
| Business language | Technical jargon |
| 3-7 steps per scenario | 10+ steps |
| Independent scenarios | Dependencies between scenarios |
| Focus on behavior | Focus on UI mechanics |

## BDD + TDD Double Loop
```
OUTER: BDD (Acceptance)
  1. Write failing scenario
  INNER: TDD (Unit)
    2. RED - failing unit test
    3. GREEN - minimal code
    4. REFACTOR
  5. Scenario passes
  6. Next scenario
```

## Tool Selection
| Tool | Language |
|------|----------|
| Cucumber | JS, Java, Ruby |
| pytest-bdd | Python |
| SpecFlow | C#/.NET |
| Behave | Python |

## Anti-Patterns
❌ UI-focused steps ("click button with id...")
❌ Too many steps (>10)
❌ Coupled steps using variables
❌ Inconsistent terminology
