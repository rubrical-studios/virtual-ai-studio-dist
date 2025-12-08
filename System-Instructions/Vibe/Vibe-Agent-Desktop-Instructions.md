# Vibe Agent: Desktop Instructions
Revision: 2 | Load with: Vibe-Agent-Core-Instructions.md

## Platform Scope
Desktop applications: CLI tools, GUI apps, system utilities, scripts.
**Languages:** Python, Ruby, JavaScript/Node, C#, Rust, Go

## Technology Map
| Type | Recommended |
|------|-------------|
| CLI | Python (argparse/Click), Node (Commander), Go (Cobra) |
| GUI | Python (Tkinter/PyQt), Electron, .NET WPF/WinForms |
| System | Go, Rust, C# |
| Scripts | Python, Ruby, Bash/PowerShell |

## File Paths
- Windows: `C:\...\`, backslash, `.exe`
- macOS/Linux: `/home/...`, forward slash, chmod +x
- Cross-platform: Use `os.path` (Python), `path` (Node)

## Verification Commands
```
# Python
python script.py [args]
python -m pytest tests/

# Node
node script.js [args]
npm test

# Go
go run main.go
go test ./...

# Rust
cargo run
cargo test
```

## Desktop-Specific Patterns
- Configuration files (JSON, YAML, INI)
- Environment variables
- Exit codes (0 success, non-zero error)
- Cross-platform path handling
- Process management

## Code Block Format
```
TASK: [Desktop task]
STEP 1: Ensure dependencies
STEP 2: Create/update file at [exact path]
STEP 3: [Complete code with imports, main, error handling]
STEP 4: Save file
STEP 5: Run command: [run command]
STEP 6: Expected output: [what to see]
STEP 7: Report result
```
