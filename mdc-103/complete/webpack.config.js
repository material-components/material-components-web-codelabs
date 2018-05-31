module.exports = [
  {
    entry: './app.scss',
    output: {
      // This is necessary for webpack to compile
      // But we never use style-bundle.js
      filename: 'style-bundle.js',
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            }
          },
        ]
      }]
    },
  },
  {
    entry: "./app.js",
    output: {
      filename: "bundle.js"
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }]
    },
  }
];
