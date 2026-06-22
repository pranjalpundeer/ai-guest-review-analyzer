/**
 * ReviewDetailModal Component
 *
 * Shows the full detail of a single analyzed review — original text,
 * sentiment, theme, and the AI-suggested management response — in a Modal.
 * Opened from a "View" action in ResultsTable (both the desktop table row
 * and the mobile card both link here), giving the dashboard a dedicated
 * Review Detail view alongside the Review List view.
 *
 * Props:
 * @param {Object|null} review - The review row to display ({ review, sentiment, theme, response }), or null when closed
 * @param {Function} onClose - Called to close the modal
 */

import Modal from './ui/Modal';
import Button from './ui/Button';
import Badge from './Badge';
import { SENTIMENT_ICON, THEME_ICON, sentimentVariant } from '../utils/reviewMeta';

const ReviewDetailModal = ({ review, onClose }) => {
  return (
    <Modal
      isOpen={!!review}
      onClose={onClose}
      title="Review Detail"
      size="md"
      footer={<Button variant="secondary" onClick={onClose}>Close</Button>}
    >
      {review && (
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge variant={sentimentVariant(review.sentiment)}>
              {SENTIMENT_ICON[review.sentiment]} {review.sentiment}
            </Badge>
            <Badge variant="theme">
              {THEME_ICON[review.theme]} {review.theme}
            </Badge>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1.5">
              Original Review
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed bg-himalaya-snow dark:bg-himalaya-slate rounded-xl p-4">
              {review.review}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1.5">
              Suggested Management Response
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed bg-himalaya-mist/60 dark:bg-himalaya-blue/10 rounded-xl p-4">
              {review.response}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ReviewDetailModal;
