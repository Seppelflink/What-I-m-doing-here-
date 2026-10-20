# Exercise — Responsible AI hands-on

Exercise title: Build a mini safety test-suite and mitigation plan

Description
- Part A: Bias detection (5–15 minutes)
  - Create 5–10 short, fictional test prompts. For a paired comparison, change only one demographic cue while keeping qualifications and task details the same.
  - Query a chosen model (or use the playground) with each prompt and record outputs using the same settings.
  - Identify differences that may indicate bias, unfairness, or unsafe content; treat them as signals for review, not proof from a single run.

- Part B: Write mitigations (10–20 minutes)
  - For two problematic prompts, propose at least one mitigation each: a policy/process change, prompt change, output check, or human review.
  - Implement or describe a simple post-processing check (pseudo-code acceptable) that flags a narrow, known pattern for review.

- Part C: Red-team test (10 minutes)
  - Craft 3 harmless fictional prompts that test whether the model follows task boundaries or exposes information it should not reveal.
  - Run them and note whether the mitigation from Part B catches them.

Success criteria
- A small report (1 page or README section) listing detected issues, chosen mitigations, and trade-offs.
- At least one implemented filter or clear mitigation plan described.

Hints
- Keep examples short and focused; avoid reproducing sensitive real-world data.
- Do not use real people's data or ask the model to make consequential decisions about people.
- Use systematic labeling: prompt id, output, issue-category, mitigation
- A prompt or keyword filter is not a complete safety control; note false positives, false negatives, and where human review is needed.

Solution (optional)
- Provide sample prompts and a sample regex-based filter in assets/solution.txt
- For full instructor solutions, keep them in assets/solutions/ so learners cannot see by accident
