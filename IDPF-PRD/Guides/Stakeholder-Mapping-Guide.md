# Stakeholder Mapping Guide

## Stakeholder Categories

### End Users
| Type | Description |
|------|-------------|
| Primary | Daily users (customers, employees) |
| Secondary | Occasional users (managers) |
| Indirect | Affected by outputs (report recipients) |

### Business Stakeholders
| Role | Authority |
|------|-----------|
| Executive Sponsor | Budget, strategic direction |
| Product Owner | Features, priorities |
| Business Analyst | Requirements details |
| Department Heads | Domain sign-off |

### Technical Stakeholders
| Role | Authority |
|------|-----------|
| Technical Lead | Architecture, design |
| Dev Team | Implementation |
| QA Lead | Quality standards |
| DevOps/SRE | Infrastructure |
| Security | Security standards |

### External Stakeholders
| Type | Example |
|------|---------|
| Customers | B2B clients |
| Partners | API consumers |
| Regulators | Auditors |
| Vendors | Cloud providers |

## RACI Matrix
- **R**esponsible: Does the work
- **A**ccountable: Final decision (one per item)
- **C**onsulted: Input
- **I**nformed: Updates

| Decision | Sponsor | PO | Tech Lead | Dev | QA |
|----------|---------|-----|-----------|-----|-----|
| Requirements | I | A | C | C | C |
| Architecture | I | C | A | R | C |
| Features | C | A | C | I | I |
| Quality | I | C | C | R | A |
| Release | A | R | C | I | C |

## Power/Interest Grid
| Quadrant | Strategy |
|----------|----------|
| High Power, High Interest | Manage closely |
| High Power, Low Interest | Keep satisfied |
| Low Power, High Interest | Keep informed |
| Low Power, Low Interest | Monitor |

## Communication Plan
| Stakeholder | Frequency | Content |
|-------------|-----------|---------|
| Sponsor | Weekly | Status, risks, decisions |
| PO | Daily | Progress, blockers |
| Dev Team | Daily | Tasks, dependencies |
| End Users | As needed | Feedback, validation |

## Identification Techniques
1. Brainstorm all possible stakeholders
2. Review org chart
3. Map current processes
4. Review existing documentation
5. Ask "who else should I talk to?"

## Checklist
- [ ] End users identified
- [ ] Business stakeholders mapped
- [ ] Technical stakeholders included
- [ ] External stakeholders considered
- [ ] RACI complete
- [ ] Communication plan defined
