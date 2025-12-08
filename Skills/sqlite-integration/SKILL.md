---
name: sqlite-integration
version: 1.0.0
description: Database integration with SQLite for beginners
---
# SQLite Integration
## When to Use
- Adding database to Flask/Sinatra app
- Learning SQL basics
- Simple data persistence

## Why SQLite?
- No server required (file-based)
- Built into Python and Ruby
- Great for learning and small projects

## Python/Flask Integration
### Setup
```python
import sqlite3

def get_db():
    conn = sqlite3.connect('app.db')
    conn.row_factory = sqlite3.Row
    return conn
```

### Create Table
```python
def init_db():
    db = get_db()
    db.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL
        )
    ''')
    db.commit()
    db.close()
```

### Basic Operations
```python
# Insert
db.execute('INSERT INTO users (name, email) VALUES (?, ?)',
           ('Alice', 'alice@example.com'))
db.commit()

# Query
users = db.execute('SELECT * FROM users').fetchall()

# Query one
user = db.execute('SELECT * FROM users WHERE id = ?', (1,)).fetchone()

# Update
db.execute('UPDATE users SET name = ? WHERE id = ?', ('Bob', 1))
db.commit()

# Delete
db.execute('DELETE FROM users WHERE id = ?', (1,))
db.commit()
```

## Ruby/Sinatra Integration
### Setup
```ruby
require 'sqlite3'

def get_db
  SQLite3::Database.new('app.db')
end
```

### Create Table
```ruby
db = get_db
db.execute <<-SQL
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  );
SQL
```

### Basic Operations
```ruby
# Insert
db.execute('INSERT INTO users (name, email) VALUES (?, ?)',
           ['Alice', 'alice@example.com'])

# Query
users = db.execute('SELECT * FROM users')

# Query one
user = db.execute('SELECT * FROM users WHERE id = ?', [1]).first
```

## SQL Basics
| Operation | SQL |
|-----------|-----|
| Create | INSERT INTO table (cols) VALUES (vals) |
| Read | SELECT * FROM table WHERE condition |
| Update | UPDATE table SET col = val WHERE condition |
| Delete | DELETE FROM table WHERE condition |

## Common Issues
| Issue | Fix |
|-------|-----|
| No such table | Run CREATE TABLE first |
| UNIQUE constraint | Check for duplicates |
| Database locked | Close other connections |
