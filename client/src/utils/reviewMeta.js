/**
 * Shared lookup tables for rendering review sentiment & theme metadata.
 * Centralised here so Home, Dashboard, ResultsTable, and ReviewDetailModal
 * never drift out of sync with each other.
 */

export const SENTIMENT_ICON = { Positive: '😊', Neutral: '😐', Negative: '😞' };

export const THEME_ICON = {
  Food: '🍽️',
  Host: '🤝',
  Location: '📍',
  Cleanliness: '🧹',
  Value: '💰',
  Experience: '⭐',
};

/** Maps a sentiment label to the Badge component's variant prop */
export const sentimentVariant = (sentiment) => sentiment?.toLowerCase() ?? 'default';
