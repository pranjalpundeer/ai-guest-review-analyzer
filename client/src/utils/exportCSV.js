/**
 * CSV Export Utility
 * Converts analysis results to a downloadable CSV file
 */

/**
 * Escapes a CSV cell value
 */
const escapeCSV = (value) => {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
};

/**
 * Exports results array to a CSV file download
 * @param {Object[]} results - Array of analysis results
 */
export const exportToCSV = (results) => {
  if (!results || results.length === 0) return;

  const headers = ['#', 'Original Review', 'Sentiment', 'Theme', 'Suggested Response'];
  const rows = results.map((r, i) => [
    i + 1,
    r.review,
    r.sentiment,
    r.theme,
    r.response,
  ]);

  const csvContent = [
    headers.map(escapeCSV).join(','),
    ...rows.map((row) => row.map(escapeCSV).join(',')),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `himalayan-reviews-${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
