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

/**
 * Week 4 — Guest Reviews CRUD + Stats
 * Talks to the new /api/reviews and /api/stats backend endpoints.
 */

export const fetchAllReviews = async () => {
  const response = await api.get('/reviews');
  return response.data;
};

export const fetchReviewById = async (id) => {
  const response = await api.get(`/reviews/${id}`);
  return response.data;
};

export const searchGuestReviews = async (query) => {
  const response = await api.get('/reviews/search', { params: { q: query } });
  return response.data;
};

export const createGuestReview = async (reviewData) => {
  const response = await api.post('/reviews', reviewData);
  return response.data;
};

export const updateGuestReview = async (id, reviewData) => {
  const response = await api.put(`/reviews/${id}`, reviewData);
  return response.data;
};

export const deleteGuestReview = async (id) => {
  const response = await api.delete(`/reviews/${id}`);
  return response.data;
};

export const fetchGuestStats = async () => {
  const response = await api.get('/stats');
  return response.data;
};

export default api;
