import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// @desc    Send a message to Gemini AI
// @param   {string} message - The user's message
// @returns {string} - The AI's response
export const sendMessageToAI = async (message) => {
  try {
    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    throw new Error("Failed to generate AI response");
  }
};