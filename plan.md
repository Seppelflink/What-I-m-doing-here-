# Project plan: Paid "Generative AI for Beginners" bundle

## Summary

The goal is to earn money from the existing training course. Public modules 01–10 are drafted, and a first polish pass has been merged; remaining polish and exercise validation come before premium development. The proposed premium topic is **The AI Application Development Lifecycle**, a guided capstone on building AI-powered software from idea through operations.

## Assumptions

- The user did not know what to build; the paid course idea was suggested and accepted.
- Gumroad/Ko-fi is used (no own shop).
- Free modules stay public under MIT. The agreed premium topic is The AI Application Development Lifecycle; its detailed scope and distinct value proposition will be finalized after the planned public modules are polished and validated.
- Premium bundle license is not decided yet.

## Open questions

- Which license applies to the premium bundle (the repo is MIT, so the free content is copyable)?
- Imprint and tax duties for selling in Germany.
- What exact capstone project, templates, worked example, and original materials should the premium lifecycle guide include?
- Price of the bundle.

## 1. Idea and problem

- Need income; a paid training course builds on the existing repo.

## 2. Target audience

- Beginners with no AI knowledge.
- Public; free modules stay open, a premium bundle is sold.

## 3. Requirements

- Must-have: interactive, guided exercises with an AI assistant.

## 4. First version (MVP)

- After public modules 01–10 are polished and validated, develop a distinct, guided capstone titled **The AI Application Development Lifecycle**. It should connect the lifecycle end to end without merely repackaging the public modules.
- Sold via Gumroad or Ko-fi.
- Success: 10 sales within 3 months.

## 5. Feasibility and risks

- A few hours per week, no budget.
- Risks: nobody pays while a free version exists, low reach, and exercises needing a local model or paid API.

## 6. Application type and platform

- No app: Markdown files plus a downloadable ZIP.

## 7. Technology

- Markdown, Node demo scripts, Git/GitHub.

## 8. Usage and structure

- Learner opens a module, follows the exercise with an AI assistant, and checks the success criteria.

## 9. Project planning

- Order: finish public-module polish and exercise validation → develop the lifecycle capstone → package ZIP → Gumroad page → announce.

## 10. Development environment

- Keep Git, GitHub, Node; secrets only in a local `.env` (names only in the repo, `.env.example`).

## 11. Prototype

- The existing modules (especially 06 and 07) act as the prototype.

## 12. Step-by-step development

- Small branches and PRs, markdown CI.

## 13. Testing

- Test each exercise personally plus 2–3 beta learners; markdown CI and link checks.

## 14. Security and privacy

- No personal data stored; sales data stays with Gumroad.
- Check imprint and tax duties before selling.

## 15. Documentation

- Module READMEs and exercises; license and changelog still to decide.

## 16. Preparing the release

- ZIP per version with a changelog.

## 17. Deployment

- Gumroad or Ko-fi page; feedback via GitHub issues.

## 18. Operations and maintenance

- Updates delivered through Gumroad; feedback through GitHub issues.

## Task list

- [x] Draft all planned public course modules through Module 10
- [ ] Polish modules 01–10 (run every exercise, fix links and wording)
- [ ] Decide on the license of the premium bundle and check imprint/tax duties
- [x] Publish Module 08, "Developing securely", as free public course content
- [x] Publish Module 09, "Testing and releasing", as free public course content
- [x] Publish Module 10, "Operations and maintenance", as free public course content
- [x] Choose the proposed premium topic: **The AI Application Development Lifecycle**
- [ ] After public modules 01–10 are polished and validated, define and develop the distinct lifecycle capstone (project, templates, worked example, and original materials)
- [ ] Recruit 2–3 beta learners and collect feedback
- [ ] Package the ZIP with a changelog
- [ ] Create the Gumroad/Ko-fi page and set a price
- [ ] Announce and track toward 10 sales in 3 months
