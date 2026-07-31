# What-I-m-doing-here-
A small repository for training materials and experiments.

This worktree contains a lightweight "Generative AI for Beginners" training scaffold with markdown-based modules and exercises.

Training overview
- Location: training/
- Start with: training/module-01-intro/
- Module template: training/module-template/

Contributing
- To add a module, copy training/module-template/ into training/module-XX-your-topic/ and update slides.md and exercise.md.
- Keep modules short (20–40 minutes) and use plain markdown for portability.
- Prefer short, hands-on exercises and include learning objectives in each module's README.md.

Usage
- Read training/module-01-intro/README.md to preview the sample module.
- To preview slides locally, open the slides.md in any markdown viewer or use an editor with slide preview support.

CI
- A lightweight Markdown CI workflow (Super-Linter + lychee) is included at .github/workflows/markdown-ci.yml to lint markdown and check links on PRs.

Contact & feedback
- Open an issue or PR in this repository for improvements, suggestions, or to add modules.

See training/README.md for authoring guidance and templates.
