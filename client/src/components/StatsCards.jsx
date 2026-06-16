/**
 * StatsCards Component
 * Summary dashboard cards showing review counts by sentiment
 */

const StatCard = ({ label, count, total, icon, colorClass, bgClass }) => {
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;

  return (
    <div className={`card flex items-center gap-4 border-l-4 ${colorClass}`}>
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

const StatsCards = ({ results }) => {
  const total = results.length;
  const positive = results.filter((r) => r.sentiment === 'Positive').length;
  const neutral = results.filter((r) => r.sentiment === 'Neutral').length;
  const negative = results.filter((r) => r.sentiment === 'Negative').length;

  const cards = [
    {
      label: 'Total Reviews',
      count: total,
      icon: '📋',
      colorClass: 'border-himalaya-blue',
      bgClass: 'bg-himalaya-mist dark:bg-himalaya-blue/20',
    },
    {
      label: 'Positive',
      count: positive,
      icon: '😊',
      colorClass: 'border-emerald-500',
      bgClass: 'bg-emerald-50 dark:bg-emerald-900/20',
    },
    {
      label: 'Neutral',
      count: neutral,
      icon: '😐',
      colorClass: 'border-yellow-400',
      bgClass: 'bg-yellow-50 dark:bg-yellow-900/20',
    },
    {
      label: 'Negative',
      count: negative,
      icon: '😞',
      colorClass: 'border-red-500',
      bgClass: 'bg-red-50 dark:bg-red-900/20',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <StatCard key={card.label} total={total} {...card} />
      ))}
    </div>
  );
};

export default StatsCards;
