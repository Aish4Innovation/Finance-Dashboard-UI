import React from 'react';
import './StatCards.css';

function fmt(n) {
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const cards = (balance, income, expenses, savingsRate) => [
  { label: 'Total Balance',  value: fmt(balance),  icon: '💲', iconClass: 'icon-blue',   valueClass: '' },
  { label: 'Total Income',   value: fmt(income),   icon: '📈', iconClass: 'icon-green',  valueClass: 'val-green' },
  { label: 'Total Expenses', value: fmt(expenses), icon: '📉', iconClass: 'icon-red',    valueClass: 'val-red' },
  { label: 'Savings Rate',   value: savingsRate + '%', icon: '%', iconClass: 'icon-purple', valueClass: '' },
];

export default function StatCards({ balance, income, expenses, savingsRate }) {
  return (
    <div className="stat-cards">
      {cards(balance, income, expenses, savingsRate).map((c) => (
        <div className="stat-card" key={c.label}>
          <div className="stat-card-top">
            <span className="stat-label">{c.label}</span>
            <span className={`stat-icon ${c.iconClass}`}>{c.icon}</span>
          </div>
          <div className={`stat-value ${c.valueClass}`}>{c.value}</div>
        </div>
      ))}
    </div>
  );
}
