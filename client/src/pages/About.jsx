/**
 * About Page
 * Project overview, objectives, tech stack, and future scope
 */

import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import { TECH_STACK, FUTURE_SCOPE, FEATURES } from '../data/sampleData';

const OBJECTIVES = [
  { icon: '🎯', text: 'Automate sentiment classification of guest reviews using AI' },
  { icon: '🏷️', text: 'Detect key hospitality themes (food, location, cleanliness, etc.)' },
  { icon: '✍️', text: 'Generate personalised, professional management responses' },
  { icon: '📊', text: 'Provide visual analytics dashboards for hospitality managers' },
  { icon: '⚡', text: 'Enable batch processing of up to 50 reviews simultaneously' },
  { icon: '📥', text: 'Support CSV export for external reporting and documentation' },
];

const About = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

    {/* ── Project Overview ─────────────────────────────── */}
    <section className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-up">
        <p className="text-himalaya-sky font-semibold text-sm uppercase tracking-widest mb-3">About the Project</p>
        <h1 className="section-title mb-5">
          Himalayan Guest Experience<br />
          <span className="text-himalaya-sky">Intelligence Platform</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          The Himalayan Guest Experience Intelligence Platform is an AI-powered web application
          designed to help hotels, homestays, and hospitality businesses in the Himalayan region
          better understand their guests through automated review analysis.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          By leveraging the OpenAI GPT-3.5 API, the platform analyses guest reviews in seconds,
          classifying sentiment, detecting review themes, and generating professional management responses —
          tasks that would otherwise take hours of manual effort.
        </p>
      </div>

      {/* Mission card */}
      <div className="card gradient-card text-white animate-fade-up delay-200">
        <div className="text-4xl mb-4">🏔️</div>
        <h3 className="font-display text-2xl font-bold mb-3">Our Mission</h3>
        <p className="text-white/80 leading-relaxed">
          To empower small and independent hospitality businesses with enterprise-grade AI tools
          that turn guest feedback into actionable insights — improving service quality, boosting
          online reputation, and driving growth across the Himalayan tourism ecosystem.
        </p>
      </div>
    </section>

    {/* ── Objectives ───────────────────────────────────── */}
    <section>
      <SectionTitle eyebrow="Goals" title="Project Objectives" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {OBJECTIVES.map((obj, i) => (
          <div
            key={i}
            className="card flex items-start gap-3 animate-fade-up hover:shadow-card-hover transition-all"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="text-2xl flex-shrink-0">{obj.icon}</span>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{obj.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── Key Features ─────────────────────────────────── */}
    <section>
      <SectionTitle eyebrow="Capabilities" title="Key Features" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f, i) => (
          <FeatureCard key={f.title} delay={i * 80} {...f} />
        ))}
      </div>
    </section>

    {/* ── Technology Stack ─────────────────────────────── */}
    <section>
      <SectionTitle eyebrow="Built With" title="Technology Stack" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {TECH_STACK.map((tech, i) => (
          <div
            key={tech.name}
            className="card text-center group hover:shadow-card-hover hover:-translate-y-1 transition-all animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
            <p className="font-semibold text-himalaya-blue dark:text-white text-sm">{tech.name}</p>
            <p className="text-xs text-gray-400 mt-1">{tech.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── Future Scope ─────────────────────────────────── */}
    <section>
      <SectionTitle
        eyebrow="What's Next"
        title="Future Scope"
        subtitle="Planned enhancements to make the platform even more powerful for hospitality businesses."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FUTURE_SCOPE.map((item, i) => (
          <div
            key={item.title}
            className="card flex gap-4 hover:shadow-card-hover transition-all animate-fade-up"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="text-2xl flex-shrink-0">{item.icon}</span>
            <div>
              <h4 className="font-semibold text-himalaya-blue dark:text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ── Developer Note ───────────────────────────────── */}
    <section className="card bg-himalaya-mist/60 dark:bg-himalaya-blue/10 border border-himalaya-blue/10 dark:border-himalaya-blue/20">
      <div className="flex gap-4 items-start">
        <span className="text-3xl flex-shrink-0">👨‍💻</span>
        <div>
          <h4 className="font-semibold text-himalaya-blue dark:text-white mb-2">Portfolio Project</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            This platform was built as a full-stack internship portfolio project, demonstrating proficiency
            in React, Express, OpenAI API integration, Tailwind CSS, and modern SaaS application architecture.
            The codebase follows best practices with reusable components, clean separation of concerns,
            and is designed to scale to real-world production use.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default About;
