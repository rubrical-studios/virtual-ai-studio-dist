---
name: uml-generation
version: 1.0.0
description: Generate UML diagrams from source code (PlantUML)
---
# UML Generation
## When to Use
- Code analysis, architecture documentation
- Reverse-engineering existing systems
- Communication with stakeholders

## Diagram Types
### Class Diagram
```plantuml
@startuml
class User {
  -id: int
  -name: string
  +getName(): string
}
class Order {
  -items: List<Item>
}
User "1" -- "*" Order
@enduml
```

### Sequence Diagram
```plantuml
@startuml
Client -> API: POST /orders
API -> DB: save(order)
DB --> API: order_id
API --> Client: 201 Created
@enduml
```

### Component Diagram
```plantuml
@startuml
[Frontend] --> [API]
[API] --> [Database]
[API] --> [Cache]
@enduml
```

### Activity Diagram
```plantuml
@startuml
start
:Receive request;
if (Authenticated?) then (yes)
  :Process request;
else (no)
  :Return 401;
endif
stop
@enduml
```

## PlantUML Syntax Reference
### Relationships
| Symbol | Meaning |
|--------|---------|
| `-->` | Dependency |
| `--` | Association |
| `o--` | Aggregation |
| `*--` | Composition |
| `<|--` | Inheritance |
| `..|>` | Implementation |

### Visibility
| Symbol | Meaning |
|--------|---------|
| `+` | Public |
| `-` | Private |
| `#` | Protected |
| `~` | Package |

## Workflow
1. Analyze source code structure
2. Identify key classes/components
3. Map relationships
4. Generate PlantUML syntax
5. Render diagram

## Output
Provide complete PlantUML code that can be rendered at:
- plantuml.com
- VS Code PlantUML extension
- Local PlantUML installation
