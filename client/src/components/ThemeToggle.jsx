/**
 * ThemeToggle Component
 *
 * Sun / moon icon button that flips the global dark/light theme via
 * useTheme(). Used in the Navbar (desktop + mobile menu).
 *
 * Props:
 * @param {string} [className] - Additional classes merged onto the button
 */

import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative w-10 h-10 rounded-xl flex items-center justify-center text-lg
        text-gray-500 dark:text-gray-300 hover:bg-himalaya-mist dark:hover:bg-himalaya-blue/20
        transition-all duration-200 ${className}`}
    >
      <span
        className="transition-transform duration-300 inline-block"
        style={{ transform: isDark ? 'rotate(180deg)' : 'rotate(0deg)' }}
      >
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

export default ThemeToggle;
