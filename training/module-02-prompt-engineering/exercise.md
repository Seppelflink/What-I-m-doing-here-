# Module 02 — Exercise: Prompt iteration and evaluation

Goal
- Write, run, and refine prompts for 3 tasks, and evaluate improvements.

Tasks
1. Task A — Summarization: Use the sample paragraph below and ask for a one-sentence summary.
2. Task B — Instruction following: Ask for a step-by-step checklist to perform a short, low-risk procedure (for example, preparing a desk for a study session).
3. Task C — Structured output: Request JSON with specific keys (e.g., summary, keywords).

Sample paragraph for Task A
> The community garden opens at 8 a.m. on Saturdays. Volunteers can borrow tools from the blue storage shed and should return them before leaving. Watering cans are available beside the greenhouse.

Steps
1. Draft an initial prompt for each task.
2. Run each prompt and record the output.
3. Refine the prompt (add constraints, examples, or formatting requests), rerun, and record the new output.
4. Compare outputs and note which refinements helped and why.
5. For Task C, check that the response is valid JSON and contains the requested keys; do not treat a code block or JSON-like text as validated JSON.

Success criteria
- At least one prompt improves output quality measurably after 1–2 refinements.
- For Task C, the model returns valid JSON with the requested keys, or you record what prevented it from doing so.

Hints
- Use short examples for few-shot guidance.
- Ask for numbered steps or JSON to increase structure.
- Do not include private data in prompts or share outputs containing it.

Optional: instructors can provide a solution.md with example prompt versions and outputs for reference.
