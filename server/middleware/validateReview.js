// validates request body before it reaches the controller
// keeps validation logic out of controllers - cleaner separation

const validateReview = (req, res, next) => {
  const { guestName, rating, review } = req.body;

  if (!guestName || typeof guestName !== "string" || guestName.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "guestName is required and must be a non-empty string",
    });
  }

  if (rating === undefined || rating === null) {
    return res.status(400).json({
      success: false,
      error: "rating is required",
    });
  }

  const ratingNum = Number(rating);
  if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
    return res.status(400).json({
      success: false,
      error: "rating must be a number between 1 and 5",
    });
  }

  if (!review || typeof review !== "string" || review.trim() === "") {
    return res.status(400).json({
      success: false,
      error: "review text is required and must be a non-empty string",
    });
  }

  next();
};

module.exports = validateReview;
