# Elimuhub Gemini Web Integration

A customizable web interface for using Gemini as an education assistant for Elimuhub. You can use either Python (Flask) or Node.js (Express) as your backend.

## Features

- Simple HTML frontend (no frameworks needed)
- Backend API in Python (Flask) **or** Node.js (Express) with Gemini API integration
- Secure API key usage via environment variables

## Directory Structure

```
elimuhub-gemini-web/
├── backend/
│   ├── app.py          # Python backend
│   ├── server.js       # Node.js backend
│   ├── requirements.txt
│   ├── package.json
│   └── .env            # Environment variables (not committed)
├── frontend/
│   └── index.html
└── README.md
```

## Setup

### 1. Clone this repo

```bash
git clone https://github.com/kibiti/elimuhub-gemini-web.git
cd elimuhub-gemini-web
```

### 2. Set up Environment Variables

Create a `.env` file in the `backend/` directory:

```
GEMINI_API_KEY=your_actual_gemini_api_key
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
```

### 3. Run the Backend

#### Python (Flask)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

#### Node.js (Express)

```bash
cd backend
npm install
npm start
```

Both will run on `http://localhost:5000`.

### 4. Open the Frontend

- Open `frontend/index.html` in your browser (you can use it on Android by opening the file directly).
- If you run backend and frontend on different machines, change `localhost` in `index.html` to your backend's IP address.

### 5. Customize

- Edit `frontend/index.html` for branding or extra features.
- Add logic in `backend/app.py` or `backend/server.js` for more advanced Gemini interactions.

---

## Security

- **Never expose your API key in frontend code.** All Gemini API calls are securely handled by the backend.

## License

MIT
