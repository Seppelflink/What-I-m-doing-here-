# Module 10 — Slides (Operations and Maintenance)

Title: Operations and Maintenance
Duration: 45–60 minutes

Learning objectives:
- Monitor service health and AI feature quality using useful, privacy-conscious signals
- Respond to incidents in a structured way and reduce user impact
- Maintain dependencies and provider/model integrations safely
- Plan and test backup, restore, and rollback procedures

# Slide 1 — Release is the beginning
- Real users, changing data, and provider changes reveal issues tests did not cover
- Give the feature an owner and a way for users to report problems
- Decide what to monitor, when to act, and who can pause the feature

# Slide 2 — Monitor the whole experience
- Service health: availability, latency, errors, rate limits, and cost
- Feature quality: grounded answers, refusal behavior, citations, and user corrections
- Safety and privacy: misuse reports, unexpected data exposure, and sensitive-data handling
- Compare signals over time; a single metric rarely explains the cause

# Slide 3 — Log carefully
- Record timestamps, release/provider version, error categories, and request IDs when useful
- Do not routinely log credentials, full prompts, private documents, or entire model responses
- Restrict log access and set a retention period
- Make sure the logs help investigate incidents without becoming a new data leak

# Slide 4 — Triage and contain
- Confirm what is happening and which users or functions may be affected
- Prioritize safety, privacy, security, and data integrity before convenience
- Contain impact: disable a feature, revoke a credential, or roll back a change
- Preserve necessary evidence securely; avoid copying sensitive content into chat or tickets

# Slide 5 — Communicate and learn
- Use a clear incident owner and record decisions, times, and actions
- Tell affected users what they need to know through an appropriate channel
- After recovery, identify contributing causes, not just the last visible error
- Convert findings into tests, monitoring, documentation, or a process change

# Slide 6 — Changes need re-evaluation
- Providers, model versions, prompts, dependencies, and retrieved data can all change behavior
- Record what changed and why; run regression and safety tests before rollout
- Release gradually where possible, monitor after the change, and keep a rollback path
- Recheck data handling when a provider or service configuration changes

# Slide 7 — Backups only count if restore works
- Decide what must be recoverable: configuration, source, user data, and operational records
- Limit backup access and protect backups from accidental or unauthorized changes
- Set an appropriate schedule and retention period based on the service's needs
- Practice restoring to a safe environment and record what the test did not cover

# Slide 8 — A sustainable maintenance rhythm
- Each release: review tests, security updates, known issues, and rollback readiness
- Regularly: review alerts, costs, access, logs, backups, and user feedback
- When risk changes: reassess the feature's data flow, provider terms, and human oversight
- Assign an owner and a next review date to every unresolved important issue

# Slide 9 — Instructor notes
- Use the synthetic incident in `assets/incident-scenario.md`; do not involve real customer records
- Ask learners to separate verified facts from hypotheses during triage
- The sample runbook is illustrative, not a universal SLA or legal-compliance checklist
- Emphasize that model/provider changes can change behavior even when application code is unchanged
