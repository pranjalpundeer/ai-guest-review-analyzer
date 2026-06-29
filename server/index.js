/**
 * Himalayan Guest Experience Intelligence Platform
 * Express Server Entry Point
 *
 * Week 4 additions: /api/reviews (full CRUD + search), /api/stats,
 * dedicated validation middleware, and a centralized error handler.
 * The existing /api/analyze (OpenAI) route is kept exactly as it was.
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const analyzeRoutes = require('./routes/analyze');
const reviewRoutes = require('./routes/reviews');
const statsRoutes = require('./routes/stats');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// --- middleware ---
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Himalayan Platform API is running' });
});

// --- existing routes (untouched) ---
// routes/analyze.js defines POST /analyze, so this is mounted at /api
// giving the existing endpoint: POST /api/analyze
app.use('/api', analyzeRoutes);

// --- Week 4 routes ---
app.use('/api/reviews', reviewRoutes);
app.use('/api/stats', statsRoutes);

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// Global error handler — must be registered last
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🏔️  Himalayan Platform server running on http://localhost:${PORT}`);
});
