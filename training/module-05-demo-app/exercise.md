# Exercise — Build a Demo App

Exercise title: Prototype a one-page demo app that calls a model API

Description
- Part A: App skeleton (15–25 minutes)
  - Create a minimal frontend (HTML/CSS/JS) with an input box, submit button, and result area.
  - Create a lightweight backend endpoint that accepts the prompt and forwards it to a model API (server-side call with API key).

- Part B: Wire the model (20–30 minutes)
  - Implement the API call using your preferred SDK or curl (keep token budgets small).
  - Show the returned text in the UI; handle loading and error states.

- Part C: Safety & resilience (15–25 minutes)
  - Add simple input validation (length, disallowed tokens) and an output filter (regex/patterns).
  - Implement retry/backoff for transient errors and show a user-friendly error message.

- Part D: Deploy & demo (optional, 15–30 minutes)
  - Deploy the frontend to Netlify/Vercel or run locally and demo the flow.

Success criteria
- The UI accepts input, the backend calls the model, and the response is displayed reliably.
- At least one safety filter and one error-handling strategy are implemented.
- A short README or demo recording explains how to run and where to inspect logs.

Hints
- Keep requests small during testing (low max tokens) to control cost.
- Use environment variables for API keys; never commit them.
- For students without API access, provide a mock endpoint that returns canned responses.

Solution (optional)
- Provide a minimal starter app in assets/starter/ (index.html, server.js, README)
- Instructor solutions (full sample repo) can live in assets/solutions/ but are ignored by .gitignore by default
