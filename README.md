# Customer Relounge ROI Calculator

A React-based ROI calculator component designed to be embedded in Webflow sites. This calculator helps potential customers understand the return on investment they can expect from using Customer Relounge services.

## Features

- Interactive calculator with form inputs and real-time calculation
- Responsive design that works on all devices
- Clean, modern UI with tooltips for guidance
- Displays key metrics: Current Monthly Revenue, Additional Annual Revenue, Return per $1 Spent, Annual ROI

## Development

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Building for Production

```
npm run build
```

This will create an optimized production build in the `dist` folder.

## Webflow Integration

### 1. Host the Bundle File

Yes, Vercel is an excellent choice for hosting your bundle file. Here's how to do it:

1. Create a new project on Vercel (sign up if needed)
2. Connect your GitHub repository or upload the `dist` folder directly
3. Once deployed, Vercel will provide you with a URL to your project (e.g., `https://your-project.vercel.app`)
4. The full URL to your bundle will be something like: `https://your-project.vercel.app/roi-calculator-bundle.js`

Other hosting options include:
- Amazon S3
- Netlify
- GitHub Pages

### 2. Add Required Scripts to Webflow

In Webflow:
1. Go to your project dashboard
2. Click on "Project Settings" in the left sidebar
3. Select "Custom Code" tab
4. In the "Head Code" section, paste the following:

```html
<!-- React and ReactDOM libraries required for the ROI calculator -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

5. Click "Save Changes"

### 3. Add the Component to Your Page

1. In the Webflow Designer, navigate to the page where you want the calculator
2. From the left panel "Add Elements", find and drag an "Embed" element to your page
3. Click on the Embed element to select it
4. In the right panel, click "Embed Code"
5. Paste the following code:

```html
<!-- ROI Calculator Container -->
<div id="roi-calculator" style="width: 100%; max-width: 800px; margin: 0 auto;"></div>

<!-- ROI Calculator Script -->
<script src="https://YOUR-VERCEL-URL/roi-calculator-bundle.js"></script>
```

6. Replace `https://YOUR-VERCEL-URL` with your actual Vercel URL (e.g., `https://your-project.vercel.app`)

The `div` is where the calculator will appear, and the `script` tag loads your React component.

### 4. Publish Your Webflow Site

Publish your Webflow site for the changes to take effect.

## Customization

### Calculator Logic

To modify the calculator's default values or calculation logic, edit `src/components/ROICalculator.js`.

### Styling

To customize the look and feel, edit `src/components/ROICalculatorStyles.js`.

## License

This project is licensed under the MIT License.