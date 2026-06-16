/**
 * ErrorBanner Component
 * Displays user-friendly error messages
 */

const ErrorBanner = ({ error, onDismiss }) => {
  if (!error) return null;

  return (
    <div
      className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300"
      role="alert"
    >
      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm">{error.title || 'Something went wrong'}</p>
        {error.message && (
          <p className="text-sm mt-0.5 text-red-600 dark:text-red-400">{error.message}</p>
        )}
      </div>
      <button
        onClick={onDismiss}
        className="flex-shrink-0 text-red-400 hover:text-red-600 dark:hover:text-red-200 transition-colors"
        aria-label="Dismiss error"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default ErrorBanner;
