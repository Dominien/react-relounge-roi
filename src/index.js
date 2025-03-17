import React from 'react';
import ReactDOM from 'react-dom';
import ROICalculator from './components/ROICalculator';
import './styles.css';

// Log info to help debug
console.log('ROI Calculator bundle loaded');
console.log('React available:', !!React);
console.log('ReactDOM available:', !!ReactDOM);
console.log('styled available:', !!window.styled);

// Simple direct rendering approach
const renderCalculator = () => {
  console.log('Attempting to render calculator');
  const container = document.getElementById('roi-calculator');
  
  if (!container) {
    console.error('ROI calculator container element not found!');
    return;
  }
  
  try {
    ReactDOM.render(
      <React.StrictMode>
        <ROICalculator />
      </React.StrictMode>,
      container
    );
    console.log('Calculator rendered successfully');
  } catch (error) {
    console.error('Error rendering calculator:', error);
  }
};

// Try different rendering strategies
// 1. Immediate render if document is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  console.log('Document already loaded, rendering immediately');
  setTimeout(renderCalculator, 0);
} else {
  // 2. Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fired, rendering calculator');
    renderCalculator();
  });
}

// 3. Backup render attempt after delay
window.setTimeout(function() {
  console.log('Backup render attempt');
  renderCalculator();
}, 500);

// 4. Expose render function globally for manual triggering if needed
window.renderROICalculator = renderCalculator;

// Export component for module usage
export default ROICalculator;
