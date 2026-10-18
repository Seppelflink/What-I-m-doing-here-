# Exercise — Plan a small project with an AI interviewer

Exercise title: Produce a reviewed `plan.md` for a small project idea

Setup
- Pick a small project idea you would genuinely like to build (for example a to-do list, a recipe organizer, or a study timer).
- Open any chat-based AI assistant. No API key or coding is required.
- Open [steps.md](../../steps.md) and copy steps 1–9 together with the "Rules for the assistant" section into the chat, or paste this instruction: "Interview me one question at a time to plan my project. Offer suggested answers, record guesses as assumptions, and never ask for or write secrets. At the end, write a plan.md."

Description
- Part A: Idea and audience (10 minutes)
  - Answer the interview questions for steps 1–2 in your own words.
  - Ask the AI to repeat back what it understood in one sentence per step.

- Part B: Requirements and MVP (15 minutes)
  - List all wishes unsorted, then mark each as must-have or nice-to-have.
  - Define when your first version counts as finished.

- Part C: Risks, platform, and tasks (10 minutes)
  - Answer steps 5–9: risks, platform, technology, a rough design, and a task list with milestones.
  - Say "I don't know" at least once and check that the AI records a default as an assumption instead of guessing silently.

- Part D: Review (10 minutes)
  - Read the generated `plan.md` line by line. Mark anything you never said.
  - Swap plans with a partner and look for vague tasks, missing "done" conditions, and unlisted risks.
  - Fix the plan, and save it as `plan.md`.

Success criteria
- `plan.md` contains a summary, assumptions, open questions, an MVP definition, and a task list with milestones.
- Each task is small and has a clear "done" condition.
- No secret values appear in the plan; at most variable names such as `MODEL_API_KEY`.
- You can point to at least one assumption and explain why it was recorded.

Hints
- If the AI asks several questions at once, tell it to ask one at a time.
- Keep the MVP small; if everything is a must-have, nothing is.
- A plan is a living document: change it when you learn something new.

Solution (optional)
- A sample result is in [assets/sample-plan.md](assets/sample-plan.md). Try writing your own first.

Stretch goals
- Add a "Security and privacy" section (steps 10 and 14 in steps.md) listing which data the app processes and how it can be deleted.
- Turn your task list into GitHub issues.
