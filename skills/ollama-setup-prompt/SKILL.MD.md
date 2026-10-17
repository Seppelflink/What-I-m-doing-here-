
```
Set up Ollama so I can build with open models.

Ollama runs open models in two ways:
- Locally, on this computer. Speed depends on the hardware. Large models are slow on a computer without a strong GPU.
- In Ollama's cloud. Cloud models run on Ollama's servers, so they are fast on any computer and need no download. In the CLI, a cloud model name ends in :cloud, for example gemma4:cloud. From code, apps call the API at https://ollama.com.

Before you do anything, learn Ollama from its docs:
- Read the docs index at https://docs.ollama.com/llms.txt.
- Read https://docs.ollama.com/quickstart.md, https://docs.ollama.com/cloud.md, and https://docs.ollama.com/gpu.md.
- If I want to call Ollama from code, read https://docs.ollama.com/api/introduction.md. If this project already uses the OpenAI or Anthropic SDK, also read https://docs.ollama.com/api/openai-compatibility.md or https://docs.ollama.com/api/anthropic-compatibility.md.
- For any other question, search the full docs at https://docs.ollama.com/llms-full.txt.

Then:
1. If the ollama command is not installed, install the Ollama CLI. On macOS or Linux, run: curl -fsSL https://ollama.com/install.sh | sh. On Windows, run in PowerShell: irm https://ollama.com/install.ps1 | iex.
2. Check this computer's GPU and memory against https://docs.ollama.com/gpu.md.
3. Ask me what I want to build.
4. Recommend local models, cloud models, or both for that, and tell me why. If local models would be slow on this computer, recommend cloud models. If I don't have a paid plan, start with gemma4:cloud, which the free plan includes. Most other cloud models need a paid plan or purchased credits.

Do not sign in, create an API key, or use an API key for me. If I choose cloud models, tell me to run ollama signin, or to create a key at https://ollama.com/settings/keys.
```
