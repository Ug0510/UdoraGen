import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    filename: { type: String, required: true },
    fileType: { type: String, required: true },
    fileUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const File = mongoose.model("File", fileSchema);

export default File;