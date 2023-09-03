import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';

// import friends from './components/dataAll.json/friends.json';
// import data from './components/dataAll.json/data.json';
// import transactions from './components/dataAll.json/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
