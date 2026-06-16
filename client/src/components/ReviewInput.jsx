/**
 * ReviewInput Component
 * Textarea for pasting guest reviews (one per line)
 */

const EXAMPLE_REVIEWS = `Amazing food and very friendly staff. Highly recommend!
Rooms were clean but breakfast was average and nothing special.
The washroom was dirty and service was slow throughout our stay.
Stunning mountain views from our room. Absolutely breathtaking experience.
The price was quite high for what we received. Mediocre value overall.
Our host Ramesh was incredibly helpful and made us feel so welcome.
Location is perfect — right in the heart of the valley near everything.
Bed was comfortable but the WiFi was very poor and kept disconnecting.`;

const ReviewInput = ({ value, onChange, onAnalyze, onClear, loading }) => {
  const lineCount = value.trim() ? value.trim().split('\n').filter((l) => l.trim()).length : 0;

  const handleExample = () => {
    onChange(EXAMPLE_REVIEWS);
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-himalaya-blue dark:text-himalaya-mist">
            Paste Guest Reviews
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
            Enter one review per line. Up to 50 reviews at once.
          </p>
        </div>
        {lineCount > 0 && (
          <span className="text-xs font-medium bg-himalaya-mist dark:bg-himalaya-blue/30 text-himalaya-blue dark:text-himalaya-mist px-3 py-1 rounded-full">
            {lineCount} review{lineCount !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      <textarea
        className="w-full h-52 p-4 rounded-xl border border-gray-200 dark:border-gray-600
                   bg-himalaya-snow dark:bg-himalaya-slate text-himalaya-slate dark:text-gray-100
                   placeholder-gray-400 dark:placeholder-gray-500 resize-none
                   focus:outline-none focus:ring-2 focus:ring-himalaya-blue/40
                   focus:border-himalaya-blue font-body text-sm leading-relaxed"
        placeholder={"Paste your guest reviews here, one per line...\n\nExample:\nAmazing food and very friendly staff!\nRooms were clean but breakfast was average.\nThe washroom was dirty and service was slow."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={loading}
        aria-label="Guest reviews input"
      />

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3 mt-4">
        <button
          onClick={onAnalyze}
          disabled={loading || !value.trim()}
          className="btn-primary flex items-center gap-2 flex-1 sm:flex-none justify-center"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Analyzing…
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Analyze Reviews
            </>
          )}
        </button>

        <button
          onClick={handleExample}
          disabled={loading}
          className="btn-secondary flex items-center gap-2"
          title="Load sample reviews"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          Load Examples
        </button>

        {value && (
          <button
            onClick={onClear}
            disabled={loading}
            className="btn-secondary flex items-center gap-2 text-red-500 border-red-200 hover:bg-red-50 dark:hover:bg-red-900/20"
            title="Clear all reviews"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewInput;
