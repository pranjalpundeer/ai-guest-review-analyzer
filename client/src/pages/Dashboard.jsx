/**
 * Dashboard Page
 * Full analytics dashboard: stats, chart, search/filter, and real AI review analyzer
 */

import { useState, useMemo } from 'react';
import StatsCards from '../components/StatsCards';
import SentimentChart from '../components/SentimentChart';
import ResultsTable from '../components/ResultsTable';
import ReviewInput from '../components/ReviewInput';
import LoadingOverlay from '../components/LoadingOverlay';
import ErrorBanner from '../components/ErrorBanner';
import SectionTitle from '../components/SectionTitle';
import { analyzeReviews } from '../utils/api';
import { exportToCSV } from '../utils/exportCSV';
import { SAMPLE_REVIEWS } from '../data/sampleData';

const EXAMPLE_REVIEWS = `Amazing food and very friendly staff. Highly recommend!
Rooms were clean but breakfast was average and nothing special.
The washroom was dirty and service was slow throughout our stay.
Stunning mountain views from our room. Absolutely breathtaking experience.
The price was quite high for what we received. Mediocre value overall.
Our host Ramesh was incredibly helpful and made us feel so welcome.
Location is perfect — right in the heart of the valley near everything.
Bed was comfortable but the WiFi was very poor and kept disconnecting.`;

const Dashboard = () => {
  const [reviewText, setReviewText] = useState('');
  const [results, setResults]       = useState(SAMPLE_REVIEWS); // start with sample
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState(null);
  const [usingSample, setUsingSample] = useState(true);

  const parseReviews = (text) =>
    text.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);

  const handleAnalyze = async () => {
    setError(null);
    const reviews = parseReviews(reviewText);
    if (reviews.length === 0) {
      setError({ title: 'No reviews entered', message: 'Please paste at least one guest review.' });
      return;
    }
    if (reviews.length > 50) {
      setError({ title: 'Too many reviews', message: 'Maximum 50 reviews can be analysed at once.' });
      return;
    }

    setLoading(true);
    setResults([]);
    setUsingSample(false);

    try {
      const data = await analyzeReviews(reviews);
      setResults(data.results);
    } catch (err) {
      const status   = err.response?.status;
      const serverMsg = err.response?.data?.message || err.response?.data?.error;

      if (status === 401) {
        setError({ title: 'Invalid API Key', message: 'The OpenAI API key is invalid. Check your server .env file.' });
      } else if (status === 429) {
        setError({ title: 'Rate Limit Exceeded', message: 'Too many requests to OpenAI. Please wait a moment.' });
      } else if (err.code === 'ERR_NETWORK' || err.code === 'ECONNREFUSED') {
        setError({ title: 'Cannot reach server', message: 'The backend is not running. Run: cd server && npm run dev' });
      } else {
        setError({ title: 'Analysis Failed', message: serverMsg || err.message || 'An unexpected error occurred.' });
      }
      setResults(SAMPLE_REVIEWS);
      setUsingSample(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setReviewText('');
    setResults(SAMPLE_REVIEWS);
    setUsingSample(true);
    setError(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-himalaya-blue dark:text-white">
            Analytics Dashboard
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {usingSample
              ? 'Showing sample data — paste your reviews below to run real AI analysis'
              : `Showing results for ${results.length} analysed review${results.length !== 1 ? 's' : ''}`
            }
          </p>
        </div>
        {results.length > 0 && !usingSample && (
          <button
            onClick={() => exportToCSV(results)}
            className="btn-secondary flex items-center gap-2 text-himalaya-emerald border-himalaya-emerald/30 hover:bg-emerald-50"
          >
            📥 Export CSV
          </button>
        )}
      </div>

      {/* Error banner */}
      <ErrorBanner error={error} onDismiss={() => setError(null)} />

      {/* Stats */}
      {results.length > 0 && !loading && (
        <StatsCards results={results} />
      )}

      {/* Chart + Review Input */}
      <div className="grid lg:grid-cols-[340px_1fr] gap-6 items-start">
        {results.length > 0 && !loading && (
          <SentimentChart results={results} />
        )}
        <ReviewInput
          value={reviewText}
          onChange={setReviewText}
          onAnalyze={handleAnalyze}
          onClear={handleClear}
          loading={loading}
        />
      </div>

      {/* Loading */}
      {loading && <LoadingOverlay count={parseReviews(reviewText).length} />}

      {/* Results table */}
      {results.length > 0 && !loading && (
        <div>
          {usingSample && (
            <div className="mb-3 flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl px-4 py-3">
              <span>⚠️</span>
              <span>Displaying sample data. Paste reviews above and click <strong>Analyze Reviews</strong> to see real AI results.</span>
            </div>
          )}
          <ResultsTable results={results} onExport={() => exportToCSV(results)} />
        </div>
      )}

      {/* Empty state */}
      {results.length === 0 && !loading && !error && (
        <div className="card flex flex-col items-center justify-center py-16 gap-4 text-center border-2 border-dashed border-himalaya-blue/15 dark:border-himalaya-blue/30 bg-transparent shadow-none">
          <div className="text-5xl">🏔️</div>
          <div>
            <p className="font-semibold text-himalaya-blue dark:text-himalaya-mist text-lg">Ready to analyse</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-sm">
              Paste guest reviews above (one per line) and click Analyze Reviews.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
