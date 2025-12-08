# Vibe-to-Structured Development Framework (Embedded)
**Revision:** 1
**Type:** Embedded Systems Specialization
**Extends:** Vibe-to-Structured-Core-Framework.md (Rev 2)

## Purpose
Specializes Core Framework for embedded development using simulators/emulators. Focus on development without physical hardware.

**Adds:** Simulator/emulator setup, virtual hardware testing, embedded workflows, toolchains, hardware abstraction

**Evolution Options:** IDPF-Structured or IDPF-Agile (choice at Evolution Point)

## Embedded Platform Coverage
**Microcontrollers:**
- **Arduino (AVR/ARM):** Wokwi, SimulIDE - C++, Arduino framework
- **ESP32/ESP8266:** Wokwi (web) - C++, MicroPython
- **STM32 (ARM Cortex-M):** Renode, QEMU - C, C++, Rust
- **ARM Cortex-M Generic:** QEMU, Renode

**Embedded Linux:**
- **Raspberry Pi:** QEMU - Python, C, C++
- **BeagleBone:** QEMU

**RTOS:**
- **FreeRTOS:** QEMU, native ports
- **Zephyr RTOS:** QEMU, Renode

## Session Initialization
After Core Framework Steps 1-4, add Embedded-Specific Questions:
- Target platform? (Arduino/ESP32/STM32/Raspberry Pi/Other)
- Simulator? (Wokwi/QEMU/Renode/SimulIDE)
- Project type? (Sensor reading/Control/IoT/etc.)
- Programming language?

## Wokwi (Web-Based)
Supports: Arduino, ESP32, Raspberry Pi Pico
1. Go to wokwi.com
2. Create new project, select board
3. Write code in editor
4. Click Play to simulate

## QEMU Setup
```bash
# Install QEMU
# Linux: apt install qemu-system-arm
# macOS: brew install qemu
# Windows: Download from qemu.org

# Run ARM Cortex-M simulation
qemu-system-arm -machine lm3s6965evb -kernel firmware.elf
```

## Renode Setup
```bash
# Download from renode.io
# Run simulation
renode platform.resc
```

## Verification Pattern
```
STEP 6: Start simulator with firmware
STEP 7: Observe simulated hardware behavior
STEP 8: Test inputs (buttons, sensors)
STEP 9: Verify outputs (LEDs, serial)
STEP 10: Report simulation results
```

## Hardware Abstraction
```c
// Abstract hardware for portability
#ifdef SIMULATION
  #define LED_ON() sim_led_on()
#else
  #define LED_ON() gpio_set(LED_PIN)
#endif
```

## Best Practices
**Vibe:** Start with simulator, simple blinking LED first, abstract hardware early
**Evolution:** Document hardware requirements, plan HAL, define interfaces
**Structured:** Test on simulator, add unit tests, prepare for real hardware

## When to Use
**Use for:** IoT devices, microcontrollers, embedded Linux, RTOS
**Other frameworks:** Desktop apps → Desktop, Web → Web, Mobile → Mobile

---
**End of Embedded Framework**
