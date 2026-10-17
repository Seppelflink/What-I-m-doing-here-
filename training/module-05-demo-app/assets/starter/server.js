// Minimal Express server for demo app starter
// Usage:
// 1. npm init -y
// 2. npm install express
// 3. Set env: MODEL_API_URL (optional) and MODEL_API_KEY (optional)
// 4. node server.js

const express = require('express');
const fetch = global.fetch || require('node-fetch'); // node >=18 has fetch
const app = express();
app.use(express.json());

// Simple POST /api/generate -> forwards to model API or returns a mocked response if API key is not set
app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body || {};
  if (!prompt || typeof prompt !== 'string') return res.status(400).json({ error: 'Missing prompt' });

  // Basic input validation / safety example
  if (prompt.length > 2000) return res.status(400).json({ error: 'Prompt too long' });

  const apiUrl = process.env.MODEL_API_URL; // e.g. https://api.example.com/v1/generate
  const apiKey = process.env.MODEL_API_KEY;

  if (!apiUrl || !apiKey) {
    // Mocked response for offline/demo use
    return res.json({ text: `MOCKED RESPONSE: Received prompt (${prompt.length} chars).` });
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({ prompt, max_tokens: 150 })
    });

    const body = await response.json();
    if (!response.ok) return res.status(502).json({ error: body.error || 'Upstream error' });

    // Adapt to the provider's response shape; here assume body.text contains the output
    return res.json({ text: body.text || body.output || JSON.stringify(body) });
  } catch (err) {
    console.error('Model API error', err);
    return res.status(500).json({ error: 'Model API request failed' });
  }
});

app.use(express.static('assets/starter'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Demo server listening on http://localhost:${port}`));
