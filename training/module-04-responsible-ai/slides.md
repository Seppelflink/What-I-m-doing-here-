# Module 04 — Slides (Responsible AI & Safety)

Title: Responsible AI & Safety
Duration: 30-45 minutes

Learning objectives:
- Identify risks: bias, privacy, hallucination, and misuse
- Understand basic mitigation techniques: data hygiene, prompt engineering, input/output filtering, and monitoring
- Know simple evaluation and red-teaming approaches

# Slide 1 — Why Responsible AI?
- Societal impact, legal and reputational risk
- Real-world examples of harm

# Slide 2 — Common failure modes
- Bias and disparate impact
- Privacy leakage (training data memorization)
- Hallucinations and incorrect outputs
- Adversarial or malicious uses

# Slide 3 — Data hygiene
- Collect representative examples
- Remove sensitive PII where possible
- Label review and annotation guidance

# Slide 4 — Mitigations in prompt & model use
- Prompt framing and constraints
- System messages and role prompts
- Temperature and response length controls

# Slide 5 — Output filtering & human checks
- Keyword/regex filters for disallowed content
- A model's self-reported confidence is not proof that an answer is correct
- Fallback responses and human review for high-risk outputs
- Human-in-the-loop review for high-risk outputs

# Slide 6 — Evaluation strategies
- Create targeted test cases (safety test suite)
- Automated checks + human audits
- Metrics: false-positive/negative rates for safety triggers

# Slide 7 — Red-teaming and adversarial testing
- Design adversarial prompts to surface weaknesses
- Record failures and iterate mitigations

# Slide 8 — Minimal safety policy (example)
- "If output contains X or references Y, don't return it and flag for review."
- Where to store and how to version the policy

# Slide 9 — Operationalizing safety
- Monitoring: logs, metrics, alerting
- Incident handling: rollback, notify, patch

# Slide 10 — Summary & instructor notes
- Keep examples concrete and non-technical when needed
- Emphasize trade-offs: safety vs. utility
- Provide learners with the exercise that builds a small test-suite

Notes for instructors
- Use short case-studies and demos
- Encourage learners to run red-team prompts and discuss results
