import Chat from "../models/Chat.js";
import File from "../models/File.js";

// @desc    Get chat analytics
// @route   GET /api/analytics/chat
// @access  Private
export const getChatAnalytics = async (req, res) => {
  const { userId } = req.body;

  try {
    // Find chat history for the user
    const chat = await Chat.findOne({ userId });
    if (!chat) {
      return res.status(404).json({ message: "No chat history found" });
    }

    // Calculate analytics
    const totalMessages = chat.messages.length;
    const userMessages = chat.messages.filter(
      (msg) => msg.role === "user"
    ).length;
    const botMessages = totalMessages - userMessages;

    res.status(200).json({ totalMessages, userMessages, botMessages });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get file analytics
// @route   GET /api/analytics/file
// @access  Private
export const getFileAnalytics = async (req, res) => {
  const { userId } = req.body;

  try {
    // Find all files for the user
    const files = await File.find({ userId });
    const totalFiles = files.length;
    const pdfFiles = files.filter((file) => file.fileType === "application/pdf")
      .length;
    const imageFiles = totalFiles - pdfFiles;

    res.status(200).json({ totalFiles, pdfFiles, imageFiles });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
