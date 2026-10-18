# Module 07 — Slides (Project planning with AI)

Title: Project planning with AI
Duration: 45 minutes

Learning objectives:
- Turn a rough idea into a structured plan with an AI interviewer
- Define an MVP and record risks and assumptions
- Review AI-generated plans critically

# Slide 1 — Why plan first?
- Unclear goals lead to wasted work and endless scope
- A short written plan makes decisions visible and easy to change
- AI is useful for asking the questions you forgot to ask

# Slide 2 — The planning steps
- 1 Idea and problem, 2 Audience, 3 Requirements, 4 MVP scope, 5 Feasibility and risks
- 6 Application type and platform, 7 Technology, 8 Design, 9 Task list with milestones
- Steps repeat: tests and feedback send you back to earlier steps

# Slide 3 — AI as interviewer, not author
- Ask the AI to question you one question at a time instead of inventing a plan for you
- Prefer suggested answer options, but answer in your own words when they do not fit
- You own the decisions; the AI organizes and challenges them

# Slide 4 — Must-have vs. nice-to-have
- Write all wishes unsorted first, then sort them
- The MVP contains only what is needed for a usable first version
- Everything else goes on a list for later versions

# Slide 5 — Risks and assumptions
- Risks: unknown technology, paid services, privacy, missing interfaces
- When you do not know an answer, accept a simple default and record it as an **assumption**
- List open questions explicitly so they are not forgotten

# Slide 6 — Secrets and `.gitignore`
- Never write passwords or API keys into a plan or into `.gitignore`; both are public in a public repository
- Keep values in a local `.env`, list `.env` in `.gitignore`, and commit a `.env.example` with empty placeholders
- `.gitignore` does not remove files already committed; rotate any leaked key immediately

# Slide 7 — Reviewing an AI-written plan
- Is every statement something you actually said, or did the AI invent it?
- Are assumptions and open questions listed separately?
- Are tasks small, ordered by dependency, and each with a clear "done" condition?

# Slide 8 — Instructor notes
- Let learners choose small personal projects (a to-do list, a recipe organizer, a study timer)
- Time-box the interview; the goal is a rough plan, not a perfect one
- Compare plans in pairs and look for invented content
