const express = require("express");
const router = express.Router();

const {
  getAllReviews,
  searchReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

const validateReview = require("../middleware/validateReview");

// IMPORTANT: /search must come before /:id
// otherwise express will treat "search" as an id param
router.get("/search", searchReviews);

router.get("/", getAllReviews);
router.get("/:id", getReviewById);
router.post("/", validateReview, createReview);
router.put("/:id", updateReview);
router.patch("/:id", updateReview);
router.delete("/:id", deleteReview);

module.exports = router;
