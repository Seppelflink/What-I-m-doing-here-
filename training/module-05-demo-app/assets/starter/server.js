// Requires Node.js 18+, Express, and dotenv. See the module README for setup.

const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json({ limit: '8kb' }));

// POST /api/generate forwards to a configured model API or returns a local mock.
app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body || {};
  if (typeof prompt !== 'string' || !prompt.trim()) return res.status(400).json({ error: 'Missing prompt' });

  if (prompt.length > 2000) return res.status(400).json({ error: 'Prompt too long' });

  const apiUrl = process.env.MODEL_API_URL;
  const apiKey = process.env.MODEL_API_KEY;
  const authHeader = process.env.MODEL_API_AUTH_HEADER || 'Authorization';
  const authPrefix = process.env.MODEL_API_AUTH_PREFIX || '';

  if (!apiUrl && !apiKey) {
    return res.json({ text: `MOCKED RESPONSE: Received prompt (${prompt.length} chars).` });
  }

  if (!apiUrl || !apiKey) {
    return res.status(500).json({ error: 'Configure both model settings or clear both to use mock mode' });
  }

  try {
    const authValue = authPrefix ? [authPrefix, apiKey].join(' ') : apiKey;
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Configure the header name and optional prefix to match your provider.
        [authHeader]: authValue
      },
      body: JSON.stringify({ prompt, max_tokens: 150 }),
      signal: AbortSignal.timeout(30_000)
    });

    const body = await response.json().catch(() => null);
    if (!response.ok) {
      console.error('Model API returned HTTP status', response.status);
      return res.status(502).json({ error: 'Model API request failed' });
    }
    if (!body || typeof body !== 'object') {
      return res.status(502).json({ error: 'Model API returned an invalid response' });
    }

    // Adapt the response fields to the provider's documented response shape.
    const text = body.text || body.output;
    if (typeof text !== 'string') {
      return res.status(502).json({ error: 'Model API response did not contain text' });
    }
    return res.json({ text });
  } catch {
    console.error('Model API request failed');
    return res.status(502).json({ error: 'Model API request failed' });
  }
});

app.use(express.static(__dirname));

const port = process.env.PORT || 3000;
app.listen(port, '127.0.0.1', () => console.log(`Demo server listening on http://127.0.0.1:${port}`));
