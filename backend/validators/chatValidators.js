import Joi from "joi";

// Validation schema for sending a message
export const sendMessageSchema = Joi.object({
  userId: Joi.string().required(),
  message: Joi.string().min(1).required(),
});

// Validation schema for getting chat history
export const chatHistorySchema = Joi.object({
  userId: Joi.string().required(),
});