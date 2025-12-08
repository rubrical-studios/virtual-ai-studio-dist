# Selector Strategy Guide

## Priority Hierarchy
| Priority | Type | Reliability | Example |
|----------|------|-------------|---------|
| 1 | `data-testid` | Highest | `[data-testid="login-btn"]` |
| 2 | ID | High | `#login-button` |
| 3 | Name | High | `[name="email"]` |
| 4 | ARIA | Medium-High | `[aria-label="Submit"]` |
| 5 | Stable CSS | Medium | `.btn-primary` |
| 6 | Text | Low | `text="Login"` |
| 7 | XPath | Lowest (avoid) | `//button[@type="submit"]` |

## data-testid (Recommended)
```html
<button data-testid="login-submit">Log In</button>
```
**Why:** Explicit for testing, stable, refactoring-proof

**Conventions:** `data-testid`, `data-test-id`, `data-cy`, `data-test` - choose one, use consistently

## Anti-Patterns
**Avoid:**
- Index-based: `.item:nth-child(3)` - breaks when order changes
- Styling-based: `.text-red-500` - breaks on redesign
- Generated classes: `.css-1a2b3c4` - changes on rebuild
- Complex XPath: `div > div > form > button` - DOM-coupled

## Combining Selectors
```typescript
// Good: Scope within container
page.locator('[data-testid="form"]').locator('[data-testid="submit"]')

// Good: Role + name
page.getByRole('button', { name: 'Login' })

// Bad: Over-specific
page.locator('form.login > div.group > button.btn.primary')
```

## Framework Syntax
**Playwright:** `page.getByTestId('login')`, `page.getByRole('button', { name: 'Submit' })`
**Cypress:** `cy.get('[data-cy="login"]')`, `cy.contains('button', 'Submit')`
**Selenium:** `driver.findElement(By.cssSelector('[data-testid="login"]'))`

## Checklist
- [ ] Uses highest priority selector available
- [ ] No index-based selectors
- [ ] No styling-based selectors
- [ ] No generated class names
- [ ] No complex XPath
- [ ] Scoped within containers
- [ ] `data-testid` requested if missing
