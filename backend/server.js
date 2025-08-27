const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_URL = process.env.GEMINI_API_URL || "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
const AIzaSyAJ9IZISJx8N4boPosoT-MKvvxXA5RLVgI = process.env.GEMINI_API_KEY || "AIzaSyAJ9IZISJx8N4boPosoT-MKvvxXA5RLVgI";

app.post('/api/gemini', async (req, res) => {
  const prompt = req.body.prompt || "";
  try {
    const payload = {
      contents: [
        { parts: [{ text: prompt }] }
      ]
    };
    const geminiRes = await axios.post(
      `${GEMINI_API_URL}?key=${AIzaSyAJ9IZISJx8N4boPosoT-MKvvxXA5RLVgI}`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );
    const geminiData = geminiRes.data;
    const geminiReply = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || "No reply received";
    res.json({ response: geminiReply });
  } catch (e) {
    res.json({ response: `Error communicating with Gemini API: ${e.message}` });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Node.js backend running on port ${PORT}`);
});
