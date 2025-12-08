# Example PRD: TaskFlow Pro
**Version:** 1.0 | **Date:** 2025-12-01 | **Status:** Approved

## Executive Summary
**Problem:** Small teams (5-20) need task coordination - existing tools too complex or too simple.
**Solution:** SaaS task management with project boards, assignments, due dates, collaboration.
**Success:** 1,000 active teams/6mo, 70% MAU, <2min first task creation.

## Stakeholders
| Role | Name | Responsibility |
|------|------|----------------|
| Product Owner | Sarah Chen | Requirements, priorities |
| Tech Lead | Mike Johnson | Architecture |
| QA Lead | Lisa Park | Quality |

## Scope
**In:** Registration, auth, workspaces, project boards, tasks, assignments, comments, notifications, web app
**Out (v1):** Mobile native, analytics, integrations, time tracking, attachments, Gantt

## Requirements

### REQ-001: User Registration (High)
AC: Valid email+password → account + confirmation email | Duplicate email → error | Invalid format → error

### REQ-002: User Authentication (High)
AC: Valid creds → session + dashboard | Invalid → error | 5 fails → 15min lock

### REQ-003: Create Workspace (High)
AC: Logged in + name → workspace created, user=owner | >50 chars → error | Can invite via email

### REQ-004: Create Project Board (High)
AC: Member + name → board with columns (To Do/In Progress/Done) | Kanban view | Owner can rename

### REQ-005: Create Task (High)
AC: Member + title → task in "To Do" | Can add description | Can set due date

### REQ-006: Assign Task (High)
AC: Assign to member → displayed on task | Appears in "My Tasks" | Email notification

### REQ-007: Move Task (High)
AC: Drag to column → task moves | Real-time update | Order preserved

### REQ-008: Task Comments (Medium)
AC: Add comment → shows author+timestamp | Assignee notified | Edit within 5min

## NFRs
**Performance:** Page <2s, API p95 <500ms, 50 concurrent/workspace, drag <100ms
**Security:** Email/password, bcrypt, TLS 1.2+, 24hr session, CSRF tokens
**Reliability:** 99.9% availability, daily backup, <1hr recovery
**Usability:** WCAG 2.1 AA, Chrome/Firefox/Safari/Edge (2 versions), 320px-4K

## Constraints
Budget $50K, 3mo timeline, 2 devs, PostgreSQL required

## Risks
Real-time sync → Start polling, add WebSocket | Drag-drop browser issues → react-beautiful-dnd | Email → SendGrid

## Testing
TDD required, 80% coverage, Playwright E2E, no ATDD/BDD

## Handoff
**Framework:** IDPF-Structured (fixed requirements, small team, fixed timeline)
**Order:** REQ-001→002→003→004→005→006→007→008

**Status: APPROVED**
