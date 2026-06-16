/**
 * Himalayan Guest Experience Intelligence Platform
 * Main App Component
 */

import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ReviewInput from './components/ReviewInput';
import StatsCards from './components/StatsCards';
import SentimentChart from './components/SentimentChart';
import ResultsTable from './components/ResultsTable';
import LoadingOverlay from './components/LoadingOverlay';
import ErrorBanner from './components/ErrorBanner';
import { analyzeReviews } from './utils/api';
import { exportToCSV } from './utils/exportCSV';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Sync dark mode to <html> class
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Parse textarea into array of reviews
  const parseReviews = (text) =>
    text
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

  const handleAnalyze = async () => {
    setError(null);
    const reviews = parseReviews(reviewText);

    if (reviews.length === 0) {
      setError({
        title: 'No reviews entered',
        message: 'Please paste at least one guest review before analyzing.',
      });
      return;
    }

    if (reviews.length > 50) {
      setError({
        title: 'Too many reviews',
        message: 'You can analyze up to 50 reviews at once. Please reduce the number of reviews.',
      });
      return;
    }

    setLoading(true);
    setResults([]);

    try {
      const data = await analyzeReviews(reviews);
      setResults(data.results);
    } catch (err) {
      const status = err.response?.status;
      const serverMsg = err.response?.data?.message || err.response?.data?.error;

      if (status === 401) {
        setError({
          title: 'Invalid API Key',
          message: 'The OpenAI API key is invalid. Please check your server .env file.',
        });
      } else if (status === 429) {
        setError({
          title: 'Rate Limit Exceeded',
          message: 'Too many requests to OpenAI. Please wait a moment and try again.',
        });
      } else if (err.code === 'ERR_NETWORK' || err.code === 'ECONNREFUSED') {
        setError({
          title: 'Cannot reach server',
          message: 'The backend server is not running. Start it with: cd server && npm run dev',
        });
      } else if (status === 500 && serverMsg?.includes('API key')) {
        setError({
          title: 'API Key Not Configured',
          message: 'Add your OpenAI API key to server/.env as OPENAI_API_KEY=sk-...',
        });
      } else {
        setError({
          title: 'Analysis Failed',
          message: serverMsg || err.message || 'An unexpected error occurred. Please try again.',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setReviewText('');
    setResults([]);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-himalaya-snow dark:bg-himalaya-slate transition-colors duration-300">
      <Hero darkMode={darkMode} onToggleDark={() => setDarkMode((d) => !d)} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

        <ErrorBanner error={error} onDismiss={() => setError(null)} />

        <ReviewInput
          value={reviewText}
          onChange={setReviewText}
          onAnalyze={handleAnalyze}
          onClear={handleClear}
          loading={loading}
        />

        {loading && (
          <LoadingOverlay count={parseReviews(reviewText).length} />
        )}

        {results.length > 0 && !loading && (
          <>
            <StatsCards results={results} />
            <div className="grid lg:grid-cols-[320px_1fr] gap-6 items-start">
              <SentimentChart results={results} />
              <ResultsTable results={results} onExport={() => exportToCSV(results)} />
            </div>
          </>
        )}

        {results.length === 0 && !loading && !error && (
          <div className="card flex flex-col items-center justify-center py-16 gap-4 text-center border-2 border-dashed border-himalaya-blue/15 dark:border-himalaya-blue/30 bg-transparent shadow-none">
            <div className="text-5xl">🏔️</div>
            <div>
              <p className="font-semibold text-himalaya-blue dark:text-himalaya-mist text-lg">
                Ready to analyze reviews
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-sm">
                Paste guest reviews above (one per line) and click Analyze Reviews.
                Try the Load Examples button to see how it works.
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-16 py-8 border-t border-himalaya-blue/10 dark:border-himalaya-blue/20 text-center">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Himalayan Guest Experience Intelligence Platform · Powered by OpenAI · Built with React and Express
        </p>
      </footer>
    </div>
  );
}

export default App;
