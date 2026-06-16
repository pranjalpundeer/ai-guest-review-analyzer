/**
 * API Utility
 * Handles all HTTP requests to the backend
 */

import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 60000, // 60s for large batches
  headers: { 'Content-Type': 'application/json' },
});

/**
 * Analyze an array of reviews
 * @param {string[]} reviews
 * @returns {Promise<{ results: AnalysisResult[] }>}
 */
export const analyzeReviews = async (reviews) => {
  const response = await api.post('/analyze', { reviews });
  return response.data;
};

export default api;
