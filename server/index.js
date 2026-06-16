/**
 * Himalayan Guest Experience Intelligence Platform
 * Express Server Entry Point
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const analyzeRoutes = require('./routes/analyze');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Himalayan Platform API is running' });
});

// API Routes
app.use('/api', analyzeRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error', details: err.message });
});

app.listen(PORT, () => {
  console.log(`🏔️  Himalayan Platform server running on http://localhost:${PORT}`);
});
