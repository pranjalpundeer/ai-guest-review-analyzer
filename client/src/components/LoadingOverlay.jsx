/**
 * LoadingOverlay Component
 * Full-width loading indicator while AI processes reviews
 */

const LoadingOverlay = ({ count }) => (
  <div className="card flex flex-col items-center justify-center py-12 gap-5">
    {/* Animated mountain spinner */}
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-4 border-himalaya-mist dark:border-himalaya-blue/30"></div>
      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-himalaya-blue animate-spin"></div>
      <div className="absolute inset-0 flex items-center justify-center text-2xl">🏔️</div>
    </div>

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
