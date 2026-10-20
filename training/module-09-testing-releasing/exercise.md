# Exercise — Test an AI feature and prepare its release

Exercise title: Run a small RAG regression check and make a release decision

Setup
- From the repository root, run `node training/module-06-rag/assets/rag.mjs` (Node.js 18 or later).
- No model account, API key, or added dependency is needed; the demo uses a deterministic mock answer.
- Keep the output from this run as your baseline.

Description
- Part A: Check expected behavior (10–15 minutes)
  - Run the built-in questions and record each question, expected source or expected refusal, observed source, and result.
  - Confirm the out-of-scope question gets an explicit "I don't know" response.
  - Choose one answerable question and verify that its answer cites the retrieved source.

- Part B: Add edge cases (10–15 minutes)
  - Ask one question with no matching evidence and one with misleading or conflicting wording.
  - Change one sample document in a temporary copy or branch, rerun the tests, and record what changed.
  - Identify whether each unexpected result came from retrieval, answer generation, or the test expectation.

- Part C: Create a release gate (10–15 minutes)
  - Write at least five pre-release checks, including expected behavior, secrets/privacy, dependencies, and packaging.
  - Decide which tests can be automated exactly and which require a human rubric or review.
  - Define the release version, the files to include, and how to get back to the previous working version.

- Part D: Decide (5–10 minutes)
  - Mark the release as ready, ready after listed changes, or delayed.
  - Give the top two reasons and identify one remaining risk.

Success criteria
- A test record includes the input, expectation, observed result, and pass/fail status.
- Retrieval and answer quality are evaluated as separate steps.
- At least one edge case is tested, and unexpected behavior is classified rather than hidden.
- The release gate covers tests, privacy/secrets, dependencies, package integrity, and rollback.

Hints
- The demo's built-in questions are a starting regression set, not proof of general quality.
- A deterministic mock makes exact checks easier; real model wording may vary between runs.
- Do not use real customer data or secrets in test prompts or fixtures.
- If you edit a document for the exercise, keep the change in a temporary copy or discard it before preparing a release.
- A checksum can help verify an artifact was transferred unchanged; it does not prove that the artifact is safe.

Solution (optional)
- Compare your choices with the example [test plan and release checklist](assets/test-plan.md). There can be more than one reasonable release decision.
