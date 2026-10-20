# Module 03 — Exercise: Call a model API and parse output

Goal
- Make a simple API call to a model (or use a local CLI or mock), parse the response, and handle errors.

Prerequisites
- API key for a model provider OR a local CLI tool configured; a mock can be used if neither is available
- Basic familiarity with curl, Python, or Node.js

Tasks
1. Quick CLI test: run a one-off prompt using your provider's documented API or a local CLI tool and observe the response. If you have no access, use a mock response.
2. Parse output: request structured JSON from the model and validate the returned keys.
3. Error handling: simulate a failure and implement a bounded retry with backoff for retryable errors such as rate limits. Do not deliberately send requests likely to incur cost or trigger account limits.
4. Logging: record request time and status; ensure logs do not contain secrets.

Provider-specific request template (bash/zsh)
- This is a template, not a ready-to-run request. Replace the URL, authentication variables, model, and JSON fields with the values required by your provider's documentation. Set credential variables securely; never put a real key directly in a command that will be saved in shell history.

```sh
AUTH_HEADER=$(printf '%s: %s' "$MODEL_API_AUTH_HEADER" "$MODEL_API_AUTH_VALUE")
curl -sS -X POST "$MODEL_API_URL" \
  -H "$AUTH_HEADER" \
  -H "Content-Type: application/json" \
  -d '{"model":"<provider-model>","prompt":"Summarize: <text>","max_tokens":60}'
```

- Some providers use a different authentication header or request/response format. Do not assume this template works unchanged.
- Request structured output (JSON): include an instruction like "Return JSON with keys 'summary' and 'keywords'."

- Implement a small script (Python/Node) that:
  - Sends the request
  - Parses and validates JSON
  - Retries only a limited number of times on retryable failures such as 429 or transient 5xx responses; avoid logging credentials or full prompts

Success criteria
- Script or local mock returns and validates structured output for at least one prompt
- Script logs request and status without exposing secret values

Optional: add a solution script in assets/solution.py or assets/solution.js as an instructor reference.
