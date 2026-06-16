/**
 * Home Page
 * Hero + Features grid + AI Review Analyzer preview section
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import SectionTitle from '../components/SectionTitle';
import Badge from '../components/Badge';
import { FEATURES, SAMPLE_REVIEWS } from '../data/sampleData';

const SENTIMENT_ICON = { Positive: '😊', Neutral: '😐', Negative: '😞' };
const THEME_ICON     = { Food: '🍽️', Host: '🤝', Location: '📍', Cleanliness: '🧹', Value: '💰', Experience: '⭐' };

const EXAMPLE_TEXT = `Amazing food and very friendly staff. Highly recommend!
Rooms were clean but breakfast was average and nothing special.
The washroom was dirty and service was slow throughout our stay.
Stunning mountain views from our room. Absolutely breathtaking experience.`;

const Home = () => {
  const [previewText, setPreviewText] = useState('');
  const [showResults, setShowResults]  = useState(false);

  const handleAnalyzePreview = () => {
    if (previewText.trim()) setShowResults(true);
  };

  const handleClear = () => {
    setPreviewText('');
    setShowResults(false);
  };

  // Use sample data as preview results (no real API call)
  const previewCount = previewText.trim()
    ? previewText.split('\n').filter((l) => l.trim()).length
    : 0;
  const displayResults = SAMPLE_REVIEWS.slice(0, Math.min(previewCount || 4, 4));

  return (
    <>
      <Hero />

      {/* ── Features Section ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="What We Do"
          title="Everything You Need to Understand Your Guests"
          subtitle="From raw review text to actionable intelligence — our platform handles the full analysis pipeline powered by OpenAI."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} delay={i * 80} {...f} />
          ))}
        </div>
      </section>

      {/* ── AI Review Analyzer Preview ───────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-white to-himalaya-mist/30 dark:from-himalaya-stone dark:to-himalaya-slate/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Try It Out"
            title="AI Review Analyzer Preview"
            subtitle="Paste a few reviews below and see how the analysis works. Connect the backend to get real AI-powered results."
          />

          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-himalaya-blue dark:text-himalaya-mist">
                  Paste Guest Reviews
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">One review per line — up to 50 at once</p>
              </div>
              {previewCount > 0 && (
                <span className="text-xs font-medium bg-himalaya-mist dark:bg-himalaya-blue/30 text-himalaya-blue dark:text-himalaya-mist px-3 py-1 rounded-full">
                  {previewCount} review{previewCount !== 1 ? 's' : ''}
                </span>
              )}
            </div>

            <textarea
              className="input-field h-40 resize-none"
              placeholder={`Try pasting:\n${EXAMPLE_TEXT}`}
              value={previewText}
              onChange={(e) => { setPreviewText(e.target.value); setShowResults(false); }}
            />

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={handleAnalyzePreview}
                disabled={!previewText.trim()}
                className="btn-primary flex items-center gap-2 flex-1 sm:flex-none justify-center"
              >
                <span>🧠</span> Analyze Reviews
              </button>
              <button
                onClick={() => { setPreviewText(EXAMPLE_TEXT); setShowResults(false); }}
                className="btn-secondary flex items-center gap-2"
              >
                📋 Load Examples
              </button>
              {previewText && (
                <button onClick={handleClear} className="btn-secondary text-red-500 border-red-200 hover:bg-red-50 flex items-center gap-2">
                  🗑 Clear
                </button>
              )}
            </div>
          </div>

          {/* Preview Results Table */}
          {showResults && (
            <div className="card mt-6 animate-fade-up">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-himalaya-blue dark:text-himalaya-mist">
                  Preview Results
                  <span className="ml-2 text-xs font-normal text-gray-400">(sample data — connect backend for real AI results)</span>
                </h3>
                <Link to="/dashboard" className="text-sm text-himalaya-sky hover:underline">
                  Full Dashboard →
                </Link>
              </div>
              <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-700">
                  <thead>
                    <tr className="bg-himalaya-mist/60 dark:bg-himalaya-blue/10">
                      {['Review', 'Sentiment', 'Theme', 'Suggested Response'].map((h) => (
                        <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-himalaya-blue dark:text-himalaya-mist uppercase tracking-wider">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-himalaya-stone divide-y divide-gray-50 dark:divide-gray-700/50">
                    {displayResults.map((row) => (
                      <tr key={row.id} className="hover:bg-himalaya-snow dark:hover:bg-himalaya-slate/50 transition-colors">
                        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-200 max-w-[200px]">
                          <p className="line-clamp-2">{row.review}</p>
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant={row.sentiment.toLowerCase()}>
                            {SENTIMENT_ICON[row.sentiment]} {row.sentiment}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant="theme">
                            {THEME_ICON[row.theme]} {row.theme}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400 italic max-w-[220px]">
                          {row.response}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center card gradient-card text-white">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to understand your guests?</h2>
          <p className="text-white/80 mb-8">Open the dashboard, paste your reviews, and let AI do the rest.</p>
          <Link to="/dashboard" className="btn-outline inline-block">
            Open Dashboard →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
