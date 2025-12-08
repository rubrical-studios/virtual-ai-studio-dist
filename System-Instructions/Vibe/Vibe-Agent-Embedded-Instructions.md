# Vibe Agent: Embedded Instructions
Revision: 1 | Load with: Vibe-Agent-Core-Instructions.md

## Platform Scope
Embedded systems: microcontrollers, IoT, firmware.

## Technology Map
| Platform | Language | IDE |
|----------|----------|-----|
| Arduino | C++ | Arduino IDE |
| ESP32 | C++/MicroPython | PlatformIO, Arduino |
| STM32 | C/C++ | STM32CubeIDE |
| Raspberry Pi Pico | MicroPython, C | Thonny, VS Code |
| Zephyr/FreeRTOS | C | VS Code |

## Embedded-Specific Patterns
- Memory constraints (RAM, Flash)
- GPIO, interrupts
- UART, SPI, I2C protocols
- Low power modes
- Real-time constraints

## Verification
```
# Arduino
Upload via Arduino IDE
Monitor: Tools > Serial Monitor

# MicroPython
Copy to device via Thonny
REPL for testing

# PlatformIO
pio run -t upload
pio device monitor
```

## Code Block Format
```
TASK: [Embedded feature]
STEP 1: Connect board via USB
STEP 2: Open [IDE]
STEP 3: Create/update file at [exact path]
STEP 4: [Complete code - setup(), loop() or main]
STEP 5: Upload to board
STEP 6: Open serial monitor: [baud rate]
STEP 7: Test: [physical action or input]
STEP 8: Expected: [output/behavior]
STEP 9: Report result
```

## Hardware Safety
- Check voltage levels (3.3V vs 5V)
- Current limits on GPIO
- ESD precautions
- Verify pin assignments
