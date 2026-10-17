// Tiny, dependency-free RAG demo: chunk -> retrieve -> grounded answer with citations.
// Usage: node rag.mjs "your question"   (no argument runs the built-in test questions)
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const DOCS_DIR = join(dirname(fileURLToPath(import.meta.url)), "docs");
const CHUNK_WORDS = 40;
const TOP_K = 3;
const MIN_SCORE = 2;
const STOP = new Set("a an the is are of to in on for and or how what when do does can i it by with at be from".split(" "));

const tokenize = (t) => t.toLowerCase().match(/[a-z0-9]+/g)?.filter((w) => !STOP.has(w)) ?? [];

function loadChunks() {
  const chunks = [];
  for (const file of readdirSync(DOCS_DIR).filter((f) => extname(f) === ".txt")) {
    const words = readFileSync(join(DOCS_DIR, file), "utf8").split(/\s+/).filter(Boolean);
    for (let i = 0, n = 1; i < words.length; i += CHUNK_WORDS, n++) {
      chunks.push({ id: `${basename(file, ".txt")}#${n}`, text: words.slice(i, i + CHUNK_WORDS).join(" ") });
    }
  }
  return chunks;
}

function retrieve(question, chunks) {
  const q = new Set(tokenize(question));
  return chunks
    .map((c) => ({ ...c, score: tokenize(c.text).filter((w) => q.has(w)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, TOP_K);
}

// Mock "model": quotes the best-matching sentence of the top chunk, or declines when evidence is weak.
function mockAnswer(question, hits) {
  const best = hits[0];
  if (!best || best.score < MIN_SCORE) return "I don't know based on the provided documents.";
  const q = new Set(tokenize(question));
  const overlap = (s) => tokenize(s).filter((w) => q.has(w)).length;
  const sentence = best.text.split(/(?<=\.)\s/).sort((a, b) => overlap(b) - overlap(a))[0];
  return `${sentence} [${best.id}]`;
}

function ask(question, chunks) {
  const hits = retrieve(question, chunks);
  console.log(`\nQ: ${question}`);
  for (const h of hits) console.log(`  retrieved ${h.id} (score ${h.score})`);
  console.log(`A: ${mockAnswer(question, hits)}`);
}

const chunks = loadChunks();
console.log(`Loaded ${chunks.length} chunks from ${DOCS_DIR}`);
const questions = process.argv.slice(2).length
  ? [process.argv.slice(2).join(" ")]
  : [
      "How long does express shipping take?",
      "How long is the Widget Pro battery life?",
      "Does the warranty cover water damage?",
      "What is the CEO's favorite color?",
    ];
questions.forEach((q) => ask(q, chunks));
