---
name: beginner-testing
version: 1.0.0
description: Testing introduction and simple TDD for beginners
---
# Beginner Testing
## When to Use
- Learning to write tests
- Introduction to TDD
- Vibe-Newbie framework

## Why Test?
- Catch bugs early
- Confidence when changing code
- Documentation of expected behavior
- Professional practice

## Simple Test Structure
**Arrange → Act → Assert**
```python
def test_add():
    # Arrange - set up
    a = 2
    b = 3

    # Act - do the thing
    result = add(a, b)

    # Assert - check result
    assert result == 5
```

## Python Testing (pytest)
### Setup
```bash
pip install pytest
```

### Write a Test
Create `test_math.py`:
```python
def add(a, b):
    return a + b

def test_add_positive_numbers():
    assert add(2, 3) == 5

def test_add_negative_numbers():
    assert add(-1, -1) == -2

def test_add_zero():
    assert add(5, 0) == 5
```

### Run Tests
```bash
pytest
```

## Ruby Testing (Minitest)
### Write a Test
Create `test_math.rb`:
```ruby
require 'minitest/autorun'

def add(a, b)
  a + b
end

class TestMath < Minitest::Test
  def test_add_positive_numbers
    assert_equal 5, add(2, 3)
  end
end
```

### Run Tests
```bash
ruby test_math.rb
```

## Simple TDD Cycle
```
1. RED: Write a failing test
2. GREEN: Write minimum code to pass
3. REFACTOR: Clean up code
4. Repeat
```

### Example
```python
# Step 1: RED - test fails (function doesn't exist)
def test_greet():
    assert greet("Alice") == "Hello, Alice!"

# Step 2: GREEN - minimal code
def greet(name):
    return f"Hello, {name}!"

# Step 3: REFACTOR - (already clean)
```

## Assertions
| Python | Ruby | Meaning |
|--------|------|---------|
| assert x == y | assert_equal(y, x) | Equal |
| assert x != y | refute_equal(y, x) | Not equal |
| assert x | assert x | Truthy |
| assert x is None | assert_nil(x) | None/nil |

## Tips for Beginners
1. Start with simple functions
2. One test per behavior
3. Run tests often
4. Clear test names
5. Don't worry about perfect coverage yet
