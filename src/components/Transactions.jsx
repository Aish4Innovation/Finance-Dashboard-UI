import React from 'react';
import './Transactions.css';

const CATEGORIES = ['all','Salary','Food & Dining','Entertainment','Freelance','Utilities','Shopping','Healthcare','Transportation','Education'];

export default function Transactions({ transactions, filter, setFilter, onDelete }) {
  const filtered = transactions.filter(t => {
    const typeOk = filter.type === 'all'
      || (filter.type === 'income' && t.amount > 0)
      || (filter.type === 'expense' && t.amount < 0);
    const catOk = filter.category === 'all' || t.category === filter.category;
    const searchOk = !filter.search
      || t.description.toLowerCase().includes(filter.search.toLowerCase())
      || t.category.toLowerCase().includes(filter.search.toLowerCase());
    return typeOk && catOk && searchOk;
  });

  return (
    <div className="tx-card">
      <div className="tx-header">
        <h2 className="tx-title">Transactions</h2>
        <div className="tx-controls">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search..."
              value={filter.search}
              onChange={e => setFilter(f => ({ ...f, search: e.target.value }))}
              className="search-input"
            />
          </div>
          <select
            className="tx-select"
            value={filter.type}
            onChange={e => setFilter(f => ({ ...f, type: e.target.value }))}
          >
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <select
            className="tx-select"
            value={filter.category}
            onChange={e => setFilter(f => ({ ...f, category: e.target.value }))}
          >
            {CATEGORIES.map(c => (
              <option key={c} value={c}>{c === 'all' ? 'All Categories' : c}</option>
            ))}
          </select>
          <button className="sort-btn">↕ Date</button>
        </div>
      </div>

      <div className="tx-table-wrap">
        <table className="tx-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th className="amount-col">Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr><td colSpan={5} className="tx-empty">No transactions found.</td></tr>
            )}
            {filtered.map(t => (
              <tr key={t.id} className="tx-row">
                <td className="tx-date">{t.date}</td>
                <td className="tx-desc">{t.description}</td>
                <td><span className="tx-cat">{t.category}</span></td>
                <td className={`tx-amount ${t.amount > 0 ? 'pos' : 'neg'}`}>
                  {t.amount > 0 ? '+' : ''}{t.amount < 0 ? '-' : ''}$
                  {Math.abs(t.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
                <td>
                  <button className="delete-btn" onClick={() => onDelete(t.id)} title="Delete">🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
