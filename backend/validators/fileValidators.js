import Joi from "joi";

// Validation schema for file uploads
export const fileUploadSchema = Joi.object({
  userId: Joi.string().required(),
  file: Joi.any().required(), // File is validated by multer middleware
});