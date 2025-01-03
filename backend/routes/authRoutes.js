import express from "express";
import {
  registerUser,
  loginUser,
} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post("/register", registerUser);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post("/login", loginUser);

// @route   GET /api/auth/me
// @desc    Get logged-in user profile
// @access  Private
router.get("/me", authMiddleware, (req, res) => {
  res.json({ userId: req.userId });
});

export default router;