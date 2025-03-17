import React from 'react';
import { createRoot } from 'react-dom/client';
import ROICalculator from './components/ROICalculator';
import './styles.css';

// Finds the container in the DOM
const container = document.getElementById('roi-calculator');

// Create a root
const root = createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <ROICalculator />
  </React.StrictMode>
);
