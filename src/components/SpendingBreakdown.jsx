import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './SpendingBreakdown.css';

const COLORS = [
  '#f5c842', '#4d8df0', '#22d3a5', '#f04d4d',
  '#9b6dff', '#ff8a4d', '#e040fb', '#00bcd4', '#8bc34a'
];

export default function SpendingBreakdown({ data }) {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]);
  const chartData = entries.map(([name, value]) => ({ name, value }));

  return (
    <div className="chart-card spending-card">
      <h2 className="chart-title spending-title">Spending Breakdown</h2>
      <div className="spending-inner">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={58}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {chartData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(v) => [`$${v.toFixed(2)}`, '']}
              contentStyle={{
                background: '#1c2234',
                border: '1px solid #2e3a52',
                borderRadius: '8px',
                fontSize: '12px',
                color: '#e8edf5'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <ul className="spending-legend">
          {entries.map(([cat, val], i) => (
            <li key={cat} className="legend-item">
              <span className="legend-dot" style={{ background: COLORS[i % COLORS.length] }} />
              <span className="legend-cat">{cat}</span>
              <span className="legend-val">${val.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
