import express from "express";
import {
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// @route   GET /api/user/profile
// @desc    Get user profile
// @access  Private
router.get("/profile", authMiddleware, getUserProfile);

// @route   PUT /api/user/profile
// @desc    Update user profile
// @access  Private
router.put("/profile", authMiddleware, updateUserProfile);

export default router;