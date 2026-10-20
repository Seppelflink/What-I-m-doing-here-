# Exercise — Operate an AI feature after release

Exercise title: Triage a fictional incident and write a small operations runbook

Setup
- Read the [synthetic incident scenario](assets/incident-scenario.md).
- Work alone or with a partner. The event log is fictional and contains no real user data.
- Use the [sample runbook](assets/sample-runbook.md) only after drafting your own response.

Description
- Part A: Triage (10 minutes)
  - Separate the scenario's confirmed observations from possible causes.
  - Identify the affected feature, users, data, and trust boundaries.
  - Choose an initial severity and name the person who should coordinate response.

- Part B: Contain and communicate (10–15 minutes)
  - Pick the safest immediate action to reduce impact. Explain what capability, if any, you would pause.
  - Write a short internal update that says what is known, what is not known, and the next update time.
  - List what additional evidence you need without collecting or sharing full ticket contents or secrets.

- Part C: Recover and prevent recurrence (15 minutes)
  - Define checks that must pass before restoring normal service.
  - Add at least three follow-up actions, including one regression test, one monitoring or logging improvement, and one operational/process improvement.
  - State how a provider or model change would be reviewed and tested before release.

- Part D: Write a mini runbook (10–15 minutes)
  - Record the owner, detection signals, first response, containment, recovery, communication, and follow-up.
  - Define what needs backup, who may access it, and how often restore should be tested.
  - Name one open question that must be answered before this service goes live.

Optional assistant prompt
> Help me triage this fictional AI-service incident. Ask one question at a time. Separate confirmed facts from hypotheses, prioritize user safety, privacy, and service integrity, and suggest containment, recovery, and follow-up. Do not invent provider capabilities or legal obligations. Do not request real credentials, prompts, or personal data. I will make the final decisions.

Success criteria
- The response distinguishes observed facts from hypotheses and assigns an owner.
- It proposes a proportionate containment and recovery plan.
- The runbook covers detection, communication, restoration, and follow-up.
- Follow-up includes a regression test, a monitoring/logging improvement, and a process improvement.
- Backup access and restore testing are included, with at least one unresolved question recorded.

Hints
- A change in provider limits or model behavior is a hypothesis until you verify it.
- Do not wait for a perfect root-cause explanation before reducing clear ongoing impact.
- Avoid full prompts and personal data in routine logs; use minimal identifiers and error categories.
- Restoring service is not the same as proving the issue is fixed; define checks before re-enabling.

Solution (optional)
- Compare with [one possible runbook](assets/sample-runbook.md). More than one response can be reasonable if assumptions and trade-offs are explicit.
