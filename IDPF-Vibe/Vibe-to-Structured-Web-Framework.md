# Vibe-to-Structured Development Framework (Web)
**Revision:** 2
**Type:** Web Application Specialization
**Extends:** Vibe-to-Structured-Core-Framework.md (Rev 2)

## Purpose
Specializes Core Framework for web development. Read with Core Framework.

**Adds:** Frontend/backend patterns, local servers, browser testing, API development, database setup

**Evolution Options:** IDPF-Structured or IDPF-Agile (choice at Evolution Point)

## Web Platform Coverage
**Frontend:** React, Vue, Svelte, vanilla JS, HTML/CSS
**Backend:** Node.js, Python (Flask/Django), Ruby (Rails), PHP
**Full-stack:** Next.js, Remix, SvelteKit, Nuxt, Rails
**Static:** 11ty, Hugo, Jekyll, Astro

**App Types:** SPAs, MPAs, Static Sites, REST/GraphQL APIs, SSR, PWAs

## Session Initialization
After Core Framework Steps 1-4, add Web-Specific Questions:
- Type? (Frontend / Backend / Full-stack)
- Frontend framework? (React / Vue / Svelte / Vanilla / None)
- Backend framework? (Node.js / Python / Ruby / PHP / None)
- Database? (PostgreSQL / MySQL / MongoDB / Later / None)
- API type? (REST / GraphQL / None)

## Frontend Development
**Requirements:** Node.js, npm, modern browser, DevTools
**Tools:** Vite (fast), Webpack (complex), Parcel (zero-config)

**Setup (Vite):**
```bash
npm create vite@latest my-app -- --template react  # or vue/svelte
cd my-app && npm install && npm run dev
```

**Verification:** Start server → Open localhost:5173 → Check render → Test hot reload → Check DevTools console → Report

## Backend Development
**Node.js/Express:**
```bash
npm init -y && npm install express cors
```
```javascript
const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/todos', (req, res) => res.json([{id:1, text:'Todo'}]));
app.listen(3000);
```

**Python/Flask:**
```bash
python -m venv venv && source venv/bin/activate && pip install flask flask-cors
```
```python
from flask import Flask, jsonify
app = Flask(__name__)
@app.route('/api/todos')
def get_todos(): return jsonify([{'id':1,'text':'Todo'}])
app.run(debug=True, port=3000)
```

**Verification:** Start server → Test with curl → Check JSON response → Report

## Full-Stack Development
**Next.js:**
```bash
npx create-next-app@latest my-app && cd my-app && npm run dev
```
API routes in `pages/api/`.

**Verification:** Start server → Open localhost:3000 → Test frontend → Test /api routes → Check Network tab → Report

## Database Integration
**SQLite:** `better-sqlite3` - simple, file-based
**PostgreSQL:** `pg` - production-ready
**MongoDB:** `mongodb` - document store

## API Testing
```bash
curl http://localhost:3000/api/todos
curl -X POST http://localhost:3000/api/todos -H "Content-Type: application/json" -d '{"text":"New"}'
```

## Requirements Template Additions
At Evolution, document:
- Tech stack (frontend/backend/database)
- Browser support (Chrome, Firefox, Safari, Edge last 2 versions)
- Performance targets (FCP < 1.5s, TTI < 3s, Lighthouse > 90)

## Best Practices
**Vibe - Frontend:** Start dev server, use hot reload, mock API initially, focus on UI/UX
**Vibe - Backend:** In-memory data first, add DB later, test with curl, use nodemon
**Vibe - Full-stack:** Run both servers, test data flow, handle CORS

**Evolution:** Document API endpoints, define schema, plan auth, consider deployment
**Structured:** Add tests, optimize bundles, error handling, loading states, accessibility

## Testing Strategies
**Frontend:** React Testing Library - render, screen, fireEvent
**Backend:** Jest + Supertest - request(app).get(), expect status/body

## When to Use
**Use for:** Web apps, APIs, full-stack, static sites, PWAs
**Other frameworks:** Desktop apps → Desktop, Mobile → Mobile, Games → Game

---
**End of Web Framework**
