import bcrypt from "bcrypt";
import User from "../models/User.js";

// @desc    Hash a password
// @param   {string} password - The password to hash
// @returns {string} - Hashed password
export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// @desc    Compare passwords
// @param   {string} password - The plain text password
// @param   {string} hashedPassword - The hashed password
// @returns {boolean} - True if passwords match, false otherwise
export const comparePasswords = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};