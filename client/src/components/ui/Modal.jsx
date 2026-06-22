/**
 * Modal Component
 *
 * A reusable centered dialog with a backdrop, used for confirmations (e.g.
 * clearing the review input) and detail views (e.g. inspecting a single
 * analyzed review). Closes on Escape, on backdrop click (configurable), or
 * via the close button, and locks page scroll while open.
 *
 * Props:
 * @param {boolean} isOpen - Whether the modal is rendered/visible
 * @param {Function} onClose - Called when the modal requests to close
 * @param {string} [title] - Header title
 * @param {React.ReactNode} children - Modal body content
 * @param {React.ReactNode} [footer] - Optional footer content, typically action buttons
 * @param {'sm'|'md'|'lg'|'xl'} [size='md'] - Max width of the dialog
 * @param {boolean} [closeOnBackdrop=true] - Whether clicking the backdrop closes the modal
 */

import { useEffect } from 'react';

const SIZE_CLASSES = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

const Modal = ({ isOpen, onClose, title, children, footer, size = 'md', closeOnBackdrop = true }) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-himalaya-slate/60 dark:bg-black/70 backdrop-blur-sm animate-fade-up transition-colors duration-200"
        onClick={closeOnBackdrop ? onClose : undefined}
        aria-hidden="true"
      />

      <div
        className={`relative w-full ${SIZE_CLASSES[size] ?? SIZE_CLASSES.md} bg-white dark:bg-himalaya-stone
          rounded-2xl shadow-card-hover max-h-[90vh] overflow-y-auto animate-fade-up transition-colors duration-200`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {title && (
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-700">
            <h3 className="font-display font-bold text-lg text-himalaya-blue dark:text-white">{title}</h3>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-himalaya-blue hover:bg-himalaya-mist dark:hover:bg-himalaya-blue/20 transition-all"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <div className="px-6 py-5">{children}</div>

        {footer && (
          <div className="flex flex-wrap items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 dark:border-gray-700">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
