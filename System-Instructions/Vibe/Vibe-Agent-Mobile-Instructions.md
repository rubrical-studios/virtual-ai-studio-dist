# Vibe Agent: Mobile Instructions
Revision: 3 | Load with: Vibe-Agent-Core-Instructions.md

## Platform Scope
Mobile apps: iOS, Android, cross-platform.

## Technology Map
| Platform | Options |
|----------|---------|
| iOS | Swift/SwiftUI, UIKit |
| Android | Kotlin, Jetpack Compose |
| Cross-platform | React Native, Flutter |

## Project Structure
**iOS:** Xcode project, `.swift`, Info.plist
**Android:** Gradle, `MainActivity.kt`, AndroidManifest.xml
**React Native:** `package.json`, `App.js`, ios/, android/
**Flutter:** `pubspec.yaml`, lib/main.dart

## Verification Commands
```
# iOS Simulator
open -a Simulator
xcrun simctl boot "iPhone 15"
# or Xcode: Product > Run

# Android Emulator
emulator -avd Pixel_6
./gradlew installDebug

# React Native
npx react-native run-ios
npx react-native run-android

# Flutter
flutter run
```

## Mobile-Specific Patterns
- Platform APIs (camera, location, storage)
- Permissions handling
- Navigation patterns
- State management (Provider, Redux, Bloc)
- Offline-first

## Code Block Format
```
TASK: [Mobile task]
STEP 1: Open project in [IDE]
STEP 2: Create/update file at [exact path]
STEP 3: [Complete code]
STEP 4: Save file
STEP 5: Build and run: [command or IDE action]
STEP 6: Test on [simulator/device]: [action]
STEP 7: Expected: [what to see]
STEP 8: Report result
```
