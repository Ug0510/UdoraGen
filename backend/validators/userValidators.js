import Joi from "joi";

// Validation schema for updating user profile
export const updateProfileSchema = Joi.object({
  userId: Joi.string().required(),
  username: Joi.string().min(3).max(30),
  email: Joi.string().email(),
});