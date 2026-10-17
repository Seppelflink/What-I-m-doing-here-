# Exercise — Build a Tiny RAG Pipeline

Exercise title: Answer questions from a small document set with source citations

Setup
- Create 3–5 short text files (a paragraph or two each) in assets/docs/, for example a fictional company FAQ, a product guide, and a policy page. Sample files are already provided there.
- Use any language you like (Python or JavaScript recommended). No API key is required.

Description
- Part A: Chunk (10–15 minutes)
  - Load every file and split it into chunks of roughly 100–150 words.
  - Store each chunk with an ID such as `faq#2` (file name + chunk number).

- Part B: Retrieve (15 minutes)
  - Implement keyword scoring: lowercase, remove common stop words, and count matching query terms per chunk.
  - Return the top 3 chunks for a question and print their IDs and scores.

- Part C: Generate with citations (10–15 minutes)
  - Build a prompt containing the retrieved chunks and the instruction: "Answer only from the context and cite chunk IDs. If the answer is not in the context, say you don't know."
  - Send it to a model of your choice. Without API access, use a mock that returns the best chunk's first sentence with its chunk ID.

- Part D: Break it (10–15 minutes)
  - Ask a question that is not covered by your documents. Does the pipeline say "I don't know"?
  - Change the chunk size (50 vs 300 words). How does retrieval quality change?
  - Edit a document to make it outdated or contradictory and observe the effect on answers.
  - Try a synonym question such as "How long is the warranty?" when the document says "one year". Keyword matching finds the right chunk, but the answer may be only the title sentence because "long" never matches "year". This is a limit of keyword retrieval; embeddings handle synonyms better (see Stretch goals).

Success criteria
- Questions covered by the documents return an answer that cites the correct chunk ID.
- An unanswerable question results in an explicit "I don't know" (not a guess).
- You can explain, for one failed question, whether retrieval or generation caused the failure.

Hints
- Print the retrieved chunks before generating; most problems are visible at the retrieval step.
- Keep a list of 5 test questions with their expected source chunks and re-run it after each change.
- Never commit API keys; use environment variables if you connect a real model.

Solution (optional)
- A reference implementation is in assets/rag.mjs with sample documents in assets/docs/. Try building your own first.

Stretch goals
- Replace keyword scoring with embeddings and compare results on your test questions.
- Add a check that flags answers citing a chunk ID that was not retrieved.
