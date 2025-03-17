const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'roi-calculator-bundle.js',
    // Use empty string for publicPath to make paths relative
    publicPath: ''
  },
  devServer: {
    static: [
      { directory: path.join(__dirname, 'public') },
      { directory: path.join(__dirname, 'dist') }
    ],
    hot: true,
    port: 3000
  },
  // Configure externals to use React and ReactDOM from CDN
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
    // styled-components will be bundled
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};