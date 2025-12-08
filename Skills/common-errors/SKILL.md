---
name: common-errors
version: 1.0.0
description: Troubleshooting common development issues for beginners
---
# Common Errors
## When to Use
- Beginner encounters error message
- Debugging common issues
- Troubleshooting setup problems

## Flask Errors
| Error | Cause | Fix |
|-------|-------|-----|
| ModuleNotFoundError: flask | Flask not installed | `pip install flask` |
| Address already in use | Port 5000 busy | Change port or kill process |
| TemplateNotFound | Wrong path | Check templates/ folder |
| 404 Not Found | Wrong route | Check @app.route() |
| 500 Internal Error | Code bug | Check terminal for traceback |

## Sinatra Errors
| Error | Cause | Fix |
|-------|-------|-----|
| LoadError: sinatra | Not installed | `bundle install` |
| Address in use | Port 4567 busy | `set :port, 4568` |
| Errno::ENOENT | Missing file | Check file path |
| NoMethodError | Typo or missing method | Check spelling |

## General Programming Errors
| Error | Cause | Fix |
|-------|-------|-----|
| SyntaxError | Typo in code | Check brackets, quotes |
| NameError | Undefined variable | Define before use |
| TypeError | Wrong type operation | Check types |
| IndentationError (Python) | Bad spacing | Fix indentation |
| KeyError | Missing dict key | Check key exists |

## Database Errors (SQLite)
| Error | Cause | Fix |
|-------|-------|-----|
| no such table | Table not created | Run CREATE TABLE |
| database locked | Concurrent access | Close other connections |
| UNIQUE constraint | Duplicate value | Check unique columns |

## Debugging Steps
1. **Read the error message** - It tells you what's wrong
2. **Find the line number** - Where the error occurred
3. **Check recent changes** - What did you just change?
4. **Print statements** - Add `print()` to see values
5. **Search the error** - Copy error message to search engine

## When to Ask for Help
Include:
- Full error message
- Relevant code
- What you tried
- What you expected vs what happened
