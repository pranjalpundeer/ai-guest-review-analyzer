/**
 * Footer Component
 * Responsive footer with links, socials and copyright
 */

import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-himalaya-slate dark:bg-black/40 text-gray-300 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🏔️</span>
            <span className="font-display font-bold text-white text-lg">Himalayan Guest Intelligence</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            AI-powered guest review analysis for hotels and homestays in the Himalayan region.
            Instantly understand your guests, improve your service.
          </p>
          {/* Social placeholders */}
          <div className="flex gap-3 mt-4">
            {['GitHub', 'Twitter', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-himalaya-sky/40 flex items-center justify-center text-xs font-bold transition-all"
                title={social}
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h4>
          <ul className="space-y-2">
            {[
              { label: 'Home',       path: '/'            },
              { label: 'About',      path: '/about'       },
              { label: 'Dashboard',  path: '/dashboard'   },
              { label: 'Login',      path: '/login'       },
              { label: 'Components', path: '/components'  },
            ].map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Built With</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['React + Vite', 'Tailwind CSS', 'Express.js', 'OpenAI GPT-3.5', 'Recharts'].map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-himalaya-sky flex-shrink-0" />
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Himalayan Guest Experience Intelligence Platform. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">
            Built with React, Vite & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
