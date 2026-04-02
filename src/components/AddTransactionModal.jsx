import React, { useState } from 'react';
import './AddTransactionModal.css';

const CATEGORIES = [
  'Salary', 'Freelance', 'Food & Dining', 'Entertainment',
  'Utilities', 'Shopping', 'Healthcare', 'Transportation', 'Education', 'Other'
];

const empty = { description: '', amount: '', category: 'Food & Dining', type: 'expense' };

export default function AddTransactionModal({ onClose, onAdd }) {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState('');

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = () => {
    if (!form.description.trim()) { setError('Description is required.'); return; }
    if (!form.amount || isNaN(Number(form.amount)) || Number(form.amount) <= 0) {
      setError('Enter a valid positive amount.'); return;
    }
    const amt = form.type === 'expense' ? -Math.abs(Number(form.amount)) : Math.abs(Number(form.amount));
    onAdd({ description: form.description.trim(), amount: amt, category: form.category });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">Add Transaction</h3>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          {error && <div className="modal-error">{error}</div>}

          <div className="form-group">
            <label className="form-label">Type</label>
            <div className="type-toggle">
              <button
                className={`type-btn ${form.type === 'income' ? 'active-income' : ''}`}
                onClick={() => set('type', 'income')}
              >Income</button>
              <button
                className={`type-btn ${form.type === 'expense' ? 'active-expense' : ''}`}
                onClick={() => set('type', 'expense')}
              >Expense</button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <input
              className="form-input"
              type="text"
              placeholder="e.g. Monthly Salary"
              value={form.description}
              onChange={e => { setError(''); set('description', e.target.value); }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Amount ($)</label>
            <input
              className="form-input"
              type="number"
              placeholder="0.00"
              min="0"
              value={form.amount}
              onChange={e => { setError(''); set('amount', e.target.value); }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category</label>
            <select
              className="form-input form-select"
              value={form.category}
              onChange={e => set('category', e.target.value)}
            >
              {CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-submit" onClick={handleSubmit}>Add Transaction</button>
        </div>
      </div>
    </div>
  );
}
