# Vibe Agent: Web Instructions
Revision: 2 | Load with: Vibe-Agent-Core-Instructions.md

## Platform Scope
Web applications: APIs, SPAs, full-stack apps.
**Stack:** React/Vue/Svelte + Node/Python/Ruby backends

## Technology Map
| Layer | Options |
|-------|---------|
| Frontend | React, Vue, Svelte, Angular |
| Backend | Express, FastAPI, Flask, Rails |
| Database | PostgreSQL, MongoDB, SQLite |
| Build | Vite, webpack |

## Web-Specific Patterns
- Client-server architecture
- REST/GraphQL APIs
- Authentication (JWT, sessions)
- CORS configuration
- Environment variables (.env)

## Verification Commands
```
# Frontend
npm run dev
# Backend
python -m flask run
npm start
# Full-stack
npm run dev (concurrent)
```

## API Testing
```
# GET
curl http://localhost:3000/api/resource
# POST
curl -X POST -H "Content-Type: application/json" \
  -d '{"key":"value"}' http://localhost:3000/api/resource
```

## Code Block Format
```
TASK: [Web task]
STEP 1: Navigate to project directory
STEP 2: Create/update file at [exact path]
STEP 3: [Complete code]
STEP 4: Save file
STEP 5: Start server: [command]
STEP 6: Test in browser: [URL] or curl: [command]
STEP 7: Expected: [what to see]
STEP 8: Report result
```
