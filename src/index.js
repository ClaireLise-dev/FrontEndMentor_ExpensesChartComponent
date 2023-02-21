import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Balance from '../src/components/balance/balance';
import Expenses from '../src/components/expenses/expenses'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Balance />
      <Expenses />
  </React.StrictMode>
);


