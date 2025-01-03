import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: "logs/error.log", level: "error" }), // Log errors to file
    new winston.transports.File({ filename: "logs/combined.log" }), // Log all levels to file
  ],
});

export default logger;