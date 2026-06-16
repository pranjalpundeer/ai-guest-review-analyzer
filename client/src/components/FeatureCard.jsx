/**
 * FeatureCard — reusable card for feature grid
 */
const FeatureCard = ({ icon, title, description, delay = 0 }) => (
  <div
    className="card group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 animate-fade-up border border-gray-50 dark:border-gray-700/50"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-12 h-12 rounded-2xl bg-himalaya-mist dark:bg-himalaya-blue/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="font-semibold text-himalaya-blue dark:text-white text-base mb-2">{title}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export default FeatureCard;
