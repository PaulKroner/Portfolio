import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap 5 JavaScript

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found in the document.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
