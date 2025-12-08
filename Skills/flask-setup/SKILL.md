---
name: flask-setup
version: 1.0.0
description: Python Flask environment setup for beginners
---
# Flask Setup
## When to Use
- New Flask project setup
- Vibe-Newbie framework
- Beginner Python web development

## Setup Steps
### 1. Create Project Directory
```bash
mkdir my-flask-app
cd my-flask-app
```

### 2. Create Virtual Environment
```bash
python -m venv venv
```

### 3. Activate Virtual Environment
**Windows:**
```bash
venv\Scripts\activate
```
**macOS/Linux:**
```bash
source venv/bin/activate
```

### 4. Install Flask
```bash
pip install flask
```

### 5. Create app.py
```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
```

### 6. Run the App
```bash
python app.py
```

### 7. Verify
Open browser: http://localhost:5000
Should see: "Hello, World!"

## Common Issues
| Issue | Solution |
|-------|----------|
| "flask not found" | Activate venv first |
| Port in use | Change port: `app.run(port=5001)` |
| Import error | Check venv activated |

## Next Steps
- Add routes: `@app.route('/users')`
- Add templates: `render_template('index.html')`
- Add database: See `sqlite-integration` skill
