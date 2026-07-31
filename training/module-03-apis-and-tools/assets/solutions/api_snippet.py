"""
Simple API snippet for instructor solutions (requests-based).
Replace YOUR_API_KEY and ENDPOINT with the real values when running.
"""
import os
import requests

API_KEY = os.environ.get('API_KEY', 'YOUR_API_KEY')
ENDPOINT = 'https://api.example.com/v1/generate'

payload = {
    'prompt': 'Write a helpful greeting for a user new to the product.',
    'max_tokens': 60,
}

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

resp = requests.post(ENDPOINT, json=payload, headers=headers, timeout=10)
print('Status:', resp.status_code)
print('Body:', resp.text)
