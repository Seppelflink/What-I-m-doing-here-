# Sample review — Support-ticket summarizer

This is one possible review, not a single required answer.

## Data flow and boundaries

1. Customer submits ticket text to the support application.
2. The application stores the ticket.
3. The server sends the selected ticket text and summarization instructions to the model provider, authenticated with a server-side credential.
4. The provider returns a summary and category.
5. The app displays the result to an authenticated staff member.
6. Error logging may record request details; its exact behavior needs verification.

Trust boundaries include customer-to-application, application-to-provider, and provider response-to-application. Ticket content and model output are untrusted. Ticket details may be personal data.

## Example risks and mitigations

| Risk | Example failure | Mitigation |
|---|---|---|
| Prompt injection in ticket text | Malicious ticket text tries to change the task or reveal other records | Treat the ticket as untrusted input, send only that ticket, give the model no access to other records or unnecessary tools, and test hostile examples |
| Excessive personal data sent externally | Ticket contains details not needed for the summary | Minimize or redact data where feasible; confirm provider retention, processing, and access settings before launch |
| Credential exposure | Provider key is placed in browser code, logs, or Git | Keep it server-side in a secret store or local environment; restrict access; rotate it if exposed |
| Unsafe or misleading model output | Output is rendered as executable markup or staff trust a wrong category | Render as escaped text, validate category against an allowlist, label it as a suggestion, and require staff confirmation |
| Sensitive data retained in logs | Full prompt or response is captured in an error log | Log request identifiers and error categories instead; restrict access and retention; test failure paths |
| Unmaintained dependency | A vulnerable package remains in the application | Inventory direct and transitive dependencies, review security alerts, and apply tested updates |

## Example pre-release checklist

- [ ] The provider's data handling and retention settings have been reviewed.
- [ ] The provider key is server-side, access-limited, and absent from source, browser bundles, and logs.
- [ ] Prompt-injection test cases cannot grant access to other tickets or trigger actions.
- [ ] Responses are validated and rendered as inert text; categories are restricted to known values.
- [ ] Error paths, logs, dependency alerts, and a credential-revocation procedure have been checked.

## Decision

Do not enable one-click actions based only on model output. The summarizer can be piloted after provider data handling and log contents are verified, output is safely rendered, and the server's access boundary is tested. Reassess the decision before adding tools or actions because those would change the threat model.
