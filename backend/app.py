import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

GEMINI_API_URL = os.getenv("GEMINI_API_URL", "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "AIzaSyAJ9IZISJx8N4boPosoT-MKvvxXA5RLVgI")

@app.route('/api/gemini', methods=['POST'])
def gemini():
    data = request.get_json()
    prompt = data.get('prompt', '')
    headers = {
        'Content-Type': 'application/json',
    }
    payload = {
        "contents": [
            {"parts": [{"text": prompt}]}
        ]
    }
    try:
        response = requests.post(
            f"{GEMINI_API_URL}?key={AIzaSyAJ9IZISJx8N4boPosoT-MKvvxXA5RLVgI}",
            headers=headers,
            json=payload,
            timeout=30
        )
        response.raise_for_status()
        gemini_data = response.json()
        gemini_reply = gemini_data.get('candidates', [{}])[0].get('content', {}).get('parts', [{}])[0].get('text', 'No reply received')
    except Exception as e:
        gemini_reply = f"Error communicating with Gemini API: {str(e)}"
    return jsonify({'response': gemini_reply})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
