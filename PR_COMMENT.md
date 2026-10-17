Hi all — quick reviewer checklist and context for this PR.

Summary:
- Adds training modules 01–04 (slides + exercises) and a training scaffold.
- Instructor-only solutions were created locally and then intentionally untracked; CONTRIBUTING.md documents placement.
- .gitignore updated to exclude training/**/assets/solutions/**

Please add label: instructor-content (if not possible here, please run locally: gh label create instructor-content --color 0e8a16 --description "Instructor-facing materials (solutions, assets)" && gh pr edit 2 --add-label instructor-content)

Reviewer checklist:
- [ ] Content accuracy & clarity (modules 01–04)
- [ ] Safety/privacy: no real PII included
- [ ] Instructor guidance is clear (training/*/assets/solutions/)
- [ ] CI (markdown + link checks) passes
- [ ] CONTRIBUTING.md wording OK

Suggested reviewers: @maintainer, @instructor (replace with actual usernames)

Notes:
- Instructor files remain local and untracked to avoid accidental exposure. If maintainers prefer them tracked, say so and they can be re-added.

Thanks!
