# Exercise — Build a Demo App

Exercise title: Prototype a one-page demo app that calls a model API

Setup
- Use Node.js 18 or later and follow the [starter app instructions](README.md). It runs in mock mode without an API account; configure a real provider only if you have one.
- Keep the starter bound to your local machine. Do not expose it to the public internet or use real personal/customer data.

Description
- Part A: App skeleton (15–25 minutes)
  - Create a minimal frontend (HTML/CSS/JS) with an input box, submit button, and result area.
  - Create or inspect a lightweight backend endpoint that accepts the prompt and forwards it to a model API (server-side call with API key). For this guided setup, use the included starter.

- Part B: Wire the model (20–30 minutes)
  - Implement the API call using your preferred SDK or curl (keep token budgets small).
  - Show the returned text in the UI; handle loading and error states.

- Part C: Safety & resilience (15–25 minutes)
  - Add input validation (for example, a maximum length) and render model output as text, not executable HTML. A keyword or regex filter is only a limited demonstration, not a complete safety control.
  - Handle transient errors with a bounded retry/backoff and show a user-friendly error message without exposing provider details.

- Part D: Deployment plan (optional, 15–30 minutes)
  - Run locally and demo the flow, or outline what must change before hosting it.
  - Do not deploy the starter as-is. List the authentication, abuse/rate limits, secret storage, monitoring, and provider-cost controls needed for a hosted version.

Success criteria
- The UI accepts input, the backend calls the model, and the response is displayed reliably.
- At least one safety filter and one error-handling strategy are implemented.
- A short README or demo recording explains how to run and where to inspect logs.

Hints
- Keep requests small during testing (low max tokens) to control cost.
- Use environment variables for API keys; never commit them.
- For students without API access, provide a mock endpoint that returns canned responses.
- Do not deploy the exercise starter as-is; it has no authentication, rate limiting, or production security review.

Solution (optional)
- Provide a minimal starter app in assets/starter/ (index.html, server.js, README)
- Instructor solutions (full sample repo) can live in assets/solutions/ but are ignored by .gitignore by default
