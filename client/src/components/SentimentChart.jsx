/**
 * SentimentChart Component
 * Pie chart showing sentiment distribution using recharts
 */

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = {
  Positive: '#10b981',
  Neutral: '#f59e0b',
  Negative: '#ef4444',
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];
    return (
      <div className="bg-white dark:bg-himalaya-stone shadow-lg rounded-xl px-4 py-2 text-sm border border-gray-100 dark:border-gray-700">
        <span className="font-semibold">{name}:</span>{' '}
        <span>{value} review{value !== 1 ? 's' : ''}</span>
      </div>
    );
  }
  return null;
};

const SentimentChart = ({ results }) => {
  const counts = results.reduce(
    (acc, r) => {
      acc[r.sentiment] = (acc[r.sentiment] || 0) + 1;
      return acc;
    },
    {}
  );

  const data = Object.entries(counts).map(([name, value]) => ({ name, value }));

  if (data.length === 0) return null;

  return (
    <div className="card">
      <h3 className="text-base font-semibold text-himalaya-blue dark:text-himalaya-mist mb-4">
        Sentiment Distribution
      </h3>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={90}
            paddingAngle={3}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={COLORS[entry.name] || '#6b7280'} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType="circle"
            iconSize={10}
            formatter={(value) => (
              <span className="text-sm text-gray-600 dark:text-gray-300">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentChart;
