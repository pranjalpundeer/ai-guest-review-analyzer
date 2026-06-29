const { reviews, generateId } = require("../data/reviews");

// helper to auto-detect sentiment from rating if not provided
function detectSentiment(rating) {
  if (rating >= 4) return "Positive";
  if (rating === 3) return "Neutral";
  return "Negative";
}

// GET /api/reviews
const getAllReviews = (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/reviews/search?q=
// NOTE: this route must be registered BEFORE /:id in the router
const searchReviews = (req, res, next) => {
  try {
    const q = req.query.q;

    if (!q || q.trim() === "") {
      return res.status(400).json({
        success: false,
        error: "Search query 'q' is required",
      });
    }

    const query = q.toLowerCase().trim();

    const results = reviews.filter(
      (r) =>
        r.review.toLowerCase().includes(query) ||
        r.guestName.toLowerCase().includes(query) ||
        r.theme.toLowerCase().includes(query) ||
        r.sentiment.toLowerCase().includes(query)
    );

    res.status(200).json({
      success: true,
      count: results.length,
      query: q,
      data: results,
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/reviews/:id
const getReviewById = (req, res, next) => {
  try {
    const review = reviews.find((r) => r.id === req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        error: `Review with id '${req.params.id}' not found`,
      });
    }

    res.status(200).json({
      success: true,
      data: review,
    });
  } catch (err) {
    next(err);
  }
};

// POST /api/reviews
const createReview = (req, res, next) => {
  try {
    const { guestName, rating, review, theme, response } = req.body;

    const ratingNum = Number(rating);

    const newReview = {
      id: generateId(),
      guestName: guestName.trim(),
      rating: ratingNum,
      sentiment: req.body.sentiment || detectSentiment(ratingNum),
      theme: theme || "General",
      review: review.trim(),
      response: response || "",
      date: new Date().toISOString().split("T")[0],
    };

    reviews.push(newReview);

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: newReview,
    });
  } catch (err) {
    next(err);
  }
};

// PUT /api/reviews/:id
const updateReview = (req, res, next) => {
  try {
    const index = reviews.findIndex((r) => r.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({
        success: false,
        error: `Review with id '${req.params.id}' not found`,
      });
    }

    const existing = reviews[index];
    const { guestName, rating, review, theme, sentiment, response } = req.body;

    const ratingNum = rating !== undefined ? Number(rating) : existing.rating;

    const updated = {
      ...existing,
      guestName: guestName ? guestName.trim() : existing.guestName,
      rating: ratingNum,
      sentiment: sentiment || detectSentiment(ratingNum),
      theme: theme || existing.theme,
      review: review ? review.trim() : existing.review,
      response: response !== undefined ? response : existing.response,
    };

    reviews[index] = updated;

    res.status(200).json({
      success: true,
      message: "Review updated successfully",
      data: updated,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/reviews/:id
const deleteReview = (req, res, next) => {
  try {
    const index = reviews.findIndex((r) => r.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({
        success: false,
        error: `Review with id '${req.params.id}' not found`,
      });
    }

    const deleted = reviews.splice(index, 1)[0];

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
      data: deleted,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllReviews,
  searchReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
