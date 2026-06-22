/**
 * LoadingOverlay Component
 * Full-width loading indicator while AI processes reviews.
 * Wraps the reusable Loader component (variant="mountain") in the card
 * chrome used elsewhere on the dashboard.
 */

import Loader from './ui/Loader';

const LoadingOverlay = ({ count }) => (
  <div className="card flex flex-col items-center justify-center py-12 gap-5">
    <Loader variant="mountain" size="lg" />

    <div className="text-center">
      <p className="font-semibold text-himalaya-blue dark:text-himalaya-mist text-lg">
        Analyzing {count} review{count !== 1 ? 's' : ''}…
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Our AI is reading between the lines. This may take a moment.
      </p>
    </div>

    {/* Progress dots */}
    <div className="flex gap-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2.5 h-2.5 rounded-full bg-himalaya-blue animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  </div>
);

export default LoadingOverlay;
