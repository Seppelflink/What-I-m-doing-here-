# Synthetic incident — Support-ticket summarizer

This fictional scenario continues the support-ticket summarizer from Module 08. It is designed for tabletop practice; every event and identifier below is invented.

## Service context

- The web app lets authenticated support staff request a suggested ticket summary and category.
- The server calls an external model provider. The model cannot access other tickets or take actions.
- Staff review and edit suggestions before using them.
- The previous release passed the course's small regression set.
- Logs should contain request IDs, timestamps, status codes, and error categories, not ticket bodies. Whether all production services follow that rule has not yet been verified.

## Event timeline

| Time | Synthetic observation |
|---|---|
| 09:00 | Release `1.4.0` is deployed. It changes the prompt template and provider model alias. |
| 09:20 | Provider rate-limit responses increase. Some staff see a retry message. |
| 09:35 | The support lead reports that a few summaries are unusually short. No confirmed incorrect customer action is reported. |
| 09:45 | A staff member flags one summary that repeats an instruction found inside the ticket rather than summarizing the ticket. |
| 10:00 | The team has not yet checked whether request bodies were captured by error logging during retries. |
| 10:10 | The last known-good application release is `1.3.2`. The previous prompt and model alias are recorded in the release notes, but rollback has not been practiced recently. |

## Exercise boundaries

Known facts are only the observations in the timeline and service context. Do not assume the provider caused the quality change, that a data exposure occurred, or that a rollback is risk-free. Record those as questions to investigate.

No real ticket, provider credential, customer name, or account identifier is needed to complete the exercise.
