import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AccountSummary } from './components/AccountSummary'
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
}

export default App;
