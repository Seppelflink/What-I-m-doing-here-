# Module 09 — Slides (Testing and Releasing)

Title: Testing and Releasing
Duration: 45–60 minutes

Learning objectives:
- Test AI features with repeatable cases and explicit expectations
- Distinguish deterministic checks from model-quality evaluations
- Prepare a safe, verifiable release and know how to roll it back

# Slide 1 — "It worked once" is not a test
- A successful demo shows one path, not the feature's reliability
- Tests make expected behavior visible and repeatable
- Test assumptions and failure cases as well as the happy path

# Slide 2 — Use layers of testing
- Unit checks: parsing, validation, permissions, and other deterministic logic
- Integration checks: boundaries such as app-to-provider and retrieval-to-generation
- End-to-end checks: a learner or user completes the real workflow
- Manual review remains useful for accessibility, clarity, and consequential decisions

# Slide 3 — AI needs two kinds of checks
- Deterministic software behavior should have exact expected results
- Model responses vary; evaluate them against a rubric rather than requiring identical wording
- Keep a small, representative set of inputs and review changes over time
- Never let a single score hide an unsafe or unsupported answer

# Slide 4 — Test more than the happy path
- Normal input: does the feature do the expected task?
- Empty, long, malformed, or unsupported input: does it fail safely?
- Missing context: does it say it does not know rather than invent an answer?
- Hostile or sensitive input: are permissions and privacy safeguards still effective?
- Provider timeout or quota: does the user receive a safe, useful error?

# Slide 5 — Test retrieval and generation separately
- First check whether the right source was retrieved
- Then check whether each answer claim is supported by its cited source
- Keep expected sources and acceptable answer criteria with each test case
- A plausible answer is not necessarily a correct or grounded answer

# Slide 6 — Release in a controlled way
- Review the changes, test results, dependency alerts, and known limitations
- Choose a version and update the changelog
- Package only the intended files; inspect the archive before distribution
- Verify the downloaded artifact and keep a known-good prior release

# Slide 7 — Rollback and learn
- Define who can pause or disable the feature
- Record how to return to the last known-good version
- Check logs and feedback without collecting unnecessary prompts or personal data
- Turn incidents and user reports into new regression cases

# Slide 8 — Instructor notes
- Run the existing Module 06 demo locally and use its outputs as a small test pass
- Ask learners to distinguish a retrieval failure from an answer-generation failure
- For paid or consequential use, explain that a green test suite is evidence, not a guarantee
- Use `assets/test-plan.md` as a sample only after learners draft their own cases
