# Vibe-to-Structured Development Framework (Game)
**Revision:** 1
**Type:** Game Development Specialization
**Extends:** Vibe-to-Structured-Core-Framework.md (Rev 2)

## Purpose
Specializes Core Framework for game development. Read with Core Framework.

**Adds:** Game engine workflows, scene management, play-testing, asset pipelines, game mechanics iteration, performance optimization

**Evolution Options:** IDPF-Structured or IDPF-Agile (choice at Evolution Point)

## Game Platform Coverage
**Engines:** Godot (GDScript/C#), Unity (C#), Unreal (C++/Blueprints)
**Browser:** Phaser, PixiJS, Three.js
**Terminal:** Python curses, blessed (Node.js)

**Game Types:** 2D (platformers, puzzle, roguelikes), 3D (FPS, racing, simulation), Mobile, Browser, Multiplayer

## Session Initialization
After Core Framework Steps 1-4, add Game-Specific Questions:
- Game engine? (Godot/Unity/Unreal/Browser/Other)
- 2D or 3D?
- Game genre? (Platformer/Puzzle/RPG/FPS/etc.)
- Target platform? (PC/Mobile/Web/Console)
- Art style?

## Godot Development
```
1. Open Godot, create project
2. Create main scene, add Node2D/3D
3. Add player scene with CharacterBody
4. Test with F5
```
**GDScript:** `extends CharacterBody2D`, `_physics_process(delta)`

## Unity Development
```
1. Unity Hub → New Project
2. Create scene, add GameObjects
3. Add player with Rigidbody
4. Test with Play button
```
**C#:** `MonoBehaviour`, `Update()`, `FixedUpdate()`

## Browser Games (Phaser)
```bash
npm init -y && npm install phaser
```
```javascript
const config = { type: Phaser.AUTO, width: 800, height: 600, scene: { create, update } };
new Phaser.Game(config);
```

## Verification Pattern
```
STEP 6: Run game (F5/Play/npm start)
STEP 7: Game window opens
STEP 8: Test controls and mechanics
STEP 9: Check for errors in console/output
STEP 10: Report gameplay and issues
```

## Game Development Cycle
**Core Loop:** Idea → Quick prototype → Playtest → Iterate → Polish
**Focus on:** Game feel first, graphics later, one mechanic at a time

## Best Practices
**Vibe:** Prototype fast, playtest constantly, placeholder art OK, focus on fun
**Evolution:** Document core mechanics, define scope, plan assets needed
**Structured:** Add gameplay tests, optimize performance, polish and balance

## Testing Games
**GUT (Godot):** Unit tests for game logic
**Unity Test Framework:** PlayMode and EditMode tests
**Manual playtesting:** Essential throughout

## When to Use
**Use for:** Video games, interactive experiences, simulations
**Other frameworks:** Web apps → Web, Mobile apps → Mobile, Desktop tools → Desktop

---
**End of Game Framework**
