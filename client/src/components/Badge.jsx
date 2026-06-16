/**
 * Badge — colored sentiment / theme tag
 */
const VARIANTS = {
  positive: 'badge-positive',
  neutral:  'badge-neutral',
  negative: 'badge-negative',
  theme:    'bg-himalaya-mist dark:bg-himalaya-blue/20 text-himalaya-blue dark:text-himalaya-mist',
  default:  'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300',
};

const Badge = ({ children, variant = 'default', className = '' }) => (
  <span
    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${VARIANTS[variant] ?? VARIANTS.default} ${className}`}
  >
    {children}
  </span>
);

export default Badge;
