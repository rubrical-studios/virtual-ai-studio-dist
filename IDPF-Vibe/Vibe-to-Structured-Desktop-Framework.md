# Vibe-to-Structured Development Framework (Desktop)
**Revision:** 2
**Type:** Desktop Application Specialization
**Extends:** Vibe-to-Structured-Core-Framework.md (Rev 2)

## Purpose
Specializes Core Framework for desktop development. Read with Core Framework.

**Adds:** Platform-specific commands/paths, desktop environment setup, OS-specific tooling, desktop UI patterns, file system operations

**Evolution Options:** IDPF-Structured or IDPF-Agile (choice at Evolution Point)

## Desktop Platform Coverage
**Platforms:** Windows, macOS, Linux, Cross-platform
**App Types:** CLI tools, GUI apps (WinForms/WPF/WinUI, AppKit/SwiftUI, GTK/Qt), System utilities, File processors, Cross-platform (Electron, Tauri, .NET MAUI)

## Session Initialization
After Core Framework Steps 1-4, add Desktop-Specific Questions:
- Primary target platform? (Windows/macOS/Linux/Cross-platform)
- Application type? (CLI/GUI/System utility)
- User environment? (OS developing on)
- Language preference?

## Windows Development
**Paths:** Use backslashes `E:\Projects\my-app\src\main.py`
**Env vars:** `%USERPROFILE%`, `%APPDATA%`, `%TEMP%`
**Scripts:** Use .cmd or .bat
**Run:** `python main.py` or `ruby main.rb` or double-click .exe

## macOS Development
**Paths:** Use forward slashes `/Users/username/Projects/my-app`
**Env vars:** `$HOME`, `~/Library/Application Support`
**Scripts:** Use .sh with `chmod +x`
**Run:** `python3 main.py` or `./app.command`

## Linux Development
**Paths:** Use forward slashes `/home/username/projects/my-app`
**Env vars:** `$HOME`, `$XDG_CONFIG_HOME`
**Scripts:** Use .sh with `chmod +x`
**Run:** `python3 main.py` or `./main`

## Verification Pattern
```
STEP 6: Run application: [platform-specific command]
STEP 7: Verify output: [expected behavior]
STEP 8: Check for errors in terminal
STEP 9: Report results
```

## GUI Development
**Python:** Tkinter (built-in), PyQt, wxPython
**Cross-platform:** Electron (JS), Tauri (Rust), Flutter

## Best Practices
**Vibe:** Start CLI first, add GUI later, test on one platform, keep it simple
**Evolution:** Document platform support, plan distribution, consider packaging
**Structured:** Add cross-platform tests, handle paths properly, test on all targets

## When to Use
**Use for:** Desktop apps, CLI tools, system utilities, file processors
**Other frameworks:** Web apps → Web, Mobile → Mobile, Games → Game

---
**End of Desktop Framework**
