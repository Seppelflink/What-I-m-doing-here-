# Sample plan: Study Timer

## Summary
A small command-line study timer for students who want to work in focused intervals and see how much they studied per day.

## Assumptions
- Runs on Windows 11 and current Linux only (the user did not know other requirements).
- Data is stored in a local JSON file; no server is needed.

## Open questions
- Should the timer play a sound or only print a message?
- Should statistics be exportable?

## 1. Idea and problem
- Problem: studying without breaks or tracking leads to fatigue and no overview.
- Benefit: simple intervals and a daily total.

## 2. Audience
- Students with basic command-line knowledge, used personally and shared with friends.

## 3. Requirements
- Must: start a 25-minute focus timer, 5-minute break timer, daily total.
- Nice to have: custom interval lengths, weekly chart.
- Non-functional: starts in under a second, no network access.

## 4. MVP
- Start a timer, show remaining time, record finished intervals, print today's total.
- Done when a full focus/break cycle runs and the total is correct.

## 5. Risks
- Time accuracy when the computer sleeps (test early).
- No paid services or personal data involved.

## 6. Platform
- Command-line application, fully local.

## 7. Technology
- Node.js, JSON file storage, no external dependencies. License: MIT.

## 8. Design
- Commands: `start`, `stop`, `today`. Data flow: timer writes finished intervals to the JSON file; `today` reads and sums them.

## 9. Tasks and milestones
- [ ] Milestone 1: working timer
  - [ ] Parse the `start` command (done: prints the remaining minutes)
  - [ ] Count down and print progress (done: finishes at zero)
- [ ] Milestone 2: persistence
  - [ ] Save finished intervals to JSON (done: file contains the entry)
  - [ ] `today` prints the correct total (done: matches test data)
