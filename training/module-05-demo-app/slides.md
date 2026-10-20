# Module 05 — Slides (Build a Demo App)

Title: Build a Demo App
Duration: 60–90 minutes

Learning objectives:
- Architect a small web demo that integrates a model API
- Implement basic backend and frontend pieces and wire them together
- Add safety filters, error handling, and basic observability

# Slide 1 — Demo goals
- Minimal viable demo: one input, one model call, rendered response
- Keep UI simple: textbox + submit + result area

# Slide 2 — Reference architecture
- Frontend (static site) → Backend API (serverless or small express app) → Model API
- Where to apply safety checks: client-side pre-checks, server-side filtering, and logging

# Slide 3 — API considerations
- Authentication, rate limits, retries, idempotency
- Backend should keep API keys secret; prefer server-side calls

# Slide 4 — Prompts & UI design
- Input validation, guiding prompts (system instructions), short examples
- UX patterns: streaming responses vs full result

# Slide 5 — Safety & telemetry
- Sanitize inputs, output filtering, log redaction
- Simple filters catch only known patterns and do not prove output is safe
- Track requests, errors, and flagged outputs (aggregate metrics)

# Slide 6 — Deployment options
- Local: run via Node/Python dev server
- Hosted deployment needs a security review, authentication, abuse/rate limits, and protected secrets
- Do not expose the local exercise starter as-is

# Slide 7 — Demo enhancements
- Add conversational history, caching, or rate-limiting for cost control
- Add a small sample dataset for batch testing

# Slide 8 — Instructor notes
- Keep scaffolding small; provide starter repo or code snippet in assets/
- Encourage discussing trade-offs: UX, cost, and safety
