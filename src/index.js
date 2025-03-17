import React from 'react';
import ReactDOM from 'react-dom';
import ROICalculator from './components/ROICalculator';
import './styles.css';

// Make the calculator component available globally
window.ROICalculator = ROICalculator;

// Wait for DOM to be ready
function initializeCalculator() {
  console.log("Initializing ROI Calculator");
  const container = document.getElementById('roi-calculator');
  
  if (container) {
    console.log("Found container, rendering calculator");
    try {
      ReactDOM.render(
        <React.StrictMode>
          <ROICalculator />
        </React.StrictMode>,
        container
      );
      console.log("Calculator rendered successfully");
    } catch (error) {
      console.error("Error rendering calculator:", error);
    }
  } else {
    console.error("ROI calculator container not found");
  }
}

// Try to render immediately
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(initializeCalculator, 100);
} else {
  // Or wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', initializeCalculator);
}

// Fallback in case the component hasn't rendered after a delay
window.setTimeout(function() {
  const container = document.getElementById('roi-calculator');
  if (container && !container.hasChildNodes()) {
    console.log("Fallback: Re-rendering calculator");
    initializeCalculator();
  }
}, 1000);
