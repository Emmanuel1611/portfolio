import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';  // Add .js extension
import reportWebVitals from './reportWebVitals.js';  // Add .js extension

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();