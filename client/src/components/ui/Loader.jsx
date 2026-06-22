/**
 * Loader Component
 *
 * Props:
 * @param {'sm'|'md'|'lg'|'xl'} [size='md'] - Diameter of the spinner
 * @param {'default'|'light'|'mountain'} [variant='default'] - 'default' for blue spinner on
 *        light surfaces, 'light' for a white spinner on colored/dark surfaces (e.g. inside a
 *        primary Button), 'mountain' for the branded mountain-emoji spinner used on full loading states
 * @param {string} [label] - Optional caption rendered below the spinner
 * @param {boolean} [fullScreen=false] - If true, centers the loader in a fixed full-viewport overlay
 * @param {string} [className] - Additional classes merged onto the spinner element
 */

const RING_SIZE = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-[3px]',
  lg: 'w-12 h-12 border-4',
  xl: 'w-16 h-16 border-4',
};

const MOUNTAIN_SIZE = {
  sm: 'w-10 h-10',
  md: 'w-16 h-16',
  lg: 'w-20 h-20',
  xl: 'w-24 h-24',
};

const Loader = ({ size = 'md', variant = 'default', label, fullScreen = false, className = '' }) => {
  const ringColor =
    variant === 'light'
      ? 'border-white/30 border-t-white'
      : 'border-himalaya-mist dark:border-himalaya-blue/30 border-t-himalaya-blue';

  let spinner;

  if (variant === 'mountain') {
    spinner = (
      <div className={`relative ${MOUNTAIN_SIZE[size] ?? MOUNTAIN_SIZE.md} ${className}`} role="status" aria-label={label || 'Loading'}>
        <div className="absolute inset-0 rounded-full border-4 border-himalaya-mist dark:border-himalaya-blue/30" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-himalaya-blue animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center text-2xl">🏔️</div>
      </div>
    );
  } else {
    spinner = (
      <div
        className={`inline-block rounded-full animate-spin ${RING_SIZE[size] ?? RING_SIZE.md} ${ringColor} ${className}`}
        role="status"
        aria-label={label || 'Loading'}
      />
    );
  }

  const content = label ? (
    <div className="flex flex-col items-center gap-3">
      {spinner}
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  ) : (
    spinner
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[150] flex items-center justify-center bg-white/75 dark:bg-himalaya-slate/85 backdrop-blur-sm transition-colors duration-200">
        {content}
      </div>
    );
  }

  return content;
};

export default Loader;
