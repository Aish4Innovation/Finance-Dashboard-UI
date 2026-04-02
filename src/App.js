import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import StatCards from './components/StatCards';
import BalanceTrend from './components/BalanceTrend';
import SpendingBreakdown from './components/SpendingBreakdown';
import Transactions from './components/Transactions';
import AddTransactionModal from './components/AddTransactionModal';

const INITIAL_TRANSACTIONS = [
  { id: 1, date: 'Mar 31', description: 'Monthly Salary',       category: 'Salary',        amount: +5200.00 },
  { id: 2, date: 'Mar 30', description: 'Grocery Store',         category: 'Food & Dining', amount: -87.50  },
  { id: 3, date: 'Mar 29', description: 'Netflix Subscription',  category: 'Entertainment', amount: -15.99  },
  { id: 4, date: 'Mar 28', description: 'Freelance Project',     category: 'Freelance',     amount: +1200.00},
  { id: 5, date: 'Mar 27', description: 'Electric Bill',         category: 'Utilities',     amount: -89.99  },
  { id: 6, date: 'Mar 26', description: 'Amazon Purchase',       category: 'Shopping',      amount: -124.30 },
  { id: 7, date: 'Mar 25', description: 'Restaurant Dinner',     category: 'Food & Dining', amount: -62.00  },
  { id: 8, date: 'Mar 24', description: 'Gym Membership',        category: 'Healthcare',    amount: -49.99  },
  { id: 9, date: 'Mar 23', description: 'Uber Ride',             category: 'Transportation',amount: -22.50  },
  { id:10, date: 'Mar 22', description: 'Online Course',         category: 'Education',     amount: -79.00  },
];

const BALANCE_TREND = [
  { month: 'Oct', balance: 10200 },
  { month: 'Nov', balance: 11500 },
  { month: 'Dec', balance: 10800 },
  { month: 'Jan', balance: 12400 },
  { month: 'Feb', balance: 14100 },
  { month: 'Mar', balance: 18515.74 },
];

export default function App() {
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState({ type: 'all', category: 'all', search: '' });

  const totalIncome   = transactions.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0);
  const totalExpenses = Math.abs(transactions.filter(t => t.amount < 0).reduce((s, t) => s + t.amount, 0));
  const totalBalance  = totalIncome - totalExpenses;
  const savingsRate   = totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome * 100).toFixed(1) : '0.0';

  const spendingByCategory = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + Math.abs(t.amount);
      return acc;
    }, {});

  const addTransaction = (tx) => {
    setTransactions(prev => [{ ...tx, id: Date.now(), date: 'Apr 01' }, ...prev]);
  };

  return (
    <div className="app-layout">
      <Header onAddTransaction={() => setShowModal(true)} />
      <main className="main-content">
        <StatCards
          balance={totalBalance}
          income={totalIncome}
          expenses={totalExpenses}
          savingsRate={savingsRate}
        />
        <div className="charts-row">
          <BalanceTrend data={BALANCE_TREND} />
          <SpendingBreakdown data={spendingByCategory} />
        </div>
        <Transactions
          transactions={transactions}
          filter={filter}
          setFilter={setFilter}
          onDelete={(id) => setTransactions(prev => prev.filter(t => t.id !== id))}
        />
      </main>
      {showModal && (
        <AddTransactionModal
          onClose={() => setShowModal(false)}
          onAdd={addTransaction}
        />
      )}
    </div>
  );
}
