import React from 'react';
import ReactDOM from 'react-dom';
import ROICalculator from './components/ROICalculator';
import './styles.css';

// For older React versions (React 17 and below)
ReactDOM.render(
  <React.StrictMode>
    <ROICalculator />
  </React.StrictMode>,
  document.getElementById('roi-calculator')
);

// This makes sure the component is rendered even if the DOM isn't ready yet
document.addEventListener('DOMContentLoaded', () => {
  // Check if the container exists and hasn't been rendered to yet
  const container = document.getElementById('roi-calculator');
  if (container && !container.hasChildNodes()) {
    ReactDOM.render(
      <React.StrictMode>
        <ROICalculator />
      </React.StrictMode>,
      container
    );
  }
});
