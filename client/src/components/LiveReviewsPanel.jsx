/**
 * LiveReviewsPanel — Week 4
 * Connects directly to the new backend endpoints (/api/reviews, /api/stats)
 * and renders real, live data fetched over HTTP. Used on the Dashboard to
 * demonstrate the frontend ↔ backend connection (separate from the existing
 * AI Analyzer, which talks to /api/analyze).
 */
import { useEffect, useState, useCallback } from 'react';
import Badge from './Badge';
import { Input, Button } from './ui';
import {
  fetchAllReviews,
  fetchGuestStats,
  searchGuestReviews,
  deleteGuestReview,
} from '../utils/api';

const SENTIMENT_ICON = { Positive: '😊', Neutral: '😐', Negative: '😞' };
const sentimentVariant = (s) => s?.toLowerCase() ?? 'default';

const StatPill = ({ label, value, accent }) => (
  <div className="card !p-4 flex flex-col gap-1 border-l-4" style={{ borderLeftColor: accent }}>
    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{label}</span>
    <span className="text-2xl font-bold text-himalaya-slate dark:text-white">{value}</span>
  </div>
);

const LiveReviewsPanel = () => {
  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);

  const loadAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [reviewsRes, statsRes] = await Promise.all([
        fetchAllReviews(),
        fetchGuestStats(),
      ]);
      setReviews(reviewsRes.data);
      setStats(statsRes.data);
    } catch (err) {
      setError(
        err.code === 'ERR_NETWORK' || err.code === 'ECONNREFUSED'
          ? 'Cannot reach the backend. Make sure the server is running on port 5000.'
          : err.message || 'Failed to load live data from the backend.'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      loadAll();
      return;
    }
    setSearching(true);
    setError(null);
    try {
      const res = await searchGuestReviews(query.trim());
      setReviews(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Search failed.');
    } finally {
      setSearching(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteGuestReview(id);
      setReviews((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      setError(err.response?.data?.error || 'Could not delete review.');
    }
  };

  return (
    <div id="live-backend" className="card space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-himalaya-blue dark:text-himalaya-mist flex items-center gap-2">
            🔌 Live Guest Reviews <span className="text-xs font-normal text-gray-400">(Week 4 — REST API)</span>
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Fetched live from <code className="text-xs bg-himalaya-mist dark:bg-himalaya-blue/20 px-1.5 py-0.5 rounded">GET /api/reviews</code> and{' '}
            <code className="text-xs bg-himalaya-mist dark:bg-himalaya-blue/20 px-1.5 py-0.5 rounded">GET /api/stats</code>
          </p>
        </div>
        <Button onClick={loadAll} variant="secondary" icon={<span>↻</span>}>
          Refresh
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-10 text-gray-400">Loading live data…</div>
      ) : (
        <>
          {stats && (
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <StatPill label="Total Reviews" value={stats.total} accent="#2563eb" />
              <StatPill label="Positive" value={stats.positive} accent="#16a34a" />
              <StatPill label="Negative" value={stats.negative} accent="#dc2626" />
              <StatPill label="Neutral" value={stats.neutral} accent="#ca8a04" />
              <StatPill label="Avg Rating" value={`${stats.averageRating} ★`} accent="#7c3aed" />
            </div>
          )}

          <form onSubmit={handleSearch} className="flex gap-3">
            <div className="flex-1">
              <Input
                placeholder="Search reviews by keyword, guest, theme or sentiment…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={searching}>
              {searching ? 'Searching…' : 'Search'}
            </Button>
          </form>

          <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-700">
              <thead>
                <tr className="bg-himalaya-mist/60 dark:bg-himalaya-blue/10">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-himalaya-blue dark:text-himalaya-mist uppercase tracking-wider">Guest</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-himalaya-blue dark:text-himalaya-mist uppercase tracking-wider min-w-[220px]">Review</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-himalaya-blue dark:text-himalaya-mist uppercase tracking-wider">Sentiment</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-himalaya-blue dark:text-himalaya-mist uppercase tracking-wider">Theme</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-himalaya-blue dark:text-himalaya-mist uppercase tracking-wider">Rating</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-himalaya-blue dark:text-himalaya-mist uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-himalaya-stone divide-y divide-gray-50 dark:divide-gray-700/50">
                {reviews.map((r) => (
                  <tr key={r.id} className="hover:bg-himalaya-snow dark:hover:bg-himalaya-slate/50 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{r.guestName}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300 max-w-sm">
                      <p className="line-clamp-2">{r.review}</p>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant={sentimentVariant(r.sentiment)}>
                        {SENTIMENT_ICON[r.sentiment]} {r.sentiment}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Badge variant="theme">{r.theme}</Badge>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">{r.rating} / 5</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleDelete(r.id)}
                        className="text-xs font-semibold text-red-500 hover:underline whitespace-nowrap"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {reviews.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-gray-400 text-sm">
                      No reviews match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default LiveReviewsPanel;
