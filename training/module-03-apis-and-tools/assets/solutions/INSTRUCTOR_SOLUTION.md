Instructor solution — Module 03: APIs & Tools

Overview
Includes sample API snippets, expected outputs for exercises, and instructor notes on rate limits and error handling.

Sample API snippets
- curl example (replace API_KEY):
  curl -X POST https://api.example.com/v1/generate -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d '{"prompt":"Hello","max_tokens":50}'

- Python example (requests) in api_snippet.py

Exercise answers
- Show sample request payloads, sample outputs, and how to test retries and error paths.

Safety and cost notes
- Encourage small token budgets during exercises; note rate-limit headers and typical error codes to surface.
