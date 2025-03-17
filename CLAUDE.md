# React Integration with Webflow

## Key Concepts
- React is a JavaScript library for building user interfaces
- Webflow is a visual web design platform
- Integration allows for dynamic interfaces within Webflow sites

## Common Challenges
- JS library conflicts
- CSS styling conflicts
- Handling Webflow interactions
- SEO challenges in SPAs
- Component integration
- Responsive design compatibility
- Workflow coordination
- Version compatibility

## Integration Requirements
- Paid Webflow pricing plan
- React project setup (npm, React, React-DOM)
- Webpack and Babel configuration
- Deployment solution (e.g., Amazon S3)
- Script tags in Webflow for React loading

## ROI Calculator Project Setup

### Development Commands
```
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### Webflow Integration Steps
1. Build the React project with `npm run build`
2. Upload the generated `roi-calculator-bundle.js` file to your hosting service (Amazon S3, Netlify, etc.)
3. In your Webflow project, add the following to the `<head>` section:
   ```html
   <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
   <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
   ```
4. Add the following to the page where you want the ROI calculator:
   ```html
   <div id="roi-calculator"></div>
   <script src="YOUR_HOSTED_URL/roi-calculator-bundle.js"></script>
   ```
5. Publish your Webflow site

### Component Customization
- Edit `ROICalculator.js` to modify calculator logic
- Edit `ROICalculatorStyles.js` to modify styles and appearance