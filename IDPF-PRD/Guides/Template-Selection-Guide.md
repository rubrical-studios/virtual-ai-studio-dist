# Template Selection Guide

## Available Templates
| Template | Best For | Formality | Size |
|----------|----------|-----------|------|
| PRD-Structured-Comprehensive | Large, formal, regulated | High | 20-50+ pages |
| PRD-Structured-Moderate | Standard projects | Medium | 5-15 pages |
| PRD-Agile-Lightweight | Iterative, startups | Low | 3-10 pages |

## Decision Tree
```
Requirements stable?
├─ YES → Regulated/enterprise?
│         ├─ YES → Comprehensive
│         └─ NO → Moderate
└─ NO → High uncertainty?
         ├─ YES → Consider IDPF-Vibe first
         └─ NO → Lightweight
```

## Template Selection
**Comprehensive:** Fixed requirements, regulatory compliance, multiple stakeholders, 6+ months, contracts/SOW
**Moderate:** Reasonably stable requirements, internal project, 1-6 months, small team
**Lightweight:** Evolving requirements, iterative delivery, rapid start, user feedback shapes features

## Contents Comparison
| Section | Comprehensive | Moderate | Lightweight |
|---------|--------------|----------|-------------|
| Executive Summary | Detailed | Brief | No |
| Stakeholders | Full RACI | Key roles | Brief |
| Functional Reqs | REQ-IDs | REQ-IDs | Features/Stories |
| NFRs | Comprehensive | Key only | High-level |
| Risks | Full register | Major only | No |
| Traceability | Full matrix | No | No |
| Approvals | Formal | Simple | No |

## Scoring Matrix
Rate 1-5: Requirements stability, Regulatory needs, Project duration, Team size, Stakeholder count, Documentation needs, Risk tolerance

**7-15:** Lightweight | **16-25:** Moderate | **26-35:** Comprehensive

## Framework Compatibility
| Template | Primary | Can Also Use |
|----------|---------|--------------|
| Comprehensive | IDPF-Structured | IDPF-Agile (convert) |
| Moderate | IDPF-Structured | IDPF-Agile (convert) |
| Lightweight | IDPF-Agile | IDPF-Structured (formalize) |

## When to Skip PRD
**IDPF-Vibe:** Exploring new idea, don't know what to build, proof of concept
**IDPF-LTS:** Maintenance only, bug fixes, no new features
