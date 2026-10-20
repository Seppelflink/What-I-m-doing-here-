# Module 08 — Slides (Developing Securely)

Title: Developing Securely
Duration: 45 minutes

Learning objectives:
- Map the data and trust boundaries of an AI feature
- Identify common application and AI-specific risks
- Select layered mitigations and record what remains uncertain

# Slide 1 — Security is part of the feature
- A feature is not ready just because its happy path works
- Ask what can go wrong with its inputs, data, model access, outputs, and dependencies
- Add protections during design, implementation, testing, and maintenance

# Slide 2 — Start with the data flow
- Trace data from the user, through your application and model provider, to the response and logs
- Mark trust boundaries: browser to server, server to provider, and retrieved content to model
- Identify who can access each item and how long it is retained

# Slide 3 — Treat model input as untrusted
- User text and retrieved documents can contain instructions that try to override the task
- This is prompt injection; it can be direct or hidden in content the application retrieves
- Delimit and label untrusted content, but do not assume prompt wording alone blocks attacks
- Do not give the model tools or data it does not need

# Slide 4 — Treat model output as untrusted too
- Model output can be incorrect, malformed, or influenced by hostile input
- Validate structure and values before using the result
- Escape text before displaying it; never execute generated code or treat generated text as authorization
- Require a person to review consequential actions

# Slide 5 — Protect secrets and private data
- Keep API keys on the server, in a secret store or local environment file; never put them in browser code
- Ignore local `.env` files in Git, and commit only an empty `.env.example`
- `.gitignore` does not remove a secret already committed; revoke and rotate an exposed key
- Send only the data needed for the task; check provider retention and training settings

# Slide 6 — Use least privilege and safe defaults
- Give each component only the data, permissions, and tools it needs
- Require explicit user confirmation before sending messages, changing records, or making purchases
- Set size, time, and rate limits; handle provider failures without exposing internal details
- Keep a safe fallback when the model is unavailable

# Slide 7 — Dependencies, logs, and response
- Use trusted, maintained dependencies and review security updates before release
- Avoid logging prompts, personal data, credentials, or full model responses by default
- Record enough operational information to diagnose issues without retaining unnecessary content
- Know how to revoke credentials, disable a risky feature, and notify affected users

# Slide 8 — A practical review
- What data enters, leaves, or is stored by the feature?
- What is untrusted, and what could it try to make the system do?
- What permissions or tools can the model reach?
- How are secrets, outputs, dependencies, and failures handled?
- What remains a risk, and who accepts or reviews it?

# Slide 9 — Instructor notes
- Use the fictional scenario in `assets/scenario.md`; no live model or real user data is needed
- Ask learners to prioritize the highest-impact risks, not to produce a perfect threat model
- Emphasize that prompt wording is not an access-control boundary and that mitigations reduce rather than eliminate risk
- Use `assets/sample-review.md` only after learners have made their own first pass
