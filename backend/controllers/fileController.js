import cloudinary from "../config/cloudinary.js";
import File from "../models/File.js";

// @desc    Upload a file
// @route   POST /api/file/upload
// @access  Private
export const uploadFile = async (req, res) => {
  const { userId } = req.body;
  const file = req.file;

  try {
    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: "auto", // Automatically detect file type
    });

    // Save file metadata to database
    const newFile = await File.create({
      userId,
      filename: file.originalname,
      fileType: file.mimetype,
      fileUrl: result.secure_url,
    });

    res.status(201).json(newFile);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get user files
// @route   GET /api/file/user
// @access  Private
export const getUserFiles = async (req, res) => {
  const { userId } = req.body;

  try {
    // Find all files for the user
    const files = await File.find({ userId });
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};