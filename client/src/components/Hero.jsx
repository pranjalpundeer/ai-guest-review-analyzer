/**
 * Hero Component
 * Top banner with mountain motif and platform title
 */

const Hero = ({ darkMode, onToggleDark }) => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-himalaya-blue via-himalaya-sky to-himalaya-teal dark:from-himalaya-slate dark:via-himalaya-stone dark:to-himalaya-blue py-14 px-6">
      {/* Abstract mountain silhouette */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-10"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,200 200,60 400,140 600,20 800,100 1000,30 1200,120 1440,50 1440,200" fill="white" />
      </svg>

      {/* Floating snowflakes */}
      {['❄', '❅', '❆'].map((flake, i) => (
        <span
          key={i}
          className="snowflake absolute text-white/20 text-4xl select-none pointer-events-none"
          style={{
            top: `${10 + i * 25}%`,
            left: `${5 + i * 30}%`,
            animationDuration: `${4 + i * 2}s`,
            animationDelay: `${i * 1.5}s`,
          }}
        >
          {flake}
        </span>
      ))}

      {/* Dark mode toggle */}
      <button
        onClick={onToggleDark}
        className="absolute top-5 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-all"
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.42 1.42l-.71.7a1 1 0 11-1.41-1.41l.7-.71zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM4.22 15.78a1 1 0 01-1.42-1.42l.71-.7a1 1 0 111.41 1.41l-.7.71zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.22 4.22a1 1 0 000 1.42l.71.7a1 1 0 001.41-1.41l-.7-.71a1 1 0 00-1.42 0zM3 10a1 1 0 110 2H2a1 1 0 110-2h1zm13.78 5.78a1 1 0 00-1.41 1.41l.7.71a1 1 0 001.42-1.42l-.71-.7zM10 6a4 4 0 100 8 4 4 0 000-8z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-5 border border-white/20">
          <span className="text-lg">🏔️</span>
          <span>Himalayan Hospitality Intelligence</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
          Himalayan Guest Experience
          <br />
          <span className="text-emerald-300">Intelligence Platform</span>
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          AI-Powered Guest Review Analysis for Hospitality Businesses
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-white/70">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
            Sentiment Analysis
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-300 inline-block"></span>
            Theme Classification
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-300 inline-block"></span>
            Auto-Generated Responses
          </span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
