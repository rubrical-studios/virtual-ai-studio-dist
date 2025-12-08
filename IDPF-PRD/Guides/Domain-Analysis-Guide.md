# Domain Analysis Guide

## How to Use
1. Identify industry/domain
2. Review domain profile
3. Use NFRs as starting points
4. Adapt terminology

## Domain Profiles

### E-commerce
**Features:** Catalog, cart, checkout, payments, inventory, shipping, reviews, promotions
**NFRs:** Page load <3s, 99.9% uptime, PCI-DSS, 10x scaling for sales
**Integrations:** Stripe/PayPal, UPS/FedEx, tax services, analytics
**Compliance:** PCI-DSS, GDPR/CCPA

### Healthcare
**Features:** Patient records, scheduling, clinical docs, prescriptions, labs, billing, portal, telemedicine
**NFRs:** HIPAA, encryption at rest, 99.99% availability, complete audit trail, RBAC
**Integrations:** EHR (Epic, Cerner), labs, pharmacy, HL7/FHIR
**Compliance:** HIPAA, HITECH

### Finance
**Features:** Accounts, transactions, transfers, payments, statements, fraud detection
**NFRs:** MFA, ACID transactions, complete audit, 99.99% availability, real-time processing
**Integrations:** Core banking, ACH/SWIFT, credit bureaus, fraud services
**Compliance:** SOX, PCI-DSS, GLBA

### SaaS
**Features:** Multi-tenancy, user/org management, RBAC, subscriptions, API, integrations, analytics
**NFRs:** 99.9% SLA, horizontal scaling, SOC 2, data isolation, <200ms API response
**Integrations:** Okta/Auth0, Stripe, Salesforce, Slack
**Compliance:** SOC 2, GDPR

### IoT
**Features:** Device provisioning, telemetry, monitoring, firmware updates, alerts, visualization
**NFRs:** Offline capability, low latency, millions of devices, device auth, MQTT/CoAP
**Integrations:** AWS IoT/Azure IoT, time-series DB, message brokers
**Compliance:** Industry-specific

### Mobile
**Features:** Auth, profiles, push notifications, offline, sync, in-app purchases, social
**NFRs:** <100ms UI, offline core features, minimal battery, app size optimization, WCAG mobile
**Integrations:** Push services, Firebase, App Store/Google Play, social login
**Compliance:** App store guidelines, GDPR/CCPA

### Education
**Features:** Course management, enrollment, progress, assessments, video, forums, certificates
**NFRs:** WCAG 2.1 AA, 99.9% during school hours, exam period scaling, student privacy
**Integrations:** LMS, video platforms, SSO, proctoring
**Compliance:** FERPA, COPPA

### Government
**Features:** Citizen portal, forms, document management, case management, reporting
**NFRs:** Section 508, WCAG 2.1 AA, FedRAMP, complete audit trails, long-term retention
**Integrations:** Identity verification, Pay.gov, GIS, legacy mainframes
**Compliance:** FedRAMP, Section 508

## Domain Questions
1. Primary domain?
2. Regulations?
3. End users?
4. Expected scale?
5. Required integrations?
