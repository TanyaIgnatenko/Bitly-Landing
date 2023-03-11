import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "@flaticon/flaticon-uicons/css/all/all.css";
import './reset.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
