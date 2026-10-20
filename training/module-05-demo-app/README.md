# Module 05 — Build a Demo App

Overview
- Guided hands-on module: build a small demo app that integrates a generative model (chat, summarization, or code assistant).
- Focus: end-to-end flow (prompt → API → render), safety hooks, and deployment planning.

Learning objectives
- Design a minimal demo app architecture (frontend, backend, model API)
- Implement a working prototype that calls a model API and displays results
- Add simple safety checks, rate-limit handling, and basic telemetry
- Run locally and identify the security work required before any hosted deployment

Structure
- slides.md — architectural patterns, security, deployment notes
- exercise.md — step-by-step build tasks and success criteria
- assets/ — optional sample code, API snippets, or starter templates

Estimated duration: 60–90 minutes (hands-on)

Starter app
- A minimal starter is included at assets/starter/ (index.html, server.js, .env.example).
- Requires Node.js 18 or later. It uses a mocked response when both model settings are absent; set both to use a real provider. The endpoint and request/response format are provider-specific examples that you must adapt.
- Quick run:
  1. `cd training/module-05-demo-app/assets/starter`
  2. Run `npm init -y` and `npm install express dotenv`.
  3. Copy `.env.example` to `.env`. Configure `MODEL_API_URL`, `MODEL_API_KEY`, and the provider's authentication header/prefix as documented by your provider, or leave the model settings empty for mock mode.
  4. Run `node server.js`.
  5. Open `http://127.0.0.1:3000`.

The local `.env` is ignored by Git. Never commit a real API key. This starter has no production authentication, rate limiting, or deployment hardening; keep it on localhost for the exercise.
