const apiKey = process.env.OLLAMA_API_KEY?.trim();

if (!apiKey) {
  console.error("Missing OLLAMA_API_KEY. Add your key to .env and run with --env-file=.env.");
  process.exitCode = 1;
} else {
  try {
    const response = await fetch("https://ollama.com/api/chat", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gemma4:31b",
        messages: [{ role: "user", content: "Why is the sky blue?" }],
        stream: false,
      }),
    });

    if (!response.ok) {
      const messages = {
        401: "The API key is missing or invalid.",
        402: "The selected model is not available on this plan.",
        404: "The model was not found.",
        429: "The API usage limit has been reached.",
      };
      throw new Error(
        `Ollama request failed (HTTP ${response.status}): ${
          messages[response.status] ?? "The server returned an error."
        }`,
      );
    }

    const result = await response.json();
    const reply = result?.message?.content;

    if (typeof reply !== "string" || !reply.trim()) {
      throw new Error("Ollama returned no chat reply.");
    }

    console.log(reply);
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Ollama request failed.");
    process.exitCode = 1;
  }
}
