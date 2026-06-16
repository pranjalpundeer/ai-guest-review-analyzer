/**
 * Analyze Routes
 * Defines the /api/analyze endpoint
 */

const express = require('express');
const router = express.Router();
const { analyzeReviewsController } = require('../controllers/analyzeController');

// POST /api/analyze
router.post('/analyze', analyzeReviewsController);

module.exports = router;
