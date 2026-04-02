import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';
import './BalanceTrend.css';

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <div className="ct-label">{label}</div>
        <div className="ct-value">${payload[0].value.toLocaleString()}</div>
      </div>
    );
  }
  return null;
}

export default function BalanceTrend({ data }) {
  return (
    <div className="chart-card">
      <h2 className="chart-title">Balance Trend</h2>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="balanceGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#22d3a5" stopOpacity={0.28} />
              <stop offset="95%" stopColor="#22d3a5" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#1e2538" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: '#8a96aa', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={v => `$${(v/1000).toFixed(0)}k`}
            tick={{ fill: '#8a96aa', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={44}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#22d3a5"
            strokeWidth={2.5}
            fill="url(#balanceGrad)"
            dot={{ r: 3.5, fill: '#22d3a5', strokeWidth: 0 }}
            activeDot={{ r: 5, fill: '#22d3a5' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
