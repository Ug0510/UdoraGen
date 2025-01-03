import Chat from "../models/Chat.js";

// @desc    Send a message
// @route   POST /api/chat/send
// @access  Private
export const sendMessage = async (req, res) => {
  const { userId, message } = req.body;

  try {
    // Find or create chat history for the user
    let chat = await Chat.findOne({ userId });
    if (!chat) {
      chat = await Chat.create({ userId, messages: [] });
    }

    // Add user message to chat history
    chat.messages.push({ role: "user", content: message });

    // Save chat history
    await chat.save();

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get chat history
// @route   GET /api/chat/history
// @access  Private
export const getChatHistory = async (req, res) => {
  const { userId } = req.body;

  try {
    // Find chat history for the user
    const chat = await Chat.findOne({ userId });
    if (!chat) {
      return res.status(404).json({ message: "No chat history found" });
    }

    res.status(200).json(chat.messages);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};