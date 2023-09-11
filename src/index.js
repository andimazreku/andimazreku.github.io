// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';

const root = document.getElementById('root');

// Create a root for your React app using createRoot
const reactRoot = ReactDOM.createRoot(root);

// Start rendering your app within the root
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
