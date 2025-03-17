import React from 'react';
import ReactDOM from 'react-dom';
import ROICalculator from './components/ROICalculator';
import './styles.css';

// This is the main entry point for the calculator
const App = () => {
  return (
    <React.StrictMode>
      <ROICalculator />
    </React.StrictMode>
  );
};

// Self-executing function to initialize the calculator
(function() {
  // Create a global init function that can be called from anywhere
  window.initROICalculator = function() {
    console.log("Manual init called");
    const container = document.getElementById('roi-calculator');
    if (container) {
      ReactDOM.render(<App />, container);
      return true;
    }
    return false;
  };

  // Main initialization function
  function initialize() {
    console.log("Initializing calculator...");
    const container = document.getElementById('roi-calculator');
    
    if (!container) {
      console.error("Calculator container not found");
      return;
    }
    
    try {
      ReactDOM.render(<App />, container);
      console.log("Calculator initialized successfully");
    } catch (err) {
      console.error("Error initializing calculator:", err);
    }
  }

  // Call the initialize function when the DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    // DOM already loaded, initialize now
    initialize();
  }
  
  // Backup initialization with delay to ensure DOM is fully loaded
  setTimeout(function() {
    const container = document.getElementById('roi-calculator');
    if (container && container.childNodes.length === 0) {
      console.log("Delayed initialization");
      initialize();
    }
  }, 1000);
})();

// Export for module usage
export default App;
