const { reviews } = require("../data/reviews");

// GET /api/stats
const getStats = (req, res, next) => {
  try {
    const total = reviews.length;

    const positive = reviews.filter((r) => r.sentiment === "Positive").length;
    const negative = reviews.filter((r) => r.sentiment === "Negative").length;
    const neutral = reviews.filter((r) => r.sentiment === "Neutral").length;

    // average rating
    const avgRating =
      total > 0
        ? (reviews.reduce((sum, r) => sum + r.rating, 0) / total).toFixed(1)
        : 0;

    // theme breakdown
    const themeMap = {};
    reviews.forEach((r) => {
      const t = r.theme || "General";
      themeMap[t] = (themeMap[t] || 0) + 1;
    });

    const themes = Object.entries(themeMap).map(([name, count]) => ({
      name,
      count,
    }));

    res.status(200).json({
      success: true,
      data: {
        total,
        positive,
        negative,
        neutral,
        averageRating: parseFloat(avgRating),
        themes,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getStats };
