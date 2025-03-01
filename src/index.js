import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'wouter';  // Asegúrate de importar Router de wouter
import './index.css';
import App from './App';
import { Navbar } from './components/navbar/NavBar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
