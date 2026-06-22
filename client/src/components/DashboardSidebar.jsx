/**
 * DashboardSidebar Component
 *
 * Section navigation for the Analytics Dashboard. Renders as a static
 * column on desktop (lg+) and as a slide-in drawer with backdrop on
 * mobile/tablet, triggered by the hamburger button in Dashboard's header.
 * Each item smooth-scrolls to the matching section of the Dashboard page.
 *
 * Props:
 * @param {boolean} open - Whether the mobile drawer is open
 * @param {Function} onClose - Called to close the mobile drawer
 */

import { useEffect } from 'react';

const SECTIONS = [
  { id: 'overview', label: 'Overview',        icon: '📊' },
  { id: 'analyze',  label: 'Analyze Reviews',  icon: '🧠' },
  { id: 'results',  label: 'Review Results',   icon: '📋' },
];

const DashboardSidebar = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    onClose?.();
  };

  const navContent = (
    <nav className="flex flex-col gap-1 p-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-3 mb-2 mt-1">
        Dashboard
      </p>
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          onClick={() => handleNav(s.id)}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-left
            text-gray-600 dark:text-gray-300 hover:bg-himalaya-mist dark:hover:bg-himalaya-blue/20
            hover:text-himalaya-blue dark:hover:text-white transition-all duration-200"
        >
          <span className="text-base">{s.icon}</span>
          {s.label}
        </button>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop static sidebar */}
      <aside className="hidden lg:block w-60 flex-shrink-0">
        <div className="card !p-0 sticky top-24 overflow-hidden">{navContent}</div>
      </aside>

      {/* Mobile / tablet drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[90]">
          <div
            className="absolute inset-0 bg-himalaya-slate/60 dark:bg-black/70 backdrop-blur-sm transition-colors duration-200"
            onClick={onClose}
            aria-hidden="true"
          />
          <div className="absolute left-0 top-0 h-full w-72 max-w-[80%] bg-white dark:bg-himalaya-stone shadow-card-hover overflow-y-auto animate-fade-up transition-colors duration-200">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 dark:border-gray-700">
              <span className="font-display font-bold text-himalaya-blue dark:text-white">Dashboard Menu</span>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-gray-400 hover:text-himalaya-blue hover:bg-himalaya-mist dark:hover:bg-himalaya-blue/20 transition-all"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {navContent}
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardSidebar;
