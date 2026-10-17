Contributing — where to place instructor solutions

Purpose
This document explains how to add instructor-facing solutions and reference materials for training modules.

Location convention
- Place instructor materials in: training/module-XX-your-topic/assets/solutions/
- Filenames:
  - INSTRUCTOR_SOLUTION.md — human-readable instructor notes, sample answers, and teaching tips
  - Any supporting scripts or snippets (e.g., api_snippet.py, regex_filter_example.py)

Visibility and safety
- Keep instructor solutions out of learners' default view by storing them under the assets/solutions folder.
- Do NOT include real PII or sensitive data in these files. Use fictionalized or redacted examples.

Review and PR guidance
- Add instructor files on a feature branch and include a short summary in the PR description.
- Optionally add the label `instructor-content` to PRs that add or change instructor solutions.

Optional: private .gitignore rule
- To avoid accidental exposure in some workflows, consider adding:
  training/**/assets/solutions/*
  to your .gitignore (only if you manage instructor assets out-of-band). Use with caution — this will prevent those files from being committed unless explicitly force-added.

Contact
- If unsure where to place an asset, open an issue or ask a reviewer in the PR.
