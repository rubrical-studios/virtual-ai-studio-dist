# Vibe-to-Structured Development Framework (Mobile)
**Revision:** 3
**Type:** Mobile Application Specialization
**Extends:** Vibe-to-Structured-Core-Framework.md (Rev 2)

## Purpose
Specializes Core Framework for mobile development. Read with Core Framework.

**Adds:** Mobile workflows, simulator/emulator management, device testing, mobile UI/UX, platform APIs, touch patterns, app lifecycle

**Evolution Options:** IDPF-Structured or IDPF-Agile (choice at Evolution Point)

## Mobile Platform Coverage
**iOS:** Swift/SwiftUI, Objective-C/UIKit, React Native, Flutter
**Android:** Kotlin/Compose, Java/Views, React Native, Flutter
**Cross-platform:** React Native, Flutter, Ionic, Capacitor

## Prerequisites Verification
Before ANY mobile project, verify tools installed:
- **iOS:** macOS, Xcode, Command Line Tools, iOS Simulator
- **Android:** Android Studio, Android SDK, Emulator
- **React Native:** Node.js, CLI, platform tools
- **Flutter:** Flutter SDK, `flutter doctor` passes

Ask: "Which platform?" then "Do you have [TOOLS] installed?"

## Session Initialization
After Core Framework Steps 1-4, add Mobile-Specific Questions:
- Target platform? (iOS/Android/Both)
- Framework? (Native/React Native/Flutter)
- Device type? (Phone/Tablet/Both)
- Offline support needed?

## iOS Development
**Setup:** Xcode from App Store, `xcode-select --install`
**Run:** Cmd+R or `xcrun simctl boot [device]`
**Simulator:** Xcode → Window → Devices and Simulators

## Android Development
**Setup:** Android Studio, SDK Manager, AVD Manager
**Run:** Green play button or `adb shell`
**Emulator:** Tools → AVD Manager → Create/Start

## React Native
```bash
npx react-native init MyApp
cd MyApp
npx react-native run-ios  # or run-android
```

## Flutter
```bash
flutter create my_app
cd my_app
flutter run
```

## Verification Pattern
```
STEP 6: Build and run: [platform command]
STEP 7: App launches in simulator/emulator
STEP 8: Interact with UI, test touch
STEP 9: Check console for errors
STEP 10: Report behavior and any issues
```

## Best Practices
**Vibe:** One platform first, use simulators, test touch early, mock network
**Evolution:** Document platform requirements, plan both platforms, define device support
**Structured:** Add UI tests, test on real devices, handle permissions

## When to Use
**Use for:** iOS apps, Android apps, cross-platform mobile
**Other frameworks:** Web → Web, Desktop → Desktop, Games → Game

---
**End of Mobile Framework**
