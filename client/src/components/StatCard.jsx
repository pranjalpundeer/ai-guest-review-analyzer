/**
 * StatCard — dashboard statistic card
 */
const StatCard = ({ label, count, total, icon, colorClass, bgClass }) => {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div className={`card flex items-center gap-4 border-l-4 ${colorClass} hover:shadow-card-hover transition-all duration-200`}>
      <div className={`p-3 rounded-xl ${bgClass} text-2xl flex-shrink-0`}>{icon}</div>
      <div className="min-w-0">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{label}</p>
        <p className="text-3xl font-bold text-himalaya-slate dark:text-white">{count}</p>
        {total > 0 && (
          <p className="text-xs text-gray-400 dark:text-gray-500">{pct}% of total</p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
