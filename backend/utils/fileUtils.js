import fs from "fs";
import path from "path";

// @desc    Delete a file from the uploads folder
// @param   {string} filePath - The path to the file
export const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file: ${err.message}`);
    } else {
      console.log(`File deleted: ${filePath}`);
    }
  });
};

// @desc    Get the file extension
// @param   {string} filename - The name of the file
// @returns {string} - The file extension
export const getFileExtension = (filename) => {
  return path.extname(filename).toLowerCase();
};