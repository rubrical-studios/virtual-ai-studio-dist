# Agile-Driven Development Framework - Commands
**Module:** Commands (loaded on-demand)

## Backlog Management
| Command | Description |
|---------|-------------|
| `Create-Backlog` | Generate product backlog from vision |
| `Show-Backlog` | Display current backlog |
| `Add-Story` | Add new story |
| `Refine-Story [ID]` | Update/clarify story |
| `Estimate-Story [ID]` | Re-estimate points |
| `Prioritize-Backlog` | Re-order by priority |
| `Split-Story [ID]` | Break into smaller stories |
| `Archive-Story [ID]` | Move to icebox |

## GitHub Issues
| Command | Description |
|---------|-------------|
| `Create-Issues` | Create from PRD/backlog (auto-detect) |
| `Create-Issues-Agile` | Explicit Agile creation |

Hierarchy: Epic → Story sub-issues (via `gh pmu sub add`)
Status sync: Start-Story → in_progress, Story-Complete → in_review, Done → close

## Sprint
| Command | Description |
|---------|-------------|
| `Plan-Sprint` | Select stories for sprint |
| `Show-Sprint` | Display sprint backlog |
| `Start-Story [ID]` | Begin story development |
| `Story-Status` | Check current story progress |
| `Story-Complete [ID]` | Mark story done |
| `Sprint-Progress` | Show burndown |
| `Sprint-Review` | Review completed sprint |
| `Sprint-Retro` | Conduct retrospective |
| `End-Sprint` | Close sprint (Review + Retro) |

## Development
| Command | Description |
|---------|-------------|
| `Done-Next-Step` | TDD iteration successful, proceed |
| `Rollback-Previous-Step` | Undo last iteration |
| `Run-Tests` | Execute full test suite |
| `Show-Coverage` | Display coverage report |
| `Refactor-Now` | Dedicated refactoring session |

**TDD Skills:** tdd-red-phase, tdd-green-phase, tdd-refactor-phase, tdd-failure-recovery, test-writing-patterns

## Project
| Command | Description |
|---------|-------------|
| `Project-Status` | Health dashboard |
| `Velocity-Report` | Velocity trends |
| `Push-Changes` | Commit and push |
| `Create-Release` | Tag release |
| `Project-Complete` | Finalize, create PR |

## Special Scenarios
| Command | Description |
|---------|-------------|
| `Story-Blocked [ID] [reason]` | Mark blocked |
| `Story-Growing [ID]` | Flag scope creep |
| `Emergency-Bug [description]` | Create unplanned fix |
| `Pivot [direction]` | Change direction |

## Utility
| Command | Description |
|---------|-------------|
| `List-Commands` | Show with descriptions |
| `List-Cmds` | Show without descriptions |
| `Help [command]` | Detailed help |
| `Review-Last` | Review last reply accuracy |

---
**End of Commands Module**
