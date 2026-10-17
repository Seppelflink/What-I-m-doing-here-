# Module 06 — Retrieval-Augmented Generation (RAG)

Overview
- Learn how to ground model answers in trusted documents instead of relying only on what a model memorized.
- Build a tiny, provider-neutral RAG pipeline: chunk documents, retrieve relevant passages, and answer with source references.

Learning objectives
- Explain why models hallucinate and how grounding reduces (but does not eliminate) the problem
- Split documents into chunks and retrieve the most relevant ones with simple keyword scoring
- Build a prompt that includes retrieved context and requires source citations
- Recognize RAG failure modes: missing context, irrelevant retrieval, stale sources, unsupported claims

Prerequisites
- Modules 01–03 (prompting and API basics); Module 04 is recommended

Structure
- slides.md — concepts, pipeline, and failure modes
- exercise.md — hands-on tasks with a small local document set
- assets/ — optional sample documents

Estimated duration: 45–60 minutes (hands-on)

Quick run (Node 18+, no dependencies)
- From the repository root: `node training/module-06-rag/assets/rag.mjs` (runs 4 sample questions)
- Ask your own: `node training/module-06-rag/assets/rag.mjs "How long is the warranty?"`
- Sample documents live in assets/docs/; edit them to experiment. with no API key. Learners without API access use a simple mock "model" step (described in the exercise), so no cloud account or paid service is required; learners with API access can swap in a real model call.
