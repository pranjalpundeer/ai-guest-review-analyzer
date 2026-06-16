/**
 * ResultsTable Component
 * Displays analyzed reviews with sentiment badges,
 * copy button, search, sort, and filter controls
 */

import { useState, useMemo } from 'react';

const SENTIMENT_BADGE = {
  Positive: 'badge-positive',
  Neutral: 'badge-neutral',
  Negative: 'badge-negative',
};

const SENTIMENT_ICON = {
  Positive: '😊',
  Neutral: '😐',
  Negative: '😞',
};

const THEME_ICON = {
  Food: '🍽️',
  Host: '🤝',
  Location: '📍',
  Cleanliness: '🧹',
  Value: '💰',
  Experience: '⭐',
};

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1.5 rounded-lg text-gray-400 hover:text-himalaya-blue hover:bg-himalaya-mist dark:hover:bg-himalaya-blue/20 transition-all flex-shrink-0"
      title="Copy response"
      aria-label="Copy response to clipboard"
    >
      {copied ? (
        <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      )}
    </button>
  );
};

const SENTIMENTS = ['All', 'Positive', 'Neutral', 'Negative'];
const THEMES = ['All', 'Food', 'Host', 'Location', 'Cleanliness', 'Value', 'Experience'];
const SORT_OPTIONS = [
  { value: 'index', label: 'Original Order' },
  { value: 'sentiment', label: 'Sentiment' },
  { value: 'theme', label: 'Theme' },
];

const ResultsTable = ({ results, onExport }) => {
  const [search, setSearch] = useState('');
  const [sentimentFilter, setSentimentFilter] = useState('All');
  const [themeFilter, setThemeFilter] = useState('All');
  const [sortBy, setSortBy] = useState('index');

  const filtered = useMemo(() => {
    let data = results.map((r, i) => ({ ...r, _index: i }));

    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (r) =>
          r.review.toLowerCase().includes(q) ||
          r.response.toLowerCase().includes(q) ||
          r.theme.toLowerCase().includes(q)
      );
    }
    if (sentimentFilter !== 'All') {
      data = data.filter((r) => r.sentiment === sentimentFilter);
    }
    if (themeFilter !== 'All') {
      data = data.filter((r) => r.theme === themeFilter);
    }
    if (sortBy === 'sentiment') {
      const order = { Negative: 0, Neutral: 1, Positive: 2 };
      data.sort((a, b) => order[a.sentiment] - order[b.sentiment]);
    } else if (sortBy === 'theme') {
      data.sort((a, b) => a.theme.localeCompare(b.theme));
    }

    return data;
  }, [results, search, sentimentFilter, themeFilter, sortBy]);

  return (
    <div className="card">
      {/* Table header & controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <h2 className="text-lg font-semibold text-himalaya-blue dark:text-himalaya-mist">
            Analysis Results
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filtered.length} of {results.length} review{results.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={onExport}
          className="btn-secondary flex items-center gap-2 text-himalaya-emerald border-himalaya-emerald/30 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Export CSV
        </button>
      </div>

      {/* Filters & search */}
      <div className="flex flex-wrap gap-3 mb-5 p-4 bg-himalaya-snow dark:bg-himalaya-slate rounded-xl border border-gray-100 dark:border-gray-700">
        {/* Search */}
        <div className="relative flex-1 min-w-[180px]">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search reviews…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600
                       bg-white dark:bg-himalaya-stone text-himalaya-slate dark:text-gray-100
                       placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-himalaya-blue/30"
          />
        </div>

        {/* Sentiment filter */}
        <select
          value={sentimentFilter}
          onChange={(e) => setSentimentFilter(e.target.value)}
          className="px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600
                     bg-white dark:bg-himalaya-stone text-himalaya-slate dark:text-gray-100
                     focus:outline-none focus:ring-2 focus:ring-himalaya-blue/30"
        >
          {SENTIMENTS.map((s) => (
            <option key={s}>{s === 'All' ? 'All Sentiments' : s}</option>
          ))}
        </select>

        {/* Theme filter */}
        <select
          value={themeFilter}
          onChange={(e) => setThemeFilter(e.target.value)}
          className="px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600
                     bg-white dark:bg-himalaya-stone text-himalaya-slate dark:text-gray-100
                     focus:outline-none focus:ring-2 focus:ring-himalaya-blue/30"
        >
          {THEMES.map((t) => (
            <option key={t}>{t === 'All' ? 'All Themes' : t}</option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600
                     bg-white dark:bg-himalaya-stone text-himalaya-slate dark:text-gray-100
                     focus:outline-none focus:ring-2 focus:ring-himalaya-blue/30"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-400 dark:text-gray-500">
          <div className="text-4xl mb-3">🔍</div>
          <p className="font-medium">No reviews match your filters</p>
          <p className="text-sm mt-1">Try adjusting the search or filter settings</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-700">
            <thead>
              <tr className="bg-himalaya-mist/60 dark:bg-himalaya-blue/10">
                <th className="px-4 py-3 text-left text-xs font-semibold text-himalaya-blue dark:text-himalaya-mist uppercase tracking-wider w-8">#</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-himalaya-blue dark:text-himalaya-mist uppercase tracking-wider min-w-[180px]">Original Review</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-himalaya-blue dark:text-himalaya-mist uppercase tracking-wider">Sentiment</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-himalaya-blue dark:text-himalaya-mist uppercase tracking-wider">Theme</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-himalaya-blue dark:text-himalaya-mist uppercase tracking-wider min-w-[220px]">Suggested Response</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-himalaya-stone divide-y divide-gray-50 dark:divide-gray-700/50">
              {filtered.map((row) => (
                <tr
                  key={row._index}
                  className="hover:bg-himalaya-snow dark:hover:bg-himalaya-slate/50 transition-colors"
                >
                  <td className="px-4 py-4 text-xs text-gray-400 font-mono">{row._index + 1}</td>
                  <td className="px-4 py-4 text-sm text-gray-700 dark:text-gray-200 max-w-xs">
                    <p className="line-clamp-3 leading-relaxed">{row.review}</p>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${SENTIMENT_BADGE[row.sentiment]}`}>
                      <span>{SENTIMENT_ICON[row.sentiment]}</span>
                      {row.sentiment}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-himalaya-mist dark:bg-himalaya-blue/20 text-himalaya-blue dark:text-himalaya-mist">
                      <span>{THEME_ICON[row.theme]}</span>
                      {row.theme}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-start gap-1">
                      <p className="flex-1 leading-relaxed text-xs italic">{row.response}</p>
                      <CopyButton text={row.response} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ResultsTable;
