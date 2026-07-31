# Module 05 — Build a Demo App

Overview
- Guided hands-on module: build a small demo app that integrates a generative model (chat, summarization, or code assistant).
- Focus: end-to-end flow (prompt → API → render), safety hooks, and minimal deployment.

Learning objectives
- Design a minimal demo app architecture (frontend, backend, model API)
- Implement a working prototype that calls a model API and displays results
- Add simple safety checks, rate-limit handling, and basic telemetry
- Deploy locally or to a simple hosting target (e.g., Netlify, Vercel, or a container)

Structure
- slides.md — architectural patterns, security, deployment notes
- exercise.md — step-by-step build tasks and success criteria
- assets/ — optional sample code, API snippets, or starter templates

Estimated duration: 60–90 minutes (hands-on)

Starter app
- A minimal starter is included at assets/starter/ (index.html, server.js, .env.example).
- Quick run:
  1. cd assets/starter
  2. npm init -y && npm install express node-fetch@2
  3. (optional) set MODEL_API_URL=... & set MODEL_API_KEY=...
  4. node server.js
  5. Open http://localhost:3000

Note: Instructor-only solutions live under assets/solutions/ and are intentionally untracked.
