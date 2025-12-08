---
name: sinatra-setup
version: 1.0.0
description: Ruby Sinatra environment setup for beginners
---
# Sinatra Setup
## When to Use
- New Sinatra project setup
- Vibe-Newbie framework
- Beginner Ruby web development

## Setup Steps
### 1. Create Project Directory
```bash
mkdir my-sinatra-app
cd my-sinatra-app
```

### 2. Initialize Bundler
```bash
bundle init
```

### 3. Add Sinatra to Gemfile
Edit `Gemfile`:
```ruby
source 'https://rubygems.org'
gem 'sinatra'
gem 'rackup'
```

### 4. Install Dependencies
```bash
bundle install
```

### 5. Create app.rb
```ruby
require 'sinatra'

get '/' do
  'Hello, World!'
end
```

### 6. Run the App
```bash
ruby app.rb
```

### 7. Verify
Open browser: http://localhost:4567
Should see: "Hello, World!"

## Common Issues
| Issue | Solution |
|-------|----------|
| "sinatra not found" | Run `bundle install` |
| Port in use | Change: `set :port, 4568` |
| LoadError | Check Gemfile has sinatra |

## Next Steps
- Add routes: `get '/users' do ... end`
- Add views: `erb :index`
- Add database: See `sqlite-integration` skill
