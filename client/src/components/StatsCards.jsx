/**
 * StatsCards — summary cards, now uses reusable StatCard
 */

import StatCard from './StatCard';

const StatsCards = ({ results }) => {
  const total    = results.length;
  const positive = results.filter((r) => r.sentiment === 'Positive').length;
  const neutral  = results.filter((r) => r.sentiment === 'Neutral').length;
  const negative = results.filter((r) => r.sentiment === 'Negative').length;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard label="Total Reviews" count={total}    total={total} icon="📋" colorClass="border-himalaya-blue"  bgClass="bg-himalaya-mist dark:bg-himalaya-blue/20" />
      <StatCard label="Positive"      count={positive} total={total} icon="😊" colorClass="border-emerald-500"   bgClass="bg-emerald-50 dark:bg-emerald-900/20" />
      <StatCard label="Neutral"       count={neutral}  total={total} icon="😐" colorClass="border-yellow-400"   bgClass="bg-yellow-50 dark:bg-yellow-900/20" />
      <StatCard label="Negative"      count={negative} total={total} icon="😞" colorClass="border-red-500"      bgClass="bg-red-50 dark:bg-red-900/20" />
    </div>
  );
};

export default StatsCards;
