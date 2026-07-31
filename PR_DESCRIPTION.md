PR summary

Title: Add training scaffold + Modules 01–04 and instructor guidance

Summary of changes:
- Adds a training scaffold and modules 01–04 (slides + exercises).
- Adds CONTRIBUTING.md documenting where to place instructor solutions.
- Adds instructor-facing solution files (kept locally and untracked) and a sample regex filter example.
- Updates .gitignore to exclude training/**/assets/solutions/** to avoid accidental commits of instructor materials.

Request
- Please add the label: instructor-content
  (or run locally: gh label create instructor-content --color 0e8a16 --description "Instructor-facing materials (solutions, assets)" && gh pr edit 2 --add-label instructor-content)

Reviewer checklist
- [ ] Content accuracy & clarity (modules 01–04)
- [ ] Safety/privacy: no real PII included
- [ ] Instructor guidance is clear (training/*/assets/solutions/)
- [ ] CI (markdown + link checks) passes
- [ ] CONTRIBUTING.md wording OK

Files to review (high level):
- training/module-01-intro/**
- training/module-02-prompt-engineering/**
- training/module-03-apis-and-tools/**
- training/module-04-responsible-ai/**
- CONTRIBUTING.md, .gitignore

Suggested reviewers: @maintainer, @instructor (replace with actual usernames)

Notes
- Instructor files were intentionally left untracked and remain local to avoid accidental exposure. If maintainers prefer instructor solutions tracked in the repo, indicate and they will be re-added to the branch.
- The .gitignore entry prevents future accidental commits; already-tracked files were untracked in a follow-up commit.

If helpful, paste this entire document into the PR comment box or PR description.
