# Exercise — Responsible AI hands-on

Exercise title: Build a mini safety test-suite and mitigation plan

Description
- Part A: Bias detection (5–15 minutes)
  - Pick a short dataset of example prompts (5–10 items) that cover demographic or sensitive attributes.
  - Query a chosen model (or use the playground) with each prompt and record outputs.
  - Identify any outputs that appear biased, offensive, or unsafe.

- Part B: Write mitigations (10–20 minutes)
  - For two problematic prompts, propose at least one mitigation each: prompt change, output filter, or policy rule.
  - Implement a simple post-processing filter (pseudo-code acceptable) that flags or redacts disallowed tokens.

- Part C: Red-team test (10 minutes)
  - Craft 3 adversarial prompts intended to elicit unsafe or disallowed content.
  - Run them and note whether the mitigation from Part B catches them.

Success criteria
- A small report (1 page or README section) listing detected issues, chosen mitigations, and trade-offs.
- At least one implemented filter or clear mitigation plan described.

Hints
- Keep examples short and focused; avoid reproducing sensitive real-world data.
- Use systematic labeling: prompt id, output, issue-category, mitigation

Solution (optional)
- Provide sample prompts and a sample regex-based filter in assets/solution.txt
- For full instructor solutions, keep them in assets/solutions/ so learners cannot see by accident
