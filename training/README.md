# Generative AI for Beginners — Training materials

This folder contains course materials for the "Generative AI for Beginners" training.

## Who this training is for

This course is for learners who are new to generative AI. No machine-learning experience is needed. Modules 01–02 can be completed with any chat-based AI tool; modules 03 and 05 can be followed with a local or mocked model if you do not have API access.

By the end of the course, learners should be able to explain what generative AI can and cannot do, write and evaluate prompts, make a basic model request, identify responsible-use risks, build a small demo, ground answers in documents, plan a project, and practice testing, secure development, release, and maintenance.

## Suggested learning path

Work through the modules in order. Each module includes slides and a hands-on exercise.

1. [Introduction to Generative AI](module-01-intro/) — core concepts, common uses, and limitations (30 minutes).
2. [Prompt engineering](module-02-prompt-engineering/) — add context and constraints, then iterate and evaluate (40 minutes).
3. [APIs and tools](module-03-apis-and-tools/) — make a model request, parse a response, and handle errors (45 minutes).
4. [Responsible AI and safety](module-04-responsible-ai/) — examine risks and practice mitigations (30–45 minutes).
5. [Build a demo app](module-05-demo-app/) — connect a simple interface to a model and add basic safeguards (60–90 minutes).
6. [Retrieval-augmented generation](module-06-rag/) — ground answers in trusted documents and cite sources (45–60 minutes).
7. [Project planning with AI](module-07-project-planning/) — use an AI interviewer to turn an idea into a reviewed `plan.md` (45 minutes).
8. [Developing securely](module-08-secure-development/) — threat-model an AI feature and choose layered safeguards (45 minutes).
9. [Testing and releasing](module-09-testing-releasing/) — build a regression test set and a verifiable release checklist (45–60 minutes).
10. [Operations and maintenance](module-10-operations-maintenance/) — monitor, respond to incidents, and practice recovery for an AI feature (45–60 minutes).

The complete path takes approximately 5–6 hours, including exercises. You can also use individual modules as standalone lessons.

Structure
- module-template/: Templates and guidance for authors
- module-01-intro/: Sample first module (intro)
- module-02-prompt-engineering/: Prompt engineering examples and exercises
- module-03-apis-and-tools/: How to call models via APIs and tooling
- module-04-responsible-ai/: Responsible AI & safety (new)
- module-05-demo-app/: Build and deploy a small demo app (new)
- module-06-rag/: Retrieval-augmented generation: grounding answers in trusted documents (new)
- module-07-project-planning/: Project planning with an AI interviewer that produces a plan.md (new)
- module-08-secure-development/: Threat-model an AI feature and practice security and privacy safeguards (new)
- module-09-testing-releasing/: Test AI behavior and prepare a controlled, reversible release (new)
- module-10-operations-maintenance/: Monitor, maintain, and recover an AI feature after release (new)

Goals
- Provide lightweight, markdown-based modules (slides + exercises)
- Make it easy for contributors to add more modules by copying the template

How to contribute
- Create a new folder training/module-XX-your-topic/ with slides.md and exercise.md
- Follow the module-template files for structure and metadata
