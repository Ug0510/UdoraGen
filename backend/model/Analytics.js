import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    totalMessages: { type: Number, default: 0 },
    totalFiles: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Analytics = mongoose.model("Analytics", analyticsSchema);

export default Analytics;