import express from "express";
import {
  uploadFile,
  getUserFiles,
} from "../controllers/fileController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import fileUploadMiddleware from "../middleware/fileUploadMiddleware.js";

const router = express.Router();

// @route   POST /api/file/upload
// @desc    Upload a file
// @access  Private
router.post(
  "/upload",
  authMiddleware,
  fileUploadMiddleware.single("file"),
  uploadFile
);

// @route   GET /api/file/user
// @desc    Get user files
// @access  Private
router.get("/user", authMiddleware, getUserFiles);

export default router;