/**
 * Analyze Controller
 * Handles the /api/analyze POST endpoint logic
 */

const { analyzeReviews } = require('../services/openaiService');

/**
 * POST /api/analyze
 * Body: { reviews: string[] }
 * Returns: { results: AnalysisResult[] }
 */
const analyzeReviewsController = async (req, res) => {
  try {
    const { reviews } = req.body;

    // Input validation
    if (!reviews || !Array.isArray(reviews)) {
      return res.status(400).json({
        error: 'Invalid input',
        message: 'Request body must include a "reviews" array.',
      });
    }

    const filteredReviews = reviews
      .map((r) => (typeof r === 'string' ? r.trim() : ''))
      .filter((r) => r.length > 0);

    if (filteredReviews.length === 0) {
      return res.status(400).json({
        error: 'Empty reviews',
        message: 'Please provide at least one non-empty review.',
      });
    }

    if (filteredReviews.length > 50) {
      return res.status(400).json({
        error: 'Too many reviews',
        message: 'Maximum 50 reviews can be analyzed at once.',
      });
    }

    console.log(`📝 Analyzing ${filteredReviews.length} review(s)...`);
    const results = await analyzeReviews(filteredReviews);
    console.log(`✅ Analysis complete for ${results.length} review(s)`);

    return res.json({ results });
  } catch (err) {
    console.error('Analysis error:', err.message);

    // Handle specific OpenAI errors
    if (err.message.includes('OPENAI_API_KEY')) {
      return res.status(500).json({
        error: 'Configuration error',
        message: 'OpenAI API key is not configured. Please set OPENAI_API_KEY in your .env file.',
      });
    }

    if (err.status === 401 || err.message.includes('Incorrect API key')) {
      return res.status(401).json({
        error: 'Invalid API key',
        message: 'The OpenAI API key is invalid. Please check your .env file.',
      });
    }

    if (err.status === 429) {
      return res.status(429).json({
        error: 'Rate limit exceeded',
        message: 'OpenAI rate limit reached. Please wait a moment and try again.',
      });
    }

    if (err.code === 'ENOTFOUND' || err.code === 'ECONNREFUSED') {
      return res.status(503).json({
        error: 'Network error',
        message: 'Unable to reach OpenAI. Please check your internet connection.',
      });
    }

    return res.status(500).json({
      error: 'Analysis failed',
      message: err.message || 'An unexpected error occurred during analysis.',
    });
  }
};

module.exports = { analyzeReviewsController };
