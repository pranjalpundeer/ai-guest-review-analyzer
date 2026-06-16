/**
 * SectionTitle — consistent section heading
 */
const SectionTitle = ({ eyebrow, title, subtitle, center = true }) => (
  <div className={`mb-10 ${center ? 'text-center' : ''}`}>
    {eyebrow && (
      <p className="text-himalaya-sky dark:text-himalaya-mist text-sm font-semibold uppercase tracking-widest mb-3">
        {eyebrow}
      </p>
    )}
    <h2 className="section-title mb-4">{title}</h2>
    {subtitle && (
      <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
