# Module 03 — Exercise: Call a model API and parse output

Goal
- Make a simple API call to a model (or use a local CLI), parse the response, and handle errors.

Prerequisites
- API key for a model provider OR a local CLI tool configured
- Basic familiarity with curl, Python, or Node.js

Tasks
1. Quick CLI test: run a one-off prompt using curl or a CLI tool and observe the response.
2. Parse output: request structured JSON from the model and validate the returned keys.
3. Error handling: simulate a failure (e.g., small rate-limit test) and implement a retry with backoff.
4. Logging: record request time and status; ensure logs do not contain secrets.

Steps (suggested)
- Example curl (replace <API_KEY> and endpoint with your provider):
  curl -s -X POST "https://api.example.com/v1/generate" \
    -H "Authorization: Bearer <API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{"model":"text-xxx","prompt":"Summarize: <text>","max_tokens":60}'

- Request structured output (JSON): include instruction like: "Return JSON with keys 'summary' and 'keywords'."

- Implement a small script (Python/Node) that:
  - Sends the request
  - Parses and validates JSON
  - Retries on 429/500 with exponential backoff

Success criteria
- Script returns and validates structured output for at least one prompt
- Script logs request and status without exposing secret values

Optional: add a solution script in assets/solution.py or assets/solution.js as an instructor reference.
