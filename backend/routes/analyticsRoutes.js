import express from "express";
import {
  getChatAnalytics,
  getFileAnalytics,
} from "../controllers/analyticsController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// @route   GET /api/analytics/chat
// @desc    Get chat analytics
// @access  Private
router.get("/chat", authMiddleware, getChatAnalytics);

// @route   GET /api/analytics/file
// @desc    Get file analytics
// @access  Private
router.get("/file", authMiddleware, getFileAnalytics);

export default router;