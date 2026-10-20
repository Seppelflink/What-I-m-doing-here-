# Sample test plan and release checklist

## Regression test matrix

| Case | Input | Expected behavior | Check |
|---|---|---|---|
| Known answer | "How long does express shipping take?" | Answer cites `faq#1` and matches the shipping policy in that chunk | Compare retrieved source and answer with the document |
| Known answer | "How long is the Widget Pro battery life?" | Answer cites `guide#1` and says twelve hours | Compare source and key fact |
| Known answer | "Does the warranty cover water damage?" | Answer cites `policy#1` and says it is not covered | Compare source and key fact |
| No evidence | "What is the CEO's favorite color?" | Explicitly says it does not know from the provided documents | Check refusal and absence of an invented fact |
| Conflicting content | Add a temporary document with a different warranty term | Conflict is detected or surfaced for review; the app must not silently present an unsupported certainty | Inspect retrieved chunks and document freshness |
| Provider failure (design case) | Provider times out or returns invalid data | User gets a safe error; no secret or full sensitive prompt appears in logs | Review implementation and failure-path behavior |

The first four cases match the built-in Module 06 demo. The last two extend the test plan and may require a code change or manual review; do not claim they passed if they were not executed.

## Evaluation notes

- Check retrieval first: was the expected source in the retrieved results?
- Check the answer separately: are its key claims supported by that source?
- Exact answer text is reasonable for the deterministic mock. For a real model, use a rubric for factual support, refusal quality, citations, privacy, and safety instead of exact-string matching alone.
- Keep prompts and documents fictional; avoid personal or confidential data in fixtures.

## Example release checklist

- [ ] Regression tests pass, and manual-review results are recorded.
- [ ] Known limitations and any unresolved high-impact failures are documented.
- [ ] No credentials or sensitive test data are present in source, fixtures, logs, or package.
- [ ] Dependencies and security alerts have been reviewed.
- [ ] Version and changelog match the release contents.
- [ ] The package contains only intended files and can be opened and used as documented.
- [ ] The published or transferred artifact matches its recorded checksum.
- [ ] The previous known-good version and rollback steps are available.

## Example decision

The deterministic demo is ready for a learning exercise if the first four cases behave as expected. A production release is not established by these checks alone: provider failures, access control, real-model behavior, and deployment configuration still need to be tested in the actual application.
