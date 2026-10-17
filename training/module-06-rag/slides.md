# Module 06 — Slides (Retrieval-Augmented Generation)

Title: Retrieval-Augmented Generation (RAG)
Duration: 45–60 minutes

Learning objectives:
- Understand why grounding matters and how RAG works end to end
- Chunk, retrieve, and cite sources in a minimal pipeline
- Identify and test common RAG failure modes

# Slide 1 — The problem
- Models can sound confident while being wrong (hallucination)
- Models do not know your private, recent, or domain-specific documents

# Slide 2 — The RAG idea
- Retrieve relevant passages first, then ask the model to answer using only those passages
- Pipeline: documents → chunks → index → retrieve top-k → build prompt → generate → cite

# Slide 3 — Chunking
- Split documents into small, self-contained pieces (for example, 100–200 words)
- Trade-off: too small loses context, too large dilutes relevance and wastes tokens
- Keep source name and position with every chunk

# Slide 4 — Retrieval
- Keyword scoring (for example, TF-IDF or BM25) is a good, transparent starting point
- Embeddings + vector search find semantically similar text; add them once the basics work
- Retrieve top-k chunks (k = 3–5) and inspect them before blaming the model

# Slide 5 — Grounded prompts
- Instruct: "Answer only from the context. If the answer is not in the context, say you don't know."
- Include chunk IDs and require the answer to cite them
- Example: "Context: [doc1#2] ... Question: ... Answer with citations like [doc1#2]."

# Slide 6 — Failure modes
- Missing context: the answer is not in the documents, but the model guesses anyway
- Irrelevant retrieval: wrong chunks lead to confident but wrong answers
- Stale sources: outdated documents produce outdated answers
- Unsupported claims: the answer contains statements not backed by any cited chunk

# Slide 7 — Evaluating a RAG system
- Check retrieval first: did the right chunk appear in the top-k?
- Then check the answer: is every claim supported by a cited chunk?
- Keep a small question set with expected sources and re-run it after every change

# Slide 8 — Responsible use
- Do not index sensitive data without access controls; retrieval can leak documents
- Show sources to users so they can verify answers
- Link back to Module 04 for privacy and human-in-the-loop guidance

# Slide 9 — Instructor notes
- Keep the document set tiny so learners can read all of it and verify results by hand
- Encourage learners to break the pipeline deliberately (unanswerable questions, bad chunk sizes)
- Defer vector databases and agent orchestration to later modules
