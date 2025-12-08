# Framework System Instructions Reference
**Version:** 1.0.0
## Overview
**Location:** `System-Instructions/`
**Purpose:** Define assistant identity, expertise, behavioral patterns
**Critical:** System Instructions are REQUIRED for all framework operation

## Domain Specialization Architecture
**Pattern:** Core + Domain Specialization
- Core-Developer-Instructions.md (Rev 1.0): Foundation competencies
- 17 Domain Specialists: Specialized expertise (loaded with Core)
- Domain-Selection-Guide.md (Rev 1.0): Selection guide

### Loading Pattern
1. Load Core-Developer-Instructions.md (universal)
2. Load Domain specialist file(s) for depth
3. Domain extends and deepens core

### Core Developer Competencies
- Version Control (Git, branching, PRs)
- Testing Fundamentals (Unit, Integration, E2E, TDD)
- Agile Development (Scrum, Kanban, CI/CD)
- Code Quality (SOLID, DRY, YAGNI, KISS)
- Design Patterns (Creational, Structural, Behavioral)
- Cross-Platform Awareness (OS differences, paths)
- Security Fundamentals (OWASP Top 10, auth)
- Performance Basics (Big O, caching, profiling)

## Domain Specialists
| # | Specialist | Focus |
|---|------------|-------|
| 1 | Full-Stack-Developer | End-to-end, API design, React/Vue/Angular + Node/Python/Ruby |
| 2 | Backend-Specialist | REST/GraphQL, auth, Django/Flask/FastAPI/Express/Rails/Spring/Go |
| 3 | Frontend-Specialist | React/Vue/Angular/Svelte, CSS, state management, performance |
| 4 | DevOps-Engineer | CI/CD, Docker, Kubernetes, IaC (Terraform/Pulumi), monitoring |
| 5 | Database-Engineer | Schema, optimization, replication, migrations, PostgreSQL/MySQL/MongoDB |
| 6 | API-Integration-Specialist | REST/GraphQL/gRPC/WebSocket, microservices, Kafka/RabbitMQ |
| 7 | Security-Engineer | OWASP, OAuth/OpenID, cryptography, pentesting, compliance |
| 8 | Platform-Engineer | IDPs, service catalogs, DevEx, self-service infra |
| 9 | Mobile-Specialist | iOS (Swift), Android (Kotlin), React Native, Flutter |
| 10 | Data-Engineer | ETL (Airflow), Spark, data modeling, warehousing |
| 11 | QA-Test-Engineer | Test strategy, automation, performance testing, TDD/BDD |
| 12 | Cloud-Solutions-Architect | System design, AWS/Azure/GCP, scalability, DR, ADRs |
| 13 | SRE-Specialist | SLO/SLI/SLA, error budgets, observability, incident response |
| 14 | Embedded-Systems-Engineer | C/C++, ARM/AVR/ESP32, RTOS, hardware protocols |
| 15 | ML-Engineer | TensorFlow/PyTorch, model dev, MLOps, optimization |
| 16 | Performance-Engineer | Profiling, load testing, APM |
| 17 | PRD-Analyst | Requirements, PRD creation, Reverse-PRD |
| 18 | Accessibility-Specialist | WCAG, AT testing, auditing, compliance |

## Domain Selection Guide
### Quick Reference
| Use Case | Domains |
|----------|---------|
| Full-Stack Web | Core + Backend + Frontend + Database |
| Cloud-Native Microservices | Core + API-Integration + DevOps + Cloud-Architect |
| Mobile App with Backend | Core + Mobile + Backend |
| Data Platform | Core + Data-Engineer + Database + Cloud-Architect |
| Secure Production | Core + Backend + Security + SRE |

### Decision Tree
- APIs/services → Backend-Specialist
- UIs → Frontend-Specialist
- Infrastructure → DevOps-Engineer or Platform-Engineer
- System design → Cloud-Solutions-Architect
- Reliability → SRE-Specialist
- Data → Data-Engineer + Database-Engineer
- Mobile → Mobile-Specialist
- Security → Security-Engineer
- Performance → Performance-Engineer
- ML → ML-Engineer
- Embedded → Embedded-Systems-Engineer
- API integration → API-Integration-Specialist
- Testing → QA-Test-Engineer
- Requirements → PRD-Analyst
- Accessibility → Accessibility-Specialist

**Multiple domains can be combined**

## Legacy System Instructions
### Senior_Full_Stack_Developer.md (Rev 6)
**Status:** Legacy - backward compatibility
**Use Case:** Generic full-stack without domain specialization
**Coverage:** Frontend, Backend, databases, testing, deployment, agile
**Integrated Skills:** TDD phases, test-writing-patterns

## Vibe Agent System Instructions
### Vibe-Agent-Core-Instructions.md (Rev 1.3)
Platform-agnostic for Vibe-to-Structured workflow
**Behaviors:** Concise communication, single code block, context preservation, TDD management

### Platform-Specific
- Vibe-Agent-Desktop-Instructions.md
- Vibe-Agent-Web-Instructions.md
- Vibe-Agent-Mobile-Instructions.md
- Vibe-Agent-Game-Instructions.md
- Vibe-Agent-Embedded-Instructions.md
- Vibe-Agent-Newbie-Instructions.md

**Integration:** Core + Platform-specific loaded together
