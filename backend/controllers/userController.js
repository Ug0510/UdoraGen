import User from "../models/User.js";

// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Private
export const getUserProfile = async (req, res) => {
  const { userId } = req.body;

  try {
    // Find user by ID
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update user profile
// @route   PUT /api/user/profile
// @access  Private
export const updateUserProfile = async (req, res) => {
  const { userId, username, email } = req.body;

  try {
    // Find user by ID and update profile
    const user = await User.findByIdAndUpdate(
      userId,
      { username, email },
      { new: true }
    ).select("-password");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};