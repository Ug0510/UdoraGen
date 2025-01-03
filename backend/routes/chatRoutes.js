import express from "express";
import {
  sendMessage,
  getChatHistory,
} from "../controllers/chatController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// @route   POST /api/chat/send
// @desc    Send a message
// @access  Private
router.post("/send", authMiddleware, sendMessage);

// @route   GET /api/chat/history
// @desc    Get chat history
// @access  Private
router.get("/history", authMiddleware, getChatHistory);

export default router;