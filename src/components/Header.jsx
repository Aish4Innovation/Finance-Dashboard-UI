import React from 'react';
import './Header.css';

export default function Header({ onAddTransaction }) {
  return (
    <header className="header">
      <div className="header-left">
        <span className="logo-icon">📊</span>
        <span className="logo-text">FinDash</span>
      </div>
      <div className="header-right">
        <button className="btn-add" onClick={onAddTransaction}>
          <span className="btn-plus">+</span> Add Transaction
        </button>
        <div className="role-badges">
          <span className="badge badge-admin">⚙ Admin</span>
          <span className="badge badge-viewer">👁 Viewer</span>
        </div>
      </div>
    </header>
  );
}
