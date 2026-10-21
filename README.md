# What-I-m-doing-here-
A small repository for training materials and experiments.

This worktree contains a lightweight "Generative AI for Beginners" training scaffold with markdown-based modules and exercises.

Training overview
- This beginner-friendly Generative AI course has 10 modules, with hands-on exercises and an estimated total time of 7–10 hours.
- Start with the [course guide](training/README.md) for the suggested learning path and module details.
- Begin at [Module 01: Introduction](training/module-01-intro/); copy the [module template](training/module-template/) when authoring a new module.

Contributing
- To add a module, copy training/module-template/ into training/module-XX-your-topic/ and update slides.md and exercise.md.
- Keep modules short (20–40 minutes) and use plain markdown for portability.
- Prefer short, hands-on exercises and include learning objectives in each module's README.md.

Usage
- Work through the modules in order; each module includes a README, slides, and a hands-on exercise.
- Modules 01–02 can be completed with any chat-based AI tool. Modules 03 and 05 can use a local or mocked model if you do not have API access.
- To preview slides locally, open a module's slides.md in any Markdown viewer or use an editor with slide preview support.

CI
- The [Markdown CI workflow](.github/workflows/markdown-ci.yml) runs on pushes and pull requests that change Markdown files. It runs Super-Linter and checks links with lychee; link-check failures are non-blocking.

Contact & feedback
- Open an issue or PR in this repository for improvements, suggestions, or to add modules.

See training/README.md for authoring guidance and templates.
