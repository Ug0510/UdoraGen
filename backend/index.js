require('dotenv').config();
const express = require('express');
const {
    GoogleGenerativeAI,
  } = require("@google/generative-ai");

const app = express();
const port = process.env.PORT || 3000; // Use environment port or default to 3000

app.use(express.json()); // To parse JSON request bodies


const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

let history = [];

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    if (!userMessage) {
      return res.status(400).send({ error: "Message is required" });
    }
    history.push({ role: "user", parts: [ {text:userMessage} ]});
    
  
    const chatSession = model.startChat({
        generationConfig,
        history: history,
    });
  
    try {
        const result = await chatSession.sendMessage(userMessage);
        const assistantResponse = result.response.text();
        history.push({ role: "model", parts: [ {text:assistantResponse} ]});
    
       
        res.send({ response: assistantResponse });

    } catch (error) {
        console.error("Error during API call:", error);
        res.status(500).send({ error: "Failed to process the request." });
    }
});


app.get('/chat-history', (req, res) => {
    res.json({ history: history });
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});