# Interview: From Idea to Project Plan (`plan.md`)

This document is an interview script. An AI assistant uses it to talk with the user and, at the end, writes the answers to a file called `plan.md`.

German version (backup): [steps.de.md](steps.de.md)

> **Note:** The steps follow the usual software development life cycle. In real projects, individual steps are repeated when tests or feedback call for improvements.

## Rules for the assistant

1. Ask **one question at a time** (use the `ask_user` tool when asking in chat) and wait for the answer.
2. Offer suggested answers to choose from where possible. Mark the recommended option with "(Recommended)". The user can always answer freely.
3. Ask a follow-up if an answer is too vague. Do not make silent assumptions.
4. If the user answers "I don't know", suggest a simple default and record it as an **assumption** in `plan.md`.
5. After each section, restate in one sentence what you understood.
6. Never write secrets (passwords, keys) into `plan.md` or into `.gitignore`. Record only the **names** of variables, for example `OLLAMA_API_KEY`, never the values.
7. Write `plan.md` only after the last section. Show it to the user and ask whether anything is missing or should change.

## Questions

### 1. Idea and problem

- What problem should the application solve? (one or two sentences)
- What concrete benefit does it offer?
- Are there similar programs? What should your application do differently or more simply?

### 2. Target audience

- Who should use the application?
- What prior knowledge do these people have, and what typical tasks do they perform?
- Is the program meant only for you, for a small group, or for the public?

### 3. Requirements

- Which features do you want? (unsorted at first)
- Which of them are **must-have** features, and which are **nice-to-have**?
- What are the requirements for security, speed, accessibility, and supported operating systems?

### 4. First version (MVP)

- Which features does the first usable version absolutely need?
- Which wishes do we postpone to later versions?
- How will you know the first version is done?

### 5. Feasibility and risks

- How much time and budget are available, and what skills do you bring?
- Which points are unknown or difficult (new technology, paid services, privacy, missing interfaces)?
- What could be tried early with a small test?

### 6. Application type and target platform

- Should it be a desktop, web, mobile, or command-line application?
- Which systems and versions should be supported?
- Should everything run locally, or partly through a server?

### 7. Technology

- Is there a preferred programming language or framework? Otherwise suggest a simple, well-documented, free option.
- How should data be stored (files, SQLite, server database)?
- Are there requirements regarding library licenses?

### 8. Usage and structure

- Which windows, pages, or input forms does the application need?
- How does a user complete the most important task, step by step?
- What are the main components of the application, and what data do they exchange?

### 9. Project planning

- Into which small, verifiable tasks can the features be broken down?
- Which tasks depend on each other, and what has priority?
- Which intermediate goals (milestones) make sense, and how do you recognize that each is done?

### 10. Development environment

- Which tools (editor, runtime, compiler) are already installed, and which are missing?
- Should the project be versioned with Git, and where does the repository live?
- How are secret credentials kept separate from the source code?
  - Recommended approach: The values live only in a local `.env` file. That file is listed in `.gitignore` so Git does not track it. The repository contains a `.env.example` with empty placeholders.
  - Important: `.gitignore` is itself public and does **not** hide any values. It only protects files that Git does not yet track. If a secret was already committed, it stays in the history. In that case the key must be rotated immediately.

### 11. Prototype

- Which workflow should work first in the prototype?
- Which sample data or placeholder interfaces may be used?
- What should the prototype prove?

### 12. Step-by-step development

- How should code, file names, and folders be named and structured?
- How should input errors and unexpected situations be handled?
- How often should you commit, and how is the task list kept up to date?

### 13. Testing

- What should be tested automatically?
- Which invalid, empty, and extreme inputs should be checked?
- Who tries out the application, and on which clean test system are installation and uninstallation tested?

### 14. Security and privacy

- Which data is processed, why, and how can it be deleted?
- Which permissions (files, network, users) does the application need at most?
- Are there legal requirements for the specific use case?

### 15. Documentation

- Which guides do users need (installation, start, examples, troubleshooting)?
- Which notes do developers need (structure, dependencies, build, tests)?
- Which license, version number, and changelog should be used?

### 16. Preparing the release

- Which package format should it be (installer, portable version, container)?
- How is the package tested before distribution and checked for tampering?
- What is the way back to the previous stable version?

### 17. Deployment

- Through which trusted channel should it be released?
- Should a few test users receive the application first?
- How can users get in touch, and where are the checksum and documentation available?

### 18. Operations and maintenance

- Where are error reports and feedback collected?
- How are security issues and dependency updates prioritized?
- How is data backed up, and how is restoring tested?

## Result: `plan.md`

Create `plan.md` in the project folder. Use one heading per section with the number and name above, followed by the user's answers as short bullet points. Add at the top:

- **Summary** in two to three sentences.
- **Assumptions**: everything the assistant suggested because the user did not know.
- **Open questions**: everything that still needs to be clarified.

Add a **task list** at the end with the milestones from section 9 as checkboxes.

## Closing checklist

- [ ] Problem, target audience, and benefit are clearly described.
- [ ] The must-have features of the first version are defined.
- [ ] Platform, technology, and data storage are decided.
- [ ] Tasks, risks, and milestones are documented.
- [ ] Git and a safe development environment are planned.
- [ ] The most important user workflow is described.
- [ ] Tests, installation, and supported systems are planned.
- [ ] Security, privacy, and licenses are clarified.
- [ ] User help and technical documentation are planned.
- [ ] Release and maintenance are organized.
- [ ] The user has read and approved `plan.md`.

## Ideas for further training modules

These sections work as templates for new modules in the `training/` folder:

- **Module "Project planning with AI"**: Plan a project with this interview (sections 1–9). Done as [Module 07](training/module-07-project-planning/README.md).
- **Module "Developing securely"**: Deepen sections 10 and 14 with secrets, dependencies, and privacy. Covered in [Module 08](training/module-08-secure-development/README.md).
- **Module "Testing and releasing"**: Practice sections 13, 16, and 17 with automated tests and release packages.
- **Module "Operations and maintenance"**: Cover section 18 with error collection, updates, and backups.

## Sources

The order follows the usual software development life cycle of planning, requirements analysis, design, development, testing, deployment, and maintenance [web:1][web:3][web:9]. Security requirements should not be checked only at the end but built into the entire development process [web:2][web:7].
