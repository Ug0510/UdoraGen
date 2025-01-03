import cors from "cors";

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000", // Allow frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow cookies and credentials
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;