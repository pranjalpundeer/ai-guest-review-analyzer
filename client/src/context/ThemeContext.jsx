/**
 * ThemeContext
 *
 * Provides a global `theme` ('light' | 'dark') value plus a `toggleTheme`
 * function to every component in the app. The chosen theme is persisted to
 * localStorage and re-applied on every page load (and respects the user's
 * OS preference the first time they visit). The 'dark' class is toggled on
 * <html> so every Tailwind `dark:` variant throughout the app responds
 * automatically — Navbar, Sidebar, Cards, Buttons, Inputs, Tables, Charts,
 * Footer, backgrounds, and text all already key off this single class.
 */

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'himalaya-theme';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

/**
 * ThemeProvider
 * Wrap the application root with this provider (see main.jsx).
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // localStorage may be unavailable (e.g. private browsing) — fail silently
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * useTheme — access { theme, toggleTheme, setTheme } from any component.
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
};
