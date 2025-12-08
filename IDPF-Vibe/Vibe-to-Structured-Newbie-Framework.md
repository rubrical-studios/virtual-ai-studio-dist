# Vibe-to-Structured Development Framework (Newbie)
**Revision:** 1
**Type:** Beginner-Friendly Specialization
**Extends:** Vibe-to-Structured-Core-Framework.md (Rev 2)

## Purpose
Specializes Core Framework for new programmers. Emphasizes learning, clear explanations, gradual skill building.

**Adds:** Beginner-appropriate tech, extra explanations, simplified patterns, common mistakes, progressive skill development

**Evolution Options:** IDPF-Structured or IDPF-Agile (choice at Evolution Point)

## Available Skills
Invoke these when appropriate:
- **flask-setup**: Flask environment with beginner guidance
- **sinatra-setup**: Sinatra environment with step-by-step instructions
- **common-errors**: Diagnosis for common beginner mistakes
- **sqlite-integration**: SQLite database with teaching examples
- **beginner-testing**: TDD introduction with simple examples

**Skills output Claude Code copy/paste blocks, NOT manual instructions.**

## Technology Scope (Newbie-Friendly)
**Backend (Choose One):**
- **Ruby + Sinatra:** ⭐ Easiest - minimal syntax, reads like English
- **Python + Flask:** ⭐ Very beginner-friendly - clear syntax, great docs

**Frontend:**
- **Vanilla HTML/CSS/JS:** ⭐ Start here - no build tools, fundamentals
- **htmx, Alpine.js:** ⭐⭐ Once comfortable with basics

**Database:**
- **File-based (JSON/CSV):** ⭐ Simplest - start here
- **SQLite:** ⭐ No server, just a file, simple SQL

**Avoid:** React/Vue/Angular, Webpack, microservices, PostgreSQL/MongoDB initially, auth early, Docker, cloud

## Session Initialization
After Core Framework Steps 1-4, add Newbie-Specific Questions:
- What do you want to build? (simple description)
- Any programming experience?
- Preferred language? (I'll recommend if unsure)

## Teaching Approach
**ASSISTANT provides:**
- Clear explanations of WHY, not just HOW
- One concept at a time
- Code with instructive comments
- Common pitfall warnings
- Encouragement and patience

## Starter Projects
**Python + Flask:**
```bash
pip install flask
```
```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
```

**Ruby + Sinatra:**
```bash
gem install sinatra
```
```ruby
require 'sinatra'

get '/' do
  'Hello, World!'
end
```

## Verification Pattern
```
STEP 6: Run your app
STEP 7: Open browser to http://localhost:5000 (Flask) or :4567 (Sinatra)
STEP 8: You should see "Hello, World!"
STEP 9: If error, copy the FULL error message
STEP 10: Report what you see
```

## Common Beginner Mistakes
- **IndentationError:** Python needs consistent spaces
- **NameError:** Variable not defined, check spelling
- **SyntaxError:** Missing colon, parenthesis, or quote
- **ModuleNotFoundError:** Need to `pip install` or `gem install`

## Best Practices
**Vibe:** Ask questions, make mistakes (it's learning!), run code often, read errors carefully
**Evolution:** Celebrate progress, document what you learned, plan small next steps
**Structured:** Tests help you learn, refactor with confidence, build good habits

## When to Use
**Use for:** Learning to program, first web apps, simple projects
**Move to other frameworks:** When comfortable with basics

---
**End of Newbie Framework**
