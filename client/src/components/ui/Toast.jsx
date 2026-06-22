/**
 * Toast Component
 *
 * A single notification pill. This is a presentational component — to
 * trigger toasts from anywhere in the app, use the `useToast()` hook from
 * `src/context/ToastContext.jsx`, which renders a stack of these in the
 * corner of the screen and handles auto-dismiss timing.
 *
 * Props:
 * @param {string} message - Notification text
 * @param {'success'|'error'|'info'|'warning'} [type='info'] - Visual style / icon
 * @param {Function} [onClose] - Called when the dismiss button is clicked
 * @param {boolean} [visible=true] - Controls the enter/exit transition
 */

const TYPE_STYLES = {
  success: {
    icon: '✅',
    classes: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  },
  error: {
    icon: '⛔',
    classes: 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800',
  },
  warning: {
    icon: '⚠️',
    classes: 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  },
  info: {
    icon: 'ℹ️',
    classes: 'bg-himalaya-mist dark:bg-himalaya-blue/20 text-himalaya-blue dark:text-himalaya-mist border-himalaya-blue/20 dark:border-himalaya-blue/30',
  },
};

const Toast = ({ message, type = 'info', onClose, visible = true }) => {
  const style = TYPE_STYLES[type] ?? TYPE_STYLES.info;

  return (
    <div
      role="alert"
      className={`flex items-start gap-3 w-full max-w-sm p-4 rounded-xl border shadow-card-hover
        transition-all duration-300 ${style.classes}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
    >
      <span className="text-lg flex-shrink-0 leading-none">{style.icon}</span>
      <p className="text-sm font-medium flex-1 leading-snug">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
          aria-label="Dismiss notification"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Toast;
