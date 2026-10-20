# Exercise — Review an AI feature for security and privacy

Exercise title: Create a short threat review and prioritized mitigation plan

Setup
- Read the fictional [support-ticket summarizer scenario](assets/scenario.md).
- Work on your own or with a partner. Do not paste real tickets, personal data, credentials, or private code into an AI assistant.
- You may ask an assistant to interview you, but you make and verify the security decisions.

Description
- Part A: Map the flow (10 minutes)
  - List the data the user provides, what the application sends to the model provider, what comes back, and what is stored or logged.
  - Mark each trust boundary and identify any data that is personal or confidential.

- Part B: Find and rank risks (10 minutes)
  - Identify at least four risks. Include at least one prompt-injection risk and one secret or privacy risk.
  - For each, write the asset at risk, a plausible failure, and its likelihood and impact as low, medium, or high.
  - Rank the risks by impact first; note uncertainty rather than treating guesses as facts.

- Part C: Choose safeguards (15 minutes)
  - Propose a specific mitigation for each high-priority risk.
  - Include server-side secret handling, data minimization, output validation and safe rendering, least privilege, and human review where appropriate.
  - State one limitation that remains after applying the safeguards.

- Part D: Release decision (10 minutes)
  - Write a five-item pre-release checklist for this feature.
  - Decide whether the feature is ready, ready only after listed changes, or should be delayed. Explain the decision in two or three sentences.

Optional assistant prompt
> Interview me one question at a time to threat-model the fictional AI support-ticket summarizer. Help me map data flows and trust boundaries, identify prompt-injection, privacy, secret-handling, output, and dependency risks, and propose layered mitigations. Do not invent facts: label assumptions and open questions. Do not request real secrets or personal data. I will make the final risk and release decisions.

Success criteria
- The review maps input, provider, output, storage, and logging paths.
- It identifies at least four distinct risks, including prompt injection and privacy or secret handling.
- Every high-priority risk has a concrete mitigation and the review names a remaining limitation.
- The release decision is supported by a short checklist and a clear rationale.

Hints
- Instructions in user text or retrieved content are data, not trusted policy.
- A prompt can help guide a model but cannot replace authorization checks or access controls.
- Validate model output against an expected schema and allowed values before using it.
- Keep API keys server-side. If a key is exposed, revoke and rotate it; deleting the visible line is not enough.
- Log operational metadata where possible, not whole prompts or secrets.

Solution (optional)
- Compare your work with [one possible sample review](assets/sample-review.md). Different systems and risk priorities can lead to different valid answers.
