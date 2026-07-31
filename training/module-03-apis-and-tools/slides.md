# Module 03 — APIs & tools

Duration: 45 minutes
Level: Beginner → Practical

# Slide 1 — Why APIs matter
APIs let you integrate model capabilities into apps, pipelines, and automation.

# Slide 2 — Authentication & keys
- Keep API keys secret (env vars, secrets stores)
- Never commit keys to source control

# Slide 3 — Request basics
- Prompt / input, model selection, temperature, max_tokens, top_p
- Sync vs streaming responses

# Slide 4 — Rate limits & cost
- Respect provider rate limits and batching
- Monitor usage and set budgets

# Slide 5 — SDKs, CLI, and playgrounds
- Use official SDKs for robustness
- CLI tools and playgrounds for quick experiments

# Slide 6 — Parsing & validation
- Ask for structured output (JSON) when possible
- Validate and sanitize before using data in production

# Slide 7 — Error handling & retries
- Handle 429 (rate limit), 5xx errors, and network issues
- Use exponential backoff for retries

# Slide 8 — Logging & observability
- Log requests (without sensitive data), durations, and error rates
- Add simple tests for core prompts

# Slide 9 — Security & compliance basics
- Don't send PII unless authorized; redact sensitive fields
- Be mindful of data residency and retention policies

# Slide 10 — Demos / Examples
- curl/postman example
- Node/Python SDK snippets
- CLI example to run prompts from terminal

# Slide 11 — Resources
- Links to SDK docs, CLI tools, and example repos

# Slide 12 — Takeaways
- Use SDKs and CLIs for dev speed; design for retries, validation, and cost control
