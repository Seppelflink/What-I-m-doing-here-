# Project plan: Paid "Generative AI for Beginners" bundle

## Summary

The goal is to earn money from the existing training course. Modules stay free and public. A polished premium bundle (modules 01–07 plus one new premium module) is sold as a ZIP via Gumroad or Ko-fi. Target audience: beginners with no AI knowledge.

## Assumptions

- The user did not know what to build; the paid course idea was suggested and accepted.
- Gumroad/Ko-fi is used (no own shop).
- Free modules stay public under MIT; the premium value is the polished bundle, the new premium module, and guided exercises.
- Premium bundle license is not decided yet.

## Open questions

- Which license applies to the premium bundle (the repo is MIT, so the free content is copyable)?
- Imprint and tax duties for selling in Germany.
- What additional premium-only content should be developed? Module 08, "Developing securely", was added to the public repository as a free module.
- Price of the bundle.

## 1. Idea and problem

- Need income; a paid training course builds on the existing repo.

## 2. Target audience

- Beginners with no AI knowledge.
- Public; free modules stay open, a premium bundle is sold.

## 3. Requirements

- Must-have: interactive, guided exercises with an AI assistant.

## 4. First version (MVP)

- Polish modules 01–07; Module 08, "Developing securely", is a new free module. Decide what distinct premium-only content will make the paid bundle valuable.
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

- Order: polish modules → premium module → package ZIP → Gumroad page → announce.

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

- [ ] Polish modules 01–07 (run every exercise, fix links and wording)
- [ ] Decide on the license of the premium bundle and check imprint/tax duties
- [x] Choose a topic and write a new course module: Module 08, "Developing securely" (published free in the public repository)
- [ ] Recruit 2–3 beta learners and collect feedback
- [ ] Package the ZIP with a changelog
- [ ] Create the Gumroad/Ko-fi page and set a price
- [ ] Announce and track toward 10 sales in 3 months
