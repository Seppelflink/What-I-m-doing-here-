# Sample runbook — Support-ticket summarizer

This is an educational example for the fictional scenario, not a production SLA, legal determination, or universal incident procedure. Adapt roles, thresholds, communications, and controls to the actual service.

## Ownership and signals

- **Incident coordinator:** support service owner; names the scribe and technical responder.
- **Signals to check:** provider error and rate-limit counts, latency, application release and model alias, summary-quality reports, and whether logs contain ticket content.
- **Privacy rule:** use synthetic examples or request IDs during investigation; restrict and protect any necessary evidence.

## First response

1. Confirm the affected release, time window, and scope using operational metadata.
2. Record facts separately from hypotheses. Do not copy full tickets into a chat, issue, or shared incident note.
3. Reduce impact. Pause summary generation or use a clearly labeled manual workflow if suggestions may be unreliable or provider failures are disrupting staff.
4. Check log configuration and access. If sensitive content may have been captured, restrict access and follow the organization's incident process while verifying what was collected.
5. Send an internal update with known impact, current mitigation, unresolved questions, and the next update time.

## Recovery checks

Before re-enabling the feature:

- Provider errors and latency are within the service's agreed operating range.
- The reviewed prompt/model combination passes the regression and safety tests.
- Outputs remain suggestions, are displayed safely, and cannot trigger an action without staff review.
- The team has checked whether request bodies entered logs and documented the result.
- A named owner is watching the service during the initial recovery period.

If a rollback is chosen, verify the exact code, prompt, configuration, and provider/model settings being restored. Confirm backward compatibility and the effect on stored data before proceeding.

## Follow-up

- Add a regression case for an instruction embedded in ticket text.
- Alert on sustained provider throttling and report rates, not just individual failures.
- Verify logging configuration with a synthetic ticket and document the evidence.
- Compare prompt/model changes in a controlled release before broad rollout.
- Review incident causes and update the runbook, ownership, or recovery test.

## Backups and maintenance

- Identify which configuration and operational data must be recoverable; avoid backing up unnecessary sensitive prompts.
- Restrict backup access and retention to the service's requirements.
- Restore a backup in a safe environment on a planned schedule and document the result and gaps.
- Revisit dependencies, provider behavior, access, costs, and user feedback on a regular cadence.
