import cloudinary from "../config/cloudinary.js";
import File from "../models/File.js";

// @desc    Upload a file to Cloudinary
// @param   {Object} file - The file to upload
// @returns {Object} - File metadata
export const uploadFileToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.path, {
      resource_type: "auto",
    });
    return result;
  } catch (error) {
    throw new Error("Failed to upload file");
  }
};

// @desc    Save file metadata to database
// @param   {Object} fileData - File metadata
// @returns {Object} - Saved file document
export const saveFileMetadata = async (fileData) => {
  try {
    const newFile = await File.create(fileData);
    return newFile;
  } catch (error) {
    throw new Error("Failed to save file metadata");
  }
};