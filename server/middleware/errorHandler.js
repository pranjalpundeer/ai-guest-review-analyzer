// global error handler - must be registered after all routes in server.js
// express identifies error middleware by the 4-argument signature (err, req, res, next)

const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

module.exports = errorHandler;
