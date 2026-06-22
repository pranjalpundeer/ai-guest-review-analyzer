/**
 * ToastContext
 *
 * App-wide notification system built on top of the presentational Toast
 * component (src/components/ui/Toast.jsx). Mount <ToastProvider> once near
 * the root of the app (see main.jsx), then call useToast().showToast(...)
 * from anywhere to pop a notification — this replaces the old window.alert()
 * calls that were scattered around Login and the dashboard actions.
 */

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import Toast from '../components/ui/Toast';

const ToastContext = createContext(null);
let idCounter = 0;

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const timers = useRef({});

  const removeToast = useCallback((id) => {
    setToasts((current) => current.filter((t) => t.id !== id));
    clearTimeout(timers.current[id]);
    delete timers.current[id];
  }, []);

  /**
   * showToast(message, type, duration)
   * @param {string} message
   * @param {'success'|'error'|'info'|'warning'} [type='info']
   * @param {number} [duration=3500] - milliseconds before auto-dismiss
   */
  const showToast = useCallback(
    (message, type = 'info', duration = 3500) => {
      const id = ++idCounter;
      setToasts((current) => [...current, { id, message, type }]);
      timers.current[id] = setTimeout(() => removeToast(id), duration);
      return id;
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}

      {/* Toast stack — fixed to the bottom-right of the viewport on every page */}
      <div className="fixed bottom-4 right-4 left-4 sm:left-auto z-[200] flex flex-col gap-3 items-stretch sm:items-end pointer-events-none">
        {toasts.map((t) => (
          <div key={t.id} className="pointer-events-auto w-full sm:w-auto">
            <Toast message={t.message} type={t.type} onClose={() => removeToast(t.id)} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

/**
 * useToast — returns { showToast, removeToast }.
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
};
