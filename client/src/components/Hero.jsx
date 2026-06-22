/**
 * Hero Component — used on the Home page
 * Premium gradient banner with mountain motif
 */

import Button from './ui/Button';

const Hero = () => (
  <header className="relative overflow-hidden bg-gradient-to-br from-himalaya-blue via-himalaya-sky to-himalaya-teal py-20 sm:py-28 px-6">
    {/* Mountain silhouette */}
    <svg
      className="absolute bottom-0 left-0 w-full opacity-10"
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polygon points="0,200 200,60 400,140 600,20 800,100 1000,30 1200,120 1440,50 1440,200" fill="white" />
    </svg>

    {/* Decorative blobs */}
    <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-himalaya-teal/20 rounded-full blur-2xl pointer-events-none" />

    {/* Floating snowflakes */}
    {['❄', '❅', '❆', '❄'].map((flake, i) => (
      <span
        key={i}
        className="snowflake absolute text-white/15 text-3xl select-none pointer-events-none"
        style={{
          top:               `${8 + i * 20}%`,
          left:              `${3 + i * 25}%`,
          animationDuration: `${4 + i * 1.5}s`,
          animationDelay:    `${i * 1.2}s`,
        }}
      >
        {flake}
      </span>
    ))}

    <div className="relative max-w-4xl mx-auto text-center text-white">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-white/20 animate-fade-up">
        <span className="text-lg">🏔️</span>
        <span>Himalayan Hospitality Intelligence</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      {/* Title */}
      <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 drop-shadow-lg animate-fade-up delay-100">
        Himalayan Guest Experience<br />
        <span className="text-emerald-300">Intelligence Platform</span>
      </h1>

      {/* Subtitle */}
      <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8 animate-fade-up delay-200">
        AI-powered guest review analysis for hotels and homestays. Instantly classify guest sentiment,
        detect review themes, and generate intelligent management responses.
      </p>

      {/* CTA buttons */}
      <div className="flex flex-wrap justify-center gap-4 animate-fade-up delay-300">
        <Button to="/dashboard" variant="primary" size="lg" className="shadow-lg">
          Analyze Reviews →
        </Button>
        <Button to="/about" variant="outline" size="lg">
          Learn More
        </Button>
      </div>

      {/* Feature pills */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 text-sm text-white/70 animate-fade-up delay-400">
        {[
          { dot: 'bg-emerald-400', label: 'Sentiment Analysis'        },
          { dot: 'bg-yellow-300',  label: 'Theme Classification'      },
          { dot: 'bg-blue-300',    label: 'Auto-Generated Responses'  },
          { dot: 'bg-pink-300',    label: 'CSV Export'                },
        ].map(({ dot, label }) => (
          <span key={label} className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${dot} inline-block`} />
            {label}
          </span>
        ))}
      </div>
    </div>
  </header>
);

export default Hero;
